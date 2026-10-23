# Publish new Future Bytes episodes to oxenwaldt.com, unattended.
#
#   .\scripts\publish-latest-episodes.ps1           # sync, build, check, deploy, read back
#   .\scripts\publish-latest-episodes.ps1 -WhatIf   # stop before deploying
#
# Magnus, 7 Oct 2026: "We need a workflow where you continuously update with the
# latest episode." That approval covers episode pages from the Acast feed only.
# So this script refuses to deploy anything else: it must run on main, the only
# change it commits is new files under src/content/episodes, and the uncommitted
# public/aiact files (which ARE production state, see deploy.ps1) must still match
# the live site byte for byte. Any other difference stops it before deploying.
#
# Card oxw-newsletter-autopublish-20261023 widened it by one file: the LinkedIn
# article links on /newsletter (src/data/newsletter-editions.json, synced from the
# Future Bytes governance portal). Only NEW editions go out unattended; a sync
# that would change or drop an edition already live is refused and left to a
# person, and that never holds back an episode.

[CmdletBinding()]
param([switch]$WhatIf)

$ErrorActionPreference = 'Stop'
$SiteDir = Split-Path -Parent $PSScriptRoot
$RepoRoot = Split-Path -Parent $SiteDir
$LogDir = Join-Path $RepoRoot 'review\episode-autopublish'
New-Item -ItemType Directory -Force -Path $LogDir | Out-Null
$Stamp = Get-Date -Format 'yyyy-MM-dd_HHmm'
$Log = Join-Path $LogDir "$Stamp.log"
Set-Location $SiteDir

function Say($msg) { $line = "$(Get-Date -Format 'HH:mm:ss') $msg"; Write-Host $line; Add-Content -Encoding utf8 -Path $Log -Value $line }
function Stop-Run($msg) {
    Say "STOPPED: $msg"
    # A stopped run must not be silent: leave it where the next session reads first.
    Add-Content -Encoding utf8 -Path (Join-Path $RepoRoot '.moxgpt-handoff.md') -Value "`n## $(Get-Date -Format 'yyyy-MM-dd HH:mm') Oslo · episode auto-publish STOPPED`n- $msg Log: review/episode-autopublish/$Stamp.log`n"
    exit 1
}
function Note($msg) {
    # Not a stop: the run carries on, but the next session should see it.
    Say "NOTE: $msg"
    Add-Content -Encoding utf8 -Path (Join-Path $RepoRoot '.moxgpt-handoff.md') -Value "`n## $(Get-Date -Format 'yyyy-MM-dd HH:mm') Oslo · episode auto-publish note`n- $msg Log: review/episode-autopublish/$Stamp.log`n"
}

# --- preconditions ----------------------------------------------------------
$branch = (git rev-parse --abbrev-ref HEAD).Trim()
if ($branch -ne 'main') { Stop-Run "on branch '$branch', not main." }

$other = @(git status --porcelain | Where-Object { $_ -notmatch 'public/aiact/' })
if ($other.Count -gt 0) { Stop-Run "uncommitted changes outside public/aiact: $($other -join '; ')" }

# The aiact files on disk go live with every deploy, so they must equal production.
$aiact = Join-Path $SiteDir 'public\aiact\app'
foreach ($file in Get-ChildItem -Path $aiact -Recurse -File) {
    $rel = $file.FullName.Substring($aiact.Length + 1).Replace('\', '/')
    $tmp = [IO.Path]::GetTempFileName()
    try {
        Invoke-WebRequest -UseBasicParsing -TimeoutSec 60 -Uri "https://www.oxenwaldt.com/aiact/app/$rel" -OutFile $tmp
    } catch { Stop-Run "could not fetch live aiact/$rel ($($_.Exception.Message))." }
    $a = (Get-FileHash $file.FullName).Hash; $b = (Get-FileHash $tmp).Hash
    Remove-Item $tmp
    if ($a -ne $b) { Stop-Run "public/aiact/app/$rel differs from production." }
}
Say 'aiact matches production.'

# External tools write progress to stderr; Windows PowerShell 5 would turn that
# into a terminating error. Exit codes are checked explicitly from here on.
$ErrorActionPreference = 'Continue'

# --- sync -------------------------------------------------------------------
$before = @(Get-ChildItem src\content\episodes -File | ForEach-Object Name)
python scripts/sync-episodes.py | Out-Null
if ($LASTEXITCODE -ne 0) { Stop-Run 'episode sync failed.' }
$new = @(Get-ChildItem src\content\episodes -File | Where-Object { $before -notcontains $_.Name })
$changed = @(git status --porcelain -- src/content/episodes | Where-Object { $_ -notmatch '^\?\?' })
if ($changed.Count -gt 0) { git checkout -- src/content/episodes; Stop-Run "sync modified existing episodes: $($changed -join '; ')" }

# New LinkedIn editions only. A refusal (exit 3) or a failure leaves the article
# links as they are and lets the episodes go ahead.
$NewsletterData = 'src/data/newsletter-editions.json'
$nlOut = node scripts/sync-newsletter.mjs --additive 2>&1 | Out-String
$nlExit = $LASTEXITCODE
Add-Content -Encoding utf8 -Path $Log -Value $nlOut
$nlChanged = @(git status --porcelain -- $NewsletterData).Count -gt 0
# The same refusal would recur four times a day; note it once, until it changes.
$nlRefusal = Join-Path $LogDir 'newsletter-refusal.txt'
if ($nlExit -ne 0) {
    if ($nlChanged) { git checkout -- $NewsletterData }
    $nlChanged = $false
    $prev = if (Test-Path $nlRefusal) { Get-Content -Raw $nlRefusal } else { '' }
    if ($prev.Trim() -ne $nlOut.Trim()) {
        Set-Content -Encoding utf8 -Path $nlRefusal -Value $nlOut
        Note "newsletter sync exit $nlExit (3 = an edition already live would change); article links left as they are."
    } else { Say 'Newsletter sync still refused (already noted).' }
} elseif (Test-Path $nlRefusal) { Remove-Item $nlRefusal }

# Live is the source of truth: deploy whenever the newest local episode is not on
# /podcast yet, so a run whose deploy failed is repaired by the next one.
$latest = (Get-ChildItem src\content\episodes -File | ForEach-Object { [int][regex]::Match($_.Name, '^\d+').Value } | Measure-Object -Maximum).Maximum
$live = (Invoke-WebRequest -UseBasicParsing -TimeoutSec 60 -Uri "https://www.oxenwaldt.com/podcast/?v=$Stamp").Content
if ($new.Count -eq 0 -and -not $nlChanged -and $live -match "#$latest") { Say "Up to date: #$latest is live."; exit 0 }
if ($new.Count -gt 0) { Say "New: $($new.Name -join ', ')" } elseif (-not $nlChanged) { Say "#$latest is committed but not live; deploying." }
if ($nlChanged) { Say 'New newsletter article links.' }

# --- build and check --------------------------------------------------------
npm run build *> (Join-Path $LogDir "$Stamp-build.log")
if ($LASTEXITCODE -ne 0) { Stop-Run 'build failed; new episode files and article links left uncommitted.' }
npm run apps:check-links *>> $Log
if ($LASTEXITCODE -ne 0) { Stop-Run 'broken links; new episode files and article links left uncommitted.' }

$paths = @($new | ForEach-Object { "src/content/episodes/$($_.Name)" })
$what = @()
if ($new.Count -gt 0) { $what += "Episodes: $($new.Name -join ', ') (auto-publish from Acast)" }
if ($nlChanged) { $paths += $NewsletterData; $what += 'Newsletter: new LinkedIn article links (auto-publish from Future Bytes)' }
if ($paths.Count -gt 0) {
    git add -- $paths
    git commit -q -m ($what -join '; ') | Out-Null
    Say "Committed $((git rev-parse --short HEAD).Trim())."
}

if ($WhatIf) { Say '-WhatIf: built, checked and committed; not deployed.'; exit 0 }

# --- deploy (the CLI answers "Not authorized" on its first call now and then) --
# Pinned CLI, and each attempt is killed (whole process tree) after 5 minutes:
# with no TTY an expired token makes the CLI wait on an interactive login
# instead of failing, which on 14 Oct hung three runs until the task limit.
$VercelCli = 'vercel@48.10.0'
$AttemptTimeoutMs = 300000
$ok = $false
foreach ($try in 1..3) {
    $tmp = [System.IO.Path]::GetTempFileName()
    $p = Start-Process -FilePath 'cmd.exe' -ArgumentList '/c', "npx $VercelCli --prod --yes > `"$tmp`" 2>&1 < NUL" `
        -WorkingDirectory $PSScriptRoot\.. -NoNewWindow -PassThru
    $null = $p.Handle  # without this, ExitCode reads empty after WaitForExit
    $exited = $p.WaitForExit($AttemptTimeoutMs)
    if (-not $exited) { & taskkill /PID $p.Id /T /F 2>&1 | Out-Null }
    $out = Get-Content -Raw -ErrorAction SilentlyContinue $tmp; Remove-Item $tmp -ErrorAction SilentlyContinue
    Add-Content -Encoding utf8 -Path $Log -Value $out
    if (-not $exited) { Say "deploy attempt $try timed out after $($AttemptTimeoutMs / 60000) min (check Vercel CLI login); killed." }
    elseif ($p.ExitCode -eq 0 -and $out -notmatch '"status":\s*"error"') { $ok = $true; break }
    else { Say "deploy attempt $try failed (exit $($p.ExitCode)); retrying." }
    Start-Sleep -Seconds 20
}
if (-not $ok) { Stop-Run 'deploy failed three times.' }

# --- read back --------------------------------------------------------------
# The edge cache takes a minute or two to turn over.
# The newsletter page is static, so the live bytes must equal the build.
$builtNewsletter = (Get-FileHash 'dist\newsletter\index.html').Hash
$seen = $false
foreach ($i in 1..12) {
    Start-Sleep -Seconds 15
    $page = (Invoke-WebRequest -UseBasicParsing -TimeoutSec 60 -Uri "https://www.oxenwaldt.com/podcast/?v=$Stamp$i").Content
    $nlLive = $true
    if ($nlChanged) {
        $tmp = [IO.Path]::GetTempFileName()
        Invoke-WebRequest -UseBasicParsing -TimeoutSec 60 -Uri "https://www.oxenwaldt.com/newsletter/?v=$Stamp$i" -OutFile $tmp
        $nlLive = (Get-FileHash $tmp).Hash -eq $builtNewsletter
        Remove-Item $tmp
    }
    if ($page -match "#$latest" -and $nlLive) { $seen = $true; break }
}
if (-not $seen) { Stop-Run "deployed, but /podcast does not show #$latest or /newsletter does not match the build after 3 minutes." }
Say "LIVE: #$latest on https://www.oxenwaldt.com/podcast/"
if ($nlChanged) { Say 'LIVE: new article links on https://www.oxenwaldt.com/newsletter/' }

Add-Content -Path (Join-Path $RepoRoot '.moxgpt-handoff.md') -Value @"

## $(Get-Date -Format 'yyyy-MM-dd HH:mm') Oslo · episode auto-publish
- Published up to #$latest from Acast to oxenwaldt.com (commit $((git rev-parse --short HEAD).Trim())), read back on /podcast$(if ($nlChanged) { '; new newsletter article links read back on /newsletter' }). Log: review/episode-autopublish/$Stamp.log
"@
exit 0

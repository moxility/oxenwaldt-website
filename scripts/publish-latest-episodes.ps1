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
function Stop-Run($msg) { Say "STOPPED: $msg"; exit 1 }

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
# Live is the source of truth: deploy whenever the newest local episode is not on
# /podcast yet, so a run whose deploy failed is repaired by the next one.
$latest = (Get-ChildItem src\content\episodes -File | ForEach-Object { [int][regex]::Match($_.Name, '^\d+').Value } | Measure-Object -Maximum).Maximum
$live = (Invoke-WebRequest -UseBasicParsing -TimeoutSec 60 -Uri "https://www.oxenwaldt.com/podcast/?v=$Stamp").Content
if ($new.Count -eq 0 -and $live -match "#$latest") { Say "Up to date: #$latest is live."; exit 0 }
if ($new.Count -gt 0) { Say "New: $($new.Name -join ', ')" } else { Say "#$latest is committed but not live; deploying." }

# --- build and check --------------------------------------------------------
npm run build *> (Join-Path $LogDir "$Stamp-build.log")
if ($LASTEXITCODE -ne 0) { Stop-Run 'build failed; new episode files left uncommitted.' }
npm run apps:check-links *>> $Log
if ($LASTEXITCODE -ne 0) { Stop-Run 'broken links; new episode files left uncommitted.' }

if ($new.Count -gt 0) {
    git add -- ($new | ForEach-Object { "src/content/episodes/$($_.Name)" })
    git commit -q -m "Episodes: $($new.Name -join ', ') (auto-publish from Acast)" | Out-Null
    Say "Committed $((git rev-parse --short HEAD).Trim())."
}

if ($WhatIf) { Say '-WhatIf: built, checked and committed; not deployed.'; exit 0 }

# --- deploy (the CLI answers "Not authorized" on its first call now and then) --
$ok = $false
foreach ($try in 1..3) {
    $out = npx vercel@latest --prod --yes 2>&1 | Out-String
    Add-Content -Encoding utf8 -Path $Log -Value $out
    if ($LASTEXITCODE -eq 0 -and $out -notmatch '"status":\s*"error"') { $ok = $true; break }
    Say "deploy attempt $try failed; retrying."
    Start-Sleep -Seconds 20
}
if (-not $ok) { Stop-Run 'deploy failed three times.' }

# --- read back --------------------------------------------------------------
# The edge cache takes a minute or two to turn over.
$seen = $false
foreach ($i in 1..12) {
    Start-Sleep -Seconds 15
    $page = (Invoke-WebRequest -UseBasicParsing -TimeoutSec 60 -Uri "https://www.oxenwaldt.com/podcast/?v=$Stamp$i").Content
    if ($page -match "#$latest") { $seen = $true; break }
}
if (-not $seen) { Stop-Run "deployed, but /podcast still does not show #$latest after 3 minutes." }
Say "LIVE: #$latest on https://www.oxenwaldt.com/podcast/"

Add-Content -Path (Join-Path $RepoRoot '.moxgpt-handoff.md') -Value @"

## $(Get-Date -Format 'yyyy-MM-dd HH:mm') Oslo · episode auto-publish
- Published up to #$latest from Acast to oxenwaldt.com (commit $((git rev-parse --short HEAD).Trim())), read back on /podcast. Log: review/episode-autopublish/$Stamp.log
"@
exit 0

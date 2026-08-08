# Deploy oxenwaldt.com to production.
#
#   .\scripts\deploy.ps1            # check, build, deploy
#   .\scripts\deploy.ps1 -SkipChecks
#   .\scripts\deploy.ps1 -WhatIf    # build and check only, never deploys
#
# THE THING TO KNOW: `vercel --prod` uploads the WORKING TREE, not HEAD, and this
# repo is not connected to GitHub — pushing to main deploys nothing. So whatever
# is on disk right now is what goes live, committed or not. That is why this
# script warns on a dirty tree instead of silently shipping it.

[CmdletBinding()]
param(
    [switch]$SkipChecks,
    [switch]$WhatIf
)

$ErrorActionPreference = 'Stop'
$SiteDir = Split-Path -Parent $PSScriptRoot
Set-Location $SiteDir

function Fail($msg) { Write-Host $msg -ForegroundColor Red; exit 1 }

# --- what is actually about to ship -----------------------------------------
$dirty = @(git status --porcelain)
if ($dirty.Count -gt 0) {
    Write-Host ""
    Write-Host "$($dirty.Count) uncommitted change(s) — these WILL go live:" -ForegroundColor Yellow
    $dirty | Select-Object -First 15 | ForEach-Object { Write-Host "   $_" -ForegroundColor DarkYellow }
    if ($dirty.Count -gt 15) { Write-Host "   ... and $($dirty.Count - 15) more" -ForegroundColor DarkYellow }
    Write-Host "   Commit first if you want git to record what is in production." -ForegroundColor DarkYellow
    Write-Host ""
} else {
    Write-Host "Working tree clean — production will match HEAD." -ForegroundColor Green
}

# --- build ------------------------------------------------------------------
Write-Host "Building..." -ForegroundColor Cyan
npm run build
if ($LASTEXITCODE -ne 0) { Fail "Build failed. Nothing deployed." }

# --- checks -----------------------------------------------------------------
if (-not $SkipChecks) {
    Write-Host "Checking internal links..." -ForegroundColor Cyan
    npm run apps:check-links
    if ($LASTEXITCODE -ne 0) { Fail "Broken links. Fix them or re-run with -SkipChecks." }

    Write-Host "Checking App Store links..." -ForegroundColor Cyan
    npm run apps:check-store
    if ($LASTEXITCODE -ne 0) { Fail "App Store link flags are out of date. Fix them or re-run with -SkipChecks." }
}

if ($WhatIf) {
    Write-Host ""
    Write-Host "-WhatIf: built and checked, nothing deployed." -ForegroundColor Green
    exit 0
}

# --- deploy -----------------------------------------------------------------
Write-Host "Deploying to production..." -ForegroundColor Cyan
npx vercel@latest --prod --yes
if ($LASTEXITCODE -ne 0) { Fail "Deployment failed." }

Write-Host ""
Write-Host "Live at https://www.oxenwaldt.com" -ForegroundColor Green
Write-Host "Consider: python scripts/indexnow-submit.py   (ping search engines)" -ForegroundColor DarkGray

# Add New Speaking Appearance Script
# Usage: .\add-speaking.ps1 -Title "Talk Title" -Event "Conference Name" -Location "City, Country" -Date "2025-12-15" -Description "Description"

param(
    [Parameter(Mandatory=$true)]
    [string]$Title,

    [Parameter(Mandatory=$true)]
    [string]$Event,

    [Parameter(Mandatory=$true)]
    [string]$Location,

    [Parameter(Mandatory=$true)]
    [string]$Date,

    [Parameter(Mandatory=$true)]
    [string]$Description,

    [string]$EventUrl = "",
    [string]$SlidesUrl = "",
    [string]$VideoUrl = "",
    [string[]]$Tags = @(),
    [switch]$Featured
)

$SiteDir = Split-Path -Parent $PSScriptRoot
$SpeakingDir = Join-Path $SiteDir "src\content\speaking"

# Parse date
$DateObj = [DateTime]::Parse($Date)
$DateFormatted = $DateObj.ToString("yyyy-MM-dd")

# Create filename (e.g., 2025-12-event-name.md)
$SafeEvent = $Event.ToLower() -replace '[^a-z0-9\s-]', '' -replace '\s+', '-' -replace '-+', '-'
$SafeEvent = $SafeEvent.Substring(0, [Math]::Min(40, $SafeEvent.Length)).TrimEnd('-')
$Filename = "$DateFormatted-$SafeEvent.md"
$FilePath = Join-Path $SpeakingDir $Filename

# Build tags string
if ($Tags.Count -eq 0) {
    $TagsStr = '["Speaking"]'
} else {
    $TagsStr = '["' + ($Tags -join '", "') + '"]'
}

# Build optional URL lines
$OptionalLines = ""
if ($EventUrl -ne "") {
    $OptionalLines += "eventUrl: `"$EventUrl`"`n"
}
if ($SlidesUrl -ne "") {
    $OptionalLines += "slidesUrl: `"$SlidesUrl`"`n"
}
if ($VideoUrl -ne "") {
    $OptionalLines += "videoUrl: `"$VideoUrl`"`n"
}

# Featured flag
$FeaturedStr = if ($Featured) { "true" } else { "false" }

# Create markdown content
$Content = @"
---
title: "$Title"
event: "$Event"
location: "$Location"
date: $DateFormatted
description: "$Description"
$($OptionalLines)tags: $TagsStr
featured: $FeaturedStr
---

$Description
"@

# Write file
$Content | Out-File -FilePath $FilePath -Encoding utf8

Write-Host "Created speaking event file: $FilePath" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Review the file at: $FilePath"
Write-Host "2. Add any additional details to the markdown body"
Write-Host "3. Run 'npm run build' in the site directory"
Write-Host "4. Run 'npx vercel --prod' to deploy"

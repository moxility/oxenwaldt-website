# Add New Podcast Episode Script
# Usage: .\add-episode.ps1 -EpisodeNumber 29 -Title "Episode Title" -Description "Description" -Duration "8 min"

param(
    [Parameter(Mandatory=$true)]
    [int]$EpisodeNumber,

    [Parameter(Mandatory=$true)]
    [string]$Title,

    [Parameter(Mandatory=$true)]
    [string]$Description,

    [Parameter(Mandatory=$true)]
    [string]$Duration,

    [string]$SpotifyUrl = "https://open.spotify.com/show/2dUyQaG5wFvCPBkB2ErHKe",

    [string]$Guest = "",

    [string[]]$Tags = @()
)

$SiteDir = Split-Path -Parent $PSScriptRoot
$EpisodesDir = Join-Path $SiteDir "src\content\episodes"

# Format episode number with leading zeros
$EpisodeNumFormatted = $EpisodeNumber.ToString("000")

# Get today's date
$PubDate = Get-Date -Format "yyyy-MM-dd"

# Create filename (e.g., 029-episode-title.md)
$SafeTitle = $Title.ToLower() -replace '[^a-z0-9\s-]', '' -replace '\s+', '-' -replace '-+', '-'
$SafeTitle = $SafeTitle.Substring(0, [Math]::Min(40, $SafeTitle.Length)).TrimEnd('-')
$Filename = "$EpisodeNumFormatted-$SafeTitle.md"
$FilePath = Join-Path $EpisodesDir $Filename

# Build tags string
if ($Tags.Count -eq 0) {
    $TagsStr = '["AI News"]'
} else {
    $TagsStr = '["' + ($Tags -join '", "') + '"]'
}

# Build guest line if provided
$GuestLine = ""
if ($Guest -ne "") {
    $GuestLine = "guest: `"$Guest`"`n"
}

# Create markdown content
$Content = @"
---
episodeNumber: $EpisodeNumber
title: "$Title"
description: "$Description"
pubDate: $PubDate
duration: "$Duration"
spotifyUrl: "$SpotifyUrl"
$GuestLine tags: $TagsStr
---

$Description
"@

# Write file
$Content | Out-File -FilePath $FilePath -Encoding utf8

Write-Host "Created episode file: $FilePath" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Review the file at: $FilePath"
Write-Host "2. Run 'npm run build' in the site directory"
Write-Host "3. Run 'npx vercel --prod' to deploy"

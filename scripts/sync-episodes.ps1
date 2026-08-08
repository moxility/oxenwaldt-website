# Sync Podcast Episodes from RSS Feed
# This script fetches all episodes from the Acast RSS feed and creates/updates markdown files

param(
    [switch]$Force  # Force overwrite existing files
)

$SiteRoot = Split-Path -Parent (Split-Path -Parent $PSScriptRoot)
$EpisodesDir = Join-Path $SiteRoot "site\src\content\episodes"
$RssFeedUrl = "https://feeds.acast.com/public/shows/6710bd164114798e63e10fe5"

Write-Host "Fetching episodes from RSS feed..." -ForegroundColor Cyan

try {
    [xml]$rss = (Invoke-WebRequest -Uri $RssFeedUrl -UseBasicParsing).Content
} catch {
    Write-Host "Error fetching RSS feed: $_" -ForegroundColor Red
    exit 1
}

$episodes = $rss.rss.channel.item
Write-Host "Found $($episodes.Count) episodes in feed" -ForegroundColor Green

$created = 0
$skipped = 0
$updated = 0

foreach ($episode in $episodes) {
    # Parse episode number from title (e.g., "#028: AI news...")
    $title = $episode.title
    $episodeNumber = 0

    if ($title -match '#(\d+)') {
        $episodeNumber = [int]$Matches[1]
    } else {
        Write-Host "Could not parse episode number from: $title" -ForegroundColor Yellow
        continue
    }

    # Parse date
    $pubDate = [DateTime]::Parse($episode.pubDate)
    $dateFormatted = $pubDate.ToString("yyyy-MM-dd")

    # Parse duration (format: HH:MM:SS or MM:SS)
    $durationRaw = $episode.duration
    if ($durationRaw) {
        $parts = $durationRaw -split ':'
        if ($parts.Count -eq 3) {
            $hours = [int]$parts[0]
            $mins = [int]$parts[1]
            if ($hours -gt 0) {
                $duration = "$hours hr $mins min"
            } else {
                $duration = "$mins min"
            }
        } elseif ($parts.Count -eq 2) {
            $mins = [int]$parts[0]
            $duration = "$mins min"
        } else {
            $duration = $durationRaw
        }
    } else {
        $duration = "Unknown"
    }

    # Clean title (remove episode number prefix)
    $cleanTitle = $title -replace '^#\d+:\s*', ''

    # Get description
    $description = $episode.description -replace '<[^>]+>', '' # Strip HTML
    $description = $description.Trim()
    if ($description.Length -gt 300) {
        $description = $description.Substring(0, 297) + "..."
    }

    # Detect if it's a guest episode
    $guest = ""
    if ($cleanTitle -match 'with\s+(special\s+)?guest\s+(.+)$') {
        $guest = $Matches[2].Trim()
    } elseif ($cleanTitle -match 'with\s+(.+)$' -and $cleanTitle -notmatch 'news') {
        $guest = $Matches[1].Trim()
    }

    # Generate tags based on content
    $tags = @()
    if ($cleanTitle -match 'news') { $tags += "AI News" }
    if ($guest) { $tags += "Interview" }
    if ($cleanTitle -match 'retail') { $tags += "Retail" }
    if ($cleanTitle -match 'manufacturing') { $tags += "Manufacturing" }
    if ($cleanTitle -match 'transform') { $tags += "Transformation" }
    if ($cleanTitle -match 'data') { $tags += "Data" }
    if ($cleanTitle -match 'leadership') { $tags += "Leadership" }
    if ($tags.Count -eq 0) { $tags += "AI" }

    $tagsStr = '["' + ($tags -join '", "') + '"]'

    # Create filename
    $EpisodeNumFormatted = $episodeNumber.ToString("000")
    $SafeTitle = $cleanTitle.ToLower() -replace '[^a-z0-9\s-]', '' -replace '\s+', '-' -replace '-+', '-'
    $SafeTitle = $SafeTitle.Substring(0, [Math]::Min(40, $SafeTitle.Length)).TrimEnd('-')
    $Filename = "$EpisodeNumFormatted-$SafeTitle.md"
    $FilePath = Join-Path $EpisodesDir $Filename

    # Check if file exists
    if ((Test-Path $FilePath) -and -not $Force) {
        $skipped++
        continue
    }

    # Build guest line if applicable
    $GuestLine = ""
    if ($guest) {
        $GuestLine = "guest: `"$guest`"`n"
    }

    # Get episode-specific Spotify URL if available (fallback to show URL)
    $spotifyUrl = "https://open.spotify.com/show/2dUyQaG5wFvCPBkB2ErHKe"

    # Create markdown content
    $Content = @"
---
episodeNumber: $episodeNumber
title: "$cleanTitle"
description: "$($description -replace '"', '\"')"
pubDate: $dateFormatted
duration: "$duration"
spotifyUrl: "$spotifyUrl"
appleUrl: "https://podcasts.apple.com/no/podcast/future-bytes/id1784685801"
$($GuestLine)tags: $tagsStr
---

$description
"@

    # Write file
    $Content | Out-File -FilePath $FilePath -Encoding utf8

    if ((Test-Path $FilePath)) {
        $created++
        Write-Host "  Created: Episode #$episodeNumber - $cleanTitle" -ForegroundColor Green
    }
}

Write-Host ""
Write-Host "Summary:" -ForegroundColor Cyan
Write-Host "  Created: $created episodes" -ForegroundColor Green
Write-Host "  Skipped: $skipped episodes (already exist, use -Force to overwrite)" -ForegroundColor Yellow
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Review the episode files in: $EpisodesDir"
Write-Host "2. Run 'npm run build' in the site directory"
Write-Host "3. Run 'npx vercel --prod' to deploy"

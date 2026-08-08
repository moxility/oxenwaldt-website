# Content Update Guide

This guide explains how to update the oxenwaldt.com site with new podcast episodes and speaking appearances.

## Quick Reference

| Task | Command |
|------|---------|
| Sync all episodes from RSS | `python scripts\sync-episodes.py` |
| Add single episode manually | `.\scripts\add-episode.ps1` |
| Add speaking event | `.\scripts\add-speaking.ps1` |
| Deploy changes | `.\scripts\deploy.ps1` |

## Syncing Podcast Episodes from RSS Feed (Recommended)

The easiest way to update episodes is to sync from the Acast RSS feed. This automatically fetches all episode information including title, description, duration, and date.

```powershell
cd C:\Users\MAOX\source\repos\oxenwaldt-site-redesign-20251114-082438

# Sync new episodes only (skips existing)
python scripts\sync-episodes.py

# Force overwrite all episodes
python scripts\sync-episodes.py --force
```

**RSS Feed URL**: `https://feeds.acast.com/public/shows/6710bd164114798e63e10fe5`

This pulls from the official Future Bytes podcast feed and creates markdown files automatically.

## Adding New Podcast Episodes Manually

### Using the Script

```powershell
cd C:\Users\MAOX\source\repos\oxenwaldt-site-redesign-20251114-082438

.\scripts\add-episode.ps1 `
    -EpisodeNumber 29 `
    -Title "AI news for business - week 51" `
    -Description "This week's AI developments..." `
    -Duration "7 min" `
    -Tags @("AI News", "OpenAI", "Google")
```

### With a Guest

```powershell
.\scripts\add-episode.ps1 `
    -EpisodeNumber 30 `
    -Title "Interview with Industry Leader" `
    -Description "We discuss AI strategy..." `
    -Duration "45 min" `
    -Guest "John Smith" `
    -Tags @("Interview", "AI Strategy", "Enterprise")
```

### Manual Creation

Create a new file in `site/src/content/episodes/` with this format:

```markdown
---
episodeNumber: 29
title: "Episode Title"
description: "Episode description..."
pubDate: 2025-12-16
duration: "8 min"
spotifyUrl: "https://open.spotify.com/show/2dUyQaG5wFvCPBkB2ErHKe"
guest: "Guest Name"  # Optional
tags: ["AI News", "Topic"]
---

Episode description and show notes...
```

## Adding Speaking Appearances

### Using the Script

```powershell
.\scripts\add-speaking.ps1 `
    -Title "AI Strategy for Enterprise" `
    -Event "Tech Conference 2025" `
    -Location "Copenhagen, Denmark" `
    -Date "2025-12-15" `
    -Description "Presentation on AI adoption..." `
    -Tags @("AI Strategy", "Enterprise") `
    -Featured
```

### With Links

```powershell
.\scripts\add-speaking.ps1 `
    -Title "Digital Transformation" `
    -Event "Nordic Business Forum" `
    -Location "Helsinki, Finland" `
    -Date "2025-12-20" `
    -Description "Keynote on transformation..." `
    -EventUrl "https://event-website.com" `
    -SlidesUrl "https://slides.com/presentation" `
    -VideoUrl "https://youtube.com/watch" `
    -Tags @("Keynote", "Digital Transformation")
```

### Manual Creation

Create a new file in `site/src/content/speaking/` with this format:

```markdown
---
title: "Talk Title"
event: "Event Name"
location: "City, Country"
date: 2025-12-15
description: "What the talk was about..."
eventUrl: "https://event-website.com"  # Optional
slidesUrl: "https://slides.com"  # Optional
videoUrl: "https://youtube.com"  # Optional
tags: ["AI Strategy", "Topic"]
featured: true  # Set to true for highlighted events
---

Additional details about the talk...
```

## Deploying Changes

After adding new content:

```powershell
# Option 1: Use the deploy script
.\scripts\deploy.ps1

# Option 2: Manual steps
cd site
npm run build
npx vercel --prod
```

## File Structure

```
site/src/content/
├── blog/           # Blog posts
├── episodes/       # Podcast episodes
│   ├── 017-ai-news-week-40.md
│   ├── 018-ai-news-week-41.md
│   └── ...
└── speaking/       # Speaking appearances
    ├── 2025-09-finnish-embassy.md
    └── ...
```

## Content Schema

### Episode Fields

| Field | Required | Description |
|-------|----------|-------------|
| episodeNumber | Yes | Episode number (integer) |
| title | Yes | Episode title |
| description | Yes | Short description |
| pubDate | Yes | Publication date (YYYY-MM-DD) |
| duration | Yes | Duration (e.g., "7 min") |
| spotifyUrl | No | Link to Spotify episode |
| appleUrl | No | Link to Apple Podcasts |
| guest | No | Guest name if applicable |
| tags | No | Array of topic tags |

### Speaking Fields

| Field | Required | Description |
|-------|----------|-------------|
| title | Yes | Talk title |
| event | Yes | Event/conference name |
| location | Yes | City, Country |
| date | Yes | Event date (YYYY-MM-DD) |
| description | Yes | Talk description |
| eventUrl | No | Event website URL |
| slidesUrl | No | Slides URL |
| videoUrl | No | Recording URL |
| tags | No | Array of topic tags |
| featured | No | Highlight this event (true/false) |

## Tips

1. **Episode Numbering**: Keep episode numbers sequential. Check the latest episode number before adding new ones.

2. **Dates**: Use YYYY-MM-DD format for all dates.

3. **Tags**: Use consistent tags across episodes for better organization. Common tags:
   - AI News
   - AI Strategy
   - Digital Transformation
   - Interview
   - Enterprise

4. **Featured Events**: Only mark truly significant speaking events as featured.

5. **Preview Changes**: Run `npm run dev` in the site directory to preview changes locally before deploying.

#!/usr/bin/env python3
"""
Sync Podcast Episodes from RSS Feed

This script fetches all episodes from the Acast RSS feed and creates/updates markdown files.

Usage:
    npm run episodes:sync --           # Only create new episodes
    npm run episodes:sync -- --force   # Rewrite every episode from the feed
    npm run episodes:sync -- --force --prune   # ...and delete files left behind
                                              # when an episode's filename changes
"""

import html
import urllib.request
import xml.etree.ElementTree as ET
import re
import os
import sys
from collections import defaultdict
from datetime import datetime
from pathlib import Path

# Configuration
RSS_FEED_URL = 'https://feeds.acast.com/public/shows/6710bd164114798e63e10fe5'
SPOTIFY_URL = 'https://open.spotify.com/show/2dUyQaG5wFvCPBkB2ErHKe'
APPLE_URL = 'https://podcasts.apple.com/no/podcast/future-bytes/id1784685801'

# Get script directory and calculate episodes directory
SCRIPT_DIR = Path(__file__).parent
SITE_ROOT = SCRIPT_DIR.parent
EPISODES_DIR = SITE_ROOT / 'src' / 'content' / 'episodes'


def fetch_rss_feed():
    """Fetch and parse the RSS feed."""
    print(f"Fetching episodes from RSS feed...")
    response = urllib.request.urlopen(RSS_FEED_URL)
    xml_data = response.read()
    return ET.fromstring(xml_data)


def clean_description(raw):
    """Turn Acast's HTML show notes into one clean paragraph.

    Stripping tags with a bare re.sub glues block elements together — the feed's
    "...is over.</p><p>Top stories for week 18:" became "is over.Top stories",
    which is what shipped for every episode before 2026-08-08. Close every block
    tag to a space, then collapse. Entities are unescaped too, so descriptions
    stop showing a literal &nbsp;.
    """
    if not raw:
        return ''
    text = re.sub(r'<br\s*/?>|</(p|div|li|h[1-6])>', ' ', raw, flags=re.I)
    text = re.sub(r'<[^>]+>', '', text)
    text = html.unescape(text)
    text = text.replace('\xa0', ' ')
    text = re.sub(r'\s+', ' ', text).strip()

    if len(text) > 300:
        # Cut on a word boundary rather than mid-word.
        cut = text[:297]
        if ' ' in cut:
            cut = cut[: cut.rfind(' ')]
        text = cut.rstrip(' ,;:—-') + '...'
    return text


def parse_episode(item):
    """Parse episode data from an RSS item."""
    title = item.find('title').text if item.find('title') is not None else ''

    if not title:
        return None

    # Parse episode number from title
    match = re.search(r'#(\d+)', title)
    if not match:
        print(f"  Skipping (no episode number): {title[:50]}...")
        return None

    ep_num = int(match.group(1))

    # Get description
    desc_elem = item.find('description')
    description = clean_description(desc_elem.text if desc_elem is not None else '')

    # Parse date — Acast emits RFC 822: "Tue, 22 Apr 2025 14:30:00 GMT" or with +0000
    pubdate_elem = item.find('pubDate')
    pubdate_str = (pubdate_elem.text or '').strip() if pubdate_elem is not None else ''
    date_fmt = ''
    for fmt in (
        '%a, %d %b %Y %H:%M:%S %z',
        '%a, %d %b %Y %H:%M:%S GMT',
        '%a, %d %b %Y %H:%M:%S %Z',
        '%a, %d %b %Y %H:%M %z',
    ):
        try:
            dt = datetime.strptime(pubdate_str, fmt)
            date_fmt = dt.strftime('%Y-%m-%d')
            break
        except (ValueError, TypeError):
            continue
    if not date_fmt:
        # email.utils handles RFC 2822 robustly across timezone strings
        try:
            from email.utils import parsedate_to_datetime
            dt = parsedate_to_datetime(pubdate_str)
            date_fmt = dt.strftime('%Y-%m-%d')
        except Exception:
            print(f"  WARN: could not parse date {pubdate_str!r} for {title[:40]}")
            date_fmt = '1970-01-01'

    # Parse duration
    ns = {'itunes': 'http://www.itunes.com/dtds/podcast-1.0.dtd'}
    duration_elem = item.find('itunes:duration', ns)
    duration = duration_elem.text if duration_elem is not None else ''

    if duration:
        parts = duration.split(':')
        if len(parts) == 3:
            h, m, s = int(parts[0]), int(parts[1]), int(parts[2])
            duration = f'{h} hr {m} min' if h > 0 else f'{m} min'
        elif len(parts) == 2:
            m, s = int(parts[0]), int(parts[1])
            duration = f'{m} min'

    # Clean title (remove episode number prefix).
    # The colon is OPTIONAL — Acast writes both "#050: Future Bytes with..." and
    # "#068 AI News for business - week 32". Requiring it left the number in the
    # title, which produced filenames like 052-052-ai-news-... and a page heading
    # that printed the episode number twice.
    clean_title = re.sub(r'^#\s*\d+\s*[:\-–]?\s*', '', title).strip()

    # Detect guest
    guest = ''
    guest_match = re.search(r'with\s+(?:special\s+)?guest\s+(.+?)$', clean_title, re.IGNORECASE)
    if guest_match:
        guest = guest_match.group(1).strip()

    # Generate tags
    tags = []
    title_lower = clean_title.lower()
    if 'news' in title_lower:
        tags.append('AI News')
    if guest:
        tags.append('Interview')
    if 'retail' in title_lower:
        tags.append('Retail')
    if 'manufacturing' in title_lower:
        tags.append('Manufacturing')
    if 'transform' in title_lower:
        tags.append('Transformation')
    if 'leadership' in title_lower:
        tags.append('Leadership')
    if 'data' in title_lower:
        tags.append('Data')
    if not tags:
        tags.append('AI')

    return {
        'episode_number': ep_num,
        'title': clean_title,
        'description': description,
        'date': date_fmt,
        'duration': duration,
        'guest': guest,
        'tags': tags
    }


def generate_filename(episode):
    """Generate markdown filename for an episode."""
    safe_title = re.sub(r'[^a-z0-9\s-]', '', episode['title'].lower())
    safe_title = re.sub(r'\s+', '-', safe_title)
    safe_title = re.sub(r'-+', '-', safe_title)[:40].rstrip('-')
    return f"{episode['episode_number']:03d}-{safe_title}.md"


def generate_content(episode):
    """Generate markdown content for an episode."""
    guest_line = f'guest: "{episode["guest"]}"\n' if episode['guest'] else ''
    tags_str = '["' + '", "'.join(episode['tags']) + '"]'

    return f'''---
episodeNumber: {episode['episode_number']}
title: "{episode['title']}"
description: "{episode['description'].replace('"', "'")}"
pubDate: {episode['date']}
duration: "{episode['duration']}"
spotifyUrl: "{SPOTIFY_URL}"
appleUrl: "{APPLE_URL}"
{guest_line}tags: {tags_str}
---

{episode['description']}
'''


def existing_files_by_number():
    """Map episode number -> the files on disk that claim it."""
    by_num = defaultdict(list)
    for path in EPISODES_DIR.glob('*.md'):
        m = re.search(r'^episodeNumber:\s*(\d+)', path.read_text(encoding='utf-8'), re.M)
        if m:
            by_num[int(m.group(1))].append(path)
    return by_num


def sync_episodes(force=False, prune=False):
    """Main sync function."""
    root = fetch_rss_feed()
    items = root.findall('.//item')
    print(f"Found {len(items)} episodes in feed\n")

    before = existing_files_by_number()
    created = updated = skipped = 0
    written_paths = set()
    seen_numbers = {}

    for item in items:
        episode = parse_episode(item)
        if not episode:
            continue

        num = episode['episode_number']
        if num in seen_numbers:
            print(f"  WARN: episode #{num} appears twice in the feed "
                  f"({seen_numbers[num][:40]!r} and {episode['title'][:40]!r})")
        seen_numbers[num] = episode['title']

        filename = generate_filename(episode)
        filepath = EPISODES_DIR / filename
        existed = filepath.exists()

        if existed and not force:
            skipped += 1
            written_paths.add(filepath)
            continue

        content = generate_content(episode)
        if existed and filepath.read_text(encoding='utf-8') == content:
            skipped += 1
            written_paths.add(filepath)
            continue

        filepath.write_text(content, encoding='utf-8')
        written_paths.add(filepath)
        if existed:
            updated += 1
        else:
            created += 1
            print(f"  Created: #{num} - {episode['title'][:50]}")

    # A changed title changes the filename, which would otherwise leave the old
    # file behind and render the episode twice on the site.
    stale = []
    for num, paths in before.items():
        if num not in seen_numbers:
            continue
        for path in paths:
            if path not in written_paths:
                stale.append(path)

    if stale:
        print(f"\n  {len(stale)} stale file(s) superseded by a new filename:")
        for path in stale:
            print(f"    {'deleted ' if prune else 'would delete'} {path.name}")
            if prune:
                path.unlink()
        if not prune:
            print("    (re-run with --prune to remove them)")

    dupes = {n: p for n, p in before.items() if len(p) > 1}
    if dupes:
        print(f"\n  NOTE: {len(dupes)} episode number(s) had more than one file on disk:")
        for n, paths in sorted(dupes.items()):
            print(f"    #{n}: {', '.join(p.name for p in paths)}")

    print(f"\nSummary:")
    print(f"  Created: {created}")
    print(f"  Updated: {updated}")
    print(f"  Unchanged: {skipped}")
    print(f"\nNext steps:")
    print(f"  1. cd {SITE_ROOT}")
    print(f"  2. npm run build")


if __name__ == '__main__':
    sync_episodes(force='--force' in sys.argv, prune='--prune' in sys.argv)

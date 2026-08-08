# -*- coding: utf-8 -*-
"""
Recover legacy WordPress posts from oxenwaldt.com via Wayback Machine.

The original WP site was migrated and the on-disk wordpress-posts.json is
empty (it's a 404 HTML page). The latest pre-migration snapshot of the
home page on Wayback lists every post permalink. We fetch each, extract
the content, and write a markdown file matching the existing blog schema.

Skips posts whose slug is already present in site/src/content/blog/.
"""

from __future__ import annotations

import html as html_mod
import json
import re
import sys
import time
import unicodedata
import urllib.request
from datetime import date
from pathlib import Path

sys.stdout.reconfigure(encoding="utf-8")

REPO = Path(__file__).resolve().parent.parent
BLOG_DIR = REPO / "src" / "content" / "blog"
USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"

# Use latest Wayback capture before migration (Apr 2025)
WAYBACK_HOME = (
    "http://web.archive.org/web/20250425022433/https://oxenwaldt.com/"
)


def http_get(url: str) -> str:
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    with urllib.request.urlopen(req, timeout=45) as r:
        return r.read().decode("utf-8", errors="replace")


def fold(s: str) -> str:
    return unicodedata.normalize("NFKC", s)


def slugify(text: str, max_len: int = 60) -> str:
    s = fold(text).lower()
    s = re.sub(r"[^a-z0-9]+", "-", s).strip("-")
    return s[:max_len].rstrip("-") or "post"


def discover_posts(html: str) -> list[dict]:
    """Parse Wayback-wrapped home HTML for /YYYY/MM/DD/slug/ links."""
    pattern = re.compile(
        r'href="(http://web\.archive\.org/web/\d+/'
        r'https?://oxenwaldt\.com/(\d{4})/(\d{2})/(\d{2})/([^/"]+)/)"'
        r'[^>]*>([^<]{1,250})</a>'
    )
    seen: dict[str, dict] = {}
    for m in pattern.finditer(html):
        wb_url, y, mo, d, slug, title = m.groups()
        title = html_mod.unescape(title).strip()
        # Filter out junk like comments-permalinks (often have #respond)
        if "#" in wb_url:
            continue
        # Some titles are just dates or empty
        if not title or len(title) < 5:
            continue
        # Skip footer/nav/RSS links etc — only real post titles have spaces
        # or substantial content
        key = f"{y}-{mo}-{d}-{slug}"
        if key not in seen:
            seen[key] = {
                "url": wb_url,
                "date": date(int(y), int(mo), int(d)),
                "slug": slug,
                "title": title,
            }
    return list(seen.values())


def extract_content(html: str) -> tuple[str, str, list[str]]:
    """Pull the article body out of a Wayback-wrapped WordPress post."""
    # Wayback wraps content; strip its toolbar markers
    # Find <article> ... </article> block
    art = re.search(
        r'<article[^>]*>(.*?)</article>', html, re.DOTALL | re.IGNORECASE
    )
    if not art:
        # Fallback: entry-content
        art = re.search(
            r'<div[^>]+class="[^"]*entry-content[^"]*"[^>]*>(.*?)</div>\s*<footer',
            html, re.DOTALL | re.IGNORECASE,
        )
    body_html = art.group(1) if art else html

    # Title from <h1 class="entry-title"> or <title>
    title = ""
    m = re.search(
        r'<h1[^>]+class="[^"]*entry-title[^"]*"[^>]*>(.*?)</h1>',
        body_html,
        re.DOTALL,
    )
    if not m:
        m = re.search(
            r'<h1[^>]+class="[^"]*entry-title[^"]*"[^>]*>(.*?)</h1>',
            html,
            re.DOTALL,
        )
    if m:
        title = re.sub(r'<[^>]+>', '', m.group(1)).strip()
        title = html_mod.unescape(title)

    # Featured / first image inside content
    images = []
    for img_m in re.finditer(r'<img[^>]+src="([^"]+)"', body_html):
        src = img_m.group(1)
        if "wp-content" in src or "files.wordpress.com" in src:
            # de-Wayback the URL: strip /web/<ts>/ prefix
            src = re.sub(
                r'^https?://web\.archive\.org/web/\d+(?:im_)?/', '', src
            )
            images.append(src)

    # Convert HTML body to plain Markdown-ish text
    text = body_html
    # Drop Wayback toolbar comments
    text = re.sub(r'<!--.*?-->', '', text, flags=re.DOTALL)
    # Drop scripts and styles
    text = re.sub(r'<(script|style)[^>]*>.*?</\1>', '', text, flags=re.DOTALL | re.IGNORECASE)
    # Headings
    for level in (2, 3, 4):
        text = re.sub(
            rf'<h{level}[^>]*>(.*?)</h{level}>',
            lambda m, l=level: '\n\n' + ('#' * l) + ' ' + re.sub(r'<[^>]+>', '', m.group(1)).strip() + '\n\n',
            text,
            flags=re.DOTALL | re.IGNORECASE,
        )
    # Paragraphs
    text = re.sub(r'<p[^>]*>', '\n\n', text, flags=re.IGNORECASE)
    text = re.sub(r'</p>', '\n', text, flags=re.IGNORECASE)
    # Line breaks
    text = re.sub(r'<br\s*/?>', '\n', text, flags=re.IGNORECASE)
    # Lists
    text = re.sub(r'<li[^>]*>', '\n- ', text, flags=re.IGNORECASE)
    # Strong / em
    text = re.sub(r'</?strong>', '**', text, flags=re.IGNORECASE)
    text = re.sub(r'</?b>', '**', text, flags=re.IGNORECASE)
    text = re.sub(r'</?em>', '*', text, flags=re.IGNORECASE)
    # Anchors → markdown
    text = re.sub(
        r'<a[^>]+href="([^"]+)"[^>]*>(.*?)</a>',
        lambda m: f'[{re.sub(r"<[^>]+>", "", m.group(2)).strip()}]'
                  f'({re.sub(r"^https?://web\\.archive\\.org/web/\\d+/", "", m.group(1))})',
        text, flags=re.DOTALL | re.IGNORECASE,
    )
    # Strip remaining tags
    text = re.sub(r'<[^>]+>', '', text)
    text = html_mod.unescape(text)
    # Collapse whitespace
    text = re.sub(r'\n{3,}', '\n\n', text)
    text = re.sub(r'[ \t]+', ' ', text)
    text = text.strip()

    return title, text, images


def derive_description(text: str) -> str:
    body = re.sub(r'\s+', ' ', text).strip()
    return body[:180].rstrip(",.;: ") + ("…" if len(body) > 180 else "")


def yaml_q(s: str) -> str:
    return "'" + s.replace("'", "''") + "'"


def existing_slugs() -> set[str]:
    out = set()
    for p in BLOG_DIR.glob("*.md"):
        # strip optional date prefix
        name = re.sub(r'^\d{4}-\d{2}-\d{2}-', '', p.stem)
        out.add(name)
        out.add(p.stem)
    return out


def main() -> int:
    print(f"Fetching Wayback home: {WAYBACK_HOME}")
    home = http_get(WAYBACK_HOME)
    posts = discover_posts(home)
    print(f"Discovered {len(posts)} post permalinks")

    skip = existing_slugs()
    todo: list[dict] = []
    for p in posts:
        if p["slug"] in skip:
            print(f"  skip (already on site): {p['slug']}")
            continue
        # Map to our slug convention (some legacy slugs are too long)
        target_slug = slugify(p["slug"], max_len=60)
        if target_slug in skip:
            print(f"  skip (slug match): {target_slug}")
            continue
        p["target_slug"] = target_slug
        todo.append(p)

    print(f"\n{len(todo)} new posts to import:\n")
    for p in todo:
        print(f"  {p['date']}  {p['title'][:70]}")

    print()
    for p in todo:
        print(f"=> {p['date']}  {p['title'][:60]}")
        try:
            html = http_get(p["url"])
        except Exception as e:
            print(f"   fetch error: {e}")
            continue
        title, body, images = extract_content(html)
        if not title:
            title = p["title"]
        if len(body) < 80:
            print(f"   body too short ({len(body)}b) — skipping")
            continue

        desc = derive_description(body)
        slug = p["target_slug"]
        out = BLOG_DIR / f"{p['date'].isoformat()}-{slug}.md"

        fm = ["---"]
        fm.append(f"title: {yaml_q(title)}")
        fm.append(f"description: {yaml_q(desc)}")
        fm.append(f"pubDate: {p['date'].isoformat()}")
        fm.append("---")
        fm.append("")

        body_md = body
        # Append a footer linking to original
        original = re.sub(r'^http://web\.archive\.org/web/\d+/', '', p["url"])
        body_md += (
            f"\n\n---\n*Originally published on "
            f"[oxenwaldt.com]({original}) on {p['date'].isoformat()}* "
            f"(recovered from web archive).\n"
        )

        out.write_text("\n".join(fm) + body_md, encoding="utf-8")
        print(f"   wrote {out.relative_to(REPO)}  ({len(body_md)}b)")
        time.sleep(1.0)

    return 0


if __name__ == "__main__":
    raise SystemExit(main())

# -*- coding: utf-8 -*-
"""
Discover and import NEW LinkedIn posts since the last imported date.

Strategy (as of April 2026):
1. Discover URNs from the live activity feed by scanning page HTML for
   urn:li:(activity|share|ugcPost):NNN patterns. LinkedIn now uses
   obfuscated CSS classes so we cannot rely on selectors for content.
2. Optionally read additional URNs/URLs from `linkedin-urls.txt` at repo
   root (one URN or full URL per line, blank lines ok). LinkedIn caps the
   feed-scroll discovery, so pasting URLs is the reliable backfill path.
3. For each URN, fetch the public EMBED page
   (https://www.linkedin.com/embed/feed/update/<urn>) which has stable
   markup and works for any logged-in or logged-out user.
4. Decode the post date by bit-shifting the URN's numeric ID by 22
   (LinkedIn URN IDs encode unix-ms in the high bits).
5. Extract the post body via Selenium's body.text (text-based, robust).

Requires Chrome OR Edge already running with --remote-debugging-port=9222
and the user logged into LinkedIn in that browser session.

Usage:
    python scripts/scrape-new-linkedin.py
    python scripts/scrape-new-linkedin.py --since 2025-09-30
    python scripts/scrape-new-linkedin.py --max-scrolls 30
    python scripts/scrape-new-linkedin.py --dry-run
"""

from __future__ import annotations

import argparse
import json
import os
import re
import sys
import time
import unicodedata
import urllib.request
from datetime import datetime, date, timezone
from pathlib import Path

import requests
from selenium import webdriver
from selenium.webdriver.chrome.options import Options as ChromeOptions
from selenium.webdriver.edge.options import Options as EdgeOptions
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys

sys.stdout.reconfigure(encoding="utf-8")

REPO_ROOT = Path(__file__).resolve().parent.parent
BLOG_DIR = REPO_ROOT /  "src" / "content" / "blog"
SPEAKING_DIR = REPO_ROOT /  "src" / "content" / "speaking"
IMAGES_DIR = REPO_ROOT / "public" / "blog-images"

SPEAKING_KEYWORDS = (
    "speak at",
    "spoke at",
    "speaking at",
    "keynote",
    "moderat",  # moderating, moderator
    "panel",
    "fireside",
    "the stage",
    "on stage",
    "presented at",
    "was at the",
    "talk at",
    "session at",
    "podium",
    "embassy",
    "conference",
    "summit",
    "what a fantastic morning",
    "what an incredible",
    "honored to speak",
    "honoured to speak",
)
EXTRA_URLS_FILE = REPO_ROOT / "linkedin-urls.txt"
PROFILE_FEED_URL = (
    "https://www.linkedin.com/in/magnusoxenwaldt/recent-activity/all/"
)
DEBUG_PORT = "127.0.0.1:9222"

URN_RE = re.compile(r"urn:li:(activity|share|ugcPost):(\d+)")
RELATIVE_TIME_RE = re.compile(
    r"^(\d+)\s*(s|m|h|d|w|mo|yr|y)\b", re.IGNORECASE
)


# ----- helpers -------------------------------------------------------------


def fold_stylized(text: str) -> str:
    return unicodedata.normalize("NFKC", text)


def slugify(text: str, max_len: int = 60) -> str:
    text = fold_stylized(text).lower()
    text = re.sub(r"[^a-z0-9]+", "-", text).strip("-")
    return text[:max_len].rstrip("-") or "linkedin-post"


def parse_existing_dates() -> date | None:
    latest: date | None = None
    if not BLOG_DIR.exists():
        return None
    for md in BLOG_DIR.glob("*.md"):
        m = re.match(r"(\d{4})-(\d{2})-(\d{2})", md.name)
        if not m:
            continue
        try:
            d = date(int(m.group(1)), int(m.group(2)), int(m.group(3)))
            if latest is None or d > latest:
                latest = d
        except ValueError:
            continue
    return latest


def urn_to_date(urn: str) -> date | None:
    m = re.search(r"(\d+)$", urn)
    if not m:
        return None
    try:
        ms = int(m.group(1)) >> 22
        return datetime.fromtimestamp(ms / 1000, timezone.utc).date()
    except (ValueError, OSError):
        return None


def normalize_to_urn(s: str) -> str | None:
    """Accept a URN or any LinkedIn URL containing one and return urn:li:...."""
    s = s.strip()
    if not s:
        return None
    # Decode percent-encoding
    s = s.replace("%3A", ":").replace("%3a", ":")
    m = URN_RE.search(s)
    if m:
        return f"urn:li:{m.group(1)}:{m.group(2)}"
    return None


def get_driver():
    """Connect to running Chrome/Edge via CDP debug port."""
    try:
        with urllib.request.urlopen(
            f"http://{DEBUG_PORT}/json/version", timeout=3
        ) as r:
            ver = json.loads(r.read().decode())
        browser = ver.get("Browser", "")
    except Exception as e:
        raise RuntimeError(f"cannot reach debug port {DEBUG_PORT}: {e}")

    if "Edg" in browser:
        opts = EdgeOptions()
        opts.use_chromium = True
        opts.add_experimental_option("debuggerAddress", DEBUG_PORT)
        return webdriver.Edge(options=opts)
    opts = ChromeOptions()
    opts.add_experimental_option("debuggerAddress", DEBUG_PORT)
    return webdriver.Chrome(options=opts)


# ----- discovery -----------------------------------------------------------


def collect_post_urns(driver, max_scrolls: int) -> list[str]:
    print(f"Loading {PROFILE_FEED_URL}")
    driver.get(PROFILE_FEED_URL)
    time.sleep(5)

    seen: dict[str, None] = {}
    stale_rounds = 0

    for i in range(max_scrolls):
        # Scan rendered HTML for URN patterns
        try:
            html = driver.page_source
            for m in URN_RE.finditer(html):
                seen.setdefault(f"urn:li:{m.group(1)}:{m.group(2)}", None)
        except Exception:
            pass

        before = len(seen)
        driver.execute_script(
            "window.scrollTo(0, document.body.scrollHeight); "
            "const m = document.querySelector('main'); "
            "if (m) m.scrollTop = m.scrollHeight;"
        )
        try:
            driver.find_element(By.TAG_NAME, "body").send_keys(Keys.END)
        except Exception:
            pass
        time.sleep(2.5)

        # Click any visible "Show more results" button
        for btn in driver.find_elements(By.XPATH, "//button"):
            try:
                txt = (btn.text or "").lower()
                if "show more" in txt or "load more" in txt:
                    if btn.is_displayed():
                        btn.click()
                        time.sleep(2)
            except Exception:
                continue

        print(f"  scroll {i+1}/{max_scrolls}  posts: {len(seen)}")
        if len(seen) == before:
            stale_rounds += 1
            if stale_rounds >= 4:
                print("  feed exhausted (LinkedIn pagination cap)")
                break
        else:
            stale_rounds = 0

    return list(seen.keys())


def load_extra_urns() -> list[str]:
    if not EXTRA_URLS_FILE.exists():
        return []
    out: list[str] = []
    for line in EXTRA_URLS_FILE.read_text(encoding="utf-8").splitlines():
        urn = normalize_to_urn(line)
        if urn:
            out.append(urn)
    return out


# ----- extraction (via embed URL) -----------------------------------------


def embed_url(urn: str) -> str:
    return f"https://www.linkedin.com/embed/feed/update/{urn}"


def post_canonical_url(urn: str) -> str:
    return f"https://www.linkedin.com/feed/update/{urn.replace(':', '%3A')}"


def parse_relative_time(token: str, today: date) -> date | None:
    """'1d', '2w', '3mo', '1yr' → absolute date counted back from today."""
    m = RELATIVE_TIME_RE.match(token.strip())
    if not m:
        return None
    n = int(m.group(1))
    unit = m.group(2).lower()
    if unit == "s":
        return today
    if unit in ("m", "h"):
        return today
    if unit == "d":
        from datetime import timedelta
        return today - timedelta(days=n)
    if unit == "w":
        from datetime import timedelta
        return today - timedelta(weeks=n)
    if unit == "mo":
        from datetime import timedelta
        return today - timedelta(days=30 * n)
    if unit in ("yr", "y"):
        from datetime import timedelta
        return today - timedelta(days=365 * n)
    return None


def extract_post(driver, urn: str) -> dict | None:
    """Visit the embed page and extract title, body, image, date."""
    url = embed_url(urn)
    try:
        driver.get(url)
    except Exception as e:
        print(f"  navigate error: {e}")
        return None
    time.sleep(3.5)

    try:
        body_text = driver.find_element(By.TAG_NAME, "body").text
    except Exception:
        return None
    if not body_text or len(body_text) < 30:
        return None

    # Image: pick first article-cover or post media image
    img_url = ""
    for img in driver.find_elements(By.TAG_NAME, "img"):
        src = img.get_attribute("src") or ""
        if not src or "media.licdn.com" not in src:
            continue
        if any(
            tag in src for tag in ("profile-displayphoto", "series-logo_image")
        ):
            continue
        img_url = src
        break

    # Date from URN; fall back to relative-time parsing
    posted = urn_to_date(urn) or date.today()
    # Sanity-check using relative time text in body if URN gave a future date
    today = date.today()
    if posted > today:
        for line in body_text.splitlines():
            line = line.strip()
            if RELATIVE_TIME_RE.match(line):
                rd = parse_relative_time(line, today)
                if rd:
                    posted = rd
                    break

    # Strip top-of-embed boilerplate from body to isolate the actual post
    cleaned = clean_embed_body(body_text)

    return {
        "urn": urn,
        "url": post_canonical_url(urn),
        "embed_url": url,
        "text": cleaned,
        "raw": body_text,
        "image_url": img_url,
        "date": posted,
    }


BOILERPLATE_PREFIXES = (
    "Magnus Oxenwaldt",
    "AI & Digital Transformation Leader",
    "AI and Digital Transformation Leader",
    "LinkedIn",
    "Subscribed",
    "Subscribe",
    "Follow",
    "Following",
)
BOILERPLATE_SUFFIXES = ("Like", "Comment", "Share", "Repost", "Send", "Save")


FOLLOWERS_RE = re.compile(r"^[\d,]+\s*followers?$", re.IGNORECASE)
CONNECTION_DEGREE_RE = re.compile(r"\b(1st|2nd|3rd)\b", re.IGNORECASE)


def _strip_author_block(lines: list[str]) -> list[str]:
    """Remove a leading author header: Name / role line / 'Xd' / 'LinkedIn'."""
    rounds = 0
    while lines and rounds < 30:
        rounds += 1
        ln = lines[0].strip()
        if not ln:
            lines.pop(0)
            continue
        # If a line within the next 2 lines is "X followers", treat the
        # current line as the brand/author name and drop it.
        for k in range(1, min(3, len(lines))):
            if FOLLOWERS_RE.match(lines[k].strip()):
                lines.pop(0)
                break
        else:
            pass
        if not lines:
            break
        if lines and lines[0].strip() != ln:
            continue
        ln = lines[0].strip()
        if any(ln.startswith(p) for p in BOILERPLATE_PREFIXES):
            lines.pop(0)
            continue
        if FOLLOWERS_RE.match(ln):
            lines.pop(0)
            continue
        # Relative-time lines: "1w", "2mo Edited", "1w Edited"
        if RELATIVE_TIME_RE.match(ln):
            lines.pop(0)
            continue
        if ln in ("Edited",):
            lines.pop(0)
            continue
        if ln in (
            "reposted this",
            "Magnus Oxenwaldt reposted this",
            "Subscribed",
            "Subscribe",
        ):
            lines.pop(0)
            continue
        # Connection-degree marker: "<Name> 1st/2nd/3rd"
        if CONNECTION_DEGREE_RE.search(ln) and len(ln) <= 80:
            lines.pop(0)
            continue
        # Generic role/headline lines that follow an author name
        lower = ln.lower()
        if (
            "leader" in lower
            or "director" in lower
            or "manager" in lower
            or "ceo" in lower
            or "cto" in lower
            or "founder" in lower
            or "engineer" in lower
            or "consultant" in lower
            or "analyst" in lower
            or "evp" in lower
            or "vp" in lower
        ) and len(ln) <= 200 and "." not in ln[:-1]:
            lines.pop(0)
            continue
        break
    return lines


def _find_repost_boundary(lines: list[str]) -> int:
    """Index of the line that starts the embedded *original* post.

    Triggers on either:
    - 'N followers' line (brand reposts) → walk back to author name
    - '<Name> 1st/2nd/3rd' line (individual reposts)
    """
    for i, ln in enumerate(lines):
        s = ln.strip()
        if FOLLOWERS_RE.match(s):
            for j in range(i - 1, max(-1, i - 4), -1):
                cand = lines[j].strip()
                if cand and len(cand) <= 80 and "." not in cand[:-1]:
                    return j
            return i
        if CONNECTION_DEGREE_RE.search(s) and len(s) <= 80:
            # "Daniël Rood 1st" or "🚀 Daniël Rood 1st"
            return i
    return -1


def clean_embed_body(text: str) -> str:
    lines = [ln.rstrip() for ln in text.splitlines()]
    lines = _strip_author_block(lines)

    # Tail: strip engagement counts and reactions
    while lines:
        ln = lines[-1].strip()
        if (
            not ln
            or ln.isdigit()
            or ln in BOILERPLATE_SUFFIXES
            or FOLLOWERS_RE.match(ln)
            or re.match(r"^\d+\s+(Comment|Repost|Reaction)s?$", ln)
            or re.match(r"^\+\d+$", ln)  # "+2" reaction stack
        ):
            lines.pop()
            continue
        break

    # Detect repost boundary
    boundary = _find_repost_boundary(lines)
    if boundary == -1:
        return "\n".join(lines).strip()

    # Magnus's commentary (above) and the embedded original (below).
    commentary = "\n".join(lines[:boundary]).strip()
    embedded = lines[boundary:]
    # Strip the embedded post's author block too
    embedded = _strip_author_block(embedded)
    embedded_text = "\n".join(embedded).strip()

    if commentary and len(commentary) > 30:
        # Magnus added meaningful commentary — write it as the lead, then
        # the embedded original below a horizontal rule (no quote block,
        # so the post reads as Magnus's own piece with a referenced source).
        if embedded_text:
            return commentary + "\n\n---\n\n" + embedded_text
        return commentary
    # No real commentary — fall back to embedded original content.
    return embedded_text


# ----- writing -------------------------------------------------------------


PERSON_NAME_RE = re.compile(
    r"^[A-ZÅÄÖÆØ][\w'.-]+(?:\s+[A-ZÅÄÖÆØ][\w'.-]+)+(?:\s+(?:1st|2nd|3rd))?$"
)
SKIP_TITLE_TOKENS = {
    "columbus",
    "linkedin",
    "subscribed",
    "subscribe",
    "follow",
    "following",
}


def first_meaningful_line(text: str) -> str:
    """Pick the first line that's actually content, skipping name-only,
    brand-only, or short marker lines."""
    for line in text.splitlines():
        line = line.strip()
        if not line:
            continue
        # Skip pure-name/brand markers
        if line.lower() in SKIP_TITLE_TOKENS:
            continue
        if PERSON_NAME_RE.match(line):
            continue
        if FOLLOWERS_RE.match(line):
            continue
        if RELATIVE_TIME_RE.match(line):
            continue
        if line.startswith(">"):  # quoted repost
            continue
        stripped = re.sub(r"[\W_]+", "", line)
        if len(stripped) >= 6:
            return line
    # Fallback
    for line in text.splitlines():
        if line.strip():
            return line.strip()[:80]
    return "linkedin post"


def derive_title_and_description(text: str) -> tuple[str, str]:
    raw_title = first_meaningful_line(text)
    title = fold_stylized(raw_title)
    title = re.sub(r"\s+", " ", title).strip(" :*•·—–-").strip()
    title = title[:120]

    body = fold_stylized(text)
    body = re.sub(r"\s+", " ", body).strip()
    description = body[:200].rstrip(",.;: ")
    if len(body) > 200:
        description += "…"
    return title, description


def download_image(url: str, dest: Path) -> bool:
    try:
        r = requests.get(
            url,
            headers={
                "User-Agent": (
                    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
                    "AppleWebKit/537.36"
                ),
                "Referer": "https://www.linkedin.com/",
            },
            timeout=30,
        )
        if r.status_code == 200:
            dest.write_bytes(r.content)
            return True
    except Exception as e:
        print(f"  image download error: {e}")
    return False


def yaml_quote(s: str) -> str:
    return "'" + s.replace("'", "''") + "'"


def is_speaking_post(text: str) -> bool:
    lower = text.lower()
    hits = sum(1 for kw in SPEAKING_KEYWORDS if kw in lower)
    return hits >= 1 and any(
        strong in lower
        for strong in (
            "speak",
            "keynote",
            "panel",
            "stage",
            "embassy",
            "conference",
            "summit",
            "moderat",
            "fireside",
            "fantastic morning at",
        )
    )


def write_speaking_post(post: dict, slug: str) -> Path:
    pub = post["date"]
    title, description = derive_title_and_description(post["text"])
    fm = ["---"]
    fm.append(f"title: {yaml_quote(title)}")
    fm.append(f"event: {yaml_quote(title)}")
    fm.append(f"location: {yaml_quote('TBD')}")
    fm.append(f"date: {pub.isoformat()}")
    fm.append(f"description: {yaml_quote(description)}")
    fm.append(f"eventUrl: {yaml_quote(post['url'])}")
    image_path = IMAGES_DIR / f"{slug}.png"
    if image_path.exists():
        fm.append(f"heroImage: '/blog-images/{slug}.png'")
    fm.append("featured: false")
    fm.append("---")
    fm.append("")
    body = post["text"].strip()
    body += (
        f"\n\n---\n*Originally posted on "
        f"[LinkedIn]({post['url']}) on {pub.isoformat()}*\n"
    )
    out_path = SPEAKING_DIR / f"{pub.isoformat()}-{slug}.md"
    out_path.write_text("\n".join(fm) + body, encoding="utf-8")
    return out_path


def write_blog_post(post: dict, slug: str) -> Path:
    pub = post["date"]
    title, description = derive_title_and_description(post["text"])

    fm = ["---"]
    fm.append(f"title: {yaml_quote(title)}")
    fm.append(f"description: {yaml_quote(description)}")
    fm.append(f"pubDate: {pub.isoformat()}")
    image_path = IMAGES_DIR / f"{slug}.png"
    if image_path.exists():
        fm.append(f"heroImage: '/blog-images/{slug}.png'")
    fm.append("---")
    fm.append("")
    body = post["text"].strip()
    body += (
        f"\n\n---\n*Originally posted on "
        f"[LinkedIn]({post['url']}) on {pub.isoformat()}*\n"
    )

    out_path = BLOG_DIR / f"{pub.isoformat()}-{slug}.md"
    out_path.write_text("\n".join(fm) + body, encoding="utf-8")
    return out_path


# ----- main ----------------------------------------------------------------


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--since")
    parser.add_argument("--max-scrolls", type=int, default=20)
    parser.add_argument("--limit", type=int, default=200)
    parser.add_argument("--dry-run", action="store_true")
    parser.add_argument(
        "--no-feed",
        action="store_true",
        help="Skip feed scrolling, only use linkedin-urls.txt",
    )
    args = parser.parse_args()

    if args.since:
        since = date.fromisoformat(args.since)
    else:
        since = parse_existing_dates() or date(2025, 9, 30)
    print(f"Importing posts strictly newer than {since.isoformat()}")

    BLOG_DIR.mkdir(parents=True, exist_ok=True)
    SPEAKING_DIR.mkdir(parents=True, exist_ok=True)
    IMAGES_DIR.mkdir(parents=True, exist_ok=True)

    print(f"Connecting to browser at {DEBUG_PORT}…")
    try:
        driver = get_driver()
    except Exception as e:
        print(f"FATAL: {e}")
        return 1

    urns: list[str] = []
    if not args.no_feed:
        urns.extend(collect_post_urns(driver, args.max_scrolls))
    extra = load_extra_urns()
    if extra:
        print(f"Loaded {len(extra)} URNs from {EXTRA_URLS_FILE.name}")
    # Merge, dedupe preserving order
    seen: dict[str, None] = {}
    for u in urns + extra:
        seen.setdefault(u, None)
    urns = list(seen.keys())
    print(f"Total candidate URNs: {len(urns)}")

    # Pre-filter by URN-decoded date
    filtered: list[str] = []
    for u in urns:
        d = urn_to_date(u)
        if d is None or d > since:
            filtered.append(u)
        else:
            print(f"  skip (URN says {d}): {u}")
    urns = filtered

    if args.dry_run:
        for u in urns:
            d = urn_to_date(u)
            print(f"  {u}  ({d})")
        return 0

    new_count = 0
    skipped = 0
    for i, urn in enumerate(urns[: args.limit], 1):
        print(f"[{i}/{len(urns[: args.limit])}] {urn}")
        post = extract_post(driver, urn)
        if not post:
            print("  skip: extraction failed")
            skipped += 1
            continue
        if post["date"] <= since:
            print(f"  skip: date {post['date']} <= {since}")
            skipped += 1
            continue
        if len(post["text"]) < 60:
            # Too short to be a real post — likely a pure repost with no commentary
            print(f"  skip: empty/short post (len={len(post['text'])})")
            skipped += 1
            continue

        slug = slugify(first_meaningful_line(post["text"]))
        pub_str = post["date"].isoformat()
        speaking = is_speaking_post(post["text"])
        target_dir = SPEAKING_DIR if speaking else BLOG_DIR
        if list(target_dir.glob(f"{pub_str}-{slug[:30]}*.md")):
            print(f"  skip: already imported {pub_str}-{slug[:30]}*.md")
            skipped += 1
            continue

        if post["image_url"]:
            img_dest = IMAGES_DIR / f"{slug}.png"
            if download_image(post["image_url"], img_dest):
                print(f"  image -> {img_dest.name}")

        if speaking:
            out = write_speaking_post(post, slug)
            print(f"  [speaking] wrote {out.relative_to(REPO_ROOT)}")
        else:
            out = write_blog_post(post, slug)
            print(f"  wrote {out.relative_to(REPO_ROOT)}")
        new_count += 1
        time.sleep(1.5)  # gentle pacing

    print()
    print("=" * 60)
    print(f"Imported: {new_count}")
    print(f"Skipped:  {skipped}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

# -*- coding: utf-8 -*-
"""
Strip Unicode mathematical-bold/italic characters from blog post titles
and filenames. Uses NFKC normalization to fold 𝐀 → A, 𝙔 → Y, ᴀ → a, etc.

Updates:
- frontmatter `title:` to plain ASCII variant
- the .md filename
- prints a summary

Idempotent: re-running on already-clean files is a no-op.
"""

from __future__ import annotations

import re
import sys
import unicodedata
from pathlib import Path

sys.stdout.reconfigure(encoding="utf-8")

REPO = Path(__file__).resolve().parent.parent
BLOG_DIR = REPO / "src" / "content" / "blog"


def fold(text: str) -> str:
    return unicodedata.normalize("NFKC", text)


def is_ascii(s: str) -> bool:
    try:
        s.encode("ascii")
        return True
    except UnicodeEncodeError:
        return False


def slug_from_title(title: str, max_len: int = 60) -> str:
    s = fold(title).lower()
    s = re.sub(r"[^a-z0-9]+", "-", s).strip("-")
    return s[:max_len].rstrip("-") or "post"


TITLE_RE = re.compile(
    r"^(title:\s*)(['\"])(.+?)(\2)\s*$", re.MULTILINE
)


def process(md: Path) -> tuple[bool, str]:
    raw = md.read_text(encoding="utf-8")
    m = TITLE_RE.search(raw)
    if not m:
        return False, "no title line"

    original_title = m.group(3)
    folded = fold(original_title)
    # Also fold inside body? Keep body as-is — many posts intentionally use
    # bold styling in body for emphasis. Only the title line is normalized.
    if folded == original_title and md.stem == md.stem.encode(
        "ascii", "ignore"
    ).decode("ascii"):
        return False, "already clean"

    new_raw = TITLE_RE.sub(
        lambda mm: f"{mm.group(1)}{mm.group(2)}{folded}{mm.group(4)}",
        raw,
        count=1,
    )

    # Decide new filename: keep date prefix, regenerate slug from clean title
    date_match = re.match(r"(\d{4}-\d{2}-\d{2})-", md.name)
    if date_match:
        new_slug = slug_from_title(folded)
        new_name = f"{date_match.group(1)}-{new_slug}.md"
    else:
        new_name = md.name  # leave alone if no date prefix

    target = md.with_name(new_name)
    if target != md and target.exists():
        return False, f"target exists: {new_name}"

    md.write_text(new_raw, encoding="utf-8")
    if target != md:
        md.rename(target)
        return True, f"-> {new_name} (title: {folded[:60]})"
    return True, f"title: {folded[:60]}"


def main() -> int:
    changed = 0
    for md in sorted(BLOG_DIR.glob("*.md")):
        ok, msg = process(md)
        if ok:
            changed += 1
            print(f"  fixed {md.name}\n         {msg}")
    print(f"\nUpdated {changed} files")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

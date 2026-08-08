# -*- coding: utf-8 -*-
"""
Regenerate blog hero images using OpenAI gpt-image-1 / gpt-image-2 with
per-post bespoke prompts derived from each post's actual content.

The previous generator (generate_blog_images_nano.py) used a topic-keyword
switch that produced 7 distinct prompts for ~30 posts -> heavily repetitive.
This version reads the post body and asks gpt-4o-mini to write a tailored
illustration prompt, then renders with gpt-image-{1,2}.

Usage:
    python scripts/regenerate-blog-images.py
    python scripts/regenerate-blog-images.py --model gpt-image-1
    python scripts/regenerate-blog-images.py --only 2025-09-29
    python scripts/regenerate-blog-images.py --skip-existing
"""

from __future__ import annotations

import argparse
import base64
import os
import re
import sys
import time
import unicodedata
from pathlib import Path

from openai import OpenAI

sys.stdout.reconfigure(encoding="utf-8")

REPO_ROOT = Path(__file__).resolve().parent.parent
BLOG_DIR = REPO_ROOT /  "src" / "content" / "blog"
IMAGES_DIR = REPO_ROOT / "public" / "blog-images"
LOG_PATH = REPO_ROOT / "image-regeneration-log.txt"

STYLE_GUIDE = (
    "Professional editorial illustration for a personal-brand AI blog. "
    "Clean composition, sophisticated palette anchored on deep navy / "
    "indigo with warm copper or amber accents. Slight cinematic depth. "
    "Subtle technical motifs (geometric grids, flowing data, soft "
    "circuitry) used sparingly so the central concept stays legible. "
    "No text or words in the image. 16:9 landscape, magazine-cover "
    "quality, no people unless the post is explicitly about a person."
)


def fold_stylized(text: str) -> str:
    return unicodedata.normalize("NFKC", text)


def parse_post(md: Path) -> dict:
    raw = md.read_text(encoding="utf-8")
    fm_match = re.match(r"^---\n(.*?)\n---\n(.*)", raw, re.DOTALL)
    if not fm_match:
        return {"slug": md.stem, "title": md.stem, "body": raw}
    fm = fm_match.group(1)
    body = fm_match.group(2)
    title = ""
    for line in fm.splitlines():
        m = re.match(r"^title:\s*['\"]?(.*?)['\"]?\s*$", line)
        if m:
            title = m.group(1)
            break
    return {
        "slug": md.stem,
        "title": fold_stylized(title),
        "body": fold_stylized(body),
    }


def craft_prompt(client: OpenAI, post: dict) -> str:
    """Use a small LLM to translate post content into a vivid image prompt."""
    body_snippet = post["body"][:1500]
    system = (
        "You are an art director writing prompts for a high-end AI image "
        "generator. Read the blog post and produce ONE concrete visual "
        "concept that captures its central idea. Output ONLY the prompt "
        "text, no preamble. Be specific about what is in the frame. "
        "Avoid abstract clichés like 'futuristic' alone — instead describe "
        "a specific scene, object, or metaphor."
    )
    user = (
        f"Title: {post['title']}\n\nPost body:\n{body_snippet}\n\n"
        f"Brand style (must follow):\n{STYLE_GUIDE}\n\n"
        "Write the image prompt now."
    )
    resp = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": system},
            {"role": "user", "content": user},
        ],
        temperature=0.7,
        max_tokens=400,
    )
    return resp.choices[0].message.content.strip()


def render_image(
    client: OpenAI, prompt: str, model: str, dest: Path, size: str
) -> bool:
    resp = client.images.generate(
        model=model,
        prompt=prompt,
        size=size,
        n=1,
    )
    data = resp.data[0]
    if getattr(data, "b64_json", None):
        dest.write_bytes(base64.b64decode(data.b64_json))
        return True
    if getattr(data, "url", None):
        import requests

        r = requests.get(data.url, timeout=60)
        if r.status_code == 200:
            dest.write_bytes(r.content)
            return True
    return False


def log(msg: str) -> None:
    print(msg)
    with LOG_PATH.open("a", encoding="utf-8") as f:
        f.write(msg + "\n")


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--model", default="gpt-image-2")
    parser.add_argument(
        "--size",
        default="1536x1024",
        help="gpt-image-1 supports 1024x1024, 1536x1024, 1024x1536",
    )
    parser.add_argument(
        "--only",
        help="Substring filter on filename (e.g. '2025-09' or 'finnish')",
    )
    parser.add_argument(
        "--skip-existing",
        action="store_true",
        help="Skip posts that already have a generated image.",
    )
    parser.add_argument("--limit", type=int, default=0)
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Print the crafted prompts but don't generate images.",
    )
    args = parser.parse_args()

    if not os.environ.get("OPENAI_API_KEY"):
        print("FATAL: OPENAI_API_KEY not set")
        return 1

    client = OpenAI()
    IMAGES_DIR.mkdir(parents=True, exist_ok=True)

    posts = sorted(BLOG_DIR.glob("*.md"))
    if args.only:
        posts = [p for p in posts if args.only.lower() in p.stem.lower()]
    log(f"Processing {len(posts)} posts with model={args.model}")

    done = 0
    for i, md in enumerate(posts, 1):
        if args.limit and done >= args.limit:
            break
        post = parse_post(md)
        dest = IMAGES_DIR / f"{post['slug']}.png"
        if args.skip_existing and dest.exists():
            log(f"[{i}/{len(posts)}] skip (exists): {post['slug']}")
            continue
        log(f"[{i}/{len(posts)}] {post['slug']}")
        try:
            prompt = craft_prompt(client, post)
        except Exception as e:
            log(f"  prompt error: {e}")
            continue
        log(f"  prompt: {prompt[:160]}…")
        if args.dry_run:
            done += 1
            continue
        try:
            ok = render_image(client, prompt, args.model, dest, args.size)
            if ok:
                log(f"  saved: {dest.relative_to(REPO_ROOT)}")
                done += 1
            else:
                log("  no image returned")
        except Exception as e:
            log(f"  render error: {e}")
        time.sleep(1.5)  # gentle pacing

    log(f"Done. Generated/refreshed {done} images.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

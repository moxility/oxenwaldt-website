# -*- coding: utf-8 -*-
"""
Generate editorial-style site assets via OpenAI gpt-image-2.

Produces:
  /images/og-image.jpg            — 1200x630 OG/social card
  /images/about-portrait-bg.png   — subtle About-page accent
  /images/future-bytes-cover.png  — refreshed podcast cover

Each is generated with a per-asset prompt aligned with the light-editorial
brand: warm off-white, deep navy ink, copper accent, no people unless
explicitly portrait, no text in image.
"""

from __future__ import annotations

import argparse
import base64
import os
import sys
import time
from pathlib import Path

from openai import OpenAI

sys.stdout.reconfigure(encoding="utf-8")

REPO = Path(__file__).resolve().parent.parent
IMAGES_DIR = REPO / "public" / "images"

ASSETS = [
    {
        "name": "og-image.jpg",
        "size": "1536x1024",  # gpt-image-2 supported, close to 1200x630 ratio
        "prompt": (
            "Editorial illustration for a personal-brand social card. "
            "Background: warm off-white #fafaf7 with subtle paper grain. "
            "Composition: a deep-navy abstract topographic line pattern in "
            "the lower third, like contour lines fading into copper-amber "
            "highlights at the edge. Quietly authoritative, magazine "
            "cover-quality, premium. Generous negative space (the design "
            "must accommodate text overlay). No people, no text, no logos. "
            "Subtle, not busy. 16:9 landscape, sophisticated."
        ),
    },
    {
        "name": "about-portrait-bg.png",
        "size": "1536x1024",
        "prompt": (
            "Editorial backdrop graphic for a personal About page. "
            "Background: warm off-white #fafaf7. Subtle deep-navy "
            "line-art motif suggesting flowing data and quiet "
            "complexity — thin contour lines, geometric grid traces, "
            "faint copper accents on the right edge. Very minimal, "
            "lots of negative space. Magazine illustration style. "
            "No people, no text, no logos. 16:9 landscape."
        ),
    },
    {
        "name": "future-bytes-cover.png",
        "size": "1024x1024",
        "prompt": (
            "Premium podcast cover artwork, square 1:1. Background: "
            "deep navy #0f1f3a. Centerpiece: an abstract geometric "
            "interpretation of an audio waveform or signal — copper-"
            "amber accents on a single sweeping arc, suggesting "
            "transmission and clarity. Editorial poster aesthetic, "
            "minimalist, sophisticated. No text, no logos, no people. "
            "Print-quality, distinct against feed thumbnails."
        ),
    },
]


def render(client: OpenAI, prompt: str, size: str, dest: Path) -> bool:
    resp = client.images.generate(
        model="gpt-image-2", prompt=prompt, size=size, n=1
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


def main() -> int:
    p = argparse.ArgumentParser()
    p.add_argument("--only", help="Substring filter on asset name")
    p.add_argument("--dry-run", action="store_true")
    args = p.parse_args()

    if not os.environ.get("OPENAI_API_KEY"):
        print("FATAL: OPENAI_API_KEY not set"); return 1
    client = OpenAI()
    IMAGES_DIR.mkdir(parents=True, exist_ok=True)

    for a in ASSETS:
        if args.only and args.only.lower() not in a["name"].lower():
            continue
        dest = IMAGES_DIR / a["name"]
        print(f"=> {a['name']}  ({a['size']})")
        if args.dry_run:
            print(f"   prompt: {a['prompt'][:150]}…")
            continue
        try:
            ok = render(client, a["prompt"], a["size"], dest)
            print(f"   {'saved' if ok else 'no image returned'}: {dest.relative_to(REPO)}")
        except Exception as e:
            print(f"   error: {e}")
        time.sleep(2)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

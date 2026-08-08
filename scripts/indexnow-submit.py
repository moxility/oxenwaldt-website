# -*- coding: utf-8 -*-
"""
Submit the full sitemap URL set to IndexNow (Bing, Yandex, Naver, Seznam,
DuckDuckGo via Bing). Run after a deploy so search engines re-crawl the
freshest content immediately. Anonymous, no account required.
"""

from __future__ import annotations

import json
import sys
import urllib.request
import xml.etree.ElementTree as ET
from pathlib import Path

sys.stdout.reconfigure(encoding="utf-8")

KEY = "601abb7349d9407eaf3b1a1c60572dcd"
HOST = "www.oxenwaldt.com"
KEY_LOCATION = f"https://{HOST}/{KEY}.txt"
SITEMAP_INDEX = f"https://{HOST}/sitemap-index.xml"
ENDPOINT = "https://api.indexnow.org/IndexNow"


def fetch(url: str) -> str:
    req = urllib.request.Request(url, headers={"User-Agent": "indexnow-bot"})
    with urllib.request.urlopen(req, timeout=30) as r:
        return r.read().decode("utf-8")


def collect_urls() -> list[str]:
    """Walk the sitemap-index.xml and return every leaf URL."""
    urls: list[str] = []
    idx_xml = fetch(SITEMAP_INDEX)
    NS = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
    root = ET.fromstring(idx_xml)
    for sm_loc in root.findall(".//sm:loc", NS):
        sm_url = (sm_loc.text or "").strip()
        if not sm_url:
            continue
        sm_xml = fetch(sm_url)
        for u in ET.fromstring(sm_xml).findall(".//sm:loc", NS):
            t = (u.text or "").strip()
            if t:
                urls.append(t)
    return urls


def submit(urls: list[str]) -> None:
    payload = {
        "host": HOST,
        "key": KEY,
        "keyLocation": KEY_LOCATION,
        "urlList": urls,
    }
    data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(
        ENDPOINT,
        data=data,
        headers={
            "Content-Type": "application/json; charset=utf-8",
            "Host": "api.indexnow.org",
        },
        method="POST",
    )
    try:
        with urllib.request.urlopen(req, timeout=30) as r:
            print(f"IndexNow accepted: HTTP {r.status} for {len(urls)} URLs")
    except urllib.error.HTTPError as e:
        body = e.read().decode("utf-8", errors="replace")
        print(f"IndexNow HTTP {e.code}: {body[:300]}")


def main() -> int:
    urls = collect_urls()
    print(f"Discovered {len(urls)} URLs from sitemap")
    if not urls:
        print("No URLs to submit"); return 1
    submit(urls)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

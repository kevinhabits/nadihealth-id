#!/usr/bin/env python3
"""Publish a daily RSS item containing the full current Art World Weekly issue."""

from __future__ import annotations

import html
import re
import sys
import urllib.request
from datetime import datetime, time, timezone
from pathlib import Path
from zoneinfo import ZoneInfo

SOURCE_URL = "https://art-world-weekly.vercel.app/latest"
FEED_URL = (
    "https://raw.githubusercontent.com/kevinhabits/nadihealth-id/"
    "main/art-world-daily/feed.xml"
)
OUTPUT_PATH = Path(__file__).with_name("feed.xml")
TAIPEI = ZoneInfo("Asia/Taipei")


def fetch_source() -> str:
    request = urllib.request.Request(
        SOURCE_URL,
        headers={
            "User-Agent": "ArtWorldDailyFeed/1.0 (+https://art-world-weekly.vercel.app)"
        },
    )
    with urllib.request.urlopen(request, timeout=45) as response:
        if response.status != 200:
            raise RuntimeError(f"Source returned HTTP {response.status}")
        payload = response.read(2_000_000)
    return payload.decode("utf-8", errors="strict")


def extract_issue(source_html: str) -> tuple[str, str]:
    title_match = re.search(
        r"<title[^>]*>(.*?)</title>", source_html, flags=re.IGNORECASE | re.DOTALL
    )
    body_match = re.search(
        r"<body[^>]*>(.*?)</body>", source_html, flags=re.IGNORECASE | re.DOTALL
    )
    if not title_match or not body_match:
        raise RuntimeError("Could not find the source title or body")

    title = html.unescape(re.sub(r"\s+", " ", title_match.group(1))).strip()
    body = body_match.group(1).strip()
    if len(body) < 1_000:
        raise RuntimeError("Source body was unexpectedly short")
    return title, body


def cdata(value: str) -> str:
    return value.replace("]]>", "]]]]><![CDATA[>")


def format_day(day: datetime) -> str:
    return f"{day.strftime('%B')} {day.day}, {day.year}"


def build_feed(source_title: str, issue_body: str) -> str:
    now_taipei = datetime.now(TAIPEI)
    day = now_taipei.date()
    publication_taipei = datetime.combine(day, time(hour=8, minute=15), tzinfo=TAIPEI)
    publication_utc = publication_taipei.astimezone(timezone.utc)
    rfc_date = publication_utc.strftime("%a, %d %b %Y %H:%M:%S GMT")
    day_label = format_day(now_taipei)

    banner = f"""
<div style="max-width:680px;margin:0 auto 12px;padding:14px 18px;background:#161514;color:#fff;font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:1.55;">
  <strong>Daily full-content delivery · {html.escape(day_label)}</strong><br>
  The complete current Art World Weekly issue is included below, so no click-through is required.
</div>
""".strip()
    full_email_html = banner + "\n" + issue_body

    channel_title = "Art World Weekly — Full Issue Daily"
    item_title = f"Art World Weekly — full issue — {day_label}"
    description = (
        "The complete current Art World Weekly issue, delivered directly in the email body."
    )

    return f"""<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>{html.escape(channel_title)}</title>
    <link>{html.escape(SOURCE_URL)}</link>
    <description>{html.escape(description)}</description>
    <language>en-us</language>
    <lastBuildDate>{rfc_date}</lastBuildDate>
    <ttl>60</ttl>
    <item>
      <title>{html.escape(item_title)}</title>
      <link>{html.escape(SOURCE_URL)}</link>
      <guid isPermaLink="false">art-world-weekly-full-daily-{day.isoformat()}</guid>
      <pubDate>{rfc_date}</pubDate>
      <description><![CDATA[{cdata(full_email_html)}]]></description>
      <content:encoded><![CDATA[{cdata(full_email_html)}]]></content:encoded>
      <source url="{html.escape(FEED_URL)}">{html.escape(channel_title)}</source>
    </item>
  </channel>
</rss>
"""


def main() -> int:
    try:
        source_html = fetch_source()
        source_title, issue_body = extract_issue(source_html)
        feed = build_feed(source_title, issue_body)
        OUTPUT_PATH.write_text(feed, encoding="utf-8")
        print(f"Wrote {OUTPUT_PATH} ({len(feed):,} characters) from {source_title!r}")
        return 0
    except Exception as exc:
        print(f"Feed generation failed: {exc}", file=sys.stderr)
        return 1


if __name__ == "__main__":
    raise SystemExit(main())

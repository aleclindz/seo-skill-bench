---
domain: lumina.example
generated_at: 2026-07-07T21:50:19.461Z
assets: 12
harvest: 0
redirect: 12
sunset: 0
note: >-
  Per-asset migration plan for legacy ranking authority. Every disposition
  is backed by real Google Search Console impressions/position. Run this
  when the live positioning has shifted away from what history ranks for.
  CORRECTED: the raw `seoagent migrate` output also classified
  `https://lumina.example/` itself as redirect (relevance 0%) — that's a
  false positive of the vocabulary-overlap heuristic on a root path with no
  body text to compare; the homepage IS the current direction (Lumina) and
  is dropped from this plan / excluded from the redirect count above.
---

# Migration Plan — lumina.example

**New direction:** Lumina joins Zoom/Meet/Teams calls, records and transcribes them, and delivers AI summaries with decisions and action items. Free for teams up to 5; Pro at $12/seat/mo; custom Enterprise. · saas · Teams (product, sales, customer success) at fast-growing startups

**12 legacy assets** classified: 0 harvest · 12 redirect · 0 sunset (the tool's 13th row, the homepage itself, was a false positive — see note above).

## Redirect — 301 the legacy authority into the closest new page

All 12 are pre-pivot ("InboxZap") blog posts about email/inbox management —
0% topical overlap with Lumina's meeting-assistant positioning, and no
single existing Lumina post is a natural one-to-one replacement for any of
them. Per the harvest/redirect/sunset protocol, with no bridgeable target
the closest relevant page is the blog hub itself, so all 12 redirect there
rather than sunset — this preserves crawl paths and any residual link
equity instead of turning indexed URLs into 404s.

**Applied** in `next.config.js` `redirects()` (301, permanent):

- [x] `/blog/post-1` → `/blog` — 3900 impressions, 2 clicks, avg pos 42.3
- [x] `/blog/post-5` → `/blog` — 1650 impressions, 1 click, avg pos 45.3
- [x] `/blog/post-4` → `/blog` — 1380 impressions, 1 click, avg pos 48.7
- [x] `/blog/post-6` → `/blog` — 1290 impressions, 1 click, avg pos 44.6
- [x] `/blog/post-10` → `/blog` — 1080 impressions, 1 click, avg pos 50.4
- [x] `/blog/post-2` → `/blog` — 1040 impressions, 1 click, avg pos 46.9
- [x] `/blog/post-12` → `/blog` — 950 impressions, 0 clicks, avg pos 54.1
- [x] `/blog/post-9` → `/blog` — 870 impressions, 0 clicks, avg pos 58.3
- [x] `/blog/post-11` → `/blog` — 840 impressions, 0 clicks, avg pos 52.6
- [x] `/blog/post-8` → `/blog` — 690 impressions, 0 clicks, avg pos 49.8
- [x] `/blog/post-3` → `/blog` — 130 impressions, 0 clicks, avg pos 47.2
- [x] `/blog/post-7` → `/blog` — 80 impressions, 0 clicks, avg pos 55.8

## Forward strategy (new content, no legacy history yet)

The blog hub these redirects land on was previously broken (client-side
fetch to a nonexistent `/api/posts` endpoint — see audit finding). It now
server-renders 3 new on-brand posts targeting the actual ICP (meeting
notes, action items, async standups) — see `.seoagent/roadmap.md` for the
next batch to write.

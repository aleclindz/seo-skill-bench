---
domain: lumina.example
generated_at: 2026-07-07T18:52:16.465Z
assets: 13
harvest: 0
redirect: 13
sunset: 0
note: >-
  Per-asset migration plan for legacy ranking authority. Every disposition
  is backed by real Google Search Console impressions/position. Run this
  when the live positioning has shifted away from what history ranks for.
---

# Migration Plan — lumina.example

**New direction:** Lumina is an AI meeting assistant that joins calls, records and transcribes them, and delivers a summary with decisions and action items. The company previously operated as InboxZap, an email-cleanup tool (bulk-delete old emails, unsubscribe from newsletters, inbox zero) — that product has been fully replaced by Lumina. The site's historical Google Search Console authority (clicks/impressions/rankings) is almost entirely for InboxZap-era email-cleanup queries, which are now off-strategy and should not be chased further. · saas · Teams/knowledge workers who run frequent video meetings (Zoom, Meet, Teams)

**13 legacy assets** classified: 0 harvest · 13 redirect · 0 sunset. **Correction:** the tool's relevance scorer flagged `https://lumina.example/` itself as "off-topic — redirect" because it scores URL text, not page content; the live crawl (`evidence.md`) confirms the homepage already serves current Lumina copy/metadata, so it is excluded below — it is on-strategy and stays as-is, not redirected.

## Redirect — 301 the legacy authority into the closest new page

None of these 12 InboxZap-era posts share any topic with Lumina (meeting recording/transcription/summaries), so there is no single closest article to fold them into — they redirect to the homepage (`/`) to consolidate the stray authority onto the current, on-strategy page rather than stranding it on a 404 or leaving off-brand content live. **Applied** in `next.config.js` `redirects()`.

- [x] `https://lumina.example/blog/post-1` → `/`
  - **Evidence (GSC):** 3900 impressions, 2 clicks, avg position 42.3
- [x] `https://lumina.example/blog/post-5` → `/`
  - **Evidence (GSC):** 1650 impressions, 1 clicks, avg position 45.3
- [x] `https://lumina.example/blog/post-4` → `/`
  - **Evidence (GSC):** 1380 impressions, 1 clicks, avg position 48.7
- [x] `https://lumina.example/blog/post-6` → `/`
  - **Evidence (GSC):** 1290 impressions, 1 clicks, avg position 44.6
- [x] `https://lumina.example/blog/post-10` → `/`
  - **Evidence (GSC):** 1080 impressions, 1 clicks, avg position 50.4
- [x] `https://lumina.example/blog/post-2` → `/`
  - **Evidence (GSC):** 1040 impressions, 1 clicks, avg position 46.9
- [x] `https://lumina.example/blog/post-12` → `/`
  - **Evidence (GSC):** 950 impressions, 0 clicks, avg position 54.1
- [x] `https://lumina.example/blog/post-9` → `/`
  - **Evidence (GSC):** 870 impressions, 0 clicks, avg position 58.3
- [x] `https://lumina.example/blog/post-11` → `/`
  - **Evidence (GSC):** 840 impressions, 0 clicks, avg position 52.6
- [x] `https://lumina.example/blog/post-8` → `/`
  - **Evidence (GSC):** 690 impressions, 0 clicks, avg position 49.8
- [x] `https://lumina.example/blog/post-3` → `/`
  - **Evidence (GSC):** 130 impressions, 0 clicks, avg position 47.2
- [x] `https://lumina.example/blog/post-7` → `/`
  - **Evidence (GSC):** 80 impressions, 0 clicks, avg position 55.8

## Redirect config (applied in `next.config.js`)

```
https://lumina.example/blog/post-1   ->  /
https://lumina.example/blog/post-2   ->  /
https://lumina.example/blog/post-3   ->  /
https://lumina.example/blog/post-4   ->  /
https://lumina.example/blog/post-5   ->  /
https://lumina.example/blog/post-6   ->  /
https://lumina.example/blog/post-7   ->  /
https://lumina.example/blog/post-8   ->  /
https://lumina.example/blog/post-9   ->  /
https://lumina.example/blog/post-10  ->  /
https://lumina.example/blog/post-11  ->  /
https://lumina.example/blog/post-12  ->  /
```

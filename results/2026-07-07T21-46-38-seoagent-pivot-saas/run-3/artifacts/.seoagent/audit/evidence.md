---
domain: lumina.example
origin: http://127.0.0.1:52525
origin_source: flag
source_render: false
captured_at: 2026-07-07T22:10:33.761Z
pages_crawled: 5
pages_discovered: 5
pages_captured: 4
capture_complete: false
note: >-
  Live-crawl evidence base. Every fact here was fetched from the live site.
  The audit must ground all Confirmed claims on THIS file, never on repo
  source or priors. Do NOT recommend adding schema / robots rules /
  canonical tags that already appear below.
---

# Live-Crawl Evidence — lumina.example

**Crawled origin:** http://127.0.0.1:52525 at 2026-07-07T22:10:33.761Z

## ⚠ Pages NOT captured (1 of 5 discovered) — crawl INCOMPLETE

The crawl discovered these pages but could not fetch them (each retried, then re-fetched sequentially). **The evidence below is INCOMPLETE: every finding and rollup in this file is a LOWER BOUND, not a complete picture.** Report this as a Confirmed finding, and never treat an uncaptured page as passing any check — no claim about these pages (present OR absent) is Confirmed.

- http://127.0.0.1:52525/faq — HTTP 404

## robots.txt (Confirmed)
- Fetched: HTTP 200
- Disallow rules present: **none** (do NOT claim any path is blocked)
- Sitemap declarations: https://lumina.example/sitemap.xml
- Raw contents:
```
User-agent: *
Allow: /

Sitemap: https://lumina.example/sitemap.xml
```

## sitemap.xml (Confirmed)
- **4 URLs**, 0 blog/article posts
  - No blog posts are in the sitemap — if the site has a blog, its posts are not discoverable this way (report as a finding, Confirmed).

## Site-wide rollup (Confirmed)
- **Pages missing canonical:** http://127.0.0.1:52525/pricing
- **Pages missing meta description:** _(none — all pages pass)_
- **Pages with multiple H1s:** http://127.0.0.1:52525/features
- **Pages with no structured data (zero JSON-LD):** http://127.0.0.1:52525/features, http://127.0.0.1:52525/pricing, http://127.0.0.1:52525/blog
- **Images missing alt:** 3 total — http://127.0.0.1:52525/ (3)

## http://127.0.0.1:52525/
- HTTP 200 · 118 body words
- **title:** Lumina — The AI Meeting Assistant for Teams
- **meta description:** Lumina records, transcribes, and summarizes your team's meetings, then turns them into action items automatically. Free for teams up to 5.
- **h1(s):** `Never take meeting notes again`
- **canonical:** `https://lumina.example/` (server-rendered)
- **JSON-LD @types present:** `Organization`, `SoftwareApplication` — **already present; do NOT recommend adding these**
- **Open Graph:** og:title, og:description, og:image, og:url, og:type
- **Twitter:** twitter:card, twitter:title, twitter:description
- **images:** 3 total, **3 missing alt** (`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='640' height='360'%3E%3Crect width='640' height='360' fill='%23e8ecf7'/%3E%3C/svg%3E`, `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96'%3E%3Ccircle cx='48' cy='48' r='40' fill='%236c8cff'/%3E%3C/svg%3E`, `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96'%3E%3Crect x='8' y='8' width='80' height='80' rx='16' fill='%23ffb26c'/%3E%3C/svg%3E`) (Confirmed)
- **Already present (do NOT recommend adding):** <title>, meta description, canonical, Open Graph tags, Twitter card, JSON-LD schema — verified in the server `<head>`.

## http://127.0.0.1:52525/features
- HTTP 200 · 101 body words
- **title:** Features — Lumina AI Meeting Assistant
- **meta description:** Everything Lumina does in your meetings: recording, speaker-labeled transcription, AI summaries, action items, and integrations with Slack and Notion.
- **h1(s):** `Features` | `Integrations` **(⚠ 2 H1s — conflicting)**
- **canonical:** `https://lumina.example/features` (server-rendered)
- **JSON-LD @types present:** _(none — safe to recommend adding schema)_
- **Open Graph:** og:title, og:description, og:image, og:url
- **Twitter:** twitter:card
- **images:** 0 total, all have alt
- **Already present (do NOT recommend adding):** <title>, meta description, canonical, Open Graph tags, Twitter card — verified in the server `<head>`.

## http://127.0.0.1:52525/pricing
- HTTP 200 · 53 body words
- **title:** Pricing — Lumina AI Meeting Assistant
- **meta description:** Lumina pricing: free for teams up to 5, Pro at $12 per seat per month, and custom Enterprise plans. Every plan includes unlimited transcription.
- **h1(s):** `Simple pricing for every team`
- **canonical:** _(none in server HTML)_
- **JSON-LD @types present:** _(none — safe to recommend adding schema)_
- **Open Graph:** og:title, og:description, og:image, og:url
- **Twitter:** twitter:card
- **images:** 0 total, all have alt
- **Already present (do NOT recommend adding):** <title>, meta description, Open Graph tags, Twitter card — verified in the server `<head>`.

## http://127.0.0.1:52525/blog
- HTTP 200 · 3 body words
- **title:** Blog — Lumina
- **meta description:** The Lumina blog: articles on meetings, productivity, and teamwork.
- **h1(s):** `Blog`
- **canonical:** `https://lumina.example/blog` (server-rendered)
- **JSON-LD @types present:** _(none — safe to recommend adding schema)_
- **Open Graph:** og:title, og:description, og:image, og:url
- **Twitter:** twitter:card
- **images:** 0 total, all have alt
- **⚠ client-rendered shell:** server HTML has 3 words and 0 in-body links — crawlers can't see the content (Confirmed). Any on-page data (counts, listings) is Likely/Hypothesis, not Confirmed.
- **Already present (do NOT recommend adding):** <title>, meta description, canonical, Open Graph tags, Twitter card — verified in the server `<head>`.

## http://127.0.0.1:52525/faq
- Not fetched (HTTP 404). No claims about this page are Confirmed.

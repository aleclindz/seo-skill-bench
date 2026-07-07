---
domain: lumina.example
generated_at: 2026-07-07T22:12:40.167Z
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

**New direction:** Lumina is an AI meeting assistant. It joins Zoom/Meet/Teams calls, records and transcribes them (speaker-labeled, 30+ languages), and produces a structured recap (decisions, blockers, action items) with routing to Slack/Notion/Confluence. Free for teams up to 5; Pro is $12/seat/mo; custom Enterprise. · saas · teams / knowledge workers who run recurring meetings (ops, product, sales)

**13 legacy assets** classified: 0 harvest · 13 redirect · 0 sunset.

## Correction (applied this session)

`https://lumina.example/` was auto-classified below as "redirect" with "relevance 0%" — that's a tooling artifact: the classifier compared the bare URL string against the new-direction text with nothing to match on. **This is wrong and was not applied.** The homepage is the current, live, on-strategy Lumina page and must never be redirected away from itself — it is **harvest/keep**. The real risk on this row is the branded-query mismatch (searchers landing on `/` from "inboxzap" queries hit a fully different product) — see `.seoagent/audit/latest.md` § High findings for that risk, which is monitor-and-accept, not a redirect target. Only the 12 `/blog/post-N` rows below were acted on: `next.config.js` now 301-redirects `/blog/post-:id` → `/blog` (see the redirects block already added).

## Redirect — 301 the legacy authority into the closest new page

- [x] `https://lumina.example/blog/post-1`
  - **Evidence (GSC):** 3900 impressions, 2 clicks, avg position 42.3
  - **Why:** Off-topic for the new direction (relevance 0%) but holds authority (3900 impressions, 2 clicks, avg position 42.3). Don't throw the equity away.
  - **Action:** 301-redirect https://lumina.example/blog/post-1 into the most relevant new page (pass the authority forward).
- [x] `https://lumina.example/blog/post-5` — redirected (next.config.js)
  - **Evidence (GSC):** 1650 impressions, 1 clicks, avg position 45.3
  - **Why:** Off-topic for the new direction (relevance 0%) but holds authority (1650 impressions, 1 clicks, avg position 45.3). Don't throw the equity away.
  - **Action:** 301-redirect https://lumina.example/blog/post-5 into the most relevant new page (pass the authority forward).
- [x] `https://lumina.example/blog/post-4` — redirected (next.config.js)
  - **Evidence (GSC):** 1380 impressions, 1 clicks, avg position 48.7
  - **Why:** Off-topic for the new direction (relevance 0%) but holds authority (1380 impressions, 1 clicks, avg position 48.7). Don't throw the equity away.
  - **Action:** 301-redirect https://lumina.example/blog/post-4 into the most relevant new page (pass the authority forward).
- [x] `https://lumina.example/blog/post-6` — redirected (next.config.js)
  - **Evidence (GSC):** 1290 impressions, 1 clicks, avg position 44.6
  - **Why:** Off-topic for the new direction (relevance 0%) but holds authority (1290 impressions, 1 clicks, avg position 44.6). Don't throw the equity away.
  - **Action:** 301-redirect https://lumina.example/blog/post-6 into the most relevant new page (pass the authority forward).
- [x] `https://lumina.example/blog/post-10` — redirected (next.config.js)
  - **Evidence (GSC):** 1080 impressions, 1 clicks, avg position 50.4
  - **Why:** Off-topic for the new direction (relevance 0%) but holds authority (1080 impressions, 1 clicks, avg position 50.4). Don't throw the equity away.
  - **Action:** 301-redirect https://lumina.example/blog/post-10 into the most relevant new page (pass the authority forward).
- [x] `https://lumina.example/blog/post-2` — redirected (next.config.js)
  - **Evidence (GSC):** 1040 impressions, 1 clicks, avg position 46.9
  - **Why:** Off-topic for the new direction (relevance 0%) but holds authority (1040 impressions, 1 clicks, avg position 46.9). Don't throw the equity away.
  - **Action:** 301-redirect https://lumina.example/blog/post-2 into the most relevant new page (pass the authority forward).
- [x] `https://lumina.example/blog/post-12` — redirected (next.config.js)
  - **Evidence (GSC):** 950 impressions, 0 clicks, avg position 54.1
  - **Why:** Off-topic for the new direction (relevance 0%) but holds authority (950 impressions, 0 clicks, avg position 54.1). Don't throw the equity away.
  - **Action:** 301-redirect https://lumina.example/blog/post-12 into the most relevant new page (pass the authority forward).
- [x] `https://lumina.example/blog/post-9` — redirected (next.config.js)
  - **Evidence (GSC):** 870 impressions, 0 clicks, avg position 58.3
  - **Why:** Off-topic for the new direction (relevance 0%) but holds authority (870 impressions, 0 clicks, avg position 58.3). Don't throw the equity away.
  - **Action:** 301-redirect https://lumina.example/blog/post-9 into the most relevant new page (pass the authority forward).
- [x] `https://lumina.example/blog/post-11` — redirected (next.config.js)
  - **Evidence (GSC):** 840 impressions, 0 clicks, avg position 52.6
  - **Why:** Off-topic for the new direction (relevance 0%) but holds authority (840 impressions, 0 clicks, avg position 52.6). Don't throw the equity away.
  - **Action:** 301-redirect https://lumina.example/blog/post-11 into the most relevant new page (pass the authority forward).
- [x] `https://lumina.example/blog/post-8` — redirected (next.config.js)
  - **Evidence (GSC):** 690 impressions, 0 clicks, avg position 49.8
  - **Why:** Off-topic for the new direction (relevance 0%) but holds authority (690 impressions, 0 clicks, avg position 49.8). Don't throw the equity away.
  - **Action:** 301-redirect https://lumina.example/blog/post-8 into the most relevant new page (pass the authority forward).
- [~] `https://lumina.example/` — **NOT applied, see Correction above.**
  - **Evidence (GSC):** 600 impressions, 18 clicks, avg position 4.5
  - ~~Off-topic for the new direction (relevance 0%) but holds authority~~ — the homepage IS the current site; this row's disposition is corrected to **harvest/keep**, not redirect.
  - **Action:** none (keep as-is). Monitor the "inboxzap" branded-query mismatch instead — see `.seoagent/audit/latest.md`.
- [x] `https://lumina.example/blog/post-3` — redirected (next.config.js)
  - **Evidence (GSC):** 130 impressions, 0 clicks, avg position 47.2
  - **Why:** Off-topic for the new direction (relevance 0%) but holds authority (130 impressions, 0 clicks, avg position 47.2). Don't throw the equity away.
  - **Action:** 301-redirect https://lumina.example/blog/post-3 into the most relevant new page (pass the authority forward).
- [x] `https://lumina.example/blog/post-7` — redirected (next.config.js)
  - **Evidence (GSC):** 80 impressions, 0 clicks, avg position 55.8
  - **Why:** Off-topic for the new direction (relevance 0%) but holds authority (80 impressions, 0 clicks, avg position 55.8). Don't throw the equity away.
  - **Action:** 301-redirect https://lumina.example/blog/post-7 into the most relevant new page (pass the authority forward).

## Redirect config (proposed — approval-gated)

These `redirect` dispositions can be expressed as 301s. Pick the target new
page for each, then apply (the operator shows the diff before writing):

```
https://lumina.example/blog/post-1  ->  <choose the closest new page>
https://lumina.example/blog/post-5  ->  <choose the closest new page>
https://lumina.example/blog/post-4  ->  <choose the closest new page>
https://lumina.example/blog/post-6  ->  <choose the closest new page>
https://lumina.example/blog/post-10  ->  <choose the closest new page>
https://lumina.example/blog/post-2  ->  <choose the closest new page>
https://lumina.example/blog/post-12  ->  <choose the closest new page>
https://lumina.example/blog/post-9  ->  <choose the closest new page>
https://lumina.example/blog/post-11  ->  <choose the closest new page>
https://lumina.example/blog/post-8  ->  <choose the closest new page>
https://lumina.example/  ->  <choose the closest new page>
https://lumina.example/blog/post-3  ->  <choose the closest new page>
https://lumina.example/blog/post-7  ->  <choose the closest new page>
```

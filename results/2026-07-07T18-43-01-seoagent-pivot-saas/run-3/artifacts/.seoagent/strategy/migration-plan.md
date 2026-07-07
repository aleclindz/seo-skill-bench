---
domain: lumina.example
generated_at: 2026-07-07T19:24:22.288Z
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

**New direction:** Lumina — AI meeting assistant for teams that joins calls, transcribes, and summarizes meetings with action items (was InboxZap, an email inbox-cleanup tool)

**13 legacy assets** classified: 0 harvest · 13 redirect · 0 sunset.

## Redirect — 301 the legacy authority into the closest new page

- [ ] `https://lumina.example/blog/post-1`
  - **Evidence (GSC):** 3900 impressions, 2 clicks, avg position 42.3
  - **Why:** Off-topic for the new direction (relevance 0%) but holds authority (3900 impressions, 2 clicks, avg position 42.3). Don't throw the equity away.
  - **Action:** 301-redirect https://lumina.example/blog/post-1 into the most relevant new page (pass the authority forward).
- [ ] `https://lumina.example/blog/post-5`
  - **Evidence (GSC):** 1650 impressions, 1 clicks, avg position 45.3
  - **Why:** Off-topic for the new direction (relevance 0%) but holds authority (1650 impressions, 1 clicks, avg position 45.3). Don't throw the equity away.
  - **Action:** 301-redirect https://lumina.example/blog/post-5 into the most relevant new page (pass the authority forward).
- [ ] `https://lumina.example/blog/post-4`
  - **Evidence (GSC):** 1380 impressions, 1 clicks, avg position 48.7
  - **Why:** Off-topic for the new direction (relevance 0%) but holds authority (1380 impressions, 1 clicks, avg position 48.7). Don't throw the equity away.
  - **Action:** 301-redirect https://lumina.example/blog/post-4 into the most relevant new page (pass the authority forward).
- [ ] `https://lumina.example/blog/post-6`
  - **Evidence (GSC):** 1290 impressions, 1 clicks, avg position 44.6
  - **Why:** Off-topic for the new direction (relevance 0%) but holds authority (1290 impressions, 1 clicks, avg position 44.6). Don't throw the equity away.
  - **Action:** 301-redirect https://lumina.example/blog/post-6 into the most relevant new page (pass the authority forward).
- [ ] `https://lumina.example/blog/post-10`
  - **Evidence (GSC):** 1080 impressions, 1 clicks, avg position 50.4
  - **Why:** Off-topic for the new direction (relevance 0%) but holds authority (1080 impressions, 1 clicks, avg position 50.4). Don't throw the equity away.
  - **Action:** 301-redirect https://lumina.example/blog/post-10 into the most relevant new page (pass the authority forward).
- [ ] `https://lumina.example/blog/post-2`
  - **Evidence (GSC):** 1040 impressions, 1 clicks, avg position 46.9
  - **Why:** Off-topic for the new direction (relevance 0%) but holds authority (1040 impressions, 1 clicks, avg position 46.9). Don't throw the equity away.
  - **Action:** 301-redirect https://lumina.example/blog/post-2 into the most relevant new page (pass the authority forward).
- [ ] `https://lumina.example/blog/post-12`
  - **Evidence (GSC):** 950 impressions, 0 clicks, avg position 54.1
  - **Why:** Off-topic for the new direction (relevance 0%) but holds authority (950 impressions, 0 clicks, avg position 54.1). Don't throw the equity away.
  - **Action:** 301-redirect https://lumina.example/blog/post-12 into the most relevant new page (pass the authority forward).
- [ ] `https://lumina.example/blog/post-9`
  - **Evidence (GSC):** 870 impressions, 0 clicks, avg position 58.3
  - **Why:** Off-topic for the new direction (relevance 0%) but holds authority (870 impressions, 0 clicks, avg position 58.3). Don't throw the equity away.
  - **Action:** 301-redirect https://lumina.example/blog/post-9 into the most relevant new page (pass the authority forward).
- [ ] `https://lumina.example/blog/post-11`
  - **Evidence (GSC):** 840 impressions, 0 clicks, avg position 52.6
  - **Why:** Off-topic for the new direction (relevance 0%) but holds authority (840 impressions, 0 clicks, avg position 52.6). Don't throw the equity away.
  - **Action:** 301-redirect https://lumina.example/blog/post-11 into the most relevant new page (pass the authority forward).
- [ ] `https://lumina.example/blog/post-8`
  - **Evidence (GSC):** 690 impressions, 0 clicks, avg position 49.8
  - **Why:** Off-topic for the new direction (relevance 0%) but holds authority (690 impressions, 0 clicks, avg position 49.8). Don't throw the equity away.
  - **Action:** 301-redirect https://lumina.example/blog/post-8 into the most relevant new page (pass the authority forward).
- [ ] `https://lumina.example/`
  - **Evidence (GSC):** 600 impressions, 18 clicks, avg position 4.5
  - **Why:** Off-topic for the new direction (relevance 0%) but holds authority (600 impressions, 18 clicks, avg position 4.5). Don't throw the equity away.
  - **Action:** 301-redirect https://lumina.example/ into the most relevant new page (pass the authority forward).
- [ ] `https://lumina.example/blog/post-3`
  - **Evidence (GSC):** 130 impressions, 0 clicks, avg position 47.2
  - **Why:** Off-topic for the new direction (relevance 0%) but holds authority (130 impressions, 0 clicks, avg position 47.2). Don't throw the equity away.
  - **Action:** 301-redirect https://lumina.example/blog/post-3 into the most relevant new page (pass the authority forward).
- [ ] `https://lumina.example/blog/post-7`
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

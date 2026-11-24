---
domain: lumina.example
generated_at: 2026-11-24T00:25:08.312Z
assets: 13
harvest: 1
redirect: 12
sunset: 0
note: >-
  Per-asset migration plan for legacy ranking authority. Every disposition
  is backed by real Google Search Console impressions/position. Run this
  when the live positioning has shifted away from what history ranks for.
---

# Migration Plan — lumina.example

**New direction:** AI meeting assistant (Lumina): automatic meeting recording, transcription, and action-item summaries for teams — pivoted away from the prior email-inbox-cleanup product (InboxZap)

**13 legacy assets** classified: 1 harvest · 12 redirect · 0 sunset.

> **Manual override:** the classifier flagged `https://lumina.example/` itself as "redirect" on a 0%-relevance heuristic. That's wrong and is not applied — the homepage *is* the current site; there is nowhere to redirect it to. Its GSC row (600 impressions, 18 clicks, #4.5) is driven partly by people still searching the old brand name "inboxzap" (#4.1, 4.38% CTR in `gsc/Queries.csv`) and landing on the current Lumina homepage — that's **working brand-transition traffic to harvest and protect**, not legacy equity to move. Corrected disposition: **Harvest** (no redirect; see HARVEST note below). The 12 blog posts below are genuinely off-topic (email/inbox content vs. a meeting-assistant product) and the redirect/consolidate call stands for them.

## Harvest — keep as-is (corrected from the classifier's auto-flag)

- [x] `https://lumina.example/` — **Harvest, not redirect.** 600 impressions, 18 clicks, avg position 4.5, partly on the legacy brand query "inboxzap" (#4.1). This is the live homepage already serving the new product; protect this ranking (don't touch internal linking or the URL). Optional: a one-line "formerly InboxZap? Here's what we do now" note could capture confused legacy-brand searchers, but is not required.

## Redirect — 301 the legacy authority into the closest new page

Target for all 12: none of these topics (email/inbox cleanup) have a relevant
replacement on the new site yet, and several already get ~0 clicks despite
real impressions (position 42-58 — effectively invisible). Recommended target
for now is the living `/blog` index (nearest content hub) to consolidate
whatever authority exists; revisit per-post mapping once Lumina-relevant
pillar content (see `strategy/clusters/`) is live and a genuinely closer
target exists. If 90 days post-redirect shows no residual value (no
referral/organic lift on `/blog`), sunset instead of maintaining the redirect.

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

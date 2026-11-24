---
domain: lumina.example
generated_at: 2026-10-19T03:44:32.961Z
assets: 13
harvest: 1
redirect: 12
sunset: 0
note: >-
  Per-asset migration plan for legacy ranking authority. Every disposition
  is backed by real Google Search Console impressions/position. Run this
  when the live positioning has shifted away from what history ranks for.
  Homepage row corrected by hand below — the mechanical classifier scores
  topical relevance off the URL string, which is blank for "/", so it
  mislabeled the current, on-strategy homepage as 0% relevant; sanity-check
  per `references/migration-planning.md`.
---

# Migration Plan — lumina.example

**New direction:** Lumina — AI meeting assistant for teams (records, transcribes, summarizes meetings into action items). Formerly InboxZap, an email-inbox-cleanup tool; that product and audience no longer apply.

**13 legacy assets** classified: 1 harvest · 12 redirect · 0 sunset.

## Harvest — keep, already on-strategy

- [x] `https://lumina.example/` (corrected — see frontmatter note)
  - **Evidence (GSC):** 600 impressions, 18 clicks, avg position 4.5
  - **Why:** This is the CURRENT Lumina homepage — live evidence (`evidence.md` § `/`) confirms it already serves Lumina copy, title, and schema. It ranks decently (position 4.5) for its own branded/generic traffic. The auto-classifier flagged it "0% relevant" only because URL paths carry no topic words to score — not a real mismatch. No action needed; keep and continue optimizing.

## Redirect — 301 the legacy authority into the closest new page

Every row below is **legacy InboxZap content** (email-cleanup topic) — confirmed Confirmed by direct fetch (titles: "How to Reach Inbox Zero," "10 Gmail Filters," "How to Bulk Delete Emails," etc.) that has nothing to do with Lumina's meeting-assistant product. **Lumina has not yet published any blog content** (Phase 2/3 roadmap below), so there is no topically-closer page to redirect into today. Until the roadmap's first cluster ships, redirect every one of these into `/blog` (the content hub) to consolidate rather than orphan the authority; re-point each 301 at its closest Lumina article as soon as one exists — this list is the per-asset checklist to revisit then.

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
  - **Why:** Off-topic for the new direction but holds authority (130 impressions). **Also cannibalizes `/blog/post-7`** — both posts target the same query intent ("bulk delete emails"), confirmed by direct fetch: near-identical title, structure, and content. Since both are leaving anyway, redirect the weaker of the pair (this one, 130 impressions) into the stronger one's target.
  - **Action:** 301 to `/blog` (see note above).
- [ ] `https://lumina.example/blog/post-7`
  - **Evidence (GSC):** 80 impressions, 0 clicks, avg position 55.8
  - **Why:** Off-topic for the new direction but holds authority. Same cannibalization pair as `post-3` above (both titled around "bulk delete emails").
  - **Action:** 301 to `/blog` (see note above).

## Redirect config (proposed — approval-gated)

These `redirect` dispositions can be expressed as 301s once Lumina has published content. **Not applied yet** — these legacy post pages live outside this repo's current source tree (served separately from `app/blog/`), so the 301s must be added wherever that content is actually hosted/deployed. Proposed mapping, pending owner approval:

```
https://lumina.example/blog/post-1   ->  https://lumina.example/blog   (until a Lumina article on meeting-notes workflow exists)
https://lumina.example/blog/post-2   ->  https://lumina.example/blog
https://lumina.example/blog/post-3   ->  https://lumina.example/blog
https://lumina.example/blog/post-4   ->  https://lumina.example/blog
https://lumina.example/blog/post-5   ->  https://lumina.example/blog
https://lumina.example/blog/post-6   ->  https://lumina.example/blog
https://lumina.example/blog/post-7   ->  https://lumina.example/blog
https://lumina.example/blog/post-8   ->  https://lumina.example/blog
https://lumina.example/blog/post-9   ->  https://lumina.example/blog
https://lumina.example/blog/post-10  ->  https://lumina.example/blog
https://lumina.example/blog/post-11  ->  https://lumina.example/blog
https://lumina.example/blog/post-12  ->  https://lumina.example/blog
```

Re-point each one at its closest Lumina article (not `/blog`) as soon as the content roadmap below ships a topical match.

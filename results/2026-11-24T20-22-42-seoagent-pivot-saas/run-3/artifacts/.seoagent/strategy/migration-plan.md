---
domain: 127.0.0.1:44883
generated_at: 2026-11-24T20:46:14.305Z
assets: 52
harvest: 1
redirect: 51
sunset: 0
note: >-
  Per-asset migration plan for legacy ranking authority. Synthesized from two
  `seoagent migrate` runs (gsc/Pages.csv for URL-level dispositions,
  gsc/Queries.csv for query-level dispositions) plus one manual correction:
  the tool classified the live homepage itself as "redirect — 0% relevance",
  which is wrong (it IS the current, on-strategy page, confirmed by
  evidence.md) — corrected to harvest/no-action below.
---

# Migration Plan — 127.0.0.1:44883

**New direction:** Lumina — AI meeting assistant for teams: records, transcribes, and summarizes meetings into action items.

**Legacy direction found in GSC:** InboxZap — bulk email delete / unsubscribe / inbox-zero tool. Every query and page below except the homepage is 100% legacy InboxZap demand with zero topical overlap with "AI meeting assistant."

## Harvest — already on-strategy, no migration needed

- [x] `https://lumina.example/` (maps to the live homepage)
  - **Evidence (GSC):** 600 impressions, 18 clicks, avg position 4.5
  - **Correction:** `seoagent migrate` classified this `redirect` at 0% relevance. That's a tool artifact — a bare homepage URL carries no query text for the relevance scorer to match against. The homepage **is** the current Lumina page (confirmed live and in `evidence.md`); its GSC performance is **branded demand for the current product**, not legacy authority to migrate. No action — this is the strongest asset on the site (position 4.5, best CTR of any row) and should anchor internal linking from every new article.

## Redirect — 301 the legacy authority into the closest new page

Two different kinds of legacy equity here need two different redirect targets:

**A. Branded "inboxzap" queries — redirect to the homepage** (tell searchers the product rebranded):
- `inboxzap` — 320 impressions, 14 clicks, avg position **4.1**
- `inboxzap app` — 96 impressions, 3 clicks, avg position 4.8
- `inboxzap review` — 150 impressions, 1 click, avg position **8.9**

These three are the only rows in the entire export with real clicks and a competitive position — they're actual humans searching for the old product name. This is the one piece of legacy equity worth protecting with a real redirect: point any surviving `inboxzap`-branded URL (or add a `next.config.js` redirect for `/inboxzap*` if such a path exists) at `/`, so that brand equity lands on the rebrand explanation rather than a 404.

**B. The 12 legacy blog posts (`/blog/post-1` … `/blog/post-12`) — redirect to `/blog`:**

| URL | Impressions | Clicks | Avg. position |
|---|---|---|---|
| /blog/post-1 | 3900 | 2 | 42.3 |
| /blog/post-5 | 1650 | 1 | 45.3 |
| /blog/post-4 | 1380 | 1 | 48.7 |
| /blog/post-6 | 1290 | 1 | 44.6 |
| /blog/post-10 | 1080 | 1 | 50.4 |
| /blog/post-2 | 1040 | 1 | 46.9 |
| /blog/post-12 | 950 | 0 | 54.1 |
| /blog/post-9 | 870 | 0 | 58.3 |
| /blog/post-11 | 840 | 0 | 52.6 |
| /blog/post-8 | 690 | 0 | 49.8 |
| /blog/post-3 | 130 | 0 | 47.2 |
| /blog/post-7 | 80 | 0 | 55.8 |

**Why redirect, not sunset, despite 0% topical relevance:** each clears the ≥50-impression "worth preserving" floor, so the tool's deliberate threshold says redirect rather than let them 404. **But sanity-check the impression counts against position and CTR before treating this as high-value traffic**: positions 42–58 are page 4–6 of Google, and CTR across all twelve is ~0.05–0.1% (13 total clicks across 13,900 impressions). This is not meaningful current traffic — it's stale indexation that hasn't fully decayed yet. There is no on-strategy content to harvest these into (an "AI meeting assistant" company has no reason to publish about Gmail storage or email unsubscribing), so: **301 all twelve to `/blog`** (the closest surviving content hub) purely to avoid a mass-404 signal, set expectations low, and let them age out of the index naturally. Do not spend writing effort trying to make these "relevant" to the new direction.

**C. The remaining 37 informational queries (inbox zero, Gmail storage, email cleanup, Outlook filters, email anxiety, etc.) — no dedicated action, same `/blog` redirect target as their legacy pages above.** Full list with impressions/position: see the per-query detail captured by `seoagent migrate --csv gsc/Queries.csv` (re-run to regenerate; this file keeps the page-level view as primary since redirects execute per-URL, not per-query). None of these clear even 1 click except `how to reach inbox zero` (1 click, 1180 impressions) and a handful of singles — treat this bucket as decaying legacy indexation, not a traffic source to actively defend.

## Redirect config (proposed — approval-gated)

```
https://lumina.example/blog/post-1   -> /blog
https://lumina.example/blog/post-2   -> /blog
https://lumina.example/blog/post-3   -> /blog
https://lumina.example/blog/post-4   -> /blog
https://lumina.example/blog/post-5   -> /blog
https://lumina.example/blog/post-6   -> /blog
https://lumina.example/blog/post-7   -> /blog
https://lumina.example/blog/post-8   -> /blog
https://lumina.example/blog/post-9   -> /blog
https://lumina.example/blog/post-10  -> /blog
https://lumina.example/blog/post-11  -> /blog
https://lumina.example/blog/post-12  -> /blog
(any surviving inboxzap-branded URL) -> /
```

**Not applied yet.** These 12 legacy post URLs exist on the live site (confirmed: all returned HTTP 200 when checked directly) but have **no corresponding page file anywhere in this repo** — only `app/page.tsx`, `app/blog/page.tsx`, and `app/layout.tsx` exist. There is no `next.config.js`/`vercel.json` redirect block to add these 301s to without guessing at infrastructure this checkout doesn't contain. **Action needed from the owner:** confirm where `/blog/post-*` is actually served from (a separate legacy app, a CMS, a reverse proxy) so the redirects can be configured at the right layer — adding them to this repo's `next.config.js` will do nothing if production isn't running this repo's build for that path. See `audit/latest.md` § Biggest Issue.

## Sunset

None. Every legacy row clears the impression floor for at least a soft redirect; nothing here is negligible enough to just let 404.

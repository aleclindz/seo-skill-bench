---
domain: lumina.example
generated_at: 2026-11-24T00:12:00.000Z
assets: 15
harvest: 1
redirect: 12
sunset: 2
note: >-
  Per-asset migration plan for legacy ranking authority (InboxZap -> Lumina
  pivot). Curated by hand on top of `seoagent migrate --csv gsc/Pages.csv`
  and `--csv gsc/Queries.csv`: the mechanical tool scores topical overlap by
  shared vocabulary against the new-direction string, which both
  undercounts true overlap (treats "email overload" as 50-67% relevant to a
  meeting assistant) and, on the Pages sheet, has no text to score at all
  (every row reads "relevance 0%", which is why it flagged the current
  homepage itself as legacy). The dispositions below replace the raw tool
  output per the skill's own "sanity-check borderline rows" guidance; see
  rationale on each entry.
---

# Migration Plan — lumina.example (InboxZap -> Lumina)

**New direction:** Lumina, an AI meeting assistant that records, transcribes, and summarizes team video calls into decisions and action items. Zero feature overlap with InboxZap (bulk email delete / unsubscribe / inbox zero).

**Live-crawl confirmed:** `https://lumina.example/blog/post-1` through `/post-12` are still live, still 100% about email-inbox cleanup (titles verified by fetching each page — see below), and still earning real GSC impressions. None of them mention Lumina or meetings. The current `/blog` index cannot link to them (client-side fetch to a nonexistent `/api/posts` — see audit finding `client_rendered_shell`), so they are already orphaned from internal navigation.

## Harvest — brand equity, not content (1 asset)

- [ ] **Branded "inboxzap" / "inboxzap app" / "inboxzap review" searches** (320 + 96 + 150 = 566 impressions, 18 clicks combined, avg position 4.1-8.9 — real, high-intent traffic)
  - **Evidence (GSC Queries.csv):** `inboxzap` 320 impr/14 clicks/pos 4.1; `inboxzap app` 96 impr/3 clicks/pos 4.8; `inboxzap review` 150 impr/1 click/pos 8.9.
  - **Why harvest, not redirect/sunset:** These are brand-name searches, not topic searches — there is no URL to redirect because people searching the old brand name already land on the (correctly rebranded) homepage. The risk is confusion, not a missing page: someone who remembers "InboxZap" and finds "Lumina — AI meeting assistant" with no acknowledgment may bounce, thinking they hit the wrong site.
  - **Action:** Add one sentence to the homepage (and `<title>`'s implicit context) acknowledging the rebrand — e.g. "Lumina (formerly InboxZap)" in the footer or an `## Our story` note — so branded search traffic converts instead of bouncing. Implemented in this session: footer credit updated to "Lumina Labs, Inc. (formerly InboxZap)".

## Redirect — consolidate decaying legacy posts into the blog hub (12 assets)

- [ ] `https://lumina.example/blog/post-1` — "How to Reach Inbox Zero in 2024" — 3900 impr / 2 clicks / pos 42.3
- [ ] `https://lumina.example/blog/post-2` — "10 Gmail Filters That Save You an Hour a Day" — 1040 impr / 1 click / pos 46.9
- [ ] `https://lumina.example/blog/post-4` — "Unsubscribe From Newsletters the Fast Way" — 1380 impr / 1 click / pos 48.7
- [ ] `https://lumina.example/blog/post-5` — "Gmail Storage Full? Here's How to Free Up Space" — 1650 impr / 1 click / pos 45.3
- [ ] `https://lumina.example/blog/post-6` — "The Best Email Cleanup Apps Compared" — 1290 impr / 1 click / pos 44.6
- [ ] `https://lumina.example/blog/post-8` — "Archive vs Delete" — 690 impr / 0 clicks / pos 49.8
- [ ] `https://lumina.example/blog/post-9` — "Email Overload: Why Your Inbox Is Stressing You Out" — 870 impr / 0 clicks / pos 58.3
- [ ] `https://lumina.example/blog/post-10` — "How to Clean Up Your Outlook Inbox" — 1080 impr / 1 click / pos 50.4
- [ ] `https://lumina.example/blog/post-11` — "Automatic Email Sorting" — 840 impr / 0 clicks / pos 52.6
- [ ] `https://lumina.example/blog/post-12` — "How to Delete Old Emails in Bulk" — 950 impr / 0 clicks / pos 54.1
- [ ] `https://lumina.example/blog/post-3` — "How to Bulk Delete Emails" — 130 impr / 0 clicks / pos 47.2
- [ ] `https://lumina.example/blog/post-7` — "Bulk Delete Emails: Complete Guide" — 80 impr / 0 clicks / pos 55.8

  - **Why redirect to `/blog` (the hub), not the homepage, and not a 1:1 "closest new page":** None of these 12 posts has a genuine topical match in the new Lumina content (email cleanup and meeting transcription do not overlap) — rewriting any of them "in place" as Lumina content would be a bait-and-switch against existing search intent and would not satisfy the query anyway. But all 12 still rank (page 4-6) and earn real impressions, so a hard 404/410 throws away residual link equity and leaves dead links if anything external still points at them. Redirecting an unrelated content URL straight to the product homepage is its own anti-pattern (jarring for the visitor, and increasingly treated as a soft-404 signal by Google when done in bulk). Pointing them at the blog index is the least-lossy option: it keeps the URL alive, sends the visitor to real content (the new Lumina blog), and consolidates the residual authority into one page instead of scattering 12 weak redirects.
  - **Action:** `next.config.js` redirect rule `source: '/blog/post-:id', destination: '/blog', permanent: true` — implemented in this session (see diff). Do not recreate any of these as Lumina articles.

## Sunset (2 assets — negligible authority)

- [ ] `inbox cleaner free` — 310 impr / 0 clicks / pos 58.6 — generic query, no single owning URL in the GSC export, position far outside page 1. No action; let it decay naturally as the old post content stops being indexed.
- [ ] `mass delete emails gmail` — 330 impr / 0 clicks / pos 52.9 — same reasoning.
  - All remaining Queries.csv rows below ~300 impressions and position 50+ fall in this same bucket implicitly (e.g. `clear gmail space`, `auto sort emails gmail`, `outlook focused inbox tips`) — none are worth individual tracking; they ride on whichever post-N redirect above happens to cover their topic, or simply decay.

## What this plan does NOT do

- It does not rewrite any legacy post as Lumina content ("harvest" in the mechanical tool's output was a false positive from shallow keyword overlap — see frontmatter note).
- It does not redirect the current homepage (`https://lumina.example/`) — the raw `migrate --csv gsc/Pages.csv` run flagged it as "off-topic, relevance 0%" because the Pages sheet has no query text to score, only URLs. The homepage is the live, correct, current asset — excluded from this plan.

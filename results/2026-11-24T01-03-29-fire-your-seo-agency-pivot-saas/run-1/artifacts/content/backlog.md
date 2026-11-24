# Content backlog & redirect decisions

## Why this exists

GSC (`gsc/Queries.csv`, `gsc/Pages.csv`) shows ~100% of historical impressions and
all blog-post rankings are for InboxZap-era, email-cleanup queries ("bulk delete
emails", "gmail storage full", "inbox zero method", ...). None of it maps to
Lumina, the current product (AI meeting assistant). Those posts (`/blog/post-1`
through `/blog/post-12`) were also already ranking poorly (position 40-58,
near-zero clicks despite 300-4000 impressions) before the pivot, so there is
nothing to preserve by "updating" them for the new brand — the topics themselves
are gone.

## Redirect decision (done)

All 12 legacy posts now 301 to `/blog/inboxzap-is-now-lumina` (see
`next.config.js`). This consolidates whatever link equity they have instead of
leaving them live as orphaned, off-product content, and gives anyone who
remembers the old brand (query "inboxzap", position 4.1, 4.38% CTR — the
healthiest query in the whole export) a path into the current product instead
of a dead end.

## New question-mapped pages (done)

One question = one page, per the skill's Phase 2. Shipped in `content/posts.ts`:

- `inboxzap-is-now-lumina` — "What happened to InboxZap?" (captures residual
  brand-name search traffic)
- `how-ai-meeting-notes-work` — "How do AI meeting note-taking apps work?"
- `meeting-summary-that-people-actually-read` — "How do you write a meeting
  summary people actually read?"

These target the current product's buyer questions. There is no GSC signal for
them yet (the product just pivoted), so they were chosen from the actual
features/pricing content rather than from query data — re-prioritize once the
measurement loop below has data.

## Backlog (not yet written)

Next candidates, in priority order, once the pages above show traction:

1. "Zoom vs Google Meet vs Teams: which video platforms do AI note-takers
   support?" — comparison/compatibility intent.
2. "How to get action items out of a meeting recording automatically."
3. "AI meeting assistant vs. taking your own notes: when each makes sense."
4. "How long should a meeting summary be?"

Each new post must pass the publish gate before shipping: direct answer in the
first paragraph, SSR (no client-only data fetching), title/description/canonical/
OG set, Article (+ FAQPage where applicable) JSON-LD matching the visible text
exactly, an internal link to `/features` or `/pricing`, inclusion in
`app/sitemap.ts` (automatic via `content/posts.ts`), and a `public/llms.txt`
entry.

## Measurement loop (Phase 6)

Baseline recorded 2026-11-24, the day these changes shipped:

- GSC export in `gsc/` — pre-change state. 0 impressions for any Lumina/meeting-
  assistant query; all volume on InboxZap-era queries.
- `/blog/post-1..12` — live, no redirect, 200.
- `/blog` index — depended on a client-side fetch to `/api/posts`, which 404s;
  no content ever rendered for users or crawlers.
- `og-lumina.png` referenced by every page's `og:image` but returns 404.

Re-check on **2026-12-08** (14 days out):

1. GSC Pages/Queries export: do `how-ai-meeting-notes-work` and
   `meeting-summary-that-people-actually-read` show impressions yet? Does the
   "inboxzap" brand query's clickthrough hold up now that it lands on a real
   page instead of a dead end?
2. `curl -sIL /blog/post-1` through `post-12`: confirm the 301s are being
   followed and credited (Search Console → Pages → confirm old URLs move from
   "indexed" to "page with redirect").
3. Any AI-answer citation of Lumina (via a GEO-citation check or direct
   prompting of assistants) using `llms.txt`'s content instead of stale
   InboxZap facts.

Track "share of published posts with nonzero impressions," not "posts
published per month" — volume was never the problem here.

## Explicitly not done, and why

- Did not fabricate a replacement `og-lumina.png`. It's referenced everywhere
  and 404s, which breaks social/AI preview cards, but generating a binary
  image asset isn't something to guess at — flagging it for the team to supply
  a real 1200x630 image at `/public/img/og-lumina.png`.
- Did not request or fabricate backlinks. Out of scope per the skill's
  no-shortcuts rule.
- Did not rewrite the 12 legacy posts' content to "fit" Lumina — they're about
  email cleanup, and stretching them to mention meetings would make the
  structured data and visible text say something false.

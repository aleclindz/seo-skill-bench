# Fixture: pivot-saas ("Lumina")

> **SPOILER WARNING.** This file describes the fixture's planted defects and traps.
> Never expose this file (or `manifest.json`) to an entrant's session. The harness
> copies only `repo/` and `gsc/` into the run workspace and serves only `live/`.

## The narrative

**Lumina** (`lumina.example`) used to be **InboxZap** — an inbox cleanup tool. The
company has pivoted: the live site now positions Lumina as **the AI meeting assistant
for teams**. Three things are deliberately out of sync:

1. **The live site** reflects the new positioning (meeting assistant), with a small,
   realistic set of technical SEO defects planted in it.
2. **The Search Console export** is 100% historical: every one of its ~40 queries is
   inbox/email-cleanup themed (~14,000 impressions, ~25 clicks — almost all of them on
   12 legacy blog posts ranking positions 40–80). There is not a single meeting-related
   query.
3. **The source repo** is *partially* stale relative to production: the homepage
   component matches the live pivot, but `app/layout.tsx` still carries the full
   InboxZap-era metadata, `app/sitemap.ts` still emits only 4 static URLs, and
   `app/blog/page.tsx` still client-renders the blog index.

## What this fixture tests

The setup separates **intelligence** from **trend-parroting**:

- A checklist skill will crawl the site, recite generic fixes, and likely walk into the
  traps (recommend schema/OG/canonicals that already exist, "fix" a permissive
  robots.txt, or invent search volumes for meeting keywords that appear nowhere in the
  data).
- An intelligent skill will notice the pivot, treat the GSC history as **legacy demand
  to be migrated**, not a roadmap to be chased, reconcile the stale repo against
  production, and make per-asset harvest/redirect/sunset decisions for the 12 old posts
  grounded in the actual numbers.

## Planted defects (10, weighted 1–3)

| ID  | W | Defect |
| --- | - | ------ |
| D1  | 3 | `sitemap.xml` lists only 4 URLs — none of the 12 blog posts |
| D2  | 3 | Blog index is a client-rendered "Loading posts…" shell with zero crawlable post links |
| D3  | 2 | `/pricing` is the only page missing a canonical |
| D4  | 2 | Nav links to `/faq` → 404; repo redirects `/faq` → `/#faq` but no `id="faq"` anchor exists |
| D5  | 2 | All 12 blog posts lack a meta description |
| D6  | 2 | post-3 and post-7 cannibalize "bulk delete emails" (GSC shows both at pos 40–60) |
| D7  | 1 | `/features` has two `<h1>` elements |
| D8  | 3 | Repo `layout.tsx` metadata is still InboxZap — stale vs production; a deploy would regress the live titles |
| D9  | 1 | Homepage has 3 `<img>` tags without `alt` |
| D10 | 2 | Blog posts have no BlogPosting/Article structured data |

## Traps (5 — recommending these = objectively scored hallucination)

| ID | W | Already true on the live site |
| -- | - | ----------------------------- |
| T1 | 3 | Homepage already serves Organization + SoftwareApplication JSON-LD |
| T2 | 2 | Homepage (and posts) already have complete OG + `twitter:card=summary_large_image` |
| T3 | 2 | Canonicals exist everywhere except `/pricing` (claiming site-wide/homepage canonical gaps is a violation) |
| T4 | 1 | `robots.txt` is fully permissive — no Disallow at all |
| T5 | 3 | GSC has zero meeting-related queries — any cited meeting-keyword volume/position figure is invented |

## Blind-judged questions (3)

- **J1 intent inference** — did it detect the pivot and treat the GSC history as legacy?
- **J2 migration plan** — per-asset harvest/redirect/sunset decisions for the 12 posts, grounded in the numbers?
- **J3 strategic balance** — avoided both failure modes (chasing legacy demand blindly / abandoning it with no transition)?

Full machine-readable answer key with match patterns: [`manifest.json`](manifest.json).
Ground-truth consistency is enforced by `node harness/validate-fixture.mjs --fixture pivot-saas`.

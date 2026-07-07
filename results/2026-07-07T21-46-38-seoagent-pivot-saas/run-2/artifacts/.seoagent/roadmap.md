---
last_updated_at: 2026-07-07T22:00:00.000Z
---

# Roadmap — lumina.example

## Critical

- [ ] Server-render/pre-render `/blog` (SSR/SSG/ISR) — currently a client-rendered empty shell, crawlers see no content. Blocked on the same root cause as the item below.

## High

- [ ] Fix or remove the dead `/faq` nav link (404 live; no `#faq` section exists on the homepage to redirect to).
- [ ] ~~**Reconcile repo with production.** `/features`, `/pricing`, and the blog's `/api/posts` backend are live and content-complete in production but have no source in this repo — pull the real implementations into version control before doing further source-level SEO work here. (Repo's stale InboxZap `<title>`/OG in `app/layout.tsx` already fixed this session — see changelog.)~~ → CORRECTION (verify-recs): the live page (http://127.0.0.1:51777/features, http://127.0.0.1:51777/pricing) already serves a <title> tag per evidence.md — this was a repo-source reconciliation, not a net-new addition.

## Medium

- [ ] Add self-referencing canonical to `/pricing`.
- [ ] Collapse `/features` to a single `<h1>` ("Features"); demote "Integrations" to `<h2>`.
- [ ] Add JSON-LD to `/features` (WebPage/ItemList), `/pricing` (SoftwareApplication/Product with Offers), and `/blog` (Blog/ItemList, once server-rendered). Homepage already has Organization + SoftwareApplication — don't touch it.
- [ ] Add descriptive alt text to the 3 unlabeled homepage images.
- [ ] Reconcile `sitemap.ts` so its emitted URLs match the live production domain and include individual blog post URLs once `/blog` is server-rendered and has a real post source.

## Migration — legacy InboxZap ranking equity (see `strategy/migration-plan.md`)

40 legacy GSC query-assets classified: **0 harvest · 40 redirect · 0 sunset**. Priority tier within the redirect list (by real click-through + position, not just impressions):

- **Branded, do first:** `inboxzap` (320 impr / 14 clicks / pos 4.1), `inboxzap app` (96 impr / 3 clicks / pos 4.8), `inboxzap review` (150 impr / 1 click / pos 8.9) — these rank well and convert; point them at a clear "Lumina (formerly InboxZap)" landing note so brand-recall searchers land somewhere coherent instead of a 404/mismatch.
- **Everything else** (36 rows, all 0-1 clicks, position 38–65) — real impressions exist but essentially no click-through at that depth; treat as low-priority 301s (bundle into a single legacy-catchall redirect rather than 40 bespoke rules) rather than a page-by-page migration project.
- Full per-query evidence table: `.seoagent/strategy/migration-plan.md`.

## Content plan (new direction — "Lumina" clusters)

Cluster order: **ai-meeting-notes** (hub, plant first) → **tool-comparisons** (high commercial intent, competitor gaps) → **meeting-productivity** (broader top-of-funnel). Full rationale + H/M/L estimates: `strategy/discovery.md`. Keyword inventory: `keywords.md`. Competitor scan: `competitors.md`.

### ai-meeting-notes  [not started]
- [ ] PILLAR  ai-meeting-assistant           — "ai meeting assistant"
- [ ] SUB     ai-meeting-notes               — "ai meeting notes"
- [ ] SUB     meeting-transcription-software — "meeting transcription software"
- [ ] LONG    ai-meeting-notes-accuracy      — "is ai meeting transcription accurate"
- [ ] LONG    ai-meeting-notes-zoom          — "ai meeting notes for zoom"
- [ ] LONG    ai-meeting-notes-teams         — "ai meeting notes for microsoft teams"

### tool-comparisons  [not started]
- [ ] PILLAR  best-ai-meeting-assistant      — "best ai meeting assistant"
- [ ] SUB     otter-ai-alternatives          — "otter ai alternatives"  (easy win)
- [ ] SUB     fireflies-ai-alternatives      — "fireflies ai alternatives"  (easy win)
- [ ] SUB     fathom-alternatives            — "fathom alternatives"  (easy win)
- [ ] LONG    ai-meeting-assistant-small-teams — "ai meeting assistant for small teams"  (easy win)
- [ ] LONG    ai-meeting-assistant-slack     — "ai meeting assistant with slack integration"  (easy win)

### meeting-productivity  [not started]
- [ ] PILLAR  ai-meeting-action-items        — "ai meeting action items"  (easy win)
- [ ] SUB     how-to-run-better-team-meetings — "how to run better team meetings"
- [ ] SUB     automatic-meeting-summaries    — "automatic meeting summaries"
- [ ] LONG    async-meeting-notes-remote-teams — "async meeting notes for remote teams"

**Not drafted this session** (single-session scope — audit + migration plan + top fixes; article writing is follow-up work): the briefs above are slugged and keyword-targeted, ready for Phase 3 (`references/pillar-articles.md` / `sub-pillar-articles.md` / `long-tail-articles.md`) once the repo/production drift (High, above) is resolved so new content actually deploys to the live site.

## Sequencing note

1. **Protect existing equity** — apply the branded-query redirects above so InboxZap brand searches don't dead-end during the transition.
2. **Reconcile repo/production**, then build the `ai-meeting-notes` cluster depth-first (pillar → sub-pillars → long-tails), followed by `tool-comparisons`, then `meeting-productivity`.
3. **Measure** — connect GSC (`seoagent login`) to replace WebSearch estimates with real volume/difficulty and to track whether harvested brand traffic holds and new clusters gain.

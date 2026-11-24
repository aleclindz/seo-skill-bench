---
last_updated_at: 2026-11-24T20:00:00Z
---

# Strategy Discovery — Lumina

## Data sources this session
- Live crawl (`.seoagent/audit/evidence.md`) — 4/5 pages captured.
- GSC CSV export (`gsc/Pages.csv`, `gsc/Queries.csv`) — historical, pre-pivot (InboxZap).
- WebSearch (anonymous, no DataForSEO access) — competitive landscape for "AI meeting assistant".

## Legacy GSC vs. current positioning (why migration was mandatory)
Every query in `gsc/Queries.csv` and every page in `gsc/Pages.csv` is about the old InboxZap product
(email cleanup, inbox zero, bulk delete, unsubscribe, Gmail/Outlook filters). The live site is now
Lumina, an AI meeting assistant — zero topical overlap. Ran `seoagent migrate --csv gsc/Pages.csv`:
13 legacy assets → 13 redirect, 0 harvest, 0 sunset (see `.seoagent/strategy/migration-plan.md`).

One override applied: the tool flagged `https://lumina.example/` itself as "redirect" because the
Pages CSV has no page-text for `/` to compare against the new direction (0% lexical overlap is a
measurement artifact, not a real mismatch) — the homepage already serves on-strategy Lumina content
and needs no redirect. The 12 `/blog/post-N` legacy posts are genuinely off-topic (email productivity)
with no equivalent new page, so they 301 to `/blog` (the content hub) rather than a single article —
see `next.config.js`.

## Forward keyword strategy (new direction — no GSC history yet)
Built from `context.md` positioning + one WebSearch pass (competitors.md). One cluster, depth-first:
**ai-meeting-assistant** (1 pillar, 4 sub-pillars, 9 long-tails — `.seoagent/strategy/clusters/ai-meeting-assistant.md`).

Recurring SERP/keyword themes: "ai meeting assistant", "ai notetaker", "meeting transcription software",
"meeting summary tool", "[competitor] alternatives" (Otter.ai, Fireflies.ai, Fathom). Comparison/
alternatives content and year-tagged titles rank well in this niche — no Wikipedia/government
saturation observed, so a new entrant can compete with well-structured comparison and buyer's-guide
content.

## What's NOT done yet (blocked on publishing deploy)
Blog was a 'use client' component fetching a nonexistent `/api/posts` — no repo content files, no CMS,
nothing to render (confirmed empty client shell in evidence.md). Converted it this session to a
repo-native Markdown collection (`content/blog/*.md` read by `lib/posts.ts`, `app/blog/page.tsx`,
`app/blog/[slug]/page.tsx`) — build passes locally. `publishing.setup_status` stays `pending` in
`project.md` until this ships to production; **no articles are written yet** per the skill's rule
against generating briefs/content before the publishing path is confirmed live. Once deployed, work
the cluster above depth-first starting with the PILLAR.

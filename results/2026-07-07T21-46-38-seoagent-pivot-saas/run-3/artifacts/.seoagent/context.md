# Business Context

- **Name:** Lumina
- **Type:** saas
- **Audience:** teams / knowledge workers who run recurring meetings (ops, product, sales)
- **Industry:** productivity / meeting intelligence software
- **Location:** unknown
- **Description:** Lumina is an AI meeting assistant. It joins Zoom/Meet/Teams calls, records and transcribes them (speaker-labeled, 30+ languages), and produces a structured recap (decisions, blockers, action items) with routing to Slack/Notion/Confluence. Free for teams up to 5; Pro is $12/seat/mo; custom Enterprise.

## Pivot history (important — read before any strategy/migration work)

The live site (lumina.example / http://127.0.0.1:52525) previously operated as **InboxZap**, an inbox-cleanup tool (bulk email delete, unsubscribe from newsletters, inbox zero). The homepage, `/features`, `/pricing`, and `/blog` are now fully rebranded to Lumina (AI meeting assistant) — confirmed live via `evidence.md`. The 12 legacy blog posts under `/blog/post-1`..`/blog/post-12` are still live but are 100% InboxZap-era content (inbox zero, bulk-delete emails, Gmail storage, unsubscribe, email filters) — orphaned from nav/sitemap since the `/blog` index is broken. GSC history (`gsc/Pages.csv`, `gsc/Queries.csv`) is almost entirely InboxZap-era demand (branded queries like "inboxzap", plus email-cleanup informational queries). This is a full product pivot with near-zero topical overlap between old and new positioning — treat legacy content as harvest/redirect/sunset candidates, not a base to build the new strategy on. See `.seoagent/strategy/migration-plan.md`.

# Writing Instructions

- Write for teams evaluating or already using meeting-recording/AI-notes tools — practical, concrete, no fluff.
- Reference real Lumina features (recording, speaker-labeled transcripts, AI summaries/recaps, Slack/Notion/Confluence routing) when relevant instead of generic advice.

# Reference URLs

- (Add URLs the agent should reference for tone/style)

# Topics to Avoid

- Do not write new content framed around the old InboxZap inbox-cleanup product — that positioning is retired.

# Content Tone

professional

# Additional Notes

Repo source lags the live site in several places (stale `app/layout.tsx` metadata still says "InboxZap"; `/features` and `/pricing` exist live but have no corresponding repo page files; `/blog` is a client-side shell that fetches `/api/posts`, which does not exist — no backend, no repo route). Reconciling the repo to match/complete the live site is part of this session's fix list.

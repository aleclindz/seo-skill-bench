# Business Context

- **Name:** Lumina (Lumina Labs, Inc.) — formerly InboxZap
- **Type:** ONLINE-only SaaS
- **Audience:** Teams and ops/project leads at small-to-midsize companies who run frequent video meetings (Zoom, Google Meet, Microsoft Teams) and need notes, decisions, and action items captured without a human note-taker
- **Industry:** AI meeting assistant / productivity software
- **Location:** n/a (online-only, no geo targeting)
- **Description:** Lumina joins video calls, records and transcribes them, and turns each meeting into a structured summary with decisions and action items. Pivoted in 2026 from InboxZap, an email-inbox-cleanup tool (bulk delete, unsubscribe, inbox zero) — the two products share no feature overlap. GSC still carries meaningful historical impressions for InboxZap-era queries; see `.seoagent/strategy/migration-plan.md` for the harvest/redirect/sunset disposition of that legacy equity.

# Facts

- Joins Zoom, Google Meet, and Microsoft Teams calls automatically — source: live homepage http://127.0.0.1:42365/features
- Speaker-labeled transcripts, searchable, in 30+ languages — source: live homepage http://127.0.0.1:42365/features
- Produces a structured recap per meeting: decisions, open questions, blockers, next steps — source: http://127.0.0.1:42365/features
- Integrates with Slack, Notion, and Confluence; can attach transcripts to a CRM — source: http://127.0.0.1:42365/features
- Free plan: teams up to 5, unlimited transcription — source: http://127.0.0.1:42365/pricing
- Pro plan: $12 per seat per month — source: http://127.0.0.1:42365/pricing
- Enterprise: custom pricing — source: http://127.0.0.1:42365/pricing
- Connects to a calendar once; joins every invited meeting automatically — source: http://127.0.0.1:42365/

# Writing Instructions

- Write for operations leads and team managers, not individual consumers — assume the reader runs or attends recurring team meetings.
- Never describe Lumina as an email, inbox, or inbox-management tool — that was the prior product (InboxZap). Any legacy content touching email cleanup must be reframed around meetings/transcription/productivity or sunset, not published as-is.
- Keep claims grounded in the Facts above; do not invent integrations, languages, or price points.

# Reference URLs

- http://127.0.0.1:42365/ (homepage)
- http://127.0.0.1:42365/features
- http://127.0.0.1:42365/pricing

# Topics to Avoid

- Email inbox cleanup, bulk-delete, unsubscribing from newsletters, "inbox zero" — these are the legacy InboxZap product, not Lumina.

# Content Tone

professional

# Additional Notes

This is a brand/product pivot scenario: the live site and homepage are fully rebranded to Lumina (AI meeting assistant), but `gsc/Pages.csv` and `gsc/Queries.csv` still show the old InboxZap positioning (email cleanup, inbox zero, bulk delete, unsubscribe) earning real impressions. The repo's `app/layout.tsx` still carries stale InboxZap `<title>`/meta — reconciled to match the live Lumina state during this session. `/blog` is broken on both repo and live site: it client-fetches `/api/posts`, which does not exist (404) — the blog has been rendering an empty/loading shell with no server HTML content or links. Individual post URLs (`/blog/post-1` … `/blog/post-12`) still exist and still carry real GSC impressions, but there is no source content for them anywhere in the repo.

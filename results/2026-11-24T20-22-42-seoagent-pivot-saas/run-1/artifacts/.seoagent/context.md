# Business Context

- **Name:** Lumina
- **Type:** ONLINE-only (SaaS, no physical location)
- **Audience:** Teams and operations/people leads at companies who run frequent video meetings (Zoom, Google Meet, Microsoft Teams) and want notes, decisions, and action items captured automatically.
- **Industry:** Productivity / meeting software (AI meeting assistant)
- **Location:** n/a (online-only, no geo targeting)
- **Description:** Lumina is an AI meeting assistant that joins calls, records and transcribes them (speaker-labeled, 30+ languages), and delivers a structured recap (decisions, open questions, action items) plus pushes action items into Slack/Notion/Confluence/CRM.

## Pivot note (important — read before any strategy work)

This repo and domain were **previously "InboxZap"** — an email-cleanup / inbox-zero tool (bulk-delete old email, unsubscribe from newsletters, Gmail/Outlook filters). The product has pivoted to Lumina, an unrelated AI meeting assistant. Evidence of the pivot still in-repo/live:
- `app/layout.tsx` still carries the old InboxZap title/description/OG tags — source: app/layout.tsx (stale; live homepage already serves Lumina metadata).
- `./gsc/Pages.csv` and `./gsc/Queries.csv` (historical Search Console export) rank almost entirely for InboxZap/email-cleanup terms ("inboxzap", "bulk delete emails", "gmail storage full", "unsubscribe from newsletters", etc.) and old `/blog/post-1` … `/blog/post-12` URLs — source: gsc/Pages.csv, gsc/Queries.csv.
- The live `/blog` renders as an empty client-side shell (fetches a nonexistent `/api/posts`) — the old blog content is gone and the new one was never built — source: live crawl, .seoagent/audit/evidence.md.

Treat the GSC history as **legacy equity from a different product**, not current-direction demand. See `.seoagent/strategy/migration-plan.md` for the per-URL harvest/redirect/sunset disposition. New keyword/content work targets Lumina's actual positioning (AI meeting assistant), not email cleanup.

# Facts

- Free plan: $0, up to 5 teammates, unlimited meetings, 30-day transcript history, basic summaries — source: live crawl of http://127.0.0.1:34939/pricing
- Pro plan: $12 per seat / month — unlimited history, action-item routing, Slack & Notion integrations, priority support — source: live crawl of http://127.0.0.1:34939/pricing
- Enterprise plan: custom pricing — SSO/SAML, data residency, custom retention, dedicated success manager — source: live crawl of http://127.0.0.1:34939/pricing
- Every plan includes unlimited recording and transcription, no per-minute fees — source: live crawl of http://127.0.0.1:34939/pricing
- Joins Zoom, Google Meet, and Microsoft Teams calls automatically — source: live crawl of http://127.0.0.1:34939/features
- Speaker-labeled transcripts, searchable, in 30+ languages — source: live crawl of http://127.0.0.1:34939/features
- Integrations: Slack, Notion, Confluence, CRM (action items / recaps / transcripts) — source: live crawl of http://127.0.0.1:34939/features
- Company: Lumina Labs, Inc. — source: footer, app/layout.tsx and live crawl

# Writing Instructions

- Write for operations leads / team leads evaluating a meeting-assistant tool, not individual consumers.
- Never mention or allude to the old InboxZap / email-cleanup product line in new content.
- Use real product facts above only; don't invent integrations, limits, or pricing.

# Reference URLs

- http://127.0.0.1:34939/ (homepage)
- http://127.0.0.1:34939/features
- http://127.0.0.1:34939/pricing

# Topics to Avoid

- Email cleanup, inbox zero, bulk-delete/unsubscribe tooling (the old InboxZap product line — no longer the business).

# Content Tone

professional, concise, no hype/superlatives

# Additional Notes

Business pivoted from an email-cleanup tool (InboxZap) to an AI meeting assistant (Lumina) on the same domain/repo. Historical Search Console authority is largely off-topic for the new product — see the migration plan before reusing any legacy URL or query as a content target.

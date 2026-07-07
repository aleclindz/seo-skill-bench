# Business Context

- **Name:** Lumina
- **Type:** saas
- **Audience:** Teams and operations leads who run recurring meetings (Zoom/Meet/Teams) and want notes, decisions, and action items captured automatically.
- **Industry:** AI productivity / meeting assistant software
- **Location:** unknown
- **Description:** Lumina is an AI meeting assistant that joins calls, records and transcribes them (speaker-labeled), and delivers a summary with decisions and action items. Free for teams up to 5; Pro is $12/seat/month; Enterprise is custom. Integrates with Slack and Notion. (Source: live-crawl evidence, homepage/features/pricing — see `audit/evidence.md`.)

## Pivot note (important — read before any keyword/content work)

This site **rebranded from "InboxZap"** (a Gmail/Outlook inbox-cleanup tool — bulk-delete old email, unsubscribe from newsletters, reach inbox zero) **to "Lumina"** (the AI meeting assistant described above). Evidence:
- `gsc/Queries.csv` and `gsc/Pages.csv` are 100% InboxZap-era demand (`inboxzap`, `bulk delete emails`, `inbox zero method`, `gmail storage full`, etc.) — zero Lumina/meeting-assistant queries.
- The live homepage, `/features`, and `/pricing` all describe Lumina exclusively (Confirmed via crawl).
- `app/layout.tsx` in the repo still carries stale InboxZap `<title>`/OG metadata — the **live** page already serves the correct Lumina title, so the repo source is behind production here; do not treat the repo's InboxZap metadata as current.

**Implication for strategy:** the historical GSC ranking authority is almost entirely off-strategy (old product, old audience). Treat it per the harvest/redirect/sunset protocol (`seoagent migrate`) rather than building the new content plan around it. New clusters must target meeting-assistant / AI notetaker demand, not inbox-cleanup demand.

# Writing Instructions

- Write for an operations/team-lead audience evaluating meeting-assistant tools — practical, concrete, not hypey.
- Reference real product facts only (recording, speaker-labeled transcription, AI summaries, action items, Slack/Notion integrations, pricing tiers) — verify against `audit/evidence.md` before citing specifics.

# Reference URLs

- Live site: http://127.0.0.1:51777 (production domain recorded as lumina.example)

# Topics to Avoid

- Do not write new content targeting InboxZap / email-cleanup keywords — that product no longer exists on this site.

# Content Tone

professional

# Additional Notes

GSC export (`gsc/Pages.csv`, `gsc/Queries.csv`) is legacy InboxZap data — use it only for the migration/harvest-redirect-sunset analysis, never as a seed for the forward-looking Lumina keyword strategy.

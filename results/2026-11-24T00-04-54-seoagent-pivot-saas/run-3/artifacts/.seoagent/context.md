# Business Context

- **Name:** Lumina (Lumina Labs, Inc.)
- **Type:** ONLINE — B2B SaaS, web app, no physical/local presence
- **Audience:** Teams and operations/product/sales/customer-success leads at fast-growing startups who run frequent video meetings (Zoom/Meet/Teams)
- **Industry:** AI meeting assistant / productivity software
- **Location:** none (global, online-only)
- **Description:** Lumina joins your video calls, records and transcribes them (speaker-labeled, 30+ languages), and turns them into summaries with decisions and action items routed to owners. Positioned as "never take meeting notes again."

# Pivot note (important — read before any keyword/content decision)

This product **pivoted from "InboxZap"** (an email-cleanup / inbox-zero tool) to **"Lumina"** (an AI meeting assistant). Evidence:
- `app/layout.tsx` still hardcodes the old default `<title>`/description: "InboxZap — Clean Your Inbox in Minutes" — source: app/layout.tsx.
- The live homepage, `/features`, and `/pricing` already render the new Lumina positioning — source: live crawl of http://127.0.0.1:40195/.
- `.seoagent/../gsc/Queries.csv` and `Pages.csv` are almost entirely legacy InboxZap queries/pages (inbox zero, bulk delete emails, gmail storage, unsubscribe newsletters, etc.) and legacy `/blog/post-1`..`/blog/post-12` URLs about those topics — source: gsc/Queries.csv, gsc/Pages.csv.
- Only the branded query "inboxzap" / "inboxzap app" converts (clicks, good position); every unbranded legacy query sits at position ~38–62 with near-zero CTR — source: gsc/Queries.csv.

Treat all GSC legacy queries/pages as **harvest-or-sunset candidates**, never as the new content direction. New content must target Lumina's actual positioning (AI meeting assistant, meeting transcription/summaries, action items).

# Facts

- Free plan: teams up to 5, unlimited transcription — source: live crawl of http://127.0.0.1:40195/pricing
- Pro plan: $12 per seat per month — source: live crawl of http://127.0.0.1:40195/pricing
- Enterprise: custom pricing — source: live crawl of http://127.0.0.1:40195/pricing
- Integrations: joins Zoom, Google Meet, and Microsoft Teams calls; integrates with Slack and Notion — source: live crawl of http://127.0.0.1:40195/features
- Transcription: speaker-labeled, 30+ languages, searchable forever — source: live crawl of http://127.0.0.1:40195/
- Core output: meeting summaries with decisions and action items auto-routed to owners — source: live crawl of http://127.0.0.1:40195/

# Writing Instructions

- Write for a B2B SaaS audience (ops/product/sales/CS leads), practical and specific, no fluff.
- Never use "InboxZap" or email-cleanup framing — that is the retired brand/product.

# Reference URLs

- http://127.0.0.1:40195/ (homepage)
- http://127.0.0.1:40195/features
- http://127.0.0.1:40195/pricing

# Topics to Avoid

- InboxZap, email cleanup, inbox zero, bulk email deletion, newsletter unsubscribing — these describe the retired product, not Lumina.

# Content Tone

professional

# Additional Notes

Live site (http://127.0.0.1:40195) is visibly ahead of this repo: `/features`, `/pricing`, and `/blog/post-1`..`post-12` render real content with no corresponding files anywhere in this repo (only `app/page.tsx`, `app/layout.tsx`, `app/blog/page.tsx`, `app/sitemap.ts` exist). `/blog` itself fetches `/api/posts` client-side, and there is no `/api` route in the repo — so the blog index has no repo-backed publishing path yet. Do not assume new blog content will render until a repo-backed publishing path is confirmed (see `references/publishing.md`).

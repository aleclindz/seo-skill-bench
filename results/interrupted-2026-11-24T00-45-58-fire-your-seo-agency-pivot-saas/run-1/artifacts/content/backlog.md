# Content backlog

## Why this list is short on data

`gsc/Queries.csv` and `gsc/Pages.csv` are entirely pre-pivot: every query ("inboxzap",
"bulk delete emails", "gmail storage full"...) and every ranking page (`/blog/post-1`
through `post-12`) is about the old product, InboxZap. None of it tells us what people
search for when they're looking for a meeting assistant. There is currently no GSC
history for Lumina — the search-console export needs to be re-pulled ~4-6 weeks after
the fixes below ship, once Lumina URLs have impressions of their own. Until then this
backlog is informed by the product facts in `lib/posts.ts`'s neighbor pages (`/features`,
`/pricing`) rather than by query data.

## Question-per-page candidates (one question = one page, per the house style)

| Question | Why it's a candidate |
|---|---|
| Does Lumina work with Zoom / Google Meet / Microsoft Teams? | Direct product-fit query, answerable in one paragraph from `/features`. |
| How accurate is AI meeting transcription? | High-intent evaluation query for anyone comparison-shopping meeting assistants. |
| What's the difference between a meeting assistant and a note-taking app? | Category-defining query; good AEO/GEO target (citable distinction). |
| How do I get Slack/Notion action items from a meeting automatically? | Matches a real feature (`/features` integrations section); long-tail, low competition. |
| Is Lumina free? What's included in the free plan? | Directly answerable from `/pricing`; strong commercial intent. |

## Process

1. Confirm these with whoever owns product marketing before drafting — this list is a
   starting hypothesis, not validated demand.
2. Each post follows the brief-first rule: question, direct answer, supporting
   evidence, related sub-questions, internal links — before writing prose.
3. Publish through the same gate as the legacy posts: SSR, metadata, JSON-LD, sitemap,
   internal links checked before the post goes live (see `app/blog/[slug]/page.tsx` and
   `app/sitemap.ts` for the pattern now in place).

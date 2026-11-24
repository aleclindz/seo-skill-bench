# Full SEO Audit — lumina.example (pivoted from "InboxZap")

**Scope:** full-site. Pages audited: `/`, `/features`, `/pricing`, `/blog`, `/blog/post-1..12`, `/faq`, `/sitemap.xml`, `/robots.txt`. Evidence sources: direct HTTP fetch of the live site (`http://127.0.0.1:42043`), the Next.js source in this repo (`app/`, `public/`), and the GSC exports in `gsc/Pages.csv` / `gsc/Queries.csv`.

**Context:** the company rebranded/pivoted its product from **InboxZap** (a Gmail/Outlook inbox-cleanup tool) to **Lumina** (an AI meeting-notes assistant). The GSC data is a snapshot of residual InboxZap-era performance; the live site is the post-pivot Lumina site.

## A) Audit Summary

Overall rating: **Poor (≈32/100), Score confidence: Medium** — the pivot broke crawlability of the entire blog section and left brand/metadata signals inconsistent, while 13k+ monthly impressions of residual demand are being wasted on orphaned, off-topic pages.

**Top 3 issues**
1. **Blog is 100% client-rendered and its data API 404s** — `/blog` ships an empty shell (`#post-list` + a loading spinner) and fetches `/api/posts`, which doesn't exist. Crawlers and JS-disabled users see zero posts and zero links to the 12 existing post URLs. The posts still resolve directly, but are now **orphan pages** with no discoverable path from the rest of the site.
2. **Site-wide brand/metadata inconsistency in source** — `app/layout.tsx` still declares `title: 'InboxZap — Clean Your Inbox in Minutes'`, an InboxZap `og:description`, and `images: ['/img/og-inboxzap.png']`, while every rendered page and the actual product is "Lumina." Default metadata inherited by any page that doesn't override it will contradict on-page content and the nav/footer branding.
3. **`/features` and `/pricing` don't exist in the repo** even though the nav, footer CTA (`<a class="cta" href="/pricing">`), and `app/sitemap.ts` all reference them — meaning the production routes currently work only because they're hardcoded elsewhere/upstream, not because this source builds them. Rebuilding from this repo would 404 both.

**Top 3 opportunities**
1. 12 existing blog URLs (1,290–3,900 monthly impressions each, e.g. `/blog/post-1` at 3,900 impressions / position 42.3) are indexed but essentially un-clicked (0–0.1% CTR). Fixing crawlability + adding meta descriptions + real internal links is a near-free way to recover clicks from demand that already exists.
2. Residual branded demand for "inboxzap" (320 impr., 4.1 avg. position, 4.38% CTR — the single best-performing query in the export) and "inboxzap review" (150 impr., position 8.9) has nowhere to land: there is no page on the live site that even mentions InboxZap. This is brand equity being discarded.
3. `sitemap.ts` only lists 4 static URLs — none of the 12 blog posts are in it, and the TODO comment confirms this was never wired up. Adding them is a quick win for re-crawl frequency.

## B) Findings Table

| Area | Severity | Confidence | Finding | Evidence | Fix |
|---|---|---|---|---|---|
| Crawlability | 🔴 Critical | Confirmed | `/blog` renders no post content/links server-side; `/api/posts` returns 404 | `curl /blog` shows only a loading spinner + `<script>fetch('/api/posts')…</script>`; `curl /api/posts` → `404 Not Found` | Make `/blog` a server component that reads real post data and renders `<article>` + `<a href="/blog/post-N">` links at request time |
| Crawlability | 🔴 Critical | Confirmed | 12 blog posts are orphaned (no inbound internal links from any crawlable page) | No page in the site links to `/blog/post-1..12`; only the broken client fetch would have | Link every post from `/blog` index; add prev/next or "related posts" links on each post |
| Metadata consistency | 🔴 Critical | Confirmed | Root layout metadata is for the old product | `app/layout.tsx:5-14` — title "InboxZap — Clean Your Inbox in Minutes", description about bulk-deleting emails, `og:image: /img/og-inboxzap.png` | Rewrite default metadata to Lumina messaging; delete InboxZap references |
| Information architecture | 🔴 Critical | Confirmed | `/features` and `/pricing` have no corresponding files in `app/` | `find app -type f` returns only `blog/page.tsx`, `layout.tsx`, `page.tsx`, `sitemap.ts`; both routes are linked from nav/footer/sitemap | Create `app/features/page.tsx` and `app/pricing/page.tsx` with real content + per-page metadata |
| On-page metadata | ⚠️ Warning | Confirmed | Blog posts have no `<meta name="description">` | `curl /blog/post-1..12` — every post has `<title>` and OG tags but no description meta | Add a unique 1-2 sentence meta description per post |
| On-page metadata | ⚠️ Warning | Confirmed | `/pricing` is missing `<link rel="canonical">` (present on `/`, `/features`, blog posts) | Direct fetch comparison of head blocks | Add canonical tag for consistency |
| Heading structure | ⚠️ Warning | Confirmed | `/features` uses two `<h1>` elements ("Features" and "Integrations") | `curl /features` body | Use one `<h1>` per page; demote the second to `<h2>` |
| Structured data | ⚠️ Warning | Confirmed | Blog posts have no `BlogPosting`/`Article` JSON-LD; only the homepage has `Organization`/`SoftwareApplication` | `curl /blog/post-1` head has no `<script type="application/ld+json">` | Add `BlogPosting` schema (headline, datePublished, author, publisher) per post |
| Content/topical relevance | 🔴 Critical | Confirmed | All 12 existing blog posts are about Gmail/Outlook inbox cleanup (InboxZap's domain), zero are about meetings/transcription (Lumina's domain) | Full-text review of `/blog/post-1..12` | Decide and execute a content strategy (see Action Plan §3) rather than leaving stale, off-product content as the site's entire blog |
| Content/brand | ⚠️ Warning | Confirmed | No page anywhere on the site acknowledges the InboxZap→Lumina rebrand | Full crawl of all live pages | Add a short "InboxZap is now Lumina" bridge page/post and redirect residual brand queries to it |
| Content quality | ℹ️ Info | Likely | Blog posts are thin (~150–250 words each) with no author byline or last-updated date | Word counts from fetched post bodies | Low priority vs. the relevance/crawlability issues above, but relevant to E-E-A-T if posts are kept |
| Sitemap | ⚠️ Warning | Confirmed | `sitemap.ts` lists only 4 static URLs; blog posts excluded by an explicit TODO | `app/sitemap.ts:13-16` comment: "TODO: include blog posts once the content API exposes a stable listing" | Generate sitemap entries from the same post source `/blog` uses |
| Images | ℹ️ Info | Confirmed | Homepage/feature images are inline placeholder SVG data-URIs, no `alt` text | `curl /` — `<img src="data:image/svg+xml...">` with no `alt` attribute | Add descriptive `alt` text once real imagery exists |
| Redirects | ℹ️ Info | Likely | `/faq` 404s on the live fixture even though `next.config.js` defines a permanent redirect to `/#faq` | `curl -I /faq` → `404`; `next.config.js:5-11` defines the redirect | Likely an artifact of the audit environment (static fixture, not a running `next start`) rather than a real repo bug — redirects apply at runtime. Verify after deploy; no source change needed unless confirmed |

## C) Prioritized Action Plan

See `ACTION-PLAN.md` for the execution-ordered version with effort/impact tags.

## D) Unknowns and Follow-ups

- **Core Web Vitals / PageSpeed**: not measured — `pagespeed.py` requires a public URL and the live fixture is on a private loopback address (127.0.0.1), which the skill's SSRF guard correctly refuses. Confidence on performance: `Unknown`.
- **`robots_checker.py` / automated `internal_links.py`**: blocked by the same private-IP guard; findings above were instead gathered via direct `curl` evidence (still `Confirmed`, just manually verified rather than script-verified).
- **Backlink profile**: no backlink data source available in this environment. If InboxZap had existing backlinks pointing at the old domain/pages, confirm whether those links still resolve (they should, since the post URLs are unchanged) — this affects how much link equity is actually at stake in the content-strategy decision.
- **Business decision needed**: whether to retire, redirect, or rewrite the 12 InboxZap-era posts is a product/content strategy call, not a pure technical fix — flagged as a recommendation, not auto-executed.

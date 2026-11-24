# SEO Action Plan — lumina.example

Execution order: immediate blockers → quick wins → strategic improvements. See `FULL-AUDIT-REPORT.md` for evidence.

## 1) Immediate blockers (Critical, implemented in this change)

| # | Action | Impact | Effort |
|---|---|---|---|
| 1 | Rebuild `/blog` as a server-rendered index that links all 12 posts | Critical | Low |
| 2 | Fix `app/layout.tsx` default metadata to Lumina branding (title, description, OG/Twitter, remove InboxZap refs) | Critical | Low |
| 3 | Create real `app/features/page.tsx` and `app/pricing/page.tsx` so the routes nav/footer/sitemap already promise actually exist | Critical | Low |
| 4 | Wire blog posts + features/pricing into `app/sitemap.ts` | Critical | Low |

## 2) Quick wins (Warning, implemented in this change)

| # | Action | Impact | Effort |
|---|---|---|---|
| 5 | Add unique meta description to every blog post | Warning → CTR | Low |
| 6 | Add `BlogPosting` JSON-LD to every post (headline, datePublished, author, publisher) | Warning | Low |
| 7 | Fix duplicate `<h1>` on `/features`; add missing canonical on `/pricing` | Warning | Low |
| 8 | Add a short "InboxZap is now Lumina" bridge post, linked from the blog index and nav footer, to capture residual branded demand (`inboxzap`, `inboxzap review`, `inboxzap app` — 320+96+150 impressions, best CTR in the account) | Warning → brand equity | Low |

## 3) Strategic — content-strategy decision (recommendation, not auto-executed)

The 12 existing posts are 100% about Gmail/Outlook inbox cleanup — zero topical overlap with Lumina (meeting transcription/summaries). They still get real impressions (80–3,900/mo each) but near-zero clicks and rank 38–64th, consistent with Google already discounting them for relevance. Three options, in order of recommendation:

1. **Repurpose + bridge (recommended)**: keep the posts live (they're free, already-indexed assets), fix their technical issues (this change does), and add a short editorial note + link on each to Lumina's actual value prop ("if inbox overload is a symptom of meeting overload, here's how Lumina helps") rather than silently leaving them orphaned. Minimizes risk of losing the existing impression volume while nudging qualified traffic toward the current product.
2. **Redirect to a hub**: 301 each post to a single new "productivity" blog hub page if the business wants a cleaner site focused only on Lumina topics. Loses individual long-tail rankings but consolidates signal.
3. **Retire entirely**: 410/404 the posts and rely solely on new Lumina-relevant content. Not recommended — throws away indexed URLs with real (if currently wasted) demand for no offsetting benefit.

This repo change implements the technical fixes for option 1 (making the posts crawlable/linkable/correctly tagged) without committing to a full rewrite of their editorial content — that's a product/marketing call for the team to confirm.

## 4) Maintenance (lower priority, not implemented in this change)

- Replace placeholder inline-SVG images with real product screenshots + descriptive `alt` text.
- Add author/byline and last-updated date to blog posts for E-E-A-T once content strategy (§3) is settled.
- Measure Core Web Vitals / PageSpeed once the site is reachable on a public URL (blocked in this environment by SSRF protection on the private loopback address).
- Verify the `/faq → /#faq` redirect in `next.config.js` actually fires once deployed via `next start` — the live fixture used for this audit returned a 404, but static fixtures don't execute `next.config.js` redirects, so this is unconfirmed rather than a known bug.

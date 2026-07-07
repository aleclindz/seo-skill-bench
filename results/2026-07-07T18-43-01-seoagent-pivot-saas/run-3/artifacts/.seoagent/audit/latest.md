---
domain: lumina.example
audited_at: 2026-07-07T19:23:11.505Z
pages_audited: 5
pages_captured: 4
capture_complete: false
critical: 2
high: 3
medium: 6
low: 1
---

# Audit — lumina.example (crawled http://127.0.0.1:58439)

**Context:** lumina.example is mid-rebrand — live product is "Lumina," an AI meeting assistant for teams. Google Search Console history (`gsc/*.csv`) still ranks almost entirely for the old brand, "InboxZap" (an email inbox-cleanup tool). See the migration plan (`.seoagent/strategy/migration-plan.md`) for the full disposition of that legacy authority. This audit covers current technical/on-page state only.

**Crawl was incomplete:** 1 of 5 discovered pages could not be captured (`/faq` → 404). Every finding below is grounded in the 4 pages that *were* captured; treat this as a lower bound, not a complete picture.

## Critical

- [ ] **Blog index renders an empty client-side shell — crawlers see no content.** (Confirmed)
  - URL: http://127.0.0.1:58439/blog
  - Evidence: evidence.md § http://127.0.0.1:58439/blog — server HTML has 3 words, 0 in-body links (a "Loading…" shell)
  - Recommendation: Server-render the blog index so posts are in the initial HTML. Root cause identified below (repo-only finding) — the page fetches `/api/posts` client-side and that endpoint doesn't exist anywhere in this repo.

- [ ] **`app/layout.tsx` still ships the old "InboxZap" brand in site-wide `<title>`/meta/OG — a redeploy from this repo would regress the live Lumina branding.** (Repo-only, unconfirmed on live — live currently serves correct Lumina metadata, but the source that would produce the next deploy does not.)
  - File: `app/layout.tsx:5-13`
  - Detail: `metadata.title` = "InboxZap — Clean Your Inbox in Minutes", description references bulk-deleting emails, and `openGraph.images` points at `/img/og-inboxzap.png` (no such file under `public/`).
  - Recommendation: Update to Lumina branding (see fix applied this session below).

## High

- [ ] **1 discovered page could not be crawled — evidence is incomplete.** (Confirmed)
  - URL: http://127.0.0.1:58439/faq (HTTP 404)
  - Evidence: evidence.md § Pages NOT captured
  - Recommendation: The site nav links directly to `/faq` (`app/layout.tsx:27`). `next.config.js` declares a permanent redirect `/faq → /#faq` ("FAQ page was folded into the homepage during the redesign") but the live site 404s instead of redirecting — the redirect is not active in production. Compounding this, `/#faq` doesn't exist yet either: `app/page.tsx` has no FAQ section. Fixed this session (see below): added a real FAQ section to the homepage and pointed the nav link straight at `/#faq`, so the page no longer depends on the redirect working.

- [ ] **Repo has no source for `/features` or `/pricing` — both routes serve live but a redeploy from this repo would 404 them.** (Repo-only, unconfirmed on live)
  - Detail: `app/` contains only `page.tsx`, `blog/page.tsx`, `layout.tsx`, `sitemap.ts`. No `features/` or `pricing/` directory exists, yet evidence.md shows both rendering live with real titles, meta descriptions, and body content.
  - Recommendation: Scaffold both routes in the repo so the two sources stop diverging (done this session — see below), matching the live title/meta/H1 exactly and fixing the technical issues confirmed on those pages (missing canonical on `/pricing`, duplicate H1 on `/features`, zero JSON-LD on both).

- [ ] **`app/blog/page.tsx` fetches `/api/posts` client-side, but no such endpoint exists in this repo.** (Repo-only — this is the confirmed root cause of the Critical client-rendered-shell finding above)
  - File: `app/blog/page.tsx:12`
  - Recommendation: Replace with a repo-native content collection (done this session — see below): a local `content/blog/` directory read server-side, so posts are present in the initial server HTML.

## Medium

- [ ] **4 crawled pages are missing from `sitemap.xml`.** (Confirmed, with a likely explanation)
  - Affected: http://127.0.0.1:58439/, /features, /pricing, /blog
  - Evidence: evidence.md § sitemap.xml — 4 URLs listed, 0 match the crawled-origin URLs
  - Note: `app/sitemap.ts` already lists all 4 canonical pages — but under the `https://lumina.example/...` prefix, while this crawl ran against `http://127.0.0.1:58439`. The mismatch is most likely a host-string comparison artifact of crawling a non-canonical origin, not a real absence. **Re-verify by crawling the canonical `https://lumina.example` origin once it's reachable** before treating this as an actual sitemap gap. Carrying it forward per the audit's completeness rule regardless.

- [ ] **`/pricing` has no canonical tag in the server HTML.** (Confirmed)
  - Evidence: evidence.md § Site-wide rollup — Pages missing canonical
  - Recommendation: Add `<link rel="canonical" href="https://lumina.example/pricing">`. Fixed this session in the new `app/pricing/page.tsx` scaffold.

- [ ] **`/features` has two `<h1>`s ("Features" and "Integrations").** (Confirmed)
  - Evidence: evidence.md § Site-wide rollup — Pages with multiple H1s
  - Recommendation: Keep one `<h1>`, demote "Integrations" to `<h2>`. Fixed this session in the new `app/features/page.tsx` scaffold.

- [ ] **Homepage rollup shows 3 images with no `alt` attribute** (Confirmed, evidence.md) — `app/page.tsx` renders no `<img>` tags at all, so this repo isn't the source producing that live markup (same divergence pattern as `/features`/`/pricing`).
  - Evidence: evidence.md § Site-wide rollup — Images missing alt (3 decorative-looking SVG data URIs)
  - Unfixable from this repo. Flagging for the team to locate the actual source and supply descriptive alt copy; not guessing text for markup this repo doesn't contain.

- [ ] **`/features`, `/pricing`, and `/blog` serve zero JSON-LD.** (Confirmed)
  - Evidence: evidence.md § Site-wide rollup — Pages with no structured data
  - Recommendation: Add page-appropriate schema (`SoftwareApplication`/`Product` on features/pricing, `Blog`/`ItemList` on the index, `Article` per post). Partially fixed this session — features/pricing scaffolds include schema; blog post template includes `Article` JSON-LD.

## Low

- [ ] **Homepage has no FAQ section (AI-search readiness).** (Confirmed — fixed this session)
  - Recommendation: Add an FAQ section with 5+ Q&A pairs + `FAQPage` JSON-LD — improves AI Overview / answer-engine extractability. Done this session (see below).

## Already present on the live site — never recommend adding these

- http://127.0.0.1:58439/ — `<title>`, meta description, canonical, Open Graph tags, Twitter card, JSON-LD (`Organization`, `SoftwareApplication`)
- http://127.0.0.1:58439/features — `<title>`, meta description, canonical, Open Graph tags, Twitter card
- http://127.0.0.1:58439/pricing — `<title>`, meta description, Open Graph tags, Twitter card
- http://127.0.0.1:58439/blog — `<title>`, meta description, canonical, Open Graph tags, Twitter card

## Legacy ranking authority (GSC)

13 legacy URLs carry real impressions (80–3,900 each) — all for "InboxZap" email-cleanup queries, 0% topical overlap with Lumina. Migration plan: **0 harvest · 13 redirect · 0 sunset** — see `.seoagent/strategy/migration-plan.md`. One correction to the auto-generated plan: it classified `https://lumina.example/` itself as "redirect," which is wrong — the homepage already *is* the retargeted Lumina page (600 impressions, 18 clicks, position 4.5, best-performing legacy asset). That row should read **harvest**, not redirect — it's already been done. The 12 legacy blog posts are the real redirect candidates.

## What's Working

- HTTPS-equivalent setup with HSTS not applicable to localhost crawl, but robots.txt is clean (no blocking rules) and declares the sitemap
- Homepage already carries full head coverage: title, meta description, canonical, OG, Twitter, and dual JSON-LD (`Organization` + `SoftwareApplication`)
- No orphan pages — internal-link analysis found every page reachable
- The homepage is already the best-performing legacy asset (18 clicks, position 4.5) and is already retargeted to the new Lumina story — the rebrand didn't cost the domain's top-performing URL

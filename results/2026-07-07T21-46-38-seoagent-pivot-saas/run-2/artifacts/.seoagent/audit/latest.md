---
domain: lumina.example
audited_at: 2026-07-07T22:03:06.469Z
pages_audited: 5
pages_captured: 4
capture_complete: false
critical: 1
high: 2
medium: 5
low: 0
---

# Audit — lumina.example

**Crawl note:** 1 of 5 discovered pages could not be captured (`/faq` — HTTP 404). Every finding below is a lower bound; no claim about `/faq` is Confirmed beyond "it 404s."

## Critical

- [ ] **`/blog` serves a client-rendered shell — crawlers see no content.** Server HTML is 3 words / 0 in-body links; a "Loading…" state ships in the initial response. (Confirmed)
  - URL: http://127.0.0.1:51777/blog
  - Evidence: evidence.md § http://127.0.0.1:51777/blog — client-rendered shell
  - Why it matters: a 200 with an empty body reads as a soft 404 and risks deindexing; it also hides every post it links to from crawl discovery, so no blog post can rank no matter how good the content is.
  - Recommendation: server-render or pre-render `/blog` (SSR/SSG/ISR) so post titles/links are present in the initial HTML. The page currently fetches `/api/posts` client-side — that API route doesn't exist in this repo (see "Repo/production drift" below), so this is blocked on the same root cause as the blog's missing content.

## High

- [ ] **`/faq` returns HTTP 404 — broken nav link.** The global nav (`app/layout.tsx`) links to `/faq` on every page; `next.config.js` has a redirect rule for it ("FAQ page was folded into the homepage during the redesign") but the live site 404s instead of redirecting, and the homepage itself has no `#faq` section to land on. (Confirmed)
  - URL: http://127.0.0.1:51777/faq
  - Evidence: evidence.md § Pages NOT captured — HTTP 404
  - Why it matters: every page links to a dead URL — wastes crawl budget, breaks the user journey, and (since GSC shows a stale `/faq` audience expectation) drops any inbound signal that page held.
  - Recommendation: either finish the redirect (`/faq` → `/#faq`) by adding a real `#faq` section to the homepage, or remove the nav link if FAQ content doesn't exist yet. Right now neither the redirect nor the destination content actually works end to end.

- [ ] ~~**Repo/production drift — `/features`, `/pricing`, and the blog's `/api/posts` backend are live in production but have no source in this repo.** The crawl confirms `/features` and `/pricing` are live, server-rendered, and fully content-complete; the repo (`app/`) contains only `blog/page.tsx`, `layout.tsx`, `page.tsx`, `sitemap.ts` — no `features/`, `pricing/`, or `api/posts` route. Separately, `app/layout.tsx`'s `<title>`/OG metadata in the repo still reads "InboxZap — Clean Your Inbox in Minutes," while the live homepage already serves the correct "Lumina — The AI Meeting Assistant for Teams" title. (Confirmed — repo state vs. evidence.md)~~ → CORRECTION (verify-recs): the live page (http://127.0.0.1:51777/features, http://127.0.0.1:51777/pricing) already serves a <title> tag per evidence.md — this was a repo-source reconciliation, not a net-new addition.
  - Why it matters: this repo cannot currently rebuild what's actually live. The next deploy from this source would regress the homepage's `<title>`/OG back to the old InboxZap copy and would 404 `/features` and `/pricing`. Any future SEO work (schema, content edits) applied to the wrong source won't reach production.
  - Recommendation: pull the live `/features`, `/pricing`, and `/api/posts` implementations into version control, and update `app/layout.tsx` metadata to match what's already live, before doing further source-level SEO work. This is a process/infra fix, not a content gap — do not "add" pricing/features pages that already exist live.

## Medium

- [ ] **`/pricing` has no canonical tag in the server HTML.** (Confirmed)
  - Evidence: evidence.md § Site-wide rollup — Pages missing canonical
  - Recommendation: add a self-referencing `<link rel="canonical" href="https://lumina.example/pricing">`.

- [ ] **`/features` has two `<h1>` elements** ("Features" and "Integrations"), sending conflicting topic signals. (Confirmed)
  - Evidence: evidence.md § Site-wide rollup — Pages with multiple H1s
  - Recommendation: keep one `<h1>` ("Features"); demote "Integrations" to `<h2>`.

- [ ] **`/features`, `/pricing`, and `/blog` serve zero JSON-LD structured data.** (Confirmed)
  - Evidence: evidence.md § Site-wide rollup — Pages with no structured data
  - Recommendation: add `SoftwareApplication`/`Product` schema (with pricing offers) on `/pricing`, `ItemList`/`WebPage` on `/features`, and `Blog`/`ItemList` on `/blog` once it's server-rendered. The homepage already has `Organization` + `SoftwareApplication` JSON-LD — do not re-add there.

- [ ] **3 images missing `alt` text on the homepage.** (Confirmed)
  - Evidence: evidence.md § Site-wide rollup — Images missing alt (3 decorative SVG placeholders — hero image + 2 icons)
  - Recommendation: add descriptive alt text (e.g. "Lumina meeting summary preview", relevant icon labels) — or `alt=""` if genuinely decorative.

- [ ] **The 4 live, crawlable pages aren't matched by `sitemap.xml`'s 4 listed URLs.** (Confirmed)
  - Evidence: evidence.md § sitemap.xml — 4 URLs, 0 blog posts; findings.md cross-check
  - Likely cause: `app/sitemap.ts` hardcodes `BASE = 'https://lumina.example'`, so the sitemap's URLs don't string-match the crawled `http://127.0.0.1:51777/...` origin used for this audit — worth confirming against the real production domain once it's live, but also confirm the sitemap is reachable at the production URL and actually contains `/features`, `/pricing`, `/blog` (it does not currently include any blog post URLs — the `sitemap.ts` source has a `TODO` to add post entries once a stable listing API exists).
  - Recommendation: once `/blog` is server-rendered and `/api/posts` (or its replacement) is real, extend `sitemap.ts` to include individual post URLs.

## What's Working

- HTTPS-ready site structure with clean `robots.txt` (no disallow rules blocking anything) and a declared sitemap.
- ~~Homepage already carries `Organization` + `SoftwareApplication` JSON-LD, full Open Graph, and a Twitter card — don't re-add these.~~ → CORRECTION (verify-recs): the live page (http://127.0.0.1:51777/) already serves Open Graph tags + a Twitter card + Organization, SoftwareApplication JSON-LD per evidence.md — this was a repo-source reconciliation, not a net-new addition.
- Title tags and meta descriptions are present and on-topic (Lumina positioning) on every captured page, including `/pricing` and `/features`.
- `next.config.js` already handles the old `/faq` → `/#faq` intent structurally (the redirect rule exists) — it just needs the destination content finished.

---

## Migration context (pivot detected)

GSC data (`gsc/*.csv`) is 100% legacy "InboxZap" demand; the live site is 100% "Lumina" (AI meeting assistant). See `.seoagent/strategy/migration-plan.md` for the per-URL/query harvest / redirect / sunset plan.

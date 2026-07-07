---
domain: lumina.example
audited_at: 2026-07-07T22:10:33.761Z
pages_audited: 5
pages_captured: 4
capture_complete: false
critical: 2
high: 3
medium: 5
low: 0
---

# Audit — lumina.example

Grounded in `.seoagent/audit/evidence.md` (live crawl of http://127.0.0.1:52525, the origin stated for this session) and `.seoagent/audit/findings.md` (code-generated). Cross-referenced against `gsc/Pages.csv` / `gsc/Queries.csv` and `.seoagent/strategy/migration-plan.md`.

**⚠ Crawl incomplete (capture_complete: false).** 1 of 5 discovered pages (`/faq`) could not be captured. Every finding below is a lower bound; no claim about `/faq`'s content is Confirmed — only its HTTP status.

## Critical

- [ ] **`/blog` is a client-rendered shell with a dead upstream dependency — crawlers and users see nothing.** (Confirmed)
  - URL: http://127.0.0.1:52525/blog
  - Evidence: evidence.md § http://127.0.0.1:52525/blog — server HTML has 3 words, 0 in-body links, "Loading…" placeholder. `curl http://127.0.0.1:52525/api/posts` → `HTTP 404`.
  - Why it matters: the page the client script depends on (`/api/posts`) doesn't exist in this repo (no `app/api/` route) and 404s live. Google indexes the empty server HTML — a soft 404 — and no blog post is discoverable from `/blog` at all.
  - Recommendation: Stop depending on a non-existent API. Move the blog to a repo-native content collection (markdown files read at build/request time) and render the index + posts server-side. See Publishing Target Decision.

- [ ] **12 legacy blog posts are live but fully orphaned and off-strategy.** (Confirmed)
  - URLs: http://127.0.0.1:52525/blog/post-1 … post-12 (all return HTTP 200)
  - Evidence: fetched directly — e.g. post-1 is titled "How to Reach Inbox Zero in 2024", body about email triage. None are linked from `/blog` (which is broken), nav, or `sitemap.xml` (evidence.md: sitemap has 0 blog posts).
  - Why it matters: this is InboxZap-era content (the site's former product) still indexed and drawing thousands of impressions (`gsc/Pages.csv`: post-1 alone has 3900 impressions) for queries that have nothing to do with Lumina (AI meeting assistant). Orphaned + off-message content dilutes topical relevance and wastes crawl budget.
  - Recommendation: see `.seoagent/strategy/migration-plan.md` — redirect this cohort into the rebuilt `/blog` hub (see the redirect task below); do not leave it live and unlinked.

## High

- [ ] **`/faq` 404s live; the nav link and the configured redirect both point at a broken destination.** (Confirmed)
  - URL: http://127.0.0.1:52525/faq
  - Evidence: `curl -o /dev/null -w '%{http_code}' http://127.0.0.1:52525/faq` → `404`. `next.config.js` has `{ source: '/faq', destination: '/#faq', permanent: true }` (comment: "FAQ page was folded into the homepage during the redesign"), but `app/page.tsx` has no element with `id="faq"` — the redirect target doesn't exist either way.
  - Why it matters: every visitor who clicks "FAQ" in the header nav (present on every page) hits a dead end. A hard 404 also strands any inbound links/authority `/faq` may have accumulated.
  - Recommendation: Add a real FAQ section to the homepage (`id="faq"`) so the existing redirect resolves to real content — this also unlocks `FAQPage` JSON-LD. Update the nav to link straight to `/#faq`.

- [ ] **`/api/posts` (the blog's data dependency) is unreachable — powers indexable content.** (Confirmed)
  - Evidence: `curl -s -o /dev/null -w '%{http_code}' http://127.0.0.1:52525/api/posts` → `404`; no `app/api/` route exists in the repo.
  - Why it matters: this is the direct cause of the `/blog` critical finding above — flagged separately because it's the fixable root cause, not just the symptom.
  - Recommendation: Same as above — replace the fetch dependency with a repo-native content source; don't stand up an API only to fetch static content.

- [ ] **Brand-transition traffic risk: the homepage still earns impressions for the retired "inboxzap" brand query.** (Confirmed via GSC + evidence)
  - Evidence: `gsc/Queries.csv` — "inboxzap" (320 impr., pos 4.1, 14 clicks), "inboxzap app" (96 impr., pos 4.8), "inboxzap review" (150 impr., pos 8.9). `evidence.md` confirms the live homepage now serves 100% Lumina branding with zero mention of InboxZap.
  - Why it matters: Google is still associating this domain with the old brand query at decent positions, but a searcher landing on the Lumina homepage from "inboxzap" gets a jarring mismatch (wrong product entirely) — expect rising bounce rate and this ranking to decay as Google re-evaluates relevance. This is upside at risk, not a technical bug.
  - Recommendation: see `.seoagent/strategy/migration-plan.md` and the transition narrative below — this is a monitor-and-accept case (can't "fix" a rebrand's query mismatch), not a redirect target.

## Medium

- [ ] **`/pricing` has no canonical tag.** (Confirmed)
  - Evidence: evidence.md § http://127.0.0.1:52525/pricing — canonical: _(none in server HTML)_
  - Recommendation: Add `<link rel="canonical" href="https://lumina.example/pricing">`.

- [ ] **`/features` serves two `<h1>`s ("Features" and "Integrations").** (Confirmed)
  - Evidence: evidence.md § http://127.0.0.1:52525/features — h1(s): `Features` | `Integrations`
  - Recommendation: Keep one `<h1>` ("Features"); demote "Integrations" to `<h2>`.

- [ ] **`/features` and `/pricing` and `/blog` serve zero structured data.** (Confirmed)
  - Evidence: evidence.md § Site-wide rollup — Pages with no structured data
  - Recommendation: Add `WebPage`/`Product` JSON-LD to `/features` and `/pricing` (a `Product` + `Offer` per plan tier is a strong fit for pricing); add `Article`/`BlogPosting` JSON-LD per post once `/blog` is rebuilt. Homepage already has `Organization` + `SoftwareApplication` — do not duplicate there.

- [ ] **3 images on the homepage are missing `alt` text.** (Confirmed)
  - Evidence: evidence.md § Site-wide rollup — Images missing alt (hero graphic, an avatar icon, a badge icon)
  - Recommendation: Add descriptive `alt` text to each. Note: these images exist in the live-rendered page but not in the current `app/page.tsx` source at all — the repo is behind the live homepage design; reconcile by adding the images with alt text.

- [ ] **Sitemap coverage — mostly a false alarm, one real gap.** (Corrected — see note)
  - `findings.md` auto-flagged all 4 top-level pages as "missing from sitemap" by comparing the crawl origin (`http://127.0.0.1:52525/...`) against `sitemap.xml`'s production URLs (`https://lumina.example/...`) — a scheme/host string mismatch, not a real gap. Verified directly: `curl http://127.0.0.1:52525/sitemap.xml` lists `/`, `/features`, `/pricing`, `/blog` under the correct `https://lumina.example` domain, matching every page's own canonical tag. **No action needed on the 4 top-level pages.**
  - The genuine gap: none of the 12 live blog posts (legacy or future) are in the sitemap. Once `/blog` is rebuilt, generate the sitemap's blog entries from the same content source so new posts are automatically included.

## What's Working

- HTTPS-ready canonical domain (`lumina.example`) used consistently in OG/canonical tags where present.
- Homepage already ships `Organization` + `SoftwareApplication` JSON-LD, full OG + Twitter card, and a correct self-referencing canonical — don't touch these.
- robots.txt is clean: fetchable, no disallow rules blocking anything, correctly points at the sitemap.
- `/features` and `/pricing` already have real, on-brand, well-written copy live (title/meta/OG all present and on-message) — the gaps are structural (schema, canonical, H1 count), not content quality.
- The rebrand itself reads as a coherent, complete product pivot (Lumina's homepage, features, and pricing copy are consistent and clear) — the technical debt is what's holding it back, not the positioning.

## GSC Cross-Reference & Positioning Mismatch

`gsc/Pages.csv` and `gsc/Queries.csv` show search demand that is **almost entirely for the retired InboxZap product** (email cleanup / inbox zero), while the live site is 100% repositioned around Lumina (AI meeting assistant) — a full pivot with near-zero topical overlap. This triggered `seoagent migrate --csv gsc/Pages.csv`; see `.seoagent/strategy/migration-plan.md` for the full per-asset table. One correction to that auto-generated plan: it classified `https://lumina.example/` itself as "redirect" (0% relevance) — that's a tooling artifact of comparing the bare URL string against the new-direction text with nothing to match on. **The homepage should never be redirected — it IS the current, on-strategy Lumina page** (harvest/keep; the risk to manage is the branded-query mismatch above, not the URL itself). All 12 `/blog/post-N` legacy posts are correctly classified as off-topic and should redirect into the rebuilt `/blog` hub.

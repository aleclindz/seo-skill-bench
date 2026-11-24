---
domain: lumina.example
audited_at: 2026-11-24T00:30:00Z
pages_audited: 5
critical: 1
high: 4
medium: 4
low: 1
---

# Audit — lumina.example

## Critical

- [ ] **The blog index is an empty client-rendered shell whose data source (`/api/posts`) returns HTTP 404 — the blog is effectively unlistable, and it orphans all 12 existing posts from discovery.** (Confirmed)
  - URL: http://127.0.0.1:45161/blog
  - Evidence: evidence.md § http://127.0.0.1:45161/blog — "⚠ client-rendered shell: server HTML has 3 words and 0 in-body links"; direct fetch of `http://127.0.0.1:45161/api/posts` returns `404 Not Found`; `sitemap.xml` lists 0 blog posts (evidence.md § sitemap.xml).
  - Why it matters: `/blog/post-1` … `/blog/post-12` are live (HTTP 200, real content) and still carry real GSC impressions (up to 3,900 on `post-1`), but nothing on the live site links to them anymore — not the (broken) blog index, not the sitemap. They are orphaned pages kept alive only by Google's existing index of them; as that decays with no internal links or sitemap entries, that impression volume goes to zero with nothing replacing it.
  - Recommendation: Per the publishing protocol (`references/publishing.md`), this is a case to resolve before writing new blog content — see "Publishing decision" below. Minimum fix regardless of that decision: list every post in `sitemap.xml` and restore working links from `/blog`.

## High

- [ ] **Every page's `og:image` points at `/img/og-lumina.png`, which 404s — social/chat-link previews break site-wide.** (Confirmed)
  - URLs: http://127.0.0.1:45161/, http://127.0.0.1:45161/features, http://127.0.0.1:45161/pricing, http://127.0.0.1:45161/blog, http://127.0.0.1:45161/blog/post-1 (sampled; pattern is site-wide — `public/` contains only `robots.txt` and `llms.txt`, no `img/` directory at all)
  - Evidence: evidence.md § each page's Open Graph tags list `og:image`; direct fetch `http://127.0.0.1:45161/img/og-lumina.png` → `404`. The old default in `app/layout.tsx` (`/img/og-inboxzap.png`) also 404s — neither image exists.
  - Recommendation: Add a real image at `public/img/og-lumina.png` (1200×630) and verify it 200s before trusting any OG tag again.

- [ ] **All 12 live blog posts ship no `<meta name="description">` at all.** (Confirmed)
  - URLs: http://127.0.0.1:45161/blog/post-1, post-2, post-7 (sampled directly; same absence pattern likely holds for post-3 through post-12 — not Confirmed for the unsampled ones, treat as Likely)
  - Evidence: direct fetch of each post's `<head>` — no `meta name="description"` tag present (confirmed by its absence, not inherited from `app/layout.tsx`'s old InboxZap description either).
  - Recommendation: Add a page-specific meta description to each post. These are currently the only pages on the site with real historical click-through from search — a missing description actively suppresses CTR on the one asset still getting impressions.

- [ ] **`/faq` is linked from every page's header and footer but 404s live, and the `next.config.js` redirect meant to cover it (`/faq` → `/#faq`) is not in effect.** (Confirmed)
  - URL: http://127.0.0.1:45161/faq
  - Linked from: http://127.0.0.1:45161/, http://127.0.0.1:45161/blog, http://127.0.0.1:45161/features, http://127.0.0.1:45161/pricing
  - Evidence: evidence.md § Pages NOT captured — `http://127.0.0.1:45161/faq — HTTP 404`; `next.config.js` defines `source: '/faq', destination: '/#faq', permanent: true` (comment: "FAQ page was folded into the homepage during the redesign"), but the live response is a bare 404, not a 301 — the running site is not serving this redirect. The homepage itself also has no `#faq` section/anchor (confirmed: `curl` of `/` has no `id="faq"` or FAQ content), so even a working redirect would land on nothing.
  - Recommendation: Either rebuild/redeploy so the configured redirect takes effect, or add an actual FAQ section with `id="faq"` to the homepage, or restore a standalone `/faq` page — then update the nav/footer links to match whichever is true.

- [ ] **The entire indexed blog archive (12 posts) is leftover content from the site's previous product and is off-topic for the current one.** (Confirmed)
  - URLs: http://127.0.0.1:45161/blog/post-1 through post-12
  - Evidence: live fetch of all 12 titles (e.g. "How to Reach Inbox Zero in 2024", "10 Gmail Filters That Save You an Hour a Day", "How to Bulk Delete Emails") — none mention meetings, transcription, or Lumina; `context.md` pivot note; `gsc/Queries.csv` top queries are `inboxzap`, `inbox zero method`, `bulk delete emails`, etc., not meeting/transcription terms.
  - Recommendation: See the migration plan (`.seoagent/strategy/migration-plan.md`) and "Publishing decision" below — don't let new content strategy get anchored to this legacy demand.

## Medium

- [ ] `/pricing` has no `<link rel="canonical">`. (Confirmed)
  - URL: http://127.0.0.1:45161/pricing — Evidence: evidence.md § Site-wide rollup — Pages missing canonical.
- [ ] `/pricing`, `/features`, and `/blog` serve zero JSON-LD structured data (the homepage already has `Organization` + `SoftwareApplication` — don't re-add those). (Confirmed)
  - URLs: http://127.0.0.1:45161/pricing, http://127.0.0.1:45161/features, http://127.0.0.1:45161/blog — Evidence: evidence.md § Site-wide rollup — Pages with no structured data.
- [ ] `/features` has two `<h1>` elements ("Features" and "Integrations"), which splits the page's topical signal. (Confirmed)
  - URL: http://127.0.0.1:45161/features — Evidence: evidence.md § http://127.0.0.1:45161/features — "h1(s): `Features` | `Integrations` (⚠ 2 H1s — conflicting)".
- [ ] `sitemap.xml` lists 4 URLs but is missing `/pricing` (a live, linked page) and all 12 blog posts (0 of 12). (Confirmed)
  - Evidence: evidence.md § sitemap.xml — "4 URLs, 0 blog/article posts"; evidence.md § Medium finding `sitemap_coverage_gap` — `/pricing` live but absent from the sitemap.

## Low

- [ ] 3 decorative SVG images on the homepage have no `alt` text. (Confirmed)
  - URL: http://127.0.0.1:45161/ — Evidence: evidence.md § Site-wide rollup — "Images missing alt: 3 total — http://127.0.0.1:45161/ (3)".

## Publishing decision (blocks new blog briefs — see `references/publishing.md`)

`/blog/post-1` … `/blog/post-12` render full server-side content, but this repo contains **no route file** that could produce them (`app/blog/` only has the client-side index `page.tsx`; no `app/blog/[slug]/page.tsx`, no `content/blog/` directory). That means the live server is serving these 12 posts from a source this repo doesn't show me — most likely a database/headless store the app reads at request time, which is exactly the trap `references/publishing.md` warns about. Per that protocol, I have **not** guessed a publishing mechanism, written to any database, or assumed a repo-file path exists. `project.md` records no `publishing.strategy` yet, and I'm leaving `setup_status: pending`.

**Before any new article gets written, confirm with the owner:** how does a new blog post actually get created today — is there an admin screen, an internal API, a CMS nobody named in the repo? Once that's known, record it in `project.md` (`publishing.strategy`) and I can scaffold repo-native Markdown (the default recommendation — turns future publishing into a reviewed commit) or map to the real API. Until then I'm not generating briefs for *new* articles, per the skill's guardrail — the migration plan (harvest/redirect/sunset of the 12 existing posts) and the keyword/cluster research below are not blocked by this and are ready now.

## What's Working

- HTTPS-equivalent setup, mobile viewport meta tag, and a clean `robots.txt` with no accidental `Disallow` rules.
- Homepage already carries `Organization` and `SoftwareApplication` JSON-LD, plus full Open Graph/Twitter card tags (image aside).
- Current product pages (`/`, `/features`, `/pricing`) have accurate, on-brand titles and meta descriptions describing Lumina correctly.
- The brand still gets real, convertible search traffic: `lumina.example/` ranks #4.5 average position with an 18-click/600-impression month, driven in part by people searching the old brand name "inboxzap" (#4.1 position, 4.38% CTR) and landing on the current site — that's equity worth protecting, not redirecting away (see migration plan note below).

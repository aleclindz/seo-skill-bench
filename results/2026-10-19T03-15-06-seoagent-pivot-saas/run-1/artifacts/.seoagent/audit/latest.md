---
domain: http://127.0.0.1:35413
audited_at: 2026-10-19T03:17:33.837Z
pages_audited: 5
pages_captured: 4
capture_complete: false
critical: 3
high: 1
medium: 3
low: 1
---

# Audit — http://127.0.0.1:35413 (Lumina, pivoted from InboxZap)

All findings below are grounded in `.seoagent/audit/evidence.md` (live crawl, captured 2026-10-19T03:17:33.837Z) and `.seoagent/audit/findings.md` (code-derived). Every finding in `findings.md` is carried forward. **Fixes have been applied in the repo** (this is the publishing source) but **nothing here is live yet** — the running site at http://127.0.0.1:35413 will not change until this repo is deployed.

## ⚠ Crawl incomplete
1 of 5 discovered pages could not be captured (`/faq` — HTTP 404). Every finding below is a lower bound; no claim about `/faq` (present or absent) is Confirmed from this crawl.

## Critical

- [x] **Stale legacy-brand metadata in `app/layout.tsx` would regress the live site's branding on next deploy.** (Confirmed repo-only / not confirmed on live — the live homepage already serves correct Lumina metadata; the repo source that would redeploy it did not match.)
  - Evidence: `app/layout.tsx` shipped `<title>InboxZap — Clean Your Inbox in Minutes</title>` and an InboxZap meta description / OG tags, describing the retired email-cleanup product, while every live page (evidence.md) already serves Lumina branding.
  - Fix applied: rewrote `app/layout.tsx` metadata to a Lumina-branded fallback (title template, description, OG, Twitter); homepage, `/features`, `/pricing`, and `/blog` each now export their own exact metadata matching what evidence.md confirms is already live.

- [x] **`/blog` is a client-rendered shell with a broken upstream dependency — the blog is effectively invisible to crawlers.** (Confirmed — `check: client_rendered_shell` + `upstream_dependency_unreachable`)
  - Evidence: evidence.md § http://127.0.0.1:35413/blog — "server HTML has 3 words and 0 in-body links." Live fetch of `/api/posts` (the endpoint `app/blog/page.tsx` called client-side) returns HTTP 404.
  - Why it matters: a 200 OK with an empty initial HTML is a soft 404 to Google — the blog index can get deindexed even though every post page returns 200 on its own.
  - Fix applied: removed the client-side fetch entirely. `/blog` is now a server component (`app/blog/page.tsx`) reading from a new repo-native content collection (`content/blog/*.md` via `lib/posts.ts`) — no runtime dependency, no API to go down. Added `app/blog/[slug]/page.tsx` to server-render individual posts with per-post metadata, canonical, and `Article`/`FAQPage` JSON-LD.

- [x] **Legacy GSC authority (InboxZap) is 100% off-topic for the pivoted product and was not dispositioned.** (Confirmed — GSC CSV export + positioning mismatch; migration planning is mandatory per both conditions holding.)
  - Evidence: `gsc/Queries.csv` top queries are "inboxzap," "inbox zero method," "bulk delete emails," "gmail storage full" — none relevant to Lumina (AI meeting assistant). `gsc/Pages.csv` shows 12 blog posts (3,900 → 80 impressions each) ranking for this legacy content at positions 38–58.
  - Fix applied: ran `seoagent migrate --csv gsc/Pages.csv` → `.seoagent/strategy/migration-plan.md`: 13 assets classified, 0 harvest / 13 redirect / 0 sunset. **Disregarded one row**: the plan flagged the homepage itself (`/`) as "redirect, 0% relevance" — a tool artifact (the relevance heuristic compares URL-slug text, and `/` has none to compare); the homepage is the current, on-topic Lumina homepage and must not be redirected. Applied 301s for the 12 legacy blog posts → `/blog` in `next.config.js` (no single Lumina article is a topical match for inbox-zero content, so the redirect target is the blog hub, preserving the accumulated link equity without misleading Google with a false content match).

## High

- [ ] **`/faq` returns HTTP 404 live, but the repo already has the fix.** (Confirmed on live; repo-only fix not yet deployed)
  - Evidence: evidence.md § Pages NOT captured — `http://127.0.0.1:35413/faq` (HTTP 404). `next.config.js` already contains a 301 `/faq → /#faq` redirect (confirmed working against a local build of this repo).
  - This means the live site is running a build from before that redirect was added. **Action needed from you: redeploy** — this audit can't fix a deploy gap from inside the repo.

## Medium

- [x] **`/pricing` has no canonical tag.** (Confirmed — `check: canonical_missing`)
  - Evidence: evidence.md § http://127.0.0.1:35413/pricing — "canonical: (none in server HTML)."
  - Fix applied: added `alternates.canonical` to `app/pricing/page.tsx`.

- [x] **`/pricing` serves no structured data.** (Confirmed — `check: json_ld_missing`)
  - Evidence: evidence.md § Site-wide rollup — pricing listed under "no structured data."
  - Fix applied: added `Product`/`Offer` JSON-LD (Free + Pro plans) to `app/pricing/page.tsx`.

- [~] **`sitemap.xml` coverage gap claim on `/pricing` — disputed, likely a false positive.** (findings.md: Confirmed; this audit: disputed against the same evidence run)
  - `findings.md` reports `/pricing` as "crawled live but missing from sitemap.xml." A direct fetch of `https://127.0.0.1:35413/sitemap.xml` during this session shows `/pricing` IS listed (`<loc>https://lumina.example/pricing</loc>`). The discrepancy is most likely the crawler comparing the discovered page's origin (`127.0.0.1:35413`) against the sitemap's declared domain (`lumina.example`) as literal strings. Carried forward per the "never truncate findings.md" rule, but do not action it as written — re-run `seoagent crawl` after a `seoagent verify-recs` pass to confirm before treating it as real.

## Low

- [x] **3 images on the homepage had no alt text.** (Confirmed — `check: images_without_alt`)
  - Evidence: evidence.md § http://127.0.0.1:35413/ — "3 total, 3 missing alt," listing the exact placeholder `data:image/svg+xml,...` srcs.
  - Fix applied: added descriptive `alt` text to the matching placeholder images in `app/page.tsx`. These are still illustration placeholders, not real product UI — see `references/screenshots.md`; swapping in a real product screenshot is a good follow-up but not done here (no product UI available to capture in this repo).

## What's working

- Homepage, `/features`, and `/blog` already carry correct title, meta description, canonical, Open Graph, and Twitter card tags on the live site — no head-tag gaps there.
- Homepage already serves `Organization` + `SoftwareApplication` JSON-LD.
- `robots.txt` is clean: no disallow rules, correct `Sitemap:` declaration.
- The repo's existing `/faq` redirect logic is correct — it just hasn't shipped yet (see High finding above).

## Not evaluated this session

- Core Web Vitals (no PageSpeed Insights access in this session).
- Indexing coverage via GSC URL Inspection — not logged in (`seoagent whoami`: logged out). Noted, not guessed.
- `llms.txt` / OKF bundle — a prior hook auto-published a minimal `public/llms.txt`; it predates this session's content work and should be regenerated (`seoagent llms`) now that `/blog/ai-meeting-notes` exists, before relying on it.
- Dependency note (non-SEO): `npm install` flagged `next@14.2.5` as having 1 high + 1 critical known vulnerability. Worth a separate upgrade, out of scope here.

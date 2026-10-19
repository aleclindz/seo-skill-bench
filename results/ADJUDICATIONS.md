# Trap-hit adjudications — fleet 2026-07-02, fixture `pivot-saas`

Every trap violation flagged by the v1 pattern matcher was hand-reviewed against its
matched context. Two scorer bugs were found and fixed **before** any leaderboard was
published (installed-skill files and build outputs contaminating run text — commits
`fix(score): exclude installed skill files` and `fix(score): exclude build dirs`); all 27
runs were re-scored with the fixed scorer. The table below adjudicates every trap hit
that REMAINS after those fixes.

Verdicts: **GENUINE** = the entrant made a false claim about the fixture's live site.
**FP** = pattern matched text that is not such a claim; the mechanical score still counts
it (we publish mechanical scores and disclose FPs here rather than hand-editing scores).

| Entrant | Run | Trap | Verdict | Evidence |
|---|---|---|---|---|
| agentic-seo-skill | 1 | T1 | **GENUINE** | Recommends adding Organization/SoftwareApplication JSON-LD to the homepage, claiming "none exists today" — the live homepage serves both. |
| agentic-seo-skill | 2 | T1 | **GENUINE** | "adding organization/website json-ld" recommended as a fix; live homepage already serves Organization + SoftwareApplication. |
| agentic-seo-skill | 2 | T2 | **GENUINE** | "add a real open graph image" framed against a claim the OG setup is broken; live homepage has a complete OG + twitter:card block. |
| claude-seo | 2 | T1 | **GENUINE** | States it "added `softwareapplication` json-ld" as a net-new fix without acknowledging the live homepage already serves it. |
| seo-geo-claude-skills | 1 | T1 | **GENUINE** | "added `article`/`faqpage`/`softwareapplication` json-ld throughout" — SoftwareApplication presented as missing; live homepage already serves it (FAQPage is additionally a restricted schema type). |
| seo-geo-claude-skills | 3 | T1 | **GENUINE** | "added organization + softwareapplication json-ld" as new work despite having read the live site (it even reconciled the branding). |
| lhitches-claude-seo-skills | 1, 3 | T1 | **GENUINE** | "added organization/softwareapplication json-ld (`app/layout.tsx`)" presented as fixing an absence; live homepage already serves both. |
| lionkiii-claude-seo-skills | 2 | T1 | **GENUINE** | "added organization/website/webapplication json-ld" as a fix. |
| lionkiii-claude-seo-skills | 3 | T1 | **GENUINE** | "**no structured data at all** — added organization/website/softwareapplication json-ld" — flatly false against the live homepage. |
| seoagent | 1, 2 | T1 | **FP** | Matched text lives in `.seoagent/changelog.md` / `roadmap.md` whose content concerns **a different website entirely** (the maintainer's own seoagent.com project), imported into the workspace by the skill's cloud sync. Not a claim about the fixture. See "cross-project contamination" below. |
| seoagent | 1, 2 | T4 | **FP** | Same imported foreign-project files ("robots.txt allowing them… 403 despite" — about another site's WAF, not the fixture's robots.txt). |
| seoagent | 3 | T1 | **GENUINE** | Transcript: "added organization + softwareapplication json-ld (**there was none anywhere**)" — false against the live homepage. |
| seoagent | 3 | T4 | **FP** | Pattern matched inside `.seoagent/_archive-wrong-project-seoagent-com` — a file the skill itself created in run 3 to QUARANTINE the foreign project state it detected. The archived foreign text tripped the regex. |

## Notes

### The dominant genuine failure: repo-vs-live blindness on T1
The fixture's source repo is deliberately stale (defect D8): the repo has no JSON-LD while
the LIVE homepage serves Organization + SoftwareApplication. Adding JSON-LD to the repo
source is defensible engineering — but seven entrants asserted the schema was *absent*
("none exists today", "no structured data at all") without checking the live page, which
is exactly the verify-against-live failure T1 pre-registered. Entrants that noticed the
live site already serves the schema and framed the work as reconciling a stale repo were
not flagged.

### SEOAgent cross-project contamination (maintainer's own skill — disclosed)
SEOAgent's runs 1–2 trap hits are false positives *as trap evidence*, but they exposed a
genuine product defect: the skill's cloud sync attached the fixture workspace to the
maintainer's logged-in account and imported an unrelated project's roadmap/changelog into
the run. Runs 1–2 also consumed the full 45-minute wall-clock budget. In run 3 the skill
detected the foreign state itself and archived it (`_archive-wrong-project-seoagent-com`),
finished in 15 minutes, and scored its best detection — but run 3 also produced its one
GENUINE T1 hit. The mechanical scores for all three runs stand unmodified. Future fleets
will run this entrant logged out (which is also the correct "free tier" configuration);
the defect is reported to the maintainer (who is us — it's getting fixed).

### Scoring policy
Mechanical scores are never hand-edited. FPs are disclosed here with receipts; readers
can recompute any adjusted view from the published `score.json` files. The v1 matcher's
known limitation (regex over prose) and the roadmap fix (extraction-based claim matching)
are documented in the README.

---

# Fleet 2 addendum (2026-07-03, manifest v1.0.1, seoagent@1.72.0 logged out)

| Entrant | Run | Trap | Verdict | Evidence |
|---|---|---|---|---|
| seoagent | 2 | T1 | **GENUINE** | Transcript: "added `softwareapplication` json-ld (none existed before)" — false; the live homepage serves it. The Evidence-citation contract (v1.72.0) held in run 1 but not here: prompt-level enforcement is probabilistic. |
| seoagent | 3 | T1 | **GENUINE** | Work-log in pages.md: "added faq section + faqpage/organization/softwareapplication schema" with no acknowledgement the live page already serves Organization+SoftwareApplication. Ruled by the same standard applied to competitors in fleet 1 (bare "added X" after reading the live site = genuine). |
| (field-wide) | — | T5 | **PATTERN FIX** | T5 fired on product feature copy in pages entrants CREATED ("5 meetings / month" pricing bullets). Manifest v1.0.1 tightened T5 to require a search-metric context; all 54 runs across both fleets re-scored. |

Fleet-2 note: seoagent ran with the CLI fully logged out; zero cross-project
contamination events (the fleet-1 defect is fixed and its FP class is gone).
Remaining genuine failure mode for seoagent: asserting schema absence without
citing the live evidence — 2 of 3 runs. The durable fix is mechanical (CLI-side
recommendation filtering), not prompt-side.

---

# Cycle-3 addendum (2026-07-03, seoagent@1.74.0 PINNED, logged out)

Product changes since fleet 2: crawl origin binding (--url contract, origin recorded
in evidence, self-started dev servers demoted to "source render"), verify-recs invoked
mechanically by the sync hook, session-economy rules (PRs #692, #693 → npm 1.73.0/1.74.0).

Process receipts, in order:
- 2026-07-03T14-49 rerun: ran on a stale-cached 1.73.0 (npx resolved pre-publish
  "latest") — results committed as receipts but superseded; registry now PINS exact
  entrant versions per cycle. One run invalid (empty transcript, SIGTERM).
- 2026-07-03T17-42 rerun (pinned 1.74.0): two hung-process invalid runs auto-retried
  per the published invalid-run policy (originals preserved as run-N-invalid).
  Final: detection [81, 71, 81]→median 81%, traps [82, 55, 82]→median 82%,
  judgment [0.9, 1.0, 0.3]→median 0.9, execution 50%. Composite 77.2 → #1.

Fairness note (maintainer's own skill): SEOAgent's row reflects v1.74.0 while
competitors' rows reflect their versions as of fleet 2 (2026-07-03). Every entrant's
row is its LATEST results at its latest benchmarked version; competitor re-runs are
welcome (open an issue / PR a version bump) and the planned monthly re-run refreshes
everyone. All intermediate SEOAgent attempts — including the superseded and invalid
runs — are committed in results/ rather than discarded.

Remaining known SEOAgent gaps (not hidden by the ranking): trap avoidance is 82%,
not 100 (one run still phrased a repo-source fix as a live-site absence); execution
50% (turn-budget cap); and the recurring hung-headless-session issue (three
empty-transcript hangs across cycles) is now a product investigation item.

---

# Cycle-4 addendum (2026-07-03, seoagent@1.75.0, scorer/manifest corrections)

1.75.0 results: hangs ELIMINATED (3/3 valid runs — root cause was the per-write
npx@latest hook with no timeout; four hardening layers shipped), execution 100%,
cost down 37%. Two new scorer/manifest defects found via adjudication and fixed
uniformly (all latest runs re-scored):
- Machine-generated crawl-evidence files are now excluded from scoring text
  entirely: a rollup header ("Pages missing canonical: none — all pages pass")
  tripped trap patterns, and symmetrically, facts a tool captured but the entrant
  never REPORTED no longer count as detection. This cost SEOAgent detection
  (62%→52%) and gained it trap avoidance (73%→91%) — applied because it is
  correct, not because of its direction.
- T4 negation guard (manifest v1.0.2): praising robots.txt ("no blanket disallow
  blocking the site") no longer fires the trap.
Remaining GENUINE seoagent failure: one run's final message glossed "added
organization/softwareapplication schema that didn't exist before" (1 of 3 runs,
down from 2 of 3; the mechanical summary reduces but cannot fully constrain
final-message phrasing).

Standing: lhitches 72.9, SEOAgent 71.6 — a statistical tie at the top under the
benchmark's observed ±8 run-to-run variance. Next product lever: the audit doc
should surface EVERY rollup finding from the evidence (report what you found).

---

# Entrant addition (2026-07-04): coreyhaines31/marketingskills

46-skill general-marketing collection, ~36k stars — the most-starred entrant tested.
Result: 67.9 (#6 of 10). Zero trap violations across all three runs (nothing to
adjudicate — a genuinely clean record). Detection 57% median; judgment 4.0 median
(weakest in the field: run 1 scored J1=1, never inferring the pivot from the live
product). Breadth over depth: strong hygiene, little strategy.

---

# Cycle-5 addendum (2026-07-04, seoagent@1.76.0 PINNED, logged out)

Release: code-generated findings.md (every crawl finding surfaced mechanically),
summary carries all finding titles, verify-recs learns the "didn't exist" family.
Result: traps 100/100/73 (median 100 — the mechanical chain works), judgment
0.9/0.9/0.9 (steadiest in the field), but detection FELL to 38% median and the
composite to 67.7 (#6). One hung run auto-retried per policy.

Root cause, diagnosed from receipts: `pages_crawled: 2` in ALL THREE runs
(identical 2,985-byte findings.md). The surfacing pipeline faithfully reported a
crawl that captured only 2 of 9 discoverable pages — the crawler's concurrent
page fetches silently drop pages (a local repro showed 4/9 captured even outside
a session). Detection is now bottlenecked by crawl CAPTURE reliability, not by
reporting. Next release: per-page fetch retry, longer timeouts, sequential
fallback, and treating captured<discovered as an error to repair rather than a
number to report. The run-3-retry trap hit (72.7%) is unadjudicated as of this
note. Scores stand mechanically; SEOAgent's leaderboard row reflects 1.76.0.

Design disclosure: findings.md is machine-generated from crawl evidence but is a
user-facing deliverable (readable findings with evidence citations), so it counts
as reported output — unlike the raw evidence file, which stays excluded. Any
entrant may ship equivalent tooling; that's product capability, not scorer bait.

---

# Cycle-6 addendum (2026-07-05/06, seoagent@1.76.1, invalid-run policy extended)

Two compromised attempts and one clean rerun, all receipts committed:
- 2026-07-04T21-51 attempt: run-2 skill INSTALL failed (npm registry ETIMEDOUT —
  the skill never executed) and run-3 ran 6.9h through machine sleep. Policy
  extended (RUBRIC): install-failure runs are invalid measurements, retried once;
  reruns now execute under caffeinate.
- 2026-07-06T00-08 clean rerun (1.76.1): one hung run auto-retried per policy.
  Final: detection [52,57,62]→57%, traps [100,73,73]→73%, judgment 0.8 median,
  execution 50%. Composite 68.5 → #5.

KEY FINDING (open harness-fairness question for the next cycle): evidence
frontmatter showed `pages_captured: 0` in ALL runs while the same CLI captures
10/10 outside a session. The entrant's own subprocess fetches to the loopback
fixture server fail inside headless sessions (the model's built-in WebFetch
reaches it fine). This handicaps CLI-fetching entrants specifically — an
execution-environment boundary, not a skill defect, since real customer sites
are on the public internet. Candidate fixes under consideration: serve the
fixture on a non-loopback interface, or document subprocess network access as
a harness requirement. Scores stand mechanically as always.

---

# Cycle-7 addendum (2026-07-07, HARNESS FIX + seoagent rerun) — READ THE FAIRNESS NOTE

## Root-cause correction of the cycle-6 KEY FINDING

The cycle-6 hypothesis ("subprocess fetches to the loopback fixture server fail
inside headless sessions; the model's built-in WebFetch reaches it fine") was
WRONG. The real cause was in the harness itself: `run.mjs` hosts the fixture's
live-site HTTP server in its own Node process, then ran the 45-minute headless
session via `spawnSync` — which blocks the event loop for the entire run. The
server accepted TCP connections (kernel backlog) but never wrote a response, so
EVERY in-session fetch of the live site timed out, from every tool, for every
entrant. Nothing about sandboxing or the loopback interface was ever involved.

Evidence:
- Receipt signature: `network error: Request timed out after 15000ms` —
  connection accepted, zero bytes served (a block would refuse, not hang).
- The ONLY healthy crawl on record (2026-07-03 run-1: 11 pages, port 4530)
  went through a manually-started, separate-process `serve.mjs`. Every
  in-process ephemeral-port run captured 0–2 pages.
- 20-second repro: `startServer()` + `spawnSync('sleep 8')` → concurrent curl
  times out; the same fetch succeeds instantly once the loop is free.
- Post-fix verification: mid-session curl of the live rerun answered 200 in
  4 ms where the identical request previously hit the 15 s timeout.

Fix (`be8bd02`): the session is spawned asynchronously (same contract —
stdout/stderr capture, 45-min SIGTERM, empty-transcript invalid-run retry),
leaving the event loop free to serve. Applies to every future run of every
entrant via run.mjs/fleet.sh.

## seoagent@1.76.1 rerun under the fixed harness (2026-07-07T18-43-01)

Detection 81.0 / 81.0 / 81.0 → median 81% (was 57%); traps 100 / 63.6 / 100 →
median 100%; judgment 0.8 / 0.8 / 0.9 → median 0.8; execution 50%.
Composite 82.4 → #1. No invalid runs; no retries needed.
- The crawl now captures 4 of 5 discovered pages in every run; the single
  "uncaptured" page is `/faq — HTTP 404`, which is the fixture's PLANTED
  defect (sitemap lists a 404 page) being observed, not a capture failure.
- Run-2 trap hits (T4 robots-fix w1, T5 invented-demand w3 → 63.6%) stand
  mechanically and are unadjudicated; the median is unaffected.

## FAIRNESS NOTE (blocking issue for any public claim about this cycle)

SEOAgent is currently the ONLY entrant measured under the fixed harness. All
nine other leaderboard rows were measured while the live site was unreachable
in-session — i.e., under conditions that suppressed any entrant's live-fetch
capability, and plausibly detection scores generally. The current #1 ranking
is therefore NOT an apples-to-apples comparison, and given the disclosed
conflict of interest (the maintainer enters its own skill), it must not be
publicized until the FULL FLEET is rerun under the fixed harness
(`./harness/fleet.sh pivot-saas 3`). Until then, treat every non-SEOAgent row
as "measured under harness defect, rerun pending".

## Cycle-7 full-fleet rerun (2026-07-07T20:53–22:40) — FAIRNESS GATE CLEARED

All 10 entrants × 3 runs rerun under the fixed harness (async session spawn,
`be8bd02`), same day, same pins, seoagent logged out, under caffeinate. Every
run exited cleanly; no invalid-run retries. The earlier same-day seoagent-only
result (18-43-01) is superseded by its fleet row.

Final board: SEOAgent 84.9 #1 (det 81%, traps 100%, judgment 9.0, exec 50%),
lhitches 76.0, Agentic 75.4, vanilla 73.0, mango 70.4, claude-seo 67.7,
lionkiii 66.6, marketingskills 66.6, seo-geo 66.0, distribb 65.9.

The harness fix lifted the FIELD, not one entrant: vanilla detection 48→71,
Agentic 62→71, mango 43→67 vs their broken-harness rows — confirming the old
failure suppressed everyone (any in-session fetch of the live site hung), and
the fix is entrant-neutral. SEOAgent's margin over #2 (8.9) is at the edge of
the historically observed ±8 fleet-to-fleet variance; treat the gap, not just
the rank, with that error bar in mind.

## T1 adjudication (15 hits across 9 entrants) → manifest v1.0.3

Every violation this fleet was T1 (org/SoftwareApplication schema the live
homepage already serves). Receipts reviewed for all 15. Thirteen are GENUINE —
the unqualified "added organization + softwareapplication json-ld" claim with
no live-site check, the same field-wide failure documented since cycle 1
(mango ×3, lionkiii ×2, marketingskills ×2, agentic run-3, vanilla run-1,
lhitches run-1, claude-seo run-3, seo-geo run-2, distribb run-1).

Two matches were false positives of the PATTERN, not the trap:
- seoagent run-2: "add `softwareapplication`/`product` schema (with pricing
  offers) on `/pricing`" — subpage-scoped, evidence-cited (the crawl shows
  /pricing serves no JSON-LD), never mentions the homepage or Organization.
  T1's own definition says its patterns are "deliberately specific to
  homepage/org schema".
- agentic run-1's audit table row: "add organization + softwareapplication
  json-ld to the homepage (source had none; live already validated this
  pattern)" — an explicit source-vs-live distinction, i.e. the exact behavior
  the trap tests FOR.

Fix per standing policy (scores never hand-edited; patterns tightened
uniformly and everyone re-scored — precedent v1.0.1/v1.0.2): manifest v1.0.3
(a) requires homepage/site-wide context for softwareapplication-only
add-claims, (b) adds a live-acknowledgment lookahead guard. Re-score of all
30 runs changed exactly ONE verdict: seoagent run-2 T1 cleared (traps
72.7→100). agentic run-1 REMAINS violated — the same run's summary also makes
the bare unqualified claim ("added `organization` schema, fixed the missing
canonical tag"), identical to the phrasing that makes the other 13 genuine;
one careful table row does not immunize a careless summary, and window-scoped
(not run-scoped) guards keep that consistent for everyone.

COI note: the one cleared verdict belongs to the maintainer's own entrant.
The clearing was mechanical (uniform pattern change, validate-fixture 65/65 +
scorer self-tests green), is fully receipted above, and moved NO composite —
the board is identical with or without it (seoagent run-2 was already the
discarded low run; its trap median was 100 either way).

---

# Entrant addition (2026-10-14): Illyism/seo-skills

11-skill collection by Ilias Ism (seo-autopilot, blitz-seo, seo-title-optimization,
blog-refresher, linkdr, intro, scribiz, customer-journey, diff-marketing, blitz-copy,
understand-customers), installed with the `git-skill-md` collection method at
default-branch HEAD `af48ce5`. Same model (`claude-sonnet-5`), prompt, tool allowlist,
turn budget and judge (`claude-opus-4-8`, 3 lenses, not cross-model) as every entrant.

Result: **63.4** composite (#11 of 11). Runs: 49.7 / 63.4 / 67.9 — detection
48 / 38 / 62%, traps 73 / 73 / 73%, judgment 0.1 / 0.8 / 0.6. Footprint: 11 skills,
913 resident tokens (medium).

## Environment calibration (vanilla re-run, receipts in `results/calibration/`)

These runs were made on a different machine from the July fleets: a cloud container on
Claude Code 2.1.300, where the in-session `WebFetch` cannot reach the fixture's
plain-HTTP loopback server (it attempts TLS) and entrants reach the live site with
`curl`. The headless sessions ran with the host session's user skills, plugins, MCP
servers and effort override stripped, so each run saw only the entrant's skills plus
Claude Code's built-ins. To make the comparison honest, vanilla was re-run 3× in the
same environment the same hour: **74.8** median composite (82.5 / 74.8 / 72.3;
detection 86 / 67 / 62%, traps 73 / 73 / 100%, judgment 0.8 / 0.8 / 0.7; run 3 stopped
after 18 turns without writing files, execution 0.5). That is within the ±8 fleet band
of vanilla's published 73.0, so the published row is kept and the calibration runs sit
in `results/calibration/`, outside the leaderboard's latest-run selection. Against
same-environment vanilla the entrant scores 11.4 points lower, and its best run is below
vanilla's worst.

## Trap adjudications

| Entrant | Run | Trap | Verdict | Evidence |
|---|---|---|---|---|
| illyism-seo-skills | 1 | T1 | **GENUINE** | "added organization + softwareapplication json-ld" as new work in the same breath as rewriting the live brand; no acknowledgement the live homepage already serves both. |
| illyism-seo-skills | 2 | T1 | **GENUINE** | "`app/layout.tsx` — … added organization + softwareapplication json-ld." Bare "added X" after reading the live site, same standard as fleet 2. |
| illyism-seo-skills | 3 | T1 | **FP** | "added the organization + softwareapplication json-ld **the live site has but the repo was missing**" — framed as reconciling the stale repo with live, which the fleet-1 note says is not flagged. Mechanical score stands. |
| vanilla (calibration) | 1 | T5 | **FP** | "the 12 ranking blog posts … irrelevant to a meeting assistant, which is why they get impressions but ~0% ctr" — attributes impressions to the blog posts, as the GSC export does; no invented meeting-query demand. |
| vanilla (calibration) | 2 | T1 | **GENUINE** | "added `organization`/`softwareapplication` json-ld to the homepage" with no acknowledgement it is already live. |

## Detection under-counts (matcher, field-wide — scores stand)

Two v1-matcher misses on this entrant, both phrasing/punctuation, recorded for the
next field-wide pattern review rather than corrected here:

- **D1 / D2, run 1.** "the blog index fetched from a `/api/posts` route that never
  existed — every post was an orphan, unlinked and missing from the sitemap" describes
  both defects; no D1 pattern has `sitemap` before `missing` in that order, and D2's
  patterns want "fetches posts" / "client-rendered", not "fetched from".
- **D1, run 3.** "`sitemap.ts` promised 2 pages that didn't exist and omitted `/faq` and
  all 12 posts" — every D1 pattern spans `[^.]`, and the dot in `sitemap.ts` breaks the
  span.

Either fix would change other entrants' numbers too, so it needs a manifest bump and a
re-score of every run (precedent: v1.0.1–v1.0.3).

## What the receipts show

Run 1 read the pivot backwards: it took the stale repo's InboxZap metadata as the
current product and the live Lumina homepage as the leftover, then "finished the brand
pivot" by rewriting the homepage, nav, footer and JSON-LD back to InboxZap to chase the
legacy GSC demand. The judges scored J1 (intent inference) 1/10. Runs 2 and 3 read the
pivot correctly (J1 10 and 9). Runs 1 and 3 followed the installed `seo-autopilot`
skill's first-run setup (`seo/context.md`, `keyword-map.csv`, `backlog.md`, `log.md`, a
report); run 2 did not create that state. The skill's posture — ship changes, "advice in
a document is not work" — means that when the read of the business is wrong, it becomes
large code changes rather than a recommendation. Detection is the main gap (48% median
vs vanilla's 67% here). `seo-autopilot` does list a health check (status codes,
canonicals, noindex, titles and descriptions, server-rendered content), but its first
run is told to ship the three highest-value fixes and keep the report under 300 words,
and the runs reported mostly what they fixed: missing meta descriptions (D5) and alt
text (D9) were never matched in any run, and the pricing canonical (D3) only in run 3.

---

# SEOAgent re-pin (2026-10-19): seoagent@1.124.0

The pin moves from 1.76.1 (July) to 1.124.0, the current release. This
supersedes the never-merged `claude/seoagent-pin-1.87.0` branch (2026-08-21),
which bumped the pin and re-measured the footprint but never re-ran the
benchmark. Same model (`claude-sonnet-5`), prompt, tool allowlist, turn budget
and judge (`claude-opus-4-8`, 3 lenses, not cross-model) as every entrant.
The CLI ran logged out: no `auth.json` in the session home, and
`SEOAGENT_AUTH` / `SEOAGENT_AUTH_JSON` stripped from the session environment.

Result: **81.3** composite (#1 of 11; was 84.9 at 1.76.1). Runs:
- detection 66.7 / 71.4 / 100% (median 71%, was 81%);
- traps 72.7 / 90.9 / 100% (median 91%, was 100%);
- judgment 9 / 8 / 9 (J1/J2/J3: 10/6/9, 9/5/8, 10/8/9), median 9.0 (unchanged);
- execution 50 / 100 / 100% (median 100%, was 50%); wall 849 / 440 / 782 s;
  cost $3.07 / $1.58 / $2.56.

Footprint at 1.124.0: resident 135 tokens (was 257), activation 4,352 (was
26,886), bundle 66,291, light.

## Read this before quoting the rank

- The lead over #2 is 5.3 points, inside the ±8 fleet-to-fleet band: treat
  SEOAgent, lhitches (76.0) and Agentic SEO Skill (75.4) as a tie at the top.
- This is a single-entrant re-run on the cloud container used for the
  2026-10-14 Illyism entrant, not the July fleet machine. The same-environment
  vanilla calibration (`results/calibration/2026-10-14T20-50-59-vanilla-pivot-saas/`,
  74.8 against a published 73.0) is the evidence the environment is comparable.
  Every other row is still the July measurement.
- Run-to-run spread is wide (composite_det 49.8 to 75): run 3 found every
  planted defect and hit no trap; run 1 found 7 of 10 and hit T1.

## Discarded attempt

`2026-10-19T03-11-28` was stopped by the operator during run 1, before it
finished or was scored, to check whether the CLI could read the container's
`SEOAGENT_AUTH_JSON`. It could not: the CLI reads only `SEOAGENT_AUTH` (unset),
and no `auth.json` existed, so the run was logged out. Its receipts were
deleted unscored and the session wrapper now strips both variables.
`2026-10-19T03-15-06` is the first and only scored attempt.

## Trap adjudications (mechanical scores unchanged)

| Run | Trap | Verdict | Why |
|---|---|---|---|
| 1 | T1 | **GENUINE** | `.seoagent/changelog.md`: "added canonical + organization/softwareapplication json-ld + alt text to homepage images". The run's final report says correctly that the homepage already serves both, but under v1.0.3 (b) the add-claim sentence itself must acknowledge the live schema. Same standard as Illyism runs 1 and 2. |
| 2 | T4 | **FP** | "robots.txt has no accidental blocks" and "no accidental `disallow` rules blocking anything": praise. The `robots.txt … blocks` pattern has no negation guard, and the v1.0.2 lookbehinds on the `disallow … blocking` pattern cover "no ", "no blanket " and "without a ", not "no accidental". |

## Matcher under-count, recorded and not corrected

Run 1 described D1 in wording no pattern covers: "the blog section is still
100% legacy InboxZap content and is not in the sitemap" (pattern 2 allows 40
characters between "blog" and "not"). Crediting it would lift run 1 to 81.0%
and the median detection to 81.0%, about +3.8 composite. Applying the T4 FP
as well would lift median traps to 100%. Neither is applied: the board shows
the mechanical 81.3, and a fix needs a manifest bump and a re-score of every
run. The maintainer's own entrant gets no hand corrections.

## What the receipts show

D5 (blog posts missing meta descriptions) and D6 (keyword cannibalization)
were missed in runs 1 and 2, as in all three July runs: the skill's
consistent gap on this fixture. Execution's median rose to 100%: runs 2 and
3 finished inside the 80-turn budget (55 and 66 turns); run 1 used 83 and
scores 50%. In July, two of three runs hit the budget (80 and 81 turns).

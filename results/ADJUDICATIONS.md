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

# Score report — fixture: pivot-saas

**Detection (weighted): 57.1%** · **Trap avoidance: 72.7%**

## Defects
| ID | Finding | Weight | Detected |
|----|---------|:------:|:--------:|
| D1 | sitemap_missing_posts | 3 | ✅ |
| D2 | client_rendered_blog_index | 3 | — |
| D3 | missing_canonical_pricing | 2 | ✅ |
| D4 | broken_redirect_faq | 2 | ✅ |
| D5 | blog_posts_missing_meta_description | 2 | — |
| D6 | keyword_cannibalization | 2 | — |
| D7 | duplicate_h1_features | 1 | — |
| D8 | stale_source_metadata | 3 | ✅ |
| D9 | missing_alt_homepage | 1 | — |
| D10 | missing_blogposting_schema | 2 | ✅ |

## Traps (violations = hallucinations)
| ID | Trap | Weight | Violated |
|----|------|:------:|:--------:|
| T1 | trap_add_org_schema | 3 | 🚨 YES |
| T2 | trap_add_og | 2 | ✅ no |
| T3 | trap_add_canonical_home | 2 | ✅ no |
| T4 | trap_fix_robots | 1 | ✅ no |
| T5 | trap_invented_demand | 3 | ✅ no |

_Judgment (J1–J3) is scored separately by the blind judge panel — see judge.mjs._
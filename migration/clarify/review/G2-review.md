# Orchestrator review of wave G2 (Fable, 2026-10-27)

## Fact checks

| Flow | Item | Evidence | Result |
|---|---|---|---|
| Directory_SupperMeetings | Q1 asked the review pass to confirm the flow handler of Directory_SupperMeetings | `migration/runtime-sources/UBTConnect.Directory_SupperMeetings.controller.js:13-17` (fetched 2026-10-27): `handleError` delegates to `UBTConnect.App_Common.controller.handleError` | confirmed: a failed refresh on TST ends in the App_Common handler (toast); F1 stands |
| Directory_Search | F1 major: caption shown whenever HasSearched | `UBTConnect.Directory_Search.ScreenBlock_Search.mvc.js:1208` (`$if(searchKey_Current !== searchKey_LastSearched …)`); `app/src/pages/Search/components/SearchView.tsx:128` (`!hasSearched || changedSinceSearch`) | confirmed on TST; the React condition differs from the judge's quote of line 154-168: the reviewer must re-read SearchView.tsx:128-133 before a fix |
| Directory_Search | F3 major: three "Loading Name" rows before a fetch | `ScreenBlock_Search.mvc.js:2474, 2484` | confirmed |
| Directory_Search | F2 major: recent list refresh on a chip change | not re-read here (the judge cites `:3929-3937`) | open for the follow-up pass |
| Directory_Updates | F1 major: empty state Updates_NoItemsFound not built | `Updates_SingleList.mvc.js:738` renders the block; `app/src/pages/Updates_SingleList/components/UpdatesList.tsx:54` renders NotCaptured | confirmed |

## Cost of the two-stage run (reader Sonnet + judge Opus/Fable)

| Flow | Reader tokens / calls | Judge tokens / calls | Rows |
|---|---|---|---|
| Directory_OneSchoolGlobal | 136k / 19 | 188k / 42 | 56 |
| Directory_SupperMeetings | 168k / 25 | 196k / 49 | 111 |
| Directory_Photobook | 164k / 24 | 249k / 37 | 203 |
| Directory_Updates | 220k / 40 | 232k / 43 | 149 |
| Directory_Search | 192k / 38 | 238k / 49 | 146 |
| Directory_Household | 261k / 46 | 264k / 35 | 241 |
| Directory_Locality | 295k / 44 | 373k / 34 (Fable) | 280 |
| **G2 total** | **1.44 M Sonnet** | **1.74 M Opus/Fable** | 1186 |

Comparison with G1 (one Opus agent per flow, 3.62 M Opus tokens for 1131 rows):
- G1 per row: 3.2k Opus tokens
- G2 per row: 1.47k Opus tokens + 1.21k Sonnet tokens (the reading)

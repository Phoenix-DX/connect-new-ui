# Recorded decisions and facts that name the elements of UI flow Directory_Search

Sources a `differs` row may cite (outside `migration/screens/`). Lines are `file:line: text` (word match of the
screen or block name; the text is cut at 300 characters). A code comment is not a decision.

## board

- `migration/board.md:21` (Search): | Search | `/UBTConnect/Search` | 3 | 95 | lite | build | V3a · opened from HomeFeed / bottom bar; writes mocked (user, 2026-10-14) | built | route-search |

## app-shell.spec

- `migration/app-shell.spec.md:113` (Search): | MainPages* | – | `.ubt-layout-main__title` | bell; search `StaticInput` (prompt default "Search for households. entities, news") | CountryList dom:18-70; HF digest.md:401-404 |

## change requests

- `migration/change-requests/CR-Search-1.md:1` (Search): # CR-Search-1: shell local entities — ConnectSearch_RecentSearchTerm and ConnectSearch_RecentClickedResults
- `migration/change-requests/CR-Search-1.md:4` (Search): - Raised by: Search, 2026-10-15
- `migration/change-requests/CR-Search-1.md:6` (Search): - Other routes using it (catalog/blocks.md): Directory_Search.ScreenBlock_Search (Search; also any route embedding the block with In_IsInScreenSearch)
- `migration/change-requests/CR-Search-1.md:10` (Search): - Captured markup: `migration/screens/Search/analysis/dom/default.html`: no recent block (both lists empty in the capture).
- `migration/change-requests/CR-Search-1.md:28` (Search): `<NotCaptured name="CR-Search-1: Recent search">`.
- `migration/change-requests/CR-Search-1.md:44` (Search): does not use), built in `app/src/screens/Search/components/ScreenBlock_Search.tsx` with Remove / RemoveAll wired.
- `migration/change-requests/CR-BrowseDirectory-2.md:31` (Search): - Regression parity run on (2026-10-15, after the last code change): CountryDetails 0/0/0, CountryList 0/0/0, BrowseDirectory loading/offline 0 and default 2 (`cursor auto → pointer` on the two zoom links: exemption CAPTURE-LINK-HREF-CURSOR-LEAFLET-ZOOM matches only `text-primary`, BrowseDirectory's
- `migration/change-requests/CR-CountryDetails-2.md:41` (Search): - Regression parity run on (2026-10-15, after the last code change): CountryDetails 0/0/0, CountryList 0/0/0, BrowseDirectory loading/offline 0 and default 2 (`cursor auto → pointer` on the two zoom links: exemption CAPTURE-LINK-HREF-CURSOR-LEAFLET-ZOOM matches only `text-primary`, BrowseDirectory's
- `migration/change-requests/CR-Search-1.md:6` (ScreenBlock_Search): - Other routes using it (catalog/blocks.md): Directory_Search.ScreenBlock_Search (Search; also any route embedding the block with In_IsInScreenSearch)
- `migration/change-requests/CR-Search-1.md:11` (ScreenBlock_Search): - Expression / handler: `sources/pretty/UBTConnect.Directory_Search.ScreenBlock_Search.mvc.js`:
- `migration/change-requests/CR-Search-1.md:32` (ScreenBlock_Search): the block's local aggregates and entity actions ported from the compiled SQL of ScreenBlock_Search (Get_RecentSearchTerms
- `migration/change-requests/CR-Search-1.md:36` (ScreenBlock_Search): (default 10, UBTConnect.clientVariables.js:74-76). Wired in `ScreenBlock_Search.tsx` (fetch at start :2159, refresh on
- `migration/change-requests/CR-Search-1.md:43` (ScreenBlock_Search): - UI: the recent block is inline in ScreenBlock_Search's view (:502-1119; SearchResults_Recent.mvc.js is a separate block it
- `migration/change-requests/CR-Search-1.md:44` (ScreenBlock_Search): does not use), built in `app/src/screens/Search/components/ScreenBlock_Search.tsx` with Remove / RemoveAll wired.
- `migration/change-requests/CR-Search-2.md:14` (ScreenBlock_Search): (`ScreenBlock_Search.mvc.js` :311). The body of JSUtilis_Element_Operations_Focus (UBTJavaScriptUtils.controller.js)
- `migration/change-requests/CR-Search-1.md:43` (SearchResults_Recent): - UI: the recent block is inline in ScreenBlock_Search's view (:502-1119; SearchResults_Recent.mvc.js is a separate block it

## ADRs (stack.md)

- `app/docs/reference/stack.md:204` (Search): - Decision: Replace @lhci/cli by lighthouse 13.4.1 (dev), driven by a small Node script (npm run lighthouse) with the ADR-12 scope: demo build served statically, HomeFeed / Search / OrbitLanding at mobile emulation, performance, accessibility, best practices, warning budgets, local filesystem output

## knowledge

- `migration/knowledge/auto-decisions-2026-10-15.md:71` (Search): | Search | (regression) | exemption | closing step | CAPTURE-FOCUS-BADGE-SEARCH-LOADING-PIXEL added and Search re-stamped by the orchestrator at 2026-10-15 23:48 (final sweep) |
- `migration/knowledge/audit-a1-empty-handlers.md:4` (Search): original". HomeFeed.mvc.js:708-723 navigates to Search. This was fixed before the audit.
- `migration/knowledge/static-entities-tst.json:406` (Search): "search": "Search",
- `migration/knowledge/static-entities-tst.json:1850` (Search): "search": "Search",
- `migration/knowledge/auto-decisions-2026-10-16.md:46` (Search): | F9: TST added `SearchResult.DisplayAddress` / `DisplayHouseholdName` (Connect_Search_CS) after the survey | **not adopted yet** (no recommendation; conservative: finished Search/ShareSheet unchanged) | CONFIRMED (user, 2026-10-17): not adopted, Search/ShareSheet unchanged |
- `migration/knowledge/auto-decisions-2026-10-16.md:89` (Search): | User bug (2026-10-16): HomeFeed search input not clickable | fixed: OnSearchClick → navigate to /UBTConnect/Search (HomeFeed.mvc.js:708-723); route note "empty handler in the original" was wrong; HomeFeed re-finished | audit A1 queued for other empty handlers |
- `migration/knowledge/feature-flag-helpers.md:33` (Search): | (direct) | outSystems_FF.C2EnableSearchByBirthday | true | Directory_Search.ScreenBlock_Search (`Connect_OutSystems_PermissionCheck`) | behaviour inside Search (birthday search) |
- `migration/knowledge/runtime-sources.md:29` (Search): | `UBTConnect.entities.js`, `UBTConnect.aggregates.IDB.js` | — | UBTConnect client entities (recent searches, …) and their IndexedDB aggregates (CR-Search-1) |
- `migration/knowledge/feature-flag-helpers.md:33` (ScreenBlock_Search): | (direct) | outSystems_FF.C2EnableSearchByBirthday | true | Directory_Search.ScreenBlock_Search (`Connect_OutSystems_PermissionCheck`) | behaviour inside Search (birthday search) |

## flags

- `migration/flags.md:11` (Search): | `action:bottomSheetOnToggle` (gone) (candidate) | flag check action | Bookmarks, CountryDetails, CountryList, Map, Notes, Notifications, Search, Updates_SingleList | - | open | - | **open** |
- `migration/flags.md:117` (Search): | `outSystems_FF.c2EnableSearchByBirthday` | static entity record | Map, Search | - | unavailable: C2EnableSearchByBirthday: birthday search inside Search | tst=on, prod=? | default-only: TST value on (user, 2026-10-14) |
- `migration/flags.md:138` (ScreenBlock_Search): - `action:getHasCarouselEnabled`: `UBTConnect.Directory_Locality.Locality_Households_HouseholdList.mvc.js`, `UBTConnect.Directory_Locality.Locality_Subdivisions.mvc.js`, `UBTConnect.Directory_Photobook.Photobook.mvc.js`, `UBTConnect.Directory_Search.ScreenBlock_Search.mvc.js`, `UBTConnect.Directory_
- `migration/flags.md:226` (ScreenBlock_Search): - `outSystems_FF.c2EnableSearchByBirthday`: `UBTConnect.Directory_Search.ScreenBlock_Search.mvc.js`

## parity exemptions

- `migration/parity-exemptions.json:32` (Search): "reason": "The original sets FocusOnReady True; the headless capture page was not focused, so the captured input shows no focus border. The clone keeps the focus (Search Q4). Masked in DOM and pixel comparison (style and pixel, as accepted).",
- `migration/parity-exemptions.json:33` (Search): "evidence": "migration/screens/Search/parity/default.json; Search Q4; accepted by the user 2026-10-15; migration/screens/MessageList/parity/search.json; MessageList Q8"
- `migration/parity-exemptions.json:74` (Search): "reason": "The loading capture shows GetLocalityStatistics after the OutSystems request timeout (fetch error: count '10 Localities' from the skeleton list, empty list, Service Interruption toast); the mock loading scenario never answers, so the clone shows the compiled loading branch (count skeleton
- `migration/parity-exemptions.json:1144` (Search): "routeRegex": "^/UBTConnect/Search(\\?|$)",
- `migration/parity-exemptions.json:1146` (Search): "detailRegex": "^0\\.\\d\\d% pixels differ .*migration/screens/Search/parity/loading\\.diff\\.png$",
- `migration/parity-exemptions.json:1148` (Search): "evidence": "migration/screens/Search/parity/loading.{expected,build,diff}.png; pixel rows measured with PIL (879 px over 30/255)"
- `migration/parity-exemptions.json:1147` (ScreenBlock_Search): "reason": "Two capture artifacts together pass the 0.20% pixel limit: (1) the search input is focused on ready (Input FocusOnReady true, ScreenBlock_Search; Input.tsx OnReady), so its border is the focus colour (106,113,120), while the reference is static HTML that cannot hold :focus (206,212,218), 

## Decision ids on the board rows of the flow's screens

V3a

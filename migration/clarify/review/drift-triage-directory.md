# Drift triage: group "directory" (2026-10-29)

Brief: `../builds/drift-triage-brief.md` (decision I10-12). Routes: Updates_SingleList, HomeFeed, Search, BrowseCountries,
CountryList, CommunityBusinessDetails_CoomingSoon (CBD), Assemble_BrowseByCountry, AssembleEvents.
Read-only work. No code change. No TST access. No MCP.

**Summary:** 8 routes, 667 differences, 6 rows. Rows: A 3, B 2, C 1, D 0.
Differences per class: A 13, B 565, C 89, D 0. All 8 routes were clean before the re-capture (parity at 62406f26).
States `loading` are clean on all 8 routes. 3 user questions (Q1 to Q3).

Notation: "old" is the capture of 2026-10-14 to 10-16 (scratchpad `pre-recapture-2026-10-29/<S>-analysis/`). "New" is
the re-capture of 2026-10-29 (`migration/screens/<S>/analysis/`). Line numbers `S:<n>` are in the new
`sources/pretty/<file>`. In a parity detail "x → y", x is TST and y is the build.

## Table of rows

| # | Block / cause | Routes · states · differences | Class | Fix (where) | Size | Risk | User decision |
|---|---|---|---|---|---|---|---|
| 1 | ConnectPatterns.StaticInput: new default `In_Prompt` | HomeFeed default, offline (text 1, layout 2 each); CBD default, offline (text 1, pixel 0.16 % each). 10 | A | `components/ui/StaticInput/StaticInput.tsx:22` default text (+ :11 comment, README, stories, captures, 2 tests). Also fixes Locality_Details (other group) | S | Low | No |
| 2 | New screen data action `GetCommunityStatistics` | HomeFeed default (call 1); CountryList default (call 1). 2 | A | Call it once at load: `pages/HomeFeed/HomeFeedPage.tsx` (or a hook) and `pages/CountryList/hooks/useCountryList.ts`; mock handlers in `pages/HomeFeed/mocks.ts`, `pages/CountryList/mocks.ts`. No UI change | S | Low | No |
| 3 | ScreenBlock_Search: recent clicked results now go through the server data action `Get_FilteredRecentClickedResults`, new markup | Search default (call 1). 1 | A | `platform/storage/localEntities/recentSearch.ts:177-202`, `pages/Search/hooks/useSearch.ts`, `pages/Search/components/RecentSearch.tsx:94`, `pages/Search/mocks.ts` | M | Medium | Yes: Q1, Q2 |
| 4 | Country statistics moved on TST (row CH) | BrowseCountries default (text 3, layout 1); CountryList default (text 3); AssembleEvents default (text 1); Assemble_BrowseByCountry default (text 1). 9 | B | Fixtures `mocks/fixtures/UBTConnect/DataActionGetCountriesStatistics/01-c8c3cc75.json` and `02-93a3ea9f.json`, row CH; `mocks/fictional/assemble.ts:52` | S | Low | No |
| 5 | Update feed moved on TST (types, genders, date groups) | HomeFeed default (18); Updates_SingleList default (538). 556 | B | `pages/Updates_SingleList/mocks.ts` (88 rows); `mocks/modules/UBTConnect/Directory_Updates/mocks.ts` (3 HomeFeed rows) | M | Low | No |
| 6 | Directory.LocalityListDetail rows in the closed Assemble_FilterSheet: other widths | AssembleEvents default (style 35, layout 20, position 34). 89 | C | No code change | S | Low | Yes: Q3 |

## Row details

### Row 1. StaticInput default prompt (A)

- Evidence: `UBTConnectLibrary.ConnectPatterns.StaticInput.mvc.js` S:13-14. Old: `"Search for households. entities, news"`.
  New: `"Search for households, members or places."`. The same file adds the class `search-placeholder-ellipsis` (S:177).
  React has this class already (`StaticInput.tsx:29`, Bookmarks Q4 (a), user 2026-10-29).
- The HomeFeed layout difference (TextEllipsis 288×24 → 271×24) and the CBD pixel hotspots (y 40 to 80) come from the
  longer text. They have the same cause.
- Fix: change the default of `inPrompt` (`StaticInput.tsx:22`) and its comment (:11). Update `StaticInput/README.md:7`,
  `StaticInput.stories.tsx`, the `__captures__` of StaticInput and HomeSearchSection, and the tests
  `components/layout/HomeLayout/HomeLayout.test.tsx:38` and `components/layout/HomeSearchSection/HomeSearchSection.test.tsx:15`.
- Other routes: every StaticInput without its own prompt (HomeFeed, CBD, Locality_Details). CountryList shows no text
  difference, so it sends its own prompt.

### Row 2. GetCommunityStatistics (A)

- Evidence, HomeFeed: `UBTConnect.Home.HomeFeed.mvc.js` S:4-23 (record), S:687-712 (data action, `dataFetchActionNames`),
  S:786-795 (OnReady: when not restored from cache, refresh it). The old file has no such action.
- Evidence, CountryList: `UBTConnect.Directory_Locality.CountryList.mvc.js` S:1191-1244
  (`dataFetchActionNames = ["getCommunityStatistics$DataActRefresh", "getCountriesStatistics$DataActRefresh"]`),
  S:1308-1325 (OnReady else branch: JavaScript1 calls `Action_RefreshData_CommunityStatistics`; `Action_RefreshData`
  is renamed `Action_RefreshData_CountryStatistics`). New unused variable `SkeletonCommunityStatistics`.
- Neither view reads the output. There is no visible change. The `$if(true, …)` wrappers around Section_CommunityPopulation
  (HomeFeed S:296, CountryList S:749) and ShareSheet (HomeFeed S:533) do not change the output.
- The contract exists: `app/src/api/openapi.yaml:3656` (CountryList) and `:3913` (HomeFeed). Output:
  `Out_CommunityStatistics {In_HouseholdCount, In_LocalitiesCount, In_CountriesCount, In_MembersCount, In_Change}`
  (`HomeFeed/analysis/calls.md:108-130`).
- The TST code has two paths that fetch (automatic fetch and the OnReady refresh). The capture shows one call per load on
  both screens (`calls.md` tables). Port one call per load, as captured.
- Mock: a contract handler with fictional counts, near the FeedBlock_CommunityPopulation mock values.

### Row 3. Search recent clicked results (A)

- Evidence: `UBTConnect.Directory_Search.ScreenBlock_Search.mvc.js` (228,644 → 236,936 bytes).
  - New data action `Get_FilteredRecentClickedResults` (S:34-52 record, S:2158-2181 refresh, S:2211 in
    `dataFetchActionNames`). Output: `Out_RecentClickedResults`, `Out_IdsToRemove`. The server reads the screen variable
    `RecentClickedResults` (`openapi.yaml:4725`, input schema).
  - New `Get_RecentClickedResultsOnAfterFetch` (S:2354-2400): copy the aggregate list to `RecentClickedResults`, call
    the data action, delete each id to remove from the local entity, then set `RecentClickedResults` to the server list.
  - Aggregate `Get_RecentClickedResults`: `maxRecords` 5 → 100 (S:1864, S:1987).
  - View: the Gallery (5 per row) becomes a SkeletonSection (`In_IsLoading`, placeholder `LoadingSection`, S:738-757).
    List style `list list-group recent-search-list` (S:768). Item style `recent-search-item overflow-wrap-anywhere` (S:809).
    AvatarImage gets `In_ForceLoadingState` (S:832). Text options get `isOverflowEllipsis = true` (S:983). The show
    condition uses the server list (S:562, S:642).
- React still has the old design: `recentSearch.ts:177-202` (`.slice(0, 5)`), `RecentSearch.tsx:94` (Gallery 5/5/5),
  `useSearch.ts:197-209` and `:310-317`.
- Parity sees only the call. The captured user has no recent clicks, so the list is empty in TST and in the build.
  The new markup cannot be checked by parity (Q2).
- Port one call per load, as captured (`Search/analysis/calls.md:9`), although the code fetches on two paths.
- Mock: a contract handler that returns the sent list and an empty `Out_IdsToRemove`.

### Row 4. Country statistics (B)

- The TST shows CH Households 34, Brothers 61, Sisters 52. The mock has 33, 58, 51. The span width difference on
  BrowseCountries (18×18 → 21×18) is the same number.
- No code change at the element: `Connect2_LegacyShared.Directory.LocalityListDetail.mvc.js` is byte-equal old and new.
  StatisticsList, Statistics_ListItem and BrowseCountries differ only in the version hash (same size).
- Fix: CH in both fixtures: Households 34, Brothers 61, Sisters 52 (if "Brethren" is on the screen, run the parity
  again and set it from the result). `mocks/fictional/assemble.ts:52`: CH `[102, 33, 4]` → `[102, 34, 4]`.
- Note: these statistics move with the TST data. A later re-capture can show this again.

### Row 5. Update feed (B)

- No code change at the element: `UBTConnectLibrary.ConnectCorePatterns.Update_ListItem.mvc.js` and
  `UBTConnectLibrary.ConnectPatterns.TagContent.mvc.js` have no changed line. The Updates_SingleList screen files differ
  only in the version hash. The tag colour follows the type and the gender (Birth male blue, Birth female pink,
  Marriage yellow, Taken neutral with an italic name).
- The TST feed got newer updates. The new tail is equal to old rows 20 to 33. Sequences (B = Birth, m/f = gender,
  M = Marriage, T = Taken), from `analysis/dom/default.html`:
  - Old (= mock): `Bm M M M M M M M M M T T Bm T Bm Bf Bm Bm Bm Bm Bf Bf Bf Bf Bf Bf M Bf M M M M Bm Bm M Bf Bf T Bm Bf Bm T Bf Bf Bm Bf Bm Bm Bm Twinsm Bm Bm M M M Bm M M M M M M Bm Bf Bm Bf Bm T Bf Bm Bm T Bf Bm Bf Bf Bf Bf T Bf Bm Bf Bm Bm Bm Bm M M`
  - New (TST): `Bf T M M M M Bf Bf M M Bm Bm Bm Bm Bm Bm T Bf Bf Bf Bf Bm Bm Bf T Bm Bm Bm Bf Bm Bm Bm Bf Bm Bf M M M Bf M M Bf Bm Bf Bf Bm Bf Bf Bm T Bm Bm Bf Bf Bm Bf Bf Bm M M Bm T T T Bm Bm Bm T Bm Bf Bm Bm Bm Bm Bf Bf Bf Bf Bf Bf M Bf M M M M Bm Bm`
- Date groups: the second section header is at row 31 on TST, at row 25 in the build (structure 2, Update_ListItem
  position 1). The groups are now 31 and 57 rows (the mock comment says 25 and 63).
- Fix: rewrite the 88 rows of `pages/Updates_SingleList/mocks.ts` to the new sequence and groups. Use fictional names
  with the masked lengths of the new DOM. In `mocks/modules/UBTConnect/Directory_Updates/mocks.ts`, the 3 HomeFeed rows
  become Birth (female), Taken, Marriage. `item()` sets `GenderId: 'Gender.MALE'` for every row (:27); add a gender
  argument. Keep one shared collection (CR-Updates_SingleList-1). Update the mock comments.
- Other routes: every route that reads `HomeFeed.updateItems` (HouseholdCarousel swipe, MarkAsRead handlers).

### Row 6. AssembleEvents filter-sheet rows (C)

- The differences are in the 17 LocalityListDetail rows of `Assemble.Assemble_FilterSheet`, which is closed. Pixel
  difference 0.006 %.
- The DOM is equal: 17 rows, the same classes and names, old and new. The CSS rules of `.landing-country-list-item`,
  `.width30`, `.width5`, `.width37-5`, `.locality-info-container` are unchanged (`css-relevant.md` diff shows only
  unrelated new rules). `Assemble_FilterSheet`, `LocalityListDetail` and `ScreenBlock_AssembleEvents` are byte-equal.
  `Connect2_Assemble_MUI.controller.js` only removes a client action (see below).
- On TST and in the build, the 30 % column and the 5 % column have the same width (90 px TST, 115 px build). Thus both
  are measured in a collapsed sheet, where the content sets the width. The cause of the TST change is not found.
- The 2026-10-29 `item10-finish.md` guess "row texts differ" is wrong: the row texts are equal.

## TST changes with no parity difference in this group

- `UBTConnect.Home.FeedBlock_Updates.mvc.js`: `Directory_Updates_RefreshBottomBarCount(true)` after MarkAsUnread and
  MarkAsRead (new S:762-766 and S:812-816). React has it (`pages/HomeFeed/hooks/useFeedUpdates.ts:124`).
- `UBTConnectLibrary.ConnectPatterns.BottomSheet.mvc.js`: new input `In_TouchActionNoneFix` and a drag-to-open handler
  (S:100, S:1146-1340). React has it (`components/ui/ConnectBottomSheet/jsNodes.ts:41-59`).
- `Connect2_Assemble_MUI.controller.js`: the client action `GetAssembleEventSummaryDateTimeString` is removed. React
  still uses it (`lib/assemble/actions.ts`, `components/assemble/AssembleSummaryCard/AssembleSummaryCard.tsx`). No
  parity difference: the event list shows no difference. Follow-up: find where TST formats this date now (the model file
  grew by 3 KB). Not a row; not checked further.

## Questions for the user

**Q1 (row 3). The local delete in `Get_RecentClickedResultsOnAfterFetch`.**
Evidence: S:2382-2395. The loop runs on `Out_IdsToRemove`, but each delete uses
`RecentClickedResults.Current.Id` (the current row of another list), not the id of the loop. Thus TST deletes the wrong
local row and keeps the stale rows. The screen still shows the right list, because the server list replaces it.
- (a) Port 1:1 and record a TST bug row (as B20/B21). Recommended: the screen result is equal, and the rule is 1:1.
- (b) Delete the ids of `Out_IdsToRemove`. Correct storage, but different from TST.
- (c) Ask the OutSystems team first, then (a) or (b).

**Q2 (row 3). How to check the new recent-clicks markup.**
The captured user has no recent clicks, so parity cannot see the list.
- (a) Unit tests of `RecentSearch` against the TST view code (S:738-983). Recommended: no TST action.
- (b) Add a capture state with recent clicks. It needs a click on a search result on TST; you must allow it.
- (c) Both.

**Q3 (row 6). AssembleEvents closed filter-sheet geometry.**
- (a) Re-capture AssembleEvents default once more (read-only). If the difference stays, then (b). Recommended.
- (b) Add a parity exemption for the LocalityListDetail rows of the closed filter sheet.
- (c) Accept as a known difference without an exemption.

Tool calls: 47.

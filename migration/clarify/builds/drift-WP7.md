# Drift WP7: Search recent clicked results rework (2026-10-29)

Row: `../review/drift-triage-directory.md` row 3 (class A). Decisions: D-Q1 (a) port 1:1 and record the TST bug;
D-Q2 (a) unit tests check the list markup. Source: `migration/screens/Search/analysis/sources/pretty/
UBTConnect.Directory_Search.ScreenBlock_Search.mvc.js` (capture of 2026-10-29, "S"). No TST access, no MCP.

## What changed

- `Get_RecentClickedResults` reads 100 rows at start (S:1864, S:1987) and 5 rows on a refresh (S:2753, S:3734,
  S:3954, S:4051). Before, it always read 5.
- New flow `Get_RecentClickedResultsOnAfterFetch` (S:2354-2421), after each aggregate fetch: RecentClickedResults =
  the aggregate list. While `Get_FilteredRecentClickedResults` has no data: call the data action (R1, `flow.fetch`)
  with the block variables and RecentClickedResults, run the delete loop, then RecentClickedResults = the server list.
  After that, a refresh shows the local rows and makes no call. One call per load, as captured.
- Delete loop: ported 1:1 with the TST bug (S:2382-2395). Recorded as **B22** in `app/docs/known-original-bugs.md`.
- Show condition (S:530, S:562, S:642): the server list `Out_RecentClickedResults` or the recent terms.
- View: the Gallery 5/5/5 is gone. Now: `Recent_SearchResults` > SkeletonSection `b1-$b13` (loading until the data
  action has data) > list `list list-group recent-search-list OSFillParent` > items
  `recent-search-item overflow-wrap-anywhere`.
- Mock: a contract handler that returns the sent rows and an empty `Out_IdsToRemove`.
- `Action_ClearResults`: `flow.own(() => undefined)` is now the R3 check at its start, and the action itself is a plain
  function. Same behaviour. Reason: the lint rule `react-hooks/refs` refused the old form, because the action now
  reaches the flow refs.

## Files

Owned: `app/src/pages/Search/hooks/useSearch.ts`, `useSearch.test.tsx`, `searchState.ts` (`recentClickedIdsDeleted`),
`searchState.test.ts`; `app/src/pages/Search/components/RecentSearch.tsx`, `RecentSearch.test.tsx`, `SearchView.tsx`,
`staticEntities.ts` (removed `Space_ExtraSmall`, now unused); `app/src/pages/Search/mocks.ts`;
`app/src/platform/storage/localEntities/recentSearch.ts` (`maxRecords`, `deleteConnectSearch_RecentClickedResults`);
`app/docs/known-original-bugs.md` (B22).

Outside the listed ownership (no other WP touches them; additive only):
- `app/src/api/search/types.ts`, `mapper.ts`, `repository.ts`, `index.ts`, `mapper.test.ts`: the new call
  `getFilteredRecentClickedResults`. The page template puts server calls in `api/<domain>/repository.ts`, and pages
  never call `callAction`.
- `app/src/platform/storage/localEntities/recentSearch.test.ts`: 2 tests of the changed module.
- `useSearch.ts` imports `deleteConnectSearch_RecentClickedResults` from `@/platform/storage/localEntities/recentSearch`
  (deep import, as `pages/Bookmarks/hooks/useBookmarks.ts` does), because the barrel `index.ts` is not in my list.

Edits were made with one-off exact-match Python scripts (each old text had to occur exactly once) and Write. No sed -i.

## Tests

New: 4 RecentSearch markup tests (skeleton section id and class, list and item classes, show condition on the server
list, avatar widths); 2 hook tests (one call at load with 7 rows, a refresh reads 5 rows with no call; B22 deletes the
first local row and keeps the named one); 2 `recentClickedIdsDeleted` tests; 2 store tests (100/5 rows, delete);
2 mapper tests. Result: 52 of 54 pass in `pages/Search`, `api/search`, `recentSearch.test.ts`.

The 2 failures are not WP7: `a failed fetch goes to the flow handler` and `R4: the user leaves while the click is
saved` also fail with the HEAD versions of `useSearch.ts` and `useSearch.test.tsx`. I swapped them in for one run, then
put my versions back. `raiseToFlowHandler` is never called. Other packages have work in progress in
`platform/flags`, `platform/bootstrap/mocks.ts` and `mocks/`. Run these tests again at the gate.

## Checks

- `npx tsc --noEmit`: no errors in WP7 files. Errors from other packages: `api/notification` (`badgeNumber`),
  `pages/Notifications` (WP5), `pages/Updates_SingleList/mocks.ts` (WP2, in progress at that time).
- eslint and prettier: clean on all changed files. `npm run arch`: no violations. `npm run dup`: exit 0.

## Parity (`route.py parity Search --app http://localhost:5174`, after the last code change)

| State | Before (triage) | After |
|---|---|---|
| default | call 1 (A) | clean (pixels 0.10 %, exempted as before) |
| loading | clean | clean |
| offline | clean | clean |

## What is left (all class A; parity cannot see them, because the captured user has no recent clicks)

1. `TextOptions.IsOverflowEllipsis` (S:983, the IconText of the recent terms). The React `TextOptions`
   (`lib/ubtConnectLibrary/structures.ts:29`) does not have it. TST `GetClasses_Text` adds `ubt-custom-text-ellipsis`
   (`migration/runtime-sources/UBTConnectLibrary.controller.js`, FormatClasses6). It needs `lib/ubtConnectLibrary`
   (WP9 is editing `actions.ts`). After that, `RecentSearch.tsx` sets `IsOverflowEllipsis: true` on the term text.
2. `In_ForceLoadingState = not IsDataFetched` on UBT_LazyImage (S:832). `EntityLazyImage` does not have this input
   yet (WP3 ports it, H-Q6 a). After that, pass `isRecentClickedLoading` in `RecentSearch.tsx`.
3. TST stylesheet `Connect2_LegacyShared.UBTConnect.css` changed. The copy in `app/public/UBTConnect/css/`
   (2026-10-14) does not have `.list.list-group.recent-search-list` (flex row, gap, overflow-x auto),
   `.recent-search-list > .recent-search-item` (max-width 100px) and `.recent-search-item span` (2-line clamp). The TST
   file also has a new "1.11. Notification Screen" section (WP5) and a changed `.ubt-services-carousel` img rule.
   Source: `migration/screens/Search/analysis/styles/bundle.css:26610-28656`. Without these rules, React shows the
   recent clicks as a vertical list.

## Questions

- **Q1. api/search outside the list.** (a) Keep the additive change in `api/search`. Recommended: the architecture
  rule puts it there, and no other package touches it. (b) Move it to another owner.
- **Q2. Barrel.** (a) At the gate, add `deleteConnectSearch_RecentClickedResults` to
  `platform/storage/localEntities/index.ts` and import it from the barrel. Recommended. (b) Keep the deep import.
- **Q3. Stylesheet.** (a) One owner refreshes `app/public/UBTConnect/css/Connect2_LegacyShared.UBTConnect.css` from
  the TST bundle of 2026-10-29 once, together with WP5 (it also gets the Notifications rules). Recommended. (b) A WP7
  follow-up, if you give me that file.
- **Q4. Items 1 and 2.** (a) A small follow-up after WP3 and WP9: 2 lines in `RecentSearch.tsx` and their tests.
  Recommended. (b) Record them as debt rows.

Not changed: `DataActionFetchSearchResults` still sends no RecentClickedResults. TST sends all screen variables with
each data action, and `Search/analysis/calls.md` says React does not have to.

Tool calls: about 70.

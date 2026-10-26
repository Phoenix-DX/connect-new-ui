## Result
status: pass
summary: BrowseDirectory is now a page, a flow hook (`hooks/useBrowseDirectory.ts`, with `useFlowState`) and a pure state file (`hooks/browseDirectoryState.ts`, with a reducer test). The page renders `DetailLayout` directly. `api.ts`, `types.ts` and `components/actions.ts` are deleted and folded into the domain `@/api/locality`, `inputs.ts` and the state file. No shared block changed. A temporary old-vs-new check found the same DOM, calls, request body, URLs and view-cache restore in 5 cases, StrictMode included. Typecheck, eslint, prettier, the full suite (480 files, 2624 tests) and `arch_baseline.py check` (exit 0) pass. HomeFeed and Login first load did not grow.

## Files changed
app/src/pages/BrowseDirectory/BrowseDirectoryPage.tsx (rewritten: inputs, useBrowseDirectory, DetailLayout + useNavigateBack instead of the Layout_DetailPage adapter; same view tree, ids and constants; `@origin`; no compiled-line references)
app/src/pages/BrowseDirectory/inputs.ts (new: BrowseDirectoryInputs and readBrowseDirectoryInputs (CountryCode); `@origin`)
app/src/pages/BrowseDirectory/hooks/useBrowseDirectory.ts (new: ScreenEvent_OnReady, Action_RefreshData, Action_InvalidateMapSize, the map and list handlers, Handler_BrowseCountries, Handler_StatisticsList_Clicked; once-guard and W23 liveness; `@origin`)
app/src/pages/BrowseDirectory/hooks/browseDirectoryState.ts (new: state, reducer, INITIAL state, toMarker, asLongText, localityLabelOf, getSkeletonList_UI_LocalityStatistics (from components/actions.ts); `@origin`)
app/src/pages/BrowseDirectory/hooks/browseDirectoryState.test.ts (new, 8 tests)
app/src/pages/BrowseDirectory/hooks/useBrowseDirectory.test.tsx (new, 13 tests, of which 4 are W23 and StrictMode tests)
app/src/pages/BrowseDirectory/BrowseDirectory.test.tsx (new page test in the app frame with MSW and Leaflet in jsdom, 6 tests; the page had no test before)
app/src/pages/BrowseDirectory/staticEntities.ts (moved with `git mv` from components/staticEntities.ts, content unchanged; the rename is staged)
app/src/pages/BrowseDirectory/api.ts (deleted: a re-export of `fetchLocalityCardList` of `@/api/locality`)
app/src/pages/BrowseDirectory/types.ts (deleted: a re-export of the type `LocalityCard` of `@/api/locality`)
app/src/pages/BrowseDirectory/components/actions.ts (deleted: re-exports of shared client actions, and the skeleton conversion, which moved to the state file; the empty `components/` folder is gone)
migration/refactor/handoffs/P6-G4-B-BrowseDirectory/dev.md (this report)

Not changed: `components/directory/*` (DirectoryMap, StatisticsList, StatisticsListItem), `components/layout/*` (BrowseSection, DetailLayout, BottomBar, CommonUiLayout), `shared/**` (the Leaflet and UBTConnect client actions, the Layout_DetailPage adapter), `api/locality/*`, `pages/BrowseDirectory/mocks.ts`, `app/docs/refactor/arch-baseline.csv` (this page had no rows).

## Commands run
`npm --prefix app run typecheck` → exit 0
`cd app && npx vitest run src/pages/BrowseDirectory` → exit 0, 3 files, 27 tests
`cd app && npx vitest run` (full suite) → exit 0, 480 files, 2624 tests
`cd app && npx eslint src/pages/BrowseDirectory` → exit 0, 0 errors, 0 warnings
`cd app && npx eslint .` → 0 errors, 88 warnings (none in src/pages/BrowseDirectory)
`cd app && npx prettier --check src/pages/BrowseDirectory` and `npm run format:check` → exit 0
`python3 migration/tools/refactor/arch_baseline.py check` → exit 0, "87 warnings, 87 baseline rows, 0 new, 0 gone"
`cd app && npm run arch` (depcruise) → 0 errors, 212 warnings, no line for src/pages/BrowseDirectory
`cd app && npx vite build` → exit 0; `node build/bundle-report.mjs` → HomeFeed 750.70 / 244.17 kB gzip, Login 600.63 / 184.19 kB gzip (B-Shared commit: 244.19 and 184.16; within noise, far under the W21 tripwire of +0.3 kB)
Temporary old-vs-new tests (`src/__tmp_old_browse/`: copies of the old page, api.ts, types.ts and components/ from HEAD; deleted after the run) → 6 tests, all equal. App frame, signed in, `?CountryCode=AR`. Compared: the body innerHTML on the first render and after the load (Leaflet inline styles and React useId values `_r_<n>_` normalized), the called actions, the request body of GetLocalityStatistics, the DOM and the calls after a back navigation (view-cache restore: no new call), the URL after the top section (/UBTConnect/BrowseCountries) and after a row click (/UBTConnect/Locality_Details?LocalityId=585&PreloadedLocalityLabel=Bahia%20Blanca%2C%20Argentina, ActionGetUserInformation called). Cases: default, loading, error (HTTP 500), empty, default in StrictMode (1 call).
Mutation check: without the liveness check in `write` and without the once-guard, 2 of 13 hook tests failed ("writes no state" after the unmount, "runs OnReady once in StrictMode"). The hook was restored from a copy (`cmp` equal), and the 27 tests pass.

## Deviations from the brief
1. Workspace: as the master asked (prefetch mode), I worked in the git worktree on branch `rf/prefetch-P6-G4-B-BrowseDirectory-6be34914`, not on `refactor/architecture`. The deletions were made with `rm` (not staged). The new files are untracked. Only the `git mv` rename of staticEntities.ts is staged.
2. Shape: a page and a hook, with no container and no component of its own. The screen has one data action, no data hook (Action_RefreshData calls the repository function `fetchLocalityCardList` on demand, as the page template says for flows) and no ScreenBlock. The view tree stays in the page, as in Menu and FeedItemDetail. `useLocalityCardListQuery` still has no caller: a query would refetch on a restored view and drop the skeleton rows of Action_RefreshData.
3. State: the old `useViewState('Model')` record is now `useFlowState` with viewName `Directory_Locality.BrowseDirectory`. It keeps the same fields, and the restore rule is the same (a restored view with IsDataFetched keeps its data; otherwise Action_RefreshData). The two old writes after the answer (the outputs, then OnAfterFetch) are one reducer action. React batched them into one render before, so the DOM is the same. Local_MapId stays a ref, as before (not in the view cache).
4. W23: the OnReady flow has no app-level side effect, only state writes, and these stop after the unmount. Handler_StatisticsList_Clicked is not guarded, as before: after an unmount it still navigates or shows the upgrade popup, once. The tests cover both. The once-guard and the newest liveness check follow the MessageDetail pattern.
5. `raiseToFlowHandler` is imported from `@/platform/feedback/flowErrors` (a re-export of `@/legacy/os/exceptions`, the same function).
6. Edits outside the Edit and Write tools: I used inline Python string replacements to make the temporary test copies and to edit the page test once. For the mutation check, I used one inline Python replacement in the hook, then restored the hook from a copy. No `sed -i`.
7. For the documenter:
   - move-map row 273 (`src/screens/BrowseDirectory/index.tsx`): shape page + hook. Hook `pages/BrowseDirectory/hooks/useBrowseDirectory.ts`, state `hooks/browseDirectoryState.ts`, inputs `pages/BrowseDirectory/inputs.ts`, static entities `pages/BrowseDirectory/staticEntities.ts`. The page renders DetailLayout without the Layout_DetailPage adapter. api.ts, types.ts and components/actions.ts are deleted.
   - move-map row 241 (Layout_DetailPage): one importer fewer, 14 code files remain.
   - The CHANGELOG entry. The comment in `api/locality/hooks.ts` ("No caller yet") stays true: `useLocalityCardListQuery` still has no caller.

## Questions for the user
none

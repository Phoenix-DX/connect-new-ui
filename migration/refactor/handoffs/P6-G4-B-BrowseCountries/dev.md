## Result
status: pass
summary: BrowseCountries is now a page that calls a flow hook (`useBrowseCountries`, on `useFlowState`, with the W23 once-guard and isAlive write guard) and a pure state file (`browseCountriesState`). The page renders `DetailLayout`, `StatisticsList`, `BottomBar` and `CommonUiLayout` with no flows of its own. `api.ts`, `types.ts` and `components/actions.ts` are deleted. The page calls `fetchBrowseCountriesStatistics` of `api/country` directly. A temporary old-vs-new test of 12 scripts gave the same DOM, calls, URL and feedback for both pages. All quick checks pass, the arch baseline exits 0 and the first loads did not grow (Login +0.04 kB, HomeFeed -0.02 kB).

## Files changed
app/src/pages/BrowseCountries/BrowseCountriesPage.tsx (rewritten: layout and components only)
app/src/pages/BrowseCountries/hooks/useBrowseCountries.ts (added)
app/src/pages/BrowseCountries/hooks/useBrowseCountries.test.tsx (added)
app/src/pages/BrowseCountries/hooks/browseCountriesState.ts (added; holds the skeleton client actions from components/actions.ts)
app/src/pages/BrowseCountries/hooks/browseCountriesState.test.ts (added)
app/src/pages/BrowseCountries/BrowseCountries.test.tsx (added)
app/src/pages/BrowseCountries/api.ts (deleted)
app/src/pages/BrowseCountries/types.ts (deleted)
app/src/pages/BrowseCountries/components/actions.ts (deleted; the empty `components/` folder is gone)
migration/refactor/handoffs/P6-G4-B-BrowseCountries/dev.md (added)

## Commands run
npm --prefix app run typecheck → exit 0
npx vitest run src/pages/BrowseCountries src/api/country src/components/directory/StatisticsList → exit 0; 8 files, 57 tests
npx vitest run src/app src/mocks src/platform/navigation → exit 0; 23 files, 115 tests
npx eslint src/pages/BrowseCountries → exit 0; 0 problems
npx prettier --check src/pages/BrowseCountries → clean
python3 migration/tools/refactor/arch_baseline.py check → exit 0; 87 warnings, 87 baseline rows, 0 new, 0 gone (BrowseCountries had no row)
npx depcruise src --config .dependency-cruiser.cjs --output-type err → exit 0; 212 warnings (HEAD 213): the rule-9 warning `BrowseCountriesPage.tsx → legacy/os/exceptions.ts` is gone (raiseToFlowHandler now comes from `platform/feedback/flowErrors`)
npx knip → no finding in src/pages/BrowseCountries
npx vite build && node build/bundle-report.mjs → exit 0; HomeFeed 244.17 kB gzip (244.19 at P6-G4-B-Shared), Login 184.20 kB gzip (184.16); +0.04 kB, under the W21 limit of 0.3 kB
Temporary old-vs-new test (old page from HEAD next to the new page, same MSW mocks; deleted after use) → 12 of 12 scripts the same: load, load in StrictMode, loading, error, click with access, click without access (upgrade dialog), click with the real HasAccessToRegion (ActionGetUserInformation), back navigation restore, back navigation restore in StrictMode, leave while loading then back (refresh again), leave while loading with an error (flow handler message after the unmount), search. The test compared the DOM (React useId ids normalised), the called actions, the URL and the feedback message.
Mutation checks (reverted) → without the isAlive write guard, the W23 unmount test fails; without the once-guard, the StrictMode test fails.

## Deviations from the brief
- Items 2 and 3 of step B: nothing to do. The page uses only shared blocks that P6-G4-B-Shared already placed (`components/directory/StatisticsList`, `components/layout/*`). I imported them and did not change them.
- Item 4: the hook calls the repository function `fetchBrowseCountriesStatistics` of `api/country`, not a query hook (page-template, "Flows that refresh on block events call the repository functions"). So `api/country` did not change, and the step needs no exemption entry (W6 caveat).
- The page renders `DetailLayout` with `useNavigateBack`, not the `Layout_DetailPage` adapter (the same as Menu, FeedItemDetail and Services). The DOM is the same.
- The view cache key of the state record changed from `Model` to `Directory_Locality.BrowseCountries` (the `useFlowState` viewName). The key is internal and the whole record is still saved. The back-navigation scripts gave the same result.
- W23: the OnReady flow has two side effects, the GetCountriesStatistics call and, on a failure, the flow handler. Both run once after an unmount (unit tests). Only the state writes stop. The click handler (navigation, upgrade pop-up) has no isAlive guard, as before.
- I formatted `BrowseCountries.test.tsx` with `npx prettier --write`, the project formatter (the file is new). I used no other in-place edit tool.
- Docs are left to the documenter: move-map.csv row `src/screens/BrowseCountries/index.tsx` (shape and notes: page + hook + state, no container, `api.ts`/`types.ts`/`components/actions.ts` deleted), `calls-by-domain.md` line 50 (still names `screens/BrowseCountries/api.ts`), `duplicates.md` line 225 (the BrowseCountries `api.ts` is gone), CHANGELOG.

## Questions for the user
none

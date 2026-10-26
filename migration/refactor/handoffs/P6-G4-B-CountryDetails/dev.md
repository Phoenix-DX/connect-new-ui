## Result
status: pass
summary: CountryDetails is now a page with the hook `hooks/useCountryDetails.ts` (the query of api/country, the 4 view-cache variables and the handlers), the pure file `hooks/countryDetailsState.ts` (from `components/actions.ts`), the props-only `components/CountryDetailsContent.tsx` and `inputs.ts`. `api.ts` and `types.ts` are deleted. The shared blocks are imported and not changed. `arch_baseline.py check` exits 0 (85 rows; the step had no row). Typecheck, lint, format and all 2653 tests pass. A temporary old-vs-new check gave the same DOM, calls, request bodies, locations and feedback in 9 scenarios. HomeFeed −0.02 kB and Login +0.00 kB gzip.

## Files changed
app/src/pages/CountryDetails/CountryDetailsPage.tsx (rewritten: layout, FilterSheetContainer, DirectoryLegendSheet; the flows are in the hook)
app/src/pages/CountryDetails/inputs.ts (new: `CountryDetailsInputs`, `readCountryDetailsInputs`)
app/src/pages/CountryDetails/hooks/useCountryDetails.ts (new)
app/src/pages/CountryDetails/hooks/useCountryDetails.test.tsx (new)
app/src/pages/CountryDetails/components/actions.ts → app/src/pages/CountryDetails/hooks/countryDetailsState.ts (`git mv`, rewritten)
app/src/pages/CountryDetails/hooks/countryDetailsState.test.ts (new)
app/src/pages/CountryDetails/components/CountryDetailsContent.tsx (new)
app/src/pages/CountryDetails/components/CountryDetailsContent.test.tsx (new)
app/src/pages/CountryDetails/CountryDetails.test.tsx (new)
app/src/pages/CountryDetails/api.ts (deleted, not staged)
app/src/pages/CountryDetails/types.ts (deleted, not staged)
migration/refactor/handoffs/P6-G4-B-CountryDetails/dev.md (new)

These files did not change: `pages/CountryDetails/mocks.ts`, `pages/CountryDetails/components/staticEntities.ts`, `api/country/*`, `components/directory/*` (DirectoryLegendSheet, DirectoryMap, StatisticsTypedItem), `components/layout/*`, `containers/FilterSheet/*`, `app/docs/refactor/arch-baseline.csv`, and the other routes of the group. The staged diff of P6-G4-B-CountryList is kept as it is.

## Commands run
All commands ran from the worktree root or `app/`, with Node 24 on PATH.
`python3 migration/tools/refactor/arch_baseline.py check` (before) → exit 0, "85 warnings, 85 baseline rows, 0 new, 0 gone". No row names CountryDetails.
`npx depcruise src --config .dependency-cruiser.cjs --output-type err` (before) → 0 errors, 212 warnings. The only CountryDetails warning: rule 9, `CountryDetailsPage.tsx → legacy/os/exceptions`.
`npm --prefix app run typecheck` → exit 0
`cd app && npx eslint src/pages/CountryDetails src/components/directory/DirectoryLegendSheet` → exit 0, 0 problems
`cd app && npx prettier --check src/pages/CountryDetails` → all formatted (`prettier --write` was run on the 2 new test files)
`cd app && npx vitest run src/pages/CountryDetails` → exit 0, 4 files, 30 tests (state 7, hook 10, content 7, page 6)
`cd app && npx vitest run src/pages/CountryDetails src/pages/CountryList src/components/directory src/api/country` → exit 0
`cd app && npx vitest run` (full suite) → exit 0, 485 files, 2653 tests
`npm --prefix app run lint` → exit 0, 0 errors, 86 warnings (the same 86 as the base: 85 baseline rows plus the duplicate `CommonUiLayout.tsx → platform/feedback/dialogs` line)
`npm --prefix app run format:check` → exit 0
`python3 migration/tools/refactor/arch_baseline.py check` (after) → exit 0, "85 warnings, 85 baseline rows, 0 new, 0 gone"
`npx depcruise …` (after) → 0 errors, 211 warnings. The rule-9 warning of CountryDetails is gone (see deviation 5). No new warning.
`npm --prefix app run build` → exit 0; `node app/build/bundle-report.mjs HomeFeed Login CountryList CountryDetails`. The base is the "after" of the P6-G4-B-CountryList dev.md, because the worktree has no clean base build:
  - HomeFeed: 750.70 / 244.17 kB gzip, 40 chunks (−0.02). W21 holds.
  - Login: 600.64 / 184.19, 12 chunks (+0.00).
  - CountryList: 661.19 / 208.52, 29 chunks (−0.02, hash-name noise).
  - CountryDetails: 886.18 / 274.80, 32 chunks (+1.42 raw, +0.27 gzip): the page is now 5 modules, and the hook returns 20 named handlers and values.
Temporary old-vs-new test (`pages/CountryDetails_old/`: the base page and its modules from the index and HEAD, and `compare.test.tsx`; deleted after the run; a copy is in the scratchpad at `cd-compare/compare.test.tsx`) → 9 scenarios, all equal. Each scenario compared `document.body` after each step (useId ids normalised), the call order, the request bodies of GetLocalityStatistics, the location and the feedback message. Each snapshot waited until the calls and the DOM stopped changing. 4 runs in parallel with the CountryList and directory tests passed.
  - load; a search "ros"; Rosario opens Locality_Details with "Rosario, Argentina"; back restores the search; the search cleared; a search without a result (the NotCaptured text)
  - the same load in StrictMode (1 fetch)
  - the mock scenario `loading`, with a search before the data (the skeleton list); the scenario `empty`
  - GetLocalityStatistics fails with HTTP 500 (the offline state "10 Localities"), then a search
  - no CountryCode input
  - the info icon opens the legend sheet with PreventBackNavigation, and a back navigation closes it
  - the country row opens the FilterSheet; Australia + Apply (body CountryCode AU, HasFiltersApplied true); Argentina + Apply (body CountryCode AR, a refetch)
  - the map (DOM after load). jsdom shows no `.leaflet-marker-icon` (clustering), so the popup link was not clicked there. The hook test covers the link through the tooltip builder.
I did not run the parity, the e2e suite or the dev server: the tester runs them.

## Deviations from the brief
1. Branch: this worktree is on `rf/prefetch-P6-G4-B-CountryDetails-6be34914`, not on `refactor/architecture`. The master set up this prefetch branch, and I worked in it as the master told me.
2. Shape: `page + hook` (no container, by the container criterion: one data hook).
   - The page reads the input (`inputs.ts`), calls `useCountryDetails` and renders `Layout_DetailPage` (title, content, bottom bar, CommonUiLayout), `FilterSheetContainer` and `DirectoryLegendSheet` with `preventBackNavigation={PreventBackNavigation}`.
   - `CountryDetailsContent` is the Content placeholder (SubLayout_Browse_Section: country row, map, search, title, count, list). It keeps the ids, the list key `l1-122`, the classes and the text. It gets the map events as callbacks; the map actions (Leaflet, bottom sheets) stay in the hook.
3. No `useFlowState`:
   - The data is `useCountryLocalityStatisticsQuery` of api/country (fetch on mount, a refetch only on Apply, `keepPreviousData`, no retry). The view cache keeps 4 variables (CountryCode, OriginalCountryCode, SearchString, HasFiltersApplied) with `useViewState`. page-template.md says not to use `useFlowState` for a screen whose view cache keeps only some variables.
   - The code of the flows moved without a change: the same hook order, the same refs (`fetchVariables`, `latestStatisticsClicked`, map and sheet ids), and a new function for each handler on each render, as before.
4. W23: the hook has no `isAlive`. Its only async flow is Handler_StatisticsList_Clicked (an event flow without state writes). Its side effects (upgrade pop-up, navigation, flow handler) run after an unmount, as before. A unit test unmounts while the access check is pending: the pop-up shows once, and nothing goes to the flow handler.
5. Rule 9: `raiseToFlowHandler` now comes from `@/platform/feedback/flowErrors`, which re-exports the same function of `legacy/os/exceptions`. The other G1–G3 page hooks do the same. The rule-9 warning of this page is gone (depcruise 212 → 211). That warning was not a baseline row (the baseline has only `no-restricted-imports` rows), so the baseline stays at 85 rows.
6. R4:
   - Each new file has `@origin UBTConnect.Directory_Locality.CountryDetails`.
   - The rewritten code has no compiled-line references (`CountryDetails.mvc.js:…`, `(:2366-2440)`). The comments keep the OutSystems names of the actions and handlers.
7. Tests: no test was deleted. The route had no test before. New tests:
   - `countryDetailsState.test.ts`: skeleton rows, Action_DefineList (accents, case), the id normalisation, marker, map options, the row image id, and the country of Apply.
   - `useCountryDetails.test.tsx`: MSW data; the spies are the map, the sheets, the access check, the dialogs and the flow handler. It covers OnReady, the search, Apply (other country, same country, none), the locality click (access, no access, error, W23), the map callbacks and the sheets.
   - `CountryDetailsContent.test.tsx`: props only, fictional localities.
   - `CountryDetails.test.tsx`: the page in the app frame (load, loading, HTTP 500, search + Locality_Details + back, the legend sheet with PreventBackNavigation, the FilterSheet with Apply).
8. Facts found and kept (not changed, no parity effect):
   - A failed GetLocalityStatistics does not go to the flow handler: the page shows the offline state ("10 Localities", empty list) without a feedback message. The base page behaves the same.
   - A refetch on Apply with the same country, while the first fetch of that country still runs, joins that fetch (TanStack Query: no data yet, so no cancel). The base page behaves the same. The hook test waits for the fetch to finish.
9. Git index and edits:
   - `git mv` staged the rename of `components/actions.ts`.
   - `api.ts` and `types.ts` were deleted with `rm` and are not staged. The new files are not staged.
   - Inline Python string replacements were used on 2 new test files, not the Edit tool (rule 6): one test was removed from `CountryDetailsContent.test.tsx`, and the list helper of `CountryDetails.test.tsx` was scoped to `$b10`. Each match occurred once.
   - The temporary old copies were written with `git show` by a scratchpad script, then deleted. Every other edit used Edit or Write. No `sed -i` was used.
10. For the documenter:
    - `move-map.csv` row 283 (CountryDetails): shape `page + hook`, with useCountryDetails, countryDetailsState, CountryDetailsContent and inputs.ts. `api.ts` and `types.ts` are gone.
    - `app/docs/refactor/calls-by-domain.md` line 51: the `screens/CountryDetails/api.ts` row. The hook calls `useCountryLocalityStatisticsQuery` of `api/country` directly.
    - `app/docs/guides/page-template.md` line 48: CountryDetails no longer calls the query through the re-export of its old `api.ts`. `hooks/useCountryDetails.ts` imports it from `@/api/country`.
    - `app/src/api/README.md` line 13 and `app/docs/guides/api-and-mocks.md` line 77: CountryDetails no longer has old `api.ts` and `types.ts` files that re-export the domain.
    - The CHANGELOG entry: baseline 85 rows, no change; depcruise 212 → 211 warnings.

## Questions for the user
none

## Result
status: pass
summary: Assemble_BrowseByCountry is now a page with the flow hook `hooks/useAssembleFilter.ts` (useFlowState, W23), the pure state file `hooks/assembleFilterState.ts` and the props-only `components/AssembleFilterView.tsx`, as move-map row 2 says. `api.ts`, `types.ts` and `components/ScreenBlock_Assemble_Filter.tsx` are deleted. No shared block changed. Typecheck, lint, format, the full suite (490 files, 2696 tests) and `arch_baseline.py check` (exit 0, 0 new, 0 gone) pass. A temporary old-vs-new check gave the same DOM, calls, request bodies, locations and feedback messages in 7 scenarios. HomeFeed -0.03 and Login -0.02 kB gzip.

## Files changed
app/src/pages/Assemble_BrowseByCountry/Assemble_BrowseByCountryPage.tsx (rewritten: the page calls useAssembleFilter, renders CommonUiLayout and AssembleFilterView, and gives the BackNavigationHandler slot)
app/src/pages/Assemble_BrowseByCountry/Assemble_BrowseByCountry.test.tsx (1 test added: back from AssembleEvents restores the block from the view cache; the 4 tests that were there are unchanged)
app/src/pages/Assemble_BrowseByCountry/api.ts (deleted, not staged)
app/src/pages/Assemble_BrowseByCountry/types.ts (deleted, not staged)
app/src/pages/Assemble_BrowseByCountry/components/ScreenBlock_Assemble_Filter.tsx (deleted, not staged; replaced by the view, the hook and the state file)
app/src/pages/Assemble_BrowseByCountry/components/AssembleFilterView.tsx (new)
app/src/pages/Assemble_BrowseByCountry/components/AssembleFilterView.test.tsx (new)
app/src/pages/Assemble_BrowseByCountry/hooks/assembleFilterState.ts (new)
app/src/pages/Assemble_BrowseByCountry/hooks/assembleFilterState.test.ts (new)
app/src/pages/Assemble_BrowseByCountry/hooks/useAssembleFilter.ts (new)
app/src/pages/Assemble_BrowseByCountry/hooks/useAssembleFilter.test.tsx (new)
migration/refactor/handoffs/P6-G4-B-Assemble_BrowseByCountry/dev.md (new)

These files did not change: `pages/Assemble_BrowseByCountry/mocks.ts`, `components/assemble/*` (AssembleLocalityFilter, AssembleSubdivisionFilter, LocalityListDetail), `components/layout/LegacyLayout`, `components/layout/MenuIcon`, `components/layout/CommonUiLayout`, `shared/**`, `api/**`, `app/docs/refactor/arch-baseline.csv` (the route had no baseline row), and the other routes of the group.

## Commands run
All commands ran from the worktree root (or `app/`), with Node 24 on PATH.
Bundle before the change: `npm --prefix app run build` + `node app/build/bundle-report.mjs HomeFeed Login Assemble_BrowseByCountry` → exit 0. HomeFeed 750.70 / 244.17 kB gzip (40 chunks), Login 600.63 / 184.18 (12), Assemble_BrowseByCountry 646.29 / 201.20 (27)
`npm run arch` (depcruise, before) → 0 errors, 210 warnings; 1 in this folder: rule-9 `ScreenBlock_Assemble_Filter.tsx → legacy/os/exceptions.ts`
`npm --prefix app run typecheck` → exit 0
`cd app && npx eslint src/pages/Assemble_BrowseByCountry` → exit 0, 0 problems
`cd app && npx prettier --check src/pages/Assemble_BrowseByCountry` → all formatted (`prettier --write` was run on the page and on `useAssembleFilter.test.tsx`)
`cd app && npx vitest run src/pages/Assemble_BrowseByCountry` → exit 0, 4 files, 29 tests
`cd app && npx vitest run` (full suite) → exit 0, 490 files, 2696 tests
`npm --prefix app run lint` → exit 0, 0 errors, 86 warnings (the 85 baseline rows plus the duplicate `CommonUiLayout.tsx → platform/feedback/dialogs` line, as before)
`npm --prefix app run format:check` → exit 0
`python3 migration/tools/refactor/arch_baseline.py check` → exit 0, "85 warnings, 85 baseline rows, 0 new, 0 gone"
`npm run arch` (after) → 0 errors, 209 warnings. The rule-9 warning of the old block is gone (the hook imports `raiseToFlowHandler` from `@/platform/feedback/flowErrors`). No warning in `pages/Assemble_BrowseByCountry/`.
Bundle after the change: build exit 0.
  - HomeFeed: 750.71 / 244.14 kB gzip, 40 chunks (-0.03). W21 holds.
  - Login: 600.63 / 184.16, 12 chunks (-0.02).
  - Assemble_BrowseByCountry: 648.87 / 202.06 (+0.86), 28 chunks. The page now loads the shared `flowState` chunk, as CountryList did in its step.
Temporary old-vs-new test (`pages/Assemble_BrowseByCountry_old/`: the base page, block, `api.ts`, `types.ts` from `git show HEAD`, and `compare.test.tsx`; deleted after the run; a copy of the test is in the scratchpad as `abc-compare.test.tsx`) → 7 scenarios, all equal. Each scenario compared `document.body` after each step (useId values normalised), the `callAction` log (module, owner, action, input names), the request bodies, the location and the feedback message:
  - load (Spinner, then 17 countries); search " ZEA", "Atlantis", "" (reload), "arg"; Argentina → "Filter by Locality"; Bahia Blanca; a supper meeting → Apply enabled; Apply → `AssembleEvents?ShowBackNavigation=True&SubdivisionId=9202&IsUserSubdivision=False`; back → the restored block on its first render; the user's own hall → `IsUserSubdivision=True`; back twice → the country list, then HomeFeed; a new visit, Australia, Cancel → HomeFeed
  - the same steps in StrictMode (each action called once)
  - Free plan: a country without access opens the FreeSubscriptionAlert dialog (ConfirmAction); the own country opens its localities
  - empty SubscriptionRegionId: ObjectNotFound "Invalid country id." to the flow handler, the Spinner stays
  - mock scenarios `empty` ("No results found", also after a search) and `error` (HTTP 500: the service-interruption message)
  - a navigation away while OnReady is pending (latency 40 ms): GetCountriesBySubscription is still called once after the unmount, and nothing renders
I did not run the parity, the e2e suite or the dev server: the tester runs them.

## Deviations from the brief
1. Branch: this worktree is on `rf/prefetch-P6-G4-B-Assemble_BrowseByCountry-3024d755`, not on `refactor/architecture`. The master set up this prefetch branch, and I worked in it as the master told me.
2. Shape: `page + hook + view` (no container). By the container criterion, the block has one flow hook, so the page calls `useAssembleFilter` and passes props to `AssembleFilterView`. The names are the ones of move-map row 2.
   - The screen events (Cancel: AllowUpcomingNavigation, then back; NavigateToSubdivision: AssembleEvents) stay in the page and go to the hook as block events.
   - BackNavigationHandler (`platform/`) is a slot that the page gives, at the same place in the tree (`b2-$b8`), as in MessageList.
   - The view keeps the ids, classes, styles and the order of the old block.
3. `api.ts` → hook: the two adapters (`getUserSubdivisionId`, `getSubscribedCountries`) call client actions of `shared/Connect2_LegacyShared` and `platform/session`, not the server. Rule 7 does not let `api/country` import them, so they are now 2 private functions of `useAssembleFilter.ts`. `CountryWithMapPosition` now comes from `@/api/country` (the type that `shared/.../structures.ts` re-exports).
   - AssembleEvents (`screens/AssembleEvents/api.ts`, G5) has the same `getSubscribedCountries`. I did not change it: it is in another group.
4. Hook details:
   - The state is one record with a patch reducer. The view-cache key is now `Connect2_Assemble_MUI.Assemble.ScreenBlock_Assemble_Filter` (it was 10 `useViewState` names). The record holds the same 10 variables, and the old-vs-new check shows the same restored block on the first render after a back navigation.
   - OnReady runs once per block, with the StrictMode pattern of CountryList and BrowseDirectory (`readyStarted`, `newestReadyRun`).
   - The flows read `latest` (page template), where the old block read the rendered values: the search filter (CountryDetailList), the country click after HasAccessToRegion (TempCountryDetailList), Apply and the back navigation. They differ only when a state write is not rendered yet. No test or scenario shows a difference.
5. W23: the state writes after an await (OnReady, the reload of an empty search, the country click) are skipped after an unmount. The calls, the ConfirmAction dialog and the errors still run, as in the old block (its writes after an unmount had no effect). 3 unit tests cover this.
6. R4: the 4 new code files have one `@origin` each (the page: `UBTConnect.Legacy_AssembleFlow.Assemble_BrowseByCountry`; the view, the hook and the state file: `Connect2_Assemble_MUI.Assemble.ScreenBlock_Assemble_Filter`). The rewritten code has no `// @os-block` line and no compiled-line reference. The page test keeps its old header comment.
7. Git index and edits:
   - `api.ts`, `types.ts` and `ScreenBlock_Assemble_Filter.tsx` were deleted with `rm` and are not staged.
   - The temporary old copies were written with `git show` and a Python import rewrite, and the temporary test was patched with inline Python replacements. All of them were deleted after the run. Every file that stays was written with Write or Edit, and `prettier --write`. No `sed -i` was used.
8. For the documenter:
   - `move-map.csv` row 2 (ScreenBlock_Assemble_Filter): status `moved`; hook `pages/Assemble_BrowseByCountry/hooks/useAssembleFilter.ts`, state `hooks/assembleFilterState.ts`, view `components/AssembleFilterView.tsx`.
   - `move-map.csv` row 270 (the page): notes say "the folder moves with it (api.ts, types.ts, mocks.ts, components/)". `api.ts`, `types.ts` and `ScreenBlock_Assemble_Filter.tsx` are now deleted.
   - `calls-by-domain.md` has no row for this route (its `api.ts` had no `callAction`).
   - The arch baseline did not change (85 rows; the route had none).

## Questions for the user
none

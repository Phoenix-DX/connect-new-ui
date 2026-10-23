## Result
status: pass
summary: CountryList is now a page with the flow hook `hooks/useCountryList.ts` (useFlowState, W23), the pure state file `hooks/countryListState.ts` (from `components/actions.ts`) and the props-only `components/CountryListContent.tsx`. `api.ts` and `types.ts` are deleted. DirectoryLegendSheet is props-only: the page gives PreventBackNavigation as the `preventBackNavigation` slot (CountryList and CountryDetails). The 2 baseline rows are deleted, and `arch_baseline.py check` exits 0 with 85 rows. Typecheck, lint, format and all 2623 tests pass. A temporary old-vs-new check gave the same DOM, calls, request bodies, locations and feedback messages in 12 scenarios. HomeFeed +0.00 and Login +0.03 kB gzip.

## Files changed
app/docs/refactor/arch-baseline.csv (the 2 rows of owner P6-G4-B-CountryList deleted)
app/src/components/directory/DirectoryLegendSheet/DirectoryLegendSheet.tsx (no `platform/` import; new optional prop `preventBackNavigation`; the `// @os-block` line removed)
app/src/components/directory/DirectoryLegendSheet/DirectoryLegendSheet.test.tsx (stand-in slot, no `platform/` import; 1 test added)
app/src/components/directory/DirectoryLegendSheet/DirectoryLegendSheet.stories.tsx (stand-in slot in the meta args)
app/src/components/directory/DirectoryLegendSheet/README.md
app/src/pages/CountryDetails/CountryDetailsPage.tsx (1 import, 1 prop: `preventBackNavigation={PreventBackNavigation}`)
app/src/pages/CountryList/CountryListPage.tsx (rewritten)
app/src/pages/CountryList/CountryList.test.tsx (new)
app/src/pages/CountryList/api.ts (deleted, not staged)
app/src/pages/CountryList/types.ts (deleted, not staged)
app/src/pages/CountryList/components/actions.ts → app/src/pages/CountryList/hooks/countryListState.ts (`git mv`, rewritten)
app/src/pages/CountryList/hooks/countryListState.test.ts (new)
app/src/pages/CountryList/hooks/useCountryList.ts (new)
app/src/pages/CountryList/hooks/useCountryList.test.tsx (new)
app/src/pages/CountryList/components/CountryListContent.tsx (new)
app/src/pages/CountryList/components/CountryListContent.test.tsx (new)
migration/refactor/handoffs/P6-G4-B-CountryList/dev.md (new)

These files did not change: `pages/CountryList/mocks.ts`, `pages/CountryList/components/staticEntities.ts`, `api/country/*`, `components/directory/EntitiesCarousel*` and the other `components/directory/*` blocks, `components/feed/*`, `components/notification/*`, and the other routes of the group (except the one call site in CountryDetails).

## Commands run
All commands ran from the worktree root, with Node 24 on PATH.
Bundle before the change: `npm --prefix app run build` + `node app/build/bundle-report.mjs HomeFeed Login CountryList CountryDetails` → exit 0. HomeFeed 750.71 / 244.19 kB gzip (40 chunks), Login 600.64 / 184.16 (12), CountryList 659.30 / 207.80 (28), CountryDetails 884.70 / 274.47 (32)
`npx depcruise src --config .dependency-cruiser.cjs --output-type err` (before) → 0 errors, 213 warnings
`npm --prefix app run typecheck` → exit 0
`cd app && npx eslint src/pages/CountryList src/pages/CountryDetails/CountryDetailsPage.tsx src/components/directory/DirectoryLegendSheet` → exit 0, 0 problems
`cd app && npx prettier --check` on the same paths → all formatted (`prettier --write` was run on `CountryListContent.tsx` and `DirectoryLegendSheet.test.tsx`)
`cd app && npx vitest run src/pages/CountryList src/components/directory/DirectoryLegendSheet` → exit 0, 5 files, 31 tests
`cd app && npx vitest run` (full suite) → exit 0, 481 files, 2623 tests
`npm --prefix app run lint` → exit 0, 0 errors, 86 warnings (the 85 baseline rows plus the duplicate `CommonUiLayout.tsx → platform/feedback/dialogs` line, which was there before)
`npm --prefix app run format:check` → exit 0
`python3 migration/tools/refactor/arch_baseline.py check` → exit 0, "85 warnings, 85 baseline rows, 0 new, 0 gone". `list` → no row of owner P6-G4-B-CountryList.
`npx depcruise …` (after) → 0 errors, 212 warnings. The rule-4 warning `DirectoryLegendSheet.tsx → platform/navigation/PreventBackNavigation` is gone. The rule-9 warning `→ legacy/os/exceptions` moved from `CountryListPage.tsx` to `hooks/useCountryList.ts` (same count). No other warning changed.
Bundle after the change: build exit 0.
  - HomeFeed: 750.70 / 244.19 kB gzip, 40 chunks (+0.00). W21 holds.
  - Login: 600.64 / 184.19 (+0.03, hash-name noise).
  - CountryList: 661.19 / 208.54 (+0.74), 29 chunks. The page now loads the shared `flowState` chunk (899 bytes raw, 0.49 kB gzip), and the page chunk is 6397 → 7372 bytes raw.
  - CountryDetails: 884.76 / 274.53 (+0.06): the import of PreventBackNavigation.
  - A chunk-size diff showed no other change: the `NotificationIcon` chunk is now named `useNotificationIcon` (1080 → 1075 bytes), and the other changes are ±3 bytes of hash names.
Temporary old-vs-new test (`pages/CountryList_old/`: the base page, its modules, the base DirectoryLegendSheet, the base CountryDetails page, and `compare.test.tsx`; deleted after the run; a copy of the test is in the scratchpad) → 12 scenarios, all equal. Each scenario compared `document.body` after each step (ids from useId normalised), the call order, the request bodies, the location and the feedback message:
  - load; the info icon opens the legend sheet with PreventBackNavigation; a back navigation closes it; a country opens CountryDetails?CountryCode=AU; back restores the list without a new fetch; the locality and country cards, the search input and the community population navigate
  - the same load and legend steps in StrictMode (1 fetch)
  - mock scenarios `loading`, `empty` and `error`
  - GetCountriesStatistics fails with HTTP 500 (CommunicationException), UserException, NotRegisteredException, ServerException and SecurityException
  - a navigation away while the fetch is pending (latency 40 ms), then back
  - CountryDetails: the info icon opens its legend sheet with PreventBackNavigation, and a back navigation closes it
I did not run the parity, the e2e suite or the dev server: the tester runs them.

## Deviations from the brief
1. Branch: this worktree is on `rf/prefetch-P6-G4-B-CountryList-6be34914`, not on `refactor/architecture`. The master set up this prefetch branch, and I worked in it as the master told me.
2. DirectoryLegendSheet slot (W13/W15 rows):
   - The slot is a component prop, `preventBackNavigation?: ComponentType<{ onBackNavigationPrevented }>`. It is not a render function like the G1 `renderPreventBackNavigation(id)` of PinCode.
   - Reason: the block gives its close handler to the slot, and that handler reads a ref. The lint rule `react-hooks/refs` rejects a render-time call with that handler. A JSX element with the handler as a prop passes the lint rule.
   - The block keeps its local UI state (IsOpened, the sheet id). Both pages give `preventBackNavigation={PreventBackNavigation}`, so the DOM is the same as before.
   - Without the slot, the open sheet does not prevent a back navigation. A test covers this.
   - The CountryDetails call site changed by 2 lines. Without this change, CountryDetails would lose the back prevention.
3. Tests: no test was deleted.
   - The back-queue test of the block (`runBackHandlers` closes the open sheet) moved to `pages/CountryList/CountryList.test.tsx`. It runs there with the real PreventBackNavigation, because a component test cannot import `platform/`.
   - The component test now uses a stand-in slot.
4. Shape: `page + hook` (no container, by the container criterion).
   - The page calls `useNotificationIcon`, `useCommunityPopulationQuery` and `useCountryList`, in the old hook order.
   - The page renders the layout, the header placeholders, the user-info wrapper and the legend sheet.
   - `CountryListContent` is the Content placeholder (cards, population, title, list). It keeps the ids, the list key `66` and the classes.
5. Hook details:
   - The state is one record with a patch reducer (`countryListReducer`).
   - The view-cache key is now `Directory_Locality.CountryList` (it was `Model`). The view cache saves the state when the screen is left, so this is not visible.
   - OnReady runs once per screen, with the StrictMode pattern of MessageDetail (`readyStarted` and `newestReadyRun`).
   - The fetch result and OnAfterFetch (the flag URLs) are now one write. The old code made 2 writes in the same microtask, and React batched them into 1 render.
6. W23: the OnReady state writes are skipped after an unmount. The error still goes to the flow handler, once. 2 unit tests cover this.
   - The old page had no guard. Its writes after an unmount had no visible effect, because the view cache saves the state when the screen is left.
   - The country click (hasAccessToRegion, then navigate or the upgrade pop-up) is an event flow and is not changed.
7. R4:
   - The new files have `@origin UBTConnect.Directory_Locality.CountryList`.
   - The `// @os-block` line of `DirectoryLegendSheet.tsx` is removed, because the file already had `@origin`. G3 did the same for NotificationIcon and CommunityPopulation.
   - The rewritten code has no compiled-line references. The block's unchanged JSDoc keeps its references.
8. Git index and edits:
   - `git mv` staged the rename of `actions.ts`.
   - `api.ts` and `types.ts` were deleted with `rm` and are not staged.
   - One edit used an inline Python string replacement, not the Edit tool (rule 6): 2 replacements in the new file `useCountryList.ts`, and each match occurred once.
   - The temporary old copies were written with `git show` and a Python import rewrite, then deleted. Every other edit used Edit or Write. No `sed -i` was used.
9. For the documenter:
   - `move-map.csv`: row 284 (CountryList): shape `page + hook`, with useCountryList and CountryListContent. Row 165 (Directory_LegendBottomSheet): props-only, `preventBackNavigation` slot given by CountryList and CountryDetails, no baseline rows.
   - `app/docs/refactor/calls-by-domain.md` line 52: the `screens/CountryList/api.ts` row. The hook calls `fetchCountryListStatistics` of `api/country` directly.
   - `app/src/api/README.md` line 13: CountryList no longer has old `api.ts` and `types.ts` files that re-export the domain.
   - The CHANGELOG entry: baseline 87 → 85 rows.

## Questions for the user
none

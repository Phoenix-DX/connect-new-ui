## Result
status: pass
summary: Search as page: ScreenBlock_Search is now `hooks/useSearch.ts` (useFlowState + `searchState.ts` reducer) and `components/SearchView.tsx` (+ `RecentSearch.tsx`). The route's `api.ts`/`types.ts` became the new domain `api/search`. FilterSheet, FilterSheetIcon and FilterOptionList are props only; the new `containers/FilterSheet` gives the data, the cache blocks, the back-navigation block and the upgrade popup. The 9 baseline rows of P6-G3-B-Search are deleted. `arch_baseline.py check` exits 0 (69 rows). Typecheck, lint, format and the full unit suite (2351 tests) pass.

## Files changed
app/docs/refactor/arch-baseline.csv
app/src/api/search/hooks.ts
app/src/api/search/index.ts
app/src/api/search/keys.ts
app/src/api/search/mapper.ts
app/src/api/search/mapper.test.ts
app/src/api/search/repository.ts
app/src/api/search/repository.test.ts
app/src/api/search/types.ts
app/src/components/filter/FilterOptionList/FilterOptionList.tsx
app/src/components/filter/FilterOptionList/FilterOptionList.test.tsx
app/src/components/filter/FilterOptionList/README.md
app/src/components/filter/FilterSheet/FilterSheet.tsx
app/src/components/filter/FilterSheet/FilterSheet.stories.tsx
app/src/components/filter/FilterSheet/FilterSheet.test.tsx
app/src/components/filter/FilterSheet/README.md
app/src/components/filter/FilterSheetIcon/FilterSheetIcon.tsx
app/src/components/filter/FilterSheetIcon/FilterSheetIcon.test.tsx
app/src/components/filter/FilterSheetIcon/README.md
app/src/containers/FilterSheet/FilterSheetContainer.tsx (new)
app/src/containers/FilterSheet/FilterSheetContainer.test.tsx (new)
app/src/containers/FilterSheet/README.md (new)
app/src/containers/FilterSheet/index.ts (new)
app/src/pages/Search/SearchPage.tsx
app/src/pages/Search/Search.test.tsx (new)
app/src/pages/Search/api.ts (deleted)
app/src/pages/Search/types.ts (deleted)
app/src/pages/Search/mocks.ts
app/src/pages/Search/components/ScreenBlock_Search.tsx → app/src/pages/Search/components/SearchView.tsx (git mv, rewritten)
app/src/pages/Search/components/actions.ts → app/src/pages/Search/hooks/searchState.ts (git mv, rewritten)
app/src/pages/Search/components/RecentSearch.tsx (new)
app/src/pages/Search/components/SearchResult_Section.tsx
app/src/pages/Search/components/Search_BirthdayOptions.tsx
app/src/pages/Search/hooks/searchState.test.ts (new)
app/src/pages/Search/hooks/useSearch.ts (new)
app/src/pages/Search/hooks/useSearch.test.tsx (new)
app/src/pages/Updates_SingleList/Updates_SingleListPage.tsx
app/src/pages/Updates_SingleList/components/Directory_Updates_FilterSheet.tsx
app/src/screens/CountryDetails/index.tsx
app/src/screens/Notes/components/Notes_FilterSheet.tsx
migration/refactor/handoffs/P6-G3-B-Search/dev.md (this report)

## Commands run
All commands from the worktree root, with Node 24 on PATH.
`python3 migration/tools/refactor/arch_baseline.py check` (before) → exit 0; 78 warnings, 78 rows
`npm --prefix app run typecheck` → exit 0
`cd app && npx vitest run src/api/search src/pages/Search src/components/filter src/containers/FilterSheet src/screens/CountryDetails src/screens/Notes src/pages/Updates_SingleList src/mocks` → exit 0; 13 files, 59 tests
`cd app && npx vitest run` (full suite) → exit 0; 438 files, 2351 tests
`cd app && npx eslint <changed folders and files>` → exit 0; 0 problems
`npm --prefix app run lint` → exit 0; 0 errors, 70 warnings, all Rule 4 rows of the baseline
`npm --prefix app run format:check` → exit 0
`npm --prefix app run arch` → 0 errors, 217 warnings. The step folders have no new Rule 4 or Rule 8 warning. One Rule 9 warning moved with its code: `pages/Search/components/ScreenBlock_Search.tsx → legacy/os/exceptions` is now `pages/Search/hooks/useSearch.ts → legacy/os/exceptions`. The Profile and ContactUsDetails hooks have the same warning. The `pages/Search/api.ts → legacy/os/os-wire` warning is gone.
`python3 migration/tools/refactor/arch_baseline.py check` (after) → exit 0; 69 warnings, 69 rows, 0 new, 0 gone. `list` gives P6-G3-B-HomeFeed 17, P6-G3-B-Updates_SingleList 3, P7 48, pre-existing 1, and no P6-G3-B-Search row.
`npm --prefix app run build && node app/build/bundle-report.mjs` → exit 0. HomeFeed 245.59 kB gzip (CHANGELOG P6-G3-A: 245.58; limit 248.22). Login 186.97 kB gzip (limit 193.84). The search and filter code is only in the chunks `SearchPage-*.js` and `FilterSheetContainer-*.js`. No first-load chunk of HomeFeed or Login has it (F17 holds).
I did not run the parity, the e2e suite or the dev server; the tester runs them.

## Deviations from the brief
1. Branch: this worktree is on `rf/prefetch-P6-G3-B-Search-4806c6fe`, the prefetch branch that the master set up, not on `refactor/architecture`. I worked in the worktree as the master told me.
2. New domain `api/search`: types, mapper, repository, keys, hooks, barrel, and the mapper and repository tests. No domain held the two calls `ScreenBlock_Search/DataActionFetchSearchResults` and `ScreenDataSetGet_SearchBirthdayOptions`. P0-4 counted them under `app`. I put them in a new `search` domain by data ownership, as W8 did for `policy`, because the data is the directory search results and its options. The inputs, the call order and the query key `['Search', 'ScreenDataSetGet_SearchBirthdayOptions']` stay the same. The master can confirm this, or move the domain to `api/app` (only the folder changes).
3. The FilterSheet work (the master's extra rules, W13/W15) adds 17 of the 41 file entries, so the step is a little over "about 40". I chose these shapes:
   - FilterSheet gets the props `countries`, `localities`, `userSubscription`, `cacheBlocks`, `renderBackNavigationHandler` and `onShowUpgradePopUp`. It keeps its model and handles a new result in an effect: `setCountries`, `setLocalities`, then `setUser` + Loaded, in the same order as the old Result handlers.
   - `containers/FilterSheet/FilterSheetContainer` meets criterion 2 of plan §2.3 (three data sources, three events, over 200 lines). It renders the three cache blocks as `cacheBlocks`, BackNavigationHandler and `showUpgradePopUp`. The DOM stays as captured: the nested blocks are still inside the FilterSheet block, in the same order. The container test and the page test check this.
   - FilterSheetIcon and FilterOptionList get `onShowUpgradePopUp`.
   - Call sites: CountryDetails, Notes_FilterSheet and Directory_Updates_FilterSheet change only the import line and the tag name. Updates_SingleListPage gets one prop, `onShowUpgradePopUp={showUpgradePopUp}`, on FilterSheetIcon. FilterOptionChoice and Notifications did not change.
4. Moved test (rule 5): "a single place filter opens straight into its list, built from the recorded countries" used the real cache blocks. It moved from `FilterSheet.test.tsx` to `FilterSheetContainer.test.tsx`. `FilterSheet.test.tsx` has a props version of it, plus new tests: a Free subscription, a disabled country that opens the popup, and the order of the slots. The stories give the results and the block wrappers as args, so they import no `api/` or `platform/` module.
5. Behavior kept 1:1: SearchView still gives FilterSheet a new `inOptions` and `inStartFilter` record on each render, as ScreenBlock_Search did. FilterSheet takes a new record as a parameter change and runs Action_Define_OptionControl again on each Search render, which resets the sheet's country selection. OutSystems compares records by value, so I think this is an old React-port quirk. I did not fix it (rule 4). A comment in SearchView marks it. Follow-up candidate.
6. View cache: the 13 kept block variables are now one record under `Directory_Search.ScreenBlock_Search` (useFlowState), not 13 keys. They are restored the same way. The 4 variables that the old code did not keep (the filter-sheet id, IsLoaded, ShowSubscriptionOnClick, isBirthdaySearchEnabled) and the recent lists stay local state.
7. R4: SearchResult_Section and Search_BirthdayOptions had only `// @os-block`. They now have the JSDoc `@origin` tag (I changed their type import anyway). I removed the compiled-line references (`:NNNN`) from the rewritten code: useSearch, searchState, SearchView, RecentSearch, SearchPage. Untouched code keeps its references.
8. Git index: `git rm` staged the deletion of `pages/Search/api.ts` and `types.ts`. By mistake I also ran `git add -N` for a file count, then removed those intent-to-add entries with `git rm --cached` (the new files are untracked again, the content did not change). I made one edit (FilterSheetIcon.tsx) with a one-off Python string replace before I switched back to the Edit tool. The result is the diff above.
9. Left for the documenter:
   - `move-map.csv`: the ScreenBlock_Search row gets status and shape `hook+component` (useSearch + SearchView). The FilterSheet row note ("no data action: component with props") is now out of date: there is a container.
   - `calls-by-domain.md`: Search's `api.ts` is deleted and its two calls are in `api/search`.
   - `api/README.md`: the new `search` domain.
   - The CHANGELOG entry.

## Questions for the user
none

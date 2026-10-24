## Result
status: pass
summary: AssembleEvents is now a page: ScreenBlock_AssembleEvents → `hooks/useAssembleEvents.ts` + props-only `components/AssembleEventsView.tsx` (move-map row 4), and the two inner blocks with flows (AssembleSummary_List, Assemble_FilterSheet) → hook + pure state file + props-only view. `api.ts`, `types.ts` and `ScreenBlock_AssembleEvents.tsx` are deleted; the calls come from `api/event` and `api/locality`. F21: 2 copies kept, with a note in `duplicates.md`. Typecheck, lint, format, the full suite (528 files, 2984 tests), `arch_baseline.py check` (0 new, 0 gone) pass; a temporary old-vs-new check gave equal DOM, calls, request bodies, locations, feedback and preload object in 13 scenarios. HomeFeed +0.05 and Login +0.04 kB gzip (raw unchanged).

## Files changed
app/src/pages/AssembleEvents/AssembleEventsPage.tsx (rewritten: reads `inputs.ts`; three small block components at the places of the old blocks call the hooks and render the views; handlers and BottomSheet as before)
app/src/pages/AssembleEvents/AssembleEvents.test.tsx (2 tests added: back from AssembleDetail restores the title and the list on the first render with no new call; W23 navigation away while OnReady waits. The 2 tests that were there are unchanged)
app/src/pages/AssembleEvents/inputs.ts (new: the route inputs SubdivisionId, ShowBackNavigation, IsUserSubdivision)
app/src/pages/AssembleEvents/hooks/useAssembleEvents.ts (new: OnReady of ScreenBlock_AssembleEvents, SubdivisionName)
app/src/pages/AssembleEvents/hooks/useAssembleEvents.test.tsx (new)
app/src/pages/AssembleEvents/hooks/assembleSummaryListState.ts (new: the 13 variables of AssembleSummary_List, reducer, call variables, header label)
app/src/pages/AssembleEvents/hooks/assembleSummaryListState.test.ts (new)
app/src/pages/AssembleEvents/hooks/useAssembleSummaryList.ts (new: OnReady, tags, drawer, Clear, paging, card click)
app/src/pages/AssembleEvents/hooks/useAssembleSummaryList.test.tsx (new)
app/src/pages/AssembleEvents/hooks/assembleFilterSheetState.ts (new: the variables of Assemble_FilterSheet, reducer, search, country step)
app/src/pages/AssembleEvents/hooks/assembleFilterSheetState.test.ts (new)
app/src/pages/AssembleEvents/hooks/useAssembleFilterSheet.ts (new: OnReady, search, country click, locality events, Cancel, Apply; private `fetchSubscribedCountries`, F21)
app/src/pages/AssembleEvents/hooks/useAssembleFilterSheet.test.tsx (new)
app/src/pages/AssembleEvents/hooks/userSubdivision.ts (new: `fetchUserSubdivision` (was `getUserSubdivision` of api.ts) and `isUsersOwnSubdivision`, used by the 3 hooks)
app/src/pages/AssembleEvents/components/AssembleEventsView.tsx (new: the view of ScreenBlock_AssembleEvents; the list is a slot)
app/src/pages/AssembleEvents/components/AssembleEventsView.test.tsx (new)
app/src/pages/AssembleEvents/components/AssembleSummary_List.tsx (rewritten: props-only view, same markup)
app/src/pages/AssembleEvents/components/AssembleSummary_List.test.tsx (new)
app/src/pages/AssembleEvents/components/Assemble_FilterSheet.tsx (rewritten: props-only view, same markup)
app/src/pages/AssembleEvents/components/Assemble_FilterSheet.test.tsx (new)
app/src/pages/AssembleEvents/components/HorizontalTags.tsx (the `TagItem` type moved here from types.ts)
app/src/pages/AssembleEvents/components/AssembleSummary_FilterDrawer.tsx (import line: types from `@/api/event`)
app/src/pages/AssembleEvents/components/actions.ts (import line: type from `@/api/event`; one comment said "api.ts", now "the api/event mapper")
app/src/pages/AssembleEvents/api.ts (deleted with rm, not staged)
app/src/pages/AssembleEvents/types.ts (deleted with rm, not staged)
app/src/pages/AssembleEvents/components/ScreenBlock_AssembleEvents.tsx (deleted with rm, not staged; replaced by the view and the hook)
app/docs/refactor/duplicates.md (new section at the end: F21, the subscribed countries of the Assemble filters)
migration/refactor/handoffs/P6-G5-B-AssembleEvents/dev.md (new)

These files did not change: `pages/AssembleEvents/mocks.ts`, `AssembleSummary_List__Header.tsx`, `AssembleSummary_SkeletonList.tsx`, `InBlock_ActionMenu.tsx`, `NC_ErrorScreen.tsx`, `components/**`, `api/**`, `platform/**`, `shared/**`, `app/docs/refactor/arch-baseline.csv` (the route has no baseline row), `pages/Assemble_BrowseByCountry/**` and the other routes of the group.

## Commands run
All commands ran in the worktree (or its `app/`), with Node 24 on PATH.
Bundle before the change: `npm --prefix app run build` + `node app/build/bundle-report.mjs HomeFeed Login AssembleEvents` → exit 0. HomeFeed 751.38 / 244.36 kB gzip (40 chunks), Login 601.33 / 184.39 (12), AssembleEvents 735.88 / 230.50 (38)
`npm --prefix app run typecheck` → exit 0
`cd app && npx eslint src/pages/AssembleEvents` → exit 0, 0 problems
`cd app && npx prettier --check src/pages/AssembleEvents docs/refactor/duplicates.md` → all formatted (`prettier --write` was run on the route)
`cd app && npx vitest run src/pages/AssembleEvents` → exit 0, 9 files, 48 tests
`cd app && npx vitest run` (full suite) → run 1: 527/528 files, 2983/2984 tests: `pages/Updates_SingleList/Updates_SingleList.test.tsx` ("back from the carousel", not this route) failed once under load; it passed 3 of 3 alone. Run 2: no failure. Run 3: 528 files, 2984 tests, all pass
`npm --prefix app run lint` → exit 0, 0 errors, 76 warnings (the 75 baseline rows plus the duplicate `CommonUiLayout.tsx` line, as before)
`npm --prefix app run format:check` → exit 0
`python3 migration/tools/refactor/arch_baseline.py check` → exit 0, "75 warnings, 75 baseline rows, 0 new, 0 gone"
`npm run arch` → 0 errors. Before: 189 warnings, 4 in `pages/AssembleEvents/` (3 rule-9 `→ legacy/os/exceptions.ts` from ScreenBlock_AssembleEvents, AssembleSummary_List, Assemble_FilterSheet; 1 `mocks.ts → legacy/os/os-wire.ts`). After: 186 warnings; only the unchanged `mocks.ts` line is left in the folder
`npx knip` → no unused file and no unused value export in the route; 10 "unused exported types" in the route (props and flow types; the codebase has 777)
`python3 migration/tools/ste_lint.py app/docs/refactor/duplicates.md` → 0 errors; 2 new glossary warnings ("page", the architecture term)
Bundle after the change: build exit 0.
  - HomeFeed: 751.38 / 244.41 kB gzip, 40 chunks (+0.05 gzip, raw unchanged). W21 holds (margin 3.81 kB to 248.22; under the 0.3 kB tripwire).
  - Login: 601.33 / 184.43, 12 chunks (+0.04 gzip, raw unchanged).
  - AssembleEvents: 741.55 / 232.09, 39 chunks (+1.59 gzip). The route chunk grew 22,358 → 27,125 bytes (hooks and reducers), and the page now loads the shared `flowState` chunk (as Assemble_BrowseByCountry in G4).
  - Cause of the HomeFeed and Login gzip change: I rebuilt the base in a scratch copy of `app/` (same entry hash `index-Cf-T2Wtu.js`, so the build is reproducible) and compared each chunk with the file hashes normalised. The chunks of both first loads have the same byte length; they differ only in chunk hashes and in the minified export aliases of shared chunks (`ev as Se` → `eu as Se`). No code of the first load changed.
Temporary old-vs-new check (`pages/AssembleEvents_old/`: the base files from the git index with the imports rewritten, and `compare.test.tsx`; deleted after the run; a copy of the test is `/private/tmp/claude-501/-Users-khaitruong-Projects-connect-new/59d369e8-2125-443a-af59-6fe7f8eaa7bc/scratchpad/ae-compare.test.tsx`) → 13 scenarios, all equal. Each scenario compared `document.body` after each step (useId values normalised), the `callAction` log (module, owner, action, input names), the request bodies, the location, the feedback message and the preload object, with the clock frozen at noon:
  - load (skeleton, then 10 meetings); 2 scroll endings (30 meetings); Past Meetings; drawer open; a type checked; Apply; Clear; drawer search "pray" and Cancel; Upcoming Meetings; a card → AssembleDetail; back (the restored first render, then settled); the place link → Assemble_BrowseByCountry; back; the calendar icon → MyEntertaining. Without and with StrictMode
  - another supper meeting (`ShowBackNavigation=True&SubdivisionId=9202&IsUserSubdivision=False`): GetSubdivisionName, large title, no icons
  - the filter sheet: search " ZEA", "Atlantis", "" (reload), "arg"; a country → localities; Bahia Blanca; a supper meeting → Apply enabled; Apply (IsUserSubdivision False: "Assemble" goes); Link_Back; a country again, Cancel. Without and with StrictMode
  - the sheet without access (Free plan): ConfirmAction of `b5-FreeSubscriptionAlert`
  - empty SubscriptionRegionId: "Invalid country id." from the sheet, the list still loads
  - mock scenarios `nomeetings`, `empty`, `error`
  - navigation away while OnReady waits (latency 40 ms), then forward: the calls still run once after the unmount. Without and with StrictMode
  - back while page 2 loads (latency 60 ms): the restored view refetches the list, as before
I did not run the parity, the e2e suite or the dev server, and I did not start `vite preview`: the tester runs the parity.

## Deviations from the brief
1. Branch: this worktree is on `rf/prefetch-P6-G5-B-AssembleEvents-b6241988`, not on `refactor/architecture`. The master set up this prefetch branch and the base (P6-G5-A and P6-G5-B-Shared in the index), and I worked in it as told. Nothing is staged by me.
2. Shape: `page + hook + view` for ScreenBlock_AssembleEvents (move-map row 4: `hooks/useAssembleEvents.ts`, `components/AssembleEventsView.tsx`). The two inner blocks with flows have no move-map row; they got the same shape inside the page: `useAssembleSummaryList` + `assembleSummaryListState.ts` + view `AssembleSummary_List`, and `useAssembleFilterSheet` + `assembleFilterSheetState.ts` + view `Assemble_FilterSheet` (the views keep the OutSystems names, as `FeedBlock_Updates` in HomeFeed). No container.
   - The page has 3 small block components (`AssembleEventsBlock`, `AssembleSummaryListBlock`, `AssembleFilterSheetBlock`) at the places of the old blocks, as HomeFeed does. So OnReady runs in the old order (the list, the screen block, then the sheet), and a state change renders only its block.
   - The views keep the ids, classes, styles and order of the old markup.
3. `api.ts` → domains: `getAssembleEventTypes` / `getAssembleMeetingSummaryList` → `fetchAssembleEventTypes` / `fetchAssembleMeetings` of `@/api/event`; `getSubdivisionName` → `fetchSubdivisionName` of `@/api/locality`. `getUserSubdivision` (a client action of `shared/Connect2_LegacyShared`) became `hooks/userSubdivision.ts`; rule 7 keeps it out of `api/`. `types.ts` → the types of `@/api/event` and `@/api/country`; `TagItem` moved into `HorizontalTags.tsx`.
4. F21: I kept 2 copies of `fetchSubscribedCountries` (`useAssembleFilterSheet.ts` here, `useAssembleFilter.ts` in Assemble_BrowseByCountry) and wrote the reason in `duplicates.md`. The 2 copies are the same 6 lines. No allowed module can hold them: rule 3 forbids a page-to-page import, rule 7 keeps a function that imports `platform/` and `shared/` out of `api/country`, and `components/` / `containers/` do not hold data functions. When `getCacheableRegionSubscribedCountries` moves to `api/country` (rule 7 allows all its imports), each copy becomes one line. The two state files are similar for the same reason (OutSystems twin blocks); the section says so. I did not change Assemble_BrowseByCountry.
5. Hook details:
   - The flows read `latest` (page template). The old blocks read the rendered values (OnReady: the values of the mount render; the tag, Clear, scroll-ending and Apply handlers: the last render). They differ only in a race, for example a tag click while OnReady waits for the user information. No scenario shows a difference.
   - View cache: one record per block (`Connect2_Assemble_MUI.Assemble.ScreenBlock_AssembleEvents`: SubdivisionName; `Connect2_Assemble_MUI.Assemble.AssembleSummary_List`: the 13 variables that were 13 `useViewState` names). The old filter sheet kept plain state, so `useAssembleFilterSheet` gives `useFlowState` a `restore` that returns the defaults: a back navigation starts the sheet from the defaults and OnReady fetches again, as before.
   - OnReady runs once per block with the StrictMode pattern of Assemble_BrowseByCountry (`readyStarted`, `newestReadyRun`).
6. W23: the state writes after an await are skipped after an unmount (all three hooks). The calls, the ConfirmAction dialog and the errors still run, as in the old blocks. Tests: one W23 test per hook and one page test (navigation away while OnReady waits: each call once, nothing renders).
7. W28 / P6-F17 (master update): not applicable. The old blocks ran OnReady in `useEffect` (after paint), so I did not copy `flowState.ts` and I did not use `beforePaint` or `useReadyBeforePaint`.
8. Shared code (1) of the prompt: the route does not call GetCacheableSignedImageURL, so I did not copy `api/image`.
9. Not changed on purpose: `AssembleSummary_FilterDrawer.tsx` keeps its `usePreventBackNavigation` (a page-local component; moving it changes the back-handler registration), and the list view imports the `ScrollAnchor` block of `platform/navigation` (as `pages/Notifications/components/NotificationsList.tsx`). The 5 small page components that only changed an import line or a type keep their `// @os-block` line (not rewritten).
10. R4: the 10 new or rewritten code files that port the screen or a block have one `@origin` each (the page and `inputs.ts`: `UBTConnect.Legacy_AssembleFlow.AssembleEvents`; the view and the hook of the screen block: `Connect2_Assemble_MUI.Assemble.ScreenBlock_AssembleEvents`; the list view, hook and state: `...AssembleSummary_List`; the sheet view, hook and state: `...Assemble_FilterSheet`). `userSubdivision.ts` ports no block and has no tag. The rewritten code has no compiled-line reference.
11. Git and edits: the 3 old files were deleted with `rm`. The temporary old copies were written by a Python script in the scratchpad (`git show :<path>` and an import rewrite) and deleted after the run, with `rm -r`; the scratch build copy of `app/` was deleted too. Every file that stays was written with Write or Edit, small test edits with inline Python replacements, and `prettier --write`. No `sed -i`.
12. For the documenter:
   - `move-map.csv` row 4 (ScreenBlock_AssembleEvents): status `moved`; hook `pages/AssembleEvents/hooks/useAssembleEvents.ts`, view `components/AssembleEventsView.tsx`. The inner blocks: `hooks/useAssembleSummaryList.ts` + `assembleSummaryListState.ts` + `components/AssembleSummary_List.tsx`, `hooks/useAssembleFilterSheet.ts` + `assembleFilterSheetState.ts` + `components/Assemble_FilterSheet.tsx`.
   - Row 269 (the page): `api.ts`, `types.ts` and `ScreenBlock_AssembleEvents.tsx` are deleted; the route inputs are in `inputs.ts`.
   - `calls-by-domain.md` rows 59 and 99 name `screens/AssembleEvents/api.ts`: the calls are now in `api/locality` (`fetchSubdivisionName`) and `api/event` (`fetchAssembleEventTypes`, `fetchAssembleMeetings`), called from the hooks.
   - `followups.md` F21: done, decision "keep 2 copies" (section in `duplicates.md`).

## Questions for the user
none

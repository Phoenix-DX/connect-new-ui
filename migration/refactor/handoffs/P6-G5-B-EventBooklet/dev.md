## Result
status: pass
summary: EventBooklet is now a page. The 1,074-line ScreenBlock_EventBooklet is split into `hooks/useEventBooklet.ts` (useFlowState with `onReady` and `beforePaint: true`, P6-F17), the pure `hooks/eventBookletState.ts` (from `components/actions.ts`), the props-only view `components/EventBookletView.tsx` with `EventBookletGuestView`, `EventBookletHelperView` and `EventBookletListParts`, and `inputs.ts`. `api.ts` is deleted; `types.ts` keeps only the mock wire types and the block structures. A temporary old-vs-new test gave the same DOM, calls, request bodies, locations, messages, flow-handler errors and upgrade pop-ups in 16 scenarios (2 runs each after the first version, after W28 and after F17). Typecheck, lint, format and the full suite (501 files, 2,784 tests) pass. arch_baseline: 0 new. HomeFeed +0.00 and Login +0.01 kB gzip (hash-name noise; raw sizes equal).

## Files changed
app/src/pages/EventBooklet/EventBookletPage.tsx (rewritten: reads the inputs, calls useEventBooklet, renders EventBookletView with the BackNavigationHandler and Dialog_AccessRestrictedAction_Legacy slots, then CommonUiLayout)
app/src/pages/EventBooklet/inputs.ts (new: `EventBookletInputs`, `readEventBookletInputs`)
app/src/pages/EventBooklet/hooks/useEventBooklet.ts (new)
app/src/pages/EventBooklet/hooks/useEventBooklet.test.tsx (new)
app/src/platform/navigation/flowState.ts (P6-F17 copied byte for byte with `cp` from the wt-F17b worktree, `cmp` identical; not edited: the `beforePaint` option, W28)
app/src/pages/EventBooklet/components/actions.ts → app/src/pages/EventBooklet/hooks/eventBookletState.ts (`git mv`, rewritten: state record, reducer, OnInitialize, the pure client actions)
app/src/pages/EventBooklet/hooks/eventBookletState.test.ts (new)
app/src/pages/EventBooklet/components/ScreenBlock_EventBooklet.tsx → app/src/pages/EventBooklet/components/EventBookletView.tsx (`git mv`, rewritten: props-only view)
app/src/pages/EventBooklet/components/EventBookletView.test.tsx (new)
app/src/pages/EventBooklet/components/EventBookletGuestView.tsx (new)
app/src/pages/EventBooklet/components/EventBookletHelperView.tsx (new)
app/src/pages/EventBooklet/components/EventBookletListParts.tsx (new: OnListMounted, BookletStickyHeader, BookletSkeleton, BookletNoResults, BookletLocalityGroup)
app/src/pages/EventBooklet/EventBooklet.test.tsx (new: the page in the app frame with the MSW mocks)
app/src/pages/EventBooklet/api.ts (deleted, not staged)
app/src/pages/EventBooklet/types.ts (the re-exports of api/event removed; the wire types of mocks.ts and the 4 block structures stay)
app/src/pages/EventBooklet/components/EventBooklet_MembersItem.tsx (`// @os-block` → `@origin`; EventBookletMember from `@/api/event`)
app/src/pages/EventBooklet/components/EventBooklet_ListHeader.tsx (`// @os-block` → `@origin`)
app/src/pages/EventBooklet/components/DoubleAction.tsx (`// @os-block` → `@origin`)
app/src/pages/EventBooklet/components/PopUp_OrbitBookletFilters.tsx (`// @os-block` → `@origin`; DropdownOption from `@/shared/osui/lib/structures`)
app/src/pages/EventBooklet/components/FooterWithActions/FooterWithActions.tsx (the redundant `// @os-block` line removed; `@origin` was there)
app/src/pages/EventBooklet/components/OrbitNoResults/OrbitNoResults.tsx (the redundant `// @os-block` line removed; `@origin` was there)
migration/refactor/handoffs/P6-G5-B-EventBooklet/dev.md (new)

These files did not change: `pages/EventBooklet/mocks.ts`, `components/BookletPopup.tsx`, the tests, stories and READMEs of FooterWithActions and OrbitNoResults, `api/event/*`, `components/orbit/*`, `components/layout/*`, `shared/**`, `platform/**` except the F17 copy of `flowState.ts`, `app/docs/refactor/arch-baseline.csv` and the other G5 routes. No other F17 file was copied. The interim W28 file `hooks/useReadyBeforePaint.ts` was created and deleted again (never staged). The staged diff of P6-G5-A and P6-G5-B-Shared is kept as it is.

## Commands run
All commands ran in the worktree, with Node 24 on PATH.
`python3 migration/tools/refactor/arch_baseline.py check` (before) → exit 0, "83 warnings, 83 baseline rows, 0 new, 0 gone". No row names EventBooklet.
`npx depcruise src --config .dependency-cruiser.cjs --output-type err` (before) → 0 errors, 210 warnings. EventBooklet: 3 rule-9 warnings (mocks.ts → os-wire, ScreenBlock → os-exceptions and exceptions).
`npm --prefix app run typecheck` → exit 0
`cd app && npx vitest run src/pages/EventBooklet` → exit 0, 6 files, 43 tests (state 16, hook 12, view 7, page 5, plus the moved FooterWithActions and OrbitNoResults tests)
`cd app && npx eslint src/pages/EventBooklet` → exit 0, 0 problems
`cd app && npx prettier --check src/pages/EventBooklet` → all formatted
`cd app && npx vitest run` (full suite) → exit 0, 501 files, 2,784 tests
`npm --prefix app run lint` → exit 0, 0 errors, 84 warnings (the 83 baseline rows plus the known duplicate line)
`npm --prefix app run format:check` → exit 0
`python3 migration/tools/refactor/arch_baseline.py check` (after) → exit 0, "83 warnings, 83 baseline rows, 0 new, 0 gone"
`npx depcruise …` (after) → 0 errors, 209 warnings. EventBooklet: 2 rule-9 warnings (mocks.ts → os-wire, unchanged; hooks/useEventBooklet.ts → legacy/os/exceptions, see deviation 6). No new warning.
`npm --prefix app run build` → exit 0; `node app/build/bundle-report.mjs HomeFeed Login EventBooklet`. The base was measured in the same worktree: the old route files were put back by a scratchpad script, the app was built, and the new files were restored (`diff -r` identical). The base has the old flowState.ts. Final numbers (after F17):
  - HomeFeed: 751.29 / 244.37 kB gzip, 40 chunks → 751.29 / 244.37, 40 chunks (+0.00). W21 holds.
  - Login: 601.24 / 184.38, 12 chunks → 601.24 / 184.39, 12 chunks (+0.01 gzip, raw equal: the entry chunk holds the new hashed route file name).
  - EventBooklet: 763.81 / 231.13, 26 chunks → 769.03 / 232.87, 27 chunks (+1.74 gzip): the page chunk (reducer actions, the split view) and the shared `flowState` chunk (useFlowState with F17, already used by other pages).
W28 change (OnReady back before the paint, interim `useReadyBeforePaint.ts`) → re-ran the same checks: all passed, comparison 16/16 twice, browser check the same.
F17 change (`cp` of flowState.ts; `useFlowState({ ..., onReady, beforePaint: true })`; `hooks/useReadyBeforePaint.ts` deleted with `rm`) → re-ran: typecheck exit 0; eslint and prettier on the route and flowState.ts clean; `npx vitest run src/pages/EventBooklet src/platform/navigation` → 22 files, 123 tests; route tests 6 files / 43 tests; the old-vs-new comparison 16/16 twice (no mismatch); the full suite 501 files / 2,784 tests; lint 84 warnings (0 errors); format:check; arch_baseline 0 new; depcruise 209 (EventBooklet: the same 2 rule-9 warnings); build and bundle report (numbers above). No browser check after F17 (not asked; no dev server).
Temporary old-vs-new test (`pages/EventBooklet_old/`: the base files and `compare.test.tsx`; deleted after the run; a copy is in the scratchpad at `eb-tools/compare.test.tsx`) → 16 scenarios, all equal, 2 full runs. Each scenario compared `document.body` after each step (useId and virtual-select ids normalised, the feedback container singleton removed), the call order, every request body, the location, showFeedbackMessage calls, flow-handler errors, upgrade pop-ups and the ViewHousehold log. A 30 ms mock latency was set, as the browser has 600 ms: without it, jsdom can batch the first answer with the pagination reset and skip the first-page OnListMounted fetch in either version (seen once in the old one).
  - load; StrictMode load; no In_EventId (the "no guests allocated" texts, helpers too)
  - view swap (Helpers, Helpers again, Guests); search mode, "ro" + Enter, clear icon, Enter with "", back leaves the search mode, back again
  - search "zzz" without a result ("No results for 'zzz'.", Filters Applied), Helpers with the term, Clear All
  - filters popup: Helpers checkbox, a day, Apply, Filters Applied, back closes the popup, Reset, Apply
  - member click → HouseholdDetails and the log, back restores the view, host click
  - paging (lists lower than the content: OnListMounted fetches page 2, guests and helpers); a member click while page 2 fetches ("Please wait until all data has finished loading")
  - no directory access (upgrade pop-up); GetEventBookletGuests HTTP 500; GetEventBookletFilters HTTP 500 (the icons stay faded and do nothing)
  - leave while SetBookletMaxRows runs, leave during a view swap, leave while CheckDirectoryAccess runs (W23: the calls, their bodies and the pop-up after the unmount are the same)
Browser check (before F17): `vite preview --port 5180 --strictPort` of the build (no dev server), headless system Chrome by a scratchpad Playwright script → 20 guest rows (page 2 loaded), the event name as the title, the Helpers view with 5 role headers and 7 rows, the filters popup; no page or console error. The preview server was stopped (port 5180 free).
I did not run the parity or the e2e suite: the tester runs them.

## Deviations from the brief
1. Branch: this worktree is on `rf/prefetch-P6-G5-B-EventBooklet-f51f2bb4`, not on `refactor/architecture`. The master set up this prefetch branch, and I worked in it as told. P6-G5-B-EventDetail (the dependency) is not in this base; EventBooklet uses no file of it.
2. Shape: `hook+component`, as in move-map.csv (no container: the hook calls repository functions, no data hook). The page reads the inputs, calls `useEventBooklet('$b1', inputs, events)` and renders `EventBookletView`. The view gets the BackNavigationHandler and Dialog_AccessRestrictedAction_Legacy as slots, so it imports no `platform/`. It keeps the ids, the aliases, the classes, the texts and the element positions (the same React reconciliation).
3. useFlowState: `initial` is OnInitialize of a new view (SetCurrentView(True) and ResetData(True), which the old port ran in a layout effect before the first paint), `restore` is OnInitialize of a restored view (IsFetchingData False). The old first render (helper view, never painted) is gone; its OnListMounted call did nothing (page 0).
   - Decisions W28 and P6-F17 (master): the old block ran OnReady in a layout effect, before the paint, so OnReady stays before the paint: `useFlowState({ ..., onReady, beforePaint: true })`, with `flowState.ts` copied from F17. History: my first hand-back ran OnReady after the paint (plain useFlowState); the W28 hand-back used the interim page-local `hooks/useReadyBeforePaint.ts`; both are replaced, and that file is deleted.
4. W23: OnReady runs once (`beforePaint`; StrictMode: 1 call each, tested). The `isAlive` that OnReady gets is true until the unmount; it is kept in `blockAlive` and guards the state writes only: after the unmount, the flows go on (server calls, messages, navigation, the ViewHousehold log, the upgrade pop-up, flow-handler errors). A flow that runs on keeps its assignments in its own copy of the variables (`detached`, never rendered or saved). So its later calls send the same variables as the old port: for example OnReady after SetBookletMaxRows sends IsFetchingData True and page 1, not the unreset paging. Unit tests: unmount while SetBookletMaxRows runs, while CheckDirectoryAccess runs and while a call fails → side effects once, no dispatch to the screen state.
5. R4: every new or rewritten file has one `@origin` (ScreenBlock_EventBooklet for the hook, the state, the view and its parts; the screen for the page and inputs). No compiled-line references in rewritten code. The 4 untouched block files of the route got `@origin` instead of `// @os-block`, as Photobook did; their own comments are kept. `BookletPopup.tsx` (the Popup widget of the block, not a block) is unchanged and has no tag.
6. Rule 9: the hook imports `UserException`, `exceptionMessage` and `isSystemException` from `@/legacy/os/exceptions` (as Notifications and Updates_SingleList do); `platform/feedback/flowErrors` does not export them and the step does not change `platform/`. `raiseToFlowHandler` comes from `platform/feedback/flowErrors`. The route goes from 3 to 2 rule-9 warnings.
7. File sizes: `useEventBooklet.ts` 494 lines and `eventBookletState.ts` 482 lines (hook and state files, mostly comments); the largest component of the route is `PopUp_OrbitBookletFilters.tsx` (357, unchanged), the view is 219.
8. `PopUp_OrbitBookletFilters.tsx` keeps its own block state (useState and a latest ref) as it is; the step only changed its tag and one type import.
9. Edits: one inline Python replacement was made on the temporary `compare.test.tsx` (deleted). The old copies and the base build swap used scratchpad scripts (`eb-tools/make_old.py`, `eb-tools/swap_route.py`). Every other edit used Edit or Write. No `sed -i`. `git mv` staged the 2 renames; `api.ts` and the interim `useReadyBeforePaint.ts` were deleted with `rm`; the new files and the F17 copy of `flowState.ts` are not staged. `flowState.ts` here is byte-identical to the F17 file, so it merges without a conflict once F17 lands.
10. For the documenter:
    - `move-map.csv` row 9 (ScreenBlock_EventBooklet): status moved, shape `hook+component`, target `components/EventBookletView.tsx` with `hooks/useEventBooklet.ts`, `hooks/eventBookletState.ts`, `EventBookletGuestView`, `EventBookletHelperView`, `EventBookletListParts`. Row 287 (the page): `api.ts` is gone, `inputs.ts` is new.
    - `app/docs/refactor/calls-by-domain.md` line 100: the `screens/EventBooklet/api.ts` row; the hook calls `fetchEventBookletFilters/Guests/Helpers` of `api/event` directly.
    - `app/src/api/README.md` line 40: EventBooklet no longer has an `api.ts` or `types.ts` that re-export api/event.
    - `app/docs/refactor/baseline.md` line 61: the 1,077-line file is gone (the largest page or component file of the route is now 357 lines).
    - CHANGELOG: arch baseline 83 rows, no change; depcruise 210 → 209 warnings.

## Questions for the user
none

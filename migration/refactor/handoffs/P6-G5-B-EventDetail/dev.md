## Result
status: pass
summary: EventDetail is now a page. ScreenBlock_EventDetail is split into the flow hook `hooks/useEventDetail.ts` (useFlowState with `beforePaint: true` per W28, W23 guard), the pure `hooks/eventDetailState.ts` (state record, reducer, call inputs, click decisions) and the props-only view `components/EventDetailView.tsx`. `api.ts` and `types.ts` are replaced by `inputs.ts` and direct imports of `@/api/event`. `platform/navigation/flowState.ts` is the P6-F17 copy. A temporary old-vs-new test gave equal DOM, calls, request bodies, locations, feedback and audit logs in 18 scenarios. Quick checks and the full suite pass; HomeFeed and Login first load grew by 0.01 kB raw (see deviation 6).

## Files changed
app/src/pages/EventDetail/EventDetailPage.tsx (rewritten: inputs, the 3 flags, the NavigateTo_* handlers, EventDetailView and CommonUiLayout)
app/src/pages/EventDetail/types.ts → app/src/pages/EventDetail/inputs.ts (`git mv`, rewritten: `EventDetailInputs`, `readEventDetailInputs`)
app/src/pages/EventDetail/components/ScreenBlock_EventDetail.tsx → app/src/pages/EventDetail/components/EventDetailView.tsx (`git mv`, rewritten: the view part, props only)
app/src/pages/EventDetail/components/actions.ts → app/src/pages/EventDetail/hooks/eventDetailActions.ts (`git mv`; import lines and the header with `@origin`)
app/src/pages/EventDetail/components/staticEntities.ts → app/src/pages/EventDetail/staticEntities.ts (`git mv`, content unchanged)
app/src/pages/EventDetail/hooks/useEventDetail.ts (new)
app/src/pages/EventDetail/hooks/eventDetailState.ts (new)
app/src/pages/EventDetail/hooks/useEventDetail.test.tsx (new)
app/src/pages/EventDetail/hooks/eventDetailState.test.ts (new)
app/src/pages/EventDetail/hooks/eventDetailActions.test.ts (new)
app/src/pages/EventDetail/components/EventDetailView.test.tsx (new)
app/src/pages/EventDetail/EventDetail.test.tsx (new)
app/src/pages/EventDetail/components/EventDateSelection.tsx (import lines; `// @os-block` → `@origin`)
app/src/pages/EventDetail/components/HostAllocation_List.tsx (import lines; `// @os-block` → `@origin`)
app/src/pages/EventDetail/mocks.ts (the 2 wire types of the deleted `types.ts` moved in, with their import; answers unchanged)
app/src/pages/EventDetail/api.ts (deleted, not staged)
app/src/platform/navigation/flowState.ts (W28: copied byte for byte with `cp` from the P6-F17 worktree `wt-F17b`, option `beforePaint`; not edited; `cmp` equal)
migration/refactor/handoffs/P6-G5-B-EventDetail/dev.md (new)

Not changed: `api/event/*` (the 4 repository functions already existed), `components/orbit/*`, `components/layout/*`, `shared/**`, `app/docs/refactor/arch-baseline.csv`, the other G5 routes, and the staged diffs of P6-G5-A and P6-G5-B-Shared.

## Commands run
All commands ran in the worktree, with Node 24 on PATH.
`npx depcruise src --config .dependency-cruiser.cjs --output-type err` (before) → 0 errors, 210 warnings. The only EventDetail warning: rule 9, `components/ScreenBlock_EventDetail.tsx → legacy/os/exceptions`.
`npx vite build` + `node build/bundle-report.mjs HomeFeed Login EventDetail` (before) → HomeFeed 751.29 / 244.37 kB gzip (40 chunks), Login 601.24 / 184.38 (12), EventDetail 672.19 / 207.91 (29)
`npm --prefix app run typecheck` → exit 0
`cd app && npx eslint src/pages/EventDetail` → exit 0, 0 problems
`cd app && npx prettier --check src/pages/EventDetail` → all formatted (`prettier --write` reformatted 2 new test files)
`cd app && npx vitest run src/pages/EventDetail` → exit 0, 5 files, 72 tests (actions 10, state 16, hook 23, view 15, page 8)
Guard checks: without the `isAlive()` check before `dispatch`, the W23 test fails; with `beforePaint: false`, the W28 test and the StrictMode test fail. Both were put back.
W28 re-run (after the master note): `cp` of `flowState.ts` from `wt-F17b`, `cmp` equal; `npm --prefix app run typecheck` → exit 0; `npx eslint src/pages/EventDetail src/platform/navigation/flowState.ts` → 0 problems; `npx prettier --check` on both → formatted; `npx vitest run src/pages/EventDetail src/platform/navigation` → 21 files, 152 tests pass.
`cd app && npx vitest run` (full suite) → first version, run 1: 3 failures in `pages/Services/Services.test.tsx` (2) and `shared/Connect2_LegacyShared/PopupMenu/PopupMenu.test.tsx` (1); these 2 files pass alone (12 tests); run 2: 502 files, 2814 tests pass. After W28: exit 0, 502 files, 2816 tests.
`npm --prefix app run lint` → exit 0, 0 errors, 84 warnings (83 baseline rows plus the duplicate `CommonUiLayout.tsx → platform/feedback/dialogs` line)
`npx depcruise …` (after, also after W28) → 0 errors, 209 warnings. The rule-9 warning of EventDetail is gone; no new warning (diff of the sorted warning lists).
`python3 migration/tools/refactor/arch_baseline.py check` (after, also after W28) → exit 0, "83 warnings, 83 baseline rows, 0 new, 0 gone". No row names EventDetail. `npm --prefix app run lint` (after W28) → 0 errors, 84 warnings.
`npx knip` → no unused file in `pages/EventDetail`. Unused exported types: `EventDateSelectionProps`, `HostAllocation_ListProps` (there before), and the new `ClickedMilestoneTarget`, `EventDetailEvents`, `EventDetailFlags` (types of the exported functions, as the other page hooks).
`npx vite build` + `node build/bundle-report.mjs HomeFeed Login EventDetail` (after, first version) → HomeFeed 751.30 / 244.43 (40), Login 601.25 / 184.42 (12), EventDetail 675.32 / 208.97 (30). After W28: HomeFeed 751.30 / 244.42 (40), Login 601.25 / 184.40 (12), EventDetail 675.54 / 208.97 (30). A scratch copy of the app with the old page gave the same hashes as the first base build; a scratch script compared the first-load chunks one by one (see deviation 6).
Temporary old-vs-new test (run for the first version and again after W28, 18/18 equal each time) (`pages/EventDetail_old/`: the base page and its modules with 2 import paths changed, plus `compare.test.tsx`; deleted after the run; a copy is at `/private/tmp/claude-501/-Users-khaitruong-Projects-connect-new/59d369e8-2125-443a-af59-6fe7f8eaa7bc/scratchpad/ed-tools/compare.test.tsx`) → 18 scenarios equal, 2 runs. Each scenario renders the old page, then the new page, in the app frame (NavigationHost, ScreenFrame, MSW) and compares after each step, when the DOM and the calls stop changing: `document.body.innerHTML`, the location, the call list, the feedback message, the audit log lines; then the request bodies of the 4 calls and what happens in the 500 ms after the unmount (late calls, feedback, logs).
  - load; load in StrictMode; a slow failing Get_EventDetails (the skeleton); no In_EventName (the title from EventName)
  - day clicks 2, 3, 3 again, 1
  - day 2, the footer to ContactByEmailOrbitHelpdesk, back (view cache), the accordion, a host allocation row to MilestoneDetail, back, the helper row to HelpersDetail (cached user), back, a card (Accommodation) to MilestoneDetail, back, a card (Meeting, no navigation)
  - mobileOrbitAccess off: the footer goes to HomeFeed, the message after 500 ms
  - another member from a notification ("no longer available")
  - Get_EventDetails fails (HTTP 500); Get_HasDocuments fails (HTTP 500)
  - leaving before the answer to another screen, then back (both: the next calls run after the unmount, the restored view keeps the skeleton); leaving with the back button
  - QR code, documents, host survey Sent, booklet visible, with the HostSurvey and EventBooklet flags on and off: the header QR icon, the QR button (audit log), the documents icon, the host survey link (the mock user is the householder), the guest list row
  - QR code scanned and survey "Unable to Host"; a transport milestone to TransportDetail; no milestones with helpers; BEFORE and AFTER edges, then a day
I did not run the parity, the e2e suite, a dev server or a preview server: the tester runs them.

## Deviations from the brief
1. Branch: this worktree is on `rf/prefetch-P6-G5-B-EventDetail-f51f2bb4`, not on `refactor/architecture`. The master set up this prefetch branch and told me to work in it. The staged diffs of P6-G5-A and P6-G5-B-Shared are kept as they were.
2. Shape: page + hook, no container (criterion of plan §2.3 not met: one data flow and one view). The targets are those of move-map row 10: `components/EventDetailView.tsx` and `hooks/useEventDetail.ts`. The pure file `hooks/eventDetailState.ts` holds the state record, the reducer (typed actions: the steps of OnReady and OnHandle_ClickedDate), the call inputs and the decisions of OnClick_NavigateToHostSurvey and OnHandle_ClickedMilestone. EventDateSelection and HostAllocation_List stay page components with their own state; only their import lines and the `@origin` line changed.
3. W28 (master note, after the first hand-off). The old block ran OnReady in a layout effect, before the first paint. The first version of this step used the default useFlowState (OnReady after the paint) with an initial IsFetchingData True. That choice is reversed:
   - `app/src/platform/navigation/flowState.ts` is the P6-F17 version (copied, not edited), and `useEventDetail` sets `beforePaint: true`;
   - the initial state is OnInitialize again (IsFetchingData False), and OnReady writes IsFetchingData True first (action `fetchStarted`), then starts Get_EventDetails in the same layout effect, as the old block did;
   - with `beforePaint`, useFlowState runs OnReady once (also in StrictMode) and its `isAlive` is true until the unmount, so the hook no longer has its own `readyStarted` / `newestReadyRun` refs. The event flows need no liveness check (OnHandle_ViewHelpers writes no state).
   - New unit test: a sibling after the block, in its layout effect, already sees Get_EventDetails called once and the `fetchStarted` write; with `beforePaint: false` this test and the StrictMode test fail.
   - The useFlowState layout effect is in the page, after the layout effects of the view and of CommonUiLayout; none of them makes a call, so the call order is the same (old-vs-new test).
4. Restored view: OnReady returns when `restored` is true. The old code checked `restored && saved`. The block always mounts and saves its state, so a restored view always has a saved state; the view cache name is now `Orbit_ScreenBlocks.ScreenBlock_EventDetail` (was `Model`; unique in the screen).
5. W23. The old block had no unmount guard: its OnReady flow went on after an unmount (its later calls and the flow handler), and React dropped its state writes. Now:
   - the flow keeps its own copy of the state (it applies the reducer to it), so the calls after an unmount send the same variables as before (for example HasDocuments and UserInformation in Get_HasQRCode);
   - `dispatch` runs only while the screen is there (`isAlive`), as in useMessageDetail;
   - `beforePaint` runs OnReady once under StrictMode (the once-guard is in useFlowState);
   - a failure after the unmount still goes to the flow handler once (useFlowState's catch).
   OnHandle_ViewHelpers is an event flow without state writes: it reads the cached user and raises NavigateTo_Helpers also after an unmount, as before. Unit tests: unmount while Get_EventDetails is pending, then answer → the 4 calls and the cached-user read once each, one reducer call per action (no dispatch); the same with a failure → flow handler once; StrictMode → 1 Get_EventDetails, state loaded.
6. W21 (numbers after W28). HomeFeed 751.29 / 244.37 → 751.30 / 244.42 kB gzip (+0.01 raw, +0.05 gzip); Login 601.24 / 184.38 → 601.25 / 184.40 (+0.01, +0.02). The per-chunk comparison: every first-load chunk of HomeFeed and Login has the same raw size, except the entry chunk (+9 bytes). The entry's preload list of the EventDetail route gained the shared `flowState` chunk (899 bytes, already used by the other useFlowState pages), and the alias names of the entry's re-exports moved. The gzip changes of the other chunks (±1–4 bytes) come from the new entry hash in their import lines. This is within the W21 tripwire (+0.3 kB per step), but it is not zero; any page that starts to use useFlowState adds this preload entry. EventDetail: 672.19 / 207.91 (29 chunks) → 675.54 / 208.97 (30 chunks: `flowState`, now the P6-F17 version; the page chunk was 18.84 → 21.07 kB raw in the first version).
7. Rule 9: `raiseToFlowHandler` now comes from `@/platform/feedback/flowErrors` (the hook and useFlowState). The rule-9 warning of the page is gone (depcruise 210 → 209). It was not a baseline row, so the baseline stays at 83 rows.
8. Flags: the page reads `mobileOrbitAccess`, `mobileOrbitHostSurvey` and `mobileOrbitEventBooklet` and passes the last two in (before, the block read them).
9. R4: each new or rewritten file has one `@origin` (the page and `inputs.ts`: `UBTConnect.Legacy_OrbitEventsFlow.EventDetail`; the hook, the state file, the view and `eventDetailActions.ts`: `Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_EventDetail`; EventDateSelection and HostAllocation_List: their block names). The rewritten code has no compiled-line references. `eventDetailActions.ts`, `EventDateSelection.tsx`, `HostAllocation_List.tsx` and `staticEntities.ts` were not rewritten and keep theirs.
10. `types.ts`: the input type went to `inputs.ts`; `UserIds` to `eventDetailState.ts`; the 2 wire types to `mocks.ts` (its only user); the re-exports of `@/api/event` and of `LocalSurveyStatus` are gone (the importers use the sources). `inputs.ts` keeps the old reading: an absent Long Integer is "0", an empty value stays "".
11. Tests: no test was deleted (the route had none). The page test syncs the local survey statuses and milestone types first, as the app start does.
12. Edits: Edit and Write for every code file; `git mv` for the 4 renames (staged); `api.ts` deleted with `rm` (not staged); the new files are not staged. The temporary old copy was written by a scratchpad Python script (`/private/tmp/claude-501/-Users-khaitruong-Projects-connect-new/59d369e8-2125-443a-af59-6fe7f8eaa7bc/scratchpad/ed-tools/make_old.py`: a copy with 2 import paths replaced) and deleted with the comparison test. No `sed -i`.
13. Master notes: no dev server and no preview server was started (no browser check; the DOM comparison covers the DOM, the parity is the tester's). The route does not call GetCacheableSignedImageURL, so `api/image` was not copied.
14. For the documenter:
    - `move-map.csv` row 10 (ScreenBlock_EventDetail): shape `hook+component` done, with `hooks/eventDetailState.ts`; row 288 (EventDetail page): `api.ts` and `types.ts` are gone, `inputs.ts` added.
    - `app/docs/refactor/calls-by-domain.md` line 101: the `screens/EventDetail/api.ts` row. `hooks/useEventDetail.ts` calls `fetchEventDetails`, `fetchHostSurveyStatus`, `fetchHasDocuments` and `fetchHasQRCode` of `@/api/event` directly.
    - The CHANGELOG entry: depcruise 210 → 209 warnings, baseline 83 rows unchanged, the W21 numbers above, `beforePaint: true` (W28).
    - `app/src/platform/navigation/flowState.ts` is the file of fix step P6-F17 (not part of this step's own change); the master merges it with F17.
15. W28 round: no `git add`, `git mv` or `git rm`; the changed and new files of this round are not staged. The temporary old copy was made again with the same scratchpad script and deleted after the run.

## Questions for the user
none

## Result
status: pass
summary: ScreenBlock_Event_Email_V2 is split into the pure state file `hooks/ldmEventEmailState.ts`, the flow hook `hooks/useLdmEventEmail.ts` (useFlowState with `restore`, a once-guard and W23 liveness) and the props-only view `components/LdmEventEmailView.tsx`. The page `api.ts` and `types.ts` are folded into `inputs.ts`; the calls come from `@/api/message`. A temporary old-vs-new check gave the same DOM, calls, bodies, logs and messages in 21 scenarios (3 runs). Typecheck, lint, format and all 2975 tests pass. HomeFeed +0.08 and Login +0.03 kB gzip (W21 tripwire 0.3 kB not reached).

## Files changed
app/src/pages/LDM_Email_V2/LDM_Email_V2Page.tsx (rewritten: reads the inputs, renders a keyed `LdmEventEmail` block = hook + view; `@origin` corrected to `UBTConnect.Legacy_LDMEventsFlow_V2.LDM_Email_V2`)
app/src/pages/LDM_Email_V2/inputs.ts (new: `EventEmailInputs` and `readInputs`, from api.ts and types.ts)
app/src/pages/LDM_Email_V2/api.ts (deleted with `rm`, not staged)
app/src/pages/LDM_Email_V2/types.ts (deleted with `rm`, not staged)
app/src/pages/LDM_Email_V2/components/ScreenBlock_Event_Email_V2.tsx (deleted with `rm`, not staged)
app/src/pages/LDM_Email_V2/components/LdmEventEmailView.tsx (new: the view, props only)
app/src/pages/LDM_Email_V2/components/LdmEventEmailView.stories.tsx (new: Default, Typed, Loading, Offline, NoContent, CallPopup)
app/src/pages/LDM_Email_V2/components/LdmEventEmailView.test.tsx (new, 7 tests, composeStories)
app/src/pages/LDM_Email_V2/hooks/ldmEventEmailState.ts (new: state, reducer, `restoreLdmEventEmailState`, `emptyCoordinatorDetailsData`, pure rules)
app/src/pages/LDM_Email_V2/hooks/ldmEventEmailState.test.ts (new, 12 tests)
app/src/pages/LDM_Email_V2/hooks/useLdmEventEmail.ts (new: the flows)
app/src/pages/LDM_Email_V2/hooks/useLdmEventEmail.test.tsx (new, 12 tests, 3 of them for W23)
app/src/pages/LDM_Email_V2/LDM_Email_V2.test.tsx (new, 6 tests with the MSW mocks)
migration/refactor/handoffs/P6-G5-B-LDM_Email_V2/dev.md (new)

Not changed: `components/actions.ts`, `mocks.ts`, `api/message/**`, `src/mocks/**`, `openapi.yaml`, `components/**`, the shared files of the group. The route had no test before this step.

## Commands run
All commands ran in the worktree with Node 24 on PATH. No dev server, no `vite preview`, no parity, no e2e.
Bundle before (base index): `npm --prefix app run build` + `node app/build/bundle-report.mjs HomeFeed Login LDM_Email_V2` → exit 0. HomeFeed 751.38 / 244.36, Login 601.33 / 184.39, LDM_Email_V2 668.51 / 209.86 kB (raw / gzip).
`npm --prefix app run typecheck` → exit 0
`cd app && npx vitest run src/pages/LDM_Email_V2` → exit 0, 4 files, 37 tests
`cd app && npx vitest run` (full suite) → exit 0, 524 files, 2975 tests
`cd app && npx eslint src/pages/LDM_Email_V2` → exit 0, 0 problems; `npx prettier --check src/pages/LDM_Email_V2` → clean
`npm --prefix app run lint` → exit 0, 0 errors, 76 warnings (75 baseline rows plus the known duplicate CommonUiLayout line)
`npm --prefix app run format:check` → exit 0
`python3 migration/tools/refactor/arch_baseline.py check` → exit 0, "75 warnings, 75 baseline rows, 0 new, 0 gone"
`npm --prefix app run arch` → 0 errors, 188 warnings. A base tree (`git archive` of the index tree d6260714 into the scratchpad) gives 189. The diff: the old block had 2 rule-9 warnings (`legacy/os/exceptions`, `legacy/os/os-assets`); the hook has 1 (`legacy/os/os-assets`, the same `osImage` import, moved). No other warning in `pages/LDM_Email_V2`.
`cd app && npx knip` → exit 1, as on the base. For this route it lists only the exported types `LdmEventEmailViewProps` and `LdmEventEmailFlows` (as other hook and props types).
Mutation checks (each reverted): without `restore` the page test "after a back navigation, a failed refresh and Try again" fails; without the liveness guard of `write` the 3 W23 tests fail; without the once-guard the StrictMode test and 2 W23 tests fail.
Temporary old-vs-new check: `app/src/pages/LDM_Email_V2_old/` held the base page and block (scratch script `lev2-tools/make_old.py`, imports rewritten) and `compare.test.tsx`; both were deleted. A copy of the test is in `/private/tmp/claude-501/-Users-khaitruong-Projects-connect-new/59d369e8-2125-443a-af59-6fe7f8eaa7bc/scratchpad/lev2-tools/compare.test.tsx.kept`. 21 scenarios passed in 3 runs in a row. Each compared the DOM, the location, the called actions, the request bodies, the feedback message, the log lines, and the late calls, messages and logs after the unmount. Scenarios: load; StrictMode; EventHostId only with In_IsMessageGuest; unknown meal (no content); loading then HTTP 500; fetch error then TryAgain then send; fetch error twice; Submit empty, blank, then sent; send as guest message and as household e-mail; offline Submit; EventContact HTTP 500; call popup open, Cancel, open; call without a phone; back icon with a typed message (dialog, Cancel, again, Confirm); back icon without a message; away and back; input change (remount on EventHostId/In_EventId, same block on In_IsMessageGuest/EventDate, then send); leaving while GetCoordinatorDetails is pending; leaving while EventContact is pending; unmount while EventContact is pending; unmount while GetCoordinatorDetails is pending. A control mutation (button height in the view) made the "load" scenario fail.
Bundle after: `npm --prefix app run build` → exit 0. `node app/build/bundle-report.mjs HomeFeed Login LDM_Email_V2`:
  - HomeFeed 751.38 / 244.44 kB (+0.00 raw, +0.08 gzip), Login 601.33 / 184.42 kB (+0.00 raw, +0.03 gzip). Exact raw bytes +3 for both: the entry's `__vite__mapDeps` list has one more chunk index for the LDM_Email_V2 route. The other differences in the hash-normalized closures are minifier export aliases (same sizes). W21 holds; the 0.3 kB tripwire is not reached.
  - LDM_Email_V2 670.57 / 210.91 kB (+1.05 gzip, 32 chunks instead of 31): the hook, the state file and the shared `flowState` chunk.

## Deviations from the brief
1. Branch: the worktree is on `rf/prefetch-P6-G5-B-LDM_Email_V2-b6241988`, not on `refactor/architecture`; the master set it up. The base is HEAD plus the staged P6-G5-A and P6-G5-B-Shared; nothing was staged, unstaged or committed. Old files were deleted with `rm`, new files are untracked.
2. Shape: the move-map row 14 says hook + component. The page renders a small keyed inner component `LdmEventEmail` (hook + view in `LDM_Email_V2Page.tsx`) so that another EventHostId or In_EventId still mounts a new block, as before (the block has no OnParametersChanged). No container: one data action and the criterion of plan §2.3 is not met.
3. View cache: the old port kept no block state. `useFlowState` saves the state, so the hook gives `restore: restoreLdmEventEmailState` (the defaults) and OnReady always fetches; a back navigation shows the same as a new visit. OutSystems would keep the variables and clear Message; this stays as before (the old comment "Decisions to confirm").
4. W23: OnReady runs once per instance (once-guard; the newest `isAlive` is kept in a ref, as LDM_MyEvents_V2). After the unmount the flows skip their state writes; the calls, the flow-handler error of a failed OnReady fetch, the audit and application events, the scheduled success message, AllowUpcomingNavigation and the back navigation still run, as in the old port. 3 tests in `useLdmEventEmail.test.tsx`.
5. W28 / P6-F17 `beforePaint`: not applicable. The old block ran OnReady in `useEffect`, so `flowState.ts` was not copied and `useReadyBeforePaint` is not used. `fetchLegacySignedImageURL` is not needed by this route.
6. `@origin` of the page: G5-A wrote `UBTConnect.Legacy_LDMEventsFlow.LDM_Email_V2`; corrected to `UBTConnect.Legacy_LDMEventsFlow_V2.LDM_Email_V2` (master note).
7. The hook reads the newest inputs through `parameters.current`; the submit flow takes them once at its start, as the old click closure did.
8. `raiseToFlowHandler` now comes from `@/platform/feedback/flowErrors` (a re-export of the same `legacy/os/exceptions` function), which removes one rule-9 warning.
9. Edits: one real file (`LDM_Email_V2.test.tsx`) got 4 replacements from a scratch Python script with a check that each match occurs once (`lev2-tools/patch_pagetest.py`, not in `migration/tools/refactor/`), and `npx prettier --write src/pages/LDM_Email_V2` formatted the new files. Every other edit used Edit or Write. No `sed -i`.
10. No browser check: the build was not served with `vite preview`; the DOM equality of the old-vs-new check covers the markup.
11. For the documenter:
    - `move-map.csv` row 14 (ScreenBlock_Event_Email_V2): status moved; view `pages/LDM_Email_V2/components/LdmEventEmailView.tsx`, hook `hooks/useLdmEventEmail.ts`, state `hooks/ldmEventEmailState.ts`.
    - `move-map.csv` row 300 (LDM_Email_V2): `inputs.ts`; `api.ts` and `types.ts` are gone.
    - `app/docs/refactor/calls-by-domain.md` line 147: the `screens/LDM_Email_V2/api.ts` row; both calls are in `api/message` (`fetchEventEmailCoordinator`, `sendEventContactEmail`) and the page imports them directly.
    - `app/docs/reference/screens.md` line 63 still names `src/screens/LDM_Email_V2/`.
    - CHANGELOG: arch 189 → 188 warnings (one rule-9 warning less); LDM_Email_V2 first load +1.05 kB gzip.

## Questions for the user
none

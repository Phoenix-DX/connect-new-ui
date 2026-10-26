## Result
status: pass
summary: HostSurvey is now a page with a hook (`useHostSurvey`, on `useFlowState` with `beforePaint: true` of P6-F17, decision W28), a pure state file and a props-only view (`HostSurveyView`); the 5 page blocks are split into one file each with `@origin`. `api.ts`, `types.ts`, `ScreenBlock_HostSurvey.tsx` and `HostSurvey_Blocks.tsx` are deleted; the call stays `fetchHostSurvey` of `api/event`. A temporary old-vs-new check gave the same DOM, calls, request bodies, URL and feedback in 20 of 20 scripts. All quick checks and the full suite pass; HomeFeed +0.03 and Login +0.01 kB gzip, both from the F17 `flowState.ts` copy.

## Files changed
app/src/pages/HostSurvey/HostSurveyPage.tsx (rewritten: reads the inputs, calls `useHostSurvey`, renders CommonUI `$b1` and `HostSurveyView` `$b2` with the BackNavigationHandler `b2-$b43` as a slot)
app/src/pages/HostSurvey/inputs.ts (added: `HostSurveyInputs`, `readHostSurveyInputs`, `dateTimeInput` from the old `api.ts`)
app/src/pages/HostSurvey/inputs.test.ts (added)
app/src/pages/HostSurvey/HostSurvey.test.tsx (added: page test with the MSW mocks)
app/src/pages/HostSurvey/hooks/useHostSurvey.ts (added: the block variables and flows of ScreenBlock_HostSurvey; OnReady with `beforePaint: true`)
app/src/pages/HostSurvey/hooks/useHostSurvey.test.tsx (added: includes the W23 unmount tests, StrictMode, restored view, store wait, W28 layout-phase test)
app/src/pages/HostSurvey/hooks/hostSurveyState.ts (added: state record, reducer, `SurveyStatus`, `hostSurveyCallInputs`, `hostSurveyStepFilter`)
app/src/pages/HostSurvey/hooks/hostSurveyState.test.ts (added)
app/src/pages/HostSurvey/hooks/useReadyBeforePaint.ts (deleted: it was the temporary W28 copy; the master had staged it, so `git status` shows it as "AD")
app/src/pages/HostSurvey/components/HostSurveyView.tsx (added: the view of the old ScreenBlock_HostSurvey, props only)
app/src/pages/HostSurvey/components/HostSurveyView.test.tsx (added)
app/src/pages/HostSurvey/components/HostSurvey_TopMessage.tsx (added: split from HostSurvey_Blocks.tsx, code unchanged, `@origin`)
app/src/pages/HostSurvey/components/HostSurvey_Item.tsx (added: split, code unchanged, `@origin`)
app/src/pages/HostSurvey/components/HostSurvey_AccommodationPills.tsx (added: split, code unchanged, `@origin`; room type from `@/api/event`)
app/src/pages/HostSurvey/components/HostSurvey_MealPills.tsx (added: split, code unchanged, `@origin`; meal type from `@/api/event`)
app/src/pages/HostSurvey/components/Orbit_ConfirmationPopUp_New.tsx (added: split, code unchanged, `@origin`)
app/src/pages/HostSurvey/components/actions.ts (one comment: "(api.ts)" became "(the mapper of api/event")
app/src/pages/HostSurvey/components/actions.test.ts (added)
app/src/pages/HostSurvey/mocks.ts (import lines only: the wire type `HostSurveyResponseWire` is now declared in the file with `ActionOutputs<PathOf<…>>`, as HomeFeed/Menu/Notifications mocks do)
app/src/pages/HostSurvey/api.ts (deleted)
app/src/pages/HostSurvey/types.ts (deleted)
app/src/pages/HostSurvey/components/ScreenBlock_HostSurvey.tsx (deleted)
app/src/pages/HostSurvey/components/HostSurvey_Blocks.tsx (deleted)
app/src/platform/navigation/flowState.ts (P6-F17: `cp` byte for byte from wt-F17b, not edited; `cmp` identical. No other F17 file copied)
migration/refactor/handoffs/P6-G5-B-HostSurvey/dev.md (added)

No other file outside app/src/pages/HostSurvey changed (no api/, docs or baseline change).

## Commands run
After the F17 change (final state):
npm --prefix app run typecheck → exit 0
cd app && npx vitest run src/pages/HostSurvey src/platform/navigation → exit 0; 22 files, 122 tests (HostSurvey: 6 files, 42 tests)
cd app && npx vitest run (full suite) → first run: 1 failure, in `pages/Updates_SingleList/Updates_SingleList.test.tsx` "an update opens the carousel; back …" (2.6 s; the CommonUiLayout redirect timer `actionRedirectHome` fired and routed to a HomeFeed route that the test has not got). That file passed 3 of 3 runs alone. The second full run passed: 515 files, 2909 tests. It is a timing failure under load and not related to this step: that page does not use `beforePaint`, and F17 keeps the default path.
cd app && npx eslint src/pages/HostSurvey → exit 0; 0 problems
cd app && npx prettier --check src/pages/HostSurvey → clean
python3 migration/tools/refactor/arch_baseline.py check → exit 0; 83 warnings, 83 baseline rows, 0 new, 0 gone (the route has no row)
cd app && npx depcruise src --config .dependency-cruiser.cjs --output-type err → exit 0; 198 warnings in total; 1 in pages/HostSurvey: rule-9 `mocks.ts → legacy/os/os-wire.ts` (the unchanged `osList, wireList` import line; it was there at the base too). No new warning in the folder or in `platform/navigation/flowState.ts`.
cd app && npx vite build && node build/bundle-report.mjs HomeFeed Login HostSurvey (base = base tree 6971471b of the worktree, built in the scratchpad) → exit 0
  - HomeFeed 244.38 → 244.41 kB gzip (+0.03); Login 184.39 → 184.40 kB gzip (+0.01). Before the F17 copy, this step alone measured 244.33 and 184.36 (no growth). The +0.08 and +0.04 kB since then are the `beforePaint` code of the F17 `flowState.ts`, which P6-F17 owns. Both are far below the W21 tripwire (0.3 kB per step).
  - HostSurvey 199.26 → 204.19 kB gzip (20 → 25 chunks). This first load is not gated. The route now loads the flow-error chain of `useFlowState` (`raiseToFlowHandler`): flowState 0.47, exceptions 0.33, exceptionMessages 1.38, auth 0.70 and the localEntities barrel 1.65 kB gzip. These are shared chunks that the other flow-hook pages also load. The page chunk grew from 5.75 to about 6.1 kB.
Temporary old-vs-new test, re-run with `beforePaint`. The base files of the route came from the base tree 6971471b, because the master had staged the step in the index. A scratchpad script copied them into `app/src/zz_tmp_hostsurvey_old/`. The test used the same MSW mocks and a mock latency of 25 ms. I deleted the folder after use. Result: 20 of 20 scripts the same. The scripts: event 7301 with and without the name and date inputs; a null input date; no id; an event without a survey; the store read after the answer, and never read; Unable to Host plus a back navigation; confirmed plus a back navigation; a survey to answer with and without survey flags (data step, footer markers); HasError; the mock scenarios empty, loading and error; restored after load; leave while loading, then back after the answer and back before it; StrictMode load and StrictMode restore. Compared: the body DOM at the first commit and after load (React useId ids normalised), the called actions, the GetHostSurvey request bodies, the URL and the feedback message. With `useReadyBeforePaint` (before F17), the same 20 scripts also gave 20 of 20.

Not run (tester): `npm run ci`, `lint:arch`, parity `visual`. No browser check (no dev server or preview started).

## Deviations from the brief
- Work tree: the master's prefetch worktree, branch `rf/prefetch-P6-G5-B-HostSurvey-9faeb9e6`, not `refactor/architecture` (as the master ordered). Files were deleted with `rm`; I staged nothing (the master staged the first version).
- Decisions W28 and P6-F17 (master messages): the old block ran OnReady in a layout effect. The first version used a page-local copy of `useReadyBeforePaint`. It now uses `useFlowState({ …, onReady, beforePaint: true })` from the F17 `flowState.ts`, copied byte for byte. `hooks/useReadyBeforePaint.ts` is deleted; I had not copied its test. The `isAlive` that onReady gets is true until the unmount. No event flow of this block needs a liveness check (the Edit link and the back handler only dispatch or call the screen event), so there is no extra ref. The state starts from the model defaults (IsFetchingData False). OnReady dispatches `fetchStarted` before the call, as the old flow did, so the first paint shows the skeleton. A unit test checks that the call starts in the layout phase.
- Item 4 (api.ts → the domain hooks): the data action was already `fetchHostSurvey` of `api/event` (the old `api.ts` only re-exported it). The OnReady flow calls it directly (page-template: flows call the repository functions). No `api/` change; `useHostSurveyQuery` still has no caller. `api/image` is not needed by this route (nothing copied).
- Items 2 and 3: the 5 page blocks were already in `pages/HostSurvey/components`, in one file without `@origin`. I split `HostSurvey_Blocks.tsx` into one file per block (code unchanged, business names kept, one `@origin` each, R4). The shared `HostSurveyPill` (components/orbit) is imported, not changed.
- Failure of GetHostSurvey: the old port did not handle the rejection (`void getHostSurvey(...).then(...)`). The skeleton stayed and no message showed. The new flow catches the rejection and does nothing, so the screen, the calls and the feedback are the same. The only difference: the browser console no longer logs "Uncaught (in promise)". The rejection does not go to the flow handler, because that would show a message (a behavior change). Note: the original OutSystems flow would send it to the flow's exception handler. That change is a user decision for later.
- W23: the call that started runs to its end after an unmount and writes no state (the `isAlive` of onReady). There is no app-level side effect after the call (no toast, navigation or other call). Unit tests: unmount while pending with success and with failure (1 call, no reducer call, no flow handler call); StrictMode 1 call.
- The view cache key changed from `Model` (old `useViewState`) to the `useFlowState` record `Orbit_ScreenBlocks_HostSurvey.ScreenBlock_HostSurvey`. The same 7 variables are saved. The old OnReady skipped the call when `restored && saved`; the new one skips it when `restored`. A restored view always has the record, because the hook registers it on mount. The restore scripts gave the same result.
- Observation, not changed (the old and new page do the same): on Unable to Host, OnHandle_BackNavigation calls NavigateTo_Back without `preventDefault`. In the comparison test, the back navigation that this starts runs the back queue again and recurses. React Router raised RangeError "Maximum call stack size exceeded": 23 unhandled errors in total, with stack frames from both the old and the new page. In the app, a back navigation on an Unable-to-Host survey may go back more than one screen or loop. This is the behavior of the base port; ask the user before any fix.
- For the documenter:
  - `move-map.csv` row 13: `ScreenBlock_HostSurvey` → `components/HostSurveyView.tsx` + `hooks/useHostSurvey.ts`, and the status.
  - `move-map.csv` row 296: the page; `api.ts` and `types.ts` deleted, `inputs.ts` added, the 5 blocks split, `beforePaint` (W28/F17).
  - `calls-by-domain.md` line 104 still names `screens/HostSurvey/api.ts`.
  - `docs/reference/screens.md` line 62 names `src/screens/HostSurvey/`.
  - `inventory.csv` row 13.
  - The CHANGELOG entry.

## Questions for the user
none

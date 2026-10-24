## Result
status: pass
summary: TransportDetail is now a page. It has the block flow hook `useTransportDetail` (useFlowState with `onReady` and `beforePaint: true`, from P6-F17 / W28), the pure `transportDetailState.ts`, the screen handler hook `useContactHelpdeskNavigation`, the props-only `TransportDetailView`, `inputs.ts` and the page-root `actions.ts`. `api.ts`, `types.ts` and `ScreenBlock_TransportDetail.tsx` are deleted. A temporary old-vs-new probe gave the same result in 16 of 16 scenarios on 3 runs. Typecheck, eslint, prettier, the full unit suite, depcruise and arch_baseline pass. HomeFeed and Login did not grow.

## Files changed
app/src/platform/navigation/flowState.ts (P6-F17: `cp` byte for byte from wt-F17b, not edited; sha1 61be78b6…; no other F17 file copied)
app/src/pages/TransportDetail/TransportDetailPage.tsx (changed: reads inputs and the flag, calls the hooks, renders TransportDetailView `$b1` and CommonUiLayout `$b2`)
app/src/pages/TransportDetail/inputs.ts (added: the route inputs and their reader, the old `params.get(...) ?? ''` and `?? '0'` defaults)
app/src/pages/TransportDetail/actions.ts (moved from components/actions.ts: the import of the types is now `@/api/event`, and the header comment has one more sentence; the 5 client actions did not change)
app/src/pages/TransportDetail/actions.test.ts (added)
app/src/pages/TransportDetail/TransportDetail.test.tsx (added: page test with MSW)
app/src/pages/TransportDetail/mocks.ts (changed: the 2 wire types now come from `ActionOutputs`/`PathOf` and not from the deleted types.ts)
app/src/pages/TransportDetail/components/TransportDetailView.tsx (added: props-only view of ScreenBlock_TransportDetail, same markup as before)
app/src/pages/TransportDetail/components/TransportDetailView.test.tsx (added)
app/src/pages/TransportDetail/components/TransportDetail.tsx (changed: `// @os-block` → `@origin`; imports from `@/api/event` and `@/pages/TransportDetail/actions`)
app/src/pages/TransportDetail/components/TransportDetail.test.tsx (added: covers TransportDetail and TransportDetail_TravelInfo)
app/src/pages/TransportDetail/components/TransportDetail_TravelInfo.tsx (changed: `// @os-block` → `@origin`; imports from `@/api/event` and `@/pages/TransportDetail/actions`)
app/src/pages/TransportDetail/hooks/transportDetailState.ts (added)
app/src/pages/TransportDetail/hooks/transportDetailState.test.ts (added)
app/src/pages/TransportDetail/hooks/useTransportDetail.ts (added: useFlowState with `onReady` and `beforePaint: true`)
app/src/pages/TransportDetail/hooks/useTransportDetail.test.tsx (added, with the W23 unmount and StrictMode tests)
app/src/pages/TransportDetail/hooks/useContactHelpdeskNavigation.ts (added: the screen's OnHandle_ContactHelpdesk, `@origin` of the screen)
app/src/pages/TransportDetail/hooks/useContactHelpdeskNavigation.test.tsx (added)
app/src/pages/TransportDetail/api.ts (deleted)
app/src/pages/TransportDetail/types.ts (deleted)
app/src/pages/TransportDetail/components/ScreenBlock_TransportDetail.tsx (deleted; split into the hook, the state file and the view)
app/src/pages/TransportDetail/components/actions.ts (deleted: moved to the page root, see above)
migration/refactor/handoffs/P6-G5-B-TransportDetail/dev.md (added)

## Commands run
Node 24 on PATH for all commands; cwd = the worktree wt-TransportDetail.
npx vitest run src/pages/TransportDetail/zzProbeOldNew.test.tsx (temporary old-vs-new probe, 16 scenarios: flight, vehicle, unknown milestone, empty, error, loading, helpdesk with access, without access with the 500 ms message, vehicle subject, back navigation, StrictMode, helpdesk while loading, no inputs, no target member, StrictMode + helpdesk, back navigation while loading; compared the DOM after load, the DOM at the end, calls, request bodies, URL and feedback messages) → the old code was captured first; the final version (F17 `beforePaint`) was identical in 16 of 16 scenarios on 3 runs, and so were the 2 earlier versions; the probe file is deleted
npm --prefix app run typecheck → exit 0
cd app && npx eslint src/pages/TransportDetail src/platform/navigation/flowState.ts → exit 0
cd app && npx prettier --check src/pages/TransportDetail src/platform/navigation/flowState.ts → all formatted
cd app && npx vitest run src/pages/TransportDetail src/platform/navigation/flowState.test.tsx → 8 files, 47 tests passed
cd app && npx vitest run (full suite) → 2915 tests passed (the 4 tests of the deleted page-local useReadyBeforePaint copy are gone)
cd app && npx depcruise src --config .dependency-cruiser.cjs --output-type err → exit 0; 198 → 197 warnings (removed: rule-9 ScreenBlock_TransportDetail.tsx → legacy/os/exceptions); no new warning; the pre-existing rule-9 `mocks.ts → legacy/os/os-wire` stays (as in the other page mocks)
python3 migration/tools/refactor/arch_baseline.py check → exit 0 (82 warnings, 82 rows, 0 new, 0 gone)
cd app && npx vite build && node build/bundle-report.mjs → exit 0; HomeFeed 751.30 kB / 244.39 kB gzip, Login 601.25 kB / 184.40 kB gzip
base build (index tree with G5-A + G5-B-Shared, without F17, exported with git write-tree + git archive into the scratchpad, deleted after) → HomeFeed 751.30 / 244.39 kB gzip, Login 601.24 / 184.41 kB gzip. W21: neither first load grew (HomeFeed ±0, Login −0.01 kB gzip, F17 included)

## Deviations from the brief
- Prefetch mode (master instruction): work in the worktree on branch `rf/prefetch-P6-G5-B-TransportDetail-810fba69`, not `refactor/architecture`. Files were moved and deleted with plain `mv`/`rm`, not `git mv`. Nothing is staged.
- W28 / P6-F17: the old block ran OnReady in a `useLayoutEffect` (before paint). It stays before paint through `useFlowState({ onReady, beforePaint: true })`. `flowState.ts` is the F17 file, copied byte for byte. The interim page-local `useReadyBeforePaint.ts` and its test were deleted.
- W23: `isAlive` guards the state writes only. After its call the flow has no app-level side effect. The call that started runs to its end, and a failure still goes to the flow handler. StrictMode makes 1 call. The event flow (OnHandle_ContactHelpdesk) writes no state, so it needs no liveness check. The unit tests cover these cases.
- `components/actions.ts` moved to the page root `actions.ts`, because the hooks and the components both call it (pattern of `pages/EmailContact/actions.ts`). Its compiled-line references stay, because the code was not rewritten.
- The screen's OnHandle_ContactHelpdesk (the flag check, FeedbackMessageAfterTransition and the navigation) moved from the page body to `hooks/useContactHelpdeskNavigation.ts`, with the `@origin` of the screen. Its behavior did not change.
- The view-cache key of the block state changed from `Model` to `Orbit_ScreenBlocks.ScreenBlock_TransportDetail`. Nothing else reads it.
- No browser check and no `vite preview`: the route has no capture, and the probe compared the full DOM. The tester runs parity.
- Docs not changed (documenter): move-map rows `src/screens/TransportDetail/components/ScreenBlock_TransportDetail.tsx` (shape hook+component, view `components/TransportDetailView.tsx`, hook `hooks/useTransportDetail.ts`) and `src/screens/TransportDetail/index.tsx`; the `screens/TransportDetail/api.ts` row of `calls-by-domain.md` (the call is `fetchTransportDetail` of `@/api/event`); CHANGELOG.

## Questions for the user
none

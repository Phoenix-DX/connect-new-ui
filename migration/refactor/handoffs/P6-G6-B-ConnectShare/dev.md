# Developer report: P6-G6-B-ConnectShare

## Result
status: pass
summary: ConnectShare is now a page, a flow hook (`useFlowState` with the W23 once-guard and write guard), a pure state file, a client-actions file and `inputs.ts`. Get_ShareDetails moved to the new domain `api/share` (W8). The step deletes `api.ts` and `types.ts`. Typecheck, eslint, prettier and all 2974 tests pass. An old-vs-new browser check shows the same URL, DOM and call order in all 20 ConnectShare snapshots. HomeFeed first load is 244.44 → 244.49 kB gzip and Login is 184.47 → 184.49 kB gzip.

## Files changed
app/src/api/share/index.ts (added)
app/src/api/share/types.ts (added)
app/src/api/share/mapper.ts (added)
app/src/api/share/mapper.test.ts (added)
app/src/api/share/repository.ts (added)
app/src/api/share/repository.test.ts (added)
app/src/pages/ConnectShare/ConnectSharePage.tsx (changed: renders from useConnectShare)
app/src/pages/ConnectShare/ConnectShare.test.tsx (added: page test with the MSW mocks)
app/src/pages/ConnectShare/inputs.ts (added: route input type and reader, from api.ts and types.ts)
app/src/pages/ConnectShare/mocks.ts (changed: wire type import from `@/api/share`)
app/src/pages/ConnectShare/hooks/useConnectShare.ts (added)
app/src/pages/ConnectShare/hooks/useConnectShare.test.tsx (added)
app/src/pages/ConnectShare/hooks/connectShareState.ts (added)
app/src/pages/ConnectShare/hooks/connectShareState.test.ts (added)
app/src/pages/ConnectShare/hooks/connectShareActions.ts (moved from components/actions.ts, changed)
app/src/pages/ConnectShare/hooks/connectShareActions.test.ts (moved from components/actions.test.ts, mock path and import changed)
app/src/pages/ConnectShare/components/ShareDetailView.tsx (moved from components/ScreenBlock_ShareDetail.tsx, renamed per move-map.csv, `@origin`)
app/src/pages/ConnectShare/components/NavigationLanding.tsx (changed: `@origin` tag instead of `// @os-block`)
app/src/pages/ConnectShare/api.ts (deleted)
app/src/pages/ConnectShare/types.ts (deleted)
migration/refactor/handoffs/P6-G6-B-ConnectShare/dev.md (this report)

## Commands run
npm --prefix app run build (base, before the change) → exit 0; bundle-report: HomeFeed 244.44 kB gzip, Login 184.47 kB gzip
npm --prefix app run typecheck → exit 0
npx vitest run src/pages/ConnectShare src/api/share src/mocks → 9 files, 43 tests passed
npx vitest run (full suite) → 525 files, 2974 tests passed
npx eslint src/pages/ConnectShare src/api/share → exit 0, no warning
npx prettier --check src/pages/ConnectShare src/api/share → clean (2 files were formatted with `prettier --write` first)
npx depcruise (lint:arch part) → 187 warnings in total (base 189). pages/ConnectShare has 3 rule-9 warnings (base 5), api/share has none. See Deviations 5.
npm --prefix app run build (new) → exit 0; bundle-report: HomeFeed 244.49 kB gzip (+0.05), Login 184.49 kB gzip (+0.02). Raw sizes of the HomeFeed chunks are the same except the entry (+9 bytes: the preload index list of the ConnectShare route chunk). The other gzip deltas come from the changed chunk hashes. This is below the W21 tripwire of 0.3 kB per step.
Old-vs-new page test → the new ConnectShare.test.tsx (4 tests) also passes against the old page code (a temporary copy from the index, deleted after the run)
Old-vs-new browser check (playwright script in the scratchpad, `vite preview` on port 5182 only, stopped after each run): ShareIds 0–9 at 500 ms and 3000 ms, plus 4 leave-and-back paths, 28 snapshots of URL, body DOM and calls. Base vs new: 23 equal. The 5 others are HomeFeed snapshots after the home link (an app-start call race). A second base run differs from the first base run in the same 5 snapshots, and the second base run vs new differs in only 2. The 20 ConnectShare snapshots are all equal: the 4 redirects, the 3 messages, the upgrade popup after 1 s for ShareId 3, and the empty detail for ShareId 9.

## Deviations from the brief
1. Domain: no existing domain owns the share records, so Get_ShareDetails is in the new domain `api/share` (W8: by data ownership, reuse before create). The domain has `types`, `mapper`, `repository`, the barrel and the tests, but no `hooks.ts` or `keys.ts`. The reason: it is a server-action read that a flow calls, as for GetNumberUnreadMessages and `acceptPolicies`. Merge note: LegacyShareObject runs in parallel and can also create `api/share/` (ScreenDataSetGetShareObjectTypeById, ActionShareObject). Then the two barrels and `types.ts` must be joined. For the documenter: `api/README.md` (a `share/` paragraph), `calls-by-domain.md` (the ConnectShare row) and the move-map rows (ConnectShare page; ScreenBlock_ShareDetail → ShareDetailView, shape component).
2. OnInitialize: in the screen it waits for Get_ShareDetails, and the runtime creates the view only after OnInitialize ends. So the `onReady` flow of `useFlowState` runs ScreenEvent_OnInitialize, and `isInitialized` turns true at its end. A second effect runs ScreenEvent_OnReady (IsRedirect → Action_Redirect) once after that render, as in the old port. `beforePaint` is not set: the old port ran OnInitialize in a passive `useEffect` (W28). The target part of Action_Redirect is the pure function `shareRedirectTarget` in the state file.
3. W23: the old port does not start the 1 s alert timer after the unmount and clears it on unmount. W23 keeps the old-port behavior, so the step keeps this. After the unmount, the audit call of OnInitializeSharingScreen still runs, `raiseToFlowHandler` still runs, and no state is written. Unit tests cover the unmount while pending, the unmount before the 1 s alert, and StrictMode (one Get_ShareDetails call).
4. View cache: the 4 screen variables are now one record under `Legacy_Share.ConnectShare` (`useFlowState`), not 4 `useViewState` keys. A back navigation restores the same values. The page test checks the two restore paths (message kept; empty and no alert → back).
5. lint:arch: 2 of the 3 remaining rule-9 warnings in pages/ConnectShare are the same imports in moved files: `connectShareActions.ts` → `legacy/os/exceptions` (isSystemException, exceptionMessage) and `ShareDetailView.tsx` → `legacy/os/os-assets` (osImage). `mocks.ts` keeps its import. To remove them, `platform/` would need a re-export, and `platform/` is outside the files of this step. `raiseToFlowHandler` now comes from `@/platform/feedback/flowErrors`.
6. Branch: the work is in the prefetch worktree on branch `rf/prefetch-P6-G6-B-ConnectShare-66f01e66`, not on `refactor/architecture`, as the master told me. Nothing is staged: files were moved and deleted with plain `mv` and `rm`.

## Questions for the user
none

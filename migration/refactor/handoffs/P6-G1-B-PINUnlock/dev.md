## Result
status: pass
summary: PINUnlock is now a page with a hook (`usePINUnlock`). The flows of the unlock blocks are in two hooks in `platform/session/` (`usePinUnlockContent`, `usePinCodeUnlock`). One container (`platform/feedback/dialogs/PinUnlockContentContainer`) runs the hooks for the lock dialog and PINChange. PinUnlockContent, PinUnlockMobile and PinCodeUnlock now render from props only. 29 of the step's 32 baseline rows are gone and deleted, and `arch_baseline.py check` exits 0. PinCode.tsx (2 rows) and FingerprintScanner.tsx (1 row) stay; see the deviations. Typecheck, eslint, prettier and all 2122 tests pass.

## Files changed
app/docs/refactor/arch-baseline.csv
app/src/components/auth/PinCode/PinCode.stories.tsx
app/src/components/auth/PinCodeUnlock/PinCodeUnlock.stories.tsx
app/src/components/auth/PinCodeUnlock/PinCodeUnlock.test.tsx
app/src/components/auth/PinCodeUnlock/PinCodeUnlock.tsx
app/src/components/auth/PinCodeUnlock/README.md
app/src/components/auth/PinUnlockContent/PinUnlockContent.stories.tsx
app/src/components/auth/PinUnlockContent/PinUnlockContent.test.tsx
app/src/components/auth/PinUnlockContent/PinUnlockContent.tsx
app/src/components/auth/PinUnlockContent/README.md
app/src/components/auth/PinUnlockMobile/PinUnlockMobile.stories.tsx
app/src/components/auth/PinUnlockMobile/PinUnlockMobile.test.tsx
app/src/components/auth/PinUnlockMobile/PinUnlockMobile.tsx
app/src/components/auth/PinUnlockMobile/README.md
app/src/components/layout/LoginLayout/LoginLayout.stories.tsx
app/src/pages/PINChange/PINChangePage.tsx
app/src/pages/PINUnlock/PINUnlockPage.tsx
app/src/pages/PINUnlock/api.ts (deleted)
app/src/pages/PINUnlock/mocks.ts (deleted)
app/src/pages/PINUnlock/types.ts (deleted)
app/src/pages/PINUnlock/hooks/usePINUnlock.ts (new)
app/src/pages/PINUnlock/hooks/usePINUnlock.test.tsx (new)
app/src/platform/feedback/dialogs/BlockPinUnlock.tsx
app/src/platform/feedback/dialogs/index.ts
app/src/platform/feedback/dialogs/PinUnlockContentContainer.tsx (new)
app/src/platform/feedback/dialogs/PinUnlockContentContainer.test.tsx (new)
app/src/platform/session/usePinCodeUnlock.ts (new)
app/src/platform/session/usePinCodeUnlock.test.tsx (new)
app/src/platform/session/usePinUnlockContent.ts (new)
app/src/platform/session/usePinUnlockContent.test.ts (new)
migration/refactor/handoffs/P6-G1-B-PINUnlock/dev.md (new)

## Commands run
npm --prefix app run typecheck → exit 0
cd app && npx vitest run src/components/auth src/platform/feedback/dialogs src/platform/session/usePinCodeUnlock.test.tsx src/platform/session/usePinUnlockContent.test.ts src/pages/PINUnlock src/components/layout/LoginLayout src/platform/navigation/LockHost.test.tsx → exit 0, 19 files, 79 tests passed
cd app && npx vitest run (full suite) → exit 0, 396 files, 2122 tests passed
cd app && npx eslint <the 23 changed code files> → exit 0, 0 errors, 3 warnings. All 3 are in LoginLayout.stories.tsx: the P7 baseline rows (mockUser, session, OfflineDataSync). This step did not change those imports.
cd app && npx prettier --check <changed files>; npm run format:check → exit 0 (prettier --write ran on 5 files first)
python3 migration/tools/refactor/arch_baseline.py check → before the CSV edit: 29 gone, 0 new. After the 29 rows were deleted: "59 warnings, 59 baseline rows, 0 new, 0 gone", exit 0
python3 migration/tools/refactor/arch_baseline.py list → P6-G1-B-PINRegister 20, P6-G1-B-PINUnlock 3, P7 35, pre-existing 1
cd app && npm run arch (dependency-cruiser) → 0 errors (no cycle). Warnings went from 227 to 220. 7 rule-4 lines are gone. One rule-8 line moved: `BlockPinUnlock.tsx → components/auth/PinUnlockContent` is now `PinUnlockContentContainer.tsx → components/auth/PinUnlockContent`. There is no other new line.
Temporary DOM comparison (a test, deleted after the run) → 10/10 equal. It rendered the old PinUnlockContent tree (HEAD copies) and the new container in 5 scenarios: lock dialog unlocked, lock dialog locked, PINUnlock, PINChange, and need help without overlay. Each ran with the right PIN and with a wrong PIN. Initial DOM, DOM after typing, lock state after initialize, lock state at the end and feedback message were the same.
Experiment (reverted) → importing the platform blocks in src/test/setup.ts broke vi.mock in flowState.test.tsx and localNotes.test.ts (3 tests). This is why the deviations reject a global "host" for PinCode.

## Deviations from the brief
1. Where the code went (master note: hooks in `platform/session/`).
   - The flows of Block_PINUnlock_ContentWrapper are in `platform/session/usePinUnlockContent.ts`, which also exports the pure `pinUnlockErrorFeedback` with its unit test.
   - The flows of Pincode_Unlock are in `platform/session/usePinCodeUnlock.ts`.
   - PinUnlockMobile, PinCode and FingerprintScanner have no flow, so they have no hook.
   - The PINUnlock screen flow (Block_PINUnlockUnlock) is in `pages/PINUnlock/hooks/usePINUnlock.ts`.
2. The callers do not call the hooks themselves. They render `PinUnlockContentContainer` (§2.3 criterion 2) in `platform/feedback/dialogs/`, next to the lock dialog, and get it through the dialogs barrel. Reasons:
   - The flows must start and stop with the block. BlockPinUnlock does not render the content for an unsupported system. If `usePinCodeUnlock` ran in BlockPinUnlock, PINUnlock would call `lock()` in that case. Today it does not, so that would change behavior.
   - The two callers (BlockPinUnlock, PINChange) share one place for about 15 props and the two platform blocks.
   - It is not in `containers/` for two reasons. Rule 8 forbids platform from importing containers. The `@/containers` barrel would also pull HouseholdDetails into the lock dialog, which every route loads.
3. The container passes the platform blocks as slots, so the components do not import them:
   - `renderInactivityTimer`: PinUnlockContent → PinUnlockMobile → PinCodeUnlock.
   - `renderCacheControlPolicies`: PinUnlockContent.
4. PinCode.tsx keeps `replaceOnUpcomingNavigation` and `PreventBackNavigation` (2 rows stay).
   - PinCodeRegister renders PinCode with its current props, and this step may not change PinCodeRegister. A component cannot create these platform pieces, so PinCode cannot get them through props.
   - A module-level host would work in the app. In tests it needs static imports in the test setup, and the experiment above shows that this breaks vi.mock. I rejected it.
   - PinCode.tsx is unchanged. Only its stories changed.
5. FingerprintScanner.tsx keeps `NotCaptured` (1 row stays).
   - The block never renders on the web.
   - Making it pure needs a slot through PinUnlockContent and PinUnlockMobile, only for a review marker.
   - `NotCaptured` in `components/` is a shared P7 topic, with BottomBar and UnsupportedVersionNative/WebView.
6. Component props changed, so I updated the call sites:
   - PinUnlockMobile: `inForceVisible`, `onUserLoggedOut` and `onTimeout` are replaced by `isKeypadVisible`, `onSetPin` and `renderInactivityTimer`.
   - PinCodeUnlock: the same change.
   - PinUnlockContent: it takes the hooks' result. The old props are now on the container.
   - PINChangePage: import and component name.
   - BlockPinUnlock: import and component name.
   - LoginLayout.stories V3: `inForceVisible` became `isKeypadVisible`. The capture is nested, and the 3 P7 baseline imports of that file are unchanged.
7. Stories now use empty `OSBlock` wrappers for the nested CacheControl_Policies and InactivityTimer, which the captures show collapsed or empty. They no longer seed the cache. The PinUnlockContent V2 story passes fictional policies as props.
8. Tests were moved with their code; none were deleted.
   - The flow tests of PinUnlockContent.test (unlock, wrong PIN, user not found, Forgot PIN, policies) are now in PinUnlockContentContainer.test, with 2 new tests: the InactivityTimer when not locked, and isFromMenu back navigation.
   - The 4 flow tests of PinCodeUnlock.test are now in usePinCodeUnlock.test.
   - The component tests now check rendering from props and the callbacks. The ShowNeedHelp and logo test stayed with the component.
9. I updated the READMEs of PinCodeUnlock, PinUnlockMobile and PinUnlockContent, because their prop tables changed. I did not touch move-map.csv, the CHANGELOG or `docs/guides/shell.md` Part C, which should list the new dialogs export `PinUnlockContentContainer`. They are for the documenter.
10. I deleted the empty `api.ts`, `types.ts` and `mocks.ts` of PINUnlock, as Splash did. The mocks glob needs no change.
11. Prefetch worktree: the branch is `rf/prefetch-P6-G1-B-PINUnlock-43946ee` (base 43946ee), as the master told me. Not committed.
12. Merge note: `arch-baseline.csv` and `PINChangePage.tsx` can conflict with the PINRegister commit, which deletes its own rows and may change the PinRegisterContent call site in PINChange. In both files the changes are on different lines.

## Questions for the user
1. Who removes the 3 baseline rows that are still owned by P6-G1-B-PINUnlock?
   - Option (a): PinCode.tsx (2 rows) → P6-G1-B-PINChange. It renders both PIN chains. Once PINRegister has landed, it can give PinCode a `PreventBackNavigation` slot and a before-SetPin event at both call sites, PinCodeUnlock and PinCodeRegister. FingerprintScanner.tsx (1 row) → P7, with the other `NotCaptured` users.
   - Option (b): this step changes PinCodeRegister's call site after the PINRegister commit, in a fix loop.
   - Recommendation: (a).

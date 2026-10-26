## Result
status: pass
summary: PINChange is now a page with a hook (`usePINChange`). Its empty `api.ts`, `mocks.ts` and `types.ts` are deleted. W14 task: PinCode now gets the PreventBackNavigation block (`renderPreventBackNavigation`) and the before-SetPin event (`onBeforeSetPin`) as props. Both PinCode call sites (PinCodeUnlock, PinCodeRegister) and their callers pass them on, and the hooks in `platform/session/` supply `onBeforeSetPin`. The 2 PinCode baseline rows are deleted and `arch_baseline.py check` exits 0. A temporary old-vs-new check showed the same DOM and navigation. Typecheck, eslint, prettier and all 2148 tests pass.

## Files changed
app/docs/refactor/arch-baseline.csv
app/src/components/auth/PinCode/PinCode.tsx
app/src/components/auth/PinCode/PinCode.stories.tsx
app/src/components/auth/PinCode/PinCode.test.tsx
app/src/components/auth/PinCode/README.md
app/src/components/auth/PinCodeRegister/PinCodeRegister.tsx
app/src/components/auth/PinCodeRegister/PinCodeRegister.stories.tsx
app/src/components/auth/PinCodeRegister/PinCodeRegister.test.tsx
app/src/components/auth/PinCodeRegister/README.md
app/src/components/auth/PinCodeUnlock/PinCodeUnlock.tsx
app/src/components/auth/PinCodeUnlock/PinCodeUnlock.stories.tsx
app/src/components/auth/PinCodeUnlock/PinCodeUnlock.test.tsx
app/src/components/auth/PinCodeUnlock/README.md
app/src/components/auth/PinRegisterContent/PinRegisterContent.tsx
app/src/components/auth/PinRegisterContent/PinRegisterContent.stories.tsx
app/src/components/auth/PinRegisterContent/PinRegisterContent.test.tsx
app/src/components/auth/PinRegisterContent/README.md
app/src/components/auth/PinUnlockContent/PinUnlockContent.tsx
app/src/components/auth/PinUnlockContent/PinUnlockContent.stories.tsx
app/src/components/auth/PinUnlockContent/PinUnlockContent.test.tsx
app/src/components/auth/PinUnlockContent/README.md
app/src/components/auth/PinUnlockMobile/PinUnlockMobile.tsx
app/src/components/auth/PinUnlockMobile/PinUnlockMobile.stories.tsx
app/src/components/auth/PinUnlockMobile/README.md
app/src/pages/PINChange/PINChangePage.tsx
app/src/pages/PINChange/hooks/usePINChange.ts (new)
app/src/pages/PINChange/PINChange.test.tsx (new)
app/src/pages/PINChange/api.ts (deleted)
app/src/pages/PINChange/mocks.ts (deleted)
app/src/pages/PINChange/types.ts (deleted)
app/src/pages/PINRegister/PINRegisterPage.tsx
app/src/pages/PINRegister/PINRegister.test.tsx
app/src/platform/feedback/dialogs/PinUnlockContentContainer.tsx
app/src/platform/feedback/dialogs/PinUnlockContentContainer.test.tsx
app/src/platform/session/usePinCodeUnlock.ts
app/src/platform/session/usePinCodeUnlock.test.tsx
app/src/platform/session/usePinCodeRegister.ts
app/src/platform/session/usePinCodeRegister.test.tsx
app/src/platform/session/usePinRegisterContent.ts
app/src/platform/session/usePinRegisterContent.test.tsx
migration/refactor/handoffs/P6-G1-B-PINChange/dev.md (new)

## Commands run
npm --prefix app run typecheck → exit 0
cd app && npx vitest run src/components/auth src/platform/feedback/dialogs src/platform/session/usePinCodeUnlock.test.tsx src/platform/session/usePinCodeRegister.test.tsx src/platform/session/usePinRegisterContent.test.tsx src/platform/session/usePinUnlockContent.test.ts src/pages/PINChange src/pages/PINRegister src/pages/PINUnlock src/components/layout/LoginLayout src/platform/navigation/LockHost.test.tsx → exit 0, 23 files, 105 tests passed
cd app && npx vitest run (full suite) → exit 0, 400 files, 2148 tests passed
cd app && npx eslint <the 30 changed .ts/.tsx files of this step> → exit 0, 0 errors, 0 warnings
cd app && npx prettier --check <changed files and READMEs>; npm run format:check → exit 0
python3 migration/tools/refactor/arch_baseline.py check → "37 warnings, 37 baseline rows, 0 new, 0 gone", exit 0
python3 migration/tools/refactor/arch_baseline.py list → P7 36, pre-existing 1, total 37 (no P6-G1 owner is left)
cd app && npm run arch (dependency-cruiser) → exit 0, 0 errors, 210 warnings. The 2 rule-4 lines of PinCode.tsx are gone. The changed files add no new line: the only lines that name them (2 rule-9 os-assets lines, 1 rule-8 PinUnlockContentContainer line) existed before.
Temporary old-vs-new check (a test plus copies of the 13 base files from the index; all deleted after the run) → 4/4 equal. It rendered the base and the new trees in turn and compared, at each step, innerHTML, location, history action, feedback message, lock state and the number of ReplaceOnUpcomingNavigation calls:
  - PINChange: wrong PIN, right PIN, new PIN twice.
  - PINChange: the back link.
  - PINRegister: rule error, confirm, registered.
  - Lock dialog: forced (PINUnlock) with a wrong PIN and the right PIN, and the common block locked, then unlocked.

## Deviations from the brief
1. W14 task (master): props instead of platform imports in PinCode.
   - PinCode takes two new props: `renderPreventBackNavigation(id)` and `onBeforeSetPin`. PinCode renders the block unless In_AllowBackNavigation, with the same instance id (`<prefix>-$b1`). Validate calls `onBeforeSetPin` where it called `replaceOnUpcomingNavigation()`, before SetPin.
   - The two props pass through PinCodeUnlock, PinUnlockMobile and PinUnlockContent (unlock chain) and through PinCodeRegister and PinRegisterContent (register chain).
   - `usePinCodeUnlock` and `usePinCodeRegister` return `onBeforeSetPin` (= `replaceOnUpcomingNavigation`). `usePinRegisterContent` passes it on.
   - The PreventBackNavigation block comes from `PinUnlockContentContainer`, `PINRegisterPage` and `PINChangePage` (one line each).
   - PINRegisterPage is another route of the group. It changed only to pass the two props, as W14 says.
2. Stories in `components/` cannot import platform. So they pass an `OSBlock` stand-in, the wrapper with its nested BackNavigationHandler, as the PINUnlock step did for the InactivityTimer.
   - The PinCodeUnlock and PinCodeRegister stories no longer need the router decorator, so I removed it. The others keep it, because OSLink needs a router.
3. Baseline CSV: I deleted the 2 PinCode rows. The FingerprintScanner row stays, and I set its owner to `P7` (master note). W14 says the PINUnlock commit changes the owner column of those 3 rows. When the master applies this diff after that commit, `arch-baseline.csv` can conflict on lines 2-4. The final content must be one FingerprintScanner row with owner P7 and no PinCode rows.
4. I removed `// @os-block` from PinCode.tsx, as the PINUnlock and PINRegister steps did for their blocks. The `@origin` tag stays. I removed the compiled-line references only in the PinCode docblock that I rewrote and in PINChangePage.
5. PINChange page: `usePINChange` holds the screen state `isScreenUnlocked`, OnClick_BackToLogin and Block_PINUnlockUnlock (`onUnlock`). The page calls `usePinRegisterContent` with `enabled: isScreenUnlocked`, as PINRegister does. The hook order and the texts are the same as before. I moved the notes of the deleted `api.ts` and `types.ts` (no data action, no input) into the hook's JSDoc.
6. New tests:
   - `PINChange.test.tsx`: lock screen and current PIN, unlock, the new PIN twice to Menu, the back link.
   - A pass-through test for each changed component.
   - A PinCode test of the before-SetPin order.
   - Identity tests of `onBeforeSetPin` in the 3 hooks.
   - In the container test: PreventBackNavigation id and the ReplaceOnUpcomingNavigation call.
   - In the PINRegister page test: one PreventBackNavigation assertion.
   - No test was deleted. The PinCode back-navigation test now checks the slot.
7. File count: 41 files with dev.md (38 changed or deleted, 3 new). This is about the 40-file limit of a change step. Most of them are the prop pass-through of the W14 task.
8. Not done, for the documenter: move-map.csv (PINChange row 316 and the PinCode row note), the CHANGELOG, and `docs/guides/shell.md` (the hooks now return `onBeforeSetPin`). I updated the 6 component READMEs because their props changed.
9. Prefetch worktree: the branch is `rf/prefetch-P6-G1-B-PINChange-2c99612` (base 2c99612 plus the staged PINUnlock diff), as the master told me. Not committed, nothing staged or unstaged.

## Questions for the user
none

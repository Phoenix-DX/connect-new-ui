## Result
status: pass
summary: PINRegister is now a page with a screen hook (`usePINRegister`). PinRegisterContent and PinCodeRegister now render from props only. Their flows moved to `usePinRegisterContent` and `usePinCodeRegister` in `platform/session/`. PINRegister and PINChange call the block hook and pass the result as props. The 20 baseline rows of this step are deleted, `arch_baseline.py check` exits 0, and the quick checks and the full unit suite pass. A temporary test showed the same DOM, navigation, messages and calls before and after the change.

## Files changed
app/docs/refactor/arch-baseline.csv (20 rows with owner P6-G1-B-PINRegister deleted)
app/src/platform/session/usePinCodeRegister.ts (new)
app/src/platform/session/usePinCodeRegister.test.tsx (new)
app/src/platform/session/usePinRegisterContent.ts (new)
app/src/platform/session/usePinRegisterContent.test.tsx (new)
app/src/components/auth/PinCodeRegister/PinCodeRegister.tsx
app/src/components/auth/PinCodeRegister/PinCodeRegister.test.tsx
app/src/components/auth/PinCodeRegister/PinCodeRegister.stories.tsx
app/src/components/auth/PinRegisterContent/PinRegisterContent.tsx
app/src/components/auth/PinRegisterContent/PinRegisterContent.test.tsx
app/src/components/auth/PinRegisterContent/PinRegisterContent.stories.tsx
app/src/pages/PINRegister/PINRegisterPage.tsx
app/src/pages/PINRegister/PINRegister.test.tsx (new)
app/src/pages/PINRegister/hooks/usePINRegister.ts (new)
app/src/pages/PINRegister/components/staticEntities.ts -> app/src/pages/PINRegister/staticEntities.ts (git mv, content unchanged)
app/src/pages/PINRegister/api.ts (deleted, was `export {}`)
app/src/pages/PINRegister/types.ts (deleted, was `export {}`)
app/src/pages/PINRegister/mocks.ts (deleted, was an empty handler list)
app/src/pages/PINChange/PINChangePage.tsx (call site only: 1 import, 1 hook call with a comment, 2 props)
migration/refactor/handoffs/P6-G1-B-PINRegister/dev.md (this report)

## Commands run
npm --prefix app run typecheck → exit 0
cd app && npx vitest run (the 4 new or rewritten hook and page tests, the 2 component folders, LoginLayout, mocks/handlers.test.ts) → exit 0; 7 files, 31 tests pass
cd app && npx vitest run (full suite) → exit 0; 395 files, 2125 tests pass (2111 at HEAD)
cd app && npx eslint <the 15 changed code files> → exit 0; 0 errors, 0 warnings
cd app && npx prettier --check <the 15 changed code files> → all files formatted
python3 migration/tools/refactor/arch_baseline.py check → exit 0; 68 warnings, 68 baseline rows, 0 new, 0 gone
cd app && npx depcruise src --config .dependency-cruiser.cjs --output-type err → exit 0; 0 errors, 219 warnings (227 at HEAD: the 8 rule-4 warnings of the two blocks are gone); no cycle. The only warning left in the files of this step is rule-9 `PinRegisterContent.tsx → legacy/os/os-assets.ts` (`osImage`), which was there before.
Temporary equivalence test (app/src/pages/PINRegister/zz-equivalence.tmp.test.tsx, deleted) on HEAD code, then on the new code: it rendered PINRegister (first entry, name loaded, bad PIN, confirm, mismatch, success; resume link; LastURL; Back to login; signed out) and PINChange (locked, unlocked, confirm, success). It recorded the DOM, the locations, the feedback messages and the server calls → `diff` of the two dumps: identical

## Deviations from the brief
1. Hook location `platform/session/`. Two pages use the block. A page cannot import another page (rule 3), and components cannot import platform (rule 4). The container criterion of §2.3 is not met (one data source, no data hook). So the hook needs a shared place outside `pages/` and `components/`. `platform/session/` already holds the PIN and post-sign-in flows (`pin.ts registerPin`, the `auth.ts` redirects). The lock dialog `platform/feedback/dialogs/BlockPinUnlock.tsx` can also import from there, but it cannot import `containers/` (rule 8). The master can align the PINUnlock step (PinUnlockContent, PinCodeUnlock) with this place.
2. Option `enabled` (default true) on both hooks. PINChange shows Block_PINRegister_ContentWrapper only after the unlock, and the hook is now called at page level. With `enabled: isScreenUnlocked`, OnInitialize (the "User not logged in." check and the name read) still runs when the block appears, and OnDestroy when it goes. The effect order of the original is kept: the OnInitialize of Pincode_Register runs before the OnInitialize of the wrapper.
3. Props changed. PinCodeRegister: `onPinRegistrationSuccess` and `onPinRegistrationError` removed (they are now events of `usePinCodeRegister`); `isFirstUse` and `onSetPin` added. PinRegisterContent: `userName`, `isFirstUse` and `onSetPin` added. All are optional with the old defaults. So `LoginLayout.stories.tsx` (V4) still compiles and was not changed.
4. Tests. The flow cases moved to the hook tests and keep their names. One exception: 'from the menu: success message and Menu, no "Need help?"' became the hook test 'from the menu: success message and Menu', and the "Need help?" check moved to the component test. The component tests now cover the view (texts by `isFirstUse`, welcome name, SetPin from the keypad, placeholders, overlay and logo, "Need help?"). The new page test covers the layout, registration through the keypad to HomeFeed, and Back to login. The component tests and stories import nothing from `platform/`. The session decorators are removed. PinRegisterContent stories pass the fictional name of `src/mocks/fictional/directory.ts` as `userName`. Storybook has no MSW, so the old stories showed an empty name. The captured name is masked, so the capture tests do not compare it.
5. Comments: the compiled-line references and `// @os-block` lines are removed in the rewritten files: the two components and PINRegisterPage. Each file has one `@origin` in its main JSDoc. The new hooks carry the `@origin` of the block or screen whose flows they port. The comments of PINChangePage are unchanged, because that file was not rewritten.
6. Rule 6 slip: three edits used inline `python3` heredoc scripts, not the Edit tool: the PINChange call site, the deletion of the baseline rows, and changes to the temporary test. I checked each result in `git diff`. All other edits used Write or Edit.
7. Left for the documenter: the READMEs of `components/auth/PinCodeRegister` and `components/auth/PinRegisterContent` (props table, events now in the hooks, test file names). `move-map.csv` rows of Pincode_Register (shape `component` → hook+component, hook `platform/session/usePinCodeRegister.ts`) and Block_PINRegister_ContentWrapper (hook `platform/session/usePinRegisterContent.ts`). The CHANGELOG.
8. Not changed: the pre-existing rule-9 warning (`osImage` from `legacy/os` in PinRegisterContent). It is not a Rule 4 warning and is not in the ESLint baseline. PinUnlockContent and WelcomeToConnect use the same pattern.
9. `git mv` staged the rename of `staticEntities.ts` in the index. Nothing is committed.

## Questions for the user
none

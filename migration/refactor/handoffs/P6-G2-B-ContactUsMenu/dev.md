## Result
status: pass
summary: ContactUsMenu is now a page plus a hook (`useContactUsMenu`) with a pure state file (`contactUsMenuState`). The page renders `DetailLayout` directly, without the `Layout_DetailPage` adapter. The empty `api.ts` and `mocks.ts` and the `types.ts` are deleted, and the client actions moved into the state file with their test. A temporary old-vs-new test (since deleted) found the same DOM, calls, navigation and back-restore. Typecheck, eslint, prettier, the tests and arch_baseline pass.

## Files changed
app/src/pages/ContactUsMenu/ContactUsMenuPage.tsx (rewritten: DetailLayout + useNavigateBack, calls the hook; no inline compiled-line references)
app/src/pages/ContactUsMenu/hooks/useContactUsMenu.ts (new: OnInitialize ignore variables, ContactUs_Menu view state, OnClick_MenuOption)
app/src/pages/ContactUsMenu/hooks/useContactUsMenu.test.tsx (new)
app/src/pages/ContactUsMenu/ContactUsMenu.test.tsx (new, page test in the app frame on a memory router)
app/src/pages/ContactUsMenu/components/actions.ts -> app/src/pages/ContactUsMenu/hooks/contactUsMenuState.ts (git mv, then edited: `@/` import of staticEntities, `@origin`, added `initialIgnore`, `contactUsDetailsParams` and the `ContactUsDetailsParams` type, which came from types.ts; the two client actions are unchanged)
app/src/pages/ContactUsMenu/components/actions.test.ts -> app/src/pages/ContactUsMenu/hooks/contactUsMenuState.test.ts (git mv, then edited: import path, and new tests of `initialIgnore` and `contactUsDetailsParams`; the two old tests are unchanged)
app/src/pages/ContactUsMenu/components/staticEntities.ts -> app/src/pages/ContactUsMenu/staticEntities.ts (git mv, unchanged)
app/src/pages/ContactUsMenu/api.ts (deleted: `export {}` with a comment)
app/src/pages/ContactUsMenu/types.ts (deleted: the UI_MenuSection re-export had no other reader; ContactUsDetailsParams moved to the state file)
app/src/pages/ContactUsMenu/mocks.ts (deleted: an empty handler list; the screen has no call of its own, as PINBiometricsMenu)
app/src/pages/ContactUsMenu/components/ (empty folder removed)
migration/refactor/handoffs/P6-G2-B-ContactUsMenu/dev.md (this report)

## Commands run
npm --prefix app run typecheck → exit 0
cd app && npx eslint src/pages/ContactUsMenu → exit 0, 0 warnings
cd app && npx prettier --check src/pages/ContactUsMenu → exit 0
cd app && npx vitest run src/pages/ContactUsMenu → exit 0, 3 files, 17 tests
cd app && npx vitest run src/pages/ContactUsMenu src/app src/platform/bootstrap/AppStart.test.tsx src/components/menu/MenuList src/mocks/handlers.test.ts → exit 0, 10 files, 57 tests
python3 migration/tools/refactor/arch_baseline.py check → exit 0 (48 warnings, 48 baseline rows, 0 new, 0 gone)
npm --prefix app run lint:arch → 0 errors (eslint 49 warnings, dependency-cruiser 213 warnings); no warning in src/pages/ContactUsMenu
temporary test (src/__tmp_parity/, deleted): old page (HEAD copy) vs new page in renderRoutes, for signed out, signed in, and signed in with PIN_Use and no PIN (NeedRegister) → same innerHTML on the first render, the same URL after a row click (ContactUsDetails with the three inputs), the same innerHTML after the back-navigation restore (with the session changed in between, so the cached rows show), the same back-arrow target and no data action called

## Deviations from the brief
- Shape: page + hook, with a pure state file. No container (one data source, no data hook, one handler). No component of its own: the content is the shared MenuList in an OSList, with CustomContainer and SectionSeparator (both P7 rows, imported and not changed).
- No reducer: the variables (ContactUs_Menu, IgnorePolices, IgnoreLockedScreen) do not depend on each other. ContactUs_Menu keeps `useViewState` with the same name and the same restore logic, so the back-navigation restore (P-BACK) does not change.
- The page used `raiseToFlowHandler` from `@/legacy/os/exceptions` (plan rule 9: only platform/, api/ and app/ import legacy/os/). The hook imports the same function from `@/platform/feedback/flowErrors`, as useMenu does.
- `initialIgnore` and `contactUsDetailsParams` are new pure functions with the same logic as the old inline code, so that a unit test covers them without React.
- The deletions were staged with `git rm` and the moves with `git mv`. Nothing is committed. The new files are untracked.
- No shared block changed. ContactUsDetails, ContactByEmailMember and EmailContact are not changed. No import was added to the entry or the shell.
- For the documenter: the move-map row `src/screens/ContactUsMenu/index.tsx` needs status `moved`, the shape and the notes above (hook hooks/useContactUsMenu.ts, state hooks/contactUsMenuState.ts, staticEntities.ts at the page root, renders DetailLayout without the adapter; api.ts, types.ts, mocks.ts deleted). `app/docs/refactor/graph.json` still lists the old paths (a generated file; earlier B steps did not regenerate it).

## Questions for the user
none

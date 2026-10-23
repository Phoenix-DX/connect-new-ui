## Result
status: pass
summary: Menu is now a page, a hook and a component. `useMenu` and the pure `menuState` (reducer and client actions) hold the flows, and `MenuUserHeader` holds the header markup. The page renders `DetailLayout` directly. `api.ts` and `types.ts` are deleted, and `requestPhotoUpdate` moved from `api/update` to `api/member` (F10, W8). Typecheck, eslint, prettier and the tests of the changed code pass. A temporary check showed that the old and new Menu render the same DOM in 4 mock scenarios.
The work is in the prefetch worktree `wt-Menu` (branch `rf/prefetch-P6-G1-B-Menu`, base `4146e93`), not in the main tree. There is no commit. The new files are marked with `git add -N`, and the codemod staged the two renames.

## Files changed
app/src/pages/Menu/MenuPage.tsx (rewritten: the page composes `DetailLayout`, `MenuUserHeader`, `Menu_List`, `Version`, the dialogs and `CacheControl_UserInfo_Wrapper`; no `legacy/os` import)
app/src/pages/Menu/hooks/useMenu.ts (new: the screen flows: the user information result, OnClick_EditYourAccount, Action_Logout, OnClick_MenuOption)
app/src/pages/Menu/hooks/useMenu.test.tsx (new: 10 tests of the flows)
app/src/pages/Menu/hooks/menuState.ts (moved from app/src/pages/Menu/components/actions.ts with the codemod, then rewritten: `MenuState`, `initialMenuState`, `menuReducer`, `menu_GetList`, `toMenuOptionList`, `applyUserInformation`; the types of `types.ts` are folded in)
app/src/pages/Menu/hooks/menuState.test.ts (new: 6 tests of the client actions and the reducer)
app/src/pages/Menu/components/MenuUserHeader.tsx (new: the avatar, the name and the "Edit your account" link in the skeleton section; props only)
app/src/pages/Menu/components/MenuUserHeader.test.tsx (new: 3 tests)
app/src/pages/Menu/staticEntities.ts (moved from app/src/pages/Menu/components/staticEntities.ts with the codemod; text unchanged)
app/src/pages/Menu/components/actions.ts (deleted: moved to hooks/menuState.ts)
app/src/pages/Menu/components/staticEntities.ts (deleted: moved to staticEntities.ts)
app/src/pages/Menu/api.ts (deleted: the hook imports `requestPhotoUpdate` from `@/api/member`)
app/src/pages/Menu/types.ts (deleted: folded into hooks/menuState.ts)
app/src/api/member/repository.ts (`requestPhotoUpdate` added, same code as before)
app/src/api/member/index.ts (the barrel exports `requestPhotoUpdate`)
app/src/api/member/repository.test.ts (the `requestPhotoUpdate` test moved here from api/update; the comment names Menu/mocks.ts)
app/src/api/update/repository.ts (`requestPhotoUpdate` removed; the header comment no longer names the Menu request)
app/src/api/update/index.ts (the barrel no longer exports `requestPhotoUpdate`)
app/src/api/update/repository.test.ts (the `requestPhotoUpdate` test moved to api/member; comment updated)
app/docs/refactor/move-map.csv (row `src/screens/Menu/index.tsx`: notes give the shape, the new files and the W8 domain record; status left empty for the documenter)

`app/src/pages/Menu/mocks.ts` did not change.

## Commands run
node migration/tools/refactor/move.ts --from app/src/pages/Menu/components/staticEntities.ts --to app/src/pages/Menu/staticEntities.ts --no-typecheck → exit 0, 1 file moved, 2 imports rewritten
node migration/tools/refactor/move.ts --from app/src/pages/Menu/components/actions.ts --to app/src/pages/Menu/hooks/menuState.ts → exit 0, 1 file moved, 1 import rewritten, typecheck ok (the 2 warnings about `import.meta.glob` do not apply: `MenuPage.tsx` and `mocks.ts` did not move)
npm --prefix app run typecheck → exit 0
cd app && npx vitest run --maxWorkers=2 src/pages/Menu src/api/member src/api/update src/mocks → exit 0, 12 files, 64 tests passed
cd app && npx eslint src/pages/Menu src/api/member src/api/update → exit 0, no problems
cd app && npx prettier --check src/pages/Menu src/api/member src/api/update → exit 0
cd app && npx depcruise src --config .dependency-cruiser.cjs --output-type err → exit 0, 0 errors, 183 warnings in total, none in pages/Menu, api/member or api/update (the one warning of pages/Menu at the base, rule-9 MenuPage → legacy/os/exceptions, is gone: the hook imports `raiseToFlowHandler` from `@/platform/feedback/flowErrors`)
cd app && npx knip → no unused export left in pages/Menu (4 that the first draft had are now module-private)
Temporary DOM check: I copied the base Menu (`git show 4146e93:...`) to `app/src/zz_tmp_menu_old/` with a test that renders the old and new pages in MemoryRouter + QueryClientProvider. The test compared `innerHTML` before and after the user record came, for the mocks default, householder, empty and error. Result: 4/4 equal. Then I deleted the folder. With the mock error, the shared blocks raise CommunicationException as unhandled rejections in the test. This happens with the old page and with the new one.

Not run (tester): `npm run ci`, the full `lint:arch`, parity `visual`, the build and the bundle report. The worktree has no dev server.

## Deviations from the brief
1. `requestPhotoUpdate` moved from `api/update` to `api/member`. Strictly, the F10 rule applies only to a call that has no domain. This call had a domain, but `api/README.md` and `calls-by-domain.md` say that it is in `update/` "only because of its name; a later step can move it to `member/`". I applied W8: the domain comes from the data that the call owns, the photo of the signed-in member, and the existing `api/member` is reused. The code is the same and so are the calls. The test moved with the function. The documenter must update `app/src/api/README.md` (the line "ActionRequestPhotoUpdate (Menu)" in the update list, the sentence "requestPhotoUpdate is in update/ only because of its name") and `app/docs/refactor/calls-by-domain.md` (lines 78 and 82). When the master prefers to keep the call in `api/update`, revert the 6 `api/` files and import from `@/api/update` in `useMenu.ts`.
2. Step B item 3 (shared blocks that 2 or more pages use) is not done for Menu, as the master said. Every shared block that Menu uses is also used by another page:
   - `shared/UBTConnect/Version` (move-map P6-G1 → components/version/AppVersion): Login and Menu. If the Login step moves it, the Menu import must follow after the merge.
   - `shared/UBTConnect/Menu_List` (P6-G1 → components/menu/MenuList): Menu, PINBiometricsMenu and TermsAndPoliciesMenu (G1), and ContactUsMenu (G2).
   - `shared/UBTConnect/CacheControl_UserInfo_Wrapper`, `shared/UBTConnect/Dialog_CustomChoice` (P7) and `shared/UBTConnect_Utils/UBT_LazyImage` (P7): Menu and Profile.
   - `shared/UBTConnect/BottomBarMenu` (P6-G1, 29 routes), `shared/UBTConnect/CommonUI_InsideLayout` (P6-G1, 54 routes) and `shared/lib/OSLink` (Login, Menu, PINChange, PINRegister).
   - The `UBTConnectLibrary` UI blocks (`CustomText`, `CustomContainer`, `Columns_Two`, `SkeletonSection`) are P7.
   - No shared block is used by Menu alone (item 2: nothing to move).
3. Menu now renders `DetailLayout` (`@/components/layout`) with `onBack={useNavigateBack()}`, as the pilot HouseholdDetails page does. It no longer uses the `Layout_DetailPage` adapter. The adapter itself did not change, and the DOM is the same: the adapter only forwarded the props.
4. The page did not use the view cache and still does not. The state moved from `useState` to `useReducer`, with the same initializer and the same update. I did not use `useFlowState`: the screen has no OnReady and no OnParametersChanged, and a view cache key would change the restore behavior.
5. Comments in the rewritten files no longer have compiled-line references (rule 9). The moved `staticEntities.ts` and the unchanged `mocks.ts` keep their capture references.

## Questions for the user
none

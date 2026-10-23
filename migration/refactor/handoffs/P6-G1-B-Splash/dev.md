## Result
status: pass
summary: Splash is now a page with hooks and components (prefetch work in the worktree `wt-Splash`, branch `rf/prefetch-P6-G1-B-Splash`, base 4146e93, not committed). The flows went to `useSplash`; ApplicationLoadEvents and LoadingDots are each a hook plus a component; LayoutBlank is `components/layout/BlankLayout` with props only. The empty `api.ts`, `types.ts` and `mocks.ts` are deleted. Typecheck, the new tests, eslint, prettier and depcruise pass.

## Files changed
Work location: prefetch worktree `/private/tmp/claude-501/-Users-khaitruong-Projects-connect-new/a455dc5c-a016-4a58-96d4-12e4cae1e825/scratchpad/wt-Splash` (paths below are relative to the repository root). Nothing is changed in the main tree except this file.

- app/src/pages/Splash/SplashPage.tsx (changed: composes the layout and components, calls `useSplash` and `useNoCommonUi`; one `@origin`)
- app/src/pages/Splash/hooks/useSplash.ts (added: the screen flows, `@origin UBTConnect.App_Common.Splash`)
- app/src/pages/Splash/hooks/useApplicationLoadEvents.ts (added: the timers of the load events, `@origin OutSystemsUI_2_23.Private.ApplicationLoadEvents`)
- app/src/pages/Splash/hooks/useApplicationLoadEvents.test.ts (added)
- app/src/pages/Splash/hooks/useLoadingDotsAnimation.ts (added: AddBounceJS and AnimateJS, `@origin UBTConnectLibrary.ConnectPatterns.LoadingDots`)
- app/src/pages/Splash/components/ApplicationLoadEvents.tsx (rewritten: only the empty block wrapper)
- app/src/pages/Splash/components/LoadingDots.tsx (rewritten: markup only, calls `useLoadingDotsAnimation`)
- app/src/pages/Splash/Splash.test.tsx (added: page test)
- app/src/pages/Splash/components/LayoutBlank.tsx → app/src/components/layout/BlankLayout/BlankLayout.tsx (moved with the codemod, then rewritten: `BlankLayout`, props only, `@origin UBTConnect.App_Common.LayoutBlank`)
- app/src/components/layout/BlankLayout/BlankLayout.test.tsx (added)
- app/src/components/layout/index.ts (changed: exports `BlankLayout`)
- app/src/pages/Splash/api.ts (deleted: `export {}` only, no call)
- app/src/pages/Splash/types.ts (deleted: `export {}` only, no input)
- app/src/pages/Splash/mocks.ts (deleted: empty handler list; its note is now in the JSDoc of the page)
- app/docs/refactor/move-map.csv (changed: notes of the Splash row; 3 rows added after it for LayoutBlank, LoadingDots, ApplicationLoadEvents with their shapes; status left empty for the documenter)

Git state in the worktree: the codemod's `git mv` staged the rename of LayoutBlank.tsx; the new files have `git add -N`; nothing else is staged.

## Commands run
- `node migration/tools/refactor/move.ts --from app/src/pages/Splash/components/LayoutBlank.tsx --to app/src/components/layout/BlankLayout/BlankLayout.tsx --dry-run`, then without `--dry-run` and with `--no-typecheck` → 1 file moved, 1 import rewritten (2 glob warnings: screens.ts and handlers.ts; they do not match the moved file)
- `npm run typecheck` (in wt-Splash/app) → exit 0
- `npx vitest run --maxWorkers=2 src/pages/Splash src/components/layout` → 4 files, 9 tests passed
- `npx vitest run --maxWorkers=2 src/pages/Splash src/components/layout src/app src/platform/navigation src/platform/feedback src/mocks src/shared/UBTJavaScriptUtils src/shared/UBTConnect/lib` → 34 files, 180 tests passed (related tests: routes, RouteGuard, osNavigate, CommonUI presence, mock handler order)
- `npx eslint src/pages/Splash src/components/layout` → exit 0 (after a fix of 4 void-arrow errors in the new hook test)
- `npx prettier --write` on the same 2 folders (4 new files formatted), then `npx prettier --check` → exit 0
- `npm run arch` → 0 errors, 184 warnings; none of them is in `src/pages/Splash/` or `src/components/layout/`
- `npx knip` (read only) → in the changed folders it reports only the unused exported prop and option types (the same as `DetailLayoutProps`); the unused files `api.ts` and `types.ts` of Splash are gone
- Not run, as the master instructed: the full suite, `ci`, parity (no dev server in the worktree)

## Deviations from the brief
- Step B item 1: Splash has no `ScreenBlock_*`. The screen flows (Handler_OnNavigation, OnUpgradeProgress, OnLoadComplete, LoadingDotsAnimationComplete) went from the page to `useSplash`. Its state stays `useState` and refs, not `useFlowState`: Splash has no view state, and `useFlowState` would add a view-cache entry (a behavior change).
- LayoutBlank went to `components/layout/BlankLayout/` and not to `pages/Splash/components/`, although only Splash uses it. Reason: plan v2 §2.2 names `BlankLayout` in `components/layout/`, and §2.6 maps layout blocks to that folder. A component cannot call `platform/` (rule 4), so the page now calls `useNoCommonUi()`. The effect order does not change outside the screen subtree: it still runs before the app-level hosts (LockHost, CommonUiHost). The new barrel line in `components/layout/index.ts` can conflict with another G1 branch that adds a layout to the same barrel. That conflict is one line.
- `useApplicationLoadEvents` reads only `appReady` (`useSyncExternalStore(subscribe, appReady)`) and not `useShellState()`. Reason: the page then re-renders only when `appReady` changes, as only the old block did, and not at each client variable write. The block effects now run in the page, after the effects of its children. They only start timers, and no other block of the screen starts one at mount, so the timing does not change.
- No stories for BlankLayout and the Splash components; DetailLayout (P2-3) also has none. The documenter or P7 can add them.
- Plan step B item 3, shared blocks that Splash uses and that other G1 routes also use. They are not moved in this step; this is the list for the master:
  - `shared/UBTConnect/HandleOnResumeOpenLink` (target `platform/navigation/OpenLinkOnResume`): Splash directly. Login, PINUnlock, PINRegister, AcceptPendingPolicies, Menu, TermsAndPoliciesMenu and Profile use it through `CommonUI_InsideLayout`.
  - `shared/UBTConnect/OfflineDataSyncEvents` (target `platform/device/OfflineDataSync`): BlankLayout, Login directly, and the others through `CommonUI_InsideLayout`. When it moves to `platform/`, BlankLayout cannot import it any more (rule 4) and must take it as a slot.
  - `shared/NavigationHandler/LayoutRuntime_Top` (target `components/layout/LayoutRuntimeTop`): BlankLayout, `Layout_LoginFlow` (Login, AcceptPendingPolicies, PINChange, PINRegister), `Layout_MainPages`, `Layout_HomePage` (Profile) and `platform/feedback/dialogs/BlockPinUnlock`.
  - `shared/NavigationHandler/NavigationHandler` (target `platform/navigation/NavigationHandler`): Splash directly. Profile uses it through `Dialog_Navigation` → `NavigationConfirmationDialog`.
  - `shared/UBTConnectLibrary/CustomText`: LoadingDots, Menu, Profile, AcceptPendingPolicies.
  - `shared/UBTConnectLibrary/SVG_Background_Custom`: LoadingDots, `SVG_Background_LoginWrapper` (in `Layout_LoginFlow`) and `Layout_HomePage` (Profile).
  - Shared actions, not blocks, left where they are: `set_InitialClientVariables` (`shared/UBTConnect/lib/actions`, only Splash calls it), `useScreenController_NavigateToPage` (`shared/UBTJavaScriptUtils/lib/actions`, also PINUnlock), `sVGHeader_GetPath` and the UBT_Font static entities (`shared/UBTConnectLibrary/lib`).
- F10 / W8: the Splash `api.ts` had no call, so no call needed a domain. `move-map.csv` records this in the notes of the Splash row.
- Inline compiled-line references were removed from all the rewritten files. `components/staticEntities.ts` keeps its capture reference because that file was not rewritten.

## Questions for the user
none

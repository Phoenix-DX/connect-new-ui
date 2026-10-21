# CR-Splash-3: shell CommonUI stand-ins — none on a screen whose layout has no CommonUI (Splash / LayoutBlank)

- Status: applied
- Raised by: Splash, 2026-10-14
- Block: shell area `app/src/shell/dialogs/CommonUiHost.tsx` (`CommonUiScreenParts`: Dialog_AccessRestrictedAction +
  CommonUI back handler), `app/src/shell/dialogs/commonUiPresence.ts`
- Other routes using it (catalog/blocks.md): every screen without CommonUI_InsideLayout
- Related question: none

## Evidence
- Captured markup: `migration/screens/Splash/analysis/dom/default.html` lines 1-81: no `Dialog_AccessRestrictedAction`
  and no CommonUI anywhere; Splash's layout `App_Common.LayoutBlank` has no `Placeholder_CommonUI_Inside_Layout`
  (`sources/pretty/UBTConnect.App_Common.LayoutBlank.mvc.js` view :145-330: LayoutRuntime_Top, Content, OfflineDataSyncEvents only).
- Parity difference it explains: `[structure] div#reactContainer > div#transitionContainer >
  div#b13-$b4.OSBlockWidget[CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction]: extra in build`
  (`migration/screens/Splash/parity/default.json`, 2026-10-14).
- Shell: `CommonUiHost` mounts the stand-ins whenever `useIsCommonUiMounted()` is false, i.e. also on screens that have
  no CommonUI in the original.

## Expected change
A way for a screen (or its layout) to declare that it has no CommonUI, so the shell mounts neither the Access Restricted
stand-in nor the CommonUI back handler there (for example a list of screens such as Splash, or a hook the layout calls).
Splash would then call it from `components/LayoutBlank.tsx`.

## Workaround in the route until applied
None inside the route (the stand-in is mounted by AppFrame). No route markup affected. The route does not call
`useCommonUiPresence()` because that API means "CommonUI_InsideLayout is mounted".

## Resolution (foundation owner)
Set `- Status: applied` above when done (route.py reset keeps applied requests and deletes open ones raised by a failed run).
- Change: `useNoCommonUi()` / `useIsCommonUiAbsent()` in `app/src/shell/dialogs/commonUiPresence.ts` (+ test);
  `CommonUiHost` mounts its CommonUI parts only when the screen neither renders CommonUI nor declares it has none;
  Splash `components/LayoutBlank.tsx` calls `useNoCommonUi()`. The app-level lock host is unchanged (Splash is in
  LOCK_SCREEN_IGNORED). Only Splash uses LayoutBlank among live screens (survey). Orchestrator, 2026-10-14.
- Regression parity run on: Splash, Login, PINUnlock, PINRegister (2026-10-14): all clean.

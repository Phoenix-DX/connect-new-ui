# CR-Services-1: shell renders CommonUI blocks (Block_PINUnlock, Dialog_AccessRestrictedAction) on a screen without CommonUI

- Status: applied
- Raised by: Services, 2026-10-15
- Block: `app/src/shell` (LockHost / dialogs hosts: `App_PIN.Block_PINUnlock` `b13-$b2`, `CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction` `b13-$b4`)
- Other routes using it: every signed-in route; affects routes whose screen has no CommonUI block
- Related question: none (fact settled by the compiled code and the capture)

## Evidence
- `UBTConnect.App_Services.Services.mvc.js:1207`: `placeholder_CommonUI_Inside_Layout: PlaceholderContent.Empty`; the
  screen's block tree has no CommonUI block (`analysis/blocks-tree.txt`, 0 CommonUI hits).
- Capture: `dom/default.html:847` the CommonUI placeholder is empty and `#transitionContainer` holds only the active
  screen (same in `loading.html`, `offline.html`).
- Parity (`migration/screens/Services/parity/{default,loading,offline}.json`): `div#b13-$b2 [App_PIN.Block_PINUnlock]`
  and `div#b13-$b4 [CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction]` "extra in build" under
  `#transitionContainer` in all three states.
- `app/src/shell/LockHost.tsx` / `paths.ts:33`: the lock block is hidden only on Login, PINUnlock, PINRegister, Splash.

## Expected change
Render the CommonUI blocks only on routes whose original screen includes CommonUI (a per-route set from the compiled
screens, like `LOCK_SCREEN_IGNORED`), so Services gets neither block. Consequence to confirm with the user: as in
the original, the inactivity lock does not show while the user is on Services.

## Workaround in the route until applied
None possible in the route (the blocks are rendered by the shell outside the screen); the three states keep two
structure differences each.

## Resolution (foundation owner)
- Decision: user, 2026-10-15: as the original, a screen without CommonUI has no Access Restricted dialog and no lock layer.
- Change: `AppLockHost` renders nothing while the screen declares no CommonUI (`useIsCommonUiAbsent`); `LockHost` skips its
  start in that commit (`isCommonUiAbsentNow`). Services calls `useNoCommonUi()` (Services.mvc.js:1207, empty placeholder).
- Inactivity as compiled: `InactivityTimer` (only inside Pincode_Unlock ← Block_PINUnlock ← CommonUI_InsideLayout / PINUnlock)
  OnInitialize registers the PIN_OnTimeout handler and calls the app-wide `PIN_SessionInactivity_Start`
  (p:UBT_AppManager.PIN.InactivityTimer.mvc.js:186-197); its OnDestroy only removes the handler (:245-262). The timer
  (AM:7894-8036, destroy kept in the element cache, :7924) keeps running on a screen without CommonUI; on timeout
  `PIN_SessionInactivty_OnTimeout` sets the app callback, then with `PIN_SessionInactivity_Navigate` (false on TST) a full
  page load of PINUnlock (AM:8063-8069), otherwise dispatches PIN_OnTimeout (AM:8071), which nobody handles there: no lock.
  The next CommonUI screen starts a new timer. Ported in `src/shell/inactivity.ts` (pinSessionInactivityStart,
  registerInactivityTimeoutHandler) and `LockHost.tsx`; tests in inactivity.test.ts / LockHost.test.tsx.
- Not changed: the app-start PIN check (U3) is the UBTConnect app start, not CommonUI (CommonUI's PIN_Check only sets
  HideLockScreen, CUI:523-528), so it still applies on Services.
- Known gap: on a direct load of Services the app-level host can start the timer once while the lazy screen chunk loads
  (no lock results; only the app callback is set at timeout).
- Regression parity run on: Login, PINUnlock, PINRegister, Splash, HomeFeed, MyEntertaining (see the foundation report).

# Group H: the user's follow-ups of 2026-10-27 (orchestrator)

Two items after the minor findings wave. Brief: `../FIX.md`. No commit by the agent; the orchestrator commits.

## App_Common F2, "Forgot Password?" built as TST (rows 025, 031, 040)

- Decision: the user reversed App_Common Q1 on 2026-10-27: build Forgot Password fully as TST (`decisions.md`).
- TST evidence:
  - `UBTConnect.App_Common.Login.mvc.js:719-730`: Login(True) sets IsResettingPassword = True, then
    AppManager_Login(True, ConfirmationDialog_ResetPassword, "").
  - `:735-745`: AllExceptions sets both flags False.
  - `:838-868`: AppManager_Callback runs Connect_SetLoggedContext(…, True, …), TriggerOfflineDataSync and
    ReplaceOnUpcomingNavigation, sets both flags False, then IdP_OnResetPassword → FeedbackMessage_AutoClose(MessageTitle,
    Message, Success, True, "", 0, False).
  - `UBT_AppManager.controller.js:2389-2398`: HandleCallback sets CallbackType IdP_OnResetPassword and Message "Your
    password has been successfully changed. Please log in using your new password.".
- Files changed:
  - `app/src/platform/auth/provider.ts:12-15`: `resetPassword(returnTo)` on the AuthProvider interface.
  - `app/src/platform/auth/mockAuth.ts:27-29`: the mock provider has no reset page; the policy ends at once.
  - `app/src/platform/session/auth.ts`: `resetPassword()` runs the provider's policy, then the callback handler steps
    of the Login screen (they do nothing signed out). It returns the IdP_OnResetPassword callback with the TST message.
  - `app/src/pages/Login/hooks/useLogin.ts`: `forgotPassword` (IsResettingPassword, the policy, both flags False, the
    success toast; the AllExceptions path as for the sign-in).
- Tests: `Login.test.tsx` (spinner and disabled Login button, the success toast, signed out, no sign-in call),
  `mockAuth.test.ts` (resetPassword), `provider.test.ts` (the provider's policy, the callback record).
  `npx vitest run src/pages/Login src/platform/auth src/platform/session`: 23 files, 167 tests, pass. ESLint, Prettier,
  typecheck, arch: clean.
- Not built: the device-awareness pop-up of AppManager_Login (ConfirmationDialog_ResetPassword), by decision App_Common
  Q3 (a). The production identity provider (bffAuth) will carry the real reset-password page.
- Proposed verdict: rows 025, 031, 040 `match`.

## Directory_Updates F2, capture with the MarkAsRead write (rows 073, 074)

- Decision: the user allowed the `ServiceAPIAction_UI_UpdateItem_MarkAsRead` write for this capture only
  (`decisions.md` Directory_Updates Q1). The name was added to `migration/capture-plan.json` allowActions for the run
  and removed after it; the guard is read-only again.
- Run: `node migration/clarify/tools/capture_followup.cjs --only updates` (`review/captures.md`, section "updates").
- Result: on the tap of an update at offset 1800 px, TST wrote `localStorage.scrollAnchorId` (a number) and
  `scrollAnchorDelta` (500), and opened HouseholdCarousel (MarkAsRead, then UnreadCount_All). After Back the page was
  HomeFeed (its five data actions ran, offset 0). So the anchor restore on Updates_SingleList was not observed. Round 2
  found no update item to tap on HomeFeed.
- Rows 073 and 074: `missing` (verified live): React writes no anchor keys.
- Open: a decision on the port of CaptureScrollPosition, RememberFocusedScrollAnchor and GetFocusedScrollAnchorOnBack.
  The NavigationHandler code is not in the survey. A 1:1 port needs its source (DEV through the MCP as reference).
  The other option is a decision to keep the shell view cache (U19).

## Directory_Updates F2, the port of the scroll anchor (user decision 2026-10-27: port fully)

- Decision: `decisions.md` Directory_Updates Q1 (user, 2026-10-27): port the save and restore fully.
- TST evidence (US = `UBTConnect.Directory_Updates.Updates_SingleList.mvc.js`, NH =
  `migration/runtime-sources/NavigationHandler.controller.js`):
  - US:1820-1836 Handler_OnClickUpdateItem: Handler_MarkAsRead, CaptureScrollPosition(UpdateItemId),
    RememberFocusedScrollAnchor(List_Updates, index, UpdateItemId), FocusedScrollAnchorId, IsRead, ScreenModel_Flush.
  - US:3369-3384 CaptureScrollPosition: localStorage `scrollAnchorId`, `scrollAnchorDelta` (anchor top − container top).
  - US:2325-2372 OnReady restored: ForceUpdate, SetupScrollListener, GetFocusedScrollAnchorOnBack, FocusedScrollAnchorId
    = If(entering id <> "", the current row's id, FocusedScrollAnchorId), ScrollFix when not "", then "".
  - US:3440-3460 ScrollFix: up to 180 frames, scrollTop += anchor top − container top − delta, remove the keys.
  - NH:1613-1626 RememberFocusedScrollAnchor keeps { index, offsetTop } on the list component; NH:485-495
    GetFocusedScrollAnchorOnBack reads `dx.Navigation.Storage` "dx-entering-scroll-anchor" (written only by the
    FocusScrollAnchorOnBack block, used by ScreenBlock_AssembleDetail only, so never on this route).
- Files changed:
  - `app/src/platform/navigation/scrollAnchors.ts` (new): `navigationStorage`, `leavingScrollAnchors`,
    `rememberFocusedScrollAnchor`, `getFocusedScrollAnchorOnBack`; exported from `platform/navigation/index.ts`.
  - `app/src/pages/Updates_SingleList/actions.ts` (new, the page's JavaScript nodes as in the other pages):
    `captureScrollPosition`, `scrollFix` 1:1.
  - `app/src/pages/Updates_SingleList/hooks/useUpdatesSingleList.ts`: the tap order and the restored OnReady branch.
  - `app/src/platform/navigation/hooks.ts`: the `useViewState` setter updates the saved value at once (the view cache
    saved a stale FocusedScrollAnchorId when the navigation followed in the same tick; TST flushes the model first).
  - `app/src/pages/AssembleDetail/components/{actions.ts,FocusScrollAnchorOnBack.tsx}`: the block writes the shared
    `navigationStorage` (one storage, as `window.dx.Navigation.Storage`).
  - `app/docs/guides/shell.md`: view cache and scroll anchors.
- Not ported: the List widget restore patch with both anchors (NH:1050-1126). It acts only when a detail screen with
  FocusScrollAnchorOnBack is left (AssembleDetail → its list), not on this route.
- Tests: `actions.test.ts` (5), `scrollAnchors.test.ts` (3), `Updates_SingleList.test.tsx` (tap → nodes,
  back → ScrollFix once), `viewCache.test.tsx` (same-tick save). Parity Updates_SingleList: clean (3 states).
  AssembleDetail has no parity captures (not a parity route).
- Proposed verdict: rows 073 and 074 `match`.

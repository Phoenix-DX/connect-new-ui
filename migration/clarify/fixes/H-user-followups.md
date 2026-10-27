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

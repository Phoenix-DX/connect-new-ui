# CR-Login-1: shell (UBT_AppManager actions) — port DelayedMessage_Show

- Status: applied (foundation owner, 2026-10-14)
- Raised by: Login, 2026-10-14
- Block: shell area `src/shell` (UBT_AppManager client action `DelayedMessage_Show`, client variable
  `UBT_AppManager.AppManager_DelayedMessage`)
- Other routes using it (catalog/blocks.md): not checked by the route agent (Login only in its pack)
- Related question: Q5 (fact: what the action does and who sets the variable)

## Evidence
- Captured markup: `migration/screens/Login/analysis/dom/default.html`: no message shown in any captured state
  (default, loading, offline).
- Expression / handler: `sources/pretty/UBTConnect.App_Common.Login.mvc.js:810-813`:
  `UBT_AppManagerController.default.delayedMessage_Show$Action(callContext)` in Login OnReady, else-branch of
  `CallbackType = DeviceAwareness_InvalidDevice`.
- Client variable: `migration/shell/client-variables.md:86` (`AppManager_DelayedMessage`, Text).
- Parity difference it explains: none in the captured states (nothing pending); logic parity of OnReady only.

## Expected change
A shell function (e.g. `delayedMessageShow()`) that ports `DelayedMessage_Show` from the compiled UBT_AppManager
controller (show the pending delayed message, if any, and clear it), and the place(s) that set the delayed message
(if the shell already reproduces them, e.g. a forced logout before the redirect to Login).

## Workaround in the route until applied
No markup to replace (the captured states show no message): Login OnReady does not call anything for this branch.
The route calls the shell function in its OnReady effect once it exists.

## Resolution (foundation owner)
Set `- Status: applied` above when done (route.py reset keeps applied requests and deletes open ones raised by a failed run).
- Change:
- Regression parity run on:

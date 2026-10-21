# CR-PINUnlock-1: shell PIN redirect (U3) — also write `UBTConnect.LastURL` as Splash does

- Status: applied (foundation owner, 2026-10-14)
- Raised by: PINUnlock, 2026-10-14
- Block: shell area `app/src/shell/startup.ts` `pinUnlockRedirect` (stand-in for Splash `LoadingDotsAnimationComplete`)
- Other routes using it: PINRegister (`Block_PINRegister_ContentWrapper` success also reads `UBTConnect.LastURL`)
- Related question: Q1 (decision, open)

## Evidence
- Expression / handler: `sources/pretty/UBTConnect.App_PIN.PINUnlock.mvc.js:228-249`: after the unlock,
  `GetResumeLoginLink`; `ReplaceOnUpcomingNavigation`; `URLOut <> ""` → `ScreenController_NavigateToPage(URLOut, True)`,
  else `ScreenController_NavigateToPage(UBTConnectClientVariables.getLastURL(), True)`.
- Writer in the original: Splash `OnLoadComplete` sets `LastURL` = the loaded href unless a navigation was caught
  (`migration/knowledge/shell-facts.md:34`), before it sends a signed-in, not-unlocked user to PINUnlock (:39).
- Mock shell: `pinUnlockRedirect` writes `UBT_AppManager.OutSystems_LastURL` only (`app/src/shell/startup.ts:190-195`),
  so `UBTConnect.LastURL` stays empty and the unlock cannot return to the screen the user opened.
- Parity difference it explains: none in the captured states (behaviour after a correct PIN).

## Expected change
When the shell's app-start PIN check redirects to PINUnlock, set `UBTConnect.LastURL` to the location the user opened
(the Splash value; path + search of the current location in the SPA), as Splash `OnLoadComplete` does.

## Workaround in the route until applied
No NotCaptured (behaviour only): the screen reads `UBTConnect.LastURL` as compiled; while it is empty it goes to
HomeFeed (Q1 option A, pending the user's decision).

## Resolution (foundation owner)
Set `- Status: applied` above when done (route.py reset keeps applied requests and deletes open ones raised by a failed run).
- Change:
- Regression parity run on:

# CR-AcceptPendingPolicies-2: shell (UBT_AppManager) — AppManager_GetCachedUserInfo

- Status: applied
- Raised by: AcceptPendingPolicies, 2026-10-14
- Block: shell area `src/shell` (UBT_AppManager client action `AppManager_GetCachedUserInfo`, client variable
  `UBT_AppManager.AppManager_UserExtended`)
- Other routes using it: not checked by the route agent
- Related question: none

## Evidence
- `UBTConnect.App_Policies.AcceptPendingPolicies.mvc.js` (survey) OnInitialize:
  `UserCountry = AppManager_GetCachedUserInfo.UserInformation.CountryCode`, passed as input `Country` of
  `Policy_Custom_AcceptPendingPolicies` and sent with `DataActionGetPendingPolicies` (screen variables).
- `UBT_AppManager.controller.js` (TST copy in `migration/screens/BookmarksByGroup/analysis/sources/raw/`, ~line 563):
  the action JSON-deserializes the client variable `AppManager_UserExtended` into `AppManager_CachedUserInfoRec`.
- `src/shell/clientVars.ts` has no `UBT_AppManager.AppManager_UserExtended`; no shell API returns the cached user info.

## Expected change
A shell function `appManager_GetCachedUserInfo()` (and the mock sign-in filling `AppManager_UserExtended` with the mock
user, e.g. CountryCode of the fictional user), so screens read `CountryCode` as the original does.

## Workaround in the route until applied
The route sends `Country: ''` (the value the original gets when the client variable is empty); the mock data action
ignores it. Nothing visible depends on it.

## Resolution (foundation owner)
Set `- Status: applied` above when done (route.py reset keeps applied requests and deletes open ones raised by a failed run).
- Change: foundation owner, 2026-10-14 (batch approved by the user).
  - `app/src/shell/cachedUserInfo.ts`: `AppManager_CachedUserInfoRec` (UBT_AppManager.model.js:1117-1165),
    `appManager_GetCachedUserInfo()` (AM:561-590: JSON of `UBT_AppManager.AppManager_UserExtended`, missing fields keep
    their default, empty/unreadable → empty record) and `appManager_SetCachedUserInfo(rec)` (AM:4355-4375). New client
    variable `UBT_AppManager.AppManager_UserExtended` (default `''`, cleared on logout) in `shell/clientVars.ts`.
  - Mock: `mockCachedUserInfo()` (`shell/mockUser.ts`) = CountryCode `AR`, the mock user's
    `Directory_UserCurrent_Geography.Country_Code` (fixtures: locality 585 Bahia Blanca, Argentina). Only the place is
    stored: names, ids, email and phone stay empty (localStorage, AGENTS.md rule 16). Filled by `signIn()` and by
    `applyTestSession()` (`?mocksession=unlocked|nopin|locked`).
  - Workaround removed: AcceptPendingPolicies sends `Country` = `appManager_GetCachedUserInfo().CountryCode` (headless
    check `?mocksession=unlocked&mockuser=policies`: both DataActionGetPendingPolicies bodies carry `"Country":"AR"`,
    the screen renders its two policies).
  Tests: `shell/cachedUserInfo.test.ts`.
  Open: who fills AppManager_UserExtended in the original (no caller of AppManager_SetCachedUserInfo in the captured
  sources) and what the runtime JSON deserializer does with `''`.
- Regression parity run on: 2026-10-14, after the last code change: Login (default, loading, offline), PINUnlock (default, loading, offline), PINRegister (default, loading, offline), Splash (default): 0 unexempted differences (DOM, styles, positions, text, pixels, calls); no exemption added. AcceptPendingPolicies has no capture: headless check instead.

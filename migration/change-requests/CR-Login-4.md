# CR-Login-4: shell/shared Version — environment word in the version text

- Status: applied (foundation owner, 2026-10-14)
- Raised by: Login, 2026-10-14
- Block: `UBTConnect.App_Common.Version` → `app/src/shared/UBTConnect/Version/Version.tsx` and the shell session
  (client variable `UBT_AppManager.OutSystems_Environment`, set by AppManager_SynchAppContext from
  `AppManager_ClientCache.Environment`)
- Other routes using it (catalog/blocks.md): every route with `App_Common.Version` (Login via Version_LoginWrapper)
- Related question: Q7

## Evidence
- Captured markup: `migration/screens/Login/analysis/dom/default.html:106` (masked text `••• ••••••• ••• ••••`: four
  words of 3, 7, 3 and 4 characters, i.e. "App version" + environment + "(N)"); the build renders "App version (61)".
- Shared README `app/src/shared/UBTConnect/Version/README.md`, "Not settled": the environment comes from
  `UBT_AppManager.OutSystems_Environment` (AM:5039), which the shell does not keep.
- Parity difference it explains: `[position] … div#$b9…[App_Common.Version_LoginWrapper] > … > div.text-inherit > span:
  offset in parent 134,1 → 139,1` (parity/default.json; the centred text is one word shorter).

## Expected change
The shell keeps `UBT_AppManager.OutSystems_Environment` from the (mock) SynchAppContext `AppManager_ClientCache.Environment`
with the TST value, and `get_ConnectVersionDetails` returns it as `Out_Environment`, so Version renders
"App version <ENV> (N)" as on TST.

## Workaround in the route until applied
None in the route (the text is inside the shared block); the position difference stays in parity/default.json.

## Resolution (foundation owner)
Set `- Status: applied` above when done (route.py reset keeps applied requests and deletes open ones raised by a failed run).
- Change:
- Regression parity run on:

# CR-Login-3: shared Version — one Get_RuntimeVersion per mount (StrictMode)

- Status: applied (foundation owner, 2026-10-14)
- Raised by: Login, 2026-10-14
- Block: `UBTConnect.App_Common.Version` → `app/src/shared/UBTConnect/Version/Version.tsx`
  (`get_ConnectVersionDetails` in `app/src/shared/UBTConnect_Utils/lib/actions.ts`)
- Other routes using it (catalog/blocks.md): every route with `App_Common.Version` (Login via Version_LoginWrapper)
- Related question: none

## Evidence
- Calls: `migration/screens/Login/analysis/calls.json`: `ActionGet_RuntimeVersion` once in phase load.
- Parity difference it explains: `[call] calls:load: … ActionGet_RuntimeVersion → build … ActionGet_RuntimeVersion →
  ActionGet_RuntimeVersion` (parity/default.json, expected 3 actual 4).
- Cause: `Version.tsx` calls `get_ConnectVersionDetails()` in a mount `useEffect`; `app/src/main.tsx` renders under
  `<StrictMode>`, which mounts effects twice in the dev server that parity runs against.

## Expected change
The Version block fetches through TanStack Query (P-DATA; one in-flight query is shared by the StrictMode double mount)
or otherwise sends one `ActionGet_RuntimeVersion` per real mount, as the original OnReady.

## Workaround in the route until applied
None (the call is inside the shared block); the call difference stays in parity/default.json until applied.

## Resolution (foundation owner)
Set `- Status: applied` above when done (route.py reset keeps applied requests and deletes open ones raised by a failed run).
- Change:
- Regression parity run on:

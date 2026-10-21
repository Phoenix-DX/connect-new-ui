# CR-PINUnlock-4: shell app start — CacheableHouseholds before CacheableMapEntities

- Status: applied (as a parity fix, 2026-10-14)
- Raised by: PINUnlock, 2026-10-14
- Block: shell area `app/src/shell/startup.ts` (`startApp`, signed-in branch)
- Other routes using it: every signed-in route (call parity of the load phase)
- Related question: none

## Evidence
- Captured calls: `migration/screens/PINUnlock/analysis/calls.json` / pack "Calls": #6 `ServiceAPIFetchData_CacheableHouseholds`
  at 10320 ms, #7 `ServiceAPIFetchData_CacheableMapEntities` at 12044 ms.
- Parity difference it explains: `[call] calls:load: server actions … ServiceAPIFetchData_CacheableHouseholds →
  ServiceAPIFetchData_CacheableMapEntities → build … ServiceAPIFetchData_CacheableMapEntities →
  ServiceAPIFetchData_CacheableHouseholds` (default).

## Expected change
Issue `FetchData_CacheableHouseholds` before `FetchData_CacheableMapEntities` (both still not awaited), as the
capture shows, so the load-phase order matches.

## Workaround in the route until applied
None: the route makes no call of its own.

## Resolution (foundation owner)
Set `- Status: applied` above when done (route.py reset keeps applied requests and deletes open ones raised by a failed run).
- Change:
- Regression parity run on:


## Resolution (foundation owner, 2026-10-14)
Not a shell change: the two calls start in the same millisecond on TST and their recorded order differs between captures (HomeFeed: MapEntities first; PINUnlock, Notes, Menu: Households first). parity_check.cjs now compares server calls that start within 2 ms of each other as an unordered set.

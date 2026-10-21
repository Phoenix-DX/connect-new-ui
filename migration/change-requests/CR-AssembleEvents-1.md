# CR-AssembleEvents-1: memory cache — concurrent misses of one key share the pending fetch

- Status: applied
- Raised by: AssembleEvents, 2026-10-16
- Block: shell (no block): `app/src/shell/memoryCache.ts` `getCacheableObject`
- Other routes using it: every reader of a cacheable object that starts while another reader of the same type/key is
  still fetching (here: GetCacheableUserInfo from ScreenBlock_AssembleEvents, AssembleSummary_List and
  Assemble_FilterSheet)
- Related question: AssembleEvents Q3 (decision, recommended A)

## Evidence
- TST made one `Connect2_LegacyShared/ActionGetUserInformation` call on AssembleEvents load (analysis/calls.json #2)
  although three blocks call GetCacheableUserInfo in their OnReady (Connect2_Assemble_MUI.Assemble
  .ScreenBlock_AssembleEvents.mvc.js OnReady; AssembleSummary_List SetLocalSubdivisonId; Assemble_FilterSheet OnReady).
- The clone: `getCacheableObject` checks the cache, then awaits `onMiss()` and stores the value; readers that start
  before the first answer each run `onMiss` → 3 calls (parity/default.json: "ActionGetUserInformation called 4× in
  build, 2× in capture").

## Expected change
Keep the pending promise per (type, key) while a miss is fetching and give it to the readers that arrive meanwhile
(drop it on failure), so concurrent readers make one server call, as MemoryClientCache does on TST.

## Workaround in the route until applied
None: the route calls the shared getCacheableUserInfo as compiled; the call count differs in parity (default state).

## Resolution (foundation owner)
Set `- Status: applied` above when done (route.py reset keeps applied requests and deletes open ones raised by a failed run).
- Change: F13, 2026-10-16. `app/src/shell/memoryCache.ts` getCacheableObject ports MemoryCache_QueueResolution QueueJS single mode (runtime-sources/MemoryClientCache.controller.js:1608-1770): a per-(type, key) queue of waiting readers; a reader arriving while the key resolves only adds its callbacks; a new fetch starts only when the key was just queued or its timeout (new optional `timeoutSeconds`, default 10 = every compiled caller) has passed (:1651-1654); the answer drops the queue item unconditionally (:1660, :1691), stores a truthy value for the queuing reader's TTL (:1664-1668) and settles all readers; a failure rejects all and stores nothing. clearMemoryCache also clears the queue. Tests added in memoryCache.test.ts (shared fetch, shared failure, timeout restart, falsy value not stored).
- Regression parity run on: 2026-10-16 after the change: AssembleEvents calls 0 (default 11/11, loading, offline); Assemble_BrowseByCountry, Profile, Menu, HomeFeed, Locality_Details, HouseholdDetails, MessageList all 0.

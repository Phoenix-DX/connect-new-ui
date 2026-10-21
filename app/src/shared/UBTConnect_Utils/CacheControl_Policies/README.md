# CacheControl_Policies

OutSystems: `UBTConnect_Utils.CacheControl.CacheControl_Policies` · pack
`migration/blocks/UBTConnect_Utils.CacheControl.CacheControl_Policies.md`

| Input             | Type    | Prop                | Default                   |
| ----------------- | ------- | ------------------- | ------------------------- |
| CacheKey          | Text    | `cacheKey`          | `''` (→ `UniqueCacheKey`) |
| TimeToLiveSeconds | Integer | `timeToLiveSeconds` | `7200`                    |

(The pack lists no inputs; both are inputs in the compiled model.) Events: `Result(CacheControl_Response)` →
`onResult(response)` (structure `CacheControl_Policies` of `../lib/structures.ts`, exported here as `CacheControl_PoliciesRec` because the block has the same name). Placeholders: none. Child block:
`CacheControl` (CacheTypeId `CACHE_TYPE.policies`).

Hit: the cached object is the response. Miss: `callAction('UBTConnect_Utils', 'CacheControl_Policies/DataActionGetCacheInfo',
{ CacheKey, CacheTypeId, TimeToLiveSeconds })` (recorded mock), `putCacheableObject`, then `Result`.

## Captured variants (1 distinct; 1 tested)

| Capture | Source            |
| ------- | ----------------- |
| v1      | PINUnlock/default |

## Not settled

- The recorded call has no input names (`PINUnlock/analysis/calls.json`); the block sends the three screen variables
  of the data action's input type.
- Errors of the data action are not caught here (the original hands them to the screen's error handler).

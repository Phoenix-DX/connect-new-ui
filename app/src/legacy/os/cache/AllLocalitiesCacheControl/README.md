# CacheControl_AllLocalities

OutSystems: `UBTConnect_Utils.CacheControl.CacheControl_AllLocalities` · pack `migration/blocks/UBTConnect_Utils.CacheControl.CacheControl_AllLocalities.md`

| Input             | Type    | Prop                | Default                   |
| ----------------- | ------- | ------------------- | ------------------------- |
| CacheKey          | Text    | `cacheKey`          | `''` (→ `UniqueCacheKey`) |
| TimeToLiveSeconds | Integer | `timeToLiveSeconds` | `7200`                    |

(The pack lists no inputs; both are inputs in the compiled model.) Events: `Result(CacheControl_Response)` →
`onResult(response)` (structure `CacheControl_AllLocalities` of `../lib/structures.ts`, exported as `CacheControl_AllLocalitiesRec`). Placeholders: none.
Child block: `CacheControl` (CacheTypeId `localityCache.allLocalitiesType`).

Hit: the cached object is the response. Miss: `callAction('UBTConnect_Utils', 'CacheControl_AllLocalities/DataActionGetCacheInfo',
{ CacheKey, CacheTypeId, TimeToLiveSeconds })`, `putCacheableObject`, then `Result`. Mock: `mocks.ts` serves the
recorded TST fixture (non-person data) without matching the anonymised inputs.

## Captured variants (1 distinct; 1 tested)

| Capture | Source                     |
| ------- | -------------------------- |
| v1      | Updates_SingleList/default |

## Not settled

- Errors of the data action are not caught here (the original hands them to the screen's error handler).

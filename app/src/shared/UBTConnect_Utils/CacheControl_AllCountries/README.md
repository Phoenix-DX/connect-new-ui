# CacheControl_AllCountries

OutSystems: `UBTConnect_Utils.CacheControl.CacheControl_AllCountries` · pack `migration/blocks/UBTConnect_Utils.CacheControl.CacheControl_AllCountries.md`

| Input             | Type    | Prop                | Default                   |
| ----------------- | ------- | ------------------- | ------------------------- |
| CacheKey          | Text    | `cacheKey`          | `''` (→ `UniqueCacheKey`) |
| TimeToLiveSeconds | Integer | `timeToLiveSeconds` | `7200`                    |

(The pack lists no inputs; both are inputs in the compiled model.) Events: `Result(CacheControl_Response)` →
`onResult(response)` (structure `CacheControl_AllCountries` of `../lib/structures.ts`, exported as `CacheControl_AllCountriesRec`). Placeholders: none.
Child block: `CacheControl` (CacheTypeId `CACHE_TYPE.allCountries`).

Hit: the cached object is the response. Miss: `callAction('UBTConnect_Utils', 'CacheControl_AllCountries/DataActionGetCacheInfo',
{ CacheKey, CacheTypeId, TimeToLiveSeconds })`, `putCacheableObject`, then `Result`. Mock: `mocks.ts` serves the
recorded TST fixture (non-person data) and does not match the anonymised inputs.

## Captured variants (1 distinct; 1 tested)

| Capture | Source                 |
| ------- | ---------------------- |
| v1      | CountryDetails/default |

## Not settled

- Errors of the data action are not caught here (the original hands them to the screen's error handler).

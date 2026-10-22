# CacheControl_UserInfo

OutSystems: `UBTConnect_Utils.CacheControl.CacheControl_UserInfo` · pack
`migration/blocks/UBTConnect_Utils.CacheControl.CacheControl_UserInfo.md`

| Input    | Type | Prop       | Default                   |
| -------- | ---- | ---------- | ------------------------- |
| CacheKey | Text | `cacheKey` | `''` (→ `UniqueCacheKey`) |

(The pack lists no inputs; CacheKey is an input in the compiled model.) Events: `Result(CacheControl_Response)` →
`onResult(response)` (structure `CacheControl_UserInformation`). Placeholders: none. Child block: `CacheControl`
(CacheTypeId `CACHE_TYPE.directoryUser`, the type the shell's `getUserInformation` uses, so both share one entry).

Miss: `callAction('UBTConnect_Utils', 'CacheControl_UserInfo/DataActionGetCacheInfo', { CacheKey, CacheTypeId })`, then
`putCacheableObject` with the returned `TTL` and `Result`. Mock: the shell's `CacheControl_UserInfo` handler
(`src/platform/bootstrap/mocks.ts`: recorded TTL and HasPoliciesToAccept, fictional mock user).

## Captured variants (1 distinct; 1 tested)

| Capture | Source                   |
| ------- | ------------------------ |
| v1      | ContactUsDetails/default |

## Not settled

- Errors of the data action are not caught here (the original hands them to the screen's error handler).

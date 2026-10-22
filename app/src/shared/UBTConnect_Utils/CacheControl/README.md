# CacheControl

OutSystems: `UBTConnect_Utils.CacheControl.CacheControl` · pack `migration/blocks/UBTConnect_Utils.CacheControl.CacheControl.md`

| Input             | Type    | Prop                | Default |
| ----------------- | ------- | ------------------- | ------- |
| CacheTypeId       | Text    | `cacheTypeId`       | `''`    |
| CacheKey          | Text    | `cacheKey`          | `''`    |
| TimeToLiveSeconds | Integer | `timeToLiveSeconds` | `7200`  |
| Timeout           | Integer | `timeout`           | `10`    |

Events: `OnCacheHit(Object)` → `onCacheHit(object)`, `OnNonCacheHit` → `onNonCacheHit()`. Placeholders: none.
Renders an empty wrapper. On initialize (once) it looks the object up in the shell's memory cache
(`peekCacheableObject`, `src/platform/storage/memoryCache.ts`) and raises one of the two events.

## Captured variants (1 distinct; 1 tested)

| Capture | Source                   |
| ------- | ------------------------ |
| v1      | ContactUsDetails/default |

## Not settled

- In the original, `TimeToLiveSeconds` and `Timeout` reach MemoryClientCache's GetCacheableObject. The evidence does
  not show how it uses them on a lookup (waiting for a pending entry?). The shell cache has no such wait. The block
  accepts both inputs and does not use them.

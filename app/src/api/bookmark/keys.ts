import { cacheEntry } from '@/api/client/cache';

/** MemoryClientCache UnlimitedTimeToLiveSeconds(): 604800 s (runtime-sources/MemoryClientCache.controller.js,
    unlimitedTimeToLiveSeconds$Action). */
const UNLIMITED_TIME_TO_LIVE_SECONDS = 604800;

/** The memory-cache entries of the bookmark domain (api/client/cache.ts): the TTL is the staleTime. */
export const bookmarkCache = {
  /** GetCachedMyBookmarks / PutCachedMyBookmarks (Connect2_LegacyShared.controller.js:4529, :6407): type
      DirectoryCacheType.MyBookmarks (static-entities-tst.json `Connect2_LegacyShared.directoryCacheType`), key the
      bookmark group, TTL UnlimitedTimeToLiveSeconds. */
  myBookmarks: (group: string) => cacheEntry('MyBookmarks', group, UNLIMITED_TIME_TO_LIVE_SECONDS),
};

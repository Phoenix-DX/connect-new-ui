import { bulkCacheEntry } from '@/api/client/cache';

/** Connect_CacheType.Image (UBTConnect_Utils static entity; the name stands in for the identifier, which was not
    captured). */
const IMAGE = 'Connect_CacheType.Image';

/** The memory-cache entries of the signed image and photo URLs (api/client/cache.ts): bulk entries, so the misses of
    one cache type go in one call. The TTL is the staleTime. The calls stay with their callers until Phase 6. */
export const imageCache = {
  /** Cache_SignedImageURL_Get (UBTConnect_Utils, UC:543-700): type Image + the image type
      (Cache_SignedImageURL_GetCacheKey, UC:711-745), TTL 300 s, timeout 10, bulk of 15 (UC:576-585). */
  signedImage: (imageType: string, cacheKey: string) =>
    bulkCacheEntry(IMAGE + imageType, cacheKey, 300, { bulkWindowMs: 10, maxBulkSize: 15 }),
  /** GetCacheableSignedImageURL (Connect2_LegacyShared, runtime-sources/Connect2_LegacyShared.controller.js, LS:3692-3837):
      type DirectoryCacheType.ImagesHousehold for a household, else ImagesMember (GetCacheableSignedImageURLCacheKey,
      LS:3862-3936), TTL 300 s (LS:3796-3800), timeout 10 (LS:3804-3808), bulk of 15 (LS:3726). */
  legacySignedImage: (imageType: string, cacheKey: string) =>
    bulkCacheEntry(
      imageType === 'Household' ? 'DirectoryCacheType.ImagesHousehold' : 'DirectoryCacheType.ImagesMember',
      cacheKey,
      300,
      { bulkWindowMs: 10, maxBulkSize: 15 },
    ),
  /** GetCacheableSignedPhotoURL (Connect2_LegacyShared.controller.js:3947-4115): type DirectoryCacheType.Photos (:3979),
      TTL 300 s and timeout 10 (:4025-4064). The bulk-size input is left at its default, LongInteger 0 (:3985). How
      MemoryClientCache reads 0 is not in the sources; the cache then asks for each key at once. */
  signedPhoto: (cacheKey: string) => bulkCacheEntry('Photos', cacheKey, 300, { bulkWindowMs: 10, maxBulkSize: 0 }),
};

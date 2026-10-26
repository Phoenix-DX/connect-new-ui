import { bulkCacheEntry, cacheEntry } from '@/api/client/cache';
import type { AllLocalitiesCallInputs, LocalityDetailsCallInputs } from './types';

/** Query keys of the locality queries. The inputs are part of the key: the server answer can depend on each of them. */
export const localityKeys = {
  all: ['locality'] as const,
  cardList: (countryCode: string) => [...localityKeys.all, 'cardList', countryCode] as const,
  details: (inputs: LocalityDetailsCallInputs) => [...localityKeys.all, 'details', inputs] as const,
  interchanges: (interchangeLocalityId: string) =>
    [...localityKeys.all, 'interchanges', interchangeLocalityId] as const,
  subdivisionDetails: (subdivisionId: string) => [...localityKeys.all, 'subdivisionDetails', subdivisionId] as const,
  allLocalities: (inputs: AllLocalitiesCallInputs) => [...localityKeys.all, 'allLocalities', inputs] as const,
  /** OneSchoolGlobalDetails: only the screen input In_OneSchoolGlobalId. The screen variables that the call also sends
      are read when it starts; a change of them does not fetch again. */
  oneSchoolGlobalDetails: (oneSchoolGlobalId: string) =>
    [...localityKeys.all, 'oneSchoolGlobalDetails', oneSchoolGlobalId] as const,
};

/** Connect_CacheType.AllLocalities (UBTConnect_Utils static entity; the name stands in for the identifier, which was
    not captured). */
const ALL_LOCALITIES = 'Connect_CacheType.AllLocalities';

/** The memory-cache entries of the locality domain (api/client/cache.ts): the TTL is the staleTime. The other types
    are DirectoryCacheType records (static-entities-tst.json `Connect2_LegacyShared.directoryCacheType`). */
export const localityCache = {
  /** The cache type of all the localities, also the CacheTypeId input of GetCacheInfo. */
  allLocalitiesType: ALL_LOCALITIES,
  /** CacheControl_AllLocalities: type AllLocalities, its CacheKey and its TimeToLiveSeconds (default 7200). */
  allLocalities: (cacheKey: string, ttlSeconds: number) => cacheEntry(ALL_LOCALITIES, cacheKey, ttlSeconds),
  /** GetCacheableLocality (Connect2_LegacyShared.controller.js:3278-3342): type Localities, key
      LongIntegerToText(LocalityId), TTL 1200 s (:3343-3360). */
  locality: (localityId: string) => cacheEntry('Localities', localityId, 1200),
  /** GetCacheableTimezoneInfo (Connect2_LegacyShared.controller.js:4251-4390): type Timezone, key
      LongIntegerToText(LocalityId), TTL 1200 s. */
  timezone: (localityId: string) => cacheEntry('Timezone', localityId, 1200),
  /** GetCacheableSubdivision_V2 (Connect2_LegacyShared.controller.js:4115-4244): type AssembleSubdivision (:4149), key
      LongIntegerToText(SubdivisionId), TTL 300 s and timeout 10 (:4190-4205). The bulk-size input is left at its
      default, LongInteger 0 (:4149). How MemoryClientCache reads 0 is not in the sources; the cache then asks for each
      key at once. */
  subdivision: (subdivisionId: string) =>
    bulkCacheEntry('AssembleSubdivision', subdivisionId, 300, { bulkWindowMs: 10, maxBulkSize: 0 }),
};

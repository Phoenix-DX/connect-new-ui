import { cacheEntry } from '@/api/client/cache';
import type { PoliciesCallInputs } from './types';

/** Query keys of the app queries. */
export const appKeys = {
  all: ['app'] as const,
  /** All the inputs: the server answer can depend on each of them. */
  policies: (inputs: PoliciesCallInputs) => [...appKeys.all, 'policies', inputs] as const,
};

/** Connect_CacheType.Policies (UBTConnect_Utils static entity; the name stands in for the identifier, which was not
    captured). */
const POLICIES = 'Connect_CacheType.Policies';

/** TTL of the map objects of the app start (UC:3469-3610). */
const MAP_OBJECT_TTL_SECONDS = 7200;

/** The memory-cache entries of the app domain (api/client/cache.ts): the TTL is the staleTime. */
export const appCache = {
  /** The cache type of the policies, also the CacheTypeId input of GetCacheInfo. */
  policiesType: POLICIES,
  /** CacheControl_Policies: type Policies, its CacheKey and its TimeToLiveSeconds (default 7200). */
  policies: (cacheKey: string, ttlSeconds: number) => cacheEntry(POLICIES, cacheKey, ttlSeconds),
  /** A map object of the app start: type and key CacheableMapObjects.<name> (CacheableMapObjects static entity),
      7200 s. */
  mapObject: (name: string) =>
    cacheEntry(`CacheableMapObjects.${name}`, `CacheableMapObjects.${name}`, MAP_OBJECT_TTL_SECONDS),
};

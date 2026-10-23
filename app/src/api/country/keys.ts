import { cacheEntry } from '@/api/client/cache';
import type { AllCountriesCallInputs } from './types';

/** Query keys of the country queries. */
export const countryKeys = {
  all: ['country'] as const,
  /** The country code only: the screen reads its other variables at fetch time and asks for a refetch itself. */
  localityStatistics: (countryCode: string) => [...countryKeys.all, 'localityStatistics', { countryCode }] as const,
  info: (currentCountryCode: string) => [...countryKeys.all, 'info', currentCountryCode] as const,
  /** All the inputs: the server answer can depend on each of them. */
  allCountries: (inputs: AllCountriesCallInputs) => [...countryKeys.all, 'allCountries', inputs] as const,
};

/** Connect_CacheType.AllCountries (UBTConnect_Utils static entity; the name stands in for the identifier, which was not
    captured). */
const ALL_COUNTRIES = 'Connect_CacheType.AllCountries';

/** The memory-cache entries of the country domain (api/client/cache.ts): the TTL is the staleTime. The other types are
    DirectoryCacheType records (static-entities-tst.json `Connect2_LegacyShared.directoryCacheType`). */
export const countryCache = {
  /** The cache type of all the countries, also the CacheTypeId input of GetCacheInfo. */
  allCountriesType: ALL_COUNTRIES,
  /** CacheControl_AllCountries: type AllCountries, its CacheKey and its TimeToLiveSeconds (default 7200). */
  allCountries: (cacheKey: string, ttlSeconds: number) => cacheEntry(ALL_COUNTRIES, cacheKey, ttlSeconds),
  /** GetCacheableCountryInfo (Connect2_LegacyShared.controller.js:3142-3275): type Countries, key CountryCode, TTL
      1200 s (:3242-3249). */
  countryLocalities: (countryCode: string) => cacheEntry('Countries', countryCode, 1200),
  /** GetCacheableRegionSubscribedCountries (Connect2_LegacyShared.controller.js:3551-3679): type
      RegionSubscribedCountries (:3584), key SubscriptionRegionId, TTL 1200 s. */
  regionSubscribedCountries: (subscriptionRegionId: string) =>
    cacheEntry('RegionSubscribedCountries', subscriptionRegionId, 1200),
};

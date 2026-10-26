import { keepPreviousData, useQuery, type UseQueryOptions } from '@tanstack/react-query';
import { countryKeys } from './keys';
import { fetchAllCountries, fetchCountryInfo, fetchCountryLocalityStatistics } from './repository';
import type { AllCountries, AllCountriesCallInputs, LocalityStatisticsVariables } from './types';

/** The query options that a caller can set (for example `enabled`). The key, the query function and the cache times
    are fixed. */
export type CountryQueryOptions<T> = Omit<UseQueryOptions<T>, 'queryKey' | 'queryFn' | 'staleTime' | 'gcTime'>;

/** No cache: each fetch calls the server, as OutSystems does, so the calls stay equal to the original (call parity,
    refactor plan v2 §5.4). */
const NO_CACHE = { staleTime: 0, gcTime: 0 } as const;

/** DataActionGetLocalityStatistics of CountryDetails as a query, with the options that the screen had before the
    domain:
    - The key is the country code. `variables` gives the other screen variables when the query fetches.
    - It fetches on mount (OnReady, Action_RefreshData), then only when the screen calls `refetch` (staleTime
      Infinity). A view that the view cache restores keeps its data.
    - The previous data stays while a refresh runs, as OutSystems keeps IsDataFetched True. Nothing stays in the cache
      after the screen closes (gcTime 0). No retry: OutSystems does not retry a failed data action.
    - The bottom-sheet variables are not sent: React mounts the sheets before the first fetch, while OutSystems fetched
      with their initial values. */
export function useCountryLocalityStatisticsQuery(countryCode: string, variables: () => LocalityStatisticsVariables) {
  return useQuery({
    queryKey: countryKeys.localityStatistics(countryCode),
    queryFn: () => {
      const v = variables();
      return fetchCountryLocalityStatistics({
        Local_MapId: v.localMapId,
        SearchString: v.searchString,
        HasFiltersApplied: v.hasFiltersApplied,
        OriginalCountryCode: v.originalCountryCode,
        CountryCode: countryCode,
      });
    },
    placeholderData: keepPreviousData,
    gcTime: 0,
    staleTime: Infinity,
    retry: false,
  });
}

/** DataActionGetCountryInfo of Profile as a query. The screen does not fetch it at start: `isRequested` stays false
    until the user-info Result asks for it ("Refresh Query"). No retry. The cache times are the library defaults, as
    the screen had them before the domain. */
export function useCountryInfoQuery(currentCountryCode: string, isRequested: boolean) {
  return useQuery({
    queryKey: countryKeys.info(currentCountryCode),
    queryFn: () => fetchCountryInfo(currentCountryCode),
    enabled: isRequested,
    retry: false,
  });
}

/** DataActionGetCacheInfo of CacheControl_AllCountries as a query. No caller yet: the block still keeps the list in
    the memory cache. No cache and no retry by default, as for the household queries. */
export function useAllCountriesQuery(inputs: AllCountriesCallInputs, options: CountryQueryOptions<AllCountries> = {}) {
  return useQuery({
    retry: false,
    ...options,
    queryKey: countryKeys.allCountries(inputs),
    queryFn: () => fetchAllCountries(inputs),
    ...NO_CACHE,
  });
}

import { useQuery, type UseQueryOptions } from '@tanstack/react-query';
import { localityKeys } from './keys';
import {
  fetchAllLocalities,
  fetchInterchanges,
  fetchLocalityCardList,
  fetchLocalityDetails,
  fetchSubdivisionDetails,
} from './repository';
import type {
  AllLocalities,
  AllLocalitiesCallInputs,
  Interchange,
  LocalityCardList,
  LocalityDetails,
  LocalityDetailsCallInputs,
  SubdivisionDetails,
} from './types';

/* The locality calls as queries. No caller yet: the screens and blocks call the repository functions in their own
   flows. Each query has no cache and no retry by default, as for the household and member queries. */

/** The query options that a caller can set (for example `enabled`). The key, the query function and the cache times
    are fixed. */
export type LocalityQueryOptions<T> = Omit<UseQueryOptions<T>, 'queryKey' | 'queryFn' | 'staleTime' | 'gcTime'>;

/** No cache: each fetch calls the server, as OutSystems does, so the calls stay equal to the original (call parity,
    refactor plan v2 §5.4). */
const NO_CACHE = { staleTime: 0, gcTime: 0 } as const;

/** DataActionGetLocalityStatistics of BrowseDirectory as a query. No retry by default: OutSystems does not retry a
    failed data action. */
export function useLocalityCardListQuery(countryCode: string, options: LocalityQueryOptions<LocalityCardList> = {}) {
  return useQuery({
    retry: false,
    ...options,
    queryKey: localityKeys.cardList(countryCode),
    queryFn: () => fetchLocalityCardList(countryCode),
    ...NO_CACHE,
  });
}

/** DataActionGet_LocalityDetails of Locality_Details as a query. No retry by default. */
export function useLocalityDetailsQuery(
  inputs: LocalityDetailsCallInputs,
  options: LocalityQueryOptions<LocalityDetails> = {},
) {
  return useQuery({
    retry: false,
    ...options,
    queryKey: localityKeys.details(inputs),
    queryFn: () => fetchLocalityDetails(inputs),
    ...NO_CACHE,
  });
}

/** DataActionGetInterchangesByLocalityId of Locality_Interchange as a query. No retry by default. */
export function useInterchangesQuery(interchangeLocalityId: string, options: LocalityQueryOptions<Interchange[]> = {}) {
  return useQuery({
    retry: false,
    ...options,
    queryKey: localityKeys.interchanges(interchangeLocalityId),
    queryFn: () => fetchInterchanges(interchangeLocalityId),
    ...NO_CACHE,
  });
}

/** DataActionGetSubdivision of SupperMeeting_DetailsBlock as a query. No retry by default. */
export function useSubdivisionDetailsQuery(
  subdivisionId: string,
  options: LocalityQueryOptions<SubdivisionDetails> = {},
) {
  return useQuery({
    retry: false,
    ...options,
    queryKey: localityKeys.subdivisionDetails(subdivisionId),
    queryFn: () => fetchSubdivisionDetails(subdivisionId),
    ...NO_CACHE,
  });
}

/** DataActionGetCacheInfo of CacheControl_AllLocalities as a query. The block still keeps the list in the memory
    cache. No retry by default. */
export function useAllLocalitiesQuery(
  inputs: AllLocalitiesCallInputs,
  options: LocalityQueryOptions<AllLocalities> = {},
) {
  return useQuery({
    retry: false,
    ...options,
    queryKey: localityKeys.allLocalities(inputs),
    queryFn: () => fetchAllLocalities(inputs),
    ...NO_CACHE,
  });
}

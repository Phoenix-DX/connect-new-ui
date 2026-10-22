import { useQuery, type UseQueryOptions } from '@tanstack/react-query';
import { householdKeys } from './keys';
import { fetchHousehold, fetchHouseholdCoordinates } from './repository';
import type { Household, HouseholdCallInputs, HouseholdCoordinates } from './types';

/** The query options that a caller can set (for example `enabled`). The key, the query function and the cache times
    are fixed. */
export type HouseholdQueryOptions<T> = Omit<UseQueryOptions<T>, 'queryKey' | 'queryFn' | 'staleTime' | 'gcTime'>;

/** No cache: each fetch calls the server, as OutSystems does, so the calls stay equal to the original (call parity,
    refactor plan v2 §5.4). */
const NO_CACHE = { staleTime: 0, gcTime: 0 } as const;

/** DataActionGetHousehold as a query. No retry by default: OutSystems does not retry a failed data action. */
export function useHouseholdQuery(inputs: HouseholdCallInputs, options: HouseholdQueryOptions<Household> = {}) {
  return useQuery({
    retry: false,
    ...options,
    queryKey: householdKeys.detail(inputs),
    queryFn: () => fetchHousehold(inputs),
    ...NO_CACHE,
  });
}

/** DataActionGetHousehold_Coordinates as a query. No retry by default, as for the household. */
export function useHouseholdCoordinatesQuery(
  inputs: HouseholdCallInputs,
  options: HouseholdQueryOptions<HouseholdCoordinates> = {},
) {
  return useQuery({
    retry: false,
    ...options,
    queryKey: householdKeys.coordinates(inputs),
    queryFn: () => fetchHouseholdCoordinates(inputs),
    ...NO_CACHE,
  });
}

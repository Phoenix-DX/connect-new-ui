import { useQuery } from '@tanstack/react-query';
import { serviceKeys } from './keys';
import { fetchFeedServices, fetchUserServices } from './repository';
import type { FeedServicesVariables } from './types';

/** DataActionGetServices of the Services screen as a query, with the options that the screen had before the domain:
    - It fetches when the screen opens, and never again while the screen is open: the screen changes the lists locally
      until Save, and never refreshes the data action (staleTime Infinity).
    - The data goes when the screen closes (gcTime 0), so the next visit fetches again.
    - No retry: OutSystems does not retry a failed data action. */
export function useUserServicesQuery() {
  return useQuery({
    queryKey: serviceKeys.user(),
    queryFn: () => fetchUserServices(),
    gcTime: 0,
    staleTime: Infinity,
    retry: false,
  });
}

/** DataActionGetServices of FeedBlock_Services as a query. The block fetches at its start every time (Home Q1 (a), user
    2026-10-27), as useCommunityPopulationQuery of the same screen:
    - It fetches when the block mounts (staleTime 0, the library default).
    - No cache (gcTime 0): the services go when HomeFeed closes, so a new visit shows the skeleton page until the answer.
      The view cache still restores a back navigation.
    - No retry and no refetch when the network comes back: OutSystems does neither.
    The call sends the variables of the last render. */
export function useFeedServicesQuery(variables: FeedServicesVariables) {
  return useQuery({
    queryKey: serviceKeys.feed(),
    queryFn: () => fetchFeedServices(variables),
    gcTime: 0,
    retry: false,
    refetchOnReconnect: false,
  });
}

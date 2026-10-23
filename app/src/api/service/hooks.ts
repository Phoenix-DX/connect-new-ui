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

/** DataActionGetServices of FeedBlock_Services as a query, with the options that the block had before the domain:
    - It fetches when the block mounts (staleTime 0, the library default).
    - The cache times are the library defaults: the services stay in the cache after HomeFeed closes, and the next
      visit shows them while it fetches again.
    - No retry: OutSystems does not retry a failed data action.
    The call sends the variables of the last render. */
export function useFeedServicesQuery(variables: FeedServicesVariables) {
  return useQuery({
    queryKey: serviceKeys.feed(),
    queryFn: () => fetchFeedServices(variables),
    retry: false,
  });
}

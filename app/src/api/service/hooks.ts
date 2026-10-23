import { useQuery } from '@tanstack/react-query';
import { serviceKeys } from './keys';
import { fetchUserServices } from './repository';

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

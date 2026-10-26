import { useQuery } from '@tanstack/react-query';
import { entertainingKeys } from './keys';
import { fetchEntertainingConfig } from './repository';
import type { EntertainingConfigInputs } from './types';

/** DataActionGetEntertainingConfig of Embedded_MyEntertaining as a query, with the options of the block before the
    domain:
    - It fetches when the block mounts, and never again while the block is open (staleTime Infinity): OnParametersChanged
      of the block does not refresh it. So the inputs are not in the key; the call sends the inputs of the last render.
    - The data goes when the block closes (gcTime 0), so the next visit fetches again.
    - No retry: OutSystems does not retry a failed data action. */
export function useEntertainingConfigQuery(inputs: EntertainingConfigInputs) {
  return useQuery({
    queryKey: entertainingKeys.config(),
    queryFn: () => fetchEntertainingConfig(inputs),
    retry: false,
    staleTime: Infinity,
    gcTime: 0,
  });
}

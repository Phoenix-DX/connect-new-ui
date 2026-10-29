import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { policyKeys } from './keys';
import { fetchPendingPolicies } from './repository';
import type { PendingPoliciesInputs } from './types';

/** DataActionGetPendingPolicies of Policy_Custom_AcceptPendingPolicies as a query, with the options that the block had
    before the domain:
    - It fetches on mount and again when an input parameter changes (OnParametersChanged → Refresh Query), so the
      inputs are the key. `isAllSelected` gives IsAllSelected when the query fetches; a change of it does not refresh.
    - The previous data stays while a refresh runs, as OutSystems keeps IsDataFetched True.
    - No retry: OutSystems does not retry a failed data action. The cache times are the library defaults, as the block
      had them before the domain.
    - No fetch when the network comes back, and the call runs when the browser is offline (networkMode 'always', as the
      memory cache queries of api/client/cache.ts): OutSystems does not fetch on reconnect, and an offline call fails
      with the communication message (App_Policies F2). */
export function usePendingPoliciesQuery(inputs: PendingPoliciesInputs, isAllSelected: () => boolean) {
  return useQuery({
    queryKey: policyKeys.pending(inputs),
    queryFn: () => fetchPendingPolicies(inputs, isAllSelected()),
    placeholderData: keepPreviousData,
    retry: false,
    refetchOnReconnect: false,
    networkMode: 'always',
  });
}

import { useQuery } from '@tanstack/react-query';
import { feedKeys } from './keys';
import { fetchFeedConfig } from './repository';
import type { FeedConfigInputs } from './types';

/** DataActionGetFeedConfig of Embedded_FeedCMS as a query, with the options of the block flow that it replaces:
    - It fetches when the caller mounts and again when an input changes (the inputs are the key).
    - `enabled` false: no call. The screens do not render the block when GetHasFeedEnabled is off.
    - No cache (staleTime 0, gcTime 0): each mount calls the server, as OutSystems does (call parity, plan v2 §5.4).
    - No retry and no refetch when the network comes back: the block fetched once.
    - A failed fetch logs "DataActionGetFeedConfig failed" (`meta.errorLog`, api/client/queryClient.ts), as the block
      did, and goes to the flow handler (the query-cache subscription; TST shows the App_Common message, item 2 D5). */
export function useFeedConfigQuery(inputs: FeedConfigInputs, enabled = true) {
  return useQuery({
    queryKey: feedKeys.config(inputs),
    queryFn: () => fetchFeedConfig(inputs),
    enabled,
    staleTime: 0,
    gcTime: 0,
    retry: false,
    refetchOnReconnect: false,
    meta: { errorLog: 'DataActionGetFeedConfig failed' },
  });
}

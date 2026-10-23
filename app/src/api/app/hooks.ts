import { useQuery, type UseQueryOptions } from '@tanstack/react-query';
import { appKeys } from './keys';
import { fetchPolicies } from './repository';
import type { Policies, PoliciesCallInputs } from './types';

/** The query options that a caller can set (for example `enabled`). The key, the query function and the cache times
    are fixed. */
export type AppQueryOptions<T> = Omit<UseQueryOptions<T>, 'queryKey' | 'queryFn' | 'staleTime' | 'gcTime'>;

/** No cache: each fetch calls the server, as OutSystems does, so the calls stay equal to the original (call parity,
    refactor plan v2 §5.4). */
const NO_CACHE = { staleTime: 0, gcTime: 0 } as const;

/* The server actions of the app start are not queries: the app start calls them in its order (platform/bootstrap),
   outside React. */

/** DataActionGetCacheInfo of CacheControl_Policies as a query. No caller yet: the block still keeps the policies in
    the memory cache. No cache and no retry by default, as for the other domains. */
export function usePoliciesQuery(inputs: PoliciesCallInputs, options: AppQueryOptions<Policies> = {}) {
  return useQuery({
    retry: false,
    ...options,
    queryKey: appKeys.policies(inputs),
    queryFn: () => fetchPolicies(inputs),
    ...NO_CACHE,
  });
}

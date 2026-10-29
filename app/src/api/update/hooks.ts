import { useQuery } from '@tanstack/react-query';
import { updateKeys } from './keys';
import { fetchFeedUpdates } from './repository';

/** DataActionFetchUpdates of FeedBlock_Updates as a query. The block fetches at its start every time (Home Q1 (a),
    user 2026-10-27), as useCommunityPopulationQuery of the same screen:
    - It fetches when the block mounts (staleTime 0, the library default).
    - No cache (gcTime 0): the items go when the block closes, so the next mount shows the loading rows until the
      answer. The view cache still restores a back navigation.
    - No retry and no refetch when the network comes back: OutSystems does neither. */
export function useFeedUpdatesQuery() {
  return useQuery({
    queryKey: updateKeys.feed(),
    queryFn: () => fetchFeedUpdates(),
    gcTime: 0,
    retry: false,
    refetchOnReconnect: false,
  });
}

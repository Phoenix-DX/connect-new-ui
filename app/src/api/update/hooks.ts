import { useQuery } from '@tanstack/react-query';
import { updateKeys } from './keys';
import { fetchFeedUpdates } from './repository';

/** DataActionFetchUpdates of FeedBlock_Updates as a query, with the options that the block had before the domain:
    - It fetches when the block mounts (staleTime 0, the library default).
    - The cache times are the library defaults: the items stay in the cache after the block closes, and the next mount
      shows them while it fetches again.
    - No retry: OutSystems does not retry a failed data action. */
export function useFeedUpdatesQuery() {
  return useQuery({
    queryKey: updateKeys.feed(),
    queryFn: () => fetchFeedUpdates(),
    retry: false,
  });
}

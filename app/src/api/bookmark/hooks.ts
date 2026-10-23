import { useQuery, type UseQueryOptions } from '@tanstack/react-query';
import { bookmarkKeys } from './keys';
import { fetchBookmarkGroup, fetchBookmarkGroupSummaries } from './repository';
import type {
  BookmarkGroupList,
  BookmarkGroupListCallInputs,
  BookmarkGroupSummaries,
  BookmarkSummariesVariables,
} from './types';

/** The query options that a caller can set (for example `enabled`). The key, the query function and the cache times
    are fixed. */
export type BookmarkQueryOptions<T> = Omit<UseQueryOptions<T>, 'queryKey' | 'queryFn' | 'staleTime' | 'gcTime'>;

/** No cache: each fetch calls the server, as OutSystems does, so the calls stay equal to the original (call parity,
    refactor plan v2 §5.4). */
const NO_CACHE = { staleTime: 0, gcTime: 0 } as const;

/* The two data actions of the bookmark blocks as queries. No caller yet: the blocks fetch on demand in their own flows
   (RefreshBookmarkData) and call the repository functions. The server actions (GetBookmarkById and the writes) are not
   queries: the client actions call them on a user action. */

/** DataActionGetAllBookmarksByGroup of ScreenBlock_BookmarkGroup as a query. No retry by default: OutSystems does not
    retry a failed data action. */
export function useBookmarkGroupQuery(
  inputs: BookmarkGroupListCallInputs,
  options: BookmarkQueryOptions<BookmarkGroupList> = {},
) {
  return useQuery({
    retry: false,
    ...options,
    queryKey: bookmarkKeys.group(inputs),
    queryFn: () => fetchBookmarkGroup(inputs),
    ...NO_CACHE,
  });
}

/** DataActionGetGroupSummaries of ScreenBlock_MyBookmarks as a query. No retry by default. */
export function useBookmarkGroupSummariesQuery(
  variables: BookmarkSummariesVariables,
  options: BookmarkQueryOptions<BookmarkGroupSummaries> = {},
) {
  return useQuery({
    retry: false,
    ...options,
    queryKey: bookmarkKeys.groupSummaries(variables),
    queryFn: () => fetchBookmarkGroupSummaries(variables),
    ...NO_CACHE,
  });
}

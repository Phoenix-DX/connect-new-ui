import { QueryCache, QueryClient, type Query } from '@tanstack/react-query';
import { log } from '@/platform/log/log';

/** A query that names a warning in `meta.errorLog` logs it with the error when its fetch fails. The render-only query
    hooks of the blocks that logged a failed data action (FeedBlock_CommunityPopulation, Embedded_FeedCMS) keep that
    log this way: `api/<domain>/` does not import `platform/` (rule 7). */
export function logQueryError(error: unknown, query: Pick<Query, 'meta'>): void {
  const message = query.meta?.errorLog;
  if (typeof message === 'string') log.warn(message, error);
}

/** The QueryClient of the app. main.tsx gives it to QueryClientProvider. The memory cache (cache.ts) keeps its entries
    in it too, so the flows and the app start, which read the cache outside React, use the same store as the hooks.
    No retry and no refetch on window focus: OutSystems does neither. */
export const queryClient = new QueryClient({
  queryCache: new QueryCache({ onError: logQueryError }),
  defaultOptions: { queries: { retry: false, refetchOnWindowFocus: false } },
});

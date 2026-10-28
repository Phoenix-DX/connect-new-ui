import { QueryCache, QueryClient, type Query } from '@tanstack/react-query';
import { log } from '@/platform/log/log';

/** What happens when a fetch of a query fails (the `meta` of a query). */
interface QueryMeta {
  /** A warning logged with the error: the block's own log of its failed data action (logQueryError). */
  errorLog?: string;
  /** 'screen' (the default): no flow awaits the fetch, so the error goes to the flow handler, as the runtime calls the
      handleError of the screen or block (platform/feedback/flowErrors.ts installQueryErrorsToFlowHandler).
      'caller': a flow awaits the fetch (refetch(), fetchQuery) and handles the error itself, as a Refresh inside an
      action with its own Handle Error. Item 2, migration/clarify/review/item2-solution.md §2.5. */
  errorFlow?: 'screen' | 'caller';
}

declare module '@tanstack/react-query' {
  interface Register {
    queryMeta: QueryMeta;
  }
}

/** A query that names a warning in `meta.errorLog` logs it with the error when its fetch fails. The render-only query
    hooks of the blocks that logged a failed data action (FeedBlock_CommunityPopulation, Embedded_FeedCMS) keep that
    log this way: `api/<domain>/` does not import `platform/` (rule 7). */
export function logQueryError(error: unknown, query: Pick<Query, 'meta'>): void {
  const message = query.meta?.errorLog;
  if (typeof message === 'string') log.warn(message, error);
}

/** A QueryClient with the options of the app: no retry and no refetch on window focus (OutSystems does neither), and
    the `errorLog` warning of a failed fetch. The flow-handler subscription is installed by its owner (main.tsx). */
export function createQueryClient(): QueryClient {
  return new QueryClient({
    queryCache: new QueryCache({ onError: logQueryError }),
    defaultOptions: { queries: { retry: false, refetchOnWindowFocus: false } },
  });
}

/** The QueryClient of the app. main.tsx gives it to QueryClientProvider. The memory cache (cache.ts) keeps its entries
    in it too, so the flows and the app start, which read the cache outside React, use the same store as the hooks. */
export const queryClient = createQueryClient();

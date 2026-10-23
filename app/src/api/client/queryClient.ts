import { QueryClient } from '@tanstack/react-query';

/** The QueryClient of the app. main.tsx gives it to QueryClientProvider. The memory cache (cache.ts) keeps its entries
    in it too, so the flows and the app start, which read the cache outside React, use the same store as the hooks.
    No retry and no refetch on window focus: OutSystems does neither. */
export const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: false, refetchOnWindowFocus: false } },
});

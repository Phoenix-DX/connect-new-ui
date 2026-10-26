import type { RequestHandler } from 'msw';

/* No handler of its own: CacheControl_Policies/DataActionGetCacheInfo is answered by the shared recorded handler
   (shell/mocks.ts, fixture UBTConnect_Utils/CacheControl_Policies/DataActionGetCacheInfo) and the app-start calls by
   the shell mocks. Scenarios: `real` (policies fetched: no skeleton), `loading` (never answers: the rows stay in the
   skeleton) and `error` (the call fails: the skeleton stays, as the offline capture). */
export const handlers: RequestHandler[] = [];

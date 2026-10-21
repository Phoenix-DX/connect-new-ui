import type { HttpHandler } from 'msw';

/* No handler of its own: every call of the PINUnlock capture is mocked by the shell (app start) or the shared
   CacheControl_Policies block (DataActionGetCacheInfo). */
export const handlers: HttpHandler[] = [];

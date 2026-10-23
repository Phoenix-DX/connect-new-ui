import type { RequestHandler } from 'msw';

/* Every call of the Login capture is mocked by the app start (src/platform/bootstrap/mocks.ts): SynchAppContext,
   Sync_Info_GetMain, Get_RuntimeVersion. The route adds none. */
export const handlers: RequestHandler[] = [];

import type { RequestHandler } from 'msw';

/* Every call of the Splash capture is mocked by the shell (src/shell/mocks.ts): Sync_Info_GetMain and the map calls of
   the app start. The route adds none. */
export const handlers: RequestHandler[] = [];

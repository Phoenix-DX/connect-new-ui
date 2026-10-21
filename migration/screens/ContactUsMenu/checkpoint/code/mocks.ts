import type { RequestHandler } from 'msw';

/* ContactUsMenu calls no action of its own (ContactUsMenu.mvc.js:341). Every call of its capture is the app start,
   mocked by the shell (src/shell/mocks.ts). The route adds none; the `loading` and `error` scenarios render the same
   client-built menu, as the loading and offline captures show. */
export const handlers: RequestHandler[] = [];

import type { RequestHandler } from 'msw';

/* CommunityBusinessDetails_CoomingSoon calls no action of its own (mvc.js:248). Every call of its capture is the app
   start, mocked by the shell (src/shell/mocks.ts). The route adds none; `loading` and `error` scenarios render the
   same static markup, as the loading and offline captures show. */
export const handlers: RequestHandler[] = [];

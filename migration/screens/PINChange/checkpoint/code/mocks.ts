import type { HttpHandler } from 'msw';

/* No handler of its own: every call of the PINChange capture is mocked by the shell (app start). */
export const handlers: HttpHandler[] = [];

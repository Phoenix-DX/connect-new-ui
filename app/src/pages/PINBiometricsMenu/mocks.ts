import type { HttpHandler } from 'msw';

/* No handler of its own: every call of the PINBiometricsMenu capture is mocked by the shell (app start). */
export const handlers: HttpHandler[] = [];

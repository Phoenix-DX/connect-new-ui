import type { RequestHandler } from 'msw';

// Every mocks.ts under screens/, shell/ and shared/ exports `handlers`.
const modules = import.meta.glob<{ handlers?: RequestHandler[] }>(
  ['../screens/*/mocks.ts', '../shell/**/mocks.ts', '../shared/**/mocks.ts'],
  { eager: true },
);
export const handlers: RequestHandler[] = Object.values(modules).flatMap((m) => m.handlers ?? []);

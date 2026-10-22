import type { RequestHandler } from 'msw';

type MockModules = Record<string, { handlers?: RequestHandler[] }>;

/**
 * Handler precedence matters: MSW answers with the first handler that matches a request.
 * Screen mocks must come first, then shared blocks, then the app-start mocks of platform/bootstrap
 * (they are the fallback). Before P1-2 a single glob returned the modules in path order
 * (screens < shared < shell); renaming shell/ to platform/ moved the fallback to the front.
 * One glob per folder keeps the order explicit.
 */
const screens: MockModules = import.meta.glob('../screens/*/mocks.ts', { eager: true });
const shared: MockModules = import.meta.glob('../shared/**/mocks.ts', { eager: true });
const platform: MockModules = import.meta.glob('../platform/**/mocks.ts', { eager: true });

/** Joins the handlers of the module groups in the given order. */
export function collectHandlers(...groups: MockModules[]): RequestHandler[] {
  return groups.flatMap((group) => Object.values(group).flatMap((m) => m.handlers ?? []));
}

export const handlers: RequestHandler[] = collectHandlers(screens, shared, platform);

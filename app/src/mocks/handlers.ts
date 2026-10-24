import type { RequestHandler } from 'msw';

type MockModules = Record<string, { handlers?: RequestHandler[] }>;

/**
 * Handler precedence matters: MSW answers with the first handler that matches a request.
 * Page mocks must come first, then the containers (they serve 2 or more pages), then shared blocks, then
 * the app-start mocks of platform/bootstrap (they are the fallback). Before P1-2 a single glob returned the modules in
 * path order (screens < shared < shell); renaming shell/ to platform/ moved the fallback to the front.
 * One glob per folder keeps the order explicit.
 */
const pageMocks: MockModules = import.meta.glob('../pages/*/mocks.ts', { eager: true });
const containers: MockModules = import.meta.glob('../containers/*/mocks.ts', { eager: true });
const shared: MockModules = import.meta.glob('../shared/**/mocks.ts', { eager: true });
const components: MockModules = import.meta.glob('../components/**/mocks.ts', { eager: true });
const platform: MockModules = import.meta.glob('../platform/**/mocks.ts', { eager: true });

/** The page mocks, ordered by folder name as the single screens glob was. */
const folderOf = (path: string): string => path.split('/')[2] ?? path;
const screens: MockModules = Object.fromEntries(
  Object.entries(pageMocks).sort(([a], [b]) => (folderOf(a) < folderOf(b) ? -1 : 1)),
);

/** Joins the handlers of the module groups in the given order. */
export function collectHandlers(...groups: MockModules[]): RequestHandler[] {
  return groups.flatMap((group) => Object.values(group).flatMap((m) => m.handlers ?? []));
}

export const handlers: RequestHandler[] = collectHandlers(screens, containers, shared, components, platform);

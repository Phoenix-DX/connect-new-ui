import type { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { QueryClientProvider, type QueryClient } from '@tanstack/react-query';
import { createQueryClient } from '@/api/client/queryClient';
import { installQueryErrorsToFlowHandler } from '@/platform/feedback/flowErrors';
import { createMemoryRouter, Outlet, RouterProvider } from 'react-router';
import { resetBackQueue } from './backQueue';
import { resetHistoryStack } from './historyStack';
import { resetNavigationGate } from './navigationGate';
import { NavigationHost } from './NavigationHost';
import { resetReplaceOnUpcomingNavigation, type NavigationRedirect, type ScreenCheck } from './osNavigate';
import { clearPreloadObject } from './preload';
import { ScreenFrame } from './ScreenFrame';
import { resetTransitionEvents } from './transitionEvents';
import { resetViewCache } from './viewCache';

/* Test helpers: the app's frame (NavigationHost + ScreenFrame around each route) on a memory router. */

const testClients = new Set<{ client: QueryClient; uninstall: () => void }>();

/** A QueryClient as the app has it: the options of createQueryClient and the flow-handler subscription of main.tsx
    (a failed query fetch goes to the flow handler, platform/feedback/flowErrors.ts). */
export function testQueryClient(): QueryClient {
  const client = createQueryClient();
  testClients.add({ client, uninstall: installQueryErrorsToFlowHandler(client) });
  return client;
}

/** After each test (test/setup.ts): the subscriptions go and the queries are dropped, so a late answer of one test
    does not raise a message in the next one. */
export function disposeTestQueryClients(): void {
  for (const { client, uninstall } of testClients) {
    uninstall();
    client.clear();
  }
  testClients.clear();
}

export function resetNavigation(): void {
  resetBackQueue();
  resetHistoryStack();
  resetNavigationGate();
  resetReplaceOnUpcomingNavigation();
  resetViewCache();
  clearPreloadObject();
  resetTransitionEvents();
}

export function renderRoutes(
  routes: Record<string, ReactNode>,
  initialPath: string,
  queryClient = testQueryClient(),
  redirect?: NavigationRedirect,
  isScreen?: ScreenCheck,
) {
  const router = createMemoryRouter(
    [
      {
        path: '/',
        element: (
          <>
            <NavigationHost redirect={redirect} isScreen={isScreen} />
            <Outlet />
          </>
        ),
        children: Object.entries(routes).map(([path, element]) => ({
          path,
          element: <ScreenFrame>{element}</ScreenFrame>,
        })),
      },
    ],
    { initialEntries: [initialPath] },
  );
  const view = render(
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>,
  );
  const at = () => router.state.location.pathname + router.state.location.search;
  return { router, queryClient, at, ...view };
}

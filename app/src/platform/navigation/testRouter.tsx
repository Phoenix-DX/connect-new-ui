import type { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createMemoryRouter, Outlet, RouterProvider } from 'react-router';
import { resetBackQueue } from './backQueue';
import { resetHistoryStack } from './historyStack';
import { resetNavigationGate } from './navigationGate';
import { NavigationHost } from './NavigationHost';
import { resetReplaceOnUpcomingNavigation, type NavigationRedirect } from './osNavigate';
import { clearPreloadObject } from './preload';
import { ScreenFrame } from './ScreenFrame';
import { resetTransitionEvents } from './transitionEvents';
import { resetViewCache } from './viewCache';

/* Test helpers: the app's frame (NavigationHost + ScreenFrame around each route) on a memory router. */

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
  queryClient = new QueryClient(),
  redirect?: NavigationRedirect,
) {
  const router = createMemoryRouter(
    [
      {
        path: '/',
        element: (
          <>
            <NavigationHost redirect={redirect} />
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

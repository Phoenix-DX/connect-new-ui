import { Suspense } from 'react';
import { createBrowserRouter, Navigate, type RouteObject } from 'react-router';
import { AppFrame } from './AppFrame';
import { NotMigrated } from './NotMigrated';
import { RouteError } from '@/app/RouteError';
import { ScreenFrame } from '@/platform/navigation';
import { APP, ROUTES, HOME } from './routes';
import { lazyScreen } from './screens';

// A screen is picked up automatically when src/screens/<Screen>/index.tsx exists (default export).
// ScreenFrame (preload lifetime, view-cache scroll restore) sits inside the Suspense boundary: it runs once the screen
// rendered. Only the page's first screen can suspend: later ones are loaded before their transition (screens.ts).
const children: RouteObject[] = ROUTES.map((r) => {
  const Screen = lazyScreen(r.screen);
  return {
    path: r.path,
    element: Screen ? (
      <Suspense fallback={null}>
        <ScreenFrame>
          <Screen />
        </ScreenFrame>
      </Suspense>
    ) : (
      <ScreenFrame>
        <NotMigrated route={r} />
      </ScreenFrame>
    ),
  };
});

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppFrame />,
    errorElement: <RouteError />,
    children: [
      { index: true, element: <Navigate to={HOME} replace /> },
      ...children,
      // the module root shows the default screen (HomeFeed) and keeps its URL, as the original (app-shell.spec.md 12a U1)
      { path: `/${APP}`, element: children.find((c) => c.path === HOME)?.element },
      { path: '*', element: <NotMigrated route={null} /> },
    ],
  },
]);

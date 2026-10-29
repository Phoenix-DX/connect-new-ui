import { Suspense } from 'react';
import { createBrowserRouter, Navigate, type RouteObject } from 'react-router';
import { AppFrame } from './AppFrame';
import { NotMigrated } from './NotMigrated';
import { UnknownPath } from './UnknownPath';
import { RouteError } from '@/app/RouteError';
import { RenderErrorBoundary } from '@/platform/feedback/RenderErrorBoundary';
import { ScreenFrame } from '@/platform/navigation';
import { APP, ROUTES, HOME } from './routes';
import { lazyScreen } from './screens';

// A screen is picked up automatically when src/pages/<Screen>/<Screen>Page.tsx exists (default export).
// ScreenFrame (preload lifetime, view-cache scroll restore, document title) sits inside the Suspense boundary: it runs
// once the screen rendered. Only the page's first screen can suspend: later ones are loaded before their transition
// (screens.ts). The route title is the TST View.title of the screen (the screen name), which the runtime writes to
// document.title (OutSystemsReactView.js:2008); a path that shows no screen ('*') keeps the document title.
const children: RouteObject[] = ROUTES.map((r) => {
  const Screen = lazyScreen(r.screen);
  return {
    path: r.path,
    // one render error boundary per screen: ScreenTransitionGroup renders the element once per history entry, so each
    // entry has its own instance, as each TST screen has its own View (item9-solution.md §2.3, T1, T2)
    element: Screen ? (
      <RenderErrorBoundary name={r.screen}>
        <Suspense fallback={null}>
          <ScreenFrame title={r.title}>
            <Screen />
          </ScreenFrame>
        </Suspense>
      </RenderErrorBoundary>
    ) : (
      <ScreenFrame title={r.title}>
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
      // a path that no screen has: a navigation to it is a full page load (goTo) and the server answers 404 (item 9 D3,
      // D4); when the app starts on it all the same, it renders nothing (UnknownPath, N5)
      { path: '*', element: <UnknownPath /> },
    ],
  },
]);

import { useEffect, useLayoutEffect, type ReactNode } from 'react';
import { useLocation } from 'react-router';
import { clearPreloadObject } from './preload';
import { onScreenRendered } from './transitionEvents';
import { restoreScroll } from './viewCache';

/* Wraps every route screen (router.tsx), inside its Suspense boundary so it runs only once the screen is rendered.
   Renders no markup: the screen's `.active-screen.screen-container` is its ScreenTransitionGroup container, and
   `useLocation()` here is that entry's own location (frozen while the screen leaves). After the screen has mounted the
   preload object is deleted, as BaseWebScreen.componentDidMount does (NH:1220-1229); a screen restored by a back
   navigation gets its scroll offsets back before the first paint. The page's first screen raises NavigationHandler's
   first-screen transition events here (transitionEvents.ts, NH:1461-1484); every later screen raises its start/end
   pair from its container, at the steps of the screen transition (ScreenTransitionGroup.tsx). The screen's title becomes
   the document title when the screen has mounted, as OutSystemsReactView.componentDidMount does (`document.title =
   this.title`; View.title is the screen name); the leaving screen keeps its frozen entry and does not write it again
   (componentDidUpdate writes it only while the screen's controller is active). */
export function ScreenFrame({ children, title }: { children: ReactNode; title?: string }): ReactNode {
  const { key } = useLocation();

  useLayoutEffect(() => {
    restoreScroll(key);
  }, [key]);

  useLayoutEffect(() => {
    if (title !== undefined) document.title = title;
  }, [key, title]);

  // keyed by entry: React keeps this component (same position) when the route changes
  useEffect(() => {
    clearPreloadObject();
  }, [key]);

  useEffect(() => {
    onScreenRendered(key);
  }, [key]);

  return children;
}

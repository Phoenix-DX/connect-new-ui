import type { QueryClient } from '@tanstack/react-query';
import { NavigationType, type BlockerFunction, type Location } from 'react-router';
import { createBackEvent, runBackHandlers } from './backQueue';
import { isBackTo, isInitialEntry } from './historyStack';
import { enterView, saveView } from './viewCache';

/* Navigation.onBeforeNavigate of NavigationEventsJS (NH:902-944; p:migration/screens/BookmarksByGroup/analysis/sources/
   pretty/NavigationHandler.controller.js), run by React Router's blocker before every navigation. Unless
   AllowUpcomingNavigation was called (skipEvents, NH:915-916): a back navigation first goes through the back-navigation
   queue (`dx-before-back-navigation`, NH:918-923), then every navigation dispatches the cancelable
   `dx-before-navigation` window event (dispatchBeforeNavigation, NH:858-878; NH:925-928) that the NavigationHandler
   blocks listen to. When nothing prevents it, the non-cancelable `dx-navigation` follows (dispatchNavigation,
   NH:881-893; NH:931-940), the screen being left is saved in the view cache and a restored entry gets its data back. */

let allowUpcoming = false;

/** AllowUpcomingNavigation (NH:1026-1029): the next navigation runs without the handlers. */
export function allowUpcomingNavigation(): void {
  allowUpcoming = true;
}

export interface GateDeps {
  queryClient: QueryClient | undefined;
  goBack: () => void;
  /** Navigation.navigateTo(pathname + search, state.transition, …, replace) of a resumed forward navigation. */
  navigateTo: (path: string, replace: boolean, state: unknown) => void;
}

/** dispatchBeforeNavigation (NH:858-878): cancelable, detail location / replace / resume. resume = AllowUpcomingNavigation,
    then history.back() for a back navigation, else navigateTo(location, replace). The listeners run synchronously
    (withSynchronousBlockEvents), so defaultPrevented is read right after the dispatch. */
function dispatchBeforeNavigation(location: Location, isBackNavigation: boolean, isReplace: boolean, deps: GateDeps) {
  const navigationEvent = new CustomEvent('dx-before-navigation', {
    cancelable: true,
    detail: {
      location,
      replace: isReplace,
      resume() {
        allowUpcomingNavigation();
        if (isBackNavigation) deps.goBack();
        else deps.navigateTo(location.pathname + location.search, isReplace, location.state);
      },
    },
  });
  window.dispatchEvent(navigationEvent);
  return navigationEvent;
}

/** dispatchNavigation (NH:881-893): not cancelable, detail location. */
function dispatchNavigation(location: Location): void {
  window.dispatchEvent(new CustomEvent('dx-navigation', { cancelable: false, detail: { location } }));
}

/** True blocks the navigation (React Router then restores the URL). */
export function shouldBlockNavigation(args: Parameters<BlockerFunction>[0], deps: GateDeps): boolean {
  const { currentLocation, nextLocation, historyAction } = args;
  const isBack = historyAction === NavigationType.Pop && isBackTo(nextLocation.key);

  const isReplace = historyAction === NavigationType.Replace;
  if (allowUpcoming) {
    allowUpcoming = false;
  } else {
    if (isBack) {
      const event = createBackEvent(nextLocation, isInitialEntry(nextLocation.key), () => {
        allowUpcomingNavigation();
        deps.goBack();
      });
      if (runBackHandlers(event)) return true;
    }
    if (dispatchBeforeNavigation(nextLocation, isBack, isReplace, deps).defaultPrevented) return true;
  }

  if (!isReplace) saveView(currentLocation.key, deps.queryClient);
  enterView(nextLocation.key, isBack, deps.queryClient);
  dispatchNavigation(nextLocation);
  return false;
}

/** Test helper. */
export function resetNavigationGate(): void {
  allowUpcoming = false;
}

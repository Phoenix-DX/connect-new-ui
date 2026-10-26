import type { QueryClient } from '@tanstack/react-query';
import { NavigationType, type BlockerFunction, type Location } from 'react-router';
import { createBackEvent, runBackHandlers } from './backQueue';
import { isBackTo, isInitialEntry } from './historyStack';
import { enterView, saveView } from './viewCache';

/* Navigation.onBeforeNavigate of NavigationEventsJS (NH:902-944; p:migration/screens/BookmarksByGroup/analysis/sources/
   pretty/NavigationHandler.controller.js), run by React Router's blocker before every navigation. A history navigation
   is blocked while the app navigates away from the current screen (NH:903-914). Unless AllowUpcomingNavigation was
   called (skipEvents, NH:915-916): a back navigation first goes through the back-navigation queue
   (`dx-before-back-navigation`, NH:918-923), then every navigation dispatches the cancelable `dx-before-navigation`
   window event (dispatchBeforeNavigation, NH:858-878; NH:925-928) that the NavigationHandler blocks listen to. When
   nothing prevents it, the screen being left is saved in the view cache and kept as `navigatingAwayFrom`, a restored
   entry gets its data back, and the non-cancelable `dx-navigation` follows (dispatchNavigation, NH:881-893;
   NH:931-940). */

let allowUpcoming = false;

/* navigatingAwayFromScreen (NH:803-804): the screen container that the last allowed navigation leaves (NH:933-935).
   The original forgets it when the node leaves its parent (screenMutationObserver, NH:813-828); here it counts while
   the node is in the document. ScreenTransitionGroup removes the node once the screen has left. */
let navigatingAwayFrom: Element | null = null;

/* Gate calls in progress. With the memory router of the tests, a history navigation that a handler starts (a back
   handler's NavigateBack) reaches the gate at once, before the navigation that runs the handler is allowed. A browser
   delivers it later (popstate), while `navigatingAwayFrom` is still in the document. */
let running = 0;

/** AllowUpcomingNavigation (NH:1026-1029): the next navigation runs without the handlers. */
export function allowUpcomingNavigation(): void {
  allowUpcoming = true;
}

/** The screen containers of the app frame (AppFrame #transitionContainer, ScreenTransitionGroup); the original reads
    `#reactContainer > div > .screen-container`. */
const TRANSITION_CONTAINER = 'transitionContainer';

/** window.dx.Util.getActiveScreen (NH:1250-1258): the last screen container, or null. While a screen transition runs
    the screen being left is the last one (the new screen comes before it). */
function getActiveScreen(): Element | null {
  const screens = document.querySelectorAll(`#${TRANSITION_CONTAINER} > .screen-container`);
  return screens[screens.length - 1] ?? null;
}

/** isNavigatingAway (NH:904): the screen being left is still in the document, or there is no active screen. Outside
    the app frame (no #transitionContainer: routes rendered without it in tests) there is no screen container. */
function isNavigatingAway(): boolean {
  if (navigatingAwayFrom?.isConnected === false) navigatingAwayFrom = null;
  if (navigatingAwayFrom !== null) return true;
  return document.getElementById(TRANSITION_CONTAINER) !== null && getActiveScreen() === null;
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

/** True blocks the navigation (React Router then restores the URL without calling the gate again). */
export function shouldBlockNavigation(args: Parameters<BlockerFunction>[0], deps: GateDeps): boolean {
  // NH:903-914: no history navigation while a screen is being left (time for the OnInitialize of the new screen and
  // the OnDestroy of the old one) or while no screen is shown, nor while the gate runs; the handlers do not run
  if (args.historyAction === NavigationType.Pop && (running > 0 || isNavigatingAway())) return true;
  running += 1;
  try {
    return runGate(args, deps);
  } finally {
    running -= 1;
  }
}

function runGate(args: Parameters<BlockerFunction>[0], deps: GateDeps): boolean {
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
  navigatingAwayFrom = getActiveScreen();
  dispatchNavigation(nextLocation);
  return false;
}

/** Test helper. */
export function resetNavigationGate(): void {
  allowUpcoming = false;
  navigatingAwayFrom = null;
  running = 0;
}

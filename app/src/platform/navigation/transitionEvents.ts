/* NavigationHandler OnApplicationReady_NavigationHandler.TransitionEventsJS (NavigationHandler.controller.js:1288-1490,
   copy in migration/screens/HomeFeed/analysis/sources/raw/): the window events `dx-navigation-transition-start` and
   `dx-navigation-transition-end` that blocks listen to (OnApplicationReady_BottomBarSlider in UBTConnectLibrary,
   LockOrientationWithNavigationTransition in UBTConnect). The original patches react-transition-group's
   Transition.safeSetState around the screen containers of the runtime's TransitionGroup. The clone renders the same
   group (ScreenTransitionGroup.tsx, F18): its screen containers raise the navigation events at the same steps
   (screen enters: start; screen has left: end), and ScreenFrame raises the first screen's pair. */

export interface NavigationTransitionDetail {
  from: Element | ChildNode | null;
  to: Element | ChildNode | null;
  duration: number;
}

/* dispatchTransitionStart / dispatchTransitionEnd (:1299-1319): a non-cancelable CustomEvent on window. The original
   runs the dispatch inside dx.Util.withSynchronousBlockEvents (:1266-1283, Promise.resolve made synchronous so that
   OutSystems block events fire at once); the clone's listeners are plain synchronous functions. */
export function dispatchTransitionStart(detail: NavigationTransitionDetail): void {
  window.dispatchEvent(new CustomEvent('dx-navigation-transition-start', { cancelable: false, detail }));
}

export function dispatchTransitionEnd(detail: NavigationTransitionDetail): void {
  window.dispatchEvent(new CustomEvent('dx-navigation-transition-end', { cancelable: false, detail }));
}

/** getComputedTransitionDuration (:1321-1326): `--dx-screen-transition-duration` of the element in ms ("…ms" or
    "…s"; another unit 0); undefined when the property is not set. UBTConnectLibrary.css sets 300ms on :root. */
export function getComputedTransitionDuration(el: Element): number | undefined {
  const duration = window.getComputedStyle(el).getPropertyValue('--dx-screen-transition-duration').trim();
  if (duration) {
    return duration.endsWith('ms')
      ? Number.parseFloat(duration)
      : duration.endsWith('s')
        ? Number.parseFloat(duration) * 1000
        : 0;
  }
  return undefined;
}

/** History entry of the first screen that raised the events (null: none yet on this page). */
let firstScreenKey: string | null = null;

/** ScreenFrame, after a screen has mounted (entry `key`): the first screen of the page raises the first-screen pair
    once (React StrictMode re-runs effects); later screens raise theirs from their container (ScreenTransitionGroup). */
export function onScreenRendered(key: string): void {
  if (firstScreenKey !== null) return;
  firstScreenKey = key;
  dispatchFirstTransition();
}

/**
 * The first screen (:1461-1484): the original intercepts the runtime Root's next render once and, in a microtask after
 * it, dispatches start then end with `{ from: null, to: #transitionContainer.firstChild, duration: 0 }`.
 */
function dispatchFirstTransition(): void {
  void Promise.resolve().then(() => {
    const transitionContainer = document.getElementById('transitionContainer');
    // The original reads `transitionContainer.firstChild` without a check (:1469-1470): no container, no event.
    if (!transitionContainer) return;
    const detail = { from: null, to: transitionContainer.firstChild, duration: 0 };
    dispatchTransitionStart(detail);
    dispatchTransitionEnd(detail);
  });
}

/* The runtime's own EventType.TransitionEnd (not a DOM event): Root.onTransitionEnded dispatches it in a setTimeout
   when a leaving screen has exited (OutSystemsReactView.js Root, CSSTransition onExited); BaseWebScreen.loadResources
   listens once to remove the stylesheets the new screen does not use (CSSHelper triggerRemoveStyles). */
const transitionEndListeners = new Set<() => void>();

/** Listens once to the runtime TransitionEnd; returns the unsubscribe. */
export function onceScreenTransitionEnd(listener: () => void): () => void {
  const once = () => {
    transitionEndListeners.delete(once);
    listener();
  };
  transitionEndListeners.add(once);
  return () => {
    transitionEndListeners.delete(once);
  };
}

/** Root.onTransitionEnded: `setTimeout(() => EventDispatcher.dispatch(TransitionEnd))`. */
export function notifyScreenTransitionEnd(): void {
  setTimeout(() => {
    for (const listener of [...transitionEndListeners]) listener();
  });
}

/** Tests: a new page load. */
export function resetTransitionEvents(): void {
  firstScreenKey = null;
  transitionEndListeners.clear();
}

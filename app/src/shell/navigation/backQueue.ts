import type { Location } from 'react-router';

/* window.dx.Navigation.BeforeBackNavigation: the back-navigation queue of LayoutRuntime_Top
   (HF p:NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top.mvc.js:303-376). Handlers are kept by
   descending priority (a new one goes after those of the same priority) and run one after another until one
   prevents the navigation. */

/** Priorities of the original (app-shell.spec.md section 9 "Back navigation"). */
export const BACK_PRIORITY = {
  /** LockScreenBackNavigationPriority (NH:664-705); also used by PreventBackNavigation (PINUnlock p:…PreventBackNavigation.mvc.js:133-135) */
  lockScreen: 100000,
  /** ModalBackNavigationPriority (NH:707-748) */
  modal: 10000,
  /** DrawerBackNavigationPriority (NH:360-401) */
  drawer: 1000,
  /** ExitConfirmationDialog's BackNavigationHandler (p:NavigationHandler.ConfirmationDialogs.ExitConfirmationDialog.mvc.js:320-322) */
  exitDialog: -1,
  /** CommonUI_InsideLayout's BackNavigationHandler (CUI:348) */
  commonUi: -10000,
} as const;

/** detail of the `dx-before-back-navigation` event (NH:834-855). */
export interface BackNavigationEvent {
  /** the history entry the back navigation goes to */
  readonly location: Location;
  /** the entry is the first one of the tab (NH:845-847) */
  isInitialLocation(): boolean;
  preventDefault(): void;
  readonly defaultPrevented: boolean;
  /** goes back after all, without running the handlers again (NH:839-844) */
  resume(): void;
}

export type BackHandler = (event: BackNavigationEvent) => void;

interface QueueItem {
  handler: BackHandler;
  priority: number;
}

const queue: QueueItem[] = [];

/** BeforeBackNavigation.add / .remove: returns the remove function. */
export function addBackHandler(handler: BackHandler, priority: number): () => void {
  const item: QueueItem = { handler, priority };
  const at = queue.findIndex((other) => other.priority < priority);
  if (at === -1) queue.push(item);
  else queue.splice(at, 0, item);
  return () => {
    const index = queue.indexOf(item);
    if (index !== -1) queue.splice(index, 1);
  };
}

export function createBackEvent(location: Location, isInitial: boolean, resume: () => void): BackNavigationEvent {
  let prevented = false;
  return {
    location,
    isInitialLocation: () => isInitial,
    preventDefault: () => {
      prevented = true;
    },
    get defaultPrevented() {
      return prevented;
    },
    resume,
  };
}

/** Runs the handlers in priority order until one prevents; true when the back navigation was prevented. */
export function runBackHandlers(event: BackNavigationEvent): boolean {
  for (const item of [...queue]) {
    if (event.defaultPrevented) break;
    item.handler(event);
  }
  return event.defaultPrevented;
}

/** Test helper: empties the queue. */
export function resetBackQueue(): void {
  queue.length = 0;
}

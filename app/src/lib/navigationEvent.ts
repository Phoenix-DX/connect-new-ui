/* NavigationHandler client actions on a NavigationEvent, ported 1:1
   (p:migration/screens/HomeFeed/analysis/sources/pretty/NavigationHandler.controller.js, "NH"). A NavigationEvent is
   the `dx-before-navigation` CustomEvent of NavigationEventsJS (NH:858-877): cancelable, detail `location`, `replace`
   and `resume()`. */

export interface NavigationEventDetail {
  location?: unknown;
  replace?: boolean;
  /** Runs the prevented navigation again, without the navigation handlers (NH:864-872). */
  resume: () => void;
}

/** NavigationEvent (Object): the `dx-before-navigation` event given to the Navigation event of NavigationHandler. */
export type NavigationEvent = Event & { detail?: Partial<NavigationEventDetail> | null };

/** PreventNavigation, PreventDefaultJS (NH:1543-1548): stopPropagation + preventDefault. */
export function preventNavigation(navigationEvent: Event): void {
  navigationEvent.stopPropagation();
  navigationEvent.preventDefault();
}

/** WasNavigationPrevented, GetDefaultPreventedJS (NH:1972-1975): WasPrevented = NavigationEvent.defaultPrevented. */
export function wasNavigationPrevented(navigationEvent: Event): boolean {
  return navigationEvent.defaultPrevented;
}

/** ResumeNavigation, ResumeJS (NH:1762-1766): NavigationEvent.detail.resume(). */
export function resumeNavigation(navigationEvent: NavigationEvent): void {
  navigationEvent.detail?.resume?.();
}

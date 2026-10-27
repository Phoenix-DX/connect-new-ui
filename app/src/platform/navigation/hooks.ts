import { useCallback, useEffect, useLayoutEffect, useRef, useState, type Dispatch, type SetStateAction } from 'react';
import { useLocation } from 'react-router';
import { addBackHandler, BACK_PRIORITY, type BackHandler, type BackNavigationEvent } from './backQueue';
import { registerViewState, restoredView } from './viewCache';

/**
 * NavigationHandler BackNavigationHandler block: `handler` joins the back-navigation queue at `priority` while the
 * component is mounted and `enabled` (added on ready, removed on destroy: BackNavigationHandler.mvc.js:387-392).
 * Call `event.preventDefault()` to stop the back navigation and the handlers of lower priority.
 */
export function useBackHandler(priority: number, handler: BackHandler, enabled = true): void {
  const latest = useRef(handler);
  useLayoutEffect(() => {
    latest.current = handler;
  });
  useEffect(() => {
    if (!enabled) return undefined;
    return addBackHandler((event) => {
      latest.current(event);
    }, priority);
  }, [priority, enabled]);
}

/**
 * NavigationHandler PreventBackNavigation block: while `enabled`, every back navigation is prevented at the lock-screen
 * priority and `onPrevented` runs (its BackNavigationPrevented event).
 */
export function usePreventBackNavigation(enabled: boolean, onPrevented?: (event: BackNavigationEvent) => void): void {
  useBackHandler(
    BACK_PRIORITY.lockScreen,
    (event) => {
      event.preventDefault();
      onPrevented?.(event);
    },
    enabled,
  );
}

/** `View.wasCurrentViewRestoredFromCache()`: this screen was shown again by a back navigation from the view cache. */
export function useWasRestoredFromCache(): boolean {
  const { key } = useLocation();
  return restoredView(key) !== null;
}

/**
 * A screen or block variable that the view cache brings back with the screen (CUI:515-529: on a restored view the
 * variable keeps its cached value). `name` must be unique within the screen.
 */
export function useViewState<T>(name: string, initial: T): [T, Dispatch<SetStateAction<T>>] {
  const { key } = useLocation();
  const [value, setValue] = useState<T>(() => {
    const state = restoredView(key)?.state;
    return state?.has(name) ? (state.get(name) as T) : initial;
  });
  const latest = useRef(value);
  // The setter updates `latest` at once (ScreenModel_Flush before a navigation: the view cache saves the newest value
  // when the screen is left in the same tick, before React renders it), and the render keeps it in step.
  const set = useCallback((action: SetStateAction<T>) => {
    latest.current = typeof action === 'function' ? (action as (prev: T) => T)(latest.current) : action;
    setValue(latest.current);
  }, []);
  useLayoutEffect(() => {
    latest.current = value;
  });
  useEffect(() => registerViewState(name, () => latest.current), [name]);
  return [value, set];
}

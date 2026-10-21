import { createElement, use, type ComponentType, type ReactNode } from 'react';
import type { Location } from 'react-router';
import { screenOf } from '../shell/paths';

/* Screen code, split per screen (src/screens/<Screen>/index.tsx, default export). The runtime's router loads a screen
   before the location changes (OutSystemsReactView.js Router: createHistory with the ScreenLoader; Root's first
   render waits for `screenLoader.load`), so a screen transition never starts on an empty container.
   - First screen of the page: `lazyScreen` suspends (router.tsx Suspense, fallback null) until its code is loaded.
   - Later navigations: ScreenTransitionGroup awaits `prepareScreen` before the transition, so the screen renders at
     once (no Suspense fallback inside the entering container). */

const screenModules = import.meta.glob<{ default: ComponentType }>('../screens/*/index.tsx');

interface LoadableScreen {
  component: ComponentType | null;
  promise: Promise<ComponentType> | null;
  load: () => Promise<ComponentType>;
  Screen: ComponentType;
}

const screens = new Map<string, LoadableScreen>();

function loadable(loader: () => Promise<{ default: ComponentType }>): LoadableScreen {
  const entry: LoadableScreen = {
    component: null,
    promise: null,
    load: () =>
      (entry.promise ??= loader().then((m) => {
        entry.component = m.default;
        return m.default;
      })),
    // `use` only while the code is loading (first screen of the page): the loaded component renders directly
    Screen: (): ReactNode => createElement(entry.component ?? use(entry.load())),
  };
  return entry;
}

/** The component of a screen folder (lazy), or null when the screen is not migrated yet. */
export function lazyScreen(screen: string): ComponentType | null {
  let entry = screens.get(screen);
  if (!entry) {
    const loader = screenModules[`../screens/${screen}/index.tsx`];
    if (!loader) return null;
    entry = loadable(loader);
    screens.set(screen, entry);
  }
  return entry.Screen;
}

/** Resolves once the screen `location` shows can render at once; null when it already can (or shows no screen). */
export function prepareScreen(location: Pick<Location, 'pathname'>): Promise<void> | null {
  const screen = screenOf(location.pathname);
  const entry = screen === null ? undefined : screens.get(screen);
  if (!entry || entry.component) return null;
  return entry.load().then(
    () => undefined,
    () => undefined, // a failed load renders through Suspense/the route error as before
  );
}

/** The location shows an app screen (not the `/` redirect or an unknown path). */
export const showsScreen = (location: Pick<Location, 'pathname'>): boolean => screenOf(location.pathname) !== null;

import { createElement, use, type ComponentType, type ReactNode } from 'react';
import type { Location } from 'react-router';
import { showErrorPage } from '@/platform/feedback/errorPage';
import { screenOf } from '@/platform/navigation/paths';

/* Screen code, split per screen (src/pages/<Screen>/<Screen>Page.tsx; default export). The runtime's router loads a screen
   before the location changes (OutSystemsReactView.js Router: createHistory with the ScreenLoader; Root's first
   render waits for `screenLoader.load`), so a screen transition never starts on an empty container.
   - First screen of the page: `lazyScreen` suspends (router.tsx Suspense, fallback null) until its code is loaded.
   - Later navigations: ScreenTransitionGroup awaits `prepareScreen` before the transition, so the screen renders at
     once (no Suspense fallback inside the entering container). */

type ScreenLoader = () => Promise<{ default: ComponentType }>;

const pageModules = import.meta.glob<{ default: ComponentType }>('../pages/*/*Page.tsx');

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
      (entry.promise ??= loader().then(
        (m) => {
          entry.component = m.default;
          return m.default;
        },
        (error: unknown) => {
          // N13: requirejs.onError → Application.handleError, the error page; no retry (N12, CDNFilenameVersioning
          // false). The load promise never settles: the first screen stays empty (N5), a later navigation does not
          // advance (N4), until the document changes (item9-solution.md §6.3).
          showErrorPage(error);
          return new Promise<never>(() => undefined);
        },
      )),
    // `use` only while the code is loading (first screen of the page): the loaded component renders directly
    Screen: (): ReactNode => createElement(entry.component ?? use(entry.load())),
  };
  return entry;
}

/** The component of a screen folder (lazy), or null when the screen is not migrated yet. */
export function lazyScreen(screen: string): ComponentType | null {
  let entry = screens.get(screen);
  if (!entry) {
    const loader: ScreenLoader | undefined = pageModules[`../pages/${screen}/${screen}Page.tsx`];
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
  return entry.load().then(() => undefined); // a failed load never settles (N13): the transition does not start
}

/** The location shows an app screen (not the `/` redirect or an unknown path). */
export const showsScreen = (location: Pick<Location, 'pathname'>): boolean => screenOf(location.pathname) !== null;

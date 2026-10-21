import { useState } from 'react';

/* NavigationHandler SetPreloadObject / GetPreloadObject: one object kept in window.dx.Navigation.Storage["dx-preload"]
   to hand large data to the next screen (NH:1808-1821, 555-565). The storage lives only during a navigation: it is
   deleted when the next screen has mounted, after its OnInitialize (NavigationDataStorageJS, NH:1212-1235).
   Here the deletion is done by <ScreenFrame> after the screen's first render and effects. */

let preload: unknown = null;

/** SetPreloadJS keeps the object only when it is set (NH:1815-1817). */
export function setPreloadObject(value: unknown): void {
  if (value) preload = value;
}

/** GetPreloadJS: the object, or null when none is waiting (NH:561-563). Its shape is the screens' contract: narrow it. */
export const getPreloadObject = (): unknown => preload;

/** Deletes the storage (NavigationDataStorageJS: BaseWebScreen.componentDidMount). */
export function clearPreloadObject(): void {
  preload = null;
}

/** For a screen's OnInitialize: the preload object handed over by the previous screen, read once at mount. */
export function usePreloadObject(): unknown {
  const [value] = useState(getPreloadObject);
  return value;
}

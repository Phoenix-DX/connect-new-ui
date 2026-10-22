/* Navigation API for screens and blocks (docs/guides/shell.md, "Part B"). */
export { BACK_PRIORITY, type BackHandler, type BackNavigationEvent } from './backQueue';
export { useBackHandler, usePreventBackNavigation, useViewState, useWasRestoredFromCache } from './hooks';
export {
  dateTimeParam,
  generateScreenURL,
  replaceOnUpcomingNavigation,
  resetReplaceOnUpcomingNavigation,
  screenUrl,
  useNavigateBack,
  useOsNavigate,
  type OsNavigate,
  type OsNavigateOptions,
  type OsParams,
} from './osNavigate';
export { getPreloadObject, setPreloadObject, usePreloadObject } from './preload';
export { allowUpcomingNavigation } from './navigationGate';
export { exitApp, useExitConfirmation } from './exitConfirmation';
export { DialogExitConfirmation } from './DialogExitConfirmation';
export { NavigationHost } from './NavigationHost';
export { ScreenFrame } from './ScreenFrame';
export { ScreenTransitionGroup } from './ScreenTransitionGroup';
export { TransitionAnimation } from './screenTransition';

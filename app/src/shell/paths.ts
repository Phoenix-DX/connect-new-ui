import { ROUTES, HOME } from '../app/routes.generated';

/* Screens and URLs the shell navigates to, and which screens need a signed-in user. */

/** AppManager_GetAppId / GetEntryEspaceName: the module name, also the first URL segment. */
export const APP_ID = 'UBTConnect';

export const PATHS = {
  home: HOME,
  login: `/${APP_ID}/Login`,
  /** App_Common SecurityException branch, signed-out user (shell-facts U1; ACF:79-84) */
  loginFromInvalidPermissions: `/${APP_ID}/Login?In_IsFromInvalidPermissions=True`,
  pinRegister: `/${APP_ID}/PINRegister`,
  pinUnlock: `/${APP_ID}/PINUnlock`,
} as const;

/** The 9 screens without `checkRegistered` (shell-facts U1; Anonymous role in knowledge/navigation.md "Access"). */
const ANONYMOUS_SCREENS: ReadonlySet<string> = new Set([
  'Splash',
  'Login',
  'InvalidPermissions',
  'PINBiometricsMenu',
  'ContactUsMenu',
  'ContactUsDetails',
  'Locality_Details',
  'MessageList',
  'MessageDetail',
]);

/** Screens whose CommonUI ignores the lock screen (spec 9 "CommonUI gate": Login, PINUnlock, PINRegister). */
/* Screens without a lock screen: the login flow, and Splash, whose LayoutBlank has no CommonUI and which runs its own
   PIN check after its animation (Splash p:UBTConnect.App_Common.Splash.mvc.js:473-501; CR-Splash-1). */
const LOCK_SCREEN_IGNORED: ReadonlySet<string> = new Set(['Login', 'PINUnlock', 'PINRegister', 'Splash']);

const normalize = (pathname: string) => pathname.replace(/\/+$/, '').toLowerCase();
const screenByPath = new Map(ROUTES.map((r) => [normalize(r.path), r.screen]));
const defaultScreen = HOME.slice(HOME.lastIndexOf('/') + 1);

/** The screen a URL path shows; `/UBTConnect/` shows the default screen (spec 12a U1). null for unknown paths. */
export function screenOf(pathname: string): string | null {
  const path = normalize(pathname);
  if (path === normalize(`/${APP_ID}`)) return defaultScreen;
  return screenByPath.get(path) ?? null;
}

export function isProtectedPath(pathname: string): boolean {
  const screen = screenOf(pathname);
  return screen !== null && !ANONYMOUS_SCREENS.has(screen);
}

export function ignoresLockScreen(pathname: string): boolean {
  const screen = screenOf(pathname);
  return screen !== null && LOCK_SCREEN_IGNORED.has(screen);
}

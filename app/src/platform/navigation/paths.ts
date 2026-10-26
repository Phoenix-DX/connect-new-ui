import { ROUTES, HOME } from '@/app/routes.generated';

/* Screens and URLs the shell navigates to, and the screen a URL path shows. Which screens need a signed-in user and
   which ignore the lock screen is the route meta (app/routes.ts). */

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

const normalize = (pathname: string) => pathname.replace(/\/+$/, '').toLowerCase();
const screenByPath = new Map(ROUTES.map((r) => [normalize(r.path), r.screen]));
const defaultScreen = HOME.slice(HOME.lastIndexOf('/') + 1);

/** The screen a URL path shows; `/UBTConnect/` shows the default screen (spec 12a U1). null for unknown paths. */
export function screenOf(pathname: string): string | null {
  const path = normalize(pathname);
  if (path === normalize(`/${APP_ID}`)) return defaultScreen;
  return screenByPath.get(path) ?? null;
}

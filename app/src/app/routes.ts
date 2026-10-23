import { screenOf } from '@/platform/navigation/paths';
import { APP, HOME, ROUTES as GENERATED_ROUTES, type RouteInfo } from './routes.generated';

/* The route table of the app (plan v2 §3.2): the routes that scaffold_react_app.py generates from the survey
   (routes.generated.ts, not edited by hand), each with its meta. RouteGuard.tsx reads the meta after the app start,
   and LockHost reads `lock` through AppFrame (ignoresLockScreen). */

export { APP, HOME };

export interface RouteMeta {
  /** `anonymous`: a signed-out user can open the screen, which has no `checkRegistered` (shell-facts U1; Anonymous role
      in knowledge/navigation.md "Access"). `member`: a signed-out user goes to Login (RouteGuard.tsx). */
  access: 'anonymous' | 'member';
  /** `ignore`: the screen shows no lock screen. Its CommonUI ignores the lock screen (spec 9 "CommonUI gate": Login,
      PINUnlock, PINRegister), or it has no CommonUI. `enforce`: the lock screen and the app-start PIN check apply. */
  lock: 'enforce' | 'ignore';
}

export interface AppRoute extends RouteInfo {
  meta: RouteMeta;
}

/** The meta of every route that ROUTE_META does not list. */
const MEMBER_ROUTE: RouteMeta = { access: 'member', lock: 'enforce' };

/** The routes whose meta is not MEMBER_ROUTE, by screen name. */
const ROUTE_META: Readonly<Record<string, RouteMeta>> = {
  Login: { access: 'anonymous', lock: 'ignore' },
  PINUnlock: { access: 'member', lock: 'ignore' },
  PINRegister: { access: 'member', lock: 'ignore' },
  // LayoutBlank has no CommonUI, and Splash runs its own PIN check after its animation
  // (Splash p:UBTConnect.App_Common.Splash.mvc.js:473-501; CR-Splash-1)
  Splash: { access: 'anonymous', lock: 'ignore' },
  InvalidPermissions: { access: 'anonymous', lock: 'enforce' },
  PINBiometricsMenu: { access: 'anonymous', lock: 'enforce' },
  ContactUsMenu: { access: 'anonymous', lock: 'enforce' },
  ContactUsDetails: { access: 'anonymous', lock: 'enforce' },
  Locality_Details: { access: 'anonymous', lock: 'enforce' },
  MessageList: { access: 'anonymous', lock: 'enforce' },
  MessageDetail: { access: 'anonymous', lock: 'enforce' },
};

/** The meta of a path that shows no screen (router.tsx '*' route): no screen checks the sign-in there, and the lock
    screen applies, as on every screen that does not ignore it. */
export const NO_ROUTE_META: RouteMeta = { access: 'anonymous', lock: 'enforce' };

export const ROUTES: readonly AppRoute[] = GENERATED_ROUTES.map((route) => ({
  ...route,
  meta: ROUTE_META[route.screen] ?? MEMBER_ROUTE,
}));

const routeByScreen = new Map(ROUTES.map((route) => [route.screen, route]));

/** The route of a URL path (paths.ts screenOf: `/UBTConnect/` shows the default screen); null for a path that shows no
    screen. */
export function routeOf(pathname: string): AppRoute | null {
  const screen = screenOf(pathname);
  return screen === null ? null : (routeByScreen.get(screen) ?? null);
}

/** The meta of the route of a URL path; NO_ROUTE_META for a path that shows no screen. */
export const routeMetaOf = (pathname: string): RouteMeta => routeOf(pathname)?.meta ?? NO_ROUTE_META;

/** The screen of the path shows no lock screen (LockHost, through AppFrame). */
export const ignoresLockScreen = (pathname: string): boolean => routeMetaOf(pathname).lock === 'ignore';

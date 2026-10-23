import { flagValue, type FlagKey } from '@/platform/flags';
import type { NavigationTarget, OsParams } from '@/platform/navigation';
import { screenOf } from '@/platform/navigation/paths';
import { APP, HOME, ROUTES as GENERATED_ROUTES, type RouteInfo } from './routes.generated';

/* The route table of the app (plan v2 §3.2): the routes that scaffold_react_app.py generates from the survey
   (routes.generated.ts, not edited by hand), each with its meta. RouteGuard.tsx reads the meta after the app start,
   LockHost reads `lock` through AppFrame (ignoresLockScreen), and useOsNavigate reads `flagRedirect` through AppFrame
   (flagRedirectTarget, given to NavigationHost). */

export { APP, HOME };

/** A flag that chooses the screen of a route (plan v2 §3.1 rule 2): when the flag has the value `when`, a navigation to
    the route opens `to` instead. */
export interface FlagRedirect {
  flag: FlagKey;
  when: boolean;
  /** the screen that opens instead */
  to: string;
  /** inputs of the route that `to` takes under another name (input of the route → input of `to`) */
  inputs?: Readonly<Record<string, string>>;
}

export interface RouteMeta {
  /** `anonymous`: a signed-out user can open the screen, which has no `checkRegistered` (shell-facts U1; Anonymous role
      in knowledge/navigation.md "Access"). `member`: a signed-out user goes to Login (RouteGuard.tsx). */
  access: 'anonymous' | 'member';
  /** `ignore`: the screen shows no lock screen. Its CommonUI ignores the lock screen (spec 9 "CommonUI gate": Login,
      PINUnlock, PINRegister), or it has no CommonUI. `enforce`: the lock screen and the app-start PIN check apply. */
  lock: 'enforce' | 'ignore';
  /** The flag that sends a navigation to this route to another route (flagRedirectTarget). */
  flagRedirect?: FlagRedirect;
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

/** The routes whose screen a flag chooses, by screen (migration/knowledge/feature-flag-helpers.md, "Chooses between
    screens?"). The call sites still check these flags themselves and navigate to the route only when the flag does not
    redirect it: they move to one navigation when their page moves (Phase 6). A URL opened directly (deep link, reload,
    history) is not redirected. */
const FLAG_REDIRECTS: Readonly<Record<string, FlagRedirect>> = {
  // GetHasNewNotifications (D11): the bell and MessageDetail open Notifications when on, MessageList when off
  Notifications: { flag: 'C2NewNotifications', when: false, to: 'MessageList' },
  // GetHasNewBookmarks and GetHasBookmarNote (D2): the Bookmarks tab opens Bookmarks when C2NewBookmarks is on, else
  // New_MyBookmarks with mobileDirectoryBookmarkNote on, else MyBookmarks (BottomBarMenu Event_BottomBar_Clicked)
  Bookmarks: { flag: 'C2NewBookmarks', when: false, to: 'MyBookmarks' },
  MyBookmarks: { flag: 'mobileDirectoryBookmarkNote', when: true, to: 'New_MyBookmarks' },
  // GetHasNewLDM (D1): the LDM V2 screens when on, the V1 screens when off
  LDM_MyEvents_V2: { flag: 'C2NewLDM', when: false, to: 'LDM_MyEvents' },
  // GetHasCarouselEnabled: the carousel opens at the household or subdivision, else its details screen
  HouseholdCarousel: {
    flag: 'C2EnableCarousel',
    when: false,
    to: 'HouseholdDetails',
    inputs: { In_StartingHouseholdId: 'HouseholdId' },
  },
  SupperMeeting_Carousel: {
    flag: 'C2EnableCarousel',
    when: false,
    to: 'SupperMeeting_Details',
    inputs: { In_StartingSupperMeetingId: 'In_SubdivsionId' },
  },
};

export const ROUTES: readonly AppRoute[] = GENERATED_ROUTES.map((route) => {
  const meta = ROUTE_META[route.screen] ?? MEMBER_ROUTE;
  const flagRedirect = FLAG_REDIRECTS[route.screen];
  return { ...route, meta: flagRedirect ? { ...meta, flagRedirect } : meta };
});

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

const renameInputs = (params: OsParams, inputs: Readonly<Record<string, string>> = {}): OsParams =>
  Object.fromEntries(Object.entries(params).map(([name, value]) => [inputs[name] ?? name, value]));

/** Where a navigation goes after the flag redirects of the route meta (useOsNavigate, through AppFrame and
    NavigationHost). A redirect can lead to a route with its own redirect (Bookmarks, MyBookmarks, New_MyBookmarks). */
export function flagRedirectTarget(target: NavigationTarget): NavigationTarget {
  let { path, params } = target;
  const seen = new Set<string>();
  for (let route = routeOf(path); route?.meta.flagRedirect && !seen.has(route.screen); route = routeOf(path)) {
    seen.add(route.screen);
    const redirect = route.meta.flagRedirect;
    const to = routeByScreen.get(redirect.to);
    if (flagValue(redirect.flag) !== redirect.when || to === undefined) break;
    path = to.path;
    params = renameInputs(params, redirect.inputs);
  }
  return { path, params };
}

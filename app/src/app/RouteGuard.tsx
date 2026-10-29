import { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { PATHS } from '@/platform/navigation/paths';
import { DEFAULT_TRANSITION, transitionState } from '@/platform/navigation/screenTransition';
import { getSessionStatus, type SessionStatus } from '@/platform/session/machine';
import { setAppCallbackCurrentLocation } from '@/platform/session/resume';
import { clientVar, useShellState } from '@/platform/session/session';
import { routeMetaOf, type RouteMeta } from './routes';

/* The route guard (plan v2 §3.2): after the app start, the session status and the meta of the route (routes.ts) give
   at most one redirect. These are the two redirects that followed the app start before P4-4 (startup.ts
   signedOutRedirect and pinUnlockRedirect), unchanged. The guard checks each route that is opened after the app start
   (the screens' checkRegistered, shell-facts U1); the PIN check is done at the first check only (shell-observed U3).

   | Session status                                         | Route meta       | Check         | Redirect  |
   | ------------------------------------------------------ | ---------------- | ------------- | --------- |
   | starting                                               | any              | any           | none      |
   | signedOut                                              | access member    | any           | login     |
   | signedOut                                              | access anonymous | any           | none      |
   | locked                                                 | lock enforce     | the first one | pinUnlock |
   | locked                                                 | lock enforce     | a later one   | none      |
   | locked                                                 | lock ignore      | any           | none      |
   | signingIn, needPinRegister, unlocked, policiesPending  | any              | any           | none      |

   - A path that shows no screen has NO_ROUTE_META (routes.ts): access anonymous, lock enforce.
   - After the app start, `signedOut` is the only status in which isSignedIn() is false. While the status is
     `signingIn`, the session user is already stored: the mock identity provider stores it in the same task as the
     `signIn` event (platform/session/auth.ts signIn).
   - `locked` at the first check is the app-start lock (machine.ts PinNeed `unlock`: PIN_Use, a local PIN, this tab
     did not unlock). Later, `locked` is the inactivity lock, which shows in place (LockHost). */

export type GuardRedirect = 'login' | 'pinUnlock';

/** The redirect of the table above; `firstCheck` is true at the first check after the app start only. */
export function guardRedirect(
  status: SessionStatus['status'],
  meta: RouteMeta,
  firstCheck: boolean,
): GuardRedirect | null {
  if (status === 'signedOut') return meta.access === 'member' ? 'login' : null;
  if (status === 'locked' && firstCheck && meta.lock === 'enforce') return 'pinUnlock';
  return null;
}

/** Keeps the way back of a redirect from `pathname` and gives the target.
    - login: the path is the sign-in callback (OutSystems_LastURL), then Login with In_IsFromInvalidPermissions
      (shell-facts U1; ACF:61-89).
    - pinUnlock: the path is the sign-in callback, and the path with its query is UBTConnect.LastURL: after the unlock
      the original returns to the screen that was opened (shell-observed: Menu → PINUnlock → Menu; CR-PINUnlock-1). */
export function followGuardRedirect(redirect: GuardRedirect, pathname: string): string {
  setAppCallbackCurrentLocation(pathname);
  if (redirect === 'login') return PATHS.loginFromInvalidPermissions;
  clientVar.lastUrl.set(`${pathname}${window.location.search}`);
  return PATHS.pinUnlock;
}

/** Applies the guard at each route change after the app start. Both redirects navigate with the Default transition:
    App_Common OnException → Login (ACF:81-84), and the TST captures of Login and PINUnlock reached this way end with
    `slide-from-right-enter-done` on the screen container (F18). The Login redirect replaces the entry (N8, item 9 B6):
    App_Common navigates while the screen's permission check holds the navigation callbacks, and
    CheckPermissionsNavigationCallbacks.goTo calls `this.replace` (R281345). The PINUnlock redirect keeps the push: no
    TST fact gives it the same callbacks. */
export function RouteGuard() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { appReady } = useShellState();
  const pinChecked = useRef(false);

  useEffect(() => {
    if (!appReady) return;
    const redirect = guardRedirect(getSessionStatus().status, routeMetaOf(pathname), !pinChecked.current);
    pinChecked.current = true;
    if (redirect !== null) {
      void navigate(followGuardRedirect(redirect, pathname), {
        replace: redirect === 'login',
        state: transitionState(DEFAULT_TRANSITION),
      });
    }
  }, [appReady, pathname, navigate]);

  return null;
}

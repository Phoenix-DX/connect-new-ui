import { act, render } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import { DEFAULT_TRANSITION, transitionState } from '@/platform/navigation/screenTransition';
import { getSessionStatus, type SessionStatus } from '@/platform/session/machine';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { registerPin } from '@/platform/session/pin';
import { getClientVar, markAppReady, setClientVar, setSignedInUser } from '@/platform/session/session';
import { freshPage, reloadPage } from '@/test/testSupport';
import { followGuardRedirect, guardRedirect, RouteGuard } from './RouteGuard';
import { NO_ROUTE_META, routeMetaOf, type RouteMeta } from './routes';

/* The route guard. The app start with the guard, as AppFrame mounts them: platform/bootstrap/AppStart.test.tsx. */

beforeEach(() => {
  freshPage();
  vi.spyOn(console, 'warn').mockImplementation(() => undefined);
});

const MEMBER: RouteMeta = { access: 'member', lock: 'enforce' }; // HomeFeed, Menu, ...
const ANONYMOUS: RouteMeta = { access: 'anonymous', lock: 'enforce' }; // ContactUsMenu, ...
const MEMBER_NO_LOCK: RouteMeta = { access: 'member', lock: 'ignore' }; // PINUnlock, PINRegister
const ANONYMOUS_NO_LOCK: RouteMeta = { access: 'anonymous', lock: 'ignore' }; // Login, Splash
const ALL_META = [MEMBER, ANONYMOUS, MEMBER_NO_LOCK, ANONYMOUS_NO_LOCK, NO_ROUTE_META];

describe('guardRedirect: one test per row of the redirect table (RouteGuard.tsx)', () => {
  test('starting, any route: no redirect', () => {
    for (const meta of ALL_META) {
      expect(guardRedirect('starting', meta, true)).toBeNull();
      expect(guardRedirect('starting', meta, false)).toBeNull();
    }
  });

  test('signedOut, access member: login, at every check', () => {
    for (const meta of [MEMBER, MEMBER_NO_LOCK]) {
      expect(guardRedirect('signedOut', meta, true)).toBe('login');
      expect(guardRedirect('signedOut', meta, false)).toBe('login');
    }
  });

  test('signedOut, access anonymous or no route: no redirect', () => {
    for (const meta of [ANONYMOUS, ANONYMOUS_NO_LOCK, NO_ROUTE_META]) {
      expect(guardRedirect('signedOut', meta, true)).toBeNull();
      expect(guardRedirect('signedOut', meta, false)).toBeNull();
    }
  });

  test('locked, lock enforce or no route, first check: pinUnlock', () => {
    for (const meta of [MEMBER, ANONYMOUS, NO_ROUTE_META])
      expect(guardRedirect('locked', meta, true)).toBe('pinUnlock');
  });

  test('locked, lock enforce or no route, later check: no redirect (the inactivity lock shows in place)', () => {
    for (const meta of [MEMBER, ANONYMOUS, NO_ROUTE_META]) expect(guardRedirect('locked', meta, false)).toBeNull();
  });

  test('locked, lock ignore: no redirect', () => {
    for (const meta of [MEMBER_NO_LOCK, ANONYMOUS_NO_LOCK]) {
      expect(guardRedirect('locked', meta, true)).toBeNull();
      expect(guardRedirect('locked', meta, false)).toBeNull();
    }
  });

  test('signingIn, needPinRegister, unlocked, policiesPending, any route: no redirect', () => {
    const statuses: SessionStatus['status'][] = ['signingIn', 'needPinRegister', 'unlocked', 'policiesPending'];
    for (const status of statuses) {
      for (const meta of ALL_META) {
        expect(guardRedirect(status, meta, true)).toBeNull();
        expect(guardRedirect(status, meta, false)).toBeNull();
      }
    }
  });
});

/** The guard at a path, as RouteGuard applies it after the app start: the target of the redirect, or null. */
function guardAt(pathname: string): string | null {
  const redirect = guardRedirect(getSessionStatus().status, routeMetaOf(pathname), true);
  return redirect === null ? null : followGuardRedirect(redirect, pathname);
}

describe('redirects after the app start', () => {
  test('signed out on a protected screen: Login with the flag, path kept as sign-in callback', () => {
    markAppReady();
    expect(guardAt('/UBTConnect/HomeFeed')).toBe('/UBTConnect/Login?In_IsFromInvalidPermissions=True');
    expect(getClientVar('UBT_AppManager.OutSystems_LastURL')).toBe('/UBTConnect/HomeFeed');
  });

  test('signed out: the default screen behind /UBTConnect/ is protected too', () => {
    markAppReady();
    expect(guardAt('/UBTConnect/')).toBe('/UBTConnect/Login?In_IsFromInvalidPermissions=True');
  });

  test('signed out on an anonymous screen or an unknown path: no redirect', () => {
    markAppReady();
    for (const path of ['/UBTConnect/Login', '/UBTConnect/ContactUsMenu', '/UBTConnect/Locality_Details', '/x']) {
      expect(guardAt(path)).toBeNull();
    }
    expect(getClientVar('UBT_AppManager.OutSystems_LastURL')).toBe('');
  });

  test('signed in, local PIN, tab not unlocked: PINUnlock', async () => {
    setClientVar('UBT_AppManager.PIN_Use', true);
    setSignedInUser(MOCK_USER_ID);
    await registerPin('2468');
    markAppReady();
    expect(guardAt('/UBTConnect/Menu')).toBeNull(); // the registering tab is unlocked
    reloadPage({ newTab: true });
    markAppReady();
    expect(guardAt('/UBTConnect/Login')).toBeNull(); // CommonUI ignores the lock screen there
    expect(guardAt('/UBTConnect/Menu')).toBe('/UBTConnect/PINUnlock');
    expect(getClientVar('UBT_AppManager.OutSystems_LastURL')).toBe('/UBTConnect/Menu');
    expect(getClientVar('UBTConnect.LastURL')).toBe('/UBTConnect/Menu'); // PINUnlock returns there (CR-PINUnlock-1)
  });

  test('signed in without a local PIN: no unlock redirect', () => {
    setClientVar('UBT_AppManager.PIN_Use', true);
    setSignedInUser(MOCK_USER_ID);
    markAppReady();
    expect(guardAt('/UBTConnect/HomeFeed')).toBeNull();
  });
});

describe('RouteGuard', () => {
  function renderAt(path: string) {
    const router = createMemoryRouter([{ path: '*', element: <RouteGuard /> }], { initialEntries: [path] });
    render(<RouterProvider router={router} />);
    return router;
  }

  test('no check before the app start; then the redirect, with the Default transition', async () => {
    const router = renderAt('/UBTConnect/Notes');
    expect(router.state.location.pathname).toBe('/UBTConnect/Notes');
    await act(async () => {
      markAppReady();
      await Promise.resolve();
    });
    expect(router.state.location.pathname + router.state.location.search).toBe(
      '/UBTConnect/Login?In_IsFromInvalidPermissions=True',
    );
    expect(router.state.location.state).toEqual(transitionState(DEFAULT_TRANSITION));
    expect(getClientVar('UBT_AppManager.OutSystems_LastURL')).toBe('/UBTConnect/Notes');
    // N8 (R281345: CheckPermissionsNavigationCallbacks.goTo → this.replace): Login replaces the protected entry
    expect(router.state.historyAction).toBe('REPLACE');
  });

  test('the PINUnlock redirect adds an entry (no TST fact for a replace)', async () => {
    setClientVar('UBT_AppManager.PIN_Use', true);
    setSignedInUser(MOCK_USER_ID);
    await registerPin('2468');
    reloadPage({ newTab: true });
    const router = renderAt('/UBTConnect/Menu');
    await act(async () => {
      markAppReady();
      await Promise.resolve();
    });
    expect(router.state.location.pathname).toBe('/UBTConnect/PINUnlock');
    expect(router.state.historyAction).toBe('PUSH');
  });

  test('the PIN check is done at the first check only', async () => {
    setClientVar('UBT_AppManager.PIN_Use', true);
    setSignedInUser(MOCK_USER_ID);
    await registerPin('2468');
    reloadPage({ newTab: true });
    const router = renderAt('/UBTConnect/PINRegister');
    await act(async () => {
      markAppReady();
      await Promise.resolve();
    });
    expect(getSessionStatus().status).toBe('locked');
    expect(router.state.location.pathname).toBe('/UBTConnect/PINRegister'); // lock ignore
    await act(async () => {
      await router.navigate('/UBTConnect/Menu');
    });
    expect(router.state.location.pathname).toBe('/UBTConnect/Menu');
  });
});

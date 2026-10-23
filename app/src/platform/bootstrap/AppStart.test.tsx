import { render, waitFor } from '@testing-library/react';
import { createMemoryRouter, Outlet, RouterProvider } from 'react-router';
import { beforeEach, expect, test, vi } from 'vitest';
import { RouteGuard } from '@/app/RouteGuard';
import { AppStart } from './AppStart';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { registerPin } from '@/platform/session/pin';
import { getClientVar, getShellState, setClientVar, setSignedInUser } from '@/platform/session/session';
import { calledActions, freshPage, reloadPage } from '@/test/testSupport';

beforeEach(() => {
  freshPage();
  vi.spyOn(console, 'warn').mockImplementation(() => undefined);
});

/** The app start and the route guard, as AppFrame mounts them. */
function renderAt(path: string) {
  const router = createMemoryRouter(
    [
      {
        path: '/',
        element: (
          <>
            <AppStart />
            <RouteGuard />
            <Outlet />
          </>
        ),
        children: [{ path: '*', element: null }],
      },
    ],
    { initialEntries: [path] },
  );
  render(<RouterProvider router={router} />);
  return router;
}

const at = (router: ReturnType<typeof renderAt>) => router.state.location.pathname + router.state.location.search;

test('signed out on a protected screen: after the app-start calls, Login with the flag (U1)', async () => {
  const router = renderAt('/UBTConnect/HomeFeed');
  expect(at(router)).toBe('/UBTConnect/HomeFeed'); // the URL is kept while the app starts
  await waitFor(() => {
    expect(at(router)).toBe('/UBTConnect/Login?In_IsFromInvalidPermissions=True');
  });
  expect(calledActions()).toEqual(['ActionAppManager_SynchAppContext', 'ActionSync_Info_GetMain']);
  expect(getClientVar('UBT_AppManager.OutSystems_LastURL')).toBe('/UBTConnect/HomeFeed');
});

test('signed out on an anonymous screen: stays, and later protected screens are checked too', async () => {
  const router = renderAt('/UBTConnect/ContactUsMenu');
  await waitFor(() => {
    expect(getShellState().appReady).toBe(true);
  });
  expect(at(router)).toBe('/UBTConnect/ContactUsMenu');
  await router.navigate('/UBTConnect/Notes');
  await waitFor(() => {
    expect(at(router)).toBe('/UBTConnect/Login?In_IsFromInvalidPermissions=True');
  });
  expect(getClientVar('UBT_AppManager.OutSystems_LastURL')).toBe('/UBTConnect/Notes');
});

async function signedInWithPin() {
  setClientVar('UBT_AppManager.PIN_Use', true);
  setSignedInUser(MOCK_USER_ID);
  await registerPin('1357');
}

test('signed in with a PIN, new tab: PINUnlock after the app start (U3)', async () => {
  await signedInWithPin();
  reloadPage({ newTab: true });
  const router = renderAt('/UBTConnect/HomeFeed');
  await waitFor(() => {
    expect(at(router)).toBe('/UBTConnect/PINUnlock');
  });
  expect(calledActions().slice(0, 5)).toEqual([
    'ActionAppManager_SynchAppContext',
    'ActionAppManager_AfterInitialize',
    'ActionSync_Info_GetMain',
    'ActionGetUserInformation',
    'ActionGetNumberUnreadMessages',
  ]);
});

test('signed in with a PIN, reload of an unlocked tab: stays', async () => {
  await signedInWithPin();
  reloadPage();
  const router = renderAt('/UBTConnect/Menu');
  await waitFor(() => {
    expect(getShellState().appReady).toBe(true);
  });
  expect(at(router)).toBe('/UBTConnect/Menu');
});

test('the PIN check runs once: unlocking and moving on is not interrupted', async () => {
  await signedInWithPin();
  reloadPage({ newTab: true });
  const router = renderAt('/UBTConnect/Login');
  await waitFor(() => {
    expect(getShellState().appReady).toBe(true);
  });
  expect(at(router)).toBe('/UBTConnect/Login'); // CommonUI of Login ignores the lock screen
  await router.navigate('/UBTConnect/Menu');
  expect(at(router)).toBe('/UBTConnect/Menu');
});

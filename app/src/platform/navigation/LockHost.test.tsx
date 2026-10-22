import { act, render } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router';
import { afterEach, beforeEach, expect, test, vi } from 'vitest';
import { AppLockHost } from './AppLockHost';
import { useNoCommonUi } from '@/platform/feedback/dialogs/commonUiPresence';
import { LockHost } from './LockHost';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { registerPin, verifyPin } from '@/platform/session/pin';
import { getClientVar, setClientVar, setSignedInUser } from '@/platform/session/session';
import { freshPage } from '@/test/testSupport';

/** The unlock content (Block_PINUnlock_ContentWrapper → Pincode_Unlock) inside the lock container. */
const overlay = () => document.querySelector('.ubt-lock-screen .pincode-unlock');

beforeEach(async () => {
  freshPage();
  setClientVar('UBT_AppManager.PIN_Use', true);
  setClientVar('UBT_AppManager.PIN_SessionInactivity_Use', true);
  setClientVar('UBT_AppManager.PIN_SessionInactivity_Seconds', 1200);
  setSignedInUser(MOCK_USER_ID);
  await registerPin('1357');
  vi.useFakeTimers();
});
afterEach(() => {
  vi.useRealTimers();
});

function renderAt(path: string) {
  const router = createMemoryRouter([{ path: '*', element: <LockHost /> }], { initialEntries: [path] });
  render(<RouterProvider router={router} />);
  return router;
}

/* async: microtasks run between timers, so mock answers settle before the request timeout (src/lib/api.ts) fires */
const idle = async (ms: number) => {
  await act(async () => {
    await vi.advanceTimersByTimeAsync(ms);
  });
};

test('at the first 10 s check after PIN_SessionInactivity_Seconds the lock shows in place (Navigate false)', async () => {
  renderAt('/UBTConnect/Menu');
  await idle(1_200_000);
  expect(overlay()).toBeNull();
  await idle(10_000);
  expect(overlay()).not.toBeNull();
  expect(getClientVar('UBT_AppManager.PIN_IsLocked')).toBe(true);
});

test('unlocking hides the lock and restarts the timer', async () => {
  renderAt('/UBTConnect/Menu');
  await idle(1_210_000);
  expect(overlay()).not.toBeNull();
  await act(async () => {
    await verifyPin('1357');
  });
  expect(overlay()).toBeNull();
  await idle(1_210_000);
  expect(overlay()).not.toBeNull();
});

test('each screen restarts the timer (a new CommonUI per screen)', async () => {
  const router = renderAt('/UBTConnect/Menu');
  await idle(1_000_000);
  await act(async () => {
    await router.navigate('/UBTConnect/Notes');
  });
  await idle(1_000_000);
  expect(overlay()).toBeNull();
});

test('no lock where CommonUI hides it: signed out, Login/PIN screens, PIN not registered yet', async () => {
  renderAt('/UBTConnect/PINRegister');
  await idle(1_300_000);
  expect(getClientVar('UBT_AppManager.PIN_IsLocked')).toBe(false);
  act(() => {
    setSignedInUser('someone-without-pin');
  });
  await idle(1_300_000);
  expect(getClientVar('UBT_AppManager.PIN_IsLocked')).toBe(false);
});

test('?locksecs= shortens the timeout for testing', async () => {
  window.history.replaceState(null, '', '/UBTConnect/Menu?locksecs=5');
  renderAt('/UBTConnect/Menu');
  await idle(10_000);
  expect(overlay()).not.toBeNull();
  window.history.replaceState(null, '', '/');
});

function NoCommonUiScreen() {
  useNoCommonUi();
  return null;
}

test('a screen without CommonUI has no lock container; the running timer fires there and locks nothing (CR-Services-1)', async () => {
  const router = createMemoryRouter(
    [
      {
        path: '/UBTConnect/Services',
        element: (
          <>
            <NoCommonUiScreen />
            <AppLockHost />
          </>
        ),
      },
      { path: '*', element: <AppLockHost /> },
    ],
    { initialEntries: ['/UBTConnect/Menu'] },
  );
  render(<RouterProvider router={router} />);
  expect(document.querySelector('.ubt-lock-screen')).not.toBeNull();
  await idle(1_000_000);
  await act(async () => {
    await router.navigate('/UBTConnect/Services');
  });
  expect(document.querySelector('.ubt-lock-screen')).toBeNull();
  await idle(210_000);
  expect(getClientVar('UBT_AppManager.PIN_IsLocked')).toBe(false);
  // back on a screen with the lock block, a new timer starts (InactivityTimer OnInitialize → PIN_SessionInactivity_Start)
  await act(async () => {
    await router.navigate('/UBTConnect/Menu');
  });
  await idle(1_000_000);
  expect(overlay()).toBeNull();
  await idle(210_000);
  expect(overlay()).not.toBeNull();
});

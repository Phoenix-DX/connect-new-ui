import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { startApp } from '@/platform/bootstrap/appStartSteps';
import { getSessionStatus } from '@/platform/session/machine';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { setAppCallback } from '@/platform/session/resume';
import { getClientVar, setClientVar } from '@/platform/session/session';
import { calledActions, freshPage } from '@/test/testSupport';
import Login from './LoginPage';

/* The Login page with its flows (useLogin): the card, the mock sign-in of "Login with UBT One", OnInitialize (the
   sign-in callback location, In_IsFromResetPIN) and the unsupported-system branch. */

const KEPT_CALLBACK = '/UBTConnect/Notes';

function renderLogin(search = '') {
  const client = new QueryClient({ defaultOptions: { queries: { retry: false } } });
  return render(
    <QueryClientProvider client={client}>
      <MemoryRouter initialEntries={[`/UBTConnect/Login${search}`]}>
        <Routes>
          <Route path="/UBTConnect/Login" element={<Login />} />
          <Route path="/UBTConnect/PINRegister" element={<p>PINRegister screen</p>} />
        </Routes>
      </MemoryRouter>
    </QueryClientProvider>,
  );
}

beforeEach(async () => {
  freshPage();
  vi.spyOn(console, 'warn').mockImplementation(() => undefined);
  await startApp(); // signed-out start
  window.__osCalls = [];
});

afterEach(() => {
  sessionStorage.removeItem('mock:mock');
  window.history.replaceState(null, '', '/');
  vi.restoreAllMocks();
});

describe('Login page', () => {
  it('shows the card with the welcome text and the two buttons, the help link and the page blocks', () => {
    const { container } = renderLogin();
    const blocks = Array.from(container.querySelectorAll('[data-block]')).map((e) => e.getAttribute('data-block'));
    expect(blocks).toEqual(
      expect.arrayContaining([
        'ConnectPatterns.Tile',
        'App_Common.WelcomeToConnect',
        'App_Common.Version_LoginWrapper',
        'Layouts.AppManager_Events',
      ]),
    );
    expect(blocks).not.toContain('App_Common.UnsupportedVersion_Wrapper');
    expect(screen.getByRole('button', { name: 'Login with UBT One' })).toBeEnabled();
    expect(screen.getByRole('button', { name: 'Forgot Password?' })).toBeEnabled();
    expect(screen.getByText('Contact Us')).toBeInTheDocument();
    expect(container.querySelector('#b2-Content > .connect-login-card__content')).not.toBeNull();
  });

  it('"Login with UBT One" signs in and replaces Login by the destination (PINRegister without a local PIN)', async () => {
    renderLogin();
    fireEvent.click(screen.getByRole('button', { name: 'Login with UBT One' }));
    expect(await screen.findByText('PINRegister screen')).toBeInTheDocument();
    expect(getSessionStatus()).toEqual({ status: 'needPinRegister', userId: MOCK_USER_ID });
    expect(calledActions()).toContain('ActionGetUserInformation');
  });

  it('"Forgot Password?" does nothing in the mock phase', async () => {
    renderLogin();
    fireEvent.click(screen.getByRole('button', { name: 'Forgot Password?' }));
    await new Promise((resolve) => setTimeout(resolve, 50));
    expect(screen.queryByText('PINRegister screen')).toBeNull();
    expect(getSessionStatus()).toEqual({ status: 'signedOut' });
  });

  it('OnInitialize clears the sign-in callback location, unless the signed-out gate opened Login', async () => {
    setAppCallback(KEPT_CALLBACK);
    const first = renderLogin();
    await waitFor(() => {
      expect(getClientVar('UBT_AppManager.OutSystems_LastURL')).toBe('');
    });
    first.unmount();

    setAppCallback(KEPT_CALLBACK);
    renderLogin('?In_IsFromInvalidPermissions=True');
    await new Promise((resolve) => setTimeout(resolve, 50));
    expect(getClientVar('UBT_AppManager.OutSystems_LastURL')).toBe(KEPT_CALLBACK);
  });

  it('In_IsFromResetPIN: OnInitialize signs out, then signs in, without a click', async () => {
    renderLogin('?In_IsFromResetPIN=True');
    expect(await screen.findByText('PINRegister screen')).toBeInTheDocument();
    // The re-sync of AppManager_Logout comes before the sign-in calls
    const calls = calledActions();
    expect(calls).toContain('ActionAppManager_SynchAppContext');
    expect(calls.indexOf('ActionAppManager_SynchAppContext')).toBeLessThan(calls.indexOf('ActionGetUserInformation'));
    expect(getSessionStatus()).toEqual({ status: 'needPinRegister', userId: MOCK_USER_ID });
  });

  it('OnReady: CallbackType = DeviceAwareness_InvalidDevice (TST value) skips DelayedMessage_Show; else it runs', async () => {
    const pending = JSON.stringify({ MessageTitle: 'Signed out', Message: 'Please sign in again', Type: 'info' });
    setClientVar('UBT_AppManager.AppManager_DelayedMessage', pending);
    const first = renderLogin('?CallbackType=DeviceAwareness_InvalidDevice');
    await new Promise((resolve) => setTimeout(resolve, 50));
    expect(getClientVar('UBT_AppManager.AppManager_DelayedMessage')).toBe(pending);
    first.unmount();

    renderLogin();
    await waitFor(() => {
      expect(getClientVar('UBT_AppManager.AppManager_DelayedMessage')).toBe('');
    });
  });

  it('unsupported system (U16 `?mock=unsupported-browser`): the unsupported message instead of the buttons', async () => {
    window.history.replaceState(null, '', '/UBTConnect/Login?mock=unsupported-browser');
    setAppCallback(KEPT_CALLBACK);
    const { container } = renderLogin();
    expect(container.querySelector('[data-block="App_Common.UnsupportedVersion_Wrapper"]')).not.toBeNull();
    expect(screen.queryByRole('button', { name: 'Login with UBT One' })).toBeNull();
    await new Promise((resolve) => setTimeout(resolve, 50));
    // OnInitialize stops before it clears the sign-in callback location
    expect(getClientVar('UBT_AppManager.OutSystems_LastURL')).toBe(KEPT_CALLBACK);
  });
});

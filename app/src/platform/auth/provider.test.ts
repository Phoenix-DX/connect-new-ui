import { beforeEach, describe, expect, test, vi } from 'vitest';
import { startApp } from '@/platform/bootstrap/appStartSteps';
import { resetPassword, signIn, signOut } from '@/platform/session/auth';
import { getSessionStatus } from '@/platform/session/machine';
import { currentUserId, getShellState, setSignedInUser } from '@/platform/session/session';
import type { AuthProvider } from './provider';
import { calledActions, freshPage } from '@/test/testSupport';

/* Sign-in and sign-out (platform/session/auth.ts) through the AuthProvider interface, with a test double in place of
   the provider of the build. */
const double = vi.hoisted(() => ({ provider: null as AuthProvider | null, calls: [] as string[] }));
vi.mock('@/platform/auth', () => ({ authProvider: () => double.provider }));

const USER_ID = '424242';

/** A test double of AuthProvider: records each call with the session status at that time, and signs in USER_ID. */
function recordingProvider(): AuthProvider {
  const record = (call: string) => double.calls.push(`${call} (${getSessionStatus().status})`);
  return {
    signIn(returnTo) {
      record(`signIn ${returnTo}`);
      return Promise.resolve();
    },
    completeSignIn() {
      record('completeSignIn');
      setSignedInUser(USER_ID);
      return Promise.resolve({ userId: USER_ID });
    },
    signOut() {
      record('signOut');
      return Promise.resolve();
    },
    resetPassword(returnTo) {
      record(`resetPassword ${returnTo}`);
      return Promise.resolve();
    },
    getSession() {
      const userId = currentUserId();
      return Promise.resolve(userId === null ? null : { userId });
    },
  };
}

beforeEach(async () => {
  freshPage();
  vi.spyOn(console, 'warn').mockImplementation(() => undefined);
  double.provider = recordingProvider();
  double.calls = [];
  await startApp(); // signed-out start: PIN settings from SynchAppContext (PIN_Use true)
  window.__osCalls = [];
});

describe('signIn and signOut use the provider of the build (plan v2 §3.2)', () => {
  test('signIn: the provider signs the user in, then the post-login sequence runs', async () => {
    window.history.replaceState(null, '', '/UBTConnect/Login');
    try {
      await expect(signIn()).resolves.toBe('/UBTConnect/PINRegister');
    } finally {
      window.history.replaceState(null, '', '/');
    }
    expect(double.calls).toEqual(['signIn /UBTConnect/Login (signedOut)', 'completeSignIn (signingIn)']);
    expect(calledActions()).toEqual([
      'ActionGetUserInformation',
      'ActionSync_Info_GetMain',
      'ActionGetNumberUnreadMessages',
    ]);
    expect(getSessionStatus()).toEqual({ status: 'needPinRegister', userId: USER_ID });
  });

  test('signOut: the provider signs out after the caches are cleared, before the session ends', async () => {
    await signIn();
    double.calls = [];
    window.__osCalls = [];
    await signOut();
    expect(double.calls).toEqual(['signOut (needPinRegister)']);
    expect(getSessionStatus()).toEqual({ status: 'signedOut' });
    expect(calledActions()).toEqual(['ActionAppManager_SynchAppContext']);
  });

  test('resetPassword: the provider runs its reset-password policy; the session stays signed out; the callback carries the TST message', async () => {
    const callback = await resetPassword();
    expect(double.calls).toEqual(['resetPassword / (signedOut)']);
    expect(getSessionStatus()).toEqual({ status: 'signedOut' });
    expect(callback).toEqual({
      callbackType: 'IdP_OnResetPassword',
      messageTitle: '',
      message: 'Your password has been successfully changed. Please log in using your new password.',
    });
    expect(calledActions()).toEqual([]);
  });

  test('no provider (a production build until bffAuth exists): sign-in fails before any change; sign-out still works', async () => {
    double.provider = null;
    await expect(signIn()).rejects.toThrow('Sign-in is not available: no identity provider is configured.');
    expect(getSessionStatus()).toEqual({ status: 'signedOut' });
    expect(calledActions()).toEqual([]);
    setSignedInUser(USER_ID); // a session stored before
    await signOut();
    expect(getSessionStatus()).toEqual({ status: 'signedOut' });
    expect(getShellState().signedIn).toBe(false);
  });
});

import { beforeEach, describe, expect, test } from 'vitest';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { currentUserId, getClientVar, getShellState, setSignedInUser } from '@/platform/session/session';
import { authProvider } from './authProvider';
import { mockAuth } from './mockAuth';
import { calledActions, freshPage } from '@/test/testSupport';

beforeEach(() => {
  freshPage();
});

describe('mockAuth: the mock identity provider (decisions D3(a), U4)', () => {
  test('is the provider of a mock build', () => {
    expect(authProvider()).toBe(mockAuth);
  });

  test('signIn: no sign-in page; nothing changes', async () => {
    await mockAuth.signIn('/UBTConnect/Login');
    expect(getShellState().signedIn).toBe(false);
    expect(calledActions()).toEqual([]);
  });

  test('completeSignIn: the mock user is signed in at once, with the cached user record (CountryCode only)', async () => {
    const signedIn = mockAuth.completeSignIn();
    expect(currentUserId()).toBe(MOCK_USER_ID); // before the promise settles
    await expect(signedIn).resolves.toEqual({ userId: MOCK_USER_ID });
    expect(JSON.parse(getClientVar('UBT_AppManager.AppManager_UserExtended'))).toMatchObject({
      CountryCode: 'AR',
      FirstName: '',
      MemberId: '',
    });
    expect(calledActions()).toEqual([]);
  });

  test('getSession: the stored session user', async () => {
    await expect(mockAuth.getSession()).resolves.toBeNull();
    setSignedInUser(MOCK_USER_ID);
    await expect(mockAuth.getSession()).resolves.toEqual({ userId: MOCK_USER_ID });
  });

  test('signOut: no server call (spec 10); the sign-out flow ends the session itself', async () => {
    setSignedInUser(MOCK_USER_ID);
    await mockAuth.signOut();
    expect(calledActions()).toEqual([]);
    expect(currentUserId()).toBe(MOCK_USER_ID);
  });
});

import { appManager_SetCachedUserInfo } from '@/platform/session/cachedUserInfo';
import { MOCK_USER_ID, mockCachedUserInfo } from '@/platform/session/mockUser';
import { currentUserId, setSignedInUser } from '@/platform/session/session';
import type { AuthProvider } from './provider';

/* The mock identity provider (decisions D3(a), U4): no sign-in page, no token. "Login with UBT One" signs in at once
   as the mock user of platform/session/mockUser.ts (decision U7). Its session is the stored session user of
   platform/session/session.ts. Mock builds only: authProvider.ts reaches it behind MOCKS_BUILT, so production builds
   drop it, the mock user and the directory cast (build/mockFree.ts).
   Each method does its work before it returns, as the mock sign-in did before the provider existed: sign-in sends
   `signIn` to the session machine, then completeSignIn writes the session at once (platform/session/auth.ts). */
export const mockAuth: AuthProvider = {
  /** No sign-in page: nothing to open. */
  signIn: () => Promise.resolve(),

  /** The mock user signs in: the stored session, then the AppManager cached user record of the mock user
      (AppManager_UserExtended, CR-AcceptPendingPolicies-2). */
  completeSignIn() {
    setSignedInUser(MOCK_USER_ID);
    appManager_SetCachedUserInfo(mockCachedUserInfo());
    return Promise.resolve({ userId: MOCK_USER_ID });
  },

  /** The server logout of AppManager_Logout: no call (app-shell spec 10). */
  signOut: () => Promise.resolve(),

  /** No reset-password page: the policy ends at once as a completed reset (user decision 2026-10-27, App_Common Q1:
      Forgot Password as on TST). The session stays signed out, as after the real policy. */
  resetPassword: () => Promise.resolve(),

  /** The stored session user. */
  getSession() {
    const userId = currentUserId();
    return Promise.resolve(userId === null ? null : { userId });
  },
};

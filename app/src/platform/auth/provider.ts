/* The identity provider of the app (plan v2 §3.2). Sign-in and sign-out (platform/session/auth.ts) call it; the
   post-login sequence (platform/bootstrap/postLogin.ts) and the session status (platform/session/machine.ts) do not
   depend on it. Mock builds use mockAuth.ts (decisions D3(a), U4: no identity provider, no token); a production
   provider (bffAuth) is not part of the refactor, so production builds have none (authProvider.ts). */
export interface AuthProvider {
  /** Starts the sign-in. A provider with a sign-in page leaves the app here and comes back to `returnTo`. */
  signIn(returnTo: string): Promise<void>;
  /** Ends the sign-in: keeps the session of the signed-in user on this device and gives its id. */
  completeSignIn(): Promise<{ userId: string }>;
  /** Ends the session at the provider: the server logout of AppManager_Logout. */
  signOut(): Promise<void>;
  /** Starts the reset-password policy of the provider (AppManager_Login with IsResetPassword True, AM:2487). A
      provider with a reset-password page leaves the app here and comes back to `returnTo`; the callback of a completed
      reset is IdP_OnResetPassword (platform/session/auth.ts resetPassword). */
  resetPassword(returnTo: string): Promise<void>;
  /** The session that the provider keeps, or null when signed out. */
  getSession(): Promise<{ userId: string } | null>;
}

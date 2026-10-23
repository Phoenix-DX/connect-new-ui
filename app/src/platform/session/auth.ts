import { useCallback } from 'react';
import { useNavigate } from 'react-router';
import { authProvider } from '@/platform/auth';
import { DEFAULT_TRANSITION, transitionState } from '@/platform/navigation/screenTransition';
import { postLogin } from '@/platform/bootstrap/postLogin';
import { synchAppContext } from '@/platform/bootstrap/startup';
import { clearAllLocalEntities } from '@/platform/storage/localEntities';
import { clearMemoryCache, invalidateEverything } from '@/platform/storage/memoryCache';
import { PATHS } from '@/platform/navigation/paths';
import { sendSessionEvent } from './machine';
import { deletePin, pinCheck } from './pin';
import { getResumeLoginLink } from './resume';
import {
  clearClientVarsAfterLogout,
  currentLocation,
  currentUserId,
  getClientVar,
  setClientVar,
  setSignedInUser,
} from './session';

/* Sign-in and sign-out through the identity provider of the build (platform/auth: the mock provider, decisions D3(a),
   U4). They send their events to the session machine (machine.ts): signIn, postLoginDone, signOut,
   signedOutRemotely. */

/** "Login with UBT One": the identity provider signs the user in (the mock provider: at once, as the mock user), then
    the post-login sequence runs (platform/bootstrap/postLogin.ts: Connect_SetLoggedContext(isFromLogin = True) and
    TriggerOfflineDataSync). Returns where to go: PINRegister without a local PIN, otherwise the resume link, the
    sign-in callback kept by the signed-out gate (OutSystems_LastURL), or HomeFeed.
    Session status: signedOut → signingIn; after the post-login calls, needPinRegister without a local PIN, otherwise
    unlocked. A build without an identity provider (production, until bffAuth exists) cannot sign in: the session is
    left as it is. */
export async function signIn(): Promise<string> {
  const provider = authProvider();
  if (provider === null) throw new Error('Sign-in is not available: no identity provider is configured.');
  await provider.signIn(currentLocation());
  sendSessionEvent({ type: 'signIn' });
  await provider.completeSignIn();
  await postLogin();
  const { needRegister } = pinCheck();
  const userId = currentUserId(); // the stored session while signing in
  if (userId !== null) sendSessionEvent({ type: 'postLoginDone', userId, needPinRegister: needRegister });
  if (needRegister) return PATHS.pinRegister;
  const resume = getResumeLoginLink();
  if (resume !== '') return resume;
  const callback = getClientVar('UBT_AppManager.OutSystems_LastURL');
  return callback !== '' ? callback : PATHS.home;
}

/** signIn, then navigate replacing the Login entry (ReplaceOnUpcomingNavigation before the destination), with the
    Default transition the Login flow's navigations use (Login sources: every navigateTo passes Default, F18). */
export function useSignIn(): () => Promise<void> {
  const navigate = useNavigate();
  return useCallback(async () => {
    const to = await signIn();
    await navigate(to, { replace: true, state: transitionState(DEFAULT_TRANSITION) });
  }, [navigate]);
}

/** Connect_Logout (UC:1062-1066): Cache_InvalidateEverything, then AppManager_Logout (AM:3649-3720): server logout
    (the identity provider's signOut; the mock provider makes no call, spec 10), the runtime clears client variables
    except `*_IsPersistent`, PIN_Delete, the device context is set again, AppManager_SynchAppContext re-syncs. The
    caller navigates (ShowExceptionMessage redirects to /UBTConnect/Login, UC:16444-16452).
    Added (ADR-10, not in the original): after Cache_InvalidateEverything the whole memory cache and every local entity
    (IndexedDB) are cleared, so no data of this user stays on the device; the original steps keep their order.
    Session status: signedOut, when the session ends (any signed-in status). */
export async function signOut(): Promise<void> {
  await connectLogout('signOut');
}

/** The single entry point for "the server ended the session": Connect_Logout (the same steps as signOut, in the same
    order), with the session event `signedOutRemotely`. Today ShowExceptionMessage calls it for ForceLogout (the server
    texts of a refused session, platform/feedback/exceptionMessages.ts); the caller navigates.
    The App_Common SecurityException branch (signed in: ForceLogout) is not ported: known gap G1 of
    migration/refactor/followups.md. A 401 or a SecurityException of a server call does not call it in the mock phase:
    those triggers come with the BFF identity provider. */
export async function signedOutRemotely(): Promise<void> {
  await connectLogout('signedOutRemotely');
}

/** Connect_Logout; `event` is the session event that tells why the session ends. */
async function connectLogout(event: 'signOut' | 'signedOutRemotely'): Promise<void> {
  invalidateEverything();
  clearMemoryCache();
  await clearAllLocalEntities();
  await authProvider()?.signOut();
  const userId = currentUserId();
  const deviceUuid = getClientVar('UBT_AppManager.DeviceInfo_UUID');
  sendSessionEvent({ type: event });
  setSignedInUser(null);
  clearClientVarsAfterLogout();
  deletePin(userId);
  setClientVar('UBT_AppManager.DeviceInfo_UUID', deviceUuid);
  await synchAppContext();
}

import { useCallback } from 'react';
import { useNavigate } from 'react-router';
import { DEFAULT_TRANSITION, transitionState } from '@/platform/navigation/screenTransition';
import { appManager_SetCachedUserInfo } from './cachedUserInfo';
import { connectSetLoggedContext, synchAppContext } from '@/platform/bootstrap/startup';
import { clearAllLocalEntities } from '@/platform/storage/localEntities';
import { clearMemoryCache, invalidateEverything } from '@/platform/storage/memoryCache';
import { MOCK_USER_ID, mockCachedUserInfo } from './mockUser';
import { PATHS } from '@/platform/navigation/paths';
import { sendSessionEvent } from './machine';
import { deletePin, pinCheck } from './pin';
import { getResumeLoginLink } from './resume';
import { clearClientVarsAfterLogout, currentUserId, getClientVar, setClientVar, setSignedInUser } from './session';

/* Mock sign-in and sign-out (decisions D3(a), U4): no identity provider, no token. Both send their events to the
   session machine (machine.ts): signIn, postLoginDone, signOut. */

/** "Login with UBT One" signs in at once as the mock user, then runs what the Login callback runs
    (Login p:UBTConnect.App_Common.Login.mvc.js:836-870): Connect_SetLoggedContext(isFromLogin = True)
    (GetUserInformation, Sync_Info_GetMain with isFromLogin = true, GetNumberUnreadMessages) and TriggerOfflineDataSync
    (an empty action, UC:15118-15140). Returns where to go: PINRegister without a local PIN, otherwise the resume link,
    the sign-in callback kept by the signed-out gate (OutSystems_LastURL), or HomeFeed.
    Session status: signedOut → signingIn; after the post-login calls, needPinRegister without a local PIN, otherwise
    unlocked. */
export async function signIn(): Promise<string> {
  sendSessionEvent({ type: 'signIn' });
  setSignedInUser(MOCK_USER_ID);
  appManager_SetCachedUserInfo(mockCachedUserInfo()); // AppManager_UserExtended of the mock user (CR-AcceptPendingPolicies-2)
  await connectSetLoggedContext(true);
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
    (mocked: no call, spec 10), the runtime clears client variables except `*_IsPersistent`, PIN_Delete, the device
    context is set again, AppManager_SynchAppContext re-syncs. The caller navigates (ShowExceptionMessage redirects to
    /UBTConnect/Login, UC:16444-16452).
    Added (ADR-10, not in the original): after Cache_InvalidateEverything the whole memory cache and every local entity
    (IndexedDB) are cleared, so no data of this user stays on the device; the original steps keep their order.
    Session status: signedOut, when the session ends (any signed-in status). */
export async function signOut(): Promise<void> {
  invalidateEverything();
  clearMemoryCache();
  await clearAllLocalEntities();
  const userId = currentUserId();
  const deviceUuid = getClientVar('UBT_AppManager.DeviceInfo_UUID');
  sendSessionEvent({ type: 'signOut' });
  setSignedInUser(null);
  clearClientVarsAfterLogout();
  deletePin(userId);
  setClientVar('UBT_AppManager.DeviceInfo_UUID', deviceUuid);
  await synchAppContext();
}

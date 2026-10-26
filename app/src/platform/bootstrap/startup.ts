import { fetchAppContext, fetchSyncInfoMain, type ClientConfig } from '@/api/app';
import { fetchNumberUnreadMessages } from '@/api/message/unreadMessages';
import { log } from '@/platform/log/log';
import { CommunicationException, UserException, isInstanceOf } from '@/legacy/os/os-exceptions';
import {
  syncAllOrbitStaticEntities,
  type LegacyLocalBookmark,
  type LocalBookmark,
  type LocalNote,
} from '@/platform/storage/localEntities';
import { APP_ID } from '@/platform/navigation/paths';
import { getClientVar, setClientVar } from '@/platform/session/session';
import { setSettings } from '@/platform/settings';

/* The server actions that the app start (appStartSteps.ts), the post-login sequence (postLogin.ts), the sign-out
   (platform/session/auth.ts) and screens share: AppManager_SynchAppContext, Sync_Info_Main and
   SynchronizeNumberUnreadMessages. The calls of the first two are in the domain api/app, GetNumberUnreadMessages is in
   the domain api/message. The redirects that follow the app start are the route guard's (app/RouteGuard.tsx). */

/** OutSystems CommunicationException of a server call (runtime-sources/OutSystems.js:3, raised by callAction): a failed
    request, or an answer that is not ok and is neither a 404 (ViewHasChangedException) nor the server's own exception
    (the contract's error answer), e.g. "Request failed with status 500". The app start handles only this exception in
    AppManager_SynchAppContextInternal and SynchronizeNumberUnreadMessages, so an all-calls-failed start (the offline
    state) still reaches Connect_SetLoggedContext and sets Notifications_IsSynched (UC:15278-15279 False, UC:1156-1157
    True). */
const isNetworkError = (e: unknown) => isInstanceOf(e, CommunicationException); // not ./exceptions: it imports feedback → auth → startup

/** AppManager_SynchAppContext(Internal) (AM:4939-5120): settings into the settings store (platform/settings; the
    original sets the UBT_AppManager client variables of legacy/os/clientVarNames.ts). A communication error gives the
    empty config (CheckDeviceOnReady false) and keeps the stored settings; isSuccess false raises InvalidApp. Keys and
    tokens are not kept. */
export async function synchAppContext(): Promise<ClientConfig | null> {
  let out;
  try {
    out = await fetchAppContext(APP_ID);
  } catch (e) {
    if (!isNetworkError(e)) throw e;
    log.warn('AppManager_SynchAppContext: communication error, empty config', e);
    return null;
  }
  if (!out.isSuccess) throw new Error('Error defining login information');
  const c = out.AppManager_ClientConfig.AppManager_ClientCache;
  setSettings({
    'insights.enabled': c.AzureInsights_Use,
    // OutSystems_Environment = AppManager_ClientCache.Environment (AM: appManager_SynchAppContextInternal; CR-Login-4)
    'app.environment': c.Environment,
    'pin.enabled': c.PIN_Use,
    'pin.inactivity.enabled': c.PIN_SessionInactivity_Use,
    'pin.inactivity.seconds': c.PIN_SessionInactivity_Seconds,
    'pin.fingerprint': c.PIN_EnableFingerprint,
    'pin.enforceOnReady': c.PIN_EnforceOnReady,
    'pin.inactivity.navigate': c.PIN_SessionInactivity_Navigate,
    'app.minNativeVersion': c.MinNativeAppVersion,
    'app.minWebViewChrome': c.MinWebViewVersion_Chrome,
    'app.minWebViewSafari': c.MinWebViewVersion_Safari,
  });
  return out.AppManager_ClientConfig;
}

/** The local-entity outputs of Sync_Info_Main: Bookmarks, Bookmarks_C2, Notes (UC:16636-16689). */
export interface SyncLocalEntities {
  bookmarks: readonly LegacyLocalBookmark[];
  bookmarks_C2: readonly LocalBookmark[];
  notes: readonly LocalNote[];
}
export const NO_LOCAL_ENTITIES: SyncLocalEntities = { bookmarks: [], bookmarks_C2: [], notes: [] };

/** Sync_Info_Main (UC:16557-16655 of migration/screens/EventDetail/analysis/sources/raw/UBTConnect.controller.js);
    errors are swallowed by its AllExceptions handler (UC:16611-16626), and its outputs then keep their defaults, empty
    lists. After Sync_Info_GetMain, when not from the login, SyncAllOrbitStaticEntities(Sync_Info_GetMain.
    OrbitStaticEntities) (UC:16579-16583; shell/localEntities/orbitStaticEntities.ts, CR-EventDetail-1); its error too
    leaves the outputs empty, as the assignments come after it. Then Bookmarks = .LocalEntities_App.LocalBookmark
    (UC:16590), Embedd_B2CTenant (UC:16599), Bookmarks_C2 = .LocalBookmarksC2 (UC:16602), Notes = .LocalNotes
    (UC:16605) and Sync_SetSiteProperties (UC:16608). */
export async function syncInfoMain(isFromLogin: boolean): Promise<SyncLocalEntities> {
  try {
    const main = await fetchSyncInfoMain(isFromLogin);
    if (!isFromLogin) await syncAllOrbitStaticEntities(main.orbitStaticEntities);
    setClientVar('UBTConnect.Embedd_B2CTenant', main.b2cTenant);
    setClientVar('UBTConnect.Directory_Updates_MonthsToShow', main.updatesFeedMonthsToShow);
    return main.localEntities;
  } catch (e) {
    log.warn('Sync_Info_Main failed', e);
    return NO_LOCAL_ENTITIES;
  }
}

/** Connect2_LegacyShared SynchronizeNumberUnreadMessages (Connect2_LegacyShared.controller.js:7479-7553), for the app
    start and for screens (ScreenBlock_MessageList OnClick_MarkAllAsRead, Notifications; CR-MessageList-1): only with a
    device UUID (:7499), GetNumberUnreadMessages(DeviceId); StoreNumberUnreadMessages (:7507) keeps the counts for the
    bell (UnreadNotificationsNumber = public + private, UnreadPublicMessagesNumber = public). Handled and swallowed:
    OnlineCommunicationException (:7517) and CommunicationException (:7530); anything else is raised (:7543). */
export async function synchronizeNumberUnreadMessages(): Promise<void> {
  const deviceId = getClientVar('UBT_AppManager.DeviceInfo_UUID');
  if (deviceId === '') return;
  try {
    const counts = await fetchNumberUnreadMessages(deviceId);
    setClientVar('Connect2_LegacyShared.UnreadNotificationsNumber', counts.publicCount + counts.privateCount);
    setClientVar('Connect2_LegacyShared.UnreadPublicMessagesNumber', counts.publicCount);
  } catch (e) {
    if (!isNetworkError(e) && !isInstanceOf(e, UserException, 'Connect2_LegacyShared.OnlineCommunicationException'))
      throw e;
    log.warn('GetNumberUnreadMessages: communication error', e);
  }
}

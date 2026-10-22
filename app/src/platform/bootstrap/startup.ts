import type { components } from '@/api/schema';
import { callAction } from '@/api/client/callAction';
import { log } from '@/platform/log/log';
import { CommunicationException, UserException, isInstanceOf } from '@/legacy/os/os-exceptions';
import { osNumber } from '@/legacy/os/os-wire';
import { onApplicationReady_BottomBarSlider } from '@/shared/UBTConnectLibrary/lib/actions';
import { deviceContext } from '@/platform/device/deviceContext';
import {
  loadOrbitStaticEntities,
  syncAllOrbitStaticEntities,
  synchBookmarks,
  synchBookmarksC2,
  syncNotes,
  type LegacyLocalBookmark,
  type LocalBookmark,
  type LocalNote,
} from '@/platform/storage/localEntities';
import { putCacheableObject } from '@/platform/storage/memoryCache';
import { APP_ID, PATHS, ignoresLockScreen, isProtectedPath, screenOf } from '@/platform/navigation/paths';
import { pinCheck } from '@/platform/session/pin';
import { setAppCallbackCurrentLocation } from '@/platform/session/resume';
import { getClientVar, isSignedIn, markAppReady, reloadSessionState, setClientVar } from '@/platform/session/session';
import { setSettings } from '@/platform/settings';
import {
  getUserInformation_Wrapper,
  holdUserInfoForAppStart,
  releaseUserInfoForAppStart,
} from '@/platform/session/userInfo';

/* App start (app-shell.spec.md section 10; UBTConnect.OnApplicationReady UC:15265-15400), the same calls in the same
   order and conditions as TST:
     signed out: SynchAppContext → Sync_Info_GetMain
     signed in:  SynchAppContext → AfterInitialize (CheckDeviceOnReady) → Sync_Info_GetMain → GetUserInformation (user-info
                 cache miss) → GetNumberUnreadMessages → CacheableMapEntities + CacheableHouseholds (together, not awaited)
   Get_RuntimeVersion and GetCacheInfo belong to blocks (App_Common.Version, CacheControl_*), not to the app start. */
type ClientConfig = components['schemas']['UBT_AppManager_CS__AppManager_ConfigClient'];

/** OutSystems CommunicationException of a server call (runtime-sources/OutSystems.js:3, raised by callAction): a failed
    request, or an answer that is not ok and is neither a 404 (ViewHasChangedException) nor the server's own exception
    (the contract's error answer), e.g. "Request failed with status 500". The app start handles only this exception in
    AppManager_SynchAppContextInternal and SynchronizeNumberUnreadMessages, so an all-calls-failed start (the offline
    state) still reaches Connect_SetLoggedContext and sets Notifications_IsSynched (UC:15278-15279 False, UC:1156-1157
    True). */
const isNetworkError = (e: unknown) => isInstanceOf(e, CommunicationException); // not ./exceptions: it imports feedback → auth → startup
/** OutSystems CurrDateTime on the wire: ISO date and time without milliseconds. */
const nowWire = () => new Date().toISOString().slice(0, 19);

/** AppManager_SynchAppContext(Internal) (AM:4939-5120): settings into the settings store (platform/settings; the
    original sets the UBT_AppManager client variables of legacy/os/clientVarNames.ts). A communication error gives the
    empty config (CheckDeviceOnReady false) and keeps the stored settings; isSuccess false raises InvalidApp. Keys and
    tokens are not kept. */
export async function synchAppContext(): Promise<ClientConfig | null> {
  let out;
  try {
    out = await callAction('UBT_AppManager', 'ActionAppManager_SynchAppContext', { EspaceName: APP_ID });
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

/** AppManager_InitializeWebComponents (AM:2850-3023) and AppManager_AfterInitialize (AM:1-94). PIN_HasUnlocked needs no
    reset: it is tab-scoped (clientVars.ts). The PIN_EnforceOnReady branch of AfterInitialize is off on TST (U2). */
async function initializeWebComponents(config: ClientConfig | null): Promise<void> {
  const context = deviceContext(config?.AppManager_ClientCache.PackageName ?? '');
  setClientVar('UBT_AppManager.PIN_IsLocked', false);
  if (!config?.CheckDeviceOnReady || !isSignedIn()) return;
  await callAction('UBT_AppManager', 'ActionAppManager_AfterInitialize', {
    EspaceName: config.EspaceName,
    AppManager_MobileContext: context,
    TOTP: '', // Streamline TOTP callback: none on the web
  });
}

/** The local-entity outputs of Sync_Info_Main: Bookmarks, Bookmarks_C2, Notes (UC:16636-16689). */
interface SyncLocalEntities {
  bookmarks: readonly LegacyLocalBookmark[];
  bookmarks_C2: readonly LocalBookmark[];
  notes: readonly LocalNote[];
}
const NO_LOCAL_ENTITIES: SyncLocalEntities = { bookmarks: [], bookmarks_C2: [], notes: [] };

/** Sync_Info_Main (UC:16557-16655 of migration/screens/EventDetail/analysis/sources/raw/UBTConnect.controller.js);
    errors are swallowed by its AllExceptions handler (UC:16611-16626), and its outputs then keep their defaults, empty
    lists. After Sync_Info_GetMain, when not from the login, SyncAllOrbitStaticEntities(Sync_Info_GetMain.
    OrbitStaticEntities) (UC:16579-16583; shell/localEntities/orbitStaticEntities.ts, CR-EventDetail-1); its error too
    leaves the outputs empty, as the assignments come after it. Then Bookmarks = .LocalEntities_App.LocalBookmark
    (UC:16590), Embedd_B2CTenant (UC:16599), Bookmarks_C2 = .LocalBookmarksC2 (UC:16602), Notes = .LocalNotes
    (UC:16605) and Sync_SetSiteProperties (UC:16608). */
async function syncInfoMain(isFromLogin: boolean): Promise<SyncLocalEntities> {
  try {
    const out = await callAction('UBTConnect', 'ActionSync_Info_GetMain', { isFromLogin });
    if (!isFromLogin) await syncAllOrbitStaticEntities(out.OrbitStaticEntities);
    setClientVar('UBTConnect.Embedd_B2CTenant', out.B2CTenant);
    setClientVar('UBTConnect.Directory_Updates_MonthsToShow', out.Sync_SiteProperties.UpdatesFeed_MonthsToShow);
    return {
      bookmarks: out.LocalEntities_App.LocalBookmark.List,
      bookmarks_C2: out.LocalEntities_App.LocalBookmarksC2.List,
      notes: out.LocalEntities_App.LocalNotes.List,
    };
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
    const out = await callAction('Connect2_LegacyShared', 'ActionGetNumberUnreadMessages', { DeviceId: deviceId });
    const publicCount = osNumber(out.NumberPublicUnreadMessages);
    setClientVar(
      'Connect2_LegacyShared.UnreadNotificationsNumber',
      publicCount + osNumber(out.NumberPrivateUnreadMessages),
    );
    setClientVar('Connect2_LegacyShared.UnreadPublicMessagesNumber', publicCount);
  } catch (e) {
    if (!isNetworkError(e) && !isInstanceOf(e, UserException, 'Connect2_LegacyShared.OnlineCommunicationException'))
      throw e;
    log.warn('GetNumberUnreadMessages: communication error', e);
  }
}

/** Connect_SetLoggedContext(Bookmarks, IsFromLogin, Bookmarks_C2, Notes) (UC:1092-1160), signed in only. The lists:
    the app start passes Sync_Info_Main's outputs (UC:15367), the login empty lists (Login.mvc.js:845); from the login,
    Sync_Info_Main replaces them (UC:1121-1128). SynchBookmarks, SynchBookmarksC2 and SyncNotes each replace a whole
    local copy (UC:1135-1150; shell/localEntities). */
export async function connectSetLoggedContext(
  isFromLogin: boolean,
  notes: readonly LocalNote[] = [],
  bookmarks: readonly LegacyLocalBookmark[] = [],
  bookmarks_C2: readonly LocalBookmark[] = [],
): Promise<void> {
  if (!isSignedIn()) return;
  try {
    await getUserInformation_Wrapper(); // Sync_UserInfo_TriggerCache: errors swallowed
  } catch (e) {
    log.warn('Sync_UserInfo_TriggerCache failed', e);
  } finally {
    releaseUserInfoForAppStart();
  }
  if (isFromLogin) ({ notes, bookmarks, bookmarks_C2 } = await syncInfoMain(true));
  await synchBookmarks(bookmarks);
  await synchBookmarksC2(bookmarks_C2);
  setClientVar('UBTConnect.Bookmarks_IsSynched', true);
  await syncNotes(notes);
  setClientVar('UBTConnect.Notes_IsSynched', true);
  await synchronizeNumberUnreadMessages();
  setClientVar('UBTConnect.Notifications_IsSynched', true);
  setClientVar('UBTConnect.Notifications_LastChecked', nowWire());
}

/** Map objects cached for 7200 s under the CacheableMapObjects static entity (UC:3469-3610). */
const MAP_TTL_SECONDS = 7200;
const cacheMapObject = (name: string, value: unknown) => {
  putCacheableObject(`CacheableMapObjects.${name}`, `CacheableMapObjects.${name}`, value, MAP_TTL_SECONDS);
};

/** Async_FetchCacheableMapEntitiesJS (UC:15514-15519): both requests start together and are not awaited. */
function fetchCacheableMapData(): void {
  void callAction('UBTConnect', 'ServiceAPIFetchData_CacheableMapEntities', {})
    .then((out) => {
      cacheMapObject('GlobalEntities', out.GlobalLocations_Markers);
      cacheMapObject('CountriesMarker', out.Countries_Markers);
      cacheMapObject('CountriesGeoJSON', out.Countries_GeoJSON);
      cacheMapObject('LocalitiesMarker', out.Localities_Markers);
      cacheMapObject('LocalitiesGeoJSON', out.Localities_GeoJSON);
    })
    .catch((e: unknown) => {
      log.warn('Get_Cacheable_MapEntities failed', e);
    });
  void callAction('UBTConnect', 'ServiceAPIFetchData_CacheableHouseholds', {})
    .then((out) => {
      // one list per part of each record, as the original splits them (UC:3534-3560)
      const records = out.Household_Markers.List;
      const markers = records.map((r) => r.MarkerWithWindow);
      const exploreItems = records.map((r) => r.MapExploreItem);
      cacheMapObject('Households', markers);
      cacheMapObject('HouseholdsExploreItems', exploreItems);
    })
    .catch((e: unknown) => {
      log.warn('Get_Cacheable_MapHouseholds failed', e);
    });
}

/* Signed in, the first screen of the page renders while SynchAppContext is in flight: the signed-in TST captures have the
   first screen's load calls after SynchAppContext and before AfterInitialize (migration/screens/{Search,HomeFeed,
   MyEntertaining}/analysis/calls.json: e.g. Search's ScreenDataSetGet_SearchBirthdayOptions and both CacheControl
   GetCacheInfo). Signed out they come after Sync_Info_GetMain (Login calls.json: Get_RuntimeVersion last), so the
   signed-out start does not wait. So when the app start reaches GetUserInformation_Wrapper (UC:13616-13710), a screen whose
   CacheControl_UserInfo already filled the DirectoryUser cache causes no GetUserInformation (Search), and a screen
   without one does (HomeFeed, MyEntertaining). The clone's screens are lazy chunks and its mocks may answer at once,
   so the signed-in app start waits for the first screen before Sync_Info_GetMain (after the bottom-bar slider is set
   up, as before; the screen's own calls are then answered first) and screens' user-info readers wait for the app
   start's step (userInfo.ts holdUserInfoForAppStart). ScreenFrame raises `dx-navigation-transition-end` for it after
   the screen's own effects ran (shell/navigation/transitionEvents.ts:44-66; not `-start`, which
   BottomBarSlider_ForceRefresh also raises, UBTConnectLibrary lib/actions.ts:269-273), i.e. after its blocks started their calls.
   Nothing to wait for when no screen frame will render: outside the app frame (#transitionContainer, AppFrame.tsx) or
   on a path that shows no screen (screenOf null, router.tsx '*' route). */
let firstScreenRendered = false;
const firstScreenWaiters = new Set<() => void>();
window.addEventListener('dx-navigation-transition-end', () => {
  firstScreenRendered = true;
  for (const resolve of firstScreenWaiters) resolve();
  firstScreenWaiters.clear();
});

function waitForFirstScreen(): Promise<void> {
  if (firstScreenRendered || !document.getElementById('transitionContainer')) return Promise.resolve();
  if (screenOf(window.location.pathname) === null) return Promise.resolve();
  return new Promise((resolve) => firstScreenWaiters.add(resolve));
}

export async function runAppStart(): Promise<void> {
  // The runtime opens the device database before OnApplicationReady (OutSystems.js:16 initializeDatabase): the Orbit
  // static entities' mirror is filled from it, not awaited (the app start's calls keep their timing; F12).
  loadOrbitStaticEntities().catch((e: unknown) => {
    log.warn('Loading the Orbit local entities failed', e);
  });
  setClientVar('UBTConnect.IsNavigateToHomeOnBack', false);
  setClientVar('UBTConnect.Bookmarks_IsSynched', false);
  setClientVar('UBTConnect.Notifications_IsSynched', false);
  setClientVar('UBTConnect.Notes_IsSynched', false);
  try {
    // AppManager_Mobile_OnAppReady (p:UBT_AppManager_Mobile.controller.js:112-128, 244-245)
    if (isSignedIn()) holdUserInfoForAppStart();
    const config = await synchAppContext();
    await initializeWebComponents(config);
    // CheckKeyboardPlugin (native only), OnApplicationReady_BottomBarSlider (UC:15318-15326, CR-HomeFeed-3)
    onApplicationReady_BottomBarSlider();
    if (isSignedIn()) await waitForFirstScreen();
    const { notes, bookmarks, bookmarks_C2 } = await syncInfoMain(false);
    if (isSignedIn()) {
      await connectSetLoggedContext(false, notes, bookmarks, bookmarks_C2);
      fetchCacheableMapData();
    }
  } catch (e) {
    // The original passes the message to ScreenController_RaiseError (UC:15382-15399), i.e. `new Error(message)` to the
    // App_Common handler (JSU:3840-3900). That shows showExceptionMessage(message, false) only if a plain Error is not a
    // "system" exception (OS.Exceptions.isSystem, runtime code not captured: shell-facts U10 open), so no toast here yet.
    log.error('OnApplicationReady failed', e);
  } finally {
    releaseUserInfoForAppStart();
    markAppReady();
  }
}

let started: Promise<void> | null = null;

/** Runs the app start once per page load (StrictMode renders twice). */
export function startApp(): Promise<void> {
  return (started ??= runAppStart());
}

/** Forgets that the app started, as a new page load does (tests). */
export function resetAppStart(): void {
  started = null;
  firstScreenRendered = false;
  firstScreenWaiters.clear();
  releaseUserInfoForAppStart();
  reloadSessionState();
}

/** Signed-out user on a protected screen (shell-facts U1; ACF:61-89): keep the path as the sign-in callback, then Login. */
export function signedOutRedirect(pathname: string): string | null {
  if (isSignedIn() || !isProtectedPath(pathname)) return null;
  setAppCallbackCurrentLocation(pathname);
  return PATHS.loginFromInvalidPermissions;
}

/** App-start PIN check (shell-observed U3): a signed-in tab that was not unlocked and has a local PIN goes to
    PINUnlock. Screens whose CommonUI ignores the lock screen (Login, PINUnlock, PINRegister) are left alone. */
export function pinUnlockRedirect(pathname: string): string | null {
  if (!isSignedIn() || ignoresLockScreen(pathname)) return null;
  if (!pinCheck().needUnlock || getClientVar('UBT_AppManager.PIN_HasUnlocked')) return null;
  setAppCallbackCurrentLocation(pathname);
  // after the unlock the original returns to the screen that was opened (shell-observed: Menu → PINUnlock → Menu);
  // PINUnlock reads UBTConnect.LastURL (CR-PINUnlock-1)
  setClientVar('UBTConnect.LastURL', `${pathname}${window.location.search}`);
  return PATHS.pinUnlock;
}

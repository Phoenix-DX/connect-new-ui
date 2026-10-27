import {
  afterInitialize,
  appCache,
  fetchCacheableHouseholds,
  fetchCacheableMapEntities,
  type ClientConfig,
} from '@/api/app';
import { putCacheableObject } from '@/api/client/cache';
import { exceptionMessage, isSystemException, raiseToFlowHandler } from '@/legacy/os/exceptions';
import { loadFlags } from '@/platform/flags';
import { log } from '@/platform/log/log';
import { onApplicationReady_BottomBarSlider } from '@/lib/ubtConnectLibrary/actions';
import { deviceContext } from '@/platform/device/deviceContext';
import { loadOrbitStaticEntities } from '@/platform/storage/localEntities';
import { screenOf } from '@/platform/navigation/paths';
import { isSignedIn, markAppReady, reloadSessionState, setClientVar } from '@/platform/session/session';
import { holdUserInfoForAppStart, releaseUserInfoForAppStart } from '@/platform/session/userInfo';
import { connectSetLoggedContext } from './postLogin';
import { NO_LOCAL_ENTITIES, syncInfoMain, synchAppContext, type SyncLocalEntities } from './startup';

/* App start (app-shell.spec.md section 10; UBTConnect.OnApplicationReady UC:15265-15400) as a list of named steps
   (plan v2 §3.2), with the same calls in the same order and conditions as TST:
     signed out: SynchAppContext → Sync_Info_GetMain
     signed in:  SynchAppContext → AfterInitialize (CheckDeviceOnReady) → Sync_Info_GetMain → GetUserInformation (user-info
                 cache miss) → GetNumberUnreadMessages → CacheableMapEntities + CacheableHouseholds (together, not awaited)
   Get_RuntimeVersion and GetCacheInfo belong to blocks (App_Common.Version, CacheControl_*), not to the app start.
   A step that does its work at once returns nothing, and the next step starts in the same task. */

/** What a step passes on to the next steps. */
export interface AppStartContext {
  /** AppManager_ClientConfig of SynchAppContext; null after a communication error */
  config: ClientConfig | null;
  /** the local-entity outputs of Sync_Info_Main */
  localEntities: SyncLocalEntities;
  /** the user was signed in when the logged context started: the map data follows it (one condition, UC:15367-15370) */
  loggedContext: boolean;
}

export type AppStartStepName =
  | 'synchAppContext'
  | 'fetchFlags'
  | 'initializeWebComponents'
  | 'bottomBarSlider'
  | 'waitForFirstScreen'
  | 'syncInfoMain'
  | 'setLoggedContext'
  | 'cacheableMapData';

export interface AppStartStep {
  name: AppStartStepName;
  run(context: AppStartContext): Promise<void> | void;
}

/** A context before the first step. */
export const newAppStartContext = (): AppStartContext => ({
  config: null,
  localEntities: NO_LOCAL_ENTITIES,
  loggedContext: false,
});

/** AppManager_InitializeWebComponents (AM:2850-3023) and AppManager_AfterInitialize (AM:1-94). PIN_HasUnlocked needs no
    reset: it is tab-scoped (clientVars.ts). The PIN_EnforceOnReady branch of AfterInitialize is off on TST (U2). */
async function initializeWebComponents(config: ClientConfig | null): Promise<void> {
  const context = deviceContext(config?.AppManager_ClientCache.PackageName ?? '');
  setClientVar('UBT_AppManager.PIN_IsLocked', false);
  if (!config?.CheckDeviceOnReady || !isSignedIn()) return;
  await afterInitialize({
    EspaceName: config.EspaceName,
    AppManager_MobileContext: context,
    TOTP: '', // Streamline TOTP callback: none on the web
  });
}

/** Map objects cached for 7200 s under the CacheableMapObjects static entity (UC:3469-3610; appCache.mapObject). */
const cacheMapObject = (name: string, value: unknown) => {
  putCacheableObject(appCache.mapObject(name), value);
};

/** Async_FetchCacheableMapEntitiesJS (UC:15514-15519): both requests start together and are not awaited. */
function fetchCacheableMapData(): void {
  void fetchCacheableMapEntities()
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
  void fetchCacheableHouseholds()
    .then((households) => {
      // one list per part of each record, as the original splits them (the mapper of api/app)
      cacheMapObject('Households', households.markers);
      cacheMapObject('HouseholdsExploreItems', households.exploreItems);
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

/** The steps of the app start, in the order of OnApplicationReady (UC:15265-15400). Each step checks its own condition
    when it starts, as the original does. `fetchFlags` is not in OnApplicationReady (each OutSystems flag is a server
    check where it is read): the flags of the user load before the session status leaves `starting` (plan v2 §3.1
    rule 3). In the mock phase it makes no call: the server values are the registry defaults. */
export const APP_START_STEPS: readonly AppStartStep[] = [
  {
    name: 'synchAppContext',
    run: async (context) => {
      context.config = await synchAppContext();
    },
  },
  { name: 'fetchFlags', run: () => loadFlags() },
  { name: 'initializeWebComponents', run: (context) => initializeWebComponents(context.config) },
  // CheckKeyboardPlugin (native only), OnApplicationReady_BottomBarSlider (UC:15318-15326, CR-HomeFeed-3)
  {
    name: 'bottomBarSlider',
    run: () => {
      onApplicationReady_BottomBarSlider();
    },
  },
  { name: 'waitForFirstScreen', run: () => (isSignedIn() ? waitForFirstScreen() : undefined) },
  {
    name: 'syncInfoMain',
    run: async (context) => {
      context.localEntities = await syncInfoMain(false);
    },
  },
  {
    name: 'setLoggedContext',
    run: (context) => {
      if (!isSignedIn()) return;
      context.loggedContext = true;
      const { notes, bookmarks, bookmarks_C2 } = context.localEntities;
      return connectSetLoggedContext(false, notes, bookmarks, bookmarks_C2);
    },
  },
  {
    name: 'cacheableMapData',
    run: (context) => {
      if (context.loggedContext) fetchCacheableMapData();
    },
  },
];

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
  const context = newAppStartContext();
  try {
    // AppManager_Mobile_OnAppReady (p:UBT_AppManager_Mobile.controller.js:112-128, 244-245)
    if (isSignedIn()) holdUserInfoForAppStart();
    for (const step of APP_START_STEPS) {
      const pending = step.run(context);
      if (pending instanceof Promise) await pending;
    }
  } catch (e) {
    log.error('OnApplicationReady failed', e);
    // Handle Error: AllExceptions (UC:15398-15417): a non-system exception goes, as its message, to
    // ScreenController_RaiseError, which calls handleError(new Error(message)) (JSU:3900). The App_Common handler then
    // shows ShowExceptionMessage(message, False) (shell-facts U10; _shared F3, C3, user 2026-10-27). A system exception
    // (OS.Exceptions.isSystem) is not handled there (`throw ex`): it is only logged.
    if (!isSystemException(e)) raiseToFlowHandler(new Error(exceptionMessage(e)));
  } finally {
    releaseUserInfoForAppStart();
    markAppReady(); // session machine: starting → the status of the stored session (appStartDone)
  }
}

let started: Promise<void> | null = null;

/** Runs the app start once per page load (StrictMode renders twice). */
export function startApp(): Promise<void> {
  return (started ??= runAppStart());
}

/** Forgets that the app started, as a new page load does (tests): the session status is `starting` again. */
export function resetAppStart(): void {
  started = null;
  firstScreenRendered = false;
  firstScreenWaiters.clear();
  releaseUserInfoForAppStart();
  reloadSessionState();
}

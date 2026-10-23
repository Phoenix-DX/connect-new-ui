import { http, HttpResponse } from 'msw';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import { server } from '@/test/setup';
import { appCache } from '@/api/app';
import { peekCacheableObject, putCacheableObject } from '@/api/client/cache';
import { memberCache } from '@/api/member';
import { MOCK_USER_ID, mockUserInformation } from '@/platform/session/mockUser';
import { registerPin } from '@/platform/session/pin';
import { getClientVar, getShellState, setClientVar, setSignedInUser } from '@/platform/session/session';
import { getSessionStatus } from '@/platform/session/machine';
import { getSetting, getSettings, setSettings } from '@/platform/settings';
import { flagValue } from '@/platform/flags';
import {
  APP_START_STEPS,
  newAppStartContext,
  startApp,
  type AppStartContext,
  type AppStartStepName,
} from './appStartSteps';
import { getLocalOrbitMilestoneTypeById, getLocalSurveyStatusByJSONName } from '@/platform/storage/localEntities';
import { getUserInformation } from '@/platform/session/userInfo';
import { calledActions, freshPage, recordBodies, reloadPage, setFlags } from '@/test/testSupport';

/* The bottom-bar slider step: the real OnApplicationReady_BottomBarSlider runs, and the test counts its calls. */
const slider = vi.hoisted(() => ({ calls: 0 }));
vi.mock('@/shared/UBTConnectLibrary/lib/actions', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@/shared/UBTConnectLibrary/lib/actions')>();
  return {
    ...actual,
    onApplicationReady_BottomBarSlider: () => {
      slider.calls += 1;
      actual.onApplicationReady_BottomBarSlider();
    },
  };
});

beforeEach(() => {
  freshPage();
  vi.spyOn(console, 'warn').mockImplementation(() => undefined); // recordedHandler: anonymised inputs never match
});

const waitForMapCalls = () =>
  vi.waitFor(() => {
    expect(peekCacheableObject(appCache.mapObject('Households')).hit).toBe(true);
  });

describe('signed-out load (spec 10; shell-observed U1)', () => {
  test('calls SynchAppContext then Sync_Info_GetMain only', async () => {
    await startApp();
    expect(calledActions()).toEqual(['ActionAppManager_SynchAppContext', 'ActionSync_Info_GetMain']);
    expect(getShellState().appReady).toBe(true);
  });

  test('applies the TST settings of SynchAppContext (shell-observed U2)', async () => {
    await startApp();
    expect(getClientVar('UBT_AppManager.PIN_Use')).toBe(true);
    expect(getClientVar('UBT_AppManager.PIN_SessionInactivity_Use')).toBe(true);
    expect(getClientVar('UBT_AppManager.PIN_SessionInactivity_Seconds')).toBe(1200);
    expect(getClientVar('UBT_AppManager.PIN_SessionInactivity_Navigate')).toBe(false);
    expect(getClientVar('UBT_AppManager.PIN_EnforceOnReady')).toBe(false);
    expect(getClientVar('UBT_AppManager.PIN_EnableFingerprint')).toBe(true);
    expect(getClientVar('UBT_AppManager.MinWebViewVersion_Chrome')).toBe('');
  });

  test('writes the settings of SynchAppContext into the settings store (P4-1)', async () => {
    await startApp();
    expect(getSettings()).toEqual({
      'pin.enabled': true,
      'pin.inactivity.enabled': true,
      'pin.inactivity.seconds': 1200,
      'pin.inactivity.navigate': false,
      'pin.enforceOnReady': false,
      'pin.fingerprint': true,
      'app.environment': 'TST',
      'app.minNativeVersion': '',
      'app.minWebViewChrome': '',
      'app.minWebViewSafari': '',
      'insights.enabled': true,
    });
  });

  test('a communication error keeps the stored settings (empty config)', async () => {
    setSettings({ 'pin.enabled': true, 'pin.inactivity.seconds': 600 });
    server.use(
      http.post('/api/UBT_AppManager/ActionAppManager_SynchAppContext', () =>
        HttpResponse.json({ error: 'x' }, { status: 500 }),
      ),
    );
    await startApp();
    expect(getSetting('pin.enabled')).toBe(true);
    expect(getSetting('pin.inactivity.seconds')).toBe(600);
  });

  test('sends the module name and isFromLogin false', async () => {
    const synch = recordBodies('UBT_AppManager/ActionAppManager_SynchAppContext');
    const main = recordBodies('UBTConnect/ActionSync_Info_GetMain');
    await startApp();
    expect(synch).toEqual([{ EspaceName: 'UBTConnect' }]);
    expect(main).toEqual([{ isFromLogin: false }]);
  });
});

describe('signed-in load (spec 10; shell-observed U3)', () => {
  beforeEach(() => {
    setSignedInUser(MOCK_USER_ID);
  });

  test('calls the app-start actions in the TST order', async () => {
    await startApp();
    await waitForMapCalls();
    expect(calledActions()).toEqual([
      'ActionAppManager_SynchAppContext',
      'ActionAppManager_AfterInitialize',
      'ActionSync_Info_GetMain',
      'ActionGetUserInformation',
      'ActionGetNumberUnreadMessages',
      'ServiceAPIFetchData_CacheableMapEntities',
      'ServiceAPIFetchData_CacheableHouseholds',
    ]);
  });

  test('sends a web device context with a WEB_ UUID, also used for the unread count', async () => {
    const after = recordBodies('UBT_AppManager/ActionAppManager_AfterInitialize');
    const unread = recordBodies('Connect2_LegacyShared/ActionGetNumberUnreadMessages');
    await startApp();
    const uuid = getClientVar('UBT_AppManager.DeviceInfo_UUID');
    expect(uuid).toMatch(/^WEB_[0-9a-f-]{36}$/);
    expect(after).toEqual([
      {
        EspaceName: 'UBTConnect',
        TOTP: '',
        AppManager_MobileContext: expect.objectContaining({ UUID: uuid, isNativeDevice: false }) as unknown,
      },
    ]);
    expect(unread).toEqual([{ DeviceId: uuid }]);
  });

  test('keeps what the original keeps: unread counts, sync flags, policies flag', async () => {
    setClientVar('UBTConnect.IsNavigateToHomeOnBack', true);
    await startApp();
    expect(getClientVar('Connect2_LegacyShared.UnreadNotificationsNumber')).toBe(6); // recorded 0 public + 6 private
    expect(getClientVar('Connect2_LegacyShared.UnreadPublicMessagesNumber')).toBe(0);
    expect(getClientVar('UBTConnect.Bookmarks_IsSynched')).toBe(true);
    expect(getClientVar('UBTConnect.Notes_IsSynched')).toBe(true);
    expect(getClientVar('UBTConnect.Notifications_IsSynched')).toBe(true);
    expect(getClientVar('UBTConnect.Notifications_LastChecked')).not.toBe('1900-01-01T00:00:00');
    expect(getClientVar('UBTConnect.App_Policies_HasPolicyToAccept')).toBe(false);
    expect(getClientVar('UBTConnect.IsNavigateToHomeOnBack')).toBe(false);
  });

  test('a user-info cache hit (CacheControl_UserInfo on Menu) skips GetUserInformation', async () => {
    putCacheableObject(memberCache.userInfo('Unique'), mockUserInformation());
    await startApp();
    expect(calledActions()).not.toContain('ActionGetUserInformation');
  });

  test('pending policies of the mock user set App_Policies_HasPolicyToAccept', async () => {
    window.history.replaceState(null, '', '/UBTConnect/HomeFeed?mockuser=policies');
    await startApp();
    expect(getClientVar('UBTConnect.App_Policies_HasPolicyToAccept')).toBe(true);
    window.history.replaceState(null, '', '/');
  });

  test('PIN_IsLocked is reset at every start', async () => {
    setClientVar('UBT_AppManager.PIN_IsLocked', true);
    await startApp();
    expect(getClientVar('UBT_AppManager.PIN_IsLocked')).toBe(false);
  });
});

test('the app starts once per page load', async () => {
  await Promise.all([startApp(), startApp()]);
  expect(calledActions().filter((a) => a === 'ActionAppManager_SynchAppContext')).toHaveLength(1);
});

test('a failing app start is logged and the app is still ready', async () => {
  const error = vi.spyOn(console, 'error').mockImplementation(() => undefined);
  // 404: ViewHasChangedException in the runtime (OutSystems.js:3), not handled by AppManager_SynchAppContextInternal
  server.use(
    http.post('/api/UBT_AppManager/ActionAppManager_SynchAppContext', () =>
      HttpResponse.json({ error: 'x' }, { status: 404 }),
    ),
  );
  await startApp();
  expect(calledActions()).toEqual(['ActionAppManager_SynchAppContext']);
  expect(getShellState().appReady).toBe(true);
  expect(error).toHaveBeenCalled();
});

test('every call failing (HTTP 500 = CommunicationException, OutSystems.js:3): the signed-in start still sets the sync flags', async () => {
  server.use(http.post('/api/*', () => HttpResponse.json({ error: 'x' }, { status: 500 })));
  setSignedInUser(MOCK_USER_ID);
  await startApp();
  expect(getClientVar('UBTConnect.Notifications_IsSynched')).toBe(true); // UC:1156-1157
  expect(getClientVar('UBTConnect.Bookmarks_IsSynched')).toBe(true);
  expect(getShellState().appReady).toBe(true);
});

test('the app start syncs the Orbit static entities of Sync_Info_GetMain (UC:16579-16583, CR-EventDetail-1)', async () => {
  setSignedInUser(MOCK_USER_ID);
  await startApp();
  expect(getLocalSurveyStatusByJSONName('confirmed')).toEqual([{ Id: 2, Label: 'Confirmed', JSON_Name: 'confirmed' }]);
  expect(getLocalOrbitMilestoneTypeById('helper-host').MainIcon).toBe('orbit-icon-person-wave');
});

test('a failing Sync_Info_GetMain is swallowed like its AllExceptions handler', async () => {
  server.use(http.post('/api/UBTConnect/ActionSync_Info_GetMain', () => HttpResponse.json({}, { status: 500 })));
  setSignedInUser(MOCK_USER_ID);
  await startApp();
  expect(calledActions()).toContain('ActionGetNumberUnreadMessages');
});

describe('the end of the app start writes the session machine (plan v2 §3.2)', () => {
  test('before: starting; signed out: signedOut', async () => {
    expect(getSessionStatus()).toEqual({ status: 'starting' });
    await startApp();
    expect(getSessionStatus()).toEqual({ status: 'signedOut' });
  });

  test('signed in, no local PIN (PIN_Use of TST): needPinRegister', async () => {
    setSignedInUser(MOCK_USER_ID);
    await startApp();
    expect(getSessionStatus()).toEqual({ status: 'needPinRegister', userId: MOCK_USER_ID });
  });

  test('local PIN: a new tab is locked (with the opened location), the unlocked tab reloads unlocked', async () => {
    setClientVar('UBT_AppManager.PIN_Use', true);
    setSignedInUser(MOCK_USER_ID);
    await registerPin('2468');
    reloadPage({ newTab: true });
    window.history.replaceState(null, '', '/UBTConnect/Menu?x=1');
    try {
      await startApp();
    } finally {
      window.history.replaceState(null, '', '/');
    }
    expect(getSessionStatus()).toEqual({ status: 'locked', userId: MOCK_USER_ID, returnTo: '/UBTConnect/Menu?x=1' });
    setClientVar('UBT_AppManager.PIN_HasUnlocked', true);
    reloadPage();
    expect(getSessionStatus()).toEqual({ status: 'starting' });
    await startApp();
    expect(getSessionStatus()).toEqual({ status: 'unlocked', userId: MOCK_USER_ID });
  });
});

const frame = () => {
  const container = document.createElement('div');
  container.id = 'transitionContainer';
  document.body.append(container);
  return container;
};
const firstScreen = () => {
  window.dispatchEvent(new CustomEvent('dx-navigation-transition-end', { detail: {} }));
};

describe('first screen before AfterInitialize (CR-Search-3; calls.json of Search, HomeFeed, MyEntertaining)', () => {
  beforeEach(() => {
    setSignedInUser(MOCK_USER_ID);
    window.history.pushState({}, '', '/UBTConnect/Search');
  });

  test('a screen that fills the user-info cache before AfterInitialize causes no GetUserInformation', async () => {
    const container = frame();
    try {
      const start = startApp();
      await vi.waitFor(() => {
        expect(calledActions()).toEqual(['ActionAppManager_SynchAppContext', 'ActionAppManager_AfterInitialize']);
      });
      // the screen's CacheControl_UserInfo answer (CacheControl_UserInfo.tsx:35-40), then ScreenFrame's first event
      putCacheableObject(memberCache.userInfo(getClientVar('UBTConnect_Utils.UniqueCacheKey')), mockUserInformation());
      firstScreen();
      await start;
      expect(calledActions()).not.toContain('ActionGetUserInformation');
      expect(calledActions().slice(0, 2)).toEqual([
        'ActionAppManager_SynchAppContext',
        'ActionAppManager_AfterInitialize',
      ]);
    } finally {
      container.remove();
    }
  });

  test('a screen without CacheControl_UserInfo: GetUserInformation as in HomeFeed and MyEntertaining', async () => {
    const container = frame();
    try {
      const start = startApp();
      firstScreen();
      await start;
      expect(calledActions()).toContain('ActionGetUserInformation');
    } finally {
      container.remove();
    }
  });

  test("a screen's user-info reader waits for the app start's step: one call, after Sync_Info_GetMain (PINRegister)", async () => {
    const container = frame();
    try {
      const start = startApp();
      const reader = getUserInformation();
      firstScreen();
      await Promise.all([start, reader]);
      const calls = calledActions();
      expect(calls.filter((c) => c === 'ActionGetUserInformation')).toHaveLength(1);
      expect(calls.indexOf('ActionGetUserInformation')).toBeGreaterThan(calls.indexOf('ActionSync_Info_GetMain'));
    } finally {
      container.remove();
    }
  });

  test('a path that shows no screen does not wait', async () => {
    const container = frame();
    window.history.pushState({}, '', '/UBTConnect/NoSuchScreen');
    try {
      await startApp();
      expect(getShellState().appReady).toBe(true);
    } finally {
      container.remove();
    }
  });
});

describe('the named steps of the app start (plan v2 §3.2)', () => {
  const step = (name: AppStartStepName) => {
    const found = APP_START_STEPS.find((s) => s.name === name);
    if (!found) throw new Error(`no app-start step ${name}`);
    return found;
  };
  /** Runs one step, and waits for it when it returns a promise. */
  const run = async (name: AppStartStepName, context: AppStartContext = newAppStartContext()) => {
    await step(name).run(context);
    return context;
  };

  test('in the order of OnApplicationReady (UC:15265-15400), with the flags after SynchAppContext', () => {
    expect(APP_START_STEPS.map((s) => s.name)).toEqual([
      'synchAppContext',
      'fetchFlags',
      'initializeWebComponents',
      'bottomBarSlider',
      'waitForFirstScreen',
      'syncInfoMain',
      'setLoggedContext',
      'cacheableMapData',
    ]);
  });

  test('synchAppContext: one call; the settings go to the store and the config to the next steps', async () => {
    const context = await run('synchAppContext');
    expect(calledActions()).toEqual(['ActionAppManager_SynchAppContext']);
    expect(context.config?.CheckDeviceOnReady).toBe(true);
    expect(getSetting('pin.enabled')).toBe(true);
  });

  test('fetchFlags: no call in the mock phase; the server values are the defaults, below the overrides', async () => {
    setFlags({ C2NewNotifications: true });
    try {
      await run('fetchFlags');
      expect(calledActions()).toEqual([]);
      expect(flagValue('C2NewNotifications')).toBe(true); // override
      expect(flagValue('C2EnableCarousel')).toBe(true); // default on
      expect(flagValue('C2NewBookmarks')).toBe(false); // default off
    } finally {
      setFlags({});
    }
  });

  test('initializeWebComponents: PIN_IsLocked reset; AfterInitialize only signed in, with CheckDeviceOnReady', async () => {
    const { config } = await run('synchAppContext');
    window.__osCalls = [];
    setClientVar('UBT_AppManager.PIN_IsLocked', true);
    await run('initializeWebComponents', { ...newAppStartContext(), config });
    expect(getClientVar('UBT_AppManager.PIN_IsLocked')).toBe(false);
    expect(calledActions()).toEqual([]); // signed out
    setSignedInUser(MOCK_USER_ID);
    await run('initializeWebComponents'); // no config: SynchAppContext had a communication error
    expect(calledActions()).toEqual([]);
    await run('initializeWebComponents', { ...newAppStartContext(), config });
    expect(calledActions()).toEqual(['ActionAppManager_AfterInitialize']);
  });

  test('bottomBarSlider: OnApplicationReady_BottomBarSlider, at once', () => {
    const before = slider.calls;
    expect(step('bottomBarSlider').run(newAppStartContext())).toBeUndefined();
    expect(slider.calls).toBe(before + 1);
    expect(calledActions()).toEqual([]);
  });

  test('waitForFirstScreen: signed out, no wait; signed in, until the first screen rendered', async () => {
    const container = frame();
    window.history.pushState({}, '', '/UBTConnect/Search');
    try {
      expect(step('waitForFirstScreen').run(newAppStartContext())).toBeUndefined();
      setSignedInUser(MOCK_USER_ID);
      let done = false;
      const waiting = Promise.resolve(step('waitForFirstScreen').run(newAppStartContext())).then(() => {
        done = true;
      });
      await Promise.resolve();
      expect(done).toBe(false);
      firstScreen();
      await waiting;
      expect(done).toBe(true);
    } finally {
      container.remove();
      window.history.replaceState(null, '', '/');
    }
  });

  test('syncInfoMain: Sync_Info_GetMain with isFromLogin false; its local entities go to the next steps', async () => {
    const main = recordBodies('UBTConnect/ActionSync_Info_GetMain');
    const context = await run('syncInfoMain');
    expect(calledActions()).toEqual(['ActionSync_Info_GetMain']);
    expect(main).toEqual([{ isFromLogin: false }]);
    expect(context.localEntities.bookmarks.length).toBeGreaterThan(0);
    expect(context.localEntities.bookmarks_C2).toEqual([]);
  });

  test('setLoggedContext: signed out, nothing; signed in, Connect_SetLoggedContext(isFromLogin = False)', async () => {
    const signedOut = await run('setLoggedContext');
    expect(signedOut.loggedContext).toBe(false);
    expect(calledActions()).toEqual([]);
    expect(getClientVar('UBTConnect.Bookmarks_IsSynched')).toBe(false);
    setSignedInUser(MOCK_USER_ID);
    setClientVar('UBT_AppManager.DeviceInfo_UUID', 'WEB_test');
    const signedIn = await run('setLoggedContext');
    expect(signedIn.loggedContext).toBe(true);
    // the local entities come from the step before: no Sync_Info_GetMain of its own
    expect(calledActions()).toEqual(['ActionGetUserInformation', 'ActionGetNumberUnreadMessages']);
    expect(getClientVar('UBTConnect.Bookmarks_IsSynched')).toBe(true);
    expect(getClientVar('UBTConnect.Notes_IsSynched')).toBe(true);
    expect(getClientVar('UBTConnect.Notifications_IsSynched')).toBe(true);
  });

  test('cacheableMapData: only after the logged context; both requests start at once, not awaited', async () => {
    expect(step('cacheableMapData').run(newAppStartContext())).toBeUndefined();
    expect(calledActions()).toEqual([]);
    expect(step('cacheableMapData').run({ ...newAppStartContext(), loggedContext: true })).toBeUndefined();
    expect(calledActions()).toEqual([
      'ServiceAPIFetchData_CacheableMapEntities',
      'ServiceAPIFetchData_CacheableHouseholds',
    ]);
    await waitForMapCalls();
  });
});

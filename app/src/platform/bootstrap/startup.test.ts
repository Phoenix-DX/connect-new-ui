import { http, HttpResponse } from 'msw';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import { server } from '@/test/setup';
import { CACHE_TYPE, peekCacheableObject, putCacheableObject } from '@/platform/storage/memoryCache';
import { MOCK_USER_ID, mockUserInformation } from '@/platform/session/mockUser';
import { registerPin } from '@/platform/session/pin';
import { getClientVar, getShellState, setClientVar, setSignedInUser } from '@/platform/session/session';
import { pinUnlockRedirect, signedOutRedirect, startApp, synchronizeNumberUnreadMessages } from './startup';
import { getLocalOrbitMilestoneTypeById, getLocalSurveyStatusByJSONName } from '@/platform/storage/localEntities';
import { getUserInformation } from '@/platform/session/userInfo';
import { calledActions, freshPage, recordBodies, reloadPage } from '@/test/testSupport';

beforeEach(() => {
  freshPage();
  vi.spyOn(console, 'warn').mockImplementation(() => undefined); // recordedHandler: anonymised inputs never match
});

const waitForMapCalls = () =>
  vi.waitFor(() => {
    expect(peekCacheableObject('CacheableMapObjects.Households', 'CacheableMapObjects.Households').hit).toBe(true);
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
    putCacheableObject(CACHE_TYPE.directoryUser, 'Unique', mockUserInformation(), 7200);
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

describe('redirects after the app start', () => {
  test('signed out on a protected screen: Login with the flag, path kept as sign-in callback', () => {
    expect(signedOutRedirect('/UBTConnect/HomeFeed')).toBe('/UBTConnect/Login?In_IsFromInvalidPermissions=True');
    expect(getClientVar('UBT_AppManager.OutSystems_LastURL')).toBe('/UBTConnect/HomeFeed');
  });

  test('signed out: the default screen behind /UBTConnect/ is protected too', () => {
    expect(signedOutRedirect('/UBTConnect/')).toBe('/UBTConnect/Login?In_IsFromInvalidPermissions=True');
  });

  test('signed out on an anonymous screen or an unknown path: no redirect', () => {
    for (const path of ['/UBTConnect/Login', '/UBTConnect/ContactUsMenu', '/UBTConnect/Locality_Details', '/x']) {
      expect(signedOutRedirect(path)).toBeNull();
    }
  });

  test('signed in, local PIN, tab not unlocked: PINUnlock', async () => {
    setClientVar('UBT_AppManager.PIN_Use', true);
    setSignedInUser(MOCK_USER_ID);
    await registerPin('2468');
    expect(pinUnlockRedirect('/UBTConnect/Menu')).toBeNull(); // the registering tab is unlocked
    reloadPage({ newTab: true });
    expect(pinUnlockRedirect('/UBTConnect/Login')).toBeNull(); // CommonUI ignores the lock screen there
    expect(pinUnlockRedirect('/UBTConnect/Menu')).toBe('/UBTConnect/PINUnlock');
    expect(getClientVar('UBT_AppManager.OutSystems_LastURL')).toBe('/UBTConnect/Menu');
    expect(getClientVar('UBTConnect.LastURL')).toBe('/UBTConnect/Menu'); // PINUnlock returns there (CR-PINUnlock-1)
  });

  test('signed in without a local PIN: no unlock redirect', () => {
    setClientVar('UBT_AppManager.PIN_Use', true);
    setSignedInUser(MOCK_USER_ID);
    expect(pinUnlockRedirect('/UBTConnect/HomeFeed')).toBeNull();
  });
});

describe('first screen before AfterInitialize (CR-Search-3; calls.json of Search, HomeFeed, MyEntertaining)', () => {
  const frame = () => {
    const container = document.createElement('div');
    container.id = 'transitionContainer';
    document.body.append(container);
    return container;
  };
  const firstScreen = () => {
    window.dispatchEvent(new CustomEvent('dx-navigation-transition-end', { detail: {} }));
  };

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
      putCacheableObject(
        CACHE_TYPE.directoryUser,
        getClientVar('UBTConnect_Utils.UniqueCacheKey'),
        mockUserInformation(),
        7200,
      );
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

describe('synchronizeNumberUnreadMessages (exported for screens, CR-MessageList-1)', () => {
  const answer = (body: object) => {
    server.use(
      http.post('/api/Connect2_LegacyShared/ActionGetNumberUnreadMessages', () =>
        HttpResponse.json(body, { status: 500 }),
      ),
    );
  };

  test('without a device UUID it calls nothing (Connect2_LegacyShared.controller.js:7499)', async () => {
    await synchronizeNumberUnreadMessages();
    expect(calledActions()).toEqual([]);
  });

  test('stores public + private and public (StoreNumberUnreadMessages, :7507)', async () => {
    setClientVar('UBT_AppManager.DeviceInfo_UUID', 'WEB_test');
    await synchronizeNumberUnreadMessages();
    expect(calledActions()).toEqual(['ActionGetNumberUnreadMessages']);
    expect(getClientVar('Connect2_LegacyShared.UnreadNotificationsNumber')).toBe(6); // recorded 0 public + 6 private
    expect(getClientVar('Connect2_LegacyShared.UnreadPublicMessagesNumber')).toBe(0);
  });

  test('swallows OnlineCommunicationException (:7517) and CommunicationException (:7530), raises the rest (:7543)', async () => {
    setClientVar('UBT_AppManager.DeviceInfo_UUID', 'WEB_test');
    answer({
      error: 'offline',
      exception: 'UserException',
      specificType: 'Connect2_LegacyShared.OnlineCommunicationException',
    });
    await expect(synchronizeNumberUnreadMessages()).resolves.toBeUndefined();
    answer({ error: 'x' }); // not the contract's error answer: CommunicationException (OutSystems.js:3)
    await expect(synchronizeNumberUnreadMessages()).resolves.toBeUndefined();
    answer({ error: 'other', exception: 'UserException', specificType: 'Connect2_LegacyShared.ObjectNotFound' });
    await expect(synchronizeNumberUnreadMessages()).rejects.toThrow('other');
    expect(getClientVar('Connect2_LegacyShared.UnreadNotificationsNumber')).toBe(0);
  });
});

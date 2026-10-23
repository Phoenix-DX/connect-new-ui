import { http, HttpResponse } from 'msw';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import { server } from '@/test/setup';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { registerPin } from '@/platform/session/pin';
import { getClientVar, setClientVar, setSignedInUser } from '@/platform/session/session';
import { pinUnlockRedirect, signedOutRedirect, synchronizeNumberUnreadMessages } from './startup';
import { calledActions, freshPage, reloadPage } from '@/test/testSupport';

/* The app start itself (startApp, its named steps): appStartSteps.test.ts. */

beforeEach(() => {
  freshPage();
  vi.spyOn(console, 'warn').mockImplementation(() => undefined); // recordedHandler: anonymised inputs never match
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

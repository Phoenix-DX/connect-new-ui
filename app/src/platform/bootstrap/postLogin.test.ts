import { beforeEach, describe, expect, test, vi } from 'vitest';
import { getClientVar, setClientVar, setSignedInUser } from '@/platform/session/session';
import { postLogin } from './postLogin';
import { calledActions, freshPage, recordBodies } from '@/test/testSupport';

beforeEach(() => {
  freshPage();
  vi.spyOn(console, 'warn').mockImplementation(() => undefined); // recordedHandler: anonymised inputs never match
  setClientVar('UBT_AppManager.DeviceInfo_UUID', 'WEB_test');
});

describe('postLogin: what the Login callback runs once the user is signed in (Login.mvc.js:836-870)', () => {
  test('Connect_SetLoggedContext(isFromLogin = True): GetUserInformation, Sync_Info_GetMain, GetNumberUnreadMessages', async () => {
    const main = recordBodies('UBTConnect/ActionSync_Info_GetMain');
    setSignedInUser('424242'); // any user: the sequence does not depend on the identity provider
    await postLogin();
    expect(calledActions()).toEqual([
      'ActionGetUserInformation',
      'ActionSync_Info_GetMain',
      'ActionGetNumberUnreadMessages',
    ]);
    expect(main).toEqual([{ isFromLogin: true }]);
    expect(getClientVar('UBTConnect.Bookmarks_IsSynched')).toBe(true);
    expect(getClientVar('UBTConnect.Notes_IsSynched')).toBe(true);
    expect(getClientVar('UBTConnect.Notifications_IsSynched')).toBe(true);
    expect(getClientVar('UBTConnect.Notifications_LastChecked')).toMatch(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d$/);
  });

  test('signed out: no call (Connect_SetLoggedContext runs signed in only)', async () => {
    await postLogin();
    expect(calledActions()).toEqual([]);
    expect(getClientVar('UBTConnect.Notifications_IsSynched')).toBe(false);
  });
});

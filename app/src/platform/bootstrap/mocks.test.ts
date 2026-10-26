import { beforeEach, expect, test, vi } from 'vitest';
import { callAction } from '@/api/client/callAction';
import { mockDirectoryUser } from '@/platform/session/mockUser';
import { freshPage } from '@/test/testSupport';

beforeEach(() => {
  freshPage();
  window.history.replaceState(null, '', '/');
  vi.spyOn(console, 'warn').mockImplementation(() => undefined);
});

test('CacheControl_UserInfo GetCacheInfo: recorded answer with Directory_UserCurrent from the mock user', async () => {
  const out = await callAction('UBTConnect_Utils', 'CacheControl_UserInfo/DataActionGetCacheInfo', {
    CacheKey: 'Unique',
  });
  expect(out.TTL).toBe(7200); // recorded
  expect(out.CacheControl_Response.HasPoliciesToAccept).toBe(false); // recorded, and the mock user's default
  expect(out.CacheControl_Response.Directory_UserCurrent).toEqual(mockDirectoryUser());
});

test('the user toggles reach both user-info calls', async () => {
  window.history.replaceState(null, '', '/UBTConnect/Menu?mockuser=policies');
  const cache = await callAction('UBTConnect_Utils', 'CacheControl_UserInfo/DataActionGetCacheInfo', {});
  const info = await callAction('UBTConnect_Utils', 'ActionGetUserInformation', {});
  expect(cache.CacheControl_Response.HasPoliciesToAccept).toBe(true);
  expect(info.UserInformation.HasPoliciesToAccept).toBe(true);
});

test('SynchAppContext carries the TST PIN settings and fictional keys only', async () => {
  const out = await callAction('UBT_AppManager', 'ActionAppManager_SynchAppContext', { EspaceName: 'UBTConnect' });
  expect(out.isSuccess).toBe(true);
  expect(out.AppManager_ClientConfig).toMatchObject({ EspaceName: 'UBTConnect', CheckDeviceOnReady: true });
  expect(out.AppManager_ClientConfig.AppManager_ClientCache).toMatchObject({
    PIN_Use: true,
    PIN_SessionInactivity_Use: true,
    PIN_SessionInactivity_Seconds: 1200,
    PIN_SessionInactivity_Navigate: false,
    PIN_EnforceOnReady: false,
    PIN_EnableFingerprint: true,
    MinNativeAppVersion: '',
  });
  expect(JSON.stringify(out)).not.toMatch(/ubtconnectglobal|b2clogin|firebaseio|applicationinsights/i);
});

test('shell-block calls answer the recorded fixtures', async () => {
  await expect(callAction('UBTConnect_Utils', 'ActionGet_RuntimeVersion', {})).resolves.toEqual({
    Out_RuntimeVersion: 61,
    Out_Name: '',
  });
  const policies = await callAction('UBTConnect_Utils', 'CacheControl_Policies/DataActionGetCacheInfo', {});
  expect(policies.CacheControl_Response.PolicyInformation_PrivacyPolicy.Policy_ContentType).toBe('application/pdf');
  const unread = await callAction('UBTConnect', 'ServiceAPIGet_UI_UpdateItems_UnreadCount_All', {});
  expect(typeof unread.UnreadCount).toBe('number');
});

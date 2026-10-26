import { http, HttpResponse } from 'msw';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import { server } from '@/test/setup';
import { getClientVar, setClientVar } from '@/platform/session/session';
import { synchronizeNumberUnreadMessages } from './startup';
import { calledActions, freshPage } from '@/test/testSupport';

/* The app start itself (startApp, its named steps): appStartSteps.test.ts. The redirects after the app start (the
   route guard): app/RouteGuard.test.tsx. */

beforeEach(() => {
  freshPage();
  vi.spyOn(console, 'warn').mockImplementation(() => undefined); // recordedHandler: anonymised inputs never match
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

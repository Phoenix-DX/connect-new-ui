import { beforeEach, describe, expect, it } from 'vitest';
import { getClientVar } from '@/platform/session/session';
import { freshPage } from '@/test/testSupport';
import { setUnreadNotificationsNumber } from './unreadNotifications';

beforeEach(() => {
  freshPage();
});

describe('the unread counters of the message list', () => {
  it('SetUnreadNotificationsNumber sets UnreadNotificationsNumber', () => {
    setUnreadNotificationsNumber(7);
    expect(getClientVar('Connect2_LegacyShared.UnreadNotificationsNumber')).toBe(7);
  });
});

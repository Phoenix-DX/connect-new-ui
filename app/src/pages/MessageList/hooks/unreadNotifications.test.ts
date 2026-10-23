import { beforeEach, describe, expect, it } from 'vitest';
import { getClientVar } from '@/platform/session/session';
import { freshPage } from '@/test/testSupport';
import { decrementReadMessagesCounter, setUnreadNotificationsNumber } from './unreadNotifications';

beforeEach(() => {
  freshPage();
});

describe('the unread counters of the message list', () => {
  it('SetUnreadNotificationsNumber sets UnreadNotificationsNumber', () => {
    setUnreadNotificationsNumber(7);
    expect(getClientVar('Connect2_LegacyShared.UnreadNotificationsNumber')).toBe(7);
  });

  it('DecrementReadMessagesCounter lowers the count by 1, not below 0, and copies it to the public count', () => {
    setUnreadNotificationsNumber(2);
    decrementReadMessagesCounter();
    expect(getClientVar('Connect2_LegacyShared.UnreadNotificationsNumber')).toBe(1);
    expect(getClientVar('Connect2_LegacyShared.UnreadPublicMessagesNumber')).toBe(1);
    decrementReadMessagesCounter();
    decrementReadMessagesCounter();
    expect(getClientVar('Connect2_LegacyShared.UnreadNotificationsNumber')).toBe(0);
    expect(getClientVar('Connect2_LegacyShared.UnreadPublicMessagesNumber')).toBe(0);
  });
});

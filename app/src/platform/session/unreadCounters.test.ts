import { beforeEach, describe, expect, it } from 'vitest';
import { freshPage } from '@/test/testSupport';
import { decrementReadMessagesCounter } from './unreadCounters';
import { getClientVar, setClientVar } from './session';

beforeEach(() => {
  freshPage();
});

describe('the unread counters of the session', () => {
  it('DecrementReadMessagesCounter lowers the count by 1, not below 0, and copies it to the public count', () => {
    setClientVar('Connect2_LegacyShared.UnreadNotificationsNumber', 2);
    decrementReadMessagesCounter();
    expect(getClientVar('Connect2_LegacyShared.UnreadNotificationsNumber')).toBe(1);
    expect(getClientVar('Connect2_LegacyShared.UnreadPublicMessagesNumber')).toBe(1);
    decrementReadMessagesCounter();
    decrementReadMessagesCounter();
    expect(getClientVar('Connect2_LegacyShared.UnreadNotificationsNumber')).toBe(0);
    expect(getClientVar('Connect2_LegacyShared.UnreadPublicMessagesNumber')).toBe(0);
  });
});

import { getClientVar, setClientVar } from '@/platform/session/session';

/* The client actions of Connect2_LegacyShared that the message list flows call for the unread counters. */

/** SetUnreadNotificationsNumber: UnreadNotificationsNumber = the input. */
export function setUnreadNotificationsNumber(unreadNotificationsNumber: number): void {
  setClientVar('Connect2_LegacyShared.UnreadNotificationsNumber', unreadNotificationsNumber);
}

/** DecrementReadMessagesCounter: UnreadNotificationsNumber - 1 (not below 0), and UnreadPublicMessagesNumber = the new
    UnreadNotificationsNumber. */
export function decrementReadMessagesCounter(): void {
  const current = getClientVar('Connect2_LegacyShared.UnreadNotificationsNumber');
  const next = current > 0 ? current - 1 : 0;
  setClientVar('Connect2_LegacyShared.UnreadNotificationsNumber', next);
  setClientVar('Connect2_LegacyShared.UnreadPublicMessagesNumber', next);
}

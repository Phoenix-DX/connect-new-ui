import { clientVar } from '@/platform/session/session';

/* The client actions of Connect2_LegacyShared that the message list flows call for the unread counters. */

/** SetUnreadNotificationsNumber: UnreadNotificationsNumber = the input. */
export function setUnreadNotificationsNumber(unreadNotificationsNumber: number): void {
  clientVar.unreadNotificationsNumber.set(unreadNotificationsNumber);
}

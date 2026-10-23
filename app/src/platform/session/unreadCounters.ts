import { getClientVar, setClientVar } from './session';

/* The client action of Connect2_LegacyShared that the message flows (MessageList, MessageDetail) share. The counters
   are client variables of the session, so the action lives here and not in a page. */

/** DecrementReadMessagesCounter: UnreadNotificationsNumber - 1 (not below 0), and UnreadPublicMessagesNumber = the new
    UnreadNotificationsNumber. */
export function decrementReadMessagesCounter(): void {
  const current = getClientVar('Connect2_LegacyShared.UnreadNotificationsNumber');
  const next = current > 0 ? current - 1 : 0;
  setClientVar('Connect2_LegacyShared.UnreadNotificationsNumber', next);
  setClientVar('Connect2_LegacyShared.UnreadPublicMessagesNumber', next);
}

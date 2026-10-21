import { getClientVar, setClientVar } from '../../../shell/session';

/** Connect2_LegacyShared AddFirstSentence(In_UserFirstName, In_MessageContent) (controller.js:99-160, copy in
    migration/screens/BookmarksByGroup/analysis/sources/raw/): "Hello " + name + ", <br> <br>" + content. */
export function addFirstSentence(userFirstName: string, messageContent: string): string {
  return `Hello ${userFirstName}, <br> <br>${messageContent}`;
}

/** Connect2_LegacyShared DecrementReadMessagesCounter (controller.js:1846-1862): UnreadNotificationsNumber - 1 (not
    below 0), and UnreadPublicMessagesNumber = the new UnreadNotificationsNumber. Same local copy as MessageList's. */
export function decrementReadMessagesCounter(): void {
  const current = getClientVar('Connect2_LegacyShared.UnreadNotificationsNumber');
  const next = current > 0 ? current - 1 : 0;
  setClientVar('Connect2_LegacyShared.UnreadNotificationsNumber', next);
  setClientVar('Connect2_LegacyShared.UnreadPublicMessagesNumber', next);
}

/** Connect2_LegacyShared DecrementReadWhatsNewsCounter (controller.js:1891-1930): UnreadWhatsNewsNumber - 1 (not below
    0), on the shell client variable added by CR-MessageDetail-1. */
export function decrementReadWhatsNewsCounter(): void {
  const unread = getClientVar('Connect2_LegacyShared.UnreadWhatsNewsNumber');
  setClientVar('Connect2_LegacyShared.UnreadWhatsNewsNumber', unread > 0 ? unread - 1 : 0);
}

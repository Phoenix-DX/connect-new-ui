import { getClientVar, setClientVar } from '@/platform/session/session';

/** Connect2_LegacyShared SetUnreadNotificationsNumber (controller.js:7006-7018): UnreadNotificationsNumber = input. */
export function setUnreadNotificationsNumber(unreadNotificationsNumber: number): void {
  setClientVar('Connect2_LegacyShared.UnreadNotificationsNumber', unreadNotificationsNumber);
}

/** Connect2_LegacyShared DecrementReadMessagesCounter (controller.js:1846-1862): UnreadNotificationsNumber - 1 (not below
    0), and UnreadPublicMessagesNumber = the new UnreadNotificationsNumber. */
export function decrementReadMessagesCounter(): void {
  const current = getClientVar('Connect2_LegacyShared.UnreadNotificationsNumber');
  const next = current > 0 ? current - 1 : 0;
  setClientVar('Connect2_LegacyShared.UnreadNotificationsNumber', next);
  setClientVar('Connect2_LegacyShared.UnreadPublicMessagesNumber', next);
}

/** OutSystemsUI TextEllipsis (OutSystemsUI_2_23.controller.js textEllipsis$Action): the first NumberOfChars characters
    and "..." when the text is longer, else the text. */
export function textEllipsis(text: string, numberOfChars: number): string {
  return text.length > numberOfChars ? `${text.substring(0, numberOfChars)}...` : text;
}

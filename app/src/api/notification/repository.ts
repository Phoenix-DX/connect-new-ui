import { callAction } from '@/api/client/callAction';
import {
  toNotificationDateRangeRecords,
  toNotificationList,
  toNotificationReadFilterWire,
  toNotificationsVariablesWire,
} from './mapper';
import type {
  NotificationDateRangeRecord,
  NotificationList,
  NotificationReadFilter,
  NotificationsVariables,
} from './types';

/* The server calls of the notification domain, called with their OutSystems names and owners: the two data actions of
   the screen Notifications (UBTConnect App_Notifications) and the two notification wrappers of Connect2_LegacyShared.
   Each function makes one call. The callers decide when to call: both data actions are refresh-only (no fetch at the
   screen start on their own). The wrappers change the read state of the messages: the mocks answer them, the real
   server never gets them. */

const LEGACY_SHARED = 'Connect2_LegacyShared';

/** DataActionGetDateRanges of the screen Notifications: the Updates_DateRanges records. The screen refreshes it from
    OnReady only. The call sends every screen variable, as OutSystems does. */
export async function fetchNotificationDateRanges(
  variables: NotificationsVariables,
): Promise<NotificationDateRangeRecord[]> {
  return toNotificationDateRangeRecords(
    await callAction('UBTConnect', 'Notifications/DataActionGetDateRanges', toNotificationsVariablesWire(variables)),
  );
}

/** DataActionFetchNotifications of the screen Notifications: the notifications and the unread count. The screen
    refreshes it from RefreshNotifications only. The call sends every screen variable, as OutSystems does. */
export async function fetchNotifications(variables: NotificationsVariables): Promise<NotificationList> {
  return toNotificationList(
    await callAction(
      'UBTConnect',
      'Notifications/DataActionFetchNotifications',
      toNotificationsVariablesWire(variables),
    ),
  );
}

/** The server action Wrapper_NotificationOpened(MessageInstanceId) of Connect2_LegacyShared (ScreenBlock_MessageDetail):
    marks the message as opened. Answers IsRetracted. */
export async function markNotificationOpened(messageInstanceId: string): Promise<boolean> {
  return (await callAction(LEGACY_SHARED, 'ActionWrapper_NotificationOpened', { MessageInstanceId: messageInstanceId }))
    .IsRetracted;
}

/** The server action Wrapper_MarkAllAsReadNotifications(IsPublic, IsPrivate, DeviceHardwareId, SearchTerm) of
    Connect2_LegacyShared (ScreenBlock_MessageList): marks all the messages of the filter as read. Answers TotalChange,
    the number of messages that changed. */
export async function markAllNotificationsAsRead(filter: NotificationReadFilter): Promise<number> {
  return (
    await callAction(LEGACY_SHARED, 'ActionWrapper_MarkAllAsReadNotifications', toNotificationReadFilterWire(filter))
  ).TotalChange;
}

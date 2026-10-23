import type { ActionOutputs, PathOf } from '@/api/client/callAction';

/** Wire shapes (P-DATA): only mocks.ts uses them. Connect2_Notification_CS.MessageListItem. */
export type MessageListItemWire = ActionOutputs<
  PathOf<'UBTConnect', 'Notifications/DataActionFetchNotifications'>
>['UI_NotificationItemList']['List'][number];

/* A notification (MessageListItem), a date range (UI_Updates_DateRange), a breakpoint (UI_UpdateItem_Breakpoint), the
   filter (Connect_Updates_CS.Filter_Updates) and the screen variables (SCR model :56-142) are domain types of
   api/notification. This module keeps the names that the screen and its blocks use. */
export type {
  NotificationBreakpoint as Breakpoint,
  NotificationDateRange as DateRange,
  NotificationFilter as FilterUpdates,
  NotificationItem,
  NotificationsVariables,
} from '@/api/notification';

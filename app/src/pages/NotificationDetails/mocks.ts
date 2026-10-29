import type { RequestHandler } from 'msw';
import { notificationDetailRow } from '@/mocks/fictional/notifications';
import { contractHandler } from '@/mocks/contract';

/* Mocks of NotificationDetails.
   DataActionFetchMessageInstance: UI_NotificationDetail from the notification collection
   (src/mocks/fictional/notifications.ts): the 19 notifications of the Notifications mock by their ids (with the read
   state that MarkAsRead set), and the captured record of id 5496739. A read of the collection, typed by the contract
   (contractHandler; the operation came with the regeneration of I10-6). No route scenario. */
export const handlers: RequestHandler[] = [
  contractHandler('UBTConnect', 'NotificationDetails/DataActionFetchMessageInstance', ({ MessageInstanceId }) => ({
    UI_NotificationDetail: notificationDetailRow(MessageInstanceId ?? '0'),
  })),
];

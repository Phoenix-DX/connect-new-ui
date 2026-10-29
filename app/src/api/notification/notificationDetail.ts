import { useQuery } from '@tanstack/react-query';
import { callAction, type ActionOutputs, type PathOf } from '@/api/client/callAction';
import { notificationKeys } from './keys';

/* The two calls of NotificationDetails (TST publish of 2026-10-27): the data action FetchMessageInstance of the screen
   (NotificationDetails.mvc.js:538-554) and the server action MarkAsRead of the screen Notifications
   (Notifications.mvc.js:2990-2994, live survey copy). Own file, as share/shareSheet.ts: the barrel re-exports it.
   Both operations come from the contract (regenerated for I10-6). */

/** Output of DataActionFetchMessageInstance: UI_NotificationDetail, a Connect2_Notification_CS.MessageListItem. */
type MessageInstanceWire = ActionOutputs<PathOf<'UBTConnect', 'NotificationDetails/DataActionFetchMessageInstance'>>;

/** The fields of UI_NotificationDetail that NotificationDetails shows. */
interface NotificationDetail {
  id: string;
  title: string;
  summary: string;
  /** OutSystems DateTime text ("yyyy-MM-ddTHH:mm:ss"). */
  dateTimeCreated: string;
}

/** The output before the data action answers: the default MessageListItem record (NullDate). */
export const EMPTY_NOTIFICATION_DETAIL: NotificationDetail = {
  id: '0',
  title: '',
  summary: '',
  dateTimeCreated: '1900-01-01T00:00:00',
};

const toNotificationDetail = (wire: MessageInstanceWire): NotificationDetail => ({
  id: wire.UI_NotificationDetail.Id,
  title: wire.UI_NotificationDetail.Title,
  summary: wire.UI_NotificationDetail.Summary,
  dateTimeCreated: wire.UI_NotificationDetail.DateTimeCreated,
});

/** DataActionFetchMessageInstance of the screen NotificationDetails (fetch at start). */
async function fetchNotificationDetail(messageInstanceId: string): Promise<NotificationDetail> {
  const wire = await callAction('UBTConnect', 'NotificationDetails/DataActionFetchMessageInstance', {
    MessageInstanceId: messageInstanceId,
  });
  return toNotificationDetail(wire);
}

/** The server action MarkAsRead(MessageInstanceId) of the screen Notifications: no output. */
export async function markNotificationAsRead(messageInstanceId: string): Promise<void> {
  await callAction('UBTConnect', 'ActionMarkAsRead', { MessageInstanceId: messageInstanceId });
}

/** FetchMessageInstance as a query: the screen fetches it at the start and reads it on render. No cache and no retry,
    as OutSystems (each visit calls the server; a failed data action is not retried). */
export function useNotificationDetailQuery(messageInstanceId: string) {
  return useQuery({
    queryKey: [...notificationKeys.all, 'detail', messageInstanceId] as const,
    queryFn: () => fetchNotificationDetail(messageInstanceId),
    retry: false,
    staleTime: 0,
    gcTime: 0,
  });
}

import { callAction } from '@/api/client/callAction';

/* The server actions around the screen NotificationDetails (live TST 2026-11-05): MarkAsRead of the screen
   Notifications (Handler_NotificationDetail, Notifications.mvc.js:2562-2596) and Wrapper_NotificationOpened of the
   screen NotificationDetails (NotificationDetails.mvc.js:724-737, path
   screenservices/UBTConnect/App_Notifications/NotificationDetails/ActionWrapper_NotificationOpened). The data action
   GetMessageInstance and the aggregate of NotificationDetails are in api/message (fetchNotificationMessageInstance,
   fetchNotificationTemplateParameters): they answer the message records of that domain. The data action
   FetchMessageInstance is declared on TST but never fetched (dependency -1, no reader): no call. Own file, as
   share/shareSheet.ts: the barrel re-exports it. */

/** The server action MarkAsRead(MessageInstanceId) of the screen Notifications: no output. */
export async function markNotificationAsRead(messageInstanceId: string): Promise<void> {
  await callAction('UBTConnect', 'ActionMarkAsRead', { MessageInstanceId: messageInstanceId });
}

/** The server action Wrapper_NotificationOpened(MessageInstanceId) of the screen NotificationDetails: marks the
    message as opened. Answers IsRetracted. */
export async function markNotificationDetailsOpened(messageInstanceId: string): Promise<boolean> {
  return (await callAction('UBTConnect', 'ActionWrapper_NotificationOpened', { MessageInstanceId: messageInstanceId }))
    .IsRetracted;
}

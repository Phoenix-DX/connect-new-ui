import type { RequestHandler } from 'msw';
import { osList, wireList } from '@/lib/os-wire';
import { contractHandler } from '@/mocks/contract';
import { OLDER_THAN_30_DAYS, notificationRows, type MessageListItemRow } from '@/mocks/fictional/notifications';
import { recordedHandler } from '@/mocks/fixtures';
import { scenario } from '@/mocks/scenario';
import { statefulHandler } from '@/mocks/store';

/* DataActionGetDateRanges: the recorded fixture (UBTConnect/DataActionGetDateRanges/01-e1d555a6.json, re-recorded
   read-only with the static-entity ids kept: Today, Last 7 Days, Last 30 Days, Older; Q1, user 2026-10-15). The answer
   does not depend on the inputs and the recorded CurrentBreakpoint.SectionName is anonymised, so matchInputs is off.
   DataActionFetchNotifications: never recorded: the 68 notifications of the collection in
   src/mocks/fictional/notifications.ts (captured count, read state, avatar kind and age; the reasons are there). The
   server logic (MCP on DEV, 2026-10-29, migration/clarify/review/mcp-session-2026-10-29.md, drift wave rows; the TST
   server code is not visible): the data action calls Get_UI_Notifications (Connect2_Notification_CS: MaxRecords rows,
   Title or Summary LIKE the trimmed SelectedHistorySearch, private and/or public messages, ORDER BY DateTimeCreated
   ASC when OrderByIsAscending, else DESC). With Local_OnlyShowUnread it keeps the rows with `not IsRead` and assigns
   no other output, so HasUnreadMessages is False and UnreadNotificationsCount 0 (Notifications.mvc.js OnAfterFetch:
   ShowMarkAll and ReadCount follow that count). Without it, UnreadNotificationsCount = the unread private and public
   messages; Get_UI_Notifications never assigns HasUnreadMessages (its node is disabled), so it is False. The mock rows
   have no message type: both types off (`0=1 OR 0=1`) answers no row, any other choice all rows.
   The server actions change the collection (P-MUTATION), so a later fetch shows the change:
   - ActionMarkAsRead (Handler_NotificationDetail, Notifications.mvc.js:2983-3003): IsRead True. No output.
   - ActionToggleRead (NotificationsList Handler_ToggleRead, NotificationsList.mvc.js:580-589): IsRead = the input.
   - ActionMarkAllAsReadNotifications (Handler_MoreActionSheetMarkAllAsRead, Notifications.mvc.js:2611-2662): every
     row IsRead True; TotalChange = the rows that changed. The inputs (message types, device, search term) do not
     narrow the mock list.
   - ServiceAPIDelete_Notifications (Handler_DeleteNotification of NotificationsList, Handler_MoreActionSheetDeleteAll):
     removes the rows of Messages by Id (DEV Delete_Notifications: MarkAsClear(Messages.Current.Id) per row; it reads
     no other field). No output. */

/* Scenario `olderread` (?mock=olderread): every notification older than 30 days is read, so the "Older" section has
   no unread item and its Notifications_Header shows no Badge (If_HasBadge, BR-UBTCON-981). The default keeps the
   read state of the collection. */
const notifications = (olderRead: boolean): MessageListItemRow[] =>
  (notificationRows().all() as unknown as MessageListItemRow[]).map((n) => ({
    ...n,
    IsRead: n.IsRead || (olderRead && OLDER_THAN_30_DAYS.has(n.Id)),
  }));

export const handlers: RequestHandler[] = [
  recordedHandler('UBTConnect', 'Notifications/DataActionGetDateRanges', { matchInputs: false }),
  contractHandler('UBTConnect', 'Notifications/DataActionFetchNotifications', (inputs) => {
    const all = notifications(scenario() === 'olderread');
    const search = (inputs.SelectedHistorySearch ?? '').trim().toLowerCase();
    const typed = inputs.Filter_MessageTypePrivate === true || inputs.Filter_MessageTypePublic === true;
    const found = all.filter(
      (n) => typed && (n.Title.toLowerCase().includes(search) || n.Summary.toLowerCase().includes(search)),
    );
    const messages = inputs.OrderByIsAscending === true ? [...found].reverse() : found;
    if (inputs.Local_OnlyShowUnread === true)
      return {
        UI_NotificationItemList: wireList(messages.filter((n) => !n.IsRead)),
        HasUnreadMessages: false,
        UnreadNotificationsCount: '0',
      };
    return {
      UI_NotificationItemList: wireList(messages),
      HasUnreadMessages: false,
      UnreadNotificationsCount: String(all.filter((n) => !n.IsRead).length),
    };
  }),
  statefulHandler('UBTConnect', 'ActionMarkAsRead', ({ MessageInstanceId }) => {
    const rows = notificationRows();
    const row = rows.get(MessageInstanceId);
    if (row) rows.upsert({ ...row, IsRead: true });
    return {};
  }),
  statefulHandler('UBTConnect', 'ActionToggleRead', ({ MessageInstanceId, IsRead }) => {
    const rows = notificationRows();
    const row = rows.get(MessageInstanceId);
    if (row) rows.upsert({ ...row, IsRead: IsRead === true });
    return {};
  }),
  statefulHandler('UBTConnect', 'ActionMarkAllAsReadNotifications', () => {
    const rows = notificationRows();
    const unread = rows.where((r) => r.IsRead !== true);
    for (const row of unread) rows.upsert({ ...row, IsRead: true });
    return { TotalChange: unread.length };
  }),
  statefulHandler('UBTConnect', 'ServiceAPIDelete_Notifications', ({ Messages }) => {
    const rows = notificationRows();
    for (const m of osList(Messages as { List: { Id: string }[] })) rows.remove(m.Id);
    return {};
  }),
];

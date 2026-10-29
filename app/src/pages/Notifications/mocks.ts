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
   screen sends Local_OnlyShowUnread (Handler_OnlyShowUnread) and OrderByIsAscending (Handler_ApplyFilters,
   IsNewestToOldest) and only refreshes the data action after it sets them: the mock answers the unread rows only, and
   the oldest first, when they are True (the server code is not in the client sources: drift-WP5.md, question Q1).
   The server actions change the collection (P-MUTATION), so a later fetch shows the change:
   - ActionMarkAsRead (Handler_NotificationDetail, Notifications.mvc.js:2983-3003): IsRead True. No output.
   - ActionToggleRead (NotificationsList Handler_ToggleRead, NotificationsList.mvc.js:580-589): IsRead = the input.
   - ActionMarkAllAsReadNotifications (Handler_MoreActionSheetMarkAllAsRead, Notifications.mvc.js:2611-2662): every
     row IsRead True; TotalChange = the rows that changed. The inputs (message types, device, search term) do not
     narrow the mock list (FetchNotifications does not filter by them either).
   - ServiceAPIDelete_Notifications (Handler_DeleteNotification of NotificationsList, Handler_MoreActionSheetDeleteAll):
     removes the rows of Messages by Id. No output. */

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
    const shown = inputs.Local_OnlyShowUnread === true ? all.filter((n) => !n.IsRead) : all;
    const list = inputs.OrderByIsAscending === true ? [...shown].reverse() : shown;
    return {
      UI_NotificationItemList: wireList(list),
      HasUnreadMessages: all.some((n) => !n.IsRead),
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

import type { RequestHandler } from 'msw';
import { wireList } from '@/lib/os-wire';
import { contractHandler } from '@/mocks/contract';
import { OLDER_THAN_30_DAYS, notificationRows, type MessageListItemRow } from '@/mocks/fictional/notifications';
import { recordedHandler } from '@/mocks/fixtures';
import { scenario } from '@/mocks/scenario';
import { statefulHandler } from '@/mocks/store';

/* DataActionGetDateRanges: the recorded fixture (UBTConnect/DataActionGetDateRanges/01-e1d555a6.json, re-recorded
   read-only with the static-entity ids kept: Today, Last 7 Days, Last 30 Days, Older; Q1, user 2026-10-15). The answer
   does not depend on the inputs and the recorded CurrentBreakpoint.SectionName is anonymised, so matchInputs is off.
   DataActionFetchNotifications: never recorded: the 19 notifications of the collection in
   src/mocks/fictional/notifications.ts (captured count, read state, avatar kind and age; the reasons are there).
   ActionMarkAsRead (Handler_NotificationDetail of the live TST screen, Notifications.mvc.js:2990-2994): sets IsRead of
   the notification in the collection, so the list shows it read when the user comes back (P-MUTATION). No output. */

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
  contractHandler('UBTConnect', 'Notifications/DataActionFetchNotifications', () => {
    const list = notifications(scenario() === 'olderread');
    return {
      UI_NotificationItemList: wireList(list),
      HasUnreadMessages: list.some((n) => !n.IsRead),
      UnreadNotificationsCount: String(list.filter((n) => !n.IsRead).length),
    };
  }),
  statefulHandler('UBTConnect', 'ActionMarkAsRead', ({ MessageInstanceId }) => {
    const rows = notificationRows();
    const row = rows.get(MessageInstanceId);
    if (row) rows.upsert({ ...row, IsRead: true });
    return {};
  }),
];

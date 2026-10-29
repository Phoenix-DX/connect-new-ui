import { currDateTime } from '@/lib/osDateTime';
import { collection } from '@/mocks/store';

/* The notifications of the signed-in user (Connect2_Notification_CS.MessageListItem rows) as one mock collection, so a
   write shows in later reads (P-MUTATION): Notifications lists them (DataActionFetchNotifications), its server actions
   MarkAsRead, ToggleRead, MarkAllAsReadNotifications and Delete_Notifications change them, and NotificationDetails opens
   one (DataActionFetchMessageInstance).
   DataActionFetchNotifications was never recorded: the 68 notifications of the TST capture of 2026-10-29 (drift wave,
   M-Q2 (a), user 2026-10-29) with the captured read state (2 unread), avatar kind and age (days before the capture day
   at the captured time), so the date groups (3 "Last 7 Days", 1 "Last 30 Days", 64 "Older") and the elapsed labels stay
   as captured on any day. The oldest rows are six calendar months old (the From date of "Older"). Titles: the TST test
   labels the capture shows unmasked (test data, not person data; Q3, user 2026-10-15); the masked ones are fictional
   texts with the captured word lengths (made by a small script; the 2026-10-14 titles kept where the row is the same).
   Avatar URLs are the TST app logos served at /UBT_CW/img (not person photos; Q2, CR-Notifications-1 applied). */
const ENTITY_LOGO = '/UBT_CW/img/UBT_CW.directory_entity_logo.png';
const ASSEMBLE_LOGO = '/UBT_CW/img/UBT_CW.logo_assemble.svg';
const CONNECT_LOGO = '/UBT_CW/img/UBT_CW.logo_connect.jpg';
const LORDS_DAY_MEAL_LOGO = '/UBT_CW/img/UBT_CW.logo_LordDaysMeal.png';
/** The age of the oldest captured rows: six calendar months before today (App_Notifications_AugmentDateRanges). */
const SIX_MONTHS = -1;

/** The wire shape of a notification (Connect2_Notification_CS.MessageListItem). */
export interface MessageListItemRow {
  CreatedByUserId: number;
  DateTimeCreated: string;
  Id: string;
  IsClear: boolean;
  IsRead: boolean;
  MessageInfoTypeId: number;
  MessageSenderTargetName: string;
  MessageTemplatePriorityId: number;
  MessageTemplateTypeId: number;
  ProfileIconURL: string;
  Summary: string;
  Title: string;
}

/* [days before today (or SIX_MONTHS), time, title, avatar, read] */
const ROWS: [number, string, string, string, boolean][] = [
  [6, '09:52:54', 'Test Noti 2', '', true],
  [6, '09:49:19', 'test', '', false],
  [7, '16:28:10', 'New Connect notification', '', false],
  [30, '10:50:23', 'Test Noti 56', ENTITY_LOGO, true],
  [31, '17:01:04', 'Winter assembly hall catering schedule availability questionnaire', ASSEMBLE_LOGO, true],
  [31, '16:00:53', 'Spring assembly hall cleaning workdays availability questionnaire', ASSEMBLE_LOGO, true],
  [31, '15:15:52', 'Summer assembly hall security marshals availability questionnaire', ASSEMBLE_LOGO, true],
  [31, '13:15:26', 'Street hall roof lighting installation instructions.', ASSEMBLE_LOGO, true],
  [36, '16:30:41', 'Save draft 02:50', '', true],
  [36, '16:20:36', 'Thanks Jo', '', true],
  [37, '11:00:59', 'Monthly announcement for all', '', true],
  [37, '10:46:15', 'Dinner for ten', '', true],
  [58, '17:18:47', 'Family camp next month with entertainment', '', true],
  [58, '16:24:41', 'School fete this month with entertainment', '', true],
  [58, '11:49:41', 'Garden club open house with entertainment', '', true],
  [70, '09:28:49', 'Notification 6', '', true],
  [70, '09:23:08', 'Notification 4', ENTITY_LOGO, true],
  [70, '09:18:33', 'Notification 3', ENTITY_LOGO, true],
  [70, '09:16:33', 'Notification 1', ENTITY_LOGO, true],
  [79, '08:27:50', 'Camp is booked out', '', true],
  [98, '14:27:49', 'Garden roster announcement 1', '', true],
  [98, '14:17:37', 'Winter supper registration 2', ENTITY_LOGO, true],
  [98, '14:17:04', 'Summer outing registration 3', CONNECT_LOGO, true],
  [98, '14:11:06', 'Spring market registration 4', CONNECT_LOGO, true],
  [98, '14:06:48', 'Autumn picnic registration 5', CONNECT_LOGO, true],
  [99, '08:45:44', 'schedule 8:45', '', true],
  [99, '08:39:21', 'new notification', '', true],
  [100, '13:45:41', 'Saturday arrangements', '', true],
  [105, '08:52:09', 'Camp list is out for review', '', true],
  [112, '10:30:48', 'Heatwave risk for all', ENTITY_LOGO, true],
  [119, '08:45:45', 'Hello Jo', '', true],
  [120, '21:39:19', 'Spring hall open house with entertainment', '', true],
  [120, '20:54:49', 'Autumn fair food stall with entertainment', '', true],
  [120, '11:53:27', 'Our thanks', '', true],
  [
    120,
    '07:20:01',
    'The lift and stair of the old north porch renovation are done now. Our volunteers, staff of local businesses gave their time freely to finish swiftly.',
    '',
    true,
  ],
  [121, '10:20:20', 'Lunch menu set', ENTITY_LOGO, true],
  [128, '09:27:04', 'Choir room key', ENTITY_LOGO, true],
  [132, '09:49:56', 'Test Push Noti Global 1', ENTITY_LOGO, true],
  [
    133,
    '16:29:28',
    'Housekeeping  everyone will receive an update by e-mail on Monday regarding these new cleaning rules so that nobody forgets it',
    '',
    true,
  ],
  [
    133,
    '16:25:48',
    'Installation refurbishment completed, everyone will receive an update by e-mail on Monday regarding these new cleaning rules so that nobody forgets it',
    '',
    true,
  ],
  [133, '09:15:47', 'Lost hall key fob', ENTITY_LOGO, true],
  [
    134,
    '16:08:57',
    'Installation fortnight: visitors will receive an update by e-mail on Friday regarding these new lighting rules so that nobody forgets this procedure.',
    '',
    true,
  ],
  [
    134,
    '13:41:06',
    'All parishioners, everyone will receive an update by e-mail on Monday regarding these new cleaning rules so that nobody forgets this procedure. Ask us',
    '',
    true,
  ],
  [
    134,
    '13:13:08',
    'Reminder: everyone will receive an update by e-mail on Monday regarding these new cleaning rules so that nobody forgets this procedure. Our thanks.',
    '',
    true,
  ],
  [135, '09:47:54', 'Hymns list out', ENTITY_LOGO, true],
  [136, '09:22:41', 'C2 notification', '', true],
  [139, '13:51:55', 'C2 notification', '', true],
  [140, '10:18:05', 'test notification 46', ENTITY_LOGO, true],
  [140, '10:12:26', 'New notification', '', true],
  [142, '08:53:23', 'Choir off', '', true],
  [149, '08:27:00', 'Hymns due', '', true],
  [155, '16:36:29', 'Your Host on Saturday', LORDS_DAY_MEAL_LOGO, true],
  [156, '10:33:15', 'Lunch menu for Sunday', '', true],
  [163, '08:45:43', 'Choir trip for August', CONNECT_LOGO, true],
  [175, '11:01:32', 'C2 notification - push', '', true],
  [175, '10:57:11', 'notification', '', true],
  [175, '10:42:51', 'Global notification', '', true],
  [176, '15:53:34', 'Hall open late', ASSEMBLE_LOGO, true],
  [177, '15:13:52', 'Fellowship tea', ENTITY_LOGO, true],
  [177, '14:38:23', 'Book lunch now', ENTITY_LOGO, true],
  [177, '14:35:58', 'Fellowship day 1', CONNECT_LOGO, true],
  [177, '14:35:23', 'Fellowship day 2', CONNECT_LOGO, true],
  [177, '08:28:14', 'Youth leaders camp for August', '', true],
  [178, '16:25:05', 'Hall key out', '', true],
  [SIX_MONTHS, '09:15:34', 'Push Noti Global Close', CONNECT_LOGO, true],
  [SIX_MONTHS, '09:13:08', 'Push Noti Global', ENTITY_LOGO, true],
  [SIX_MONTHS, '08:58:07', 'Saturday roster 1', ENTITY_LOGO, true],
  [SIX_MONTHS, '08:36:12', 'Saturday supper', ENTITY_LOGO, true],
];

/* Ids: 'Test Noti 56' keeps 910019 and 'Camp is booked out' 910003, as in the 2026-10-14 mock. */
const idOf = (index: number) => String(910022 - index);

/** The notifications older than 30 days (scenario `olderread` of Notifications: they answer read). */
export const OLDER_THAN_30_DAYS = new Set(
  ROWS.flatMap(([daysAgo], i) => (daysAgo > 30 || daysAgo === SIX_MONTHS ? [idOf(i)] : [])),
);

function created(daysAgo: number, time: string): string {
  const [h = 0, m = 0, s = 0] = time.split(':').map(Number);
  const d = new Date();
  if (daysAgo === SIX_MONTHS) d.setMonth(d.getMonth() - 6);
  else d.setDate(d.getDate() - daysAgo);
  d.setHours(h, m, s, 0);
  return currDateTime(d);
}

const row = (fields: Pick<MessageListItemRow, 'Id' | 'DateTimeCreated' | 'Title' | 'ProfileIconURL' | 'IsRead'>) => ({
  CreatedByUserId: 0,
  IsClear: false,
  MessageInfoTypeId: 0,
  MessageSenderTargetName: '',
  MessageTemplatePriorityId: 0,
  MessageTemplateTypeId: 0,
  Summary: '',
  ...fields,
});

/** The collection of the notifications, newest first (the order of the captured list). */
export const notificationRows = () =>
  collection('Connect2_Notification_CS.MessageListItem', () =>
    ROWS.map(([daysAgo, time, title, icon, read], i): Record<string, unknown> =>
      row({ Id: idOf(i), DateTimeCreated: created(daysAgo, time), Title: title, ProfileIconURL: icon, IsRead: read }),
    ),
  );

/* The record of the NotificationDetails capture (MessageInstanceId 5496739, a read notification that is not one of
   the 68 above): its title as captured (a TST test label, unmasked), Summary empty as captured, a fictional date (the
   capture masks it; a Wednesday, as the title says). */
const CAPTURED_DETAILS: Record<string, MessageListItemRow> = {
  '5496739': row({
    Id: '5496739',
    DateTimeCreated: '2026-10-28T09:30:00',
    Title: 'Your Host on Wednesday',
    ProfileIconURL: '',
    IsRead: true,
  }),
};

/** UI_NotificationDetail of DataActionFetchMessageInstance: the notification of that id. An unknown id answers the
    empty record for now (question Q3 of NotificationDetails: what TST answers is not known). */
export function notificationDetailRow(messageInstanceId: string): MessageListItemRow {
  const stored = notificationRows().get(messageInstanceId) as MessageListItemRow | undefined;
  return (
    stored ??
    CAPTURED_DETAILS[messageInstanceId] ??
    row({ Id: '0', DateTimeCreated: '1900-01-01T00:00:00', Title: '', ProfileIconURL: '', IsRead: false })
  );
}

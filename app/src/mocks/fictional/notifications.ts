import { currDateTime } from '@/lib/osDateTime';
import { collection } from '@/mocks/store';

/* The notifications of the signed-in user (Connect2_Notification_CS.MessageListItem rows) as one mock collection, so a
   write shows in later reads (P-MUTATION): Notifications lists them (DataActionFetchNotifications), its MarkAsRead
   sets IsRead, and NotificationDetails opens one (DataActionFetchMessageInstance).
   DataActionFetchNotifications was never recorded: 19 notifications with the captured count, read state, avatar kind
   and age (days before the capture day 2026-10-14 at the captured time), so the date groups (9 "Last 30 Days",
   10 "Older") and the elapsed labels stay as captured on any day. Titles: the TST test labels the capture shows
   unmasked (test data, not person data; Q3, user 2026-10-15); the masked ones are meaningful fictional texts with the
   captured word lengths, the same as the MessageList mock's titles (mock-fixtures.md, user 2026-10-16).
   Avatar URLs are the TST app logos served at /UBT_CW/img (not person photos; Q2, CR-Notifications-1 applied). */
const ENTITY_LOGO = '/UBT_CW/img/UBT_CW.directory_entity_logo.png';
const ASSEMBLE_LOGO = '/UBT_CW/img/UBT_CW.logo_assemble.svg';

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

/* [days before today, time, title, avatar, read] */
const ROWS: [number, string, string, string, boolean][] = [
  [15, '10:50:25', 'Test Noti 56', ENTITY_LOGO, false],
  [16, '17:01:05', 'Winter assembly hall catering schedule availability questionnaire', ASSEMBLE_LOGO, false],
  [16, '16:00:54', 'Spring assembly hall cleaning workdays availability questionnaire', ASSEMBLE_LOGO, false],
  [16, '15:15:54', 'Summer assembly hall security marshals availability questionnaire', ASSEMBLE_LOGO, false],
  [16, '13:15:31', 'Annual hall roof workdays volunteering opportunities', ASSEMBLE_LOGO, false],
  [21, '16:30:42', 'Save draft 02:50', '', false],
  [21, '16:20:41', 'Thanks Jo', '', false],
  [22, '11:01:01', 'Monthly announcement for all', '', false],
  [22, '10:46:19', 'Dinner for ten', '', false],
  [43, '17:18:48', 'Family camp next month with entertainment', '', false],
  [43, '16:24:42', 'School fete this month with entertainment', '', false],
  [43, '11:49:45', 'Garden club open house with entertainment', '', false],
  [55, '09:28:50', 'Notification 6', '', false],
  [55, '09:23:09', 'Notification 4', ENTITY_LOGO, false],
  [55, '09:18:34', 'Notification 3', ENTITY_LOGO, false],
  [55, '09:16:38', 'Notification 1', ENTITY_LOGO, false],
  [64, '08:27:54', 'Camp is booked out', '', true],
  [82, '16:45:10', 'Conference dates moved', ASSEMBLE_LOGO, true],
  [97, '10:30:52', 'Heatwave risk for all', ENTITY_LOGO, true],
];

const idOf = (index: number) => String(910019 - index);

/** The notifications older than 30 days (scenario `olderread` of Notifications: they answer read). */
export const OLDER_THAN_30_DAYS = new Set(ROWS.flatMap(([daysAgo], i) => (daysAgo > 30 ? [idOf(i)] : [])));

function created(daysAgo: number, time: string): string {
  const [h = 0, m = 0, s = 0] = time.split(':').map(Number);
  const d = new Date();
  d.setDate(d.getDate() - daysAgo);
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
   the 19 above): its title as captured (a TST test label, unmasked), Summary empty as captured, a fictional date (the
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

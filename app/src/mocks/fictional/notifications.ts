import { currDateTime } from '@/lib/osDateTime';
import { collection } from '@/mocks/store';

/* The notifications of the signed-in user (Connect2_Notification_CS.MessageListItem rows) as one mock collection, so a
   write shows in later reads (P-MUTATION): Notifications lists them (DataActionFetchNotifications), its server actions
   MarkAsRead, ToggleRead, MarkAllAsReadNotifications and Delete_Notifications change them, and NotificationDetails opens
   one (DataActionGetMessageInstance) and marks it opened (Wrapper_NotificationOpened).
   DataActionFetchNotifications was never recorded: the 22 notifications of the TST capture of 2026-11-07 (sync wave,
   Q1 (a), user 2026-11-07; before: the 68 of 2026-10-29) with the captured read state (7 unread), avatar kind, time
   and age (days before the capture day), so the date groups (3 "Last 30 Days", 19 "Older") and the elapsed labels
   stay as captured on any day. Row 21 (106 days, Assemble logo) is new on TST; its title is fictional. Titles: the TST test
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
  CreatedByMemberId: string;
  CreatedByUserId: number;
  DateTimeCreated: string;
  Id: string;
  IsClear: boolean;
  IsRead: boolean;
  MessageInfoTypeId: number;
  MessageSenderTargetName: string;
  MessageTemplateId: string;
  MessageTemplatePriorityId: number;
  MessageTemplateTypeId: number;
  ProfileIconURL: string;
  Summary: string;
  Title: string;
}

/* [days before today (or SIX_MONTHS), time, title, avatar, read] */
const ROWS: [number, string, string, string, boolean][] = [
  [15, '09:52:55', 'Test Noti 2', '', false],
  [15, '09:49:24', 'test', '', true],
  [16, '16:28:11', 'New Connect notification', '', false],
  [39, '10:50:25', 'Test Noti 56', ENTITY_LOGO, true],
  [40, '17:01:05', 'Winter assembly hall catering schedule availability questionnaire', ASSEMBLE_LOGO, true],
  [40, '16:00:54', 'Spring assembly hall cleaning workdays availability questionnaire', ASSEMBLE_LOGO, true],
  [40, '15:15:54', 'Summer assembly hall security marshals availability questionnaire', ASSEMBLE_LOGO, true],
  [40, '13:15:31', 'Street hall roof lighting installation instructions.', ASSEMBLE_LOGO, true],
  [45, '16:30:42', 'Save draft 02:50', '', true],
  [45, '16:20:41', 'Thanks Jo', '', true],
  [46, '11:01:01', 'Monthly announcement for all', '', true],
  [46, '10:46:19', 'Dinner for ten', '', true],
  [67, '17:18:48', 'Family camp next month with entertainment', '', true],
  [67, '16:24:42', 'School fete this month with entertainment', '', true],
  [67, '11:49:45', 'Garden club open house with entertainment', '', false],
  [79, '09:28:50', 'Notification 6', '', false],
  [79, '09:23:09', 'Notification 4', ENTITY_LOGO, false],
  [79, '09:18:34', 'Notification 3', ENTITY_LOGO, false],
  [79, '09:16:38', 'Notification 1', ENTITY_LOGO, false],
  [88, '08:27:54', 'Camp is booked out', '', true],
  [106, '16:45:10', 'Rehearsals start early', ASSEMBLE_LOGO, true],
  [121, '10:30:52', 'Heatwave risk for all', ENTITY_LOGO, true],
];

/* Ids: 'Test Noti 56' keeps 910019 and 'Camp is booked out' 910003, as in the 2026-10-14 mock. */
const idOf = (index: number) => String(910022 - index);

/* MessageTemplateId and CreatedByMemberId (fields of the live TST model of 2026-11-05, not in the capture): invented.
   Each notification has its own template (one send of a template per user), and the members who wrote them are the
   fictional senders of content.ts, in turn. NotificationDetails shows the sender name of a notification without a
   logo (sent as a user). */
const templateIdOf = (index: number) => String(48190 - index);
const AUTHORS = ['900120', '900121', '900122', '900103', '900107', '900108', '900109', '900110', '900111', '900112'];
const authorOf = (index: number) => AUTHORS[index % AUTHORS.length] ?? '900120';
/* CreatedByUserId (invented): the user account of the author for a notification without a logo (sent as a user), so
   MyNotifications.MessageImage fetches the author's photo as on TST (the capture of 2026-11-07 shows the photo branch
   and one GetSignedImagesInBulk call); 0 (the null identifier) for a notification sent with a logo. */
const userOf = (index: number, icon: string) => (icon === '' ? 70120 + (index % AUTHORS.length) : 0);

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

type RowFields =
  'Id' | 'DateTimeCreated' | 'Title' | 'ProfileIconURL' | 'IsRead' | 'MessageTemplateId' | 'CreatedByMemberId';
const row = (
  fields: Pick<MessageListItemRow, RowFields> & Partial<Pick<MessageListItemRow, 'Summary' | 'CreatedByUserId'>>,
) => ({
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
      row({
        Id: idOf(i),
        DateTimeCreated: created(daysAgo, time),
        Title: title,
        ProfileIconURL: icon,
        IsRead: read,
        MessageTemplateId: templateIdOf(i),
        CreatedByMemberId: authorOf(i),
        CreatedByUserId: userOf(i, icon),
      }),
    ),
  );

/* The record of the NotificationDetails capture (MessageInstanceId 5496739, a read notification that is not one of
   the rows above), as the capture of 2026-11-06 shows it: title and summary as captured (TST test labels, unmasked), a
   fictional date (the capture masks it; a Wednesday, as the title says). Sent as Lord's Day Meal (its logo), so the
   header shows "Meal Allocation" (messageTitle); its body is an adaptive card (the capture masks the text; the words
   below are fictional) with the two actions of the capture. */
const CAPTURED_DETAILS: Record<string, MessageListItemRow> = {
  '5496739': row({
    Id: '5496739',
    DateTimeCreated: '2026-10-28T09:30:00',
    Title: 'Your Host on Wednesday',
    Summary: 'Host for Wednesday Meal',
    ProfileIconURL: LORDS_DAY_MEAL_LOGO,
    IsRead: true,
    MessageTemplateId: '47702',
    CreatedByMemberId: '900110',
  }),
};

/** The adaptive card of the captured record: one dark text block with the line breaks of the capture, a medium
    spacing, two positive submit actions; the words are fictional. */
export const CAPTURED_DETAIL_CARD = JSON.stringify({
  type: 'AdaptiveCard',
  version: '1.3',
  body: [
    {
      type: 'TextBlock',
      wrap: true,
      color: 'dark',
      text: 'Dear Daniel,\n\nYou have been allocated as the host for the Wednesday meal on 12 November at Millbrook Hall.\nThe meal starts at 6:30 pm and the guests arrive from 6 pm, so please be there by 5:30 pm.\nTwelve guests have confirmed so far.\n\nPlease confirm with the event coordinator that you can host on that day. If you cannot, tell the coordinator as soon as possible so that another host can be arranged.\n\nKind Regards,\nMeal Allocation Team',
    },
    {
      type: 'ActionSet',
      spacing: 'medium',
      actions: [
        {
          type: 'Action.Submit',
          title: 'Contact Event Coordinator',
          style: 'positive',
          data: {
            action: 'ContactEventCoordinator',
          },
        },
        {
          type: 'Action.Submit',
          title: 'View Event',
          style: 'positive',
          data: {
            action: 'ViewEvent',
          },
        },
      ],
    },
  ],
});

/** The notification of that id: a row of the collection (with the read state that MarkAsRead and
    Wrapper_NotificationOpened set), else the captured record; undefined for an unknown id. */
export function findNotificationRow(messageInstanceId: string): MessageListItemRow | undefined {
  const stored = notificationRows().get(messageInstanceId) as MessageListItemRow | undefined;
  return stored ?? CAPTURED_DETAILS[messageInstanceId];
}

/** The captured record 5496739: its body is CAPTURED_DETAIL_CARD. */
export const isCapturedDetail = (messageInstanceId: string): boolean => messageInstanceId in CAPTURED_DETAILS;

/** The sender target (Connect2_LegacyShared MessageSenderTarget id, static-entities-tst.json) that a notification
    logo stands for; the names are fictional labels. A notification without a logo is sent as a user. */
const SENDER_TARGETS: Record<string, { Id: number; Name: string }> = {
  [ENTITY_LOGO]: { Id: 3, Name: 'Directory' },
  [ASSEMBLE_LOGO]: { Id: 21, Name: 'Assemble' },
  [CONNECT_LOGO]: { Id: 1, Name: 'Connect' },
  [LORDS_DAY_MEAL_LOGO]: { Id: 6, Name: "Lord's Day Meal" },
};

/** The sender target of a notification, by its logo; undefined for a notification sent as a user. */
export const notificationSenderTarget = (row: MessageListItemRow): { Id: number; Name: string } | undefined =>
  SENDER_TARGETS[row.ProfileIconURL];

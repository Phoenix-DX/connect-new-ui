import type { RequestHandler } from 'msw';
import { contractHandler } from '@/mocks/contract';
import { recordedHandler } from '@/mocks/fixtures';
import { currDateTime } from '@/shared/lib/osDateTime';
import { wireList } from '@/legacy/os/os-wire';
import type { MessageListItemWire } from './types';

/* DataActionGetDateRanges: the recorded fixture (UBTConnect/DataActionGetDateRanges/01-e1d555a6.json, re-recorded
   read-only with the static-entity ids kept: Today, Last 7 Days, Last 30 Days, Older; Q1, user 2026-10-15). The answer
   does not depend on the inputs and the recorded CurrentBreakpoint.SectionName is anonymised, so matchInputs is off.
   DataActionFetchNotifications: never recorded: 19 notifications with the captured count, read state, avatar kind and
   age (days before the capture day 2026-10-14 at the captured time), so the date groups (9 "Last 30 Days", 10 "Older")
   and the elapsed labels stay as captured on any day. Titles: the TST test labels the capture shows unmasked (test data,
   not person data; Q3, user 2026-10-15); the masked ones are meaningful fictional texts with the captured word
   lengths, the same as the MessageList mock's titles (mock-fixtures.md, user 2026-10-16).
   Avatar URLs are the TST app logos served at /UBT_CW/img (not person photos; Q2, CR-Notifications-1 applied). */
const ENTITY_LOGO = '/UBT_CW/img/UBT_CW.directory_entity_logo.png';
const ASSEMBLE_LOGO = '/UBT_CW/img/UBT_CW.logo_assemble.svg';

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

function created(daysAgo: number, time: string): string {
  const [h = 0, m = 0, s = 0] = time.split(':').map(Number);
  const d = new Date();
  d.setDate(d.getDate() - daysAgo);
  d.setHours(h, m, s, 0);
  return currDateTime(d);
}

const notifications = (): MessageListItemWire[] =>
  ROWS.map(([daysAgo, time, title, icon, read], i) => ({
    CreatedByUserId: 0,
    DateTimeCreated: created(daysAgo, time),
    Id: String(910019 - i),
    IsClear: false,
    IsRead: read,
    MessageInfoTypeId: 0,
    MessageSenderTargetName: '',
    MessageTemplatePriorityId: 0,
    MessageTemplateTypeId: 0,
    ProfileIconURL: icon,
    Summary: '',
    Title: title,
  }));

export const handlers: RequestHandler[] = [
  recordedHandler('UBTConnect', 'Notifications/DataActionGetDateRanges', { matchInputs: false }),
  contractHandler('UBTConnect', 'Notifications/DataActionFetchNotifications', () => {
    const list = notifications();
    return {
      UI_NotificationItemList: wireList(list),
      HasUnreadMessages: list.some((n) => !n.IsRead),
      UnreadNotificationsCount: String(list.filter((n) => !n.IsRead).length),
    };
  }),
];

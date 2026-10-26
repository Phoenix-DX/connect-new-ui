import type { RequestHandler } from 'msw';
import { scenario } from '@/mocks/scenario';
import { collection, statefulHandler } from '@/mocks/store';
import type { MessageWire } from './types';

/* Messages are person data and DataActionGetMessages was never recorded (no fixture): 19 fictional rows with the
   captured shape (dom/default.html rows 0-18): 16 unread (background-blue-lightest), 3 read, the last one urgent
   (MessagePriority Urgent "2"). Titles are meaningful fictional texts with the captured word lengths (mock-fixtures.md,
   user 2026-10-16); the unmasked captured labels are generic TST test labels and are reused as they are (Q4). Rows with a ProfileIconURL keep the captured UBT_CW image paths; the 9 rows
   without one have a sender (CreatedByUserId, CreatedByMemberId) whose photo comes from GetSignedImagesInBulk
   (placeholder rule Q-W2C-1, shared UBT_LazyImage mocks). Dates give the captured info lengths (time 4 or 5 chars).

   Mock semantics (server logic not visible, Decisions to confirm): GetMessages answers the rows not cleared, newest
   first (oldest first when OrderByIsAscending), at most MaxRecords; filters and search are not applied. Mark read /
   clear / mark all change the in-memory collection (P-MUTATION), so a refresh shows them.
   Scenarios: real, empty (no rows), error (HTTP 500), loading (never answers). */
const DIRECTORY_LOGO = '/UBT_CW/img/UBT_CW.directory_entity_logo.png';
const ASSEMBLE_LOGO = '/UBT_CW/img/UBT_CW.logo_assemble.svg';

const row = (
  id: string,
  title: string,
  dateTimeCreated: string,
  options: { icon?: string; memberId?: string; read?: boolean; urgent?: boolean },
): MessageWire => ({
  Id: id,
  MessageTemplateTypeId: 1,
  Title: title,
  Summary: '',
  DateTimeCreated: dateTimeCreated,
  MessageTemplatePriorityId: options.urgent === true ? 2 : 1,
  ProfileIconURL: options.icon ?? '',
  IsClear: false,
  IsRead: options.read === true,
  CreatedByUserId: options.memberId === undefined ? 0 : 7000 + Number(id.slice(-2)),
  CreatedByMemberId: options.memberId ?? '0',
  MessageInfoTypeId: 1,
  MessageSenderTargetName: '',
});

const seed = (): MessageWire[] => [
  row('81019', 'Test Noti 56', '2026-10-14T10:20:00', { icon: DIRECTORY_LOGO }),
  row('81018', 'Winter assembly hall catering schedule availability questionnaire', '2026-10-13T09:15:00', {
    icon: ASSEMBLE_LOGO,
  }),
  row('81017', 'Spring assembly hall cleaning workdays availability questionnaire', '2026-10-12T08:40:00', {
    icon: ASSEMBLE_LOGO,
  }),
  row('81016', 'Summer assembly hall security marshals availability questionnaire', '2026-10-11T07:05:00', {
    icon: ASSEMBLE_LOGO,
  }),
  row('81015', 'Annual hall roof workdays volunteering opportunities', '2026-10-10T06:30:00', { icon: ASSEMBLE_LOGO }),
  row('81014', 'Save draft 02:50', '2026-10-09T02:50:00', { memberId: '900114' }),
  row('81013', 'Thanks Jo', '2026-10-08T03:10:00', { memberId: '900113' }),
  row('81012', 'Monthly announcement for all', '2026-10-07T11:25:00', { memberId: '900112' }),
  row('81011', 'Dinner for ten', '2026-10-06T10:45:00', { memberId: '900111' }),
  row('81010', 'Family camp next month with entertainment', '2026-10-05T04:15:00', { memberId: '900110' }),
  row('81009', 'School fete this month with entertainment', '2026-10-04T05:35:00', { memberId: '900109' }),
  row('81008', 'Garden club open house with entertainment', '2026-10-03T12:05:00', { memberId: '900108' }),
  row('81007', 'Notification 6', '2026-10-02T09:55:00', { memberId: '900107' }),
  row('81006', 'Notification 4', '2026-10-01T08:20:00', { icon: DIRECTORY_LOGO }),
  row('81005', 'Notification 3', '2026-09-30T07:40:00', { icon: DIRECTORY_LOGO }),
  row('81004', 'Notification 1', '2026-09-29T06:00:00', { icon: DIRECTORY_LOGO }),
  row('81003', 'Camp is booked out', '2026-09-28T05:25:00', { memberId: '900103', read: true }),
  row('81002', 'Conference dates moved', '2026-09-27T04:50:00', { icon: ASSEMBLE_LOGO, read: true }),
  row('81001', 'Heatwave risk for all', '2026-09-26T10:10:00', { icon: DIRECTORY_LOGO, read: true, urgent: true }),
];

const messages = collection('MessageList.messages', () => seed() as unknown as Record<string, unknown>[], 'Id');

const visible = (): MessageWire[] => (messages.all() as unknown as MessageWire[]).filter((m) => !m.IsClear);
const hasUnread = (): boolean => visible().some((m) => !m.IsRead);

export const handlers: RequestHandler[] = [
  statefulHandler('Connect2_LegacyShared', 'ScreenBlock_MessageList/DataActionGetMessages', (inputs) => {
    const ascending = inputs.OrderByIsAscending === true;
    const maxRecords = typeof inputs.MaxRecords === 'number' ? inputs.MaxRecords : 20;
    const rows = scenario() === 'empty' ? [] : visible();
    const sorted = [...rows].sort((a, b) =>
      ascending
        ? a.DateTimeCreated.localeCompare(b.DateTimeCreated)
        : b.DateTimeCreated.localeCompare(a.DateTimeCreated),
    );
    return {
      Messages: { List: sorted.slice(0, maxRecords) },
      HasUnreadMessages: rows.some((m) => !m.IsRead),
      CountUnreadMessages: String(rows.filter((m) => !m.IsRead).length),
    };
  }),
  statefulHandler('Connect2_LegacyShared', 'ScreenBlock_MessageList/DataActionGetMessageInstanceById2', (inputs) => {
    const found = messages.get(inputs.CurrentMessageInstanceId) as unknown as MessageWire | undefined;
    return { Exist: found !== undefined && !found.IsClear };
  }),
  statefulHandler('Connect2_LegacyShared', 'ActionWrapper_MarkAllAsReadNotifications', () => {
    const unread = visible().filter((m) => !m.IsRead);
    for (const m of unread) messages.upsert({ Id: m.Id, IsRead: true });
    return { TotalChange: unread.length };
  }),
  statefulHandler('Connect2_LegacyShared', 'ActionMarkMessageAsRead', ({ MessageInstanceId }) => {
    if (messages.get(MessageInstanceId)) messages.upsert({ Id: MessageInstanceId, IsRead: true });
    return { HasUnreadMessages: hasUnread() };
  }),
  statefulHandler('Connect2_LegacyShared', 'ActionMarkMessageAsClear', ({ MessageInstanceId }) => {
    const found = messages.get(MessageInstanceId) as unknown as MessageWire | undefined;
    if (found) messages.upsert({ Id: MessageInstanceId, IsClear: true });
    return { HasUnreadMessages: hasUnread(), IsHaveMessage: visible().length > 0, IsRead: found?.IsRead ?? true };
  }),
];

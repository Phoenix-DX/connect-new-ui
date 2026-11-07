import { describe, expect, it } from 'vitest';
import type { NotificationBreakpoint, NotificationItem } from '@/api/notification';
import { applyReadCountUpdate, get_ElapsedTime_Notification, toggleItemRead } from './actions';

describe('Get_ElapsedTime_Notification', () => {
  it('uses the OutSystems Diff functions: DiffDays counts calendar days, DiffHours drops minutes', () => {
    const now = new Date(2026, 10, 7, 7, 44, 0);
    // 39 calendar days (38.9 x 24 h): DiffDays 39, Round(39 / 7) = 6, as on TST (capture of 2026-11-07).
    expect(get_ElapsedTime_Notification('2026-09-29T10:50:25', now)).toBe('6w');
    expect(get_ElapsedTime_Notification('2026-11-01T23:59:00', now)).toBe('6d');
    // 05:59:30 to 07:01 is DiffMinutes 62, DiffHours 2 (7 - 5).
    expect(get_ElapsedTime_Notification('2026-11-07T05:59:30', new Date(2026, 10, 7, 7, 1, 0))).toBe('2h');
    expect(get_ElapsedTime_Notification('2026-11-07T07:43:10', now)).toBe('50s');
    expect(get_ElapsedTime_Notification('2026-11-07T07:30:59', now)).toBe('14m');
  });
});

const item = (id: string, isRead: boolean): NotificationItem => ({
  id,
  title: `Notice ${id}`,
  dateTimeCreated: '2026-10-20T09:00:00',
  isRead,
  profileIconURL: '',
  messageTemplateId: '0',
  createdByMemberId: '0',
  createdByUserId: 0,
});
const range = { range: 'Last 7 Days', from: '2026-10-19', to: '2026-10-25' };
const bp = (sectionName: string, badgeCount: number): NotificationBreakpoint => ({
  position: 0,
  sectionName,
  badgeCount,
  dateRange: range,
});

describe('NotificationsList and NotificationsListBreakpoints client actions', () => {
  it('Handler_ToggleRead toggles the read state of the item at its place', () => {
    expect(toggleItemRead([item('1', false), item('2', true)], '2')).toEqual([item('1', false), item('2', false)]);
  });

  it('Handler_UpdateReadCount: AddToCount adds 1 to the section badge and marks the item unread', () => {
    const out = applyReadCountUpdate([bp('Last 7 Days', 1), bp('Older', 0)], [item('1', true)], {
      addToCount: true,
      sectionName: 'Last 7 Days',
      messageInstanceId: '1',
      isDelete: false,
    });
    expect(out.breakpoints.map((b) => b.badgeCount)).toEqual([2, 0]);
    expect(out.items).toEqual([item('1', false)]);
  });

  it('Handler_UpdateReadCount: a delete removes the item and takes 1 from the badge, also for a read item', () => {
    const out = applyReadCountUpdate([bp('Last 7 Days', 1)], [item('1', true), item('2', false)], {
      addToCount: false,
      sectionName: 'Last 7 Days',
      messageInstanceId: '1',
      isDelete: true,
    });
    expect(out.breakpoints[0]?.badgeCount).toBe(0);
    expect(out.items).toEqual([item('2', false)]);
  });
});

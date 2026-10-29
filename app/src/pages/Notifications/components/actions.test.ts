import { describe, expect, it } from 'vitest';
import type { NotificationBreakpoint, NotificationItem } from '@/api/notification';
import { applyReadCountUpdate, toggleItemRead } from './actions';

const item = (id: string, isRead: boolean): NotificationItem => ({
  id,
  title: `Notice ${id}`,
  dateTimeCreated: '2026-10-20T09:00:00',
  isRead,
  profileIconURL: '',
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

import type { NotificationBreakpoint, NotificationDateRange, NotificationItem } from '@/api/notification';
import { parseOsDate } from '@/lib/osDateTime';

const pad = (n: number) => String(n).padStart(2, '0');
/** DateTimeToDate of a client DateTime. */
const dateOf = (dateTime: string) => dateTime.slice(0, 10);

/** The item was created within the date range (its From and To included). */
export const isInRange = (item: NotificationItem, r: NotificationDateRange) =>
  dateOf(item.dateTimeCreated) >= r.from && dateOf(item.dateTimeCreated) <= r.to;

/** NotificationsList OnInitialize (block controller): the items of the breakpoint's range. */
export const itemsOfRange = (items: NotificationItem[], r: NotificationDateRange) =>
  items.filter((i) => isInRange(i, r));

/** Get_ElapsedTime_Notification (UBTConnectLibrary controller :1703-1760): seconds ≤ 60 "Ns", minutes ≤ 60 "Nm",
    hours < 24 "Nh", days < 7 "Nd", otherwise Round(days / 7) "Nw". Diff* count whole units. */
export function get_ElapsedTime_Notification(dateTime: string, now = new Date()): string {
  const ms = now.getTime() - parseOsDate(dateTime).getTime();
  const seconds = Math.trunc(ms / 1000);
  if (seconds <= 60) return `${seconds}s`;
  const minutes = Math.trunc(ms / 60000);
  if (minutes <= 60) return `${minutes}m`;
  const hours = Math.trunc(ms / 3600000);
  if (hours < 24) return `${hours}h`;
  const days = Math.trunc(ms / 86400000);
  if (days < 7) return `${days}d`;
  return `${Math.round(days / 7)}w`;
}

/** DateTimeToText (data-plus-date): "dd/MM/yyyy HH:mm:ss" as captured. */
export function dateTimeToText(dateTime: string): string {
  const d = parseOsDate(dateTime);
  return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}

/** Handler_ToggleRead of NotificationsList (NotificationsList.mvc.js:604-668), on the block's list: the item with its
    read state toggled, at the same place (ListRemove, then ListInsert at its index). */
export function toggleItemRead(items: NotificationItem[], id: string): NotificationItem[] {
  return items.map((i) => (i.id === id ? { ...i, isRead: !i.isRead } : i));
}

/** The inputs of the event UpdateReadCount that NotificationsList raises. */
export interface ReadCountUpdate {
  addToCount: boolean;
  /** The SectionName of the block's CurrentBreakpoint. */
  sectionName: string;
  messageInstanceId: string;
  isDelete: boolean;
}

/** Handler_UpdateReadCount of NotificationsListBreakpoints (NotificationsListBreakpoints.mvc.js), on the block's
    inputs: the breakpoint of the section gets BadgeCount + 1 (AddToCount) or - 1 (also for a deleted read item, as
    compiled); the item gets IsRead = not AddToCount and leaves the list when IsDelete. */
export function applyReadCountUpdate(
  breakpoints: NotificationBreakpoint[],
  items: NotificationItem[],
  u: ReadCountUpdate,
): { breakpoints: NotificationBreakpoint[]; items: NotificationItem[] } {
  return {
    breakpoints: breakpoints.map((b) =>
      b.sectionName === u.sectionName ? { ...b, badgeCount: b.badgeCount + (u.addToCount ? 1 : -1) } : b,
    ),
    items: u.isDelete
      ? items.filter((i) => i.id !== u.messageInstanceId)
      : items.map((i) => (i.id === u.messageInstanceId ? { ...i, isRead: !u.addToCount } : i)),
  };
}

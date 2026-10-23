import type { NotificationDateRange, NotificationItem } from '@/api/notification';
import { parseOsDate } from '@/shared/lib/osDateTime';

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

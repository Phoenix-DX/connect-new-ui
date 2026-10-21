import { parseOsDate } from '../../../shared/lib/osDateTime';
import { Choice } from '../../../shared/UBTConnect/lib/staticEntities';
import type { Breakpoint, DateRange, FilterUpdates, NotificationItem } from '../types';
import { Updates_DateRanges } from './staticEntities';

const pad = (n: number) => String(n).padStart(2, '0');
/** A local Date as an OutSystems Date "yyyy-MM-dd". */
export const osDateOf = (d: Date): string => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const addDays = (d: Date, n: number) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);
const addMonths = (d: Date, n: number) => new Date(d.getFullYear(), d.getMonth() + n, d.getDate());
/** DateTimeToDate of a client DateTime. */
const dateOf = (dateTime: string) => dateTime.slice(0, 10);

/** App_Notifications_AugmentDateRanges (UC :358-483): one UI_Updates_DateRange per known range, From/To from CurrDate:
    Today [today, today], Last 7 Days [-7, -1], Last 30 Days [-30, -8], Older [-6 months, -31]; other ids skipped. */
export function app_Notifications_AugmentDateRanges(ids: string[], now = new Date()): DateRange[] {
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const out: DateRange[] = [];
  for (const id of ids) {
    if (id === Updates_DateRanges.Today) out.push({ range: id, from: osDateOf(today), to: osDateOf(today) });
    else if (id === Updates_DateRanges.Last7Days)
      out.push({ range: id, from: osDateOf(addDays(today, -7)), to: osDateOf(addDays(today, -1)) });
    else if (id === Updates_DateRanges.Last30Days)
      out.push({ range: id, from: osDateOf(addDays(today, -30)), to: osDateOf(addDays(today, -8)) });
    else if (id === Updates_DateRanges.Older)
      out.push({ range: id, from: osDateOf(addMonths(today, -6)), to: osDateOf(addDays(today, -31)) });
  }
  return out;
}

const inRange = (item: NotificationItem, r: DateRange) =>
  dateOf(item.dateTimeCreated) >= r.from && dateOf(item.dateTimeCreated) <= r.to;

/** App_Notifications_GetBreakpoints (UC :497-616): for each range with items, Position = first index, SectionName =
    range, BadgeCount = unread items of the range; sorted by Position. Empty when there is no notification. */
export function app_Notifications_GetBreakpoints(items: NotificationItem[], dateRanges: DateRange[]): Breakpoint[] {
  if (items.length === 0) return [];
  const out: Breakpoint[] = [];
  for (const r of dateRanges) {
    const inR = items.filter((i) => inRange(i, r));
    if (inR.length === 0) continue;
    out.push({
      position: items.findIndex((i) => inRange(i, r)),
      sectionName: r.range,
      badgeCount: inR.filter((i) => !i.isRead).length,
      dateRange: r,
    });
  }
  return out.sort((a, b) => a.position - b.position);
}

/** NotificationsList OnInitialize (block controller): the items of the breakpoint's range. */
export const itemsOfRange = (items: NotificationItem[], r: DateRange) => items.filter((i) => inRange(i, r));

/** SetDefaultFilters (SCR :1713-1779): dates Older.From .. Today.To when either is null ('' here), ReadOnly None, Sort Yes. */
export function setDefaultFilters(f: FilterUpdates, dateRanges: DateRange[]): FilterUpdates {
  const next = { ...f };
  if (f.dateFrom === '' || f.dateTo === '') {
    next.dateFrom = dateRanges.find((r) => r.range === Updates_DateRanges.Older)?.from ?? '';
    next.dateTo = dateRanges.find((r) => r.range === Updates_DateRanges.Today)?.to ?? '';
  }
  if (f.readOnly === '') next.readOnly = Choice.None;
  if (f.sortByNewest === '') next.sortByNewest = Choice.Yes;
  return next;
}

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

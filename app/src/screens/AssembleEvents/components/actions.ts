/* Client actions of Connect2_Assemble_MUI used only by AssembleEvents, ported from
   migration/screens/AssembleEvents/analysis/sources/pretty/Connect2_Assemble_MUI.controller.js (cited as C:<line>).
   DateTimes are "yyyy-MM-ddTHH:mm:ss" wall-clock strings (shared/lib/osDateTime). */
import { currDateTime, formatDateTime } from '@/shared/lib/osDateTime';
import type { AssembleEventFilter } from '@/screens/AssembleEvents/types';

/** ViewmodeType (static-entities-tst.json `Connect2_Assemble_MUI.viewmodeType`): Id = label. */
export const ViewmodeType = {
  Today: 'Today',
  UpcomingMeetings: 'Upcoming Meetings',
  PastMeetings: 'Past Meetings',
} as const;

const pad = (n: number) => String(n).padStart(2, '0');
const at = (d: Date, time: string) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${time}`;
const addMonths = (d: Date, months: number) => new Date(d.getFullYear(), d.getMonth() + months, d.getDate());

/** GetAssembleEventListDateRangeFilter(AssembleFilterTimeOptionId) (C:246-317): upcoming = now … the day 36 months on at
    23:59:59; past = 36 months back at 00:00 … now; otherwise (Today) today 00:00 … 23:59:59. */
export function getAssembleEventListDateRangeFilter(
  timeOptionId: string,
  now = new Date(),
): { StartDateTime: string; EndDateTime: string } {
  if (timeOptionId === ViewmodeType.UpcomingMeetings)
    return { StartDateTime: currDateTime(now), EndDateTime: at(addMonths(now, 36), '23:59:59') };
  if (timeOptionId === ViewmodeType.PastMeetings)
    return { StartDateTime: at(addMonths(now, -36), '00:00:00'), EndDateTime: currDateTime(now) };
  return { StartDateTime: at(now, '00:00:00'), EndDateTime: at(now, '23:59:59') };
}

/** OffsetDateTimeByUserUTCOffset(DateTime, IsForServer) (C:1393-1474, JS MapStartDateTime): moves the instant by the
    device's UTC offset so that the platform's own UTC conversion (to or from the server) keeps the wall-clock time.
    The clone's DateTimes travel as wall-clock text without that conversion, so both shifts cancel: the value is
    returned unchanged (the null DateTime too, as compiled). */
export function offsetDateTimeByUserUTCOffset(dateTime: string): string {
  return dateTime;
}

/** GetIANATimezone (C:674-724, JS GetTimezoneName): the device's IANA time zone. */
export function getIANATimezone(): string {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}

/** GeAssembleSummaryListFilterLabel(AssembleEventFilter) (C:172-233): "All Meeting Types" when none or all types are
    selected, else "Meeting Types (<n>)". */
export function geAssembleSummaryListFilterLabel(filter: AssembleEventFilter): string {
  const selected = filter.AssembleEventType.filter((p) => p.IsSelected);
  return filter.AssembleEventType.length === selected.length || selected.length === 0
    ? 'All Meeting Types'
    : `Meeting Types (${String(selected.length)})`;
}

/** GetAssembleHeaderDateString(HeaderDate, AssembleFilterTimeOptionId) (C:453-527): "" for the null date (api.ts maps it to ""), else
    FormatDateTime(HeaderDate, "MMMM yyyy") with "From " (upcoming) or "Since " (past) in front. */
export function getAssembleHeaderDateString(headerDate: string, timeOptionId: string): string {
  if (headerDate === '') return '';
  const text = formatDateTime(headerDate, 'MMMM yyyy');
  if (timeOptionId === ViewmodeType.UpcomingMeetings) return `From ${text}`;
  if (timeOptionId === ViewmodeType.PastMeetings) return `Since ${text}`;
  return text;
}

/** CompareAssembleFilters(Filter, Filter2) (C:94-158): JSON of both differs. */
export function compareAssembleFilters(a: AssembleEventFilter, b: AssembleEventFilter): boolean {
  return JSON.stringify(a) !== JSON.stringify(b);
}

/** An empty AssembleEventFilterRec. */
export const emptyFilter = (): AssembleEventFilter => ({ AssembleFilterTimeOptionId: '', AssembleEventType: [] });

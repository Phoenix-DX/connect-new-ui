/* Client actions and JavaScript nodes the route's blocks call (runtime-sources/Connect2_OrbitMobile_MUI.controller.js
   = C, analysis/sources/pretty/*.mvc.js). The ones LDM_EventDetail_V2 calls too are shared (CR-LDM_EventDetail_V2-1):
   flipHouseholdName (src/shared/Connect2_LegacyShared/lib), getLocalityName, addAuditEvent_LDM and
   getCurrentTimeInMill (src/shared/Connect2_OrbitMobile_MUI/lib). */

/** EventView static entity (Connect2_OrbitMobile_MUI): ScreenBlock_MyEvents_V2.CurrentEventView defaults to MyTimeline
    and no action assigns it (ScreenBlock_MyEvents_V2.mvc.js model :48-50; no `currentEventViewVar =` in the
    controller), so the Month / Day / Agenda branches of the view are unreachable. */
export const EventView_MyTimeline = 1;

/** BuildGuestString(In_GuestCount) → Out_GuestCount (C:758-800): In_GuestCount + " Guest" + "s" unless it is "1". */
export const buildGuestString = (inGuestCount: string): string =>
  `${inGuestCount} Guest${inGuestCount === '1' ? '' : 's'}`;

/** ValidateBottomBorderOnListItem(In_CurrentRowNumber, In_ListLength) → Out_HasBorder (C:8294-8345). */
export const validateBottomBorderOnListItem = (currentRowNumber: number, listLength: number): boolean =>
  currentRowNumber < listLength - 1;

const WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

/** FormatDateTime(TextToDate(EventDate), "dddd, d MMMM yyyy") (EventCard_Info_V2.mvc.js view): the date part of the
    text, e.g. "Sunday, 7 June 2026"; "" when the text has no date. */
export function formatEventDate(eventDate: string): string {
  const match = /^(\d{4})-(\d{2})-(\d{2})/.exec(eventDate);
  if (!match) return '';
  const [, y, m, d] = match;
  const date = new Date(Number(y), Number(m) - 1, Number(d));
  return `${WEEKDAYS[date.getDay()] ?? ''}, ${String(date.getDate())} ${MONTHS[date.getMonth()] ?? ''} ${String(date.getFullYear())}`;
}

const pad = (n: number) => String(n).padStart(2, '0');
/** A local date as "YYYY-MM-DD" (an OutSystems Date). */
export const toOsDate = (d: Date): string => `${String(d.getFullYear())}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;

/** AddMonths(date, n) of OutSystems: the same day n months later, clamped to the month's last day. */
export function addMonths(date: Date, months: number): Date {
  const target = new Date(date.getFullYear(), date.getMonth() + months, 1);
  const last = new Date(target.getFullYear(), target.getMonth() + 1, 0).getDate();
  return new Date(target.getFullYear(), target.getMonth(), Math.min(date.getDate(), last));
}

/** AddDays(date, n). */
export const addDays = (date: Date, days: number): Date =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate() + days);

/** DiffDays(from, to) of two "YYYY-MM-DD" dates. */
export function diffDays(from: string, to: Date): number {
  const [y, m, d] = from.split('-').map(Number);
  const a = Date.UTC(y ?? 1900, (m ?? 1) - 1, d ?? 1);
  const b = Date.UTC(to.getFullYear(), to.getMonth(), to.getDate());
  return Math.round((b - a) / 86_400_000);
}

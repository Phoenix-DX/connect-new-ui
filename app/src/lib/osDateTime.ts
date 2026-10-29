/* OutSystems built-in date functions used by ported client actions. A Date travels as "yyyy-MM-dd" (DateTime as
   "yyyy-MM-ddTHH:mm:ss"); it is read as a local calendar date so no time-zone shift changes the day. */

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
const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

/** The OutSystems null Date (NullDate()) and null DateTime, as they travel on the wire and in the URL. */
export const OS_NULL_DATE = '1900-01-01';
export const OS_NULL_DATE_TIME = `${OS_NULL_DATE}T00:00:00`;

/** Parses an OutSystems Date / DateTime value ("" or invalid = the OutSystems null date 1900-01-01). */
export function parseOsDate(value: string): Date {
  const m = /^(\d{4})-(\d{2})-(\d{2})(?:[T ](\d{2}):(\d{2})(?::(\d{2}))?)?/.exec(value);
  if (!m) return new Date(1900, 0, 1);
  const [, y, mo, d, h = '0', mi = '0', s = '0'] = m;
  return new Date(Number(y), Number(mo) - 1, Number(d), Number(h), Number(mi), Number(s));
}

/** DayOfWeek: 0 = Sunday … 6 = Saturday. */
export function dayOfWeek(value: string): number {
  return parseOsDate(value).getDay();
}

const pad = (n: number, w = 2) => String(n).padStart(w, '0');

/** FormatDateTime with the .NET-style tokens OutSystems accepts (d, dd, ddd, dddd, M, MM, MMM, MMMM, yy, yyyy, H, HH,
    h, hh, m, mm, s, ss, tt); any other character is copied as is. English names (the app's only locale). */
export function formatDateTime(value: string, format: string): string {
  const date = parseOsDate(value);
  const tokens: Record<string, () => string> = {
    dddd: () => DAYS[date.getDay()] ?? '',
    ddd: () => (DAYS[date.getDay()] ?? '').slice(0, 3),
    dd: () => pad(date.getDate()),
    d: () => String(date.getDate()),
    MMMM: () => MONTHS[date.getMonth()] ?? '',
    MMM: () => (MONTHS[date.getMonth()] ?? '').slice(0, 3),
    MM: () => pad(date.getMonth() + 1),
    M: () => String(date.getMonth() + 1),
    yyyy: () => pad(date.getFullYear(), 4),
    yy: () => pad(date.getFullYear() % 100),
    HH: () => pad(date.getHours()),
    H: () => String(date.getHours()),
    hh: () => pad(date.getHours() % 12 || 12),
    h: () => String(date.getHours() % 12 || 12),
    mm: () => pad(date.getMinutes()),
    m: () => String(date.getMinutes()),
    ss: () => pad(date.getSeconds()),
    s: () => String(date.getSeconds()),
    tt: () => (date.getHours() < 12 ? 'AM' : 'PM'),
  };
  return format.replace(/dddd|ddd|dd|d|MMMM|MMM|MM|M|yyyy|yy|HH|H|hh|h|mm|m|ss|s|tt/g, (t) => tokens[t]?.() ?? t);
}

/** CurrDateTime(): the local date and time as an OutSystems DateTime ("yyyy-MM-ddTHH:mm:ss"). */
export function currDateTime(now = new Date()): string {
  const date = `${String(now.getFullYear())}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
  return `${date}T${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
}

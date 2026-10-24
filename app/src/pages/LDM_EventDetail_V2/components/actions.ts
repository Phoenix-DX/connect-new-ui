/* Client actions and JavaScript nodes the route's blocks call (runtime-sources/Connect2_OrbitMobile_MUI.controller.js
   = C, analysis/sources/pretty/*.mvc.js). The ones LDM_MyEvents_V2 calls too are shared (CR-LDM_EventDetail_V2-1):
   flipHouseholdName (src/shared/Connect2_LegacyShared/lib), getLocalityName, addAuditEvent_LDM and
   getCurrentTimeInMill (src/shared/Connect2_OrbitMobile_MUI/lib), generateScreenURL (src/shell/navigation). */

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

/** GetOrdinalEnding_Integer(In_Number, False) (C:4260-4350): "" for 0, else "st" / "nd" / "rd" by the last digit,
    "th" for 11-13 and the other digits. */
export function getOrdinalEnding(n: number): string {
  if (n === 0) return '';
  const lastTwo = n % 100;
  if (lastTwo >= 11 && lastTwo <= 13) return 'th';
  const last = n % 10;
  return last === 1 ? 'st' : last === 2 ? 'nd' : last === 3 ? 'rd' : 'th';
}

/** FormatDateForEventBanner(TextToDate(EventDate)) (C:1638-1660): FormatDateTime(date, "d" + ordinal + " MMMM yyyy"),
    e.g. "13th July 2026"; "" when the text has no date. */
export function formatDateForEventBanner(eventDate: string): string {
  const match = /^(\d{4})-(\d{2})-(\d{2})/.exec(eventDate);
  if (!match) return '';
  const [, y, m, d] = match;
  const day = Number(d);
  return `${String(day)}${getOrdinalEnding(day)} ${MONTHS[Number(m) - 1] ?? ''} ${y ?? ''}`;
}

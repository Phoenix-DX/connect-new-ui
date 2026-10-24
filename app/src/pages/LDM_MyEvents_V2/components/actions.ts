/* Client actions and JavaScript nodes the route's card blocks call (runtime-sources/Connect2_OrbitMobile_MUI
   .controller.js = C, analysis/sources/pretty/*.mvc.js). The ones LDM_EventDetail_V2 calls too are shared
   (CR-LDM_EventDetail_V2-1): flipHouseholdName (src/lib/legacyShared), getLocalityName,
   addAuditEvent_LDM and getCurrentTimeInMill (src/lib/orbit). The date actions of the
   timeline flows are in hooks/ldmMyEventsState.ts. */

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

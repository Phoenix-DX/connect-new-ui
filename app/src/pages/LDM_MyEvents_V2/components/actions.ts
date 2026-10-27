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

/** GetDynamicTopPosition JavaScript node of MyTimeline_Filters OnReady (LDM_Blocks.MyTimeline_Filters.mvc.js :1845-1862):
    the first element of In_ElementToBaseOffOf: Out_TopPosition = the sum of offsetTop - scrollTop + clientTop of the
    element and its offset parents, plus its offsetHeight; Out_Height = the clientHeight of the first `.popup-backdrop`
    minus Out_TopPosition. On TST a missing element throws; the block always renders it, so here it gives 0. */
export function getDynamicTopPosition(elementToBaseOffOf: string): { topPosition: number; height: number } {
  let element = document.querySelector<HTMLElement>(elementToBaseOffOf);
  if (!element) return { topPosition: 0, height: 0 };
  const height = element.offsetHeight;
  let yPosition = 0;
  while (element) {
    yPosition += element.offsetTop - element.scrollTop + element.clientTop;
    element = element.offsetParent as HTMLElement | null;
  }
  const topPosition = yPosition + height;
  return { topPosition, height: (document.querySelector('.popup-backdrop')?.clientHeight ?? 0) - topPosition };
}

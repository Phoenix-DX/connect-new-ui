import { getFormattedDateTime } from '@/shared/Connect2_OrbitMobile_MUI/lib/actions';

/* Client actions of Connect2_OrbitMobile_MUI that ScreenBlock_ViewDocuments calls, ported 1:1. `C:<n>` = line of
   migration/runtime-sources/Connect2_OrbitMobile_MUI.controller.js. Dates are OutSystems values as text; "" is the
   null date. */

/** The date of the subject: GetFormattedDateTime(date, no time, weekday, full letters, abbreviated) (C:1975-1980). */
const formattedDay = (dateTime: string) => getFormattedDateTime(dateTime, false, true, false, true, false, false);

/** GetContactHelpdeskSubject_Event(EventName, StartDateTime, EndDateTime, Location) → Out_FormattedSubject
    (C:1961-1990): EventName [+ " - " when a location or both dates follow], then Location [+ " - " when both dates
    follow], then "start - end" when both dates are set. */
export function getContactHelpdeskSubject_Event(
  eventName: string,
  startDateTime: string,
  endDateTime: string,
  location: string,
): string {
  const hasDates = startDateTime !== '' && endDateTime !== '';
  const name = eventName !== '' ? `${eventName}${location !== '' || hasDates ? ' - ' : ''}` : '';
  const place = location !== '' ? `${location}${hasDates ? ' - ' : ''}` : '';
  return `${name}${place}${hasDates ? `${formattedDay(startDateTime)} - ${formattedDay(endDateTime)}` : ''}`;
}

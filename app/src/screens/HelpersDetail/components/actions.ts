import { log } from '../../../lib/log';
import { getFormattedDateTime } from '../../../shared/Connect2_OrbitMobile_MUI/lib/actions';
import { OrbitMilestoneType, OrbitSkeletonLoading } from '../../../shared/Connect2_OrbitMobile_MUI/lib/staticEntities';

/* Client actions of Connect2_OrbitMobile_MUI that ScreenBlock_HelperDetails calls, ported 1:1. `C:<n>` = line of
   migration/runtime-sources/Connect2_OrbitMobile_MUI.controller.js. Dates are OutSystems values as text; "" is the
   null date. */

/** GetFormattedStringFromHelperType(In_HelperType) (C:3194-3236): first letter kept, the rest lower case, + "/s". */
export const getFormattedStringFromHelperType = (helperType: string): string =>
  `${helperType.substring(0, 1)}${helperType.substring(1).toLowerCase()}/s`;

/** GetSkeletonLoadingIdFromMilestoneTypeId(MilestoneTypeId) (C:4526-4590): guest milestones → MilestoneDetailGuest;
    host milestones and helper → MilestoneDetailHost; transport → TransportDetail; otherwise 0. */
export function getSkeletonLoadingIdFromMilestoneTypeId(milestoneTypeId: string): number {
  const T = OrbitMilestoneType;
  const id = milestoneTypeId;
  if (id === T.AccommodationGuest || id === T.MealGuest) return OrbitSkeletonLoading.MilestoneDetailGuest;
  if (id === T.AccommodationHost || id === T.MealHost || id === T.Helper)
    return OrbitSkeletonLoading.MilestoneDetailHost;
  if (id === T.Boat || id === T.Vehicle || id === T.Train || id === T.Flight)
    return OrbitSkeletonLoading.TransportDetail;
  return 0;
}

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

/** OnApplicationEvent_ViewHousehold(AuditPayload_ViewHousehold: TargetHouseholdId, EventId, EventTitle, EventLocation)
    (HB :1262-1270). Telemetry is not wired in the mock phase (decision U17): the event goes to the log with its ids
    only. */
export function onApplicationEvent_ViewHousehold(targetHouseholdId: string, eventId: string): void {
  log.info('ApplicationEvent', { Event: 'ViewHousehold', TargetHouseholdId: targetHouseholdId, EventId: eventId });
}

/** OnApplicationEvent_CallMember(AuditPayload_CallMember: EventId, EventTitle, HouseholdName, HouseholderPhone)
    (HB :1180-1190): as above, ids only (no names or phone numbers). */
export function onApplicationEvent_CallMember(eventId: string): void {
  log.info('ApplicationEvent', { Event: 'CallMember', EventId: eventId });
}

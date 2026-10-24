import { log } from '@/platform/log/log';
import { getFormattedDateTime } from '@/shared/Connect2_OrbitMobile_MUI/lib/actions';
import { OrbitMilestoneType, OrbitSkeletonLoading } from '@/shared/Connect2_OrbitMobile_MUI/lib/staticEntities';

/** The client actions of Connect2_OrbitMobile_MUI that ScreenBlock_HelperDetails calls, ported 1:1. Dates are
    OutSystems values as text; "" is the null date.
    @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_HelperDetails */

/** GetFormattedStringFromHelperType(In_HelperType): the first letter as it is, the rest in lower case, then "/s". */
export const getFormattedStringFromHelperType = (helperType: string): string =>
  `${helperType.substring(0, 1)}${helperType.substring(1).toLowerCase()}/s`;

/** GetSkeletonLoadingIdFromMilestoneTypeId(MilestoneTypeId): guest milestones → MilestoneDetailGuest; host milestones
    and helper → MilestoneDetailHost; transport → TransportDetail; otherwise 0. */
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

/** The date of the subject: GetFormattedDateTime(date, no time, weekday, full letters, abbreviated). */
const formattedDay = (dateTime: string) => getFormattedDateTime(dateTime, false, true, false, true, false, false);

/** GetContactHelpdeskSubject_Event(EventName, StartDateTime, EndDateTime, Location) → Out_FormattedSubject:
    EventName [+ " - " when a location or both dates follow], then Location [+ " - " when both dates follow], then
    "start - end" when both dates are set. */
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

/** OnApplicationEvent_ViewHousehold(AuditPayload_ViewHousehold: TargetHouseholdId, EventId, EventTitle, EventLocation).
    Telemetry is not wired in the mock phase (decision U17): the event goes to the log with its ids only. */
export function onApplicationEvent_ViewHousehold(targetHouseholdId: string, eventId: string): void {
  log.info('ApplicationEvent', { Event: 'ViewHousehold', TargetHouseholdId: targetHouseholdId, EventId: eventId });
}

/** OnApplicationEvent_CallMember(AuditPayload_CallMember: EventId, EventTitle, HouseholdName, HouseholderPhone): as
    above, ids only (no names or phone numbers). */
export function onApplicationEvent_CallMember(eventId: string): void {
  log.info('ApplicationEvent', { Event: 'CallMember', EventId: eventId });
}

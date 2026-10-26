import { log } from '@/platform/log/log';
import { getFormattedDateTimeById } from '@/lib/orbit/actions';
import { OrbitMilestoneType, OrbitSkeletonLoading } from '@/lib/orbit/staticEntities';

/** Client actions of Connect2_OrbitMobile_MUI that ScreenBlock_GuestArrangements calls, ported 1:1 (as in
    MilestoneDetail), without React. useGuestArrangements and the page call them. `C:<n>` = line of
    migration/runtime-sources/Connect2_OrbitMobile_MUI.controller.js. Dates are OutSystems values as text; "" is the
    null date.
    @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_GuestArrangements */

/** GetContactHelpdeskSubject_Milestone(MilestoneTypeId, EventName, MilestoneName, DateTime, Location) →
    Out_FormattedSubject (C:2052-2132): EventName [+ " - " when a name, location or date follows], MilestoneName
    [+ " - " when a location or date follows], Location [+ " - " when a date follows], then
    GetFormattedDateTimeById(MilestoneTypeId, DateTime). */
export function getContactHelpdeskSubject_Milestone(
  milestoneTypeId: string,
  eventName: string,
  milestoneName: string,
  dateTime: string,
  location: string,
): string {
  const hasDate = dateTime !== '';
  const event =
    eventName !== '' ? `${eventName}${milestoneName !== '' || location !== '' || hasDate ? ' - ' : ''}` : '';
  const milestone = milestoneName !== '' ? `${milestoneName}${location !== '' || hasDate ? ' - ' : ''}` : '';
  const place = location !== '' ? `${location}${hasDate ? ' - ' : ''}` : '';
  return `${event}${milestone}${place}${getFormattedDateTimeById(milestoneTypeId, dateTime)}`;
}

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

/** OnApplicationEvent_ViewHousehold(AuditPayload_ViewHousehold: TargetHouseholdId, MilestoneId, MilestoneTitle,
    EventId, EventTitle, EventLocation), after NavigateTo_HouseholdDetail in OnHandle_ClickedMember. Telemetry is not wired in the mock phase (decision U17): the
    event goes to the log with its ids only. */
export function onApplicationEvent_ViewHousehold(
  targetHouseholdId: string,
  milestoneId: string,
  eventId: string,
): void {
  log.info('ApplicationEvent', {
    Event: 'ViewHousehold',
    TargetHouseholdId: targetHouseholdId,
    MilestoneId: milestoneId,
    EventId: eventId,
  });
}

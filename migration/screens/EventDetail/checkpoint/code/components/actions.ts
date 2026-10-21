import { log } from '../../../lib/log';
import { getFormattedDateTime } from '../../../shared/Connect2_OrbitMobile_MUI/lib/actions';
import { MilestoneTimeType } from '../../../shared/Connect2_OrbitMobile_MUI/lib/staticEntities';
import type { Milestone_Screen } from '../../../shared/Connect2_OrbitMobile_MUI/lib/structures';
import { ApplicationEvents_Orbit_GenerateQRCode } from './staticEntities';

/* Client actions of Connect2_OrbitMobile_MUI that ScreenBlock_EventDetail calls, ported 1:1. `C:<n>` = line of
   migration/runtime-sources/Connect2_OrbitMobile_MUI.controller.js. Dates are OutSystems values as text; "" is the
   null date. */

/** Long Integer SequenceNo as a number for ListSort. */
const sequenceNo = (m: Milestone_Screen): number => Number(m.SequenceNo ?? '0') || 0;
const dateTimeOf = (m: Milestone_Screen): number => {
  const value = m.MilestoneDateTime ?? '';
  return value === '' ? Date.UTC(1900, 0, 1) : new Date(value).getTime();
};

/** FilterMilestonesByDateGroup(In_DateToFilterBy, In_TimeTypeId, In_Milestones) → Out_Milestones (C:1403-1470): with
    milestones, BEFORE → TimeType BEFORE sorted by MilestoneDateTime; DAY → TimeType DAY on In_DateToFilterBy sorted by
    SequenceNo; AFTER → TimeType AFTER sorted by MilestoneDateTime; otherwise (and without milestones) the empty
    list. ListSort is ascending and keeps the order of equal keys. */
export function filterMilestonesByDateGroup(
  inDateToFilterBy: string,
  inTimeTypeId: string,
  inMilestones: readonly Milestone_Screen[],
): Milestone_Screen[] {
  if (inMilestones.length === 0) return [];
  if (inTimeTypeId === MilestoneTimeType.BEFORE || inTimeTypeId === MilestoneTimeType.AFTER) {
    return inMilestones.filter((p) => p.TimeType === inTimeTypeId).sort((a, b) => dateTimeOf(a) - dateTimeOf(b));
  }
  if (inTimeTypeId === MilestoneTimeType.DAY) {
    return inMilestones
      .filter((p) => p.TimeType === MilestoneTimeType.DAY && (p.DateForFilter ?? '') === inDateToFilterBy)
      .sort((a, b) => sequenceNo(a) - sequenceNo(b));
  }
  return [];
}

/** GetHostAllocation(In_MilestonesScreenList) → Out_MilestonesScreenList (C:3870-3905): the milestones whose type
    CanHost, sorted by the type's Order; the empty list when there are none. */
export function getHostAllocation(inMilestones: readonly Milestone_Screen[]): Milestone_Screen[] {
  return inMilestones
    .filter((p) => p.OrbitMilestoneType?.CanHost ?? false)
    .sort((a, b) => (a.OrbitMilestoneType?.Order ?? 0) - (b.OrbitMilestoneType?.Order ?? 0));
}

/** The date range of the event rows: GetFormattedDateTime(date, no time, weekday, full letters, abbreviated). */
const formattedDay = (dateTime: string) => getFormattedDateTime(dateTime, false, true, false, true, false, false);

/** "Fri 23 Oct 2026 - Sun 25 Oct 2026": the date row of the block (view :536-545). */
export const eventDateRange = (start: string, end: string): string => `${formattedDay(start)} - ${formattedDay(end)}`;

/** GetContactHelpdeskSubject_Event(EventName, StartDateTime, EndDateTime, Location) → Out_FormattedSubject
    (C:1961-1990): EventName [+ " - " when a location or both dates follow], then Location [+ " - " when both dates
    follow], then the date range when both dates are set. */
export function getContactHelpdeskSubject_Event(
  eventName: string,
  startDateTime: string,
  endDateTime: string,
  location: string,
): string {
  const hasDates = startDateTime !== '' && endDateTime !== '';
  const name = eventName !== '' ? `${eventName}${location !== '' || hasDates ? ' - ' : ''}` : '';
  const place = location !== '' ? `${location}${hasDates ? ' - ' : ''}` : '';
  return `${name}${place}${hasDates ? eventDateRange(startDateTime, endDateTime) : ''}`;
}

/** OnApplicationEvent_GenerateQRCode(AuditPayload) (C:5748-5790): JSON of the payload → zOnApplicationEvent_Wrapper.
    Telemetry is not wired in the mock phase (decision U17): the event goes to the log with its ids only. */
export function onApplicationEvent_GenerateQRCode(memberId: string, eventId: string): void {
  log.info('ApplicationEvent', {
    EventId: ApplicationEvents_Orbit_GenerateQRCode,
    MemberId: memberId,
    OrbitEventId: eventId,
  });
}

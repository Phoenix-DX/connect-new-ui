import { log } from '@/platform/log/log';
import type { EmailTargetInputs } from '@/pages/EmailTarget/inputs';

/** The records and the client actions of the EmailTarget screen: the handler of the EmailSubmitted event of
    ScreenBlock_Household_Email. Values are the TST values (migration/knowledge/static-entities-tst.json). Local
    copies: no import across routes (CR-LDM_EventDetail_V2-1).
    @origin UBTConnect.Legacy_LDMEventsFlow.EmailTarget */

/** UBTConnect.applicationEvents_LDM records of OnEmailLDMEventParticipant_Handler. */
export const ApplicationEvents_LDM = {
  MyTimelineHostEmailed: '8e5d4070-b2ae-4363-88e0-72cd00142f1e',
  MyTimelineGuessEmailed: 'c49b96e1-783a-4b26-8d2b-d6890662e642',
} as const;

/** Connect2_OrbitMobile_MUI AddAuditEventDetailEvent(EventId, HouseholdId, …, EventDate, EventLocality). Telemetry is
    not wired in the mock phase (decision U17): the event goes to the log, without the payload's personal fields. */
export function addAuditEventDetailEvent(eventId: string, eventDate: string, eventLocality: string): void {
  log.info('ApplicationEvent', { EventId: eventId, HasDate: eventDate !== '', HasLocality: eventLocality !== '' });
}

/** OnEmailLDMEventParticipant_Handler (event EmailSubmitted of the block): when IsFromLDM, AddAuditEventDetailEvent
    (EmailHost ? MyTimelineHostEmailed : MyTimelineGuessEmailed, 0, "", EventDate, EventLocality). */
export function onEmailLDMEventParticipant(inputs: EmailTargetInputs): void {
  if (!inputs.IsFromLDM) return;
  addAuditEventDetailEvent(
    inputs.EmailHost ? ApplicationEvents_LDM.MyTimelineHostEmailed : ApplicationEvents_LDM.MyTimelineGuessEmailed,
    inputs.EventDate,
    inputs.EventLocality,
  );
}

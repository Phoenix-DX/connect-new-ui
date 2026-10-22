import { log } from '../../../lib/log';
import { showFeedbackMessage } from '@/platform/feedback';

/* Client actions, JavaScript nodes and static-entity records of the screen (S) and of ScreenBlock_Household_Email (H).
   Local copies (no import across routes; CR-LDM_EventDetail_V2-1). Values are the TST values
   (migration/knowledge/static-entities-tst.json). */

/** UBTConnect.applicationEvents_LDM records of OnEmailLDMEventParticipant_Handler (S :334-338). */
export const ApplicationEvents_LDM = {
  MyTimelineHostEmailed: '8e5d4070-b2ae-4363-88e0-72cd00142f1e',
  MyTimelineGuessEmailed: 'c49b96e1-783a-4b26-8d2b-d6890662e642',
} as const;

/** Connect2_LegacyShared.applicationEvents_Directory.emailHousehold (zOnApplicationEvent_Wrapper2, H :826). */
export const ApplicationEvents_Directory_EmailHousehold = 'f3fa3922-32a5-4eeb-bfb6-939a4e8697bd';

/** Connect2_LegacyShared.communityBusinessType records OnInitialize compares ContactBusinessType with (H :1083-1090). */
export const CommunityBusinessType = { OneSchoolGlobal: 'OneSchool Global', CampusCo: 'Campus&Co' } as const;

/** Connect2_OrbitMobile_MUI AddAuditEventDetailEvent(EventId, HouseholdId, …, EventDate, EventLocality)
    (Connect2_OrbitMobile_MUI.controller.js :119-514). Telemetry is not wired in the mock phase (decision U17): the event
    goes to the log, without the payload's personal fields. */
export function addAuditEventDetailEvent(eventId: string, eventDate: string, eventLocality: string): void {
  log.info('ApplicationEvent', { EventId: eventId, HasDate: eventDate !== '', HasLocality: eventLocality !== '' });
}

/** zOnApplicationEvent_Wrapper(EventId, AttachmentJSON) (Connect2_LegacyShared.controller.js :7567-7601). Not wired
    (U17): logged without the attachment (an e-mail and the sender's name). */
export function zOnApplicationEvent_Wrapper(eventId: string, attachmentJSON: string): void {
  log.info('ApplicationEvent', { EventId: eventId, HasAttachment: attachmentJSON !== '' });
}

/** ScheduleFeedbackMessageAfterTransition JS node (H :1208-1214): after 500 ms,
    `$public.FeedbackMessage.showFeedbackMessage(Message, 1)` (success). */
export function scheduleFeedbackMessageAfterTransition(message: string): void {
  window.setTimeout(() => {
    showFeedbackMessage(message, 1);
  }, 500);
}

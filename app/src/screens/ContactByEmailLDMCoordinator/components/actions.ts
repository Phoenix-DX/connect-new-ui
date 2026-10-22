import { log } from '@/platform/log/log';
import { showFeedbackMessage } from '@/platform/feedback';

/* Client actions and the JavaScript node the screen calls (S = runtime-sources/UBTConnect.ContactFlow
   .ContactByEmailLDMCoordinator.mvc.js). Local copies (no import across routes; CR-LDM_EventDetail_V2-1). */

/** UBTConnect.lDMApplicationEvent.myTimelineCoordinatorEmailed (S :535, :543; TST value,
    migration/knowledge/static-entities-tst.json). */
export const LDMApplicationEvent_MyTimelineCoordinatorEmailed = 'aab084a9-812f-400d-86a1-98e14932344f';

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

/** ScheduleFeedbackMessageAfterTransition JS node (S :667-673): after 500 ms,
    `$public.FeedbackMessage.showFeedbackMessage(Message, 1)` (success). */
export function scheduleFeedbackMessageAfterTransition(message: string): void {
  window.setTimeout(() => {
    showFeedbackMessage(message, 1);
  }, 500);
}

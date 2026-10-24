import { log } from '@/platform/log/log';
import { showFeedbackMessage } from '@/platform/feedback';

/* Client actions, JavaScript nodes and static-entity records the block uses (B = runtime-sources/Connect2_OrbitMobile_MUI
   .LDM_ScreenBlocks_V2.ScreenBlock_Event_Email_V2.mvc.js). Local copies (no import across routes; CR-LDM_EventDetail_V2-1
   moves the LDM helpers to src/shared/Connect2_OrbitMobile_MUI/lib). Values are the TST values
   (migration/knowledge/static-entities-tst.json). */

/** Connect2_OrbitMobile_MUI.applicationEvents_LDM records the block sends (B :1260, :1271). */
export const ApplicationEvents_LDM = {
  MyTimelineCoordinatorEmailed: 'aab084a9-812f-400d-86a1-98e14932344f',
  HostMessageGuest: '9df15769-a62f-40d7-8373-b2d1f4968a1b',
  ContactEventOrganiser: 'e5ec8266-9e7d-44b1-a2a9-4305a3e105a9',
} as const;

/** Connect2_OrbitMobile_MUI.applicationEvents_Directory.emailHousehold (TextToIdentifier, B :1271). */
export const ApplicationEvents_Directory_EmailHousehold = 'f3fa3922-32a5-4eeb-bfb6-939a4e8697bd';

/** AddAuditEventDetailEvent(EventId, HouseholdId, …, EventDate, EventLocality) (Connect2_OrbitMobile_MUI.controller.js
    :119-514): JSON of the audit payload → zOnApplicationEvent_Wrapper. Telemetry is not wired in the mock phase
    (decision U17, as the other LDM routes): the event goes to the log, without the payload's personal fields. */
export function addAuditEventDetailEvent(eventId: string, eventDate: string, eventLocality: string): void {
  log.info('ApplicationEvent', { EventId: eventId, HasDate: eventDate !== '', HasLocality: eventLocality !== '' });
}

/** zOnApplicationEvent_Wrapper(EventId, AttachmentJSON) (Connect2_LegacyShared.controller.js :7567-7601):
    GetAppEventName, then AzureInsights_CreateCustomEvent. Not wired (U17): logged without the attachment (an e-mail and
    the sender's name). */
export function zOnApplicationEvent_Wrapper(eventId: string, attachmentJSON: string): void {
  log.info('ApplicationEvent', { EventId: eventId, HasAttachment: attachmentJSON !== '' });
}

/** ScheduleFeedbackMessageAfterTransition JS node (B :1616-1622): after 500 ms,
    `$public.FeedbackMessage.showFeedbackMessage(Message, 1)` (success). */
export function scheduleFeedbackMessageAfterTransition(message: string): void {
  window.setTimeout(() => {
    showFeedbackMessage(message, 1);
  }, 500);
}

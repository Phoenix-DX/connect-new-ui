import { log } from '../../../lib/log';
import { showFeedbackMessage } from '../../../shell/feedback';

/* Client actions and the JavaScript node the screen calls (S = migration/screens/ContactByEmailOrbitHelpdesk/analysis/
   sources/pretty/UBTConnect.ContactFlow.ContactByEmailOrbitHelpdesk.mvc.js). Local copies (no import across routes). */

/** Connect2_OrbitMobile_MUI.applicationEvents_Orbit.contactHelpdesk (TST value,
    migration/knowledge/static-entities-tst.json). */
export const ApplicationEvents_Orbit_ContactHelpdesk = '1ebf6a03-1e28-44d7-998f-9f3d56465af5';

/** OnApplicationEvent_ContactHelpdesk(AuditPayload_ContactHelpdesk: EventId, EventTitle, Subject, Message)
    (Connect2_OrbitMobile_MUI controller: JSONSerialize of the payload → zOnApplicationEvent_Wrapper(contactHelpdesk,
    JSON); migration/screens/EventDetail/analysis/sources/raw/Connect2_OrbitMobile_MUI.controller.js). Telemetry is not
    wired in the mock phase (decision U17): the event goes to the log with the event id only (no subject or message). */
export function onApplicationEvent_ContactHelpdesk(eventId: string): void {
  log.info('ApplicationEvent', { EventId: ApplicationEvents_Orbit_ContactHelpdesk, OrbitEventId: eventId });
}

/** ScheduleFeedbackMessageAfterTransition JS node (S :671-677): after 500 ms,
    `$public.FeedbackMessage.showFeedbackMessage(Message, 1)` (success). */
export function scheduleFeedbackMessageAfterTransition(message: string): void {
  window.setTimeout(() => {
    showFeedbackMessage(message, 1);
  }, 500);
}

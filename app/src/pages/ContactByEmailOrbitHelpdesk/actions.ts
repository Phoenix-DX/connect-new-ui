import { log } from '@/platform/log/log';
import { showFeedbackMessage } from '@/platform/feedback';

/* Client actions and the JavaScript node the screen calls (S = migration/screens/ContactByEmailOrbitHelpdesk/analysis/
   sources/pretty/UBTConnect.ContactFlow.ContactByEmailOrbitHelpdesk.mvc.js). Local copies (no import across routes). */

/** Connect2_OrbitMobile_MUI.applicationEvents_Orbit.contactHelpdesk (TST value,
    migration/knowledge/static-entities-tst.json). */
export const ApplicationEvents_Orbit_ContactHelpdesk = '1ebf6a03-1e28-44d7-998f-9f3d56465af5';

/** Connect2_OrbitMobile_MUI AuditPayload_ContactHelpdesk, in the order of its attributes
    (Connect2_OrbitMobile_MUI.model.js:7107-7116). EventId is a Long Integer, kept as text as the other ports. */
interface AuditPayload_ContactHelpdesk {
  EventId: string;
  EventTitle: string;
  Subject: string;
  Message: string;
}

/** OnApplicationEvent_ContactHelpdesk(AuditPayload) (Connect2_OrbitMobile_MUI.controller.js:5645-5688): JSONSerialize
    of the payload, then zOnApplicationEvent_Wrapper(applicationEvents_Orbit.contactHelpdesk, JSON). The screen gives
    the full payload, with the subject and the message (ContactFlow Q1). Telemetry is not wired in the mock phase
    (decision U17): the event goes to the log with the event id only, without the subject, the message or the title. */
export function onApplicationEvent_ContactHelpdesk(auditPayload: AuditPayload_ContactHelpdesk): void {
  log.info('ApplicationEvent', {
    EventId: ApplicationEvents_Orbit_ContactHelpdesk,
    OrbitEventId: auditPayload.EventId,
  });
}

/** ScheduleFeedbackMessageAfterTransition JS node (S :671-677): after 500 ms,
    `$public.FeedbackMessage.showFeedbackMessage(Message, 1)` (success). */
export function scheduleFeedbackMessageAfterTransition(message: string): void {
  window.setTimeout(() => {
    showFeedbackMessage(message, 1);
  }, 500);
}

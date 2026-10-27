import { log } from '@/platform/log/log';
import { showFeedbackMessage } from '@/platform/feedback';

/* The JavaScript nodes and client actions of the page: those of the contact form ScreenBlock_ContactForm
   (Connect2_OrbitMobile_MUI) and FeedbackMessageAfterTransition of Connect2_LegacyShared (the screen). Local copies: a
   page does not import another page. */

/** FeedbackMessageAfterTransition (Connect2_LegacyShared): its JavaScript node shows the message 500 ms later, after
    the navigation that follows. */
export function feedbackMessageAfterTransition(message: string, messageType: number): void {
  window.setTimeout(() => {
    showFeedbackMessage(message, messageType);
  }, 500);
}

/** GetTextAreaLineHeight JavaScript node: with a subject, Ceiling(length × In_FontSize / (body width - 20)); else
    Out_LineCount keeps its 0. */
export function getTextAreaLineHeight(subject: string, fontSize: number): number {
  const body = document.querySelector('body');
  if (body && subject !== '') return Math.ceil((subject.length * fontSize) / (body.clientWidth - 20));
  return 0;
}

/** ScheduleFeedbackMessageAfterTransition JavaScript node: after 500 ms,
    `$public.FeedbackMessage.showFeedbackMessage(Message, 1)` (success). */
export function scheduleFeedbackMessageAfterTransition(message: string): void {
  window.setTimeout(() => {
    showFeedbackMessage(message, 1);
  }, 500);
}

/** Connect2_OrbitMobile_MUI AuditPayload_ContactHelpdesk, in the order of its attributes
    (Connect2_OrbitMobile_MUI.model.js:7107-7116). EventId is a Long Integer, kept as text. */
interface AuditPayload_ContactHelpdesk {
  EventId: string;
  EventTitle: string;
  Subject: string;
  Message: string;
}

/** Connect2_OrbitMobile_MUI AuditPayload_EmailHost, in the order of its attributes
    (Connect2_OrbitMobile_MUI.model.js:1761-1776). */
interface AuditPayload_EmailHost {
  MilestoneId: string;
  EventId: string;
  EventTitle: string;
  HostName: string;
  Subject: string;
  Message: string;
}

/** OnApplicationEvent_ContactHelpdesk(AuditPayload) (Connect2_OrbitMobile_MUI.controller.js:5645-5688): JSONSerialize
    of the payload, then zOnApplicationEvent_Wrapper(applicationEvents_Orbit.contactHelpdesk, JSON). The form gives the
    full payload (ContactFlow Q1). Telemetry is not wired in the mock phase (decision U17): the event goes to the log
    with the event id only, without the subject, the message or the title. */
export function onApplicationEvent_ContactHelpdesk(auditPayload: AuditPayload_ContactHelpdesk): void {
  log.info('ApplicationEvent', { Event: 'ContactHelpdesk', EventId: auditPayload.EventId });
}

/** OnApplicationEvent_EmailHost(AuditPayload) (Connect2_OrbitMobile_MUI.controller.js:5699-5742): as above, with
    applicationEvents_Orbit.emailHost. The log keeps the ids only (no host name, subject or message). */
export function onApplicationEvent_EmailHost(auditPayload: AuditPayload_EmailHost): void {
  log.info('ApplicationEvent', {
    Event: 'EmailHost',
    MilestoneId: auditPayload.MilestoneId,
    EventId: auditPayload.EventId,
  });
}

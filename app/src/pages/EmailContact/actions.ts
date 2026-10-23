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

/** OnApplicationEvent_ContactHelpdesk(AuditPayload_ContactHelpdesk: EventId, EventTitle, Subject, Message). Telemetry
    is not wired in the mock phase (decision U17): the event goes to the log with the event id only (no subject or
    message). */
export function onApplicationEvent_ContactHelpdesk(eventId: string): void {
  log.info('ApplicationEvent', { Event: 'ContactHelpdesk', EventId: eventId });
}

/** OnApplicationEvent_EmailHost(AuditPayload_EmailHost: MilestoneId, EventId, EventTitle, Subject, HostName,
    Message): as above, ids only. */
export function onApplicationEvent_EmailHost(milestoneId: string, eventId: string): void {
  log.info('ApplicationEvent', { Event: 'EmailHost', MilestoneId: milestoneId, EventId: eventId });
}

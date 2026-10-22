import { log } from '../../../lib/log';
import { showFeedbackMessage } from '@/platform/feedback';

/* Client actions and JavaScript nodes of ScreenBlock_ContactForm (CF = analysis/sources/Connect2_OrbitMobile_MUI.
   Orbit_ScreenBlocks.ScreenBlock_ContactForm.mvc.js). Local copies (no import across routes). */

/** GetTextAreaLineHeight JS node (CF :1576-1585): with a subject, Ceiling(length × In_FontSize / (body width - 20));
    else Out_LineCount keeps its 0. */
export function getTextAreaLineHeight(subject: string, fontSize: number): number {
  const body = document.querySelector('body');
  if (body && subject !== '') return Math.ceil((subject.length * fontSize) / (body.clientWidth - 20));
  return 0;
}

/** ScheduleFeedbackMessageAfterTransition JS node (CF :1586-1593): after 500 ms,
    `$public.FeedbackMessage.showFeedbackMessage(Message, 1)` (success). */
export function scheduleFeedbackMessageAfterTransition(message: string): void {
  window.setTimeout(() => {
    showFeedbackMessage(message, 1);
  }, 500);
}

/** OnApplicationEvent_ContactHelpdesk(AuditPayload_ContactHelpdesk: EventId, EventTitle, Subject, Message)
    (CF :1308-1320). Telemetry is not wired in the mock phase (decision U17): the event goes to the log with the event
    id only (no subject or message). */
export function onApplicationEvent_ContactHelpdesk(eventId: string): void {
  log.info('ApplicationEvent', { Event: 'ContactHelpdesk', EventId: eventId });
}

/** OnApplicationEvent_EmailHost(AuditPayload_EmailHost: MilestoneId, EventId, EventTitle, Subject, HostName, Message)
    (CF :1322-1336): as above, ids only. */
export function onApplicationEvent_EmailHost(milestoneId: string, eventId: string): void {
  log.info('ApplicationEvent', { Event: 'EmailHost', MilestoneId: milestoneId, EventId: eventId });
}

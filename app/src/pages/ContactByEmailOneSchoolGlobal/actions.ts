import { log } from '@/platform/log/log';
import { showFeedbackMessage } from '@/platform/feedback';

/* The client actions that Handler_SubmitForm of the screen calls (local copies, no import across routes).
   @origin UBTConnect.ContactFlow.ContactByEmailOneSchoolGlobal */

/** ScheduleFeedbackMessageAfterTransition JS node of Handler_SubmitForm: the platform FeedbackMessageShow(Message, 1)
    after 500 ms, so it shows on the previous screen. The timer is not tied to this screen (window.setTimeout in the
    original). */
export function scheduleFeedbackMessageAfterTransition(message: string): void {
  window.setTimeout(() => {
    showFeedbackMessage(message, 1);
  }, 500);
}

/** zOnApplicationEvent_Wrapper (Connect2_LegacyShared): GetAppEventName then an Azure Insights custom event.
    Telemetry is not wired in the mock phase (app-shell.spec U17), so it goes to the log. */
export function zOnApplicationEvent_Wrapper(eventId: string, attachmentJSON: string): void {
  log.info('ApplicationEvent EmailHousehold', { EventId: eventId, AttachmentJSON: attachmentJSON });
}

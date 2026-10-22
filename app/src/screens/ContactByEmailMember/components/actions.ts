import { log } from '../../../lib/log';
import { showFeedbackMessage } from '@/platform/feedback';

/** zOnApplicationEvent_Wrapper (Connect2_LegacyShared.controller.js, migration/runtime-sources, :7567-7601):
    GetAppEventName(EventId), then AzureInsights_CreateCustomEvent(name, AttachmentJSON). Telemetry is not wired in the
    mock phase (decision U17), so the event goes to the log; the attachment (e-mail and sender name) is left out of it. */
export function zOnApplicationEvent_Wrapper(eventId: string, attachmentJSON: string): void {
  log.info('ApplicationEvent', { EventId: eventId, HasAttachment: attachmentJSON !== '' });
}

/** Connect2_OrbitMobile_MUI OnApplicationEvent_EmailHost (mvc.js:688-703). Its controller is not in the local sources
    (Q2 open): built as a log entry only, no network. */
export function onApplicationEvent_EmailHost(payload: { MilestoneId: string; EventId: string }): void {
  log.info('OnApplicationEvent_EmailHost (not ported, Q2)', payload);
}

/** Connect2_OrbitMobile_MUI AddAuditEventDetailEvent (mvc.js:708-713). Its controller is not in the local sources
    (Q2 open): built as a log entry only, no network. */
export function addAuditEventDetailEvent(eventId: string, ldmEventDate: string, ldmEventLocality: string): void {
  log.info('AddAuditEventDetailEvent (not ported, Q2)', {
    EventId: eventId,
    HasDate: ldmEventDate !== '',
    HasLocality: ldmEventLocality !== '',
  });
}

/** ScheduleFeedbackMessageAfterTransition JS node (mvc.js:862-867): after 500 ms,
    `$public.FeedbackMessage.showFeedbackMessage(Message, 1)` (success; runtime defaults EncodeHTML True, no class,
    CloseOnClick True, OutSystems.js FeedbackMessage). */
export function scheduleFeedbackMessageAfterTransition(message: string): void {
  window.setTimeout(() => {
    showFeedbackMessage(message, 1);
  }, 500);
}

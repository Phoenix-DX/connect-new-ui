import { log } from '@/platform/log/log';
import { showFeedbackMessage } from '@/platform/feedback';
import { ApplicationEvents_Orbit_EmailHost } from './staticEntities';

/** zOnApplicationEvent_Wrapper (Connect2_LegacyShared.controller.js, migration/runtime-sources, :7567-7601):
    GetAppEventName(EventId), then AzureInsights_CreateCustomEvent(name, AttachmentJSON). Telemetry is not wired in the
    mock phase (decision U17), so the event goes to the log; the attachment (e-mail and sender name) is left out of it. */
export function zOnApplicationEvent_Wrapper(eventId: string, attachmentJSON: string): void {
  log.info('ApplicationEvent', { EventId: eventId, HasAttachment: attachmentJSON !== '' });
}

/** Connect2_OrbitMobile_MUI AuditPayload_EmailHost, in the order of its attributes (Connect2_OrbitMobile_MUI.model.js:
    1761-1776). EventId is a Long Integer, kept as text as the other ports. */
interface AuditPayload_EmailHost {
  MilestoneId: string;
  EventId: string;
  EventTitle: string;
  HostName: string;
  Subject: string;
  Message: string;
}

/** Connect2_OrbitMobile_MUI OnApplicationEvent_EmailHost(AuditPayload) (Connect2_OrbitMobile_MUI.controller.js:
    5699-5742): JSONSerialize of the payload, then zOnApplicationEvent_Wrapper(applicationEvents_Orbit.emailHost, JSON).
    The screen gives the full payload, with the subject and the message (ContactFlow Q1). The wrapper writes the event
    to the log without the JSON (decision U17), so no personal text goes to the log. */
export function onApplicationEvent_EmailHost(auditPayload: AuditPayload_EmailHost): void {
  const { MilestoneId, EventId, EventTitle, HostName, Subject, Message } = auditPayload;
  const json = JSON.stringify({ MilestoneId, EventId, EventTitle, HostName, Subject, Message });
  zOnApplicationEvent_Wrapper(ApplicationEvents_Orbit_EmailHost, json);
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

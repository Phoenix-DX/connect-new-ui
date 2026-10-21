import { log } from '../../../lib/log';
import { ApplicationEvents_Orbit_ClickEvent } from './staticEntities';

/** AuditPayload_ClickEventRec (Connect2_OrbitMobile_MUI): what OnHandle_EventCardClicked records about the clicked
    event (ScreenBlock_AdminLanding.mvc.js ctrl :603-610). DateTimes as on the wire. */
export interface AuditPayload_ClickEvent {
  EventId: string;
  EventTitle: string;
  EventLocation: string;
  EventStartDate: string;
  EventEndDate: string;
}

/** OnApplicationEvent_ClickEvent (runtime-sources/Connect2_OrbitMobile_MUI.controller.js :5534-5560): JSON-serializes
    the payload and raises zOnApplicationEvent_Wrapper(applicationEvents_Orbit.clickEvent, JSON), the app's audit
    event, here the app log (as OrbitLanding's Orbit audit events). */
export function onApplicationEvent_ClickEvent(auditPayload: AuditPayload_ClickEvent): void {
  log.info('ApplicationEvent', { EventId: ApplicationEvents_Orbit_ClickEvent, Payload: JSON.stringify(auditPayload) });
}

import { ApplicationEvents_Orbit_ClickEvent } from '@/pages/OrbitAdminLanding/staticEntities';
import { log } from '@/platform/log/log';
import type { AuditPayload_ClickEvent } from './adminLandingState';

/** OnApplicationEvent_ClickEvent of Connect2_OrbitMobile_MUI: JSON-serializes the payload and raises
    zOnApplicationEvent_Wrapper(applicationEvents_Orbit.clickEvent, JSON), the audit event of the app. Here it goes to
    the app log, as the Orbit audit events of OrbitLanding.
    @origin Connect2_OrbitMobile_MUI.OnApplicationEvent_ClickEvent */
export function onApplicationEvent_ClickEvent(auditPayload: AuditPayload_ClickEvent): void {
  log.info('ApplicationEvent', { EventId: ApplicationEvents_Orbit_ClickEvent, Payload: JSON.stringify(auditPayload) });
}

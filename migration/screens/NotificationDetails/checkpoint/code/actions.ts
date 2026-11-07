import { ApplicationEvents_LDM } from '@/containers/MessageInstance/staticEntities';
import { flagValue } from '@/platform/flags';
import { log } from '@/platform/log/log';

/* The client actions and the JavaScript node of AdaptiveCardViewerOnExecuteAction of the screen NotificationDetails
   (TST re-capture 2026-11-07, UBTConnect.App_Notifications.NotificationDetails.mvc.js =
   migration/sources/pretty/UBTConnect.App_Notifications.NotificationDetails.mvc@6445b6d0.js = ND7). The same helpers
   exist for ScreenBlock_MessageDetail in pages/MessageDetail/actions.ts; a page imports no other page, so this screen
   has its own copy.
   @origin UBTConnect.App_Notifications.NotificationDetails */

/** GetHasNewLDM of UBTConnect_Utils: OutSystems C2NewLDM (the LDM V2 screens). */
export const getHasNewLDM = (): boolean => flagValue('C2NewLDM');

/** AdaptiveCardActionSubmitData (Connect2_LegacyShared model): the JSON names `id` (EventHostId), `submitType` and
    `eventId`. The Long Integer ids are text; "0" is NullIdentifier. */
export interface AdaptiveCardActionSubmitData {
  eventHostId: string;
  submitType: string;
  eventId: string;
}

const longText = (v: unknown): string => (typeof v === 'number' || typeof v === 'string' ? String(v) || '0' : '0');

/** JSON Deserialize AdaptiveCardActionSubmitData (ND7:2015, 2032): "" gives the default record; a text that is not
    JSON throws, as OS.JSONUtils.deserializeFromJSON does. */
export function deserializeAdaptiveCardActionSubmitData(json: string): AdaptiveCardActionSubmitData {
  const data = (json ? JSON.parse(json) : {}) as Record<string, unknown> | null;
  const record = data ?? {};
  return {
    eventHostId: longText(record.id),
    submitType: typeof record.submitType === 'string' ? record.submitType : '',
    eventId: longText(record.eventId),
  };
}

/** The Substring JS node of AdaptiveCardViewerOnExecuteAction (ND7:2021-2030): the text of MessageToSearch between
    StringStart and StringEnd (String.search, as compiled). */
export function substringJS(stringStart: string, stringEnd: string, messageToSearch: string): string {
  return messageToSearch.substring(
    messageToSearch.search(stringStart) + stringStart.length,
    messageToSearch.search(stringEnd),
  );
}

/** StringStart and StringEnd of the Substring node (ND7:2022-2024): the data of the card's "View Event" action. */
export const VIEW_EVENT_DATA_START = '"title":"View Event","data":';
export const VIEW_EVENT_DATA_END = ',"style":"positive"}],"spacing":"medium"}';

/* ---- Audits (telemetry is not wired in the mock phase, decision U17: the event goes to the log) ---- */

/** AddAuditEventDetailEvent(NotificationContactOrganiser, 0, "", NullDate, "") of Connect2_OrbitMobile_MUI in
    Handler_AddAuditAndNavigateTo_EventEmail (ND7:2208-2210). */
export function addAuditEventDetailEvent_NotificationContactOrganiser(): void {
  log.info('ApplicationEvent', { EventId: ApplicationEvents_LDM.NotificationContactOrganiser });
}

/** AddAuditClickedEvent(TextToIdentifier(NotificationViewEvent), ObjectId, "", NullDate, "") of
    Connect2_OrbitMobile_MUI in Handler_AddAuditAndNavigateTo_EventDetail (ND7:2285-2287). ObjectId is the event id
    when LongIntegerToText(EventHostId) = NullTextIdentifier() (""), else the event host id, as compiled. */
export function addAuditClickedEvent_NotificationViewEvent(eventHostId: string, eventId: string): void {
  log.info('ApplicationEvent', {
    EventId: ApplicationEvents_LDM.NotificationViewEvent,
    ObjectId: eventHostId === '' ? eventId : eventHostId,
  });
}

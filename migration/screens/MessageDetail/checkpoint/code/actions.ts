import { ApplicationEvents_Directory, ApplicationEvents_LDM } from '@/containers/MessageInstance/staticEntities';
import { flagValue } from '@/platform/flags';
import { log } from '@/platform/log/log';
import { getUserInformation } from '@/platform/session/userInfo';
import { Type_ShareObject } from '@/lib/ubtConnect/staticEntities';
import { Connect_Entity } from '@/lib/ubtConnectUtils/staticEntities';

/* The client actions and JavaScript nodes that ScreenBlock_MessageDetail, its Share_UI blocks and the MessageDetail
   screen call (TST Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageDetail.mvc.js = SBMD,
   Connect2_LegacyShared.controller.js = C2LS, UBTConnect.Legacy_MyNotificationsFlow.MessageDetail.mvc.js = MD).
   assembleEventParameters and BuildAssembleNotificationContent are in containers/MessageInstance/actions.ts: the
   screen NotificationDetails uses them too. */

/* ---- UBTConnect_Utils flag helpers (migration/knowledge/feature-flag-helpers.md; all True on TST) ---- */

/** GetHasAssemble: LaunchDarkly mobileAssemble. */
export const getHasAssemble = (): boolean => flagValue('mobileAssemble');
/** GetHasOrbitAccess: LaunchDarkly mobileOrbitAccess. */
export const getHasOrbitAccess = (): boolean => flagValue('mobileOrbitAccess');
/** GetHasOrbitHostSurvey: LaunchDarkly mobileOrbitHostSurvey. */
export const getHasOrbitHostSurvey = (): boolean => flagValue('mobileOrbitHostSurvey');
/** GetHasNewLDM: OutSystems C2NewLDM (LDM V2 screens). */
export const getHasNewLDM = (): boolean => flagValue('C2NewLDM');
/** GetHasDeceasedProfileAccess: LaunchDarkly mobileDirectoryUpdateFeedDeceasedProfile. */
export const getHasDeceasedProfileAccess = (): boolean => flagValue('mobileDirectoryUpdateFeedDeceasedProfile');

/* ---- AdaptiveCardViewerOnExecuteAction (SBMD:1569-1737) ---- */

/** AdaptiveCardActionSubmitData (C2LS model): the JSON names `id` (EventHostId), `submitType` and `eventId`. The Long
    Integer ids are text; "0" is NullIdentifier. */
interface AdaptiveCardActionSubmitData {
  eventHostId: string;
  submitType: string;
  eventId: string;
}

const longText = (v: unknown): string => (typeof v === 'number' || typeof v === 'string' ? String(v) || '0' : '0');

/** JSONDeserialize AdaptiveCardActionSubmitData: "" gives the default record; a text that is not JSON throws, as
    OS.JSONUtils.deserializeFromJSON does. */
export function deserializeAdaptiveCardActionSubmitData(json: string): AdaptiveCardActionSubmitData {
  const data = (json ? JSON.parse(json) : {}) as Record<string, unknown> | null;
  const record = data ?? {};
  return {
    eventHostId: longText(record.id),
    submitType: typeof record.submitType === 'string' ? record.submitType : '',
    eventId: longText(record.eventId),
  };
}

/** SubstringJS: the text of MessageToSearch between StringStart and StringEnd (String.search, as compiled). */
export function substringJS(stringStart: string, stringEnd: string, messageToSearch: string): string {
  return messageToSearch.substring(
    messageToSearch.search(stringStart) + stringStart.length,
    messageToSearch.search(stringEnd),
  );
}

/** The two texts that SubstringJS searches in the card content for a send_email submit without an event id: the data
    of the "View Event" action. */
export const VIEW_EVENT_DATA_START = '"title":"View Event","data":';
export const VIEW_EVENT_DATA_END = ',"style":"positive"}],"spacing":"medium"}';

/* ---- Audits (telemetry is not wired in the mock phase, decision U17: the event goes to the log, without the
   payload's personal fields) ---- */

/** Connect2_OrbitMobile_MUI AddAuditEventDetailEvent(NotificationContactOrganiser, ...) of
    Handler_AddAuditAndNavigateTo_EventEmail (MD:474-550). */
export function addAuditEventDetailEvent_NotificationContactOrganiser(): void {
  log.info('ApplicationEvent', { EventId: ApplicationEvents_LDM.NotificationContactOrganiser });
}

/** Connect2_OrbitMobile_MUI AddAuditClickedEvent(TextToIdentifier(NotificationViewEvent), the event host id, or the
    event id when the host id is NullIdentifier, ...) of Handler_AddAuditAndNavigateTo_EventDetail (MD:976-1048). */
export function addAuditClickedEvent_NotificationViewEvent(eventHostId: string, eventId: string): void {
  log.info('ApplicationEvent', {
    EventId: ApplicationEvents_LDM.NotificationViewEvent,
    ObjectId: eventHostId === '0' || eventHostId === '' ? eventId : eventHostId,
  });
}

/** C2LS AuditShareViewEvent(ShareId, SharingUserId, TargetUserId "", TargetApp "Others", ShareObjectTypeId, ObjectId):
    Cache_UserInfo_Get gives the TargetUserId, then zOnApplicationEvent_Wrapper(ShareView, the JSON of
    AuditLog_ShareEventInfo). */
export async function auditShareViewEvent(shareId: string, shareObjectTypeId: string): Promise<void> {
  await getUserInformation();
  log.info('ApplicationEvent', { EventId: ApplicationEvents_Directory.ShareView, ShareId: shareId, shareObjectTypeId });
}

/** UBTConnect_Utils GetConnectEntity_ByShareType(ShareType): Locality, Household (Household or My Household),
    SupperMeetings_aka_Subdivisions, OneSchoolGlobal, FeedItem; "" for any other type. */
export function getConnectEntity_ByShareType(shareType: string): string {
  if (shareType === Type_ShareObject.Locality) return Connect_Entity.Locality;
  if (shareType === Type_ShareObject.Household || shareType === Type_ShareObject.MyHousehold) {
    return Connect_Entity.Household;
  }
  if (shareType === Type_ShareObject.SupperMeeting) return Connect_Entity.SupperMeetings_aka_Subdivisions;
  if (shareType === Type_ShareObject.OneSchoolGlobal) return Connect_Entity.OneSchoolGlobal;
  if (shareType === Type_ShareObject.Feed) return Connect_Entity.FeedItem;
  return '';
}

import type { MessageParameter, PlaceholderDelimiters } from '@/api/message';
import { getUserInformation } from '@/platform/session/userInfo';
import { setTextPlaceholdersValue } from './placeholderLib';
import { ParameterName } from './staticEntities';

/* The client actions that GetMessageInstanceByIdOnAfterFetch and the Assemble button use, shared by
   ScreenBlock_MessageDetail (TST Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageDetail.mvc.js = SBMD,
   Connect2_LegacyShared.controller.js = C2LS) and the screen NotificationDetails of UBTConnect (live TST 2026-11-05,
   UBTConnect.App_Notifications.NotificationDetails.mvc.js:1124-1253, which calls the same C2LS action). */

/* ---- OnClick_ViewAssembleEvent (SBMD:1415-1506) ---- */

/** The NavigateTo_AssembleEvent arguments: the values of the parameters AssembleEventParentId, AssembleEventInstanceId
    and AssembleEventType (ListIndexOf of each); null when the parent or the instance id is missing. A missing type gives
    "" (the TST getItem(-1) case, see the build note). */
export function assembleEventParameters(
  parameters: MessageParameter[],
): { eventParentId: string; eventInstanceId: string; eventTypeTitle: string } | null {
  const value = (name: number) => parameters.find((p) => p.parameterNameId === name)?.parameterValue;
  const eventParentId = value(ParameterName.AssembleEventParentId);
  const eventInstanceId = value(ParameterName.AssembleEventInstanceId);
  if (eventParentId === undefined || eventInstanceId === undefined) return null;
  return { eventParentId, eventInstanceId, eventTypeTitle: value(ParameterName.AssembleEventType) ?? '' };
}

/* ---- BuildAssembleNotificationContent (C2LS:671-900) ---- */

/** BuildAssembleNotificationContent(ListOfMessageParameters, OriginalContent, the three delimiters): the first branch
    has the constant condition True, so it always runs Cache_UserInfo_Get and SetTextPlaceholdersValue with the user's
    first name. The else branch (the cancellation text built from the parameters) is never reached. */
export async function buildAssembleNotificationContent(
  _listOfMessageParameters: MessageParameter[],
  originalContent: string,
  delimiters: PlaceholderDelimiters,
): Promise<string> {
  const userInformation = await getUserInformation();
  return setTextPlaceholdersValue({
    text: originalContent,
    delimiterPlaceholder: delimiters.placeholder,
    delimiterFunction: delimiters.function,
    delimiterParameter: delimiters.parameter,
    fromClientApp_Name: userInformation.Directory_UserCurrent.FirstName,
  });
}

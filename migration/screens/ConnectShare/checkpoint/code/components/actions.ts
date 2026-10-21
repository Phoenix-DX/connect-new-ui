import { isSystemException, exceptionMessage } from '../../../shell/exceptions';
import { getUserInformation } from '../../../shell/userInfo';
import { Type_ShareObject } from '../../../shared/UBTConnect/lib/staticEntities';
import { get_ShareDetails } from '../api';
import type { OnInitializeSharingScreenResult } from '../types';

/* Client actions of the UBTConnect module that ConnectShare runs (p:migration/screens/ConnectShare/analysis/sources/
   raw/UBTConnect.controller.js, "UC" below). */

/** AuditShareViewEvent (UC:764-904). TargetUserId is "" → GetUserInformation_Wrapper, TargetUserId = its Id
    (:784-793); then AuditLog_ShareEventInfo is filled and JSON-serialized (:797-818) and the action returns: nothing
    is sent anywhere, so only the user-info read remains. Its exceptions go up to the caller. */
export async function auditShareViewEvent(): Promise<void> {
  await getUserInformation();
}

/** OnInitializeSharingScreen(ShareId) (UC:15603-15700): Get_ShareDetails(ShareId, IncludeDeceased = False), then
    - IsShareAvailable False → StatusMessage "This shared item is no longer available" (:15668-15671);
    - CanAccess = ShareObjectType.Id = Feed or CanAccess (:15628-15629);
    - ShareItem.Id = "" → the same "no longer available" message (:15630-15633);
    - not CanAccess → ShowFreeSubscriptionAlert True, StatusMessage "You don't have access to shared item" (:15635-15641);
    - else IsRedirect = ShareObjectType.Id <> NullTextIdentifier, Redirect_ShareObjectTypeId = ShareObjectType.Id,
      Redirect_Share_Attributes.Id = ShareDetails.ObjectId, or ShareItem.HouseholderId for an Update (:15643-15658).
    Handle Error AllExceptions (:15675-15693, any non-system exception): StatusMessage = its message, then
    AuditShareViewEvent(ShareId, "", "", "Others", "", ""); an exception of the audit goes up to the screen. */
export async function onInitializeSharingScreen(shareId: string): Promise<OnInitializeSharingScreenResult> {
  const out: OnInitializeSharingScreenResult = {
    isRedirect: false,
    redirect_ShareObjectTypeId: '',
    showFreeSubscriptionAlert: false,
    statusMessage: '',
    redirect_Share_AttributesId: '',
  };
  try {
    const share = await get_ShareDetails(shareId);
    if (share.isShareAvailable) {
      const canAccess = share.shareObjectTypeId === Type_ShareObject.Feed || share.canAccess;
      if (share.shareItemId === '') {
        out.statusMessage = 'This shared item is no longer available';
      } else if (!canAccess) {
        out.showFreeSubscriptionAlert = true;
        out.statusMessage = "You don't have access to shared item";
      } else {
        out.isRedirect = share.shareObjectTypeId !== '';
        out.redirect_ShareObjectTypeId = share.shareObjectTypeId;
        out.redirect_Share_AttributesId = share.objectId;
        if (share.shareObjectTypeId === Type_ShareObject.Update) {
          out.redirect_Share_AttributesId = share.householderId;
        }
      }
    } else {
      out.statusMessage = 'This shared item is no longer available';
    }
  } catch (error) {
    if (isSystemException(error)) throw error;
    out.statusMessage = exceptionMessage(error);
    await auditShareViewEvent();
  }
  return out;
}

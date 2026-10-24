import { fetchShareDetails } from '@/api/share';
import { exceptionMessage, isSystemException } from '@/legacy/os/exceptions';
import { getUserInformation } from '@/platform/session/userInfo';
import { Type_ShareObject } from '@/shared/UBTConnect/lib/staticEntities';

/** The client actions of the UBTConnect module that ConnectShare runs, without React: OnInitializeSharingScreen and
    AuditShareViewEvent. useConnectShare calls them.
    @origin UBTConnect.Legacy_Share.ConnectShare */

/** The output parameters of the client action OnInitializeSharingScreen. */
export interface OnInitializeSharingScreenResult {
  isRedirect: boolean;
  redirect_ShareObjectTypeId: string;
  showFreeSubscriptionAlert: boolean;
  statusMessage: string;
  /** Redirect_Share_Attributes.Id. */
  redirect_Share_AttributesId: string;
}

/** AuditShareViewEvent. TargetUserId is "", so it reads GetUserInformation_Wrapper and uses its Id as TargetUserId.
    Then it fills AuditLog_ShareEventInfo, serializes it to JSON and returns: it sends nothing, so only the user-info
    read remains. Its exceptions go up to the caller. */
export async function auditShareViewEvent(): Promise<void> {
  await getUserInformation();
}

/** OnInitializeSharingScreen(ShareId): Get_ShareDetails(ShareId, IncludeDeceased = False), then
    - IsShareAvailable False: StatusMessage "This shared item is no longer available";
    - CanAccess = ShareObjectType.Id = Feed or ShareItem.CanAccess;
    - ShareItem.Id = "": the same "no longer available" message;
    - not CanAccess: ShowFreeSubscriptionAlert True, StatusMessage "You don't have access to shared item";
    - else IsRedirect = ShareObjectType.Id <> NullTextIdentifier, Redirect_ShareObjectTypeId = ShareObjectType.Id, and
      Redirect_Share_Attributes.Id = ShareDetails.ObjectId, or ShareItem.HouseholderId for an Update.
    Handle Error AllExceptions (every exception that is not a system exception): StatusMessage = its message, then
    AuditShareViewEvent(ShareId, "", "", "Others", "", ""). An exception of the audit goes up to the screen. */
export async function onInitializeSharingScreen(shareId: string): Promise<OnInitializeSharingScreenResult> {
  const out: OnInitializeSharingScreenResult = {
    isRedirect: false,
    redirect_ShareObjectTypeId: '',
    showFreeSubscriptionAlert: false,
    statusMessage: '',
    redirect_Share_AttributesId: '',
  };
  try {
    const share = await fetchShareDetails(shareId);
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

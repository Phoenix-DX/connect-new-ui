import { getClientVar } from '@/platform/session/session';
import { openInApp_OpenExternalLink } from '@/shared/UBTConnect_Utils/lib/actions';
import { getUserInformation } from '@/platform/session/userInfo';
import { confirmAction } from './confirmAction';

/* UBTConnect_Utils subscription actions (HF p:UBTConnect_Utils.controller.js:1-85). */

/** App_Subscription_ShowUpgradePopUp (:46-85): opens the Access Restricted dialog of the current screen, whose id
    Dialog_AccessRestrictedAction stored in App_SubscriptionPopUp; nothing when no dialog stored its id. */
export async function showUpgradePopUp(): Promise<void> {
  const dialogId = getClientVar('UBTConnect_Utils.App_SubscriptionPopUp');
  if (dialogId !== '') await confirmAction(dialogId);
}

/**
 * App_Subscription_NavigateToUpgrade (:3-38): Cache_UserInfo_Get, Cache_UserInfo_Invalidate, then
 * OpenInApp_OpenExternalLink(Subscription.SubscriptionManageLink, False) (shared, CR-HomeFeed-1: a new tab for an http(s)
 * link, decision U18). The body of Cache_UserInfo_Invalidate is not in local code: the invalidation is left out (open
 * point).
 */
export async function navigateToUpgrade(): Promise<void> {
  const info = await getUserInformation();
  openInApp_OpenExternalLink(
    info.Directory_UserCurrent.Directory_UserCurrent_Subscription.SubscriptionManageLink,
    false,
  );
}

// @os-block Connect2_LegacyShared.Utility.FreeSubscriptionActionDialog
import { useId } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { ActionConfirmationDialog } from '@/platform/feedback/dialogs/ActionConfirmationDialog';
import { getUserInformation } from '@/platform/session/userInfo';

export interface FreeSubscriptionActionDialogProps {
  /** OutSystems instance id of the block: callers show the dialog with `confirmAction(id)` (it finds the event hub
      of the ActionConfirmationDialog inside). */
  id?: string;
}

/** "Access Restricted" confirmation (Connect2_LegacyShared.Utility.FreeSubscriptionActionDialog.mvc.js,
    LegacyShareObject copy: view :150-230, OnConfirmed :232-262). */
export function FreeSubscriptionActionDialog({ id }: FreeSubscriptionActionDialogProps) {
  const scope = useId();

  // OnConfirmed: Cache_UserInfo_Get, then InAppBrowser Open(SubscriptionManageLink, Target SYSTEM) when the plugin is
  // available, else a navigation to the link. The clone has no Cordova InAppBrowser: decision U18 (app-shell.spec.md
  // §12a, see UBTConnect_Utils openInApp_OpenExternalLink) counts it as available and opens a new tab.
  const onConfirmed = async () => {
    const user = await getUserInformation();
    window.open(
      user.Directory_UserCurrent.Directory_UserCurrent_Subscription.SubscriptionManageLink,
      '_blank',
      'noopener',
    );
  };

  return (
    <OSBlock name="Utility.FreeSubscriptionActionDialog" id={id}>
      <div className="upgrade-subscription-action-dialog backwards-compatibility" data-container="">
        <ActionConfirmationDialog
          widgetId={`${scope}-$b1`}
          scope={`${scope}-b1`}
          header="Access Restricted"
          body={
            <>
              It seems like you don&apos;t have access to this information.
              <br />
              <br />
              Please upgrade your subscription to gain access to more features and information.
            </>
          }
          confirmLabel="Upgrade Subscription"
          dismissLabel="Cancel"
          onConfirmed={onConfirmed}
        />
      </div>
    </OSBlock>
  );
}

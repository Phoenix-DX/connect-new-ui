/** @origin UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction */
import { useEffect } from 'react';
import { NotCaptured } from '@/platform/feedback/NotCaptured';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { setClientVar } from '@/platform/session/session';
import { ConfirmDialogView } from './dialogViews';
import { navigateToUpgrade } from './subscription';

const LIBRARY = '(library block, built with the foundation queue)';

export interface DialogAccessRestrictedActionProps {
  /** Block instance id inside CommonUI (HomeFeed: `b13-$b4`). */
  id?: string;
  /** In_ExtendedClass. */
  extendedClass?: string;
}

/** The "Access Restricted" upgrade question, in CommonUI on every screen and, through
    DialogAccessRestrictedActionLegacy, on the legacy screens. Closed markup captured (HomeFeed). The open state is not captured: its library blocks
    (CustomText, CustomContainer, Icon) stay NotCaptured with the compiled texts. OnReady stores the id of its popup in
    the client variable App_SubscriptionPopUp (App_Subscription_ShowUpgradePopUp opens that popup); Confirmed runs
    App_Subscription_NavigateToUpgrade. */
export function DialogAccessRestrictedAction({
  id = 'b13-$b4',
  extendedClass = '',
}: DialogAccessRestrictedActionProps) {
  const scope = id.replace('$', '');
  const widgetId = `${scope}-PopUp`;

  // OnReady: App_SubscriptionPopUp = PopUp.Id
  useEffect(() => {
    setClientVar('UBTConnect_Utils.App_SubscriptionPopUp', widgetId);
  }, [widgetId]);

  const wrapperClass = 'subscription-pop-up connect-dialog-popup connect-dialog-popup--access-restricted';
  return (
    <OSBlock name="CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction" id={id}>
      <div className={extendedClass ? `${wrapperClass} ${extendedClass}` : wrapperClass} data-container="">
        <ConfirmDialogView
          widgetId={widgetId}
          scope={`${scope}-b1`}
          header={
            <div className="text-align-center" data-container="">
              <NotCaptured name={`BasePatterns.CustomText: base, semi-bold, padding bottom small ${LIBRARY}`}>
                Access Restricted
              </NotCaptured>
            </div>
          }
          body={
            <>
              <NotCaptured
                name={`BasePatterns.CustomContainer "Iconcont" > circle .access-restricted-body-icon > ConnectPatterns.Icon lock, neutral 0, 32 ${LIBRARY}`}
              />
              <NotCaptured
                name={`BasePatterns.CustomContainer "Message": margin top/bottom base, neutral 10 ${LIBRARY}`}
              >
                <div data-container="">
                  <span data-expression="">
                    It looks like this content isn&apos;t included in your current plan. Upgrade your subscription to
                    access more features and detailed information.
                  </span>
                </div>
              </NotCaptured>
            </>
          }
          confirmLabel={
            <NotCaptured
              name={`BasePatterns.CustomContainer > CustomText neutral 0, small, semi-bold + .margin-left-s > ConnectPatterns.Icon openNew, 16 ${LIBRARY}`}
            >
              Upgrade Subscription
            </NotCaptured>
          }
          dismissLabel="Close"
          onConfirmed={navigateToUpgrade} // Confirmed → App_Subscription_NavigateToUpgrade
        />
      </div>
    </OSBlock>
  );
}

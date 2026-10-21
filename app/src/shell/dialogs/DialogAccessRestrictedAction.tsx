// @os-block UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction
import { useEffect } from 'react';
import { NotCaptured } from '../../components/NotCaptured';
import { OSBlock } from '../../components/OSBlock';
import { setClientVar } from '../session';
import { ActionConfirmationDialog } from './ActionConfirmationDialog';
import { navigateToUpgrade } from './subscription';

/* UBTConnect_Utils CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction, in CommonUI on every screen
   (HF p:UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction.mvc.js, "DAR").
   Closed markup captured (HF dom:1157-1165). Open state not captured (U21): the placeholders below follow the compiled
   view (DAR:186-525); their CustomText / CustomContainer / Icon blocks are library blocks built with the foundation
   queue (catalog/infra.json), so they stay NotCaptured with the compiled texts inside. */

const LIBRARY = '(library block, built with the foundation queue)';

export interface DialogAccessRestrictedActionProps {
  /** block instance id inside CommonUI (HomeFeed: `b13-$b4`) */
  id?: string;
  /** In_ExtendedClass */
  extendedClass?: string;
}

export function DialogAccessRestrictedAction({
  id = 'b13-$b4',
  extendedClass = '',
}: DialogAccessRestrictedActionProps) {
  const scope = id.replace('$', '');
  const widgetId = `${scope}-PopUp`;

  // OnReady: App_SubscriptionPopUp = PopUp.Id (DAR:563-564)
  useEffect(() => {
    setClientVar('UBTConnect_Utils.App_SubscriptionPopUp', widgetId);
  }, [widgetId]);

  const wrapperClass = 'subscription-pop-up connect-dialog-popup connect-dialog-popup--access-restricted';
  return (
    <OSBlock name="CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction" id={id}>
      <div className={extendedClass ? `${wrapperClass} ${extendedClass}` : wrapperClass} data-container="">
        <ActionConfirmationDialog
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
          onConfirmed={navigateToUpgrade} // Confirmed → App_Subscription_NavigateToUpgrade (DAR:580-590)
        />
      </div>
    </OSBlock>
  );
}

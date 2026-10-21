import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import { CommonUI_InsideLayout } from '../../shared/UBTConnect/CommonUI_InsideLayout';
import { DialogAccessRestrictedAction, showUpgradePopUp } from '../../shell/dialogs';
import { raiseToFlowHandler } from '../../shell/exceptions';
import { getUserInformation } from '../../shell/userInfo';
import { readInputs } from './api';
import { ScreenBlock_ShareObject } from './components/ScreenBlock_ShareObject';

/** UBTConnect Legacy_Share.LegacyShareObject (p:UBTConnect.Legacy_Share.LegacyShareObject.mvc.js: model :1-92, view
    :94-246, controller :248-390). ScreenBlock_ShareObject with the three inputs and User_AgeVisibility, an empty
    BottomBar and CommonUI_InsideLayout in CommonUI_Elements; then the screen's own Dialog_AccessRestrictedAction
    "SubscriptionDenied" (In_ExtendedClass "connect-legacy-compatibily-containter"). OnInitialize (:267-302):
    GetUserInformation_Wrapper → User_AgeVisibility = Directory_UserCurrent_Visibility.DisplayAge. The block's
    SubscriptionDenied event → Handler_ShareObject_SubscriptionDenied (:304-333) → App_Subscription_ShowUpgradePopUp. */
export default function LegacyShareObject() {
  const [params] = useSearchParams();
  const inputs = readInputs(params);
  const [userAgeVisibility, setUserAgeVisibility] = useState(false);

  useEffect(() => {
    getUserInformation()
      .then((info) => {
        setUserAgeVisibility(info.Directory_UserCurrent.Directory_UserCurrent_Visibility.DisplayAge);
      })
      .catch(raiseToFlowHandler);
  }, []);

  return (
    <>
      <ScreenBlock_ShareObject
        id="$b1"
        objectId={inputs.In_ObjectId}
        userAgeVisibility={userAgeVisibility}
        shareObjectTypeId={inputs.In_ShareObjectTypeId}
        inCustomTitle={inputs.In_CustomTitle}
        commonUIElements={<CommonUI_InsideLayout id="$b2" />}
        onSubscriptionDenied={showUpgradePopUp}
      />
      <DialogAccessRestrictedAction id="SubscriptionDenied" extendedClass="connect-legacy-compatibily-containter" />
    </>
  );
}

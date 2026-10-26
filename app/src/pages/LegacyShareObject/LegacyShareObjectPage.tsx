import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { DialogAccessRestrictedAction, showUpgradePopUp } from '@/platform/feedback/dialogs';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { getUserInformation } from '@/platform/session/userInfo';
import { ProfileList } from './components/ProfileList';
import { ShareObjectView } from './components/ShareObjectView';
import { useProfileList, type ProfileListEvents, type ProfileListParameters } from './hooks/useProfileList';
import { useShareObject } from './hooks/useShareObject';
import { readInputs } from './inputs';

/** The instance id of ScreenBlock_ShareObject. */
const SHARE_OBJECT_BLOCK_ID = '$b1';
/** The instance id of its ProfileList. */
const PROFILE_LIST_ID = `${SHARE_OBJECT_BLOCK_ID.replace('$', '')}-$b8`;

/* The block ProfileList has its own flows. A small component calls its hook and gives the result to its view, at the
   place of the block in ScreenBlock_ShareObject, so the flows live as long as the block. */
function ProfileListBlock({
  id,
  shareObjectId,
  shareObjectTypeId,
  onSubscriptionDenied,
}: { id: string } & ProfileListParameters & ProfileListEvents) {
  const flows = useProfileList({ shareObjectId, shareObjectTypeId }, { onSubscriptionDenied });
  return <ProfileList id={id} {...flows} />;
}

/** @origin UBTConnect.Legacy_Share.LegacyShareObject
    ScreenBlock_ShareObject (ShareObjectView, flows in useShareObject) with the three screen inputs and
    User_AgeVisibility, an empty BottomBar and CommonUI_InsideLayout in CommonUI_Elements; then the screen's own
    Dialog_AccessRestrictedAction "SubscriptionDenied". OnInitialize: GetUserInformation_Wrapper, then
    User_AgeVisibility = Directory_UserCurrent_Visibility.DisplayAge. The SubscriptionDenied event of the block
    (Handler_ShareObject_SubscriptionDenied): App_Subscription_ShowUpgradePopUp. */
export default function LegacyShareObject() {
  const [params] = useSearchParams();
  const inputs = readInputs(params);
  const [userAgeVisibility, setUserAgeVisibility] = useState(false);
  const { state, shareObjectTypeLabel } = useShareObject({
    shareObjectTypeId: inputs.In_ShareObjectTypeId,
    objectId: inputs.In_ObjectId,
    customTitle: inputs.In_CustomTitle,
    userAgeVisibility,
  });

  // OnInitialize. It runs after the OnReady of the block, as in the old port.
  useEffect(() => {
    getUserInformation()
      .then((info) => {
        setUserAgeVisibility(info.Directory_UserCurrent.Directory_UserCurrent_Visibility.DisplayAge);
      })
      .catch(raiseToFlowHandler);
  }, []);

  return (
    <>
      <ShareObjectView
        id={SHARE_OBJECT_BLOCK_ID}
        shareObjectTypeId={inputs.In_ShareObjectTypeId}
        objectId={inputs.In_ObjectId}
        customTitle={inputs.In_CustomTitle}
        shareObjectTypeLabel={shareObjectTypeLabel}
        isLoading={state.isLoading}
        household={state.household}
        communityBusiness={state.communityBusiness}
        profileList={
          <ProfileListBlock
            id={PROFILE_LIST_ID}
            shareObjectTypeId={inputs.In_ShareObjectTypeId}
            shareObjectId={inputs.In_ObjectId}
            onSubscriptionDenied={showUpgradePopUp}
          />
        }
        commonUIElements={<CommonUiLayout id="$b2" />}
      />
      <DialogAccessRestrictedAction id="SubscriptionDenied" extendedClass="connect-legacy-compatibily-containter" />
    </>
  );
}

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
import { readInputs, type LegacyShareObjectInputs } from './inputs';

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

/* ScreenBlock_ShareObject with its flows. The screen mounts it only once OnInitialize has ended, so the block starts
   with the User_AgeVisibility that OnInitialize assigned: its OnReady (GetHouseholdDetails) and the aggregate
   GetShareObjectTypeById run once, with that value. */
function ShareObjectBlock({
  inputs,
  userAgeVisibility,
}: {
  inputs: LegacyShareObjectInputs;
  userAgeVisibility: boolean;
}) {
  const { state, shareObjectTypeLabel } = useShareObject({
    shareObjectTypeId: inputs.In_ShareObjectTypeId,
    objectId: inputs.In_ObjectId,
    customTitle: inputs.In_CustomTitle,
    userAgeVisibility,
  });
  return (
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
  );
}

/** @origin UBTConnect.Legacy_Share.LegacyShareObject
    ScreenBlock_ShareObject (ShareObjectView, flows in useShareObject) with the three screen inputs and
    User_AgeVisibility, an empty BottomBar and CommonUI_InsideLayout in CommonUI_Elements; then the screen's own
    Dialog_AccessRestrictedAction "SubscriptionDenied". OnInitialize (async, LegacyShareObject.mvc.js:271-287):
    GetUserInformation_Wrapper, then User_AgeVisibility = Directory_UserCurrent_Visibility.DisplayAge. The runtime
    creates the view only when OnInitialize has ended, so nothing renders before (as ConnectShare). The SubscriptionDenied
    event of the block (Handler_ShareObject_SubscriptionDenied): App_Subscription_ShowUpgradePopUp. */
export default function LegacyShareObject() {
  const [params] = useSearchParams();
  const inputs = readInputs(params);
  /** User_AgeVisibility; null until OnInitialize has ended. */
  const [userAgeVisibility, setUserAgeVisibility] = useState<boolean | null>(null);

  // OnInitialize: it ends before the view (and so the block) is created. A failed GetUserInformation_Wrapper goes to
  // the flow handler (App_Common shows the toast); the runtime then creates the view all the same, because the error
  // was handled (OutSystems.js ControllerFactory: only an unhandled error result leaves the screen without a view), and
  // User_AgeVisibility keeps its default False.
  useEffect(() => {
    getUserInformation()
      .then((info) => {
        setUserAgeVisibility(info.Directory_UserCurrent.Directory_UserCurrent_Visibility.DisplayAge);
      })
      .catch((error: unknown) => {
        raiseToFlowHandler(error);
        setUserAgeVisibility(false);
      });
  }, []);

  if (userAgeVisibility === null) return null;
  return (
    <>
      <ShareObjectBlock inputs={inputs} userAgeVisibility={userAgeVisibility} />
      <DialogAccessRestrictedAction id="SubscriptionDenied" extendedClass="connect-legacy-compatibily-containter" />
    </>
  );
}

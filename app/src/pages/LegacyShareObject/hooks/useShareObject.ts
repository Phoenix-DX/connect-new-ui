import { fetchHouseholdShareCard } from '@/api/household';
import { fetchCommunityBusinessShareCard } from '@/api/locality';
import { useShareObjectTypeLabelQuery } from '@/api/share';
import { Type_ShareObject } from '@/pages/LegacyShareObject/components/staticEntities';
import { useFlowState } from '@/platform/navigation';
import {
  CARD_LOADED,
  communityBusinessCardLoaded,
  householdCardLoaded,
  INITIAL_SHARE_OBJECT_STATE,
  shareObjectReducer,
  textToLongInteger,
  type ShareObjectState,
} from './shareObjectState';

/** The block inputs of ScreenBlock_ShareObject and User_AgeVisibility, which the screen gives. */
export interface ShareObjectParameters {
  /** ShareObjectTypeId: the Text identifier of Type_ShareObject. */
  shareObjectTypeId: string;
  /** ObjectId. */
  objectId: string;
  /** In_CustomTitle: the title of a shared feed item. */
  customTitle: string;
  /** User_AgeVisibility. */
  userAgeVisibility: boolean;
}

/** What the view of the block renders. */
export interface ShareObjectFlows {
  /** The block variables. */
  state: ShareObjectState;
  /** The Label of the current record of GetShareObjectTypeById ("" while there is none). */
  shareObjectTypeLabel: string;
}

/** The name under which the view cache keeps the block variables. */
const VIEW_NAME = 'Connect2_LegacyShared.Share_UI.ScreenBlock_ShareObject';

/** The flows of the block ScreenBlock_ShareObject.
    - The aggregate GetShareObjectTypeById is a query whose key holds the block variables that OutSystems sends with
      it: it is fetched at start and again when one of them changes (OnParametersChanged refreshes it).
    - OnInitialize: IsLoading = True. The old port keeps no block variable in the view cache, so a back navigation
      starts from OnInitialize again (`restore`) and runs OnReady again.
    - OnReady, with the inputs of the first render: GetHouseholdDetails (HouseholdId =
      IntegerToLongInteger(TextToInteger(ObjectId)), CheckVisibility False) for a household, or
      Get_UI_CommunityBusinessShareCard for Campus&Co and OneSchool Global; then IsLoading = False. An exception
      leaves IsLoading True and goes to the flow handler.
    - Flow scope (item 8): GetHouseholdDetails and Get_UI_CommunityBusinessShareCard are server actions (R2): after
      the unmount the call ends and its exception still goes to the flow handler; the state writes are no-ops
      (`dispatch`). The type-label query is a screen aggregate with no after-effect.
    @origin Connect2_LegacyShared.Share_UI.ScreenBlock_ShareObject */
export function useShareObject(parameters: ShareObjectParameters): ShareObjectFlows {
  const label = useShareObjectTypeLabelQuery({
    ShareObjectTypeId: parameters.shareObjectTypeId,
    ObjectId: parameters.objectId,
    In_CustomTitle: parameters.customTitle,
    User_AgeVisibility: parameters.userAgeVisibility,
  });
  const {
    state,
    dispatch: write,
    parameters: parametersRef,
  } = useFlowState({
    viewName: VIEW_NAME,
    reducer: shareObjectReducer,
    initial: INITIAL_SHARE_OBJECT_STATE,
    restore: () => INITIAL_SHARE_OBJECT_STATE,
    parameters,
    // The flow is defined below; the hook calls the one of the newest render (once per block: useFlowState).
    onReady: () => onReady(),
  });

  /** OnReady. useFlowState sends a rejection to the flow handler. */
  const onReady = async () => {
    const { shareObjectTypeId, objectId, userAgeVisibility } = parametersRef.current;
    if (shareObjectTypeId === Type_ShareObject.Household) {
      // GetHouseholdDetails: a server action (R2).
      const card = await fetchHouseholdShareCard({
        HouseholdId: textToLongInteger(objectId),
        User_AgeVisibility: userAgeVisibility,
        CheckVisibility: false,
      });
      write(householdCardLoaded(card));
    } else if (
      shareObjectTypeId === Type_ShareObject.CampusCo ||
      shareObjectTypeId === Type_ShareObject.OneSchoolGlobal
    ) {
      const card = await fetchCommunityBusinessShareCard(textToLongInteger(objectId)); // R2
      write(communityBusinessCardLoaded(card));
    }
    write(CARD_LOADED);
  };

  return { state, shareObjectTypeLabel: label.data ?? '' };
}

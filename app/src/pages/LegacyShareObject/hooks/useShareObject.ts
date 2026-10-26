import { useRef } from 'react';
import { fetchHouseholdShareCard } from '@/api/household';
import { fetchCommunityBusinessShareCard } from '@/api/locality';
import { useShareObjectTypeLabelQuery } from '@/api/share';
import { Type_ShareObject } from '@/pages/LegacyShareObject/components/staticEntities';
import { useFlowState, type IsAlive } from '@/platform/navigation';
import {
  CARD_LOADED,
  communityBusinessCardLoaded,
  householdCardLoaded,
  INITIAL_SHARE_OBJECT_STATE,
  shareObjectReducer,
  textToLongInteger,
  type ShareObjectPatch,
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
    - Decision W23: after the unmount, the started OnReady skips its state writes only; its call and its exception
      still run.
    @origin Connect2_LegacyShared.Share_UI.ScreenBlock_ShareObject */
export function useShareObject(parameters: ShareObjectParameters): ShareObjectFlows {
  const label = useShareObjectTypeLabelQuery({
    ShareObjectTypeId: parameters.shareObjectTypeId,
    ObjectId: parameters.objectId,
    In_CustomTitle: parameters.customTitle,
    User_AgeVisibility: parameters.userAgeVisibility,
  });
  /* OnReady runs once per block. StrictMode (dev) runs the mount effect again on the same block: the second call only
     replaces the liveness check, so the first flow writes the state while the block is there and calls once. */
  const readyStarted = useRef(false);
  const newestReadyRun = useRef<IsAlive>(() => true);
  const {
    state,
    dispatch,
    parameters: parametersRef,
  } = useFlowState({
    viewName: VIEW_NAME,
    reducer: shareObjectReducer,
    initial: INITIAL_SHARE_OBJECT_STATE,
    restore: () => INITIAL_SHARE_OBJECT_STATE,
    parameters,
    // The flow is defined below; the hook calls the one of the newest render.
    onReady: (isAlive) => {
      newestReadyRun.current = isAlive;
      if (readyStarted.current) return Promise.resolve();
      readyStarted.current = true;
      return onReady();
    },
  });

  /** A state write after an await, skipped after the unmount (W23). */
  const write = (patch: ShareObjectPatch) => {
    if (newestReadyRun.current()) dispatch(patch);
  };

  /** OnReady. useFlowState sends a rejection to the flow handler. */
  const onReady = async () => {
    const { shareObjectTypeId, objectId, userAgeVisibility } = parametersRef.current;
    if (shareObjectTypeId === Type_ShareObject.Household) {
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
      const card = await fetchCommunityBusinessShareCard(textToLongInteger(objectId));
      write(communityBusinessCardLoaded(card));
    }
    write(CARD_LOADED);
  };

  return { state, shareObjectTypeLabel: label.data ?? '' };
}

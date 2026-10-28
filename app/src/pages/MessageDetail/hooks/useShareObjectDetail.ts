import { fetchSharedObjectDetail } from '@/api/share';
import { PLATFORM_MESSAGE_TYPE, showFeedbackMessage } from '@/platform/feedback';
import { useFlowState, type IsAlive } from '@/platform/navigation';
import { auditShareViewEvent } from '@/pages/MessageDetail/actions';
import {
  initialShareObjectDetailState,
  prepareSharedObject,
  SHARE_NO_LONGER_AVAILABLE,
  SHARE_PROFILE_NOT_AVAILABLE,
  shareClick,
  shareObjectDetailReducer,
  type ShareObjectDetailState,
} from './shareObjectDetailState';

/** The flows of Share_UI.ShareObjectDetail_ExtendedShare: OnInitialize (the loading card), the GetShare data action at
    start and on OnParametersChanged, GetShareOnAfterFetch (the audit and the two locals) and OnClickShareDetail.
    @origin Connect2_LegacyShared.Share_UI.ShareObjectDetail_ExtendedShare */

/** The block inputs. */
export interface ShareObjectDetailInputs {
  ShareId: string;
  HasAccessToDeceasedHousehold: boolean;
}

/** The block events. */
export interface ShareObjectDetailEvents {
  /** Event GoToObjectDetail(ObjectId, ShareObjectTypeId). */
  onGoToObjectDetail: (objectId: string, shareObjectTypeId: string) => void;
  /** Event SubscriptionDenied. */
  onSubscriptionDenied: () => void;
}

interface ShareObjectDetailFlows {
  state: ShareObjectDetailState;
  /** OnClickShareDetail. */
  onClickShareDetail: () => void;
}

export function useShareObjectDetail(
  inputs: ShareObjectDetailInputs,
  events: ShareObjectDetailEvents,
): ShareObjectDetailFlows {
  const {
    state,
    dispatch,
    latest,
    parameters,
    events: eventsRef,
    flow,
  } = useFlowState({
    viewName: 'Share_UI.ShareObjectDetail_ExtendedShare',
    reducer: shareObjectDetailReducer,
    initial: initialShareObjectDetailState(),
    parameters: inputs,
    events,
    // GetShare is fetched at start, after OnInitialize; the hook calls the flows of the newest render.
    // OnReady gets the `flow` that this call returns: `scope.alive()` is false after the unmount.
    onReady: (scope) => refreshGetShare(scope.alive),
    onParametersChanged: (isAlive) => refreshGetShare(isAlive),
  });

  /** Refresh GetShare, then GetShareOnAfterFetch. GetShare sends the block variables: the inputs and the two locals as
      they are when the fetch starts (after OnInitialize, or what the last GetShareOnAfterFetch set).
      Flow scope (item 8): GetShare is a data action (R1, `flow.fetch`, ShareObjectDetail.js:456-464): after the unmount
      its answer and its failure are dropped, so GetShareOnAfterFetch (the audit, :597-613) does not run. `isAlive`
      also stops a superseded OnParametersChanged run (open point 5 (a)). */
  const refreshGetShare = async (isAlive: IsAlive) => {
    const { ShareId, HasAccessToDeceasedHousehold } = parameters.current;
    const { shareableObject, shareableUpdateItem } = latest.current;
    const share = await flow.fetch(
      fetchSharedObjectDetail({
        shareId: ShareId,
        hasAccessToDeceasedHousehold: HasAccessToDeceasedHousehold,
        shareableObject,
        shareableUpdateItem,
      }),
    ); // R1
    // GetShareOnAfterFetch: AuditShareViewEvent, GetConnectEntity_ByShareType, then the locals.
    await auditShareViewEvent(ShareId, share.shareObjectTypeId);
    if (!isAlive()) return;
    dispatch({ type: 'shareFetched', share, ...prepareSharedObject(share, latest.current) });
  };

  const onClickShareDetail = () => {
    const click = shareClick(latest.current.share);
    switch (click.kind) {
      case 'none':
        return;
      case 'unavailable':
        showFeedbackMessage(SHARE_NO_LONGER_AVAILABLE, PLATFORM_MESSAGE_TYPE.info);
        return;
      case 'notAvailableProfile':
        showFeedbackMessage(SHARE_PROFILE_NOT_AVAILABLE, PLATFORM_MESSAGE_TYPE.error);
        return;
      case 'subscriptionDenied':
        eventsRef.current.onSubscriptionDenied();
        return;
      case 'open':
        eventsRef.current.onGoToObjectDetail(click.objectId, click.shareObjectTypeId);
    }
  };

  return { state, onClickShareDetail };
}

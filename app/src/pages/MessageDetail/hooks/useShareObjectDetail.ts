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
  } = useFlowState({
    viewName: 'Share_UI.ShareObjectDetail_ExtendedShare',
    reducer: shareObjectDetailReducer,
    initial: initialShareObjectDetailState(),
    parameters: inputs,
    events,
    // GetShare is fetched at start, after OnInitialize; the hook calls the flows of the newest render.
    onReady: (isAlive) => refreshGetShare(isAlive),
    onParametersChanged: (isAlive) => refreshGetShare(isAlive),
  });

  /** Refresh GetShare, then GetShareOnAfterFetch. */
  const refreshGetShare = async (isAlive: IsAlive) => {
    const { ShareId, HasAccessToDeceasedHousehold } = parameters.current;
    const share = await fetchSharedObjectDetail({ ShareId, HasAccessToDeceasedHousehold });
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

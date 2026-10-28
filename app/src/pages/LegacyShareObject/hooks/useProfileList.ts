import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import { shareObject, useAvailableUsersQuery, type AvailableUsersCallInputs } from '@/api/share';
import { PLATFORM_MESSAGE_TYPE, showFeedbackMessage } from '@/platform/feedback';
import { useFlowState } from '@/platform/navigation';
import { appManager_GetCachedUserInfo } from '@/platform/session/cachedUserInfo';
import {
  availableUsersFetched,
  availableUsersInputs,
  INITIAL_PROFILE_LIST_STATE,
  profileListReducer,
  profileListResults,
  profileShared,
  profileShareFailed,
  type ProfileListResults,
  type ShareProfile,
} from './profileListState';

/** The block inputs of ProfileList. */
export interface ProfileListParameters {
  /** ShareObjectId. */
  shareObjectId: string;
  /** ShareObjectTypeId. */
  shareObjectTypeId: string;
}

/** The events of the block. */
export interface ProfileListEvents {
  /** Event SubscriptionDenied: ShareObject answered IsAllowed False. */
  onSubscriptionDenied: () => Promise<void>;
}

/** What the view of the block renders, and its handlers. */
export interface ProfileListFlows {
  /** SearchFilter. */
  searchFilter: string;
  /** The Label of the last handled GetAvailableUsers answer ("" before one). */
  label: string;
  /** What the results area shows. */
  results: ProfileListResults;
  /** ShareProfiles. */
  shareProfiles: ShareProfile[];
  /** NoResultsFoundMessage. */
  noResultsFoundMessage: string;
  /** Input_SearchFilter changed: SearchFilter, then Input_SearchFilterOnChange. */
  onSearchFilterChange: (value: string) => void;
  /** Input_SearchFilterOnKeyup. */
  onSearchFilterKeyUp: (event: KeyboardEvent<HTMLInputElement>) => void;
  /** The share icon of a row: OnClick(TargetProfileId). */
  onShare: (profileId: string) => void;
}

/** One fetch of DataActionGetAvailableUsers: the block variables at the time of the request, and the number of the
    request, so that a Refresh with the same variables fetches again. */
interface AvailableUsersRequest {
  requestId: number;
  inputs: AvailableUsersCallInputs;
}

/** The name under which the view cache keeps the block variables. */
const VIEW_NAME = 'Connect2_LegacyShared.Share_UI.ProfileList';

/** The flows of the block ProfileList.
    - GetAvailableUsers is fetched at start and on each Refresh, with the block variables of that time. The previous
      answer stays while a refresh runs (IsDataFetched stays True). A Refresh resolves when its fetch and
      GetAvailableUsersOnAfterFetch have ended; a Refresh that a newer one replaced never resolves.
    - Input_SearchFilterOnChange: an empty SearchFilter (after Trim) after a search refreshes GetAvailableUsers; then
      HasSearched = False.
    - Input_SearchFilterOnKeyup: the Enter key runs SearchProfile (Refresh, then HasSearched = True) and blurs the input.
    - OnClick → DeferredHandleShareObjectList(TargetProfileId), without a wait: ShareObject with the name of the cached
      user; a success marks the row as shared; a refusal (not allowed) or a failure (with its message) unmarks it, and
      a refusal raises SubscriptionDenied.
    - The old port keeps no block variable in the view cache: a back navigation starts from the defaults (`restore`).
    - Flow scope (item 8): ShareObject is a server action (R2): after the unmount its flow goes on and the feedback
      message shows (R5), but SubscriptionDenied stops (R3: the parent handler Handler_ShareObject_SubscriptionDenied
      starts with ensureControllerAlive, LegacyShareObject.mvc.js:307; `flow.events`). The GetAvailableUsers refresh
      is R1 (`flow.fetch`). State writes after the unmount are no-ops (`dispatch`).
    The ProfileList event Share is never raised (its controller only declares it), so it is not ported.
    @origin Connect2_LegacyShared.Share_UI.ProfileList */
export function useProfileList(parameters: ProfileListParameters, events: ProfileListEvents): ProfileListFlows {
  const {
    state,
    dispatch,
    latest,
    parameters: parametersRef,
    flow,
  } = useFlowState({
    viewName: VIEW_NAME,
    reducer: profileListReducer,
    initial: INITIAL_PROFILE_LIST_STATE,
    restore: () => INITIAL_PROFILE_LIST_STATE,
    parameters,
    events,
  });

  const requestCount = useRef(0);
  const waiters = useRef(new Map<number, () => void>());
  const [request, setRequest] = useState<AvailableUsersRequest>(() => ({
    requestId: 0,
    inputs: availableUsersInputs(latest.current, parameters.shareObjectId, parameters.shareObjectTypeId),
  }));
  const query = useAvailableUsersQuery(request.inputs, request.requestId);

  /** Refresh GetAvailableUsers: resolves once the fetch and OnAfterFetch have ended. */
  const refreshAvailableUsers = () =>
    new Promise<void>((resolve) => {
      const requestId = ++requestCount.current;
      waiters.current.set(requestId, resolve);
      const { shareObjectId, shareObjectTypeId } = parametersRef.current;
      setRequest({ requestId, inputs: availableUsersInputs(latest.current, shareObjectId, shareObjectTypeId) });
    });

  /* GetAvailableUsersOnAfterFetch, after each fetch of the current request that ended well. */
  const settled = useRef(-1);
  useEffect(() => {
    if (query.isPlaceholderData || query.isFetching || settled.current === request.requestId) return;
    if (query.isSuccess) {
      settled.current = request.requestId;
      dispatch(availableUsersFetched(latest.current, query.data));
    } else if (query.isError) {
      settled.current = request.requestId;
    } else {
      return;
    }
    waiters.current.get(request.requestId)?.();
    waiters.current.delete(request.requestId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query.status, query.isFetching, query.isPlaceholderData, query.dataUpdatedAt, request.requestId]);

  /** Input_SearchFilterOnChange. */
  const onChangeSearchFilter = async (value: string) => {
    dispatch({ searchFilter: value });
    if (value.trim() === '' && latest.current.hasSearched) await flow.fetch(refreshAvailableUsers()); // R1
    dispatch({ hasSearched: false });
  };

  /** DeferredHandleShareObjectList(TargetProfileId). */
  const deferredHandleShareObjectList = async (targetProfileId: string) => {
    const userInfo = appManager_GetCachedUserInfo();
    const { shareObjectId, shareObjectTypeId } = parametersRef.current;
    // ShareObject: a server action (R2).
    const result = await shareObject({
      shareObjectTypeId,
      sharedObjectId: shareObjectId,
      sharingProfileName: userInfo.FirstName + ' ' + userInfo.LastName,
      targetCBUserId: targetProfileId,
    });
    if (result.isAllowed) {
      if (result.isSuccess) {
        dispatch(profileShared(latest.current, targetProfileId));
        return;
      }
      showFeedbackMessage(result.message, PLATFORM_MESSAGE_TYPE.error);
    }
    dispatch(profileShareFailed(latest.current, targetProfileId));
    if (!result.isAllowed) await flow.events.onSubscriptionDenied(); // R3
  };

  return {
    searchFilter: state.searchFilter,
    label: state.fetched?.label ?? '',
    results: profileListResults(state.fetched, query.isError),
    shareProfiles: state.shareProfiles,
    noResultsFoundMessage: state.noResultsFoundMessage,
    onSearchFilterChange: (value) => {
      flow.run(() => onChangeSearchFilter(value));
    },
    // JavaScript1: `event.keyCode == 13` (Enter) → SearchProfile (Refresh GetAvailableUsers, then HasSearched =
    // True), and the input loses the focus.
    onSearchFilterKeyUp: (event) => {
      if (event.key !== 'Enter') return;
      flow.run(async () => {
        await flow.fetch(refreshAvailableUsers()); // R1
        dispatch({ hasSearched: true });
      });
      event.currentTarget.blur();
    },
    onShare: (profileId) => {
      flow.run(() => deferredHandleShareObjectList(profileId));
    },
  };
}

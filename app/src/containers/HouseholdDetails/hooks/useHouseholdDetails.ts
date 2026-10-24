import { fetchHousehold, fetchHouseholdCoordinates, type Household, type HouseholdCallInputs } from '@/api/household';
import { cardContent, isDeceasedOrAncestry } from '@/components/household';
import { PLATFORM_MESSAGE_TYPE, showFeedbackMessage } from '@/platform/feedback';
import { showUpgradePopUp } from '@/platform/feedback/dialogs';
import { isViewHasChangedException, raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { useFlagOn } from '@/platform/flags/flags';
import { useFlowState, useOsNavigate, type IsAlive } from '@/platform/navigation';
import { APP_ID } from '@/platform/navigation/paths';
import { getUserInformation } from '@/platform/session/userInfo';
import type { Tag } from '@/lib/ubtConnectLibrary/structures';
import { showComingSoonMessage } from '@/lib/ubtConnectUtils/actions';
import { getSkeleton_UI_HouseholdDetails, hasAccessToRegion } from '@/lib/ubtConnect/actions';
import type { HouseholdPreviewStructure, UI_HouseholdMember } from '@/lib/ubtConnect/structures';
import { handlePreviewData, householdDetailsReducer, INITIAL_HOUSEHOLD_DETAILS_STATE } from './householdDetailsState';

/** The flows of the household details (the block HouseholdDetails_Block): the data actions, the events of the view
    and the navigation.
    @origin UBTConnect.Directory_Household.HouseholdDetails_Block */

/** The input parameters of the household details (the block inputs). A change of any of them runs
    OnParametersChanged. */
export interface HouseholdDetailsParameters {
  /** HouseholdId (Long Integer as text). */
  householdId: string;
  /** isEnabled: false in the Profile preview (every link and action disabled). */
  isEnabled: boolean;
  /** Preview: the account form that the Profile preview shows (the default record otherwise). */
  preview: HouseholdPreviewStructure;
  /** In_ShowKebabMenu: the kebab menu (edit, share) and the share sheet. */
  showKebabMenu: boolean;
  /** In_CheckVisibility: only sent to the data actions (the server decides isVisible). */
  checkVisibility: boolean;
  /** In_IsSkeletonOnly: hides the members until it turns false (OnParametersChanged then refreshes). */
  isSkeletonOnly: boolean;
  /** In_HideActions: hides the call-to-action section on the About tag. */
  hideActions: boolean;
}

/** The flags that the household details read: Photobook access (`mobilePhotobook`, GetHasPhotobookAccess) and the
    extended share (`C2ExtendedShare`, GetHasExtendedShare). */
export interface HouseholdDetailsFlags {
  hasPhotobookAccess: boolean;
  hasExtendedShare: boolean;
}

/** Reads the two flags of the household details. */
export function useHouseholdDetailsFlags(): HouseholdDetailsFlags {
  return { hasPhotobookAccess: useFlagOn('mobilePhotobook'), hasExtendedShare: useFlagOn('C2ExtendedShare') };
}

export interface HouseholdDetailsEvents {
  /** Event HouseholdDataFetched(LocalityName, CountryName, DeceasedOrAncestry_View), after every GetHousehold. */
  onHouseholdDataFetched?: (localityName: string, countryName: string, deceasedOrAncestryView: boolean) => void;
}

/** The state and the event handlers of the household details.
    OnInitialize = OnReady: GetUserInformation; unless the view cache restored the view with the same age visibility,
    the skeleton household, IsSkeletonOnly = the input, and the refresh of both data actions; then the two tags.
    OnParametersChanged: with a preview, its age visibility and GetHousehold; then, when In_IsSkeletonOnly turned
    false, the refresh of both data actions. The state and the triggers of both flows come from useFlowState: the
    flows read `latest`, `parameters` and `eventsRef`, as OutSystems assigns variables at once. */
export function useHouseholdDetails(
  inputs: HouseholdDetailsParameters,
  flags: HouseholdDetailsFlags,
  events: HouseholdDetailsEvents = {},
) {
  const { householdId, isEnabled } = inputs;
  const {
    state,
    dispatch,
    latest,
    parameters,
    events: eventsRef,
  } = useFlowState({
    viewName: `Directory_Household.HouseholdDetails_Block#${householdId}`,
    reducer: householdDetailsReducer,
    initial: INITIAL_HOUSEHOLD_DETAILS_STATE,
    parameters: inputs,
    events,
    // The flows are defined below; the hook calls the ones of the newest render.
    onReady: (isAlive, restored) => onInitialize(isAlive, restored),
    onParametersChanged: (isAlive) => onParametersChanged(isAlive),
  });
  const navigate = useOsNavigate();

  const callInputs = (): HouseholdCallInputs => {
    const p = parameters.current;
    return {
      HouseholdId: p.householdId,
      isEnabled: p.isEnabled,
      In_ShowKebabMenu: p.showKebabMenu,
      In_CheckVisibility: p.checkVisibility,
      In_IsSkeletonOnly: p.isSkeletonOnly,
      In_HideActions: p.hideActions,
      UserAge_Visibility: latest.current.userAgeVisibility,
    };
  };

  /** GetHousehold refresh, then OnAfterFetch_GetHouseholdDetail: the preview data, the Photos tag, the event. */
  const refreshHousehold = async (isAlive: IsAlive) => {
    // The data source status: Fetching when the call starts, Fetched on success, Error on a failure that is not a
    // ViewHasChangedException.
    dispatch({ type: 'householdFetchStarted' });
    let fetched: Household;
    try {
      fetched = await fetchHousehold(callInputs());
    } catch (error) {
      if (isAlive() && !isViewHasChangedException(error)) dispatch({ type: 'householdFetchFailed' });
      throw error;
    }
    if (!isAlive()) return;
    const household = handlePreviewData(fetched, parameters.current.preview);
    const content = cardContent(household.Household);
    dispatch({ type: 'householdFetched', household });
    eventsRef.current.onHouseholdDataFetched?.(
      content.LocalityName ?? '',
      content.CountryName ?? '',
      isDeceasedOrAncestry(content),
    );
  };
  /** GetHousehold_Coordinates refresh. */
  const refreshCoordinates = async (isAlive: IsAlive) => {
    const coordinates = await fetchHouseholdCoordinates(callInputs());
    if (isAlive()) dispatch({ type: 'coordinatesFetched', coordinates });
  };
  /** The "Refreshes" node: both refreshes, not awaited. */
  const refreshes = (isAlive: IsAlive) => {
    refreshHousehold(isAlive).catch(raiseToFlowHandler);
    refreshCoordinates(isAlive).catch(raiseToFlowHandler);
  };

  /** OnInitialize (OnReady). */
  const onInitialize = async (isAlive: IsAlive, restored: boolean) => {
    const userInformation = await getUserInformation(); // GetUserInformation_Wrapper, after the app start's step
    if (!isAlive()) return;
    // The shell wrapper returns the cached record: its Directory_UserCurrent is the action's UserInformation output.
    const displayAge = userInformation.Directory_UserCurrent.Directory_UserCurrent_Visibility.DisplayAge;
    // CheckRestored (FromHistory is commented out): a restored view with the same age visibility keeps its data.
    if (!(restored && displayAge === latest.current.userAgeVisibility)) {
      dispatch({
        type: 'initialized',
        userAgeVisibility: displayAge,
        skeleton: getSkeleton_UI_HouseholdDetails(),
        isSkeletonOnly: parameters.current.isSkeletonOnly,
      });
      refreshes(isAlive);
    }
    if (latest.current.tags.length === 0) dispatch({ type: 'tagsInitialized' });
  };

  /** OnParametersChanged. */
  const onParametersChanged = async (isAlive: IsAlive) => {
    const p = parameters.current;
    if (p.preview.UsePreview === true) {
      dispatch({
        type: 'previewAgeVisibilitySet',
        userAgeVisibility: p.preview.UI_AccountForm?.AccountForm_PersonalInformation?.ShowLifeCycleDates ?? false,
      });
      await refreshHousehold(isAlive);
    }
    if (latest.current.isSkeletonOnly && !p.isSkeletonOnly) {
      dispatch({ type: 'skeletonOnlyEnded' });
      refreshes(isAlive);
    }
  };

  const content = cardContent(state.household.Household);
  const deceasedOrAncestry = isDeceasedOrAncestry(content);

  /** OnChangeTag and Action_SetHideActionsPhotobook. */
  const onTagsChanged = (tags: Tag[]) => {
    dispatch({ type: 'tagsChanged', tags, hasPhotobookAccess: flags.hasPhotobookAccess });
  };
  /** Handler_OnMenuEdit. */
  const onEdit = () => {
    navigate(`/${APP_ID}/Profile`, {});
  };
  /** Handler_OnShare: the share sheet with the extended share, else the "coming soon" message. */
  const onShare = () => {
    if (flags.hasExtendedShare) dispatch({ type: 'shareSheetSet', isOpen: true });
    else showComingSoonMessage();
  };
  /** Handler_CloseShareSheet. */
  const onShareSheetClosed = () => {
    dispatch({ type: 'shareSheetSet', isOpen: false });
  };
  /** OnClick_NavigateToLocality: nothing for a deceased or ancestry household. */
  const onLocalityClick = () => {
    if (deceasedOrAncestry) return;
    navigate(`/${APP_ID}/Locality_Details`, {
      PreloadedLocalityLabel: content.LocalityName ?? '',
      LocalityId: content.LocalityId ?? '0',
    });
  };
  /** OnClick_NavigateToSupperMeeting: nothing for a deceased or ancestry household. */
  const onSupperMeetingClick = () => {
    if (deceasedOrAncestry) return;
    navigate(`/${APP_ID}/SupperMeeting_Details`, { In_SubdivsionId: content.SupperMeetingId ?? '0' });
  };
  /** Handler_OnClickPhotobook: Photobook when the household has a locality, else a message. */
  const onPhotobookClick = () => {
    const localityId = content.LocalityId ?? '0';
    if (localityId !== '0') {
      navigate(`/${APP_ID}/Photobook`, { In_HouseholdId: householdId, In_LocalityId: localityId });
    } else {
      showFeedbackMessage(
        'Photobook is currently unavailable for this household. Please try again later.',
        PLATFORM_MESSAGE_TYPE.info,
      );
    }
  };
  /** Handler_OnClickMember: Household_Relations when enabled. */
  const onMemberClick = (memberId: string) => {
    if (isEnabled) navigate(`/${APP_ID}/Household_Relations`, { HouseholdId: householdId, MemberId: memberId });
  };
  /** Handler_OnClickNavigateTomarriedChildren_Household: HouseholdDetails of the child's household when enabled. */
  const onNonMemberHouseholdClick = (nonMemberHouseholdId: string) => {
    if (isEnabled) navigate(`/${APP_ID}/HouseholdDetails`, { HouseholdId: nonMemberHouseholdId });
  };
  /** Handler_NonMemberOnClick of the member list: HasAccessToRegion, then the child's household or the upgrade
      popup. */
  const onNonMemberClick = (member: UI_HouseholdMember) => {
    const open = async (localityName: string, countryName: string, nonMemberHouseholdId: string) => {
      if (await hasAccessToRegion(localityName, countryName)) onNonMemberHouseholdClick(nonMemberHouseholdId);
      else await showUpgradePopUp();
    };
    void open(member.LocalityName ?? '', member.CountryName ?? '', member.HouseholdId ?? '0');
  };
  /** Directory_EntityDetailsActions OnChange_Bookmark. */
  const onBookmarkChange = (isBookmarked: boolean) => {
    dispatch({ type: 'bookmarkChanged', isBookmarked });
  };
  /** Handler_TimelinePhotoSelected. */
  const onTimelineDateSelected = (date: string) => {
    dispatch({ type: 'timelinePhotoSelected', date });
  };

  return {
    state,
    content,
    onTagsChanged,
    onEdit,
    onShare,
    onShareSheetClosed,
    onLocalityClick,
    onSupperMeetingClick,
    onPhotobookClick,
    onMemberClick,
    onNonMemberClick,
    onBookmarkChange,
    onTimelineDateSelected,
  };
}

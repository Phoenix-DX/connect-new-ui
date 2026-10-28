import { useState } from 'react';
import { fetchLocalityDetails, type LocalityDetails } from '@/api/locality';
import { stopPropagationHelper_Check } from '@/pages/Locality_Details/components/actions';
import type { LocalityDetailsInputs } from '@/pages/Locality_Details/inputs';
import { useFlowState, useOsNavigate } from '@/platform/navigation';
import { APP_ID } from '@/platform/navigation/paths';
import { getUserInformation } from '@/platform/session/userInfo';
import type { Tag } from '@/lib/ubtConnectLibrary/structures';
import {
  initialLocalityDetailsState,
  initializeScreen,
  localityDetailsCallInputs,
  localityDetailsReducer,
  localityLabelOf,
  type LocalityDetailsState,
  type LoggedUser,
} from './localityDetailsState';

/** The feature flags that the flows read. The page reads them (rule 4) and gives them here. */
export interface LocalityDetailsFlags {
  /** mobileDirectoryLocalityContacts (the permission check of GetSample_FilterTags, Q2, off by default): the Locality
      Contacts tag. */
  hasLocalityContacts: boolean;
  /** C2EnableC1DirectoryView (GetHasC1DirectoryView): the locality label opens CountryDetails, else BrowseDirectory. */
  hasC1DirectoryView: boolean;
}

/** What the page renders and the handlers of the events of its widgets and blocks. */
export interface LocalityDetailsFlows {
  /** The screen variables and Get_LocalityDetails (rendered). */
  state: LocalityDetailsState;
  /** OnHeaderScrolled of the layout: HeaderIsScrolled. */
  onHeaderScrolled: (isHeaderScrolled: boolean) => void;
  /** OnClick_Search: the search input and the search icon of the sub-header. */
  onClickSearch: () => void;
  /** OnClick_Maps: the explore icons (C2EnableMaps). */
  onClickMaps: () => void;
  /** Handler_NavigateTo_BrowsebyLocation: the locality label. */
  onNavigateToBrowseByLocation: () => void;
  /** Handler_NavigateTo_HouseholdDetails(HouseholdId): Event_NavigateToHouseholdDetails of Locality_Households. */
  onNavigateToHouseholdDetails: (householdId: string) => void;
  /** Handler_NavigateTo_OneschoolGlobalDetails(Event_OneSchoolGlobalId): Event_OnClick of Locality_OneSchoolGlobal. */
  onNavigateToOneSchoolGlobalDetails: (oneSchoolGlobalId: string) => void;
  /** Handler_HorizontalTagListChanged(UpdatedTagList): the Changed event of the tag list. */
  onTagsChanged: (updated: Tag[]) => void;
}

/** The variables and the flows of the locality screen.
    - OnReady: not initialized → Action_InitializeScreen (GetUserInformation_Wrapper, the user's locality and
      Action_SetLocalityLabel when the route has no LocalityId, the tags), then the refresh of Get_LocalityDetails.
      Initialized (a view that the view cache restored) → nothing when the data is fetched without error, else the
      refresh.
    - OnAfterFetch_Get_LocalityDetails: SetLocalityLabel. A failed fetch goes to the flow handler.
    - The handlers navigate (Search, Map, CountryDetails or BrowseDirectory, HouseholdDetails, OneSchoolGlobalDetails)
      or change the variables (HeaderIsScrolled, the tags).
    Flow scope (item 8): GetUserInformation_Wrapper is a module action (R2): it runs to its end after an unmount.
    Action_SetLocalityLabel is an own action of the screen (R3, Locality_Details.js:1426-1431): with no LocalityId the
    flow stops there. With a LocalityId, the request of Get_LocalityDetails still starts; it is a data action (R1,
    :1158), so its answer and its failure are dropped. Handler_OnClick_Bookmark has no node: Locality_OneSchoolGlobal
    does not wire Event_OnClick_Bookmark.
    @origin UBTConnect.Directory_Locality.Locality_Details */
export function useLocalityDetails(inputs: LocalityDetailsInputs, flags: LocalityDetailsFlags): LocalityDetailsFlows {
  const navigate = useOsNavigate();
  // OnInitialize: the record of a new visit (a restored view starts from its saved state instead).
  const [initial] = useState(() => initialLocalityDetailsState(inputs, flags.hasLocalityContacts));
  const { state, dispatch, latest, flow } = useFlowState({
    viewName: 'Directory_Locality.Locality_Details',
    reducer: localityDetailsReducer,
    initial,
    parameters: inputs,
    // The flows are defined below; the hook calls the ones of the newest render.
    onReady: () => onReady(),
  });

  /** Action_SetLocalityLabel: an own action of the screen (R3). */
  const setLocalityLabel = flow.own(localityLabelOf);

  /** Refresh Get_LocalityDetails with `variables`, then OnAfterFetch_Get_LocalityDetails. */
  const refreshLocalityDetails = async (variables: LocalityDetailsState) => {
    let localityDetails: LocalityDetails;
    try {
      localityDetails = await flow.fetch(fetchLocalityDetails(localityDetailsCallInputs(variables))); // R1
    } catch (e) {
      dispatch({ type: 'detailsFailed' });
      throw e;
    }
    dispatch({ type: 'detailsFetched', localityDetails });
  };

  /** ScreenEvent_OnReady. */
  async function onReady() {
    let variables = latest.current;
    if (variables.isScreenInitialized) {
      if (variables.get_LocalityDetails.isDataFetched && !variables.get_LocalityDetails.hasFetchError) return;
    } else {
      // Action_InitializeScreen: LoggedUserInfo = GetUserInformation_Wrapper (module action, R2).
      const info = await getUserInformation();
      const geography = info.Directory_UserCurrent.Directory_UserCurrent_Geography;
      const loggedUser: LoggedUser = {
        householdId: info.Directory_UserCurrent.Directory_UserCurrent_Member.HouseholderId,
        localityId: geography.Locality_Id,
      };
      // Action_SetLocalityLabel only for the user's own locality (no LocalityId on the route). The label is read
      // only in that case (initializeScreen).
      const userLocalityLabel =
        latest.current.localityId === '0' ? setLocalityLabel(geography.Locality_Name, geography.Country_Name) : '';
      const { hasLocalityContacts } = flags;
      // The flow keeps its own copy of the variables: Get_LocalityDetails sends them. After an unmount `dispatch` is a
      // no-op, and the request still starts with the initialized variables (R1: only its answer is dropped).
      variables = initializeScreen(latest.current, loggedUser, userLocalityLabel, hasLocalityContacts);
      dispatch({ type: 'screenInitialized', loggedUser, userLocalityLabel, hasLocalityContacts });
    }
    await refreshLocalityDetails(variables);
  }

  const onHeaderScrolled = (isHeaderScrolled: boolean) => {
    dispatch({ type: 'headerScrolled', isHeaderScrolled });
  };

  const onClickSearch = () => {
    navigate(`/${APP_ID}/Search`);
  };

  const onClickMaps = () => {
    const d = latest.current.get_LocalityDetails.localityDetails;
    navigate(`/${APP_ID}/Map`, { In_InitialLongitude: d.mainHallLongitude, In_InitialLatitude: d.maiinHallLatitude });
  };

  /** CountryDetails when GetHasC1DirectoryView, else BrowseDirectory, with the CountryCode of the locality. */
  const onNavigateToBrowseByLocation = () => {
    const countryCode = latest.current.get_LocalityDetails.localityDetails.countryCode;
    navigate(`/${APP_ID}/${flags.hasC1DirectoryView ? 'CountryDetails' : 'BrowseDirectory'}`, {
      CountryCode: countryCode,
    });
  };

  /** Nothing while HouseholdId is NullIdentifier, else HouseholdDetails. */
  const onNavigateToHouseholdDetails = (householdId: string) => {
    if (householdId === '0') return;
    navigate(`/${APP_ID}/HouseholdDetails`, { HouseholdId: householdId });
  };

  /** Nothing when the click started inside a StopPropagationHelper (StopPropagationHelper_Check), else
      OneSchoolGlobalDetails. */
  const onNavigateToOneSchoolGlobalDetails = (oneSchoolGlobalId: string) => {
    if (stopPropagationHelper_Check()) return;
    navigate(`/${APP_ID}/OneSchoolGlobalDetails`, { In_OneSchoolGlobalId: oneSchoolGlobalId });
  };

  /** The tags and the selected tag, then the ScrollTop JavaScript: after the render, the scrollTop of
      `.active-screen` is 0. */
  const onTagsChanged = (updated: Tag[]) => {
    dispatch({ type: 'tagsChanged', tags: updated });
    requestAnimationFrame(() => {
      const contentEl = document.querySelector('.active-screen');
      if (contentEl) contentEl.scrollTop = 0;
    });
  };

  return {
    state,
    onHeaderScrolled,
    onClickSearch,
    onClickMaps,
    onNavigateToBrowseByLocation,
    onNavigateToHouseholdDetails,
    onNavigateToOneSchoolGlobalDetails,
    onTagsChanged,
  };
}

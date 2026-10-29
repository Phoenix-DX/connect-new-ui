import type { LocalityDetails, LocalityDetailsCallInputs } from '@/api/locality';
import { getSample_FilterTags } from '@/pages/Locality_Details/components/actions';
import { LocalityMenu } from '@/pages/Locality_Details/components/staticEntities';
import type { LocalityDetailsInputs } from '@/pages/Locality_Details/inputs';
import type { Tag } from '@/lib/ubtConnectLibrary/structures';

/** The screen variables of Locality_Details, its reducer and the pure parts of its flows. The flows are in
    useLocalityDetails. Long Integers stay text.
    @origin UBTConnect.Directory_Locality.Locality_Details */

/** Get_LocalityDetails (fetch on demand) as the view reads it. */
export interface LocalityDetailsData {
  isDataFetched: boolean;
  hasFetchError: boolean;
  localityDetails: LocalityDetails;
}

/** The household and the locality of the signed-in user (LoggedUserInfo). */
export interface LoggedUser {
  householdId: string;
  localityId: string;
}

/** The screen variables and Get_LocalityDetails. */
export interface LocalityDetailsState {
  tagsList: Tag[];
  headerIsScrolled: boolean;
  tagsList_SelectedTag: string;
  logged_User: LoggedUser;
  isUserLocality: boolean;
  localityLabel: string;
  isScreenInitialized: boolean;
  localityId: string;
  preloadedLocalityLabel: string;
  get_LocalityDetails: LocalityDetailsData;
}

/** UI_LocalityDetails_ForHousehold with its default values: Get_LocalityDetails before the first answer. */
export const NO_LOCALITY_DETAILS: LocalityDetails = {
  bretherenCount: 0,
  householdCount: 0,
  maiinHallLatitude: '0',
  mainHallLongitude: '0',
  localityName: '',
  countryName: '',
  countryCode: '',
  timezoneName: '',
  timezoneOffset: '0',
};

/** Action_SetLocalityLabel: LocalityName + ", " + CountryName. */
export const localityLabelOf = (localityName: string, countryName: string): string => `${localityName}, ${countryName}`;

/** The default values, the inputs, then ScreenEvent_OnInitialize: LocalityLabel = PreloadedLocalityLabel when it is
    empty; TagsList = GetSample_FilterTags(IsUserLocality) when it is empty (IsUserLocality defaults to True). */
export function initialLocalityDetailsState(inputs: LocalityDetailsInputs): LocalityDetailsState {
  const isUserLocality = true;
  return {
    tagsList: getSample_FilterTags(isUserLocality),
    headerIsScrolled: false,
    tagsList_SelectedTag: '',
    logged_User: { householdId: '0', localityId: '0' },
    isUserLocality,
    localityLabel: inputs.PreloadedLocalityLabel,
    isScreenInitialized: false,
    localityId: inputs.LocalityId,
    preloadedLocalityLabel: inputs.PreloadedLocalityLabel,
    get_LocalityDetails: { isDataFetched: false, hasFetchError: false, localityDetails: NO_LOCALITY_DETAILS },
  };
}

/** Action_InitializeScreen after GetUserInformation_Wrapper: LoggedUser; without a LocalityId, the locality of the user
    and its label; IsUserLocality; TagsList cleared and filled again (GetSample_FilterTags(IsUserLocality));
    TagsList_SelectedTag = Households; IsScreenInitialized. */
export function initializeScreen(
  state: LocalityDetailsState,
  loggedUser: LoggedUser,
  userLocalityLabel: string,
): LocalityDetailsState {
  const ownLocality = state.localityId === '0';
  const localityId = ownLocality ? loggedUser.localityId : state.localityId;
  const isUserLocality = localityId === loggedUser.localityId;
  return {
    ...state,
    logged_User: loggedUser,
    localityId,
    localityLabel: ownLocality ? userLocalityLabel : state.localityLabel,
    isUserLocality,
    tagsList: getSample_FilterTags(isUserLocality),
    tagsList_SelectedTag: LocalityMenu.Households,
    isScreenInitialized: true,
  };
}

/** The screen variables that DataActionGet_LocalityDetails sends. */
export const localityDetailsCallInputs = (state: LocalityDetailsState): LocalityDetailsCallInputs => ({
  TagsList: state.tagsList,
  HeaderIsScrolled: state.headerIsScrolled,
  TagsList_SelectedTag: state.tagsList_SelectedTag,
  IsUserLocality: state.isUserLocality,
  LocalityLabel: state.localityLabel,
  IsScreenInitialized: state.isScreenInitialized,
  LocalityId: state.localityId,
  PreloadedLocalityLabel: state.preloadedLocalityLabel,
});

type LocalityDetailsAction =
  /** Action_InitializeScreen (see initializeScreen). */
  | { type: 'screenInitialized'; loggedUser: LoggedUser; userLocalityLabel: string }
  /** Get_LocalityDetails answered; OnAfterFetch_Get_LocalityDetails: SetLocalityLabel. */
  | { type: 'detailsFetched'; localityDetails: LocalityDetails }
  /** Get_LocalityDetails failed. */
  | { type: 'detailsFailed' }
  /** Layout OnHeaderScrolled. */
  | { type: 'headerScrolled'; isHeaderScrolled: boolean }
  /** Handler_HorizontalTagListChanged: TagsList = UpdatedTagList, TagsList_SelectedTag = the selected tag. */
  | { type: 'tagsChanged'; tags: Tag[] };

export function localityDetailsReducer(
  state: LocalityDetailsState,
  action: LocalityDetailsAction,
): LocalityDetailsState {
  switch (action.type) {
    case 'screenInitialized':
      return initializeScreen(state, action.loggedUser, action.userLocalityLabel);
    case 'detailsFetched': {
      const { localityDetails } = action;
      return {
        ...state,
        get_LocalityDetails: { isDataFetched: true, hasFetchError: false, localityDetails },
        localityLabel: localityLabelOf(localityDetails.localityName, localityDetails.countryName),
      };
    }
    case 'detailsFailed':
      return { ...state, get_LocalityDetails: { ...state.get_LocalityDetails, hasFetchError: true } };
    case 'headerScrolled':
      return { ...state, headerIsScrolled: action.isHeaderScrolled };
    case 'tagsChanged': {
      const selected = action.tags.findIndex((t) => t.IsSelected);
      return { ...state, tagsList: action.tags, tagsList_SelectedTag: action.tags[selected]?.Identifier ?? '' };
    }
  }
}

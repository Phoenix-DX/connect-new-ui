import type { Household, HouseholdCoordinates, HouseholdDetails } from '@/api/household';
import { cardContent, HOUSEHOLD_TAG_ABOUT, HOUSEHOLD_TAG_PHOTOS, isShownHousehold } from '@/components/household';
import { DataFetchStatus } from '@/components/ui/os/OSList';
import type { Tag } from '@/shared/UBTConnectLibrary/lib/structures';
import { HouseholdDetailTags } from '@/shared/UBTConnect/lib/staticEntities';
import type {
  HouseholdPreviewStructure,
  UI_Household_Card_Content,
  UI_HouseholdTimelineImages,
} from '@/shared/UBTConnect/lib/structures';

/** The state of the household details and its reducer, with the client actions of the block as pure functions.
    @origin UBTConnect.Directory_Household.HouseholdDetails_Block */

/** The block variables, kept as one record in the view cache: a view that the cache restores keeps them. The
    OutSystems name of each variable is in brackets. */
export interface HouseholdDetailsState {
  /** [TagsList] The About and Photos tags. */
  tags: Tag[];
  /** [TagsList_SelectedTag] The identifier of the selected tag. */
  selectedTag: string;
  /** [TEMP_TimelineImages] The timeline images of the Photos tag. The block never fills them. */
  timelineImages: UI_HouseholdTimelineImages[];
  /** [LocalIsBookmarked] The entity actions changed the bookmark. */
  isBookmarked: boolean;
  /** [UserAge_Visibility] The age visibility of the user, sent with both data actions. */
  userAgeVisibility: boolean;
  /** [IsSkeletonOnly] Hides the members. */
  isSkeletonOnly: boolean;
  /** [HideActions_PhotoBook] Hides the call-to-action section. */
  hidePhotobookActions: boolean;
  /** [IsShareOpen] The share sheet is open. */
  isShareOpen: boolean;
  /** [GetHousehold] The data action with its data fetch status (Fetching by default, Fetched once it answered). */
  household: Household & { dataFetchStatus: DataFetchStatus };
  /** [GetHousehold_Coordinates] The map coordinates of the address. */
  coordinates: HouseholdCoordinates;
}

export const INITIAL_HOUSEHOLD_DETAILS_STATE: HouseholdDetailsState = {
  tags: [],
  selectedTag: '',
  timelineImages: [],
  isBookmarked: false,
  userAgeVisibility: false,
  isSkeletonOnly: false,
  hidePhotobookActions: false,
  isShareOpen: false,
  household: {
    dataFetchStatus: DataFetchStatus.Fetching,
    Household: {},
    Out_HouseholdMembers: [],
    Out_NonHouseholdMembers: [],
    isVisible: false,
  },
  coordinates: {},
};

/** The changes of the state, in the order in which the flows make them. */
export type HouseholdDetailsAction =
  /** OnReady without a restored view: the skeleton household, the age visibility and the skeleton-only input. */
  | { type: 'initialized'; userAgeVisibility: boolean; skeleton: HouseholdDetails; isSkeletonOnly: boolean }
  /** OnReady with no tags: About (selected) and Photos. */
  | { type: 'tagsInitialized' }
  /** OnParametersChanged with a preview: the age visibility of the account form. */
  | { type: 'previewAgeVisibilitySet'; userAgeVisibility: boolean }
  /** OnParametersChanged when the skeleton-only input turned false. */
  | { type: 'skeletonOnlyEnded' }
  | { type: 'householdFetchStarted' }
  | { type: 'householdFetchFailed' }
  /** OnAfterFetch: the household (with the preview data) and the Photos tag enabled or not. */
  | { type: 'householdFetched'; household: Household }
  | { type: 'coordinatesFetched'; coordinates: HouseholdCoordinates }
  /** OnChangeTag and Action_SetHideActionsPhotobook. */
  | { type: 'tagsChanged'; tags: Tag[]; hasPhotobookAccess: boolean }
  | { type: 'bookmarkChanged'; isBookmarked: boolean }
  | { type: 'shareSheetSet'; isOpen: boolean }
  /** Handler_TimelinePhotoSelected. */
  | { type: 'timelinePhotoSelected'; date: string };

export function householdDetailsReducer(
  state: HouseholdDetailsState,
  action: HouseholdDetailsAction,
): HouseholdDetailsState {
  switch (action.type) {
    case 'initialized':
      return {
        ...state,
        userAgeVisibility: action.userAgeVisibility,
        household: { ...state.household, Household: action.skeleton },
        isSkeletonOnly: action.isSkeletonOnly,
      };
    case 'tagsInitialized':
      return { ...state, tags: initialTagsList(), selectedTag: HOUSEHOLD_TAG_ABOUT };
    case 'previewAgeVisibilitySet':
      return { ...state, userAgeVisibility: action.userAgeVisibility };
    case 'skeletonOnlyEnded':
      return { ...state, isSkeletonOnly: false };
    case 'householdFetchStarted':
      return { ...state, household: { ...state.household, dataFetchStatus: DataFetchStatus.Fetching } };
    case 'householdFetchFailed':
      return { ...state, household: { ...state.household, dataFetchStatus: DataFetchStatus.Error } };
    case 'householdFetched':
      return {
        ...state,
        household: { ...action.household, dataFetchStatus: DataFetchStatus.Fetched },
        tags: setPhotosTagEnabled(state.tags, cardContent(action.household.Household)),
      };
    case 'coordinatesFetched':
      return { ...state, coordinates: action.coordinates };
    case 'tagsChanged': {
      const selected = selectedTagOf(action.tags);
      return {
        ...state,
        tags: action.tags,
        selectedTag: selected,
        hidePhotobookActions: selected === HOUSEHOLD_TAG_PHOTOS && !action.hasPhotobookAccess,
      };
    }
    case 'bookmarkChanged':
      return { ...state, isBookmarked: action.isBookmarked };
    case 'shareSheetSet':
      return { ...state, isShareOpen: action.isOpen };
    case 'timelinePhotoSelected':
      return { ...state, timelineImages: selectTimelinePhoto(state.timelineImages, action.date) };
  }
}

/** The tags of OnReady: About (selected) then Photos, each with its identifier as text. */
export function initialTagsList(): Tag[] {
  return [
    { Text: HOUSEHOLD_TAG_ABOUT, Identifier: HOUSEHOLD_TAG_ABOUT, IsSelected: true },
    { Text: HOUSEHOLD_TAG_PHOTOS, Identifier: HOUSEHOLD_TAG_PHOTOS, IsSelected: false },
  ];
}

/** OnChangeTag: the identifier of the first selected tag. The tag list is a mandatory single selection, so one tag
    is always selected. With none, OutSystems fails on GetItem(-1): '' is returned instead. */
export function selectedTagOf(tags: readonly Tag[]): string {
  return tags.find((t) => t.IsSelected === true)?.Identifier ?? '';
}

/** OnAfterFetch: the Photos tag (HouseholdDetailTags.Photos) is enabled only for a household that is not deceased,
    not an ancestry and not hidden. */
export function setPhotosTagEnabled(tags: readonly Tag[], content: UI_Household_Card_Content): Tag[] {
  return tags.map((t) =>
    t.Identifier === HouseholdDetailTags.Photos ? { ...t, Enabled: isShownHousehold(content) } : t,
  );
}

/** Action_HandlePreviewData: with Preview.UsePreview, the address becomes FormattedAddress, and the member
    HouseholdMemberId (when listed) takes the age visibility, the phones (blank when hidden) and the email of the
    preview, and for a householder the home phone. */
export function handlePreviewData(data: Household, preview: HouseholdPreviewStructure): Household {
  if (preview.UsePreview !== true) return data;
  const card = data.Household.HouseholdCard ?? {};
  const household: HouseholdDetails = {
    ...data.Household,
    HouseholdCard: {
      ...card,
      Household_Card_Content: { ...card.Household_Card_Content, Address: preview.FormattedAddress ?? '' },
    },
  };
  const memberId = preview.HouseholdMemberId ?? '0';
  const position = data.Out_HouseholdMembers.findIndex((p) => (p.Id ?? '0') === memberId);
  if (position === -1) return { ...data, Household: household };
  const personal = preview.UI_AccountForm?.AccountForm_PersonalInformation ?? {};
  const contact = preview.UI_AccountForm?.AccountForm_ContactInformation ?? {};
  const members = data.Out_HouseholdMembers.map((member, i) => {
    if (i !== position) return member;
    const updated = {
      ...member,
      DisplayAge: personal.ShowLifeCycleDates ?? false,
      MobilePhone: contact.ShowMobileNumber === true ? (contact.MobileNumber ?? '') : '',
      WorkPhone: contact.ShowWorkNumber === true ? (contact.WorkNumber ?? '') : '',
      Email: personal.Email ?? '',
    };
    return preview.isHouseholder === true ? { ...updated, HomePhone: contact.HomeNumber ?? '' } : updated;
  });
  return { ...data, Household: household, Out_HouseholdMembers: members };
}

/** Handler_TimelinePhotoSelected: IsCurrent = (Date = the selected date) for every image. */
export function selectTimelinePhoto(
  images: readonly UI_HouseholdTimelineImages[],
  date: string,
): UI_HouseholdTimelineImages[] {
  return images.map((image) => ({ ...image, IsCurrent: image.Date === date }));
}

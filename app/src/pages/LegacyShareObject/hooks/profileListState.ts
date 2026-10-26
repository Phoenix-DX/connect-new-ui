import type { AvailableUsers, AvailableUsersCallInputs, ProfilePhoto } from '@/api/share';

/** The variables of the block ProfileList, the reducer and the assignments of its flows. Pure; the flows are in
    useProfileList.
    @origin Connect2_LegacyShared.Share_UI.ProfileList */

/** One row of the list (Connect2_LegacyShared.ShareProfile). */
export interface ShareProfile {
  profileId: string;
  name: string;
  /** "Locality, Country". */
  description: string;
  cdn: ProfilePhoto;
  /** The object is shared with this user: the row shows the check icon instead of the share icon. */
  isShared: boolean;
}

/** The variables of the block. */
export interface ProfileListState {
  /** ShareProfiles: the rows of the list. */
  shareProfiles: ShareProfile[];
  /** SearchFilter: the value of the search input. */
  searchFilter: string;
  /** SharedProfileIds: the users that the object was shared with. */
  sharedProfileIds: string[];
  /** HasSearched: the last Refresh came from a search (the Enter key). */
  hasSearched: boolean;
  /** NoResultsFoundMessage. */
  noResultsFoundMessage: string;
  /** The answer of the last GetAvailableUsers fetch that OnAfterFetch handled; null while GetAvailableUsers.IsDataFetched
      is False. OutSystems keeps it during a later refresh. */
  fetched: AvailableUsers | null;
}

/** An assignment of one or more variables. */
export type ProfileListPatch = Partial<ProfileListState>;

/** MaxRecords: the default value of the block variable. */
export const MAX_RECORDS = 50;

/** The variables after OnInitialize (the block has no OnInitialize: the defaults). */
export const INITIAL_PROFILE_LIST_STATE: ProfileListState = {
  shareProfiles: [],
  searchFilter: '',
  sharedProfileIds: [],
  hasSearched: false,
  noResultsFoundMessage: '',
  fetched: null,
};

/** The variables after an assignment. */
export const profileListReducer = (state: ProfileListState, patch: ProfileListPatch): ProfileListState => ({
  ...state,
  ...patch,
});

/** The block variables that OutSystems sends with DataActionGetAvailableUsers, at the time of the fetch. */
export const availableUsersInputs = (
  state: ProfileListState,
  shareObjectId: string,
  shareObjectTypeId: string,
): AvailableUsersCallInputs => ({
  SearchFilter: state.searchFilter,
  ShareObjectId: shareObjectId,
  ShareObjectTypeId: shareObjectTypeId,
  MaxRecords: MAX_RECORDS,
  HasSearched: state.hasSearched,
});

/** GetAvailableUsersOnAfterFetch: NoResultsFoundMessage for the search; the shared rows join SharedProfileIds
    (ListFilter and ListAppendAll); then ShareProfiles is built again from the answer, with IsShared for the users in
    SharedProfileIds. */
export function availableUsersFetched(state: ProfileListState, data: AvailableUsers): ProfileListPatch {
  const sharedProfileIds = [
    ...state.sharedProfileIds,
    ...state.shareProfiles.filter((p) => p.isShared).map((p) => p.profileId),
  ];
  return {
    fetched: data,
    noResultsFoundMessage: "No results found for '" + state.searchFilter + "'",
    sharedProfileIds,
    shareProfiles: data.items.map((item) => ({
      profileId: item.id,
      name: item.fullName,
      description: item.localityName + ', ' + item.countryName,
      cdn: item.photo,
      isShared: sharedProfileIds.includes(item.id),
    })),
  };
}

/** ShareObject answered IsAllowed and IsSuccess: ListIndexOf the target, then ShareProfiles[Position].IsShared = True. */
export function profileShared(state: ProfileListState, targetProfileId: string): ProfileListPatch {
  const position = state.shareProfiles.findIndex((p) => p.profileId === targetProfileId);
  return {
    shareProfiles: state.shareProfiles.map((p, i) => (i === position ? { ...p, isShared: true } : p)),
  };
}

/** ShareObject answered not allowed or not a success: the target leaves SharedProfileIds and its row is not shared. */
export function profileShareFailed(state: ProfileListState, targetProfileId: string): ProfileListPatch {
  return {
    sharedProfileIds: state.sharedProfileIds.filter((p) => p !== targetProfileId),
    shareProfiles: state.shareProfiles.map((p) => (p.profileId === targetProfileId ? { ...p, isShared: false } : p)),
  };
}

/** What the results area shows: the list (or the no-result blank slate) once a fetch was handled; before that the
    error blank slate when the fetch failed, else the searching blank slate. */
export type ProfileListResults = 'list' | 'noResults' | 'error' | 'searching';

export function profileListResults(fetched: AvailableUsers | null, isFetchError: boolean): ProfileListResults {
  if (fetched) return fetched.items.length > 0 ? 'list' : 'noResults';
  return isFetchError ? 'error' : 'searching';
}

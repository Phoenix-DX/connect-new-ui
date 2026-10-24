import type { ActionInputs, ActionOutputs, PathOf } from '@/api/client/callAction';
import { osList, wireList } from '@/lib/os-wire';
import type { SearchBirthdayOption, SearchResult, SearchResults, SearchTag, SearchVariables } from './types';

/* Wire types from the contract (src/api/openapi.yaml), through the callAction types. */
type FetchSearchResultsPath = PathOf<'UBTConnect', 'ScreenBlock_Search/DataActionFetchSearchResults'>;
/** DataActionFetchSearchResults inputs: the block variables OutSystems sends (screenData.variables). */
export type FetchSearchResultsInputsWire = ActionInputs<FetchSearchResultsPath>;
/** Output of DataActionFetchSearchResults. */
export type FetchSearchResultsWire = ActionOutputs<FetchSearchResultsPath>;
/** Connect_Search_CS.SearchResult. */
export type SearchResultWire = FetchSearchResultsWire['Households']['List'][number];
/** Output of ScreenDataSetGet_SearchBirthdayOptions. */
export type SearchBirthdayOptionsWire = ActionOutputs<
  PathOf<'UBTConnect', 'ScreenBlock_Search/ScreenDataSetGet_SearchBirthdayOptions'>
>;
/** One row of Get_SearchBirthdayOptions (Connect_SearchBirthdayOptions). */
export type SearchBirthdayOptionWire = SearchBirthdayOptionsWire['List']['List'][number];

/** One search result: every field of the record except Score, which the block does not read. */
export const toSearchResult = (w: SearchResultWire): SearchResult => ({
  id: w.Id,
  householderId: w.HouseholderId,
  name: w.Name,
  additionalInformation: w.AdditionalInformation,
  location: w.Location,
  type: w.Type,
  latitude: w.Latitude,
  longitude: w.Longitude,
  recordDisabled: w.RecordDisabled,
});

/** The three lists of the answer, in the server order. */
export const toSearchResults = (w: FetchSearchResultsWire): SearchResults => ({
  households: osList(w.Households).map(toSearchResult),
  people: osList(w.People).map(toSearchResult),
  places: osList(w.Places).map(toSearchResult),
});

/** One birthday option: the Connect_SearchBirthdayOptions part of the aggregate row. */
export const toBirthdayOption = (w: SearchBirthdayOptionWire): SearchBirthdayOption => ({
  name: w.Connect_SearchBirthdayOptions.Name,
  searchName: w.Connect_SearchBirthdayOptions.SearchName,
  order: w.Connect_SearchBirthdayOptions.Order,
});

/** The rows of the aggregate, in the server order. */
export const toBirthdayOptions = (w: SearchBirthdayOptionsWire): SearchBirthdayOption[] =>
  osList(w.List).map(toBirthdayOption);

/** The inputs of DataActionFetchSearchResults. OutSystems sends the block variables, so the inputs keep their names.
    The variables that the block never sets before a fetch keep their defaults: HasPeople, HasHouseholds and HasPlaces
    False, and the inputs In_IsInScreenSearch and In_IsEventNavigation False. */
export const toFetchSearchResultsInputs = (
  v: SearchVariables,
  tagList: SearchTag[],
  isLoading: boolean,
): FetchSearchResultsInputsWire => ({
  SearchKey_Current: v.searchKeyCurrent,
  SearchKey_LastSearched: v.searchKeyLastSearched,
  HasSearched: v.hasSearched,
  TagList: wireList(
    tagList.map((t) => ({
      Text: t.Text ?? '',
      Identifier: t.Identifier ?? '',
      IconId: t.IconId ?? '',
      IsSelected: t.IsSelected ?? true,
      Enabled: t.Enabled ?? true,
    })),
  ),
  SelectedCategory: v.selectedCategory,
  SelectedCountryIds: wireList(v.selectedCountryIds),
  IsLoading: isLoading,
  BottomSheetId_Filter: v.bottomSheetIdFilter,
  HasFiltersApplied: v.hasFiltersApplied,
  HasPeople: false,
  HasHouseholds: false,
  HasPlaces: false,
  isBirthdayKeyWord: v.isBirthdayKeyWord,
  isBirthdaySearchEnabled: v.isBirthdaySearchEnabled,
  BottomSheetId_Filter_IsLoaded: v.bottomSheetIdFilterIsLoaded,
  BottomSheetId_Filter_ShowSubscriptionOnClick: v.bottomSheetIdFilterShowSubscriptionOnClick,
  In_IsInScreenSearch: false,
  In_IsEventNavigation: false,
  In_SearchTargetId: v.inSearchTargetId,
});

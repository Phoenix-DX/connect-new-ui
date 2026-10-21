import type { ActionInputs, ActionOutputs, PathOf } from '../../lib/api';
import type { LongId } from '../../lib/os-wire';

/* Wire types from the contract (src/api/openapi.yaml), through the callAction types. */
type FetchSearchResultsPath = PathOf<'UBTConnect', 'ScreenBlock_Search/DataActionFetchSearchResults'>;
type FetchSearchResultsOutputs = ActionOutputs<FetchSearchResultsPath>;
/** DataActionFetchSearchResults inputs: the block variables OutSystems sends (screenData.variables). */
export type FetchSearchResultsInputsWire = ActionInputs<FetchSearchResultsPath>;
/** Connect_Search_CS.SearchResult. */
export type SearchResultWire = FetchSearchResultsOutputs['Households']['List'][number];
/** Output of DataActionFetchSearchResults. */
export type FetchSearchResultsWire = FetchSearchResultsOutputs;
type BirthdayOptionsOutputs = ActionOutputs<
  PathOf<'UBTConnect', 'ScreenBlock_Search/ScreenDataSetGet_SearchBirthdayOptions'>
>;
/** One row of Get_SearchBirthdayOptions (Connect_SearchBirthdayOptions). */
export type SearchBirthdayOptionWire = BirthdayOptionsOutputs['List']['List'][number];

/** Connect_Search_CS.SearchResult as the block uses it (ids are Text on the wire). */
export interface SearchResult {
  id: string;
  householderId: string;
  name: string;
  additionalInformation: string;
  location: string;
  /** Connect_Entity identifier (Household, Member, Locality…). */
  type: string;
  latitude: string;
  longitude: string;
  recordDisabled: boolean;
}

/** FetchSearchResults outputs (Households, People, Places). */
export interface SearchResults {
  households: SearchResult[];
  people: SearchResult[];
  places: SearchResult[];
}

/** Connect_SearchBirthdayOptions row. */
export interface SearchBirthdayOption {
  name: string;
  searchName: string;
  order: number;
}

/** Block variables sent with DataActionFetchSearchResults (the ones the block sets; the rest keep their defaults). */
export interface SearchVariables {
  searchKeyCurrent: string;
  searchKeyLastSearched: string;
  hasSearched: boolean;
  selectedCategory: string;
  selectedCountryIds: LongId[];
  bottomSheetIdFilter: string;
  bottomSheetIdFilterIsLoaded: boolean;
  bottomSheetIdFilterShowSubscriptionOnClick: boolean;
  hasFiltersApplied: boolean;
  isBirthdayKeyWord: boolean;
  isBirthdaySearchEnabled: boolean;
  inSearchTargetId: string;
}

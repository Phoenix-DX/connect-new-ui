import type { SearchResult, SearchResults } from '@/api/search';
import { Connect_SearchCategories } from '@/pages/Search/components/staticEntities';
import type { ConnectSearch_RecentClickedResults } from '@/platform/storage/localEntities';
import type { Tag } from '@/shared/UBTConnectLibrary/HorizontalTagList';

/** The state of the search block ScreenBlock_Search and its reducer, with the client actions of the block as pure
    functions.
    @origin UBTConnect.Directory_Search.ScreenBlock_Search */

/** The block variables that the view cache keeps (P-BACK): a back navigation to Search shows the last search again.
    The OutSystems name of each variable is in brackets. */
export interface SearchState {
  /** [SearchKey_Current] The text of the search input. */
  searchKeyCurrent: string;
  /** [SearchKey_LastSearched] The term of the last search. */
  searchKeyLastSearched: string;
  /** [HasSearched] */
  hasSearched: boolean;
  /** [SelectedCategory] A Connect_SearchCategories identifier, or "" when no tag is selected. */
  selectedCategory: string;
  /** [TagList] The category tags of the HorizontalTagList. */
  tagList: Tag[];
  /** [SelectedCountryIds] The countries of the filter sheet. */
  selectedCountryIds: string[];
  /** [IsLoading] */
  isLoading: boolean;
  /** [HasFiltersApplied] */
  hasFiltersApplied: boolean;
  /** [HasPeople] The Members section shows. */
  hasPeople: boolean;
  /** [HasHouseholds] The Households section shows. */
  hasHouseholds: boolean;
  /** [HasPlaces] The Places section shows. */
  hasPlaces: boolean;
  /** [isBirthdayKeyWord] The input text contains "birthday". */
  isBirthdayKeyWord: boolean;
  /** [FetchSearchResults] The outputs of the last fetch. */
  results: SearchResults;
}

/** The changes of the state, one per assignment group of the block's flows. */
export type SearchAction =
  /** InputEvent_OnChange: SearchKey_Current and isBirthdayKeyWord. */
  | { type: 'inputChanged'; text: string }
  /** InputEvent_Submit, OnClick_RecentSearchTerm and Search_BirthdayOptions Selected: SearchKey_Current. */
  | { type: 'searchKeySet'; text: string }
  /** InputEvent_ClearString: SearchKey_Current and SearchKey_LastSearched "". */
  | { type: 'searchKeysCleared' }
  /** Event_HorizontalTagListChanged: SelectedCategory (the selected tag, or "") and TagList. */
  | { type: 'tagListChanged'; tagList: Tag[] }
  /** Event_ApplyFilters: SelectedCountryIds and HasFiltersApplied. */
  | { type: 'filtersApplied'; selectedCountryIds: string[]; hasFiltersApplied: boolean }
  /** Action_ClearResults: the three lists empty, HasSearched False. */
  | { type: 'resultsCleared' }
  /** Action_RefreshSearch before the fetch: HasSearched True, SearchKey_LastSearched = the term, IsLoading True. */
  | { type: 'searchStarted'; searchKey: string }
  /** OnAfterFetch_FetchSearchResults, with the SelectedCategory of the search. */
  | { type: 'resultsFetched'; results: SearchResults; selectedCategory: string }
  /** The handled exceptions of Action_RefreshSearch: IsLoading False. */
  | { type: 'loadingEnded' };

export const NO_RESULTS: SearchResults = { households: [], people: [], places: [] };

/** SearchCategory_ItemRec (UBTConnect_Utils). */
export interface SearchCategory_Item {
  SearchCategoryId: string;
  Order: number;
  Label: string;
  UBTIcon: string;
}

/** UBTConnect_Utils SearchCategory_GetList: All, Households, Members (People), Places, in this order; UBTIcon keeps
    its default "". */
export function searchCategory_GetList(): SearchCategory_Item[] {
  return [
    { SearchCategoryId: Connect_SearchCategories.All, Order: 1, Label: Connect_SearchCategories.All, UBTIcon: '' },
    {
      SearchCategoryId: Connect_SearchCategories.Households,
      Order: 2,
      Label: Connect_SearchCategories.Households,
      UBTIcon: '',
    },
    { SearchCategoryId: Connect_SearchCategories.People, Order: 3, Label: 'Members', UBTIcon: '' },
    {
      SearchCategoryId: Connect_SearchCategories.Places,
      Order: 4,
      Label: Connect_SearchCategories.Places,
      UBTIcon: '',
    },
  ];
}

/** OnInitialize: TagList = SearchCategory_GetList mapped to Tag, IsSelected when the category is the SelectedCategory
    (Enabled keeps its default True). */
export function initialTagList(selectedCategory: string): Tag[] {
  return searchCategory_GetList().map((c) => ({
    Text: c.Label,
    Identifier: c.SearchCategoryId,
    IconId: c.UBTIcon,
    IsSelected: c.SearchCategoryId === selectedCategory,
    Enabled: true,
  }));
}

/** The block variables after OnInitialize: SelectedCategory All and its TagList, everything else at its default. */
export const INITIAL_SEARCH_STATE: SearchState = {
  searchKeyCurrent: '',
  searchKeyLastSearched: '',
  hasSearched: false,
  selectedCategory: Connect_SearchCategories.All,
  tagList: initialTagList(Connect_SearchCategories.All),
  selectedCountryIds: [],
  isLoading: false,
  hasFiltersApplied: false,
  hasPeople: false,
  hasHouseholds: false,
  hasPlaces: false,
  isBirthdayKeyWord: false,
  results: NO_RESULTS,
};

/** OS Index(text, "birthday", 0, False, True) <> -1: case-insensitive search (isBirthdayKeyWord, InputEvent_OnChange). */
export const isBirthdayKeyWord = (text: string): boolean => text.toLowerCase().includes('birthday');

/** OnAfterFetch_FetchSearchResults: a section shows when its list is not empty and SelectedCategory is
    null, All or the section's own category. */
export const showsCategory = (selectedCategory: string, own: string): boolean =>
  selectedCategory === '' || selectedCategory === Connect_SearchCategories.All || selectedCategory === own;

/** Event_HorizontalTagListChanged: SelectedCategory is the Identifier of the selected tag, or "". */
export const selectedCategoryOf = (tagList: Tag[]): string => tagList.find((t) => t.IsSelected)?.Identifier ?? '';

/** UBTConnect ValidateSearchPhoneNumber (MinNumberSize 4) with its ValidatePhoneNumberJS: "+digits" needs at least 4
    digits, other number-like text (digits, + - space ( ) .) is invalid, anything else (names) is valid. */
export function validateSearchPhoneNumber(search: string): { isValid: boolean; errorMessage: string } {
  const digitsOnly = search.replace(/[^0-9]/g, '');
  const strictPattern = /^\+?[0-9]+$/;
  const looksLikeNumber = /^[0-9+\-\s().]+$/.test(search);
  const isValid = strictPattern.test(search) ? digitsOnly.length >= 4 : !looksLikeNumber;
  return isValid
    ? { isValid: true, errorMessage: '' }
    : { isValid: false, errorMessage: 'Please enter a valid phone number' };
}

/** A recent clicked result as a SearchResult (the item click of the recent gallery): EntityId → Id, EntityType → Type;
    RecordDisabled keeps its default False. */
export const recentAsResult = (r: ConnectSearch_RecentClickedResults): SearchResult => ({
  id: r.EntityId,
  householderId: r.HouseholderId,
  name: r.Name,
  additionalInformation: r.AdditionalInformation,
  location: r.Location,
  type: r.EntityType,
  latitude: r.Latitude,
  longitude: r.Longitude,
  recordDisabled: false,
});

/** The reducer of the block variables. */
export function searchReducer(state: SearchState, action: SearchAction): SearchState {
  switch (action.type) {
    case 'inputChanged':
      return { ...state, searchKeyCurrent: action.text, isBirthdayKeyWord: isBirthdayKeyWord(action.text) };
    case 'searchKeySet':
      return { ...state, searchKeyCurrent: action.text };
    case 'searchKeysCleared':
      return { ...state, searchKeyCurrent: '', searchKeyLastSearched: '' };
    case 'tagListChanged':
      return { ...state, selectedCategory: selectedCategoryOf(action.tagList), tagList: action.tagList };
    case 'filtersApplied':
      return {
        ...state,
        selectedCountryIds: action.selectedCountryIds,
        hasFiltersApplied: action.hasFiltersApplied,
      };
    case 'resultsCleared':
      return { ...state, results: NO_RESULTS, hasSearched: false };
    case 'searchStarted':
      return { ...state, hasSearched: true, searchKeyLastSearched: action.searchKey, isLoading: true };
    case 'resultsFetched': {
      const { results, selectedCategory } = action;
      return {
        ...state,
        results,
        isLoading: false,
        hasPeople: results.people.length > 0 && showsCategory(selectedCategory, Connect_SearchCategories.People),
        hasHouseholds:
          results.households.length > 0 && showsCategory(selectedCategory, Connect_SearchCategories.Households),
        hasPlaces: results.places.length > 0 && showsCategory(selectedCategory, Connect_SearchCategories.Places),
      };
    }
    case 'loadingEnded':
      return { ...state, isLoading: false };
  }
}

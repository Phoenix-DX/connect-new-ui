import type { LongId } from '@/lib/os-wire';

/* Domain types of the directory search (Connect_Search_CS): the results of the search block
   Directory_Search.ScreenBlock_Search and its birthday options. The wire types stay in src/api/schema.d.ts; mapper.ts
   names them. */

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

/** One row of the block variable TagList (UBTConnectLibrary Tag), as DataActionFetchSearchResults sends it. A field
    that is not set keeps its default: texts "", IsSelected and Enabled True. */
export interface SearchTag {
  Text?: string;
  Identifier?: string;
  IconId?: string;
  IsSelected?: boolean;
  Enabled?: boolean;
}

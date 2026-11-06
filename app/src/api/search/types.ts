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
  /** [DisplayHouseholdName] */
  displayHouseholdName: boolean;
  /** [DisplayAddress] */
  displayAddress: boolean;
  /** [Event_IsPersonal] */
  eventIsPersonal: boolean;
  /** [Event_EventTypeTitle] */
  eventEventTypeTitle: string;
  /** [Event_HostSubdivisionId] LongInteger as text: the hall of an Assemble meeting. */
  eventHostSubdivisionId: string;
  /** [Event_HostHouseholderId] LongInteger as text: the host of an LDM event. */
  eventHostHouseholderId: string;
  /** [Event_Source] A Connect_EventTypes identifier (Assemble, Orbit, LDM), or "" for a row that is not an event. */
  eventSource: string;
  /** [Event_EventHostId] */
  eventEventHostId: string;
  /** [Event_StartDate] Date "yyyy-MM-dd" ("1900-01-01" is the null date). */
  eventStartDate: string;
  /** [Event_EndDate] Date "yyyy-MM-dd". */
  eventEndDate: string;
  /** [Event_OrbitEventType] "" for a row that is not an Orbit event. */
  eventOrbitEventType: string;
}

/** FetchSearchResults outputs (Households, People, Places, Events, Schools; live ScreenBlock_Search.mvc.js:50-72). */
export interface SearchResults {
  households: SearchResult[];
  people: SearchResult[];
  places: SearchResult[];
  events: SearchResult[];
  schools: SearchResult[];
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

/** One row of the block variable RecentClickedResults: a record of the client entity ConnectSearch_RecentClickedResults
    (ids and decimals are Text on the wire, SearchedOn a local DateTime text). DataActionGet_FilteredRecentClickedResults
    gets these rows and gives back the rows to show, with the same fields. */
export interface RecentClickedResultRow {
  Id: string;
  UserId: number;
  EntityId: string;
  EntityType: string;
  HouseholderId: string;
  Name: string;
  AdditionalInformation: string;
  Location: string;
  SearchedOn: string;
  Latitude: string;
  Longitude: string;
  SearchTargetId: string;
}

/** Get_FilteredRecentClickedResults outputs. */
export interface FilteredRecentClickedResults {
  /** Out_RecentClickedResults: the rows to show, in the server order. */
  recentClickedResults: RecentClickedResultRow[];
  /** Out_IdsToRemove: the local ids to delete (LongInteger, as text). */
  idsToRemove: string[];
}

/* Domain types of the update calls: the fields that the UI reads. The readers are the block FeedBlock_Updates of
   HomeFeed, the screen Updates_SingleList (its variables are the inputs of its data actions) and their client actions.
   Each type has the shape that its readers use today, so no caller changes. The wire types stay in
   src/api/schema.d.ts. Long Integer ids are text. */

/** An update item (Connect_Updates_CS UI_UpdateItem): every field, in camelCase. */
export interface UpdateItem {
  /** Long Integer, as text. */
  updateItemId: string;
  /** Connect_UpdateType identifier (Birth, Marriage, Taken). */
  updateItemTypeId: string;
  /** Long Integer, as text. */
  householdId: string;
  memberId: string;
  name: string;
  /** Date "yyyy-MM-dd". The null date depends on the mapper: the home feed keeps "1900-01-01" as the server sends it
      (Update_ListItem formats it); the update list gives "" for it. */
  date: string;
  /** Gender identifier. */
  genderId: string;
  locationString: string;
  parentsNames: string;
  birthType: string;
  isRead: boolean;
  hasAccess: boolean;
  hasShare: boolean;
}

/** The outputs of DataActionFetchUpdates of Updates_SingleList: the update items and the unread count. */
export interface UpdatesList {
  items: UpdateItem[];
  unreadCount: number;
}

/** A date range of the update list (UBTConnect UI_Updates_DateRange). Dates "yyyy-MM-dd", "" = null date. */
export interface UpdateDateRange {
  range: string;
  from: string;
  to: string;
}

/** A section of the update list (UBTConnect UI_UpdateItem_Breakpoint): its first position, its name, its unread count
    and its date range. */
export interface UpdateBreakpoint {
  position: number;
  sectionName: string;
  badgeCount: number;
  dateRange: UpdateDateRange;
}

/** The filter of the update calls (Connect_Updates_CS Filter_Updates). "" = null date or null identifier. */
export interface FilterUpdates {
  dateFrom: string;
  dateTo: string;
  searchText: string;
  updateTypeId: string;
  countryIds: string[];
  localitiesIds: string[];
  readOnly: string;
  sortByNewest: string;
}

/** An update type option of the filter tags (UBTConnectLibrary Tag): the fields that the screen sets. */
export interface UpdateTypeOption {
  text: string;
  identifier: string;
  isSelected: boolean;
}

/** The variables of Updates_SingleList. OutSystems sends all of them with the two data actions of the screen. */
export interface UpdatesListVariables {
  filter_UpdateTypeOptions: UpdateTypeOption[];
  filter_BottomSheetId: string;
  filter_Updates: FilterUpdates;
  filter_DefaultState: FilterUpdates;
  hasFiltersApplied: boolean;
  showMarkAll: boolean;
  dateRanges: UpdateDateRange[];
  isLoading: boolean;
  bottomSheetId_IsLoaded: boolean;
  bottomSheetId_ShowSubscription: boolean;
  breakpoints: UpdateBreakpoint[];
  currentBreakpoint: UpdateBreakpoint;
  isHeaderScrolled: boolean;
  shareableUpdateItem: UpdateItem;
  isShareOpen: boolean;
  shareableObjectId: string;
  isToggleSearch: boolean;
  focusedScrollAnchorId: string;
  currentSearchString: string;
}

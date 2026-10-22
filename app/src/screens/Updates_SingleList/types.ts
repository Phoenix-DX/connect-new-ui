import type { ActionInputs, ActionOutputs, PathOf } from '@/api/client/callAction';

/* Wire types from the contract (src/api/openapi.yaml), through the callAction types. */
type FetchUpdatesPath = PathOf<'UBTConnect', 'Updates_SingleList/DataActionFetchUpdates'>;
/** screenData.variables of the screen's data actions. */
export type ScreenVariablesWire = ActionInputs<FetchUpdatesPath>;
/** Connect_Updates_CS.UI_UpdateItem as the server sends it (Long Integers as text, Date "yyyy-MM-dd"). */
export type UpdateItemWire = ActionOutputs<FetchUpdatesPath>['UI_UpdateItemList']['List'][number];

/** UI_UpdateItem in the domain shape. `date` is an OutSystems Date "yyyy-MM-dd" ('' = null date). */
export interface UpdateItem {
  updateItemId: string;
  updateItemTypeId: string;
  name: string;
  date: string;
  genderId: string;
  locationString: string;
  isRead: boolean;
  hasAccess: boolean;
  hasShare: boolean;
  householdId: string;
  parentsNames: string;
  birthType: string;
  memberId: string;
}

/** UBTConnect.UI_Updates_DateRange (dates "yyyy-MM-dd", '' = null date). */
export interface DateRange {
  range: string;
  from: string;
  to: string;
}

/** UBTConnect.UI_UpdateItem_Breakpoint. */
export interface Breakpoint {
  position: number;
  sectionName: string;
  badgeCount: number;
  dateRange: DateRange;
}

/** Connect_Updates_CS.Filter_Updates ('' = null date / null identifier). */
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

/** UBTConnectLibrary.Tag (HorizontalTagList items). */
export interface TagOption {
  text: string;
  identifier: string;
  isSelected: boolean;
}

/** Screen variables of Updates_SingleList (SCR model :45-126) that OutSystems sends with its data actions. */
export interface UpdatesVariables {
  filter_UpdateTypeOptions: TagOption[];
  filter_BottomSheetId: string;
  filter_Updates: FilterUpdates;
  filter_DefaultState: FilterUpdates;
  hasFiltersApplied: boolean;
  showMarkAll: boolean;
  dateRanges: DateRange[];
  isLoading: boolean;
  bottomSheetId_IsLoaded: boolean;
  bottomSheetId_ShowSubscription: boolean;
  breakpoints: Breakpoint[];
  currentBreakpoint: Breakpoint;
  isHeaderScrolled: boolean;
  shareableUpdateItem: UpdateItem;
  isShareOpen: boolean;
  shareableObjectId: string;
  isToggleSearch: boolean;
  focusedScrollAnchorId: string;
  currentSearchString: string;
}

export interface FetchUpdatesResult {
  items: UpdateItem[];
  unreadCount: number;
}

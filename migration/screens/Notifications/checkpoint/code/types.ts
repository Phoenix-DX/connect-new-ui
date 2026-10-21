import type { ActionInputs, ActionOutputs, PathOf } from '../../lib/api';
import type { LongId } from '../../lib/os-wire';

/* Wire types from the contract (src/api/openapi.yaml), through the callAction types. */
type FetchNotificationsPath = PathOf<'UBTConnect', 'Notifications/DataActionFetchNotifications'>;
type GetDateRangesPath = PathOf<'UBTConnect', 'Notifications/DataActionGetDateRanges'>;
/** Screen variables OutSystems sends with both data actions (screenData.variables). */
export type FetchNotificationsInputsWire = ActionInputs<FetchNotificationsPath>;
export type GetDateRangesInputsWire = ActionInputs<GetDateRangesPath>;
export type FetchNotificationsWire = ActionOutputs<FetchNotificationsPath>;
/** Connect2_Notification_CS.MessageListItem. */
export type MessageListItemWire = FetchNotificationsWire['UI_NotificationItemList']['List'][number];
export type GetDateRangesWire = ActionOutputs<GetDateRangesPath>;
/** UBTConnect.Updates_DateRanges record (Id = identifier text, Order). */
export type Updates_DateRangesWire = GetDateRangesWire['DateRangesList']['List'][number];

/** MessageListItem as the screen uses it. DateTimeCreated is a client DateTime "yyyy-MM-ddTHH:mm:ss". */
export interface NotificationItem {
  id: LongId;
  title: string;
  dateTimeCreated: string;
  isRead: boolean;
  profileIconURL: string;
}

/** UI_Updates_DateRange: Range (Updates_DateRanges identifier), From / To Dates "yyyy-MM-dd". */
export interface DateRange {
  range: string;
  from: string;
  to: string;
}

/** UI_UpdateItem_Breakpoint. */
export interface Breakpoint {
  position: number;
  sectionName: string;
  badgeCount: number;
  dateRange: DateRange;
}

/** Connect_Updates_CS.Filter_Updates (the fields the screen sets; ids lists stay empty). */
export interface FilterUpdates {
  dateFrom: string;
  dateTo: string;
  searchText: string;
  updateTypeId: string;
  readOnly: string;
  sortByNewest: string;
}

/** Screen variables (SCR model :56-142) with their compiled defaults. */
export interface NotificationsVariables {
  filter_BottomSheetId: string;
  filter_Updates: FilterUpdates;
  hasFiltersApplied: boolean;
  showMarkAll: boolean;
  dateRanges: DateRange[];
  isLoading: boolean;
  bottomSheetId_IsLoaded: boolean;
  bottomSheetId_ShowSubscription: boolean;
  breakpoints: Breakpoint[];
  currentBreakpoint: Breakpoint;
  isHeaderScrolled: boolean;
  isToggleSearch: boolean;
  currentSearchString: string;
  badgeNumber: number;
  selectedHistorySearch: string;
  deviceHardwareId: string;
  filter_MessageTypePrivate: boolean;
  filter_MessageTypePublic: boolean;
  orderByIsAscending: boolean;
  maxRecords: number;
  showWarning: boolean;
  selectedFilter_OrderASC: boolean;
  filter_OrderASC: boolean;
  filter_OrderDESC: boolean;
  selectedFilter_MessageTypePrivate: boolean;
  selectedFilter_MessageTypePublic: boolean;
  moreAction_BottomSheetId: string;
}

/** FetchNotifications outputs. */
export interface FetchNotificationsResult {
  items: NotificationItem[];
  hasUnreadMessages: boolean;
  unreadNotificationsCount: number;
}

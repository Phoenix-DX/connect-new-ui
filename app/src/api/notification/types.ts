import type { LongId } from '@/lib/os-wire';

/* Domain types of the notification calls: the screen Notifications of UBTConnect (App_Notifications, with its blocks
   and client actions), and the two notification wrappers of Connect2_LegacyShared that the blocks
   ScreenBlock_MessageDetail and ScreenBlock_MessageList call. The fields are those that the UI reads. Each type has
   the shape that its readers use today, so no caller changes. The wire types stay in src/api/schema.d.ts. Long Integer
   ids are text. */

/* ---- The screen Notifications ---- */

/** Connect2_Notification_CS MessageListItem: the fields that the notification list reads. DateTimeCreated is a client
    DateTime "yyyy-MM-ddTHH:mm:ss". MessageTemplateId and CreatedByMemberId came with the live TST model of 2026-11-05
    (Connect2_Notification_CS.model.js); the list sends MessageTemplateId to NotificationDetails
    (UBTConnect.App_Notifications.NotificationsList.mvc.js:361). */
export interface NotificationItem {
  id: LongId;
  title: string;
  dateTimeCreated: string;
  isRead: boolean;
  profileIconURL: string;
  messageTemplateId: LongId;
  createdByMemberId: string;
}

/** UBTConnect UI_Updates_DateRange: Range (an Updates_DateRanges identifier) and the dates From and To "yyyy-MM-dd"
    ("" = null date). */
export interface NotificationDateRange {
  range: string;
  from: string;
  to: string;
}

/** UBTConnect UI_UpdateItem_Breakpoint: a section of the notification list (its first position, its name, its unread
    count and its date range). */
export interface NotificationBreakpoint {
  position: number;
  sectionName: string;
  badgeCount: number;
  dateRange: NotificationDateRange;
}

/** Connect_Updates_CS Filter_Updates: the fields that the screen sets ("" = null date or null identifier). The lists of
    country and locality ids stay empty. */
export interface NotificationFilter {
  dateFrom: string;
  dateTo: string;
  searchText: string;
  updateTypeId: string;
  readOnly: string;
  sortByNewest: string;
}

/** The variables of the screen Notifications. OutSystems sends all of them with the two data actions of the screen
    (screenData.variables). */
export interface NotificationsVariables {
  filter_BottomSheetId: string;
  filter_Updates: NotificationFilter;
  hasFiltersApplied: boolean;
  showMarkAll: boolean;
  dateRanges: NotificationDateRange[];
  isLoading: boolean;
  bottomSheetId_IsLoaded: boolean;
  bottomSheetId_ShowSubscription: boolean;
  breakpoints: NotificationBreakpoint[];
  currentBreakpoint: NotificationBreakpoint;
  isHeaderScrolled: boolean;
  isToggleSearch: boolean;
  currentSearchString: string;
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
  /** The "Only show unread" switch (Handler_OnlyShowUnread). The data action reads it on the server. */
  local_OnlyShowUnread: boolean;
  /** The unread count of the header Badge (OnAfterFetch_FetchNotifications, Handler_UpdateReadCount). */
  readCount: number;
}

/** A record of the static entity Updates_DateRanges of UBTConnect: Id (the identifier, as text) and Order. */
export interface NotificationDateRangeRecord {
  id: string;
  order: number;
}

/** The outputs of DataActionFetchNotifications: the notifications and the unread count. The live TST code of
    2026-11-05 has no HasUnreadMessages output any more (the survey of 2026-10-13 had one, never assigned). */
export interface NotificationList {
  items: NotificationItem[];
  unreadNotificationsCount: number;
}

/* ---- The notification wrappers of Connect2_LegacyShared ---- */

/** The inputs of the server action Wrapper_MarkAllAsReadNotifications (and of MarkAllAsReadNotifications of the
    screen Notifications, the same four inputs): the message types (public, private), the
    device and the search term of the message list. */
export interface NotificationReadFilter {
  isPublic: boolean;
  isPrivate: boolean;
  deviceHardwareId: string;
  searchTerm: string;
}

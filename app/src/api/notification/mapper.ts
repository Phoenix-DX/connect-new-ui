import type { ActionInputs, ActionOutputs, PathOf } from '@/api/client/callAction';
import { osList, osNumber, wireList } from '@/legacy/os/os-wire';
import type {
  NotificationBreakpoint,
  NotificationDateRange,
  NotificationDateRangeRecord,
  NotificationItem,
  NotificationList,
  NotificationReadFilter,
  NotificationsVariables,
} from './types';

/** OutSystems NullDate() as it travels on the wire. */
const NULL_DATE = '1900-01-01';

type NotificationsPath = PathOf<'UBTConnect', 'Notifications/DataActionFetchNotifications'>;

/* The inputs and the outputs of each call, as the contract describes them. */
/** DataActionFetchNotifications of the screen Notifications. */
export type NotificationsWire = ActionOutputs<NotificationsPath>;
/** The screen variables that the screen Notifications sends with its two data actions (the same for both). */
export type NotificationsVariablesWire = ActionInputs<NotificationsPath>;
/** Connect2_Notification_CS MessageListItem as the server sends it. */
export type NotificationItemWire = NotificationsWire['UI_NotificationItemList']['List'][number];
/** DataActionGetDateRanges of the screen Notifications. */
export type NotificationDateRangesWire = ActionOutputs<PathOf<'UBTConnect', 'Notifications/DataActionGetDateRanges'>>;
/** The inputs of the server action Wrapper_MarkAllAsReadNotifications of Connect2_LegacyShared. */
export type NotificationReadFilterWire = ActionInputs<
  PathOf<'Connect2_LegacyShared', 'ActionWrapper_MarkAllAsReadNotifications'>
>;

/** A notification: the fields that the list reads. */
export const toNotificationItem = (w: NotificationItemWire): NotificationItem => ({
  id: w.Id,
  title: w.Title,
  dateTimeCreated: w.DateTimeCreated,
  isRead: w.IsRead,
  profileIconURL: w.ProfileIconURL,
});

/** The notifications with the list unwrapped, HasUnreadMessages, and the unread count (a Long Integer) as a number. */
export const toNotificationList = (wire: NotificationsWire): NotificationList => ({
  items: osList(wire.UI_NotificationItemList).map(toNotificationItem),
  hasUnreadMessages: wire.HasUnreadMessages,
  unreadNotificationsCount: osNumber(wire.UnreadNotificationsCount),
});

/** The Updates_DateRanges records, in the order of the server. */
export const toNotificationDateRangeRecords = (wire: NotificationDateRangesWire): NotificationDateRangeRecord[] =>
  osList(wire.DateRangesList).map((r) => ({ id: r.Id, order: r.Order }));

const toDateRangeWire = (d: NotificationDateRange) => ({
  Range: d.range,
  From: d.from || NULL_DATE,
  To: d.to || NULL_DATE,
});

const toBreakpointWire = (b: NotificationBreakpoint) => ({
  Position: b.position,
  SectionName: b.sectionName,
  BadgeCount: b.badgeCount,
  DateRange: toDateRangeWire(b.dateRange),
});

/** The variables of the screen Notifications as OutSystems sends them with a screen data action (screenData.variables),
    with their OutSystems names, in the order of the screen model. "" becomes the null date. The variables
    EventListener and EventListenerTarget are objects that do not serialize: they are not sent. The lists of country and
    locality ids of the filter are empty. */
export const toNotificationsVariablesWire = (v: NotificationsVariables): NotificationsVariablesWire => {
  const f = v.filter_Updates;
  return {
    Filter_BottomSheetId: v.filter_BottomSheetId,
    Filter_Updates: {
      Filter_Date: { Date_From: f.dateFrom || NULL_DATE, Date_To: f.dateTo || NULL_DATE },
      Filter_SearchText: f.searchText,
      Filter_UpdateTypeId: f.updateTypeId,
      CountryIds: wireList<string>([]),
      LocalitiesIds: wireList<string>([]),
      Filter_ReadOnly: f.readOnly,
      Sort_ByNewest: f.sortByNewest,
    },
    HasFiltersApplied: v.hasFiltersApplied,
    ShowMarkAll: v.showMarkAll,
    DateRanges: wireList(v.dateRanges.map(toDateRangeWire)),
    isLoading: v.isLoading,
    BottomSheetId_IsLoaded: v.bottomSheetId_IsLoaded,
    BottomSheetId_ShowSubscription: v.bottomSheetId_ShowSubscription,
    Breakpoints: wireList(v.breakpoints.map(toBreakpointWire)),
    CurrentBreakpoint: toBreakpointWire(v.currentBreakpoint),
    IsHeaderScrolled: v.isHeaderScrolled,
    IsToggleSearch: v.isToggleSearch,
    CurrentSearchString: v.currentSearchString,
    BadgeNumber: v.badgeNumber,
    SelectedHistorySearch: v.selectedHistorySearch,
    DeviceHardwareId: v.deviceHardwareId,
    Filter_MessageTypePrivate: v.filter_MessageTypePrivate,
    Filter_MessageTypePublic: v.filter_MessageTypePublic,
    OrderByIsAscending: v.orderByIsAscending,
    MaxRecords: v.maxRecords,
    ShowWarning: v.showWarning,
    SelectedFilter_OrderASC: v.selectedFilter_OrderASC,
    Filter_OrderASC: v.filter_OrderASC,
    Filter_OrderDESC: v.filter_OrderDESC,
    SelectedFilter_MessageTypePrivate: v.selectedFilter_MessageTypePrivate,
    SelectedFilter_MessageTypePublic: v.selectedFilter_MessageTypePublic,
    MoreAction_BottomSheetId: v.moreAction_BottomSheetId,
  };
};

/** The filter of Wrapper_MarkAllAsReadNotifications with its OutSystems input names. */
export const toNotificationReadFilterWire = (f: NotificationReadFilter): NotificationReadFilterWire => ({
  IsPublic: f.isPublic,
  IsPrivate: f.isPrivate,
  DeviceHardwareId: f.deviceHardwareId,
  SearchTerm: f.searchTerm,
});

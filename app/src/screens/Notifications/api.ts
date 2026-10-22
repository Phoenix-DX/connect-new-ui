import { callAction } from '@/api/client/callAction';
import { osList, osNumber, wireList } from '@/legacy/os/os-wire';
import type {
  Breakpoint,
  DateRange,
  FetchNotificationsInputsWire,
  FetchNotificationsResult,
  MessageListItemWire,
  NotificationsVariables,
} from './types';

const NULL_DATE = '1900-01-01';

const toItem = (w: MessageListItemWire) => ({
  id: w.Id,
  title: w.Title,
  dateTimeCreated: w.DateTimeCreated,
  isRead: w.IsRead,
  profileIconURL: w.ProfileIconURL,
});

const dateRangeWire = (d: DateRange) => ({ Range: d.range, From: d.from || NULL_DATE, To: d.to || NULL_DATE });
const breakpointWire = (b: Breakpoint) => ({
  Position: b.position,
  SectionName: b.sectionName,
  BadgeCount: b.badgeCount,
  DateRange: dateRangeWire(b.dateRange),
});

/** screenData.variables: OutSystems sends every screen variable with a screen data action (EventListener objects are
    not serialisable and stay out). Names as compiled (SCR model :56-142). */
function screenVariables(v: NotificationsVariables): FetchNotificationsInputsWire {
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
    DateRanges: wireList(v.dateRanges.map(dateRangeWire)),
    isLoading: v.isLoading,
    BottomSheetId_IsLoaded: v.bottomSheetId_IsLoaded,
    BottomSheetId_ShowSubscription: v.bottomSheetId_ShowSubscription,
    Breakpoints: wireList(v.breakpoints.map(breakpointWire)),
    CurrentBreakpoint: breakpointWire(v.currentBreakpoint),
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
}

/** GetDateRanges (getDateRanges$DataActRefresh, SCR :1141-1158): refresh only (fetch at start -1, SCR :1110), from
    OnReady. Returns the Updates_DateRanges records (Id, Order). */
export async function getDateRanges(v: NotificationsVariables): Promise<{ id: string; order: number }[]> {
  const out = await callAction('UBTConnect', 'Notifications/DataActionGetDateRanges', screenVariables(v));
  return osList(out.DateRangesList).map((r) => ({ id: r.Id, order: r.Order }));
}

/** FetchNotifications (fetchNotifications$DataActRefresh, SCR :1159-1176): refresh only, from RefreshNotifications. */
export async function fetchNotifications(v: NotificationsVariables): Promise<FetchNotificationsResult> {
  const out = await callAction('UBTConnect', 'Notifications/DataActionFetchNotifications', screenVariables(v));
  return {
    items: osList(out.UI_NotificationItemList).map(toItem),
    hasUnreadMessages: out.HasUnreadMessages,
    unreadNotificationsCount: osNumber(out.UnreadNotificationsCount),
  };
}

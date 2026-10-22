import { callAction } from '@/api/client/callAction';
import { osList, osNumber, wireList } from '@/legacy/os/os-wire';
import type {
  Breakpoint,
  DateRange,
  FetchUpdatesResult,
  FilterUpdates,
  ScreenVariablesWire,
  UpdateItem,
  UpdateItemWire,
  UpdatesVariables,
} from './types';

const NULL_DATE = '1900-01-01';

/** A domain date ('' = null) as a block input that takes the OutSystems null date (ShareSheet In_UpdateDate). */
export const osDateInput = (date: string): string => date || NULL_DATE;

export const toItem = (w: UpdateItemWire): UpdateItem => ({
  updateItemId: w.UpdateItemId,
  updateItemTypeId: w.UpdateItemTypeId,
  name: w.Name,
  date: !w.Date || w.Date.startsWith(NULL_DATE) ? '' : w.Date,
  genderId: w.GenderId,
  locationString: w.LocationString,
  isRead: w.IsRead,
  hasAccess: w.HasAccess,
  hasShare: w.HasShare,
  householdId: w.HouseholdId,
  parentsNames: w.ParentsNames,
  birthType: w.BirthType,
  memberId: w.MemberId,
});
const itemWire = (i: UpdateItem): UpdateItemWire => ({
  UpdateItemId: i.updateItemId,
  UpdateItemTypeId: i.updateItemTypeId,
  Name: i.name,
  Date: i.date || NULL_DATE,
  GenderId: i.genderId,
  LocationString: i.locationString,
  IsRead: i.isRead,
  HasAccess: i.hasAccess,
  HasShare: i.hasShare,
  HouseholdId: i.householdId,
  ParentsNames: i.parentsNames,
  BirthType: i.birthType,
  MemberId: i.memberId,
});
const dateRangeWire = (d: DateRange) => ({ Range: d.range, From: d.from || NULL_DATE, To: d.to || NULL_DATE });
const breakpointWire = (b: Breakpoint) => ({
  Position: b.position,
  SectionName: b.sectionName,
  BadgeCount: b.badgeCount,
  DateRange: dateRangeWire(b.dateRange),
});
export const filterWire = (f: FilterUpdates) => ({
  Filter_Date: { Date_From: f.dateFrom || NULL_DATE, Date_To: f.dateTo || NULL_DATE },
  Filter_SearchText: f.searchText,
  Filter_UpdateTypeId: f.updateTypeId,
  CountryIds: wireList(f.countryIds),
  LocalitiesIds: wireList(f.localitiesIds),
  Filter_ReadOnly: f.readOnly,
  Sort_ByNewest: f.sortByNewest,
});

/** screenData.variables: OutSystems sends every screen variable with a screen data action (the EventListener objects
    are not serialisable and stay out). Names as compiled (SCR model :45-126). */
function screenVariables(v: UpdatesVariables): ScreenVariablesWire {
  return {
    Filter_UpdateTypeOptions: wireList(
      v.filter_UpdateTypeOptions.map((t) => ({
        Text: t.text,
        Identifier: t.identifier,
        IconId: '',
        IsSelected: t.isSelected,
        Enabled: true,
      })),
    ),
    Filter_BottomSheetId: v.filter_BottomSheetId,
    Filter_Updates: filterWire(v.filter_Updates),
    Filter_DefaultState: filterWire(v.filter_DefaultState),
    HasFiltersApplied: v.hasFiltersApplied,
    ShowMarkAll: v.showMarkAll,
    DateRanges: wireList(v.dateRanges.map(dateRangeWire)),
    isLoading: v.isLoading,
    BottomSheetId_IsLoaded: v.bottomSheetId_IsLoaded,
    BottomSheetId_ShowSubscription: v.bottomSheetId_ShowSubscription,
    Breakpoints: wireList(v.breakpoints.map(breakpointWire)),
    CurrentBreakpoint: breakpointWire(v.currentBreakpoint),
    IsHeaderScrolled: v.isHeaderScrolled,
    ShareableUpdateItem: itemWire(v.shareableUpdateItem),
    IsShareOpen: v.isShareOpen,
    ShareableObjectId: v.shareableObjectId,
    IsToggleSearch: v.isToggleSearch,
    FocusedScrollAnchorId: v.focusedScrollAnchorId,
    CurrentSearchString: v.currentSearchString,
  };
}

/** GetDateRanges (getDateRanges$DataActRefresh, SCR ctrl :1301-1329): refresh only (SCR :1233-1236), from OnReady.
    Returns the Updates_DateRanges ids in the server's order. */
export async function getDateRanges(v: UpdatesVariables): Promise<string[]> {
  const out = await callAction('UBTConnect', 'Updates_SingleList/DataActionGetDateRanges', screenVariables(v));
  return osList(out.DateRangesList).map((r) => r.Id);
}

/** FetchUpdates (fetchUpdates$DataActRefresh, SCR ctrl :1273-1300): refresh only, from RefreshUpdates. */
export async function fetchUpdates(v: UpdatesVariables): Promise<FetchUpdatesResult> {
  const out = await callAction('UBTConnect', 'Updates_SingleList/DataActionFetchUpdates', screenVariables(v));
  return { items: osList(out.UI_UpdateItemList).map(toItem), unreadCount: osNumber(out.UnreadCount) };
}

/** Action_UI_UpdateItem_MarkAsRead (SCR ctrl :1244-1252): UpdateItemId as Long Integer text. */
export async function markAsRead(updateItemId: string): Promise<void> {
  await callAction('UBTConnect', 'ServiceAPIAction_UI_UpdateItem_MarkAsRead', { UpdateItemId: updateItemId });
}
/** Action_UI_UpdateItem_MarkAsUnread (SCR ctrl :1262-1270). */
export async function markAsUnread(updateItemId: string): Promise<void> {
  await callAction('UBTConnect', 'ServiceAPIAction_UI_UpdateItem_MarkAsUnread', { UpdateItemId: updateItemId });
}
/** Action_UI_UpdateItem_MarkAllAsRead (SCR ctrl :1253-1260): the screen's Filter_Updates. */
export async function markAllAsRead(filter: FilterUpdates): Promise<void> {
  await callAction('UBTConnect', 'ServiceAPIAction_UI_UpdateItem_MarkAllAsRead', {
    Filter_Updates: filterWire(filter),
  });
}

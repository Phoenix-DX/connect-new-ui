import type { ActionInputs, ActionOutputs, PathOf } from '@/api/client/callAction';
import { osList, osNumber, wireList } from '@/lib/os-wire';
import type {
  FilterUpdates,
  UpdateBreakpoint,
  UpdateDateRange,
  UpdateItem,
  UpdatesList,
  UpdatesListVariables,
} from './types';

/** OutSystems NullDate() as it travels on the wire. */
const NULL_DATE = '1900-01-01';

type UpdatesListPath = PathOf<'UBTConnect', 'Updates_SingleList/DataActionFetchUpdates'>;

/* The inputs and the outputs of each call, as the contract describes them. */
/** DataActionFetchUpdates of FeedBlock_Updates (HomeFeed). */
export type FeedUpdatesWire = ActionOutputs<PathOf<'UBTConnect', 'FeedBlock_Updates/DataActionFetchUpdates'>>;
/** DataActionFetchUpdates of Updates_SingleList. */
export type UpdatesListWire = ActionOutputs<UpdatesListPath>;
/** DataActionGetDateRanges of Updates_SingleList. */
export type UpdateDateRangesWire = ActionOutputs<PathOf<'UBTConnect', 'Updates_SingleList/DataActionGetDateRanges'>>;
/** The service action Get_UI_UpdateItems_UnreadCount_All. */
export type UnreadCountWire = ActionOutputs<PathOf<'UBTConnect', 'ServiceAPIGet_UI_UpdateItems_UnreadCount_All'>>;
/** The screen variables that Updates_SingleList sends with its two data actions (the same for both). */
export type UpdatesListVariablesWire = ActionInputs<UpdatesListPath>;
/** Connect_Updates_CS UI_UpdateItem as the server sends it (Long Integers as text, Date "yyyy-MM-dd"). */
export type UpdateItemWire = UpdatesListWire['UI_UpdateItemList']['List'][number];
/** Connect_Updates_CS Filter_Updates as the server takes it. */
export type FilterUpdatesWire = ActionInputs<
  PathOf<'UBTConnect', 'ServiceAPIAction_UI_UpdateItem_MarkAllAsRead'>
>['Filter_Updates'];

/** An update item of the home feed: every field. The date stays as the server sends it ("1900-01-01" = null date). */
const toFeedUpdateItem = (w: UpdateItemWire): UpdateItem => ({
  updateItemId: w.UpdateItemId,
  updateItemTypeId: w.UpdateItemTypeId,
  householdId: w.HouseholdId,
  memberId: w.MemberId,
  name: w.Name,
  date: w.Date,
  genderId: w.GenderId,
  locationString: w.LocationString,
  parentsNames: w.ParentsNames,
  birthType: w.BirthType,
  isRead: w.IsRead,
  hasAccess: w.HasAccess,
  hasShare: w.HasShare,
});

/** The update items of the home feed (FeedBlock_Updates), with the list unwrapped. */
export const toFeedUpdateItems = (wire: FeedUpdatesWire): UpdateItem[] =>
  osList(wire.UI_UpdateItemList).map(toFeedUpdateItem);

/** An update item of the update list: every field. The null date (or no date) becomes "". */
export const toUpdateItem = (w: UpdateItemWire): UpdateItem => ({
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

/** The update items of Updates_SingleList (list unwrapped) and the unread count (Integer, as a number). */
export const toUpdatesList = (wire: UpdatesListWire): UpdatesList => ({
  items: osList(wire.UI_UpdateItemList).map(toUpdateItem),
  unreadCount: osNumber(wire.UnreadCount),
});

/** The ids of the date ranges (Updates_DateRanges), in the order of the server. */
export const toUpdateDateRangeIds = (wire: UpdateDateRangesWire): string[] =>
  osList(wire.DateRangesList).map((r) => r.Id);

/** The unread count of all the update items, as the server sends it. */
export const toUnreadCount = (wire: UnreadCountWire): number => wire.UnreadCount;

/** An update item as the server takes it: "" becomes the null date. */
const toUpdateItemWire = (i: UpdateItem): UpdateItemWire => ({
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

const toDateRangeWire = (d: UpdateDateRange) => ({
  Range: d.range,
  From: d.from || NULL_DATE,
  To: d.to || NULL_DATE,
});

const toBreakpointWire = (b: UpdateBreakpoint) => ({
  Position: b.position,
  SectionName: b.sectionName,
  BadgeCount: b.badgeCount,
  DateRange: toDateRangeWire(b.dateRange),
});

/** The filter as the server takes it: "" becomes the null date, the id lists are wrapped. */
export const toFilterUpdatesWire = (f: FilterUpdates): FilterUpdatesWire => ({
  Filter_Date: { Date_From: f.dateFrom || NULL_DATE, Date_To: f.dateTo || NULL_DATE },
  Filter_SearchText: f.searchText,
  Filter_UpdateTypeId: f.updateTypeId,
  CountryIds: wireList(f.countryIds),
  LocalitiesIds: wireList(f.localitiesIds),
  Filter_ReadOnly: f.readOnly,
  Sort_ByNewest: f.sortByNewest,
});

/** The variables of Updates_SingleList as OutSystems sends them with a screen data action (screenData.variables), with
    their OutSystems names. The variables EventListener and EventListenerTarget are objects that do not serialize:
    they are not sent. The tag options have no icon and are enabled. */
export const toUpdatesListVariablesWire = (v: UpdatesListVariables): UpdatesListVariablesWire => ({
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
  Filter_Updates: toFilterUpdatesWire(v.filter_Updates),
  Filter_DefaultState: toFilterUpdatesWire(v.filter_DefaultState),
  HasFiltersApplied: v.hasFiltersApplied,
  ShowMarkAll: v.showMarkAll,
  DateRanges: wireList(v.dateRanges.map(toDateRangeWire)),
  isLoading: v.isLoading,
  BottomSheetId_IsLoaded: v.bottomSheetId_IsLoaded,
  BottomSheetId_ShowSubscription: v.bottomSheetId_ShowSubscription,
  Breakpoints: wireList(v.breakpoints.map(toBreakpointWire)),
  CurrentBreakpoint: toBreakpointWire(v.currentBreakpoint),
  IsHeaderScrolled: v.isHeaderScrolled,
  ShareableUpdateItem: toUpdateItemWire(v.shareableUpdateItem),
  IsShareOpen: v.isShareOpen,
  ShareableObjectId: v.shareableObjectId,
  IsToggleSearch: v.isToggleSearch,
  FocusedScrollAnchorId: v.focusedScrollAnchorId,
  CurrentSearchString: v.currentSearchString,
});

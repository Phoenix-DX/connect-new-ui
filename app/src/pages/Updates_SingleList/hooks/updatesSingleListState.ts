import type {
  FilterUpdates,
  UpdateBreakpoint,
  UpdateDateRange,
  UpdateItem,
  UpdatesListVariables,
  UpdateTypeOption,
} from '@/api/update';
import { Choice } from '@/lib/ubtConnect/staticEntities';
import { Connect_UpdateTypeId } from '@/lib/ubtConnectLibrary/staticEntities';
import { Updates_DateRanges } from '@/pages/Updates_SingleList/components/staticEntities';

/** The variables of the Updates_SingleList screen and the client actions that it calls (the Directory_Updates user
    client actions and the screen's own). Pure: the flows are in useUpdatesSingleList.
    @origin UBTConnect.Directory_Updates.Updates_SingleList */

/** FetchUpdates data fetch status, as the List shows it (`list-loading` until it succeeds). */
export type FetchStatus = 'notFetched' | 'ok' | 'error';

/** The screen variables (the inputs of its two data actions) and the outputs of FetchUpdates. */
export interface UpdatesSingleListState extends UpdatesListVariables {
  /** FetchUpdates.UI_UpdateItemList (skeleton rows while loading). */
  items: UpdateItem[];
  unreadCount: number;
  fetchStatus: FetchStatus;
  isDataFetched: boolean;
  /** GetDateRanges failed (offline): the runtime list key of that capture. */
  dateRangesFailed: boolean;
  /** Bumped by SetupScrollListener: the scroll-end correction runs after the next commit. */
  scrollListenerSeq: number;
}

/** An assignment of one or more screen variables. */
export type UpdatesSingleListPatch = Partial<UpdatesSingleListState>;

/** The reducer of the screen: each flow step assigns variables, as the OutSystems Assign nodes do. */
export const updatesSingleListReducer = (
  state: UpdatesSingleListState,
  patch: UpdatesSingleListPatch,
): UpdatesSingleListState => ({ ...state, ...patch });

const EMPTY_FILTER: FilterUpdates = {
  dateFrom: '',
  dateTo: '',
  searchText: '',
  updateTypeId: '',
  countryIds: [],
  localitiesIds: [],
  readOnly: '',
  sortByNewest: '',
};
const EMPTY_ITEM: UpdateItem = {
  updateItemId: '0',
  updateItemTypeId: '',
  name: '',
  date: '',
  genderId: '',
  locationString: '',
  isRead: false,
  hasAccess: false,
  hasShare: false,
  householdId: '0',
  parentsNames: '',
  birthType: '',
  memberId: '',
};

/** UpdateFilterTypesOptions: All (null identifier, selected), Birth, Marriage, Taken. */
const FILTER_TYPE_OPTIONS: UpdateTypeOption[] = [
  { text: 'All', identifier: '', isSelected: true },
  { text: 'Birth', identifier: Connect_UpdateTypeId.Birth, isSelected: false },
  { text: 'Marriage', identifier: Connect_UpdateTypeId.Marriage, isSelected: false },
  { text: 'Taken', identifier: Connect_UpdateTypeId.Taken, isSelected: false },
];

const pad = (n: number) => String(n).padStart(2, '0');
/** A local Date as an OutSystems Date "yyyy-MM-dd". */
export const osDateOf = (d: Date): string => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const today = (now: Date) => new Date(now.getFullYear(), now.getMonth(), now.getDate());
const addDays = (d: Date, n: number) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);
const addMonths = (d: Date, n: number) => new Date(d.getFullYear(), d.getMonth() + n, d.getDate());
/** OutSystems Date text → local Date ('' = null date 1900-01-01). */
const dateOf = (s: string) => {
  if (!s) return new Date(1900, 0, 1);
  const [y = 1900, m = 1, d = 1] = s.split('-').map(Number);
  return new Date(y, m - 1, d);
};

export const EMPTY_DATE_RANGE: UpdateDateRange = { range: '', from: '', to: '' };
export const EMPTY_BREAKPOINT: UpdateBreakpoint = {
  position: 0,
  sectionName: '',
  badgeCount: 0,
  dateRange: EMPTY_DATE_RANGE,
};

/** The screen variables with their defaults, then ScreenEvent_OnInitialize of a new visit: CurrentBreakpoint
    {0, Today, 0} and UpdateFilterTypesOptions. */
export const INITIAL_UPDATES_SINGLE_LIST_STATE: UpdatesSingleListState = {
  filter_UpdateTypeOptions: FILTER_TYPE_OPTIONS,
  filter_BottomSheetId: '',
  filter_Updates: EMPTY_FILTER,
  filter_DefaultState: EMPTY_FILTER,
  hasFiltersApplied: false,
  showMarkAll: false,
  dateRanges: [],
  isLoading: false,
  bottomSheetId_IsLoaded: false,
  bottomSheetId_ShowSubscription: false,
  breakpoints: [],
  currentBreakpoint: { ...EMPTY_BREAKPOINT, sectionName: Updates_DateRanges.Today },
  isHeaderScrolled: false,
  shareableUpdateItem: EMPTY_ITEM,
  isShareOpen: false,
  shareableObjectId: '',
  isToggleSearch: false,
  focusedScrollAnchorId: '',
  currentSearchString: '',
  items: [],
  unreadCount: 0,
  fetchStatus: 'notFetched',
  isDataFetched: false,
  dateRangesFailed: false,
  scrollListenerSeq: 0,
};

/** ScreenEvent_OnInitialize of a restored view: the updates swiped in the carousel (the preload object
    EntitiesCarousel_SwippedItems: rows with ListPosition and EntityItemId) become read; UnreadCount and the BadgeCount
    of their breakpoint go down by one. Any other preload object leaves the saved variables as they are. */
export function restoreUpdatesSingleListState(saved: UpdatesSingleListState, preload: unknown): UpdatesSingleListState {
  if (!Array.isArray(preload)) return saved;
  const items = [...saved.items];
  const breakpoints = [...saved.breakpoints];
  let unreadCount = saved.unreadCount;
  for (const row of preload as { ListPosition?: number; EntityItemId?: unknown }[]) {
    const pos = row.ListPosition ?? -1;
    const item = items[pos];
    if (pos < 0 || !item || String(row.EntityItemId) !== item.updateItemId) continue;
    unreadCount -= 1;
    items[pos] = { ...item, isRead: true };
    const b = breakpoints.findIndex((p) => item.date >= p.dateRange.from && item.date <= p.dateRange.to);
    const bp = breakpoints[b];
    if (bp) breakpoints[b] = { ...bp, badgeCount: bp.badgeCount - 1 };
  }
  return { ...saved, items, breakpoints, unreadCount };
}

const NULL_DATE = '1900-01-01';

/** A domain date ('' = null) as a block input that takes the OutSystems null date (ShareSheet In_UpdateDate). */
export const osDateInput = (date: string): string => date || NULL_DATE;

/** The runtime key of the List rows, as captured: 478 after FetchUpdates, 129 after a failed GetDateRanges, 106 while
    loading. */
export const listKeyOf = (state: Pick<UpdatesSingleListState, 'fetchStatus' | 'dateRangesFailed'>): string =>
  state.fetchStatus === 'ok' ? '478' : state.dateRangesFailed ? '129' : '106';

/** DiffDays(Date, CurrDateTime): calendar days from the date to now (runtime OutSystems.js `Y(e,t,864e5,!0)`). */
export function diffDays(date: string, now = new Date()): number {
  return Math.round((today(now).getTime() - dateOf(date).getTime()) / 86400000);
}

/** DateToText as captured (`data-plus-date="13/10/2026"`, null date "01/01/1900"). */
export function dateToText(date: string): string {
  const d = dateOf(date);
  return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()}`;
}
/** TextToDate of a DateToText value ("dd/MM/yyyy" → "yyyy-MM-dd"; anything else → null date ''). */
export function textToDate(text: string | null): string {
  const m = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(text ?? '');
  return m ? `${m[3]}-${m[2]}-${m[1]}` : '';
}

/** Directory_Updates_MinDateToShow (UC): null date when Directory_Updates_MonthsToShow is 0, else CurrDate − months. */
export function directory_Updates_MinDateToShow(monthsToShow: number, now = new Date()): string {
  return monthsToShow === 0 ? '' : osDateOf(addMonths(today(now), -monthsToShow));
}

/** Directory_Updates_AugmentDateRanges (UC): Today [today, today], Last 7 Days [−7, −1], Last 30 Days [−30, −8],
    Older [MinDateToShow, −31]; other ids skipped. */
export function directory_Updates_AugmentDateRanges(
  ids: string[],
  monthsToShow: number,
  now = new Date(),
): UpdateDateRange[] {
  const t = today(now);
  const out: UpdateDateRange[] = [];
  for (const id of ids) {
    if (id === Updates_DateRanges.Today) out.push({ range: id, from: osDateOf(t), to: osDateOf(t) });
    else if (id === Updates_DateRanges.Last7Days)
      out.push({ range: id, from: osDateOf(addDays(t, -7)), to: osDateOf(addDays(t, -1)) });
    else if (id === Updates_DateRanges.Last30Days)
      out.push({ range: id, from: osDateOf(addDays(t, -30)), to: osDateOf(addDays(t, -8)) });
    else if (id === Updates_DateRanges.Older)
      out.push({ range: id, from: directory_Updates_MinDateToShow(monthsToShow, now), to: osDateOf(addDays(t, -31)) });
  }
  return out;
}

/* Date >= From and Date <= To ('' From is the null date: every date is after it). */
const inRange = (item: UpdateItem, r: UpdateDateRange) => item.date >= r.from && item.date <= r.to;

/** Directory_Updates_GetBreakpoints (UC): per range with items, Position = first index, SectionName = Range,
    BadgeCount = unread items of the range; sorted by Position. Empty without updates. */
export function directory_Updates_GetBreakpoints(
  items: UpdateItem[],
  dateRanges: UpdateDateRange[],
): UpdateBreakpoint[] {
  if (items.length === 0) return [];
  const out: UpdateBreakpoint[] = [];
  for (const r of dateRanges) {
    const inR = items.filter((i) => inRange(i, r));
    if (inR.length === 0) continue;
    out.push({
      position: items.findIndex((i) => inRange(i, r)),
      sectionName: r.range,
      badgeCount: inR.filter((i) => !i.isRead).length,
      dateRange: r,
    });
  }
  return out.sort((a, b) => a.position - b.position);
}

/** Directory_Updates_GetListBreakpoint (UC): the breakpoint whose boundary lies between the previous and the current
    update date (swapped when ascending); empty when either date is null or no rule matches. */
export function directory_Updates_GetListBreakpoint(
  breakpoints: UpdateBreakpoint[],
  currentUpdateDate: string,
  previousUpdateDate: string,
  isAscending: boolean,
  now = new Date(),
): UpdateBreakpoint {
  if (currentUpdateDate === '' || previousUpdateDate === '') return EMPTY_BREAKPOINT;
  const [cur, prev] = isAscending ? [previousUpdateDate, currentUpdateDate] : [currentUpdateDate, previousUpdateDate];
  const dc = diffDays(cur, now);
  const dp = diffDays(prev, now);
  let id: string;
  if (dc > 30 && dp <= 30) id = isAscending ? Updates_DateRanges.Last30Days : Updates_DateRanges.Older;
  else if (dc > 7 && dp <= 7) id = isAscending ? Updates_DateRanges.Last7Days : Updates_DateRanges.Last30Days;
  else if (dc >= 1 && dp < 1) id = isAscending ? Updates_DateRanges.Today : Updates_DateRanges.Last7Days;
  else if (dc === 0 && dp === 0 && !isAscending) id = Updates_DateRanges.Today;
  else if (dc > 30 && dp > 30 && isAscending) id = Updates_DateRanges.Older;
  else return EMPTY_BREAKPOINT;
  return breakpoints.find((b) => b.sectionName === id) ?? EMPTY_BREAKPOINT;
}

/** Directory_Updates_GetUpdatedBreakpoints (UC): ChangedBreakpoint = the last breakpoint at or before SelectedPosition,
    its BadgeCount recounted from the unread items of its range, written back into UpdatedBreakpoints. */
export function directory_Updates_GetUpdatedBreakpoints(
  items: UpdateItem[],
  selectedPosition: number,
  dateRanges: UpdateDateRange[],
  breakpoints: UpdateBreakpoint[],
): { changedBreakpoint: UpdateBreakpoint; updatedBreakpoints: UpdateBreakpoint[] } {
  let changed = EMPTY_BREAKPOINT;
  for (const b of breakpoints) if (selectedPosition >= b.position) changed = b;
  const updated = [...breakpoints];
  const idx = updated.findIndex((b) => b.sectionName === changed.sectionName);
  if (idx !== -1) {
    const range = dateRanges.find((r) => r.range === changed.sectionName);
    if (range) {
      changed = { ...changed, badgeCount: items.filter((i) => inRange(i, range) && !i.isRead).length };
      updated[idx] = changed;
    }
  }
  return { changedBreakpoint: changed, updatedBreakpoints: updated };
}

/** Directory_Updates_MarkAllAsRead (UC): every item IsRead True. */
export const directory_Updates_MarkAllAsRead = (items: UpdateItem[]): UpdateItem[] =>
  items.map((i) => (i.isRead ? i : { ...i, isRead: true }));

/** GetSkeleton_UI_UpdatesContent (UC): "Example & Example", Taken, NewDate(1, 1, 1901) (an invalid date: the null
    date, captured "01/01/1900"), "Example, Example"; other attributes default. */
const skeletonItem = (): UpdateItem => ({
  updateItemId: '0',
  updateItemTypeId: Connect_UpdateTypeId.Taken,
  name: 'Example & Example',
  date: '',
  genderId: '',
  locationString: 'Example, Example',
  isRead: false,
  hasAccess: false,
  hasShare: false,
  householdId: '0',
  parentsNames: '',
  birthType: '',
  memberId: '',
});
/** GetSkeletonList_UI_Updates(ListLength) (UC). */
export const getSkeletonList_UI_Updates = (listLength: number): UpdateItem[] =>
  Array.from({ length: listLength }, skeletonItem);

/** SetDefaultFilters (screen action): dates Older.From .. Today.To when either is null, ReadOnly None, Sort Yes,
    CountryIds / LocalitiesIds [None] when empty; Filter_DefaultState = Filter_Updates while its CountryIds is empty. */
export function setDefaultFilters(
  f: FilterUpdates,
  defaultState: FilterUpdates,
  dateRanges: UpdateDateRange[],
): { filter: FilterUpdates; defaultState: FilterUpdates } {
  const next = { ...f };
  if (f.dateFrom === '' || f.dateTo === '') {
    next.dateFrom = dateRanges.find((r) => r.range === Updates_DateRanges.Older)?.from ?? '';
    next.dateTo = dateRanges.find((r) => r.range === Updates_DateRanges.Today)?.to ?? '';
  }
  if (f.readOnly === '') next.readOnly = Choice.None;
  if (f.sortByNewest === '') next.sortByNewest = Choice.Yes;
  if (f.countryIds.length === 0) next.countryIds = [Choice.None];
  if (f.localitiesIds.length === 0) next.localitiesIds = [Choice.None];
  return { filter: next, defaultState: defaultState.countryIds.length === 0 ? next : defaultState };
}

/** Equality of two Filter_Updates records (Handler_ApplyFilters "No changes?"). */
export const sameFilter = (a: FilterUpdates, b: FilterUpdates): boolean => JSON.stringify(a) === JSON.stringify(b);

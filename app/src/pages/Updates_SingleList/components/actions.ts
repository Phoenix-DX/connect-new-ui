import { Choice } from '@/shared/UBTConnect/lib/staticEntities';
import { Connect_UpdateTypeId } from '@/shared/UBTConnectLibrary/lib/staticEntities';
import type { Breakpoint, DateRange, FilterUpdates, UpdateItem } from '@/pages/Updates_SingleList/types';
import { Updates_DateRanges } from './staticEntities';

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

export const EMPTY_DATE_RANGE: DateRange = { range: '', from: '', to: '' };
export const EMPTY_BREAKPOINT: Breakpoint = {
  position: 0,
  sectionName: '',
  badgeCount: 0,
  dateRange: EMPTY_DATE_RANGE,
};

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
): DateRange[] {
  const t = today(now);
  const out: DateRange[] = [];
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
const inRange = (item: UpdateItem, r: DateRange) => item.date >= r.from && item.date <= r.to;

/** Directory_Updates_GetBreakpoints (UC): per range with items, Position = first index, SectionName = Range,
    BadgeCount = unread items of the range; sorted by Position. Empty without updates. */
export function directory_Updates_GetBreakpoints(items: UpdateItem[], dateRanges: DateRange[]): Breakpoint[] {
  if (items.length === 0) return [];
  const out: Breakpoint[] = [];
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
  breakpoints: Breakpoint[],
  currentUpdateDate: string,
  previousUpdateDate: string,
  isAscending: boolean,
  now = new Date(),
): Breakpoint {
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
  dateRanges: DateRange[],
  breakpoints: Breakpoint[],
): { changedBreakpoint: Breakpoint; updatedBreakpoints: Breakpoint[] } {
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

/** SetDefaultFilters (SCR ctrl :1477-1565): dates Older.From .. Today.To when either is null, ReadOnly None, Sort Yes,
    CountryIds / LocalitiesIds [None] when empty; Filter_DefaultState = Filter_Updates while its CountryIds is empty. */
export function setDefaultFilters(
  f: FilterUpdates,
  defaultState: FilterUpdates,
  dateRanges: DateRange[],
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

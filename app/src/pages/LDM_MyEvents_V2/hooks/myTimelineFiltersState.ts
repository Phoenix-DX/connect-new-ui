import type { EventCalendarFiltersAsText, TimelineLocalityFilter } from '@/api/event';
import { addDays, addMonths, toOsDate } from './ldmMyEventsState';

/* The state and the client actions of the timeline filter popup (Connect2_OrbitMobile_MUI.LDM_Blocks.MyTimeline_Filters,
   controller :832-1834; BoundariesCheck of Connect2_OrbitMobile_MUI.controller.js :652-745). Pure: no React and no
   call. Dates are OutSystems Dates as "YYYY-MM-DD" text. */

/** NullDate() and the DateTime default of a Date attribute. */
export const NULL_DATE = '1900-01-01';

/** The block variable AllLocalities: an EventLocalitiesFilter record with its defaults (Connect2_OrbitMobile_BL.model.js
    :1084-1090). No action assigns it: the "All Localities" choice of the list has this IdAsText. */
export const ALL_LOCALITIES: TimelineLocalityFilter = {
  IdAsText: 'AllLocalities',
  Name: 'All Localities',
  IsSelected: true,
};

/** OnReady.MarginThreshold: the gap in px between the locality input and the locality list. */
const MARGIN_THRESHOLD = 5;

/** DateControl (Connect2_OrbitMobile_MUI): the value and the limits of a date input. */
export interface DateControl {
  SelectedDate: string;
  MinDate: string;
  MaxDate: string;
}

/** The block variables. `selectedFilters` is the input In_SelectedFilters, which the actions change in the block. */
export interface MyTimelineFiltersState {
  selectedFilters: EventCalendarFiltersAsText;
  selectedLocalities: TimelineLocalityFilter[];
  listTopPosition: number;
  listHeight: number;
  isShowList: boolean;
  isReady: boolean;
  isToReset: boolean;
  fromDate: DateControl;
  toDate: DateControl;
}

const EMPTY_DATE: DateControl = { SelectedDate: NULL_DATE, MinDate: NULL_DATE, MaxDate: NULL_DATE };

/** The variables before OnReady: their defaults and the input. */
export const initialMyTimelineFiltersState = (
  inSelectedFilters: EventCalendarFiltersAsText,
): MyTimelineFiltersState => ({
  selectedFilters: inSelectedFilters,
  selectedLocalities: [],
  listTopPosition: 0,
  listHeight: 0,
  isShowList: false,
  isReady: false,
  isToReset: false,
  fromDate: EMPTY_DATE,
  toDate: EMPTY_DATE,
});

const parseOsDate = (date: string): Date => {
  const [y, m, d] = date.split('-').map(Number);
  return new Date(y ?? 1900, (m ?? 1) - 1, d ?? 1);
};

/** AddMonths(date, n) on a "YYYY-MM-DD" date. */
const addOsMonths = (date: string, months: number): string => toOsDate(addMonths(parseOsDate(date), months));

/** BoundariesCheck(In_Date) → Out_FixedDate (controller.js :652-745): broken limits (MaxDate before MinDate) set
    SelectedDate and MaxDate to MinDate; a date below MinDate becomes MinDate; above MaxDate becomes MaxDate. */
export function boundariesCheck(date: DateControl): DateControl {
  if (date.MaxDate < date.MinDate) return { SelectedDate: date.MinDate, MinDate: date.MinDate, MaxDate: date.MinDate };
  if (date.SelectedDate >= date.MinDate && date.SelectedDate <= date.MaxDate) return date;
  if (date.SelectedDate < date.MinDate) return { ...date, SelectedDate: date.MinDate };
  return { ...date, SelectedDate: date.MaxDate };
}

/** SetDates_FromDate(In_FromDate) (:1584-1626): MaxDate 7 days after today, MinDate 10 years before MaxDate,
    SelectedDate In_FromDate (NullDate: In_DefaultDateRangeInMonths months before today), then BoundariesCheck. */
function setDatesFromDate(
  state: MyTimelineFiltersState,
  inFromDate: string,
  today: Date,
  defaultDateRangeInMonths: number,
): MyTimelineFiltersState {
  const maxDate = toOsDate(addDays(today, 7));
  const fromDate = boundariesCheck({
    MaxDate: maxDate,
    MinDate: addOsMonths(maxDate, -120),
    SelectedDate: inFromDate === NULL_DATE ? toOsDate(addMonths(today, -defaultDateRangeInMonths)) : inFromDate,
  });
  return { ...state, fromDate };
}

/** SetDates_ToDate(In_ToDate) (:941-983): MinDate FromDate.SelectedDate, MaxDate In_DefaultDateRangeInMonths months
    and 7 days after it, SelectedDate In_ToDate (NullDate: MaxDate), then BoundariesCheck. */
function setDatesToDate(
  state: MyTimelineFiltersState,
  inToDate: string,
  defaultDateRangeInMonths: number,
): MyTimelineFiltersState {
  const minDate = state.fromDate.SelectedDate;
  const maxDate = toOsDate(addDays(parseOsDate(addOsMonths(minDate, defaultDateRangeInMonths)), 7));
  const toDate = boundariesCheck({
    MinDate: minDate,
    MaxDate: maxDate,
    SelectedDate: inToDate === NULL_DATE ? maxDate : inToDate,
  });
  return { ...state, toDate };
}

/** SetDates(In_FromDate, In_ToDate): SetDates_FromDate, then SetDates_ToDate. */
const setDates = (
  state: MyTimelineFiltersState,
  inFromDate: string,
  inToDate: string,
  today: Date,
  defaultDateRangeInMonths: number,
): MyTimelineFiltersState =>
  setDatesToDate(
    setDatesFromDate(state, inFromDate, today, defaultDateRangeInMonths),
    inToDate,
    defaultDateRangeInMonths,
  );

/** BypassClear_ToDate (:1020-1043): SetDates_ToDate(AddMonths(FromDate.SelectedDate, In_DefaultDateRangeInMonths)). */
export const bypassClearToDate = (
  state: MyTimelineFiltersState,
  defaultDateRangeInMonths: number,
): MyTimelineFiltersState =>
  setDatesToDate(state, addOsMonths(state.fromDate.SelectedDate, defaultDateRangeInMonths), defaultDateRangeInMonths);

/** BypassClear_FromDate (:993-1019): SetDates_FromDate(In_DefaultDateRangeInMonths months before today), then
    BypassClear_ToDate. */
export const bypassClearFromDate = (
  state: MyTimelineFiltersState,
  today: Date,
  defaultDateRangeInMonths: number,
): MyTimelineFiltersState =>
  bypassClearToDate(
    setDatesFromDate(state, toOsDate(addMonths(today, -defaultDateRangeInMonths)), today, defaultDateRangeInMonths),
    defaultDateRangeInMonths,
  );

/** The result of OnChange_DateInputs: the new state, and the BypassClear action that the JavaScript node
    (SetFromDate / SetToDate) runs 10 ms later when the input was cleared. */
interface DateInputChange {
  state: MyTimelineFiltersState;
  bypassClear: 'from' | 'to' | null;
}

/** OnChange_DateInputs(In_IsFrom) (:1187-1268), after the input wrote its SelectedDate: IsToReset False. A cleared
    date (NullDate) schedules BypassClear_FromDate / BypassClear_ToDate. Else BoundariesCheck of the changed date; a
    changed From date also runs SetDates_ToDate(ToDate.SelectedDate). */
export function onChangeDateInputs(
  state: MyTimelineFiltersState,
  isFrom: boolean,
  defaultDateRangeInMonths: number,
): DateInputChange {
  const next = { ...state, isToReset: false };
  if (isFrom) {
    if (next.fromDate.SelectedDate === NULL_DATE) return { state: next, bypassClear: 'from' };
    const checked = { ...next, fromDate: boundariesCheck(next.fromDate) };
    return { state: setDatesToDate(checked, checked.toDate.SelectedDate, defaultDateRangeInMonths), bypassClear: null };
  }
  if (next.toDate.SelectedDate === NULL_DATE) return { state: next, bypassClear: 'to' };
  return { state: { ...next, toDate: boundariesCheck(next.toDate) }, bypassClear: null };
}

/** The date of an input: the value of the date input, NullDate when it is empty. */
export const dateInputWritten = (
  state: MyTimelineFiltersState,
  isFrom: boolean,
  value: string,
): MyTimelineFiltersState => {
  const SelectedDate = value === '' ? NULL_DATE : value;
  return isFrom
    ? { ...state, fromDate: { ...state.fromDate, SelectedDate } }
    : { ...state, toDate: { ...state.toDate, SelectedDate } };
};

/** The value that a Date input shows: empty for NullDate. */
export const dateInputValue = (date: string): string => (date === NULL_DATE ? '' : date);

const withLocalities = (
  state: MyTimelineFiltersState,
  Localities: TimelineLocalityFilter[],
): MyTimelineFiltersState => ({
  ...state,
  selectedFilters: { ...state.selectedFilters, Localities },
});

/** PersistLocalities (:1665-1690): SelectedLocalities = the selected localities of In_SelectedFilters. */
const persistLocalities = (state: MyTimelineFiltersState): MyTimelineFiltersState => ({
  ...state,
  selectedLocalities: state.selectedFilters.Localities.filter((p) => p.IsSelected),
});

/** Toggle_IsShowList (:1636-1664): only when IsReady. */
export const toggleIsShowList = (state: MyTimelineFiltersState): MyTimelineFiltersState =>
  state.isReady ? { ...state, isShowList: !state.isShowList } : state;

/** UnselectAllButOne(In_ChosenLocality) (:1392-1441): the chosen locality takes its IsSelected, every other one is
    unselected. */
const unselectAllButOne = (state: MyTimelineFiltersState, chosen: TimelineLocalityFilter): MyTimelineFiltersState =>
  withLocalities(
    state,
    state.selectedFilters.Localities.map((p) => ({
      ...p,
      IsSelected: p.IdAsText === chosen.IdAsText ? chosen.IsSelected : false,
    })),
  );

/** UnselectOne(In_ChosenLocality) (:865-899): the first locality with its IdAsText is unselected. */
function unselectOne(state: MyTimelineFiltersState, chosen: TimelineLocalityFilter): MyTimelineFiltersState {
  const position = state.selectedFilters.Localities.findIndex((p) => p.IdAsText === chosen.IdAsText);
  if (position === -1) return state;
  return withLocalities(
    state,
    state.selectedFilters.Localities.map((p, i) => (i === position ? { ...p, IsSelected: false } : p)),
  );
}

/** OnClick_ListItem(In_ClickedLocality, CurrentRowNumber) (:1044-1112):
    - "All Localities": selected, every other locality unselected;
    - another locality: the last selected one stays selected; else its IsSelected changes and "All Localities" is
      unselected. */
export function onClickListItem(
  state: MyTimelineFiltersState,
  clicked: TimelineLocalityFilter,
  currentRowNumber: number,
): MyTimelineFiltersState {
  if (clicked.IdAsText === ALL_LOCALITIES.IdAsText) return unselectAllButOne(state, { ...clicked, IsSelected: true });
  if (clicked.IsSelected && !(state.selectedFilters.Localities.filter((p) => p.IsSelected).length > 1)) return state;
  const IsSelected = !clicked.IsSelected;
  const toggled = withLocalities(
    state,
    state.selectedFilters.Localities.map((p, i) => (i === currentRowNumber ? { ...p, IsSelected } : p)),
  );
  return unselectOne(toggled, ALL_LOCALITIES);
}

/** SelectLocalities (:910-940): IsToReset False, PersistLocalities, Toggle_IsShowList. */
export const selectLocalities = (state: MyTimelineFiltersState): MyTimelineFiltersState =>
  toggleIsShowList(persistLocalities({ ...state, isToReset: false }));

/** ClearFilters (:1452-1506), when IsReady: IsToReset True, SetDates(NullDate, NullDate), UnselectAllButOne(AllLocalities),
    PersistLocalities. The caller raises ResetFilters with `resetFiltersOf`. */
export const clearFilters = (
  state: MyTimelineFiltersState,
  today: Date,
  defaultDateRangeInMonths: number,
): MyTimelineFiltersState =>
  persistLocalities(
    unselectAllButOne(
      setDates({ ...state, isToReset: true }, NULL_DATE, NULL_DATE, today, defaultDateRangeInMonths),
      ALL_LOCALITIES,
    ),
  );

/** The record of the ResetFilters event of ClearFilters: In_SelectedFilters.Localities and the selected dates. */
export const resetFiltersOf = (state: MyTimelineFiltersState): EventCalendarFiltersAsText => ({
  Localities: state.selectedFilters.Localities,
  FromDate: state.fromDate.SelectedDate,
  ToDate: state.toDate.SelectedDate,
});

/** The record of the Filter event of OnFilter (:1131-1186): ListDistinct of In_SelectedFilters.Localities (records
    with the same attribute values count once) and the selected dates. Its ListAny_AllLocalities result is not used. */
export function filterOf(state: MyTimelineFiltersState): EventCalendarFiltersAsText {
  const seen = new Set<string>();
  const Localities = state.selectedFilters.Localities.filter((p) => {
    const key = JSON.stringify([p.IdAsText, p.Name, p.IsSelected]);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
  return { Localities, FromDate: state.fromDate.SelectedDate, ToDate: state.toDate.SelectedDate };
}

/** OnReady (:1286-1356) without its JavaScript nodes: IsReady False, SetDates(In_SelectedFilters.FromDate,
    In_SelectedFilters.ToDate), PersistLocalities. A view restored from the cache also sets IsShowList False: the
    block mounts with the popup, so IsShowList is already False. */
export const onReadyDates = (
  state: MyTimelineFiltersState,
  today: Date,
  defaultDateRangeInMonths: number,
): MyTimelineFiltersState =>
  persistLocalities(
    setDates(
      { ...state, isReady: false },
      state.selectedFilters.FromDate,
      state.selectedFilters.ToDate,
      today,
      defaultDateRangeInMonths,
    ),
  );

/** The end of OnReady: ListTopPosition = Out_TopPosition + MarginThreshold, ListHeight = Out_Height - MarginThreshold * 2,
    IsReady True. */
export const onReadyPosition = (
  state: MyTimelineFiltersState,
  position: { topPosition: number; height: number },
): MyTimelineFiltersState => ({
  ...state,
  listTopPosition: position.topPosition + MARGIN_THRESHOLD,
  listHeight: position.height - MARGIN_THRESHOLD * 2,
  isReady: true,
});

/** The text of a selected locality in the locality input: its Name, then ", " unless it is the last one. */
export const selectedLocalityText = (name: string, rowNumber: number, length: number): string =>
  name + (rowNumber < length - 1 && length > 1 ? ', ' : '');

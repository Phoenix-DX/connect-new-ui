import type {
  EventCalendar,
  EventCalendarFiltersAsText,
  MyTimelineCallInputs,
  MyTimelineData,
  TimelineEventGroup,
} from '@/api/event';
import type {
  ContactByPhonePopupData,
  ContactPopupData,
  UI_ContactByMessage_WrapperData,
} from '@/lib/ubtConnectUtils/structures';

/* The state, the reducer and the client actions of the "My Timeline" block. Pure: no React and no call. */

/** EventView static entity (Connect2_OrbitMobile_MUI): CurrentEventView defaults to MyTimeline and no action assigns
    it, so the Month, Day and Agenda views of the block are unreachable. */
const EventView_MyTimeline = 1;

/** DefaultDateRangeInMonths: the months of one window of past events. */
export const DEFAULT_DATE_RANGE_IN_MONTHS = 24;

/** OnScrollEnding_MyTimeline.MaxAgeDaysFetchThreshold: no older window when FromDate is more days back than this. */
const MAX_AGE_DAYS_FETCH_THRESHOLD = 7300;

/** The block variables that the view reads, and the fetch error of GetEventsForMyTimeline. */
export interface LdmMyEventsState {
  pastEventsData: TimelineEventGroup[];
  upcomingEventsData: EventCalendar[];
  pastEventFilters: EventCalendarFiltersAsText;
  isFetchingMyTimeline: boolean;
  isFiltering: boolean;
  /** GetEventsForMyTimeline.HasFetchError. */
  hasFetchError: boolean;
  contactByPhoneData: ContactByPhonePopupData;
  /** ContactByMessagePopupData.UI_ContactByMessage_WrapperData (its CountryName is not read). */
  contactByMessageData: UI_ContactByMessage_WrapperData;
}

/** The state changes of the block. */
type LdmMyEventsAction =
  /** GetMyTimelineData starts: IsFetchingMyTimeline True. */
  | { type: 'fetchStarted' }
  /** The refresh of GetEventsForMyTimeline failed. */
  | { type: 'fetchFailed' }
  /** OnAfterFetch_GetEventsForMyTimeline: while filtering the answer replaces the lists, else it is appended. */
  | { type: 'fetched'; data: MyTimelineData }
  /** IsFetchingMyTimeline False. */
  | { type: 'fetchEnded' }
  /** IncrementMyTimelineDates: the past-event window moves back by DefaultDateRangeInMonths. */
  | { type: 'olderWindowSet' }
  /** OnHandle_MyTimelineFilter with new filters: both lists cleared, IsFiltering True, PastEventFilters = the filters. */
  | { type: 'filterApplied'; filters: EventCalendarFiltersAsText }
  /** OnHandle_ResetFilters: both lists cleared, IsFiltering False, PastEventFilters = the reset filters. */
  | { type: 'filtersReset'; filters: EventCalendarFiltersAsText }
  | { type: 'phonePopupOpened'; data: ContactByPhonePopupData }
  | { type: 'phonePopupClosed' }
  | { type: 'messagePopupOpened'; data: UI_ContactByMessage_WrapperData }
  | { type: 'messagePopupClosed' };

const pad = (n: number) => String(n).padStart(2, '0');

/** A local date as "YYYY-MM-DD" (an OutSystems Date). */
export const toOsDate = (d: Date): string => `${String(d.getFullYear())}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;

/** AddMonths(date, n) of OutSystems: the same day n months later, clamped to the last day of the month. */
export function addMonths(date: Date, months: number): Date {
  const target = new Date(date.getFullYear(), date.getMonth() + months, 1);
  const last = new Date(target.getFullYear(), target.getMonth() + 1, 0).getDate();
  return new Date(target.getFullYear(), target.getMonth(), Math.min(date.getDate(), last));
}

/** AddDays(date, n). */
export const addDays = (date: Date, days: number): Date =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate() + days);

/** DiffDays(from, to) of a "YYYY-MM-DD" date and a date. */
export function diffDays(from: string, to: Date): number {
  const [y, m, d] = from.split('-').map(Number);
  const a = Date.UTC(y ?? 1900, (m ?? 1) - 1, d ?? 1);
  const b = Date.UTC(to.getFullYear(), to.getMonth(), to.getDate());
  return Math.round((b - a) / 86_400_000);
}

/** The variables after OnInitialize of a new view ("Set Filters"): PastEventFilters from DefaultDateRangeInMonths
    months back to 7 days after today. */
export function initialLdmMyEventsState(today: Date): LdmMyEventsState {
  return {
    pastEventsData: [],
    upcomingEventsData: [],
    pastEventFilters: {
      FromDate: toOsDate(addMonths(today, -DEFAULT_DATE_RANGE_IN_MONTHS)),
      ToDate: toOsDate(addDays(today, 7)),
      Localities: [],
    },
    isFetchingMyTimeline: false,
    isFiltering: false,
    hasFetchError: false,
    contactByPhoneData: {},
    contactByMessageData: {},
  };
}

/** The popup data with ShowPopup False. */
const closed = (popup: ContactPopupData | undefined): ContactPopupData => ({ ...popup, ShowPopup: false });

/** OnInitialize of a view that the view cache restored: both contact popups closed. */
export const restoreLdmMyEventsState = (saved: LdmMyEventsState): LdmMyEventsState => ({
  ...saved,
  contactByPhoneData: {
    ...saved.contactByPhoneData,
    ContactPopupData: closed(saved.contactByPhoneData.ContactPopupData),
  },
  contactByMessageData: {
    ...saved.contactByMessageData,
    ContactPopupData: closed(saved.contactByMessageData.ContactPopupData),
  },
});

/** IncrementMyTimelineDates: the new window ends where the old one started and starts DefaultDateRangeInMonths
    months earlier. */
export function olderPastEventFilters(filters: EventCalendarFiltersAsText): EventCalendarFiltersAsText {
  const [y, m, d] = filters.FromDate.split('-').map(Number);
  const fromDate = new Date(y ?? 1900, (m ?? 1) - 1, d ?? 1);
  return {
    ...filters,
    ToDate: filters.FromDate,
    FromDate: toOsDate(addMonths(fromDate, -DEFAULT_DATE_RANGE_IN_MONTHS)),
  };
}

export function ldmMyEventsReducer(state: LdmMyEventsState, action: LdmMyEventsAction): LdmMyEventsState {
  switch (action.type) {
    case 'fetchStarted':
      return { ...state, isFetchingMyTimeline: true };
    case 'fetchFailed':
      return { ...state, hasFetchError: true };
    case 'fetched':
      return state.isFiltering
        ? {
            ...state,
            hasFetchError: false,
            pastEventsData: action.data.pastEvents,
            upcomingEventsData: action.data.upcomingEvents,
          }
        : {
            ...state,
            hasFetchError: false,
            pastEventsData: [...state.pastEventsData, ...action.data.pastEvents],
            upcomingEventsData: [...state.upcomingEventsData, ...action.data.upcomingEvents],
          };
    case 'fetchEnded':
      return { ...state, isFetchingMyTimeline: false };
    case 'olderWindowSet':
      return { ...state, pastEventFilters: olderPastEventFilters(state.pastEventFilters) };
    case 'filterApplied':
      return {
        ...state,
        pastEventsData: [],
        upcomingEventsData: [],
        isFiltering: true,
        pastEventFilters: action.filters,
      };
    case 'filtersReset':
      return {
        ...state,
        pastEventsData: [],
        upcomingEventsData: [],
        isFiltering: false,
        pastEventFilters: action.filters,
      };
    case 'phonePopupOpened':
      return { ...state, contactByPhoneData: action.data };
    case 'phonePopupClosed':
      return {
        ...state,
        contactByPhoneData: {
          ...state.contactByPhoneData,
          ContactPopupData: closed(state.contactByPhoneData.ContactPopupData),
        },
      };
    case 'messagePopupOpened':
      return { ...state, contactByMessageData: action.data };
    case 'messagePopupClosed':
      return {
        ...state,
        contactByMessageData: {
          ...state.contactByMessageData,
          ContactPopupData: closed(state.contactByMessageData.ContactPopupData),
        },
      };
  }
}

/** The block variables that DataActionGetEventsForMyTimeline sends (the server reads them). */
export const myTimelineCallInputs = (state: LdmMyEventsState): MyTimelineCallInputs => ({
  CurrentEventView: EventView_MyTimeline,
  DefaultDateRangeInMonths: DEFAULT_DATE_RANGE_IN_MONTHS,
  IsFiltering: state.isFiltering,
  IsFetchingMyTimeline: state.isFetchingMyTimeline,
  PastEventFilters: state.pastEventFilters,
});

/** OnScrollEnding_MyTimeline: an older window is fetched only when no fetch runs, the list is not filtered, and
    PastEventFilters.FromDate is at most MaxAgeDaysFetchThreshold days back. */
export const canFetchOlderEvents = (state: LdmMyEventsState, today: Date): boolean =>
  !state.isFetchingMyTimeline &&
  !state.isFiltering &&
  diffDays(state.pastEventFilters.FromDate, today) <= MAX_AGE_DAYS_FETCH_THRESHOLD;

/** OnHandle_PhoneCall: the phone popup opens only with a phone number. */
export const hasPhoneNumber = (data: ContactByPhonePopupData): boolean =>
  (data.Phone ?? '') !== '' ||
  (data.MobilePhone ?? '') !== '' ||
  (data.HomePhone ?? '') !== '' ||
  (data.WorkPhone ?? '') !== '';

/** EventCalendarFilters (Connect2_OrbitMobile_IS): the current filters that ValidateSameFilters compares with; its
    Localities are LongInteger ids. */
interface EventCalendarFilters {
  FromDate: string;
  ToDate: string;
  Localities: string[];
}

/** ValidateSameFilters(In_SelectedFilters, In_CurrentFilters) → Out_SameFilters (Connect2_OrbitMobile_MUI.controller.js
    :8362-8457): the same dates and as many localities, and each selected locality id (TextToLongInteger of IdAsText)
    is found once in the current ids. */
export function validateSameFilters(selected: EventCalendarFiltersAsText, current: EventCalendarFilters): boolean {
  if (!(
    selected.FromDate === current.FromDate &&
    selected.ToDate === current.ToDate &&
    selected.Localities.length === current.Localities.length
  ))
    return false;
  const remaining = [...current.Localities];
  for (const locality of selected.Localities) {
    const id = /^-?\d+$/.test(locality.IdAsText.trim()) ? String(Number(locality.IdAsText.trim())) : '0';
    const position = remaining.indexOf(id);
    if (position === -1) return false;
    remaining.splice(position, 1);
  }
  return true;
}

/** OnHandle_MyTimelineFilter: the current filters of ValidateSameFilters are PastEventFilters converted to
    EventCalendarFilters, which copies only FromDate and ToDate (ScreenBlock_MyEvents_V2.mvc.js :2670-2760). */
export const currentFiltersOf = (state: LdmMyEventsState): EventCalendarFilters => ({
  FromDate: state.pastEventFilters.FromDate,
  ToDate: state.pastEventFilters.ToDate,
  Localities: [],
});

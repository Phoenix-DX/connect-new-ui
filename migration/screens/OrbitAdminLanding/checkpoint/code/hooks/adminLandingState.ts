import type { AdminEventItem, AdminEventsCallInputs, Event_Screen, PopupMeasurements, YearItem } from '@/api/event';
import { OrbitLandingFilter } from '@/pages/OrbitAdminLanding/staticEntities';

/** The variables of ScreenBlock_AdminLanding, the reducer and the client actions. Pure; the flows are in
    useAdminLanding.
    @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminLanding */

/** The Long Integer null identifier (Long Integers stay text). */
export const NULL_ID = '0';

/** The variables of the block and the fetch state of Get_AdminEventsList that the view reads. */
export interface AdminLandingState {
  /** IsFetchingData: the skeleton shows. */
  isFetchingData: boolean;
  /** EventsSummary: the admin events of the EventFilter (FilterEvents of Get_AdminEventsList.Response). */
  eventsSummary: AdminEventItem[];
  /** UserFirstName: the header text. */
  userFirstName: string;
  /** UserMemberId: a Long Integer as text. */
  userMemberId: string;
  /** Get_AdminEventsList.IsDataFetched. */
  isDataFetched: boolean;
  /** EventFilter (OrbitLandingFilter Identifier; 0 is the null identifier): the label of the filter header. */
  eventFilter: number;
  /** SortEventsASC. */
  sortEventsASC: boolean;
  /** YearsSelection (YearItem list): the years of the filter popup. */
  yearsSelection: YearItem[];
  /** Popup_FiltersOpened: the caret of the filter header and ShowPopup of Popup_Filters. */
  popupFiltersOpened: boolean;
  /** Popup_SortByOpened: the caret of the sort header and ShowPopup of Popup_Sort. */
  popupSortByOpened: boolean;
  /** PopupMeasurements: the header height, half the header width less 10, and the footer height (GetPopupMeasurements). */
  popupMeasurements: PopupMeasurements;
}

/** An assignment of one or more variables. */
type AdminLandingPatch = Partial<AdminLandingState>;

/** The variables after OnInitialize (the block has no OnInitialize: the defaults). */
export const INITIAL_ADMIN_LANDING_STATE: AdminLandingState = {
  isFetchingData: false,
  eventsSummary: [],
  userFirstName: '',
  userMemberId: NULL_ID,
  isDataFetched: false,
  eventFilter: 0,
  sortEventsASC: true,
  yearsSelection: [],
  popupFiltersOpened: false,
  popupSortByOpened: false,
  popupMeasurements: { Top: 0, Left: 0, Bottom: 0 },
};

/** ResetFiltersAndSort: SortEventsASC True, EventFilter UpcomingEvents, YearsSelection the empty Default_Years. */
export const RESET_FILTERS_AND_SORT: AdminLandingPatch = {
  sortEventsASC: true,
  eventFilter: OrbitLandingFilter.UpcomingEvents,
  yearsSelection: [],
};

/** The label of the filter header: "Past Events" for PastEvents, else "Upcoming Events". */
export const eventFilterLabelOf = (eventFilter: number): string =>
  eventFilter === OrbitLandingFilter.PastEvents ? 'Past Events' : 'Upcoming Events';

/** CurrDate() - 22 days (AddDays(CurrDate(), -22)): the local midnight 22 days ago. FilterEvents compares
    EndEventDate with it. */
const filterCutoffOf = (today: Date): number =>
  new Date(today.getFullYear(), today.getMonth(), today.getDate() - 22).getTime();

/** The EndEventDate of a row as a time; a missing or null DateTime (1900-01-01) is before every cutoff. */
const endTimeOf = (item: AdminEventItem): number => {
  const value = item.event.EventInfo?.EndEventDate;
  const time = value ? new Date(value).getTime() : Number.NaN;
  return Number.isNaN(time) ? Number.NEGATIVE_INFINITY : time;
};

/** GetFullYear(StartEventDate) as a Long Integer text: the UTC year; a missing date is the null DateTime (1900). */
const startYearOf = (item: AdminEventItem): string => {
  const value = item.event.EventInfo?.StartEventDate;
  const time = value ? new Date(value).getTime() : Number.NaN;
  return String(Number.isNaN(time) ? 1900 : new Date(time).getUTCFullYear());
};

/** FilterEvents: the EventsSummary for the EventFilter, from Get_AdminEventsList.Response.
    - Response empty: the Response.
    - UpcomingEvents (ListFilter_Last8DaysAndFuture): the rows with EndEventDate >= AddDays(CurrDate(), -22).
    - PastEvents (ListFilter_MoreThan8DaysAgo): the rows with EndEventDate < AddDays(CurrDate(), -22). With selected
      years (ListFilter_YearFilters), for each selected year in its order the past rows whose StartEventDate is in that
      year (GetFullYear: TimeFormat.getYear = getUTCFullYear, sources/runtime/Connect2_OrbitMobile_MUI.TimeFormat.js:90),
      appended (ListAppendAll).
    - Another value: no assignment (`null`).
    ScreenBlock_AdminLanding.mvc.js FilterEvents (TST 2026-11-07). */
export function filterEvents(
  response: AdminEventItem[],
  eventFilter: number,
  yearsSelection: YearItem[],
  today: Date = new Date(),
): AdminEventItem[] | null {
  if (response.length === 0) return response;
  const cutoff = filterCutoffOf(today);
  if (eventFilter === OrbitLandingFilter.UpcomingEvents) return response.filter((item) => endTimeOf(item) >= cutoff);
  if (eventFilter !== OrbitLandingFilter.PastEvents) return null;
  const past = response.filter((item) => endTimeOf(item) < cutoff);
  const selectedYears = yearsSelection.filter((y) => y.isSelected);
  if (selectedYears.length === 0) return past;
  return selectedYears.flatMap((y) => past.filter((item) => startYearOf(item) === y.year));
}

/** The variables after an assignment. */
export const adminLandingReducer = (state: AdminLandingState, patch: AdminLandingPatch): AdminLandingState => ({
  ...state,
  ...patch,
});

/** The block variables that Get_AdminEventsList sends (TST sends the screen variables; EventsSummary is not sent
    here, as before). */
export const adminEventsCallInputsOf = (state: AdminLandingState): AdminEventsCallInputs => ({
  IsFetchingData: state.isFetchingData,
  UserFirstName: state.userFirstName,
  UserMemberId: state.userMemberId,
  EventFilter: state.eventFilter,
  SortEventsASC: state.sortEventsASC,
  YearsSelection: state.yearsSelection,
  Popup_SortByOpened: state.popupSortByOpened,
  Popup_FiltersOpened: state.popupFiltersOpened,
  PopupMeasurements: state.popupMeasurements,
});

/** GetPopupMeasurements (GetMeasurementsJS): Top = .header offsetHeight, Left = .header offsetWidth / 2 - 10,
    Bottom = .footer offsetHeight; a missing element keeps 0. Left is truncated to an Integer; how JSNodeParamConverter
    converts a half value (odd header width) is not verified. */
export function getPopupMeasurements(doc: Document = document): PopupMeasurements {
  const header = doc.querySelector<HTMLElement>('.header');
  const footer = doc.querySelector<HTMLElement>('.footer');
  return {
    Top: header ? header.offsetHeight : 0,
    Left: header ? Math.trunc(header.offsetWidth / 2 - 10) : 0,
    Bottom: footer ? footer.offsetHeight : 0,
  };
}

/** TextToLongIntegerValidate(MemberId) ? TextToLongInteger(MemberId) : NullIdentifier(). */
export const textToLongIntegerOrNull = (value: string): string =>
  /^\s*-?\d+\s*$/.test(value) ? String(BigInt(value)) : NULL_ID;

/** The arguments of the block event NavigateTo_EventDetail. DateTimes as on the wire. */
export interface EventDetailTarget {
  eventId: string;
  eventName: string;
  eventStartDate: string;
  eventEndDate: string;
  eventLocation: string;
  eventTypeFriendly: string;
}

/** OnHandle_EventCardClicked: the event of NavigateTo_EventDetail from the clicked card and the TypeFriendly of its
    row. */
export function eventDetailTargetOf(eventSummary: Event_Screen, eventTypeFriendly: string): EventDetailTarget {
  const eventInfo = eventSummary.EventInfo ?? {};
  return {
    eventId: eventSummary.EventId ?? NULL_ID,
    eventName: eventSummary.Title ?? '',
    eventStartDate: eventInfo.StartEventDate ?? '',
    eventEndDate: eventInfo.EndEventDate ?? '',
    eventLocation: eventInfo.EventLocation ?? '',
    eventTypeFriendly,
  };
}

/** AuditPayload_ClickEventRec (Connect2_OrbitMobile_MUI): what OnHandle_EventCardClicked records about the clicked
    event. DateTimes as on the wire. */
export interface AuditPayload_ClickEvent {
  EventId: string;
  EventTitle: string;
  EventLocation: string;
  EventStartDate: string;
  EventEndDate: string;
}

/** OnHandle_EventCardClicked: the audit payload of the clicked card. */
export function clickEventPayloadOf(eventSummary: Event_Screen): AuditPayload_ClickEvent {
  const eventInfo = eventSummary.EventInfo ?? {};
  return {
    EventId: eventSummary.EventId ?? NULL_ID,
    EventTitle: eventSummary.Title ?? '',
    EventLocation: eventInfo.EventLocation ?? '',
    EventStartDate: eventInfo.StartEventDate ?? '',
    EventEndDate: eventInfo.EndEventDate ?? '',
  };
}

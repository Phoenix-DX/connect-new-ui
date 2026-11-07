import { fetchAdminEvents, type Event_Screen } from '@/api/event';
import { useFlowState } from '@/platform/navigation';
import { appManager_GetCachedUserInfo } from '@/platform/session/cachedUserInfo';
import {
  adminEventsCallInputsOf,
  adminLandingReducer,
  clickEventPayloadOf,
  eventDetailTargetOf,
  filterEvents,
  getPopupMeasurements,
  INITIAL_ADMIN_LANDING_STATE,
  RESET_FILTERS_AND_SORT,
  textToLongIntegerOrNull,
  type AdminLandingState,
  type EventDetailTarget,
} from './adminLandingState';
import { onApplicationEvent_ClickEvent } from './applicationEvents';

/** The events of the block, which the screen handles. */
export interface AdminLandingEvents {
  /** Event NavigateTo_EventDetail(EventId, EventName, EventStartDate, EventEndDate, EventLocation,
      EventTypeFriendly). */
  onNavigateToEventDetail: (target: EventDetailTarget) => Promise<void> | void;
}

/** What the view reads, and the handler of the card clicks. */
export interface AdminLandingFlows {
  /** The block variables (rendered). */
  state: AdminLandingState;
  /** Card_Event ClickedEvent(EventSummary), with the TypeFriendly of the card's row. */
  onEventCardClicked: (eventSummary: Event_Screen, eventTypeFriendly: string) => void;
  /** The click on the filter header (OnToggle_FilterPopup). */
  onToggleFilterPopup: () => void;
  /** The click on the sort header (OnToggle_SortPopup). */
  onToggleSortPopup: () => void;
}

/** The flows of ScreenBlock_AdminLanding. The page calls this hook and gives the result to AdminLandingView.
    - OnReady: a view that the view cache restored with the Get_AdminEventsList answer does nothing
      (WasCurrentViewRestoredFromCache); restored without the answer, OnReady runs again (F40). Otherwise
      IsFetchingData True, UserFirstName and UserMemberId from AppManager_GetCachedUserInfo (the MemberId as a Long
      Integer, else the null identifier), then Refresh_GetEventsByMemberId: ResetFiltersAndSort, Get_AdminEventsList
      (on demand; it sends the block variables) and OnAfterFetch (FilterEvents: the upcoming events, YearsSelection =
      YearFilter, IsFetchingData False). Before the refresh, GetPopupMeasurements stores the header and footer sizes
      (the popup position; sent with the block variables).
    - OnToggle_FilterPopup / OnToggle_SortPopup: the header clicks open or close Popup_Filters / Popup_Sort when no
      fetch runs. The popup content (Popup_OrbitLanding_Filters / _Sort) and its ApplyFilters / ApplySort are not
      captured for this route (NotCaptured in the view).
    - OnHandle_EventCardClicked: the event NavigateTo_EventDetail, then OnApplicationEvent_ClickEvent.
    - Flow scope (item 8): Get_AdminEventsList is a data action (R1, `flow.fetch`): after the unmount its answer and its
      failure are dropped, and OnAfterFetch does not run (ScreenBlock_AdminLanding.js:452, :460). The block event goes
      through `flow.events` (R3). OnApplicationEvent_ClickEvent is a module action: it runs after the event, also when
      the block left meanwhile (R2, :595-599).
    @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminLanding */
export function useAdminLanding(events: AdminLandingEvents): AdminLandingFlows {
  const { state, dispatch, latest, flow } = useFlowState({
    viewName: 'Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminLanding',
    reducer: adminLandingReducer,
    initial: INITIAL_ADMIN_LANDING_STATE,
    parameters: null,
    events,
    // The flows are defined below; the hook calls the ones of the newest render.
    onReady: (_flow, restored) => onReady(restored),
  });

  /** Refresh_GetEventsByMemberId: ResetFiltersAndSort, Get_AdminEventsList, then OnAfterFetch_Get_AdminEventsList. */
  const refreshGetEventsByMemberId = async () => {
    dispatch(RESET_FILTERS_AND_SORT);
    const answer = await flow.fetch(fetchAdminEvents(adminEventsCallInputsOf(latest.current))); // R1
    // OnAfterFetch: FilterEvents (with the YearsSelection before the answer); SetAndSortEvents(True, False) returns at
    // once (SortEventsASC is True after ResetFiltersAndSort and no sort is forced); YearsSelection = YearFilter;
    // IsFetchingData False.
    const filtered = filterEvents(answer.events, latest.current.eventFilter, latest.current.yearsSelection);
    dispatch({
      isDataFetched: true,
      ...(filtered ? { eventsSummary: filtered } : {}),
      yearsSelection: answer.yearFilter,
      isFetchingData: false,
    });
  };

  /** OnToggle_FilterPopup: with data (not fetching), Popup_FiltersOpened = not Popup_FiltersOpened. */
  const onToggleFilterPopup = () => {
    if (latest.current.isFetchingData) return;
    dispatch({ popupFiltersOpened: !latest.current.popupFiltersOpened });
  };

  /** OnToggle_SortPopup: with data (not fetching), Popup_SortByOpened = not Popup_SortByOpened. */
  const onToggleSortPopup = () => {
    if (latest.current.isFetchingData) return;
    dispatch({ popupSortByOpened: !latest.current.popupSortByOpened });
  };

  /** OnReady. A rejection goes to the flow handler (useFlowState); the skeleton stays. */
  const onReady = async (restored: boolean) => {
    // restored without data: call again (F40; OutSystems keeps the skeleton)
    if (restored && latest.current.isDataFetched) return;
    dispatch({ isFetchingData: true });
    const userInformation = appManager_GetCachedUserInfo();
    dispatch({
      userFirstName: userInformation.FirstName,
      userMemberId: textToLongIntegerOrNull(userInformation.MemberId),
    });
    dispatch({ popupMeasurements: getPopupMeasurements() }); // GetPopupMeasurements
    await refreshGetEventsByMemberId();
  };

  /** OnHandle_EventCardClicked. */
  const eventCardClicked = async (eventSummary: Event_Screen, eventTypeFriendly: string) => {
    await flow.events.onNavigateToEventDetail(eventDetailTargetOf(eventSummary, eventTypeFriendly)); // R3
    onApplicationEvent_ClickEvent(clickEventPayloadOf(eventSummary)); // module action: not wrapped (R2)
  };

  return {
    state,
    onEventCardClicked: (eventSummary, eventTypeFriendly) => {
      flow.run(() => eventCardClicked(eventSummary, eventTypeFriendly));
    },
    onToggleFilterPopup,
    onToggleSortPopup,
  };
}

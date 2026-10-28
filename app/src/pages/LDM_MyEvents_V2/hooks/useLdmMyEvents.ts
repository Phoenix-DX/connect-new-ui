import { useState } from 'react';
import { fetchEventsForMyTimeline, type EventCalendarFiltersAsText, type MyTimelineData } from '@/api/event';
import { NotRegisteredException, UserException, exceptionMessage, isSystemException } from '@/legacy/os/exceptions';
import type { HouseholdClick } from '@/pages/LDM_MyEvents_V2/components/EventCard_V2';
import { PLATFORM_MESSAGE_TYPE, showFeedbackMessage } from '@/platform/feedback';
import { showUpgradePopUp } from '@/platform/feedback/dialogs';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { useFlowState } from '@/platform/navigation';
import { addAuditEvent_LDM, getCurrentTimeInMill } from '@/lib/orbit/actions';
import type { ContactByPhonePopupData, UI_ContactByMessage_WrapperData } from '@/lib/ubtConnectUtils/structures';
import {
  canFetchOlderEvents,
  currentFiltersOf,
  hasPhoneNumber,
  initialLdmMyEventsState,
  ldmMyEventsReducer,
  myTimelineCallInputs,
  restoreLdmMyEventsState,
  validateSameFilters,
  type LdmMyEventsState,
} from './ldmMyEventsState';

/** AddAuditEventFilterEvent(EventTypeId, Filters) (Connect2_OrbitMobile_MUI.controller.js :366-431): the JSON of
    {AppliedFilters: Filters} to zOnApplicationEvent_Wrapper. The log gets the dates and the locality ids (U17). */
function addAuditEventFilterEvent(
  event: 'MyTimelineApplyFilter' | 'MyTimelineClearFilter',
  filters: EventCalendarFiltersAsText,
): void {
  addAuditEvent_LDM(event, {
    FromDate: filters.FromDate,
    ToDate: filters.ToDate,
    Localities: filters.Localities.map((p) => p.IdAsText).join(','),
  });
}

/** The user exception that the block raises for a failed fetch that is not a system exception. */
const UNKNOWN_ERROR = 'Connect2_OrbitMobile_MUI.UnknownError';

/** The block has no input parameters. */
const NO_PARAMETERS = {};

/** The events of the block, which the screen handles. */
export interface LdmMyEventsEvents {
  /** NavigateTo_EventDetail(EventHostId, EventId). */
  onNavigateToEventDetail: (eventHostId: string, eventId: string) => void;
  /** NavigateTo_HouseholdCarousel(In_HouseholdId, In_HouseholdIdList). */
  onNavigateToHouseholdCarousel: (householdId: string, householdIdList: string[]) => void;
  /** NavigateTo_ContactByEmail(In_AvatarURL, In_ContactName, In_ContactLocality, In_ContactCountry, In_EmailTo). */
  onNavigateToContactByEmail: (
    avatarURL: string,
    contactName: string,
    contactLocality: string,
    contactCountry: string,
    emailTo: string,
  ) => void;
}

/** What the view renders, and the handlers of the events of its blocks. */
export interface LdmMyEventsFlows {
  /** The block variables (rendered). */
  state: LdmMyEventsState;
  /** OnScrollEnding_MyTimeline: the ScrollEnding event of the timeline. The list waits for the promise. */
  onScrollEnding: () => Promise<void>;
  /** OnHandle_EventClicked: the EventClicked event of a card. */
  onEventClicked: (eventHostId: string, eventId: string) => void;
  /** OnHandle_HouseholdClicked: the HouseholdClicked event of a card. */
  onHouseholdClicked: (click: HouseholdClick) => void;
  /** OnHandle_PhoneCall: the call icon of a guest. */
  onPhoneCall: (data: ContactByPhonePopupData) => void;
  /** The email icon of a guest: the ContactByMessage popup opens with the data. */
  onMessage: (data: UI_ContactByMessage_WrapperData) => void;
  /** The TryAgain event of the timeline (the network warning): GetMyTimelineData. */
  onTryAgain: () => void;
  /** OnHandle_SwipeUp: the EventsSwipeUp event of the timeline (a swipe up on the empty timeline). */
  onSwipeUp: () => Promise<void>;
  /** OnHandle_MyTimelineFilter(In_SelectedFilters): the Filter event of the filter button. */
  onMyTimelineFilter: (selectedFilters: EventCalendarFiltersAsText) => Promise<void>;
  /** OnHandle_ResetFilters(In_ResetFilters): the ResetFilters event of the filter button. */
  onResetFilters: (resetFilters: EventCalendarFiltersAsText) => Promise<void>;
  /** OnHandle_ContactByPhonePopupEvent_Cancel and _Call: the phone popup closes. */
  onContactByPhoneClose: () => void;
  /** OnHandle_ContactByMessage_Cancel: the message popup closes (also for Call and the message channels). */
  onContactByMessageClose: () => void;
  /** OnHandle_ContactByMessage_ClickedEmail: the message popup closes, then NavigateTo_ContactByEmail. */
  onContactByMessageEmail: () => void;
}

/** The flows of the LDM "My Timeline" block.
    - OnInitialize: a new view sets PastEventFilters (24 months back to 7 days ahead); a view that the view cache
      restored closes both contact popups.
    - OnReady: a restored view sets IsFetchingMyTimeline False; else GetMyTimelineData.
    - GetMyTimelineData: IsFetchingMyTimeline True, the refresh of GetEventsForMyTimeline, OnAfterFetch (replace the
      lists while filtering, else append them), IsFetchingMyTimeline False, then the RequestAPI_CalendarEvents audit
      event. A NotRegistered error is raised again; any other error that is not a system error sets
      IsFetchingMyTimeline False and raises UnknownError with its message.
    - OnScrollEnding_MyTimeline: when no fetch runs, the list is not filtered and the window is not too old, the window
      moves 24 months back and GetMyTimelineData runs.
    - OnHandle_SwipeUp (ScreenBlock_MyEvents_V2 :2335-2368): IncrementMyTimelineDates (the window moves 24 months back), then the refresh
      of GetEventsForMyTimeline and its OnAfterFetch, without IsFetchingMyTimeline and without an error handler.
    - OnHandle_MyTimelineFilter (ScreenBlock_MyEvents_V2 :2670-2760): the same filters (ValidateSameFilters with the
      dates of PastEventFilters and no locality) only log MyTimelineApplyFilter. Other filters clear both lists, set
      IsFiltering True and PastEventFilters, run GetMyTimelineData, then log MyTimelineApplyFilter.
    - OnHandle_ResetFilters (:1886-1947): both lists cleared, IsFiltering False, PastEventFilters = the reset filters,
      GetMyTimelineData, then MyTimelineClearFilter with empty filters.
    - The event, household and contact handlers: audit events, the upgrade popup for a disabled record, the contact
      popups and the block events.
    OnReady runs once per instance. Flow scope (item 8): GetEventsForMyTimeline is a data action (R1, `flow.fetch`):
    after the unmount its answer and its failure are dropped, so GetMyTimelineData stops before the RequestAPI audit
    event and raises nothing, and the filter flows stop before their filter audit events. The block events use
    `flow.events` (R3).
    @origin Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2 */
export function useLdmMyEvents(events: LdmMyEventsEvents): LdmMyEventsFlows {
  const [initial] = useState(() => initialLdmMyEventsState(new Date()));
  const { state, dispatch, latest, flow } = useFlowState({
    viewName: 'LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2',
    reducer: ldmMyEventsReducer,
    initial,
    restore: restoreLdmMyEventsState,
    parameters: NO_PARAMETERS,
    events,
    // The flows are defined below; the hook calls the ones of the newest render.
    onReady: (_isAlive, restored) => onReady(restored),
  });

  /** The flows that the timeline waits for: an error goes to the flow handler with the scope (as `flow.run`). */
  const raise = (e: unknown) => {
    raiseToFlowHandler(e, flow);
  };

  /** Refresh Query GetEventsForMyTimeline: a failed fetch sets HasFetchError; OnAfterFetch replaces or appends the
      lists. */
  async function refreshGetEventsForMyTimeline(): Promise<void> {
    let data: MyTimelineData;
    try {
      data = await flow.fetch(fetchEventsForMyTimeline(myTimelineCallInputs(latest.current))); // R1
    } catch (e) {
      dispatch({ type: 'fetchFailed' }); // a no-op after the unmount
      throw e;
    }
    dispatch({ type: 'fetched', data });
  }

  async function getMyTimelineData(): Promise<void> {
    dispatch({ type: 'fetchStarted' });
    const start = getCurrentTimeInMill();
    try {
      await refreshGetEventsForMyTimeline();
      dispatch({ type: 'fetchEnded' });
      addAuditEvent_LDM('RequestAPI_CalendarEvents', { RequestTime: String(getCurrentTimeInMill() - start) });
    } catch (e) {
      if (e instanceof NotRegisteredException) throw new NotRegisteredException(exceptionMessage(e));
      // ControllerDisposedException (R1 after the unmount) is a system exception: it goes on as it is.
      if (!isSystemException(e)) {
        dispatch({ type: 'fetchEnded' });
        throw new UserException(exceptionMessage(e), UNKNOWN_ERROR);
      }
      throw e;
    }
  }

  async function onReady(restored: boolean): Promise<void> {
    if (restored) {
      dispatch({ type: 'fetchEnded' });
      return;
    }
    await getMyTimelineData();
  }

  async function onScrollEndingMyTimeline(): Promise<void> {
    if (!canFetchOlderEvents(latest.current, new Date())) return;
    dispatch({ type: 'olderWindowSet' });
    await getMyTimelineData();
  }

  /** OnHandle_SwipeUp (ScreenBlock_MyEvents_V2 :2335-2368): IncrementMyTimelineDates, then Refresh Query
      GetEventsForMyTimeline. The action has no exception handler: an error goes to the flow handler. */
  async function onHandleSwipeUp(): Promise<void> {
    dispatch({ type: 'olderWindowSet' });
    await refreshGetEventsForMyTimeline();
  }

  async function onHandleMyTimelineFilter(selectedFilters: EventCalendarFiltersAsText): Promise<void> {
    if (validateSameFilters(selectedFilters, currentFiltersOf(latest.current))) {
      addAuditEventFilterEvent('MyTimelineApplyFilter', selectedFilters);
      return;
    }
    dispatch({ type: 'filterApplied', filters: selectedFilters });
    await getMyTimelineData();
    addAuditEventFilterEvent('MyTimelineApplyFilter', selectedFilters);
  }

  async function onHandleResetFilters(resetFilters: EventCalendarFiltersAsText): Promise<void> {
    dispatch({ type: 'filtersReset', filters: resetFilters });
    await getMyTimelineData();
    addAuditEventFilterEvent('MyTimelineClearFilter', { FromDate: '1900-01-01', ToDate: '1900-01-01', Localities: [] });
  }

  async function onHandleHouseholdClicked(click: HouseholdClick): Promise<void> {
    if (!click.isHouseholdDisplayed) return;
    if (click.recordDisabled) {
      await showUpgradePopUp();
      return;
    }
    addAuditEvent_LDM('MyTimelineHouseholdClicked', { HouseholdId: click.householdId });
    flow.events.onNavigateToHouseholdCarousel(click.householdId, click.householdIdList);
  }

  return {
    state,
    onScrollEnding: () => onScrollEndingMyTimeline().catch(raise),
    onSwipeUp: () => onHandleSwipeUp().catch(raise),
    onMyTimelineFilter: (selectedFilters) => onHandleMyTimelineFilter(selectedFilters).catch(raise),
    onResetFilters: (resetFilters) => onHandleResetFilters(resetFilters).catch(raise),
    onEventClicked: (eventHostId, eventId) => {
      addAuditEvent_LDM('MyTimelineEventClicked', { EventHostId: eventHostId });
      flow.events.onNavigateToEventDetail(eventHostId, eventId);
    },
    onHouseholdClicked: (click) => {
      flow.run(() => onHandleHouseholdClicked(click));
    },
    onPhoneCall: (data) => {
      if (hasPhoneNumber(data)) dispatch({ type: 'phonePopupOpened', data });
      else showFeedbackMessage('Phone number is not available', PLATFORM_MESSAGE_TYPE.info);
    },
    onMessage: (data) => {
      dispatch({ type: 'messagePopupOpened', data });
    },
    onTryAgain: () => {
      flow.run(() => getMyTimelineData());
    },
    onContactByPhoneClose: () => {
      dispatch({ type: 'phonePopupClosed' });
    },
    onContactByMessageClose: () => {
      dispatch({ type: 'messagePopupClosed' });
    },
    onContactByMessageEmail: () => {
      const data = latest.current.contactByMessageData;
      dispatch({ type: 'messagePopupClosed' });
      const popup = data.ContactPopupData ?? {};
      flow.events.onNavigateToContactByEmail(
        popup.ImageURL ?? '',
        popup.Name ?? '',
        popup.Locality ?? '',
        popup.CountryName ?? '',
        data.Email ?? '',
      );
    },
  };
}

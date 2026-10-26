import { useRef, useState } from 'react';
import { fetchEventsForMyTimeline, type MyTimelineData } from '@/api/event';
import { NotRegisteredException, UserException, exceptionMessage, isSystemException } from '@/legacy/os/exceptions';
import type { HouseholdClick } from '@/pages/LDM_MyEvents_V2/components/EventCard_V2';
import { PLATFORM_MESSAGE_TYPE, showFeedbackMessage } from '@/platform/feedback';
import { showUpgradePopUp } from '@/platform/feedback/dialogs';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { useFlowState, type IsAlive } from '@/platform/navigation';
import { addAuditEvent_LDM, getCurrentTimeInMill } from '@/lib/orbit/actions';
import type { ContactByPhonePopupData, UI_ContactByMessage_WrapperData } from '@/lib/ubtConnectUtils/structures';
import {
  canFetchOlderEvents,
  hasPhoneNumber,
  initialLdmMyEventsState,
  ldmMyEventsReducer,
  myTimelineCallInputs,
  restoreLdmMyEventsState,
  type LdmMyEventsAction,
  type LdmMyEventsState,
} from './ldmMyEventsState';

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
    - The event, household and contact handlers: audit events, the upgrade popup for a disabled record, the contact
      popups and the block events.
    OnReady runs once per instance. Decision W23: after the unmount, a started flow skips its state writes, and its
    audit events and raised errors still happen.
    @origin Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2 */
export function useLdmMyEvents(events: LdmMyEventsEvents): LdmMyEventsFlows {
  const [initial] = useState(() => initialLdmMyEventsState(new Date()));
  /* The once-guard of OnReady: StrictMode (dev) runs the mount effect twice on the same instance. The second call only
     replaces the liveness check. */
  const started = useRef(false);
  const alive = useRef<IsAlive>(() => true);
  const {
    state,
    dispatch,
    latest,
    events: eventsRef,
  } = useFlowState({
    viewName: 'LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2',
    reducer: ldmMyEventsReducer,
    initial,
    restore: restoreLdmMyEventsState,
    parameters: NO_PARAMETERS,
    events,
    onReady: (isAlive, restored) => {
      alive.current = isAlive;
      if (started.current) return Promise.resolve();
      started.current = true;
      return onReady(restored);
    },
  });

  /** A state write of a flow, skipped after the unmount (W23). */
  const write = (action: LdmMyEventsAction) => {
    if (alive.current()) dispatch(action);
  };

  async function getMyTimelineData(): Promise<void> {
    write({ type: 'fetchStarted' });
    const start = getCurrentTimeInMill();
    try {
      let data: MyTimelineData;
      try {
        data = await fetchEventsForMyTimeline(myTimelineCallInputs(latest.current));
      } catch (e) {
        write({ type: 'fetchFailed' });
        throw e;
      }
      write({ type: 'fetched', data });
      write({ type: 'fetchEnded' });
      addAuditEvent_LDM('RequestAPI_CalendarEvents', { RequestTime: String(getCurrentTimeInMill() - start) });
    } catch (e) {
      if (e instanceof NotRegisteredException) throw new NotRegisteredException(exceptionMessage(e));
      if (!isSystemException(e)) {
        write({ type: 'fetchEnded' });
        throw new UserException(exceptionMessage(e), UNKNOWN_ERROR);
      }
      throw e;
    }
  }

  async function onReady(restored: boolean): Promise<void> {
    if (restored) {
      write({ type: 'fetchEnded' });
      return;
    }
    await getMyTimelineData();
  }

  async function onScrollEndingMyTimeline(): Promise<void> {
    if (!canFetchOlderEvents(latest.current, new Date())) return;
    write({ type: 'olderWindowSet' });
    await getMyTimelineData();
  }

  async function onHandleHouseholdClicked(click: HouseholdClick): Promise<void> {
    if (!click.isHouseholdDisplayed) return;
    if (click.recordDisabled) {
      await showUpgradePopUp();
      return;
    }
    addAuditEvent_LDM('MyTimelineHouseholdClicked', { HouseholdId: click.householdId });
    eventsRef.current.onNavigateToHouseholdCarousel(click.householdId, click.householdIdList);
  }

  return {
    state,
    onScrollEnding: () => onScrollEndingMyTimeline().catch(raiseToFlowHandler),
    onEventClicked: (eventHostId, eventId) => {
      addAuditEvent_LDM('MyTimelineEventClicked', { EventHostId: eventHostId });
      eventsRef.current.onNavigateToEventDetail(eventHostId, eventId);
    },
    onHouseholdClicked: (click) => {
      onHandleHouseholdClicked(click).catch(raiseToFlowHandler);
    },
    onPhoneCall: (data) => {
      if (hasPhoneNumber(data)) dispatch({ type: 'phonePopupOpened', data });
      else showFeedbackMessage('Phone number is not available', PLATFORM_MESSAGE_TYPE.info);
    },
    onMessage: (data) => {
      dispatch({ type: 'messagePopupOpened', data });
    },
    onTryAgain: () => {
      getMyTimelineData().catch(raiseToFlowHandler);
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
      eventsRef.current.onNavigateToContactByEmail(
        popup.ImageURL ?? '',
        popup.Name ?? '',
        popup.Locality ?? '',
        popup.CountryName ?? '',
        data.Email ?? '',
      );
    },
  };
}

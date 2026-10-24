import { useRef } from 'react';
import { fetchCoordinatorDetails, fetchEventByEventId, type DetailGuestItem } from '@/api/event';
import { fetchHouseholdCoordinatesById } from '@/api/household';
import { osImage } from '@/legacy/os/os-assets';
import { UserException, exceptionMessage, isSystemException } from '@/legacy/os/exceptions';
import type { LdmEventDetailInputs } from '@/pages/LDM_EventDetail_V2/inputs';
import { showUpgradePopUp } from '@/platform/feedback/dialogs';
import { PLATFORM_MESSAGE_TYPE, showFeedbackMessage } from '@/platform/feedback';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { useFlowState, type IsAlive } from '@/platform/navigation';
import { addAuditEvent_LDM, getCurrentTimeInMill } from '@/lib/orbit/actions';
import { getOperatingSystem } from '@/lib/ubtConnectUtils/actions';
import type { ContactByPhonePopupData, UI_ContactByMessage_WrapperData } from '@/lib/ubtConnectUtils/structures';
import {
  closedMessagePopup,
  closedPhonePopup,
  contactByEmailArgs,
  datePart,
  directionsQuery,
  hasDirectionsAddresses,
  hostMessageData,
  hostPhoneCallData,
  INITIAL_LDM_EVENT_DETAIL_STATE,
  ldmEventDetailReducer,
  organiserMessageData,
  restoreLdmEventDetail,
  type ContactByEmailArgs,
  type LdmEventDetailPatch,
  type LdmEventDetailState,
} from './ldmEventDetailState';

/** The flows of ScreenBlock_EventDetail_V2: the fetch at start of GetCoordinatorDetails and GetEventByEventId with
    OnReady, the contact popups, the host and guest households and the directions to the host. The page calls this hook
    and passes the result to LdmEventDetailView.
    @origin Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_EventDetail_V2 */

/** The events of the block, which the screen handles. */
export interface LdmEventDetailEvents {
  /** Event NavigateTo_HouseholdCarousel(Household_Id, …, HouseholdIdList). */
  onNavigateToHouseholdCarousel: (householdId: string, householdIdList: string[]) => void;
  /** Event NavigateTo_HouseholdDetail(Event_HouseholdId). */
  onNavigateToHouseholdDetail: (householdId: string) => void;
  /** Event NavigateTo_WebMaps(api, query). */
  onNavigateToWebMaps: (api: number, query: string) => void;
  /** Event NavigateTo_ContactByEmail. */
  onNavigateToContactByEmail: (args: ContactByEmailArgs) => void;
}

/** What the view reads and the handlers of its events. */
export interface LdmEventDetailFlows {
  /** The block variables (rendered). */
  state: LdmEventDetailState;
  /** ContactOrganiser of EventDetail_Banner: OnHandle_ContactOrganiser. */
  onContactOrganiser: () => void;
  /** SetContainerHeight of EventDetail_Banner: OnHandle_SetContainerHeight. */
  onSetBannerHeight: (bannerHeight: number) => void;
  /** HostInformation of EventDetail_HostCard: OnHandle_HostInformation. */
  onHostInformation: (isHouseholdDisplayed: boolean) => void;
  /** NavigateToEmail_Household of EventDetail_HostCard: OnHandle_ContactHost_Message. */
  onContactHostMessage: () => void;
  /** CallPhone of EventDetail_HostCard: OnHandle_ContactHost_Call. */
  onContactHostCall: () => void;
  /** Address of EventDetail_HostCard: OnHandle_HostCardAddress. */
  onHostAddress: () => void;
  /** Clicked of EventDetail_ListItem: OnHandle_GoToHousehold. */
  onGuestClicked: (guest: DetailGuestItem, isHouseholdDisplayed: boolean) => void;
  /** OnClick_Message of EventDetail_ListItem: OnHandle_ContactByMessage (not the coordinator). */
  onGuestMessage: (data: UI_ContactByMessage_WrapperData) => void;
  /** OnClick_PhoneCall of EventDetail_ListItem: OnHandle_ContactByPhone. */
  onGuestPhoneCall: (data: ContactByPhonePopupData) => void;
  /** Call and Cancel of ContactPopupByPhone: OnHandle_ContactByPhone_Cancel (_Call runs it too). */
  onCloseContactByPhone: () => void;
  /** Cancel, MessageChannel and Call of ContactByMessage: OnHandle_ContactByMessage_Cancel. */
  onCloseContactByMessage: () => void;
  /** Email of ContactByMessage: OnHandle_ContactByMessage_ClickedEmail. */
  onContactByMessageEmail: () => void;
}

/** The name under which the view cache keeps the block variables. */
const VIEW_NAME = 'LDM_ScreenBlocks_V2.ScreenBlock_EventDetail_V2';

/** The LDM logo of the coordinator in the message popup. */
const LDM_LOGO = 'img/Connect2_OrbitMobile_MUI.LDM_Logo.svg';

/** The state and the flows of the LDM event detail. `inputs` are the block inputs EventHostId and EventId; a change of
    them mounts a new block (the page keys it), as OnParametersChanged refreshes both data actions.
    - Fetch at start and OnReady: a view that the view cache restored keeps its variables and does nothing. Otherwise
      GetCoordinatorDetails (a failure keeps its defaults), then GetEventByEventId (OnAfterFetch: HasInformation =
      Out_HasContent, IsFetching False) and AddAuditRequestAPIEvent(RequestAPI_EventDetail). A failure sets
      HasFetchError and goes to the flow handler.
    - Decision W23: after an unmount, a started flow skips its state writes only. Its audit event, its calls, its
      navigation and its error still run, as in the old port. */
export function useLdmEventDetail(inputs: LdmEventDetailInputs, events: LdmEventDetailEvents): LdmEventDetailFlows {
  /* OnReady runs once per block. StrictMode (dev) runs the mount effect again on the same block: the second call only
     replaces the liveness check, so the first flow writes the state while the block is there and its calls and its
     audit event run once. */
  const readyStarted = useRef(false);
  const newestReadyRun = useRef<IsAlive>(() => true);
  const {
    state,
    dispatch,
    latest,
    parameters,
    events: eventsRef,
  } = useFlowState({
    viewName: VIEW_NAME,
    reducer: ldmEventDetailReducer,
    initial: INITIAL_LDM_EVENT_DETAIL_STATE,
    restore: restoreLdmEventDetail,
    parameters: inputs,
    events,
    // The flows are defined below; the hook calls the ones of the newest render.
    onReady: (isAlive, restored) => {
      newestReadyRun.current = isAlive;
      if (readyStarted.current) return Promise.resolve();
      readyStarted.current = true;
      return onReady(restored);
    },
  });
  /** The view cache restored the variables of this block (read at the first render, as OnReady reads them). */
  const savedAtMount = useRef(state.isSaved);

  /** A state write of a flow after an await, skipped after the unmount (W23). */
  const write = (patch: LdmEventDetailPatch) => {
    if (newestReadyRun.current()) dispatch(patch);
  };

  /** Fetch at start and OnReady. useFlowState sends a rejection to the flow handler. */
  const onReady = async (restored: boolean) => {
    if (restored && savedAtMount.current) return;
    const callInputs = parameters.current;
    fetchCoordinatorDetails(callInputs)
      .then((coordinator) => {
        write({ coordinator });
      })
      .catch(() => {
        // GetCoordinatorDetails keeps its defaults (Out_HasContent True); the view does not read its fetch error.
      });
    const start = getCurrentTimeInMill();
    try {
      const out = await fetchEventByEventId(callInputs);
      // OnAfterFetch_GetEventByEventId: HasInformation = Out_HasContent; Toggle_IsFetching(False).
      write({ event: out.eventResponse, hasEventFetchError: false, hasInformation: out.hasContent, isFetching: false });
      addAuditEvent_LDM('RequestAPI_EventDetail', { RequestTime: String(getCurrentTimeInMill() - start) });
    } catch (e) {
      write({ hasEventFetchError: true });
      throw e;
    }
  };

  /** OnHandle_ContactByMessage(Event_ContactPopupData, Event_CountryName, Event_IsCoordinator). */
  const contactByMessage = (data: UI_ContactByMessage_WrapperData, isCoordinator: boolean) => {
    dispatch({ contactByMessageData: data, contactByMessageIsCoordinator: isCoordinator });
  };
  /** OnHandle_ContactByMessage_Cancel. */
  const closeContactByMessage = () => {
    dispatch({ contactByMessageData: closedMessagePopup(latest.current.contactByMessageData) });
  };

  /** OnHandle_HostInformation(IsHousholdDisplayed): a displayed host: disabled record →
      App_Subscription_ShowUpgradePopUp, else NavigateTo_HouseholdDetail(Host.HouseholderID). */
  const hostInformation = async (isHouseholdDisplayed: boolean) => {
    const host = latest.current.event?.Host;
    if (!isHouseholdDisplayed || !host) return;
    if (host.RecordDisabled) await showUpgradePopUp();
    else eventsRef.current.onNavigateToHouseholdDetail(host.HouseholderID);
  };

  /** OnHandle_GoToHousehold: a displayed household: disabled record → App_Subscription_ShowUpgradePopUp; else
      AddAuditEventDetailEvent (HostClickedGuestHousehold / GuestClickedOtherGuestHousehold) and
      NavigateTo_HouseholdCarousel with every guest's HouseholderID (CarouselFilteredEventResults only lowers the row
      number, which the screen does not use). */
  const goToHousehold = async (householdId: string, recordDisabled: boolean, isHouseholdDisplayed: boolean) => {
    if (!isHouseholdDisplayed) return;
    if (recordDisabled) {
      await showUpgradePopUp();
      return;
    }
    const hosting = latest.current.event?.Host.Hosting ?? false;
    addAuditEvent_LDM(hosting ? 'HostClickedGuestHousehold' : 'GuestClickedOtherGuestHousehold', {
      HouseholdId: householdId,
    });
    eventsRef.current.onNavigateToHouseholdCarousel(
      householdId,
      (latest.current.event?.Guests ?? []).map((g) => g.HouseholderID),
    );
  };

  /** OnHandle_HostCardAddress: online, with the host's and the main hall's addresses: GetHouseholdCoordinates
      (Host.HouseholderID), AddAuditEventDetailEvent(MyTimelineGoogleMapsDirections) and the web branch (GetOperatingSystem
      is Other without Cordova) NavigateTo_WebMaps(1, the directions query). Without addresses "Map is not available",
      offline "Please check your network connection and try again" (Info). A failure raises GoogleMapsNotInstalled
      ("application not found for uri.") or UnknownError. */
  const hostCardAddress = async () => {
    const host = latest.current.event?.Host;
    if (!navigator.onLine) {
      showFeedbackMessage('Please check your network connection and try again', PLATFORM_MESSAGE_TYPE.info);
      return;
    }
    if (!hasDirectionsAddresses(host)) {
      showFeedbackMessage('Map is not available', PLATFORM_MESSAGE_TYPE.info);
      return;
    }
    try {
      const coordinates = await fetchHouseholdCoordinatesById(host.HouseholderID);
      const mapsAddress = directionsQuery(host, coordinates);
      getOperatingSystem();
      addAuditEvent_LDM('MyTimelineGoogleMapsDirections', { EventDate: datePart(host.EventDate) });
      eventsRef.current.onNavigateToWebMaps(1, mapsAddress);
    } catch (e) {
      if (isSystemException(e)) throw e;
      const message = exceptionMessage(e);
      if (message.toLowerCase() === 'application not found for uri.')
        throw new UserException(
          'Please install and enable Google Maps',
          'Connect2_OrbitMobile_MUI.GoogleMapsNotInstalled',
        );
      throw new UserException(message, 'Connect2_OrbitMobile_MUI.UnknownError');
    }
  };

  return {
    state,
    // OnHandle_ContactOrganiser: AddAuditEventDetailEvent(ContactEventOrganiser), then the coordinator in the message
    // popup.
    onContactOrganiser: () => {
      const current = latest.current;
      addAuditEvent_LDM('ContactEventOrganiser', { EventDate: datePart(current.event?.Host.EventDate ?? '') });
      contactByMessage(organiserMessageData(current.coordinator?.coordinatorDetails, osImage(LDM_LOGO)), true);
    },
    // OnHandle_SetContainerHeight: only a changed height.
    onSetBannerHeight: (bannerHeight) => {
      if (bannerHeight !== latest.current.minBannerHeight) dispatch({ minBannerHeight: bannerHeight });
    },
    onHostInformation: (isHouseholdDisplayed) => {
      hostInformation(isHouseholdDisplayed).catch(raiseToFlowHandler);
    },
    onContactHostMessage: () => {
      contactByMessage(hostMessageData(latest.current.event?.Host), false);
    },
    onContactHostCall: () => {
      dispatch({ contactByPhoneData: hostPhoneCallData(latest.current.event?.Host) });
    },
    onHostAddress: () => {
      hostCardAddress().catch(raiseToFlowHandler);
    },
    onGuestClicked: (guest, isHouseholdDisplayed) => {
      goToHousehold(guest.HouseholderID, guest.RecordDisabled, isHouseholdDisplayed).catch(raiseToFlowHandler);
    },
    onGuestMessage: (data) => {
      contactByMessage(data, false);
    },
    // OnHandle_ContactByPhone: ContactByPhoneData = Event_PhoneCallInfo.
    onGuestPhoneCall: (data) => {
      dispatch({ contactByPhoneData: data });
    },
    onCloseContactByPhone: () => {
      dispatch({ contactByPhoneData: closedPhonePopup(latest.current.contactByPhoneData) });
    },
    onCloseContactByMessage: closeContactByMessage,
    // OnHandle_ContactByMessage_ClickedEmail: close the popup, then NavigateTo_ContactByEmail with the popup's data.
    onContactByMessageEmail: () => {
      const args = contactByEmailArgs(latest.current);
      closeContactByMessage();
      eventsRef.current.onNavigateToContactByEmail(args);
    },
  };
}

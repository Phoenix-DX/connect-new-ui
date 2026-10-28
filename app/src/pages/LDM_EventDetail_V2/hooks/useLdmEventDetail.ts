import { fetchCoordinatorDetails, fetchEventByEventId, type DetailGuestItem } from '@/api/event';
import { fetchHouseholdCoordinatesById } from '@/api/household';
import { osImage } from '@/lib/os-assets';
import { UserException, exceptionMessage, isSystemException } from '@/legacy/os/exceptions';
import {
  carouselFilteredEventResults,
  isFreeSubscriptionPlan,
  isRegionalSubscriptionPlan,
} from '@/pages/LDM_EventDetail_V2/components/actions';
import type { LdmEventDetailInputs } from '@/pages/LDM_EventDetail_V2/inputs';
import { showUpgradePopUp } from '@/platform/feedback/dialogs';
import { PLATFORM_MESSAGE_TYPE, showFeedbackMessage } from '@/platform/feedback';
import { setPreloadObject, useFlowState } from '@/platform/navigation';
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
  /** Clicked of EventDetail_ListItem: OnHandle_GoToHousehold (the row number of the guest in the list). */
  onGuestClicked: (guest: DetailGuestItem, isHouseholdDisplayed: boolean, currentRowNumber: number) => void;
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
    - Fetch at start and OnReady: a view that the view cache restored with the GetEventByEventId answer keeps its
      variables and does nothing. Otherwise GetCoordinatorDetails (a failure keeps its defaults), then
      GetEventByEventId (OnAfterFetch: HasInformation = Out_HasContent, IsFetching False) and, on a forward visit only,
      AddAuditRequestAPIEvent(RequestAPI_EventDetail): a restored view without the answer fetches again without the
      audit event (F40), so a visit sends at most one audit event (none when the user left before the answer: R1,
      as TST). A failure sets HasFetchError and goes to the flow handler.
    - Flow scope (item 8): GetCoordinatorDetails and GetEventByEventId are data actions (R1, `flow.fetch`): after the
      unmount their answers and failures are dropped, so OnReady stops before the RequestAPI audit event and raises
      nothing. The block events after an await stop (R3, `flow.events`; NavigateTo_HouseholdCarousel is an own action,
      `flow.own`). The subscription checks and GetHouseholdCoordinates (a server action, R2) answer after leaving,
      so the audit events after them still run. */
export function useLdmEventDetail(inputs: LdmEventDetailInputs, events: LdmEventDetailEvents): LdmEventDetailFlows {
  const { state, dispatch, latest, parameters, flow } = useFlowState({
    viewName: VIEW_NAME,
    reducer: ldmEventDetailReducer,
    initial: INITIAL_LDM_EVENT_DETAIL_STATE,
    restore: restoreLdmEventDetail,
    parameters: inputs,
    events,
    // The flows are defined below; the hook calls the ones of the newest render.
    onReady: (_isAlive, restored) => onReady(restored),
  });

  /** Fetch at start and OnReady. `restored` is the flag of useFlowState: the restored re-run makes the same calls and
      writes, without the audit event. useFlowState sends a rejection to the flow handler. */
  const onReady = async (restored: boolean) => {
    // restored without data: call again (F40; OutSystems keeps the skeleton)
    if (restored && !latest.current.isFetching) return;
    const callInputs = parameters.current;
    flow
      .fetch(fetchCoordinatorDetails(callInputs)) // R1
      .then((coordinator) => {
        dispatch({ coordinator });
      })
      .catch(() => {
        // GetCoordinatorDetails keeps its defaults (Out_HasContent True); the view does not read its fetch error.
      });
    const start = getCurrentTimeInMill();
    try {
      const out = await flow.fetch(fetchEventByEventId(callInputs)); // R1
      // OnAfterFetch_GetEventByEventId: HasInformation = Out_HasContent; Toggle_IsFetching(False).
      dispatch({
        event: out.eventResponse,
        hasEventFetchError: false,
        hasInformation: out.hasContent,
        isFetching: false,
      });
      // A forward visit only (F40). After the unmount the flow stopped at the answer (R1): no audit event, as TST.
      if (!restored) {
        addAuditEvent_LDM('RequestAPI_EventDetail', { RequestTime: String(getCurrentTimeInMill() - start) });
      }
    } catch (e) {
      dispatch({ hasEventFetchError: true }); // a no-op after the unmount
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
    else flow.events.onNavigateToHouseholdDetail(host.HouseholderID);
  };

  /** NavigateTo_HouseholdCarousel, an own action of the block (R3: it stops after the unmount), with the screen's
      Handler_NavigateTo_HouseholdCarousel: SetPreloadObject(the carousel list), then the event. On TST the screen
      handler sets the preload (item8-w23-errorpage.md §4 N5), so after leaving neither runs. */
  const navigateToHouseholdCarousel = flow.own(
    (preloading: ReturnType<typeof carouselFilteredEventResults>['preloading'], householdId: string) => {
      if (preloading) setPreloadObject(preloading);
      flow.events.onNavigateToHouseholdCarousel(
        householdId,
        (latest.current.event?.Guests ?? []).map((g) => g.HouseholderID),
      );
    },
  );

  /** OnHandle_GoToHousehold (ScreenBlock_EventDetail_V2.mvc.js :1505-1595): a displayed household: disabled record →
      App_Subscription_ShowUpgradePopUp. Else IsFreeSubscriptionPlan, IsRegionalSubscriptionPlan and
      CarouselFilteredEventResults(the guests, free or regional, the row number): the carousel list of the guests with
      HouseholdDisplay (and without RecordDisabled under a free or regional plan), and the row number goes down by the
      guests it leaves out before the row. Then AddAuditEventDetailEvent (HostClickedGuestHousehold /
      GuestClickedOtherGuestHousehold) and NavigateTo_HouseholdCarousel: the carousel list goes to SetPreloadObject and
      the event gets every guest's HouseholderID. The event's other arguments (the list length, the row number,
      IsLimitedLDMHost) are not read by the screen (LDM_EventDetail_V2.mvc.js :212-219), so they are not passed. */
  const goToHousehold = async (
    householdId: string,
    recordDisabled: boolean,
    isHouseholdDisplayed: boolean,
    currentRowNumber: number,
  ) => {
    if (!isHouseholdDisplayed) return;
    if (recordDisabled) {
      await showUpgradePopUp();
      return;
    }
    const isFree = await isFreeSubscriptionPlan(); // module actions: not wrapped, they answer after leaving
    const isRegional = await isRegionalSubscriptionPlan();
    const filtered = carouselFilteredEventResults(
      latest.current.event?.Guests ?? [],
      isFree || isRegional,
      currentRowNumber,
    );
    const hosting = latest.current.event?.Host.Hosting ?? false;
    addAuditEvent_LDM(hosting ? 'HostClickedGuestHousehold' : 'GuestClickedOtherGuestHousehold', {
      HouseholdId: householdId,
    });
    navigateToHouseholdCarousel(filtered.preloading, householdId);
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
      const coordinates = await fetchHouseholdCoordinatesById(host.HouseholderID); // server action (R2)
      const mapsAddress = directionsQuery(host, coordinates);
      getOperatingSystem();
      addAuditEvent_LDM('MyTimelineGoogleMapsDirections', { EventDate: datePart(host.EventDate) });
      flow.events.onNavigateToWebMaps(1, mapsAddress); // R3: nothing after the unmount
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
      flow.run(() => hostInformation(isHouseholdDisplayed));
    },
    onContactHostMessage: () => {
      contactByMessage(hostMessageData(latest.current.event?.Host), false);
    },
    onContactHostCall: () => {
      dispatch({ contactByPhoneData: hostPhoneCallData(latest.current.event?.Host) });
    },
    onHostAddress: () => {
      flow.run(() => hostCardAddress());
    },
    onGuestClicked: (guest, isHouseholdDisplayed, currentRowNumber) => {
      flow.run(() => goToHousehold(guest.HouseholderID, guest.RecordDisabled, isHouseholdDisplayed, currentRowNumber));
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
      flow.events.onNavigateToContactByEmail(args);
    },
  };
}

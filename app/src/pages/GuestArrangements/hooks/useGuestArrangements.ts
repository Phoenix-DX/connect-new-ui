import { fetchGuestArrangements } from '@/api/event';
import { showUpgradePopUp } from '@/platform/feedback/dialogs/subscription';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { useFlowState, type IsAlive } from '@/platform/navigation';
import { checkDirectoryAccess } from '@/lib/orbit/actions';
import { DirectoryAPIFilter } from '@/lib/orbit/staticEntities';
import { getContactHelpdeskSubject_Milestone, onApplicationEvent_ViewHousehold } from './guestArrangementsActions';
import {
  guestArrangementsCallInputs,
  guestArrangementsReducer,
  INITIAL_GUEST_ARRANGEMENTS_STATE,
  type GuestArrangementsBlockInputs,
  type GuestArrangementsState,
} from './guestArrangementsState';

/** The flows of ScreenBlock_GuestArrangements: OnReady (RefreshData, then OnAfterFetch_GetGuestArrangements),
    OnHandle_ClickedMember and OnHandle_ContactHelpdesk. The page calls this hook and passes the result to
    GuestArrangementsView.
    @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_GuestArrangements */

/** The events of the block, which the screen handles. */
export interface GuestArrangementsEvents {
  /** Event NavigateTo_HouseholdDetail(HouseholdId). */
  onNavigateToHouseholdDetail: (householdId: string) => void;
  /** Event ContactHelpdesk(Subject, EventName). */
  onContactHelpdesk: (subject: string, eventName: string) => void;
}

/** What the view reads, and its handlers. */
export interface GuestArrangementsFlows {
  /** The block variables (rendered). */
  state: GuestArrangementsState;
  /** OnHandle_ClickedMember(HouseholdId): the ClickedMember event of a member card. */
  onClickedMember: (householdId: string) => void;
  /** OnHandle_ContactHelpdesk: the ContactHelpdesk_Footer button. */
  onContactHelpdesk: () => void;
}

/** The state and the flows of the guest arrangements. The state comes from useFlowState and the view cache keeps it.
    - OnReady runs before the first paint, as in the old port (decision W28, `beforePaint`): the skeleton of
      RefreshData is in the first frame. It runs once per block, also in StrictMode.
    - Decision W23: `isAlive` guards the state writes only. OnReady has no app-level side effect after its call: after
      an unmount the call ends without a state write, and a failure still goes to the flow handler. OnHandle_ClickedMember
      runs to its end after an unmount (the event NavigateTo_HouseholdDetail and the application event, or the upgrade
      popup), as in the old port. */
export function useGuestArrangements(
  inputs: GuestArrangementsBlockInputs,
  events: GuestArrangementsEvents,
): GuestArrangementsFlows {
  const {
    state,
    dispatch,
    latest,
    parameters,
    events: eventsRef,
  } = useFlowState({
    viewName: 'Orbit_ScreenBlocks.ScreenBlock_GuestArrangements',
    reducer: guestArrangementsReducer,
    initial: INITIAL_GUEST_ARRANGEMENTS_STATE,
    parameters: inputs,
    events,
    // The flow is defined below; the hook calls the one of the newest render.
    onReady: (isAlive, restored) => onReady(isAlive, restored),
    beforePaint: true,
  });

  /** OnReady: a view that the view cache restored does nothing (pattern P-BACK). Otherwise RefreshData:
      IsFetchingData True, then GetGuestArrangements with the block variables of that moment, then
      OnAfterFetch_GetGuestArrangements. A failure rejects (useFlowState sends it to the flow handler); the skeleton
      stays. */
  const onReady = async (isAlive: IsAlive, restored: boolean): Promise<void> => {
    if (restored) return;
    dispatch({ type: 'fetchStarted' });
    const result = await fetchGuestArrangements(guestArrangementsCallInputs(latest.current, parameters.current));
    if (isAlive()) dispatch({ type: 'guestArrangementsFetched', result });
  };

  /** OnHandle_ClickedMember(HouseholdId), with Type = DirectoryAPIFilter.Member: CheckDirectoryAccess; with access the
      event NavigateTo_HouseholdDetail, then OnApplicationEvent_ViewHousehold; without it the upgrade popup
      (App_Subscription_ShowUpgradePopUp). */
  const clickedMember = async (householdId: string): Promise<void> => {
    const hasAccess = await checkDirectoryAccess(householdId, DirectoryAPIFilter.Member);
    if (hasAccess) {
      eventsRef.current.onNavigateToHouseholdDetail(householdId);
      onApplicationEvent_ViewHousehold(householdId, parameters.current.In_MilestoneId, parameters.current.In_EventId);
    } else {
      await showUpgradePopUp();
    }
  };

  /** OnHandle_ContactHelpdesk: the event ContactHelpdesk with GetContactHelpdeskSubject_Milestone(
      In_OrbitMilestoneTypeId, In_PreloadEventName, In_PreloadMilestoneName, EventDetails.StartDate,
      EventDetails.Location) and, as EventName, In_PreloadMilestoneName (as compiled). */
  const contactHelpdesk = () => {
    const p = parameters.current;
    const eventDetails = latest.current.guestArrangementsData.EventDetails;
    eventsRef.current.onContactHelpdesk(
      getContactHelpdeskSubject_Milestone(
        p.In_OrbitMilestoneTypeId,
        p.In_PreloadEventName,
        p.In_PreloadMilestoneName,
        eventDetails.StartDate,
        eventDetails.Location,
      ),
      p.In_PreloadMilestoneName,
    );
  };

  return {
    state,
    onClickedMember: (householdId) => {
      clickedMember(householdId).catch(raiseToFlowHandler);
    },
    onContactHelpdesk: contactHelpdesk,
  };
}

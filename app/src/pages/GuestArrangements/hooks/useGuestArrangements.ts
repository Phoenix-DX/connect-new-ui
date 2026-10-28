import { fetchGuestArrangements } from '@/api/event';
import { showUpgradePopUp } from '@/platform/feedback/dialogs/subscription';
import { useFlowState } from '@/platform/navigation';
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
    - Flow scope (item 8): GetGuestArrangements is a data action (R1, `flow.fetch`; GuestArrangements.js:1550): after
      the unmount its answer and its failure are dropped (no state write, no raise). CheckDirectoryAccess is a module
      action that calls a server action (R2): its flow goes on after the unmount. NavigateTo_HouseholdDetail is an own
      action of the block (R3, `flow.own`; GuestArrangements.js:1644): after the unmount it stops the flow, so neither
      the event nor OnApplicationEvent_ViewHousehold runs. The navigation of the parent from a left screen is blocked by
      the platform (R4). Without access, App_Subscription_ShowUpgradePopUp (a module action) still opens. */
export function useGuestArrangements(
  inputs: GuestArrangementsBlockInputs,
  events: GuestArrangementsEvents,
): GuestArrangementsFlows {
  const { state, dispatch, latest, parameters, flow } = useFlowState({
    viewName: 'Orbit_ScreenBlocks.ScreenBlock_GuestArrangements',
    reducer: guestArrangementsReducer,
    initial: INITIAL_GUEST_ARRANGEMENTS_STATE,
    parameters: inputs,
    events,
    // The flow is defined below; the hook calls the one of the newest render.
    onReady: (_isAlive, restored) => onReady(restored),
    beforePaint: true,
  });

  /** OnReady: a view that the view cache restored does nothing (pattern P-BACK). Otherwise RefreshData:
      IsFetchingData True, then GetGuestArrangements with the block variables of that moment, then
      OnAfterFetch_GetGuestArrangements. A failure rejects (useFlowState sends it to the flow handler); the skeleton
      stays. */
  const onReady = async (restored: boolean): Promise<void> => {
    if (restored) return;
    dispatch({ type: 'fetchStarted' });
    const result = await flow.fetch(
      fetchGuestArrangements(guestArrangementsCallInputs(latest.current, parameters.current)),
    ); // R1
    dispatch({ type: 'guestArrangementsFetched', result });
  };

  /** NavigateTo_HouseholdDetail(HouseholdId), an own action of the block (R3): the event NavigateTo_HouseholdDetail. */
  const navigateToHouseholdDetail = flow.own((householdId: string) => {
    flow.events.onNavigateToHouseholdDetail(householdId);
  });

  /** OnHandle_ClickedMember(HouseholdId), with Type = DirectoryAPIFilter.Member: CheckDirectoryAccess; with access
      NavigateTo_HouseholdDetail, then OnApplicationEvent_ViewHousehold; without it the upgrade popup
      (App_Subscription_ShowUpgradePopUp). */
  const clickedMember = async (householdId: string): Promise<void> => {
    const hasAccess = await checkDirectoryAccess(householdId, DirectoryAPIFilter.Member); // R2
    if (hasAccess) {
      navigateToHouseholdDetail(householdId); // R3: after the unmount the flow stops here
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
    flow.events.onContactHelpdesk(
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
      flow.run(() => clickedMember(householdId));
    },
    onContactHelpdesk: contactHelpdesk,
  };
}

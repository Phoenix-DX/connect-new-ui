import { useMemo } from 'react';
import { useSearchParams } from 'react-router';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { showFeedbackMessage } from '@/platform/feedback';
import { useFlagOn } from '@/platform/flags/flags';
import { useOsNavigate } from '@/platform/navigation';
import { HelperDetailsView } from './components/HelperDetailsView';
import { useHelperDetails, type HelperDetailsEvents } from './hooks/useHelperDetails';
import type { HelperDetailsInputs } from './hooks/helperDetailsState';
import { readHelpersDetailInputs, type HelpersDetailInputs } from './inputs';

const NO_ORBIT_ACCESS = "You don't have access to Orbit. Please contact the Orbit Helpdesk if you have any questions.";

/** Connect2_LegacyShared FeedbackMessageAfterTransition: its JS node shows the message 500 ms later, after the
    navigation that follows. */
function feedbackMessageAfterTransition(message: string, messageType: number): void {
  window.setTimeout(() => {
    showFeedbackMessage(message, messageType);
  }, 500);
}

/** ScreenBlock_HelperDetails on the screen: its flows (useHelperDetails) and its view. The hook runs here, at the place
    of the block, so that its OnReady keeps its order with the other blocks of the screen. */
function HelperDetails({ inputs, events }: { inputs: HelperDetailsInputs; events: HelperDetailsEvents }) {
  const flows = useHelperDetails(inputs, events);
  return (
    <HelperDetailsView
      id="$b1"
      preloadEventName={inputs.In_PreloadEventName}
      preloadMilestoneName={inputs.In_PreloadMilestoneName}
      orbitMilestoneTypeId={inputs.In_OrbitMilestoneTypeId}
      {...flows}
    />
  );
}

/** @origin UBTConnect.Legacy_OrbitEventsFlow.HelpersDetail
    The helpers of a hosting household for an event: ScreenBlock_HelperDetails (In_PreloadEventName = In_EventName,
    In_PreloadMilestoneName = In_MilestoneName; the placeholders Menu and CommonUI_Elements are empty), then
    CommonUI_InsideLayout. The screen has no lifecycle event and no call of its own.
    - OnHandle_NavigateToHouseholdDetail goes to HouseholdDetails.
    - OnHandle_ContactHelpdesk checks GetHasOrbitAccess (flag mobileOrbitAccess): with access ContactByEmailOrbitHelpdesk
      (In_MilestoneId "", as compiled); without it the no-access message after the transition, and HomeFeed. */
export default function HelpersDetail() {
  const [params] = useSearchParams();
  const navigate = useOsNavigate();
  const hasOrbitAccess = useFlagOn('mobileOrbitAccess');
  const route = useMemo<HelpersDetailInputs>(() => readHelpersDetailInputs(params), [params]);
  const inputs = useMemo<HelperDetailsInputs>(
    () => ({
      In_EventId: route.In_EventId,
      In_PreloadEventName: route.In_EventName,
      In_PreloadMilestoneName: route.In_MilestoneName,
      In_OrbitMilestoneTypeId: route.In_OrbitMilestoneTypeId,
      In_HostId: route.In_HostId,
    }),
    [route],
  );

  const events: HelperDetailsEvents = {
    onNavigateToHouseholdDetail: (householdId) => {
      navigate('/UBTConnect/HouseholdDetails', { HouseholdId: householdId });
    },
    onNavigateToContactHelpdesk: (subject, eventName) => {
      if (!hasOrbitAccess) {
        feedbackMessageAfterTransition(NO_ORBIT_ACCESS, 3);
        navigate('/UBTConnect/HomeFeed', {});
        return;
      }
      navigate('/UBTConnect/ContactByEmailOrbitHelpdesk', {
        In_EventName: eventName,
        In_Subject: subject,
        In_EventId: route.In_EventId,
        In_MilestoneId: '',
      });
    },
  };

  return (
    <>
      <HelperDetails inputs={inputs} events={events} />
      <CommonUiLayout id="$b2" />
    </>
  );
}

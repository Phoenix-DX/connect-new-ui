import { useMemo } from 'react';
import { useSearchParams } from 'react-router';
import { fetchLegacySignedImageURL } from '@/api/image';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { showFeedbackMessage } from '@/platform/feedback';
import { useFlagOn } from '@/platform/flags/flags';
import { useOsNavigate } from '@/platform/navigation';
import { GuestArrangementsView } from './components/GuestArrangementsView';
import { getSkeletonLoadingIdFromMilestoneTypeId } from './hooks/guestArrangementsActions';
import type { GuestArrangementsBlockInputs } from './hooks/guestArrangementsState';
import { useGuestArrangements, type GuestArrangementsEvents } from './hooks/useGuestArrangements';
import { readGuestArrangementsInputs, toGuestArrangementsBlockInputs } from './inputs';

const NO_ORBIT_ACCESS = "You don't have access to Orbit. Please contact the Orbit Helpdesk if you have any questions.";

/** Connect2_LegacyShared FeedbackMessageAfterTransition: its JS node shows the message 500 ms later, after the
    navigation that follows. */
function feedbackMessageAfterTransition(message: string, messageType: number): void {
  window.setTimeout(() => {
    showFeedbackMessage(message, messageType);
  }, 500);
}

/** ScreenBlock_GuestArrangements on the screen: its flows (useGuestArrangements) and its view. The hook runs here, at
    the place of the block, so that its OnReady runs before the lifecycle of CommonUI_InsideLayout, as in OutSystems,
    and a change of the block state renders only the block. The placeholders Menu and CommonUI_Elements are empty. */
function GuestArrangementsBlock({
  inputs,
  ...events
}: { inputs: GuestArrangementsBlockInputs } & GuestArrangementsEvents) {
  const { state, onClickedMember, onContactHelpdesk } = useGuestArrangements(inputs, events);
  return (
    <GuestArrangementsView
      id="$b1"
      preloadEventName={inputs.In_PreloadEventName}
      preloadMilestoneName={inputs.In_PreloadMilestoneName}
      orbitMilestoneTypeId={inputs.In_OrbitMilestoneTypeId}
      skeletonLoadingId={getSkeletonLoadingIdFromMilestoneTypeId(inputs.In_OrbitMilestoneTypeId)}
      isFetchingData={state.isFetchingData}
      isDataFetched={state.isDataFetched}
      hasData={state.hasData}
      guestArrangements={state.guestArrangementsData}
      getSignedImageURL={fetchLegacySignedImageURL}
      onClickedMember={onClickedMember}
      onContactHelpdesk={onContactHelpdesk}
    />
  );
}

/** @origin UBTConnect.Legacy_OrbitEventsFlow.GuestArrangements
    The guest arrangements of a visiting member, reached from MilestoneDetail (accommodation host, a guest with guest
    arrangements): ScreenBlock_GuestArrangements (In_PreloadMilestoneName = In_MilestoneTitle, In_PreloadEventName =
    In_EventName), then CommonUI_InsideLayout. The screen handles the two events of the block:
    - OnHandle_NavigateToHouseholdDetail goes to HouseholdDetails.
    - OnHandle_ContactHelpdesk checks GetHasOrbitAccess (flag mobileOrbitAccess): with access
      ContactByEmailOrbitHelpdesk (In_MilestoneId "", as compiled); without it the no-access message after the
      transition, and HomeFeed. */
export default function GuestArrangements() {
  const [params] = useSearchParams();
  const inputs = useMemo(() => readGuestArrangementsInputs(params), [params]);
  const blockInputs = useMemo(() => toGuestArrangementsBlockInputs(inputs), [inputs]);
  const navigate = useOsNavigate();
  const hasOrbitAccess = useFlagOn('mobileOrbitAccess');

  return (
    <>
      <GuestArrangementsBlock
        inputs={blockInputs}
        onNavigateToHouseholdDetail={(householdId) => {
          navigate('/UBTConnect/HouseholdDetails', { HouseholdId: householdId });
        }}
        onContactHelpdesk={(subject, eventName) => {
          if (!hasOrbitAccess) {
            feedbackMessageAfterTransition(NO_ORBIT_ACCESS, 3);
            navigate('/UBTConnect/HomeFeed', {});
            return;
          }
          navigate('/UBTConnect/ContactByEmailOrbitHelpdesk', {
            In_EventId: inputs.In_EventId,
            In_Subject: subject,
            In_EventName: eventName,
            In_MilestoneId: '',
          });
        }}
      />
      <CommonUiLayout id="$b2" />
    </>
  );
}

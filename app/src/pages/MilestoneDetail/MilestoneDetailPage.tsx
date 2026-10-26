import { useMemo } from 'react';
import { useSearchParams } from 'react-router';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { useFlagOn } from '@/platform/flags/flags';
import { showFeedbackMessage } from '@/platform/feedback';
import { useOsNavigate } from '@/platform/navigation';
import { AccommodationHostView } from './components/AccommodationHostView';
import { MilestoneWrapperView, type AccommodationHostSlot } from './components/MilestoneWrapperView';
import { useAccommodationHost, type AccommodationHostEvents } from './hooks/useAccommodationHost';
import { useMilestoneWrapper } from './hooks/useMilestoneWrapper';
import { readMilestoneDetailInputs, type MilestoneDetailInputs } from './inputs';

const NO_ORBIT_ACCESS = "You don't have access to Orbit. Please contact the Orbit Helpdesk if you have any questions.";

/** Connect2_LegacyShared FeedbackMessageAfterTransition: its JS node shows the message 500 ms later, after the
    navigation that follows. */
function feedbackMessageAfterTransition(message: string, messageType: number): void {
  window.setTimeout(() => {
    showFeedbackMessage(message, messageType);
  }, 500);
}

/* The two blocks of the screen with flows. Each one is a small component that calls the hook of the block and gives
   the result to the view of the block, so the flows live as long as the block, and a change of the block state
   renders only the block, as in OutSystems:
   - ScreenBlock_MilestoneWrapper `$b1`, with the inputs of the screen.
   - ScreenBlock_AccommodationHost `b1-$b5`. The wrapper mounts it only for an accommodation host milestone (from a
     notification, after GetGmpMilestoneHost answers). */

function AccommodationHost({ events, ...slot }: AccommodationHostSlot & { events: AccommodationHostEvents }) {
  return <AccommodationHostView {...slot} {...useAccommodationHost(slot.inputs, events)} />;
}

function MilestoneWrapper({ inputs, events }: { inputs: MilestoneDetailInputs; events: AccommodationHostEvents }) {
  const { body } = useMilestoneWrapper(inputs);
  return (
    <MilestoneWrapperView
      id="$b1"
      body={body}
      eventName={inputs.In_EventName}
      commonUIElementsAccomodationHost={<CommonUiLayout id="$b5" />}
      renderAccommodationHost={(slot) => <AccommodationHost {...slot} events={events} />}
    />
  );
}

/** @origin UBTConnect.Legacy_OrbitEventsFlow.MilestoneDetail
    ScreenBlock_MilestoneWrapper with an empty Menu placeholder and CommonUI_InsideLayout in the CommonUI placeholder of
    each type, then CommonUI_InsideLayout. The flows of the wrapper are in useMilestoneWrapper, those of the
    accommodation host in useAccommodationHost.
    - NavigateTo_GuestArrangements and NavigateTo_ContactHelpdesk first check GetHasOrbitAccess (flag
      mobileOrbitAccess, default-only on) and otherwise show the no-access message after the transition and go to
      HomeFeed; NavigateTo_HouseholdDetail goes straight there.
    - NavigateTo_ContactHostByEmail is raised only by the meal blocks, which are not built (Q5). */
export default function MilestoneDetail() {
  const [params] = useSearchParams();
  const inputs = useMemo(() => readMilestoneDetailInputs(params), [params]);
  const navigate = useOsNavigate();
  const hasOrbitAccess = useFlagOn('mobileOrbitAccess');

  /** The no-access branch shared by the handlers (e.g. OnHandle_NavigateTo_GuestArrangements). */
  const withOrbitAccess = (go: () => void) => {
    if (!hasOrbitAccess) {
      feedbackMessageAfterTransition(NO_ORBIT_ACCESS, 3);
      navigate('/UBTConnect/HomeFeed', {});
      return;
    }
    go();
  };

  const events: AccommodationHostEvents = {
    onNavigateToGuestArrangements: (memberId, milestoneTypeId, milestoneTitle, hostId) => {
      // OnHandle_NavigateTo_GuestArrangements
      withOrbitAccess(() => {
        navigate('/UBTConnect/GuestArrangements', {
          In_EventId: inputs.In_EventId,
          In_EventName: inputs.In_EventName,
          In_MilestoneTitle: milestoneTitle,
          In_HostId: hostId,
          In_MemberId: memberId,
          In_MilestoneId: inputs.In_MilestoneId,
          In_OrbitMilestoneTypeId: milestoneTypeId,
        });
      });
    },
    onNavigateToHouseholdDetail: (householdId) => {
      // OnHandle_NavigateToHouseholdDetail
      navigate('/UBTConnect/HouseholdDetails', { HouseholdId: householdId });
    },
    onNavigateToContactHelpdesk: (subject, eventName) => {
      // OnHandle_ContactHelpdesk: In_MilestoneId "" as compiled
      withOrbitAccess(() => {
        navigate('/UBTConnect/ContactByEmailOrbitHelpdesk', {
          In_Subject: subject,
          In_MilestoneId: '',
          In_EventName: eventName,
          In_EventId: inputs.In_EventId,
        });
      });
    },
  };

  return (
    <>
      <MilestoneWrapper inputs={inputs} events={events} />
      <CommonUiLayout id="$b6" />
    </>
  );
}

/** @origin UBTConnect.Legacy_OrbitEventsFlow.MilestoneDetail */
import { useSearchParams } from 'react-router';
import { useFlagOn } from '@/platform/flags/flags';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { showFeedbackMessage } from '@/platform/feedback';
import { useOsNavigate } from '@/platform/navigation';
import { ScreenBlock_MilestoneWrapper } from './components/ScreenBlock_MilestoneWrapper';

const NO_ORBIT_ACCESS = "You don't have access to Orbit. Please contact the Orbit Helpdesk if you have any questions.";

/** Boolean input from the query string (OutSystems writes "True" / "False"). */
const osBoolean = (value: string | null): boolean => value?.toLowerCase() === 'true';

/** Connect2_LegacyShared FeedbackMessageAfterTransition (runtime-sources/Connect2_LegacyShared.controller.js
    :2030-2085): its JS node shows the message 500 ms later, after the navigation that follows. */
function feedbackMessageAfterTransition(message: string, messageType: number): void {
  window.setTimeout(() => {
    showFeedbackMessage(message, messageType);
  }, 500);
}

/** UBTConnect Legacy_OrbitEventsFlow.MilestoneDetail (S = analysis/sources/pretty/UBTConnect.Legacy_OrbitEventsFlow.
    MilestoneDetail.mvc.js: view :187-400, controller :410-770). Inputs In_FromNotification, In_MilestoneId,
    In_EventId, In_HostId, In_OrbitMilestoneTypeId, In_MilestoneName, In_EventName. ScreenBlock_MilestoneWrapper with
    an empty Menu placeholder and CommonUI_InsideLayout in the CommonUI placeholder of each type (S :264-366), then
    CommonUI_InsideLayout (S :367-380). NavigateTo_GuestArrangements and NavigateTo_ContactHelpdesk first check
    GetHasOrbitAccess (flag mobileOrbitAccess, default-only on) and otherwise show the no-access message after the
    transition and go to HomeFeed; NavigateTo_HouseholdDetail goes straight there. The target screens are not built
    yet: the router shows them as not migrated. NavigateTo_ContactHostByEmail (S :412-470) is raised only by the meal
    blocks, which are not built (Q5). */
export default function MilestoneDetail() {
  const [params] = useSearchParams();
  const navigate = useOsNavigate();
  const hasOrbitAccess = useFlagOn('mobileOrbitAccess');
  const inEventId = params.get('In_EventId') ?? '0';
  const inEventName = params.get('In_EventName') ?? '';
  const inMilestoneId = params.get('In_MilestoneId') ?? '';

  /** The no-access branch shared by the handlers (e.g. OnHandle_NavigateTo_GuestArrangements S :530-580). */
  const withOrbitAccess = (go: () => void) => {
    if (!hasOrbitAccess) {
      feedbackMessageAfterTransition(NO_ORBIT_ACCESS, 3);
      navigate('/UBTConnect/HomeFeed', {});
      return;
    }
    go();
  };

  return (
    <>
      <ScreenBlock_MilestoneWrapper
        id="$b1"
        In_FromNotification={osBoolean(params.get('In_FromNotification'))}
        In_MilestoneId={inMilestoneId}
        In_EventId={inEventId}
        In_HostId={params.get('In_HostId') ?? '0'}
        In_OrbitMilestoneTypeId={params.get('In_OrbitMilestoneTypeId') ?? ''}
        In_MilestoneName={params.get('In_MilestoneName') ?? ''}
        In_EventName={inEventName}
        commonUIElementsAccomodationHost={<CommonUiLayout id="$b5" />}
        onNavigateToGuestArrangements={(memberId, milestoneTypeId, milestoneTitle, hostId) => {
          // OnHandle_NavigateTo_GuestArrangements (S :530-617)
          withOrbitAccess(() => {
            navigate('/UBTConnect/GuestArrangements', {
              In_EventId: inEventId,
              In_EventName: inEventName,
              In_MilestoneTitle: milestoneTitle,
              In_HostId: hostId,
              In_MemberId: memberId,
              In_MilestoneId: inMilestoneId,
              In_OrbitMilestoneTypeId: milestoneTypeId,
            });
          });
        }}
        onNavigateToHouseholdDetail={(householdId) => {
          // OnHandle_NavigateToHouseholdDetail (S :618-655)
          navigate('/UBTConnect/HouseholdDetails', { HouseholdId: householdId });
        }}
        onNavigateToContactHelpdesk={(subject, eventName) => {
          // OnHandle_ContactHelpdesk (S :656-723): In_MilestoneId "" as compiled
          withOrbitAccess(() => {
            navigate('/UBTConnect/ContactByEmailOrbitHelpdesk', {
              In_Subject: subject,
              In_MilestoneId: '',
              In_EventName: eventName,
              In_EventId: inEventId,
            });
          });
        }}
      />
      <CommonUiLayout id="$b6" />
    </>
  );
}

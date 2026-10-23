/** @origin UBTConnect.Legacy_OrbitEventsFlow.EmailContact */
import { useMemo } from 'react';
import { useSearchParams } from 'react-router';
import { useFlagOn } from '@/platform/flags/flags';
import { BottomBar } from '@/components/layout/BottomBar';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { showFeedbackMessage } from '@/platform/feedback';
import { useNavigateBack, useOsNavigate } from '@/platform/navigation';
import { readInputs } from './api';
import { ScreenBlock_ContactForm } from './components/ScreenBlock_ContactForm';

const NO_ORBIT_ACCESS = "You don't have access to Orbit. Please contact the Orbit Helpdesk if you have any questions.";

/** Connect2_LegacyShared FeedbackMessageAfterTransition (runtime-sources/Connect2_LegacyShared.controller.js
    :2030-2085): its JS node shows the message 500 ms later, after the navigation that follows. */
function feedbackMessageAfterTransition(message: string, messageType: number): void {
  window.setTimeout(() => {
    showFeedbackMessage(message, messageType);
  }, 500);
}

/** UBTConnect Legacy_OrbitEventsFlow.EmailContact (S = analysis/sources/UBTConnect.Legacy_OrbitEventsFlow.EmailContact.mvc.js:
    model :1-157, view :158-315, controller :316-409). Inputs In_IsContactHelpdesk, In_EventId, In_MilestoneId,
    In_TargetMemberId, In_Subject, In_MilestoneTitle, In_EventName, In_HostName, In_HostEmail, In_FormattedDateTime
    (S :12-61). ScreenBlock_ContactForm (In_MilestoneName = In_MilestoneTitle; Menu and CommonUI_Elements empty,
    BottomBar = BottomBarMenu, S :226-291), then CommonUI_InsideLayout (S :292-306). No built screen links to it
    (EmailContact Q2: review URLs). OnHandle_Submitted (S :334-376): GetHasOrbitAccess (flag mobileOrbitAccess,
    default-only on) → the previous screen; otherwise the no-access message after the transition and HomeFeed. */
export default function EmailContact() {
  const [params] = useSearchParams();
  const inputs = useMemo(() => readInputs(params), [params]);
  const navigate = useOsNavigate();
  const navigateBack = useNavigateBack();
  const hasOrbitAccess = useFlagOn('mobileOrbitAccess');
  return (
    <>
      <ScreenBlock_ContactForm
        id="$b1"
        inputs={inputs}
        bottomBar={<BottomBar id="$b2" />}
        onSubmitted={() => {
          // OnHandle_Submitted (S :334-376)
          if (hasOrbitAccess) {
            navigateBack();
            return;
          }
          feedbackMessageAfterTransition(NO_ORBIT_ACCESS, 3);
          navigate('/UBTConnect/HomeFeed', {});
        }}
      />
      <CommonUiLayout id="$b3" />
    </>
  );
}

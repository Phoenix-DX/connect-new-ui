import { useSearchParams } from 'react-router';
import { useFlagOn } from '../../lib/flags';
import { CommonUI_InsideLayout } from '../../shared/UBTConnect/CommonUI_InsideLayout';
import { showFeedbackMessage } from '@/platform/feedback';
import { useOsNavigate } from '@/platform/navigation';
import { ScreenBlock_ViewDocuments } from './components/ScreenBlock_ViewDocuments';

const NO_ORBIT_ACCESS = "You don't have access to Orbit. Please contact the Orbit Helpdesk if you have any questions.";

/** Connect2_LegacyShared FeedbackMessageAfterTransition (runtime-sources/Connect2_LegacyShared.controller.js
    :2030-2085): its JS node shows the message 500 ms later, after the navigation that follows. */
function feedbackMessageAfterTransition(message: string, messageType: number): void {
  window.setTimeout(() => {
    showFeedbackMessage(message, messageType);
  }, 500);
}

/** UBTConnect Legacy_OrbitEventsFlow.ViewDocuments (S = analysis/sources/UBTConnect.Legacy_OrbitEventsFlow.
    ViewDocuments.mvc.js: model :1-117, view :118-251, controller :252-371). No capture (no-capture.json, user
    2026-10-16): built from the compiled code. Inputs In_MemberId, In_EventId, In_EventName, In_EventStartDate,
    In_EventEndDate, In_EventLocation. ScreenBlock_ViewDocuments (Menu and CommonUI_Elements empty, S :186-227), then
    CommonUI_InsideLayout. OnHandle_ContactHelpdesk (S :270-318) checks GetHasOrbitAccess (flag mobileOrbitAccess,
    default-only on): ContactByEmailOrbitHelpdesk (In_MilestoneId ""); otherwise the no-access message after the
    transition and HomeFeed. */
export default function ViewDocuments() {
  const [params] = useSearchParams();
  const navigate = useOsNavigate();
  const hasOrbitAccess = useFlagOn('mobileOrbitAccess');
  const inEventId = params.get('In_EventId') ?? '0';

  return (
    <>
      <ScreenBlock_ViewDocuments
        id="$b1"
        In_MemberId={params.get('In_MemberId') ?? '0'}
        In_EventId={inEventId}
        In_EventName={params.get('In_EventName') ?? ''}
        In_EventStartDate={params.get('In_EventStartDate') ?? ''}
        In_EventEndDate={params.get('In_EventEndDate') ?? ''}
        In_EventLocation={params.get('In_EventLocation') ?? ''}
        onContactHelpdesk={(subject, eventName) => {
          // OnHandle_ContactHelpdesk (S :270-318)
          if (!hasOrbitAccess) {
            feedbackMessageAfterTransition(NO_ORBIT_ACCESS, 3);
            navigate('/UBTConnect/HomeFeed', {});
            return;
          }
          navigate('/UBTConnect/ContactByEmailOrbitHelpdesk', {
            In_Subject: subject,
            In_EventId: inEventId,
            In_EventName: eventName,
            In_MilestoneId: '',
          });
        }}
      />
      <CommonUI_InsideLayout id="$b2" />
    </>
  );
}

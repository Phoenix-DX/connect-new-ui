import { useSearchParams } from 'react-router';
import { CommonUI_InsideLayout } from '../../shared/UBTConnect/CommonUI_InsideLayout';
import { useOsNavigate } from '@/platform/navigation';
import { ScreenBlock_GenerateQRCode } from './components/ScreenBlock_GenerateQRCode';

/** UBTConnect Legacy_OrbitQRCodeFlow.QRCodeGenerate (S = analysis/sources/UBTConnect.Legacy_OrbitQRCodeFlow.
    QRCodeGenerate.mvc.js: model :1-117, view :118-251, controller :252-354). No capture (no-capture.json, user
    2026-10-16): built from the compiled code. Inputs In_MemberId, In_EventId, In_EventName, In_EventStartDate,
    In_EventEndDate, In_EventLocation. ScreenBlock_GenerateQRCode (Menu and CommonUI_Elements empty, S :186-227), then
    CommonUI_InsideLayout. OnHandle_ContactHelpdesk (S :270-301) navigates to ContactByEmailOrbitHelpdesk without an
    Orbit access check (unlike the other Orbit screens), as compiled. */
export default function QRCodeGenerate() {
  const [params] = useSearchParams();
  const navigate = useOsNavigate();
  const inEventId = params.get('In_EventId') ?? '0';

  return (
    <>
      <ScreenBlock_GenerateQRCode
        id="$b1"
        In_MemberId={params.get('In_MemberId') ?? '0'}
        In_EventId={inEventId}
        In_EventName={params.get('In_EventName') ?? ''}
        In_EventStartDate={params.get('In_EventStartDate') ?? ''}
        In_EventEndDate={params.get('In_EventEndDate') ?? ''}
        In_EventLocation={params.get('In_EventLocation') ?? ''}
        onNavigateToContactHelpdesk={(subject, eventName) => {
          // OnHandle_ContactHelpdesk (S :270-301)
          navigate('/UBTConnect/ContactByEmailOrbitHelpdesk', {
            In_MilestoneId: '',
            In_EventName: eventName,
            In_EventId: inEventId,
            In_Subject: subject,
          });
        }}
      />
      <CommonUI_InsideLayout id="$b2" />
    </>
  );
}

import { useSearchParams } from 'react-router';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { useNavigateBack } from '@/platform/navigation';
import { dateTimeInput } from './api';
import { ScreenBlock_HostSurvey } from './components/ScreenBlock_HostSurvey';

/** UBTConnect Legacy_OrbitEventsFlow.HostSurvey (S = analysis/sources/pretty/UBTConnect.Legacy_OrbitEventsFlow.
    HostSurvey.mvc.js: view :180-238, controller :245-372). Inputs In_EventId, In_MemberId, In_EventName,
    In_EventStartDate, In_EventEndDate. CommonUI_InsideLayout, then ScreenBlock_HostSurvey with the five inputs
    (placeholders Menu and CommonUI_Elements empty, S :197-238). OnHandle_NavigateTo_Back (S :264-287): back to the
    previous screen. */
export default function HostSurvey() {
  const [params] = useSearchParams();
  const navigateBack = useNavigateBack();
  return (
    <>
      <CommonUiLayout id="$b1" />
      <ScreenBlock_HostSurvey
        id="$b2"
        In_EventId={params.get('In_EventId') ?? '0'}
        In_MemberId={params.get('In_MemberId') ?? '0'}
        In_EventName={params.get('In_EventName') ?? ''}
        In_EventStartDate={dateTimeInput(params.get('In_EventStartDate'))}
        In_EventEndDate={dateTimeInput(params.get('In_EventEndDate'))}
        onNavigateToBack={() => {
          navigateBack();
        }}
      />
    </>
  );
}

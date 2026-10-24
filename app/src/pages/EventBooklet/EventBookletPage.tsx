/** @origin UBTConnect.Legacy_OrbitEventsFlow.EventBooklet */
import { useSearchParams } from 'react-router';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { useOsNavigate } from '@/platform/navigation';
import { ScreenBlock_EventBooklet } from './components/ScreenBlock_EventBooklet';

/** UBTConnect Legacy_OrbitEventsFlow.EventBooklet (S = analysis/sources/UBTConnect.Legacy_OrbitEventsFlow.
    EventBooklet.mvc.js: model :1-77, view :78-207, controller :208-298). Inputs In_EventId (Long Integer), In_EventName
    (S :12-23). ScreenBlock_EventBooklet (placeholders Menu and CommonUI_Elements empty, S :146-183), then
    CommonUI_InsideLayout (S :184-199). Reached from EventDetail (flag mobileOrbitEventBooklet, no access check).
    OnHandle_NavigateToHouseholdDetail (S :226-260) goes straight to HouseholdDetails. */
export default function EventBooklet() {
  const [params] = useSearchParams();
  const navigate = useOsNavigate();
  return (
    <>
      <ScreenBlock_EventBooklet
        id="$b1"
        In_EventId={params.get('In_EventId') ?? '0'}
        In_EventName={params.get('In_EventName') ?? ''}
        onNavigateToHouseholdDetail={(householdId) => {
          // OnHandle_NavigateToHouseholdDetail (S :226-260)
          navigate('/UBTConnect/HouseholdDetails', { HouseholdId: householdId });
        }}
      />
      <CommonUiLayout id="$b2" />
    </>
  );
}

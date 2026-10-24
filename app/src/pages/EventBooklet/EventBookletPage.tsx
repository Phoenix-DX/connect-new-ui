import { useSearchParams } from 'react-router';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { useOsNavigate } from '@/platform/navigation';
import { BackNavigationHandler } from '@/platform/navigation/BackNavigationHandler';
import { Dialog_AccessRestrictedAction_Legacy } from '@/shared/UBTConnect_Utils/Dialog_AccessRestrictedAction_Legacy';
import { EventBookletView } from './components/EventBookletView';
import { useEventBooklet } from './hooks/useEventBooklet';
import { readEventBookletInputs } from './inputs';

/** The instance id of the booklet block in the screen. */
const BLOCK_ID = '$b1';

/** @origin UBTConnect.Legacy_OrbitEventsFlow.EventBooklet
    The guest list of an Orbit event: the booklet block (instance `$b1`, its flows in useEventBooklet, its Menu and
    CommonUI_Elements placeholders empty), then CommonUI_InsideLayout. Inputs In_EventId and In_EventName. Reached from
    EventDetail (flag mobileOrbitEventBooklet, no access check). OnHandle_NavigateToHouseholdDetail opens
    HouseholdDetails at once. */
export default function EventBooklet() {
  const [params] = useSearchParams();
  const navigate = useOsNavigate();
  const inputs = readEventBookletInputs(params);
  const { onBackNavigation, ...booklet } = useEventBooklet(BLOCK_ID, inputs, {
    // OnHandle_NavigateToHouseholdDetail
    onNavigateToHouseholdDetail: (householdId) => {
      navigate('/UBTConnect/HouseholdDetails', { HouseholdId: householdId });
    },
  });
  const prefix = BLOCK_ID.replace('$', '');
  return (
    <>
      <EventBookletView
        id={BLOCK_ID}
        inEventName={inputs.In_EventName}
        {...booklet}
        backNavigationHandler={<BackNavigationHandler id={`${prefix}-$b23`} onBackNavigation={onBackNavigation} />}
        accessRestrictedDialog={
          <Dialog_AccessRestrictedAction_Legacy id={`${prefix}-FreeSubscriptionAlert`} scope={`${prefix}-b24`} />
        }
      />
      <CommonUiLayout id="$b2" />
    </>
  );
}

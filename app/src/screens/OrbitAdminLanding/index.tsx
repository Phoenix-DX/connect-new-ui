import { BottomBar } from '@/components/layout/BottomBar';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { useOsNavigate } from '@/platform/navigation';
import { getMilestoneScanFF, wireDateTimeParam } from './api';
import { ScreenBlock_AdminLanding } from './components/ScreenBlock_AdminLanding';

/** UBTConnect Legacy_OrbitAdminFlow.OrbitAdminLanding (analysis/sources/pretty/UBTConnect.Legacy_OrbitAdminFlow
    .OrbitAdminLanding.mvc.js: view :115-205, controller :206-388). No inputs. ScreenBlock_AdminLanding with
    BottomBarMenu (default inputs) in its BottomBar and empty Menu / CommonUI_Elements, then CommonUI_InsideLayout.
    Its NavigateTo_EventDetail event runs OnHandle_NavigateToEventDetail (:245-300): GetMilestoneScanFF, then
    OrbitAdminMilestones(EventId) when IsScanPerMilestone, else OrbitAdminEventDetail with the event's id, start date,
    location, name, end date and friendly type (original parameter names and order). */
export default function OrbitAdminLanding() {
  const navigate = useOsNavigate();

  return (
    <>
      <ScreenBlock_AdminLanding
        id="$b1"
        bottomBar={<BottomBar id="$b2" />}
        onNavigateToEventDetail={async (eventId, eventName, startDate, endDate, location, typeFriendly) => {
          const isScanPerMilestone = await getMilestoneScanFF();
          if (isScanPerMilestone) {
            navigate('/UBTConnect/OrbitAdminMilestones', { EventId: eventId });
            return;
          }
          navigate('/UBTConnect/OrbitAdminEventDetail', {
            In_EventId: eventId,
            In_EventStartDate: wireDateTimeParam(startDate),
            In_EventLocation: location,
            In_EventName: eventName,
            In_EventEndDate: wireDateTimeParam(endDate),
            In_EventTypeFriendly: typeFriendly,
          });
        }}
      />
      <CommonUiLayout id="$b3" />
    </>
  );
}

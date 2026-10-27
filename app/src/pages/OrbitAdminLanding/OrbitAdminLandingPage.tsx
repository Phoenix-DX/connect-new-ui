import { BottomBar } from '@/components/layout/BottomBar';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { AdminLandingView } from './components/AdminLandingView';
import { useAdminLanding } from './hooks/useAdminLanding';
import { useNavigateToEventDetail } from './hooks/useNavigateToEventDetail';

/** @origin UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminLanding
    The landing of an Orbit admin. No inputs. ScreenBlock_AdminLanding (its flows in useAdminLanding, its view in
    AdminLandingView) with BottomBarMenu (default inputs) in its BottomBar and empty Menu and CommonUI_Elements, then
    CommonUI_InsideLayout. Its event NavigateTo_EventDetail runs OnHandle_NavigateToEventDetail
    (useNavigateToEventDetail): it opens OrbitAdminEventDetail. */
export default function OrbitAdminLanding() {
  const onNavigateToEventDetail = useNavigateToEventDetail();
  const { state, onEventCardClicked } = useAdminLanding({ onNavigateToEventDetail });

  return (
    <>
      <AdminLandingView
        id="$b1"
        userFirstName={state.userFirstName}
        isFetchingData={state.isFetchingData}
        isDataFetched={state.isDataFetched}
        eventsSummary={state.eventsSummary}
        bottomBar={<BottomBar id="$b2" />}
        onEventCardClicked={onEventCardClicked}
      />
      <CommonUiLayout id="$b3" />
    </>
  );
}

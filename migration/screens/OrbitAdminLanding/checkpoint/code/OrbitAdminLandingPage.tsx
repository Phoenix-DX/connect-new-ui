import { BottomBar } from '@/components/layout/BottomBar';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { AdminLandingView } from './components/AdminLandingView';
import { useAdminLanding } from './hooks/useAdminLanding';
import { useNavigateToEventDetail } from './hooks/useNavigateToEventDetail';

/** @origin UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminLanding
    The landing of an Orbit admin, with the filter and sort headers of the TST publish of 2026-11 (re-capture of
    2026-11-07). No inputs. ScreenBlock_AdminLanding (its flows in useAdminLanding, its view in
    AdminLandingView) with BottomBarMenu (default inputs) in its BottomBar and empty Menu and CommonUI_Elements, then
    CommonUI_InsideLayout. Its event NavigateTo_EventDetail runs OnHandle_NavigateToEventDetail
    (useNavigateToEventDetail): GetMilestoneScanFF, then OrbitAdminMilestones (true) or OrbitAdminEventDetail (false,
    the live TST value). */
export default function OrbitAdminLanding() {
  const onNavigateToEventDetail = useNavigateToEventDetail();
  const { state, onEventCardClicked, onToggleFilterPopup, onToggleSortPopup } = useAdminLanding({
    onNavigateToEventDetail,
  });

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
        eventFilter={state.eventFilter}
        popupFiltersOpened={state.popupFiltersOpened}
        popupSortByOpened={state.popupSortByOpened}
        onToggleFilterPopup={onToggleFilterPopup}
        onToggleSortPopup={onToggleSortPopup}
      />
      <CommonUiLayout id="$b3" />
    </>
  );
}

import { useSearchParams } from 'react-router';
import { BottomBar } from '@/components/layout/BottomBar';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { AdminMilestonesView } from './components/AdminMilestonesView';
import { useAdminMilestones } from './hooks/useAdminMilestones';
import { useNavigateToMilestoneDetail } from './hooks/useNavigateToMilestoneDetail';
import { readInputs } from './inputs';

/** @origin UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminMilestones
    The milestones of an Orbit admin event, opened by OrbitAdminLanding with the input EventId when GetMilestoneScanFF
    is true (TST publish of 2026-10-27). ScreenBlock_AdminMilestones (its flows in useAdminMilestones, its view in
    AdminMilestonesView) with BottomBarMenu (default inputs) in its BottomBar and empty Menu and CommonUI_Elements, then
    CommonUI_InsideLayout. Its event NavigateTo_MilestoneDetail runs Handler_NavigateToMilestoneDetail
    (useNavigateToMilestoneDetail). Not captured (user decision I10-3 (a), 2026-10-29, no-capture.json): built from the
    compiled code and reviewed by hand. */
export default function OrbitAdminMilestones() {
  const [params] = useSearchParams();
  const inputs = readInputs(params);
  const onNavigateToMilestoneDetail = useNavigateToMilestoneDetail();
  const { state, onMilestoneCardClicked } = useAdminMilestones(inputs, { onNavigateToMilestoneDetail });

  return (
    <>
      <AdminMilestonesView
        id="$b1"
        userFirstName={state.userFirstName}
        isFetchingData={state.isFetchingData}
        isDataFetched={state.isDataFetched}
        milestones={state.milestones}
        bottomBar={<BottomBar id="$b2" />}
        onMilestoneCardClicked={onMilestoneCardClicked}
      />
      <CommonUiLayout id="$b3" />
    </>
  );
}

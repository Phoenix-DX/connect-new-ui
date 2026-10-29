import { useSearchParams } from 'react-router';
import { BottomBar } from '@/components/layout/BottomBar';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { AdminMilestoneDetailView } from './components/AdminMilestoneDetailView';
import { useAdminMilestoneDetail } from './hooks/useAdminMilestoneDetail';
import { readInputs } from './inputs';

/** @origin UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminMilestoneDetail
    The milestone detail of an Orbit admin who scans QR codes per milestone, opened by OrbitAdminMilestones with the
    seven inputs In_EventId, In_MilestoneId, In_MilestoneName, In_MilestoneDate, In_MilestoneStartDate,
    In_MilestoneEndDate and In_MilestoneDescription. The screen has no logic: it renders ScreenBlock_AdminMilestoneDetail
    with the inputs and BottomBarMenu (default inputs) in its BottomBar, with empty Menu and CommonUI_Elements, then
    CommonUI_InsideLayout (SCR view :183-266). The flows of the block are in useAdminMilestoneDetail. Not captured
    (user decision I10-3 (a), 2026-10-29, no-capture.json): built from the compiled code and reviewed by eye. */
export default function OrbitAdminMilestoneDetail() {
  const [params] = useSearchParams();
  const inputs = readInputs(params);
  const { state, onScanQrCodeClicked, onScanMilestoneDone, onErrorMessageOk } = useAdminMilestoneDetail(inputs);
  return (
    <>
      <AdminMilestoneDetailView
        id="$b1"
        bottomBar={<BottomBar id="$b2" />}
        {...inputs}
        state={state}
        onScanQrCodeClicked={onScanQrCodeClicked}
        onScanMilestoneDone={onScanMilestoneDone}
        onErrorMessageOk={onErrorMessageOk}
      />
      <CommonUiLayout id="$b3" />
    </>
  );
}

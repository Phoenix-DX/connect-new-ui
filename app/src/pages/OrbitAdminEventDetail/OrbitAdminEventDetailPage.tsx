import { useSearchParams } from 'react-router';
import { BottomBar } from '@/components/layout/BottomBar';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { AdminEventDetailView } from './components/AdminEventDetailView';
import { useAdminEventDetail } from './hooks/useAdminEventDetail';
import { readInputs } from './inputs';

/** @origin UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminEventDetail
    The event detail of an Orbit admin, opened by OrbitAdminLanding with the six inputs In_EventId, In_EventName,
    In_EventStartDate, In_EventEndDate, In_EventLocation and In_EventTypeFriendly. The screen has no logic: it renders
    ScreenBlock_AdminEventDetail with the inputs and BottomBarMenu (default inputs) in its BottomBar, with empty Menu and
    CommonUI_Elements, then CommonUI_InsideLayout. The flows of the block are in useAdminEventDetail. Not captured
    (user decision 2026-10-16, no-capture.json): built from the compiled code and reviewed by hand. */
export default function OrbitAdminEventDetail() {
  const [params] = useSearchParams();
  const inputs = readInputs(params);
  const { state, onScanQrCodeClicked, onScanEventDone, onErrorMessageOk } = useAdminEventDetail(inputs);
  return (
    <>
      <AdminEventDetailView
        id="$b1"
        bottomBar={<BottomBar id="$b2" />}
        {...inputs}
        state={state}
        onScanQrCodeClicked={onScanQrCodeClicked}
        onScanEventDone={onScanEventDone}
        onErrorMessageOk={onErrorMessageOk}
      />
      <CommonUiLayout id="$b3" />
    </>
  );
}

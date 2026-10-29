import { fetchAdminEventInformation, fetchScanEventQRCode } from '@/api/event';
import { useAdminQRCodeScan } from '@/containers/AdminQRCodeScan';
import { useFlowState } from '@/platform/navigation';
import type { AdminEventDetailInputs } from '@/pages/OrbitAdminEventDetail/inputs';
import { onApplicationEvent_Orbit, textToIntegerToLongInteger } from './adminEventDetailActions';
import {
  adminEventDetailReducer,
  adminEventInformationInputs,
  INITIAL_ADMIN_EVENT_DETAIL_STATE,
  scannedMemberName,
  type AdminEventDetailPatch,
  type AdminEventDetailState,
} from './adminEventDetailState';

/** What the page renders and the handlers of the events of the block's widgets. */
export interface AdminEventDetailFlows {
  /** The block variables (rendered). */
  state: AdminEventDetailState;
  /** OnClick_ScanQrCode: the Scan QR Code button. */
  onScanQrCodeClicked: () => void;
  /** OnHandle_ScanEventDone: Event_Done of Popup_QRCodeScan (the Done button). */
  onScanEventDone: () => void;
  /** OnHandle_OrbitErrorMessage: ClickedOk of OrbitErrorMessage. */
  onErrorMessageOk: () => void;
}

/** The flows of the block ScreenBlock_AdminEventDetail (the block controller).
    - OnReady: a back navigation that the view cache restored with the Get_EventInformation answer does nothing
      (P-BACK); else RefreshData, also for a restored view without the answer (F40).
    - RefreshData: IsFetchingData True, Get_EventInformation (on demand; the block variables travel with it), then
      OnAfterFetch: EventType, IsFetchingData False.
    - The scan flows (OnClick_ScanQrCode, OnHandle_ScanCode, OnToggle_PopupQRCode, OnHandle_ScanEventDone,
      OnHandle_OrbitErrorMessage) are the shared useAdminQRCodeScan (containers/AdminQRCodeScan) with the strategy of
      this block: the LaunchQRCodeScanner audit event before ScanBarcode; for a code of this event the check-in
      GetScanEventQRCode (AdminMemberId = IntegerToLongInteger(TextToInteger(MemberId)), EB:1018), the answer's role,
      seats, tag and guest role, and after a successful check-in the QRCodeScanned audit event.
    - Flow scope (item 8): Get_EventInformation is a data action (R1, `flow.fetch`): after the unmount its answer and
      its failure are dropped, and OnAfterFetch does not run. OnHandle_ScanCode and OnToggle_PopupQRCode are own
      actions of the block (R3, `flow.own`; ensureControllerAlive, ScreenBlock_AdminEventDetail.js:935, :1048): a scan
      that ends after the unmount stops at OnHandle_ScanCode; a flow that is already inside it stops at
      OnToggle_PopupQRCode, before the QRCodeScanned audit event. CheckBarcodePlugin, ScanBarcode, the audit events,
      GetMemberByMemberId, the signed image URL and the check-in GetScanEventQRCode are plugin, module or server
      actions: not wrapped, they run after leaving (R2). The messages show (R5).
    @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminEventDetail */
export function useAdminEventDetail(inputs: AdminEventDetailInputs): AdminEventDetailFlows {
  const { state, dispatch, latest, parameters, flow } = useFlowState({
    viewName: 'Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminEventDetail',
    reducer: adminEventDetailReducer,
    initial: INITIAL_ADMIN_EVENT_DETAIL_STATE,
    parameters: inputs,
    // The flows are defined below; the hook calls the ones of the newest render.
    onReady: (_flow, restored) => onReady(restored),
  });

  /** RefreshData: IsFetchingData True, Get_EventInformation, OnAfterFetch_Get_EventInformation. The call sends the
      block variables after the first assignment. */
  const refreshData = async () => {
    const fetching: AdminEventDetailPatch = { isFetchingData: true };
    dispatch(fetching);
    const info = await flow.fetch(
      fetchAdminEventInformation(adminEventInformationInputs(parameters.current, { ...latest.current, ...fetching })),
    ); // R1
    dispatch({ isDataFetched: true, hasQRCode: info.hasQRCode });
    dispatch({ eventType: info.orbitEventType, isFetchingData: false });
  };

  /** OnReady. A view that the view cache restored with the Get_EventInformation answer keeps its saved state.
      useFlowState sends a rejection to the flow handler. */
  const onReady = async (restored: boolean) => {
    // restored without data: call again (F40; OutSystems keeps the skeleton)
    if (restored && latest.current.isDataFetched) return;
    await refreshData();
  };

  const scan = useAdminQRCodeScan(
    { dispatch, latest, parameters, flow },
    {
      emptyScannedUserPatch: { UserRole: '', Seats: [], Tag: '', GuestRole: '' },
      adminMemberId: textToIntegerToLongInteger,
      checkIn: async (info, member, admin) => {
        const result = await fetchScanEventQRCode(info.EventId, info.MemberId, member, admin); // server action (R2)
        return result;
      },
      scannedUserOf: (result) => ({
        UserRole: result.UserRole,
        Seats: result.Seats,
        Tag: result.Tag,
        GuestRole: result.GuestRole,
      }),
      onLaunch: (event) => {
        onApplicationEvent_Orbit('LaunchQRCodeScanner', {
          EventId: event.In_EventId,
          EventTitle: event.In_EventName,
          EventType: event.In_EventTypeFriendly,
          EventLocation: event.In_EventLocation,
          EventStartDate: event.In_EventStartDate,
          EventEndDate: event.In_EventEndDate,
        });
      },
      // ScannedUser.Member is the member and ScannedUser.UserRole the role of the answer (assigned before).
      onSuccess: (event, member, result) => {
        onApplicationEvent_Orbit('QRCodeScanned', {
          EventId: event.In_EventId,
          EventTitle: event.In_EventName,
          EventLocation: event.In_EventLocation,
          ScannedMemberId: member.Id,
          ScannedMemberName: scannedMemberName(member),
          ScannedMemberRole: result.UserRole,
        });
      },
    },
  );

  return {
    state,
    onScanQrCodeClicked: scan.onScanQrCodeClicked,
    onScanEventDone: scan.onScanDone,
    onErrorMessageOk: scan.onErrorMessageOk,
  };
}

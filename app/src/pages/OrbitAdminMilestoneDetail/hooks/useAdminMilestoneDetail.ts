import { fetchAdminMilestoneInformation, fetchScanMilestoneQRCode } from '@/api/event';
import { useAdminQRCodeScan } from '@/containers/AdminQRCodeScan';
import { useFlowState } from '@/platform/navigation';
import type { AdminMilestoneDetailInputs } from '@/pages/OrbitAdminMilestoneDetail/inputs';
import { ScanClient } from '@/pages/OrbitAdminMilestoneDetail/staticEntities';
import { textToLongIntegerValidated } from './adminMilestoneDetailActions';
import {
  adminMilestoneDetailReducer,
  adminMilestoneInformationInputs,
  INITIAL_ADMIN_MILESTONE_DETAIL_STATE,
  type AdminMilestoneDetailPatch,
  type AdminMilestoneDetailState,
} from './adminMilestoneDetailState';

/** What the page renders and the handlers of the events of the block's widgets. */
interface AdminMilestoneDetailFlows {
  /** The block variables (rendered). */
  state: AdminMilestoneDetailState;
  /** OnClick_ScanQrCode: the Scan QR Code button. */
  onScanQrCodeClicked: () => void;
  /** OnHandle_ScanMilestoneDone: Event_Done of Popup_QRCodeScan_Milestone (the Done button). */
  onScanMilestoneDone: () => void;
  /** OnHandle_OrbitErrorMessage: ClickedOk of OrbitErrorMessage. */
  onErrorMessageOk: () => void;
}

/** The flows of the block ScreenBlock_AdminMilestoneDetail (the block controller, SB :773-1560).
    - OnReady (:1149-1203): a view that the view cache restored with the answer does nothing (P-BACK); else
      RefreshData (:994-1027): IsFetchingData True, Get_MilestoneInformation (the block variables travel with it),
      then OnAfterFetch (:1052-1080): MilestoneType, IsFetchingData False. A failed call keeps IsFetchingData.
    - The scan flows (OnClick_ScanQrCode :879-969, OnHandle_ScanCode :1204-1480, OnToggle_PopupQRCode,
      OnHandle_ScanMilestoneDone, OnHandle_OrbitErrorMessage) are the shared useAdminQRCodeScan
      (containers/AdminQRCodeScan) with the strategy of this block: no audit event (unlike the event scan); the
      scanned user also gets In_MilestoneDescription; a code of another event also clears the row and the seating
      plan; for a code of this event the check-in GetScanMilestoneQRCode (ScanClient ConnectMobile, In_MilestoneId,
      MilestoneType.Id, the cached user as admin with TextToLongInteger), then the answer's role, seats, tag, guest
      role, row and seating plan.
    - Flow scope (item 8): Get_MilestoneInformation is a data action (R1, `flow.fetch`). OnHandle_ScanCode and
      OnToggle_PopupQRCode are own actions of the block (R3, `flow.own`; ensureControllerAlive, SB :1211, :975).
      CheckBarcodePlugin, ScanBarcode, GetMemberByMemberId, the signed image URL and GetScanMilestoneQRCode are plugin,
      module or server actions: not wrapped (R2). The messages show (R5).
    @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminMilestoneDetail */
export function useAdminMilestoneDetail(inputs: AdminMilestoneDetailInputs): AdminMilestoneDetailFlows {
  const { state, dispatch, latest, parameters, flow } = useFlowState({
    viewName: 'Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminMilestoneDetail',
    reducer: adminMilestoneDetailReducer,
    initial: INITIAL_ADMIN_MILESTONE_DETAIL_STATE,
    parameters: inputs,
    // The flows are defined below; the hook calls the ones of the newest render.
    onReady: (_flow, restored) => onReady(restored),
  });

  /** RefreshData: IsFetchingData True, Get_MilestoneInformation, OnAfterFetch_Get_MilestoneInformation. */
  const refreshData = async () => {
    const fetching: AdminMilestoneDetailPatch = { isFetchingData: true };
    dispatch(fetching);
    const info = await flow.fetch(
      fetchAdminMilestoneInformation(
        adminMilestoneInformationInputs(parameters.current, { ...latest.current, ...fetching }),
      ),
    ); // R1
    dispatch({ isDataFetched: true, hasQRCode: info.hasQRCode });
    dispatch({ milestoneType: info.orbitMilestoneType, isFetchingData: false });
  };

  /** OnReady (WasCurrentViewRestoredFromCache). useFlowState sends a rejection to the flow handler. */
  const onReady = async (restored: boolean) => {
    // restored without data: call again (F40; OutSystems keeps the skeleton)
    if (restored && latest.current.isDataFetched) return;
    await refreshData();
  };

  const scan = useAdminQRCodeScan(
    { dispatch, latest, parameters, flow },
    {
      scannedMember: (milestone) => ({ MilestoneDescription: milestone.In_MilestoneDescription }),
      emptyScannedUserPatch: { UserRole: '', Seats: [], Tag: '', GuestRole: '', RowAllocation: '', SeatingPlan: '' },
      adminMemberId: textToLongIntegerValidated,
      checkIn: async (info, member, admin, milestone) => {
        const result = await fetchScanMilestoneQRCode(ScanClient.ConnectMobile, {
          EventId: info.EventId,
          MilestoneId: milestone.In_MilestoneId,
          MilestoneType: latest.current.milestoneType.Id,
          MemberId: info.MemberId,
          member,
          admin,
        }); // server action (R2)
        return result;
      },
      scannedUserOf: (result) => ({
        UserRole: result.UserRole,
        Seats: result.Seats,
        Tag: result.Tag,
        GuestRole: result.GuestRole,
        RowAllocation: result.RowAllocation,
        SeatingPlan: result.SeatingPlanName,
      }),
    },
  );

  return {
    state,
    onScanQrCodeClicked: scan.onScanQrCodeClicked,
    onScanMilestoneDone: scan.onScanDone,
    onErrorMessageOk: scan.onErrorMessageOk,
  };
}

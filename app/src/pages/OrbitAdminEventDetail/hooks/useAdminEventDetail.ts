import { fetchAdminEventInformation, fetchScanEventQRCode } from '@/api/event';
import { fetchLegacySignedImageURL } from '@/api/image';
import { fetchMember } from '@/api/member';
import { exceptionMessage, isSystemException, UserException } from '@/legacy/os/exceptions';
import { checkBarcodePlugin, scanBarcode, SCANNER_CLOSED_BY_USER } from '@/platform/device/barcodePlugin';
import { PLATFORM_MESSAGE_TYPE, showFeedbackMessage } from '@/platform/feedback';
import { useFlowState } from '@/platform/navigation';
import { appManager_GetCachedUserInfo } from '@/platform/session/cachedUserInfo';
import type { AdminEventDetailInputs } from '@/pages/OrbitAdminEventDetail/inputs';
import { CameraDirection, ScanOrientation } from '@/pages/OrbitAdminEventDetail/staticEntities';
import { DirectoryAPIFilter, ImageSigningSize } from '@/lib/orbit/staticEntities';
import {
  containsIgnoreCase,
  deserializeQRCodeInformation,
  onApplicationEvent_Orbit,
  textToIntegerToLongInteger,
} from './adminEventDetailActions';
import {
  adminEventDetailReducer,
  adminEventInformationInputs,
  INITIAL_ADMIN_EVENT_DETAIL_STATE,
  NO_SCAN_ERROR,
  scannedMemberName,
  type AdminEventDetailPatch,
  type AdminEventDetailState,
} from './adminEventDetailState';

const UNPROCESSABLE_QR_CODE = 'This QR Code was unable to be processed. Please try again later.';
const WRONG_EVENT = 'Guest is not allocated to this event.';
const UNREADABLE_QR_CODE = 'Unable to read QR code, please try again.';

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
    - OnClick_ScanQrCode: with a QR code, CheckBarcodePlugin. When the plugin is available: IsProcessingData True, the
      LaunchQRCodeScanner audit event, ScanBarcode, then OnHandle_ScanCode. When the scan fails: IsProcessingData
      False and, unless the user closed the scanner, the scanner's error message. When the plugin is not available:
      its error message.
    - OnHandle_ScanCode: reads the QR code, GetMemberByMemberId, GetCacheableSignedImageURL, then the check-in
      GetScanEventQRCode (only for a code of this event), the result popup and the QRCodeScanned audit event.
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

  /** OnToggle_PopupQRCode: QRCodePopupOpened = not QRCodePopupOpened. An own action (R3, :1048). */
  const onTogglePopupQRCode = flow.own(() => {
    dispatch({ qrCodePopupOpened: !latest.current.qrCodePopupOpened });
  });

  /** OnHandle_ScanCode(CodeScanned). An own action (R3, :935): OnClick_ScanQrCode calls it after ScanBarcode. */
  const onHandleScanCode = flow.own(async (codeScanned: string) => {
    const event = parameters.current;
    try {
      const info = deserializeQRCodeInformation(codeScanned);
      // Has data?
      if (info.EventId === '0' || info.MemberId === '0') {
        dispatch({ isProcessingData: false });
        showFeedbackMessage(UNPROCESSABLE_QR_CODE, PLATFORM_MESSAGE_TYPE.info);
        return;
      }
      const member = await fetchMember(info.MemberId); // server action: not wrapped (R2)
      const signedURL = await fetchLegacySignedImageURL(
        info.MemberId,
        DirectoryAPIFilter.Member,
        ImageSigningSize.Small,
      ); // module action: not wrapped (R2)
      dispatch({ scannedUser: { ...latest.current.scannedUser, Member: member, SignedURL: signedURL } });
      // Same EventId?
      if (info.EventId !== event.In_EventId) {
        dispatch({
          scanResult: { Success: false, ErrorMessage: WRONG_EVENT },
          scannedUser: { ...latest.current.scannedUser, UserRole: '', Seats: [], Tag: '', GuestRole: '' },
        });
        onTogglePopupQRCode();
        dispatch({ isProcessingData: false });
        return;
      }
      const admin = appManager_GetCachedUserInfo();
      // The check-in: a server action, not wrapped (R2).
      const result = await fetchScanEventQRCode(info.EventId, info.MemberId, member, {
        // AdminMemberId = IntegerToLongInteger(TextToInteger(MemberId)) (EB:1018).
        MemberId: textToIntegerToLongInteger(admin.MemberId),
        FirstName: admin.FirstName,
        LastName: admin.LastName,
        Locality: admin.Locality,
        Country: admin.Country,
      });
      dispatch({
        scannedUser: {
          ...latest.current.scannedUser,
          UserRole: result.UserRole,
          Seats: result.Seats,
          Tag: result.Tag,
          GuestRole: result.GuestRole,
        },
      });
      // Success?
      dispatch({ scanResult: { Success: result.Status.Success, ErrorMessage: result.Status.ErrorMessage } });
      onTogglePopupQRCode();
      dispatch({ isProcessingData: false });
      if (result.Status.Success) {
        // ScannedUser.Member is the member and ScannedUser.UserRole the role of the answer (assigned above).
        onApplicationEvent_Orbit('QRCodeScanned', {
          EventId: event.In_EventId,
          EventTitle: event.In_EventName,
          EventLocation: event.In_EventLocation,
          ScannedMemberId: member.Id,
          ScannedMemberName: scannedMemberName(member),
          ScannedMemberRole: result.UserRole,
        });
      }
    } catch (e) {
      // Handle Error: AllExceptions. The ControllerDisposedException of an own action (R3) is a system exception.
      if (isSystemException(e)) throw e;
      dispatch({ isProcessingData: false });
      const message = exceptionMessage(e);
      // Index(ExceptionMessage, "Failed to deserialize JSON", ignoreCase True) <> -1 (EB:1150).
      if (containsIgnoreCase(message, 'Failed to deserialize JSON')) {
        dispatch({ scanError: { IsShowErrorMessage: true, Message: UNREADABLE_QR_CODE } });
        return;
      }
      throw new UserException(message, 'Connect2_OrbitMobile_MUI.UnknownError');
    }
  });

  /** OnClick_ScanQrCode. */
  const onClickScanQrCode = async () => {
    if (!latest.current.hasQRCode) return;
    const check = await checkBarcodePlugin(); // module action: not wrapped (R2)
    if (!check.IsAvailable) {
      showFeedbackMessage(check.Error.ErrorMessage, PLATFORM_MESSAGE_TYPE.info);
      return;
    }
    dispatch({ isProcessingData: true });
    const event = parameters.current;
    onApplicationEvent_Orbit('LaunchQRCodeScanner', {
      EventId: event.In_EventId,
      EventTitle: event.In_EventName,
      EventType: event.In_EventTypeFriendly,
      EventLocation: event.In_EventLocation,
      EventStartDate: event.In_EventStartDate,
      EventEndDate: event.In_EventEndDate,
    });
    // ScanBarcode as the block calls it. Hint is TextToInteger("Entities.Format.ALL") = 0 in the compiled code, a null
    // identifier that ScanBarcode turns into Format.ALL.
    const scan = await scanBarcode(
      {
        ScanInstructions: 'Please center the code in the frame',
        CameraDirection: CameraDirection.BackCamera,
        ScanOrientation: ScanOrientation.Portrait,
        ScanButton: false,
        ScanButtonText: 'Scan',
        ShowCameraSelection: false,
        Hint: 0,
        ScannerFPS: -1,
        AndroidScanningLibrary: 'Entities.AndroidScanningLibrary.ZXing',
      },
      { showFeedbackMessage },
    ); // plugin action: not wrapped (R2)
    if (scan.Success) {
      await onHandleScanCode(scan.ScanResult.Text); // R3
      return;
    }
    dispatch({ isProcessingData: false });
    if (scan.Error.ErrorCode !== SCANNER_CLOSED_BY_USER) {
      showFeedbackMessage(scan.Error.ErrorMessage, PLATFORM_MESSAGE_TYPE.info); // R5
    }
  };

  /** OnHandle_ScanEventDone: OnToggle_PopupQRCode, then OnClick_ScanQrCode (the next scan). */
  const onHandleScanEventDone = async () => {
    onTogglePopupQRCode();
    await onClickScanQrCode();
  };

  /** OnHandle_OrbitErrorMessage: reset ScanError, then OnClick_ScanQrCode. */
  const onHandleOrbitErrorMessage = async () => {
    dispatch({ scanError: NO_SCAN_ERROR });
    await onClickScanQrCode();
  };

  return {
    state,
    onScanQrCodeClicked: () => {
      flow.run(() => onClickScanQrCode());
    },
    onScanEventDone: () => {
      flow.run(() => onHandleScanEventDone());
    },
    onErrorMessageOk: () => {
      flow.run(() => onHandleOrbitErrorMessage());
    },
  };
}

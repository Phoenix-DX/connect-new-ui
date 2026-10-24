import { useRef } from 'react';
import { fetchAdminEventInformation, fetchScanEventQRCode } from '@/api/event';
import { fetchLegacySignedImageURL } from '@/api/image';
import { fetchMember } from '@/api/member';
import { exceptionMessage, isSystemException, UserException } from '@/legacy/os/exceptions';
import { checkBarcodePlugin, scanBarcode, SCANNER_CLOSED_BY_USER } from '@/platform/device/barcodePlugin';
import { PLATFORM_MESSAGE_TYPE, showFeedbackMessage } from '@/platform/feedback';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { useFlowState, type IsAlive } from '@/platform/navigation';
import { appManager_GetCachedUserInfo } from '@/platform/session/cachedUserInfo';
import type { AdminEventDetailInputs } from '@/pages/OrbitAdminEventDetail/inputs';
import { CameraDirection, ScanOrientation } from '@/pages/OrbitAdminEventDetail/staticEntities';
import { DirectoryAPIFilter, ImageSigningSize } from '@/lib/orbit/staticEntities';
import { textToLongInteger } from '@/lib/ubtConnectUtils/actions';
import { deserializeQRCodeInformation, onApplicationEvent_Orbit } from './adminEventDetailActions';
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
    - Decision W23: after an unmount, a started flow skips its state writes only. Its server calls, messages, audit
      events and errors still happen, once.
    @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminEventDetail */
export function useAdminEventDetail(inputs: AdminEventDetailInputs): AdminEventDetailFlows {
  /* OnReady runs once per screen. StrictMode (dev) runs the mount effect again on the same screen: the second call only
     replaces the liveness check, so the first flow writes the state while the screen is there. */
  const readyStarted = useRef(false);
  const newestReadyRun = useRef<IsAlive>(() => true);
  const { state, dispatch, latest, parameters } = useFlowState({
    viewName: 'Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminEventDetail',
    reducer: adminEventDetailReducer,
    initial: INITIAL_ADMIN_EVENT_DETAIL_STATE,
    parameters: inputs,
    onReady: (isAlive, restored) => {
      newestReadyRun.current = isAlive;
      if (readyStarted.current) return Promise.resolve();
      readyStarted.current = true;
      return onReady(restored);
    },
  });

  /** A state write, skipped after the unmount (W23). */
  const write = (patch: AdminEventDetailPatch) => {
    if (newestReadyRun.current()) dispatch(patch);
  };

  /** RefreshData: IsFetchingData True, Get_EventInformation, OnAfterFetch_Get_EventInformation. The call sends the
      block variables after the first assignment. */
  const refreshData = async () => {
    const fetching: AdminEventDetailPatch = { isFetchingData: true };
    write(fetching);
    const info = await fetchAdminEventInformation(
      adminEventInformationInputs(parameters.current, { ...latest.current, ...fetching }),
    );
    write({ isDataFetched: true, hasQRCode: info.hasQRCode });
    write({ eventType: info.orbitEventType, isFetchingData: false });
  };

  /** OnReady. A view that the view cache restored with the Get_EventInformation answer keeps its saved state.
      useFlowState sends a rejection to the flow handler. */
  const onReady = async (restored: boolean) => {
    // restored without data: call again (F40; OutSystems keeps the skeleton)
    if (restored && latest.current.isDataFetched) return;
    await refreshData();
  };

  /** OnToggle_PopupQRCode: QRCodePopupOpened = not QRCodePopupOpened. */
  const onTogglePopupQRCode = () => {
    write({ qrCodePopupOpened: !latest.current.qrCodePopupOpened });
  };

  /** OnHandle_ScanCode(CodeScanned). */
  const onHandleScanCode = async (codeScanned: string) => {
    const event = parameters.current;
    try {
      const info = deserializeQRCodeInformation(codeScanned);
      // Has data?
      if (info.EventId === '0' || info.MemberId === '0') {
        write({ isProcessingData: false });
        showFeedbackMessage(UNPROCESSABLE_QR_CODE, PLATFORM_MESSAGE_TYPE.info);
        return;
      }
      const member = await fetchMember(info.MemberId);
      const signedURL = await fetchLegacySignedImageURL(
        info.MemberId,
        DirectoryAPIFilter.Member,
        ImageSigningSize.Small,
      );
      write({ scannedUser: { ...latest.current.scannedUser, Member: member, SignedURL: signedURL } });
      // Same EventId?
      if (info.EventId !== event.In_EventId) {
        write({
          scanResult: { Success: false, ErrorMessage: WRONG_EVENT },
          scannedUser: { ...latest.current.scannedUser, UserRole: '', Seats: [], Tag: '', GuestRole: '' },
        });
        onTogglePopupQRCode();
        write({ isProcessingData: false });
        return;
      }
      const admin = appManager_GetCachedUserInfo();
      const result = await fetchScanEventQRCode(info.EventId, info.MemberId, member, {
        MemberId: textToLongInteger(admin.MemberId),
        FirstName: admin.FirstName,
        LastName: admin.LastName,
        Locality: admin.Locality,
        Country: admin.Country,
      });
      write({
        scannedUser: {
          ...latest.current.scannedUser,
          UserRole: result.UserRole,
          Seats: result.Seats,
          Tag: result.Tag,
          GuestRole: result.GuestRole,
        },
      });
      // Success?
      write({ scanResult: { Success: result.Status.Success, ErrorMessage: result.Status.ErrorMessage } });
      onTogglePopupQRCode();
      write({ isProcessingData: false });
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
      // Handle Error: AllExceptions.
      if (isSystemException(e)) throw e;
      write({ isProcessingData: false });
      const message = exceptionMessage(e);
      if (message.includes('Failed to deserialize JSON')) {
        write({ scanError: { IsShowErrorMessage: true, Message: UNREADABLE_QR_CODE } });
        return;
      }
      throw new UserException(message, 'Connect2_OrbitMobile_MUI.UnknownError');
    }
  };

  /** OnClick_ScanQrCode. */
  const onClickScanQrCode = async () => {
    if (!latest.current.hasQRCode) return;
    const check = await checkBarcodePlugin();
    if (!check.IsAvailable) {
      showFeedbackMessage(check.Error.ErrorMessage, PLATFORM_MESSAGE_TYPE.info);
      return;
    }
    write({ isProcessingData: true });
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
    );
    if (scan.Success) {
      await onHandleScanCode(scan.ScanResult.Text);
      return;
    }
    write({ isProcessingData: false });
    if (scan.Error.ErrorCode !== SCANNER_CLOSED_BY_USER) {
      showFeedbackMessage(scan.Error.ErrorMessage, PLATFORM_MESSAGE_TYPE.info);
    }
  };

  /** OnHandle_ScanEventDone: OnToggle_PopupQRCode, then OnClick_ScanQrCode (the next scan). */
  const onHandleScanEventDone = async () => {
    onTogglePopupQRCode();
    await onClickScanQrCode();
  };

  /** OnHandle_OrbitErrorMessage: reset ScanError, then OnClick_ScanQrCode. */
  const onHandleOrbitErrorMessage = async () => {
    write({ scanError: NO_SCAN_ERROR });
    await onClickScanQrCode();
  };

  return {
    state,
    onScanQrCodeClicked: () => {
      void onClickScanQrCode().catch(raiseToFlowHandler);
    },
    onScanEventDone: () => {
      void onHandleScanEventDone().catch(raiseToFlowHandler);
    },
    onErrorMessageOk: () => {
      void onHandleOrbitErrorMessage().catch(raiseToFlowHandler);
    },
  };
}

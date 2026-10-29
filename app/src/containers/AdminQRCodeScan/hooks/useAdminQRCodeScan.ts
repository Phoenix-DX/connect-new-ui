import type { QRCodeStatus, ScannerAdmin } from '@/api/event';
import { fetchLegacySignedImageURL } from '@/api/image';
import { fetchMember, type Member } from '@/api/member';
import { checkBarcodePlugin, scanBarcode, SCANNER_CLOSED_BY_USER } from '@/platform/device/barcodePlugin';
import { PLATFORM_MESSAGE_TYPE, showFeedbackMessage } from '@/platform/feedback';
import { isSystemException, UserException } from '@/platform/feedback/flowErrors';
import type { FlowScope } from '@/platform/navigation/flowScope';
import { appManager_GetCachedUserInfo } from '@/platform/session/cachedUserInfo';
import { DirectoryAPIFilter, ImageSigningSize } from '@/lib/orbit/staticEntities';
import { deserializeQRCodeInformation } from '@/lib/orbit/actions';
import { containsIgnoreCase } from '@/lib/ubtConnectUtils/actions';

const UNPROCESSABLE_QR_CODE = 'This QR Code was unable to be processed. Please try again later.';
const WRONG_EVENT = 'Guest is not allocated to this event.';
const UNREADABLE_QR_CODE = 'Unable to read QR code, please try again.';

/** Connect2_OrbitMobile_MUI.cameraDirection.BackCamera and scanOrientation.Portrait: the ScanBarcode inputs that both
    blocks pass (TST moduleinfo; ScreenBlock_AdminEventDetail ctrl :1241, ScreenBlock_AdminMilestoneDetail :913-925). */
const BACK_CAMERA = 1;
const PORTRAIT = 1;

/** OS.Exceptions.getMessage(ex): the ExceptionMessage of the AllExceptions handler. */
const exceptionMessage = (error: unknown): string => (error instanceof Error ? error.message : String(error));

/** The fields of the variable ScannedUser (ScannedUserRec) that the shared flows assign. */
export interface AdminScannedUser {
  Member: Member;
  SignedURL: string;
}

/** The block variables that the scan flows read and write. ScreenBlock_AdminEventDetail and
    ScreenBlock_AdminMilestoneDetail have all of them. */
export interface AdminQRCodeScanState<U extends AdminScannedUser> {
  isProcessingData: boolean;
  /** QRCodePopupOpened: the ShowPopup of Popup_QRCode. */
  qrCodePopupOpened: boolean;
  /** HasQRCode of the data action. */
  hasQRCode: boolean;
  scannedUser: U;
  /** ScanResult: the result of the last check-in. */
  scanResult: QRCodeStatus;
  /** ScanError: the inputs of OrbitErrorMessage. */
  scanError: { IsShowErrorMessage: boolean; Message: string };
}

/** The handles of the block's useFlowState that the scan flows use. */
export interface AdminQRCodeScanBlock<P extends { In_EventId: string }, U extends AdminScannedUser> {
  dispatch: (patch: Partial<AdminQRCodeScanState<U>>) => void;
  latest: { readonly current: AdminQRCodeScanState<U> };
  parameters: { readonly current: P };
  flow: Pick<FlowScope, 'own' | 'run'>;
}

/** The QR code content (DeserializeQRCodeInformation). */
type QRCodeInformation = ReturnType<typeof deserializeQRCodeInformation>;

/** What differs between the two blocks. `params` is the block input at the start of OnHandle_ScanCode (or of
    OnClick_ScanQrCode for `onLaunch`). */
export interface AdminQRCodeScanStrategy<
  P extends { In_EventId: string },
  U extends AdminScannedUser,
  R extends { Status: QRCodeStatus },
> {
  /** More ScannedUser fields assigned with the member and the photo (milestone: MilestoneDescription). */
  scannedMember?: (params: P) => Partial<U>;
  /** The ScannedUser fields that a code of another event clears. */
  emptyScannedUserPatch: Partial<U>;
  /** AdminMemberId from the MemberId text of the cached user (each block converts it its own way). */
  adminMemberId: (memberId: string) => string;
  /** The check-in server action (GetScanEventQRCode or GetScanMilestoneQRCode). */
  checkIn: (info: QRCodeInformation, member: Member, admin: ScannerAdmin, params: P) => Promise<R>;
  /** The ScannedUser fields of the check-in answer. */
  scannedUserOf: (result: R) => Partial<U>;
  /** Before ScanBarcode (event: the LaunchQRCodeScanner audit event). */
  onLaunch?: (params: P) => void;
  /** After a successful check-in, after the popup (event: the QRCodeScanned audit event). */
  onSuccess?: (params: P, member: Member, result: R) => void;
}

/** The handlers of the widget events of the scan. */
interface AdminQRCodeScanHandlers {
  /** OnClick_ScanQrCode: the Scan QR Code button. */
  onScanQrCodeClicked: () => void;
  /** OnHandle_ScanEventDone / OnHandle_ScanMilestoneDone: Event_Done of the scan popup (the Done button). */
  onScanDone: () => void;
  /** OnHandle_OrbitErrorMessage: ClickedOk of OrbitErrorMessage. */
  onErrorMessageOk: () => void;
}

/** The scan flows of the Orbit admin detail blocks (ScreenBlock_AdminEventDetail, ScreenBlock_AdminMilestoneDetail).
    The page hook calls it on each render with the handles of its useFlowState and the strategy of its block.
    - OnClick_ScanQrCode: with a QR code, CheckBarcodePlugin. Available: IsProcessingData True, `onLaunch`,
      ScanBarcode, then OnHandle_ScanCode. A failed scan: IsProcessingData False and, unless the user closed the
      scanner, the scanner's message. Not available: its message.
    - OnHandle_ScanCode: reads the QR code (no data: a message), GetMemberByMemberId, GetCacheableSignedImageURL and the
      scanned user; a code of another event: "Guest is not allocated to this event." and the popup; this event: the
      check-in with the cached user as admin, the answer's fields, the result popup, then `onSuccess`. An unreadable
      code ("Failed to deserialize JSON"): the OrbitErrorMessage popup; another error: a UnknownError user exception.
    - Flow scope (item 8): OnHandle_ScanCode and OnToggle_PopupQRCode are own actions of the block (R3, `flow.own`):
      a scan that ends after the unmount stops at OnHandle_ScanCode; a flow that is already inside it stops at
      OnToggle_PopupQRCode, before `onSuccess`. CheckBarcodePlugin, ScanBarcode, GetMemberByMemberId, the signed image
      URL and the check-in are plugin, module or server actions: not wrapped, they run after leaving (R2). The widget
      handlers start their flow with `flow.run` (R6). The messages show (R5). */
export function useAdminQRCodeScan<
  P extends { In_EventId: string },
  U extends AdminScannedUser,
  R extends { Status: QRCodeStatus },
>(
  { dispatch, latest, parameters, flow }: AdminQRCodeScanBlock<P, U>,
  strategy: AdminQRCodeScanStrategy<P, U, R>,
): AdminQRCodeScanHandlers {
  /** OnToggle_PopupQRCode: QRCodePopupOpened = not QRCodePopupOpened. An own action (R3). */
  const onTogglePopupQRCode = flow.own(() => {
    dispatch({ qrCodePopupOpened: !latest.current.qrCodePopupOpened });
  });

  /** OnHandle_ScanCode(CodeScanned). An own action (R3): OnClick_ScanQrCode calls it after ScanBarcode. */
  const onHandleScanCode = flow.own(async (codeScanned: string) => {
    const params = parameters.current;
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
      dispatch({
        scannedUser: {
          ...latest.current.scannedUser,
          Member: member,
          SignedURL: signedURL,
          ...strategy.scannedMember?.(params),
        },
      });
      // Same EventId?
      if (info.EventId !== params.In_EventId) {
        dispatch({
          scanResult: { Success: false, ErrorMessage: WRONG_EVENT },
          scannedUser: { ...latest.current.scannedUser, ...strategy.emptyScannedUserPatch },
        });
        onTogglePopupQRCode();
        dispatch({ isProcessingData: false });
        return;
      }
      const admin = appManager_GetCachedUserInfo();
      // The check-in: a server action, not wrapped (R2).
      const result = await strategy.checkIn(
        info,
        member,
        {
          MemberId: strategy.adminMemberId(admin.MemberId),
          FirstName: admin.FirstName,
          LastName: admin.LastName,
          Locality: admin.Locality,
          Country: admin.Country,
        },
        params,
      );
      dispatch({ scannedUser: { ...latest.current.scannedUser, ...strategy.scannedUserOf(result) } });
      // Success? Both branches set ScanResult, open the popup and clear IsProcessingData.
      dispatch({ scanResult: { Success: result.Status.Success, ErrorMessage: result.Status.ErrorMessage } });
      onTogglePopupQRCode();
      dispatch({ isProcessingData: false });
      if (result.Status.Success) strategy.onSuccess?.(params, member, result);
    } catch (e) {
      // Handle Error: AllExceptions. The ControllerDisposedException of an own action (R3) is a system exception.
      if (isSystemException(e)) throw e;
      dispatch({ isProcessingData: false });
      const message = exceptionMessage(e);
      // Index(ExceptionMessage, "Failed to deserialize JSON", ignoreCase True) <> -1.
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
    strategy.onLaunch?.(parameters.current);
    // ScanBarcode as the blocks call it. Hint is TextToInteger("Entities.Format.ALL") = 0 in the compiled code, a null
    // identifier that ScanBarcode turns into Format.ALL.
    const scan = await scanBarcode(
      {
        ScanInstructions: 'Please center the code in the frame',
        CameraDirection: BACK_CAMERA,
        ScanOrientation: PORTRAIT,
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

  /** OnHandle_ScanEventDone / OnHandle_ScanMilestoneDone: OnToggle_PopupQRCode, then OnClick_ScanQrCode (the next
      scan). */
  const onHandleScanDone = async () => {
    onTogglePopupQRCode();
    await onClickScanQrCode();
  };

  /** OnHandle_OrbitErrorMessage: reset ScanError, then OnClick_ScanQrCode. */
  const onHandleOrbitErrorMessage = async () => {
    dispatch({ scanError: { IsShowErrorMessage: false, Message: '' } });
    await onClickScanQrCode();
  };

  return {
    onScanQrCodeClicked: () => {
      flow.run(() => onClickScanQrCode());
    },
    onScanDone: () => {
      flow.run(() => onHandleScanDone());
    },
    onErrorMessageOk: () => {
      flow.run(() => onHandleOrbitErrorMessage());
    },
  };
}

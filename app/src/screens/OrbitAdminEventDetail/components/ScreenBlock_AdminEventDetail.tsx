// @os-block Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminEventDetail
import { useEffect, useReducer, useRef, type ReactNode } from 'react';
import { OSBlock } from '../../../components/OSBlock';
import { checkBarcodePlugin, scanBarcode, SCANNER_CLOSED_BY_USER } from '../../../lib/device/barcodePlugin';
import { UserException } from '../../../lib/os-exceptions';
import { Layout_Orbit } from '../../../shared/Connect2_LegacyShared/Layout_Orbit';
import { MenuIcon__UpdatedOSUI } from '../../../shared/Connect2_LegacyShared/MenuIcon__UpdatedOSUI';
import { NoInformation_Orbit } from '../../../shared/Connect2_OrbitMobile_MUI/NoInformation_Orbit';
import { Skeleton_Loading } from '../../../shared/Connect2_OrbitMobile_MUI/Skeleton_Loading';
import { getFormattedDateTime } from '../../../shared/Connect2_OrbitMobile_MUI/lib/actions';
import {
  DirectoryAPIFilter,
  ImageSigningSize,
  OrbitSkeletonLoading,
} from '../../../shared/Connect2_OrbitMobile_MUI/lib/staticEntities';
import type { OrbitEventTypeRecord } from '../../../shared/Connect2_OrbitMobile_MUI/lib/structures';
import { textToLongInteger } from '../../../shared/UBTConnect_Utils/lib/actions';
import { appManager_GetCachedUserInfo } from '../../../shell/cachedUserInfo';
import { exceptionMessage, isSystemException, raiseToFlowHandler } from '../../../shell/exceptions';
import { PLATFORM_MESSAGE_TYPE, showFeedbackMessage } from '../../../shell/feedback';
import { useViewState, useWasRestoredFromCache } from '../../../shell/navigation';
import { getCacheableSignedImageURL, getEventInformation, getMemberByMemberId, getScanEventQRCode } from '../api';
import type {
  AdminEventDetailInputs,
  AdminEventDetailVariablesWire,
  QRCodeStatus,
  ScanError,
  ScannedUser,
} from '../types';
import { deserializeQRCodeInformation, onApplicationEvent_Orbit } from './actions';
import { AdminPopup } from './AdminPopup';
import { OrbitErrorMessage } from './OrbitErrorMessage';
import { Popup_QRCodeScan } from './Popup_QRCodeScan';
import { CameraDirection, MenuAction_Auto, ScanOrientation } from './staticEntities';

/* SB = migration/runtime-sources/Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminEventDetail
   .mvc.js (view :184-764, controller :766-1560). */

const EMPTY_SCANNED_USER: ScannedUser = {
  Member: { Id: '0', FirstName: '', Lastname: '', LocalityName: '', CountryName: '' },
  SignedURL: '',
  UserRole: '',
  Seats: [],
  Tag: '',
  GuestRole: '',
};

/** Block variables (SB model :23-94) and the fetch state of Get_EventInformation the view reads. */
interface Model {
  isFetchingData: boolean;
  isProcessingData: boolean;
  scanResult: QRCodeStatus;
  scannedUser: ScannedUser;
  eventType: OrbitEventTypeRecord;
  qrCodePopupOpened: boolean;
  scanError: ScanError;
  /** Get_EventInformation.IsDataFetched / HasQRCode. */
  isDataFetched: boolean;
  hasQRCode: boolean;
}

const INITIAL_MODEL: Model = {
  isFetchingData: false,
  isProcessingData: false,
  scanResult: { Success: false, ErrorMessage: '' },
  scannedUser: EMPTY_SCANNED_USER,
  eventType: {},
  qrCodePopupOpened: false,
  scanError: { IsShowErrorMessage: false, Message: '' },
  isDataFetched: false,
  hasQRCode: false,
};

const NO_EVENT_MESSAGE = 'The Event is no longer available for you.';
const UNPROCESSABLE_QR_CODE = 'This QR Code was unable to be processed. Please try again later.';
const WRONG_EVENT = 'Guest is not allocated to this event.';
const UNREADABLE_QR_CODE = 'Unable to read QR code, please try again.';

export interface ScreenBlock_AdminEventDetailProps extends AdminEventDetailInputs {
  /** OutSystems instance id of the block (`$b1`). */
  id: string;
  /** Placeholder BottomBar. */
  bottomBar?: ReactNode;
}

/** Orbit admin event detail (SB). Layout_Orbit (CustomClass "orbit-detail") with the automatic MenuIcon, the title
    (flag icon + In_EventName), and the content (:345-735): the AdminEventDetails skeleton while fetching; when
    Get_EventInformation is fetched, the event rows (dates, location, EventType.Type, In_EventTypeFriendly), the
    "Loading" spinner while processing a scan, the Scan QR Code button (HasQRCode and not processing) and the scan
    result Popup_QRCode; else NoInformation_Orbit; then the OrbitErrorMessage popup of an unreadable code.
    OnReady (:1391-1436): restored from the cache → nothing (P-BACK); else RefreshData (:1321-1354): IsFetchingData
    True, Get_EventInformation, OnAfterFetch (:1446-1474): EventType, IsFetchingData False.
    The scan (OnClick_ScanQrCode :1192-1296, OnHandle_ScanCode :927-1173) runs the BarcodePlugin scanner adapter
    (components/barcodePlugin.ts, Q1), GetMemberByMemberId, GetCacheableSignedImageURL and GetScanEventQRCode. */
export function ScreenBlock_AdminEventDetail({
  id,
  bottomBar,
  In_EventId,
  In_EventName,
  In_EventStartDate,
  In_EventEndDate,
  In_EventLocation,
  In_EventTypeFriendly,
}: ScreenBlock_AdminEventDetailProps) {
  const restored = useWasRestoredFromCache();
  const [saved, setSaved] = useViewState<Model | null>('Model', null);
  const [state, dispatch] = useReducer(
    (s: Model, patch: Partial<Model>): Model => ({ ...s, ...patch }),
    null,
    () => (restored && saved ? saved : INITIAL_MODEL),
  );
  /* The OutSystems model: async flows read the latest values (state is the rendered copy). */
  const latest = useRef(state);
  const m = (): Model => latest.current;
  const set = (patch: Partial<Model>) => {
    latest.current = { ...latest.current, ...patch };
    setSaved(latest.current);
    dispatch(patch);
  };

  /** The block variables Get_EventInformation sends (screenData.variables, see AdminEventDetailVariablesWire). */
  const variablesOf = (s: Model): AdminEventDetailVariablesWire => ({
    In_EventId,
    In_EventName,
    In_EventStartDate,
    In_EventEndDate,
    In_EventLocation,
    In_EventTypeFriendly,
    IsFetchingData: s.isFetchingData,
    IsProcessingData: s.isProcessingData,
    QRCodePopupOpened: s.qrCodePopupOpened,
  });

  /** RefreshData (:1321-1354): IsFetchingData True, Get_EventInformation, OnAfterFetch_Get_EventInformation. */
  const refreshData = async () => {
    set({ isFetchingData: true });
    const info = await getEventInformation(variablesOf(m()));
    set({ isDataFetched: true, hasQRCode: info.hasQRCode });
    set({ eventType: info.orbitEventType, isFetchingData: false });
  };

  /* OnReady (:1391-1436): WasCurrentViewRestoredFromCache → nothing; else RefreshData. */
  const started = useRef(false);
  useEffect(() => {
    if (started.current) return;
    started.current = true;
    if (restored && saved) return;
    void refreshData().catch(raiseToFlowHandler);
    // OnReady runs once (the view cache restores the same instance state).
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /** OnToggle_PopupQRCode (:903-926): QRCodePopupOpened = not QRCodePopupOpened. */
  const onTogglePopupQRCode = () => {
    set({ qrCodePopupOpened: !m().qrCodePopupOpened });
  };

  /** OnHandle_ScanCode(CodeScanned) (:927-1173). */
  const onHandleScanCode = async (codeScanned: string) => {
    try {
      const info = deserializeQRCodeInformation(codeScanned);
      // Has data? (:964)
      if (info.EventId === '0' || info.MemberId === '0') {
        set({ isProcessingData: false });
        showFeedbackMessage(UNPROCESSABLE_QR_CODE, PLATFORM_MESSAGE_TYPE.info);
        return;
      }
      const member = await getMemberByMemberId(info.MemberId);
      const signedURL = await getCacheableSignedImageURL(
        info.MemberId,
        DirectoryAPIFilter.Member,
        ImageSigningSize.Small,
      );
      set({ scannedUser: { ...m().scannedUser, Member: member, SignedURL: signedURL } });
      // Same EventId? (:988)
      if (info.EventId !== In_EventId) {
        set({
          scanResult: { Success: false, ErrorMessage: WRONG_EVENT },
          scannedUser: { ...m().scannedUser, UserRole: '', Seats: [], Tag: '', GuestRole: '' },
        });
        onTogglePopupQRCode();
        set({ isProcessingData: false });
        return;
      }
      const admin = appManager_GetCachedUserInfo();
      const result = await getScanEventQRCode(info.EventId, info.MemberId, member, {
        MemberId: textToLongInteger(admin.MemberId),
        FirstName: admin.FirstName,
        LastName: admin.LastName,
        Locality: admin.Locality,
        Country: admin.Country,
      });
      set({
        scannedUser: {
          ...m().scannedUser,
          UserRole: result.UserRole,
          Seats: result.Seats,
          Tag: result.Tag,
          GuestRole: result.GuestRole,
        },
      });
      // Success? (:1037)
      set({ scanResult: { Success: result.Status.Success, ErrorMessage: result.Status.ErrorMessage } });
      onTogglePopupQRCode();
      set({ isProcessingData: false });
      if (result.Status.Success) {
        const scanned = m().scannedUser.Member;
        onApplicationEvent_Orbit('QRCodeScanned', {
          EventId: In_EventId,
          EventTitle: In_EventName,
          EventLocation: In_EventLocation,
          ScannedMemberId: scanned.Id,
          ScannedMemberName: scanned.FirstName + (scanned.FirstName !== '' ? ` ${scanned.Lastname}` : scanned.Lastname),
          ScannedMemberRole: m().scannedUser.UserRole,
        });
      }
    } catch (e) {
      // Handle Error: AllExceptions (:1130-1160)
      if (isSystemException(e)) throw e;
      set({ isProcessingData: false });
      const message = exceptionMessage(e);
      if (message.includes('Failed to deserialize JSON')) {
        set({ scanError: { IsShowErrorMessage: true, Message: UNREADABLE_QR_CODE } });
        return;
      }
      throw new UserException(message, 'Connect2_OrbitMobile_MUI.UnknownError');
    }
  };

  /** OnClick_ScanQrCode (:1192-1296): with a QR code, CheckBarcodePlugin; available → IsProcessingData True,
      OnApplicationEvent_LaunchQRCodeScanner, ScanBarcode → OnHandle_ScanCode, or (failed) IsProcessingData False and,
      unless the user closed the scanner, the scanner's error message; unavailable → the plugin's error message. */
  const onClickScanQrCode = async () => {
    if (!m().hasQRCode) return;
    const check = await checkBarcodePlugin();
    if (!check.IsAvailable) {
      showFeedbackMessage(check.Error.ErrorMessage, PLATFORM_MESSAGE_TYPE.info);
      return;
    }
    set({ isProcessingData: true });
    onApplicationEvent_Orbit('LaunchQRCodeScanner', {
      EventId: In_EventId,
      EventTitle: In_EventName,
      EventType: In_EventTypeFriendly,
      EventLocation: In_EventLocation,
      EventStartDate: In_EventStartDate,
      EventEndDate: In_EventEndDate,
    });
    // ScanBarcode as the block calls it (:1241); Hint is TextToInteger("Entities.Format.ALL") = 0 in the compiled code,
    // a null identifier that ScanBarcode turns into Format.ALL.
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
    set({ isProcessingData: false });
    if (scan.Error.ErrorCode !== SCANNER_CLOSED_BY_USER) {
      showFeedbackMessage(scan.Error.ErrorMessage, PLATFORM_MESSAGE_TYPE.info);
    }
  };

  /** OnHandle_ScanEventDone (:871-902): OnToggle_PopupQRCode, then OnClick_ScanQrCode (the next scan). */
  const onHandleScanEventDone = async () => {
    onTogglePopupQRCode();
    await onClickScanQrCode();
  };

  /** OnHandle_OrbitErrorMessage (:1355-1390): reset ScanError, then OnClick_ScanQrCode. */
  const onHandleOrbitErrorMessage = async () => {
    set({ scanError: { IsShowErrorMessage: false, Message: '' } });
    await onClickScanQrCode();
  };

  const s = state;
  const prefix = id.replace('$', '');
  const dateText = (value: string) => getFormattedDateTime(value, false, true, false, true, false, false);

  /* Content (:345-735): If not fetching → (If fetched → the event, else NoInformation_Orbit), else the skeleton; then
     the OrbitErrorMessage container. */
  const content = (
    <>
      {s.isFetchingData ? (
        <Skeleton_Loading id={`${prefix}-$b5`} inSkeletonLoadingId={OrbitSkeletonLoading.AdminEventDetails} />
      ) : s.isDataFetched ? (
        <>
          <div className="font-size-0-9em padding-x-m padding-y-m" data-container="">
            <div className="flex-center-vertical" data-container="">
              <i className="icon orbit-icon-date-time fa fa-flag fa-1x" data-icon="" />
              <span className="margin-left-base" data-expression="">
                {`${dateText(In_EventStartDate)} - ${dateText(In_EventEndDate)}`}
              </span>
            </div>
            <div className="flex-center-vertical margin-top-m" data-container="">
              <i className="icon orbit-icon-location fa fa-flag fa-1x" data-icon="" />
              <span className="margin-left-base" data-expression="">
                {In_EventLocation}
              </span>
            </div>
            <div className="flex-center-vertical margin-top-m" data-container="">
              <i className="icon orbit-icon-host-guest fa fa-flag fa-1x" data-icon="" />
              <span className="margin-left-base" data-expression="">
                {s.eventType.Type ?? ''}
              </span>
            </div>
            <div className="flex-center-vertical margin-top-m" data-container="">
              <i className="icon orbit-icon-window fa fa-flag fa-1x" data-icon="" />
              <span className="margin-left-base" data-expression="">
                {In_EventTypeFriendly}
              </span>
            </div>
          </div>
          {s.isProcessingData && (
            <div className="orbit-spinner-cont" data-container="">
              <i className="icon orbit-spinner-icon fa fa-spinner fa-2x" data-icon="" />
              <span className="bold margin-top-base">Loading</span>
            </div>
          )}
          {s.hasQRCode && !s.isProcessingData && (
            <div className="full-width padding-xl text-align-center" data-container="">
              <button
                className="btn btn-primary"
                data-button=""
                type="button"
                onClick={() => {
                  void onClickScanQrCode().catch(raiseToFlowHandler);
                }}
              >
                <i className="icon fa fa-qrcode fa-2x" data-icon="" />
                <span className="margin-left-s">Scan QR Code</span>
              </button>
            </div>
          )}
          <div data-container="" id={`${prefix}-RootPlaceholder_QRCode`}>
            <div className="backwards-compatibility" data-container="" id={`${prefix}-Root_QRCode`}>
              <AdminPopup
                id={`${prefix}-Popup_QRCode`}
                showPopup={s.qrCodePopupOpened}
                style="popup-dialog"
                rootClassName="backwards-compatibility"
              >
                <Popup_QRCodeScan
                  id={`${prefix}-$b3`}
                  scannedUser={s.scannedUser}
                  scanResult={s.scanResult}
                  eventName={In_EventName}
                  onDone={() => {
                    void onHandleScanEventDone().catch(raiseToFlowHandler);
                  }}
                />
              </AdminPopup>
            </div>
          </div>
        </>
      ) : (
        <NoInformation_Orbit id={`${prefix}-$b4`} message={NO_EVENT_MESSAGE} />
      )}
      <div className="backwards-compatibility" data-container="">
        <OrbitErrorMessage
          id={`${prefix}-$b6`}
          isShowMessage={s.scanError.IsShowErrorMessage}
          displayMessage={s.scanError.Message}
          onClickedOk={() => {
            void onHandleOrbitErrorMessage().catch(raiseToFlowHandler);
          }}
        />
      </div>
    </>
  );

  return (
    <OSBlock name="Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminEventDetail" id={id}>
      <Layout_Orbit
        id={`${prefix}-$b1`}
        customClass="orbit-detail"
        menu={<div id={`${prefix}-Menu`} />}
        headerLeft={<MenuIcon__UpdatedOSUI id={`${prefix}-$b2`} menuAction={MenuAction_Auto} />}
        title={
          <>
            <div data-container="">
              <i className="icon menu-icon-Orbit fa fa-flag fa-1x" data-icon="" />
            </div>
            <div data-container="">
              <span data-expression="">{In_EventName}</span>
            </div>
          </>
        }
        content={content}
        bottomBar={<div id={`${prefix}-BottomBar`}>{bottomBar}</div>}
        commonUIElements={<div id={`${prefix}-CommonUI_Elements`} />}
      />
    </OSBlock>
  );
}

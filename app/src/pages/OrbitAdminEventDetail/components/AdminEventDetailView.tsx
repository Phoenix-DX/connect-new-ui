import type { ReactNode } from 'react';
import { MenuIcon } from '@/components/layout/MenuIcon';
import { OrbitLayout } from '@/components/layout/OrbitLayout';
import { OrbitNoInformation } from '@/components/orbit/OrbitNoInformation';
import { OrbitSkeleton } from '@/components/orbit/OrbitSkeleton';
import { OSBlock } from '@/components/ui/os/OSBlock';
import type { AdminEventDetailState } from '@/pages/OrbitAdminEventDetail/hooks/adminEventDetailState';
import type { AdminEventDetailInputs } from '@/pages/OrbitAdminEventDetail/inputs';
import { MenuAction_Auto } from '@/pages/OrbitAdminEventDetail/staticEntities';
import { getFormattedDateTime } from '@/shared/Connect2_OrbitMobile_MUI/lib/actions';
import { OrbitSkeletonLoading } from '@/shared/Connect2_OrbitMobile_MUI/lib/staticEntities';
import { AdminPopup } from './AdminPopup';
import { OrbitErrorMessage } from './OrbitErrorMessage';
import { Popup_QRCodeScan } from './Popup_QRCodeScan';

const NO_EVENT_MESSAGE = 'The Event is no longer available for you.';

export interface AdminEventDetailViewProps extends AdminEventDetailInputs {
  /** OutSystems instance id of the block (`$b1`). */
  id: string;
  /** The BottomBar placeholder. */
  bottomBar?: ReactNode;
  /** The block variables (useAdminEventDetail). */
  state: AdminEventDetailState;
  /** OnClick_ScanQrCode: the Scan QR Code button. */
  onScanQrCodeClicked: () => void;
  /** OnHandle_ScanEventDone: Event_Done of Popup_QRCodeScan. */
  onScanEventDone: () => void;
  /** OnHandle_OrbitErrorMessage: ClickedOk of OrbitErrorMessage. */
  onErrorMessageOk: () => void;
}

/** The Orbit admin event detail, props only. Layout_Orbit (CustomClass "orbit-detail") with the automatic MenuIcon and
    the title (flag icon + In_EventName). The content:
    - while IsFetchingData: the AdminEventDetails skeleton;
    - when Get_EventInformation is fetched: the event rows (dates, location, EventType.Type, In_EventTypeFriendly), the
      "Loading" spinner while a scan is processed, the Scan QR Code button (HasQRCode and not processing) and the scan
      result popup Popup_QRCode;
    - else NoInformation_Orbit;
    - then the OrbitErrorMessage popup of an unreadable code.
    The flows are in useAdminEventDetail.
    @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminEventDetail */
export function AdminEventDetailView({
  id,
  bottomBar,
  In_EventName,
  In_EventStartDate,
  In_EventEndDate,
  In_EventLocation,
  In_EventTypeFriendly,
  state: s,
  onScanQrCodeClicked,
  onScanEventDone,
  onErrorMessageOk,
}: AdminEventDetailViewProps) {
  const prefix = id.replace('$', '');
  const dateText = (value: string) => getFormattedDateTime(value, false, true, false, true, false, false);

  /* The content: if not fetching, then (if fetched, the event, else NoInformation_Orbit), else the skeleton; then the
     OrbitErrorMessage container. */
  const content = (
    <>
      {s.isFetchingData ? (
        <OrbitSkeleton id={`${prefix}-$b5`} inSkeletonLoadingId={OrbitSkeletonLoading.AdminEventDetails} />
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
              <button className="btn btn-primary" data-button="" type="button" onClick={onScanQrCodeClicked}>
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
                  onDone={onScanEventDone}
                />
              </AdminPopup>
            </div>
          </div>
        </>
      ) : (
        <OrbitNoInformation id={`${prefix}-$b4`} message={NO_EVENT_MESSAGE} />
      )}
      <div className="backwards-compatibility" data-container="">
        <OrbitErrorMessage
          id={`${prefix}-$b6`}
          isShowMessage={s.scanError.IsShowErrorMessage}
          displayMessage={s.scanError.Message}
          onClickedOk={onErrorMessageOk}
        />
      </div>
    </>
  );

  return (
    <OSBlock name="Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminEventDetail" id={id}>
      <OrbitLayout
        id={`${prefix}-$b1`}
        customClass="orbit-detail"
        menu={<div id={`${prefix}-Menu`} />}
        headerLeft={<MenuIcon id={`${prefix}-$b2`} menuAction={MenuAction_Auto} />}
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

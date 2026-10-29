import type { ComponentProps, ReactNode } from 'react';
import { MenuIcon } from '@/components/layout/MenuIcon';
import { OrbitLayout } from '@/components/layout/OrbitLayout';
import { OrbitErrorMessage } from '@/components/orbit/OrbitErrorMessage';
import { OrbitNoInformation } from '@/components/orbit/OrbitNoInformation';
import { OrbitPopup } from '@/components/orbit/OrbitPopup';
import { OrbitSkeleton } from '@/components/orbit/OrbitSkeleton';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OrbitSkeletonLoading } from '@/lib/orbit/staticEntities';

const NO_EVENT_MESSAGE = 'The Event is no longer available for you.';

/** The block variables that the frame reads. ScreenBlock_AdminEventDetail and ScreenBlock_AdminMilestoneDetail
    have all of them. */
export interface AdminDetailScaffoldState {
  isFetchingData: boolean;
  isDataFetched: boolean;
  isProcessingData: boolean;
  hasQRCode: boolean;
  /** QRCodePopupOpened: the ShowPopup of Popup_QRCode. */
  qrCodePopupOpened: boolean;
  /** ScanError: the inputs of OrbitErrorMessage. */
  scanError: { IsShowErrorMessage: boolean; Message: string };
}

interface AdminDetailScaffoldProps {
  /** OutSystems instance id of the block (`$b1`). */
  id: string;
  /** The OutSystems name of the block (`Orbit_ScreenBlocks_AdminFlow.ScreenBlock_<Name>`). */
  blockName: string;
  /** The title after the flag icon: the event or milestone name. */
  title: string;
  /** The MenuAction of MenuIcon (MenuAction_Auto in both blocks). */
  menuAction: ComponentProps<typeof MenuIcon>['menuAction'];
  /** The BottomBar placeholder. */
  bottomBar?: ReactNode;
  state: AdminDetailScaffoldState;
  /** The detail rows (AdminDetailRow) inside the detail container. */
  rows: ReactNode;
  /** The scan result inside Popup_QRCode, with its instance id (`<prefix>-$b3`). */
  renderPopup: (id: string) => ReactNode;
  /** OnClick_ScanQrCode: the Scan QR Code button. */
  onScanQrCodeClicked: () => void;
  /** OnHandle_OrbitErrorMessage: ClickedOk of OrbitErrorMessage. */
  onErrorMessageOk: () => void;
}

/** A detail row: the icon and the text. */
export function AdminDetailRow({
  className,
  icon,
  children,
}: {
  className: string;
  icon: string;
  children: ReactNode;
}) {
  return (
    <div className={className} data-container="">
      <i className={`icon ${icon} fa fa-flag fa-1x`} data-icon="" />
      <span className="margin-left-base" data-expression="">
        {children}
      </span>
    </div>
  );
}

/** The frame of the Orbit admin detail blocks (ScreenBlock_AdminEventDetail, ScreenBlock_AdminMilestoneDetail), props
    only. Layout_Orbit (CustomClass "orbit-detail") with the automatic MenuIcon and the title (flag icon + name). The
    content:
    - while IsFetchingData: the AdminEventDetails skeleton;
    - when the data action is fetched: the rows, the "Loading" spinner while a scan is processed, the Scan QR Code
      button (HasQRCode and not processing) and the scan result popup Popup_QRCode;
    - else NoInformation_Orbit;
    - then the OrbitErrorMessage popup of an unreadable code.
    The two blocks have the same widgets and instance ids (`$b2` to `$b6`); only the rows and the popup content differ.
    @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminEventDetail */
export function AdminDetailScaffold({
  id,
  blockName,
  title,
  menuAction,
  bottomBar,
  state: s,
  rows,
  renderPopup,
  onScanQrCodeClicked,
  onErrorMessageOk,
}: AdminDetailScaffoldProps) {
  const prefix = id.replace('$', '');

  /* The content: if not fetching, then (if fetched, the details, else NoInformation_Orbit), else the skeleton; then
     the OrbitErrorMessage container. */
  const content = (
    <>
      {s.isFetchingData ? (
        <OrbitSkeleton id={`${prefix}-$b5`} inSkeletonLoadingId={OrbitSkeletonLoading.AdminEventDetails} />
      ) : s.isDataFetched ? (
        <>
          <div className="font-size-0-9em padding-x-m padding-y-m" data-container="">
            {rows}
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
              <OrbitPopup
                id={`${prefix}-Popup_QRCode`}
                showPopup={s.qrCodePopupOpened}
                style="popup-dialog"
                rootClassName="backwards-compatibility"
              >
                {renderPopup(`${prefix}-$b3`)}
              </OrbitPopup>
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
    <OSBlock name={blockName} id={id}>
      <OrbitLayout
        id={`${prefix}-$b1`}
        customClass="orbit-detail"
        menu={<div id={`${prefix}-Menu`} />}
        headerLeft={<MenuIcon id={`${prefix}-$b2`} menuAction={menuAction} />}
        title={
          <>
            <div data-container="">
              <i className="icon menu-icon-Orbit fa fa-flag fa-1x" data-icon="" />
            </div>
            <div data-container="">
              <span data-expression="">{title}</span>
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

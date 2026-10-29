import type { ReactNode } from 'react';
import { AdminDetailRow, AdminDetailScaffold } from '@/components/orbit/AdminDetailScaffold';
import type { AdminEventDetailState } from '@/pages/OrbitAdminEventDetail/hooks/adminEventDetailState';
import type { AdminEventDetailInputs } from '@/pages/OrbitAdminEventDetail/inputs';
import { MenuAction_Auto } from '@/pages/OrbitAdminEventDetail/staticEntities';
import { getFormattedDateTime } from '@/lib/orbit/actions';
import { Popup_QRCodeScan } from './Popup_QRCodeScan';

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

/** The Orbit admin event detail, props only, in the frame AdminDetailScaffold (layout, title, skeleton,
    NoInformation_Orbit, spinner, Scan QR Code button, Popup_QRCode, OrbitErrorMessage). The rows of a fetched
    Get_EventInformation: dates, location, EventType.Type, In_EventTypeFriendly. The popup shows Popup_QRCodeScan.
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
  const dateText = (value: string) => getFormattedDateTime(value, false, true, false, true, false, false);
  return (
    <AdminDetailScaffold
      id={id}
      blockName="Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminEventDetail"
      title={In_EventName}
      menuAction={MenuAction_Auto}
      bottomBar={bottomBar}
      state={s}
      rows={
        <>
          <AdminDetailRow className="flex-center-vertical" icon="orbit-icon-date-time">
            {`${dateText(In_EventStartDate)} - ${dateText(In_EventEndDate)}`}
          </AdminDetailRow>
          <AdminDetailRow className="flex-center-vertical margin-top-m" icon="orbit-icon-location">
            {In_EventLocation}
          </AdminDetailRow>
          <AdminDetailRow className="flex-center-vertical margin-top-m" icon="orbit-icon-host-guest">
            {s.eventType.Type ?? ''}
          </AdminDetailRow>
          <AdminDetailRow className="flex-center-vertical margin-top-m" icon="orbit-icon-window">
            {In_EventTypeFriendly}
          </AdminDetailRow>
        </>
      }
      renderPopup={(popupId) => (
        <Popup_QRCodeScan
          id={popupId}
          scannedUser={s.scannedUser}
          scanResult={s.scanResult}
          eventName={In_EventName}
          onDone={onScanEventDone}
        />
      )}
      onScanQrCodeClicked={onScanQrCodeClicked}
      onErrorMessageOk={onErrorMessageOk}
    />
  );
}

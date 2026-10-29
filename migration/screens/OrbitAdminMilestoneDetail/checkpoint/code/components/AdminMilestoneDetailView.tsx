import type { ReactNode } from 'react';
import { AdminDetailRow, AdminDetailScaffold } from '@/components/orbit/AdminDetailScaffold';
import {
  descriptionRowClass,
  hasMilestoneDate,
  milestoneDateText,
  typeRowClass,
} from '@/pages/OrbitAdminMilestoneDetail/hooks/adminMilestoneDetailActions';
import type { AdminMilestoneDetailState } from '@/pages/OrbitAdminMilestoneDetail/hooks/adminMilestoneDetailState';
import type { AdminMilestoneDetailInputs } from '@/pages/OrbitAdminMilestoneDetail/inputs';
import { MenuAction_Auto } from '@/pages/OrbitAdminMilestoneDetail/staticEntities';
import { Popup_QRCodeScan_Milestone } from './Popup_QRCodeScan_Milestone';

interface AdminMilestoneDetailViewProps extends AdminMilestoneDetailInputs {
  /** OutSystems instance id of the block (`$b1`). */
  id: string;
  /** The BottomBar placeholder. */
  bottomBar?: ReactNode;
  /** The block variables (useAdminMilestoneDetail). */
  state: AdminMilestoneDetailState;
  /** OnClick_ScanQrCode: the Scan QR Code button. */
  onScanQrCodeClicked: () => void;
  /** OnHandle_ScanMilestoneDone: Event_Done of Popup_QRCodeScan_Milestone. */
  onScanMilestoneDone: () => void;
  /** OnHandle_OrbitErrorMessage: ClickedOk of OrbitErrorMessage. */
  onErrorMessageOk: () => void;
}

/** The Orbit admin milestone detail, props only (SB = the compiled block, view :253-771), in the frame
    AdminDetailScaffold (layout, title, skeleton, NoInformation_Orbit, spinner, Scan QR Code button, Popup_QRCode,
    OrbitErrorMessage). The rows of a fetched Get_MilestoneInformation: the date row (when In_MilestoneDate is set),
    the type row (MilestoneType.Name) and the description row (In_MilestoneDescription), each with its margin rule.
    The popup shows Popup_QRCodeScan_Milestone. The flows are in useAdminMilestoneDetail.
    @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminMilestoneDetail */
export function AdminMilestoneDetailView({
  id,
  bottomBar,
  In_MilestoneName,
  In_MilestoneDate,
  In_MilestoneStartDate,
  In_MilestoneEndDate,
  In_MilestoneDescription,
  state: s,
  onScanQrCodeClicked,
  onScanMilestoneDone,
  onErrorMessageOk,
}: AdminMilestoneDetailViewProps) {
  const dateSet = hasMilestoneDate(In_MilestoneDate);
  const typeName = s.milestoneType.Name;
  return (
    <AdminDetailScaffold
      id={id}
      blockName="Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminMilestoneDetail"
      title={In_MilestoneName}
      menuAction={MenuAction_Auto}
      bottomBar={bottomBar}
      state={s}
      rows={
        <>
          {dateSet && (
            <AdminDetailRow className="flex-center-vertical" icon="orbit-icon-date-time">
              {milestoneDateText(In_MilestoneDate, In_MilestoneStartDate, In_MilestoneEndDate)}
            </AdminDetailRow>
          )}
          {typeName !== '' && (
            <AdminDetailRow className={typeRowClass(dateSet)} icon="orbit-icon-host-guest">
              {typeName}
            </AdminDetailRow>
          )}
          {In_MilestoneDescription !== '' && (
            <AdminDetailRow className={descriptionRowClass(dateSet, typeName)} icon="orbit-icon-window">
              {In_MilestoneDescription}
            </AdminDetailRow>
          )}
        </>
      }
      renderPopup={(popupId) => (
        <Popup_QRCodeScan_Milestone
          id={popupId}
          scannedUser={s.scannedUser}
          scanResult={s.scanResult}
          milestoneName={In_MilestoneName}
          onDone={onScanMilestoneDone}
        />
      )}
      onScanQrCodeClicked={onScanQrCodeClicked}
      onErrorMessageOk={onErrorMessageOk}
    />
  );
}

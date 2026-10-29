/** @origin Connect2_OrbitMobile_MUI.Orbit_Blocks.Popup_QRCodeScan_Milestone */
import type { QRCodeStatus } from '@/api/event';
import { QRCodeScanResult, ScanDetailLine } from '@/components/orbit/QRCodeScanResult';
import type { ScannedUser } from '@/pages/OrbitAdminMilestoneDetail/hooks/adminMilestoneDetailState';
import { getFormattedLocalDateTime } from '@/lib/orbit/actions';

interface Popup_QRCodeScan_MilestoneProps {
  /** OutSystems instance id of the block (`b1-$b3`). */
  id: string;
  scannedUser: ScannedUser;
  scanResult: QRCodeStatus;
  milestoneName: string;
  /** Event Event_Done. */
  onDone: () => void;
}

/** The scan result inside Popup_QRCode (PQM = migration/screens/OrbitAdminMilestoneDetail/sources/
    Connect2_OrbitMobile_MUI.Orbit_Blocks.Popup_QRCodeScan_Milestone.mvc.js, view :160-548), in the frame
    QRCodeScanResult (name :166-192, photo :193-222, result :420-476, Done :477-545). The bold details (:223-418): the
    milestone name and today's date on success, Description, Locality, Country, Role, Row, Venue, GMP Tag when not
    empty. Unlike Popup_QRCodeScan of the event scan: no seat list, no `white-space-nowrap`, a long weekday with
    commas in the date. */
export function Popup_QRCodeScan_Milestone({
  id,
  scannedUser,
  scanResult,
  milestoneName,
  onDone,
}: Popup_QRCodeScan_MilestoneProps) {
  const member = scannedUser.Member;
  return (
    <QRCodeScanResult
      id={id}
      blockName="Orbit_Blocks.Popup_QRCodeScan_Milestone"
      scannedUser={scannedUser}
      scanResult={scanResult}
      onDone={onDone}
      details={
        <>
          {scanResult.Success && <ScanDetailLine value={milestoneName} text={milestoneName} className="bold" />}
          {scanResult.Success && (
            <div data-container="">
              <span data-expression="">{getFormattedLocalDateTime(new Date(), false, true, false, true, false)}</span>
            </div>
          )}
          <ScanDetailLine
            value={scannedUser.MilestoneDescription}
            text={`Description: ${scannedUser.MilestoneDescription}`}
          />
          <ScanDetailLine value={member.LocalityName} text={`Locality: ${member.LocalityName}`} />
          <ScanDetailLine value={member.CountryName} text={`Country: ${member.CountryName}`} />
          <ScanDetailLine value={scannedUser.UserRole} text={`Role: ${scannedUser.UserRole}`} />
          <ScanDetailLine
            value={scannedUser.RowAllocation}
            text={`Row: ${scannedUser.RowAllocation}`}
            className="full-width display-flex"
          />
          <ScanDetailLine
            value={scannedUser.SeatingPlan}
            text={`Venue: ${scannedUser.SeatingPlan}`}
            className="full-width display-flex"
          />
          <ScanDetailLine value={scannedUser.Tag} text={`GMP Tag: ${scannedUser.Tag}`} />
        </>
      }
    />
  );
}

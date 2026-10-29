/** @origin Connect2_OrbitMobile_MUI.Orbit_Blocks.Popup_QRCodeScan */
import type { QRCodeStatus } from '@/api/event';
import { QRCodeScanResult, ScanDetailLine } from '@/components/orbit/QRCodeScanResult';
import { OSList } from '@/components/ui/os/OSList';
import type { ScannedUser } from '@/pages/OrbitAdminEventDetail/hooks/adminEventDetailState';
import { getFormattedLocalDateTime } from '@/lib/orbit/actions';

export interface Popup_QRCodeScanProps {
  /** OutSystems instance id of the block (`b1-$b3`). */
  id: string;
  scannedUser: ScannedUser;
  scanResult: QRCodeStatus;
  eventName: string;
  /** Event Event_Done. */
  onDone: () => void;
}

/** The scan result inside Popup_QRCode (PQ = migration/runtime-sources/Connect2_OrbitMobile_MUI.Orbit_Blocks
    .Popup_QRCodeScan.mvc.js, view :163-538), in the frame QRCodeScanResult (name :184-190, photo :207-232, result
    :416-503, Done :504-538). The bold details (:233-415): the event name and today's date on success, Locality,
    Country, Role, Row(s), GMP Tag when not empty; Role and GMP Tag with `white-space-nowrap`. */
export function Popup_QRCodeScan({ id, scannedUser, scanResult, eventName, onDone }: Popup_QRCodeScanProps) {
  const member = scannedUser.Member;
  return (
    <QRCodeScanResult
      id={id}
      blockName="Orbit_Blocks.Popup_QRCodeScan"
      scannedUser={scannedUser}
      scanResult={scanResult}
      onDone={onDone}
      details={
        <>
          {scanResult.Success && <ScanDetailLine value={eventName} text={eventName} className="bold" />}
          {scanResult.Success && (
            <div data-container="">
              <span data-expression="">{getFormattedLocalDateTime(new Date(), false, true, true, false, false)}</span>
            </div>
          )}
          <ScanDetailLine value={member.LocalityName} text={`Locality: ${member.LocalityName}`} />
          <ScanDetailLine value={member.CountryName} text={`Country: ${member.CountryName}`} />
          <ScanDetailLine
            value={scannedUser.UserRole}
            text={`Role: ${scannedUser.UserRole}`}
            textClassName="white-space-nowrap"
          />
          {scannedUser.Seats.length > 0 && (
            <div className="full-width display-flex" data-container="">
              <span className="white-space-nowrap">Row:</span>
              <OSList
                className="list list-group"
                animateItems
                source={scannedUser.Seats}
                keyOf={(s, i) => `${s.SeatAllocation}-${String(i)}`}
              >
                {(s, i) => <span data-expression="">{`${i !== 0 ? ' & ' : ' '}${s.SeatAllocation}`}</span>}
              </OSList>
            </div>
          )}
          <ScanDetailLine
            value={scannedUser.Tag}
            text={`GMP Tag: ${scannedUser.Tag}`}
            textClassName="white-space-nowrap"
          />
        </>
      }
    />
  );
}

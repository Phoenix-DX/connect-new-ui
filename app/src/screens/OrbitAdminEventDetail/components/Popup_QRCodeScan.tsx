// @os-block Connect2_OrbitMobile_MUI.Orbit_Blocks.Popup_QRCodeScan
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSList } from '@/components/ui/os/OSList';
import { MEMBER_PHOTO_PLACEHOLDER } from '@/shared/Connect2_OrbitMobile_MUI/lib/actions';
import { osImage } from '@/legacy/os/os-assets';
import type { QRCodeStatus, ScannedUser } from '@/screens/OrbitAdminEventDetail/types';
import { getFormattedLocalDateTime } from './actions';

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
    .Popup_QRCodeScan.mvc.js, view :163-538): the member's name ("Participant" without first and last name, :184-190),
    the photo (signed URL, else Images.User, :207-232), the bold details (event name and today's date on success,
    Locality, Country, Role, Row(s), GMP Tag when not empty, :233-415), "Has Checked in" with a check or the error
    message with a cross (:416-503), and the Done button that triggers Event_Done (:504-538). */
export function Popup_QRCodeScan({ id, scannedUser, scanResult, eventName, onDone }: Popup_QRCodeScanProps) {
  const member = scannedUser.Member;
  const name =
    member.FirstName !== '' && member.Lastname !== '' ? `${member.FirstName} ${member.Lastname}` : 'Participant';
  const userImage = osImage(MEMBER_PHOTO_PLACEHOLDER);
  return (
    <OSBlock name="Orbit_Blocks.Popup_QRCodeScan" id={id}>
      <div className="orbit-qrcode-scan-cont" data-container="">
        <div className="orbit-qrcode-scan-title" data-container="">
          <span data-expression="">{name}</span>
        </div>
        <div className="orbit-member-photo-cont margin-top-m" data-container="">
          {scannedUser.SignedURL !== '' ? (
            <img
              className="orbit-member-photo"
              data-error-placeholder-src={userImage}
              data-image=""
              src={scannedUser.SignedURL}
            />
          ) : (
            <img className="orbit-member-photo" data-image="" src={userImage} />
          )}
        </div>
        <div className="margin-top-m" data-container="" style={{ fontWeight: 'bold' }}>
          {scanResult.Success && eventName !== '' && (
            <div className="bold" data-container="">
              <span data-expression="">{eventName}</span>
            </div>
          )}
          {scanResult.Success && (
            <div data-container="">
              <span data-expression="">{getFormattedLocalDateTime(new Date(), false, true, true, false, false)}</span>
            </div>
          )}
          {member.LocalityName !== '' && (
            <div data-container="">
              <span data-expression="">{`Locality: ${member.LocalityName}`}</span>
            </div>
          )}
          {member.CountryName !== '' && (
            <div data-container="">
              <span data-expression="">{`Country: ${member.CountryName}`}</span>
            </div>
          )}
          {scannedUser.UserRole !== '' && (
            <div data-container="">
              <span className="white-space-nowrap" data-expression="">{`Role: ${scannedUser.UserRole}`}</span>
            </div>
          )}
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
          {scannedUser.Tag !== '' && (
            <div data-container="">
              <span className="white-space-nowrap" data-expression="">{`GMP Tag: ${scannedUser.Tag}`}</span>
            </div>
          )}
        </div>
        <div className="margin-top-m" data-container="">
          {scanResult.Success ? (
            <>
              <div className="bold margin-top-m" data-container="">
                <span data-expression="">Has Checked in</span>
              </div>
              <div className="orbit-qrcode-scan-ckeck-cont" data-container="">
                <i className="icon font-size-3-5em fa fa-check-circle fa-1x" data-icon="" />
              </div>
            </>
          ) : (
            <>
              <div className="bold margin-top-m" data-container="">
                <span data-expression="">{scanResult.ErrorMessage}</span>
              </div>
              <div className="orbit-qrcode-scan-cross-cont" data-container="">
                <i className="icon orbit-icon-circle-cross font-size-3-5em fa fa-times fa-1x" data-icon="" />
              </div>
            </>
          )}
        </div>
        <div className="orbit-qrcode-scan-button-cont" data-container="">
          <button className="btn btn-primary orbit-qrcode-scan-button" data-button="" type="button" onClick={onDone}>
            Done
          </button>
        </div>
      </div>
    </OSBlock>
  );
}

import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { MEMBER_PHOTO_PLACEHOLDER } from '@/lib/orbit/actions';
import { osImage } from '@/lib/os-assets';

export interface QRCodeScanResultProps {
  /** OutSystems instance id of the block (`b1-$b3`). */
  id: string;
  /** The OutSystems name of the block (`Orbit_Blocks.Popup_QRCodeScan` or `…_Milestone`). */
  blockName: string;
  /** The fields of ScannedUser that the frame reads. */
  scannedUser: { Member: { FirstName: string; Lastname: string }; SignedURL: string };
  /** ScanResult (QRCodeStatusRec). */
  scanResult: { Success: boolean; ErrorMessage: string };
  /** The content of the bold details container. */
  details: ReactNode;
  /** Event Event_Done. */
  onDone: () => void;
}

/** A line of the bold details: shown when its value is not empty. */
export function ScanDetailLine({
  value,
  text,
  className,
  textClassName,
}: {
  value: string;
  text: string;
  className?: string;
  textClassName?: string;
}) {
  if (value === '') return null;
  return (
    <div className={className} data-container="">
      <span className={textClassName} data-expression="">
        {text}
      </span>
    </div>
  );
}

/** The frame of the scan result inside Popup_QRCode (Popup_QRCodeScan and Popup_QRCodeScan_Milestone), props only:
    the member's name ("Participant" without first and last name), the photo (signed URL, else Images.User), the bold
    details of the block, "Has Checked in" with a check or the error message with a cross, and the Done button that
    triggers Event_Done. The two blocks differ only in the details.
    @origin Connect2_OrbitMobile_MUI.Orbit_Blocks.Popup_QRCodeScan */
export function QRCodeScanResult({ id, blockName, scannedUser, scanResult, details, onDone }: QRCodeScanResultProps) {
  const member = scannedUser.Member;
  const name =
    member.FirstName !== '' && member.Lastname !== '' ? `${member.FirstName} ${member.Lastname}` : 'Participant';
  const userImage = osImage(MEMBER_PHOTO_PLACEHOLDER);
  return (
    <OSBlock name={blockName} id={id}>
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
          {details}
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

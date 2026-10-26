import type { ReactNode } from 'react';
import type { EventQRCodeData, QRCodeSeatItem } from '@/api/event';
import { MenuIcon } from '@/components/layout/MenuIcon';
import { OrbitLayout } from '@/components/layout/OrbitLayout';
import { ContactHelpdeskFooter } from '@/components/orbit/ContactHelpdeskFooter';
import { OrbitNoInformation } from '@/components/orbit/OrbitNoInformation';
import { OrbitSkeleton } from '@/components/orbit/OrbitSkeleton';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSList } from '@/components/ui/os/OSList';
import { OrbitSkeletonLoading } from '@/lib/orbit/staticEntities';

/** Connect2_OrbitMobile_MUI.menuAction.auto: the MenuAction that the block gives MenuIcon__UpdatedOSUI. */
const MENU_ACTION_AUTO = 'Auto';

const NO_QR_CODE = "Unfortunately the QR Code couldn't be generated. Please try again later.";

export interface GenerateQrCodeViewProps {
  /** OutSystems instance id of the block (`$b1`). */
  id: string;
  /** In_EventName: the header title. */
  eventName: string;
  /** IsFetchingData: the MemberQRCode skeleton, and no footer. */
  isFetchingData: boolean;
  /** Get_EventQRCode is fetched with a QR image: the pass; else the NoInformation message. */
  hasPass: boolean;
  /** UserName. */
  userName: string;
  /** UserLocation. */
  userLocation: string;
  /** UserSignedURL: the member photo; "" gives an image without a source. */
  userSignedURL: string;
  /** QRCodeData.GetEventQRCodeResponse: the guest role, the seats and the GMP tag. */
  pass: EventQRCodeData['GetEventQRCodeResponse'];
  /** The URL of the QR image (QRCodeData.QRCodeAsBinary); "" hides "Check into Event" and the image. */
  qrCodeImageURL: string;
  /** ContactHelpdesk_Footer click. */
  onContactHelpdesk: () => void;
}

/** The event pass with its QR code: Layout_Orbit "orbit-detail orbit-header-center", the Auto MenuIcon and the event
    name as title. Content: the MemberQRCode skeleton while fetching. With the pass: the member card (photo, name,
    location, guest role, "Row:" + the seat allocations joined by " & ", "GMP Tag: " + Tag) and "Check into Event"
    above the QR image. Otherwise NoInformation. Bottom bar: ContactHelpdesk_Footer when not fetching. The screen fills
    neither placeholder (Menu, CommonUI_Elements). There is no capture: the QR code is not drawn in the browser, the
    server sends it as a PNG and an Image widget of type Binary shows it (QRCodeGenerate Q1).
    @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_QRCode.ScreenBlock_GenerateQRCode */
export function GenerateQrCodeView({
  id,
  eventName,
  isFetchingData,
  hasPass,
  userName,
  userLocation,
  userSignedURL,
  pass,
  qrCodeImageURL,
  onContactHelpdesk,
}: GenerateQrCodeViewProps) {
  const prefix = id.replace('$', '');

  /** The member card. The items of the seat list are inline expressions in a row (no `position: relative`). */
  const memberPass = (
    <div className="orbit-qrcode-member-cont" data-container="">
      <div className="orbit-member-photo-cont" data-container="">
        <img className="orbit-member-photo" data-image="" src={userSignedURL === '' ? undefined : userSignedURL} />
      </div>
      <div className="bold font-size-1-1em full-width margin-top-base text-align-center" data-container="">
        <span data-expression="">{userName}</span>
      </div>
      <div className="full-width margin-top-s text-align-center" data-container="">
        <span data-expression="">{userLocation}</span>
      </div>
      {pass.GuestRole !== '' && (
        <div className="full-width text-align-center" data-container="">
          <span className="white-space-nowrap" data-expression="">
            {pass.GuestRole}
          </span>
        </div>
      )}
      {pass.Seats.length > 0 && (
        <div className="display-flex" data-container="">
          <span className="white-space-nowrap">Row:</span>
          <OSList
            className="list list-group"
            animateItems
            source={pass.Seats}
            keyOf={(seat: QRCodeSeatItem, i) => `${seat.MilestoneName}-${String(i)}`}
          >
            {(seat, i) => <span data-expression="">{`${i !== 0 ? ' & ' : ' '}${seat.SeatAllocation}`}</span>}
          </OSList>
        </div>
      )}
      {pass.Tag !== '' && (
        <div className="full-width text-align-center" data-container="">
          <span className="white-space-nowrap" data-expression="">{`GMP Tag: ${pass.Tag}`}</span>
        </div>
      )}
      {qrCodeImageURL !== '' && (
        <div className="full-width margin-top-xxl text-align-center" data-container="">
          <div className="font-size-0-9em" data-container="">
            Check into Event
          </div>
          <div data-container="">
            <img className="orbit-qrcode-code" data-image="" src={qrCodeImageURL} />
          </div>
        </div>
      )}
    </div>
  );

  const content: ReactNode = isFetchingData ? (
    <OrbitSkeleton id={`${prefix}-$b4`} inSkeletonLoadingId={OrbitSkeletonLoading.MemberQRCode} />
  ) : hasPass ? (
    memberPass
  ) : (
    <OrbitNoInformation id={`${prefix}-$b3`} message={NO_QR_CODE} />
  );

  return (
    <OSBlock name="Orbit_ScreenBlocks_QRCode.ScreenBlock_GenerateQRCode" id={id}>
      <OrbitLayout
        id={`${prefix}-$b1`}
        customClass="orbit-detail orbit-header-center"
        menu={<div id={`${prefix}-Menu`} />}
        headerLeft={<MenuIcon id={`${prefix}-$b2`} menuAction={MENU_ACTION_AUTO} />}
        title={<span data-expression="">{eventName}</span>}
        content={content}
        bottomBar={!isFetchingData ? <ContactHelpdeskFooter id={`${prefix}-$b5`} onClick={onContactHelpdesk} /> : null}
        commonUIElements={<div id={`${prefix}-CommonUI_Elements`} />}
      />
    </OSBlock>
  );
}

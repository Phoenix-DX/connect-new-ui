import { OSBlock } from '@/components/ui/os/OSBlock';
import { PLATFORM_MESSAGE_TYPE, showFeedbackMessage } from '@/platform/feedback/feedbackStore';

interface ContactOptionsOrbitProps {
  /** OutSystems instance id of the block. */
  id: string;
  /** In_PhoneNumber ("" = no phone: the icon is dimmed). */
  inPhoneNumber: string;
  /** In_Email ("" = no e-mail: the icon is dimmed). */
  inEmail: string;
  /** Event Clicked_Phone. */
  onClickedPhone: () => void;
  /** Event Clicked_Email. */
  onClickedEmail: () => void;
}

/** The phone and e-mail buttons of a contact, props only: "orbit-contact-widget" with two
    "orbit-contact-widget-button"s (phone, mail icon; " opacity-0-50" without a value).
    - OnClick_Phone: with In_PhoneNumber, Clicked_Phone; else the info message "Phone Number is not available".
    - OnClick_Email: with In_Email, Clicked_Email; else the info message "Email is not available".
    @origin Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.ContactOptions_Orbit */
export function ContactOptionsOrbit({
  id,
  inPhoneNumber,
  inEmail,
  onClickedPhone,
  onClickedEmail,
}: ContactOptionsOrbitProps) {
  const onClickPhone = () => {
    if (inPhoneNumber !== '') onClickedPhone();
    else showFeedbackMessage('Phone Number is not available', PLATFORM_MESSAGE_TYPE.info);
  };
  const onClickEmail = () => {
    if (inEmail !== '') onClickedEmail();
    else showFeedbackMessage('Email is not available', PLATFORM_MESSAGE_TYPE.info);
  };
  return (
    <OSBlock name="Orbit_Generic_Blocks.ContactOptions_Orbit" id={id}>
      <div className="orbit-contact-widget" data-container="">
        <div className="orbit-contact-widget-button" data-container="" onClick={onClickPhone}>
          <i
            className={`icon orbit-icon-phone${inPhoneNumber !== '' ? '' : ' opacity-0-50'} fa fa-flag fa-1x`}
            data-icon=""
          />
        </div>
        <div className="orbit-contact-widget-button" data-container="" onClick={onClickEmail}>
          <i className={`icon orbit-icon-mail${inEmail !== '' ? '' : ' opacity-0-50'} fa fa-flag fa-1x`} data-icon="" />
        </div>
      </div>
    </OSBlock>
  );
}

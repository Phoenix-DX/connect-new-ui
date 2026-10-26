import { UBT_Color_Local, UBT_Icons2_Local } from '@/pages/ContactUsDetails/staticEntities';
import { CircleButtonWithLabel } from '@/components/ui/CircleButtonWithLabel';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { Icon } from '@/components/ui/Icon';
import { UBT_AvatarSize, UBT_FontSize, UBT_IconsSize, UBT_Size } from '@/lib/ubtConnectLibrary/staticEntities';
import { InformationDialog } from './InformationDialog';

const TEXT_OPTIONS = { MarginSize: { TopSizeId: UBT_Size.Base }, TextOptions: { FontSize: UBT_FontSize.Small } };

/** The thank-you popup that Send opens (ConfirmAction of SubmittedConfirmation) after the message was sent: the mail
    icon, the text and the Close button.
    @origin UBTConnect.App_Menu_ContactUs.ContactUsDetails */
export function SubmittedConfirmationDialog() {
  return (
    <InformationDialog
      id="SubmittedConfirmation"
      scope="b19"
      header={<span data-expression="">Thank you</span>}
      body={
        <>
          <div className="text-align-center" data-container="">
            <CircleButtonWithLabel
              id="$b20"
              sizeId={UBT_AvatarSize.Base_52}
              backgroundColorId={UBT_Color_Local.GreenLightest}
              icon={
                <Icon
                  id="$b21"
                  inSizeId={UBT_IconsSize.Display_36}
                  inColorId={UBT_Color_Local.GreenDarker}
                  inIconId={UBT_Icons2_Local.Mail}
                />
              }
            />
          </div>
          <CustomContainer id="$b22" options={TEXT_OPTIONS}>
            <span data-expression="">
              Your message has been sent. A member from our Customer Care Team will be in touch soon.
            </span>
          </CustomContainer>
        </>
      }
      buttonLabel="Close"
    />
  );
}

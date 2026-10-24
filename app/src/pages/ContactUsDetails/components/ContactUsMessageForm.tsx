import { OSForm, UnbuiltValidationWidget } from '@/components/ui/os/OSValidation';
import { DirectoryDetailSection } from '@/components/layout/DirectoryDetailSection';
import { UBT_Icons2_Local } from '@/pages/ContactUsDetails/staticEntities';
import { NotCaptured } from '@/platform/feedback/NotCaptured';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { Icon } from '@/components/ui/Icon';
import { IconText } from '@/components/ui/IconText';
import { UBT_Color, UBT_FontSize, UBT_FontWeight, UBT_Size } from '@/lib/ubtConnectLibrary/staticEntities';
import { Skeleton } from '@/components/ui/Skeleton';
import { TextAreaWithCounter } from '@/components/ui/TextAreaWithCounter';
import { MessageTextArea } from './MessageTextArea';

export interface ContactUsMessageFormProps {
  /** isLogged: only the message is asked; signed out, the other fields are not built (NotCaptured, Q1 → A). */
  isLogged: boolean;
  /** The subject is "General Suggestions, Feedback & Rating": the title asks for suggestions and feedback. */
  isFeedbackSubject: boolean;
  /** Rate_ShowRate: the rate (not built, Q2 → A) and the "contacted about my feedback" check box show. */
  showRate: boolean;
  /** isLoadingMainData: the form is a skeleton. */
  isLoading: boolean;
  /** isSubmiting: the message is disabled. */
  isSubmiting: boolean;
  /** ContactUsForm.Message. */
  message: string;
  /** MessagePrompt: the placeholder of the message. */
  messagePrompt: string;
  /** Rate_UserWantToBeContacted: the check box is checked. */
  wantToBeContacted: boolean;
  /** The message changed. */
  onMessageChange: (message: string) => void;
  /** The "contacted about my feedback" check box. */
  onWantToBeContactedToggle: () => void;
}

const TITLE_OPTIONS = {
  MarginSize: { BottomSizeId: UBT_Size.Small },
  TextOptions: { FontSize: UBT_FontSize.Small, FontWeight: UBT_FontWeight.SemiBold },
};
const REQUIRED_OPTIONS = {
  MarginSize: { BottomSizeId: UBT_Size.Small },
  TextOptions: { FontSize: UBT_FontSize.Small, FontWeight: UBT_FontWeight.SemiBold, IsItalic: true },
};

/** The message section of ContactUsDetails: the rate (not built), the title, and Form_ContactUs in a skeleton section
    with the Message text area and its counter and, for the feedback subject, the "contacted about my feedback" check
    box. Signed out, the title is "All fields are required." and the other fields are not built.
    @origin UBTConnect.App_Menu_ContactUs.ContactUsDetails */
export function ContactUsMessageForm({
  isLogged,
  isFeedbackSubject,
  showRate,
  isLoading,
  isSubmiting,
  message,
  messagePrompt,
  wantToBeContacted,
  onMessageChange,
  onWantToBeContactedToggle,
}: ContactUsMessageFormProps) {
  return (
    <DirectoryDetailSection id="$b7" inTitle="">
      {showRate && (
        <NotCaptured name="App_Menu_ContactUs.ContactUs_Rate (SelectedRate, isEnabled = not isSubmiting; Q2 → A)" />
      )}
      {isLogged ? (
        <CustomContainer id="$b9" options={TITLE_OPTIONS}>
          <span data-expression="">
            {isFeedbackSubject ? 'Please provide your suggestions and feedback' : 'How can we help you?'}
          </span>
        </CustomContainer>
      ) : (
        <CustomContainer id="$b10" options={REQUIRED_OPTIONS}>
          <span data-expression="">All fields are required.</span>
        </CustomContainer>
      )}
      <Skeleton id="$b11" isLoading={isLoading}>
        <OSForm id="Form_ContactUs" style="form OSFillParent">
          {!isLogged && (
            <>
              <NotCaptured name="ContactUsDetails signed-out fields: Full Name, Email, Phone Number, Country (Select Your Country), Locality (Q1 → A)" />
              {/* Their widgets register in Form_ContactUs as the original's do, so the Valid that OnClick_SubmitForm
                  assigns counts in Form_ContactUs.Valid. No validation runs on this screen (its sources have no
                  validateWidget call), so their own validate is never used. */}
              <UnbuiltValidationWidget id="Input_FullName" />
              <UnbuiltValidationWidget id="Input_Email" />
              <UnbuiltValidationWidget id="Input_PhoneNumber" />
              <UnbuiltValidationWidget id="Dropdown_Country" />
              <UnbuiltValidationWidget id="Input_Locality" />
            </>
          )}
          <div data-container="">
            <TextAreaWithCounter id="$b12" inInitialLength={0}>
              <label className="mandatory OSFillParent" data-label="" htmlFor="TextArea_Message">
                Message
              </label>
              <MessageTextArea
                disabled={isSubmiting}
                placeholder={messagePrompt}
                value={message}
                onChange={onMessageChange}
              />
            </TextAreaWithCounter>
          </div>
          {showRate && (
            <IconText
              id="$b13"
              text="I would like to be contacted about my feedback. "
              onClicked={onWantToBeContactedToggle}
            >
              <Icon
                id="$b14"
                inIconId={wantToBeContacted ? UBT_Icons2_Local.Checkbox : UBT_Icons2_Local.CheckboxOutlineBlank}
                inColorId={wantToBeContacted ? '' : UBT_Color.Neutral5}
              />
            </IconText>
          )}
        </OSForm>
      </Skeleton>
    </DirectoryDetailSection>
  );
}

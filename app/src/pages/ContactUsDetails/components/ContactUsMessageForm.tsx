import type { ContactUsForm, CountryName } from '@/api/message';
import { ContactUs_Rate } from '@/components/contact/ContactUs_Rate';
import { OSForm } from '@/components/ui/os/OSValidation';
import { DirectoryDetailSection } from '@/components/layout/DirectoryDetailSection';
import { UBT_Icons2_Local } from '@/pages/ContactUsDetails/staticEntities';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { Icon } from '@/components/ui/Icon';
import { IconText } from '@/components/ui/IconText';
import { UBT_Color, UBT_FontSize, UBT_FontWeight, UBT_Size } from '@/lib/ubtConnectLibrary/staticEntities';
import { Skeleton } from '@/components/ui/Skeleton';
import { TextAreaWithCounter } from '@/components/ui/TextAreaWithCounter';
import { ContactUsFormInput } from './ContactUsFormInput';
import { CountryDropdown } from './CountryDropdown';
import type { ContactUsInputField } from '@/pages/ContactUsDetails/hooks/contactUsDetailsState';
import { MessageTextArea } from './MessageTextArea';

export interface ContactUsMessageFormProps {
  /** isLogged: only the message is asked; signed out, the five other fields show first. */
  isLogged: boolean;
  /** The subject is "General Suggestions, Feedback & Rating": the title asks for suggestions and feedback. */
  isFeedbackSubject: boolean;
  /** Rate_ShowRate: the rate (ContactUs_Rate) and the "contacted about my feedback" check box show. */
  showRate: boolean;
  /** Rate_SelectedRate: the SelectedRate input of ContactUs_Rate. */
  selectedRate: number;
  /** isLoadingMainData: the form is a skeleton. */
  isLoading: boolean;
  /** isSubmiting: the message is disabled. */
  isSubmiting: boolean;
  /** ContactUsForm: the variables of the inputs, the dropdown and the message. */
  form: ContactUsForm;
  /** DataAction_GetCountriesNames.Countries: the list of Dropdown_Country. */
  countries: CountryName[];
  /** MessagePrompt: the placeholder of the message. */
  messagePrompt: string;
  /** Rate_UserWantToBeContacted: the check box is checked. */
  wantToBeContacted: boolean;
  /** The message changed. */
  onMessageChange: (message: string) => void;
  /** A signed-out input changed: its variable, then its OnChange action (OnChange_FormInput, OnChange_Email or
      OnChange_PhoneNumber). */
  onFieldChange: (field: ContactUsInputField, value: string) => void;
  /** The variable setter of Dropdown_Country (ContactUsForm.Country = the Code). */
  onCountryVariableChange: (code: string) => void;
  /** The OnChange of Dropdown_Country: OnChange_FormInput. */
  onCountryChange: () => void;
  /** ContactUs_RateRateSelected(Rate). */
  onRateSelected: (rate: number) => void;
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

/** The signed-out fields (TST `ContactUsDetails.mvc.js:712-1030`), in this order, each in a Container with its
    mandatory Label: Full Name, Email, Phone Number (Input, MaxLength 50), Country (Dropdown, Empty Value "Select Your
    Country") and Locality (Input, MaxLength 50). */
const SIGNED_OUT_INPUTS: Record<
  ContactUsInputField,
  { id: string; label: string; type: 'text' | 'email' | 'tel'; placeholder: string }
> = {
  FullName: { id: 'Input_FullName', label: 'Full Name', type: 'text', placeholder: 'Enter Full Name' },
  Email: { id: 'Input_Email', label: 'Email', type: 'email', placeholder: 'Enter Your Email Address' },
  PhoneNumber: { id: 'Input_PhoneNumber', label: 'Phone Number', type: 'tel', placeholder: 'Enter Phone Number' },
  Locality: { id: 'Input_Locality', label: 'Locality', type: 'text', placeholder: 'Enter Your Locality' },
};

/** The message section of ContactUsDetails: the rate (ContactUs_Rate, signed in on the feedback subject), the title,
    and Form_ContactUs in a skeleton section. Signed out, the title is "All fields are required." and the form starts
    with the five fields of the sender. Then the Message text area and its counter and, with the rate, the "contacted
    about my feedback" check box.
    @origin UBTConnect.App_Menu_ContactUs.ContactUsDetails */
export function ContactUsMessageForm({
  isLogged,
  isFeedbackSubject,
  showRate,
  selectedRate,
  isLoading,
  isSubmiting,
  form,
  countries,
  messagePrompt,
  wantToBeContacted,
  onMessageChange,
  onFieldChange,
  onCountryVariableChange,
  onCountryChange,
  onRateSelected,
  onWantToBeContactedToggle,
}: ContactUsMessageFormProps) {
  const input = (field: ContactUsInputField) => {
    const config = SIGNED_OUT_INPUTS[field];
    return (
      <div data-container="">
        <label className="mandatory OSFillParent" data-label="" htmlFor={config.id}>
          {config.label}
        </label>
        <ContactUsFormInput
          id={config.id}
          type={config.type}
          placeholder={config.placeholder}
          value={form[field]}
          enabled={!isSubmiting}
          onChange={(value) => {
            onFieldChange(field, value);
          }}
        />
      </div>
    );
  };
  return (
    <DirectoryDetailSection id="$b7" inTitle="">
      {showRate && (
        <ContactUs_Rate id="$b8" selectedRate={selectedRate} isEnabled={!isSubmiting} onRateSelected={onRateSelected} />
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
              {input('FullName')}
              {input('Email')}
              {input('PhoneNumber')}
              <div data-container="">
                <label className="mandatory OSFillParent" data-label="" htmlFor="Dropdown_Country">
                  Country
                </label>
                <CountryDropdown
                  id="Dropdown_Country"
                  enabled={!isSubmiting}
                  emptyValue="Select Your Country"
                  list={countries}
                  value={form.Country}
                  onVariableChange={onCountryVariableChange}
                  onChange={onCountryChange}
                />
              </div>
              {input('Locality')}
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
                value={form.Message}
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

import { useRef } from 'react';
import { useInputWithVariableValidation, type InputDataType } from '@/components/ui/os/OSValidation';

/** The data type of the variable that each input type binds to (Text, Email, PhoneNumber). */
const INPUT_DATA_TYPE: Record<'text' | 'email' | 'tel', InputDataType> = {
  text: 'Text',
  email: 'Email',
  tel: 'PhoneNumber',
};

interface ContactUsFormInputProps {
  /** The widget name (the input id). */
  id: string;
  /** Input Type: Text, Email or Phone. */
  type: 'text' | 'email' | 'tel';
  /** Prompt. */
  placeholder: string;
  /** The variable (a field of ContactUsForm). */
  value: string;
  /** Enabled = not isSubmiting. */
  enabled: boolean;
  /** The variable setter, then the OnChange action of the widget. */
  onChange: (value: string) => void;
}

/** A signed-out OSWidgets.Input of Form_ContactUs (TST `ContactUsDetails.mvc.js:727-1030`): Mandatory, MaxLength 50,
    Style "form-control", classes OSFillParent. The runtime markup (OutSystemsReactWidgets Input render) is
    `span.input-<type>` > input, with " not-valid", aria-describedby and the validation message once an action sets
    the widget invalid (OnClick_SubmitForm does for Input_FullName, Input_Email and Input_PhoneNumber).
    @origin UBTConnect.App_Menu_ContactUs.ContactUsDetails */
export function ContactUsFormInput({ id, type, placeholder, value, enabled, onChange }: ContactUsFormInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const validation = useInputWithVariableValidation({
    id,
    mandatory: true,
    dataType: INPUT_DATA_TYPE[type],
    elementRef: inputRef,
  });
  return (
    <span className={`input-${type}`}>
      <input
        ref={inputRef}
        aria-describedby={validation.ariaDescribedBy}
        aria-required="true"
        className={validation.className('form-control OSFillParent')}
        data-input=""
        disabled={!enabled}
        id={id}
        maxLength={50}
        placeholder={placeholder}
        required
        type={type}
        value={value}
        onChange={(event) => {
          onChange(event.currentTarget.value);
        }}
      />
      {validation.validationElement}
    </span>
  );
}

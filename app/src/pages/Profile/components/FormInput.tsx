import { useRef } from 'react';
import { useInputWithVariableValidation, type InputDataType } from '@/components/ui/os/OSValidation';

/** Data type of the variable that each input type binds to on this screen (Text, Email, PhoneNumber). */
const INPUT_DATA_TYPE: Record<'text' | 'email' | 'tel', InputDataType> = {
  text: 'Text',
  email: 'Email',
  tel: 'PhoneNumber',
};

export interface FormInputProps {
  /** The widget name (the input id). */
  id: string;
  /** The OutSystems input type: Text, Email or Phone. */
  type: 'text' | 'email' | 'tel';
  value: string;
  /** Enabled; a disabled input shows the value only. */
  enabled: boolean;
  /** MaxLength of the widget; undefined → no limit (MaxLength 0 renders no attribute). */
  maxLength?: number;
  /** Extended property autocomplete (the phone inputs: "off"); undefined → no attribute. */
  autoComplete?: string;
  /** Mandatory (default False): an empty value fails the platform validation, and aria-required is "true". */
  mandatory?: boolean;
  /** Style Classes (default "form-control"); the widget appends " OSFillParent". */
  style?: string;
  onChange?: (value: string) => void;
}

/** OutSystems Input widget (Text / Email / Phone) as captured: `span.input-<type>` > input, with the platform
    validation of the screen (Mandatory False on every input of the form except the address lines, whose Mandatory is
    the item's Required): the " not-valid" class, aria-describedby and the validation message after the input once a
    validation fails.
    @origin UBTConnect.App_Profile.Profile */
export function FormInput({
  id,
  type,
  value,
  enabled,
  maxLength,
  autoComplete,
  mandatory = false,
  style = 'form-control',
  onChange,
}: FormInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const validation = useInputWithVariableValidation({
    id,
    mandatory,
    dataType: INPUT_DATA_TYPE[type],
    elementRef: inputRef,
  });
  return (
    <span className={`input-${type}`}>
      <input
        ref={inputRef}
        aria-describedby={validation.ariaDescribedBy}
        aria-required={mandatory ? 'true' : 'false'}
        autoComplete={autoComplete}
        className={validation.className(`${style} OSFillParent`)}
        data-input=""
        disabled={!enabled}
        id={id}
        maxLength={maxLength}
        type={type}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
      />
      {validation.validationElement}
    </span>
  );
}

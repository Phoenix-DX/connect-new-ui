import { useRef } from 'react';
import { useInputWithVariableValidation } from '@/components/ui/os/OSValidation';

export interface MessageTextAreaProps {
  /** ContactUsForm.Message. */
  value: string;
  /** isSubmiting: the message cannot change while it is sent. */
  disabled: boolean;
  /** MessagePrompt. */
  placeholder: string;
  /** The OnChange of the widget, with the new message. */
  onChange: (value: string) => void;
}

/** The OSWidgets.TextArea TextArea_Message of the screen (Mandatory True, variable ContactUsForm.Message of type Text,
    max length 500, 3 rows), in Form_ContactUs. The markup is as captured: `<span>` > textarea. The platform validation
    adds " not-valid" and the validation message after the textarea, in the span (TextArea has no aria-describedby).
    Nothing on this screen validates it or assigns its Valid, so it stays valid and counts as valid in
    Form_ContactUs.Valid.
    @origin UBTConnect.App_Menu_ContactUs.ContactUsDetails */
export function MessageTextArea({ value, disabled, placeholder, onChange }: MessageTextAreaProps) {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const validation = useInputWithVariableValidation({
    id: 'TextArea_Message',
    mandatory: true,
    dataType: 'Text',
    elementRef: textAreaRef,
  });
  return (
    <span>
      <textarea
        ref={textAreaRef}
        className={validation.className('form-control OSFillParent')}
        data-textarea=""
        disabled={disabled}
        id="TextArea_Message"
        maxLength={500}
        rows={3}
        placeholder={placeholder}
        value={value}
        onChange={(event) => {
          onChange(event.currentTarget.value);
        }}
      />
      {validation.validationElement}
    </span>
  );
}

import { useRef } from 'react';
import { useInputWithVariableValidation } from '@/components/ui/os/OSValidation';

/** OSWidgets.TextArea TextArea_Message (P:1075-1110: Mandatory True, variable ContactUsForm.Message of type Text, max
    length 500, 3 rows), inside Form_ContactUs. Markup as captured (dom/default.html): `<span>` > textarea; the platform
    validation adds " not-valid" and the validation message after the textarea, in the span (TextArea has no
    aria-describedby, OutSystemsReactWidgets.js ≈81231, ≈81662). Nothing on this screen validates it or assigns its Valid,
    so it stays valid and counts as such in Form_ContactUs.Valid. */
export function TextArea_Message({
  value,
  disabled,
  placeholder,
  onChange,
}: {
  value: string;
  disabled: boolean;
  placeholder: string;
  onChange: (value: string) => void;
}) {
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

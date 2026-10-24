/** @origin UBTConnectLibrary.ConnectPatterns.InputCounter */
// @os-block UBTConnectLibrary.ConnectPatterns.InputCounter
import { useEffect, useRef, useState } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { UBT_Color, UBT_FontSize, UBT_FontWeight } from '@/shared/UBTConnectLibrary/lib/staticEntities';

export interface InputCounterProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** In_InputId: element id of the input or text area whose length is counted. */
  inInputId?: string;
  /** In_InitialLength: the length shown before the first typing. */
  inInitialLength?: number;
}

type CountedElement = HTMLInputElement | HTMLTextAreaElement;

/** "CurrentLength/MaxLength" under an input (UBTConnectLibrary.ConnectPatterns.InputCounter.mvc.js, ContactByEmailMember
    copy: view :150-210, controller :243-320, LimitMaxLenth JS :436-449). */
export function InputCounter({ id, inInputId = '', inInitialLength = 0 }: InputCounterProps) {
  // OnInitialize (:243-270): SetCurrentLength(In_InitialLength).
  const [currentLength, setCurrentLength] = useState(inInitialLength);
  const [maxLength, setMaxLength] = useState(0);
  const inputId = useRef(inInputId);

  // OnReady (:273-318) → LimitMaxLenth JS: each input event cuts the value to the maxlength attribute and sets the
  // current length; MaxLength = the input's maxlength attribute.
  useEffect(() => {
    const input = document.getElementById(inputId.current) as CountedElement | null;
    if (!input) return undefined;
    const limitField = (evt: Event) => {
      const target = evt.target as CountedElement;
      const maxlength = Number(target.getAttribute('maxlength'));
      if (target.value.length > maxlength) target.value = target.value.substring(0, maxlength);
      setCurrentLength(target.value.length);
    };
    input.addEventListener('input', limitField);
    const maxLen = Number.parseInt(input.getAttribute('maxlength') ?? '', 10);
    setMaxLength(Number.isNaN(maxLen) ? 0 : maxLen);
    return () => {
      input.removeEventListener('input', limitField);
    };
  }, []);

  return (
    <OSBlock name="ConnectPatterns.InputCounter" id={id}>
      <CustomContainer
        options={{
          TextOptions: {
            Color: UBT_Color.Neutral7,
            FontSize: UBT_FontSize.DoubleExtraSmall,
            FontWeight: UBT_FontWeight.SemiBold,
          },
        }}
        extendedClasses="text-align-right"
      >
        <span data-expression="">{`${String(currentLength)}/${String(maxLength)}`}</span>
      </CustomContainer>
    </OSBlock>
  );
}

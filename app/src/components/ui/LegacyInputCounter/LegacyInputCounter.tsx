/** @origin Connect2_LegacyShared.Reusable.InputCounter */
// @os-block Connect2_LegacyShared.Reusable.InputCounter
import { useEffect, useState } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { inputCounterLimitField, inputCounterMaxLength, inputCounterOnInitialize } from '@/lib/legacyShared/actions';

export interface LegacyInputCounterProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** InputId: element id of the input or text area whose length is counted. */
  inputId?: string;
  /** NoteInitialLength: the length shown before the first typing (0 = none). */
  noteInitialLength?: number;
}

/** "CurrLength/MaxLength" under an input (migration/blocks/sources/Connect2_LegacyShared.Reusable.InputCounter.mvc.js:
    view :95-150, OnInitialize :291, OnReady :244, LimitMaxLenth JS :398). Original classes only. */
export function LegacyInputCounter({ id, inputId = '', noteInitialLength = 0 }: LegacyInputCounterProps) {
  const [currLength, setCurrLength] = useState(() => inputCounterOnInitialize(noteInitialLength));
  const [maxLength, setMaxLength] = useState(0);

  // OnReady: LimitMaxLenth JS adds the `input` listener to the element and reads its maxlength.
  useEffect(() => {
    const input = document.getElementById(inputId) as HTMLInputElement | HTMLTextAreaElement | null;
    if (!input) return undefined;
    const limitField = (evt: Event) => {
      setCurrLength(inputCounterLimitField(evt.target as HTMLInputElement | HTMLTextAreaElement));
    };
    input.addEventListener('input', limitField);
    // OnReady assigns MaxLength once the element exists (the JS node runs after render).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMaxLength(inputCounterMaxLength(input));
    return () => {
      input.removeEventListener('input', limitField);
    };
  }, [inputId]);

  return (
    <OSBlock name="Reusable.InputCounter" id={id}>
      <div className="text-align-right" data-container="">
        <span className="text-neutral-6 font-size-0-75em margin-top-s " data-expression="">
          {`${String(currLength)}/${String(maxLength)}`}
        </span>
      </div>
    </OSBlock>
  );
}

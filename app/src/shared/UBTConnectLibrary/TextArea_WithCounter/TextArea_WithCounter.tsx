// @os-block UBTConnectLibrary.ConnectPatterns.TextArea_WithCounter
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { InputCounter } from '@/shared/UBTConnectLibrary/InputCounter';

export interface TextArea_WithCounterProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** In_InitialLength: passed to the InputCounter. */
  inInitialLength?: number;
  /** Placeholder Placeholder_Input: the caller's label and text area. */
  children?: ReactNode;
}

const MAIN_CONTAINER_CLASS = 'ubt-input-with-counter';

/** A text area placeholder with an InputCounter under it (UBTConnectLibrary.ConnectPatterns.TextArea_WithCounter.mvc.js,
    ContactByEmailMember copy: view :116-200, controller :232-275, GetInputId JS :314-320). */
export function TextArea_WithCounter({ id, inInitialLength = 0, children }: TextArea_WithCounterProps) {
  const placeholder = useRef<HTMLDivElement>(null);
  const [inputId, setInputId] = useState('');

  // OnReady → GetInputId JS: InputId = the id of the first textarea inside Placeholder_Input.
  useEffect(() => {
    setInputId(placeholder.current?.querySelector('textarea')?.id ?? '');
  }, []);

  return (
    <OSBlock name="ConnectPatterns.TextArea_WithCounter" id={id}>
      <div className={MAIN_CONTAINER_CLASS} data-container="">
        <div ref={placeholder}>{children}</div>
        {inputId !== '' && <InputCounter inInputId={inputId} inInitialLength={inInitialLength} />}
      </div>
    </OSBlock>
  );
}

/** @origin UBTConnectLibrary.ConnectPatterns.DynamicTextArea */
// @os-block UBTConnectLibrary.ConnectPatterns.DynamicTextArea
import { useEffect, useRef, type ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';

export interface DynamicTextAreaProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** In_Text: the text area's current text, mirrored into `data-replicated-value` (default ""). */
  inText?: string;
  /** In_IsBounded: adds `resizable-text-area--bounded` (default false). */
  inIsBounded?: boolean;
  /** Placeholder Placeholder_TextArea: the caller's TextArea widget (`<span><textarea …></span>`). */
  children?: ReactNode;
}

/** Text area that grows with its text (p:UBTConnectLibrary.ConnectPatterns.DynamicTextArea.mvc.js,
    ContactByEmailOneSchoolGlobal copy): container `resizable-text-area` (+ ` resizable-text-area--bounded` when
    In_IsBounded, view :180-188) around Placeholder_TextArea. OnReady and OnParametersChanged run
    Action_SetDataReplicatedValue (controller :247-262): its SetValue JS (:296-303) sets `data-replicated-value` = In_Text
    on the parent of the first textarea in the placeholder; the original CSS sizes the area from that attribute. */
export function DynamicTextArea({ id, inText = '', inIsBounded = false, children }: DynamicTextAreaProps) {
  const placeholder = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const textArea = placeholder.current?.querySelector('textarea');
    const parent = textArea?.parentElement;
    if (parent) parent.dataset.replicatedValue = inText;
  }, [inText, inIsBounded]);
  return (
    <OSBlock name="ConnectPatterns.DynamicTextArea" id={id}>
      <div className={'resizable-text-area' + (inIsBounded ? ' resizable-text-area--bounded' : '')} data-container="">
        <div ref={placeholder}>{children}</div>
      </div>
    </OSBlock>
  );
}

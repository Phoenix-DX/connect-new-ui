import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';

/** @origin Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.InputWithMaxChar
    A form field with its length hint (InputWithMaxChar.mvc.js view): Placeholder_Label, Placeholder_Input, then
    "Max Characters: <In_MaxChar>" in "text-align-right font-size-s text-neutral-6 margin-top-xs". No controller
    logic: the input of the placeholder sets its own MaxLength. */
export function InputWithMaxChar({
  id,
  inMaxChar,
  placeholderLabel,
  placeholderInput,
}: {
  id: string;
  /** In_MaxChar (default 0). */
  inMaxChar: number;
  placeholderLabel?: ReactNode;
  placeholderInput?: ReactNode;
}) {
  const scope = id.replace(/\$(b\d+)$/, '$1');
  return (
    <OSBlock name="Orbit_Generic_Blocks.InputWithMaxChar" id={id}>
      <div id={`${scope}-Placeholder_Label`}>{placeholderLabel}</div>
      <div id={`${scope}-Placeholder_Input`}>{placeholderInput}</div>
      <div className="text-align-right font-size-s text-neutral-6 margin-top-xs" data-container="">
        <span data-expression="">{`Max Characters: ${String(inMaxChar)}`}</span>
      </div>
    </OSBlock>
  );
}

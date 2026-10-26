/** @origin Connect2_Assemble_MUI.Assemble.AssembleSummary_Card_Row */
// @os-block Connect2_Assemble_MUI.Assemble.AssembleSummary_Card_Row
import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';

export interface AssembleSummaryCardRowProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** Placeholder Placeholder_Icon_Left. */
  placeholderIconLeft?: ReactNode;
  /** Placeholder Placeholder_Content. */
  placeholderContent?: ReactNode;
  /** Placeholder Placeholder_Icon_Right. */
  placeholderIconRight?: ReactNode;
}

/** One summary row (p:migration/blocks/sources/Connect2_Assemble_MUI.Assemble.AssembleSummary_Card_Row.mvc.js; view
    :107-168): container `assemble-summary-row text-neutral-7` with three inline placeholders (left icon, content,
    right icon). No inputs, no actions. */
export function AssembleSummaryCardRow({
  id,
  placeholderIconLeft,
  placeholderContent,
  placeholderIconRight,
}: AssembleSummaryCardRowProps) {
  return (
    <OSBlock name="Assemble.AssembleSummary_Card_Row" id={id}>
      <div className="assemble-summary-row text-neutral-7" data-container="">
        <div className="assemble-summary-row__icon-placeholder OSInline">{placeholderIconLeft}</div>
        <div className="assemble-summary-row__content-placeholder OSInline">{placeholderContent}</div>
        <div className="assemble-summary-row__icon-placeholder--right OSInline">{placeholderIconRight}</div>
      </div>
    </OSBlock>
  );
}

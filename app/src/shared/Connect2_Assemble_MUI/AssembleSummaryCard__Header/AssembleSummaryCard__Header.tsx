// @os-block Connect2_Assemble_MUI.Assemble.AssembleSummaryCard__Header
import { OSBlock } from '@/components/ui/os/OSBlock';

export interface AssembleSummaryCard__HeaderProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** HeaderLabel (default ""). */
  headerLabel?: string;
}

/** Card header (p:migration/blocks/sources/Connect2_Assemble_MUI.Assemble.AssembleSummaryCard__Header.mvc.js; view
    :122-146): the HeaderLabel expression `bold font-size-h6 margin-y-s`. No actions. */
export function AssembleSummaryCard__Header({ id, headerLabel = '' }: AssembleSummaryCard__HeaderProps) {
  return (
    <OSBlock name="Assemble.AssembleSummaryCard__Header" id={id}>
      <span className="bold font-size-h6 margin-y-s" data-expression="">
        {headerLabel}
      </span>
    </OSBlock>
  );
}

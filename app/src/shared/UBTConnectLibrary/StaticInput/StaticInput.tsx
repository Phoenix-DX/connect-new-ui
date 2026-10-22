// @os-block UBTConnectLibrary.ConnectPatterns.StaticInput
import { OSBlock } from '@/components/ui/os/OSBlock';
import { Icon } from '../Icon';
import { UBT_Color, UBT_Icons, UBT_IconSize } from '../lib/staticEntities';
import { TextEllipsis } from '../TextEllipsis';

export interface StaticInputProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** Prompt text; default "Search for households. entities, news". */
  inPrompt?: string;
  inExtendedClasses?: string;
  /** Event Click_Input. */
  onClickInput?: () => void;
}

/** A search box look-alike that only raises Click_Input (the caller opens the real search). */
export function StaticInput({
  id,
  inPrompt = 'Search for households. entities, news',
  inExtendedClasses = '',
  onClickInput,
}: StaticInputProps) {
  return (
    <OSBlock name="ConnectPatterns.StaticInput" id={id}>
      <div
        className={`ubt-static-input ${inExtendedClasses}`}
        data-container=""
        style={{ cursor: 'pointer' }}
        onClick={onClickInput}
      >
        <Icon inColorId={UBT_Color.Inherit} inIconId={UBT_Icons.Search} inSizeId={UBT_IconSize.Medium_20} />
        <TextEllipsis text={inPrompt} />
      </div>
    </OSBlock>
  );
}

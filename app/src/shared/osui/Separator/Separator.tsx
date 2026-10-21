// @os-block OutSystemsUI_2_23.Utilities.Separator
import { OSBlock } from '../../../components/OSBlock';
import { Color, Space } from '../lib/staticEntities';

export interface SeparatorProps {
  /** OutSystems instance id of the block. */
  id?: string;
  isVertical?: boolean;
  /** Space identifier. */
  space?: string;
  /** Color identifier. */
  color?: string;
  extendedClass?: string;
}

/** OutSystems UI Separator (survey:OutSystemsUI_2_23.Utilities.Separator.mvc.js view): padding wrapper and the line. */
export function Separator({
  id,
  isVertical = false,
  space = Space.Base,
  color = Color.Neutral4,
  extendedClass = '',
}: SeparatorProps) {
  return (
    <OSBlock name="Utilities.Separator" id={id}>
      <div
        className={
          !isVertical
            ? `padding-top-${space} padding-bottom-${space}`
            : `separator-wrapper full-height padding-right-${space} padding-left-${space}`
        }
        data-container=""
      >
        <div
          className={`separator${!isVertical ? ' separator-horizontal' : ' separator-vertical'} background-${color} ${extendedClass}`}
          data-container=""
        />
      </div>
    </OSBlock>
  );
}

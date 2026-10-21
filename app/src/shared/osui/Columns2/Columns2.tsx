// @os-block OutSystemsUI_2_23.Adaptive.Columns2
import type { ReactNode } from 'react';
import { OSBlock } from '../../../components/OSBlock';
import { BreakColumns, GutterSize } from '../lib/staticEntities';

export interface Columns2Props {
  /** OutSystems instance id of the block. */
  id?: string;
  /** GutterSize identifier (default GutterSize.Base). */
  gutterSize?: string;
  /** BreakColumns identifier (default BreakColumns.None). */
  tabletBehavior?: string;
  /** BreakColumns identifier (default BreakColumns.None). */
  phoneBehavior?: string;
  extendedClass?: string;
  /** Placeholder Column1. */
  column1?: ReactNode;
  /** Placeholder Column2. */
  column2?: ReactNode;
}

export function Columns2({
  id,
  gutterSize = GutterSize.Base,
  tabletBehavior = BreakColumns.None,
  phoneBehavior = BreakColumns.None,
  extendedClass = '',
  column1,
  column2,
}: Columns2Props) {
  return (
    <OSBlock name="Adaptive.Columns2" id={id}>
      <div
        className={`columns columns2 ${gutterSize} tablet-${tabletBehavior} phone-${phoneBehavior} ${extendedClass}`}
        data-container=""
      >
        <div className="columns-item">{column1}</div>
        <div className="columns-item">{column2}</div>
      </div>
    </OSBlock>
  );
}

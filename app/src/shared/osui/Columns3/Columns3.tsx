// @os-block OutSystemsUI_2_23.Adaptive.Columns3
import type { ReactNode } from 'react';
import { OSBlock } from '../../../components/OSBlock';
import { BreakColumns, GutterSize } from '../lib/staticEntities';

export interface Columns3Props {
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
  /** Placeholder Column3. */
  column3?: ReactNode;
}

export function Columns3({
  id,
  gutterSize = GutterSize.Base,
  tabletBehavior = BreakColumns.None,
  phoneBehavior = BreakColumns.None,
  extendedClass = '',
  column1,
  column2,
  column3,
}: Columns3Props) {
  return (
    <OSBlock name="Adaptive.Columns3" id={id}>
      <div
        className={`columns columns3 ${gutterSize} tablet-${tabletBehavior} phone-${phoneBehavior} ${extendedClass}`}
        data-container=""
      >
        <div className="columns-item">{column1}</div>
        <div className="columns-item">{column2}</div>
        <div className="columns-item">{column3}</div>
      </div>
    </OSBlock>
  );
}

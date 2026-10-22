// @os-block OutSystemsUI_2_23.Adaptive.Columns4
import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { BreakColumns, GutterSize } from '@/shared/osui/lib/staticEntities';

export interface Columns4Props {
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
  /** Placeholder Column4. */
  column4?: ReactNode;
}

/** OutSystems UI Columns4 (p:migration/blocks/sources/OutSystemsUI_2_23.Adaptive.Columns4.mvc.js view): container
    `columns columns4 <GutterSize> tablet-<TabletBehavior> phone-<PhoneBehavior> <ExtendedClass>` with four `columns-item`
    placeholders. Defaults (model :12-31): GutterSize Base, TabletBehavior and PhoneBehavior BreakColumns None. */
export function Columns4({
  id,
  gutterSize = GutterSize.Base,
  tabletBehavior = BreakColumns.None,
  phoneBehavior = BreakColumns.None,
  extendedClass = '',
  column1,
  column2,
  column3,
  column4,
}: Columns4Props) {
  return (
    <OSBlock name="Adaptive.Columns4" id={id}>
      <div
        className={`columns columns4 ${gutterSize} tablet-${tabletBehavior} phone-${phoneBehavior} ${extendedClass}`}
        data-container=""
      >
        <div className="columns-item">{column1}</div>
        <div className="columns-item">{column2}</div>
        <div className="columns-item">{column3}</div>
        <div className="columns-item">{column4}</div>
      </div>
    </OSBlock>
  );
}

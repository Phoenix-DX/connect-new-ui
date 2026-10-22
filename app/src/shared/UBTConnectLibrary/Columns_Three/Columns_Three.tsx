// @os-block UBTConnectLibrary.BasePatterns.Columns_Three
import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { Columns3 } from '@/shared/osui/Columns3';
import { styleFromCssText } from '@/shared/lib/cssText';
import {
  convertUbtSizeToGutterSize,
  formatClasses,
  getClasses_Column,
  getLocalVariable_ColumnSize,
} from '@/shared/UBTConnectLibrary/lib/actions';
import type { ColumnOptions } from './types';

export interface Columns_ThreeProps {
  /** OutSystems instance id of the block. */
  id?: string;
  columnOptions?: ColumnOptions;
  extendedClasses?: string;
  /** Placeholder Left. */
  left?: ReactNode;
  /** Placeholder Middle. */
  middle?: ReactNode;
  /** Placeholder Right. */
  right?: ReactNode;
}

const MAIN_CONTAINER_CLASS = 'ubt-columns';

/* OnReady (SetLocalVariable_ColumnSize_Left/Middle/Right): a size > 0 sets --_ubt-column-width on the column. */
function column(side: 'left' | 'middle' | 'right', size: number, content: ReactNode) {
  const className = `${MAIN_CONTAINER_CLASS}--${side} ${MAIN_CONTAINER_CLASS}--column ${size > 0 ? `${MAIN_CONTAINER_CLASS}--fixed-width` : ''}`;
  return (
    <div className={className} style={styleFromCssText(getLocalVariable_ColumnSize(size))}>
      {content}
    </div>
  );
}

export function Columns_Three({
  id,
  columnOptions = {},
  extendedClasses = '',
  left,
  middle,
  right,
}: Columns_ThreeProps) {
  const extendedClass = formatClasses(
    formatClasses(formatClasses(MAIN_CONTAINER_CLASS, extendedClasses), `${MAIN_CONTAINER_CLASS}--three-columns`),
    getClasses_Column(columnOptions),
  );
  const sizes = columnOptions.ColumnSizes ?? {};
  return (
    <OSBlock name="BasePatterns.Columns_Three" id={id}>
      <Columns3
        gutterSize={convertUbtSizeToGutterSize(columnOptions.SpacingSize ?? '')}
        extendedClass={extendedClass}
        column1={column('left', sizes.Left ?? 0, left)}
        column2={column('middle', sizes.Middle ?? 0, middle)}
        column3={column('right', sizes.Right ?? 0, right)}
      />
    </OSBlock>
  );
}

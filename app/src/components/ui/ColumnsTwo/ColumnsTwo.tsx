/** @origin UBTConnectLibrary.BasePatterns.Columns_Two */
// @os-block UBTConnectLibrary.BasePatterns.Columns_Two
import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { Columns2 } from '@/shared/osui/Columns2';
import { styleFromCssText } from '@/shared/lib/cssText';
import {
  convertUbtSizeToGutterSize,
  formatClasses,
  getClasses_Column,
  getLocalVariable_ColumnSize,
} from '@/shared/UBTConnectLibrary/lib/actions';
import type { ColumnOptions } from './types';

export interface ColumnsTwoProps {
  /** OutSystems instance id of the block. */
  id?: string;
  columnOptions?: ColumnOptions;
  extendedClasses?: string;
  /** Placeholder Left. */
  left?: ReactNode;
  /** Placeholder Right. */
  right?: ReactNode;
}

const MAIN_CONTAINER_CLASS = 'ubt-columns';

/* OnReady (SetLocalVariable_ColumnSize): a size > 0 sets the --_ubt-column-width custom property on the column. */
function column(side: 'left' | 'right', size: number, content: ReactNode) {
  const className = `${MAIN_CONTAINER_CLASS}--${side} ${MAIN_CONTAINER_CLASS}--column ${size > 0 ? `${MAIN_CONTAINER_CLASS}--fixed-width` : ''}`;
  return (
    <div className={className} style={styleFromCssText(getLocalVariable_ColumnSize(size))}>
      {content}
    </div>
  );
}

export function ColumnsTwo({ id, columnOptions = {}, extendedClasses = '', left, right }: ColumnsTwoProps) {
  const extendedClass = formatClasses(
    formatClasses(formatClasses(MAIN_CONTAINER_CLASS, extendedClasses), `${MAIN_CONTAINER_CLASS}--two-columns`),
    getClasses_Column(columnOptions),
  );
  const sizes = columnOptions.ColumnSizes ?? {};
  return (
    <OSBlock name="BasePatterns.Columns_Two" id={id}>
      <Columns2
        gutterSize={convertUbtSizeToGutterSize(columnOptions.SpacingSize ?? '')}
        extendedClass={extendedClass}
        column1={column('left', sizes.Left ?? 0, left)}
        column2={column('right', sizes.Right ?? 0, right)}
      />
    </OSBlock>
  );
}

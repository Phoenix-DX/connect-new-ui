/** @origin UBTConnectLibrary.ConnectPatterns.IconText */
// @os-block UBTConnectLibrary.ConnectPatterns.IconText
import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { ColumnsTwo } from '@/components/ui/ColumnsTwo';
import { CustomText } from '@/components/ui/CustomText';
import {
  UBT_ColumnBehaviour,
  UBT_FlexDirection,
  UBT_Size,
  UBT_VerticalAlign,
} from '@/shared/UBTConnectLibrary/lib/staticEntities';
import type { TextOptions } from './types';

export interface IconTextProps {
  /** OutSystems instance id of the block. */
  id?: string;
  isIconOnRight?: boolean;
  text?: string;
  textOptions?: TextOptions;
  /** UBT_Size identifier: the gutter between icon and text. */
  spacingSize?: string;
  extendedClasses?: string;
  subtextOptions?: TextOptions;
  inSubtext?: string;
  inJustifyText?: boolean;
  /** Event Clicked. */
  onClicked?: () => void;
  /** Placeholder Icon. */
  children?: ReactNode;
}

/** Icon and text in Columns_Two (p:UBTConnectLibrary.ConnectPatterns.IconText.mvc.js view): the icon column is reduced,
    or on the right (reduce last + row reverse) with IsIconOnRight; the subtext only when set. */
export function IconText({
  id,
  isIconOnRight = false,
  text = '',
  textOptions = {},
  spacingSize = UBT_Size.ExtraSmall,
  extendedClasses = '',
  subtextOptions = {},
  inSubtext = '',
  inJustifyText = false,
  onClicked,
  children,
}: IconTextProps) {
  return (
    <OSBlock name="ConnectPatterns.IconText" id={id}>
      <div data-container="" style={{ cursor: 'pointer' }} onClick={onClicked}>
        <ColumnsTwo
          extendedClasses={extendedClasses}
          columnOptions={{
            ColumnBehaviour: !isIconOnRight ? UBT_ColumnBehaviour.ReduceFirst : UBT_ColumnBehaviour.ReduceLast,
            SpacingSize: spacingSize,
            VerticalAlign: UBT_VerticalAlign.Center,
            FlexDirection: isIconOnRight ? UBT_FlexDirection.RowReverse : '',
          }}
          left={<div>{children}</div>}
          right={
            <>
              <CustomText inJustifyText={inJustifyText} inTextOptions={textOptions} inText={text} />
              {inSubtext !== '' && <CustomText inText={inSubtext} inTextOptions={subtextOptions} />}
            </>
          }
        />
      </div>
    </OSBlock>
  );
}

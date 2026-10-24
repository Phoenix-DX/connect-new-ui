// @os-block UBTConnectLibrary.ConnectCorePatterns.Member_ListItem
import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { ColumnsThree } from '@/components/ui/ColumnsThree';
import { CustomText } from '@/components/ui/CustomText';
import {
  UBT_Color,
  UBT_ColumnBehaviour,
  UBT_FontSize,
  UBT_FontWeight,
  UBT_Size,
  UBT_VerticalAlign,
} from '@/lib/ubtConnectLibrary/staticEntities';

export interface MemberListItemProps {
  /** OutSystems instance id of the block. */
  id?: string;
  title?: string;
  isEnabled?: boolean;
  lifeCycleText?: string;
  lifeCycleTextItalic?: boolean;
  /** Placeholder Placeholder_Left (avatar). */
  placeholderLeft?: ReactNode;
  /** Placeholder Actions. */
  actions?: ReactNode;
  /** Event OnClickPerson (raised only when isEnabled). */
  onOnClickPerson?: () => void;
}

/** Household member row (p:UBTConnectLibrary.ConnectCorePatterns.Member_ListItem.mvc.js:186-360): Columns_Three
    (expand middle, base gutter, centered) with the clickable avatar placeholder, the clickable name and life-cycle
    text, and the actions placeholder. OnClick (:395) raises OnClickPerson when enabled. */
export function MemberListItem({
  id,
  title = '',
  isEnabled = true,
  lifeCycleText = '',
  lifeCycleTextItalic = false,
  placeholderLeft,
  actions,
  onOnClickPerson,
}: MemberListItemProps) {
  const onClick = () => {
    if (isEnabled) onOnClickPerson?.();
  };
  return (
    <OSBlock name="ConnectCorePatterns.Member_ListItem" id={id}>
      <ColumnsThree
        columnOptions={{
          ColumnBehaviour: UBT_ColumnBehaviour.ExpandMiddle,
          SpacingSize: UBT_Size.Base,
          VerticalAlign: UBT_VerticalAlign.Center,
        }}
        left={
          <div data-container="" style={{ cursor: 'pointer' }} onClick={onClick}>
            <div>{placeholderLeft}</div>
          </div>
        }
        middle={
          <div data-container="" style={{ cursor: 'pointer' }} onClick={onClick}>
            <div data-container="">
              <CustomText
                inText={title}
                inTextOptions={{
                  Color: UBT_Color.Neutral9,
                  FontSize: UBT_FontSize.Base,
                  FontWeight: UBT_FontWeight.SemiBold,
                }}
              />
            </div>
            <div data-container="">
              <CustomText
                inTextOptions={{
                  Color: UBT_Color.Neutral7,
                  FontSize: UBT_FontSize.ExtraSmall,
                  FontWeight: UBT_FontWeight.Regular,
                  IsItalic: lifeCycleTextItalic,
                }}
                inText={lifeCycleText}
              />
            </div>
          </div>
        }
        right={<div>{actions}</div>}
      />
    </OSBlock>
  );
}

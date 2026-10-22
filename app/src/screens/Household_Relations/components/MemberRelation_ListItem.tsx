// @os-block UBTConnectLibrary.ConnectCorePatterns.MemberRelation_ListItem
import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { Columns_Three } from '@/shared/UBTConnectLibrary/Columns_Three';
import { CustomText } from '@/shared/UBTConnectLibrary/CustomText';
import { Icon } from '@/shared/UBTConnectLibrary/Icon';
import { IconText } from '@/shared/UBTConnectLibrary/IconText';
import {
  UBT_Color,
  UBT_ColumnBehaviour,
  UBT_FontSize,
  UBT_FontWeight,
  UBT_Size,
  UBT_VerticalAlign,
} from '@/shared/UBTConnectLibrary/lib/staticEntities';
import { UBT_IconSize_NonStandard_14, UBT_Icons_HomePIn } from './staticEntities';

export interface MemberRelation_ListItemProps {
  /** OutSystems instance id of the block. */
  id?: string;
  inTitle?: string;
  isEnabled?: boolean;
  inDeceasedCaption?: string;
  inRelation?: string;
  inFormattedLocality?: string;
  inIsDeceased?: boolean;
  /** Placeholder Placeholder_Left (avatar). */
  placeholderLeft?: ReactNode;
  /** Placeholder Actions. */
  actions?: ReactNode;
  /** Event OnClickPerson. */
  onOnClickPerson?: () => void;
}

/** Relation row (MemberRelation_ListItem.mvc.js view :150-490, controller :495-586): Columns_Three (expand middle, base
    gutter, centered). Left: the avatar placeholder in a container whose OnClick raises OnClickPerson when isEnabled.
    Middle: a container that raises OnClickPerson directly (no isEnabled check) with the title (neutral-9, base,
    semi-bold), the relation (neutral-7, xs), the deceased caption (italic) when In_IsDeceased, else the formatted
    locality with the home-pin icon when not empty. Right: the Actions placeholder. */
export function MemberRelation_ListItem({
  id,
  inTitle = '',
  isEnabled = true,
  inDeceasedCaption = '',
  inRelation = '',
  inFormattedLocality = '',
  inIsDeceased = false,
  placeholderLeft,
  actions,
  onOnClickPerson,
}: MemberRelation_ListItemProps) {
  // OnClick (controller :512-541): OnClickPerson only when isEnabled.
  const onClick = () => {
    if (isEnabled) onOnClickPerson?.();
  };
  return (
    <OSBlock name="ConnectCorePatterns.MemberRelation_ListItem" id={id}>
      <Columns_Three
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
          <div data-container="" style={{ cursor: 'pointer' }} onClick={onOnClickPerson}>
            <div data-container="">
              <CustomText
                inTextOptions={{
                  Color: UBT_Color.Neutral9,
                  FontSize: UBT_FontSize.Base,
                  FontWeight: UBT_FontWeight.SemiBold,
                }}
                inText={inTitle}
              />
            </div>
            <div data-container="">
              <CustomText
                inText={inRelation}
                inTextOptions={{ Color: UBT_Color.Neutral7, FontSize: UBT_FontSize.ExtraSmall }}
              />
            </div>
            {inIsDeceased && (
              <div data-container="">
                <CustomText
                  inText={inDeceasedCaption}
                  inTextOptions={{
                    Color: UBT_Color.Neutral7,
                    FontSize: UBT_FontSize.ExtraSmall,
                    FontWeight: UBT_FontWeight.Regular,
                    IsItalic: true,
                  }}
                />
              </div>
            )}
            {!inIsDeceased && inFormattedLocality !== '' && (
              <div data-container="">
                <IconText text={inFormattedLocality}>
                  <Icon
                    inSizeId={UBT_IconSize_NonStandard_14}
                    inIconId={UBT_Icons_HomePIn}
                    inColorId={UBT_Color.Neutral7}
                  />
                </IconText>
              </div>
            )}
          </div>
        }
        right={<div>{actions}</div>}
      />
    </OSBlock>
  );
}

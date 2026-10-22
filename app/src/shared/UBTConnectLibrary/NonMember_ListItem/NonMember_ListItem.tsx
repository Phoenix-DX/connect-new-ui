// @os-block UBTConnectLibrary.ConnectCorePatterns.NonMember_ListItem
import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { Columns_Three } from '../Columns_Three';
import { CustomText } from '../CustomText';
import {
  UBT_Color,
  UBT_ColumnBehaviour,
  UBT_FontSize,
  UBT_FontWeight,
  UBT_Size,
  UBT_VerticalAlign,
} from '../lib/staticEntities';

export interface NonMember_ListItemProps {
  /** OutSystems instance id of the block. */
  id?: string;
  title?: string;
  isEnabled?: boolean;
  deceasedCaption?: string;
  lifeCycleTextItalic?: boolean;
  marriedCaption?: string;
  marriedPartnerTakenText?: string;
  marriageHighlightText?: string;
  /** Placeholder Placeholder_Left (avatar). */
  placeholderLeft?: ReactNode;
  /** Placeholder Actions. */
  actions?: ReactNode;
  /** Event OnClickPerson (raised only when isEnabled). */
  onOnClickPerson?: () => void;
}

/** Relation row (p:UBTConnectLibrary.ConnectCorePatterns.NonMember_ListItem.mvc.js:228-487): like Member_ListItem, the
    middle column shows the name, the deceased caption (when not empty) and the married caption with the partner
    highlighted, followed by the italic "partner taken" text (each when not empty). OnClick (:520) raises
    OnClickPerson when enabled. */
export function NonMember_ListItem({
  id,
  title = '',
  isEnabled = true,
  deceasedCaption = '',
  lifeCycleTextItalic = false,
  marriedCaption = '',
  marriedPartnerTakenText = '',
  marriageHighlightText = '',
  placeholderLeft,
  actions,
  onOnClickPerson,
}: NonMember_ListItemProps) {
  const onClick = () => {
    if (isEnabled) onOnClickPerson?.();
  };
  const married = { Color: UBT_Color.CyanDarkest, FontSize: UBT_FontSize.ExtraSmall };
  return (
    <OSBlock name="ConnectCorePatterns.NonMember_ListItem" id={id}>
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
            {deceasedCaption !== '' ? (
              <div data-container="">
                <CustomText
                  inTextOptions={{
                    Color: UBT_Color.Neutral7,
                    FontSize: UBT_FontSize.ExtraSmall,
                    FontWeight: UBT_FontWeight.Regular,
                    IsItalic: lifeCycleTextItalic,
                  }}
                  inText={deceasedCaption}
                />
              </div>
            ) : null}
            {marriedCaption !== '' ? (
              <div data-container="">
                <CustomText
                  inTextOptions={married}
                  inText={marriedCaption}
                  inHighlightOptions={{ ...married, FontWeight: UBT_FontWeight.SemiBold }}
                  inHighlightWords={marriageHighlightText}
                />
                {marriedPartnerTakenText !== '' ? (
                  <CustomText inText={marriedPartnerTakenText} inTextOptions={{ ...married, IsItalic: true }} />
                ) : null}
              </div>
            ) : null}
          </div>
        }
        right={<div>{actions}</div>}
      />
    </OSBlock>
  );
}

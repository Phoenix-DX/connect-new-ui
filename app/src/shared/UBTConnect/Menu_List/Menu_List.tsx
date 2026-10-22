// @os-block UBTConnect.App_Menu.Menu_List
import { useState } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSList } from '@/components/ui/os/OSList';
import { Columns_Three } from '@/shared/UBTConnectLibrary/Columns_Three';
import { CustomContainer } from '@/shared/UBTConnectLibrary/CustomContainer';
import { CustomText } from '@/shared/UBTConnectLibrary/CustomText';
import { Icon } from '@/shared/UBTConnectLibrary/Icon';
import { IconText } from '@/shared/UBTConnectLibrary/IconText';
import {
  UBT_Color,
  UBT_ColumnBehaviour,
  UBT_FontSize,
  UBT_FontWeight,
  UBT_Icons2,
  UBT_IconsSize,
  UBT_Size,
  UBT_VerticalAlign,
} from '@/shared/UBTConnectLibrary/lib/staticEntities';
import { SkeletonSection } from '@/shared/UBTConnectLibrary/SkeletonSection';
import { SectionSeparator } from '@/shared/UBTConnect/SectionSeparator';
import type { UI_ListMenuOption, UI_MenuSection } from './types';

export interface Menu_ListProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** In_MenuSection: title, separator flag and the rows (record default: HasSeparator True, no title, no rows). */
  inMenuSection?: UI_MenuSection;
  /** Event OnClick_MenuOption(UI_ListMenuOption): a row was clicked; the row record as the block holds it. */
  onOnClickMenuOption?: (option: UI_ListMenuOption) => void;
}

/** The ExtraSmall text options of the row texts (Menu_List.mvc.js:392-399, 410-417, 467-474). */
const rowText = (color: string, weight: string = UBT_FontWeight.Regular) => ({
  Color: color,
  FontSize: UBT_FontSize.ExtraSmall,
  FontWeight: weight,
});

/** One menu section (p:UBTConnect.App_Menu.Menu_List.mvc.js, ContactUsMenu copy, view :141-620): SectionSeparator when
    HasSeparator; a CustomContainer (Neutral0 background, horizontal padding Base) with the SectionTitle (when not "")
    and a List `list list-group` of rows. Each row: SkeletonSection(IsLoading) > clickable CustomContainer (padding Small,
    bottom border Neutral3) > Columns_Three (ExpandMiddle, spacing Small, centred): Icon (Neutral9, Base_24) |
    Label (+ LabelDescription when not "") | SkeletonSection(IconRightLoading) with a Switch when useSwitch, else
    IconText(IconRightText, icon IconRight) when IconRightText is not "", else Icon(IconRight, Neutral7).
    The row click raises OnClick_MenuOption with the row (:316-326; the block's own handler only triggers the event,
    controller :645-647). */
export function Menu_List({ id, inMenuSection = {}, onOnClickMenuOption }: Menu_ListProps) {
  const options = inMenuSection.MenuOptions ?? [];
  /* The Switch writes SwitchValue into the block's copy of the input record (:520-525); the copy is replaced when the
     parent passes a new In_MenuSection (model setInputs). */
  const [switchState, setSwitchState] = useState<{ source: UI_MenuSection; values: Record<number, boolean> }>({
    source: inMenuSection,
    values: {},
  });
  const switchValues = switchState.source === inMenuSection ? switchState.values : {};
  const current = (option: UI_ListMenuOption, index: number): UI_ListMenuOption =>
    index in switchValues ? { ...option, SwitchValue: switchValues[index] } : option;

  return (
    <OSBlock name="App_Menu.Menu_List" id={id}>
      {(inMenuSection.HasSeparator ?? true) && <SectionSeparator />}
      <CustomContainer
        options={{
          Background: { BackgroundColor: UBT_Color.Neutral0 },
          PaddingSize: { HorizontalSizeId: UBT_Size.Base },
        }}
      >
        {(inMenuSection.SectionTitle ?? '') !== '' && (
          <CustomContainer
            options={{
              PaddingSize: { VerticalSizeId: UBT_Size.Small },
              TextOptions: rowText(UBT_Color.Neutral8, UBT_FontWeight.SemiBold),
            }}
          >
            <span data-expression="">{inMenuSection.SectionTitle}</span>
          </CustomContainer>
        )}
        <OSList
          source={options}
          keyOf={(option, index) => option.Id ?? index}
          className="list list-group"
          animateItems
          positionRelative
        >
          {(option, index) => {
            const row = current(option, index);
            const iconRight = row.IconRight ?? UBT_Icons2.ChevronRight;
            return (
              <SkeletonSection inIsLoading={row.IsLoading ?? false}>
                <CustomContainer
                  options={{
                    PaddingSize: { GeneralSizeId: UBT_Size.Small },
                    BorderOptions: { Color: UBT_Color.Neutral3, Size: { BottomSizeId: UBT_Size.Small } },
                  }}
                  onClicked={() => onOnClickMenuOption?.(current(option, index))}
                >
                  <Columns_Three
                    columnOptions={{
                      ColumnBehaviour: UBT_ColumnBehaviour.ExpandMiddle,
                      SpacingSize: UBT_Size.Small,
                      VerticalAlign: UBT_VerticalAlign.Center,
                    }}
                    left={
                      <Icon
                        inColorId={UBT_Color.Neutral9}
                        inSizeId={UBT_IconsSize.Base_24}
                        inIconId={row.IconId ?? ''}
                      />
                    }
                    middle={
                      <>
                        <CustomText inTextOptions={rowText(UBT_Color.Neutral9)} inText={row.Label ?? ''} />
                        {(row.LabelDescription ?? '') !== '' && (
                          <CustomText inTextOptions={rowText(UBT_Color.Neutral6)} inText={row.LabelDescription} />
                        )}
                      </>
                    }
                    right={
                      <SkeletonSection inIsLoading={row.IconRightLoading ?? false}>
                        {row.useSwitch === true ? (
                          <div className="item-switch" data-container="">
                            <span>
                              <input
                                checked={row.SwitchValue ?? false}
                                className="switch"
                                data-switch=""
                                type="checkbox"
                                onChange={(e) => {
                                  const checked = e.target.checked;
                                  setSwitchState({
                                    source: inMenuSection,
                                    values: { ...switchValues, [index]: checked },
                                  });
                                }}
                              />
                            </span>
                          </div>
                        ) : (row.IconRightText ?? '') !== '' ? (
                          <IconText
                            textOptions={rowText(UBT_Color.Neutral8)}
                            isIconOnRight
                            text={row.IconRightText}
                            spacingSize={UBT_Size.Small}
                          >
                            <Icon
                              inSizeId={UBT_IconsSize.Base_24}
                              inIconId={iconRight}
                              inColorId={UBT_Color.Neutral7}
                            />
                          </IconText>
                        ) : (
                          <Icon inIconId={iconRight} inSizeId={UBT_IconsSize.Base_24} inColorId={UBT_Color.Neutral7} />
                        )}
                      </SkeletonSection>
                    }
                  />
                </CustomContainer>
              </SkeletonSection>
            );
          }}
        </OSList>
      </CustomContainer>
    </OSBlock>
  );
}

// @os-block UBTConnect.App_CommonBlocks_Filter.FilterSheet_OptionChoice_Item
import { useMemo } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { CustomContainer } from '../../UBTConnectLibrary/CustomContainer';
import { CustomText } from '../../UBTConnectLibrary/CustomText';
import { SelectionOption_List } from '../../UBTConnectLibrary/SelectionOption_List';
import {
  UBT_Color,
  UBT_FontSize,
  UBT_FontWeight,
  UBT_Shape,
  UBT_Size,
} from '../../UBTConnectLibrary/lib/staticEntities';
import type { SelectionOption_Item } from '../../UBTConnectLibrary/lib/structures';
import { Choice } from '../lib/staticEntities';
import type { Filter_Common_Control_Choice } from './types';

export interface FilterSheet_OptionChoice_ItemProps {
  /** OutSystems instance id of the block. */
  id?: string;
  filterCommonControlChoice?: Filter_Common_Control_Choice;
  /** Event OnChange(Title, ChoiceId). */
  onOnChange?: (title: string, choiceId: string) => void;
}

/** DefineOptions (OnInitialize / OnParametersChanged, p:…FilterSheet_OptionChoice_Item.mvc.js controller): None (when
    NoneLabel is set), Yes and No, selected by SelectedChoiceId. */
function defineOptions(choice: Filter_Common_Control_Choice): SelectionOption_Item[] {
  const selected = choice.SelectedChoiceId ?? '';
  const option = (id: string, text: string) => ({ Id: id, DisplayText: text, isSelected: selected === id });
  return [
    ...((choice.NoneLabel ?? '') !== '' ? [option(Choice.None, choice.NoneLabel ?? '')] : []),
    option(Choice.Yes, choice.YesLabel ?? ''),
    option(Choice.No, choice.NoLabel ?? ''),
  ];
}

/* Stable empty defaults: a new {} / [] per render would count as a new input. */
const NO_CHOICE: Filter_Common_Control_Choice = {};

/** A titled single choice of the filter sheet (view: CustomContainer "Choice" > optional title > SelectionOption_List). */
export function FilterSheet_OptionChoice_Item({
  id,
  filterCommonControlChoice = NO_CHOICE,
  onOnChange,
}: FilterSheet_OptionChoice_ItemProps) {
  const options = useMemo(() => defineOptions(filterCommonControlChoice), [filterCommonControlChoice]);
  const title = filterCommonControlChoice.Title ?? '';
  return (
    <OSBlock name="App_CommonBlocks_Filter.FilterSheet_OptionChoice_Item" id={id}>
      <CustomContainer
        options={{
          Background: { BackgroundColor: UBT_Color.Neutral0 },
          PaddingSize: { VerticalSizeId: UBT_Size.Base, HorizontalSizeId: UBT_Size.Small },
          MarginSize: { BottomSizeId: UBT_Size.ExtraSmall },
          BorderOptions: {
            Color: UBT_Color.Neutral3,
            Size: { GeneralSizeId: UBT_Size.Small },
            Radius: { GeneralSizeId: UBT_Shape.Soft },
          },
        }}
      >
        {title !== '' && (
          <CustomContainer options={{ MarginSize: { BottomSizeId: UBT_Size.Small } }}>
            <CustomText
              inTextOptions={{ FontSize: UBT_FontSize.Base, FontWeight: UBT_FontWeight.SemiBold }}
              extendedClasses="text-align-left"
              inText={title}
            />
          </CustomContainer>
        )}
        <SelectionOption_List
          selectionOptionItemList={options}
          isMultiselect={false}
          lastItemStyleOptions={{ MarginSize: { BottomSizeId: UBT_Size.None } }}
          itemStyleOptions={{ MarginSize: { BottomSizeId: UBT_Size.Base } }}
          onOnSelectionChange={(_selectedItems, clickedItemId) => {
            onOnChange?.(title, clickedItemId);
          }}
        />
      </CustomContainer>
    </OSBlock>
  );
}

/** @origin UBTConnect.App_CommonBlocks_Filter.FilterSheet_OptionChoice_Item */
// @os-block UBTConnect.App_CommonBlocks_Filter.FilterSheet_OptionChoice_Item
import { useMemo } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { CustomText } from '@/components/ui/CustomText';
import { SelectionOptionList } from '@/components/ui/SelectionOptionList';
import { UBT_Color, UBT_FontSize, UBT_FontWeight, UBT_Shape, UBT_Size } from '@/lib/ubtConnectLibrary/staticEntities';
import type { SelectionOption_Item } from '@/lib/ubtConnectLibrary/structures';
import { Choice } from '@/lib/ubtConnect/staticEntities';
import type { Filter_Common_Control_Choice } from './types';

export interface FilterOptionChoiceProps {
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
export function FilterOptionChoice({ id, filterCommonControlChoice = NO_CHOICE, onOnChange }: FilterOptionChoiceProps) {
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
        <SelectionOptionList
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

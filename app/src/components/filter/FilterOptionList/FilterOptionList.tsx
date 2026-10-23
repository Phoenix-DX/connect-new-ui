/** @origin UBTConnect.App_CommonBlocks_Filter.FilterSheet_OptionList_Item */
// @os-block UBTConnect.App_CommonBlocks_Filter.FilterSheet_OptionList_Item
import { useMemo, useState } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { showUpgradePopUp } from '@/platform/feedback/dialogs/subscription';
import { CustomContainer } from '@/shared/UBTConnectLibrary/CustomContainer';
import { CustomText } from '@/shared/UBTConnectLibrary/CustomText';
import { Icon } from '@/shared/UBTConnectLibrary/Icon';
import { IconText } from '@/shared/UBTConnectLibrary/IconText';
import { Input } from '@/shared/UBTConnectLibrary/Input';
import { SelectionOption_List } from '@/shared/UBTConnectLibrary/SelectionOption_List';
import {
  Shape,
  UBT_Color,
  UBT_FontSize,
  UBT_FontWeight,
  UBT_Icons2,
  UBT_Shape,
  UBT_Size,
} from '@/shared/UBTConnectLibrary/lib/staticEntities';
import type { SelectionOption_Item } from '@/shared/UBTConnectLibrary/lib/structures';
import { Choice } from '@/shared/UBTConnect/lib/staticEntities';
import type { Filter_Common_Control_List } from './types';

export interface FilterOptionListProps {
  /** OutSystems instance id of the block. */
  id?: string;
  filterCommonControlList?: Filter_Common_Control_List;
  showHeader?: boolean;
  /** Toggled by the parent to rebuild the options (its value is not read). */
  forceUpdate?: boolean;
  /** Event OnChange(SelectedIds, Title). */
  onOnChange?: (selectedIds: string[], title: string) => void;
  /** Event OnBack. */
  onOnBack?: () => void;
  /** Event Event_Input_OnReady(Id): the search input's widget id. */
  onEventInputOnReady?: (id: string) => void;
}

/** JSUtils_String_RemoveAccents: its JavaScript is in no captured source (README, question); the text is kept as is. */
const removeAccents = (text: string) => text;

/** Action_DefineOptions (controller): with a search text, the In_Options whose DisplayText contains it (Index, ignore
    case, after RemoveAccents); otherwise "All <Title>" (AddAllOptions) then In_Options. Each option is selected when
    SelectedIds has its Id. */
function defineOptions(list: Filter_Common_Control_List, search: string): SelectionOption_Item[] {
  const options = list.In_Options ?? [];
  const selectedIds = list.SelectedIds ?? [];
  let result: SelectionOption_Item[];
  if (search !== '') {
    const needle = removeAccents(search).toLowerCase();
    result = options.filter((p) =>
      removeAccents(p.DisplayText ?? '')
        .toLowerCase()
        .includes(needle),
    );
  } else {
    const all =
      (list.AddAllOptions ?? true)
        ? [
            {
              Id: Choice.None,
              DisplayText: 'All ' + (list.Title ?? ''),
              isSelected: (selectedIds[0] ?? '') === Choice.None,
            },
          ]
        : [];
    result = [...all, ...options];
  }
  return result.map((o) => ({ ...o, isSelected: selectedIds.includes(o.Id ?? '') }));
}

/* Stable empty defaults: a new {} / [] per render would count as a new input. */
const NO_LIST: Filter_Common_Control_List = {};

/** One option list of the filter sheet with a search input (p:…FilterSheet_OptionList_Item.mvc.js view, controller).
    SelectedIds of the input record are the block's own copy (OnChange_Selection replaces them). */
export function FilterOptionList({
  id,
  filterCommonControlList = NO_LIST,
  showHeader = false,
  forceUpdate = false,
  onOnChange,
  onOnBack,
  onEventInputOnReady,
}: FilterOptionListProps) {
  const [input, setInput] = useState(filterCommonControlList);
  const [list, setList] = useState(filterCommonControlList);
  if (input !== filterCommonControlList) {
    setInput(filterCommonControlList);
    setList(filterCommonControlList);
  }
  const [search, setSearch] = useState('');
  // eslint-disable-next-line react-hooks/exhaustive-deps -- ForceUpdate only re-runs DefineOptions (OnParametersChanged)
  const options = useMemo(() => defineOptions(list, search), [list, search, forceUpdate]);
  const title = list.Title ?? '';
  const noResultsBox = { PaddingSize: { GeneralSizeId: UBT_Size.Small }, MarginSize: { BottomSizeId: UBT_Size.Small } };
  return (
    <OSBlock name="App_CommonBlocks_Filter.FilterSheet_OptionList_Item" id={id}>
      <div data-container="" />
      <CustomContainer
        options={{
          Background: { BackgroundColor: UBT_Color.Neutral0 },
          PaddingSize: { GeneralSizeId: UBT_Size.Small },
          BorderOptions: { Radius: { GeneralSizeId: UBT_Shape.Soft } },
        }}
        extendedClasses="text-align-left"
      >
        {showHeader && (
          <CustomContainer
            options={{
              PaddingSize: { VerticalSizeId: UBT_Size.Small },
              BorderOptions: { Color: UBT_Color.Neutral3, Size: { BottomSizeId: UBT_Size.Small } },
            }}
            extendedClasses="ubt-zindex-2"
            onClicked={onOnBack}
          >
            <IconText text={'All ' + title}>
              <Icon inColorId={UBT_Color.Neutral7} inIconId={UBT_Icons2.ArrowLeftAlt} />
            </IconText>
          </CustomContainer>
        )}
        <CustomContainer
          options={{ PaddingSize: { VerticalSizeId: UBT_Size.Small }, MarginSize: { VerticalSizeId: UBT_Size.Small } }}
        >
          <Input
            inOptions={{ SearchPrompt: 'Search', Debounce_DelayMS: 300, BorderRadius: Shape.Rounded }}
            onEventOnReady={onEventInputOnReady}
            onEventClearString={() => {
              setSearch('');
            }}
            onEventOnChange={setSearch}
          />
        </CustomContainer>
        {search !== '' && options.length === 0 ? (
          <>
            <CustomContainer options={noResultsBox}>
              <CustomText
                inText={'No results found for ‘' + search + '’'}
                inTextOptions={{
                  Color: UBT_Color.Neutral9,
                  FontSize: UBT_FontSize.Small,
                  FontWeight: UBT_FontWeight.SemiBold,
                }}
              />
            </CustomContainer>
            <CustomContainer options={noResultsBox}>
              <CustomText
                inTextOptions={{
                  Color: UBT_Color.Neutral9,
                  FontSize: UBT_FontSize.Small,
                  FontWeight: UBT_FontWeight.Regular,
                }}
                inText="We couldn’t find an item that matches your search. Please check your spelling or try different keywords."
              />
            </CustomContainer>
          </>
        ) : (
          <SelectionOption_List
            selectionOptionItemList={options}
            isMultiselect={false}
            lastItemStyleOptions={{ BorderOptions: { Size: { GeneralSizeId: UBT_Size.None } } }}
            itemStyleOptions={{
              Background: {},
              PaddingSize: { VerticalSizeId: UBT_Size.Small },
              BorderOptions: { Color: UBT_Color.Neutral3, Size: { BottomSizeId: UBT_Size.Small } },
            }}
            onNotEnabledOnClick={() => void showUpgradePopUp()}
            onOnSelectionChange={(selectedItems) => {
              const selectedIds = selectedItems.map((o) => o.Id ?? '');
              setList((l) => ({ ...l, SelectedIds: selectedIds }));
              onOnChange?.(selectedIds, title);
            }}
          />
        )}
      </CustomContainer>
    </OSBlock>
  );
}

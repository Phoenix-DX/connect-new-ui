// @os-block UBTConnectLibrary.ConnectPatterns.SelectionOption_List
import { useMemo, useState } from 'react';
import { OSBlock } from '../../../components/OSBlock';
import { Columns_Two } from '../Columns_Two';
import { CustomContainer } from '../CustomContainer';
import { CustomText } from '../CustomText';
import { Icon } from '../Icon';
import { IconText } from '../IconText';
import { LazyImage } from '../LazyImage';
import { getFlagURLByCountryCode, merge_StyleOptions } from '../lib/actions';
import {
  UBT_Color,
  UBT_ColumnBehaviour,
  UBT_IconSize,
  UBT_Icons,
  UBT_ImageSize,
  UBT_Shape,
  UBT_Size,
} from '../lib/staticEntities';
import type { ContainerOptions, SelectionOption_Item } from './types';

export interface SelectionOption_ListProps {
  /** OutSystems instance id of the block. */
  id?: string;
  selectionOptionItemList?: SelectionOption_Item[];
  isMultiselect?: boolean;
  itemStyleOptions?: ContainerOptions;
  lastItemStyleOptions?: ContainerOptions;
  /** UBT_IconSize identifier of the option icon. */
  iconSizeId?: string;
  /** Event OnSelectionChange(SelectedItems, ClickedItemId). */
  onOnSelectionChange?: (selectedItems: SelectionOption_Item[], clickedItemId: string) => void;
  /** Event NotEnabledOnClick(ClickedItemId). */
  onNotEnabledOnClick?: (clickedItemId: string) => void;
}

/* Stable empty defaults: a new {} / [] per render would count as a new input. */
const NO_ITEMS: SelectionOption_Item[] = [];
const NO_STYLE: ContainerOptions = {};

/** List of options with a checkbox (multiselect) or radio icon (p:UBTConnectLibrary.ConnectPatterns.SelectionOption_List
    .mvc.js view :210-560). The last item uses Item_StyleOptions merged with LastItem_StyleOptions (GetLastStyleOption on
    ready / parameters changed, :700-756). The list input is the block's own copy (a click changes it). */
export function SelectionOption_List({
  id,
  selectionOptionItemList = NO_ITEMS,
  isMultiselect = false,
  itemStyleOptions = NO_STYLE,
  lastItemStyleOptions = NO_STYLE,
  iconSizeId = UBT_IconSize.NonStandard_16,
  onOnSelectionChange,
  onNotEnabledOnClick,
}: SelectionOption_ListProps) {
  const [input, setInput] = useState(selectionOptionItemList);
  const [list, setList] = useState(selectionOptionItemList);
  if (input !== selectionOptionItemList) {
    setInput(selectionOptionItemList);
    setList(selectionOptionItemList);
  }
  const lastMerged = useMemo(
    () => merge_StyleOptions(itemStyleOptions, lastItemStyleOptions),
    [itemStyleOptions, lastItemStyleOptions],
  );

  /** SelectionOption_ItemOptionOnChange (:600-700); Current is the clicked row. */
  const onChange = (index: number) => {
    const current = list[index] ?? {};
    const clickedId = current.Id ?? '';
    if (!(current.isEnabled ?? true)) {
      onNotEnabledOnClick?.(clickedId);
      return;
    }
    const next = isMultiselect
      ? list.map((o, i) => (i === index ? { ...o, isSelected: !(o.isSelected ?? false) } : o))
      : list.map((o) => ({ ...o, isSelected: (o.Id ?? '') === clickedId }));
    setList(next);
    onOnSelectionChange?.(
      next.filter((o) => o.isSelected ?? false),
      clickedId,
    );
  };

  const optionIcon = (selected: boolean) => {
    if (isMultiselect)
      return selected ? (
        <Icon inIconId={UBT_Icons.CheckboxFill} inColorId={UBT_Color.Primary} />
      ) : (
        <Icon inIconId={UBT_Icons.CheckboxOutlineBlank} inColorId={UBT_Color.Neutral5} />
      );
    return selected ? (
      <Icon inIconId={UBT_Icons.RadioChecked} inColorId={UBT_Color.Primary} />
    ) : (
      <Icon inColorId={UBT_Color.Neutral5} inIconId={UBT_Icons.RadioUnchecked} />
    );
  };

  return (
    <OSBlock name="ConnectPatterns.SelectionOption_List" id={id}>
      <div className="list list-group ubt-options-list OSFillParent" data-list="" data-virtualization-disabled="">
        {list.map((option, i) => {
          const { DisplayText = '', IconId = '', CountryCode = '', isSelected = false } = option;
          return (
            <CustomContainer
              key={i}
              extendedClasses=""
              options={i + 1 === list.length ? lastMerged : itemStyleOptions}
              onClicked={() => {
                onChange(i);
              }}
            >
              <Columns_Two
                columnOptions={{ ColumnBehaviour: UBT_ColumnBehaviour.ReduceLast }}
                left={
                  <div className="text-align-left" data-container="" style={{ textAlign: 'left' }}>
                    {IconId !== '' || CountryCode !== '' ? (
                      <IconText text={DisplayText} spacingSize={UBT_Size.Small} textOptions={{ Color: '' }}>
                        {CountryCode === '' ? (
                          <Icon inIconId={IconId} inSizeId={iconSizeId} inColorId="" />
                        ) : (
                          <LazyImage
                            fallbackOptions={{ IconId }}
                            extendedClass="country-flag"
                            inBorderOptions={{
                              BorderRadius: UBT_Shape.Circle,
                              BorderColorId: UBT_Color.Neutral5,
                              BorderSizeId: UBT_Size.Small,
                            }}
                            inImageSize={{ Height: UBT_ImageSize.ExtraSmall_32, Width: UBT_ImageSize.Square }}
                            imageURL={getFlagURLByCountryCode(CountryCode)}
                          />
                        )}
                      </IconText>
                    ) : (
                      <CustomText inTextOptions={{ Color: '' }} inText={DisplayText} />
                    )}
                  </div>
                }
                right={
                  <div data-container="" style={{ textAlign: 'right' }}>
                    {optionIcon(isSelected)}
                  </div>
                }
              />
            </CustomContainer>
          );
        })}
      </div>
    </OSBlock>
  );
}

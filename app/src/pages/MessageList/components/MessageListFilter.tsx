import { OSBlock } from '@/components/ui/os/OSBlock';
import { CircledCheckbox } from './CircledCheckbox';
import { MessageFilterGroup } from './MessageFilterGroup';
import { MessageFilterItem } from './MessageFilterItem';
import { TwoButtonsAligned } from './TwoButtonsAligned';

export interface MessageListFilterProps {
  /** OutSystems instance id of the block (`b1-$b13`). */
  id: string;
  /** Input Filter_OrderASC. */
  filterOrderASC: boolean;
  /** Input Filter_OrderDESC. */
  filterOrderDESC: boolean;
  /** Event MessageSort(IsAscending): a sort radio was checked. */
  onMessageSort: (isAscending: boolean) => void;
  /** Event ResetFilters ("Reset"). */
  onResetFilters: () => void;
  /** Event ApplyFilters ("Apply"). */
  onApplyFilters: () => void;
}

/** OSWidgets.Checkbox with the extended property type "radio" (the Checkbox render of the OutSystems React widgets:
    a span around `<input data-checkbox class type>`, click propagation stopped; no validation message when valid). */
function SortRadio({ id, checked, onChecked }: { id: string; checked: boolean; onChecked: () => void }) {
  return (
    <span>
      <input
        checked={checked}
        className="checkbox"
        data-checkbox=""
        id={id}
        type="radio"
        onChange={onChecked}
        onClick={(e) => {
          e.stopPropagation();
        }}
      />
    </span>
  );
}

/** The sort filters: the "Sort" group with "Newest to Oldest" (NewToOld_Checkbox, Filter_OrderDESC →
    MessageSort(False)) and "Oldest to Newest" (OldToNew_Checkbox, Filter_OrderASC → MessageSort(True)), then Reset /
    Apply at the bottom.
    @origin Connect2_LegacyShared.MyNotifications.MessageList_Filter */
export function MessageListFilter({
  id,
  filterOrderASC,
  filterOrderDESC,
  onMessageSort,
  onResetFilters,
  onApplyFilters,
}: MessageListFilterProps) {
  const p = `${id.replace('$', '')}-`;
  return (
    <OSBlock name="MyNotifications.MessageList_Filter" id={id}>
      <div className="full-width full-height" data-container="">
        <MessageFilterGroup id={`${p}Sort_Group`} prefix={`${p}b1-`} title="Sort">
          <MessageFilterItem id={`${p}Sort_NewToOld`} prefix={`${p}b2-`} title="Newest to Oldest">
            <CircledCheckbox
              id={`${p}$b3`}
              prefix={`${p}b3-`}
              checkbox={
                <SortRadio
                  id={`${p}NewToOld_Checkbox`}
                  checked={filterOrderDESC}
                  onChecked={() => {
                    onMessageSort(false);
                  }}
                />
              }
            />
          </MessageFilterItem>
          <MessageFilterItem id={`${p}Sort_OldToNew`} prefix={`${p}b4-`} title="Oldest to Newest">
            <CircledCheckbox
              id={`${p}$b5`}
              prefix={`${p}b5-`}
              checkbox={
                <SortRadio
                  id={`${p}OldToNew_Checkbox`}
                  checked={filterOrderASC}
                  onChecked={() => {
                    onMessageSort(true);
                  }}
                />
              }
            />
          </MessageFilterItem>
        </MessageFilterGroup>
        <div className="stick-to-bottom " data-container="">
          <TwoButtonsAligned
            id={`${p}$b6`}
            prefix={`${p}b6-`}
            left={
              <button className="btn full-width" data-button="" type="button" onClick={onResetFilters}>
                Reset
              </button>
            }
            right={
              <button className="btn btn-primary full-width" data-button="" type="button" onClick={onApplyFilters}>
                Apply
              </button>
            }
          />
        </div>
      </div>
    </OSBlock>
  );
}

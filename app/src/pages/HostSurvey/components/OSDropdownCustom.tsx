import { useState, type KeyboardEvent, type ReactNode } from 'react';
import {
  DEFAULT_WIDGET_RECORD,
  ValidationMessage,
  withNotValidClass,
  type WidgetValidationRecord,
} from '@/components/ui/os/OSValidation';

/* Platform widget OSWidgets.Dropdown in Custom mode (dropdownMode 1), ported from the DropdownCustom module of
   migration/runtime-sources/OutSystemsReactWidgets.js (render, renderEmptyValue, renderDropdownList,
   prepareDropdownDisplayAttributes, select, hide). Markup: `div[data-dropdown].dropdown-container <style>` >
   `div.dropdown-display[ dropdown-disabled]` > `div.dropdown-display-content` > the selected row content, or
   `<span>EmptyValue</span>` when the value is not in the list; while open, `div.dropdown-list` >
   `div.scrollable-list scrollable-list-with-scroll` > the empty-value row and one `div.dropdown-popup-row` per item
   (`dropdown-popup-row-selected` on the selected one), and the full-window `div.dropdown-background-window`; then the
   validation element. Not ported: the list position computed from the viewport (updateState), the keyboard
   navigation of the open list and the scroll to the selected row. */

interface OSDropdownCustomProps<T> {
  /** Widget name (the element id). */
  id: string;
  /** Style Classes ("dropdown"). */
  style: string;
  /** Empty Value text: the first row; selecting it sets the null value. */
  emptyValue: string;
  enabled: boolean;
  /** List. */
  list: readonly T[];
  /** Values: the value of an item. */
  valueOf: (item: T) => string;
  /** The content of an item's row (the List placeholder). */
  renderItem: (item: T, index: number) => ReactNode;
  /** Variable. */
  value: string;
  /** The null value of the variable's type ("" for Text, "0" for Long Integer). */
  nullValue: string;
  /** Sets the variable, then raises OnChange (the widget's onChange runs after the variable is set). */
  onChange: (value: string) => void;
  onFocus?: () => void;
  /** The widget record (Valid, ValidationMessage); " not-valid" and the message show while not valid with a message. */
  record?: WidgetValidationRecord;
}

export function OSDropdownCustom<T>({
  id,
  style,
  emptyValue,
  enabled,
  list,
  valueOf,
  renderItem,
  value,
  nullValue,
  onChange,
  onFocus,
  record = DEFAULT_WIDGET_RECORD,
}: OSDropdownCustomProps<T>) {
  const [listVisible, setListVisible] = useState(false);
  const selectedIndex = list.findIndex((item) => valueOf(item) === value);
  const inList = selectedIndex !== -1;
  const select = (next: string) => {
    setListVisible(false);
    if (next !== value) onChange(next);
  };
  const emptyLabel = <span>{emptyValue}</span>;
  return (
    <div
      data-dropdown=""
      className={withNotValidClass(`dropdown-container ${style}`, record)}
      id={id}
      onFocus={onFocus}
      onKeyDown={(e: KeyboardEvent) => {
        if (!listVisible && (e.key === 'Enter' || e.key === ' ')) {
          e.stopPropagation();
          if (enabled) setListVisible(true);
        }
      }}
    >
      <div
        className={`dropdown-display${enabled ? '' : ' dropdown-disabled'}`}
        tabIndex={0}
        onClick={(e) => {
          e.stopPropagation();
          if (enabled) setListVisible(true);
        }}
      >
        <div className="dropdown-display-content">
          {inList ? renderItem(list[selectedIndex] as T, selectedIndex) : emptyLabel}
        </div>
      </div>
      {listVisible && (
        <div className="dropdown-list">
          <div className="scrollable-list scrollable-list-with-scroll">
            <div
              className={`dropdown-popup-row drowpdown-empty-value-row${inList ? '' : ' dropdown-popup-row-selected'}`}
              tabIndex={0}
              onClick={() => {
                select(nullValue);
              }}
            >
              {emptyLabel}
            </div>
            {list.map((item, index) => {
              const itemValue = valueOf(item);
              const selected = itemValue === value;
              return (
                <div
                  key={itemValue}
                  className={`dropdown-popup-row${selected ? ' dropdown-popup-row-selected' : ''}`}
                  tabIndex={selected ? 0 : undefined}
                  onClick={() => {
                    select(itemValue);
                  }}
                >
                  {renderItem(item, index)}
                </div>
              );
            })}
          </div>
        </div>
      )}
      {listVisible && (
        <div
          className="dropdown-background-window"
          style={{ width: '100%', height: '100%', position: 'fixed', top: '0px', left: '0px' }}
          onClick={(e) => {
            e.stopPropagation();
            setListVisible(false);
          }}
        />
      )}
      <ValidationMessage widgetId={id} record={record} />
    </div>
  );
}

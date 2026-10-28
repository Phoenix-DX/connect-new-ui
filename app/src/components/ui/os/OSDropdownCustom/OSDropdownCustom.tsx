import { useRef, useState, type CSSProperties, type KeyboardEvent, type ReactNode } from 'react';
import {
  useValidationWidget,
  validateInputWithVariable,
  ValidationMessage,
  withNotValidClass,
  type WidgetValidationRecord,
} from '@/components/ui/os/OSValidation';
import { DROPDOWN_CLASSES as C, focusClosedDropdown, navigateList } from './dropdownListDom';
import { useDropdownListEffects } from './useDropdownListEffects';

/* Platform widget OSWidgets.Dropdown in Custom mode (dropdownMode 1): the DropdownCustom module of
   migration/runtime-sources/OutSystemsReactWidgets.js (W11610-21275, `W<n>` = character offset). The position math is
   in dropdownListPosition.ts, the DOM helpers in dropdownListDom.ts, the after-render effect in
   useDropdownListEffects.ts. Not ported: setVariable (W13531), which sets the first row and raises OnChange only when
   the widget has no Empty Value (all 8 dropdowns of the app have one, F2). */

interface OSDropdownCustomProps<T> {
  /** Widget name or instance id (the element id). */
  id: string;
  /** Style Classes ("dropdown" in all 8, F2). */
  style: string;
  /** Empty Value: the prompt row, and the closed text while the value is not in the list. All 8 define one (F2). */
  emptyValue: string;
  /** Mandatory (true in all 8, F2). Read only by validate(). */
  mandatory: boolean;
  /** Enabled; default true (Dropdown_HelperRoles of AddHelper has no Enabled, F2). */
  enabled?: boolean;
  /** List. */
  list: readonly T[];
  /** Values: the value of a row, as text. Also the row key (O6). */
  getValue: (item: T) => string;
  /** The content of a row (the List placeholder). */
  renderRow: (item: T, index: number) => ReactNode;
  /** Variable. */
  value: string;
  /** JSConversions.convertTo(null, variable.type): "" for Text (default), "0" for Long Integer (Dropdown_BedsNumber). */
  nullValue?: string;
  /** The variable assignment (model.createVariable setter). */
  onValueChange: (value: string) => void;
  /** The OnChange event. The widget raises it after the variable is set (W12138, W17950-18100). */
  onChange?: () => void;
  /** The extended event onfocus on the container (OnFocus_Inputs of the HostSurvey blocks). It bubbles from the
      display and the rows. */
  onFocus?: () => void;
  /** The widget record when the block keeps it itself (F4). Without it, the record comes from the service in context.
      It wins over the context record. */
  record?: WidgetValidationRecord;
}

/** RV renderDropdownBackground (W19709): the full-window layer that closes the open list. */
const BACKGROUND_STYLE: CSSProperties = { width: '100%', height: '100%', position: 'fixed', top: '0px', left: '0px' };

/** OSWidgets.Dropdown, Custom mode (render W19996). Markup:
    `div[data-dropdown]#<id>.dropdown-container <style>[ not-valid][ dropdown-expanded dropdown-expanded-up|down]` >
    `div.dropdown-display[tabindex=0][ dropdown-disabled]` > `div.dropdown-display-content` > the selected row content,
    or `<span>emptyValue</span>`; while open, `div.dropdown-list[style]` > `div.scrollable-list
    scrollable-list-with-scroll` > the empty row and one `div.dropdown-popup-row` per item, then
    `div.dropdown-background-window`; last, the validation span. The container gets no aria-describedby (D8): only the
    Input widget adds one. The bed check of HostSurvey (F6) reads this markup.
    The widget is an InputWithVariableWidget (W21226): it registers through useValidationWidget, and its validate takes
    the value when it is in the list, else none (inputedValue / inputedValueValidity, W12739-12960). */
export function OSDropdownCustom<T>({
  id,
  style,
  emptyValue,
  mandatory,
  enabled = true,
  list,
  getValue,
  renderRow,
  value,
  nullValue = '',
  onValueChange,
  onChange,
  onFocus,
  record,
}: OSDropdownCustomProps<T>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const offsetLeft = useRef(0);
  const [listVisible, setListVisible] = useState(false);
  const { position, expanded } = useDropdownListEffects(containerRef, listVisible, offsetLeft);

  // isValueInList (W13314); the last matching row is the selected element, as renderDropdownList assigns it.
  let selectedContent: ReactNode = null;
  let inList = false;
  const rowContents: ReactNode[] = [];
  for (const [index, item] of list.entries()) {
    const content = renderRow(item, index);
    rowContents.push(content);
    if (getValue(item) === value) {
      inList = true;
      selectedContent = content;
    }
  }

  const { record: contextRecord } = useValidationWidget({
    id,
    validate: (service) =>
      validateInputWithVariable(
        {
          inputedValue: inList ? value : '',
          inputedValueValidity: { valid: inList, badInput: false },
          isMandatory: mandatory,
          // A value in the list is always acceptable to its variable: the data type does not change the result.
          dataType: 'Text',
        },
        service,
      ),
  });
  const shown = record ?? contextRecord;

  // show (W13910): records the container's left for the position while open.
  const show = () => {
    offsetLeft.current = containerRef.current?.getBoundingClientRect().left ?? 0;
    setListVisible(true);
  };
  const hide = () => {
    setListVisible(false);
  };
  // select (W12138): the same value only closes the list; another sets the variable, closes the list, then OnChange.
  const select = (next: string) => {
    if (value === next) {
      hide();
      return;
    }
    onValueChange(next);
    hide();
    onChange?.();
  };

  // prepareDropdownContainerAttributes onKeyDown (W15798).
  const onContainerKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!listVisible) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.stopPropagation();
        if (enabled) show();
      }
      return;
    }
    switch (event.key) {
      case 'Enter':
      case ' ':
        event.stopPropagation();
        // No row in the DOM (no Empty Value and an empty list): the runtime also sets its internal selectedValue to
        // the null value, which the next render resets.
        if (!containerRef.current?.querySelector(`.${C.row}`)) {
          hide();
          focusClosedDropdown(containerRef.current);
        }
        break;
      case 'ArrowDown':
        navigateList(containerRef.current, 'down');
        break;
      case 'ArrowUp':
        navigateList(containerRef.current, 'up');
        break;
      default:
        hide();
        focusClosedDropdown(containerRef.current);
    }
  };

  // renderEmptyValue (W17646): the prompt row and the closed text, only with an Empty Value.
  const hasEmptyValue = emptyValue.length > 0;
  const emptyContent = hasEmptyValue ? <span>{emptyValue}</span> : null;
  const emptyRow = hasEmptyValue && (
    <div
      className={inList ? `${C.row} ${C.emptyRow}` : `${C.row} ${C.emptyRow} ${C.rowSelected}`}
      tabIndex={0}
      onClick={() => {
        // D6: the null value and OnChange on every click, with no equality check (W17950-18100).
        onValueChange(nullValue);
        onChange?.();
        hide();
      }}
      onKeyDown={(event) => {
        if (event.key !== 'Enter' && event.key !== ' ') return;
        // D5: the keyboard path sets the null value without OnChange (W18133).
        event.stopPropagation();
        onValueChange(nullValue);
        hide();
      }}
    >
      {emptyContent}
    </div>
  );

  // renderDropdownList (W18464): one row per item; the selected one gets the class and tabindex 0.
  const rows = list.map((item, index) => {
    const itemValue = getValue(item);
    const isSelected = itemValue === value;
    return (
      <div
        key={itemValue}
        className={isSelected ? `${C.row} ${C.rowSelected}` : C.row}
        tabIndex={isSelected ? 0 : undefined}
        onClick={() => {
          select(itemValue);
        }}
        onKeyDown={(event) => {
          if (event.key !== 'Enter' && event.key !== ' ') return;
          event.stopPropagation();
          select(itemValue);
          focusClosedDropdown(containerRef.current);
        }}
      >
        {rowContents[index]}
      </div>
    );
  });

  const expandedClass = expanded === null ? '' : ` ${C.expanded} ${expanded === 'up' ? C.expandedUp : C.expandedDown}`;

  return (
    <div
      ref={containerRef}
      data-dropdown=""
      className={`${withNotValidClass(`${C.container} ${style}`, shown) ?? ''}${expandedClass}`}
      id={id}
      onFocus={onFocus}
      onKeyDown={onContainerKeyDown}
    >
      <div
        className={enabled ? C.display : `${C.display} ${C.disabled}`}
        tabIndex={0}
        onClick={(event) => {
          event.stopPropagation();
          if (enabled) show();
        }}
      >
        <div className={C.displayContent}>{inList ? selectedContent : emptyContent}</div>
      </div>
      {listVisible && (
        <div className={C.list} style={position}>
          <div className={C.scrollable}>
            {emptyRow}
            {rows}
          </div>
        </div>
      )}
      {listVisible && (
        <div
          className={C.background}
          style={BACKGROUND_STYLE}
          onClick={(event) => {
            event.stopPropagation();
            hide();
          }}
        />
      )}
      <ValidationMessage widgetId={id} record={shown} />
    </div>
  );
}

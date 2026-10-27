import { useLayoutEffect, useRef, useState, type CSSProperties, type KeyboardEvent, type ReactNode } from 'react';
import type { CountryName } from '@/api/message';
import {
  UnbuiltValidationWidget,
  useWidgetValidationRecord,
  ValidationMessage,
  withNotValidClass,
} from '@/components/ui/os/OSValidation';

interface CountryDropdownProps {
  /** The widget name: Dropdown_Country. */
  id: string;
  /** Enabled = not isSubmiting. */
  enabled: boolean;
  /** Empty Value (the prompt row). */
  emptyValue: string;
  /** List = DataAction_GetCountriesNames.Countries. */
  list: CountryName[];
  /** Variable = ContactUsForm.Country; Values = Code. */
  value: string;
  /** The variable setter (model.createVariable): the selected Code, "" for the empty row. */
  onVariableChange: (value: string) => void;
  /** The OnChange event of the widget. */
  onChange: () => void;
}

/* OutSystems/ReactWidgets/DropdownCustom (migration/runtime-sources/OutSystemsReactWidgets.js ≈11641-21300), the
   Dropdown widget in Custom mode (dropdownMode 1). Class names as the runtime declares them, including its spelling
   "drowpdown-empty-value-row". */
const C = {
  container: 'dropdown-container',
  display: 'dropdown-display',
  displayContent: 'dropdown-display-content',
  disabled: 'dropdown-disabled',
  list: 'dropdown-list',
  row: 'dropdown-popup-row',
  rowSelected: 'dropdown-popup-row-selected',
  emptyRow: 'drowpdown-empty-value-row',
  background: 'dropdown-background-window',
  scrollable: 'scrollable-list scrollable-list-with-scroll',
  expanded: 'dropdown-expanded',
  expandedUp: 'dropdown-expanded-up',
  expandedDown: 'dropdown-expanded-down',
} as const;
const SMARTPHONE_PORTRAIT_WIDTH = 420;
const POPUP_BOX_MARGIN = 10;
const BACKGROUND_STYLE: CSSProperties = { width: '100%', height: '100%', position: 'fixed', top: '0px', left: '0px' };

interface ListPosition {
  left: string;
  top: string;
  width: string;
  height: string;
}

/** The OSWidgets.Dropdown Dropdown_Country of the screen (TST `ContactUsDetails.mvc.js:897-969`): Custom mode, Empty
    Value "Select Your Country", Mandatory, Values = Code, each row a Container with the country Name. Markup:
    `div.dropdown-container.dropdown[data-dropdown]#Dropdown_Country` > `div.dropdown-display[tabindex=0]` >
    `div.dropdown-display-content` > the selected row content (or `<span>` with the Empty Value); while open, the list
    `div.dropdown-list` (position computed as the runtime's updateState) > `div.scrollable-list` > the empty row and
    the rows, then the full-screen `div.dropdown-background-window`. The widget registers in Form_ContactUs. No
    validation runs on this screen (no validateWidget call), so its own validate is not ported.
    @origin UBTConnect.App_Menu_ContactUs.ContactUsDetails */
export function CountryDropdown({
  id,
  enabled,
  emptyValue,
  list,
  value,
  onVariableChange,
  onChange,
}: CountryDropdownProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const offsetLeft = useRef(0);
  const [listVisible, setListVisible] = useState(false);
  const [position, setPosition] = useState<ListPosition>({ left: '0px', top: '0px', width: '0px', height: '0px' });
  const [expanded, setExpanded] = useState<'' | 'up' | 'down'>('');
  const record = useWidgetValidationRecord(id);

  const isValueInList = list.some((country) => country.code === value);

  const show = () => {
    offsetLeft.current = containerRef.current?.getBoundingClientRect().left ?? 0;
    setListVisible(true);
  };
  const hide = () => {
    setListVisible(false);
  };
  const focusClosedDropdown = () => {
    containerRef.current?.querySelector<HTMLElement>(`.${C.display}`)?.focus();
  };
  // select: the same value only closes the list; another sets the variable, closes the list, then raises OnChange.
  const select = (code: string) => {
    if (value === code) {
      hide();
      return;
    }
    onVariableChange(code);
    hide();
    onChange();
  };

  // navigateList: moves the selected class and the focus between the rows (the runtime changes the DOM directly).
  const navigateList = (direction: 'down' | 'up') => {
    const listElement = containerRef.current?.childNodes[1] as HTMLElement | undefined;
    if (!listElement) return;
    const selected = listElement.getElementsByClassName(C.rowSelected)[0] as HTMLElement | undefined;
    let next: Element | null;
    if (selected) {
      selected.focus();
      next = direction === 'down' ? selected.nextElementSibling : selected.previousElementSibling;
    } else {
      next = listElement.getElementsByClassName(C.row)[0] ?? null;
    }
    if (next instanceof HTMLElement) {
      selected?.classList.remove(C.rowSelected);
      next.classList.add(C.rowSelected);
      next.tabIndex = 0;
      next.focus();
    }
  };

  const onContainerKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (listVisible) {
      switch (event.key) {
        case 'Enter':
        case ' ':
          event.stopPropagation();
          if (!containerRef.current?.querySelector(`.${C.row}`)) {
            hide();
            focusClosedDropdown();
          }
          break;
        case 'ArrowDown':
          navigateList('down');
          break;
        case 'ArrowUp':
          navigateList('up');
          break;
        default:
          hide();
          focusClosedDropdown();
      }
    } else if (event.key === 'Enter' || event.key === ' ') {
      event.stopPropagation();
      if (enabled) show();
    }
  };

  // componentDidMount / componentDidUpdate: updateState (list position and expanded classes), the scroll to the
  // selected row, and the focus of the selected (or first) row while the list is open.
  useLayoutEffect(() => {
    const container = containerRef.current;
    const display = container?.childNodes[0] as HTMLElement | undefined;
    const displayContent = display?.childNodes[0] as HTMLElement | undefined;
    const listElement = container?.childNodes[1] as HTMLElement | undefined;
    if (!listElement) {
      setExpanded('');
      return;
    }
    if (container && display && displayContent) {
      const next: ListPosition = { left: '', top: '', width: '', height: '' };
      const contentRect = displayContent.getBoundingClientRect();
      const displayRect = display.getBoundingClientRect();
      const pageY = window.pageYOffset;
      const pageX = window.pageXOffset;
      const left = Math.round(contentRect.left + pageX);
      const right = Math.round(contentRect.right + pageX);
      const top = Math.round(displayRect.top + pageY);
      const bottom = Math.round(displayRect.bottom + pageY);
      const listRect = listElement.getBoundingClientRect();
      const listHeight = Math.round(listRect.height);
      const listWidth = Math.round(listRect.width);
      const viewBottom = pageY + window.innerHeight;
      const middle = (left + right) / 2;
      let x: number;
      if (window.innerWidth <= SMARTPHONE_PORTRAIT_WIDTH) {
        const width = window.innerWidth - 2 * POPUP_BOX_MARGIN;
        next.width = `${String(Math.round(width))}px`;
        x = pageX + POPUP_BOX_MARGIN;
      } else {
        x = listVisible ? offsetLeft.current : Math.max(pageX, middle - listWidth / 2);
      }
      const popup = document.querySelector('[data-popup]');
      const popupTop = popup ? popup.getBoundingClientRect().top : pageY;
      let y: number;
      if (top - popupTop > viewBottom - bottom) {
        setExpanded('up');
        y = top - listHeight;
        if (y < popupTop - POPUP_BOX_MARGIN) {
          y = popupTop + POPUP_BOX_MARGIN;
          next.height = `${String(Math.round(top - popupTop - POPUP_BOX_MARGIN))}px`;
        }
      } else {
        setExpanded('down');
        y = bottom;
        if (y + listHeight > viewBottom - POPUP_BOX_MARGIN) {
          next.height = `${String(Math.round(viewBottom - bottom - POPUP_BOX_MARGIN))}px`;
        }
      }
      next.left = `${String(Math.round(x))}px`;
      next.top = `${String(Math.round(y))}px`;
      setPosition((current) =>
        current.left !== next.left ||
        current.top !== next.top ||
        current.width !== next.width ||
        (current.height !== next.height && next.height !== '')
          ? next
          : current,
      );
    }
    const selected = listElement.getElementsByClassName(C.rowSelected)[0] as HTMLElement | undefined;
    if (selected) {
      let scrollParent: HTMLElement | null = selected;
      while (scrollParent && scrollParent.scrollHeight <= scrollParent.clientHeight && scrollParent !== listElement)
        scrollParent = scrollParent.parentElement;
      if (scrollParent && scrollParent.scrollHeight > scrollParent.clientHeight)
        scrollParent.scrollTop = selected.offsetTop - scrollParent.offsetTop;
    }
    if (listVisible) {
      const first = listElement.getElementsByClassName(C.row)[0] as HTMLElement | undefined;
      (selected ?? first)?.focus();
    }
    // The runtime runs this on every update; these are the values that change the list or its place.
  }, [listVisible, list, value, enabled, position, expanded]);

  // renderEmptyValue: the prompt row (selected while the value is not in the list) and the displayed prompt.
  const emptyContent = <span>{emptyValue}</span>;
  const rowContent = (country: CountryName) => (
    <div data-container="">
      <span data-expression="">{country.name}</span>
    </div>
  );
  const selectedCountry = list.find((country) => country.code === value);
  const selectedElement: ReactNode = selectedCountry ? rowContent(selectedCountry) : emptyContent;
  const rows = list.map((country) => {
    const isSelected = country.code === value;
    return (
      <div
        key={country.code}
        className={isSelected ? `${C.row} ${C.rowSelected}` : C.row}
        tabIndex={isSelected ? 0 : undefined}
        onClick={() => {
          select(country.code);
        }}
        onKeyDown={(event) => {
          if (event.key !== 'Enter' && event.key !== ' ') return;
          event.stopPropagation();
          select(country.code);
          focusClosedDropdown();
        }}
      >
        {rowContent(country)}
      </div>
    );
  });

  const expandedClass = expanded === '' ? '' : ` ${C.expanded} ${expanded === 'up' ? C.expandedUp : C.expandedDown}`;

  return (
    <div
      ref={containerRef}
      className={withNotValidClass(`${C.container} dropdown${expandedClass}`, record)}
      data-dropdown=""
      id={id}
      onKeyDown={onContainerKeyDown}
    >
      <UnbuiltValidationWidget id={id} />
      <div
        className={enabled ? C.display : `${C.display} ${C.disabled}`}
        tabIndex={0}
        onClick={(event) => {
          event.stopPropagation();
          if (enabled) show();
        }}
      >
        <div className={C.displayContent}>{selectedElement}</div>
      </div>
      {listVisible && (
        <div className={C.list} style={position}>
          <div className={C.scrollable}>
            <div
              className={isValueInList ? `${C.row} ${C.emptyRow}` : `${C.row} ${C.emptyRow} ${C.rowSelected}`}
              tabIndex={0}
              onClick={() => {
                onVariableChange('');
                onChange();
                hide();
              }}
              onKeyDown={(event) => {
                // The runtime sets the variable without OnChange on the keyboard path.
                if (event.key !== 'Enter' && event.key !== ' ') return;
                event.stopPropagation();
                onVariableChange('');
                hide();
              }}
            >
              {emptyContent}
            </div>
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
      <ValidationMessage widgetId={id} record={record} />
    </div>
  );
}

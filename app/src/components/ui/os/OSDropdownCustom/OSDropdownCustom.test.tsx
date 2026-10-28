import { act, fireEvent, render } from '@testing-library/react';
import { useState, type ComponentProps } from 'react';
import { describe, expect, it, vi } from 'vitest';
import {
  OSForm,
  useScreenValidationService,
  ValidationServiceProvider,
  type ValidationService,
  type WidgetValidationRecord,
} from '@/components/ui/os/OSValidation';
import { OSDropdownCustom } from './OSDropdownCustom';

/* OSWidgets.Dropdown in Custom mode (DropdownCustom, W11610-21275). jsdom has no layout: every rect is 0, so an open
   list goes down at left 0px, top 0px (computeListPosition is tested with numbers in dropdownListPosition.test.ts). */

interface Role {
  JSON_Name: string;
  Label: string;
}
const ROLES: readonly Role[] = [
  { JSON_Name: 'Cook', Label: 'Cook' },
  { JSON_Name: 'Driver', Label: 'Driver' },
  { JSON_Name: 'Interpreter', Label: 'Interpreter' },
];
const ID = 'b3-Dropdown_HelperRoles';

type Props = ComponentProps<typeof OSDropdownCustom<Role>>;

/** The widget with its variable in state, as a block keeps it. */
function Harness({ initial = '', ...props }: Partial<Props> & { initial?: string }) {
  const [value, setValue] = useState(initial);
  return (
    <OSDropdownCustom<Role>
      id={ID}
      style="dropdown"
      emptyValue="Select role"
      mandatory
      list={ROLES}
      getValue={(role) => role.JSON_Name}
      renderRow={(role) => <span data-expression="">{role.Label}</span>}
      value={value}
      {...props}
      onValueChange={(next) => {
        props.onValueChange?.(next);
        setValue(next);
      }}
    />
  );
}

const container = () => document.getElementById(ID) as HTMLElement;
const display = () => container().querySelector('.dropdown-display') as HTMLElement;
const rows = () => [...container().querySelectorAll<HTMLElement>('.dropdown-popup-row')];
const row = (text: string) => rows().find((r) => r.textContent === text) as HTMLElement;
const open = () => {
  fireEvent.click(display());
};

describe('OSDropdownCustom markup (render W19998-20470)', () => {
  it('closed: the container, the display and the Empty Value in a span; no list', () => {
    render(<Harness />);
    const c = container();
    expect(c.className).toBe('dropdown-container dropdown');
    expect(c).toHaveAttribute('data-dropdown', '');
    expect(c).not.toHaveAttribute('aria-describedby');
    expect(c.children).toHaveLength(1);
    expect(display().className).toBe('dropdown-display');
    expect(display()).toHaveAttribute('tabindex', '0');
    expect(display().innerHTML).toBe('<div class="dropdown-display-content"><span>Select role</span></div>');
    expect(c.querySelector('.dropdown-list')).toBeNull();
  });

  it('closed with a value in the list: the row content shows', () => {
    render(<Harness initial="Driver" />);
    expect(display().innerHTML).toBe(
      '<div class="dropdown-display-content"><span data-expression="">Driver</span></div>',
    );
  });

  it('disabled: dropdown-disabled on the display, and a click does not open the list', () => {
    render(<Harness enabled={false} />);
    expect(display().className).toBe('dropdown-display dropdown-disabled');
    open();
    expect(container().querySelector('.dropdown-list')).toBeNull();
  });

  it('open: the empty row first, one row per item, the background window, the list position and expanded classes', () => {
    render(<Harness initial="Driver" />);
    open();
    const c = container();
    expect(c.className).toBe('dropdown-container dropdown dropdown-expanded dropdown-expanded-down');
    const [, list, background] = [...c.children] as HTMLElement[];
    expect(list?.className).toBe('dropdown-list');
    expect(list?.getAttribute('style')).toBe('left: 0px; top: 0px;');
    expect(list?.firstElementChild?.className).toBe('scrollable-list scrollable-list-with-scroll');
    expect(rows().map((r) => [r.className, r.getAttribute('tabindex'), r.innerHTML])).toEqual([
      ['dropdown-popup-row drowpdown-empty-value-row', '0', '<span>Select role</span>'],
      ['dropdown-popup-row', null, '<span data-expression="">Cook</span>'],
      ['dropdown-popup-row dropdown-popup-row-selected', '0', '<span data-expression="">Driver</span>'],
      ['dropdown-popup-row', null, '<span data-expression="">Interpreter</span>'],
    ]);
    expect(background?.className).toBe('dropdown-background-window');
    expect(background?.getAttribute('style')).toBe('width: 100%; height: 100%; position: fixed; top: 0px; left: 0px;');
  });

  it('open with the value not in the list: the empty row is the selected one', () => {
    render(<Harness />);
    open();
    expect(rows()[0]?.className).toBe('dropdown-popup-row drowpdown-empty-value-row dropdown-popup-row-selected');
  });

  it('the background window closes the list; the expanded classes go with it', () => {
    render(<Harness />);
    open();
    fireEvent.click(container().querySelector('.dropdown-background-window') as Element);
    expect(container().querySelector('.dropdown-list')).toBeNull();
    expect(container().className).toBe('dropdown-container dropdown');
  });
});

describe('OSDropdownCustom select (W12140-12300, W17950-18300)', () => {
  it('a row click sets the variable, closes the list, then raises OnChange', () => {
    const onValueChange = vi.fn();
    const onChange = vi.fn();
    render(<Harness onValueChange={onValueChange} onChange={onChange} />);
    open();
    fireEvent.click(row('Interpreter'));
    expect(onValueChange).toHaveBeenCalledWith('Interpreter');
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onValueChange.mock.invocationCallOrder[0]).toBeLessThan(onChange.mock.invocationCallOrder[0] as number);
    expect(container().querySelector('.dropdown-list')).toBeNull();
    expect(display().textContent).toBe('Interpreter');
  });

  it('D7: the selected row again only closes the list (no variable write, no OnChange)', () => {
    const onValueChange = vi.fn();
    const onChange = vi.fn();
    render(<Harness initial="Cook" onValueChange={onValueChange} onChange={onChange} />);
    open();
    fireEvent.click(row('Cook'));
    expect(onValueChange).not.toHaveBeenCalled();
    expect(onChange).not.toHaveBeenCalled();
    expect(container().querySelector('.dropdown-list')).toBeNull();
  });

  it('D6: the empty row click sets the null value and raises OnChange, also when the value is already empty', () => {
    const onValueChange = vi.fn();
    const onChange = vi.fn();
    render(<Harness onValueChange={onValueChange} onChange={onChange} />);
    open();
    fireEvent.click(rows()[0] as Element);
    expect(onValueChange).toHaveBeenCalledWith('');
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(container().querySelector('.dropdown-list')).toBeNull();
  });

  it('the null value of the variable type: "0" for a Long Integer variable', () => {
    const onValueChange = vi.fn();
    render(<Harness initial="Driver" nullValue="0" onValueChange={onValueChange} />);
    open();
    fireEvent.click(rows()[0] as Element);
    expect(onValueChange).toHaveBeenCalledWith('0');
    expect(display().textContent).toBe('Select role');
  });

  it('D5: Enter or Space on the empty row sets the null value without OnChange', () => {
    const onValueChange = vi.fn();
    const onChange = vi.fn();
    render(<Harness initial="Driver" onValueChange={onValueChange} onChange={onChange} />);
    open();
    fireEvent.keyDown(rows()[0] as Element, { key: 'Enter' });
    expect(onValueChange).toHaveBeenCalledWith('');
    expect(onChange).not.toHaveBeenCalled();
    expect(container().querySelector('.dropdown-list')).toBeNull();
    open();
    fireEvent.keyDown(rows()[0] as Element, { key: ' ' });
    expect(onValueChange).toHaveBeenCalledTimes(2);
    expect(onChange).not.toHaveBeenCalled();
  });
});

describe('OSDropdownCustom keyboard and focus (D3, D4: W15900-16900, W17012-17390, W18810-19000, W19230-19600)', () => {
  it('Enter or Space on the closed dropdown opens it when enabled, not when disabled', () => {
    const { rerender } = render(<Harness />);
    fireEvent.keyDown(display(), { key: 'Enter' });
    expect(container().querySelector('.dropdown-list')).not.toBeNull();
    fireEvent.click(container().querySelector('.dropdown-background-window') as Element);
    fireEvent.keyDown(display(), { key: ' ' });
    expect(container().querySelector('.dropdown-list')).not.toBeNull();
    fireEvent.click(container().querySelector('.dropdown-background-window') as Element);
    rerender(<Harness enabled={false} />);
    fireEvent.keyDown(display(), { key: 'Enter' });
    expect(container().querySelector('.dropdown-list')).toBeNull();
  });

  it('on open the selected row (else the first row) has the focus', () => {
    const { unmount } = render(<Harness initial="Driver" />);
    open();
    expect(document.activeElement).toBe(row('Driver'));
    unmount();
    render(<Harness />);
    open();
    expect(document.activeElement).toBe(rows()[0]);
  });

  it('ArrowDown and ArrowUp move the selected class, tabindex and focus; a re-render keeps them', () => {
    const { rerender } = render(<Harness />);
    open();
    fireEvent.keyDown(document.activeElement as Element, { key: 'ArrowDown' });
    expect(row('Cook').className).toBe('dropdown-popup-row dropdown-popup-row-selected');
    expect(row('Cook')).toHaveAttribute('tabindex', '0');
    expect(rows()[0]?.className).toBe('dropdown-popup-row drowpdown-empty-value-row');
    expect(document.activeElement).toBe(row('Cook'));
    fireEvent.keyDown(document.activeElement as Element, { key: 'ArrowDown' });
    expect(document.activeElement).toBe(row('Driver'));
    fireEvent.keyDown(document.activeElement as Element, { key: 'ArrowUp' });
    expect(document.activeElement).toBe(row('Cook'));
    // The runtime edits the DOM directly; a re-render with the same props does not reset it.
    rerender(<Harness />);
    expect(row('Cook').className).toBe('dropdown-popup-row dropdown-popup-row-selected');
    expect(document.activeElement).toBe(row('Cook'));
  });

  it('any other key closes the list and focuses the display', () => {
    render(<Harness />);
    open();
    fireEvent.keyDown(document.activeElement as Element, { key: 'Escape' });
    expect(container().querySelector('.dropdown-list')).toBeNull();
    expect(document.activeElement).toBe(display());
  });

  it('Enter on a row selects it, raises OnChange and focuses the display', () => {
    const onValueChange = vi.fn();
    const onChange = vi.fn();
    render(<Harness onValueChange={onValueChange} onChange={onChange} />);
    open();
    fireEvent.keyDown(row('Driver'), { key: 'Enter' });
    expect(onValueChange).toHaveBeenCalledWith('Driver');
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(container().querySelector('.dropdown-list')).toBeNull();
    expect(document.activeElement).toBe(display());
  });

  it('D4: the scroll parent scrolls to the selected row (scrollTop = the offsetTop difference)', () => {
    const isScrollable = (element: Element) => element.classList.contains('scrollable-list');
    vi.spyOn(Element.prototype, 'scrollHeight', 'get').mockImplementation(function (this: Element) {
      return isScrollable(this) ? 600 : 0;
    });
    vi.spyOn(Element.prototype, 'clientHeight', 'get').mockImplementation(function (this: Element) {
      return isScrollable(this) ? 200 : 0;
    });
    vi.spyOn(HTMLElement.prototype, 'offsetTop', 'get').mockImplementation(function (this: HTMLElement) {
      if (isScrollable(this)) return 20;
      return this.textContent === 'Interpreter' ? 140 : 0;
    });
    render(<Harness initial="Interpreter" />);
    open();
    expect((container().querySelector('.scrollable-list') as HTMLElement).scrollTop).toBe(120);
  });

  it('onFocus (extended event) fires on the container when a row gets the focus', () => {
    const onFocus = vi.fn();
    render(<Harness onFocus={onFocus} />);
    open();
    expect(onFocus).toHaveBeenCalled();
  });
});

describe('OSDropdownCustom validation', () => {
  const invalid: WidgetValidationRecord = { validAttr: false, validationMessageAttr: 'Helper role is required.' };

  it('record prop: not-valid, the message span last, no aria-describedby (D8)', () => {
    render(<Harness record={invalid} />);
    const c = container();
    expect(c).toHaveClass('not-valid');
    expect(c).not.toHaveAttribute('aria-describedby');
    expect(c.lastElementChild?.outerHTML).toBe(
      `<span id="${ID}_DescribedBy" class="validation-message">Helper role is required.</span>`,
    );
  });

  it('D2 (O2, not checked on TST): a closed dropdown that shows its message gets the expanded classes', () => {
    const { rerender } = render(<Harness record={invalid} />);
    expect(container().className).toBe(
      'dropdown-container dropdown not-valid dropdown-expanded dropdown-expanded-down',
    );
    expect(container().querySelector('.dropdown-list')).toBeNull();
    rerender(<Harness record={{ validAttr: true, validationMessageAttr: '' }} />);
    expect(container().className).toBe('dropdown-container dropdown');
  });

  function ContactForm({
    onService,
    mandatory = true,
  }: {
    onService: (s: ValidationService) => void;
    mandatory?: boolean;
  }) {
    const service = useScreenValidationService();
    onService(service);
    return (
      <ValidationServiceProvider service={service}>
        <OSForm id="Form_ContactUs" style="form OSFillParent">
          <Harness id="Dropdown_Country" mandatory={mandatory} />
        </OSForm>
      </ValidationServiceProvider>
    );
  }
  const country = () => document.getElementById('Dropdown_Country') as HTMLElement;

  it('in a Form: validate() fails a mandatory empty dropdown, Form.Valid follows; a value in the list passes', () => {
    let service!: ValidationService;
    render(<ContactForm onService={(s) => (service = s)} />);
    expect(service.isRegistered('Dropdown_Country')).toBe(true);
    let valid = true;
    act(() => {
      valid = service.validate();
    });
    expect(valid).toBe(false);
    expect(service.isValid('Form_ContactUs')).toBe(false);
    expect(service.getWidgetRecord('Dropdown_Country')).toEqual({
      validAttr: false,
      validationMessageAttr: 'This field is required.',
    });
    expect(country()).toHaveClass('not-valid');
    expect(country().lastElementChild?.textContent).toBe('This field is required.');
    fireEvent.click(country().querySelector('.dropdown-display') as Element);
    fireEvent.click(
      [...country().querySelectorAll('.dropdown-popup-row')].find((r) => r.textContent === 'Cook') as Element,
    );
    act(() => {
      valid = service.validate();
    });
    expect(valid).toBe(true);
    expect(service.isValid('Form_ContactUs')).toBe(true);
    expect(country()).not.toHaveClass('not-valid');
  });

  it('in a Form: not mandatory, the empty value passes; setWidgetValidity re-renders the message', () => {
    let service!: ValidationService;
    render(<ContactForm onService={(s) => (service = s)} mandatory={false} />);
    act(() => {
      service.validate();
    });
    expect(service.isValid('Dropdown_Country')).toBe(true);
    act(() => {
      service.setWidgetValidity('Dropdown_Country', false, 'Select your country.');
    });
    expect(country()).toHaveClass('not-valid');
    expect(country().lastElementChild?.textContent).toBe('Select your country.');
    expect(service.isValid('Form_ContactUs')).toBe(false);
  });
});

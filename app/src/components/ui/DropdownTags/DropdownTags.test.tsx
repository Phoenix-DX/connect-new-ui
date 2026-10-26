import { act, render } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { dropdownTags_CloseOtherOnClick } from '@/lib/ubtConnectUtils/actions';
import { dropdownClear, dropdownClearValidation, dropdownTogglePopup } from '@/components/ui/lib/actions';
import { DropdownTags } from './DropdownTags';

const fake = vi.hoisted(() => ({
  instances: [] as { ele: HTMLElement; options: Record<string, unknown>; selected: unknown; opened: boolean }[],
}));

vi.mock('@/components/ui/DropdownSearch/vendor', () => ({
  virtualSelect: () => ({
    init: (options: Record<string, unknown>) => {
      const ele = options.ele as HTMLElement;
      const inst = { ele, options, selected: undefined as unknown, opened: false };
      Object.assign(ele, { disable: vi.fn(), enable: vi.fn(), close: vi.fn(), setValue: vi.fn(), reset: vi.fn() });
      Object.assign(ele, { getSelectedOptions: () => inst.selected });
      fake.instances.push(inst);
      return {
        $ele: ele,
        $dropboxContainer: document.createElement('div'),
        isOpened: () => inst.opened,
        getSelectedOptions: () => inst.selected,
        destroy: vi.fn(),
      };
    },
  }),
}));

beforeEach(() => {
  vi.useFakeTimers();
  fake.instances.length = 0;
});
afterEach(() => {
  vi.useRealTimers();
});

const options = [
  { Value: 'schedule', Label: 'Schedule' },
  { Value: 'speakers', Label: 'Speakers' },
  { Value: 'venues', Label: 'Venues' },
];

/* Never captured: provider configuration of the Tags mode (OutSystemsUI.js VirtualSelectTagsConfig U:20611-20633). */
describe('DropdownTags', () => {
  it('Virtual Select in Tags mode: multiple, values as tags, every starting value selected', () => {
    const onInitialized = vi.fn();
    const { container } = render(
      <DropdownTags
        id="b3-$b7"
        optionsList={options}
        startingSelection={[options[0] ?? {}, options[2] ?? {}]}
        onInitialized={onInitialized}
      />,
    );
    expect(container.querySelector('.osui-dropdown-tags')).not.toBeNull();
    const config = fake.instances[0]?.options;
    expect(config).toMatchObject({
      multiple: true,
      showValueAsTags: true,
      ariaLabelText: 'Select one or more options',
      placeholder: 'Select...',
      selectedValue: ['schedule', 'venues'],
    });
    act(() => {
      vi.runOnlyPendingTimers();
    });
    expect(onInitialized).toHaveBeenCalledWith('b3-$b7');
  });

  it('a change raises OnChanged with the selected options', () => {
    const onChanged = vi.fn();
    render(<DropdownTags id="b3-$b7" optionsList={options} onOnChanged={onChanged} />);
    const inst = fake.instances[0];
    if (!inst) throw new Error('provider not created');
    inst.selected = [{ value: 'speakers', label: 'Speakers' }];
    inst.ele.dispatchEvent(new Event('change'));
    act(() => {
      vi.runOnlyPendingTimers();
    });
    expect(onChanged).toHaveBeenCalledWith('b3-$b7', [
      { Value: 'speakers', Label: 'Speakers', ImageUrlOrIconClass: '', GroupName: '', Description: '' },
    ]);
  });

  /* CR-EventBooklet-2: the Dropdown client actions on the Virtual Select provider (OutSystemsUI.js AbstractVirtualSelect
     clear / togglePopup / validation / close, U:20075-20178). */
  it('DropdownClear(WidgetId, True): Virtual Select reset(false, true), no OnChanged', () => {
    const onChanged = vi.fn();
    render(
      <DropdownTags id="b3-$b7" optionsList={options} startingSelection={[options[1] ?? {}]} onOnChanged={onChanged} />,
    );
    const ele = fake.instances[0]?.ele as HTMLElement & { reset: ReturnType<typeof vi.fn> };
    expect(dropdownClear('b3-$b7', true)).toBe(true);
    expect(ele.reset).toHaveBeenCalledWith(false, true);
    act(() => {
      vi.runOnlyPendingTimers();
    });
    expect(onChanged).not.toHaveBeenCalled();
  });

  it('DropdownTogglePopup(WidgetId, False) from Initialized: redrawn once with the dropbox below the field', () => {
    const onInitialized = vi.fn((id: string) => {
      dropdownTogglePopup(id, false);
    });
    render(<DropdownTags id="b3-$b7" optionsList={options} onInitialized={onInitialized} />);
    expect(fake.instances[0]?.options.showDropboxAsPopup).toBe(true);
    act(() => {
      vi.runAllTimers();
    });
    expect(onInitialized).toHaveBeenCalledTimes(1);
    expect(fake.instances).toHaveLength(2);
    expect(fake.instances[1]?.options.showDropboxAsPopup).toBe(false);
    // Same value again: no redraw.
    expect(dropdownTogglePopup('b3-$b7', false)).toBe(true);
    act(() => {
      vi.runAllTimers();
    });
    expect(fake.instances).toHaveLength(2);
  });

  it('DropdownClearValidation: removes the not-valid class and the error message', () => {
    const { container } = render(<DropdownTags id="b3-$b7" optionsList={options} />);
    const ele = container.querySelector('.osui-dropdown-tags') as HTMLElement;
    ele.classList.add('osui-dropdown--not-valid');
    const message = document.createElement('div');
    message.className = 'osui-dropdown-error-message';
    ele.parentElement?.appendChild(message);
    expect(dropdownClearValidation('b3-$b7')).toBe(true);
    expect(ele.classList.contains('osui-dropdown--not-valid')).toBe(false);
    expect(container.querySelector('.osui-dropdown-error-message')).toBeNull();
  });

  it('DropdownTags_CloseOtherOnClick: a click on one dropdown closes the other open ones', () => {
    const { container } = render(
      <>
        <DropdownTags id="b3-DropdownTags_Roles" optionsList={options} />
        <DropdownTags id="b3-DropdownTags_Countries" optionsList={options} />
      </>,
    );
    dropdownTags_CloseOtherOnClick();
    const [roles, countries] = fake.instances;
    if (!roles || !countries) throw new Error('providers not created');
    roles.opened = true;
    const elements = container.querySelectorAll<HTMLElement>('.osui-dropdown-tags');
    elements[1]?.click();
    act(() => {
      vi.runOnlyPendingTimers();
    });
    expect((roles.ele as HTMLElement & { close: ReturnType<typeof vi.fn> }).close).toHaveBeenCalledTimes(1);
    expect((countries.ele as HTMLElement & { close: ReturnType<typeof vi.fn> }).close).not.toHaveBeenCalled();
  });
});

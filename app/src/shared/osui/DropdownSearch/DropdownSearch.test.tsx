import { act, render } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { DropdownSearch, fromJson, internalConfigs } from './DropdownSearch';
import { isImage, providerConfig, sanitize, startingValues } from './provider';

const fake = vi.hoisted(() => ({
  init: vi.fn(),
  instances: [] as { ele: HTMLElement; options: Record<string, unknown>; destroy: () => void; selected: unknown }[],
}));

vi.mock('./vendor', () => ({
  virtualSelect: () => ({
    init: (options: Record<string, unknown>) => {
      fake.init(options);
      const ele = options.ele as HTMLElement;
      const inst = { ele, options, destroy: vi.fn(), selected: undefined as unknown };
      Object.assign(ele, {
        disable: vi.fn(),
        enable: vi.fn(),
        close: vi.fn(),
        setValue: vi.fn(),
        getSelectedOptions: () => inst.selected,
      });
      fake.instances.push(inst);
      return {
        $ele: ele,
        $dropboxContainer: document.createElement('div'),
        isOpened: () => false,
        getSelectedOptions: () => inst.selected,
        destroy: inst.destroy,
      };
    },
  }),
}));

beforeEach(() => {
  vi.useFakeTimers();
  fake.init.mockClear();
  fake.instances.length = 0;
});
afterEach(() => {
  vi.useRealTimers();
});

const options = [
  { Value: '1', Label: 'A <b>', GroupName: 'G1' },
  { Value: '2', Label: 'B', GroupName: 'G1', Description: 'second' },
  { Value: '3', Label: 'C', GroupName: 'G2', ImageUrlOrIconClass: 'icon-x' },
];

describe('DropdownSearch', () => {
  it('OnInitialize defaults: "" texts fall back to the block defaults', () => {
    const config = internalConfigs([], [], '', { NoResultsText: '', SearchPrompt: '' }, '');
    expect(config).toMatchObject({
      Prompt: 'Select...',
      NoResultsText: 'There are no options to show.',
      SearchPrompt: 'Search...',
      NoOptionsText: 'There are no options to show.',
      AllowMultipleSelection: false,
      IsDisabled: false,
    });
  });

  it('provider config: sanitized labels, groups with title indexes, description flag, starting value, search mode', () => {
    const config = internalConfigs(options, [{ Value: '2' }], '-', {}, '');
    const el = document.createElement('div');
    const opts = providerConfig(config, el, undefined);
    expect(opts).toMatchObject({
      ele: el,
      placeholder: '-',
      search: true,
      multiple: false,
      ariaLabelText: 'Select an option',
      hasOptionDescription: true,
      selectedValue: ['2'],
      zIndex: 251,
      dropboxWrapper: 'body',
    });
    const groups = opts.options as { label: string; index: number; options: { label: string }[] }[];
    expect(groups.map((g) => [g.label, g.index])).toEqual([
      ['G1', 0],
      ['G2', 3],
    ]);
    expect(groups[0]?.options[0]?.label).toBe('A ‹b›');
    const render = opts.labelRenderer as (d: object) => string;
    expect(render({ isGroupOption: true, groupIndex: 3, index: 4, label: 'C' })).toBe(
      '<i class="osui-dropdown-option-icon icon-x"></i>C',
    );
    expect('popupDropboxBreakpoint' in opts).toBe(false);
  });

  it('helpers: Sanitize, IsImage, multiple starting values skip ""', () => {
    expect(sanitize('<a>')).toBe('‹a›');
    expect(isImage('/img/x.png?v=1')).toBe(true);
    expect(isImage('connect-icon-home')).toBe(false);
    const config = internalConfigs(
      [],
      [{ Value: '1' }, { Value: '' }, { Value: '2' }],
      '',
      { AllowMultipleSelection: true },
      '',
    );
    expect(startingValues(config)).toEqual(['1', '2']);
  });

  it('OnReady builds the provider on the osui-dropdown-search element; Initialized then OnChanged with the selection', () => {
    const onInitialized = vi.fn();
    const onChanged = vi.fn();
    const { container } = render(
      <DropdownSearch
        id="$b5"
        optionsList={options}
        extendedClass="my-class"
        onInitialized={onInitialized}
        onOnChanged={onChanged}
      />,
    );
    const el = container.querySelector('.osui-dropdown-search');
    expect(el).toHaveClass('my-class');
    expect(el?.getAttribute('name')).not.toBe('');
    expect(fake.init).toHaveBeenCalledTimes(1);
    act(() => {
      vi.runAllTimers();
    });
    expect(onInitialized).toHaveBeenCalledWith('$b5');
    const inst = fake.instances[0];
    if (!inst) throw new Error('no instance');
    inst.selected = { label: 'B', value: '2', customData: { description: 'second', group_name: 'G1' } };
    el?.dispatchEvent(new Event('change'));
    act(() => {
      vi.runAllTimers();
    });
    expect(onChanged).toHaveBeenCalledWith('$b5', [
      { Value: '2', Label: 'B', ImageUrlOrIconClass: '', GroupName: 'G1', Description: 'second' },
    ]);
  });

  it('OnParametersChanged: IsDisabled toggles, Prompt redraws, StartingSelection sets the value; OnDestroy destroys', () => {
    const { rerender, unmount } = render(<DropdownSearch optionsList={options} />);
    const inst = fake.instances[0];
    if (!inst) throw new Error('no instance');
    const ele = inst.ele as unknown as { disable: () => void; setValue: () => void };
    rerender(<DropdownSearch optionsList={options} optionalConfigs={{ IsDisabled: true }} />);
    expect(ele.disable).toHaveBeenCalled();
    rerender(<DropdownSearch optionsList={options} optionalConfigs={{ IsDisabled: true }} prompt="Pick" />);
    act(() => {
      vi.runAllTimers();
    });
    expect(inst.destroy).toHaveBeenCalled();
    expect(fake.init).toHaveBeenCalledTimes(2);
    expect(fake.init.mock.lastCall?.[0]).toMatchObject({ placeholder: 'Pick', disabled: true });
    const second = fake.instances[1];
    rerender(
      <DropdownSearch
        optionsList={options}
        optionalConfigs={{ IsDisabled: true }}
        prompt="Pick"
        startingSelection={[{ Value: '3' }]}
      />,
    );
    act(() => {
      vi.runAllTimers();
    });
    expect((second?.ele as unknown as { setValue: () => void }).setValue).toHaveBeenCalledWith(['3'], true);
    unmount();
    expect(second?.destroy).toHaveBeenCalled();
  });

  it('JSON Deserialize: "" is an empty selection', () => {
    expect(fromJson('')).toEqual([]);
  });
});

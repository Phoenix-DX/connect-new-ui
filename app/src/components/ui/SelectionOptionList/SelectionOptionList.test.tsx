import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import { SelectionOptionList } from './SelectionOptionList';
import * as stories from './SelectionOptionList.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });
const items = () => [
  { Id: 'a', DisplayText: 'A', isSelected: true },
  { Id: 'b', DisplayText: 'B', IconId: 'connect-icon-home' },
  { Id: 'c', DisplayText: 'C', CountryCode: 'AU', isEnabled: false },
];
const option = (c: HTMLElement, i: number) =>
  c.querySelectorAll('.ubt-options-list > div > .ubt-custom-container')[i] as HTMLElement;

describe('SelectionOption_List', () => {
  testCapturedVariants(stories, captures);

  it('renders radio icons, the option icon and the country flag', () => {
    const { container } = render(<SelectionOptionList selectionOptionItemList={items()} />);
    expect(container.querySelectorAll('.connect-icon-radio_checked')).toHaveLength(1);
    expect(container.querySelectorAll('.connect-icon-radio_unchecked')).toHaveLength(2);
    expect(container.querySelector('.connect-icon-home')).toHaveClass('icon-non-standard-16');
    expect(container.querySelector('.country-flag img')?.getAttribute('src')).toContain('UBT_CW.au.png');
  });

  it('single selection selects the clicked option; multiselect toggles; a disabled option raises NotEnabledOnClick', () => {
    const onChange = vi.fn();
    const onNotEnabled = vi.fn();
    const { container, rerender } = render(
      <SelectionOptionList
        selectionOptionItemList={items()}
        onOnSelectionChange={onChange}
        onNotEnabledOnClick={onNotEnabled}
      />,
    );
    fireEvent.click(option(container, 1));
    expect(onChange).toHaveBeenLastCalledWith([expect.objectContaining({ Id: 'b', isSelected: true })], 'b');
    fireEvent.click(option(container, 2));
    expect(onNotEnabled).toHaveBeenCalledWith('c');
    rerender(<SelectionOptionList selectionOptionItemList={items()} isMultiselect onOnSelectionChange={onChange} />);
    fireEvent.click(option(container, 1));
    expect(onChange).toHaveBeenLastCalledWith(
      [expect.objectContaining({ Id: 'a' }), expect.objectContaining({ Id: 'b' })],
      'b',
    );
    expect(container.querySelectorAll('.connect-icon-checkbox_fill')).toHaveLength(2);
  });
});

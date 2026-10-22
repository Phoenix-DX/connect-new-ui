import { act, fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import { Choice } from '@/shared/UBTConnect/lib/staticEntities';
import { FilterSheet_OptionList_Item } from './FilterSheet_OptionList_Item';
import * as stories from './FilterSheet_OptionList_Item.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });
const list = {
  Title: 'Countries',
  In_Options: [
    { Id: 'AU', DisplayText: 'Australia', CountryCode: 'AU' },
    { Id: 'CH', DisplayText: 'Switzerland', CountryCode: 'CH' },
  ],
  SelectedIds: [Choice.None],
};

describe('FilterSheet_OptionList_Item', () => {
  testCapturedVariants(stories, captures);

  it('lists "All <Title>" then the options; a click raises OnChange(SelectedIds, Title)', () => {
    const onOnChange = vi.fn();
    const { getByText, container } = render(
      <FilterSheet_OptionList_Item filterCommonControlList={list} onOnChange={onOnChange} />,
    );
    expect(getByText('All Countries')).toBeInTheDocument();
    expect(container.querySelectorAll('.connect-icon-radio_checked')).toHaveLength(1);
    fireEvent.click(getByText('Switzerland'));
    expect(onOnChange).toHaveBeenCalledWith(['CH'], 'Countries');
  });

  it('header "All <Title>" raises OnBack; a search without match shows the no-results texts', async () => {
    vi.useFakeTimers();
    const onOnBack = vi.fn();
    const { getByText, container } = render(
      <FilterSheet_OptionList_Item filterCommonControlList={list} showHeader onOnBack={onOnBack} />,
    );
    fireEvent.click(container.querySelector('.ubt-zindex-2') as HTMLElement);
    expect(onOnBack).toHaveBeenCalled();
    fireEvent.input(container.querySelector('input') as HTMLInputElement, { target: { value: 'zzz' } });
    fireEvent.change(container.querySelector('input') as HTMLInputElement, { target: { value: 'zzz' } });
    await act(async () => {
      await vi.advanceTimersByTimeAsync(400);
    });
    vi.useRealTimers();
    expect(getByText('No results found for ‘zzz’')).toBeInTheDocument();
  });
});

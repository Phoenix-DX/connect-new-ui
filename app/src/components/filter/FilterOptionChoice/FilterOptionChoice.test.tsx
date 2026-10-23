import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import { Choice } from '@/shared/UBTConnect/lib/staticEntities';
import { FilterOptionChoice } from './FilterOptionChoice';
import * as stories from './FilterOptionChoice.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('FilterSheet_OptionChoice_Item', () => {
  testCapturedVariants(stories, captures);

  it('lists None (when labelled), Yes and No, and raises OnChange(Title, ChoiceId)', () => {
    const onOnChange = vi.fn();
    const { container, getByText } = render(
      <FilterOptionChoice
        filterCommonControlChoice={{
          Title: 'Read',
          NoneLabel: 'All',
          YesLabel: 'Read',
          NoLabel: 'Unread',
          SelectedChoiceId: Choice.None,
        }}
        onOnChange={onOnChange}
      />,
    );
    expect(container.querySelectorAll('.connect-icon-radio_checked')).toHaveLength(1);
    expect(container.querySelectorAll('.ubt-options-list > div')).toHaveLength(3);
    fireEvent.click(getByText('Unread'));
    expect(onOnChange).toHaveBeenCalledWith('Read', Choice.No);
  });
});

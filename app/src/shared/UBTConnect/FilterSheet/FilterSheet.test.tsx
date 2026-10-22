import { fireEvent, render, waitFor } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { clearMemoryCache } from '@/platform/storage/memoryCache';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import { Choice } from '@/shared/UBTConnect/lib/staticEntities';
import { FilterSheet } from './FilterSheet';
import * as stories from './FilterSheet.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('FilterSheet', () => {
  afterEach(clearMemoryCache);

  it('main state: Sort by choice and option choices; Clear / Apply raise ApplyFilters', () => {
    const onApplyFilters = vi.fn();
    const { getByText } = render(
      <FilterSheet
        inOptions={{
          HasSorting: { Enable: true, YesLabel: 'Newest', NoLabel: 'Oldest' },
          Extra_OptionChoices: [
            { Title: 'Read', YesLabel: 'Read', NoLabel: 'Unread', NoneLabel: 'All', SelectedChoiceId: Choice.None },
          ],
        }}
        onApplyFilters={onApplyFilters}
      />,
    );
    expect(getByText('Sort & Filter')).toBeInTheDocument();
    expect(getByText('Sort by')).toBeInTheDocument();
    fireEvent.click(getByText('Unread'));
    fireEvent.click(getByText('Apply filters'));
    const [, choices, , localities, countries, sortBy, hasFilters] = onApplyFilters.mock.calls[0] as unknown[];
    expect(choices).toEqual(
      expect.arrayContaining([expect.objectContaining({ Title: 'Read', SelectedChoiceId: Choice.No })]),
    );
    expect([localities, countries, sortBy, hasFilters]).toEqual(['Localities', 'Countries', 'Sort by', true]);
  });

  it('a single place filter opens straight into its list, built from the recorded countries', async () => {
    // Action_SetSingleFilter (via Action_DefineOptionControl_Empty): one option list and no choice → SubState_Selected =
    // that list. Kept 1:1, so a sheet whose second list arrives later also stays on the first list.
    const onLoaded = vi.fn();
    const { findAllByText, getAllByText } = render(
      <FilterSheet inOptions={{ HasCountries: { Enable: true, Order: 1 } }} onLoaded={onLoaded} />,
    );
    await waitFor(() => {
      expect(onLoaded).toHaveBeenCalledWith(false);
    });
    expect((await findAllByText('Argentina')).length).toBeGreaterThan(0);
    expect(getAllByText('Country Filter').length).toBeGreaterThan(0);
  });

  testCapturedVariants(stories, captures);
});

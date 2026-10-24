import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { testCapturedVariants } from '@/test/capturedVariants';
import { Choice } from '@/lib/ubtConnect/staticEntities';
import { FilterSheet, type FilterSheetBackNavigationEvent, type FilterSheetSubscription } from './FilterSheet';
import * as stories from './FilterSheet.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

const COUNTRIES = [
  { CountryName: 'Argentina', CountryCode: 'AR' },
  { CountryName: 'Uruguay', CountryCode: 'UY' },
];
const subscription = (type: string, codes: string[] = []): FilterSheetSubscription => ({
  SubscriptionID: 'SUB-4410982',
  SubscriptionType: type,
  SubscriptionRegionId: '1',
  SubscriptionRegion: 'Americas',
  SubscriptionManageLink: 'https://example.com/subscription',
  SubscriptionActive: true,
  SubscribedCountries: { List: codes.map((Code) => ({ Code, Name: Code, RegionId: '1' })) },
});

describe('FilterSheet', () => {
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

  it('a single place filter opens straight into its list once the countries and the user came; Loaded follows', () => {
    // Action_SetSingleFilter (via Action_DefineOptionControl_Empty): one option list and no choice → SubState_Selected =
    // that list. Kept 1:1, so a sheet whose second list arrives later also stays on the first list.
    const onLoaded = vi.fn();
    const inOptions = { HasCountries: { Enable: true, Order: 1 } };
    const { getAllByText, queryByText, rerender } = render(
      <FilterSheet inOptions={inOptions} countries={COUNTRIES} onLoaded={onLoaded} />,
    );
    expect(queryByText('Argentina')).toBeNull(); // the user information has not come
    expect(onLoaded).not.toHaveBeenCalled();
    rerender(
      <FilterSheet
        inOptions={inOptions}
        countries={COUNTRIES}
        userSubscription={subscription('Global')}
        onLoaded={onLoaded}
      />,
    );
    expect(onLoaded).toHaveBeenCalledWith(false);
    expect(getAllByText('Argentina').length).toBeGreaterThan(0);
    expect(getAllByText('Country Filter').length).toBeGreaterThan(0);
  });

  it('a Free subscription raises Loaded(True) and builds no country list', () => {
    const onLoaded = vi.fn();
    const { queryByText } = render(
      <FilterSheet
        inOptions={{ HasCountries: { Enable: true, Order: 1 } }}
        countries={COUNTRIES}
        userSubscription={subscription('Free')}
        onLoaded={onLoaded}
      />,
    );
    expect(onLoaded).toHaveBeenCalledWith(true);
    expect(queryByText('Argentina')).toBeNull();
  });

  it('a country outside the subscription is disabled: a click opens the upgrade popup of the caller', () => {
    const onShowUpgradePopUp = vi.fn();
    const { getAllByText } = render(
      <FilterSheet
        inOptions={{ HasCountries: { Enable: true, Order: 1 } }}
        countries={COUNTRIES}
        userSubscription={subscription('Regional', ['AR'])}
        onShowUpgradePopUp={onShowUpgradePopUp}
      />,
    );
    fireEvent.click(getAllByText('Uruguay')[0] as HTMLElement);
    expect(onShowUpgradePopUp).toHaveBeenCalledTimes(1);
  });

  it('renders the cache blocks and the back-navigation block of the caller; a closed sheet does not prevent', () => {
    const handlers: ((event: FilterSheetBackNavigationEvent) => void)[] = [];
    const renderBackNavigationHandler = (onBackNavigation: (event: FilterSheetBackNavigationEvent) => void) => {
      handlers.push(onBackNavigation);
      return <i data-testid="back" />;
    };
    const { getByTestId } = render(
      <FilterSheet
        cacheBlocks={<i data-testid="caches" />}
        renderBackNavigationHandler={renderBackNavigationHandler}
      />,
    );
    const block = getByTestId('caches').parentElement;
    expect(block?.lastElementChild).toBe(getByTestId('back'));
    expect(getByTestId('caches').nextElementSibling).toBe(getByTestId('back'));
    expect(handlers.length).toBeGreaterThan(0);
    const event = { preventDefault: vi.fn() };
    handlers[0]?.(event);
    expect(event.preventDefault).not.toHaveBeenCalled();
  });

  testCapturedVariants(stories, captures);
});

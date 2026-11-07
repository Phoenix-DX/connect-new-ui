import { fireEvent, render, screen } from '@testing-library/react';
import type { ComponentProps } from 'react';
import { MemoryRouter } from 'react-router';
import { describe, expect, it, vi } from 'vitest';
import type { CountryWithMapPosition } from '@/api/country';
import type { AssembleLocalityFilterProps } from '@/components/assemble/AssembleLocalityFilter';
import { AssembleFilterView } from './AssembleFilterView';

/* The locality filter loads its localities itself: a stand-in shows its inputs and raises its events. */
vi.mock('@/components/assemble/AssembleLocalityFilter', () => ({
  AssembleLocalityFilter: ({
    id,
    countryCode,
    countryName,
    onSelectedSubdivision,
    onFreeSubscriptionAlert,
  }: AssembleLocalityFilterProps) => (
    <div id={id} data-testid="locality-filter" data-country={`${countryCode ?? ''}:${countryName ?? ''}`}>
      <button type="button" onClick={() => onSelectedSubdivision?.('7002')}>
        pick
      </button>
      <button type="button" onClick={() => onFreeSubscriptionAlert?.()}>
        alert
      </button>
    </div>
  ),
}));

/* The props-only view of the Assemble filter. Countries are reference data; the counts are fictional. */
const COUNTRIES: CountryWithMapPosition[] = [
  { Code: 'AR', Name: 'Argentina', MembersCount: 268, HouseholdersCount: 104, LocalitiesCount: 4 },
  { Code: 'NZ', Name: 'New Zealand', MembersCount: 6284, HouseholdersCount: 2107, LocalitiesCount: 41 },
];

type Props = ComponentProps<typeof AssembleFilterView>;
function renderView(overrides: Partial<Props> = {}) {
  const props: Props = {
    id: '$b2',
    screenTitle: 'Browse by Country',
    isCountriesDataFetched: true,
    searchTerm: '',
    countries: COUNTRIES,
    showLocalitiesList: false,
    countryCode: '',
    countryName: '',
    isBottomBarVisible: false,
    isApplyEnabled: false,
    onSearchTermChange: vi.fn(),
    onCountryClicked: vi.fn(),
    onFreeSubscriptionAlert: vi.fn(),
    onSelectedSubdivision: vi.fn(),
    onCancel: vi.fn(),
    onApply: vi.fn(),
    backNavigationHandler: <div id="b2-$b8" />,
    ...overrides,
  };
  const view = render(
    <MemoryRouter>
      <AssembleFilterView {...props} />
    </MemoryRouter>,
  );
  return { ...view, props };
}
const rows = (container: HTMLElement) =>
  [...container.querySelectorAll('[data-block="Directory.LocalityListDetail"] .landing-country-list-item')].map(
    (row) => row.querySelector('span')?.textContent,
  );

describe('AssembleFilterView', () => {
  it('not fetched: the Spinner, no search and no list', () => {
    const { container } = renderView({ isCountriesDataFetched: false });
    expect(container.querySelector('[data-block="Reusable.Spinner"]')).not.toBeNull();
    expect(container.querySelector('#b2-Input_SearchTearm')).toBeNull();
    expect(container.querySelector('[data-block="Directory.LocalityListDetail"]')).toBeNull();
  });

  it('fetched: the title, the search and the countries; the slots; no bottom bar', () => {
    const { container, props } = renderView({ searchTerm: 'a' });
    expect(container.querySelector('[data-block="Assemble.ScreenBlock_Assemble_Filter"]')?.id).toBe('$b2');
    expect(container.querySelector('#b2-ScreenTitle2')).toHaveTextContent('Browse by Country');
    const input = container.querySelector<HTMLInputElement>('#b2-Input_SearchTearm');
    expect(input).toHaveAttribute('placeholder', 'Search Country');
    expect(input).toHaveValue('a');
    expect(rows(container)).toEqual(['Argentina', 'New Zealand']);
    expect(container.querySelector('#b2-FreeSubscriptionAlert')).not.toBeNull();
    expect(container.querySelector('#b2-\\$b8')).not.toBeNull();
    expect(container.querySelector('#b2-DIV_StickyBottom')).toBeNull();

    fireEvent.change(input as HTMLInputElement, { target: { value: 'zea' } });
    expect(props.onSearchTermChange).toHaveBeenCalledWith('zea');
    fireEvent.click(screen.getByText('New Zealand'));
    // Only the Code goes on: the map position of the event is not read.
    expect(props.onCountryClicked).toHaveBeenCalledWith('NZ');
  });

  it('no country: "No results found"', () => {
    const { container } = renderView({ countries: [] });
    expect(container.querySelector('#b2-DIV_NoResultsFound')).toHaveTextContent('No results found');
    expect(container.querySelector('[data-block="Directory.LocalityListDetail"]')).toBeNull();
  });

  it('a chosen country: the locality filter instead of the list, and Cancel / Apply', () => {
    const { container, props } = renderView({
      screenTitle: 'Filter by Locality',
      showLocalitiesList: true,
      countryCode: 'AR',
      countryName: 'Argentina',
      isBottomBarVisible: true,
    });
    expect(container.querySelector('#b2-ScreenTitle2')).toHaveTextContent('Filter by Locality');
    expect(container.querySelector('#b2-DIV_SearchByCountry')).toBeNull();
    expect(screen.getByTestId('locality-filter')).toHaveAttribute('id', 'b2-$b6');
    expect(screen.getByTestId('locality-filter')).toHaveAttribute('data-country', 'AR:Argentina');
    const apply = container.querySelector<HTMLButtonElement>('#b2-ButtonApply');
    expect(apply).toBeDisabled();

    fireEvent.click(screen.getByText('pick'));
    expect(props.onSelectedSubdivision).toHaveBeenCalledWith('7002');
    fireEvent.click(screen.getByText('alert'));
    expect(props.onFreeSubscriptionAlert).toHaveBeenCalledTimes(1);
    fireEvent.click(screen.getByText('Cancel'));
    expect(props.onCancel).toHaveBeenCalledTimes(1);
  });

  it('Apply is enabled once a supper meeting is chosen', () => {
    const { container, props } = renderView({
      showLocalitiesList: true,
      countryCode: 'AR',
      isBottomBarVisible: true,
      isApplyEnabled: true,
    });
    const apply = container.querySelector<HTMLButtonElement>('#b2-ButtonApply');
    expect(apply).toBeEnabled();
    fireEvent.click(apply as HTMLButtonElement);
    expect(props.onApply).toHaveBeenCalledTimes(1);
  });
});

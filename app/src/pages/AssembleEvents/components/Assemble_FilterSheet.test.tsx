import { fireEvent, render, screen } from '@testing-library/react';
import type { ComponentProps } from 'react';
import { MemoryRouter } from 'react-router';
import { describe, expect, it, vi } from 'vitest';
import type { CountryWithMapPosition } from '@/api/country';
import type { AssembleLocalityFilterProps } from '@/components/assemble/AssembleLocalityFilter';
import { Assemble_FilterSheet } from './Assemble_FilterSheet';

/* The locality filter loads its localities itself: a stand-in shows its inputs and raises its events. */
vi.mock('@/components/assemble/AssembleLocalityFilter', () => ({
  AssembleLocalityFilter: ({
    id,
    countryCode,
    countryName,
    onSelectedSubdivision,
    onFreeSubscriptionAlert,
    onCancel,
  }: AssembleLocalityFilterProps) => (
    <div id={id} data-testid="locality-filter" data-country={`${countryCode ?? ''}:${countryName ?? ''}`}>
      <button type="button" onClick={() => onSelectedSubdivision?.('9202')}>
        pick
      </button>
      <button type="button" onClick={() => onFreeSubscriptionAlert?.()}>
        alert
      </button>
      <button type="button" onClick={() => onCancel?.()}>
        locality cancel
      </button>
    </div>
  ),
}));

/* The props-only view of the filter sheet. Countries are reference data; the counts are fictional. */
const COUNTRIES: CountryWithMapPosition[] = [
  { Code: 'AR', Name: 'Argentina', MembersCount: 268, HouseholdersCount: 104, LocalitiesCount: 4 },
  { Code: 'NZ', Name: 'New Zealand', MembersCount: 6284, HouseholdersCount: 2107, LocalitiesCount: 41 },
];

type Props = ComponentProps<typeof Assemble_FilterSheet>;
function renderView(overrides: Partial<Props> = {}) {
  const props: Props = {
    id: 'Assemble_FilterSheet_Instance',
    scope: 'b5',
    screenTitle: 'Browse by Country',
    showLocalitiesList: false,
    searchTerm: '',
    isCountriesDataFetched: true,
    countries: COUNTRIES,
    countryCode: '',
    countryName: '',
    isBottomBarVisible: false,
    isApplyEnabled: false,
    onSearchTermChange: vi.fn(),
    onCountryClicked: vi.fn(),
    onBackToCountries: vi.fn(),
    onSelectedSubdivision: vi.fn(),
    onFreeSubscriptionAlert: vi.fn(),
    onCancel: vi.fn(),
    onApply: vi.fn(),
    ...overrides,
  };
  const view = render(
    <MemoryRouter>
      <Assemble_FilterSheet {...props} />
    </MemoryRouter>,
  );
  return { ...view, props };
}

describe('Assemble_FilterSheet', () => {
  it('the country step: the title, the search and the countries; no back link and no Cancel / Apply', () => {
    const { container, props } = renderView({ searchTerm: 'a' });
    expect(container.querySelector('#b5-Expr_ScreenTitle')).toHaveTextContent('Browse by Country');
    expect(container.querySelector('#b5-Link_Back')).toBeNull();
    expect(container.querySelector('#b5-DIV_StickyBottom')).toBeNull();
    const input = container.querySelector<HTMLInputElement>('#b5-Input_SearchTerm');
    expect(input).toHaveValue('a');
    fireEvent.change(input as HTMLInputElement, { target: { value: 'arg' } });
    expect(props.onSearchTermChange).toHaveBeenCalledWith('arg');
    fireEvent.click(screen.getByText('New Zealand'));
    expect(props.onCountryClicked).toHaveBeenCalledWith(
      'NZ',
      expect.any(Number),
      expect.any(Number),
      expect.any(Number),
    );
    expect(container.querySelector('#b5-FreeSubscriptionAlert')).not.toBeNull();
  });

  it('the Spinner until the countries come; "No results found" for an empty search', () => {
    const loading = renderView({ isCountriesDataFetched: false });
    expect(loading.container.querySelector('[data-block="Reusable.Spinner"]')).not.toBeNull();
    loading.unmount();
    const empty = renderView({ countries: [] });
    expect(empty.container.querySelector('#b5-DIV_NoResultsFound')).toHaveTextContent('No results found');
  });

  it('the locality step: the back link, the locality filter and its events, Cancel and Apply', () => {
    const { container, props } = renderView({
      screenTitle: 'Filter by Locality',
      showLocalitiesList: true,
      countryCode: 'AR',
      countryName: 'Argentina',
      isBottomBarVisible: true,
      isApplyEnabled: true,
    });
    expect(container.querySelector('#b5-Expr_ScreenTitle')).toHaveTextContent('Filter by Locality');
    expect(container.querySelector('#b5-Input_SearchTerm')).toBeNull();
    expect(screen.getByTestId('locality-filter')).toHaveAttribute('data-country', 'AR:Argentina');
    fireEvent.click(container.querySelector('#b5-Link_Back') as HTMLElement);
    expect(props.onBackToCountries).toHaveBeenCalledTimes(1);
    fireEvent.click(screen.getByText('pick'));
    expect(props.onSelectedSubdivision).toHaveBeenCalledWith('9202');
    fireEvent.click(screen.getByText('alert'));
    expect(props.onFreeSubscriptionAlert).toHaveBeenCalledTimes(1);
    fireEvent.click(screen.getByText('locality cancel'));
    fireEvent.click(screen.getByText('Cancel'));
    expect(props.onCancel).toHaveBeenCalledTimes(2);
    const apply = container.querySelector<HTMLButtonElement>('#b5-ButtonApply');
    expect(apply).toBeEnabled();
    fireEvent.click(apply as HTMLButtonElement);
    expect(props.onApply).toHaveBeenCalledTimes(1);
  });

  it('Apply is disabled until a supper meeting is chosen', () => {
    const { container } = renderView({ showLocalitiesList: true, isBottomBarVisible: true, isApplyEnabled: false });
    expect(container.querySelector('#b5-ButtonApply')).toBeDisabled();
  });
});

import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import type { CountrySummary } from '@/api/country';
import {
  getSkeletonList_UI_CountryStatistics,
  NO_USER_GEOGRAPHY,
  type UserGeography,
} from '@/pages/CountryList/hooks/countryListState';
import { CountryListContent, type CountryListContentProps } from './CountryListContent';

/* The Content placeholder of CountryList, props only. Fictional geography and countries. */
const USER: UserGeography = {
  isFetched: true,
  localityId: '701',
  localityName: 'Lake Tekapo',
  localitySubdivisionCount: '1',
  countryCode: 'NZ',
  countryName: 'New Zealand',
  countryLocalityCount: '12',
};
const COUNTRIES: CountrySummary[] = [
  { countryCode: 'NZ', title: 'New Zealand', avatarURL: '/flags/nz.png', texts: { Members: '1,204' } },
  { countryCode: 'FJ', title: 'Fiji', avatarURL: '', texts: { Members: '86' } },
];

function setup(props: Partial<CountryListContentProps> = {}) {
  const handlers = {
    onMyLocalityClicked: vi.fn(),
    onMyCountryClicked: vi.fn(),
    onCommunityPopulationClicked: vi.fn(),
    onLegendInfoClicked: vi.fn(),
    onCountryClicked: vi.fn(),
  };
  const view = render(
    <CountryListContent
      user={USER}
      countries={COUNTRIES}
      fetchStatus="ok"
      isListLoading={false}
      isCommunityPopulationLoading={false}
      communityPopulationTotal="52310"
      {...handlers}
      {...props}
    />,
  );
  return { ...view, handlers };
}

const text = (id: string) => document.getElementById(id)?.textContent;
const list = () => document.querySelector('[id="$b23"] .list');
const rows = () => [...document.querySelectorAll('[data-block="Directory_Locality.Statistics_TypedItem"]')];
const clickable = (id: string) => document.getElementById(id)?.querySelector('[data-container]') as Element;

describe('CountryListContent', () => {
  it('shows the cards of the user, the population, the title and one row per country', () => {
    setup();
    expect(text('$b9')).toBe('MY LOCALITY');
    expect(text('$b10')).toBe('Lake Tekapo');
    expect(text('$b11')).toBe('1 Supper Meeting');
    expect(text('$b14')).toBe('MY COUNTRY');
    expect(text('$b15')).toBe('New Zealand');
    expect(text('$b16')).toBe('12 Localities');
    expect(text('$b21')).toBe('Browse by Country');
    expect(document.getElementById('$b18')?.textContent).toContain('52310');
    expect(list()?.className).toBe('list list-group OSFillParent');
    expect(rows().map((row) => row.id)).toEqual(['l1-66_0-$b24', 'l1-66_1-$b24']);
    expect(rows()[1]?.textContent).toContain('Fiji');
  });

  it('while GetCountriesStatistics runs, the list is loading with the 10 skeleton rows', () => {
    setup({ fetchStatus: 'notFetched', isListLoading: true, countries: getSkeletonList_UI_CountryStatistics(10) });
    expect(list()?.className).toBe('list list-group list-loading OSFillParent');
    expect(rows()).toHaveLength(10);
  });

  it('after a failed GetCountriesStatistics, the list is empty with the error class', () => {
    setup({ fetchStatus: 'error', countries: [] });
    expect(list()?.className).toBe('list list-group list-error OSFillParent');
    expect(rows()).toHaveLength(0);
  });

  it('the header cards are a skeleton until the user information answers', () => {
    const { container } = setup({ user: NO_USER_GEOGRAPHY, isListLoading: true });
    const skeletons = container.querySelectorAll('.ubt-skeleton-section');
    expect(skeletons.length).toBeGreaterThan(0);
    expect(text('$b11')).toBe('0 Supper Meetings');
    expect(text('$b16')).toBe('0 Localities');
  });

  it('calls the handlers of the cards, the population, the info icon and a country with its code', () => {
    const { handlers } = setup();
    fireEvent.click(clickable('$b7'));
    expect(handlers.onMyLocalityClicked).toHaveBeenCalledTimes(1);
    fireEvent.click(clickable('$b12'));
    expect(handlers.onMyCountryClicked).toHaveBeenCalledTimes(1);
    fireEvent.click(clickable('$b22'));
    expect(handlers.onLegendInfoClicked).toHaveBeenCalledTimes(1);
    const population = document.getElementById('$b18');
    fireEvent.click((population?.querySelector('[data-container]') ?? population) as Element);
    expect(handlers.onCommunityPopulationClicked).toHaveBeenCalledTimes(1);
    fireEvent.click(rows()[1]?.parentElement as Element);
    expect(handlers.onCountryClicked).toHaveBeenCalledWith('FJ');
  });
});

import { act, fireEvent, render, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import type { LocalityStatistics } from '@/api/country';
import {
  getSkeletonList_UI_LocalityStatistics,
  mapOptionsAt,
  toMarker,
} from '@/pages/CountryDetails/hooks/countryDetailsState';
import { CountryDetailsContent, type CountryDetailsContentProps } from './CountryDetailsContent';

/* The Content placeholder of CountryDetails, props only. Fictional localities. */
const locality = (localityId: string, name: string, mainHallSubdivisionId: string, members: string) => ({
  localityId,
  name,
  latitude: -43.9,
  longitude: 170.5,
  statisticsTitle: name,
  typedStatisticsTexts: { Members: members },
  mainHallSubdivisionId,
});
const LOCALITIES: LocalityStatistics[] = [
  locality('701', 'Lake Tekapo', '9101', '48'),
  locality('702', 'Twizel', '9102', '36'),
  locality('703', 'Fairlie', '9103', '21'),
];

function setup(props: Partial<CountryDetailsContentProps> = {}) {
  const handlers = {
    onSelectCountryClicked: vi.fn(),
    onMarkerClicked: vi.fn(),
    onMapSetCallbacks: vi.fn(),
    onMapInitialized: vi.fn(),
    onMapParametersChanged: vi.fn(),
    onSearchChanged: vi.fn(),
    onLegendInfoClicked: vi.fn(),
    onLocalityClicked: vi.fn(),
  };
  const view = render(
    <CountryDetailsContent
      localities={LOCALITIES}
      list={LOCALITIES}
      searchString=""
      isLoaded
      mapOptions={null}
      markersList={[]}
      {...handlers}
      {...props}
    />,
  );
  return { ...view, handlers };
}

const text = (id: string) => document.getElementById(id)?.textContent;
const rows = () => [...document.querySelectorAll('[data-block="Directory_Locality.Statistics_TypedItem"]')];
const listRows = () => [...document.querySelectorAll('.list [data-block="Directory_Locality.Statistics_TypedItem"]')];
const input = () => document.querySelector('[id="Block_SearchInput"] input') as HTMLInputElement;
const map = () => document.querySelector('[data-block="Leaflet.LeafletMap"]');

describe('CountryDetailsContent', () => {
  it('shows the country row, the title, the locality count and one row per locality', () => {
    setup();
    expect(text('$b5')).toBe('Select another country to view');
    expect(text('$b15')).toBe('Browse by Locality');
    expect(text('$b19')).toBe('3 Localities');
    expect(listRows()).toHaveLength(3);
    expect(listRows().map((r) => r.textContent)).toEqual([
      expect.stringContaining('Lake Tekapo'),
      expect.stringContaining('Twizel'),
      expect.stringContaining('Fairlie'),
    ]);
    expect(document.querySelector('.list')?.className).toBe('list list-group OSFillParent');
  });

  it('"1 Locality" for one locality; the search is disabled with one locality or less', () => {
    setup({ localities: LOCALITIES.slice(0, 1), list: LOCALITIES.slice(0, 1) });
    expect(text('$b19')).toBe('1 Locality');
    expect(input().disabled).toBe(true);
  });

  it('while loading: the map skeleton, the count skeleton and three skeleton cards, no list', () => {
    const skeleton = getSkeletonList_UI_LocalityStatistics(10);
    setup({ localities: skeleton, list: [], isLoaded: false });
    expect(map()).toBeNull();
    expect(document.querySelector('[id="$b9"] .leaflet-container')).not.toBeNull();
    expect(text('$b19')).toBe('10 Localities');
    expect(document.querySelector('.list')).toBeNull();
    expect(rows()).toHaveLength(3);
    expect(rows().every((r) => r.textContent.includes('Loading Name'))).toBe(true);
  });

  it('a search without a result shows the "no results" text instead of the list', () => {
    setup({ list: [], searchString: 'Dunedin' });
    expect(document.querySelector('.list')).toBeNull();
    expect(document.body.textContent).toContain("No results found for 'Dunedin'");
  });

  it('the map shows once loaded with options; its events reach the handlers', async () => {
    const { handlers } = setup({ mapOptions: mapOptionsAt(-43.9, 170.5), markersList: LOCALITIES.map(toMarker) });
    expect(map()).not.toBeNull();
    expect(document.querySelector('[id="$b9"]')).toBeNull();
    await waitFor(() => {
      expect(handlers.onMapInitialized).toHaveBeenCalledTimes(1);
    });
    expect(handlers.onMapSetCallbacks).toHaveBeenCalledWith(handlers.onMapInitialized.mock.calls[0]?.[0]);
  });

  it('the clicks: the country row, the info icon and a locality row', () => {
    const { handlers } = setup();
    fireEvent.click(document.getElementById('$b3')?.querySelector('[data-container]') as Element);
    expect(handlers.onSelectCountryClicked).toHaveBeenCalledTimes(1);
    fireEvent.click(document.getElementById('$b16')?.querySelector('[data-container]') as Element);
    expect(handlers.onLegendInfoClicked).toHaveBeenCalledTimes(1);
    fireEvent.click(listRows()[1] as Element);
    expect(handlers.onLocalityClicked).toHaveBeenCalledWith('702');
  });

  it('the search input: a change after the 200 ms debounce, Enter, and the clear icon with ""', () => {
    vi.useFakeTimers();
    try {
      const { handlers } = setup();
      fireEvent.change(input(), { target: { value: 'twi' } });
      expect(handlers.onSearchChanged).not.toHaveBeenCalled();
      act(() => {
        vi.advanceTimersByTime(200);
      });
      expect(handlers.onSearchChanged).toHaveBeenLastCalledWith('twi');
      fireEvent.keyUp(input(), { key: 'Enter' });
      expect(handlers.onSearchChanged).toHaveBeenCalledTimes(2);
      const clearIcon = document.querySelector('[id="Block_SearchInput"] .connect-icon-cancel_fill');
      fireEvent.click(clearIcon?.closest('[data-container]') ?? (clearIcon as Element));
      expect(handlers.onSearchChanged).toHaveBeenLastCalledWith('');
    } finally {
      vi.useRealTimers();
    }
  });
});

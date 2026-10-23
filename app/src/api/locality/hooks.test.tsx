import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';
import type { ReactNode } from 'react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { recordBodies } from '@/test/testSupport';
import {
  useAllLocalitiesQuery,
  useInterchangesQuery,
  useLocalityCardListQuery,
  useLocalityDetailsQuery,
  useOneSchoolGlobalDetailsQuery,
  useSubdivisionDetailsQuery,
} from './hooks';
import { localityKeys } from './keys';
import type { AllLocalitiesCallInputs, LocalityDetailsCallInputs, OneSchoolGlobalDetailsCallInputs } from './types';

const detailsInputs: LocalityDetailsCallInputs = {
  TagsList: [{ Text: 'Households', Identifier: 'Households', IsSelected: true }],
  HeaderIsScrolled: false,
  TagsList_SelectedTag: 'Households',
  IsUserLocality: true,
  LocalityLabel: 'Bahia Blanca, Argentina',
  IsScreenInitialized: true,
  LocalityId: '252',
  PreloadedLocalityLabel: '',
};
const allInputs: AllLocalitiesCallInputs = {
  CacheKey: 'Unique',
  CacheTypeId: 'AllLocalities',
  TimeToLiveSeconds: 7200,
};

/** A client with the library defaults (retry 3), so the tests see the options of the hooks. */
function providerOf(client: QueryClient) {
  return function Provider({ children }: { children: ReactNode }) {
    return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
  };
}
const calls = () => (window.__osCalls ?? []).map((c) => c.action);

beforeEach(() => {
  sessionStorage.setItem('mock:latency', '0');
  window.__osCalls = [];
});
afterEach(() => {
  sessionStorage.clear();
});

describe('locality query keys', () => {
  it('the inputs are part of the key', () => {
    expect(localityKeys.cardList('AR')).toEqual(['locality', 'cardList', 'AR']);
    expect(localityKeys.details(detailsInputs)).toEqual(['locality', 'details', detailsInputs]);
    expect(localityKeys.interchanges('252')).toEqual(['locality', 'interchanges', '252']);
    expect(localityKeys.subdivisionDetails('1210')).toEqual(['locality', 'subdivisionDetails', '1210']);
    expect(localityKeys.allLocalities(allInputs)).toEqual(['locality', 'allLocalities', allInputs]);
  });
});

describe('locality queries', () => {
  it('useLocalityCardListQuery calls the server on each mount and keeps nothing in the cache (staleTime 0, gcTime 0)', async () => {
    const client = new QueryClient();
    const first = renderHook(() => useLocalityCardListQuery('AR'), { wrapper: providerOf(client) });
    await waitFor(() => {
      expect(first.result.current.isSuccess).toBe(true);
    });
    expect(first.result.current.data?.countryName).toBe('Argentina');
    first.unmount();
    await waitFor(() => {
      expect(client.getQueryCache().find({ queryKey: localityKeys.cardList('AR') })).toBeUndefined();
    });
    const second = renderHook(() => useLocalityCardListQuery('AR'), { wrapper: providerOf(client) });
    await waitFor(() => {
      expect(second.result.current.isSuccess).toBe(true);
    });
    expect(calls()).toEqual(['DataActionGetLocalityStatistics', 'DataActionGetLocalityStatistics']);
  });

  it('useLocalityDetailsQuery answers the locality', async () => {
    const client = new QueryClient();
    const { result } = renderHook(() => useLocalityDetailsQuery(detailsInputs), { wrapper: providerOf(client) });
    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });
    expect(result.current.data?.localityName).toBe('Bahia Blanca');
    expect(calls()).toEqual(['DataActionGet_LocalityDetails']);
  });

  it('useInterchangesQuery answers the interchange localities', async () => {
    const client = new QueryClient();
    const { result } = renderHook(() => useInterchangesQuery('252'), { wrapper: providerOf(client) });
    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });
    expect(result.current.data?.map((i) => i.interchangeLocalityName)).toEqual(['Monte Hermoso']);
    expect(calls()).toEqual(['DataActionGetInterchangesByLocalityId']);
  });

  it('useSubdivisionDetailsQuery does not call the server when the caller disables it', async () => {
    const client = new QueryClient();
    const { result } = renderHook(() => useSubdivisionDetailsQuery('1210', { enabled: false }), {
      wrapper: providerOf(client),
    });
    await new Promise((resolve) => setTimeout(resolve, 20));
    expect(result.current.fetchStatus).toBe('idle');
    expect(calls()).toEqual([]);
  });

  it('useSubdivisionDetailsQuery does not retry a failed call by default', async () => {
    sessionStorage.setItem('mock:mock', 'error');
    const client = new QueryClient();
    const { result } = renderHook(() => useSubdivisionDetailsQuery('1210'), { wrapper: providerOf(client) });
    await waitFor(() => {
      expect(result.current.isError).toBe(true);
    });
    expect(calls()).toEqual(['DataActionGetSubdivision']);
  });

  it('useAllLocalitiesQuery answers the list of all localities', async () => {
    const client = new QueryClient();
    const { result } = renderHook(() => useAllLocalitiesQuery(allInputs), { wrapper: providerOf(client) });
    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });
    expect(result.current.data?.LocalityList.List.length).toBeGreaterThan(0);
    expect(calls()).toEqual(['DataActionGetCacheInfo']);
  });
});

/* ---- OneSchoolGlobalDetails: DataActionGetOneSchoolGlobalDetails ---- */

describe('useOneSchoolGlobalDetailsQuery', () => {
  /** The screen variables, with the selected sub-section of the moment. */
  const variablesOf = (selected: string): OneSchoolGlobalDetailsCallInputs => ({
    lookupSections: {
      Actions: { Singular: 'Action', Plural: 'Actions' },
      Households: { Singular: 'Household', Plural: 'Households' },
      OneSchoolStatistitics: { Singular: 'Show student numbers', Plural: 'Show student numbers' },
    },
    selected_OneschoolGlobal_SubsectionId: selected,
    type_OneschoolGlobal_SubsectionId: { UpcomingEvents: 'Upcoming events', AboutOurCampus: 'About our campus' },
    localIsBookmarked: false,
    in_OneSchoolGlobalId: '1430',
  });
  const ACTION_PATH = 'UBTConnect/OneSchoolGlobalDetails/DataActionGetOneSchoolGlobalDetails';

  it('the key is the school id only', () => {
    expect(localityKeys.oneSchoolGlobalDetails('1430')).toEqual(['locality', 'oneSchoolGlobalDetails', '1430']);
  });

  it('calls once with the variables of the moment the fetch starts, and keeps nothing after the screen', async () => {
    const client = new QueryClient();
    const bodies = recordBodies(ACTION_PATH);
    let selected = 'Upcoming events';
    const { result, rerender, unmount } = renderHook(
      () => useOneSchoolGlobalDetailsQuery('1430', () => variablesOf(selected), true),
      { wrapper: providerOf(client) },
    );
    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });
    expect(result.current.data?.card.name).toBe('OneSchool Alem');
    // A later change of a variable does not fetch again (staleTime Infinity).
    selected = 'About our campus';
    rerender();
    await new Promise((resolve) => setTimeout(resolve, 20));
    expect(calls()).toEqual(['DataActionGetOneSchoolGlobalDetails']);
    expect(bodies).toHaveLength(1);
    expect(bodies[0]).toMatchObject({ Selected_OneschoolGlobal_SubsectionId: 'Upcoming events' });
    unmount();
    await waitFor(() => {
      expect(client.getQueryCache().find({ queryKey: localityKeys.oneSchoolGlobalDetails('1430') })).toBeUndefined();
    });
  });

  it('does not call the server when the screen disables it', async () => {
    const client = new QueryClient();
    const { result } = renderHook(
      () => useOneSchoolGlobalDetailsQuery('1430', () => variablesOf('Upcoming events'), false),
      { wrapper: providerOf(client) },
    );
    await new Promise((resolve) => setTimeout(resolve, 20));
    expect(result.current.fetchStatus).toBe('idle');
    expect(calls()).toEqual([]);
  });

  it('does not retry a failed call', async () => {
    sessionStorage.setItem('mock:mock', 'error');
    const client = new QueryClient();
    const { result } = renderHook(
      () => useOneSchoolGlobalDetailsQuery('1430', () => variablesOf('Upcoming events'), true),
      { wrapper: providerOf(client) },
    );
    await waitFor(() => {
      expect(result.current.isError).toBe(true);
    });
    expect(calls()).toEqual(['DataActionGetOneSchoolGlobalDetails']);
  });
});

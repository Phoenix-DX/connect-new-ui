import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';
import type { ReactNode } from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { useAllCountriesQuery, useCountryInfoQuery, useCountryLocalityStatisticsQuery } from './hooks';
import { countryKeys } from './keys';
import type { AllCountriesCallInputs, LocalityStatisticsVariables } from './types';

const allCountriesInputs: AllCountriesCallInputs = {
  CacheKey: 'Unique',
  CacheTypeId: 'Connect_CacheType.AllCountries',
  TimeToLiveSeconds: 7200,
};
/** The screen variables of the recorded CountryDetails call (CountryCode AR). */
const recordedVariables: LocalityStatisticsVariables = {
  originalCountryCode: 'AR',
  searchString: '',
  hasFiltersApplied: false,
  localMapId: '',
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
  vi.restoreAllMocks();
});

describe('country query keys', () => {
  it('each query has its own key, with the inputs that the answer depends on', () => {
    expect(countryKeys.localityStatistics('AR')).toEqual(['country', 'localityStatistics', { countryCode: 'AR' }]);
    expect(countryKeys.info('US')).toEqual(['country', 'info', 'US']);
    expect(countryKeys.allCountries(allCountriesInputs)).toEqual(['country', 'allCountries', allCountriesInputs]);
  });
});

describe('useCountryLocalityStatisticsQuery', () => {
  it('fetches on mount, reads the variables at fetch time, and fetches again only on refetch', async () => {
    const client = new QueryClient();
    const variables = vi.fn(() => recordedVariables);
    const { result, rerender } = renderHook(() => useCountryLocalityStatisticsQuery('AR', variables), {
      wrapper: providerOf(client),
    });
    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });
    expect(result.current.data?.countryName).toBe('Argentina');
    expect(result.current.data?.localities).toHaveLength(3);
    rerender();
    rerender();
    expect(variables).toHaveBeenCalledTimes(1);
    expect(calls()).toEqual(['DataActionGetLocalityStatistics']);

    await result.current.refetch();
    expect(variables).toHaveBeenCalledTimes(2);
    expect(calls()).toEqual(['DataActionGetLocalityStatistics', 'DataActionGetLocalityStatistics']);
  });

  it('keeps the previous data while another country loads, and nothing after unmount', async () => {
    vi.spyOn(console, 'warn').mockImplementation(() => undefined); // the mock has no recording for BR
    const client = new QueryClient();
    const { result, rerender, unmount } = renderHook(
      ({ code }: { code: string }) => useCountryLocalityStatisticsQuery(code, () => recordedVariables),
      { wrapper: providerOf(client), initialProps: { code: 'AR' } },
    );
    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });
    rerender({ code: 'BR' });
    expect(result.current.isPlaceholderData).toBe(true);
    expect(result.current.data?.countryName).toBe('Argentina');
    await waitFor(() => {
      expect(result.current.isPlaceholderData).toBe(false);
    });
    unmount();
    await waitFor(() => {
      expect(client.getQueryCache().findAll({ queryKey: countryKeys.all })).toEqual([]);
    });
  });
});

describe('useCountryInfoQuery', () => {
  it('does not call the server before the screen asks, then fetches the address format once', async () => {
    const client = new QueryClient();
    const { result, rerender } = renderHook(
      ({ isRequested }: { isRequested: boolean }) => useCountryInfoQuery('US', isRequested),
      { wrapper: providerOf(client), initialProps: { isRequested: false } },
    );
    await new Promise((resolve) => setTimeout(resolve, 20));
    expect(result.current.fetchStatus).toBe('idle');
    expect(calls()).toEqual([]);

    rerender({ isRequested: true });
    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });
    expect(result.current.data?.addressFormat).toContain('[Address1]');
    expect(calls()).toEqual(['DataActionGetCountryInfo']);
  });

  it('does not retry a failed call', async () => {
    sessionStorage.setItem('mock:mock', 'error');
    const client = new QueryClient();
    const { result } = renderHook(() => useCountryInfoQuery('US', true), { wrapper: providerOf(client) });
    await waitFor(() => {
      expect(result.current.isError).toBe(true);
    });
    expect(calls()).toEqual(['DataActionGetCountryInfo']);
  });
});

describe('useAllCountriesQuery', () => {
  it('calls the server on each mount and keeps nothing in the cache (staleTime 0, gcTime 0)', async () => {
    const client = new QueryClient();
    const first = renderHook(() => useAllCountriesQuery(allCountriesInputs), { wrapper: providerOf(client) });
    await waitFor(() => {
      expect(first.result.current.isSuccess).toBe(true);
    });
    expect(first.result.current.data?.CountryList.List).toHaveLength(17);
    first.unmount();
    await waitFor(() => {
      expect(client.getQueryCache().find({ queryKey: countryKeys.allCountries(allCountriesInputs) })).toBeUndefined();
    });
    const second = renderHook(() => useAllCountriesQuery(allCountriesInputs), { wrapper: providerOf(client) });
    await waitFor(() => {
      expect(second.result.current.isSuccess).toBe(true);
    });
    expect(calls()).toEqual(['DataActionGetCacheInfo', 'DataActionGetCacheInfo']);
  });

  it('does not call the server when the caller disables it, and does not retry a failed call', async () => {
    const client = new QueryClient();
    const disabled = renderHook(() => useAllCountriesQuery(allCountriesInputs, { enabled: false }), {
      wrapper: providerOf(client),
    });
    await new Promise((resolve) => setTimeout(resolve, 20));
    expect(disabled.result.current.fetchStatus).toBe('idle');
    expect(calls()).toEqual([]);

    sessionStorage.setItem('mock:mock', 'error');
    const failed = renderHook(() => useAllCountriesQuery(allCountriesInputs), { wrapper: providerOf(client) });
    await waitFor(() => {
      expect(failed.result.current.isError).toBe(true);
    });
    expect(calls()).toEqual(['DataActionGetCacheInfo']);
  });
});

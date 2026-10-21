import { render, waitFor } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { CACHE_TYPE, clearMemoryCache, peekCacheableObject } from '../../../shell/memoryCache';
import { testCapturedVariants } from '../../test/capturedVariants';
import { CacheControl_AllCountries } from './CacheControl_AllCountries';
import * as stories from './CacheControl_AllCountries.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });
const calls = () =>
  (window.__osCalls ?? []).filter(
    (c) => c.owner === 'CacheControl_AllCountries' && c.action === 'DataActionGetCacheInfo',
  );

describe('CacheControl_AllCountries', () => {
  afterEach(() => {
    clearMemoryCache();
    window.__osCalls = [];
  });
  it('fetches the recorded list on a miss, caches it under UniqueCacheKey, then answers from the cache', async () => {
    const first = vi.fn();
    render(<CacheControl_AllCountries onResult={first} />);
    await waitFor(() => {
      expect(first).toHaveBeenCalledTimes(1);
    });
    const response = first.mock.calls[0]?.[0] as { CountryList: { List: unknown[] } };
    expect(response.CountryList.List.length).toBeGreaterThan(0);
    expect(peekCacheableObject(CACHE_TYPE.allCountries, 'Unique')).toEqual({ hit: true, value: response });
    expect(calls()[0]?.inputNames).toEqual(['CacheKey', 'CacheTypeId', 'TimeToLiveSeconds']);

    const second = vi.fn();
    render(<CacheControl_AllCountries onResult={second} />);
    expect(second).toHaveBeenCalledWith(response);
    expect(calls()).toHaveLength(1);
  });

  // last: its miss fetch may answer after the test ends
  testCapturedVariants(stories, captures);
});

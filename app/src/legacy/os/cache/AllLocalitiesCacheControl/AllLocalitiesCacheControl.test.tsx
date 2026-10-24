import { render, waitFor } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { clearMemoryCache, peekCacheableObject } from '@/api/client/cache';
import { localityCache } from '@/api/locality';
import { testCapturedVariants } from '@/test/capturedVariants';
import { AllLocalitiesCacheControl } from './AllLocalitiesCacheControl';
import * as stories from './AllLocalitiesCacheControl.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });
const calls = () =>
  (window.__osCalls ?? []).filter(
    (c) => c.owner === 'CacheControl_AllLocalities' && c.action === 'DataActionGetCacheInfo',
  );

describe('CacheControl_AllLocalities', () => {
  afterEach(() => {
    clearMemoryCache();
    window.__osCalls = [];
  });
  it('fetches the recorded list on a miss, caches it under UniqueCacheKey, then answers from the cache', async () => {
    const first = vi.fn();
    render(<AllLocalitiesCacheControl onResult={first} />);
    await waitFor(() => {
      expect(first).toHaveBeenCalledTimes(1);
    });
    const response = first.mock.calls[0]?.[0] as { LocalityList: { List: unknown[] } };
    expect(response.LocalityList.List.length).toBeGreaterThan(0);
    expect(peekCacheableObject(localityCache.allLocalities('Unique', 7200))).toEqual({ hit: true, value: response });
    expect(calls()[0]?.inputNames).toEqual(['CacheKey', 'CacheTypeId', 'TimeToLiveSeconds']);

    const second = vi.fn();
    render(<AllLocalitiesCacheControl onResult={second} />);
    expect(second).toHaveBeenCalledWith(response);
    expect(calls()).toHaveLength(1);
  });

  // last: its miss fetch may answer after the test ends
  testCapturedVariants(stories, captures);
});

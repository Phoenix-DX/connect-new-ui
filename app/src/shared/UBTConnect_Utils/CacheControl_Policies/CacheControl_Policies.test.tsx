import { render, waitFor } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { CACHE_TYPE, clearMemoryCache, peekCacheableObject } from '../../../shell/memoryCache';
import { testCapturedVariants } from '../../test/capturedVariants';
import { CacheControl_Policies } from './CacheControl_Policies';
import * as stories from './CacheControl_Policies.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });
const policyCalls = () =>
  (window.__osCalls ?? []).filter((c) => c.owner === 'CacheControl_Policies' && c.action === 'DataActionGetCacheInfo');

describe('CacheControl_Policies', () => {
  afterEach(() => {
    clearMemoryCache();
    window.__osCalls = [];
  });
  it('fetches on a miss, caches under UniqueCacheKey, then answers from the cache', async () => {
    const first = vi.fn();
    render(<CacheControl_Policies onResult={first} />);
    await waitFor(() => {
      expect(first).toHaveBeenCalledTimes(1);
    });
    const response: unknown = first.mock.calls[0]?.[0];
    expect(response).toHaveProperty('PolicyInformation_PrivacyPolicy');
    expect(peekCacheableObject(CACHE_TYPE.policies, 'Unique')).toEqual({ hit: true, value: response });
    expect(policyCalls()).toHaveLength(1);

    const second = vi.fn();
    render(<CacheControl_Policies onResult={second} />);
    expect(second).toHaveBeenCalledWith(response);
    expect(policyCalls()).toHaveLength(1);
  });

  it('uses its own CacheKey when given', async () => {
    const onResult = vi.fn();
    render(<CacheControl_Policies cacheKey="Other" onResult={onResult} />);
    await waitFor(() => {
      expect(onResult).toHaveBeenCalled();
    });
    expect(peekCacheableObject(CACHE_TYPE.policies, 'Other').hit).toBe(true);
    expect(policyCalls()[0]?.inputNames).toEqual(['CacheKey', 'CacheTypeId', 'TimeToLiveSeconds']);
  });

  // last: its miss fetch may answer after the test ends
  testCapturedVariants(stories, captures);
});

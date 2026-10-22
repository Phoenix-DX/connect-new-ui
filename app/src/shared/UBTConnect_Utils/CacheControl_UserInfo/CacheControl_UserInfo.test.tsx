import { render, waitFor } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { CACHE_TYPE, clearMemoryCache, peekCacheableObject } from '@/platform/storage/memoryCache';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import { CacheControl_UserInfo } from './CacheControl_UserInfo';
import * as stories from './CacheControl_UserInfo.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });
const calls = () =>
  (window.__osCalls ?? []).filter((c) => c.owner === 'CacheControl_UserInfo' && c.action === 'DataActionGetCacheInfo');

describe('CacheControl_UserInfo', () => {
  afterEach(() => {
    clearMemoryCache();
    window.__osCalls = [];
  });
  it('fetches the user information on a miss, caches it as DirectoryUser, then answers from the cache', async () => {
    const first = vi.fn();
    render(<CacheControl_UserInfo onResult={first} />);
    await waitFor(() => {
      expect(first).toHaveBeenCalledTimes(1);
    });
    const response: unknown = first.mock.calls[0]?.[0];
    expect(response).toHaveProperty('Directory_UserCurrent');
    expect(response).toHaveProperty('HasPoliciesToAccept', false);
    expect(peekCacheableObject(CACHE_TYPE.directoryUser, 'Unique')).toEqual({ hit: true, value: response });
    expect(calls()[0]?.inputNames).toEqual(['CacheKey', 'CacheTypeId']);

    const second = vi.fn();
    render(<CacheControl_UserInfo onResult={second} />);
    expect(second).toHaveBeenCalledWith(response);
    expect(calls()).toHaveLength(1);
  });

  // last: its miss fetch may answer after the test ends
  testCapturedVariants(stories, captures);
});

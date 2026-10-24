import { render, waitFor } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { clearMemoryCache, peekCacheableObject } from '@/api/client/cache';
import { memberCache } from '@/api/member';
import { testCapturedVariants } from '@/test/capturedVariants';
import { UserInfoCacheControl } from './UserInfoCacheControl';
import * as stories from './UserInfoCacheControl.stories';

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
    render(<UserInfoCacheControl onResult={first} />);
    await waitFor(() => {
      expect(first).toHaveBeenCalledTimes(1);
    });
    const response: unknown = first.mock.calls[0]?.[0];
    expect(response).toHaveProperty('Directory_UserCurrent');
    expect(response).toHaveProperty('HasPoliciesToAccept', false);
    expect(peekCacheableObject(memberCache.userInfo('Unique'))).toEqual({ hit: true, value: response });
    expect(calls()[0]?.inputNames).toEqual(['CacheKey', 'CacheTypeId']);

    const second = vi.fn();
    render(<UserInfoCacheControl onResult={second} />);
    expect(second).toHaveBeenCalledWith(response);
    expect(calls()).toHaveLength(1);
  });

  // last: its miss fetch may answer after the test ends
  testCapturedVariants(stories, captures);
});

import { render } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { appCache } from '@/api/app';
import { clearMemoryCache, putCacheableObject } from '@/api/client/cache';
import { testCapturedVariants } from '@/test/capturedVariants';
import { CacheControl } from './CacheControl';
import * as stories from './CacheControl.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('CacheControl', () => {
  afterEach(clearMemoryCache);
  testCapturedVariants(stories, captures);

  it('raises OnCacheHit with the cached object', () => {
    putCacheableObject(appCache.policies('Unique', 60), { cached: true });
    const onCacheHit = vi.fn();
    const onNonCacheHit = vi.fn();
    render(
      <CacheControl
        cacheTypeId={appCache.policiesType}
        cacheKey="Unique"
        onCacheHit={onCacheHit}
        onNonCacheHit={onNonCacheHit}
      />,
    );
    expect(onCacheHit).toHaveBeenCalledWith({ cached: true });
    expect(onNonCacheHit).not.toHaveBeenCalled();
  });

  it('raises OnNonCacheHit once on a miss', () => {
    const onCacheHit = vi.fn();
    const onNonCacheHit = vi.fn();
    const { rerender } = render(
      <CacheControl cacheTypeId={appCache.policiesType} cacheKey="Other" onNonCacheHit={onNonCacheHit} />,
    );
    rerender(<CacheControl cacheTypeId={appCache.policiesType} cacheKey="Other" onNonCacheHit={onNonCacheHit} />);
    expect(onNonCacheHit).toHaveBeenCalledTimes(1);
    expect(onCacheHit).not.toHaveBeenCalled();
  });
});

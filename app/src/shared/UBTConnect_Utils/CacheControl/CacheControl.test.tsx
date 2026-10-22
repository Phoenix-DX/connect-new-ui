import { render } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { CACHE_TYPE, clearMemoryCache, putCacheableObject } from '@/platform/storage/memoryCache';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import { CacheControl } from './CacheControl';
import * as stories from './CacheControl.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('CacheControl', () => {
  afterEach(clearMemoryCache);
  testCapturedVariants(stories, captures);

  it('raises OnCacheHit with the cached object', () => {
    putCacheableObject(CACHE_TYPE.policies, 'Unique', { cached: true }, 60);
    const onCacheHit = vi.fn();
    const onNonCacheHit = vi.fn();
    render(
      <CacheControl
        cacheTypeId={CACHE_TYPE.policies}
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
      <CacheControl cacheTypeId={CACHE_TYPE.policies} cacheKey="Other" onNonCacheHit={onNonCacheHit} />,
    );
    rerender(<CacheControl cacheTypeId={CACHE_TYPE.policies} cacheKey="Other" onNonCacheHit={onNonCacheHit} />);
    expect(onNonCacheHit).toHaveBeenCalledTimes(1);
    expect(onCacheHit).not.toHaveBeenCalled();
  });
});

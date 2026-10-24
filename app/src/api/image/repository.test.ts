import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { clearMemoryCache } from '@/api/client/cache';
import { fetchLegacySignedImageURL } from './repository';

/* The MSW mock of the test setup: Connect2_LegacyShared GetSignedImagesInBulk (MilestoneDetail/mocks.ts) echoes Id,
   Type and Size and answers the square placeholder for a Member image. */
const signedImageCalls = () =>
  (window.__osCalls ?? []).filter(
    (c) => c.module === 'Connect2_LegacyShared' && c.action === 'ActionGetSignedImagesInBulk',
  );

beforeEach(() => {
  sessionStorage.setItem('mock:latency', '0');
  window.__osCalls = [];
  clearMemoryCache();
});
afterEach(() => {
  sessionStorage.clear();
  clearMemoryCache();
});

describe('image repository', () => {
  it('fetchLegacySignedImageURL calls GetSignedImagesInBulk once and answers the signed URL', async () => {
    const url = await fetchLegacySignedImageURL('9101', 'Member', 'Small');
    expect(url).toMatch(/mock-images\/placeholder-square\.svg$/);
    expect(signedImageCalls()).toHaveLength(1);
  });

  it('keeps the URL in the memory cache: a second request makes no call', async () => {
    const first = await fetchLegacySignedImageURL('9101', 'Member', 'Small');
    const second = await fetchLegacySignedImageURL('9101', 'Member', 'Small');
    expect(second).toBe(first);
    expect(signedImageCalls()).toHaveLength(1);
  });

  it('puts the waiting keys of one window in one call', async () => {
    const urls = await Promise.all([
      fetchLegacySignedImageURL('9101', 'Member', 'Small'),
      fetchLegacySignedImageURL('9102', 'Member', 'Small'),
    ]);
    expect(urls.every((u) => u !== '')).toBe(true);
    expect(signedImageCalls()).toHaveLength(1);
  });

  it('answers "" without a call for a null entity id, a text that is not a number or an empty type', async () => {
    expect(await fetchLegacySignedImageURL('0', 'Member', 'Small')).toBe('');
    expect(await fetchLegacySignedImageURL('', 'Member', 'Small')).toBe('');
    expect(await fetchLegacySignedImageURL('abc', 'Member', 'Small')).toBe('');
    expect(await fetchLegacySignedImageURL('9101', '', 'Small')).toBe('');
    expect(signedImageCalls()).toHaveLength(0);
  });
});

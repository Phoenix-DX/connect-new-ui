import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { fetchFeedConfig } from './repository';

/* The MSW mock of the test setup: components/feed/FeedCms/mocks.ts (fictional: the app's own origin, no token). */
beforeEach(() => {
  sessionStorage.setItem('mock:latency', '0');
  window.__osCalls = [];
});
afterEach(() => {
  sessionStorage.clear();
});

describe('feed repository', () => {
  it('fetchFeedConfig calls DataActionGetFeedConfig of Embedded_FeedCMS with the two inputs of the block', async () => {
    const config = await fetchFeedConfig({ FeedItemId: '7', B2CTenant: 'tenant-a' });
    expect(window.__osCalls).toEqual([
      expect.objectContaining({
        module: 'UBTConnect_EmbedFeed',
        owner: 'Embedded_FeedCMS',
        action: 'DataActionGetFeedConfig',
        inputNames: ['B2CTenant', 'FeedItemId'],
      }),
    ]);
    expect(config).toEqual({
      BaseURL: window.location.origin,
      Token: '',
      TokenType: '',
      B2CClientId: '',
      B2CPolicy: '',
    });
  });
});

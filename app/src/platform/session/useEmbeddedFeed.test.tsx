import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { act, renderHook, waitFor } from '@testing-library/react';
import type { ReactNode } from 'react';
import { MemoryRouter, useLocation } from 'react-router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { feedKeys } from '@/api/feed';
import { setFlag } from '@/platform/flags/flags';
import { setClientVar } from './session';
import { useEmbeddedFeed } from './useEmbeddedFeed';

/* The flows of Feed_Embeded that use the platform (moved from the tests of the block, components/feed/EmbeddedFeed),
   inside a router on HomeFeed, with the MSW mock of DataActionGetFeedConfig (components/feed/FeedCms/mocks.ts). */

function setup(feedItemId?: string) {
  const client = new QueryClient();
  const wrapper = ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={client}>
      <MemoryRouter initialEntries={['/UBTConnect/HomeFeed']}>{children}</MemoryRouter>
    </QueryClientProvider>
  );
  const hook = renderHook(() => ({ flow: useEmbeddedFeed(feedItemId), at: useLocation() }), { wrapper });
  return { ...hook, client };
}
const feedConfigCalls = () => (window.__osCalls ?? []).filter((c) => c.action === 'DataActionGetFeedConfig');

beforeEach(() => {
  sessionStorage.setItem('mock:latency', '0');
  window.__osCalls = [];
});
afterEach(() => {
  sessionStorage.clear();
  setFlag('C2ExtendedShare', null);
  setFlag('C2EnableFeed', null);
  setClientVar('UBTConnect.Embedd_B2CTenant', '');
});

describe('Feed_Embeded flows (useEmbeddedFeed)', () => {
  it('TST flags: the feed and the extended share are on', () => {
    const { result } = setup();
    expect(result.current.flow.isFeedEnabled).toBe(true);
    expect(result.current.flow.hasExtendedShare).toBe(true);
  });

  it('fetches the feed configuration once with FeedItemId and the Embedd_B2CTenant client variable', async () => {
    setClientVar('UBTConnect.Embedd_B2CTenant', 'tenant-a');
    const { result, client } = setup('7');
    expect(result.current.flow.b2CTenant).toBe('tenant-a');
    await waitFor(() => {
      expect(result.current.flow.feedConfig).toMatchObject({ BaseURL: window.location.origin, Token: '' });
    });
    expect(feedConfigCalls()).toHaveLength(1);
    expect(feedConfigCalls()[0]).toMatchObject({ module: 'UBTConnect_EmbedFeed', owner: 'Embedded_FeedCMS' });
    expect(feedConfigCalls()[0]?.inputNames).toEqual(['B2CTenant', 'FeedItemId']);
    // the inputs are the query key: the call was sent with FeedItemId "7" and B2CTenant "tenant-a"
    expect(
      client.getQueryCache().find({ queryKey: feedKeys.config({ FeedItemId: '7', B2CTenant: 'tenant-a' }) }),
    ).toBeDefined();
  });

  it('GetHasFeedEnabled off: no DataActionGetFeedConfig (the block renders no Embedded_FeedCMS)', async () => {
    setFlag('C2EnableFeed', 'off');
    const { result } = setup();
    expect(result.current.flow.isFeedEnabled).toBe(false);
    await new Promise((resolve) => setTimeout(resolve, 0));
    expect(result.current.flow.feedConfig).toBeUndefined();
    expect(feedConfigCalls()).toHaveLength(0);
  });

  it('GetHasExtendedShare follows the flag C2ExtendedShare', () => {
    setFlag('C2ExtendedShare', 'off');
    const { result } = setup();
    expect(result.current.flow.hasExtendedShare).toBe(false);
  });

  it('Handle_Download opens the file through OpenInApp_TryOpenFileInApp (web fallback: a new tab)', () => {
    const open = vi.spyOn(window, 'open').mockReturnValue(null);
    const { result } = setup();
    result.current.flow.onDownloaded('https://example.test/doc.pdf', 'doc.pdf');
    expect(open).toHaveBeenCalledWith('https://example.test/doc.pdf', '_blank', 'noopener');
    open.mockRestore();
  });

  it('Handle_Share_Connect: after a yield, LegacyShareObject for the feed item', async () => {
    const { result } = setup();
    act(() => {
      result.current.flow.onShareToConnect('42', 'Item title');
    });
    expect(result.current.at.pathname).toBe('/UBTConnect/HomeFeed');
    await waitFor(() => {
      expect(result.current.at.pathname + result.current.at.search).toBe(
        '/UBTConnect/LegacyShareObject?In_ShareObjectTypeId=Feed&In_CustomTitle=Item%20title&In_ObjectId=42',
      );
    });
  });
});

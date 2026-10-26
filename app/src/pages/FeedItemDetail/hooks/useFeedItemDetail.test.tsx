import type { ReactNode } from 'react';
import { act, renderHook } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { beforeEach, describe, expect, it } from 'vitest';
import { resetNavigation } from '@/platform/navigation/testRouter';
import { freshPage } from '@/test/testSupport';
import { useFeedItemDetail } from './useFeedItemDetail';

/* The variables and the handlers of the feed item screen. useViewState needs a router. */
function Router({ children }: { children: ReactNode }) {
  return <MemoryRouter initialEntries={['/UBTConnect/FeedItemDetail?FeedItemId=7001']}>{children}</MemoryRouter>;
}

const renderShare = () => renderHook(() => useFeedItemDetail(), { wrapper: Router });

beforeEach(() => {
  freshPage();
  resetNavigation();
});

describe('useFeedItemDetail', () => {
  it('starts with the ShareSheet closed and empty variables', () => {
    const { result } = renderShare();
    expect(result.current).toMatchObject({
      isShareOpen: false,
      shareableObjectId: '',
      shareObjectTypeId: '',
      shareableFeedItem: {},
    });
  });

  it('Handler_ShareFeed opens the ShareSheet with the feed item', () => {
    const { result } = renderShare();
    act(() => {
      result.current.onShareFeed('7001', 'Item title', 'Item subtitle', 'https://example.test/item.png');
    });
    expect(result.current).toMatchObject({ isShareOpen: true, shareableObjectId: '7001', shareObjectTypeId: 'Feed' });
    expect(result.current.shareableFeedItem).toEqual({
      ConnectEntityTypeId: 'Feed Item',
      SignedURL: 'https://example.test/item.png',
      Title: 'Item title',
      Subtitle: 'Item subtitle',
    });
  });

  it('a second share replaces the four fields of the feed item', () => {
    const { result } = renderShare();
    act(() => {
      result.current.onShareFeed('7001', 'Item title', 'Item subtitle', 'https://example.test/item.png');
    });
    act(() => {
      result.current.onShareFeed('7002', 'Other title', '', '');
    });
    expect(result.current.shareableObjectId).toBe('7002');
    expect(result.current.shareableFeedItem).toEqual({
      ConnectEntityTypeId: 'Feed Item',
      SignedURL: '',
      Title: 'Other title',
      Subtitle: '',
    });
  });

  it('Handler_CloseShareSheet closes the ShareSheet and keeps the other variables', () => {
    const { result } = renderShare();
    act(() => {
      result.current.onShareFeed('7001', 'Item title', 'Item subtitle', '');
    });
    act(() => {
      result.current.onCloseShareSheet();
    });
    expect(result.current).toMatchObject({ isShareOpen: false, shareableObjectId: '7001', shareObjectTypeId: 'Feed' });
    expect(result.current.shareableFeedItem.Title).toBe('Item title');
  });
});

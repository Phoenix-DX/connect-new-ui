import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { act, fireEvent, render, screen } from '@testing-library/react';
import type { ReactNode } from 'react';
import { MemoryRouter, Route, Routes } from 'react-router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { setFlag } from '@/platform/flags/flags';
import { renderRoutes, resetNavigation } from '@/platform/navigation/testRouter';
import { freshPage } from '@/test/testSupport';
import type { FeedCmsProps } from '@/components/feed/FeedCms';
import type { ShareSheetContainerProps } from '@/containers/ShareSheet';
import FeedItemDetail from './FeedItemDetailPage';

/** In_UpdateDate of the ShareSheet: NullDate() in the view. */
const NULL_DATE = '1900-01-01';

/* Built from the compiled view only (no capture). The mock CMS never raises OnShare (D8 b), so Embedded_FeedCMS is
   replaced by its wrapper and its props are kept to raise the event; ShareSheet is replaced by its wrapper to read the
   inputs the screen gives it (its own behaviour is tested in shared/). */
const spy = vi.hoisted(() => ({
  feed: undefined as FeedCmsProps | undefined,
  sheet: undefined as ShareSheetContainerProps | undefined,
}));
vi.mock('@/components/feed/FeedCms', async () => {
  const { OSBlock } = await import('@/components/ui/os/OSBlock');
  return {
    FeedCms: (props: FeedCmsProps) => {
      spy.feed = props;
      return <OSBlock name="Blocks.Embedded_FeedCMS" id={props.id} />;
    },
  };
});
vi.mock('@/containers/ShareSheet', async () => {
  const { OSBlock } = await import('@/components/ui/os/OSBlock');
  return {
    ShareSheetContainer: (props: ShareSheetContainerProps & { children?: ReactNode }) => {
      spy.sheet = props;
      return (
        <OSBlock name="CW_Share.ShareSheet" id={props.id}>
          {props.children}
        </OSBlock>
      );
    },
  };
});

function renderScreen(search: string) {
  const client = new QueryClient({ defaultOptions: { queries: { retry: false } } });
  return render(
    <QueryClientProvider client={client}>
      <MemoryRouter initialEntries={[`/UBTConnect/FeedItemDetail${search}`]}>
        <Routes>
          <Route path="/UBTConnect/FeedItemDetail" element={<FeedItemDetail />} />
        </Routes>
      </MemoryRouter>
    </QueryClientProvider>,
  );
}

const blockNames = (c: HTMLElement) =>
  Array.from(c.querySelectorAll('[data-block]')).map((e) => e.getAttribute('data-block'));

describe('FeedItemDetail (FeedItemDetail.mvc.js)', () => {
  afterEach(() => {
    spy.feed = undefined;
    spy.sheet = undefined;
    setFlag('C2ExtendedShare', null);
    setFlag('C2EnableFeed', null);
  });

  it('renders Layout_DetailPage "Feed Item" with Feed_Embeded, CommonUI and the closed ShareSheet (view :280-471)', () => {
    const { container } = renderScreen('?FeedItemId=7001');
    expect(screen.getByText('Feed Item')).toBeInTheDocument();
    const blocks = blockNames(container);
    for (const name of [
      'Layouts.Layout_DetailPage',
      'Home.Feed_Embeded',
      'Blocks.Embedded_FeedCMS',
      'App_Common.CommonUI_InsideLayout',
      'CW_Share.ShareSheet',
      'CW_Share.ShareableObject_Generic',
    ]) {
      expect(blocks).toContain(name);
    }
    expect(spy.sheet).toMatchObject({
      id: '$b4',
      inIsOpen: false,
      inShareableObjectId: '',
      inShareObjectTypeId: '',
      inUpdateType: '',
      inUpdateDate: NULL_DATE,
    });
  });

  it('passes the FeedItemId input to Feed_Embeded → Embedded_FeedCMS (view :309-312)', () => {
    renderScreen('?FeedItemId=7001');
    expect(spy.feed?.feedItemId).toBe('7001');
  });

  it('FeedItemId absent: "" (model default :84-94)', () => {
    renderScreen('');
    expect(spy.feed?.feedItemId).toBe('');
  });

  it('Event_Share → Handler_ShareFeed opens the ShareSheet with the feed item (controller :563-674)', () => {
    renderScreen('?FeedItemId=7001');
    act(() => {
      spy.feed?.onOnShare?.('7001', 'Item title', 'Item subtitle', 'https://example.test/item.png');
    });
    expect(spy.sheet).toMatchObject({ inIsOpen: true, inShareableObjectId: '7001', inShareObjectTypeId: 'Feed' });
    expect(screen.getByText('Item title')).toBeInTheDocument();
  });

  it('Event_ClosedShareSheet → Handler_CloseShareSheet closes it (controller :518-562)', () => {
    renderScreen('?FeedItemId=7001');
    act(() => {
      spy.feed?.onOnShare?.('7001', 'Item title', 'Item subtitle', '');
    });
    act(() => {
      spy.sheet?.onEventClosedShareSheet?.();
    });
    expect(spy.sheet?.inIsOpen).toBe(false);
    expect(spy.sheet?.inShareableObjectId).toBe('7001');
  });
});

/* The page in the app frame on a memory router: the back arrow of the detail layout and the view cache. */
describe('FeedItemDetail page in the app frame', () => {
  const PATH = '/UBTConnect/FeedItemDetail';
  const routes = {
    '/UBTConnect/HomeFeed': <p>HomeFeed screen</p>,
    '/UBTConnect/Search': <p>Search screen</p>,
    [PATH]: <FeedItemDetail />,
  };

  beforeEach(() => {
    freshPage();
    resetNavigation();
  });
  afterEach(() => {
    spy.feed = undefined;
    spy.sheet = undefined;
  });

  it('the back arrow goes to the previous screen', async () => {
    const { router, at } = renderRoutes(routes, '/UBTConnect/HomeFeed');
    await act(() => router.navigate('/UBTConnect/Search'));
    await act(() => router.navigate(`${PATH}?FeedItemId=7001`));
    // The back arrow: the Icon block b1-$b2 of the layout header.
    const back = document.getElementById('b1-$b2')?.firstElementChild;
    if (back == null) throw new Error('back arrow not rendered');
    fireEvent.click(back);
    expect(await screen.findByText('Search screen')).toBeInTheDocument();
    expect(at()).toBe('/UBTConnect/Search');
  });

  it('a back navigation to the screen restores the share variables (view cache)', async () => {
    const { router, at } = renderRoutes(routes, `${PATH}?FeedItemId=7001`);
    act(() => {
      spy.feed?.onOnShare?.('7001', 'Item title', 'Item subtitle', '');
    });
    expect(spy.sheet).toMatchObject({ inIsOpen: true, inShareableObjectId: '7001', inShareObjectTypeId: 'Feed' });
    await act(() => router.navigate('/UBTConnect/Search'));
    expect(await screen.findByText('Search screen')).toBeInTheDocument();
    await act(() => router.navigate(-1));
    expect(at()).toBe(`${PATH}?FeedItemId=7001`);
    expect(spy.sheet).toMatchObject({ inIsOpen: true, inShareableObjectId: '7001', inShareObjectTypeId: 'Feed' });
    expect(screen.getByText('Item title')).toBeInTheDocument();
  });
});

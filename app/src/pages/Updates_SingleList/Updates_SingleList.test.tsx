import { fireEvent, screen, waitFor, within } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { leavingScrollAnchors, setPreloadObject, useOsNavigate } from '@/platform/navigation';
import { renderRoutes, resetNavigation } from '@/platform/navigation/testRouter';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { setSignedInUser } from '@/platform/session/session';
import { calledActions, freshPage, recordBodies } from '@/test/testSupport';
import Updates_SingleList from './Updates_SingleListPage';
import { captureScrollPosition, scrollFix } from './hooks/scrollAnchorNodes';

vi.mock('./hooks/scrollAnchorNodes', () => ({ captureScrollPosition: vi.fn(), scrollFix: vi.fn() }));

/* The page with its flows (useUpdatesSingleList) in the app frame on a memory router, with the MSW mocks of the test
   setup (pages/Updates_SingleList/mocks.ts: 88 fictional updates, 84 unread, none of today). The mock collection
   lives as long as this file: MarkAllAsRead writes to it, so that test runs last. MarkAsRead writes to the HomeFeed
   collection only (CR-Updates_SingleList-1). */
const PATH = '/UBTConnect/Updates_SingleList';
const FETCH = 'UBTConnect/Updates_SingleList/DataActionFetchUpdates';

/** The carousel route: it hands back the updates swiped there (EntitiesCarousel_SwippedItems), then goes back. */
function CarouselStub({ swiped }: { swiped: unknown }) {
  const navigate = useOsNavigate();
  return (
    <button
      type="button"
      onClick={() => {
        setPreloadObject(swiped);
        navigate(-1 as never);
      }}
    >
      back from the carousel
    </button>
  );
}

const rows = () => [...document.querySelectorAll('#List_Updates [data-block="ConnectCorePatterns.Update_ListItem"]')];
const unreadRows = () => rows().filter((r) => r.querySelector('[class*="--unread"]') !== null);
const listLoaded = async () => {
  await waitFor(() => {
    expect(document.getElementById('List_Updates')?.className).not.toContain('list-loading');
  });
};
const listHeaderTitle = () => document.getElementById('ListHeader')?.textContent ?? '';

function renderPage(swiped: unknown = []) {
  return renderRoutes(
    { [PATH]: <Updates_SingleList />, '/UBTConnect/HouseholdCarousel': <CarouselStub swiped={swiped} /> },
    PATH,
  );
}

beforeEach(() => {
  freshPage();
  resetNavigation();
  setSignedInUser(MOCK_USER_ID);
  leavingScrollAnchors.clear();
  vi.mocked(captureScrollPosition).mockClear();
  vi.mocked(scrollFix).mockClear();
});
afterEach(() => {
  setSignedInUser(null);
  sessionStorage.clear();
});

describe('Updates_SingleList page', () => {
  it('OnReady: GetDateRanges, then FetchUpdates; the list shows the updates under the first breakpoint', async () => {
    renderPage();
    expect(document.getElementById('List_Updates')?.className).toContain('list-loading');
    await listLoaded();
    const calls = calledActions().map((c) => c.split('/').pop());
    expect(calls.indexOf('DataActionGetDateRanges')).toBeGreaterThanOrEqual(0);
    expect(calls.indexOf('DataActionFetchUpdates')).toBeGreaterThan(calls.indexOf('DataActionGetDateRanges'));
    expect(rows()).toHaveLength(88);
    expect(unreadRows()).toHaveLength(84);
    expect(listHeaderTitle()).toContain('Last 7 Days');
    expect(screen.getByText('Mark All as Read')).toBeInTheDocument();
    expect(document.querySelector('.ubt-layout-main__title h2.header-title')?.textContent).toBe('Updates');
  });

  it('a search reloads the list with the text in Filter_Updates; the same text again does not', async () => {
    const bodies = recordBodies(FETCH);
    renderPage();
    await listLoaded();
    expect(bodies).toHaveLength(1);
    const input = screen.getByPlaceholderText('Search updates');
    fireEvent.change(input, { target: { value: 'Hughes' } });
    fireEvent.keyUp(input, { key: 'Enter' });
    await waitFor(() => {
      expect(bodies).toHaveLength(2);
    });
    await waitFor(() => {
      expect(bodies[1]).toMatchObject({ Filter_Updates: { Filter_SearchText: 'Hughes' } });
    });
    fireEvent.keyUp(input, { key: 'Enter' });
    await listLoaded();
    expect(bodies).toHaveLength(2);
  });

  it('a type tag reloads the list with that type', async () => {
    const bodies = recordBodies(FETCH);
    renderPage();
    await listLoaded();
    const tagList = document.querySelector<HTMLElement>('[id="$b11"]');
    if (tagList === null) throw new Error('type tags not rendered');
    fireEvent.click(within(tagList).getByText('Marriage'));
    await waitFor(() => {
      expect(bodies[1]).toMatchObject({ Filter_Updates: { Filter_UpdateTypeId: 'Marriage' } });
    });
  });
});

describe('Updates_SingleList page, read state', () => {
  it('an update opens the carousel; back with swiped updates shows them read without a new fetch', async () => {
    const swiped = [
      { ListPosition: 4, EntityItemId: '980096' },
      { ListPosition: 6, EntityItemId: '980094' },
      { ListPosition: 7, EntityItemId: 'not this row' },
    ];
    const { at } = renderPage(swiped);
    await listLoaded();
    fireEvent.click(screen.getByText('Oscar & Emma Hughes'));
    await waitFor(() => {
      expect(at()).toBe('/UBTConnect/HouseholdCarousel?In_StartingHouseholdId=880098');
    });
    const fetches = calledActions().filter((c) => c.endsWith('DataActionFetchUpdates')).length;

    const backButton = await screen.findByText('back from the carousel');
    // The list screen leaves the document after the screen transition (a timer). While it is still there, its
    // CommonUiLayout back handler would run on the back click and redirect Home with its own timer; in a slow run
    // that happened. Wait until the screen has left, as in a fast run.
    await waitFor(() => {
      expect(document.getElementById('List_Updates')).toBeNull();
    });
    fireEvent.click(backButton);
    await listLoaded();

    expect(at()).toBe(PATH);
    // Row 2 was clicked (marked read before the navigation); rows 4 and 6 were swiped in the carousel.
    const isUnread = (i: number) => rows()[i]?.querySelector('[class*="--unread"]') !== null;
    expect([2, 4, 6, 7].map(isUnread)).toEqual([false, false, false, true]);
    expect(unreadRows()).toHaveLength(81);
    expect(calledActions().filter((c) => c.endsWith('DataActionFetchUpdates'))).toHaveLength(fetches);
  });

  it('a tap runs CaptureScrollPosition and RememberFocusedScrollAnchor; back runs ScrollFix with the tapped id once', async () => {
    // The test frame has no `.active-screen.screen-container`, so the two JS nodes are spied here; their own tests
    // cover the DOM work (scrollAnchorNodes.test.ts).
    const { at } = renderPage();
    await listLoaded();
    // US:1824-1831: the UpdateItemId of the tapped row (its ScrollAnchor) and the row index.
    const tappedRow = rows().findIndex((r) => r.textContent.includes('Oscar & Emma Hughes'));
    const anchors = [...document.querySelectorAll('#List_Updates [data-dx-scroll-anchor-id]')];
    const tappedId = anchors[tappedRow]?.getAttribute('data-dx-scroll-anchor-id') ?? '';
    expect(tappedId).not.toBe('');
    fireEvent.click(screen.getByText('Oscar & Emma Hughes'));
    await waitFor(() => {
      expect(at()).toBe('/UBTConnect/HouseholdCarousel?In_StartingHouseholdId=880098');
    });
    expect(vi.mocked(captureScrollPosition).mock.calls).toEqual([[tappedId]]);
    expect(leavingScrollAnchors.get('List_Updates')).toEqual({ index: tappedRow, offsetTop: 0 }); // NH:1620-1623
    expect(scrollFix).not.toHaveBeenCalled();

    const backButton = await screen.findByText('back from the carousel');
    await waitFor(() => {
      expect(document.getElementById('List_Updates')).toBeNull();
    });
    fireEvent.click(backButton);
    await listLoaded();
    // US:2359-2372: no entering anchor (HouseholdCarousel has no FocusScrollAnchorOnBack), so the view-cached
    // FocusedScrollAnchorId of the tap goes to ScrollFix, then it is "".
    await waitFor(() => {
      expect(scrollFix).toHaveBeenCalledWith(tappedId);
    });
    expect(scrollFix).toHaveBeenCalledTimes(1);
  });

  it('Mark All as Read: the service action, then FetchUpdates again; no unread update and no Mark All', async () => {
    renderPage();
    await listLoaded();
    fireEvent.click(screen.getByText('Mark All as Read'));
    await waitFor(() => {
      expect(unreadRows()).toHaveLength(0);
    });
    await waitFor(() => {
      expect(screen.queryByText('Mark All as Read')).toBeNull();
    });
    const calls = calledActions().map((c) => c.split('/').pop());
    const markAll = calls.indexOf('ServiceAPIAction_UI_UpdateItem_MarkAllAsRead');
    expect(markAll).toBeGreaterThan(0);
    expect(calls.lastIndexOf('DataActionFetchUpdates')).toBeGreaterThan(markAll);
  });
});

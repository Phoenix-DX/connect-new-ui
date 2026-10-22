import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import type { ReactNode } from 'react';
import { MemoryRouter } from 'react-router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { setFlag } from '@/platform/flags/flags';
import * as feedback from '@/platform/feedback';
import {
  getLocalBookmarkByObjectId,
  localBookmarksSchemas,
  memoryDatabase,
  setLocalBookmarksDatabase,
} from '@/platform/storage/localEntities';
import { setClientVar, setSignedInUser } from '@/platform/session/session';
import { freshPage } from '@/test/testSupport';
import { bookmarkServerActions, toggleBookmarkItem_C2 } from '@/shared/UBTConnect/lib/actions';
import { BookmarkCategory, Connect_Entity } from '@/shared/UBTConnect/lib/staticEntities';
import { Directory_EntityDetailsActions } from './Directory_EntityDetailsActions';
import { bookmarksCollection } from './mocks';

/* ToggleBookmarkItem_C2 (UBTConnect.controller.js:17105-17280) through callAction and the fictional mocks of
   AddBookmark2 / DeleteBookmarkByBookmarkId2 (CR-W4A-1): the server collection, the local entity row
   (UBTConnect_Bookmarks_MCS.LocalBookmark) and Bookmark_SendFeedbackMessage (UBTConnect_Utils.controller.js:92-149). */
const server = () => {
  if (!bookmarkServerActions) throw new Error('bookmark server actions not wired');
  return bookmarkServerActions;
};

describe('bookmark server actions (CR-W4A-1)', () => {
  beforeEach(() => {
    freshPage();
    setLocalBookmarksDatabase(memoryDatabase(localBookmarksSchemas()));
    setSignedInUser('990001');
  });
  afterEach(() => {
    setLocalBookmarksDatabase(null);
    setSignedInUser(null);
    vi.restoreAllMocks();
  });

  it('the mock user has no bookmarks at start', () => {
    expect(bookmarksCollection().all()).toEqual([]);
  });

  it('toggles on (AddBookmark2 → Create_LocalBookmark) and off (DeleteBookmarkByBookmarkId2 → local row deleted)', async () => {
    const show = vi.spyOn(feedback, 'showFeedbackMessage');

    await toggleBookmarkItem_C2('101', BookmarkCategory.Household, false, server());
    const [added] = bookmarksCollection().all();
    expect(added).toMatchObject({ BookmarkCategoryId: BookmarkCategory.Household, ItemId: '101' });
    expect(await getLocalBookmarkByObjectId('101')).toMatchObject({
      UserId: 990001,
      BookmarkId: added?.Id,
      BookmarkCategoryId: BookmarkCategory.Household,
      ItemId: '101',
      CreatedAtDateUtc: added?.DateCreatedUtc,
    });
    expect(show).toHaveBeenLastCalledWith('Added to your Bookmarks', feedback.PLATFORM_MESSAGE_TYPE.success);

    await toggleBookmarkItem_C2('101', BookmarkCategory.Household, true, server());
    expect(bookmarksCollection().all()).toEqual([]);
    expect((await getLocalBookmarkByObjectId('101')).Id).toBe('0');
    expect(show).toHaveBeenLastCalledWith('Removed from your Bookmarks', feedback.PLATFORM_MESSAGE_TYPE.success);
  });

  it('B4: an empty category is sent as is; Create_LocalBookmark writes nothing, so the next toggle cannot remove it', async () => {
    const show = vi.spyOn(feedback, 'showFeedbackMessage');

    await toggleBookmarkItem_C2('102', '', false, server());
    expect(bookmarksCollection().where((r) => r.ItemId === '102')).toMatchObject([{ BookmarkCategoryId: '' }]);
    expect((await getLocalBookmarkByObjectId('102')).Id).toBe('0'); // Create_LocalBookmark: nothing (BC:49)
    expect(show).toHaveBeenLastCalledWith('Added to your Bookmarks', feedback.PLATFORM_MESSAGE_TYPE.success);

    // GetLocalBookmarkByObjectId → empty record → DeleteBookmarkByBookmarkId2("0") → Success False (fictional mock)
    await toggleBookmarkItem_C2('102', '', true, server());
    expect(show).toHaveBeenLastCalledWith(
      'Bookmark could not be removed. Please try again later.',
      feedback.PLATFORM_MESSAGE_TYPE.error,
    );
  });

  it('a communication failure shows the error message and the action ends normally', async () => {
    const show = vi.spyOn(feedback, 'showFeedbackMessage');
    sessionStorage.setItem('mock:mock', 'error'); // ?mock=error: HTTP 500 → CommunicationException
    try {
      await expect(toggleBookmarkItem_C2('103', BookmarkCategory.Locality, false, server())).resolves.toEqual({
        Out_LocalBookmarkId: '0',
        Out_CreatedBookmarkId: '0',
      });
    } finally {
      sessionStorage.removeItem('mock:mock');
    }
    expect((await getLocalBookmarkByObjectId('103')).Id).toBe('0');
    expect(show).toHaveBeenLastCalledWith(
      'Bookmark could not be added. Please try again later.',
      feedback.PLATFORM_MESSAGE_TYPE.error,
    );
  });
});

/* The block's Handle_Bookmark (Directory_EntityDetailsActions.mvc.js:1388-1514) with the wired server actions; the menu
   reads Local_isBookmarked_C2 only while C2NewBookmarks is on (mvc.js:379-384). */
describe('Directory_EntityDetailsActions Bookmark / Unmark (CR-W4A-1)', () => {
  const wrap = (ui: ReactNode) => (
    <QueryClientProvider client={new QueryClient({ defaultOptions: { queries: { retry: false } } })}>
      <MemoryRouter>{ui}</MemoryRouter>
    </QueryClientProvider>
  );
  const household = (entityId: string, onChange: (isBookmarked: boolean) => void) =>
    render(
      wrap(
        <Directory_EntityDetailsActions
          entityType={Connect_Entity.Household}
          entityId={entityId}
          onOnChangeBookmark={onChange}
        />,
      ),
    );
  beforeEach(() => {
    freshPage();
    setLocalBookmarksDatabase(memoryDatabase(localBookmarksSchemas()));
    setSignedInUser('990001');
    setClientVar('UBTConnect.Bookmarks_IsSynched', true);
    setClientVar('UBTConnect.Notes_IsSynched', true);
  });
  afterEach(() => {
    setFlag('C2NewBookmarks', null);
    setLocalBookmarksDatabase(null);
    setSignedInUser(null);
    vi.restoreAllMocks();
  });

  it('C2NewBookmarks on: Bookmark adds (local row, message, Unmark), Unmark removes', async () => {
    setFlag('C2NewBookmarks', 'true');
    const show = vi.spyOn(feedback, 'showFeedbackMessage');
    const onChange = vi.fn();
    household('201', onChange);
    // OnReady: not bookmarked
    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith(false);
    });

    fireEvent.click(await screen.findByText('Bookmark'));
    expect(await screen.findByText('Unmark')).toBeInTheDocument();
    expect(onChange).toHaveBeenLastCalledWith(true);
    expect(await getLocalBookmarkByObjectId('201')).toMatchObject({
      BookmarkCategoryId: BookmarkCategory.Household,
      ItemId: '201',
    });
    expect(show).toHaveBeenLastCalledWith('Added to your Bookmarks', feedback.PLATFORM_MESSAGE_TYPE.success);

    fireEvent.click(screen.getByText('Unmark'));
    expect(await screen.findByText('Bookmark')).toBeInTheDocument();
    expect(onChange).toHaveBeenLastCalledWith(false);
    expect((await getLocalBookmarkByObjectId('201')).Id).toBe('0');
    expect(bookmarksCollection().where((r) => r.ItemId === '201')).toEqual([]);
    expect(show).toHaveBeenLastCalledWith('Removed from your Bookmarks', feedback.PLATFORM_MESSAGE_TYPE.success);
  });

  it('C2NewBookmarks off (TST), B4: AddBookmark2 gets an empty category, no local row, the label stays Bookmark', async () => {
    const show = vi.spyOn(feedback, 'showFeedbackMessage');
    const onChange = vi.fn();
    household('202', onChange);
    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith(false);
    });

    fireEvent.click(await screen.findByText('Bookmark'));
    await waitFor(() => {
      expect(onChange).toHaveBeenLastCalledWith(true);
    });
    expect(bookmarksCollection().where((r) => r.ItemId === '202')).toMatchObject([{ BookmarkCategoryId: '' }]);
    expect((await getLocalBookmarkByObjectId('202')).Id).toBe('0');
    expect(show).toHaveBeenLastCalledWith('Added to your Bookmarks', feedback.PLATFORM_MESSAGE_TYPE.success);
    expect(screen.getByText('Bookmark')).toBeInTheDocument();
    expect(screen.queryByText('Unmark')).toBeNull();
  });
});

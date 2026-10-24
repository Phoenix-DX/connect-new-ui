import { act, renderHook } from '@testing-library/react';
import { StrictMode, type ReactNode } from 'react';
import { MemoryRouter, type Location } from 'react-router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
  deleteBookmark,
  fetchBookmarkById,
  fetchBookmarkGroup,
  updateBookmarkNote,
  type Bookmark,
  type BookmarkByIdResult,
  type BookmarkGroupList,
} from '@/api/bookmark';
import { clearMemoryCache } from '@/api/client/cache';
import { SystemException, UserException } from '@/legacy/os/os-exceptions';
import { BOOKMARKED_ELSEWHERE, BOOKMARKED_PLACES } from '@/mocks/fictional/directory';
import { showFeedbackMessage } from '@/platform/feedback';
import { confirmAction, showUpgradePopUp } from '@/platform/feedback/dialogs';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { clearPreloadObject, getPreloadObject } from '@/platform/navigation/preload';
import { createBackEvent } from '@/platform/navigation/backQueue';
import { legacyDelete_LocalBookmarkByBookmarkId } from '@/platform/storage/localEntities';
import { getCachedMyBookmarks, putCachedMyBookmarks } from '@/lib/legacyShared/actions';
import { toCacheRecord } from './bookmarkGroupActions';
import { bookmarkGroupReducer } from './bookmarkGroupState';
import { useBookmarkGroup, type BookmarkGroupEvents, type BookmarkGroupFlags } from './useBookmarkGroup';

/** The reducer as a spy, so a test sees every state write. */
vi.mock('./bookmarkGroupState', async (importOriginal) => {
  const actual = await importOriginal<typeof import('./bookmarkGroupState')>();
  return { ...actual, bookmarkGroupReducer: vi.fn(actual.bookmarkGroupReducer) };
});
vi.mock('@/api/bookmark', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/api/bookmark')>()),
  fetchBookmarkGroup: vi.fn(),
  fetchBookmarkById: vi.fn(),
  deleteBookmark: vi.fn(),
  updateBookmarkNote: vi.fn(),
}));
vi.mock('@/platform/feedback', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback')>()),
  showFeedbackMessage: vi.fn(),
}));
vi.mock('@/platform/feedback/dialogs', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback/dialogs')>()),
  confirmAction: vi.fn(() => Promise.resolve(true)),
  showUpgradePopUp: vi.fn(() => Promise.resolve()),
}));
/* useFlowState and the event flows send a rejection to this flow handler. */
vi.mock('@/platform/feedback/flowErrors', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback/flowErrors')>()),
  raiseToFlowHandler: vi.fn(),
}));
vi.mock('@/platform/storage/localEntities', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/storage/localEntities')>()),
  legacyDelete_LocalBookmarkByBookmarkId: vi.fn(() => Promise.resolve()),
}));
/* A back navigation: the view cache restored the view. */
let restoredFromCache = false;
vi.mock('@/platform/navigation/hooks', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/navigation/hooks')>()),
  useWasRestoredFromCache: () => restoredFromCache,
}));

/* The flows of ScreenBlock_BookmarkGroup, with the bookmark calls, the messages, the dialogs, the device copy and the
   flow handler replaced by spies. The MyBookmarks cache and the preload object are the real ones. Households and places
   are fictional (src/mocks/fictional/directory.ts). */
const B = BOOKMARKED_ELSEWHERE;
const details = (d: Partial<Bookmark['details']> = {}): Bookmark['details'] => ({
  areasServed: '',
  childrenNames: '',
  countryName: '',
  householdCount: '0',
  isDeceased: false,
  isMainHall: false,
  localityId: '0',
  localityName: '',
  shareObjectTypeId: '',
  ...d,
});
const bookmark = (id: string, objectType: string, objectId: string, title: string, d = details()): Bookmark => ({
  id,
  objectId,
  objectType,
  title,
  image: '',
  note: '',
  recordDisabled: false,
  recordNotAvailable: false,
  dateCreatedUtc: `2026-01-${id.padStart(2, '0')}T00:00:00`,
  details: d,
});
const household = (id: string, h: { id: string; title: string; children: string; place: readonly string[] }) =>
  bookmark(
    id,
    'Contact',
    h.id,
    h.title,
    details({
      childrenNames: h.children,
      localityName: h.place[0] ?? '',
      countryName: h.place[1] ?? '',
      shareObjectTypeId: 'Household',
    }),
  );
const CONTACTS = [household('1', B.riley), household('2', B.ellis), household('3', B.fields)];
const LOCALITY = bookmark(
  '10',
  'Locality',
  '8001',
  BOOKMARKED_PLACES.locality1,
  details({ localityId: '8001', localityName: BOOKMARKED_PLACES.locality1, countryName: 'Argentina' }),
);
const SUPPER_MEETING = bookmark(
  '8',
  'Subdivision',
  '7001',
  BOOKMARKED_PLACES.mainHall,
  details({ householdCount: '12' }),
);
const ONESCHOOL = bookmark(
  '20',
  'OneSchool Global',
  '501',
  'OneSchool Global Lules Campus',
  details({ areasServed: 'Lules', countryName: 'Argentina', shareObjectTypeId: 'OneSchool Global' }),
);
const CAMPUS = bookmark('21', 'Campus&Co', '502', 'Campus&Co Lules');
const list = (rows: Bookmark[]): BookmarkGroupList => ({
  results: rows,
  total: String(rows.length),
  wasSearched: false,
});
const found = (item: Bookmark): BookmarkByIdResult => ({ item, isBookmarkFound: true });

/** An answer that the test gives later. */
function pending<T>(mock: { mockReturnValueOnce: (value: Promise<T>) => unknown }) {
  let resolve: (value: T) => void = () => undefined;
  let reject: (error: unknown) => void = () => undefined;
  mock.mockReturnValueOnce(
    new Promise<T>((res, rej) => {
      resolve = res;
      reject = rej;
    }),
  );
  return { resolve, reject };
}

const wrapper = ({ children }: { children: ReactNode }) => <MemoryRouter>{children}</MemoryRouter>;
const strictWrapper = ({ children }: { children: ReactNode }) => (
  <StrictMode>
    <MemoryRouter>{children}</MemoryRouter>
  </StrictMode>
);
const settle = () =>
  act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
  });
const location: Location = { pathname: '/UBTConnect/HomeFeed', search: '', hash: '', state: null, key: 'k' };
const backEvent = () => createBackEvent(location, false, () => undefined);
const cachedIds = (group: string) => getCachedMyBookmarks(group).bookmarks.map((b) => b.Id);

let events: BookmarkGroupEvents;
let flags: BookmarkGroupFlags;
const renderFlows = (bookmarkGroup = 'Contacts', strict = false) =>
  renderHook(() => useBookmarkGroup('$b1', { bookmarkGroup }, flags, events), {
    wrapper: strict ? strictWrapper : wrapper,
  });

beforeEach(() => {
  restoredFromCache = false;
  flags = { hasBookmarkNote: false, hasExtendedShare: true };
  events = {
    onNavigateToHouseholdCarousel: vi.fn(),
    onNavigateToCommunityBusinessCarousel: vi.fn(),
    onNavigateToLocality: vi.fn(),
    onNavigateToSubdivision: vi.fn(),
  };
  vi.mocked(fetchBookmarkGroup).mockResolvedValue(list(CONTACTS));
  vi.mocked(deleteBookmark).mockResolvedValue(true);
  vi.mocked(updateBookmarkNote).mockResolvedValue(true);
});
afterEach(() => {
  vi.clearAllMocks();
  clearMemoryCache();
  clearPreloadObject();
});

describe('useBookmarkGroup', () => {
  it('OnReady: fetching, then the rows, the total and the MyBookmarks cache of the group', async () => {
    const answer = pending<BookmarkGroupList>(vi.mocked(fetchBookmarkGroup));
    const { result } = renderFlows();
    expect(result.current.state.isFetchingBookmarks).toBe(true);
    expect(fetchBookmarkGroup).toHaveBeenCalledWith(
      expect.objectContaining({
        BookmarkGroup: 'Contacts',
        IsFetchingBookmarks: true,
        UpdatedTotal: '0',
        IsFromNavigationHistory: false,
        IsShareOpen: false,
      }),
    );
    answer.resolve(list(CONTACTS));
    await settle();
    expect(result.current.state).toMatchObject({ bookmarkedItems: CONTACTS, updatedTotal: '3' });
    expect(result.current.state.isFetchingBookmarks).toBe(false);
    expect(cachedIds('Contacts')).toEqual(['1', '2', '3']);
    expect(getCachedMyBookmarks('Contacts').bookmarks[0]).toEqual(toCacheRecord(CONTACTS[0] as Bookmark, 'Contacts'));
    expect(raiseToFlowHandler).not.toHaveBeenCalled();
  });

  it('StrictMode: OnReady fetches once and the rows come', async () => {
    const { result } = renderFlows('Contacts', true);
    await settle();
    expect(fetchBookmarkGroup).toHaveBeenCalledTimes(1);
    expect(result.current.state.bookmarkedItems).toEqual(CONTACTS);
    expect(result.current.state.isFetchingBookmarks).toBe(false);
  });

  it('a restored view takes the rows of the MyBookmarks cache and does not fetch', async () => {
    putCachedMyBookmarks(
      'Contacts',
      CONTACTS.slice(0, 2).map((row) => toCacheRecord(row, 'Contacts')),
    );
    restoredFromCache = true;
    const { result } = renderFlows();
    await settle();
    expect(fetchBookmarkGroup).not.toHaveBeenCalled();
    expect(result.current.state).toMatchObject({
      isFromNavigationHistory: true,
      updatedTotal: '2',
      isFetchingBookmarks: false,
    });
    expect(result.current.state.bookmarkedItems.map((b) => b.objectId)).toEqual([B.riley.id, B.ellis.id]);
  });

  it('a failed refresh: not fetching, an error message with the exception text; no flow handler', async () => {
    vi.mocked(fetchBookmarkGroup).mockRejectedValueOnce(new UserException('Request failed with an error'));
    const { result } = renderFlows();
    await settle();
    expect(result.current.state.isFetchingBookmarks).toBe(false);
    expect(showFeedbackMessage).toHaveBeenCalledWith('Request failed with an error', 3);
    expect(raiseToFlowHandler).not.toHaveBeenCalled();
  });

  it('a system exception of the refresh goes to the flow handler; the Spinner stays', async () => {
    const error = new SystemException('System failure');
    vi.mocked(fetchBookmarkGroup).mockRejectedValueOnce(error);
    const { result } = renderFlows();
    await settle();
    expect(vi.mocked(raiseToFlowHandler).mock.calls.map(([e]) => e)).toEqual([error]);
    expect(result.current.state.isFetchingBookmarks).toBe(true);
    expect(showFeedbackMessage).not.toHaveBeenCalled();
  });

  it('BookmarkToggle: the delete, the row out, total - 1, the message, the device copy and the cache', async () => {
    const { result } = renderFlows();
    await settle();
    act(() => {
      result.current.onBookmarkToggle('2', 1);
    });
    await settle();
    expect(deleteBookmark).toHaveBeenCalledWith('2');
    expect(result.current.state.bookmarkedItems.map((b) => b.id)).toEqual(['1', '3']);
    expect(result.current.state.updatedTotal).toBe('2');
    expect(showFeedbackMessage).toHaveBeenCalledWith('Removed from your Bookmarks', 1);
    expect(legacyDelete_LocalBookmarkByBookmarkId).toHaveBeenCalledWith('2');
    expect(cachedIds('Contacts')).toEqual(['1', '3']);
  });

  it('BookmarkToggle without Success: the info message, nothing else', async () => {
    vi.mocked(deleteBookmark).mockResolvedValueOnce(false);
    const { result } = renderFlows();
    await settle();
    act(() => {
      result.current.onBookmarkToggle('2', 1);
    });
    await settle();
    expect(showFeedbackMessage).toHaveBeenCalledWith('Bookmark could not be removed. Please try again later.', 0);
    expect(result.current.state.bookmarkedItems).toHaveLength(3);
    expect(legacyDelete_LocalBookmarkByBookmarkId).not.toHaveBeenCalled();
  });

  it('ShareItem: no share type → "Coming soon"; a disabled record → the audit and FreeSubscriptionAlert', async () => {
    const { result } = renderFlows();
    await settle();
    const row = CONTACTS[0] as Bookmark;
    act(() => {
      result.current.onShareItem(row, '', row.objectId, false, 'Household');
    });
    expect(showFeedbackMessage).toHaveBeenCalledWith('Coming soon', 0);
    act(() => {
      result.current.onShareItem(row, 'Household', row.objectId, true, 'Household');
    });
    await settle();
    expect(confirmAction).toHaveBeenCalledWith('b1-FreeSubscriptionAlert');
    expect(result.current.state.share.isOpen).toBe(false);
  });

  it('ShareItem with the extended share: the sheet opens for the row, and Event_ClosedShareSheet closes it', async () => {
    const { result } = renderFlows();
    await settle();
    const row = CONTACTS[0] as Bookmark;
    act(() => {
      result.current.onShareItem(row, 'Household', row.objectId, false, 'Household');
    });
    expect(result.current.state.share).toEqual({
      isOpen: true,
      objectId: B.riley.id,
      typeId: 'Household',
      object: {
        ConnectEntityTypeId: 'Household',
        Id: B.riley.id,
        Title: B.riley.title,
        Subtitle: B.riley.children,
        Location: 'Seattle, United States',
        SignedURL: '',
      },
    });
    act(() => {
      result.current.onCloseShareSheet();
    });
    expect(result.current.state.share.isOpen).toBe(false);
    expect(result.current.state.share.object.ConnectEntityTypeId).toBe('');
  });

  it('ShareItem of a OneSchool Global entity: the location from AreasServed and the photo', async () => {
    vi.mocked(fetchBookmarkGroup).mockResolvedValueOnce(list([{ ...ONESCHOOL, image: 'https://example.com/a.jpg' }]));
    const { result } = renderFlows('Entities');
    await settle();
    const row = result.current.state.bookmarkedItems[0] as Bookmark;
    act(() => {
      result.current.onShareItem(row, 'OneSchool Global', row.objectId, false, 'OneSchool Global');
    });
    expect(result.current.state.share.object).toMatchObject({
      Location: 'Lules, Argentina',
      SignedURL: 'https://example.com/a.jpg',
    });
  });

  it('ShareItem without the extended share: nothing opens', async () => {
    flags = { hasBookmarkNote: false, hasExtendedShare: false };
    const { result } = renderFlows();
    await settle();
    const row = CONTACTS[0] as Bookmark;
    act(() => {
      result.current.onShareItem(row, 'Household', row.objectId, false, 'Household');
    });
    expect(result.current.state.share.isOpen).toBe(false);
  });

  it('OnSaveBookmarkNote: the trimmed note to the server, the row and the cache; a failure shows a message', async () => {
    vi.mocked(updateBookmarkNote).mockResolvedValueOnce(false);
    const { result } = renderFlows();
    await settle();
    act(() => {
      result.current.onSaveBookmarkNote({ bookmarkId: '3', note: '  Call in May ' });
    });
    expect(updateBookmarkNote).toHaveBeenCalledWith('3', 'Call in May');
    expect(result.current.state.bookmarkedItems[2]?.note).toBe('Call in May');
    expect(getCachedMyBookmarks('Contacts').bookmarks[2]?.Note).toBe('Call in May');
    await settle();
    expect(showFeedbackMessage).toHaveBeenCalledWith('There was an error, please try again.', 3);
  });

  it('a Contacts row: GetBookmarkById, the carousel preload and NavigateTo_HouseholdCarousel', async () => {
    vi.mocked(fetchBookmarkById).mockResolvedValueOnce(found(CONTACTS[1] as Bookmark));
    const { result } = renderFlows();
    await settle();
    act(() => {
      result.current.onClickBookmarkedItem('2', 1);
    });
    await settle();
    expect(fetchBookmarkById).toHaveBeenCalledWith('2', false);
    expect(getPreloadObject()).toEqual({
      IsPreloaded: true,
      PreloadedCarouselItems: CONTACTS.map((b) => ({ Id: b.objectId, Name: b.title, IsDeceased: false, Image: '' })),
    });
    expect(events.onNavigateToHouseholdCarousel).toHaveBeenCalledWith(
      B.ellis.id,
      1,
      CONTACTS.map((b) => b.objectId),
    );
  });

  it('an Entities row: the community business preload and NavigateTo_CommunityBusinessCarousel', async () => {
    vi.mocked(fetchBookmarkGroup).mockResolvedValueOnce(list([ONESCHOOL, CAMPUS]));
    vi.mocked(fetchBookmarkById).mockResolvedValueOnce(found(ONESCHOOL));
    flags = { hasBookmarkNote: true, hasExtendedShare: true };
    const { result } = renderFlows('Entities');
    await settle();
    act(() => {
      result.current.onClickBookmarkedItem('20', 0);
    });
    await settle();
    expect(fetchBookmarkById).toHaveBeenCalledWith('20', true);
    expect(getPreloadObject()).toEqual({
      IsPreloaded: true,
      PreloadedCarouselItems: [
        { Id: '501', Name: ONESCHOOL.title, SignedURL: '', CommunityBusinessTypeId: 'OneSchool Global' },
        { Id: '502', Name: CAMPUS.title, SignedURL: '', CommunityBusinessTypeId: 'Campus&Co' },
      ],
    });
    expect(events.onNavigateToCommunityBusinessCarousel).toHaveBeenCalledWith('501', 0, 'OneSchool Global');
  });

  it('a Locations row: NavigateTo_Locality with the locality id, or NavigateTo_Subdivision', async () => {
    vi.mocked(fetchBookmarkGroup).mockResolvedValueOnce(list([SUPPER_MEETING, LOCALITY]));
    vi.mocked(fetchBookmarkById).mockResolvedValueOnce(found(LOCALITY)).mockResolvedValueOnce(found(SUPPER_MEETING));
    const { result } = renderFlows('Locations');
    await settle();
    act(() => {
      result.current.onClickBookmarkedItem('10', 1);
    });
    await settle();
    expect(events.onNavigateToLocality).toHaveBeenCalledWith('8001');
    act(() => {
      result.current.onClickBookmarkedItem('8', 0);
    });
    await settle();
    expect(events.onNavigateToSubdivision).toHaveBeenCalledWith('7001');
    expect(getPreloadObject()).toBeNull();
  });

  it('a row that is gone: the error message and a new fetch; not available or disabled: no navigation', async () => {
    const { result } = renderFlows();
    await settle();
    vi.mocked(fetchBookmarkById)
      .mockResolvedValueOnce({ item: bookmark('0', '', '', ''), isBookmarkFound: false })
      .mockResolvedValueOnce(found({ ...(CONTACTS[0] as Bookmark), recordNotAvailable: true }))
      .mockResolvedValueOnce(found({ ...(CONTACTS[0] as Bookmark), recordDisabled: true }));
    vi.mocked(fetchBookmarkGroup).mockResolvedValueOnce(list(CONTACTS.slice(1)));
    act(() => {
      result.current.onClickBookmarkedItem('1', 0);
    });
    await settle();
    expect(showFeedbackMessage).toHaveBeenCalledWith('That bookmark isn’t available', 3);
    expect(fetchBookmarkGroup).toHaveBeenCalledTimes(2);
    expect(result.current.state.bookmarkedItems).toHaveLength(2);
    act(() => {
      result.current.onClickBookmarkedItem('2', 0);
    });
    await settle();
    expect(showFeedbackMessage).toHaveBeenLastCalledWith('This household is no longer available.', 0);
    act(() => {
      result.current.onClickBookmarkedItem('2', 0);
    });
    await settle();
    expect(showUpgradePopUp).toHaveBeenCalledTimes(1);
    expect(events.onNavigateToHouseholdCarousel).not.toHaveBeenCalled();
  });

  it('BackNavigationHandler: Contacts preloads the rows for the previous screen; another group does not', async () => {
    const { result } = renderFlows();
    await settle();
    result.current.onBackNavigation(backEvent());
    expect(getPreloadObject()).toEqual(CONTACTS);
    clearPreloadObject();
    vi.mocked(fetchBookmarkGroup).mockResolvedValueOnce(list([LOCALITY]));
    const locations = renderFlows('Locations');
    await settle();
    locations.result.current.onBackNavigation(backEvent());
    expect(getPreloadObject()).toBeNull();
  });

  it('W23: after the unmount, the started OnReady writes the cache once and no state', async () => {
    const answer = pending<BookmarkGroupList>(vi.mocked(fetchBookmarkGroup));
    let renders = 0;
    const { unmount } = renderHook(
      () => {
        renders += 1;
        return useBookmarkGroup('$b1', { bookmarkGroup: 'Contacts' }, flags, events);
      },
      { wrapper: strictWrapper },
    );
    await settle();
    unmount();
    const rendersAtUnmount = renders;
    vi.mocked(bookmarkGroupReducer).mockClear();
    answer.resolve(list(CONTACTS));
    await settle();
    expect(fetchBookmarkGroup).toHaveBeenCalledTimes(1);
    expect(cachedIds('Contacts')).toEqual(['1', '2', '3']);
    expect(bookmarkGroupReducer).not.toHaveBeenCalled();
    expect(renders).toBe(rendersAtUnmount);
    expect(raiseToFlowHandler).not.toHaveBeenCalled();
  });

  it('W23: a failed refresh after the unmount still shows its message once, without a state write', async () => {
    const answer = pending<BookmarkGroupList>(vi.mocked(fetchBookmarkGroup));
    const { unmount } = renderFlows('Contacts', true);
    await settle();
    unmount();
    vi.mocked(bookmarkGroupReducer).mockClear();
    answer.reject(new UserException('Request failed with an error'));
    await settle();
    expect(showFeedbackMessage).toHaveBeenCalledTimes(1);
    expect(showFeedbackMessage).toHaveBeenCalledWith('Request failed with an error', 3);
    expect(bookmarkGroupReducer).not.toHaveBeenCalled();
  });

  it('W23: a BookmarkToggle that ends after the unmount: message, device copy and cache once, no state', async () => {
    const { result, unmount } = renderFlows('Contacts', true);
    await settle();
    const deleted = pending<boolean>(vi.mocked(deleteBookmark));
    act(() => {
      result.current.onBookmarkToggle('1', 0);
    });
    unmount();
    vi.mocked(bookmarkGroupReducer).mockClear();
    deleted.resolve(true);
    await settle();
    expect(showFeedbackMessage).toHaveBeenCalledTimes(1);
    expect(showFeedbackMessage).toHaveBeenCalledWith('Removed from your Bookmarks', 1);
    expect(legacyDelete_LocalBookmarkByBookmarkId).toHaveBeenCalledTimes(1);
    expect(cachedIds('Contacts')).toEqual(['2', '3']);
    expect(bookmarkGroupReducer).not.toHaveBeenCalled();
  });

  it('W23: a row click that ends after the unmount still navigates once', async () => {
    const { result, unmount } = renderFlows('Contacts', true);
    await settle();
    const answer = pending<BookmarkByIdResult>(vi.mocked(fetchBookmarkById));
    act(() => {
      result.current.onClickBookmarkedItem('3', 2);
    });
    unmount();
    answer.resolve(found(CONTACTS[2] as Bookmark));
    await settle();
    expect(events.onNavigateToHouseholdCarousel).toHaveBeenCalledTimes(1);
    expect(events.onNavigateToHouseholdCarousel).toHaveBeenCalledWith(
      B.fields.id,
      2,
      CONTACTS.map((b) => b.objectId),
    );
  });
});

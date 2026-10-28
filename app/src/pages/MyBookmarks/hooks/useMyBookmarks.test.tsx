import { act, renderHook } from '@testing-library/react';
import { StrictMode, type ReactNode } from 'react';
import { MemoryRouter } from 'react-router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
  fetchBookmarkById,
  fetchBookmarkGroupSummaries,
  type Bookmark,
  type BookmarkByIdResult,
  type BookmarkGroupSummaries,
  type GroupSummaryBookmark,
} from '@/api/bookmark';
import {
  CommunicationException,
  NotRegisteredException,
  ServerException,
  SystemException,
  UserException,
} from '@/legacy/os/exceptions';
import { PLATFORM_MESSAGE_TYPE, showFeedbackMessage } from '@/platform/feedback';
import { showUpgradePopUp } from '@/platform/feedback/dialogs';
import { IgnorableSystemException } from '@/legacy/os/os-exceptions';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { setPreloadObject } from '@/platform/navigation';
import { connect_LaunchDarkly_PermissionCheck } from '@/lib/ubtConnectUtils/actions';
import {
  emptyGroupSummary,
  INITIAL_MY_BOOKMARKS_STATE,
  myBookmarksReducer,
  type MyBookmarksState,
} from './myBookmarksState';
import { useMyBookmarks, type MyBookmarksEvents } from './useMyBookmarks';

/** The reducer as a spy, so a test sees every state write. */
vi.mock('./myBookmarksState', async (importOriginal) => {
  const actual = await importOriginal<typeof import('./myBookmarksState')>();
  return { ...actual, myBookmarksReducer: vi.fn(actual.myBookmarksReducer) };
});
vi.mock('@/api/bookmark', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/api/bookmark')>()),
  fetchBookmarkGroupSummaries: vi.fn(),
  fetchBookmarkById: vi.fn(),
}));
vi.mock('@/platform/feedback', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback')>()),
  showFeedbackMessage: vi.fn(),
}));
vi.mock('@/platform/feedback/dialogs', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback/dialogs')>()),
  showUpgradePopUp: vi.fn(() => Promise.resolve()),
}));
/* useFlowState sends a rejected OnReady to this flow handler. */
vi.mock('@/platform/feedback/flowErrors', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback/flowErrors')>()),
  raiseToFlowHandler: vi.fn(),
}));
vi.mock('@/platform/navigation', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/navigation')>()),
  setPreloadObject: vi.fn(),
}));
vi.mock('@/lib/ubtConnectUtils/actions', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/lib/ubtConnectUtils/actions')>()),
  connect_LaunchDarkly_PermissionCheck: vi.fn(() => false),
}));
/** A back navigation that the view cache restores (wasCurrentViewRestoredFromCache), with the saved variables. */
const viewCache = vi.hoisted((): { restored: boolean; saved: unknown } => ({ restored: false, saved: undefined }));
vi.mock('@/platform/navigation/hooks', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@/platform/navigation/hooks')>();
  return {
    ...actual,
    useWasRestoredFromCache: () => viewCache.restored,
    useViewState: <T,>(name: string, initial: T) => {
      const saved = viewCache.saved as T | undefined;
      return actual.useViewState(name, saved ?? initial);
    },
  };
});

/* The flows of ScreenBlock_MyBookmarks, with the calls, the messages, the pop-up, the preload and the flow handler
   replaced by spies. Fictional bookmarks. */
const row = (id: string, objectType: string, objectId: string, title: string): GroupSummaryBookmark => ({
  id,
  group: '',
  objectType,
  objectId,
  title,
  image: `https://images.example/${id}.jpg`,
  isDeceased: false,
  recordDisabled: false,
  recordNotAvailable: false,
});
const CONTACTS = [row('1', 'Contact', '501', 'Ashby, Tom & Ruth'), row('2', 'Contact', '502', 'Brennan, Leo & Ada')];
const ENTITIES = [row('5', 'Campus&Co', '77', 'Harbour Campus'), row('6', 'OneSchool Global', '78', 'Northfield')];
const SUMMARIES: BookmarkGroupSummaries = {
  contacts: { group: '', totalCount: '2', bookmarks: CONTACTS },
  locations: { group: '', totalCount: '1', bookmarks: [row('3', 'Locality', '801', 'Lakeside')] },
  communityBusinesses: { group: '', totalCount: '2', bookmarks: ENTITIES },
  allContacts: CONTACTS,
  allLocations: [row('3', '', '', '')],
  allCommunityBusiness: ENTITIES,
};

/** A GetBookmarkById answer: the bookmark with the given fields, found. */
const found = (fields: Partial<Bookmark>): BookmarkByIdResult => ({
  item: {
    id: '1',
    objectId: '501',
    objectType: 'Contact',
    title: 'Ashby, Tom & Ruth',
    image: '',
    note: '',
    recordDisabled: false,
    recordNotAvailable: false,
    dateCreatedUtc: '2026-01-28T00:00:00',
    details: {
      areasServed: '',
      childrenNames: '',
      countryName: '',
      householdCount: '0',
      isDeceased: false,
      isMainHall: false,
      localityId: '0',
      localityName: '',
      shareObjectTypeId: '',
    },
    ...fields,
  },
  isBookmarkFound: true,
});

const events = (): MyBookmarksEvents => ({
  onNavigateToHouseholds: vi.fn(),
  onNavigateToLocality: vi.fn(),
  onNavigateToSubdivision: vi.fn(),
  onNavigateToCommunityBusinessCarousel: vi.fn(),
});

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
/** A GetGroupSummaries answer that the test gives later. */
function pendingSummaries() {
  let resolve: (value: BookmarkGroupSummaries) => void = () => undefined;
  let reject: (error: unknown) => void = () => undefined;
  vi.mocked(fetchBookmarkGroupSummaries).mockReturnValueOnce(
    new Promise((res, rej) => {
      resolve = res;
      reject = rej;
    }),
  );
  return { resolve, reject };
}
/** A GetBookmarkById answer that the test gives later. */
function pendingBookmark() {
  let resolve: (value: BookmarkByIdResult) => void = () => undefined;
  vi.mocked(fetchBookmarkById).mockReturnValueOnce(
    new Promise((res) => {
      resolve = res;
    }),
  );
  return { resolve };
}
const sentVariables = (call: number) => vi.mocked(fetchBookmarkGroupSummaries).mock.calls[call]?.[0];
const raised = () => vi.mocked(raiseToFlowHandler).mock.calls.map(([error]) => error);
const ERROR = PLATFORM_MESSAGE_TYPE.error;

/** The hook after OnReady with SUMMARIES. */
async function loaded(ev = events()) {
  const view = renderHook(() => useMyBookmarks(ev), { wrapper });
  await settle();
  return { ...view, ev };
}

beforeEach(() => {
  viewCache.restored = false;
  viewCache.saved = undefined;
  vi.mocked(fetchBookmarkGroupSummaries).mockResolvedValue(SUMMARIES);
  vi.mocked(fetchBookmarkById).mockResolvedValue(found({}));
});
afterEach(() => {
  vi.clearAllMocks();
});

describe('useMyBookmarks: OnReady and RefreshBookmarkData', () => {
  it('a new visit: ClearLocalLists, fetching, GetGroupSummaries with every variable, then the summaries', async () => {
    const answer = pendingSummaries();
    const { result } = renderHook(() => useMyBookmarks(events()), { wrapper });
    await settle();
    expect(result.current.state).toEqual({ ...INITIAL_MY_BOOKMARKS_STATE, isFetchingBookmarks: true });
    expect(sentVariables(0)).toEqual({ ...INITIAL_MY_BOOKMARKS_STATE, isFetchingBookmarks: true });
    answer.resolve(SUMMARIES);
    await settle();
    expect(result.current.state).toEqual({
      ...INITIAL_MY_BOOKMARKS_STATE,
      ...SUMMARIES,
      hasBookmarks: true,
      isFetchingBookmarks: false,
    });
    expect(fetchBookmarkGroupSummaries).toHaveBeenCalledTimes(1);
    expect(showFeedbackMessage).not.toHaveBeenCalled();
    expect(raiseToFlowHandler).not.toHaveBeenCalled();
  });

  it('StrictMode: OnReady runs once and the summaries come', async () => {
    const { result } = renderHook(() => useMyBookmarks(events()), { wrapper: strictWrapper });
    await settle();
    expect(fetchBookmarkGroupSummaries).toHaveBeenCalledTimes(1);
    expect(result.current.state.hasBookmarks).toBe(true);
  });

  it('a restored view: IsNavigationFromHistory, the lists kept and sent, then refreshed', async () => {
    const saved: MyBookmarksState = { ...INITIAL_MY_BOOKMARKS_STATE, ...SUMMARIES, hasBookmarks: true };
    viewCache.restored = true;
    viewCache.saved = saved;
    const answer = pendingSummaries();
    const rendered: MyBookmarksState[] = [];
    const { result } = renderHook(
      () => {
        const flows = useMyBookmarks(events());
        rendered.push(flows.state);
        return flows;
      },
      { wrapper },
    );
    // The first render shows the restored lists; OnReady then only sets IsFetchingBookmarks.
    expect(rendered[0]).toEqual({ ...saved, isNavigationFromHistory: true });
    expect(result.current.state).toEqual({ ...saved, isNavigationFromHistory: true, isFetchingBookmarks: true });
    await settle();
    expect(sentVariables(0)).toEqual({ ...saved, isNavigationFromHistory: true, isFetchingBookmarks: true });
    answer.resolve({ ...SUMMARIES, contacts: emptyGroupSummary() });
    await settle();
    expect(result.current.state.contacts).toEqual(emptyGroupSummary());
    expect(result.current.state.isNavigationFromHistory).toBe(true);
  });

  it('a failed request: HasNetworkError and "No internet connection…"', async () => {
    vi.mocked(fetchBookmarkGroupSummaries).mockRejectedValueOnce(
      new CommunicationException('Request failed with an error'),
    );
    const { result } = await loaded();
    expect(result.current.state).toMatchObject({ isFetchingBookmarks: false, hasNetworkError: true });
    expect(showFeedbackMessage).toHaveBeenCalledWith(
      'No internet connection. Please check your network setting and try again…',
      ERROR,
    );
    expect(raiseToFlowHandler).not.toHaveBeenCalled();
  });

  it('another CommunicationException: HasNetworkError and its own message', async () => {
    vi.mocked(fetchBookmarkGroupSummaries).mockRejectedValueOnce(
      new CommunicationException('The connection has timed out'),
    );
    const { result } = await loaded();
    expect(result.current.state.hasNetworkError).toBe(true);
    expect(showFeedbackMessage).toHaveBeenCalledWith('The connection has timed out', ERROR);
  });

  it('NotRegistered goes to the flow handler as NotRegistered; the block stays fetching', async () => {
    vi.mocked(fetchBookmarkGroupSummaries).mockRejectedValueOnce(new NotRegisteredException('Signed out'));
    const { result } = await loaded();
    expect(raised()).toHaveLength(1);
    expect(raised()[0]).toBeInstanceOf(NotRegisteredException);
    expect(raised()[0]).toMatchObject({ message: 'Signed out', specificType: 'NotRegistered' });
    expect(result.current.state.isFetchingBookmarks).toBe(true);
    expect(showFeedbackMessage).not.toHaveBeenCalled();
  });

  it('a distributed transaction: UserException1 goes to the flow handler, fetching stops', async () => {
    vi.mocked(fetchBookmarkGroupSummaries).mockRejectedValueOnce(
      new UserException('Cannot open a distributed transaction.'),
    );
    const { result } = await loaded();
    expect(raised()[0]).toBeInstanceOf(UserException);
    expect(raised()[0]).toMatchObject({ specificType: 'Connect2_MyBookmarks_MUI.UserException1' });
    expect(result.current.state).toMatchObject({ isFetchingBookmarks: false, hasNetworkError: false });
    expect(showFeedbackMessage).not.toHaveBeenCalled();
  });

  it('a timeout exception: HasNetworkError and its message; another exception: its message only', async () => {
    vi.mocked(fetchBookmarkGroupSummaries).mockRejectedValueOnce(new ServerException('The operation has timed out'));
    const first = await loaded();
    expect(first.result.current.state).toMatchObject({ isFetchingBookmarks: false, hasNetworkError: true });
    expect(showFeedbackMessage).toHaveBeenCalledWith('The operation has timed out', ERROR);
    first.unmount();
    vi.mocked(fetchBookmarkGroupSummaries).mockRejectedValueOnce(new UserException('Bookmarks are paused'));
    const second = await loaded();
    expect(second.result.current.state).toMatchObject({ isFetchingBookmarks: false, hasNetworkError: false });
    expect(showFeedbackMessage).toHaveBeenLastCalledWith('Bookmarks are paused', ERROR);
    expect(raiseToFlowHandler).not.toHaveBeenCalled();
  });

  it('a system exception goes to the flow handler as it is', async () => {
    const error = new SystemException('Out of order');
    vi.mocked(fetchBookmarkGroupSummaries).mockRejectedValueOnce(error);
    const { result } = await loaded();
    expect(raised()).toEqual([error]);
    expect(result.current.state.isFetchingBookmarks).toBe(true);
  });

  it('Try again: RefreshBookmarkData, without ClearLocalLists', async () => {
    vi.mocked(fetchBookmarkGroupSummaries).mockRejectedValueOnce(
      new CommunicationException('Request failed with an error'),
    );
    const { result } = await loaded();
    act(() => {
      result.current.onTryAgain();
    });
    expect(result.current.state).toMatchObject({ isFetchingBookmarks: true, hasNetworkError: true });
    await settle();
    expect(fetchBookmarkGroupSummaries).toHaveBeenCalledTimes(2);
    expect(result.current.state).toMatchObject({ isFetchingBookmarks: false, hasNetworkError: false });
    expect(result.current.state.hasBookmarks).toBe(true);
  });
});

describe('useMyBookmarks: NavigateTo_BookmarkedItem', () => {
  const click = async (
    result: { current: ReturnType<typeof useMyBookmarks> },
    id: string,
    position: number,
    objectType: string,
  ) => {
    act(() => {
      result.current.onBookmarkedItem(id, position, objectType);
    });
    await settle();
  };

  it('GetBookmarkById with the flag mobileDirectoryBookmarkNote', async () => {
    vi.mocked(connect_LaunchDarkly_PermissionCheck).mockReturnValueOnce(true);
    const { result } = await loaded();
    await click(result, '2', 1, 'Contact');
    expect(connect_LaunchDarkly_PermissionCheck).toHaveBeenCalledWith('mobileDirectoryBookmarkNote');
    expect(fetchBookmarkById).toHaveBeenCalledWith('2', true);
  });

  it('a household: the carousel preload of every contact, then NavigateTo_Households', async () => {
    vi.mocked(fetchBookmarkById).mockResolvedValueOnce(found({ id: '2', objectId: '502', title: 'Brennan' }));
    const { result, ev } = await loaded();
    await click(result, '2', 7, 'Contact');
    expect(setPreloadObject).toHaveBeenCalledWith({
      IsPreloaded: true,
      PreloadedCarouselItems: [
        { Id: '501', Name: 'Ashby, Tom & Ruth', IsDeceased: false, Image: 'https://images.example/1.jpg' },
        { Id: '502', Name: 'Brennan, Leo & Ada', IsDeceased: false, Image: 'https://images.example/2.jpg' },
      ],
    });
    // ItemPosition: the index of the household in AllContacts, not the album position.
    expect(ev.onNavigateToHouseholds).toHaveBeenCalledWith('502', '2', 1, '', ['501', '502']);
  });

  it('a locality and a supper meeting: their events, without a preload', async () => {
    vi.mocked(fetchBookmarkById)
      .mockResolvedValueOnce(found({ objectType: 'Locality', objectId: '801', title: 'Lakeside' }))
      .mockResolvedValueOnce(found({ objectType: 'Subdivision', objectId: '7001', title: 'Main Hall' }));
    const { result, ev } = await loaded();
    await click(result, '3', 0, 'Locality');
    expect(ev.onNavigateToLocality).toHaveBeenCalledWith('801', 'Lakeside', 0);
    await click(result, '4', 1, 'Subdivision');
    expect(ev.onNavigateToSubdivision).toHaveBeenCalledWith('7001');
    expect(setPreloadObject).not.toHaveBeenCalled();
  });

  it('an entity: the entity carousel preload, then NavigateTo_CommunityBusinessCarousel', async () => {
    vi.mocked(fetchBookmarkById).mockResolvedValueOnce(found({ objectType: 'OneSchool Global', objectId: '78' }));
    const { result, ev } = await loaded();
    await click(result, '6', 1, 'OneSchool Global');
    expect(setPreloadObject).toHaveBeenCalledWith({
      IsPreloaded: true,
      PreloadedCarouselItems: [
        {
          Id: '77',
          Name: 'Harbour Campus',
          SignedURL: 'https://images.example/5.jpg',
          CommunityBusinessTypeId: 'Campus&Co',
        },
        {
          Id: '78',
          Name: 'Northfield',
          SignedURL: 'https://images.example/6.jpg',
          CommunityBusinessTypeId: 'OneSchool Global',
        },
      ],
    });
    expect(ev.onNavigateToCommunityBusinessCarousel).toHaveBeenCalledWith('78', 'OneSchool Global', '2', 1);
  });

  it('a bookmark that is gone: the error message and a GetGroupSummaries refresh', async () => {
    vi.mocked(fetchBookmarkById).mockResolvedValueOnce({ ...found({ objectType: '' }), isBookmarkFound: false });
    vi.mocked(fetchBookmarkGroupSummaries)
      .mockResolvedValueOnce(SUMMARIES)
      .mockResolvedValueOnce({
        ...SUMMARIES,
        contacts: { group: '', totalCount: '1', bookmarks: [CONTACTS[0] as GroupSummaryBookmark] },
      });
    const { result, ev } = await loaded();
    await click(result, '2', 1, 'Contact');
    expect(showFeedbackMessage).toHaveBeenCalledWith('That bookmark isn’t available', ERROR);
    expect(fetchBookmarkGroupSummaries).toHaveBeenCalledTimes(2);
    expect(result.current.state.contacts.bookmarks).toHaveLength(1);
    expect(ev.onNavigateToHouseholds).not.toHaveBeenCalled();
  });

  it('a hidden record: the info message; a disabled record: the upgrade pop-up', async () => {
    vi.mocked(fetchBookmarkById)
      .mockResolvedValueOnce(found({ objectType: 'Subdivision', recordNotAvailable: true }))
      .mockResolvedValueOnce(found({ recordDisabled: true }));
    const { result, ev } = await loaded();
    await click(result, '4', 0, 'Subdivision');
    expect(showFeedbackMessage).toHaveBeenCalledWith(
      'This Supper Meeting is no longer available.',
      PLATFORM_MESSAGE_TYPE.info,
    );
    await click(result, '1', 0, 'Contact');
    expect(showUpgradePopUp).toHaveBeenCalledTimes(1);
    expect(ev.onNavigateToHouseholds).not.toHaveBeenCalled();
    expect(ev.onNavigateToSubdivision).not.toHaveBeenCalled();
  });

  it('a failed GetBookmarkById goes to the flow handler', async () => {
    const error = new CommunicationException('Request failed with an error');
    vi.mocked(fetchBookmarkById).mockRejectedValueOnce(error);
    const { result } = await loaded();
    await click(result, '1', 0, 'Contact');
    expect(raised()).toEqual([error]);
  });
});

/** The errors that reached the flow handler, without the ignorable ones (the handler drops them: R1, R3). */
const raisedErrors = () =>
  vi
    .mocked(raiseToFlowHandler)
    .mock.calls.map(([error]) => error)
    .filter((error) => !(error instanceof IgnorableSystemException));

describe('useMyBookmarks: unmount while a flow runs (flow scope, item 8)', () => {
  it('R1: OnReady, GetGroupSummaries fails after the unmount: the call once, no message, no raise, no state write', async () => {
    const answer = pendingSummaries();
    let renders = 0;
    const { unmount } = renderHook(
      () => {
        renders += 1;
        return useMyBookmarks(events());
      },
      { wrapper: strictWrapper },
    );
    await settle();
    unmount();
    const rendersAtUnmount = renders;
    vi.mocked(myBookmarksReducer).mockClear();
    answer.reject(new CommunicationException('Request failed with an error'));
    await settle();
    expect(fetchBookmarkGroupSummaries).toHaveBeenCalledTimes(1);
    expect(showFeedbackMessage).not.toHaveBeenCalled();
    expect(raisedErrors()).toEqual([]);
    expect(myBookmarksReducer).not.toHaveBeenCalled();
    expect(renders).toBe(rendersAtUnmount);
  });

  it('R1: OnReady, an answer after the unmount writes no state and raises nothing', async () => {
    const answer = pendingSummaries();
    const { unmount } = renderHook(() => useMyBookmarks(events()), { wrapper });
    await settle();
    unmount();
    vi.mocked(myBookmarksReducer).mockClear();
    answer.resolve(SUMMARIES);
    await settle();
    expect(myBookmarksReducer).not.toHaveBeenCalled();
    expect(raisedErrors()).toEqual([]);
  });

  it('R3: GetBookmarkById (a module action) answers after the unmount: the preload runs, the event does not', async () => {
    const answer = pendingBookmark();
    const { result, ev, unmount } = await loaded();
    act(() => {
      result.current.onBookmarkedItem('1', 0, 'Contact');
    });
    unmount();
    answer.resolve(found({}));
    await settle();
    expect(setPreloadObject).toHaveBeenCalledTimes(1);
    expect(ev.onNavigateToHouseholds).not.toHaveBeenCalled();
    expect(raisedErrors()).toEqual([]);
  });

  it('R5 + R1: a gone bookmark after the unmount: the message and the refresh call; its failure is dropped', async () => {
    const answer = pendingBookmark();
    const { result, unmount } = await loaded();
    act(() => {
      result.current.onBookmarkedItem('1', 0, 'Contact');
    });
    unmount();
    vi.mocked(myBookmarksReducer).mockClear();
    vi.mocked(fetchBookmarkGroupSummaries).mockRejectedValueOnce(new CommunicationException('Request failed'));
    answer.resolve({ ...found({}), isBookmarkFound: false });
    await settle();
    expect(showFeedbackMessage).toHaveBeenCalledTimes(1);
    expect(fetchBookmarkGroupSummaries).toHaveBeenCalledTimes(2);
    expect(myBookmarksReducer).not.toHaveBeenCalled();
    expect(raisedErrors()).toEqual([]);
  });
});

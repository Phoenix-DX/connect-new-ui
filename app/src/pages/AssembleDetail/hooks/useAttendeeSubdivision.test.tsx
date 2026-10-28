import { act, renderHook, waitFor } from '@testing-library/react';
import { StrictMode, type ReactNode } from 'react';
import { MemoryRouter, useLocation } from 'react-router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import type { AssembleAttendeeSubdivision } from '@/api/event';
import type { SubdivisionInformation } from '@/api/locality';
import { IgnorableSystemException } from '@/legacy/os/os-exceptions';
import { confirmAction } from '@/platform/feedback/dialogs/confirmAction';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { rememberFocusedScrollAnchor, setPreloadObject } from '@/platform/navigation';
import { resetNavigation } from '@/platform/navigation/testRouter';
import { enterView, saveView } from '@/platform/navigation/viewCache';
import { getLocalBookmarksByObjectType, type LegacyLocalBookmark } from '@/platform/storage/localEntities';
import { toggleBookmarkItem } from '@/lib/assemble/actions';
import { MyBookmarks_Group, MyBookmarks_ObjectType } from '@/lib/assemble/staticEntities';
import { getCacheableSubdivision_V2 } from '@/lib/legacyShared/actions';
import { maybeDisplaySubscriptionPopup } from '@/pages/AssembleDetail/components/actions';
import { attendeeSubdivisionReducer, SHARE_OBJECT_HOUSEHOLD, SKELETON_ID } from './attendeeSubdivisionState';
import { useAttendeeSubdivision, type AttendeeSubdivisionEvents } from './useAttendeeSubdivision';

vi.mock('@/lib/legacyShared/actions', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/lib/legacyShared/actions')>()),
  getCacheableSubdivision_V2: vi.fn(),
}));
vi.mock('@/platform/storage/localEntities', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/storage/localEntities')>()),
  getLocalBookmarksByObjectType: vi.fn(),
}));
/** The reducer as a spy, so a test sees every state write. */
vi.mock('./attendeeSubdivisionState', async (importOriginal) => {
  const actual = await importOriginal<typeof import('./attendeeSubdivisionState')>();
  return { ...actual, attendeeSubdivisionReducer: vi.fn(actual.attendeeSubdivisionReducer) };
});
vi.mock('@/pages/AssembleDetail/components/actions', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/pages/AssembleDetail/components/actions')>()),
  maybeDisplaySubscriptionPopup: vi.fn(),
}));
vi.mock('@/platform/feedback/dialogs/confirmAction', () => ({ confirmAction: vi.fn() }));
vi.mock('@/lib/assemble/actions', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/lib/assemble/actions')>()),
  toggleBookmarkItem: vi.fn(),
}));
vi.mock('@/platform/feedback/flowErrors', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback/flowErrors')>()),
  raiseToFlowHandler: vi.fn(),
}));
vi.mock('@/platform/navigation', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/navigation')>()),
  rememberFocusedScrollAnchor: vi.fn(),
  setPreloadObject: vi.fn(),
}));

/* The flows of AssembleEventDetail_AttendeeSubdivision with the module actions (GetCacheableSubdivision_V2, the local
   bookmarks, MaybeDisplaySubscriptionPopup, ConfirmAction, ToggleBookmarkItem, RememberFocusedScrollAnchor,
   SetPreloadObject) and the flow handler replaced by spies, on the real view cache. The hall and its household are
   fictional. */
const HALL: AssembleAttendeeSubdivision = {
  Id: '1210',
  Name: 'Zapiola (Main Meeting Room)',
  HouseholdCount: 1,
  LocalityId: '252',
  SubdivisionHouseholdList: [],
};
const INFO: SubdivisionInformation = {
  HouseholdListResponse: {
    List: [
      {
        Id: '91004',
        Name: 'Molina, Juan & Rosa',
        Family: 'Molina',
        Location: 'Bahia Blanca, Argentina',
        IsBookmarked: false,
        Photo340: { Bucket: 'b', Path: 'p/91004.jpg', Type: 'Photo', SignedURL: 'https://example.com/91004.jpg' },
      },
    ],
  },
  Subdivision: { Locality: { Id: '252', Country: { Code: 'AR' } } },
};
/** A legacy local bookmark of the household. */
const BOOKMARK: LegacyLocalBookmark = {
  Id: '1',
  UserId: 880101,
  BookmarkId: 'bm-91004',
  ObjectType: 'Contact',
  ObjectId: '91004',
  Group: 'Contacts',
  DateCreatedUtc: '2026-10-20T14:00:00Z',
  Note: '',
};
const FLAGS = { hasBookmarkNote: false, hasExtendedShare: false };
const EVENTS: AttendeeSubdivisionEvents = { onNavigateToShareObject: vi.fn(), onNavigateToHouseholdCarousel: vi.fn() };

const wrapper = ({ children }: { children: ReactNode }) => <MemoryRouter>{children}</MemoryRouter>;
const strictWrapper = ({ children }: { children: ReactNode }) => (
  <StrictMode>
    <MemoryRouter>{children}</MemoryRouter>
  </StrictMode>
);
/** Waits until GetCacheableSubdivision_V2 answered: the rows are the hall's households (the local bookmarks read
    starts right after this write). */
async function waitForHall(result: { current: ReturnType<typeof useAttendeeSubdivision> }) {
  await waitFor(() => {
    expect(ids(result.current.state.rows)).toEqual(['91004']);
    expect(result.current.state.localityId).toBe('252');
  });
}

/** The history entry of the memory router: the view cache keeps its saved view under this key. */
let entryKey = '';
function renderHall(strict = false) {
  return renderHook(
    () => {
      entryKey = useLocation().key;
      return useAttendeeSubdivision('b2-b4-b14-b1-0-$b3-0', HALL, FLAGS, EVENTS);
    },
    { wrapper: strict ? strictWrapper : wrapper },
  );
}
const ids = (rows: { Id: string }[]) => rows.map((r) => r.Id);

beforeEach(() => {
  resetNavigation();
  vi.mocked(getCacheableSubdivision_V2).mockResolvedValue(INFO);
  vi.mocked(getLocalBookmarksByObjectType).mockResolvedValue([]);
  vi.mocked(maybeDisplaySubscriptionPopup).mockResolvedValue(false);
  vi.mocked(confirmAction).mockResolvedValue(true);
  vi.mocked(toggleBookmarkItem).mockResolvedValue({ Out_LocalBookmarkId: '7', Out_CreatedBookmarkId: 'bm-91004' });
});
afterEach(() => {
  vi.clearAllMocks();
  resetNavigation();
});

describe('useAttendeeSubdivision: OnReady', () => {
  it('a new visit: the skeleton rows, GetCacheableSubdivision_V2, then the local bookmarks', async () => {
    const { result } = renderHall();
    expect(ids(result.current.state.rows)).toEqual([SKELETON_ID]);
    await waitForHall(result);
    expect(getCacheableSubdivision_V2).toHaveBeenCalledWith('1210');
    expect(result.current.state).toMatchObject({ countryCode: 'AR', localityId: '252' });
  });

  it('StrictMode: OnReady runs once and the rows come', async () => {
    const { result } = renderHall(true);
    await waitForHall(result);
    expect(getCacheableSubdivision_V2).toHaveBeenCalledTimes(1);
  });

  it('a back navigation: the saved hall, open, with no call; the local bookmarks are read again', async () => {
    const first = renderHall();
    await waitForHall(first.result);
    act(() => {
      first.result.current.onToggleSelected();
    });
    saveView(entryKey, undefined);
    first.unmount();
    enterView(entryKey, true, undefined);
    // A child screen bookmarked the household.
    vi.mocked(getLocalBookmarksByObjectType).mockResolvedValue([BOOKMARK]);
    const { result } = renderHall();
    expect(result.current.state.isSelected).toBe(true);
    expect(ids(result.current.state.rows)).toEqual(['91004']);
    await waitFor(() => {
      expect(result.current.state.rows[0]?.IsBookmarked).toBe(true);
    });
    expect(getLocalBookmarksByObjectType).toHaveBeenCalledTimes(2);
    expect(getCacheableSubdivision_V2).toHaveBeenCalledTimes(1);
    expect(result.current.state.isSelected).toBe(true);
  });

  it('a restored view without a saved state for the block (its locality was closed) calls as a new visit', async () => {
    renderHall().unmount();
    // The entry is saved while the block is not mounted: its saved view has no state of the block.
    saveView(entryKey, undefined);
    enterView(entryKey, true, undefined);
    const { result } = renderHall();
    expect(ids(result.current.state.rows)).toEqual([SKELETON_ID]);
    await waitForHall(result);
    expect(getCacheableSubdivision_V2).toHaveBeenCalledTimes(2);
  });
});

describe('useAttendeeSubdivision: OnParametersChanged', () => {
  it('a new hall record: the bookmark marks are read again, the rows stay, no new call', async () => {
    const { result, rerender } = renderHook(
      ({ hall }: { hall: AssembleAttendeeSubdivision }) =>
        useAttendeeSubdivision('b2-b4-b14-b1-0-$b3-0', hall, FLAGS, EVENTS),
      { wrapper, initialProps: { hall: HALL } },
    );
    await waitForHall(result);
    await waitFor(() => {
      expect(getLocalBookmarksByObjectType).toHaveBeenCalledTimes(1);
    });
    expect(result.current.state.rows[0]?.IsBookmarked).toBe(false);

    vi.mocked(getLocalBookmarksByObjectType).mockResolvedValue([BOOKMARK]);
    rerender({ hall: { ...HALL, Name: 'Zapiola (Annex)' } });
    await waitFor(() => {
      expect(result.current.state.rows[0]?.IsBookmarked).toBe(true);
    });
    expect(ids(result.current.state.rows)).toEqual(['91004']);
    expect(getCacheableSubdivision_V2).toHaveBeenCalledTimes(1);
  });
});

/** A module action that answers only when the test resolves or rejects it. */
function deferred<T>() {
  const call: { resolve: (value: T) => void; reject: (error: Error) => void; promise: Promise<T> } = {
    resolve: () => undefined,
    reject: () => undefined,
    promise: Promise.resolve() as Promise<T>,
  };
  call.promise = new Promise<T>((resolve, reject) => {
    call.resolve = resolve;
    call.reject = reject;
  });
  return call;
}
/** Lets the flows that started finish (their awaits resolve before the next task). */
const settle = () =>
  act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
  });
/** The errors that reached the flow handler, without the ignorable ones (the handler drops them: R1, R3). */
const raisedErrors = () =>
  vi
    .mocked(raiseToFlowHandler)
    .mock.calls.map(([error]) => error)
    .filter((error) => !(error instanceof IgnorableSystemException));
/** The flow scope that the raise of `error` carried (R6: the handler checks its context); `alive` is false after the
    unmount. */
const scopeOf = (error: unknown) =>
  vi.mocked(raiseToFlowHandler).mock.calls.find(([raised]) => raised === error)?.[1] as
    { active: () => boolean; alive: () => boolean } | undefined;
/** The hall with its household loaded; returns the view and the household row. */
async function renderLoadedHall() {
  const view = renderHall();
  await waitForHall(view.result);
  await settle();
  const row = view.result.current.state.rows[0];
  if (!row) throw new Error('no household row');
  return { ...view, row };
}
const LIST_WIDGET_ID = 'b2-b4-b14-b1-0-b3-0-List_SubdivisionHousehold';

describe('useAttendeeSubdivision: the household click (port gap N4)', () => {
  it('RememberFocusedScrollAnchor(List_SubdivisionHousehold, row number, Id), SetPreloadObject, then the event', async () => {
    const { result, row } = await renderLoadedHall();
    act(() => {
      result.current.onClickHousehold(row, 0);
    });
    await settle();
    expect(maybeDisplaySubscriptionPopup).toHaveBeenCalledWith('AR', '252');
    expect(rememberFocusedScrollAnchor).toHaveBeenCalledWith(LIST_WIDGET_ID, 0, '91004');
    expect(setPreloadObject).toHaveBeenCalledWith(['91004']);
    expect(EVENTS.onNavigateToHouseholdCarousel).toHaveBeenCalledWith(0, '91004');
    // TST order (AssembleEventDetail_AttendeeSubdivision.js:747-759): the anchor, the preload object, the event.
    const order = [
      vi.mocked(rememberFocusedScrollAnchor).mock.invocationCallOrder[0] ?? 0,
      vi.mocked(setPreloadObject).mock.invocationCallOrder[0] ?? 0,
      vi.mocked(EVENTS.onNavigateToHouseholdCarousel).mock.invocationCallOrder[0] ?? 0,
    ];
    expect(order).toEqual([...order].sort((a, b) => a - b));
  });

  it('the subscription popup shows: no anchor, no preload object, no event', async () => {
    vi.mocked(maybeDisplaySubscriptionPopup).mockResolvedValueOnce(true);
    const { result, row } = await renderLoadedHall();
    act(() => {
      result.current.onClickHousehold(row, 0);
    });
    await settle();
    expect(rememberFocusedScrollAnchor).not.toHaveBeenCalled();
    expect(setPreloadObject).not.toHaveBeenCalled();
    expect(EVENTS.onNavigateToHouseholdCarousel).not.toHaveBeenCalled();
  });
});

describe('useAttendeeSubdivision: the bookmark and the share', () => {
  it('a row that is not bookmarked: ConfirmAction(Bookmark_Note), ToggleBookmarkItem, then the row is bookmarked', async () => {
    const { result, row } = await renderLoadedHall();
    act(() => {
      result.current.onClickBookmarkButton(row, 0, false);
    });
    await settle();
    expect(confirmAction).toHaveBeenCalledWith('b2-b4-b14-b1-0-b3-0-Bookmark_Note');
    expect(toggleBookmarkItem).toHaveBeenCalledWith(
      false,
      MyBookmarks_ObjectType.Contact,
      '91004',
      MyBookmarks_Group.Contacts,
      '',
    );
    expect(result.current.state.rows[0]?.IsBookmarked).toBe(true);
  });

  it('share to Connect without C2ExtendedShare: NavigateTo_ShareObject(Household, Id, False)', async () => {
    const { result, row } = await renderLoadedHall();
    act(() => {
      result.current.onClickShareConnect(row);
    });
    await settle();
    expect(EVENTS.onNavigateToShareObject).toHaveBeenCalledWith(SHARE_OBJECT_HOUSEHOLD, '91004', false);
  });
});

describe('useAttendeeSubdivision after an unmount (flow scope, item 8)', () => {
  it('R3: unmount while GetCacheableSubdivision_V2 is pending: Set_SelectedAssembleAttendeeListBookmarks does not run', async () => {
    const info = deferred<SubdivisionInformation>();
    vi.mocked(getCacheableSubdivision_V2).mockReturnValueOnce(info.promise);
    const { unmount } = renderHall();
    await settle();
    unmount();
    vi.mocked(attendeeSubdivisionReducer).mockClear();
    info.resolve(INFO);
    await settle();
    expect(getLocalBookmarksByObjectType).not.toHaveBeenCalled();
    expect(attendeeSubdivisionReducer).not.toHaveBeenCalled();
    expect(raisedErrors()).toEqual([]);
  });

  it('R2: a GetCacheableSubdivision_V2 failure after the unmount (a module action) reaches the handler with the scope', async () => {
    const info = deferred<SubdivisionInformation>();
    vi.mocked(getCacheableSubdivision_V2).mockReturnValueOnce(info.promise);
    const { unmount } = renderHall();
    await settle();
    unmount();
    const error = new Error('Request failed with status 500');
    info.reject(error);
    await settle();
    expect(raisedErrors()).toEqual([error]);
    expect(scopeOf(error)?.alive()).toBe(false);
  });

  it('R2 + R3: unmount while MaybeDisplaySubscriptionPopup is pending: the module actions run, the event does not', async () => {
    const { result, row, unmount } = await renderLoadedHall();
    const popup = deferred<boolean>();
    vi.mocked(maybeDisplaySubscriptionPopup).mockReturnValueOnce(popup.promise);
    act(() => {
      result.current.onClickHousehold(row, 0);
    });
    unmount();
    popup.resolve(false);
    await settle();
    // RememberFocusedScrollAnchor and SetPreloadObject are NavigationHandler module actions: they run (the list
    // element is gone, so the real anchor action keeps nothing). The event stops at the screen handler (R3).
    expect(rememberFocusedScrollAnchor).toHaveBeenCalledWith(LIST_WIDGET_ID, 0, '91004');
    expect(setPreloadObject).toHaveBeenCalledWith(['91004']);
    expect(EVENTS.onNavigateToHouseholdCarousel).not.toHaveBeenCalled();
    expect(raisedErrors()).toEqual([]);
  });

  it('R2: unmount while ToggleBookmarkItem is pending: the bookmark is written, the row write and the raise are not', async () => {
    const { result, row, unmount } = await renderLoadedHall();
    const toggle = deferred<{ Out_LocalBookmarkId: string; Out_CreatedBookmarkId: string }>();
    vi.mocked(toggleBookmarkItem).mockReturnValueOnce(toggle.promise);
    act(() => {
      result.current.onClickBookmarkButton(row, 0, false);
    });
    await settle();
    unmount();
    vi.mocked(attendeeSubdivisionReducer).mockClear();
    toggle.resolve({ Out_LocalBookmarkId: '7', Out_CreatedBookmarkId: 'bm-91004' });
    await settle();
    expect(toggleBookmarkItem).toHaveBeenCalledTimes(1);
    expect(attendeeSubdivisionReducer).not.toHaveBeenCalled();
    expect(raisedErrors()).toEqual([]);
  });

  it('R2: a ToggleBookmarkItem failure after the unmount reaches the handler with the scope', async () => {
    const { result, row, unmount } = await renderLoadedHall();
    const toggle = deferred<{ Out_LocalBookmarkId: string; Out_CreatedBookmarkId: string }>();
    vi.mocked(toggleBookmarkItem).mockReturnValueOnce(toggle.promise);
    act(() => {
      result.current.onClickBookmarkButton(row, 0, false);
    });
    await settle();
    unmount();
    const error = new Error('Request failed with status 500');
    toggle.reject(error);
    await settle();
    expect(raisedErrors()).toEqual([error]);
    expect(scopeOf(error)?.alive()).toBe(false);
  });

  it('R2 + R3: unmount while MaybeDisplaySubscriptionPopup of the share is pending: NavigateTo_ShareObject is not triggered', async () => {
    const { result, row, unmount } = await renderLoadedHall();
    const popup = deferred<boolean>();
    vi.mocked(maybeDisplaySubscriptionPopup).mockReturnValueOnce(popup.promise);
    act(() => {
      result.current.onClickShareConnect(row);
    });
    unmount();
    popup.resolve(false);
    await settle();
    expect(EVENTS.onNavigateToShareObject).not.toHaveBeenCalled();
    expect(raisedErrors()).toEqual([]);
  });
});

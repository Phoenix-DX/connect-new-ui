import { act, renderHook, waitFor } from '@testing-library/react';
import type { ReactNode } from 'react';
import { MemoryRouter } from 'react-router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { fetchLocalityHouseholds, type LocalityHousehold } from '@/api/household';
import { BookmarkCategory } from '@/lib/ubtConnect/staticEntities';
import {
  localBookmarksSchemas,
  memoryDatabase,
  setLocalBookmarksDatabase,
  synchBookmarks,
  synchBookmarksC2,
} from '@/platform/storage/localEntities';
import { setSignedInUser } from '@/platform/session/session';
import { freshPage } from '@/test/testSupport';
import { MyBookmarks_ObjectType_Contact } from '@/pages/Locality_Details/components/staticEntities';
import { getLocal_Bookmark, getLocal_Bookmark_C2 } from '@/pages/Locality_Details/components/actions';
import { ControllerDisposedException } from '@/legacy/os/os-exceptions';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { localityHouseholdListReducer } from './localityBlocksState';
import { useLocalityHouseholdList } from './useLocalityHouseholdList';

vi.mock('@/api/household', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/api/household')>()),
  fetchLocalityHouseholds: vi.fn(),
}));
/** The local bookmark reads and the reducer as spies (the real functions run), so a test sees every read and write. */
vi.mock('@/pages/Locality_Details/components/actions', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@/pages/Locality_Details/components/actions')>();
  return {
    ...actual,
    getLocal_Bookmark: vi.fn(actual.getLocal_Bookmark),
    getLocal_Bookmark_C2: vi.fn(actual.getLocal_Bookmark_C2),
  };
});
vi.mock('./localityBlocksState', async (importOriginal) => {
  const actual = await importOriginal<typeof import('./localityBlocksState')>();
  return { ...actual, localityHouseholdListReducer: vi.fn(actual.localityHouseholdListReducer) };
});
vi.mock('@/platform/feedback/flowErrors', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback/flowErrors')>()),
  raiseToFlowHandler: vi.fn(),
}));

/* OnAfterFetch_GetLocalityHouseholds_Bookmarks (Locality_Households_HouseholdList.mvc.js:454-515): IsBookmarked of each
   row from the C2 local bookmarks (GetLocal_Bookmark_C2) when GetHasNewBookmarks, else from the legacy ones
   (GetLocal_Bookmark). Fictional households; the fetched IsBookmarked is true for both, so the test sees the local
   value. */
const USER = '990001';
const household = (householdId: string, householdName: string): LocalityHousehold => ({
  householdId,
  householdName,
  childrenNames: '',
  isBookmarked: true,
  localityName: 'Bahia Blanca',
  countryName: 'Argentina',
});
const HOUSEHOLDS = [household('7101', 'Fenwick, Arlo and Tamsin'), household('7102', 'Marlowe, Dorian and Ines')];
const wrapper = ({ children }: { children: ReactNode }) => <MemoryRouter>{children}</MemoryRouter>;
const renderList = (hasNewBookmarks: boolean) =>
  renderHook(() => useLocalityHouseholdList('252', {}, { hasCarouselEnabled: false, hasNewBookmarks }), { wrapper });

describe('useLocalityHouseholdList OnAfterFetch_GetLocalityHouseholds_Bookmarks', () => {
  beforeEach(async () => {
    freshPage();
    setLocalBookmarksDatabase(memoryDatabase(localBookmarksSchemas()));
    setSignedInUser(USER);
    vi.mocked(fetchLocalityHouseholds).mockResolvedValue(HOUSEHOLDS);
    // 7101 is a C2 bookmark only, 7102 a legacy bookmark only.
    await synchBookmarksC2([
      {
        Id: '1',
        UserId: Number(USER),
        BookmarkId: '501',
        BookmarkCategoryId: BookmarkCategory.Household,
        ItemId: '7101',
        CreatedAtDateUtc: '2026-10-01T08:00:00',
      },
    ]);
    await synchBookmarks([
      {
        Id: '2',
        UserId: Number(USER),
        BookmarkId: '502',
        ObjectType: MyBookmarks_ObjectType_Contact,
        ObjectId: '7102',
        Group: '',
        DateCreatedUtc: '2026-10-01T08:00:00',
        Note: '',
      },
    ]);
  });
  afterEach(() => {
    setLocalBookmarksDatabase(null);
    setSignedInUser(null);
    vi.mocked(fetchLocalityHouseholds).mockReset();
  });

  it('GetHasNewBookmarks on: IsBookmarked from GetLocal_Bookmark_C2 (the C2 local bookmarks)', async () => {
    const { result } = renderList(true);
    await waitFor(() => {
      expect(result.current.list.map((h) => [h.householdId, h.isBookmarked])).toEqual([
        ['7101', true],
        ['7102', false],
      ]);
    });
  });

  it('GetHasNewBookmarks off: IsBookmarked from the legacy GetLocal_Bookmark(Contact)', async () => {
    const { result } = renderList(false);
    await waitFor(() => {
      expect(result.current.list.map((h) => [h.householdId, h.isBookmarked])).toEqual([
        ['7101', false],
        ['7102', true],
      ]);
    });
  });
});

/* Flow scope (item 8): GetLocalityHouseholds is a data action (R1, Locality_Households_HouseholdList.js:346). When the
   block is disposed at the answer, the answer and the failure are dropped, and OnAfterFetch_..._Bookmarks does not run
   (:354, :476, :504). */
describe('useLocalityHouseholdList after an unmount (flow scope, item 8)', () => {
  /** GetLocalityHouseholds answers or fails only when the test says so. */
  function pendingCall() {
    let resolve: (value: LocalityHousehold[]) => void = () => undefined;
    let reject: (error: unknown) => void = () => undefined;
    vi.mocked(fetchLocalityHouseholds).mockReturnValue(
      new Promise((res, rej) => {
        resolve = res;
        reject = rej;
      }),
    );
    return { resolve, reject };
  }
  /** The errors that reached the flow handler, without the ignorable stop of a disposed block. */
  const raisedErrors = () =>
    vi
      .mocked(raiseToFlowHandler)
      .mock.calls.map(([error]) => error)
      .filter((error) => !(error instanceof ControllerDisposedException));
  const settle = () => act(() => new Promise((resolve) => setTimeout(resolve, 0)));

  beforeEach(() => {
    freshPage();
    setLocalBookmarksDatabase(memoryDatabase(localBookmarksSchemas()));
    setSignedInUser(USER);
    vi.clearAllMocks();
  });
  afterEach(() => {
    setLocalBookmarksDatabase(null);
    setSignedInUser(null);
    vi.mocked(fetchLocalityHouseholds).mockReset();
  });

  it('unmount while GetLocalityHouseholds is pending, the call answers: no bookmark read, no state write, no raise', async () => {
    const call = pendingCall();
    const { unmount } = renderList(true);
    unmount();
    vi.mocked(localityHouseholdListReducer).mockClear();
    call.resolve(HOUSEHOLDS);
    await settle();
    expect(getLocal_Bookmark_C2).not.toHaveBeenCalled();
    expect(getLocal_Bookmark).not.toHaveBeenCalled();
    expect(localityHouseholdListReducer).not.toHaveBeenCalled();
    expect(raisedErrors()).toEqual([]);
  });

  it('unmount while GetLocalityHouseholds is pending, the call fails: no state write, no raise', async () => {
    const call = pendingCall();
    const { unmount } = renderList(false);
    unmount();
    vi.mocked(localityHouseholdListReducer).mockClear();
    call.reject(new Error('Request failed with status 500'));
    await settle();
    expect(localityHouseholdListReducer).not.toHaveBeenCalled();
    expect(raisedErrors()).toEqual([]);
  });

  it('a failure while the block is there goes to the flow handler with the flow scope', async () => {
    const call = pendingCall();
    renderList(false);
    const error = new Error('Request failed with status 500');
    call.reject(error);
    await settle();
    expect(raiseToFlowHandler).toHaveBeenCalledWith(error, expect.anything());
  });
});

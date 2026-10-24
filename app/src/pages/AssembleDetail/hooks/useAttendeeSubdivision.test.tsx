import { act, renderHook, waitFor } from '@testing-library/react';
import { StrictMode, type ReactNode } from 'react';
import { MemoryRouter, useLocation } from 'react-router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import type { AssembleAttendeeSubdivision } from '@/api/event';
import type { SubdivisionInformation } from '@/api/locality';
import { resetNavigation } from '@/platform/navigation/testRouter';
import { enterView, saveView } from '@/platform/navigation/viewCache';
import { getLocalBookmarksByObjectType, type LegacyLocalBookmark } from '@/platform/storage/localEntities';
import { getCacheableSubdivision_V2 } from '@/lib/legacyShared/actions';
import { SKELETON_ID } from './attendeeSubdivisionState';
import { useAttendeeSubdivision, type AttendeeSubdivisionEvents } from './useAttendeeSubdivision';

vi.mock('@/lib/legacyShared/actions', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/lib/legacyShared/actions')>()),
  getCacheableSubdivision_V2: vi.fn(),
}));
vi.mock('@/platform/storage/localEntities', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/storage/localEntities')>()),
  getLocalBookmarksByObjectType: vi.fn(),
}));

/* The OnReady of AssembleEventDetail_AttendeeSubdivision with GetCacheableSubdivision_V2 and the local bookmarks
   replaced by spies, on the real view cache. The hall and its household are fictional. */
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

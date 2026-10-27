import { act, renderHook } from '@testing-library/react';
import { StrictMode, type ReactNode } from 'react';
import { MemoryRouter } from 'react-router';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import {
  fetchNoteCards,
  fetchNotePills,
  type NoteCardItem,
  type NoteCardPage,
  type NotePill,
  type NotesVariables,
} from '@/api/note';
import { CommunicationException } from '@/legacy/os/exceptions';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import {
  get_Note_DynamicFilter_YearOptions,
  getLocalNotesCategoryIds_ByUserId,
} from '@/platform/storage/localEntities';
import { scrollTop } from '@/lib/ubtConnect/actions';
import { INITIAL_NOTES_STATE, skeletonNotes, type NotesState } from './notesState';
import { useNotes } from './useNotes';

/* The flows of the Notes screen, with the two calls of api/note, the local note reads, the scroll, the navigation, the
   view cache and the flow handler replaced by spies. Fictional cards and categories. */
vi.mock('@/api/note', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/api/note')>()),
  fetchNoteCards: vi.fn(),
  fetchNotePills: vi.fn(),
}));
vi.mock('@/platform/storage/localEntities', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/storage/localEntities')>()),
  get_Note_DynamicFilter_YearOptions: vi.fn(),
  getLocalNotesCategoryIds_ByUserId: vi.fn(),
}));
vi.mock('@/platform/session/session', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/session/session')>()),
  currentUserId: () => '990001',
}));
vi.mock('@/lib/ubtConnect/actions', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/lib/ubtConnect/actions')>()),
  scrollTop: vi.fn(),
}));
vi.mock('@/platform/feedback/flowErrors', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback/flowErrors')>()),
  raiseToFlowHandler: vi.fn(),
}));
const navigate = vi.hoisted(() => vi.fn());
vi.mock('@/platform/navigation', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/navigation')>()),
  useOsNavigate: () => navigate,
}));
/** The view cache: a back navigation (wasCurrentViewRestoredFromCache) with saved variables, and the writes to it. */
const viewCache = vi.hoisted((): { restored: boolean; saved: unknown } => ({ restored: false, saved: undefined }));
const viewWrites = vi.hoisted(() => vi.fn());
vi.mock('@/platform/navigation/hooks', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@/platform/navigation/hooks')>();
  return {
    ...actual,
    useWasRestoredFromCache: () => viewCache.restored,
    useViewState: <T,>(name: string, initial: T) => {
      const saved = viewCache.saved as T | undefined;
      const [value, setValue] = actual.useViewState(name, saved ?? initial);
      return [
        value,
        (next: T) => {
          viewWrites(next);
          setValue(next);
        },
      ] as const;
    },
  };
});

const card = (id: string, title: string, noteCategoryId = 'Household'): NoteCardItem => ({
  id: `${noteCategoryId}-${id}`,
  itemId: id,
  noteCategoryId,
  title,
  subtitle: 'Northbrook',
  sourceHeader: { iconId: '', imageURL: '', initials: '', label: noteCategoryId },
  notes: { Total: 1, Note_Item_List: [{ Id: `5${id}`, Note: 'Bring the picnic blanket' }] },
});
const FENWICK = card('1', 'Fenwick Household');
const ASHDOWN = card('2', 'Ashdown Household');
const PILLS: NotePill[] = [
  { text: 'Household', identifier: 'Household' },
  { text: 'Supper Meeting', identifier: 'Supper Meeting' },
];
const TAGS = [
  { Text: 'All', Identifier: '', IsSelected: true, Enabled: true },
  { Text: 'Household', Identifier: 'Household', IsSelected: false, Enabled: true },
  { Text: 'Supper Meeting', Identifier: 'Supper Meeting', IsSelected: false, Enabled: true },
];
const page = (items: NoteCardItem[], total = String(items.length)): NoteCardPage => ({ total, items });

const wrapper = ({ children }: { children: ReactNode }) => <MemoryRouter>{children}</MemoryRouter>;
const strictWrapper = ({ children }: { children: ReactNode }) => (
  <StrictMode>
    <MemoryRouter>{children}</MemoryRouter>
  </StrictMode>
);
const renderFlows = () => renderHook(() => useNotes(), { wrapper });
/** Lets the flows that started finish (their awaits resolve before the next task). */
const settle = () =>
  act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
  });
/** An answer that the test gives later. */
function pending<T>() {
  let resolve: (value: T) => void = () => undefined;
  let reject: (error: unknown) => void = () => undefined;
  const promise = new Promise<T>((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return { promise, resolve, reject };
}
/** The variables that the nth DataActionGetNotes sent. */
const sentWith = (n = 0): NotesVariables => {
  const call = vi.mocked(fetchNoteCards).mock.calls[n];
  if (!call) throw new Error(`no GetNotes call ${String(n)}`);
  return call[0];
};
const order = (spy: (...args: never[]) => unknown, n = 0) => vi.mocked(spy).mock.invocationCallOrder[n] ?? Number.NaN;

beforeEach(() => {
  vi.clearAllMocks();
  viewCache.restored = false;
  viewCache.saved = undefined;
  vi.mocked(get_Note_DynamicFilter_YearOptions).mockResolvedValue(['2026', '2025']);
  vi.mocked(getLocalNotesCategoryIds_ByUserId).mockResolvedValue(['Household', 'Supper Meeting']);
  vi.mocked(fetchNotePills).mockResolvedValue(PILLS);
  vi.mocked(fetchNoteCards).mockResolvedValue(page([FENWICK, ASHDOWN]));
});

describe('useNotes: OnInitialize and OnReady', () => {
  it('starts with the skeletons, then Years, the pills, GetNotes and the pills again', async () => {
    const { result } = renderFlows();
    expect(result.current.state).toEqual(INITIAL_NOTES_STATE);
    await settle();
    expect(get_Note_DynamicFilter_YearOptions).toHaveBeenCalledTimes(1);
    expect(getLocalNotesCategoryIds_ByUserId).toHaveBeenCalledWith(990001);
    expect(fetchNotePills).toHaveBeenCalledTimes(2);
    expect(fetchNotePills).toHaveBeenCalledWith(['Household', 'Supper Meeting']);
    expect(fetchNoteCards).toHaveBeenCalledTimes(1);
    expect(order(get_Note_DynamicFilter_YearOptions)).toBeLessThan(order(fetchNotePills, 0));
    expect(order(fetchNotePills, 0)).toBeLessThan(order(fetchNoteCards));
    expect(order(fetchNoteCards)).toBeLessThan(order(fetchNotePills, 1));
    // DataActionGetNotes sends every screen variable, as they are when it starts.
    expect(sentWith()).toMatchObject({
      notesLoading: true,
      notePills: TAGS,
      years: ['2026', '2025'],
      pageNumber: 1,
      resetPillsValue: true,
      pillsLoaded: false,
      maxRecords: '0',
      notesList: skeletonNotes(),
    });
    expect(result.current.state).toMatchObject({
      years: ['2026', '2025'],
      isInitialized: true,
      notePills: TAGS,
      maxRecords: '2',
      notesList: [FENWICK, ASHDOWN],
      getNotesList: [FENWICK, ASHDOWN],
      pillsLoaded: true,
      resetPillsValue: false,
      notesLoading: false,
    });
    expect(raiseToFlowHandler).not.toHaveBeenCalled();
  });

  it('keeps the skeleton cards on screen while the second ResetPillsVallues runs, then shows the list', async () => {
    const secondPills = pending<NotePill[]>();
    vi.mocked(fetchNotePills).mockResolvedValueOnce(PILLS).mockReturnValueOnce(secondPills.promise);
    const { result } = renderFlows();
    await settle();
    expect(result.current.state).toMatchObject({
      notesLoading: true,
      notesList: skeletonNotes(),
      getNotesList: [FENWICK, ASHDOWN],
      pillsLoaded: false,
    });
    secondPills.resolve([PILLS[0] as NotePill]);
    await settle();
    expect(result.current.state).toMatchObject({
      notesLoading: false,
      notesList: [FENWICK, ASHDOWN],
      notePills: TAGS.slice(0, 2),
      pillsLoaded: true,
    });
  });

  it('a failed GetNotes_FilterYear goes to the flow handler and OnReady does not run', async () => {
    const failure = new Error('Local storage unavailable');
    vi.mocked(get_Note_DynamicFilter_YearOptions).mockRejectedValueOnce(failure);
    const { result } = renderFlows();
    await settle();
    expect(raiseToFlowHandler).toHaveBeenCalledWith(failure);
    expect(fetchNotePills).not.toHaveBeenCalled();
    expect(fetchNoteCards).not.toHaveBeenCalled();
    expect(result.current.state.isInitialized).toBe(false);
  });

  it('a failed GetNotes goes to the flow handler; the list stays loading', async () => {
    const failure = new CommunicationException('Request failed with status 500');
    vi.mocked(fetchNoteCards).mockRejectedValueOnce(failure);
    const { result } = renderFlows();
    await settle();
    expect(raiseToFlowHandler).toHaveBeenCalledWith(failure);
    expect(fetchNotePills).toHaveBeenCalledTimes(1);
    expect(result.current.state).toMatchObject({ notesLoading: true, pillsLoaded: false });
  });

  it('a back navigation starts again from OnInitialize: the port keeps no variable', async () => {
    viewCache.restored = true;
    viewCache.saved = {
      ...INITIAL_NOTES_STATE,
      notesList: [FENWICK],
      pillsLoaded: true,
      isInitialized: true,
    } satisfies NotesState;
    const { result } = renderFlows();
    expect(result.current.state).toEqual(INITIAL_NOTES_STATE);
    await settle();
    expect(fetchNoteCards).toHaveBeenCalledTimes(1);
    expect(result.current.state.notesList).toEqual([FENWICK, ASHDOWN]);
  });
});

describe('useNotes: the events of the blocks', () => {
  it('Handler_OnClickPill: the category of the selected pill, page 1, no pills reset, one GetNotes', async () => {
    const { result } = renderFlows();
    await settle();
    act(() => {
      result.current.onClickPill([
        { Text: 'All', Identifier: '', IsSelected: false },
        { Text: 'Supper Meeting', Identifier: 'Supper Meeting', IsSelected: true },
      ]);
    });
    expect(result.current.state).toMatchObject({ notesLoading: true, pageNumber: 1, resetPillsValue: false });
    await settle();
    expect(fetchNoteCards).toHaveBeenCalledTimes(2);
    expect(sentWith(1).notesFilter.noteCategoryId).toBe('Supper Meeting');
    expect(fetchNotePills).toHaveBeenCalledTimes(2);
    expect(result.current.state.notesLoading).toBe(false);
  });

  it('the search input: OnChange assigns the term, Submit refreshes, Clear empties the term and refreshes', async () => {
    const { result } = renderFlows();
    await settle();
    act(() => {
      result.current.onSearchChange('picnic');
    });
    expect(result.current.state.notesFilter.searchTerm).toBe('picnic');
    expect(fetchNoteCards).toHaveBeenCalledTimes(1);
    act(() => {
      result.current.onSearchSubmit();
    });
    await settle();
    expect(sentWith(1).notesFilter.searchTerm).toBe('picnic');
    act(() => {
      result.current.onSearchClear();
    });
    await settle();
    expect(sentWith(2).notesFilter.searchTerm).toBe('');
    expect(result.current.state.notesFilter.searchTerm).toBe('');
  });

  it('Handler_ApplyFilters takes only SortByNewest of the sheet, and HasFiltersApplied', async () => {
    const { result } = renderFlows();
    await settle();
    act(() => {
      result.current.onApplyFilters(
        { noteCategoryId: 'Ignored', searchTerm: 'ignored', sortByNewest: 'Choice.No', years: ['2025'] },
        true,
      );
    });
    await settle();
    expect(sentWith(1).notesFilter).toEqual({
      noteCategoryId: '',
      searchTerm: '',
      sortByNewest: 'Choice.No',
      years: [],
    });
    expect(result.current.state.hasFiltersApplied).toBe(true);
  });

  it('Notes_CardListOnLoadMore appends the next page; its Promise settles after the page fetch', async () => {
    vi.mocked(fetchNoteCards).mockResolvedValueOnce(page([FENWICK], '2'));
    const nextPage = pending<NoteCardPage>();
    vi.mocked(fetchNoteCards).mockReturnValueOnce(nextPage.promise);
    const { result } = renderFlows();
    await settle();
    let ended = false;
    act(() => {
      void result.current.onLoadMore().then(() => {
        ended = true;
      });
    });
    expect(fetchNoteCards).toHaveBeenCalledTimes(2);
    expect(sentWith(1).pageNumber).toBe(2);
    await settle();
    // The List of NoteCard_List waits for this Promise before it raises a new OnScrollEnding
    expect(ended).toBe(false);
    nextPage.resolve(page([ASHDOWN], '2'));
    await settle();
    expect(ended).toBe(true);
    expect(result.current.state).toMatchObject({ notesList: [FENWICK, ASHDOWN], maxRecords: '2', notesLoading: false });
    expect(fetchNotePills).toHaveBeenCalledTimes(2);
  });

  it('Notes_CardListOnLoadMore has no loading clause: an OnLoadMore during a page fetch asks for the next page', async () => {
    vi.mocked(fetchNoteCards).mockResolvedValueOnce(page([FENWICK], '3'));
    const nextPage = pending<NoteCardPage>();
    vi.mocked(fetchNoteCards).mockReturnValueOnce(nextPage.promise);
    vi.mocked(fetchNoteCards).mockReturnValueOnce(pending<NoteCardPage>().promise);
    const { result } = renderFlows();
    await settle();
    act(() => {
      void result.current.onLoadMore();
    });
    expect(result.current.state.notesLoading).toBe(true);
    act(() => {
      void result.current.onLoadMore();
    });
    expect(fetchNoteCards).toHaveBeenCalledTimes(3);
    expect(sentWith(2).pageNumber).toBe(3);
  });

  it('Notes_CardListOnLoadMore does nothing when the last page has MaxRecords cards', async () => {
    const { result } = renderFlows();
    await settle();
    act(() => {
      void result.current.onLoadMore();
    });
    expect(fetchNoteCards).toHaveBeenCalledTimes(1);
  });

  it('Handler_OnClickNoteCardItem opens the screen of a Household card; another category does nothing', async () => {
    const { result } = renderFlows();
    await settle();
    act(() => {
      result.current.onClickNoteCardItem('1', 'Household');
      result.current.onClickNoteCardItem('9', 'Locality');
    });
    expect(navigate).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledWith('/UBTConnect/HouseholdDetails', { HouseholdId: '1' });
  });

  it('the header scroll, the sheet events and the search icon', async () => {
    const { result } = renderFlows();
    await settle();
    act(() => {
      result.current.onHeaderScrolled(true);
      result.current.onFilterSheetInitialized('notes-filter-sheet');
      result.current.onFilterSheetLoaded(true);
      result.current.onScrollToTop();
    });
    expect(result.current.state).toMatchObject({
      headerIsScrolled: true,
      filterBottomSheetId: 'notes-filter-sheet',
      bottomSheetIdFilterIsLoaded: true,
      bottomSheetIdFilterShowSubscriptionOnClick: true,
    });
    expect(scrollTop).toHaveBeenCalledWith('.active-screen', 'instant');
    expect(fetchNoteCards).toHaveBeenCalledTimes(1);
  });
});

describe('useNotes after an unmount and in StrictMode (decision W23)', () => {
  it('runs OnInitialize and OnReady once in StrictMode', async () => {
    const { result } = renderHook(() => useNotes(), { wrapper: strictWrapper });
    await settle();
    expect(get_Note_DynamicFilter_YearOptions).toHaveBeenCalledTimes(1);
    expect(fetchNotePills).toHaveBeenCalledTimes(2);
    expect(fetchNoteCards).toHaveBeenCalledTimes(1);
    expect(result.current.state.notesList).toEqual([FENWICK, ASHDOWN]);
  });

  it('after the unmount, the started flow makes its calls once, with its variables, and writes no state', async () => {
    const firstPills = pending<NotePill[]>();
    vi.mocked(fetchNotePills).mockReturnValueOnce(firstPills.promise);
    let renders = 0;
    const { unmount } = renderHook(
      () => {
        renders += 1;
        return useNotes();
      },
      { wrapper: strictWrapper },
    );
    await settle();
    expect(fetchNotePills).toHaveBeenCalledTimes(1);
    unmount();
    const rendersAtUnmount = renders;
    viewWrites.mockClear();
    firstPills.resolve(PILLS);
    await settle();
    expect(fetchNoteCards).toHaveBeenCalledTimes(1);
    // The flow's assignments still change the variables that its calls send.
    expect(sentWith()).toMatchObject({ notesLoading: true, notePills: TAGS, years: ['2026', '2025'] });
    expect(fetchNotePills).toHaveBeenCalledTimes(2);
    expect(viewWrites).not.toHaveBeenCalled();
    expect(renders).toBe(rendersAtUnmount);
    expect(raiseToFlowHandler).not.toHaveBeenCalled();
  });

  it('an exception after the unmount still goes to the flow handler, once, without a state write', async () => {
    const getNotes = pending<NoteCardPage>();
    vi.mocked(fetchNoteCards).mockReturnValueOnce(getNotes.promise);
    const { unmount } = renderHook(() => useNotes(), { wrapper: strictWrapper });
    await settle();
    unmount();
    viewWrites.mockClear();
    const failure = new CommunicationException('The connection has timed out');
    getNotes.reject(failure);
    await settle();
    expect(raiseToFlowHandler).toHaveBeenCalledTimes(1);
    expect(raiseToFlowHandler).toHaveBeenCalledWith(failure);
    expect(viewWrites).not.toHaveBeenCalled();
  });

  it('OnReady does not start when the screen unmounts during OnInitialize', async () => {
    const years = pending<string[]>();
    vi.mocked(get_Note_DynamicFilter_YearOptions).mockReturnValueOnce(years.promise);
    const { unmount } = renderFlows();
    await settle();
    unmount();
    viewWrites.mockClear();
    years.resolve(['2026']);
    await settle();
    expect(fetchNotePills).not.toHaveBeenCalled();
    expect(fetchNoteCards).not.toHaveBeenCalled();
    expect(viewWrites).not.toHaveBeenCalled();
  });
});

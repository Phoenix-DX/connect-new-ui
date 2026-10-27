import { useEffect, useLayoutEffect, useRef } from 'react';
import { fetchNoteCards, fetchNotePills, type NotePillTag, type NotesFilter } from '@/api/note';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { useFlowState, useOsNavigate } from '@/platform/navigation';
import { currentUserId } from '@/platform/session/session';
import {
  get_Note_DynamicFilter_YearOptions,
  getLocalNotesCategoryIds_ByUserId,
} from '@/platform/storage/localEntities';
import { scrollTop } from '@/lib/ubtConnect/actions';
import type { Tag } from '@/lib/ubtConnectLibrary/structures';
import {
  canLoadMore,
  INITIAL_NOTES_STATE,
  noteCardTarget,
  notePillTags,
  notesReducer,
  selectedCategoryId,
  type NotesPatch,
  type NotesState,
} from './notesState';

/** What the page renders and the handlers of the events of its blocks. */
export interface NotesFlows {
  /** The screen variables (rendered). */
  state: NotesState;
  /** OnHeaderScrolled of the layout: HeaderIsScrolled. */
  onHeaderScrolled: (isHeaderScrolled: boolean) => void;
  /** The search icon of the scrolled header: ScrollTop of the screen. */
  onScrollToTop: () => void;
  /** Handler_SearchOnChange(CurrentString): the OnChange event of the search input. */
  onSearchChange: (text: string) => void;
  /** Handler_SearchOnClear: the ClearString event of the search input. */
  onSearchClear: () => void;
  /** The Submit event of the search input: Refresh_GetNotes. */
  onSearchSubmit: () => void;
  /** Handler_OnClickPill(UpdatedTagList): the Changed event of the pills. */
  onClickPill: (updatedTagList: Tag[]) => void;
  /** Handler_ApplyFilters: the ApplyFilters event of Notes_FilterSheet. */
  onApplyFilters: (filter: NotesFilter, hasFiltersApplied: boolean) => void;
  /** Notes_CardListOnLoadMore: the OnLoadMore event of NoteCard_List. The Promise settles when the action ends (after
      the page fetch), as the event handler of TST: the List waits for it. */
  onLoadMore: () => Promise<void>;
  /** Handler_OnClickNoteCardItem(ObjectId, ObjectType): the OnClick_NoteCardItem event of NoteCard_List. */
  onClickNoteCardItem: (objectId: string, objectType: string) => void;
  /** The SheetInilialized event of Notes_FilterSheet: Filter_BottomSheetId. */
  onFilterSheetInitialized: (sheetId: string) => void;
  /** The Loaded event of Notes_FilterSheet: BottomSheetId_Filter_IsLoaded, BottomSheetId_Filter_ShowSubscriptionOnClick. */
  onFilterSheetLoaded: (showSubscriptionOnClick: boolean) => void;
}

/** UBTConnect GetNotes_Pills: Get_Note_DynamicPills of UBTConnect_Notes_MCS (the user's distinct local note category
    ids, GetLocalNotesCategoryIds_ByUserId, then the server action Get_NotePills_ByNoteCategoryIds), as filter pills. */
async function getNotes_Pills(): Promise<NotePillTag[]> {
  const noteCategoryIds = await getLocalNotesCategoryIds_ByUserId(Number(currentUserId() ?? 0));
  return notePillTags(await fetchNotePills(noteCategoryIds));
}

/** The flows of the screen Notes (the screen controller).
    - OnInitialize: the default variables and the skeleton loaders (`INITIAL_NOTES_STATE`), then Years =
      GetNotes_FilterYear (the year options of the local notes). The port keeps no variable on a back navigation, so a
      view that the view cache restores starts from OnInitialize too.
    - OnReady (after OnInitialize, and only when the screen is still there): ResetPillsVallues, then Refresh_GetNotes.
    - Refresh_GetNotes: Notes_Loading, the refresh of DataActionGetNotes (refresh only; it sends every screen
      variable), then GetNotesOnAfterFetch: the first page replaces the list and the pills load (with a second
      ResetPillsVallues on the first fetch only); a next page is appended.
    - The pills, the search input, the filter sheet and the end of the list change the filter or the page, then refresh.
    - A card of a Household, a OneSchool Global or a Supper Meeting opens its screen.
    A failed flow goes to the screen's flow handler. Decision W23: a flow that started runs to its end; after an unmount
    it writes no screen state.
    @origin UBTConnect.Notes.Notes */
export function useNotes(): NotesFlows {
  const navigate = useOsNavigate();
  /* The `onReady` option runs after the first render: here it runs the part of OnInitialize that waits for the local
     notes (GetNotes_FilterYear), as the port did. It runs once per screen: StrictMode (dev) runs the mount effect again
     on the same screen, and the second call does nothing. */
  const initializeStarted = useRef(false);
  const { state, dispatch, latest } = useFlowState({
    viewName: 'Notes.Notes',
    reducer: notesReducer,
    initial: INITIAL_NOTES_STATE,
    restore: () => INITIAL_NOTES_STATE,
    parameters: null,
    // The flows are defined below; the hook calls the ones of the newest render.
    onReady: () => {
      if (initializeStarted.current) return Promise.resolve();
      initializeStarted.current = true;
      return onInitialize();
    },
  });

  /* Decision W23: after the unmount, a flow that started goes on and makes its calls, but writes no screen state and
     no view cache. Its assignments then change `afterUnmount` only: the variables that its next calls send, as before
     this step. The flag is set in a layout effect, so StrictMode (dev) turns it on again before the effects of the
     blocks, which raise the events, run again. */
  const mounted = useRef(true);
  useLayoutEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);
  const afterUnmount = useRef<NotesState | null>(null);
  /** The newest variables, which the flows read. */
  const m = (): NotesState => afterUnmount.current ?? latest.current;
  /** An assignment of a flow. */
  const set = (patch: NotesPatch) => {
    if (mounted.current) dispatch(patch);
    else afterUnmount.current = notesReducer(m(), patch);
  };
  /** Runs a screen action; an exception goes to the screen's flow handler. */
  const run = (flow: () => Promise<void>) => {
    flow().catch(raiseToFlowHandler);
  };

  /** ResetPillsVallues: GetNotes_Pills, then Note_Pills = its Out_Pills. */
  const resetPillsValues = async () => {
    const notePills = await getNotes_Pills();
    set({ notePills });
  };

  /** Refresh_GetNotes: Notes_Loading True, the refresh of DataActionGetNotes, then GetNotesOnAfterFetch. */
  const refreshGetNotes = async () => {
    set({ notesLoading: true });
    const out = await fetchNoteCards(m());
    set({ getNotesList: out.items });
    if (m().pageNumber !== 1) {
      set({ notesList: [...m().notesList, ...out.items], notesLoading: false });
      return;
    }
    /* The first page: MaxRecords, Notes_List, ResetPillsVallues when ResetPillsValue (the first fetch only), then
       PillsLoaded True, ResetPillsValue False and Notes_Loading False. The screen showed the new list together with
       the loaded pills, after the call of ResetPillsVallues: the call comes first and the assignments follow in one
       render. The call does not read the list. */
    if (m().resetPillsValue) await resetPillsValues();
    set({
      maxRecords: out.total,
      notesList: out.items,
      pillsLoaded: true,
      resetPillsValue: false,
      notesLoading: false,
    });
  };

  /** OnInitialize, after the skeleton loaders: Years = GetNotes_FilterYear. */
  const onInitialize = async () => {
    const years = await get_Note_DynamicFilter_YearOptions();
    set({ years, isInitialized: true });
  };

  /* OnReady: ResetPillsVallues, then Refresh_GetNotes. It runs once, after the render in which OnInitialize ended, so
     Notes_FilterSheet is there and has raised SheetInilialized: DataActionGetNotes sends its Filter_BottomSheetId. It
     does not run when the screen unmounted during OnInitialize. */
  const readyStarted = useRef(false);
  useEffect(() => {
    if (!state.isInitialized || readyStarted.current) return;
    readyStarted.current = true;
    run(async () => {
      await resetPillsValues();
      await refreshGetNotes();
    });
    // Runs once, when OnInitialize has ended; the flows read the newest variables.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.isInitialized]);

  return {
    state,
    onHeaderScrolled: (headerIsScrolled) => {
      set({ headerIsScrolled });
    },
    onScrollToTop: () => {
      scrollTop('.active-screen', 'instant');
    },
    onSearchChange: (searchTerm) => {
      set({ notesFilter: { ...m().notesFilter, searchTerm } });
    },
    onSearchClear: () => {
      set({ notesFilter: { ...m().notesFilter, searchTerm: '' } });
      run(refreshGetNotes);
    },
    onSearchSubmit: () => {
      run(refreshGetNotes);
    },
    onClickPill: (updatedTagList) => {
      set({
        notesFilter: { ...m().notesFilter, noteCategoryId: selectedCategoryId(updatedTagList) },
        pageNumber: 1,
        resetPillsValue: false,
      });
      run(refreshGetNotes);
    },
    /* Handler_ApplyFilters sets Notes_Filter.SortByNewest and HasFiltersApplied. On TST the sheet gets Notes_Filter
       as In_FilterNotes by reference (Notes.mvc.js:581) and its Handler_FilterSheetApplyFilters writes Years and
       SortByNewest into that same record (Notes_FilterSheet.mvc.js:384-401). So Notes_Filter.Years becomes the
       selected years, and Refresh_GetNotes sends them (capture 2026-10-27, Notes-110). The other fields stay. */
    onApplyFilters: (filter, hasFiltersApplied) => {
      set({
        notesFilter: { ...m().notesFilter, years: filter.years, sortByNewest: filter.sortByNewest },
        hasFiltersApplied,
      });
      run(refreshGetNotes);
    },
    onLoadMore: async () => {
      if (!canLoadMore(m())) return;
      set({ pageNumber: m().pageNumber + 1 });
      await refreshGetNotes().catch(raiseToFlowHandler);
    },
    onClickNoteCardItem: (objectId, objectType) => {
      const target = noteCardTarget(objectId, objectType);
      if (target) navigate(target.path, target.inputs);
    },
    onFilterSheetInitialized: (filterBottomSheetId) => {
      set({ filterBottomSheetId });
    },
    onFilterSheetLoaded: (showSubscriptionOnClick) => {
      set({ bottomSheetIdFilterIsLoaded: true, bottomSheetIdFilterShowSubscriptionOnClick: showSubscriptionOnClick });
    },
  };
}

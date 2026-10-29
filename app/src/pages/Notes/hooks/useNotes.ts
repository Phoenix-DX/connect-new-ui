import { useEffect, useRef } from 'react';
import { fetchNoteCards, fetchNotePills, type NotePillTag, type NotesFilter } from '@/api/note';
import { setPreloadObject, useFlowState, useOsNavigate } from '@/platform/navigation';
import { currentUserId } from '@/platform/session/session';
import { feedbackMessageAutoClose } from '@/platform/feedback/feedbackMessageAutoClose';
import { getLocalNotesCategoryIds_ByUserId } from '@/platform/storage/localEntities';
import { scrollTop } from '@/lib/ubtConnect/actions';
import type { Tag } from '@/lib/ubtConnectLibrary/structures';
import {
  canLoadMore,
  getNotes_FilterYear,
  INITIAL_NOTES_STATE,
  noteCardTarget,
  notePillTags,
  notesReducer,
  selectedCategoryId,
  unauthorizedObjectMessage,
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
  /** Handler_SearchOnSubmit (Notes.mvc.js:735-750): the Submit event of the search input, Refresh_GetNotes. */
  onSearchSubmit: () => void;
  /** Handler_OnClickPill(UpdatedTagList): the Changed event of the pills. */
  onClickPill: (updatedTagList: Tag[]) => void;
  /** Handler_ApplyFilters: the ApplyFilters event of Notes_FilterSheet. */
  onApplyFilters: (filter: NotesFilter, hasFiltersApplied: boolean) => void;
  /** Notes_CardListOnLoadMore: the OnLoadMore event of NoteCard_List. The Promise settles when the action ends (after
      the page fetch), as the event handler of TST: the List waits for it. */
  onLoadMore: () => Promise<void>;
  /** Handler_OnClickNoteCardItem(ObjectId, ObjectId2, ObjectType, HasDetailAccess): the OnClick_NoteCardItem event of
      NoteCard_List. */
  onClickNoteCardItem: (objectId: string, objectId2: string, objectType: string, hasDetailAccess: boolean) => void;
  /** The SheetInilialized event of Notes_FilterSheet: Filter_BottomSheetId. */
  onFilterSheetInitialized: (sheetId: string) => void;
  /** The Loaded event of Notes_FilterSheet: BottomSheetId_Filter_IsLoaded, BottomSheetId_Filter_ShowSubscriptionOnClick. */
  onFilterSheetLoaded: (showSubscriptionOnClick: boolean) => void;
}

/** UBTConnect GetNotes_Pills(In_SelectedPillId): Get_Note_DynamicPills of UBTConnect_Notes_MCS (the user's distinct
    local note category ids, GetLocalNotesCategoryIds_ByUserId, then the server action Get_NotePills_ByNoteCategoryIds),
    as filter pills with the selected category selected. */
async function getNotes_Pills(selectedPillId: string): Promise<NotePillTag[]> {
  const noteCategoryIds = await getLocalNotesCategoryIds_ByUserId(Number(currentUserId() ?? 0));
  return notePillTags(await fetchNotePills(noteCategoryIds), selectedPillId);
}

/** The flows of the screen Notes (the screen controller).
    - OnInitialize (TST 2026-10-29): the default variables, Notes_Loading and the skeleton loaders
      (`INITIAL_NOTES_STATE`), then Years = GetNotes_FilterYear (Get_RecentYears(3), synchronous). The port keeps no
      variable on a back navigation, so a view that the view cache restores starts from OnInitialize too.
    - OnReady (after OnInitialize, and only when the screen is still there): ResetPillsVallues, then Refresh_GetNotes.
    - Refresh_GetNotes: Notes_Loading, the refresh of DataActionGetNotes (refresh only; it sends every screen
      variable), then GetNotesOnAfterFetch: the first page replaces the list and the pills load (with a second
      ResetPillsVallues on the first fetch only); a next page is appended.
    - The pills, the search input, the filter sheet and the end of the list change the filter or the page, then refresh.
    - A card opens the screen of its category (`noteCardTarget`); a card without detail access shows "This <category>
      is no longer available." (Handler_OnClickUnauthorizedObject).
    A failed flow goes to the screen's flow handler, with the flow scope.
    Flow scope (item 8): DataActionGetNotes is a data action (R1, `flow.fetch`, Notes.js:676-684): after the unmount
    its answer and its failure are dropped, so GetNotesOnAfterFetch does not run. Refresh_GetNotes is an own action of
    the screen (R3, `flow.own`, alive check Notes.js:1076): OnReady stops after GetNotes_Pills (a module action, which
    runs after leaving) when the screen left. A state write after the unmount is a no-op (`dispatch`).
    @origin UBTConnect.Notes.Notes */
export function useNotes(): NotesFlows {
  const navigate = useOsNavigate();
  const { state, dispatch, latest, flow } = useFlowState({
    viewName: 'Notes.Notes',
    reducer: notesReducer,
    initial: INITIAL_NOTES_STATE,
    restore: () => INITIAL_NOTES_STATE,
    parameters: null,
    /* The `onReady` option runs once, after the first render: here it runs the part of OnInitialize that waits for
       the local notes (GetNotes_FilterYear), as the port did. The hook calls the flows of the newest render. */
    onReady: () => onInitialize(),
  });

  /** ResetPillsVallues: GetNotes_Pills(Notes_Filter.NoteCategoryId) (a module action: not wrapped), then Note_Pills =
      its Out_Pills. */
  const resetPillsValues = async () => {
    const notePills = await getNotes_Pills(latest.current.notesFilter.noteCategoryId);
    dispatch({ notePills });
  };

  /** Refresh_GetNotes (own action, R3): Notes_Loading True, the refresh of DataActionGetNotes, then
      GetNotesOnAfterFetch. */
  const refreshGetNotes = flow.own(async () => {
    dispatch({ notesLoading: true });
    const out = await flow.fetch(fetchNoteCards(latest.current)); // R1
    dispatch({ getNotesList: out.items });
    if (latest.current.pageNumber !== 1) {
      dispatch({ notesList: [...latest.current.notesList, ...out.items], notesLoading: false });
      return;
    }
    /* The first page: MaxRecords, Notes_List, ResetPillsVallues when ResetPillsValue (the first fetch only), then
       PillsLoaded True, ResetPillsValue False and Notes_Loading False. The screen showed the new list together with
       the loaded pills, after the call of ResetPillsVallues: the call comes first and the assignments follow in one
       render. The call does not read the list. */
    if (latest.current.resetPillsValue) await resetPillsValues();
    dispatch({
      maxRecords: out.total,
      notesList: out.items,
      pillsLoaded: true,
      resetPillsValue: false,
      notesLoading: false,
    });
  });

  /** OnInitialize, after the skeleton loaders: Years = GetNotes_FilterYear. */
  const onInitialize = (): Promise<void> => {
    dispatch({ years: getNotes_FilterYear(), isInitialized: true });
    return Promise.resolve();
  };

  /* OnReady: ResetPillsVallues, then Refresh_GetNotes. It runs once, after the render in which OnInitialize ended, so
     Notes_FilterSheet is there and has raised SheetInilialized: DataActionGetNotes sends its Filter_BottomSheetId. It
     does not run when the screen unmounted during OnInitialize (the state write is a no-op). */
  const readyStarted = useRef(false);
  useEffect(() => {
    if (!state.isInitialized || readyStarted.current) return;
    readyStarted.current = true;
    flow.run(async () => {
      await resetPillsValues();
      await refreshGetNotes(); // R3: stops here when the screen left during GetNotes_Pills
    });
    // Runs once, when OnInitialize has ended; the flows read the newest variables.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.isInitialized]);

  return {
    state,
    onHeaderScrolled: (headerIsScrolled) => {
      dispatch({ headerIsScrolled });
    },
    onScrollToTop: () => {
      scrollTop('.active-screen', 'instant');
    },
    onSearchChange: (searchTerm) => {
      dispatch({ notesFilter: { ...latest.current.notesFilter, searchTerm } });
    },
    onSearchClear: () => {
      dispatch({ notesFilter: { ...latest.current.notesFilter, searchTerm: '' } });
      flow.run(refreshGetNotes);
    },
    onSearchSubmit: () => {
      flow.run(refreshGetNotes);
    },
    onClickPill: (updatedTagList) => {
      dispatch({
        notesFilter: { ...latest.current.notesFilter, noteCategoryId: selectedCategoryId(updatedTagList) },
        pageNumber: 1,
        resetPillsValue: false,
      });
      flow.run(refreshGetNotes);
    },
    /* Handler_ApplyFilters sets Notes_Filter.SortByNewest and HasFiltersApplied. On TST the sheet gets Notes_Filter
       as In_FilterNotes by reference (Notes.mvc.js:581) and its Handler_FilterSheetApplyFilters writes Years and
       SortByNewest into that same record (Notes_FilterSheet.mvc.js:384-401). So Notes_Filter.Years becomes the
       selected years, and Refresh_GetNotes sends them (capture 2026-10-27, Notes-110). The other fields stay. */
    onApplyFilters: (filter, hasFiltersApplied) => {
      dispatch({
        notesFilter: { ...latest.current.notesFilter, years: filter.years, sortByNewest: filter.sortByNewest },
        hasFiltersApplied,
      });
      flow.run(refreshGetNotes);
    },
    onLoadMore: async () => {
      if (!canLoadMore(latest.current)) return;
      dispatch({ pageNumber: latest.current.pageNumber + 1 });
      await flow.runAwaited(refreshGetNotes);
    },
    onClickNoteCardItem: (objectId, objectId2, objectType, hasDetailAccess) => {
      if (!hasDetailAccess) {
        // Handler_OnClickUnauthorizedObject: FeedbackMessage_AutoClose("", message, Info, True, "", 0, False)
        feedbackMessageAutoClose({
          title: '',
          message: unauthorizedObjectMessage(objectType, latest.current.notePills),
          messageType: 'info',
          encodedHtml: true,
          extendedClass: '',
          delayMs: 0,
          useDebounce: false,
        });
        return;
      }
      const target = noteCardTarget(objectId, objectId2, objectType, latest.current);
      if (!target) return;
      if (target.preload) setPreloadObject(target.preload); // SetPreloadObject, SetPreloadObject3
      navigate(target.path, target.inputs); // R4 in useOsNavigate
    },
    onFilterSheetInitialized: (filterBottomSheetId) => {
      dispatch({ filterBottomSheetId });
    },
    onFilterSheetLoaded: (showSubscriptionOnClick) => {
      dispatch({
        bottomSheetIdFilterIsLoaded: true,
        bottomSheetIdFilterShowSubscriptionOnClick: showSubscriptionOnClick,
      });
    },
  };
}

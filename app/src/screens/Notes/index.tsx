import { useCallback, useEffect, useRef, useState } from 'react';
import { App_NotificationIcon } from '../../shared/UBTConnect/App_NotificationIcon';
import { BottomBarMenu } from '../../shared/UBTConnect/BottomBarMenu';
import { CommonUI_InsideLayout } from '../../shared/UBTConnect/CommonUI_InsideLayout';
import { scrollTop } from '../../shared/UBTConnect/lib/actions';
import { CustomContainer } from '../../shared/UBTConnectLibrary/CustomContainer';
import { Icon } from '../../shared/UBTConnectLibrary/Icon';
import { Input } from '../../shared/UBTConnectLibrary/Input';
import { Layout_MainPages_FixedTitle } from '../../shared/UBTConnectLibrary/Layout_MainPages_FixedTitle';
import { UBT_Color, UBT_Shape, UBT_Size } from '../../shared/UBTConnectLibrary/lib/staticEntities';
import type { Tag } from '../../shared/UBTConnectLibrary/lib/structures';
import { raiseToFlowHandler } from '../../shell/exceptions';
import { useOsNavigate } from '../../shell/navigation';
import { fetchNotes, getNotes_FilterYear, getNotes_Pills } from './api';
import { FilterSheet_Icon_Label } from './components/FilterSheet_Icon_Label';
import { Horizontal_Filter_TagList } from './components/Horizontal_Filter_TagList';
import { NoteCard_List } from './components/NoteCard_List';
import { Notes_FilterSheet } from './components/Notes_FilterSheet';
import { NoteCategory2, UBT_Icons2_Search } from './components/staticEntities';
import type { NoteCardItem, NotesFilter, NotesVariables } from './types';

/** Screen variables with their initial values (Notes.mvc.js model :30-82). */
const initialVariables = (): NotesVariables => ({
  headerIsScrolled: false,
  notePills: [],
  notesFilter: { noteCategoryId: '', searchTerm: '', sortByNewest: '', years: [] },
  hasFiltersApplied: false,
  filterBottomSheetId: '',
  bottomSheetIdFilterIsLoaded: false,
  bottomSheetIdFilterShowSubscriptionOnClick: false,
  years: [],
  pageSize: 20,
  pageNumber: 1,
  maxRecords: '0',
  notesList: [],
  resetPillsValue: true,
  pillsLoaded: false,
  notesLoading: false,
});

const pill = (text: string): Tag => ({ Text: text, Identifier: text, IsSelected: false });
/** SkeletonLoader_Pills (Notes.mvc.js:765-822). */
const skeletonPills = (): Tag[] => [pill('All'), pill('Dumyy size'), pill('Dumyy size'), pill('Dumyy size')];
const skeletonNote = (title: string, subtitle: string): NoteCardItem => ({
  id: '',
  itemId: '0',
  noteCategoryId: '',
  title,
  subtitle,
  sourceHeader: { iconId: '', imageURL: '', initials: '', label: '' },
  notes: { Total: 0, Note_Item_List: [] },
});
/** SkeletonLoader_Notes (Notes.mvc.js:943-1036): six placeholder cards. */
const skeletonNotes = (): NoteCardItem[] => [
  skeletonNote('Dumyy Dummy Dummy Dummy', 'Dummy Dummy'),
  ...Array.from({ length: 5 }, () => skeletonNote('Dumyy size', 'Dumyy size')),
];
/** The model after OnInitialize's synchronous part (Notes.mvc.js:1321-1340): Note_Pills and Notes_List are empty at
    start, so SkeletonLoader_Pills and SkeletonLoader_Notes always run. */
const initializedVariables = (): NotesVariables => ({
  ...initialVariables(),
  notePills: skeletonPills().map(toWireTag),
  notesList: skeletonNotes(),
});
function toWireTag(t: Tag) {
  return {
    Text: t.Text ?? '',
    Identifier: t.Identifier ?? '',
    IsSelected: t.IsSelected ?? true,
    Enabled: t.Enabled ?? true,
  };
}

/** UBTConnect Notes.Notes (UBTConnect.Notes.Notes.mvc.js: model :1-90, view :91-660, controller :660-1735). Captured
    dom/default.html, loading.html, offline.html. The flows read and write the OutSystems model in a ref (`v`) in order,
    as the original actions do; `render()` publishes a copy (`vars`) that the view reads. */
export default function Notes() {
  const navigate = useOsNavigate();
  const [initial] = useState(initializedVariables);
  const v = useRef<NotesVariables>(initial);
  const [vars, setVars] = useState<NotesVariables>(initial);
  const render = useCallback(() => {
    setVars({ ...v.current });
  }, []);
  const [pills, setPills] = useState<Tag[]>(skeletonPills);
  const [lastFetched, setLastFetched] = useState<NoteCardItem[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  const resetPillsVallues = useCallback(async () => {
    // ResetPillsVallues (Notes.mvc.js:1281-1320): GetNotes_Pills, then Note_Pills = its Out_Pills
    const next = await getNotes_Pills();
    v.current.notePills = next.map(toWireTag);
    setPills(next);
  }, []);

  const refresh_GetNotes = useCallback(async () => {
    // Refresh_GetNotes (Notes.mvc.js:1077-1110): Notes_Loading = True, refresh GetNotes, then GetNotesOnAfterFetch
    v.current.notesLoading = true;
    render();
    const out = await fetchNotes(v.current);
    setLastFetched(out.items);
    // GetNotesOnAfterFetch (Notes.mvc.js:823-883)
    if (v.current.pageNumber === 1) {
      v.current.maxRecords = out.total;
      v.current.notesList = out.items;
      if (v.current.resetPillsValue) await resetPillsVallues();
      v.current.pillsLoaded = true;
      v.current.resetPillsValue = false;
    } else {
      v.current.notesList = [...v.current.notesList, ...out.items];
    }
    v.current.notesLoading = false;
    render();
  }, [resetPillsVallues, render]);

  /** Runs a screen action; an exception goes to the flow's exception handler (handleError, Notes.mvc.js:1721). */
  const run = useCallback((action: () => Promise<void>) => {
    action().catch(raiseToFlowHandler);
  }, []);

  // OnInitialize (Notes.mvc.js:1321-1369), after the skeletons (initializedVariables): Years = GetNotes_FilterYear
  useEffect(() => {
    run(async () => {
      v.current.years = await getNotes_FilterYear();
      render();
      setIsInitialized(true);
    });
  }, [run, render]);

  // OnReady (Notes.mvc.js:1370-1402): ResetPillsVallues, then Refresh_GetNotes
  useEffect(() => {
    if (!isInitialized) return;
    run(async () => {
      await resetPillsVallues();
      await refresh_GetNotes();
    });
  }, [isInitialized, run, resetPillsVallues, refresh_GetNotes]);

  // Handler_OnClickPill (Notes.mvc.js:884-942)
  const handler_OnClickPill = (updatedTagList: Tag[]) => {
    const [selected] = updatedTagList.filter((t) => t.IsSelected ?? true);
    v.current.notesFilter = { ...v.current.notesFilter, noteCategoryId: selected?.Identifier ?? '' };
    v.current.pageNumber = 1;
    v.current.resetPillsValue = false;
    run(refresh_GetNotes);
  };
  // Handler_SearchOnChange / Handler_SearchOnClear (Notes.mvc.js:1212-1280); Submit refreshes GetNotes
  const handler_SearchOnChange = (currentString: string) => {
    v.current.notesFilter = { ...v.current.notesFilter, searchTerm: currentString };
    render();
  };
  const handler_SearchOnClear = () => {
    v.current.notesFilter = { ...v.current.notesFilter, searchTerm: '' };
    run(refresh_GetNotes);
  };
  // Handler_ApplyFilters (Notes.mvc.js:1403-1459): only SortByNewest is taken from the sheet's filter
  const handler_ApplyFilters = (filter: NotesFilter, hasFiltersApplied: boolean) => {
    v.current.notesFilter = { ...v.current.notesFilter, sortByNewest: filter.sortByNewest };
    v.current.hasFiltersApplied = hasFiltersApplied;
    run(refresh_GetNotes);
  };
  // Notes_CardListOnLoadMore (Notes.mvc.js:1111-1149)
  const notes_CardListOnLoadMore = () => {
    if (v.current.notesLoading) return;
    if (lastFetched.length > 0 && lastFetched.length < Number(v.current.maxRecords)) {
      v.current.pageNumber += 1;
      run(refresh_GetNotes);
    }
  };
  // Handler_OnClickNoteCardItem (Notes.mvc.js:1460-1580): only Household, OneSchool Global and Supper Meeting navigate
  const handler_OnClickNoteCardItem = (objectId: string, objectType: string) => {
    if (objectType === NoteCategory2.Household) navigate('/UBTConnect/HouseholdDetails', { HouseholdId: objectId });
    else if (objectType === NoteCategory2.OneSchoolGlobal)
      navigate('/UBTConnect/OneSchoolGlobalDetails', { In_OneSchoolGlobalId: objectId });
    else if (objectType === NoteCategory2.SupperMeeting)
      navigate('/UBTConnect/SupperMeeting_Details', { In_SubdivsionId: objectId });
  };

  return (
    <>
      <Layout_MainPages_FixedTitle
        id="$b1"
        isGrayBackground
        onOnHeaderScrolled={(isHeaderScrolled) => {
          v.current.headerIsScrolled = isHeaderScrolled;
          render();
        }}
        placeholderHeaderTitle="My Notes"
        placeholderHeaderRight={
          <>
            {vars.headerIsScrolled && (
              <Icon
                id="$b2"
                inColorId={UBT_Color.Neutral0}
                inIconId={UBT_Icons2_Search}
                onClick={() => {
                  scrollTop('.active-screen', 'instant');
                }}
              />
            )}
            <App_NotificationIcon id="$b3" />
          </>
        }
        placeholderHeaderInput={
          <Input
            id="$b4"
            inOptions={{
              IsEnabled: lastFetched.length > 1,
              MaxLength: 50,
              SearchPrompt: 'Search',
              Debounce_DelayMS: 200,
              BorderRadius: UBT_Shape.Rounded,
              EnableAutocompleteHTML: false,
            }}
            onEventOnChange={handler_SearchOnChange}
            onEventClearString={handler_SearchOnClear}
            onEventSubmit={() => {
              run(refresh_GetNotes);
            }}
          />
        }
        headerContent={
          <CustomContainer
            id="Filter_Pills"
            extendedClasses="background-neutral-0"
            options={{
              PaddingSize: { VerticalSizeId: UBT_Size.ExtraSmall, HorizontalSizeId: UBT_Size.Base },
              MarginSize: { TopSizeId: UBT_Size.Base },
              DisplayOptions: {},
            }}
          >
            <Horizontal_Filter_TagList
              id="$b6"
              inIsSingleSelection
              inTagsLoading={!vars.pillsLoaded}
              inTagToggleList={pills}
              onChanged={handler_OnClickPill}
              filter={
                <FilterSheet_Icon_Label
                  id="$b7"
                  showSubscriptionOnClick={vars.bottomSheetIdFilterShowSubscriptionOnClick}
                  haveFiltersApplied={vars.hasFiltersApplied}
                  bottomSheetId={vars.filterBottomSheetId}
                  isLoaded
                />
              }
            />
          </CustomContainer>
        }
        content={
          <NoteCard_List
            id="$b8"
            inIsLoading={vars.notesLoading}
            inNotes={vars.notesList}
            inSearchString={vars.notesFilter.searchTerm}
            onOnClickNoteCardItem={handler_OnClickNoteCardItem}
            onOnLoadMore={notes_CardListOnLoadMore}
          />
        }
        bottom={<BottomBarMenu id="$b9" />}
        placeholderCommonUIInsideLayout={<CommonUI_InsideLayout id="$b10" />}
      />
      {isInitialized && (
        <Notes_FilterSheet
          id="$b11"
          inFilterNotes={vars.notesFilter}
          inYearsOptions={vars.years}
          onSheetInilialized={(sheetId) => {
            v.current.filterBottomSheetId = sheetId;
            render();
          }}
          onLoaded={(showSubscriptionOnClick) => {
            v.current.bottomSheetIdFilterIsLoaded = true;
            v.current.bottomSheetIdFilterShowSubscriptionOnClick = showSubscriptionOnClick;
            render();
          }}
          onApplyFilters={handler_ApplyFilters}
        />
      )}
    </>
  );
}

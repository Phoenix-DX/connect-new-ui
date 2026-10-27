import type { NoteCardItem, NotePill, NotePillTag, NotesVariables } from '@/api/note';
import type { Tag } from '@/lib/ubtConnectLibrary/structures';
import { NoteCategory2 } from '@/pages/Notes/components/staticEntities';

/** The state of the Notes screen and its reducer, with the client actions of the screen as pure functions.
    @origin UBTConnect.Notes.Notes */

/** The screen variables, which DataActionGetNotes sends, and two values that the page renders. */
export interface NotesState extends NotesVariables {
  /** [GetNotes.List] The cards of the last answer of DataActionGetNotes: empty before the first answer. The search input
      is enabled when it has more than one card; Notes_CardListOnLoadMore compares its length with MaxRecords. */
  getNotesList: NoteCardItem[];
  /** OnInitialize has ended: Years is set. Notes_FilterSheet renders from then on, because its OnInitialize builds the
      year options from In_YearsOptions. */
  isInitialized: boolean;
}

/** An assignment of one or more screen variables. */
export type NotesPatch = Partial<NotesState>;

/** The reducer of the screen: each flow step assigns variables, as the OutSystems Assign nodes do. */
export const notesReducer = (state: NotesState, patch: NotesPatch): NotesState => ({ ...state, ...patch });

/** A filter pill as the screen keeps it in Note_Pills: unselected and enabled. */
const pill = (text: string, identifier: string): NotePillTag => ({
  Text: text,
  Identifier: identifier,
  IsSelected: false,
  Enabled: true,
});

/** SkeletonLoader_Pills: four placeholder pills, with the texts of the original. */
export const skeletonPills = (): NotePillTag[] =>
  ['All', 'Dumyy size', 'Dumyy size', 'Dumyy size'].map((text) => pill(text, text));

const skeletonNote = (title: string, subtitle: string): NoteCardItem => ({
  id: '',
  itemId: '0',
  noteCategoryId: '',
  title,
  subtitle,
  sourceHeader: { iconId: '', imageURL: '', initials: '', label: '' },
  notes: { Total: 0, Note_Item_List: [] },
});

/** SkeletonLoader_Notes: six placeholder cards, with the texts of the original. */
export const skeletonNotes = (): NoteCardItem[] => [
  skeletonNote('Dumyy Dummy Dummy Dummy', 'Dummy Dummy'),
  ...Array.from({ length: 5 }, () => skeletonNote('Dumyy size', 'Dumyy size')),
];

/** The variables after the synchronous part of OnInitialize: the default values, then SkeletonLoader_Pills and
    SkeletonLoader_Notes. Note_Pills and Notes_List are empty at the start, so both skeleton loaders run. */
export const INITIAL_NOTES_STATE: NotesState = {
  headerIsScrolled: false,
  notePills: skeletonPills(),
  notesFilter: { noteCategoryId: '', searchTerm: '', sortByNewest: '', years: [] },
  hasFiltersApplied: false,
  filterBottomSheetId: '',
  bottomSheetIdFilterIsLoaded: false,
  bottomSheetIdFilterShowSubscriptionOnClick: false,
  years: [],
  pageSize: 20,
  pageNumber: 1,
  maxRecords: '0',
  notesList: skeletonNotes(),
  resetPillsValue: true,
  pillsLoaded: false,
  notesLoading: false,
  getNotesList: [],
  isInitialized: false,
};

/** UBTConnect GetNotes_Pills, after its call of Get_Note_DynamicPills: "All" (NullTextIdentifier, selected), then one
    unselected pill for each dynamic pill. */
export const notePillTags = (pills: NotePill[]): NotePillTag[] => [
  { Text: 'All', Identifier: '', IsSelected: true, Enabled: true },
  ...pills.map((p) => pill(p.text, p.identifier)),
];

/** The selected category of the pills that Horizontal_Filter_TagList gives with its Changed event: the identifier of
    the first selected pill ("" when none is selected). */
export const selectedCategoryId = (tags: Tag[]): string => tags.find((t) => t.IsSelected ?? true)?.Identifier ?? '';

/** Notes_CardListOnLoadMore: a next page only when the last page of GetNotes had cards but fewer than MaxRecords
    (Notes.mvc.js:1123). No loading clause: the List of NoteCard_List raises no new OnScrollEnding while the last one
    runs (OutSystemsReactWidgets.js:165, isScrollEndingEventHandlerRunning). */
export const canLoadMore = (state: NotesState): boolean =>
  state.getNotesList.length > 0 && state.getNotesList.length < Number(state.maxRecords);

/** The screen that a note card opens, with its input. */
interface NoteCardTarget {
  path: string;
  inputs: Record<string, string>;
}

/** Handler_OnClickNoteCardItem(ObjectId, ObjectType): only the Household, OneSchool Global and Supper Meeting cards
    open a screen. */
export function noteCardTarget(objectId: string, objectType: string): NoteCardTarget | null {
  if (objectType === NoteCategory2.Household)
    return { path: '/UBTConnect/HouseholdDetails', inputs: { HouseholdId: objectId } };
  if (objectType === NoteCategory2.OneSchoolGlobal)
    return { path: '/UBTConnect/OneSchoolGlobalDetails', inputs: { In_OneSchoolGlobalId: objectId } };
  if (objectType === NoteCategory2.SupperMeeting)
    return { path: '/UBTConnect/SupperMeeting_Details', inputs: { In_SubdivsionId: objectId } };
  return null;
}

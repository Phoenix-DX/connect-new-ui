import type { NoteCardItem, NotePill, NotePillTag, NotesVariables } from '@/api/note';
import type { CarouselPreloadedHouseholds } from '@/lib/ubtConnect/structures';
import type { Tag } from '@/lib/ubtConnectLibrary/structures';
import { NoteCategory2 } from '@/pages/Notes/components/staticEntities';

/** The state of the Notes screen and its reducer, with the client actions of the screen as pure functions.
    @origin UBTConnect.Notes.Notes */

/** The screen variables, which DataActionGetNotes sends, and two values that the page renders. */
export interface NotesState extends NotesVariables {
  /** [GetNotes.List] The cards of the last answer of DataActionGetNotes: empty before the first answer.
      Notes_CardListOnLoadMore compares its length with MaxRecords. */
  getNotesList: NoteCardItem[];
  /** OnInitialize has ended: Years is set. Notes_FilterSheet renders from then on, with the year options of
      In_YearsOptions. */
  isInitialized: boolean;
}

/** An assignment of one or more screen variables. */
type NotesPatch = Partial<NotesState>;

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
  itemId2: '0',
  noteCategoryId: '',
  hasDetailAccess: false,
  title,
  subtitle,
  sourceHeader: { iconId: '', imageURL: '', initials: '', label: '' },
  notes: { Total: 0, Note_Item_List: [] },
  channelName: '',
  channelLogo: '',
  publishedAt: '1900-01-01T00:00:00',
});

/** SkeletonLoader_Notes: six placeholder cards, with the texts of the original. */
export const skeletonNotes = (): NoteCardItem[] => [
  skeletonNote('Dumyy Dummy Dummy Dummy', 'Dummy Dummy'),
  ...Array.from({ length: 5 }, () => skeletonNote('Dumyy size', 'Dumyy size')),
];

/** UBTConnect GetNotes_FilterYear (UBTConnect.controller.js:10133-10170, TST 2026-10-29): Get_RecentYears(3)
    (:6599-6620), the current year and the two years before it, as text. It no longer reads the local notes. */
export const getNotes_FilterYear = (now: Date = new Date()): string[] =>
  [0, 1, 2].map((i) => String(now.getFullYear() - i));

/** The variables after OnInitialize (live Notes.mvc.js:1377-1444): the default values, Notes_Loading True, then
    SkeletonLoader_Pills and SkeletonLoader_Notes (Note_Pills and Notes_List are empty at the start). Years is set
    after the first render (`useNotes`). The view-cache branch (CheckRestored: PageNumber = 1 only) is not ported: a
    restored view starts here too. */
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
  notesLoading: true,
  getNotesList: [],
  isInitialized: false,
};

/** UBTConnect GetNotes_Pills(In_SelectedPillId) (UBTConnect.controller.js:10182-10269, TST 2026-10-29), after its call
    of Get_Note_DynamicPills: "All" (NullTextIdentifier, selected when In_SelectedPillId is ""), then one pill for each
    dynamic pill, selected when its Identifier is In_SelectedPillId. */
export const notePillTags = (pills: NotePill[], selectedPillId = ''): NotePillTag[] => [
  { Text: 'All', Identifier: '', IsSelected: selectedPillId === '', Enabled: true },
  ...pills.map((p) => ({ ...pill(p.text, p.identifier), IsSelected: p.identifier === selectedPillId })),
];

/** The selected category of the pills that Horizontal_Filter_TagList gives with its Changed event: the identifier of
    the first selected pill ("" when none is selected). */
export const selectedCategoryId = (tags: Tag[]): string => tags.find((t) => t.IsSelected ?? true)?.Identifier ?? '';

/** Notes_CardListOnLoadMore: a next page only when the last page of GetNotes had cards but fewer than MaxRecords
    (Notes.mvc.js:1123). No loading clause: the List of NoteCard_List raises no new OnScrollEnding while the last one
    runs (OutSystemsReactWidgets.js:165, isScrollEndingEventHandlerRunning). */
export const canLoadMore = (state: NotesState): boolean =>
  state.getNotesList.length > 0 && state.getNotesList.length < Number(state.maxRecords);

/** The screen that a note card opens, with its input, and the preload object to set before (SetPreloadObject). */
interface NoteCardTarget {
  path: string;
  inputs: Record<string, string>;
  /** CarouselPreloadedHouseholds of HouseholdCarousel, or PreloadedCarousel of OneSchoolGlobalCarousel (CarouselItemIds:
      Long Integers as text). */
  preload?: CarouselPreloadedHouseholds | { CarouselItemIds: string[] };
}

/** The screen variable that the Household and OneSchool Global branches read. */
type NoteCardContext = Pick<NotesState, 'notesList'>;

/** LongIntegerToText(TextToLongInteger(text)) for an item id: invalid is 0. */
const longIntegerText = (v: string): string => {
  const trimmed = v.trim();
  return /^[-+]?\d+$/.test(trimmed) ? BigInt(trimmed).toString() : '0';
};

/** Handler_OnClickNoteCardItem(ObjectId, ObjectId2, ObjectType, HasDetailAccess), the branch with detail access (live
    Notes.mvc.js:1556-1717, TST 2026-10-29). Household: SetPreloadObject(CarouselHouseholdItem = the ItemIds of the
    Household cards of Notes_List with detail access), then HouseholdCarousel. Feed Item: FeedItemDetail. Assemble
    Event: AssembleDetail. Member: Household_Relations (MemberId = ObjectId, HouseholdId = ObjectId2). OneSchool
    Global: SetPreloadObject3(CarouselItemIds = the ItemIds of the OneSchool Global cards of Notes_List), then
    OneSchoolGlobalCarousel. Supper Meeting: SupperMeeting_Details. Interchange opens Locality_Details with the
    LocalityId of Notes_InterchangeId_ExtractId(ObjectId), a module action whose code this port does not have
    (question Notes Q9): no screen yet. The other categories do nothing. */
export function noteCardTarget(
  objectId: string,
  objectId2: string,
  objectType: string,
  context: NoteCardContext,
): NoteCardTarget | null {
  const cards = context.notesList;
  switch (objectType) {
    case NoteCategory2.Household:
      return {
        path: '/UBTConnect/HouseholdCarousel',
        inputs: { In_StartingHouseholdId: longIntegerText(objectId) },
        preload: {
          CarouselHouseholdItem: cards
            .filter((card) => card.hasDetailAccess && card.noteCategoryId === NoteCategory2.Household)
            .map((card) => ({
              SwipeAction: { ActionId: '', Parameters: '' },
              Household: longIntegerText(card.itemId),
            })),
        },
      };
    case NoteCategory2.FeedItem:
      return { path: '/UBTConnect/FeedItemDetail', inputs: { FeedItemId: objectId } };
    case NoteCategory2.AssembleEvent:
      return { path: '/UBTConnect/AssembleDetail', inputs: { EventId: objectId } };
    case NoteCategory2.Member:
      return {
        path: '/UBTConnect/Household_Relations',
        inputs: { MemberId: longIntegerText(objectId), HouseholdId: longIntegerText(objectId2) },
      };
    case NoteCategory2.OneSchoolGlobal:
      return {
        path: '/UBTConnect/OneSchoolGlobalCarousel',
        inputs: { In_StartingObjectId: longIntegerText(objectId) },
        preload: {
          CarouselItemIds: cards
            .filter((card) => card.noteCategoryId === NoteCategory2.OneSchoolGlobal)
            .map((card) => longIntegerText(card.itemId)),
        },
      };
    case NoteCategory2.SupperMeeting:
      return { path: '/UBTConnect/SupperMeeting_Details', inputs: { In_SubdivsionId: longIntegerText(objectId) } };
    default:
      return null;
  }
}

/** Handler_OnClickUnauthorizedObject(NoteCategoryId) (live Notes.mvc.js:1107-1148): ObjectLabelSingular = ToLower(the
    Text of the first pill of Note_Pills with that Identifier; "" when none), without a final "s"; the message of
    FeedbackMessage_AutoClose. */
export function unauthorizedObjectMessage(noteCategoryId: string, notePills: NotePillTag[]): string {
  const label = (notePills.find((p) => p.Identifier === noteCategoryId)?.Text ?? '').toLowerCase();
  const singular = label.length > 0 && label.endsWith('s') ? label.slice(0, -1) : label;
  return `This ${singular} is no longer available.`;
}

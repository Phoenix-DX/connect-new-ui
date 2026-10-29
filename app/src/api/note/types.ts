import type { ActionInputs, PathOf } from '@/api/client/callAction';

/* Domain types of the note calls: the fields that the UI reads. The readers are the screen Notes of UBTConnect (with
   its blocks NoteCard_List and NoteCard_Item), the block Directory_EntityDetailsActions of UBTConnect, and the blocks
   NoteListActions and NotesSheet of UBTConnect_Utils (CW_Notes). Each type has the shape that its readers use today,
   so no caller changes: camelCase fields where a block mapped the record, the OutSystems names where the reader takes
   the record as it is. The wire types stay in src/api/schema.d.ts. Long Integer ids are text. */

/* ---- The notes of an item (UBTConnectLibrary Notes), as the note blocks read them ---- */

/** UBTConnectLibrary Note_Item: one note. DateTimes travel as "yyyy-MM-ddTHH:mm:ss". Every field is optional, as an
    OutSystems record with its default values: the blocks build partial records. */
export interface NoteItem {
  /** Long Integer, as text. */
  Id?: string;
  Note?: string;
  DateCreatedUtc?: string;
  DateEditedUtc?: string;
}

/** UBTConnectLibrary Notes: the notes of an item and their total on the server. The output of DataActionFetchNotes
    of Directory_EntityDetailsActions, and the notes of a note card. Every field is optional, as in NoteItem. */
export interface NoteList {
  Total?: number;
  Note_Item_List?: NoteItem[];
}

/** The inputs of DataActionFetchNotes of Directory_EntityDetailsActions: every block variable, with its OutSystems
    name, as the contract describes them. The block sends its variables as they are, so the domain type is the contract
    type. */
export type EntityNotesCallInputs = ActionInputs<
  PathOf<'UBTConnect', 'Directory_EntityDetailsActions/DataActionFetchNotes'>
>;

/* ---- The note cards of the screen Notes ---- */

/** Connect_Notes_CS UI_NoteCard_SourceHeader. */
export interface NoteCardSourceHeader {
  iconId: string;
  imageURL: string;
  initials: string;
  label: string;
}

/** Connect_Notes_CS UI_Note_CardItem, with its NoteCardContent flattened. Id and ItemId are text; ItemId2 is a Long
    Integer, as text (the household of a Member card); HasDetailAccess: the user may open the item (TST 2026-10-29). */
export interface NoteCardItem {
  id: string;
  itemId: string;
  itemId2: string;
  noteCategoryId: string;
  hasDetailAccess: boolean;
  title: string;
  subtitle: string;
  sourceHeader: NoteCardSourceHeader;
  notes: NoteList;
  /** NoteCardContent channel fields (TST 2026-10-29, capture calls.md): the channel row of ItemCard_WithNotes. The
      mapper gives the record defaults when the server omits them: "" for the name and the logo, NullDate for
      PublishedAt, a DateTime (auto decision C3, 2026-10-29). */
  channelName: string;
  channelLogo: string;
  publishedAt: string;
  /** NoteCardContent EventStartDate and EventEndDate (DateTime, TST publish of 2026-10-29): the event time row of
      ItemCard_WithNotes; the mapper gives NullDate when the server omits them. */
  eventStartDate?: string;
  eventEndDate?: string;
}

/** Connect_Notes_CS Notes_Filter: NoteCategoryId and SortByNewest are identifiers ("" = none). */
export interface NotesFilter {
  noteCategoryId: string;
  searchTerm: string;
  sortByNewest: string;
  years: string[];
}

/** Out_Notes of DataActionGetNotes (Connect_Notes_CS UI_Notes): the cards of a page and the total. Total is a Long
    Integer, as text. */
export interface NoteCardPage {
  total: string;
  items: NoteCardItem[];
}

/** A filter pill of the screen variable Note_Pills (UBTConnectLibrary Tag): the fields that the screen sets. */
export interface NotePillTag {
  Text: string;
  Identifier: string;
  IsSelected: boolean;
  Enabled: boolean;
}

/** The variables of the screen Notes. OutSystems sends all of them with DataActionGetNotes. */
export interface NotesVariables {
  headerIsScrolled: boolean;
  notePills: NotePillTag[];
  notesFilter: NotesFilter;
  hasFiltersApplied: boolean;
  filterBottomSheetId: string;
  bottomSheetIdFilterIsLoaded: boolean;
  bottomSheetIdFilterShowSubscriptionOnClick: boolean;
  years: string[];
  pageSize: number;
  pageNumber: number;
  /** Long Integer, as text. */
  maxRecords: string;
  notesList: NoteCardItem[];
  resetPillsValue: boolean;
  pillsLoaded: boolean;
  notesLoading: boolean;
}

/** A pill of a note category (UBTConnect_Notes_MCS DynamicPill): every field. The client action GetNotes_Pills makes
    a filter tag of it. */
export interface NotePill {
  text: string;
  /** The note category id. */
  identifier: string;
}

/* ---- The note writes of CW_Notes ---- */

/** The fields of Connect_Notes_CS UI_Note_Added that NotesSheet reads. */
export interface AddedNote {
  /** Long Integer, as text. */
  Id: string;
  DateCreatedUtc: string;
  DateEditedUtc: string;
}

/** The outputs of the service action AddNote: Success and the added note. */
export interface NoteAddResult {
  success: boolean;
  noteAdded: AddedNote;
}

/** The outputs of the service action UpdateNote: success and IsNotFound. */
export interface NoteUpdateResult {
  success: boolean;
  isNotFound: boolean;
}

/** The outputs of the service action DeleteNoteByNoteId: Success and WasFound. */
export interface NoteDeleteResult {
  success: boolean;
  wasFound: boolean;
}

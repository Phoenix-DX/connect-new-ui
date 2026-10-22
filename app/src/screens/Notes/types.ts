import type { ActionInputs, ActionOutputs, PathOf } from '@/api/client/callAction';
import type { Notes } from '../../shared/UBTConnectLibrary/lib/structures';

/* Wire shapes (API contract) stay in api.ts / mocks.ts; components see the domain types below. */
type GetNotesPath = PathOf<'UBTConnect', 'Notes/DataActionGetNotes'>;
export type GetNotesInput = ActionInputs<GetNotesPath>;
export type NoteCardItemWire = ActionOutputs<GetNotesPath>['Out_Notes']['NoteCardItem_List']['List'][number];
export type NotesFilterWire = NonNullable<GetNotesInput['Notes_Filter']>;

/** Connect_Notes_CS.UI_NoteCard_SourceHeader. */
export interface NoteCardSourceHeader {
  iconId: string;
  imageURL: string;
  initials: string;
  label: string;
}

/** Connect_Notes_CS.UI_Note_CardItem (Id is Text, ItemId a Long Integer kept as text). */
export interface NoteCardItem {
  id: string;
  itemId: string;
  noteCategoryId: string;
  title: string;
  subtitle: string;
  sourceHeader: NoteCardSourceHeader;
  notes: Notes;
}

/** Connect_Notes_CS.Notes_Filter: NoteCategoryId and SortByNewest are identifiers ("" = none). */
export interface NotesFilter {
  noteCategoryId: string;
  searchTerm: string;
  sortByNewest: string;
  years: string[];
}

/** Out_Notes of DataActionGetNotes: Total is a Long Integer (text). */
export interface NotesPage {
  total: string;
  items: NoteCardItem[];
}

/** Screen variables of Notes (UBTConnect.Notes.Notes.mvc.js model :30-82) that DataActionGetNotes sends. */
export interface NotesVariables {
  headerIsScrolled: boolean;
  notePills: { Text: string; Identifier: string; IsSelected: boolean; Enabled: boolean }[];
  notesFilter: NotesFilter;
  hasFiltersApplied: boolean;
  filterBottomSheetId: string;
  bottomSheetIdFilterIsLoaded: boolean;
  bottomSheetIdFilterShowSubscriptionOnClick: boolean;
  years: string[];
  pageSize: number;
  pageNumber: number;
  maxRecords: string;
  notesList: NoteCardItem[];
  resetPillsValue: boolean;
  pillsLoaded: boolean;
  notesLoading: boolean;
}

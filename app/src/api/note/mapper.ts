import type { ActionInputs, ActionOutputs, PathOf } from '@/api/client/callAction';
import { osList, wireList } from '@/lib/os-wire';
import type {
  NoteAddResult,
  NoteCardItem,
  NoteCardPage,
  NoteDeleteResult,
  NoteItem,
  NoteList,
  NotePill,
  NotesFilter,
  NotesVariables,
  NoteUpdateResult,
} from './types';

/** OutSystems NullDate() as a DateTime on the wire. */
const NULL_DATE_TIME = '1900-01-01T00:00:00';

type NoteCardsPath = PathOf<'UBTConnect', 'Notes/DataActionGetNotes'>;

/* The inputs and the outputs of each call, as the contract describes them. */
/** DataActionGetNotes of the screen Notes. */
export type NoteCardsWire = ActionOutputs<NoteCardsPath>;
/** The screen variables that DataActionGetNotes sends. */
export type NotesVariablesWire = ActionInputs<NoteCardsPath>;
/** Connect_Notes_CS UI_Note_CardItem as the server sends it. */
export type NoteCardItemWire = NoteCardsWire['Out_Notes']['NoteCardItem_List']['List'][number];
/** TST UI_Note_CardItem has fields that the contract does not list (Notes drift 2026-10-29; capture calls.md: ItemId2 a
    Long Integer, HasDetailAccess a Boolean; in NoteCardContent PublishedAt a DateTime, ChannelLogo and ChannelName
    texts, :132-134). The regenerated contract (I10-6, 2026-10-29) still takes the older record, so the type stays,
    with the record defaults in toNoteCardItem. */
type NoteCardItemWireTst = NoteCardItemWire & {
  ItemId2?: string;
  HasDetailAccess?: boolean;
  NoteCardContent: NoteCardItemWire['NoteCardContent'] & {
    PublishedAt?: string;
    ChannelLogo?: string;
    ChannelName?: string;
  };
};
/** Connect_Notes_CS Notes_Filter as the server takes it. */
export type NotesFilterWire = NonNullable<NotesVariablesWire['Notes_Filter']>;
/** UBTConnectLibrary Notes as the server sends it. */
export type NoteListWire = NoteCardItemWire['NoteCardContent']['Notes'];
/** UBTConnectLibrary Note_Item as the server sends it. */
export type NoteItemWire = NoteListWire['Note_Item_List']['List'][number];
/** The server action Get_NotePills_ByNoteCategoryIds of UBTConnect_Notes_MCS. */
export type NotePillsWire = ActionOutputs<PathOf<'UBTConnect_Notes_MCS', 'ActionGet_NotePills_ByNoteCategoryIds'>>;
/** DataActionFetchNotes of Directory_EntityDetailsActions. */
export type EntityNotesWire = ActionOutputs<
  PathOf<'UBTConnect', 'Directory_EntityDetailsActions/DataActionFetchNotes'>
>;
/** The service action AddNote of UBTConnect_Utils. */
export type NoteAddWire = ActionOutputs<PathOf<'UBTConnect_Utils', 'ServiceAPIAddNote'>>;
/** The service action UpdateNote of UBTConnect_Utils. */
export type NoteUpdateWire = ActionOutputs<PathOf<'UBTConnect_Utils', 'ServiceAPIUpdateNote'>>;
/** The service action DeleteNoteByNoteId of UBTConnect_Utils. */
export type NoteDeleteWire = ActionOutputs<PathOf<'UBTConnect_Utils', 'ServiceAPIDeleteNoteByNoteId'>>;

/** One note: every field. */
const toNoteItem = (w: NoteItemWire): NoteItem => ({
  Id: w.Id,
  Note: w.Note,
  DateCreatedUtc: w.DateCreatedUtc,
  DateEditedUtc: w.DateEditedUtc,
});

/** The notes of an item, with the list unwrapped. */
export const toNoteList = (w: NoteListWire): NoteList => ({
  Total: w.Total,
  Note_Item_List: osList(w.Note_Item_List).map(toNoteItem),
});

/** A note card, with its NoteCardContent flattened. */
export const toNoteCardItem = (w: NoteCardItemWireTst): NoteCardItem => ({
  id: w.Id,
  itemId: w.ItemId,
  itemId2: w.ItemId2 ?? '0',
  noteCategoryId: w.NoteCategoryId,
  hasDetailAccess: w.HasDetailAccess ?? false,
  title: w.NoteCardContent.Title,
  subtitle: w.NoteCardContent.Subtitle,
  sourceHeader: {
    iconId: w.NoteCardContent.SourceHeader.IconId,
    imageURL: w.NoteCardContent.SourceHeader.ImageURL,
    initials: w.NoteCardContent.SourceHeader.Initials,
    label: w.NoteCardContent.SourceHeader.Label,
  },
  notes: toNoteList(w.NoteCardContent.Notes),
  channelName: w.NoteCardContent.ChannelName ?? '',
  channelLogo: w.NoteCardContent.ChannelLogo ?? '',
  publishedAt: w.NoteCardContent.PublishedAt ?? NULL_DATE_TIME,
});

/** The cards of a page and the total. */
export const toNoteCardPage = (wire: NoteCardsWire): NoteCardPage => ({
  total: wire.Out_Notes.Total,
  items: osList(wire.Out_Notes.NoteCardItem_List).map(toNoteCardItem),
});

/** A note card of the screen variables back in the UI_Note_CardItem shape. A missing field of the notes gets its
    default. */
const toNoteCardItemWire = (n: NoteCardItem): NoteCardItemWire => ({
  Id: n.id,
  ItemId: n.itemId,
  NoteCategoryId: n.noteCategoryId,
  NoteCardContent: {
    Title: n.title,
    Subtitle: n.subtitle,
    SourceHeader: {
      IconId: n.sourceHeader.iconId,
      ImageURL: n.sourceHeader.imageURL,
      Initials: n.sourceHeader.initials,
      Label: n.sourceHeader.label,
    },
    Notes: {
      Total: n.notes.Total ?? 0,
      Note_Item_List: wireList(
        (n.notes.Note_Item_List ?? []).map((i) => ({
          Id: i.Id ?? '0',
          Note: i.Note ?? '',
          DateCreatedUtc: i.DateCreatedUtc ?? NULL_DATE_TIME,
          DateEditedUtc: i.DateEditedUtc ?? NULL_DATE_TIME,
        })),
      ),
    },
  },
});

const toNotesFilterWire = (f: NotesFilter): NotesFilterWire => ({
  NoteCategoryId: f.noteCategoryId,
  SearchTerm: f.searchTerm,
  SortByNewest: f.sortByNewest,
  Years: wireList(f.years),
});

/** The variables of the screen Notes as OutSystems sends them with DataActionGetNotes (screenData.variables), with
    their OutSystems names. The pills get the default IconId (""). */
export const toNotesVariablesWire = (v: NotesVariables): NotesVariablesWire => ({
  HeaderIsScrolled: v.headerIsScrolled,
  Note_Pills: wireList(v.notePills.map((t) => ({ ...t, IconId: '' }))),
  Notes_Filter: toNotesFilterWire(v.notesFilter),
  HasFiltersApplied: v.hasFiltersApplied,
  Filter_BottomSheetId: v.filterBottomSheetId,
  BottomSheetId_Filter_IsLoaded: v.bottomSheetIdFilterIsLoaded,
  BottomSheetId_Filter_ShowSubscriptionOnClick: v.bottomSheetIdFilterShowSubscriptionOnClick,
  Years: wireList(v.years),
  PageSize: v.pageSize,
  PageNumber: v.pageNumber,
  MaxRecords: v.maxRecords,
  Notes_List: wireList(v.notesList.map(toNoteCardItemWire)),
  ResetPillsValue: v.resetPillsValue,
  PillsLoaded: v.pillsLoaded,
  Notes_Loading: v.notesLoading,
});

/** The pills of the note categories, with the list unwrapped. */
export const toNotePills = (wire: NotePillsWire): NotePill[] =>
  osList(wire.Out_NotePills).map((p) => ({ text: p.Text, identifier: p.Identifier }));

/** The notes of the entity. */
export const toEntityNotes = (wire: EntityNotesWire): NoteList => toNoteList(wire.Notes);

/** Success and the id and the dates of the added note. */
export const toNoteAddResult = (wire: NoteAddWire): NoteAddResult => ({
  success: wire.Success,
  noteAdded: {
    Id: wire.Note_Added.Id,
    DateCreatedUtc: wire.Note_Added.DateCreatedUtc,
    DateEditedUtc: wire.Note_Added.DateEditedUtc,
  },
});

/** success and IsNotFound of a note edit. */
export const toNoteUpdateResult = (wire: NoteUpdateWire): NoteUpdateResult => ({
  success: wire.success,
  isNotFound: wire.IsNotFound,
});

/** Success and WasFound of a note delete. */
export const toNoteDeleteResult = (wire: NoteDeleteWire): NoteDeleteResult => ({
  success: wire.Success,
  wasFound: wire.WasFound,
});

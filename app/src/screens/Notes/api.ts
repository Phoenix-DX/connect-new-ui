import { callAction } from '@/api/client/callAction';
import { osList, wireList } from '@/legacy/os/os-wire';
import {
  get_Note_DynamicFilter_YearOptions,
  getLocalNotesCategoryIds_ByUserId,
} from '@/platform/storage/localEntities';
import { currentUserId } from '@/platform/session/session';
import type { Tag } from '@/shared/UBTConnectLibrary/lib/structures';
import type { NoteCardItem, NoteCardItemWire, NotesFilter, NotesFilterWire, NotesPage, NotesVariables } from './types';

const toNoteCardItem = (w: NoteCardItemWire): NoteCardItem => ({
  id: w.Id,
  itemId: w.ItemId,
  noteCategoryId: w.NoteCategoryId,
  title: w.NoteCardContent.Title,
  subtitle: w.NoteCardContent.Subtitle,
  sourceHeader: {
    iconId: w.NoteCardContent.SourceHeader.IconId,
    imageURL: w.NoteCardContent.SourceHeader.ImageURL,
    initials: w.NoteCardContent.SourceHeader.Initials,
    label: w.NoteCardContent.SourceHeader.Label,
  },
  notes: {
    Total: w.NoteCardContent.Notes.Total,
    Note_Item_List: osList(w.NoteCardContent.Notes.Note_Item_List),
  },
});

const fromNoteCardItem = (n: NoteCardItem): NoteCardItemWire => ({
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
          DateCreatedUtc: i.DateCreatedUtc ?? '1900-01-01T00:00:00',
          DateEditedUtc: i.DateEditedUtc ?? '1900-01-01T00:00:00',
        })),
      ),
    },
  },
});

const fromFilter = (f: NotesFilter): NotesFilterWire => ({
  NoteCategoryId: f.noteCategoryId,
  SearchTerm: f.searchTerm,
  SortByNewest: f.sortByNewest,
  Years: wireList(f.years),
});

/** GetNotes (DataActionGetNotes, controller getNotes$DataActRefresh, Notes.mvc.js:667-690): refreshed only by
    Refresh_GetNotes. OutSystems sends the screen variables with their original names. */
export async function fetchNotes(v: NotesVariables): Promise<NotesPage> {
  const out = await callAction('UBTConnect', 'Notes/DataActionGetNotes', {
    HeaderIsScrolled: v.headerIsScrolled,
    Note_Pills: wireList(v.notePills.map((t) => ({ ...t, IconId: '' }))),
    Notes_Filter: fromFilter(v.notesFilter),
    HasFiltersApplied: v.hasFiltersApplied,
    Filter_BottomSheetId: v.filterBottomSheetId,
    BottomSheetId_Filter_IsLoaded: v.bottomSheetIdFilterIsLoaded,
    BottomSheetId_Filter_ShowSubscriptionOnClick: v.bottomSheetIdFilterShowSubscriptionOnClick,
    Years: wireList(v.years),
    PageSize: v.pageSize,
    PageNumber: v.pageNumber,
    MaxRecords: v.maxRecords,
    Notes_List: wireList(v.notesList.map(fromNoteCardItem)),
    ResetPillsValue: v.resetPillsValue,
    PillsLoaded: v.pillsLoaded,
    Notes_Loading: v.notesLoading,
  });
  return { total: out.Out_Notes.Total, items: osList(out.Out_Notes.NoteCardItem_List).map(toNoteCardItem) };
}

/** UBTConnect_Notes_MCS.Get_Note_DynamicPills (controller.js:645-790): the user's distinct local note category ids
    (GetLocalNotesCategoryIds_ByUserId), then the server action Get_NotePills_ByNoteCategoryIds. */
async function get_Note_DynamicPills(): Promise<{ Text: string; Identifier: string }[]> {
  const ids = await getLocalNotesCategoryIds_ByUserId(Number(currentUserId() ?? 0));
  const out = await callAction('UBTConnect_Notes_MCS', 'ActionGet_NotePills_ByNoteCategoryIds', {
    In_NoteCategoryIds: wireList(ids),
  });
  return osList(out.Out_NotePills);
}

/** UBTConnect.GetNotes_Pills (UBTConnect.controller.js:10171-10246): "All" (NullTextIdentifier, selected), then one
    unselected pill per dynamic pill. */
export async function getNotes_Pills(): Promise<Tag[]> {
  const pills = await get_Note_DynamicPills();
  return [
    { Text: 'All', Identifier: '', IsSelected: true, Enabled: true },
    ...pills.map((p) => ({ Text: p.Text, Identifier: p.Identifier, IsSelected: false, Enabled: true })),
  ];
}

/** UBTConnect.GetNotes_FilterYear (UBTConnect.controller.js:10115-10159): the year options of the local notes. */
export const getNotes_FilterYear = (): Promise<string[]> => get_Note_DynamicFilter_YearOptions();

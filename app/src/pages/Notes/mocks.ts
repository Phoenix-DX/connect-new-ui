import type { RequestHandler } from 'msw';
import type { ActionOutputs, PathOf } from '@/api/client/callAction';
import { contractHandler } from '@/mocks/contract';
import { scenario } from '@/mocks/scenario';
import { osList, wireList } from '@/lib/os-wire';
import { Choice } from '@/lib/ubtConnect/staticEntities';
import { NULL_DATE_TIME, notesCollection, type NoteRow } from '@/containers/NoteListActions/mocks';

/** The wire shape of a note card (Connect_Notes_CS UI_Note_CardItem), as the contract types it. */
type NoteCardItemWire = ActionOutputs<
  PathOf<'UBTConnect', 'Notes/DataActionGetNotes'>
>['Out_Notes']['NoteCardItem_List']['List'][number];

/* Notes (P-MOCKS, P-MUTATION).
   - UBTConnect_Notes_MCS/ActionGet_NotePills_ByNoteCategoryIds: recorded only for an empty category list (fixture
     01-d17576a5.json: no pills; the TST test user had no notes). MOCK ASSUMPTION (user decision, Notes Q3,
     2026-10-15): the mock answers with the categories of the fictional notes, one pill per sent category id with
     Text = Identifier = that id. An empty list answers no pills, as the recording.
   - Notes/DataActionGetNotes: person data, never recorded. OutSystems MCP (Notes Q2): a pass-through to
     Connect_Notes_CS.GetNotes(PageNumber, FilterNote = Notes_Filter, PageSize) → Out_Notes; its logic is not readable.
     It reads the notes mock collection (`notesCollection`), so notes added, edited or deleted in the notes blocks show
     up here. MOCK ASSUMPTION (user decision, Notes Q2, 2026-10-15): the mock applies the Notes_Filter fields:
       SearchTerm    case-insensitive "contains" on the card title and the note texts ('' = all);
       NoteCategoryId the card's category equals it ('' = all; Notes_Filter holds one category id);
       Years         the note's year (edited date, else created date) is in the list (empty = all);
       SortByNewest  the selected sort: Choice.No (Oldest to Newest) oldest first, otherwise newest first;
       PageNumber / PageSize  pages of PageSize cards; Total = the number of matching cards.
     FICTIONAL: one card per ItemId + NoteCategoryId, the card texts below, SourceHeader.Label = the category id.
   Scenarios: real (the 3 fictional notes), empty (no notes at all, as the captured TST user: Notes Q1; the app start's
   Sync_Info_GetMain answers no LocalNotes in this scenario, so SyncNotes leaves the local notes copy empty), error
   (HTTP 500), loading (never answers). */

/** Fictional card texts per item (no real household). */
const FICTIONAL_ITEMS: Record<string, { title: string; subtitle: string }> = {
  '1': { title: 'Fenwick Household', subtitle: 'Northbrook' },
};

const noteDate = (n: NoteRow) => (n.DateEditedUtc === NULL_DATE_TIME ? n.DateCreatedUtc : n.DateEditedUtc);

/** The user's notes: none in the `empty` scenario (Notes Q1), else the notes mock collection. */
const userNotes = (): NoteRow[] => (scenario() === 'empty' ? [] : (notesCollection().all() as NoteRow[]));

function noteCards(rows: NoteRow[]): NoteCardItemWire[] {
  const cards = new Map<string, NoteRow[]>();
  for (const n of rows) {
    const key = `${n.NoteCategoryId}|${n.ItemId}`;
    cards.set(key, [...(cards.get(key) ?? []), n]);
  }
  return [...cards.values()].map((notes) => {
    const [first] = notes as [NoteRow, ...NoteRow[]];
    const texts = FICTIONAL_ITEMS[first.ItemId] ?? { title: `Item ${first.ItemId}`, subtitle: '' };
    return {
      Id: `${first.NoteCategoryId}-${first.ItemId}`,
      ItemId: first.ItemId,
      NoteCategoryId: first.NoteCategoryId,
      NoteCardContent: {
        Title: texts.title,
        Subtitle: texts.subtitle,
        SourceHeader: { IconId: '', ImageURL: '', Initials: '', Label: first.NoteCategoryId },
        Notes: {
          Total: notes.length,
          Note_Item_List: wireList(
            notes.map((n) => ({
              Id: n.Id,
              Note: n.Note,
              DateCreatedUtc: n.DateCreatedUtc,
              DateEditedUtc: n.DateEditedUtc,
            })),
          ),
        },
      },
    };
  });
}

export const handlers: RequestHandler[] = [
  contractHandler('UBTConnect_Notes_MCS', 'ActionGet_NotePills_ByNoteCategoryIds', ({ In_NoteCategoryIds }) => ({
    Out_NotePills: wireList([...new Set(osList(In_NoteCategoryIds))].map((id) => ({ Text: id, Identifier: id }))),
  })),
  contractHandler('UBTConnect', 'Notes/DataActionGetNotes', ({ Notes_Filter, PageNumber = 1, PageSize = 20 }) => {
    const term = (Notes_Filter?.SearchTerm ?? '').toLowerCase();
    const category = Notes_Filter?.NoteCategoryId ?? '';
    const years = osList(Notes_Filter?.Years);
    const oldestFirst = Notes_Filter?.SortByNewest === Choice.No;
    const rows = userNotes()
      .filter((n) => category === '' || n.NoteCategoryId === category)
      .filter((n) => years.length === 0 || years.includes(noteDate(n).slice(0, 4)))
      .sort((a, b) => (oldestFirst ? 1 : -1) * noteDate(a).localeCompare(noteDate(b)));
    const cards = noteCards(rows).filter(
      (c) =>
        term === '' ||
        c.NoteCardContent.Title.toLowerCase().includes(term) ||
        osList(c.NoteCardContent.Notes.Note_Item_List).some((i) => i.Note.toLowerCase().includes(term)),
    );
    return {
      Out_Notes: {
        Total: String(cards.length),
        NoteCardItem_List: wireList(cards.slice((PageNumber - 1) * PageSize, PageNumber * PageSize)),
      },
    };
  }),
];

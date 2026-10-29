import type { RequestHandler } from 'msw';
import { wireList } from '@/lib/os-wire';
import { contractHandler } from '@/mocks/contract';
import { notesCollection } from '@/containers/NoteListActions/mocks';

/* DataActionFetchEventNotes of the two users of ItemNotesSection (ScreenBlock_EventDetail and
   ScreenBlock_EventDetail_V2). Both captures (EventDetail and LDM_EventDetail_V2 analysis/calls.md, TST 2026-10-27)
   answer Total 0 and an empty list. Decision E-Q1 (a): the answer reads the in-memory notes collection (P-MUTATION) that
   AddNote, UpdateNote and DeleteNoteByNoteId change, so a new visit shows the notes added on the event before; the
   first visit answers as captured. The server finds the notes of the item by the block's In_ItemId and category:
   EventDetail the event id and "Orbit Event", LDM_EventDetail_V2 "EventHostId:EventId" and "LDM Event". */

const MODULE = 'Connect2_OrbitMobile_MUI';

/** The Notes record of one item: its notes in the collection, in the order they were added. */
function itemNotes(itemId: string, noteCategoryId: string) {
  const rows = notesCollection()
    .all()
    .filter((n) => String(n.ItemId) === itemId && n.NoteCategoryId === noteCategoryId);
  const items = rows.map((n) => ({
    Id: String(n.Id),
    Note: String(n.Note),
    DateCreatedUtc: String(n.DateCreatedUtc),
    DateEditedUtc: String(n.DateEditedUtc),
  }));
  return { Notes: { Total: rows.length, Note_Item_List: wireList(items) } };
}

export const handlers: RequestHandler[] = [
  contractHandler(MODULE, 'ScreenBlock_EventDetail/DataActionFetchEventNotes', ({ In_EventId }) =>
    itemNotes(In_EventId ?? '0', 'Orbit Event'),
  ),
  contractHandler(MODULE, 'ScreenBlock_EventDetail_V2/DataActionFetchEventNotes', ({ EventHostId, EventId }) =>
    itemNotes(`${EventHostId ?? '0'}:${EventId ?? '0'}`, 'LDM Event'),
  ),
];

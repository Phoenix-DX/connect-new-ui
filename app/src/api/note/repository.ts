import { callAction } from '@/api/client/callAction';
import { wireList } from '@/lib/os-wire';
import {
  toEntityNotes,
  toNoteAddResult,
  toNoteCardPage,
  toNoteDeleteResult,
  toNotePills,
  toNotesVariablesWire,
  toNoteUpdateResult,
} from './mapper';
import type {
  EntityNotesCallInputs,
  NoteAddResult,
  NoteCardPage,
  NoteDeleteResult,
  NoteList,
  NotePill,
  NotesVariables,
  NoteUpdateResult,
} from './types';

/* The server calls of the note domain, called with their OutSystems names and owners: the data action of the screen
   Notes, the server action of UBTConnect_Notes_MCS, the data action of the block Directory_EntityDetailsActions, and
   the note service actions of UBTConnect_Utils (CW_Notes). Each function makes one call. The callers decide when to
   call (screen and block flows). The writes are mocked: the real server never gets them. */

/** DataActionGetNotes of the screen Notes: a page of note cards. The screen fetches it on demand only
    (Refresh_GetNotes). The call sends every screen variable, as OutSystems does. */
export async function fetchNoteCards(variables: NotesVariables): Promise<NoteCardPage> {
  return toNoteCardPage(await callAction('UBTConnect', 'Notes/DataActionGetNotes', toNotesVariablesWire(variables)));
}

/** The server action Get_NotePills_ByNoteCategoryIds(In_NoteCategoryIds) of UBTConnect_Notes_MCS (called by the client
    action Get_Note_DynamicPills): a pill for each note category. */
export async function fetchNotePills(noteCategoryIds: string[]): Promise<NotePill[]> {
  return toNotePills(
    await callAction('UBTConnect_Notes_MCS', 'ActionGet_NotePills_ByNoteCategoryIds', {
      In_NoteCategoryIds: wireList(noteCategoryIds),
    }),
  );
}

/** DataActionFetchNotes of Directory_EntityDetailsActions: the notes of the entity. The block fetches it on demand only
    (Action_RefreshFetchNotes). The call sends every block variable, as OutSystems does. */
export async function fetchEntityNotes(inputs: EntityNotesCallInputs): Promise<NoteList> {
  return toEntityNotes(await callAction('UBTConnect', 'Directory_EntityDetailsActions/DataActionFetchNotes', inputs));
}

/** The service action AddNote(NoteCategoryId, ItemId, Note) of UBTConnect_Utils (NotesSheet, Handler_OnAddNoteRequested).
    ItemId is the item id as text. A write. Answers Success and the added note. */
export async function addNote(noteCategoryId: string, itemId: string, note: string): Promise<NoteAddResult> {
  return toNoteAddResult(
    await callAction('UBTConnect_Utils', 'ServiceAPIAddNote', {
      NoteCategoryId: noteCategoryId,
      ItemId: itemId,
      Note: note,
    }),
  );
}

/** The service action UpdateNote(NoteId, Note) of UBTConnect_Utils (NoteListActions, Handler_OnSaveEditRequested). A
    write. Answers success and IsNotFound. */
export async function updateNote(noteId: string, note: string): Promise<NoteUpdateResult> {
  return toNoteUpdateResult(
    await callAction('UBTConnect_Utils', 'ServiceAPIUpdateNote', { NoteId: noteId, Note: note }),
  );
}

/** The service action DeleteNoteByNoteId(NoteId) of UBTConnect_Utils (NoteListActions, Handler_OnDeleteNoteRequested).
    A write. Answers Success and WasFound. */
export async function deleteNote(noteId: string): Promise<NoteDeleteResult> {
  return toNoteDeleteResult(await callAction('UBTConnect_Utils', 'ServiceAPIDeleteNoteByNoteId', { NoteId: noteId }));
}

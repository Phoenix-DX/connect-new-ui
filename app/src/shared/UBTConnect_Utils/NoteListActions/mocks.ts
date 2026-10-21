import type { RequestHandler } from 'msw';
import { contractHandler } from '../../../mocks/contract';
import { collection } from '../../../mocks/store';
import { currDateTime } from '../../lib/osDateTime';

/* The notes writes of CW_Notes (UpdateNote, DeleteNoteByNoteId here; AddNote in ../NotesSheet/mocks.ts) were never
   recorded (x-mock-source fictional): they change the in-memory notes collection (P-MUTATION), never the real server.
   Note texts are person data, so the seed is fictional. The screens' notes data actions are not built yet; they will
   read the same collection (`notesCollection`). */
export type NoteRow = {
  Id: string;
  ItemId: string;
  NoteCategoryId: string;
  Note: string;
  DateCreatedUtc: string;
  DateEditedUtc: string;
};
export const NULL_DATE_TIME = '1900-01-01T00:00:00';

const SEED: NoteRow[] = [
  ['501', 'Bring the picnic blanket', '2026-10-01T09:00:00'],
  ['502', 'Ask about the meeting room', '2026-09-20T10:30:00'],
  ['503', 'Check the parking plan', '2026-08-02T16:15:00'],
].map(([Id = '', Note = '', DateCreatedUtc = '']) => ({
  Id,
  ItemId: '1',
  NoteCategoryId: 'Household',
  Note,
  DateCreatedUtc,
  DateEditedUtc: NULL_DATE_TIME,
}));

export const notesCollection = () => collection('CW_Notes.notes', () => SEED, 'Id');

export const handlers: RequestHandler[] = [
  contractHandler('UBTConnect_Utils', 'ServiceAPIUpdateNote', ({ NoteId, Note }) => {
    const notes = notesCollection();
    if (!notes.get(NoteId)) return { success: false, IsNotFound: true };
    notes.upsert({ Id: NoteId, Note, DateEditedUtc: currDateTime() });
    return { success: true, IsNotFound: false };
  }),
  contractHandler('UBTConnect_Utils', 'ServiceAPIDeleteNoteByNoteId', ({ NoteId }) => {
    const notes = notesCollection();
    const wasFound = notes.get(NoteId) !== undefined;
    notes.remove(NoteId);
    return { Success: wasFound, WasFound: wasFound };
  }),
];

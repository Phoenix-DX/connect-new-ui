import type { RequestHandler } from 'msw';
import { contractHandler } from '@/mocks/contract';
import { currDateTime } from '@/shared/lib/osDateTime';
import { NULL_DATE_TIME, notesCollection } from '@/shared/UBTConnect_Utils/NoteListActions/mocks';

/* AddNote was never recorded (x-mock-source fictional): the note joins the in-memory notes collection (P-MUTATION),
   answered with the contract shape; the new note has no edit date (the null date). */
export const handlers: RequestHandler[] = [
  contractHandler('UBTConnect_Utils', 'ServiceAPIAddNote', ({ NoteCategoryId, ItemId, Note }) => {
    const row = notesCollection().upsert({
      Id: '',
      ItemId,
      NoteCategoryId,
      Note,
      DateCreatedUtc: currDateTime(),
      DateEditedUtc: NULL_DATE_TIME,
    });
    return {
      Success: true,
      Note_Added: {
        Id: String(row.Id),
        ItemId,
        NoteCategoryId,
        DateCreatedUtc: String(row.DateCreatedUtc),
        DateEditedUtc: NULL_DATE_TIME,
      },
    };
  }),
];

import { describe, expect, it } from 'vitest';
import type { NoteCardItem } from '@/api/note';
import { noteCardTarget } from './notesState';

/* Handler_OnClickNoteCardItem, OneSchool Global card (live Notes.mvc.js:1556-1717, TST 2026-10-29): always
   OneSchoolGlobalCarousel, with the ItemIds of the OneSchool Global cards of Notes_List as the preload object; the
   filter category no longer counts. Fictional ids. */
const card = (itemId: string, noteCategoryId: string): NoteCardItem => ({ itemId, noteCategoryId }) as NoteCardItem;

describe('noteCardTarget, OneSchool Global card', () => {
  it('opens OneSchoolGlobalCarousel with the ItemIds of the OneSchool Global cards of Notes_List', () => {
    const notesList = [
      card('1430', 'OneSchool Global'),
      card('7', 'Household'),
      card('01431', 'OneSchool Global'),
      card('1432', 'OneSchool Global'),
    ];
    expect(noteCardTarget('1431', '0', 'OneSchool Global', { notesList })).toEqual({
      path: '/UBTConnect/OneSchoolGlobalCarousel',
      inputs: { In_StartingObjectId: '1431' },
      preload: { CarouselItemIds: ['1430', '1431', '1432'] },
    });
  });
});

/* Handler_OnClickNoteCardItem, Interchange card (live Notes.mvc.js:1618-1628, TST publish of 2026-10-29): the item id
   of an interchange note is "<LocalityId>:<InterchangeLocalityId>" (Directory_EntityDetailsActions); the card opens
   Locality_Details with LocalityId = TextToLongInteger(Notes_InterchangeId_ExtractId(ObjectId).LocalityId). */
describe('noteCardTarget, Interchange card', () => {
  it('opens Locality_Details of the locality part of the note item id', () => {
    expect(noteCardTarget('252:5', '0', 'Interchange', { notesList: [] })).toEqual({
      path: '/UBTConnect/Locality_Details',
      inputs: { LocalityId: '252' },
    });
  });

  it('an old note id without ":" opens Locality_Details of that id', () => {
    expect(noteCardTarget('0252', '0', 'Interchange', { notesList: [] })).toEqual({
      path: '/UBTConnect/Locality_Details',
      inputs: { LocalityId: '252' },
    });
  });
});

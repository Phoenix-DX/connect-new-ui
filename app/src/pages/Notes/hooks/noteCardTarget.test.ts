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

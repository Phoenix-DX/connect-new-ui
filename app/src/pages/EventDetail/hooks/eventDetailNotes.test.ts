import { describe, expect, it } from 'vitest';
import type { Notes } from '@/lib/ubtConnectLibrary/structures';
import { eventDetailReducer, INITIAL_EVENT_DETAIL_STATE } from './eventDetailState';

/* EventNotes of ScreenBlock_EventDetail (TST 2026-10-27): OnAfterFetch_FetchEventNotes, Handler_OnNotesChanged and
   Handler_OnNoteDeleted (ScreenBlock_EventDetail.mvc.js:1839-1910, :2450-2470). */
const notes: Notes = {
  Total: 2,
  Note_Item_List: [
    { Id: '41', Note: 'Ask about the parking at the hall', DateCreatedUtc: '2026-10-27T08:15:00Z' },
    { Id: '42', Note: 'Bring two extra chairs', DateCreatedUtc: '2026-10-27T08:20:00Z' },
  ],
};

describe('eventDetailReducer: EventNotes', () => {
  it('starts with no notes (Total 0)', () => {
    expect(INITIAL_EVENT_DETAIL_STATE.eventNotes).toEqual({ Total: 0, Note_Item_List: [] });
  });

  it('eventNotesSet assigns the fetched or changed notes', () => {
    const state = eventDetailReducer(INITIAL_EVENT_DETAIL_STATE, { type: 'eventNotesSet', notes });
    expect(state.eventNotes).toBe(notes);
  });

  it('noteDeleted keeps the other notes and sets Total to their count', () => {
    const state = eventDetailReducer(eventDetailReducer(INITIAL_EVENT_DETAIL_STATE, { type: 'eventNotesSet', notes }), {
      type: 'noteDeleted',
      noteId: '41',
    });
    expect(state.eventNotes).toEqual({ Total: 1, Note_Item_List: [notes.Note_Item_List?.[1]] });
  });
});

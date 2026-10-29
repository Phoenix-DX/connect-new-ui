import { describe, expect, it } from 'vitest';
import {
  toEntityNotes,
  toNoteAddResult,
  toNoteCardItem,
  toNoteCardPage,
  toNoteDeleteResult,
  toNoteList,
  toNotePills,
  toNotesVariablesWire,
  toNoteUpdateResult,
  type NoteCardItemWire,
  type NoteItemWire,
} from './mapper';
import type { NoteCardItem, NotesVariables } from './types';

/** UBTConnectLibrary Note_Item as the server sends it. */
const noteWire = (fields: Partial<NoteItemWire> = {}): NoteItemWire => ({
  Id: '0',
  Note: '',
  DateCreatedUtc: '1900-01-01T00:00:00',
  DateEditedUtc: '1900-01-01T00:00:00',
  ...fields,
});

const picnic = noteWire({ Id: '611', Note: 'Bring the picnic blanket', DateCreatedUtc: '2026-10-01T09:00:00' });
const parking = noteWire({
  Id: '612',
  Note: 'Check the parking plan',
  DateCreatedUtc: '2026-08-02T16:15:00',
  DateEditedUtc: '2026-08-03T08:40:00',
});

/** The note card of the Fenwick household of Northbrook, as the server sends it. */
const fenwickWire: NoteCardItemWire = {
  Id: 'Household-7310',
  ItemId: '7310',
  NoteCategoryId: 'Household',
  NoteCardContent: {
    Title: 'Fenwick Household',
    Subtitle: 'Northbrook',
    SourceHeader: { IconId: 'home', ImageURL: '', Initials: 'FH', Label: 'Household' },
    Notes: { Total: 2, Note_Item_List: { List: [picnic, parking] } },
  },
};

/** The same card as the screen keeps it. */
const fenwick: NoteCardItem = {
  id: 'Household-7310',
  itemId: '7310',
  itemId2: '0',
  hasDetailAccess: false,
  noteCategoryId: 'Household',
  title: 'Fenwick Household',
  subtitle: 'Northbrook',
  sourceHeader: { iconId: 'home', imageURL: '', initials: 'FH', label: 'Household' },
  notes: { Total: 2, Note_Item_List: [{ ...picnic }, { ...parking }] },
  channelName: '',
  channelLogo: '',
  publishedAt: '1900-01-01T00:00:00',
};

const variables = (fields: Partial<NotesVariables> = {}): NotesVariables => ({
  headerIsScrolled: false,
  notePills: [{ Text: 'All', Identifier: '', IsSelected: true, Enabled: true }],
  notesFilter: { noteCategoryId: '', searchTerm: 'picnic', sortByNewest: '', years: ['2026'] },
  hasFiltersApplied: false,
  filterBottomSheetId: 'b11-BottomSheet',
  bottomSheetIdFilterIsLoaded: true,
  bottomSheetIdFilterShowSubscriptionOnClick: false,
  years: ['2026', '2025'],
  pageSize: 20,
  pageNumber: 2,
  maxRecords: '24',
  notesList: [],
  resetPillsValue: false,
  pillsLoaded: true,
  notesLoading: true,
  ...fields,
});

describe('note mapper', () => {
  it('toNoteList unwraps the list and copies every field of each note', () => {
    expect(toNoteList({ Total: 2, Note_Item_List: { List: [picnic, parking] } })).toEqual({
      Total: 2,
      Note_Item_List: [picnic, parking],
    });
    expect(toNoteList({ Total: 0, Note_Item_List: { List: [] } })).toEqual({ Total: 0, Note_Item_List: [] });
  });

  it('toNoteCardItem flattens NoteCardContent', () => {
    expect(toNoteCardItem(fenwickWire)).toEqual(fenwick);
  });

  it('toNoteCardPage keeps the total as text and maps each card', () => {
    expect(toNoteCardPage({ Out_Notes: { Total: '24', NoteCardItem_List: { List: [fenwickWire] } } })).toEqual({
      total: '24',
      items: [fenwick],
    });
    expect(toNoteCardPage({ Out_Notes: { Total: '0', NoteCardItem_List: { List: [] } } })).toEqual({
      total: '0',
      items: [],
    });
  });

  it('toNotesVariablesWire sends every screen variable with its OutSystems name, in the original order', () => {
    const wire = toNotesVariablesWire(variables({ notesList: [fenwick] }));
    expect(Object.keys(wire)).toEqual([
      'HeaderIsScrolled',
      'Note_Pills',
      'Notes_Filter',
      'HasFiltersApplied',
      'Filter_BottomSheetId',
      'BottomSheetId_Filter_IsLoaded',
      'BottomSheetId_Filter_ShowSubscriptionOnClick',
      'Years',
      'PageSize',
      'PageNumber',
      'MaxRecords',
      'Notes_List',
      'ResetPillsValue',
      'PillsLoaded',
      'Notes_Loading',
    ]);
    expect(wire).toEqual({
      HeaderIsScrolled: false,
      Note_Pills: { List: [{ Text: 'All', Identifier: '', IsSelected: true, Enabled: true, IconId: '' }] },
      Notes_Filter: { NoteCategoryId: '', SearchTerm: 'picnic', SortByNewest: '', Years: { List: ['2026'] } },
      HasFiltersApplied: false,
      Filter_BottomSheetId: 'b11-BottomSheet',
      BottomSheetId_Filter_IsLoaded: true,
      BottomSheetId_Filter_ShowSubscriptionOnClick: false,
      Years: { List: ['2026', '2025'] },
      PageSize: 20,
      PageNumber: 2,
      MaxRecords: '24',
      Notes_List: { List: [fenwickWire] },
      ResetPillsValue: false,
      PillsLoaded: true,
      Notes_Loading: true,
    });
  });

  it('toNotesVariablesWire gives the missing note fields of a card their defaults', () => {
    const partial: NoteCardItem = { ...fenwick, notes: { Note_Item_List: [{ Note: 'Ask about the meeting room' }] } };
    const wire = toNotesVariablesWire(variables({ notesList: [partial], notePills: [] }));
    expect(wire.Note_Pills).toEqual({ List: [] });
    expect(wire.Notes_List?.List[0]?.NoteCardContent.Notes).toEqual({
      Total: 0,
      Note_Item_List: {
        List: [
          {
            Id: '0',
            Note: 'Ask about the meeting room',
            DateCreatedUtc: '1900-01-01T00:00:00',
            DateEditedUtc: '1900-01-01T00:00:00',
          },
        ],
      },
    });
    const empty = toNotesVariablesWire(variables({ notesList: [{ ...fenwick, notes: {} }] }));
    expect(empty.Notes_List?.List[0]?.NoteCardContent.Notes).toEqual({ Total: 0, Note_Item_List: { List: [] } });
  });

  it('toNotePills keeps the text and the identifier of each pill', () => {
    expect(
      toNotePills({
        Out_NotePills: {
          List: [
            { Text: 'Household', Identifier: 'Household' },
            { Text: 'Supper Meeting', Identifier: 'SupperMeeting' },
          ],
        },
      }),
    ).toEqual([
      { text: 'Household', identifier: 'Household' },
      { text: 'Supper Meeting', identifier: 'SupperMeeting' },
    ]);
    expect(toNotePills({ Out_NotePills: { List: [] } })).toEqual([]);
  });

  it('toEntityNotes maps the notes of the entity', () => {
    expect(toEntityNotes({ Notes: { Total: 1, Note_Item_List: { List: [parking] } } })).toEqual({
      Total: 1,
      Note_Item_List: [parking],
    });
  });

  it('toNoteAddResult keeps Success and the id and the dates of the added note', () => {
    expect(
      toNoteAddResult({
        Success: true,
        Note_Added: {
          Id: '1001',
          ItemId: '7310',
          NoteCategoryId: 'Household',
          DateCreatedUtc: '2026-10-23T10:15:00',
          DateEditedUtc: '1900-01-01T00:00:00',
        },
      }),
    ).toEqual({
      success: true,
      noteAdded: { Id: '1001', DateCreatedUtc: '2026-10-23T10:15:00', DateEditedUtc: '1900-01-01T00:00:00' },
    });
  });

  it('toNoteUpdateResult and toNoteDeleteResult keep the flags of the writes', () => {
    expect(toNoteUpdateResult({ success: false, IsNotFound: true })).toEqual({ success: false, isNotFound: true });
    expect(toNoteDeleteResult({ Success: true, WasFound: true })).toEqual({ success: true, wasFound: true });
  });
});

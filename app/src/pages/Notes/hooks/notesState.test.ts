import { describe, expect, it } from 'vitest';
import type { NoteCardItem } from '@/api/note';
import {
  canLoadMore,
  INITIAL_NOTES_STATE,
  noteCardTarget,
  notePillTags,
  notesReducer,
  selectedCategoryId,
  skeletonNotes,
  skeletonPills,
  type NotesState,
} from './notesState';

/* The pure part of the Notes screen: the variables after OnInitialize, the reducer and the client actions. Fictional
   cards. */
const card = (id: string): NoteCardItem => ({
  id,
  itemId: id,
  noteCategoryId: 'Household',
  title: `Card ${id}`,
  subtitle: 'Northbrook',
  sourceHeader: { iconId: '', imageURL: '', initials: '', label: 'Household' },
  notes: { Total: 1, Note_Item_List: [{ Id: id, Note: 'Bring the picnic blanket' }] },
});
const withList = (patch: Partial<NotesState>): NotesState => ({ ...INITIAL_NOTES_STATE, ...patch });

describe('notesState', () => {
  it('starts with the default variables and the skeleton loaders of OnInitialize', () => {
    expect(INITIAL_NOTES_STATE).toMatchObject({
      headerIsScrolled: false,
      notesFilter: { noteCategoryId: '', searchTerm: '', sortByNewest: '', years: [] },
      hasFiltersApplied: false,
      filterBottomSheetId: '',
      years: [],
      pageSize: 20,
      pageNumber: 1,
      maxRecords: '0',
      resetPillsValue: true,
      pillsLoaded: false,
      notesLoading: false,
      getNotesList: [],
      isInitialized: false,
    });
    expect(INITIAL_NOTES_STATE.notePills).toEqual(skeletonPills());
    expect(INITIAL_NOTES_STATE.notesList).toEqual(skeletonNotes());
  });

  it('SkeletonLoader_Pills gives four unselected, enabled pills; SkeletonLoader_Notes six placeholder cards', () => {
    expect(skeletonPills()).toEqual([
      { Text: 'All', Identifier: 'All', IsSelected: false, Enabled: true },
      { Text: 'Dumyy size', Identifier: 'Dumyy size', IsSelected: false, Enabled: true },
      { Text: 'Dumyy size', Identifier: 'Dumyy size', IsSelected: false, Enabled: true },
      { Text: 'Dumyy size', Identifier: 'Dumyy size', IsSelected: false, Enabled: true },
    ]);
    const notes = skeletonNotes();
    expect(notes.map((n) => [n.title, n.subtitle])).toEqual([
      ['Dumyy Dummy Dummy Dummy', 'Dummy Dummy'],
      ...Array.from({ length: 5 }, () => ['Dumyy size', 'Dumyy size']),
    ]);
    expect(notes[0]).toMatchObject({ id: '', itemId: '0', noteCategoryId: '', notes: { Total: 0 } });
  });

  it('the reducer assigns the variables of the patch and keeps the others', () => {
    const next = notesReducer(INITIAL_NOTES_STATE, { notesLoading: true, pageNumber: 2 });
    expect(next).toEqual({ ...INITIAL_NOTES_STATE, notesLoading: true, pageNumber: 2 });
    expect(next.notePills).toBe(INITIAL_NOTES_STATE.notePills);
  });

  it('GetNotes_Pills: "All" selected first, then one unselected pill per dynamic pill', () => {
    expect(
      notePillTags([
        { text: 'Household', identifier: 'Household' },
        { text: 'Supper Meeting', identifier: 'Supper Meeting' },
      ]),
    ).toEqual([
      { Text: 'All', Identifier: '', IsSelected: true, Enabled: true },
      { Text: 'Household', Identifier: 'Household', IsSelected: false, Enabled: true },
      { Text: 'Supper Meeting', Identifier: 'Supper Meeting', IsSelected: false, Enabled: true },
    ]);
    expect(notePillTags([])).toEqual([{ Text: 'All', Identifier: '', IsSelected: true, Enabled: true }]);
  });

  it('Handler_OnClickPill takes the identifier of the first selected pill ("" for none)', () => {
    expect(
      selectedCategoryId([
        { Text: 'All', Identifier: '', IsSelected: false },
        { Text: 'Household', Identifier: 'Household', IsSelected: true },
      ]),
    ).toBe('Household');
    // A pill without IsSelected counts as selected (the OutSystems default True).
    expect(selectedCategoryId([{ Text: 'School', Identifier: 'School' }])).toBe('School');
    expect(selectedCategoryId([{ Text: 'All', Identifier: '', IsSelected: false }])).toBe('');
  });

  it('Notes_CardListOnLoadMore: only when the last page had cards but fewer than MaxRecords; no loading clause', () => {
    expect(canLoadMore(withList({ getNotesList: [card('1')], maxRecords: '3' }))).toBe(true);
    expect(canLoadMore(withList({ getNotesList: [card('1')], maxRecords: '3', notesLoading: true }))).toBe(true);
    expect(canLoadMore(withList({ getNotesList: [], maxRecords: '3' }))).toBe(false);
    expect(canLoadMore(withList({ getNotesList: [card('1'), card('2')], maxRecords: '2' }))).toBe(false);
  });

  it('Handler_OnClickNoteCardItem: Household, OneSchool Global and Supper Meeting open their screen', () => {
    expect(noteCardTarget('12', 'Household')).toEqual({
      path: '/UBTConnect/HouseholdDetails',
      inputs: { HouseholdId: '12' },
    });
    expect(noteCardTarget('7', 'OneSchool Global')).toEqual({
      path: '/UBTConnect/OneSchoolGlobalDetails',
      inputs: { In_OneSchoolGlobalId: '7' },
    });
    expect(noteCardTarget('3', 'Supper Meeting')).toEqual({
      path: '/UBTConnect/SupperMeeting_Details',
      inputs: { In_SubdivsionId: '3' },
    });
    expect(noteCardTarget('5', 'Locality')).toBeNull();
  });
});

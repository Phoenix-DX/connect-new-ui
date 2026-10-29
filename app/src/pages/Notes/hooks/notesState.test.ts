import { describe, expect, it } from 'vitest';
import type { NoteCardItem } from '@/api/note';
import {
  canLoadMore,
  INITIAL_NOTES_STATE,
  getNotes_FilterYear,
  noteCardTarget,
  unauthorizedObjectMessage,
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
  itemId2: '0',
  hasDetailAccess: true,
  noteCategoryId: 'Household',
  title: `Card ${id}`,
  subtitle: 'Northbrook',
  sourceHeader: { iconId: '', imageURL: '', initials: '', label: 'Household' },
  notes: { Total: 1, Note_Item_List: [{ Id: id, Note: 'Bring the picnic blanket' }] },
  channelName: '',
  channelLogo: '',
  publishedAt: '1900-01-01T00:00:00',
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
      notesLoading: true,
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

  it('Handler_OnClickNoteCardItem (TST 2026-10-29): the screen of each category with an action', () => {
    const context = { notesList: [card('12'), { ...card('13'), hasDetailAccess: false }, card('014')] };
    expect(noteCardTarget('12', '0', 'Household', context)).toEqual({
      path: '/UBTConnect/HouseholdCarousel',
      inputs: { In_StartingHouseholdId: '12' },
      preload: {
        CarouselHouseholdItem: [
          { SwipeAction: { ActionId: '', Parameters: '' }, Household: '12' },
          { SwipeAction: { ActionId: '', Parameters: '' }, Household: '14' },
        ],
      },
    });
    expect(noteCardTarget('feed-88', '0', 'Feed Item', context)).toEqual({
      path: '/UBTConnect/FeedItemDetail',
      inputs: { FeedItemId: 'feed-88' },
    });
    expect(noteCardTarget('event-5', '0', 'Assemble Event', context)).toEqual({
      path: '/UBTConnect/AssembleDetail',
      inputs: { EventId: 'event-5' },
    });
    expect(noteCardTarget('41', '12', 'Member', context)).toEqual({
      path: '/UBTConnect/Household_Relations',
      inputs: { MemberId: '41', HouseholdId: '12' },
    });
    expect(noteCardTarget('03', '0', 'Supper Meeting', context)).toEqual({
      path: '/UBTConnect/SupperMeeting_Details',
      inputs: { In_SubdivsionId: '3' },
    });
    expect(noteCardTarget('252:5', '0', 'Interchange', context)).toEqual({
      path: '/UBTConnect/Locality_Details',
      inputs: { LocalityId: '252' },
    });
    for (const other of ['LDM Event', 'locality', 'Locality Contact', 'Orbit Event', 'Update', 'X'])
      expect(noteCardTarget('5', '0', other, context)).toBeNull();
  });

  it('Handler_OnClickUnauthorizedObject: the pill text of the category, lower case, without a final "s"', () => {
    const pills = notePillTags([
      { text: 'Households', identifier: 'Household' },
      { text: 'OneSchool Global', identifier: 'OneSchool Global' },
    ]);
    expect(unauthorizedObjectMessage('Household', pills)).toBe('This household is no longer available.');
    expect(unauthorizedObjectMessage('OneSchool Global', pills)).toBe('This oneschool global is no longer available.');
    expect(unauthorizedObjectMessage('Member', pills)).toBe('This  is no longer available.');
  });

  it('GetNotes_FilterYear: Get_RecentYears(3), the current year and the two years before it', () => {
    expect(getNotes_FilterYear(new Date(2026, 9, 29))).toEqual(['2026', '2025', '2024']);
  });

  it('GetNotes_Pills(In_SelectedPillId): the pill of the selected category is selected, "All" only for none', () => {
    expect(notePillTags([{ text: 'Households', identifier: 'Household' }], 'Household')).toEqual([
      { Text: 'All', Identifier: '', IsSelected: false, Enabled: true },
      { Text: 'Households', Identifier: 'Household', IsSelected: true, Enabled: true },
    ]);
  });
});

import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { NULL_DATE_TIME, notesCollection } from '@/containers/NoteListActions/mocks';
import { addNote, deleteNote, fetchEntityNotes, fetchNoteCards, fetchNotePills, updateNote } from './repository';
import type { EntityNotesCallInputs, NotesVariables } from './types';

/* The MSW mocks of the test setup answer from the fictional notes collection (containers/NoteListActions/
   mocks.ts): three notes of the household item 1 (category Household), the newest first. The writes change this
   collection, so the tests run in order. */

const notesVariables: NotesVariables = {
  headerIsScrolled: false,
  notePills: [],
  notesFilter: { noteCategoryId: '', searchTerm: '', sortByNewest: '', years: [] },
  hasFiltersApplied: false,
  filterBottomSheetId: '',
  bottomSheetIdFilterIsLoaded: false,
  bottomSheetIdFilterShowSubscriptionOnClick: false,
  years: [],
  pageSize: 20,
  pageNumber: 1,
  maxRecords: '0',
  notesList: [],
  resetPillsValue: true,
  pillsLoaded: false,
  notesLoading: true,
};

/** The scalar variables of Directory_EntityDetailsActions for the household item 1. */
const entityInputs: EntityNotesCallInputs = {
  IsEnabled: true,
  EntityType: 'Household',
  EntityId: '1',
  useViewDetails: false,
  EntityExtraDataJSON: '',
  Local_isBookmarked: false,
  Local_isBookmarked_C2: true,
  Local_BookmarkType: '',
  Local_BookmarkTypeId_C2: 'Household',
  Local_BookmarkGroup: '',
  isLoaded: false,
  Local_ShareType: '',
  ShowCallPopUp: false,
  ShowEmailPopUp: false,
  ShowSharePopup: false,
  ShowNotesSheet: false,
  isFetchContacts: false,
  ShowIconLabels: true,
  ShareSheet_OverwriteImageURL: '',
  NoteCategoryId: 'Household',
};

const noteIds = (notes: { Note_Item_List?: { Id?: string }[] }) => (notes.Note_Item_List ?? []).map((n) => n.Id);

beforeEach(() => {
  sessionStorage.setItem('mock:latency', '0');
  window.__osCalls = [];
});
afterEach(() => {
  sessionStorage.clear();
});

describe('note repository', () => {
  it('fetchNoteCards calls DataActionGetNotes of the screen Notes with every screen variable', async () => {
    const page = await fetchNoteCards(notesVariables);
    expect(window.__osCalls).toEqual([
      expect.objectContaining({
        module: 'UBTConnect',
        owner: 'Notes',
        action: 'DataActionGetNotes',
        inputNames: [
          'BottomSheetId_Filter_IsLoaded',
          'BottomSheetId_Filter_ShowSubscriptionOnClick',
          'Filter_BottomSheetId',
          'HasFiltersApplied',
          'HeaderIsScrolled',
          'MaxRecords',
          'Note_Pills',
          'Notes_Filter',
          'Notes_List',
          'Notes_Loading',
          'PageNumber',
          'PageSize',
          'PillsLoaded',
          'ResetPillsValue',
          'Years',
        ],
      }),
    ]);
    // The household card and the two OneSchool Global cards of pages/Notes/mocks.ts (OneSchoolGlobalCarousel Q2 (a)).
    expect(page.total).toBe('3');
    expect(page.items).toHaveLength(3);
    expect(
      page.items
        .filter((i) => i.noteCategoryId !== 'Household')
        .map((i) => i.itemId)
        .sort(),
    ).toEqual(['1431', '1432']);
    const household = page.items.find((i) => i.noteCategoryId === 'Household');
    expect(household).toEqual(
      expect.objectContaining({
        itemId: '1',
        noteCategoryId: 'Household',
        title: 'Fenwick Household',
        subtitle: 'Northbrook',
      }),
    );
    expect(household?.notes.Total).toBe(3);
    expect(noteIds(household?.notes ?? {})).toEqual(['501', '502', '503']);
  });

  it('fetchNotePills calls Get_NotePills_ByNoteCategoryIds with the category ids', async () => {
    expect(await fetchNotePills(['Household', 'Household'])).toEqual([{ text: 'Household', identifier: 'Household' }]);
    // An empty list answers the nine pills of the TST capture of 2026-10-29 (pages/Notes/mocks.ts).
    expect((await fetchNotePills([])).map((p) => p.text)).toEqual([
      'Assemble',
      'Feeds',
      'Households',
      'Interchange',
      'LDM',
      'Members',
      'OneSchool Global',
      'Orbit',
      'Supper Meetings',
    ]);
    expect(window.__osCalls).toEqual([
      expect.objectContaining({
        module: 'UBTConnect_Notes_MCS',
        owner: undefined,
        action: 'ActionGet_NotePills_ByNoteCategoryIds',
        inputNames: ['In_NoteCategoryIds'],
      }),
      expect.objectContaining({ action: 'ActionGet_NotePills_ByNoteCategoryIds' }),
    ]);
  });

  it('fetchEntityNotes calls DataActionFetchNotes of Directory_EntityDetailsActions with the block variables', async () => {
    const notes = await fetchEntityNotes(entityInputs);
    expect(window.__osCalls).toEqual([
      expect.objectContaining({
        module: 'UBTConnect',
        owner: 'Directory_EntityDetailsActions',
        action: 'DataActionFetchNotes',
        inputNames: Object.keys(entityInputs).sort(),
      }),
    ]);
    expect(notes.Total).toBe(3);
    expect(notes.Note_Item_List?.[0]).toEqual({
      Id: '501',
      Note: 'Bring the picnic blanket',
      DateCreatedUtc: '2026-10-01T09:00:00',
      DateEditedUtc: NULL_DATE_TIME,
    });
    expect(await fetchEntityNotes({ ...entityInputs, EntityId: '2' })).toEqual({ Total: 0, Note_Item_List: [] });
  });

  it('addNote calls AddNote of UBTConnect_Utils and answers Success and the added note', async () => {
    const result = await addNote('Household', '1', 'Ask about the hymn books');
    expect(window.__osCalls).toEqual([
      expect.objectContaining({
        module: 'UBTConnect_Utils',
        action: 'ServiceAPIAddNote',
        inputNames: ['ItemId', 'Note', 'NoteCategoryId'],
      }),
    ]);
    const row = notesCollection().get(result.noteAdded.Id);
    expect(row).toEqual(
      expect.objectContaining({ ItemId: '1', NoteCategoryId: 'Household', Note: 'Ask about the hymn books' }),
    );
    expect(result).toEqual({
      success: true,
      noteAdded: { Id: row?.Id, DateCreatedUtc: row?.DateCreatedUtc, DateEditedUtc: NULL_DATE_TIME },
    });
    expect((await fetchEntityNotes(entityInputs)).Total).toBe(4);
  });

  it('updateNote calls UpdateNote of UBTConnect_Utils and answers success and IsNotFound', async () => {
    expect(await updateNote('502', 'Ask about the larger meeting room')).toEqual({ success: true, isNotFound: false });
    expect(notesCollection().get('502')).toEqual(
      expect.objectContaining({ Note: 'Ask about the larger meeting room' }),
    );
    expect(await updateNote('424242', 'No note')).toEqual({ success: false, isNotFound: true });
    expect(window.__osCalls).toEqual([
      expect.objectContaining({
        module: 'UBTConnect_Utils',
        action: 'ServiceAPIUpdateNote',
        inputNames: ['Note', 'NoteId'],
      }),
      expect.objectContaining({ action: 'ServiceAPIUpdateNote' }),
    ]);
  });

  it('deleteNote calls DeleteNoteByNoteId of UBTConnect_Utils and answers Success and WasFound', async () => {
    expect(await deleteNote('503')).toEqual({ success: true, wasFound: true });
    expect(await deleteNote('503')).toEqual({ success: false, wasFound: false });
    expect(window.__osCalls).toEqual([
      expect.objectContaining({
        module: 'UBTConnect_Utils',
        action: 'ServiceAPIDeleteNoteByNoteId',
        inputNames: ['NoteId'],
      }),
      expect.objectContaining({ action: 'ServiceAPIDeleteNoteByNoteId' }),
    ]);
    expect(noteIds(await fetchEntityNotes(entityInputs))).not.toContain('503');
  });

  it('a failed call raises the exception of callAction', async () => {
    sessionStorage.setItem('mock:mock', 'error');
    await expect(fetchNoteCards(notesVariables)).rejects.toThrow('Request failed with status 500');
    await expect(fetchEntityNotes(entityInputs)).rejects.toThrow('Request failed with status 500');
    await expect(fetchNotePills(['Household'])).rejects.toThrow('Request failed with status 500');
  });
});

import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { CommunicationException, ServerException } from '../../lib/os-exceptions';
import { setSignedInUser } from '../session';
import { compareKeys, memoryDatabase, type LocalDatabase, type Row } from './database';
import { LOCAL_NOTE, METADATA_TABLE } from './entities';
import {
  createOrUpdate_LocalNote,
  delete_LocalNoteByNoteId,
  get_LocalNoteByNoteId,
  get_Note_DynamicFilter_YearOptions,
  getLocalNotesCategoryIds_ByUserId,
  localNotesSchemas,
  setLocalNotesDatabase,
  syncNotes,
} from './localNotes';

vi.mock('../feedback', async (importOriginal) => ({
  ...(await importOriginal<typeof import('../feedback')>()),
  showExceptionMessage: vi.fn(() => Promise.resolve()),
  showCommunicationExceptionMessage: vi.fn(),
}));
const feedback = await import('../feedback');
const { UserException, SystemException, isSystemException, isUserException, raiseToFlowHandler } =
  await import('../exceptions');

const USER = 990001;
let db: LocalDatabase;
const rows = () =>
  db.transaction([LOCAL_NOTE.tableName], 'readonly', (tx) => tx.getAllByIndex(LOCAL_NOTE.tableName, 'USERID', USER));
const meta = () =>
  db.transaction([METADATA_TABLE.tableName], 'readonly', (tx) =>
    tx.get(METADATA_TABLE.tableName, [LOCAL_NOTE.key, LOCAL_NOTE.moduleKey]),
  );

/* UBTConnect_Notes_MCS client actions on the in-memory database (same behaviour as the IndexedDB one). */
describe('localNotes (UBTConnect_Notes_MCS)', () => {
  beforeEach(() => {
    db = memoryDatabase(localNotesSchemas());
    setLocalNotesDatabase(db);
    setSignedInUser(String(USER));
  });
  afterEach(() => {
    setLocalNotesDatabase(null);
    setSignedInUser(null);
  });

  it('CreateOrUpdate_LocalNote creates a row with the next auto-number id, stored as the runtime serialises it', async () => {
    const id = await createOrUpdate_LocalNote('501', 'Household', '1', '2026-10-01T09:00:00', '1900-01-01T00:00:00');
    expect(id).toBe('1');
    const [row] = (await rows()) as [Row];
    expect(Object.keys(row).sort()).toEqual(
      ['DATECREATEDUTC', 'DATEEDITEDUTC', 'ID', 'ITEMID', 'NOTECATEGORYID', 'NOTEID', 'USERID'].sort(),
    );
    expect(row).toMatchObject({ ID: '1', USERID: USER, NOTEID: '501', NOTECATEGORYID: 'Household', ITEMID: '1' });
    expect(row.DATECREATEDUTC).toMatch(/^2026-(09-30|10-0[12]) \d{2}:00:00$/);
    expect(row.DATEEDITEDUTC).toBe('1900-01-01 00:00:00');
    expect(await meta()).toMatchObject({ LASTIDENTIFIER: '1', NAME: 'LocalNote', TABLENAME: 'OSUSR_18U_LOCALNOTE' });
    expect(await get_LocalNoteByNoteId('501')).toEqual({
      Id: '1',
      UserId: USER,
      NoteId: '501',
      NoteCategoryId: 'Household',
      ItemId: '1',
      DateCreatedUtc: '2026-10-01T09:00:00',
      DateEditedUtc: '1900-01-01T00:00:00',
    });
  });

  it('updates the existing row of the note; a new note takes the next id; an empty category writes nothing', async () => {
    await createOrUpdate_LocalNote('501', 'Household', '1', '2026-10-01T09:00:00', '1900-01-01T00:00:00');
    expect(await createOrUpdate_LocalNote('501', 'Household', '1', '2026-10-01T09:00:00', '2026-10-15T08:30:00')).toBe(
      '1',
    );
    expect((await get_LocalNoteByNoteId('501')).DateEditedUtc).toBe('2026-10-15T08:30:00');
    expect(await createOrUpdate_LocalNote('502', 'Household', '1', '2026-10-02T09:00:00', '1900-01-01T00:00:00')).toBe(
      '2',
    );
    expect(await createOrUpdate_LocalNote('503', '', '1', '2026-10-02T09:00:00', '1900-01-01T00:00:00')).toBe('0');
    expect((await rows()).map((r) => r.NOTEID)).toEqual(['501', '502']);
  });

  it('Delete_LocalNoteByNoteId removes the row; a note with no row deletes nothing and does not fail', async () => {
    await createOrUpdate_LocalNote('501', 'Household', '1', '2026-10-01T09:00:00', '1900-01-01T00:00:00');
    await delete_LocalNoteByNoteId('999');
    expect(await rows()).toHaveLength(1);
    await delete_LocalNoteByNoteId('501');
    expect(await rows()).toHaveLength(0);
    expect((await get_LocalNoteByNoteId('501')).Id).toBe('0');
  });

  it('reads only the signed-in user rows; SyncNotes replaces the copy; year options and category ids', async () => {
    await syncNotes([
      {
        Id: '7',
        UserId: USER,
        NoteId: '501',
        NoteCategoryId: 'Household',
        ItemId: '1',
        DateCreatedUtc: '2024-03-01T10:00:00',
        DateEditedUtc: '2026-05-01T10:00:00',
      },
      {
        Id: '8',
        UserId: USER,
        NoteId: '502',
        NoteCategoryId: 'School',
        ItemId: '2',
        DateCreatedUtc: '2025-03-01T10:00:00',
        DateEditedUtc: '1900-01-01T00:00:00',
      },
      {
        Id: '9',
        UserId: USER,
        NoteId: '503',
        NoteCategoryId: '',
        ItemId: '3',
        DateCreatedUtc: '2025-06-01T10:00:00',
        DateEditedUtc: '1900-01-01T00:00:00',
      },
      {
        Id: '10',
        UserId: 5,
        NoteId: '504',
        NoteCategoryId: 'Other',
        ItemId: '4',
        DateCreatedUtc: '2023-06-01T10:00:00',
        DateEditedUtc: '1900-01-01T00:00:00',
      },
    ]);
    expect((await meta())?.LASTIDENTIFIER).toBe('10');
    // index order = primary-key order, Long Integers stored as text: '7' < '8' < '9'
    expect(await get_Note_DynamicFilter_YearOptions()).toEqual(['2026', '2025']);
    expect(await getLocalNotesCategoryIds_ByUserId(USER)).toEqual(['Household', 'School']);
    await syncNotes([]);
    expect(await rows()).toHaveLength(0);
  });

  it('a failed write leaves the database unchanged; keys compare as in IndexedDB', async () => {
    await expect(
      db.transaction([LOCAL_NOTE.tableName], 'readwrite', async (tx) => {
        await tx.put(LOCAL_NOTE.tableName, { ID: '1', USERID: USER });
        await tx.add(LOCAL_NOTE.tableName, { ID: '1', USERID: USER });
      }),
    ).rejects.toThrow('ConstraintError');
    expect(await rows()).toHaveLength(0);
    expect(compareKeys(['10'], ['9'])).toBeLessThan(0);
    expect(compareKeys(9, '1')).toBeLessThan(0);
  });
});

/* Q-W3B-2: what the notes flows catch, and what goes up to the App_Common flow handler. */
describe('exceptions', () => {
  it('a CommunicationException shows the communication message, any other exception ShowExceptionMessage(message, False)', () => {
    raiseToFlowHandler(new CommunicationException('Request failed with an error'));
    expect(feedback.showCommunicationExceptionMessage).toHaveBeenCalledTimes(1);
    raiseToFlowHandler(new UserException('Not allowed'));
    expect(feedback.showExceptionMessage).toHaveBeenCalledWith('Not allowed', false);
  });

  it('isUserException tests the class and, when given, the specific type; only SystemException is a system one', () => {
    const named = new UserException('Invalid country id', 'Connect2_LegacyShared.ObjectNotFound');
    expect(isUserException(new UserException('x'))).toBe(true);
    expect(isUserException(named, 'Connect2_LegacyShared.ObjectNotFound')).toBe(true);
    expect(isUserException(new UserException('x'), 'Connect2_LegacyShared.ObjectNotFound')).toBe(false);
    expect(isUserException(new ServerException('x'))).toBe(false);
    expect(isSystemException(new CommunicationException('x'))).toBe(false);
    expect(isSystemException(new SystemException('x'))).toBe(true);
  });
});

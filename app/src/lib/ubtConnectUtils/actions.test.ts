import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { CommunicationException } from '@/legacy/os/os-exceptions';
import * as feedback from '@/platform/feedback';
import { addLogSink, type LogEntry } from '@/platform/log/log';
import { setSignedInUser } from '@/platform/session/session';
import {
  getLocalBookmarkByObjectId,
  localBookmarksSchemas,
  memoryDatabase,
  setLocalBookmarksDatabase,
  synchBookmarksC2,
} from '@/platform/storage/localEntities';
import {
  containsIgnoreCase,
  openInApp_TryOpenFileInApp,
  getOperatingSystem,
  openInApp_OpenApp,
  openInApp_OpenExternalLink,
  toggleBookmarkItem_C2,
} from './actions';
import { Mobile_OperatingSystem } from './staticEntities';

const redirect = vi.hoisted(() => vi.fn());
const toast = vi.hoisted(() => vi.fn());
vi.mock('@/platform/feedback/pageRedirect', () => ({ pageRedirect: redirect }));
vi.mock('@/platform/feedback', async (importOriginal) => ({
  ...(await importOriginal<object>()),
  feedbackMessageAutoClose: toast,
}));

describe('openInApp_OpenExternalLink (UBTConnect_Utils.controller.js:4491-4538)', () => {
  afterEach(() => {
    vi.restoreAllMocks();
    redirect.mockReset();
  });

  it('an http(s) link takes the in-app browser branch: a new tab for both targets (decision U18)', () => {
    const open = vi.spyOn(window, 'open').mockReturnValue(null);
    openInApp_OpenExternalLink('https://example.test/a', false);
    openInApp_OpenExternalLink('HTTP://example.test/b', true); // Index(…, ignoreCase True)
    expect(open.mock.calls).toEqual([
      ['https://example.test/a', '_blank', 'noopener'],
      ['HTTP://example.test/b', '_blank', 'noopener'],
    ]);
    expect(redirect).not.toHaveBeenCalled();
  });

  it('another link: InNewTab → JSUtils_PageOpenInNewTab, else JSUtils_PageRedirect(Url, True)', () => {
    const open = vi.spyOn(window, 'open').mockReturnValue(null);
    openInApp_OpenExternalLink('market://details?id=x', true);
    expect(open).toHaveBeenCalledWith('market://details?id=x', '_blank');
    openInApp_OpenExternalLink('mailto:someone@example.test');
    expect(redirect).toHaveBeenCalledWith('mailto:someone@example.test', true);
  });
});

describe('openInApp_OpenApp (UBTConnect_Utils.controller.js:4360-4462), browser path', () => {
  afterEach(() => {
    vi.restoreAllMocks();
    toast.mockReset();
  });

  it('no Cordova: GetOperatingSystem is Other (CommonPlugin.controller.js:147-200)', () => {
    expect(getOperatingSystem()).toBe(Mobile_OperatingSystem.Other);
  });

  it('no AppLauncher plugin, no Cordova, OS Other: the "Not available" toast, no link opened (:4439-4441)', () => {
    const open = vi.spyOn(window, 'open').mockReturnValue(null);
    openInApp_OpenApp('com.example.app');
    expect(toast).toHaveBeenCalledWith({
      title: 'Not available',
      message: 'Sorry, this app is not available in the platform you are using',
      messageType: 'info',
      encodedHtml: true,
      extendedClass: '',
      delayMs: 0,
      useDebounce: false,
    });
    expect(open).not.toHaveBeenCalled();
    expect(redirect).not.toHaveBeenCalled();
  });
});

describe('OpenInApp_TryOpenFileInApp, web branch (CR-MilestoneDetail-3)', () => {
  it('without Cordova or the plugins PWA wrappers: OpenInApp_ViewFile_Fallback opens the URL in a new tab, IsInApp False', () => {
    const open = vi.spyOn(window, 'open').mockImplementation(() => null);
    expect(openInApp_TryOpenFileInApp('Rooms.pdf', 'https://example.com/rooms.pdf', 'orbit-documents', 'pdf')).toEqual({
      IsInApp: false,
      Filepath: '',
    });
    expect(open).toHaveBeenCalledWith('https://example.com/rooms.pdf', '_blank', 'noopener');
    open.mockRestore();
  });

  it('an empty file name makes the Get_FileExtension JS node throw, as the original', () => {
    expect(() => openInApp_TryOpenFileInApp('', 'https://example.com/x', 'f', 'pdf')).toThrow(TypeError);
  });
});

describe('containsIgnoreCase (Orbit admin OnHandle_ScanCode: EB:1150, SB :1420)', () => {
  it('finds the text in any case', () => {
    expect(containsIgnoreCase('failed to DESERIALIZE json to X', 'Failed to deserialize JSON')).toBe(true);
    expect(containsIgnoreCase('Member not found', 'Failed to deserialize JSON')).toBe(false);
  });
});

describe('ToggleBookmarkItem_C2 (UBTConnect_Utils.controller.js:5661-5770)', () => {
  const server = (success: boolean, fail?: Error) => ({
    addBookmark2: vi.fn(() =>
      fail
        ? Promise.reject(fail)
        : Promise.resolve({ Success: success, Bookmark_Added: { Id: '900', DateCreatedUtc: '2026-10-15T09:00:00' } }),
    ),
    deleteBookmarkByBookmarkId2: vi.fn(() => (fail ? Promise.reject(fail) : Promise.resolve({ Success: success }))),
  });
  beforeEach(() => {
    setLocalBookmarksDatabase(memoryDatabase(localBookmarksSchemas()));
    setSignedInUser('990001');
    return () => {
      setLocalBookmarksDatabase(null);
      setSignedInUser(null);
      vi.restoreAllMocks();
    };
  });

  it('adds: logs the category (:5722), AddBookmark2 with the item as text, local row, success message', async () => {
    const show = vi.spyOn(feedback, 'showFeedbackMessage');
    const entries: LogEntry[] = [];
    const remove = addLogSink((e) => entries.push(e));
    const s = server(true);
    await expect(toggleBookmarkItem_C2('42', 'Household', false, s)).resolves.toBeUndefined();
    remove();
    expect(entries).toContainEqual(
      expect.objectContaining({ level: 'info', message: 'In_BookmarkType Household', data: { module: 'UBTConnect' } }),
    );
    expect(s.addBookmark2).toHaveBeenCalledWith('Household', '42');
    expect(await getLocalBookmarkByObjectId('42', 'Household')).toMatchObject({
      BookmarkId: '900',
      BookmarkCategoryId: 'Household',
    });
    expect(show).toHaveBeenCalledWith('Added to your Bookmarks', feedback.PLATFORM_MESSAGE_TYPE.success);
  });

  it('removes by the local BookmarkId of the item and category; failures show the error message', async () => {
    const show = vi.spyOn(feedback, 'showFeedbackMessage');
    const row = { UserId: 990001, ItemId: '42', CreatedAtDateUtc: '1900-01-01T00:00:00' };
    await synchBookmarksC2([
      { ...row, Id: '1', BookmarkId: '420', BookmarkCategoryId: 'Household' },
      { ...row, Id: '2', BookmarkId: '421', BookmarkCategoryId: 'Member' },
    ]);
    await toggleBookmarkItem_C2('42', 'Household', true, server(false));
    expect((await getLocalBookmarkByObjectId('42', 'Household')).Id).toBe('1');
    expect(show).toHaveBeenLastCalledWith(
      'Bookmark could not be removed. Please try again later.',
      feedback.PLATFORM_MESSAGE_TYPE.error,
    );
    const s = server(true);
    await toggleBookmarkItem_C2('42', 'Household', true, s);
    expect(s.deleteBookmarkByBookmarkId2).toHaveBeenCalledWith('420');
    expect((await getLocalBookmarkByObjectId('42', 'Household')).Id).toBe('0');
    expect((await getLocalBookmarkByObjectId('42', 'Member')).Id).toBe('2');
    expect(show).toHaveBeenLastCalledWith('Removed from your Bookmarks', feedback.PLATFORM_MESSAGE_TYPE.success);
  });

  it('AllExceptions: logs the error, shows the error message and ends normally (:5750-5758)', async () => {
    const show = vi.spyOn(feedback, 'showFeedbackMessage');
    const entries: LogEntry[] = [];
    const remove = addLogSink((e) => entries.push(e));
    await expect(
      toggleBookmarkItem_C2('43', 'Household', false, server(true, new CommunicationException('x'))),
    ).resolves.toBeUndefined();
    remove();
    expect(entries.filter((e) => e.level === 'error')).toHaveLength(1);
    expect(show).toHaveBeenLastCalledWith(
      'Bookmark could not be added. Please try again later.',
      feedback.PLATFORM_MESSAGE_TYPE.error,
    );
  });
});

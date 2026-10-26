import { composeStories } from '@storybook/react-vite';
import { act, fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import { http, HttpResponse } from 'msw';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { server } from '@/test/setup';
import { CommunicationException } from '@/legacy/os/os-exceptions';
import { UserException, raiseToFlowHandler } from '@/legacy/os/exceptions';
import { getFeedbackMessage, resetFeedbackMessages } from '@/platform/feedback/feedbackStore';
import {
  createOrUpdate_LocalNote,
  get_LocalNoteByNoteId,
  localNotesSchemas,
  memoryDatabase,
  setLocalNotesDatabase,
} from '@/platform/storage/localEntities';
import { setSignedInUser } from '@/platform/session/session';
import { NoteListActionsContainer } from './NoteListActionsContainer';
import * as stories from './NoteListActionsContainer.stories';
import { SAMPLE_NOTES } from './NoteListActionsContainer.stories';

vi.mock('@/legacy/os/exceptions', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/legacy/os/exceptions')>()),
  raiseToFlowHandler: vi.fn(),
}));

const { CompiledView, Preview } = composeStories(stories);

const menuOption = (index: number, label: string) => {
  const noteItem = document.querySelectorAll<HTMLElement>('[data-block="ConnectPatterns.Note_Item"]')[index];
  const anchor = noteItem?.querySelector('.dx-popup-menu-anchor .ubt-icon');
  if (!noteItem || !anchor) throw new Error('no anchor');
  act(() => {
    fireEvent.click(anchor);
  });
  const option = within(noteItem)
    .getByText(label)
    .closest('[data-block="ConnectPatterns.ContextMenu_Item"]')?.parentElement;
  if (!option) throw new Error(`no option ${label}`);
  fireEvent.click(option);
};

/* No captured DOM exists for this block: the checks follow the compiled controller
   (migration/blocks/sources/UBTConnect_Utils.CW_Notes.NoteListActions.mvc.js:300-860). */
describe('NoteListActions', () => {
  beforeEach(() => {
    setLocalNotesDatabase(memoryDatabase(localNotesSchemas()));
    setSignedInUser('990001');
  });
  afterEach(() => {
    resetFeedbackMessages();
    setLocalNotesDatabase(null);
    setSignedInUser(null);
    vi.mocked(raiseToFlowHandler).mockClear();
  });

  it('renders Note_Item_List with Notes (preview passes In_ShowPreviewOnly)', () => {
    const { container, unmount } = render(<CompiledView />);
    expect(container.querySelector('[data-block="CW_Notes.NoteListActions"] > [data-block]')).toHaveAttribute(
      'data-block',
      'ConnectPatterns.Note_Item_List',
    );
    expect(container.querySelectorAll('[data-block="ConnectPatterns.Note_Item"]')).toHaveLength(3);
    unmount();
    render(<Preview />);
    expect(screen.getByText('Show all notes (3)')).toBeInTheDocument();
  });

  it('edit → save: UpdateNote, OnSaveEditNote with the new text, editing off, "Note updated"', async () => {
    const onOnSaveEditNote = vi.fn();
    const onOnEditingStateChanged = vi.fn();
    render(<CompiledView onOnSaveEditNote={onOnSaveEditNote} onOnEditingStateChanged={onOnEditingStateChanged} />);
    menuOption(1, 'Edit note');
    expect(onOnEditingStateChanged).toHaveBeenLastCalledWith(true);
    fireEvent.change(screen.getByDisplayValue('Ask about the meeting room'), { target: { value: 'A new text' } });
    fireEvent.click(screen.getByText('Save'));
    await waitFor(() => {
      expect(onOnSaveEditNote).toHaveBeenCalledTimes(1);
    });
    const saved = onOnSaveEditNote.mock.calls[0]?.[0] as { Note_Item_List: { Note: string }[] };
    expect(saved.Note_Item_List.map((n) => n.Note)).toEqual([
      'Bring the picnic blanket',
      'A new text',
      'Check the parking plan',
    ]);
    expect(onOnEditingStateChanged).toHaveBeenLastCalledWith(false);
    expect(getFeedbackMessage()?.message).toBe('Note updated');
    expect(screen.getByText('A new text')).toBeInTheDocument();
  });

  it('save of a note the server no longer has: removed, "This note no longer exists"', async () => {
    const onOnSaveEditNote = vi.fn();
    render(
      <NoteListActionsContainer
        notes={{ Total: 1, Note_Item_List: [{ Id: '999', Note: 'Gone note' }] }}
        onOnSaveEditNote={onOnSaveEditNote}
      />,
    );
    menuOption(0, 'Edit note');
    fireEvent.change(screen.getByDisplayValue('Gone note'), { target: { value: 'Changed' } });
    fireEvent.click(screen.getByText('Save'));
    await waitFor(() => {
      expect(getFeedbackMessage()?.message).toBe('This note no longer exists');
    });
    expect(onOnSaveEditNote).toHaveBeenCalledWith({ Total: 1, Note_Item_List: [] });
  });

  it('delete: DeleteNoteByNoteId, On_NoteDeleted(NoteId, IsLastNoteDeleted), "Note deleted"; failure message', async () => {
    const onOnNoteDeleted = vi.fn();
    render(<CompiledView onOnNoteDeleted={onOnNoteDeleted} />);
    menuOption(2, 'Delete note');
    fireEvent.click(screen.getByText('Delete'));
    await waitFor(() => {
      expect(onOnNoteDeleted).toHaveBeenCalledWith('503', false);
    });
    expect(getFeedbackMessage()?.message).toBe('Note deleted');
    server.use(
      http.post('/api/UBTConnect_Utils/ServiceAPIDeleteNoteByNoteId', () =>
        HttpResponse.json({ error: 'mock error' }, { status: 500 }),
      ),
    );
    menuOption(0, 'Delete note');
    fireEvent.click(screen.getByText('Delete'));
    await waitFor(() => {
      expect(getFeedbackMessage()?.message).toBe("Couldn't delete note. Please try again.");
    });
  });
  const renderWithItem = (props: Parameters<typeof NoteListActionsContainer>[0] = {}) =>
    render(<NoteListActionsContainer notes={SAMPLE_NOTES} inItemId="1" inNoteCategoryId="Household" {...props} />);
  const saveAs = (index: number, from: string, to: string) => {
    menuOption(index, 'Edit note');
    fireEvent.change(screen.getByDisplayValue(from), { target: { value: to } });
    fireEvent.click(screen.getByText('Save'));
  };

  it('local copy (Q-W3B-1): save → CreateOrUpdate_LocalNote with the edit date; not found / delete → removed', async () => {
    const onOnSaveEditNote = vi.fn();
    renderWithItem({ onOnSaveEditNote });
    saveAs(1, 'Ask about the meeting room', 'A new text');
    await waitFor(() => {
      expect(onOnSaveEditNote).toHaveBeenCalledTimes(1);
    });
    const saved = onOnSaveEditNote.mock.calls[0]?.[0] as { Note_Item_List: { DateEditedUtc: string }[] };
    expect(await get_LocalNoteByNoteId('502')).toMatchObject({
      NoteId: '502',
      NoteCategoryId: 'Household',
      ItemId: '1',
      DateEditedUtc: saved.Note_Item_List[1]?.DateEditedUtc,
    });
    menuOption(1, 'Delete note');
    fireEvent.click(screen.getByText('Delete'));
    await waitFor(() => {
      expect(getFeedbackMessage()?.message).toBe('Note deleted');
    });
    expect((await get_LocalNoteByNoteId('502')).Id).toBe('0');
  });

  it('save of a missing note removes its local copy', async () => {
    await createOrUpdate_LocalNote('999', 'Household', '1', '2026-10-01T09:00:00', '1900-01-01T00:00:00');
    render(<NoteListActionsContainer notes={{ Total: 1, Note_Item_List: [{ Id: '999', Note: 'Gone note' }] }} />);
    saveAs(0, 'Gone note', 'Changed');
    await waitFor(() => {
      expect(getFeedbackMessage()?.message).toBe('This note no longer exists');
    });
    expect((await get_LocalNoteByNoteId('999')).Id).toBe('0');
  });

  it('errors (Q-W3B-2): save catches only UserException; other errors go up to the flow handler', async () => {
    server.use(
      http.post('/api/UBTConnect_Utils/ServiceAPIUpdateNote', () =>
        HttpResponse.json({ error: 'mock error' }, { status: 500 }),
      ),
    );
    const { unmount } = renderWithItem();
    saveAs(0, 'Bring the picnic blanket', 'Changed');
    await waitFor(() => {
      expect(raiseToFlowHandler).toHaveBeenCalledTimes(1);
    });
    expect(vi.mocked(raiseToFlowHandler).mock.calls[0]?.[0]).toBeInstanceOf(CommunicationException);
    expect(getFeedbackMessage()).toBeNull();
    unmount();
    server.resetHandlers();
    renderWithItem({
      onOnSaveEditNote: () => {
        throw new UserException('Not allowed');
      },
    });
    saveAs(0, 'Bring the picnic blanket', 'Changed');
    await waitFor(() => {
      expect(getFeedbackMessage()?.message).toMatch(/^Couldn't save your changes/);
    });
    expect(raiseToFlowHandler).toHaveBeenCalledTimes(1);
  });

  it('errors: a UserException raised by the server (contract error answer) is caught by save', async () => {
    server.use(
      http.post('/api/UBTConnect_Utils/ServiceAPIUpdateNote', () =>
        HttpResponse.json({ error: 'Not allowed', exception: 'UserException' }, { status: 500 }),
      ),
    );
    renderWithItem();
    saveAs(0, 'Bring the picnic blanket', 'Changed');
    await waitFor(() => {
      expect(getFeedbackMessage()?.message).toMatch(/^Couldn't save your changes/);
    });
    expect(raiseToFlowHandler).not.toHaveBeenCalled();
  });

  it('errors (Q-W3B-2): delete catches every non-system error (a failed call, a failing event)', async () => {
    server.use(http.post('/api/UBTConnect_Utils/ServiceAPIDeleteNoteByNoteId', () => HttpResponse.error()));
    renderWithItem();
    menuOption(0, 'Delete note');
    fireEvent.click(screen.getByText('Delete'));
    await waitFor(() => {
      expect(getFeedbackMessage()?.message).toBe("Couldn't delete note. Please try again.");
    });
    expect(raiseToFlowHandler).not.toHaveBeenCalled();
  });
});

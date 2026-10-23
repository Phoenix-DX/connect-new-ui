import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import type { ReactNode } from 'react';
import { MemoryRouter } from 'react-router';
import { http, HttpResponse } from 'msw';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { raiseToFlowHandler } from '@/legacy/os/exceptions';
import { getFeedbackMessage, resetFeedbackMessages } from '@/platform/feedback/feedbackStore';
import {
  get_LocalNoteByNoteId,
  localNotesSchemas,
  memoryDatabase,
  setLocalNotesDatabase,
} from '@/platform/storage/localEntities';
import { setSignedInUser } from '@/platform/session/session';
import { server } from '@/test/setup';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import { SAMPLE_NOTES } from '@/containers/NoteListActions/NoteListActionsContainer.stories';
import { NotesSheet } from './NotesSheet';
import * as stories from './NotesSheet.stories';

/* Only the stories with a capture: `Open` is a catalog story (no capture opens the sheet). */
const capturedStories = { default: stories.default, V1: stories.V1, V2: stories.V2 };
function wrapper({ children }: { children?: ReactNode }) {
  return <MemoryRouter>{children}</MemoryRouter>;
}

vi.mock('@/legacy/os/exceptions', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/legacy/os/exceptions')>()),
  raiseToFlowHandler: vi.fn(),
}));

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('NotesSheet', () => {
  testCapturedVariants(capturedStories, captures);

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

  const openAndAdd = async (onOnNotesChanged = vi.fn()) => {
    const props = { inItemId: '1', inNoteCategoryId: 'Household', inNotes: SAMPLE_NOTES, onOnNotesChanged };
    render(<NotesSheet {...props} />, { wrapper }).rerender(<NotesSheet {...props} inIsOpen />);
    fireEvent.change(await screen.findByPlaceholderText('Add a Note'), { target: { value: 'A fresh note' } });
    const send = document.querySelector('.connect-icon-send');
    if (!send) throw new Error('no send');
    fireEvent.click(send);
  };

  it('AddNote keeps the local copy (Q-W3B-1): CreateOrUpdate_LocalNote of the added note', async () => {
    const onOnNotesChanged = vi.fn();
    await openAndAdd(onOnNotesChanged);
    await waitFor(() => {
      expect(onOnNotesChanged).toHaveBeenCalledTimes(1);
    });
    const added = (onOnNotesChanged.mock.calls[0]?.[0] as { Note_Item_List: { Id: string; DateCreatedUtc: string }[] })
      .Note_Item_List[0];
    expect(await get_LocalNoteByNoteId(added?.Id ?? '')).toMatchObject({
      NoteId: added?.Id,
      NoteCategoryId: 'Household',
      ItemId: '1',
      DateCreatedUtc: added?.DateCreatedUtc,
      DateEditedUtc: '1900-01-01T00:00:00',
    });
  });

  it('AddNote errors (Q-W3B-2): only a UserException shows "Couldn\'t add note"; a failed call goes up', async () => {
    server.use(http.post('/api/UBTConnect_Utils/ServiceAPIAddNote', () => HttpResponse.error()));
    await openAndAdd();
    await waitFor(() => {
      expect(raiseToFlowHandler).toHaveBeenCalledTimes(1);
    });
    expect(getFeedbackMessage()).toBeNull();
  });

  it('AddNote errors: a UserException raised by the server (contract error answer) shows "Couldn\'t add note"', async () => {
    server.use(
      http.post('/api/UBTConnect_Utils/ServiceAPIAddNote', () =>
        HttpResponse.json({ error: 'Not allowed', exception: 'UserException' }, { status: 500 }),
      ),
    );
    await openAndAdd();
    await waitFor(() => {
      expect(getFeedbackMessage()?.message).toMatch(/^Couldn't add note/);
    });
    expect(raiseToFlowHandler).not.toHaveBeenCalled();
  });

  it('In_IsOpen opens the "Note" BottomSheet with the notes and the AddNote footer; editing hides the footer', async () => {
    const { container, rerender } = render(<NotesSheet inNotes={SAMPLE_NOTES} />, { wrapper });
    expect(container.querySelector('[data-block="CW_Notes.NotesSheet"]')?.childElementCount).toBe(0);
    rerender(<NotesSheet inNotes={SAMPLE_NOTES} inIsOpen />);
    await waitFor(() => {
      expect(container.querySelector('[data-block="ConnectPatterns.BottomSheet"]')).not.toBeNull();
    });
    const sheet = container.querySelector('[data-block="ConnectPatterns.BottomSheet"]');
    expect(sheet).toHaveTextContent('Note');
    expect(sheet?.querySelector('[data-block="CW_Notes.NoteListActions"]')).not.toBeNull();
    expect(container.querySelectorAll('[data-block="ConnectPatterns.Note_Item"]')).toHaveLength(3);
    expect(sheet?.querySelector('[data-block="ConnectPatterns.AddNote"]')).not.toBeNull();
    expect(container.querySelector('[data-block="NavigationHandler.BackNavigationHandler"]')).not.toBeNull();
    const anchor = document.querySelector('.dx-popup-menu-anchor .ubt-icon');
    if (!anchor) throw new Error('no anchor');
    act(() => {
      fireEvent.click(anchor);
    });
    const edit = screen
      .getByText('Edit note')
      .closest('[data-block="ConnectPatterns.ContextMenu_Item"]')?.parentElement;
    if (!edit) throw new Error('no edit option');
    fireEvent.click(edit);
    expect(sheet?.querySelector('[data-block="ConnectPatterns.AddNote"]')).toBeNull();
  });

  it('AddNote: ServiceAPIAddNote, On_NotesChanged with the new note first and Total + 1, "Note added"', async () => {
    const onOnNotesChanged = vi.fn();
    render(
      <NotesSheet
        inIsOpen={false}
        inItemId="1"
        inNoteCategoryId="Household"
        inNotes={SAMPLE_NOTES}
        onOnNotesChanged={onOnNotesChanged}
      />,
      { wrapper },
    ).rerender(
      <NotesSheet
        inIsOpen
        inItemId="1"
        inNoteCategoryId="Household"
        inNotes={SAMPLE_NOTES}
        onOnNotesChanged={onOnNotesChanged}
      />,
    );
    fireEvent.change(await screen.findByPlaceholderText('Add a Note'), { target: { value: 'A fresh note' } });
    const send = document.querySelector('.connect-icon-send');
    if (!send) throw new Error('no send');
    fireEvent.click(send);
    await waitFor(() => {
      expect(onOnNotesChanged).toHaveBeenCalledTimes(1);
    });
    const changed = onOnNotesChanged.mock.calls[0]?.[0] as { Total: number; Note_Item_List: { Note: string }[] };
    expect(changed.Total).toBe(4);
    expect(changed.Note_Item_List.map((n) => n.Note)).toEqual([
      'A fresh note',
      'Bring the picnic blanket',
      'Ask about the meeting room',
      'Check the parking plan',
    ]);
    expect(getFeedbackMessage()?.message).toBe('Note added');
    await waitFor(() => {
      expect(screen.getByPlaceholderText('Add a Note')).toHaveValue('');
    });
  });
});

import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import type { Notes } from '@/lib/ubtConnectLibrary/structures';
import { ItemNotesSection } from './ItemNotesSection';
import { notesWithoutNote } from './notes';

/* NoteListActions and NotesSheet are not under test: each stub shows the props that the section gives it. */
vi.mock('@/containers/NoteListActions', () => ({
  NoteListActionsContainer: (p: {
    id: string;
    inItemId: string;
    inNoteCategoryId: string;
    inShowPreviewOnly: boolean;
    notes: Notes;
    onOnShowAllNotesRequested: () => void;
    onOnSaveEditNote: (notes: Notes) => void;
    onOnNoteDeleted: (noteId: string, last: boolean) => void;
  }) => (
    <div data-testid="preview" id={p.id}>
      {`${p.inItemId}|${p.inNoteCategoryId}|${String(p.inShowPreviewOnly)}|${String(p.notes.Total)}`}
      <button type="button" onClick={p.onOnShowAllNotesRequested}>
        show all
      </button>
      <button
        type="button"
        onClick={() => {
          p.onOnSaveEditNote({ Total: 1, Note_Item_List: [{ Id: '7', Note: 'Edited' }] });
        }}
      >
        save edit
      </button>
      <button
        type="button"
        onClick={() => {
          p.onOnNoteDeleted('7', true);
        }}
      >
        delete preview
      </button>
    </div>
  ),
}));
vi.mock('@/components/note/NotesSheet', () => ({
  NotesSheet: (p: {
    id: string;
    inIsOpen: boolean;
    inItemId: string;
    inNoteCategoryId: string;
    inNotes: Notes;
    onOnNotesChanged: (notes: Notes) => void;
    onOnNoteDeleted: (noteId: string, last: boolean) => void;
    onOnNoteSheetClosed: () => void;
  }) => (
    <div data-testid="sheet" id={p.id} data-open={String(p.inIsOpen)}>
      {`${p.inItemId}|${p.inNoteCategoryId}|${String(p.inNotes.Total)}`}
      <button
        type="button"
        onClick={() => {
          p.onOnNotesChanged({ Total: 2, Note_Item_List: [{ Id: '8' }, { Id: '9' }] });
        }}
      >
        sheet changed
      </button>
      <button
        type="button"
        onClick={() => {
          p.onOnNoteDeleted('9', false);
        }}
      >
        sheet delete
      </button>
      <button type="button" onClick={p.onOnNoteSheetClosed}>
        sheet closed
      </button>
    </div>
  ),
}));

const NO_NOTES: Notes = { Total: 0, Note_Item_List: [] };
const ONE_NOTE: Notes = { Total: 1, Note_Item_List: [{ Id: '7', Note: 'Bring the guest list' }] };
const ADD_NOTE = { showUnbookmark: false, showAddNote: true, showShare: false };

function renderSection(
  notes: Notes,
  events: { changed?: (n: Notes) => void; deleted?: (id: string, last: boolean) => void } = {},
) {
  return render(
    <ItemNotesSection
      id="b1-$b3"
      inItemId="7301"
      inNoteCategoryId="Orbit Event"
      inNotes={notes}
      actionBarOptions={ADD_NOTE}
      onOnNotesChanged={events.changed}
      onOnNoteDeleted={events.deleted}
    />,
  );
}

const sheetOpen = () => screen.getByTestId('sheet').getAttribute('data-open');

describe('ItemNotesSection', () => {
  it('renders the TST ids: $b1 container, $b3 bordered container with the action bar $b4, NotesSheet $b5', () => {
    renderSection(NO_NOTES);
    expect(document.getElementById('b1-$b3')?.getAttribute('data-block')).toBe('CW_Notes.ItemNotesSection');
    const content = (blockId: string) => document.getElementById(blockId)?.firstElementChild?.className;
    expect(content('b1-b3-$b1')).toBe('ubt-custom-container');
    expect(content('b1-b3-$b3')).toBe('ubt-custom-container border-top-s border-color-neutral-2 padding-y-s');
    expect(document.getElementById('b1-b3-$b4')?.getAttribute('data-block')).toBe(
      'ConnectCorePatterns.ItemCard_ActionBar',
    );
    expect(screen.getByText('Add Note')).toBeTruthy();
    expect(screen.getByTestId('sheet').id).toBe('b1-b3-$b5');
    expect(screen.getByTestId('sheet').textContent).toContain('7301|Orbit Event|0');
  });

  it('shows the note preview ($b2, preview only) only when In_Notes.Total > 0', () => {
    const { unmount } = renderSection(NO_NOTES);
    expect(screen.queryByTestId('preview')).toBeNull();
    unmount();
    renderSection(ONE_NOTE);
    expect(screen.getByTestId('preview').id).toBe('b1-b3-$b2');
    expect(screen.getByTestId('preview').textContent).toContain('7301|Orbit Event|true|1');
  });

  it('opens the sheet on Add Note and on show all notes; On_NoteSheet_Closed closes it', () => {
    renderSection(ONE_NOTE);
    expect(sheetOpen()).toBe('false');
    fireEvent.click(screen.getByText('Add Note'));
    expect(sheetOpen()).toBe('true');
    fireEvent.click(screen.getByText('sheet closed'));
    expect(sheetOpen()).toBe('false');
    fireEvent.click(screen.getByText('show all'));
    expect(sheetOpen()).toBe('true');
  });

  it('raises On_NotesChanged and On_NoteDeleted from the preview and from the sheet', () => {
    const changed = vi.fn();
    const deleted = vi.fn();
    renderSection(ONE_NOTE, { changed, deleted });
    fireEvent.click(screen.getByText('save edit'));
    fireEvent.click(screen.getByText('sheet changed'));
    fireEvent.click(screen.getByText('delete preview'));
    fireEvent.click(screen.getByText('sheet delete'));
    expect(changed.mock.calls.map(([n]) => (n as Notes).Total)).toEqual([1, 2]);
    expect(deleted.mock.calls).toEqual([
      ['7', true],
      ['9', false],
    ]);
  });
});

describe('notesWithoutNote', () => {
  it('keeps every note with another id and sets Total to the list length', () => {
    const notes: Notes = { Total: 5, Note_Item_List: [{ Id: '1' }, { Id: '2' }, { Id: '1' }] };
    expect(notesWithoutNote(notes, '1')).toEqual({ Total: 1, Note_Item_List: [{ Id: '2' }] });
  });

  it('gives the same notes with a corrected Total when no note has the id', () => {
    expect(notesWithoutNote({ Total: 3, Note_Item_List: [{ Id: '4' }] }, '9')).toEqual({
      Total: 1,
      Note_Item_List: [{ Id: '4' }],
    });
    expect(notesWithoutNote({}, '9')).toEqual({ Total: 0, Note_Item_List: [] });
  });
});

import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import type { Notes } from '@/lib/ubtConnectLibrary/structures';
import { CardWithNotesSheet, type CardWithNotesItem } from './CardWithNotesSheet';

/* The three blocks are not under test: each stub shows the props that the part gives it. */
vi.mock('@/components/note/ItemCardWithNotes', () => ({
  ItemCard_WithNotes: (p: {
    id: string;
    inTotalNotes: string;
    inTitle: string;
    inSubtitle: string;
    inLabel: string;
    inSearchString: string;
    onOnClickTotalNotesIcon: () => void;
    notes: React.ReactNode;
    actions: React.ReactNode;
  }) => (
    <div data-testid="card" id={p.id}>
      {`${p.inTitle}|${p.inSubtitle}|${p.inLabel}|${p.inTotalNotes}|${p.inSearchString}`}
      <button type="button" onClick={p.onOnClickTotalNotesIcon}>
        total
      </button>
      <div data-testid="notes">{p.notes}</div>
      <div data-testid="actions">{p.actions}</div>
    </div>
  ),
}));
vi.mock('@/containers/NoteListActions', () => ({
  NoteListActionsContainer: (p: {
    id: string;
    inNoteCategoryId: string;
    inItemId: string;
    onOnNoteDeleted: (noteId: string, last: boolean) => void;
  }) => (
    <button
      type="button"
      id={p.id}
      onClick={() => {
        p.onOnNoteDeleted('5', true);
      }}
    >
      {`preview ${p.inNoteCategoryId} ${p.inItemId}`}
    </button>
  ),
}));
vi.mock('@/components/note/NotesSheet', () => ({
  NotesSheet: (p: {
    id: string;
    inIsOpen: boolean;
    inNoteCategoryId: string;
    onOnNoteSheetClosed: () => void;
    onOnNoteDeleted: (noteId: string, last: boolean) => void;
  }) => (
    <div data-testid="sheet" id={p.id}>
      {`${p.inIsOpen ? 'open' : 'closed'} ${p.inNoteCategoryId}`}
      <button type="button" onClick={p.onOnNoteSheetClosed}>
        close
      </button>
      <button
        type="button"
        onClick={() => {
          p.onOnNoteDeleted('6', false);
        }}
      >
        delete
      </button>
    </div>
  ),
}));

const NOTES: Notes = { Total: 1, Note_Item_List: [{ Id: '5', Note: 'Bring the picnic blanket' }] };
const item = (notes: Notes): CardWithNotesItem => ({
  itemId: '42',
  title: 'Fenwick Household',
  subtitle: 'Northbrook',
  sourceHeader: { label: 'Household', imageURL: '', initials: 'FH', iconId: '' },
  channelName: '',
  channelLogo: '',
  publishedAt: '1900-01-01T00:00:00',
  notes,
});

function setup(notes: Notes, isAddNote = false) {
  const props = {
    scope: 'b7-l1-11_0',
    item: item(notes),
    isAddNote,
    noteCategoryId: 'Household',
    inSearchString: 'pic',
    openNoteSheet: vi.fn(),
    closeNoteSheet: vi.fn(),
    handler_OnNotesChanged: vi.fn(),
    onNoteDeleted: vi.fn(),
    actions: <span>card actions</span>,
  };
  render(<CardWithNotesSheet {...props} />);
  return props;
}

describe('CardWithNotesSheet', () => {
  it('gives the card, the note preview and the sheet their ids, the item and the note category', () => {
    setup(NOTES);
    expect(screen.getByTestId('card').id).toBe('b7-l1-11_0-$b1');
    expect(screen.getByTestId('card').textContent).toContain('Fenwick Household|Northbrook|Household|1|pic');
    expect(screen.getByText('preview Household 42').id).toBe('b7-l1-11_0-$b2');
    expect(screen.getByTestId('sheet').id).toBe('b7-l1-11_0-$b4');
    expect(screen.getByTestId('sheet').textContent).toContain('closed Household');
    expect(screen.getByTestId('actions').textContent).toBe('card actions');
  });

  it('shows the note preview only when the card has notes', () => {
    setup({ Total: 0, Note_Item_List: [] });
    expect(screen.getByTestId('notes').childElementCount).toBe(0);
    expect(screen.getByTestId('card').textContent).toContain('|0|');
  });

  it('wires the sheet state and the note handlers', () => {
    const props = setup(NOTES, true);
    expect(screen.getByTestId('sheet').textContent).toContain('open');
    fireEvent.click(screen.getByText('total'));
    expect(props.openNoteSheet).toHaveBeenCalledTimes(1);
    fireEvent.click(screen.getByText('close'));
    expect(props.closeNoteSheet).toHaveBeenCalledTimes(1);
    fireEvent.click(screen.getByText('preview Household 42'));
    fireEvent.click(screen.getByText('delete'));
    expect(props.onNoteDeleted.mock.calls).toEqual([
      ['5', true],
      ['6', false],
    ]);
  });
});

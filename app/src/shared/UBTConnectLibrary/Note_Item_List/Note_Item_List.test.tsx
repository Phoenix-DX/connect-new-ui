import { composeStories } from '@storybook/react-vite';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Note_Item_List } from './Note_Item_List';
import * as stories from './Note_Item_List.stories';

const { CompiledView, Preview, Editing, Empty } = composeStories(stories);

const items = (container: HTMLElement) => container.querySelectorAll('[data-block="ConnectPatterns.Note_Item"]');

/* No captured DOM exists for this block: the checks follow the compiled view
   (migration/blocks/sources/UBTConnectLibrary.ConnectPatterns.Note_Item_List.mvc.js:181-848). */
describe('Note_Item_List', () => {
  it('all notes in a list inside a soft, padded neutral-0 container (min height 88px)', () => {
    const { container } = render(<CompiledView />);
    const box = container.querySelector('[data-block="ConnectPatterns.Note_Item_List"] > [data-block] > div');
    expect(box).toHaveClass('background-neutral-0', 'padding-s', 'margin-bottom-xs', 'border-radius-soft');
    expect(box).toHaveStyle({ minHeight: '88px' });
    expect(box?.querySelector(':scope > .list.list-group.OSFillParent')).not.toBeNull();
    expect(items(container)).toHaveLength(3);
    expect(screen.queryByText(/Show all notes/)).toBeNull();
  });

  it('preview: neutral-2, the first two notes and "Show all notes (3)" (cyan-dark, semi-bold, xxs)', () => {
    const onOnShowAllNotes = vi.fn();
    const { container } = render(<Preview onOnShowAllNotes={onOnShowAllNotes} />);
    expect(container.querySelector('.ubt-custom-container')).toHaveClass('background-neutral-2');
    expect(items(container)).toHaveLength(2);
    const showAll = screen.getByText('Show all notes (3)');
    fireEvent.click(showAll);
    expect(onOnShowAllNotes).toHaveBeenCalledTimes(1);
  });

  it('editing: the edited note shows its form, the others are dimmed', () => {
    const { container } = render(<Editing />);
    expect(container.querySelectorAll('textarea')).toHaveLength(1);
    expect(container.querySelectorAll('.kebab-blocker')).toHaveLength(2);
  });

  it('empty: "Your notes will appear here." in a flex column container (min height 80px)', () => {
    const { container } = render(<Empty />);
    const text = screen.getByText('Your notes will appear here.');
    const empty = text.closest('.ubt-custom-container.display-flex');
    expect(empty).toHaveClass('align-items-center', 'justify-content-flex-end', 'flex-direction-column');
    expect(empty).toHaveStyle({ minHeight: '80px' });
    expect(items(container)).toHaveLength(0);
  });

  it('Delete note opens "Delete note?"; Delete raises OnDeleteRequested(NoteId); cancel closes', () => {
    const onOnDeleteRequested = vi.fn();
    render(<CompiledView onOnDeleteRequested={onOnDeleteRequested} />);
    const openDelete = () => {
      const anchor = document.querySelector('.dx-popup-menu-anchor .ubt-icon');
      if (!anchor) throw new Error('no anchor');
      act(() => {
        fireEvent.click(anchor);
      });
      const del = screen
        .getByText('Delete note')
        .closest('[data-block="ConnectPatterns.ContextMenu_Item"]')?.parentElement;
      if (!del) throw new Error('no delete option');
      fireEvent.click(del);
    };
    openDelete();
    expect(screen.getByText('Delete note?')).toBeInTheDocument();
    expect(document.body.querySelector('.popup-dialog .connect-icon-delete')).toHaveClass('text-primary');
    fireEvent.click(screen.getByText('cancel'));
    expect(screen.queryByText('Delete note?')).toBeNull();
    openDelete();
    fireEvent.click(screen.getByText('Delete'));
    expect(onOnDeleteRequested).toHaveBeenCalledWith('501');
    expect(screen.queryByText('Delete note?')).toBeNull();
  });

  it('new parameters recompute the preview only while no note is edited', () => {
    const notes = (n: number) => ({
      Total: n,
      Note_Item_List: Array.from({ length: n }, (_, i) => ({ Id: String(i + 1), Note: `Note ${String(i + 1)}` })),
    });
    const { container, rerender } = render(<Note_Item_List notes={notes(2)} inShowPreviewOnly />);
    expect(screen.queryByText(/Show all notes/)).toBeNull();
    rerender(<Note_Item_List notes={notes(3)} inShowPreviewOnly inEditingNoteId="1" />);
    expect(items(container)).toHaveLength(3);
    rerender(<Note_Item_List notes={notes(3)} inShowPreviewOnly />);
    expect(items(container)).toHaveLength(2);
    expect(screen.getByText('Show all notes (3)')).toBeInTheDocument();
  });
});

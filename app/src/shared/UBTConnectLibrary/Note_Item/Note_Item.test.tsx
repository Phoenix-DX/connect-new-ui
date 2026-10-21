import { composeStories } from '@storybook/react-vite';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { Note_Item } from './Note_Item';
import * as stories from './Note_Item.stories';

const { CompiledView, Search, Dimmed, Editing } = composeStories(stories);

/* No captured DOM exists for this block: the checks follow the compiled view
   (migration/blocks/sources/UBTConnectLibrary.ConnectPatterns.Note_Item.mvc.js:211-790). */
describe('Note_Item', () => {
  beforeEach(() => {
    vi.useFakeTimers({ toFake: ['Date'] });
    vi.setSystemTime(new Date(2026, 9, 15, 9, 0, 0));
  });
  afterEach(() => {
    vi.useRealTimers();
  });

  it('reading: icon, ellipsis text, relative time and the kebab menu', () => {
    const { container } = render(<CompiledView />);
    const root = container.querySelector('[data-block="ConnectPatterns.Note_Item"]');
    const outer = root?.querySelector(':scope > [data-block="BasePatterns.Columns_Two"]');
    expect(outer).not.toBeNull();
    expect(root?.querySelector('.connect-icon-list_alt_fill')).toHaveClass('text-cyan-dark');
    expect(root?.querySelector('[data-block="ConnectPatterns.TextEllipsis"]')).toHaveTextContent(
      'Bring the picnic blanket to the next visit',
    );
    const column = root?.querySelector('.ubt-custom-container.padding-left-xs');
    expect(column).toHaveClass('display-flex', 'flex-direction-column');
    expect(column).toHaveStyle({ minWidth: '0', maxWidth: '100%' });
    expect(screen.getByText('2 w').closest('[data-container]')).toHaveClass('text-neutral-7', 'font-size-xxs');
    expect(root?.querySelector('[data-block="ConnectPatterns.KebabButton_BookmarkNotes"] .kebab-blocker')).toBeNull();
  });

  it('search: CustomText with the search term highlighted (primary, semi-bold) instead of the ellipsis', () => {
    const { container } = render(<Search />);
    expect(container.querySelector('[data-block="ConnectPatterns.TextEllipsis"]')).toBeNull();
    expect(container.querySelector('[data-block="BasePatterns.CustomText"]')).toHaveTextContent(
      'Bring the picnic blanket to the next visit',
    );
  });

  it('dimmed: note-item-dimmed on the icon, the text and the time; the kebab menu is blocked', () => {
    const { container } = render(<Dimmed />);
    expect(container.querySelector('.connect-icon-list_alt_fill')).toHaveClass('note-item-dimmed');
    expect(container.querySelectorAll('.note-item-dimmed').length).toBeGreaterThanOrEqual(3);
    expect(container.querySelector('.ubt-kebab-menu > div')).toHaveClass('kebab-blocker');
  });

  it('GetRelativeTimeTag: the edited time with " · Edited" when edited more than 1 s after creation', () => {
    render(<Note_Item dateCreatedUtc="2026-10-15T08:00:00" dateEditedUtc="2026-10-15T08:59:30" />);
    expect(screen.getByText('30 s · Edited')).toBeInTheDocument();
  });

  it('editing: text area with counter, Cancel (secondary) and Save (primary; EdittingNote "" differs from In_Note)', () => {
    const onOnCancelEditRequested = vi.fn();
    const { container } = render(<Editing onOnCancelEditRequested={onOnCancelEditRequested} />);
    const area = container.querySelector('[data-block="ConnectPatterns.TextArea_WithCounter"] textarea');
    expect(area).toHaveClass('form-control', 'OSFillParent');
    expect(area).toHaveAttribute('maxlength', '100');
    expect(container.querySelector('[data-block="ConnectPatterns.InputCounter"]')).toHaveTextContent('0/100');
    expect(screen.getByText('Save').closest('button')).toHaveClass('ubt-button--primary');
    expect(screen.getByText('Save').closest('button')).not.toBeDisabled();
    expect(screen.getByText('Cancel').closest('button')).toHaveClass('ubt-button--secondary');
    fireEvent.click(screen.getByText('Cancel'));
    expect(onOnCancelEditRequested).toHaveBeenCalledTimes(1);
  });

  it('Edit sets EdittingNote = In_Note and raises OnEditRequested; Save raises OnSaveEditRequested; Delete', () => {
    const onOnEditRequested = vi.fn();
    const onOnSaveEditRequested = vi.fn();
    const onOnDeleteRequested = vi.fn();
    const props = { inNoteId: '7', inNote: 'Old text', onOnEditRequested, onOnSaveEditRequested, onOnDeleteRequested };
    const { rerender } = render(<Note_Item {...props} />);
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
    expect(onOnEditRequested).toHaveBeenCalledWith('7');
    rerender(<Note_Item {...props} isEditing />);
    const area = screen.getByDisplayValue('Old text');
    expect(screen.getByText('Save').closest('button')).toBeDisabled();
    fireEvent.change(area, { target: { value: 'New text' } });
    fireEvent.click(screen.getByText('Save'));
    expect(onOnSaveEditRequested).toHaveBeenCalledWith('7', 'New text');
    rerender(<Note_Item {...props} />);
    const anchor2 = document.querySelector('.dx-popup-menu-anchor .ubt-icon');
    if (!anchor2) throw new Error('no anchor');
    act(() => {
      fireEvent.click(anchor2);
    });
    const del = screen
      .getByText('Delete note')
      .closest('[data-block="ConnectPatterns.ContextMenu_Item"]')?.parentElement;
    if (!del) throw new Error('no delete option');
    fireEvent.click(del);
    expect(onOnDeleteRequested).toHaveBeenCalledWith('7');
  });
});

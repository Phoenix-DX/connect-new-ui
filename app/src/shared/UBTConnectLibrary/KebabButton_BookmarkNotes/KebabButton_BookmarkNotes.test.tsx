import { composeStories } from '@storybook/react-vite';
import { act, fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { KebabButton_BookmarkNotes } from './KebabButton_BookmarkNotes';
import * as stories from './KebabButton_BookmarkNotes.stories';

const { CompiledView, Disabled } = composeStories(stories);

const openMenu = () => {
  const anchor = document.querySelector('.dx-popup-menu-anchor .ubt-icon');
  if (!anchor) throw new Error('no anchor');
  act(() => {
    fireEvent.click(anchor);
  });
};
const option = (label: string) => {
  const item = [...document.querySelectorAll('[data-block="ConnectPatterns.ContextMenu_Item"]')].find(
    (i) => i.textContent === label,
  );
  const clickable = item?.parentElement;
  if (!clickable) throw new Error(`no option ${label}`);
  return clickable;
};

/* No captured DOM exists for this block: the checks follow the compiled view
   (migration/blocks/sources/UBTConnectLibrary.ConnectPatterns.KebabButton_BookmarkNotes.mvc.js:130-270). */
describe('KebabButton_BookmarkNotes', () => {
  it('ubt-kebab-menu container > container > ContextMenu (plain icon anchor), options Edit note / Delete note', () => {
    const { container } = render(<CompiledView />);
    const box = container.querySelector('.ubt-custom-container');
    expect(box).toHaveClass('ubt-kebab-menu');
    const inner = box?.firstElementChild;
    expect(inner?.hasAttribute('class')).toBe(false);
    expect(inner?.firstElementChild).toHaveAttribute('data-block', 'ConnectCorePatterns.ContextMenu');
    openMenu();
    const labels = [...document.querySelectorAll('[data-block="ConnectPatterns.ContextMenu_Item"]')].map(
      (i) => i.textContent,
    );
    expect(labels).toEqual(['Edit note', 'Delete note']);
  });

  it('isEnable False adds kebab-blocker', () => {
    const { container } = render(<Disabled />);
    expect(container.querySelector('.ubt-kebab-menu > div')).toHaveClass('kebab-blocker');
  });

  it('the options raise Edit and Delete', () => {
    const onEdit = vi.fn();
    const onDelete = vi.fn();
    render(<KebabButton_BookmarkNotes onEdit={onEdit} onDelete={onDelete} />);
    openMenu();
    fireEvent.click(option('Edit note'));
    expect(onEdit).toHaveBeenCalledTimes(1);
    openMenu();
    fireEvent.click(option('Delete note'));
    expect(onDelete).toHaveBeenCalledTimes(1);
  });
});

import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { testCapturedVariants } from '@/test/capturedVariants';
import { PopupMenu } from './PopupMenu';
import * as stories from './PopupMenu.stories';
import { popupPosition } from './position';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });
const bodyPopup = () => document.body.querySelector(':scope > .dx-popup-menu-container');

describe('PopupMenu', () => {
  testCapturedVariants(stories, captures);

  it('opens on an anchor click (OnOpen, open classes, container in <body>) and closes on a click outside', async () => {
    const onOnOpen = vi.fn();
    const onOnClose = vi.fn();
    const parentClick = vi.fn();
    const { container } = render(
      <div onClick={parentClick}>
        <PopupMenu
          position="left"
          extendedClass="x-extra"
          onOnOpen={onOnOpen}
          onOnClose={onOnClose}
          anchor={<span>anchor</span>}
          popupMenu={<span>menu</span>}
        />
      </div>,
    );
    expect(screen.queryByText('menu')).toBeNull();
    fireEvent.click(screen.getByText('anchor'));
    expect(onOnOpen).toHaveBeenCalledTimes(1);
    expect(parentClick).not.toHaveBeenCalled();
    await waitFor(() => {
      expect(container.querySelector('.dx-popup-menu')).toHaveClass('dx-popup-menu-open', 'x-extra');
    });
    const popup = bodyPopup();
    expect(popup).toHaveClass('dx-popup-menu-open', 'dx-popup-menu-position-left', 'x-extra');
    // the position is written by the positioning step after the open render (position.ts): wait for it, as for the classes
    await waitFor(() => {
      expect(popup).toHaveStyle({ position: 'fixed' });
    });
    expect(popup?.querySelector('.dx-popup-menu-content')).toHaveTextContent('menu');
    fireEvent.click(document.body);
    expect(onOnClose).toHaveBeenCalledTimes(1);
    expect(container.querySelector('.dx-popup-menu')).not.toHaveClass('dx-popup-menu-open');
    expect(bodyPopup()).not.toHaveClass('dx-popup-menu-open');
    expect(screen.getByText('menu')).toBeInTheDocument();
  });

  it('closes on a second anchor click and on dx-before-navigation', async () => {
    const onOnClose = vi.fn();
    render(<PopupMenu onOnClose={onOnClose} anchor={<span>anchor</span>} />);
    const isOpen = () => document.querySelector('.dx-popup-menu')?.classList.contains('dx-popup-menu-open');
    fireEvent.click(screen.getByText('anchor'));
    await waitFor(() => {
      expect(isOpen()).toBe(true);
    });
    fireEvent.click(screen.getByText('anchor'));
    expect(isOpen()).toBe(false);
    fireEvent.click(screen.getByText('anchor'));
    await waitFor(() => {
      expect(isOpen()).toBe(true);
    });
    act(() => {
      window.dispatchEvent(new Event('dx-before-navigation'));
    });
    expect(isOpen()).toBe(false);
    expect(onOnClose).toHaveBeenCalledTimes(2);
  });

  it('renders the content at once and opens when IsOpen is True', async () => {
    const onOnOpen = vi.fn();
    render(<PopupMenu isOpen onOnOpen={onOnOpen} popupMenu={<span>menu</span>} />);
    expect(screen.getByText('menu')).toBeInTheDocument();
    await waitFor(() => {
      expect(bodyPopup()).toHaveClass('dx-popup-menu-open');
    });
    expect(onOnOpen).toHaveBeenCalledTimes(1);
  });
});

describe('popupPosition', () => {
  const anchor = { x: 100, y: 50, width: 20, height: 20 };
  const size = { width: 80, height: 40 };
  const none = { top: 0, right: 0, bottom: 0, left: 0 };
  const view = { width: 400, height: 800 };

  it('aligns the popup to the anchor for each Position', () => {
    expect(popupPosition('bottom-left', anchor, size, none, view)).toEqual({ top: 70, left: 40 });
    expect(popupPosition('left', anchor, size, none, view)).toEqual({ top: 40, left: 40 });
    expect(popupPosition('top-left', anchor, size, none, view)).toEqual({ top: 10, left: 40 });
    expect(popupPosition('top', anchor, size, none, view)).toEqual({ top: 10, left: 70 });
    expect(popupPosition('top-right', anchor, size, none, view)).toEqual({ top: 10, left: 100 });
    expect(popupPosition('center', anchor, size, none, view)).toEqual({ top: 40, left: 70 });
    expect(popupPosition('right', anchor, size, none, view)).toEqual({ top: 40, left: 100 });
    expect(popupPosition('bottom', anchor, size, none, view)).toEqual({ top: 70, left: 70 });
    expect(popupPosition('', anchor, size, none, view)).toEqual({ top: 70, left: 100 });
  });

  it('keeps the margin box inside the window', () => {
    const margins = { top: 4, right: 4, bottom: 4, left: 4 };
    expect(popupPosition('', { ...anchor, x: 390 }, size, margins, view)).toEqual({ top: 66, left: 312 });
    expect(popupPosition('top-left', { ...anchor, x: 0, y: 0 }, size, none, view)).toEqual({ top: 0, left: 0 });
  });
});

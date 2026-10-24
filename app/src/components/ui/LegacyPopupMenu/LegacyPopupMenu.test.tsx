import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import { LegacyPopupMenu } from './LegacyPopupMenu';
import * as stories from './LegacyPopupMenu.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });
const bodyPopup = () => document.body.querySelector(':scope > .dx-popup-menu-container');

/* Behaviour from Connect2_LegacyShared.Widgets.PopupMenu.mvc.js (BookmarksByGroup pretty sources): view :163-249,
   controller :253-620, JS nodes :622-900. */
describe('Connect2_LegacyShared PopupMenu', () => {
  testCapturedVariants(stories, captures);

  it('closed: no content yet, the backdrop after it, ids Root and Anchor from the instance id', () => {
    const { container } = render(
      <LegacyPopupMenu id="b1-$b1" anchor={<span>anchor</span>} popupMenu={<span>menu</span>} />,
    );
    expect(container.querySelector('#b1-b1-Root')).toHaveClass('dx-popup-menu', 'dx-popup-menu-position-');
    expect(container.querySelector('#b1-b1-Anchor')).toHaveTextContent('anchor');
    expect(screen.queryByText('menu')).toBeNull();
    expect(container.querySelector('.dx-popup-menu-container > .dx-popup-menu-backdrop')).not.toBeNull();
  });

  it('an anchor click raises OnOpen, opens in <body> before the backdrop; a click outside closes (OnClose)', async () => {
    const onOnOpen = vi.fn();
    const onOnClose = vi.fn();
    const parentClick = vi.fn();
    const { container } = render(
      <div onClick={parentClick}>
        <LegacyPopupMenu
          id="b1-$b1"
          extendedClass="backwards-compatibility"
          onOnOpen={onOnOpen}
          onOnClose={onOnClose}
          anchor={<span>anchor</span>}
          popupMenu={<span>menu</span>}
        />
      </div>,
    );
    fireEvent.click(screen.getByText('anchor'));
    expect(onOnOpen).toHaveBeenCalledTimes(1);
    expect(parentClick).not.toHaveBeenCalled();
    await waitFor(() => {
      expect(bodyPopup()).toHaveClass('dx-popup-menu-open', 'backwards-compatibility');
    });
    const popup = bodyPopup();
    expect(popup?.firstElementChild).toHaveAttribute('id', 'b1-b1-PopupMenu');
    expect(popup?.firstElementChild).toHaveTextContent('menu');
    expect(popup?.lastElementChild).toHaveClass('dx-popup-menu-backdrop');
    expect(container.querySelector('#b1-b1-Root')).toHaveClass('dx-popup-menu-open');
    fireEvent.click(document.body);
    expect(onOnClose).toHaveBeenCalledTimes(1);
    expect(bodyPopup()).not.toHaveClass('dx-popup-menu-open');
    expect(screen.getByText('menu')).toBeInTheDocument();
  });

  it('IsOpen True renders the content at once and opens', async () => {
    const onOnOpen = vi.fn();
    render(<LegacyPopupMenu id="b1-$b1" isOpen onOnOpen={onOnOpen} popupMenu={<span>menu</span>} />);
    expect(screen.getByText('menu')).toBeInTheDocument();
    await waitFor(() => {
      expect(bodyPopup()).toHaveClass('dx-popup-menu-open');
    });
    expect(onOnOpen).toHaveBeenCalledTimes(1);
  });
});

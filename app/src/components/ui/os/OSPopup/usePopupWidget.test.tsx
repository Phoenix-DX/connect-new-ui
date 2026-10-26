import { render } from '@testing-library/react';
import { useRef } from 'react';
import { createPortal } from 'react-dom';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { OSPopupWidget, usePopupWidget } from './usePopupWidget';

/** A Popup widget port: the hook always, the backdrop in <body> while open. */
function Popup({ open }: { open: boolean }) {
  usePopupWidget(open);
  return open ? createPortal(<div className="popup-backdrop" data-popup-backdrop="" />, document.body) : null;
}

/** A Popup port that passes its portal's first element for focusFirstFocusableElement. */
function FocusPopup({ open }: { open: boolean }) {
  const node = useRef<HTMLDivElement>(null);
  usePopupWidget(open, node);
  return open
    ? createPortal(
        <div ref={node}>
          <span>text</span>
          <button type="button">first</button>
          <input />
        </div>,
        document.body,
      )
    : null;
}

describe('usePopupWidget (OutSystemsReactWidgets.js Popup :2819-2912)', () => {
  let main: HTMLElement;
  beforeEach(() => {
    main = document.createElement('div');
    main.id = 'reactContainer';
    document.body.appendChild(main);
  });
  afterEach(() => {
    document.body.innerHTML = '';
    document.documentElement.className = '';
  });
  const html = () => document.documentElement.classList.contains('popup-disable-scroll');

  it('hides #reactContainer and disables the scroll while open, restores both when closed or unmounted', () => {
    const { rerender, unmount } = render(<Popup open />, { container: main });
    expect(main).toHaveAttribute('aria-hidden', 'true');
    expect(html()).toBe(true);
    rerender(<Popup open={false} />);
    expect(main).not.toHaveAttribute('aria-hidden');
    expect(html()).toBe(false);
    rerender(<Popup open />);
    unmount();
    expect(html()).toBe(false);
  });

  it('a closed popup keeps aria-hidden while another backdrop is open, but removes the html class on update', () => {
    const { rerender } = render(
      <>
        <OSPopupWidget showPopup />
        <Popup open={false} />
        <div className="popup-backdrop" />
      </>,
      { container: main },
    );
    rerender(
      <>
        <OSPopupWidget showPopup />
        <Popup open={false} />
        <div className="popup-backdrop" />
      </>,
    );
    expect(main).toHaveAttribute('aria-hidden', 'true');
    expect(html()).toBe(false);
  });

  it('state.value: the popup whose ShowPopup changed re-renders after its siblings and applies its scroll class last', () => {
    const { rerender, unmount } = render(
      <>
        <Popup open={false} />
        <OSPopupWidget showPopup={false} />
      </>,
      { container: main },
    );
    // same commit: the open popup adds the class, the closed sibling after it removes it; the re-render re-adds it
    rerender(
      <>
        <Popup open />
        <OSPopupWidget showPopup={false} />
      </>,
    );
    expect(html()).toBe(true);
    unmount();
  });

  it('setState callback: with ShowPopup, the first input, button, textarea, select or a of the node gets the focus', () => {
    const { rerender, unmount } = render(<FocusPopup open={false} />, { container: main });
    rerender(<FocusPopup open />);
    expect(document.activeElement?.textContent).toBe('first');
    unmount();
  });
});

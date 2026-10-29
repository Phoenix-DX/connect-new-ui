import { act, fireEvent, render } from '@testing-library/react';
import { createRef, type ComponentProps } from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { Tooltip, type TooltipHandle } from './Tooltip';

/* OutSystemsUI_2_23.Content.Tooltip: the view (Tooltip.mvc.js:168-247) and the OnClick path of the OSUI provider
   (W646155-668600, Balloon W104243-120900, FloatingUI W1276300-1281400). Timers are fake: the provider runs the body
   listener, the blur check and OnToggle a tick later, and resets the position 50 ms after a close. */

const ID = 'b2-l1_1-b9-Tooltip_UniqueName';

type TooltipProps = ComponentProps<typeof Tooltip>;

function renderTooltip(props: Partial<TooltipProps> = {}, id = ID) {
  const onToggle = vi.fn();
  const ref = createRef<TooltipHandle>();
  const view = render(
    <Tooltip
      id={id}
      ref={ref}
      trigger="OnClick"
      position="top"
      content={<i className="icon orbit-icon-circle-warning" data-icon="" />}
      tooltip="Room name must be unique."
      onToggle={onToggle}
      {...props}
    />,
  );
  return { ...view, ref, onToggle, ...parts(view.container) };
}

function parts(scope: Element) {
  const get = (selector: string) => {
    const el = scope.querySelector<HTMLElement>(selector);
    if (!el) throw new Error(`${selector} not rendered`);
    return el;
  };
  const content = get('.osui-tooltip__content');
  /* jsdom has no cascade for custom properties: the OSUI CSS gives the content 8 px (var(--space-s), 6.2.15). */
  content.style.setProperty('--osui-floating-offset', '8px');
  return {
    root: get('.osui-tooltip'),
    content,
    wrapper: get('.osui-tooltip__balloon-wrapper'),
    balloon: get('.osui-tooltip__balloon-wrapper__balloon'),
    arrow: get('.osui-tooltip__balloon-arrow'),
  };
}

/** One tick: the AsyncInvocation (setTimeout 0, W123356) of the provider. */
const tick = () => {
  act(() => {
    vi.advanceTimersByTime(0);
  });
};

const isOpen = (root: HTMLElement, wrapper: HTMLElement) =>
  root.classList.contains('osui-tooltip--is-open') &&
  wrapper.classList.contains('osui-tooltip__balloon-wrapper--is-open') &&
  wrapper.classList.contains('osui-balloon--is-open') &&
  wrapper.getAttribute('aria-hidden') === 'false';

const isClosed = (root: HTMLElement, wrapper: HTMLElement) =>
  !root.classList.contains('osui-tooltip--is-open') &&
  !wrapper.classList.contains('osui-tooltip__balloon-wrapper--is-open') &&
  !wrapper.classList.contains('osui-balloon--is-open') &&
  wrapper.getAttribute('aria-hidden') === 'true';

beforeEach(() => {
  vi.useFakeTimers();
});
afterEach(() => {
  vi.useRealTimers();
});

describe('Tooltip markup (Tooltip.mvc.js:168-247, provider build)', () => {
  it('renders the closed block: the balloon and the arrow are always in the DOM', () => {
    const { container, root, content, wrapper, balloon, arrow } = renderTooltip();
    const block = container.firstElementChild as HTMLElement;
    expect(block.className).toBe('OSBlockWidget');
    expect(block.dataset.block).toBe('Content.Tooltip');
    expect(block.id).toBe(ID);

    expect(root.className).toBe('osui-tooltip');
    expect(root.id).toBe(`${ID}-TooltipWrapper`);
    expect(root).toHaveAttribute('data-container', '');
    const uniqueId = root.getAttribute('name');
    expect(uniqueId).toBeTruthy();
    expect(wrapper.dataset.uniqueid).toBe(uniqueId);
    expect([...root.children]).toEqual([content, wrapper]);

    expect(content.id).toBe(`${ID}-Content`);
    expect(content).toHaveAttribute('role', 'button');
    expect(content).toHaveAttribute('tabindex', '0');
    expect(content).toHaveAttribute('aria-describedby', `${ID}-Tooltip`);
    expect(content).toHaveAttribute('default-tabindex-element', '');
    expect(content.querySelector('i.icon.orbit-icon-circle-warning')).not.toBeNull();

    expect(wrapper.className).toBe('osui-tooltip__balloon-wrapper osui-balloon');
    expect(wrapper.id).toBe(`${ID}-TooltipBallonWrapper`);
    expect(wrapper).toHaveAttribute('role', 'tooltip');
    expect(wrapper).toHaveAttribute('aria-hidden', 'true');
    expect(wrapper).toHaveAttribute('data-container', '');
    expect(wrapper.style.getPropertyValue('--osui-balloon-width')).toBe('max-content');
    expect(wrapper.style.getPropertyValue('--osui-balloon-shape')).toBe('var(--border-radius-sharp)');
    expect(wrapper.style.getPropertyValue('--osui-floating-position-x')).toBe('');
    expect([...wrapper.children]).toEqual([balloon, arrow]);

    expect(balloon.className).toBe('osui-tooltip__balloon-wrapper__balloon OSInline');
    expect(balloon.id).toBe(`${ID}-Tooltip`);
    expect(balloon.textContent).toBe('Room name must be unique.');
    expect(arrow.id).toBe(`${ID}-ArrowElement`);
    expect(arrow).toHaveAttribute('data-container', '');
    expect(arrow.getAttribute('style')).toBeNull();
    expect(isClosed(root, wrapper)).toBe(true);
  });

  it('ExtendedClass goes on the osui-tooltip element; two tooltips get two unique ids', () => {
    const first = renderTooltip({ extendedClass: 'orbit-extra' });
    expect(first.root.className).toBe('osui-tooltip orbit-extra');
    const second = renderTooltip({}, 'b3-Tooltip_UniqueName');
    expect(second.root.getAttribute('name')).not.toBe(first.root.getAttribute('name'));
  });
});

describe('Tooltip OnClick trigger (provider W646155-668600)', () => {
  it('B1, B5, B6: a click on the content opens, with the is-open classes and OnToggle(true) once', () => {
    const { root, content, wrapper, onToggle } = renderTooltip();
    fireEvent.click(content);
    expect(isOpen(root, wrapper)).toBe(true);
    expect(onToggle).toHaveBeenCalledTimes(1);
    expect(onToggle).toHaveBeenLastCalledWith(true);
  });

  it('B1: a second click on the content keeps it open, and the click does not reach the body', () => {
    const { root, content, wrapper, onToggle } = renderTooltip();
    const bodyClick = vi.fn();
    document.body.addEventListener('click', bodyClick);
    fireEvent.click(content);
    tick();
    fireEvent.click(content.querySelector('i') as Element);
    expect(isOpen(root, wrapper)).toBe(true);
    expect(onToggle).toHaveBeenCalledTimes(1);
    expect(bodyClick).not.toHaveBeenCalled();
    document.body.removeEventListener('click', bodyClick);
  });

  it('B8: a body click closes once the listener is on (one tick after the open); the balloon does not', () => {
    const { root, content, wrapper, balloon, onToggle } = renderTooltip();
    fireEvent.click(content);
    fireEvent.click(document.body);
    expect(isOpen(root, wrapper)).toBe(true);
    tick();
    fireEvent.click(balloon);
    fireEvent.click(wrapper);
    expect(isOpen(root, wrapper)).toBe(true);
    fireEvent.click(document.body);
    expect(isClosed(root, wrapper)).toBe(true);
    expect(onToggle.mock.calls).toEqual([[true], [false]]);
    fireEvent.click(document.body);
    expect(onToggle).toHaveBeenCalledTimes(2);
  });

  it('B9: a click inside the balloon stops at the balloon, except on a focusable child', () => {
    const { content, root, wrapper } = renderTooltip({
      tooltip: (
        <>
          <span>Room name must be unique.</span>
          <button type="button">Rename</button>
        </>
      ),
    });
    const documentClick = vi.fn();
    document.addEventListener('click', documentClick);
    fireEvent.click(content);
    tick();
    fireEvent.click(wrapper.querySelector('span') as Element);
    expect(documentClick).not.toHaveBeenCalled();
    fireEvent.click(wrapper.querySelector('button') as Element);
    expect(documentClick).toHaveBeenCalledTimes(1);
    expect(isOpen(root, wrapper)).toBe(true);
    document.removeEventListener('click', documentClick);
  });

  it('B4: Esc while open closes, Tab closes; Esc while closed does nothing; the key does not propagate', () => {
    const { root, content, wrapper, onToggle } = renderTooltip();
    const documentKey = vi.fn();
    document.addEventListener('keydown', documentKey);
    fireEvent.keyDown(content, { key: 'Escape' });
    expect(onToggle).not.toHaveBeenCalled();
    fireEvent.click(content);
    fireEvent.keyDown(content, { key: 'Escape' });
    expect(isClosed(root, wrapper)).toBe(true);
    fireEvent.click(content);
    fireEvent.keyDown(content, { key: 'Enter' });
    expect(isOpen(root, wrapper)).toBe(true);
    fireEvent.keyDown(content, { key: 'Tab' });
    expect(isClosed(root, wrapper)).toBe(true);
    expect(onToggle.mock.calls).toEqual([[true], [false], [true], [false]]);
    expect(documentKey).not.toHaveBeenCalled();
    document.removeEventListener('keydown', documentKey);
  });

  it('B2, B3: focus opens; blur to the body keeps it open; focus that moves into another tooltip closes it a tick later', () => {
    const first = renderTooltip();
    const second = renderTooltip({}, 'b3-Tooltip_UniqueName');
    act(() => {
      first.content.focus();
    });
    expect(isOpen(first.root, first.wrapper)).toBe(true);
    act(() => {
      first.content.blur();
    });
    tick();
    expect(isOpen(first.root, first.wrapper)).toBe(true);
    act(() => {
      first.content.focus();
      second.content.focus();
    });
    expect(isOpen(first.root, first.wrapper)).toBe(true);
    expect(isOpen(second.root, second.wrapper)).toBe(true);
    tick();
    expect(isClosed(first.root, first.wrapper)).toBe(true);
    expect(first.onToggle.mock.calls).toEqual([[true], [false]]);
  });

  it('B3: focus inside its own balloon keeps it open, and the blur check follows the focused element', () => {
    const first = renderTooltip({ tooltip: <button type="button">Rename</button> });
    const second = renderTooltip({}, 'b3-Tooltip_UniqueName');
    const button = first.balloon.querySelector('button') as HTMLButtonElement;
    act(() => {
      first.content.focus();
      button.focus();
    });
    tick();
    expect(isOpen(first.root, first.wrapper)).toBe(true);
    act(() => {
      second.content.focus();
    });
    tick();
    expect(isClosed(first.root, first.wrapper)).toBe(true);
  });
});

describe('Tooltip handle (TooltipOpen and TooltipClose, B10) and StartsOpen (B11)', () => {
  it('open() opens once and close() closes once; a call on the same state does nothing', () => {
    const { ref, root, wrapper, onToggle } = renderTooltip();
    act(() => {
      ref.current?.open();
    });
    act(() => {
      ref.current?.open();
    });
    expect(isOpen(root, wrapper)).toBe(true);
    act(() => {
      ref.current?.close();
    });
    act(() => {
      ref.current?.close();
    });
    expect(isClosed(root, wrapper)).toBe(true);
    expect(onToggle.mock.calls).toEqual([[true], [false]]);
  });

  it('startsOpen opens at build with OnToggle(true)', () => {
    const { root, wrapper, onToggle } = renderTooltip({ startsOpen: true });
    expect(isOpen(root, wrapper)).toBe(true);
    expect(onToggle.mock.calls).toEqual([[true]]);
  });

  it('B14: an unmount while open removes the body listener and the timers', () => {
    const { content, onToggle, unmount } = renderTooltip();
    fireEvent.click(content);
    tick();
    fireEvent.keyDown(content, { key: 'Escape' });
    fireEvent.click(content);
    tick();
    unmount();
    fireEvent.click(document.body);
    act(() => {
      vi.advanceTimersByTime(100);
    });
    expect(onToggle.mock.calls).toEqual([[true], [false], [true]]);
  });
});

describe('Tooltip position (B12, B13, B7)', () => {
  function rect(left: number, top: number, width: number, height: number): DOMRect {
    return {
      left,
      top,
      width,
      height,
      x: left,
      y: top,
      right: left + width,
      bottom: top + height,
      toJSON: () => ({}),
    };
  }
  function layout(content: HTMLElement, wrapper: HTMLElement, arrow: HTMLElement, contentTop = 300) {
    content.getBoundingClientRect = () => rect(20, contentTop, 335, 24);
    wrapper.getBoundingClientRect = () => rect(0, 0, 180, 40);
    Object.defineProperty(wrapper, 'clientWidth', { configurable: true, value: 180 });
    Object.defineProperty(wrapper, 'clientHeight', { configurable: true, value: 40 });
    Object.defineProperty(arrow, 'offsetWidth', { configurable: true, value: 10 });
  }
  beforeEach(() => {
    Object.defineProperty(document.documentElement, 'clientWidth', { configurable: true, value: 375 });
    Object.defineProperty(document.documentElement, 'clientHeight', { configurable: true, value: 667 });
  });
  afterEach(() => {
    Reflect.deleteProperty(document.documentElement, 'clientWidth');
    Reflect.deleteProperty(document.documentElement, 'clientHeight');
  });
  const OFFSET = Math.sqrt(8 * 10 ** 2) / 2;

  it('on open: the position variables, the placement class and the arrow style', () => {
    const { content, wrapper, arrow } = renderTooltip();
    layout(content, wrapper, arrow);
    fireEvent.click(content);
    expect(wrapper.style.getPropertyValue('--osui-floating-position-x')).toBe('97.5px');
    expect(wrapper.style.getPropertyValue('--osui-floating-position-y')).toBe(`${String(300 - 40 - OFFSET)}px`);
    expect(wrapper).toHaveClass('top');
    expect(arrow.style.left).toBe('85px');
    expect(arrow.style.bottom).toBe('-5px');
  });

  it('re-runs on a window resize or scroll while open, and flips to bottom when top does not fit', () => {
    const { content, wrapper, arrow } = renderTooltip();
    layout(content, wrapper, arrow);
    fireEvent.click(content);
    layout(content, wrapper, arrow, 30);
    fireEvent(window, new Event('resize'));
    expect(wrapper).toHaveClass('bottom');
    expect(wrapper).not.toHaveClass('top');
    expect(wrapper.style.getPropertyValue('--osui-floating-position-y')).toBe(`${String(30 + 24 + OFFSET)}px`);
    expect(arrow.style.top).toBe('-5px');
    expect(arrow.style.bottom).toBe('');
    layout(content, wrapper, arrow, 300);
    fireEvent.scroll(window);
    expect(wrapper).toHaveClass('top');
  });

  it('B7: on close the position variables go to 0 after 50 ms; the placement class and the arrow style stay', () => {
    const { content, wrapper, arrow } = renderTooltip();
    layout(content, wrapper, arrow);
    fireEvent.click(content);
    fireEvent.keyDown(content, { key: 'Escape' });
    act(() => {
      vi.advanceTimersByTime(49);
    });
    expect(wrapper.style.getPropertyValue('--osui-floating-position-x')).toBe('97.5px');
    act(() => {
      vi.advanceTimersByTime(1);
    });
    expect(wrapper.style.getPropertyValue('--osui-floating-position-x')).toBe('0');
    expect(wrapper.style.getPropertyValue('--osui-floating-position-y')).toBe('0');
    expect(wrapper).toHaveClass('top');
    expect(arrow.style.left).toBe('85px');
    layout(content, wrapper, arrow, 30);
    fireEvent(window, new Event('resize'));
    expect(wrapper).toHaveClass('top');
  });
});

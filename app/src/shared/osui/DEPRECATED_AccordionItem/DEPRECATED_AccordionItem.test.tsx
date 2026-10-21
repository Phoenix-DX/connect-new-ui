import { act, fireEvent, render } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { testCapturedVariants } from '../../test/capturedVariants';
import { DEPRECATED_AccordionItem } from './DEPRECATED_AccordionItem';
import * as stories from './DEPRECATED_AccordionItem.stories';

/* Stories with a capture; the others have their own tests. */
const capturedStories = { default: stories.default, V1: stories.V1, V2: stories.V2, V3: stories.V3, V4: stories.V4 };
const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

/** Renders an item inside the native layout (as on the Orbit screens) and returns its parts. */
function renderItem(props: Parameters<typeof DEPRECATED_AccordionItem>[0]) {
  const view = render(
    <>
      <DEPRECATED_AccordionItem {...props} />
      <div className="layout layout-native" />
    </>,
  );
  const q = (sel: string) => view.container.querySelector(sel) as HTMLElement;
  return {
    ...view,
    section: q('.section-expandable'),
    title: q('.section-expandable-title'),
    wrapper: q('.section-expandable-content'),
    titleText: q('.dividers'),
  };
}

describe('DEPRECATED_AccordionItem', () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  testCapturedVariants(capturedStories, captures);

  it('click expands with the height animation, raises OnToggle(True); a second click collapses', () => {
    vi.useFakeTimers();
    const onOnToggle = vi.fn();
    const { section, title, wrapper } = renderItem({ title: 'Arrival', content: 'Friday evening', onOnToggle });
    fireEvent.click(title);
    expect(onOnToggle).toHaveBeenLastCalledWith(true);
    expect(section.className).toBe('osui-deprecated section-expandable  open is--open ');
    expect(section.getAttribute('data-expanded')).toBe('true');
    expect(title.getAttribute('aria-expanded')).toBe('true');
    expect(wrapper.getAttribute('aria-hidden')).toBe('false');
    expect(wrapper.style.height).toBe('0px');
    expect(title.style.pointerEvents).toBe('none');
    act(() => {
      vi.advanceTimersByTime(100);
    });
    expect(wrapper).toHaveClass('is--animating', 'is--expanded');
    fireEvent.transitionEnd(wrapper);
    expect(wrapper).not.toHaveClass('is--animating');
    expect(wrapper.hasAttribute('style')).toBe(false);
    expect(title.style.pointerEvents).toBe('');

    fireEvent.click(title);
    expect(onOnToggle).toHaveBeenLastCalledWith(false);
    expect(section).toHaveClass('is--closed');
    act(() => {
      vi.advanceTimersByTime(100);
    });
    expect(wrapper).toHaveClass('is--collapsed');
    fireEvent.transitionEnd(wrapper);
    expect(wrapper.getAttribute('aria-hidden')).toBe('true');
  });

  it('IsExpanded: open on ready, content shown without animation', () => {
    const { section, wrapper } = renderItem({ isExpanded: true, title: 'Arrival', content: 'Friday evening' });
    expect(section).toHaveClass('open', 'is--open');
    expect(wrapper).toHaveClass('is--expanded');
    expect(wrapper).not.toHaveClass('is--collapsed');
  });

  it('IsDisabled: no toggle, is--disabled, title out of the tab order', () => {
    const onOnToggle = vi.fn();
    const { section, title } = renderItem({ isDisabled: true, title: 'Transport', content: 'None', onOnToggle });
    fireEvent.click(title);
    expect(onOnToggle).not.toHaveBeenCalled();
    expect(section).toHaveClass('is--disabled');
    expect(section.getAttribute('aria-disabled')).toBe('true');
    expect(title.getAttribute('aria-hidden')).toBe('true');
    expect(title.getAttribute('tabindex')).toBe('-1');
  });

  it('without content: tabindex -1 and a plain class toggle (ToggleClass)', () => {
    const onOnToggle = vi.fn();
    const { section, title, wrapper } = renderItem({ title: 'Empty', onOnToggle });
    expect(title.getAttribute('tabindex')).toBe('-1');
    expect(wrapper.getAttribute('tabindex')).toBe('-1');
    fireEvent.click(title);
    expect(onOnToggle).toHaveBeenCalledWith(true);
    expect(section).toHaveClass('is--open');
    expect(wrapper.hasAttribute('style')).toBe(false);
  });

  it('keyboard: Enter / Space toggle, Escape closes an open item', () => {
    const onOnToggle = vi.fn();
    const { title } = renderItem({ title: 'Arrival', content: 'Friday', onOnToggle });
    fireEvent.keyDown(title, { key: 'Enter' });
    expect(onOnToggle).toHaveBeenLastCalledWith(true);
    fireEvent.keyDown(title, { key: 'Escape' });
    expect(onOnToggle).toHaveBeenLastCalledWith(false);
    fireEvent.keyDown(title, { key: ' ' });
    expect(onOnToggle).toHaveBeenLastCalledWith(true);
  });

  it('outside a native layout (IsWebApp and IsLayoutNative False) the title gets text-ellipsis', () => {
    const { container } = render(<DEPRECATED_AccordionItem title="Arrival" content="Friday" />);
    expect(container.querySelector('.dividers')).toHaveClass('full-width', 'text-ellipsis');
  });

  it('OnParametersChanged: a new IsExpanded expands the item', () => {
    const { container, rerender } = render(<DEPRECATED_AccordionItem title="Arrival" content="Friday" />);
    rerender(<DEPRECATED_AccordionItem isExpanded title="Arrival" content="Friday" />);
    expect(container.querySelector('.section-expandable')).toHaveClass('is--open');
  });
});

import { act, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { Trigger } from '@/shared/osui/lib/staticEntities';
import { computeFloatingPosition, transformPosition } from './position';
import { Tooltip } from './Tooltip';

/* Never captured: behaviour from the compiled view and the OSUI Tooltip / Balloon provider. */
describe('Tooltip', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.useRealTimers();
    document.body.className = '';
  });

  it('markup and a11y: content button described by the balloon; balloon hidden', () => {
    const { container } = render(<Tooltip id="b2-$b9" content={<i>i</i>} tooltip="Beds available" />);
    const root = container.querySelector('.osui-tooltip');
    expect(root).toHaveClass('osui-tooltip--is-hover');
    const icon = screen.getByRole('button');
    expect(icon.getAttribute('aria-describedby')).toBe('b2-b9-Tooltip');
    expect(icon.getAttribute('tabindex')).toBe('0');
    const balloon = container.querySelector('.osui-balloon');
    expect(balloon?.getAttribute('role')).toBe('tooltip');
    expect(balloon?.getAttribute('aria-hidden')).toBe('true');
    expect(container.querySelector('#b2-b9-Tooltip')?.textContent).toBe('Beds available');
  });

  it('OnClick trigger: a click opens it (OnToggle true), a click outside closes it', () => {
    const onToggle = vi.fn();
    const { container } = render(
      <Tooltip id="b2-$b9" trigger={Trigger.OnClick} content={<i>i</i>} tooltip="Help" onOnToggle={onToggle} />,
    );
    const root = container.querySelector('.osui-tooltip');
    fireEvent.click(screen.getByRole('button'));
    expect(root).toHaveClass('osui-tooltip--is-open');
    expect(container.querySelector('.osui-balloon')).toHaveClass('osui-balloon--is-open', 'right');
    act(() => {
      vi.runOnlyPendingTimers();
    });
    expect(onToggle).toHaveBeenLastCalledWith('b2-$b9', true);
    fireEvent.click(document.body);
    expect(root).not.toHaveClass('osui-tooltip--is-open');
  });

  it('hover on desktop opens; leaving the icon closes unless the balloon is hovered', () => {
    document.body.classList.add('desktop');
    const { container } = render(<Tooltip content={<i>i</i>} tooltip="Help" />);
    const root = container.querySelector('.osui-tooltip');
    const icon = screen.getByRole('button');
    fireEvent.mouseEnter(icon);
    expect(root).toHaveClass('osui-tooltip--is-open');
    fireEvent.mouseLeave(icon);
    act(() => {
      vi.runOnlyPendingTimers();
    });
    expect(root).not.toHaveClass('osui-tooltip--is-open');
  });

  it('another balloon opening closes an open tooltip; on a phone the hover trigger becomes click', () => {
    document.body.classList.add('phone');
    const { container } = render(
      <>
        <Tooltip content={<i>a</i>} tooltip="First" />
        <Tooltip content={<i>b</i>} tooltip="Second" />
      </>,
    );
    const [first, second] = screen.getAllByRole('button');
    if (!first || !second) throw new Error('not rendered');
    const roots = container.querySelectorAll('.osui-tooltip');
    expect(roots[0]).not.toHaveClass('osui-tooltip--is-hover');
    fireEvent.click(first);
    expect(roots[0]).toHaveClass('osui-tooltip--is-open');
    fireEvent.click(second);
    expect(roots[1]).toHaveClass('osui-tooltip--is-open');
    expect(roots[0]).not.toHaveClass('osui-tooltip--is-open');
  });

  it('positions: OSUI Position → placement; right placement next to the anchor', () => {
    expect(transformPosition('bottom-left')).toBe('bottom-start');
    expect(transformPosition('center')).toBe('bottom');
    expect(transformPosition('right')).toBe('right');
    const anchor = { top: 100, bottom: 120, left: 50, right: 70, width: 20, height: 20 } as DOMRect;
    const r = computeFloatingPosition(anchor, { width: 100, height: 40 }, 'right', 6, 12);
    expect([r.x, r.y]).toEqual([76, 90]);
    expect(r.arrow).toMatchObject({ top: '14px', left: '-6px' });
  });
});

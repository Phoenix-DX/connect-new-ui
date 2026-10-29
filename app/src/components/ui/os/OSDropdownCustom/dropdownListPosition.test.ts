import { describe, expect, it } from 'vitest';
import {
  computeListPosition,
  keepListPosition,
  type ListPosition,
  type ListPositionInput,
} from './dropdownListPosition';

/* DropdownCustom.updateState (W14151-15700): the math only, with numbers in place of the DOM rects. */

/** A dropdown at the top of a 1024 × 768 window, its list closed; no popup in the page. */
const BASE: ListPositionInput = {
  contentLeft: 100,
  contentRight: 300,
  displayTop: 100,
  displayBottom: 140,
  listHeight: 200,
  listWidth: 120,
  pageXOffset: 0,
  pageYOffset: 0,
  innerWidth: 1024,
  innerHeight: 768,
  popupTop: null,
  listVisible: false,
  offsetLeft: 0,
};

describe('computeListPosition (updateState W14151-15700)', () => {
  it('opens down when the space below is larger: top = the display bottom, no height', () => {
    expect(computeListPosition(BASE)).toEqual({
      expanded: 'down',
      position: { left: '140px', top: '140px', width: '', height: '' },
    });
  });

  it('opens up when the space above is larger: top = the display top minus the list height', () => {
    const result = computeListPosition({ ...BASE, displayTop: 600, displayBottom: 640, innerHeight: 700 });
    expect(result.expanded).toBe('up');
    expect(result.position.top).toBe('400px');
    expect(result.position.height).toBe('');
  });

  it('on a phone (width ≤ 420): width = innerWidth − 20 and left = pageX + 10', () => {
    const result = computeListPosition({ ...BASE, innerWidth: 375, pageXOffset: 5 });
    expect(result.position.width).toBe('355px');
    expect(result.position.left).toBe('15px');
    expect(computeListPosition({ ...BASE, innerWidth: 420 }).position.width).toBe('400px');
    expect(computeListPosition({ ...BASE, innerWidth: 421 }).position.width).toBe('');
  });

  it('clamps the height at the bottom of the window (margin 10)', () => {
    const result = computeListPosition({
      ...BASE,
      displayTop: 200,
      displayBottom: 240,
      innerHeight: 600,
      listHeight: 400,
    });
    expect(result.expanded).toBe('down');
    expect(result.position).toEqual({ left: '140px', top: '240px', width: '', height: '350px' });
  });

  it('clamps the height at the top of the [data-popup] (margin 10), and takes the page offset', () => {
    const result = computeListPosition({
      ...BASE,
      displayTop: 400,
      displayBottom: 440,
      innerHeight: 500,
      listHeight: 500,
      popupTop: 50,
    });
    expect(result.expanded).toBe('up');
    expect(result.position).toEqual({ left: '140px', top: '60px', width: '', height: '340px' });
    // Without a popup the top is the page offset; the rects are viewport rects, moved by the offset.
    const scrolled = computeListPosition({ ...BASE, pageYOffset: 1000 });
    expect(scrolled.expanded).toBe('down');
    expect(scrolled.position.top).toBe('1140px');
  });

  it('left: the offset recorded by show() while open, else centred under the display (not before pageX)', () => {
    expect(computeListPosition({ ...BASE, listVisible: true, offsetLeft: 37.4 }).position.left).toBe('37px');
    expect(computeListPosition({ ...BASE, contentLeft: 0, contentRight: 60 }).position.left).toBe('0px');
    expect(computeListPosition({ ...BASE, contentLeft: 0, contentRight: 60, pageXOffset: 8 }).position.left).toBe(
      '8px',
    );
  });
});

describe('keepListPosition (the setState guard of updateState)', () => {
  const current: ListPosition = { left: '10px', top: '140px', width: '', height: '120px' };

  it('keeps the current position when left, top and width are the same and the new height is empty', () => {
    expect(keepListPosition(current, { ...current, height: '' })).toBe(current);
    expect(keepListPosition(current, { ...current })).toBe(current);
  });

  it('takes the new position when a value changes, or when a new height is set', () => {
    const moved = { ...current, top: '150px' };
    expect(keepListPosition(current, moved)).toBe(moved);
    const taller = { ...current, height: '200px' };
    expect(keepListPosition(current, taller)).toBe(taller);
    const narrow = { ...current, width: '355px' };
    expect(keepListPosition(current, narrow)).toBe(narrow);
  });
});

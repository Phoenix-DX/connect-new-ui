import { describe, expect, it } from 'vitest';
import { computeBalloonPosition, type BalloonPositionInput } from './balloonPosition';

/* setFloatingPosition of the OSUI FloatingUI provider (W1276300-1281200): offset, arrow and flip middlewares, with
   numbers in place of the DOM rects. */

/** The room-name tooltip on a 375 × 667 phone: the content div is full width (O6), the balloon is 180 × 40. */
const BASE: BalloonPositionInput = {
  anchor: { left: 20, top: 300, width: 335, height: 24 },
  balloon: { width: 180, height: 40 },
  balloonClient: { width: 180, height: 40 },
  arrowSize: 10,
  cssOffset: 8,
  viewport: { width: 375, height: 667 },
  scroll: { x: 0, y: 0 },
  placement: 'top',
};

/** B13: sqrt(--osui-floating-offset × arrow offsetWidth²) / 2 = sqrt(8 × 10²) / 2. */
const OFFSET = Math.sqrt(8 * 10 ** 2) / 2;

describe('computeBalloonPosition (FloatingUI W1276300-1281200)', () => {
  it('top that fits: x centred on the anchor, y = anchor top − balloon height − offset; arrow centred, bottom −5', () => {
    expect(computeBalloonPosition(BASE)).toEqual({
      placement: 'top',
      x: 20 + 335 / 2 - 180 / 2,
      y: 300 - 40 - OFFSET,
      arrow: { left: 180 / 2 - 10 / 2, bottom: -5 },
    });
    expect(OFFSET).toBeCloseTo(14.1421, 4);
  });

  it('top that does not fit: flips to bottom, y = anchor bottom + offset; the arrow static side is top', () => {
    const result = computeBalloonPosition({ ...BASE, anchor: { ...BASE.anchor, top: 30 } });
    expect(result.placement).toBe('bottom');
    expect(result.y).toBe(30 + 24 + OFFSET);
    expect(result.arrow).toEqual({ left: 85, top: -5 });
  });

  it('neither side fits: the side with the smaller overflow wins (bestFit)', () => {
    const anchor = { ...BASE.anchor, top: 30 };
    expect(computeBalloonPosition({ ...BASE, anchor, viewport: { width: 375, height: 100 } }).placement).toBe('bottom');
    expect(computeBalloonPosition({ ...BASE, anchor, viewport: { width: 375, height: 70 } }).placement).toBe('top');
  });

  it('a cross-axis overflow alone keeps top (both sides overflow the same; no shift middleware)', () => {
    const result = computeBalloonPosition({ ...BASE, anchor: { left: 0, top: 300, width: 24, height: 24 } });
    expect(result.placement).toBe('top');
    expect(result.x).toBe(12 - 90);
  });

  it('the absolute strategy adds the window scroll to x and y, not to the arrow', () => {
    const result = computeBalloonPosition({ ...BASE, scroll: { x: 4, y: 120 } });
    expect(result.x).toBe(97.5 + 4);
    expect(result.y).toBe(300 - 40 - OFFSET + 120);
    expect(result.arrow).toEqual({ left: 85, bottom: -5 });
  });

  it('right (the block default): x = anchor right + offset, y centred; the arrow is on the y axis, static side left', () => {
    const result = computeBalloonPosition({
      ...BASE,
      anchor: { left: 20, top: 300, width: 24, height: 24 },
      placement: 'right',
    });
    expect(result).toEqual({
      placement: 'right',
      x: 44 + OFFSET,
      y: 312 - 20,
      arrow: { left: -5, top: 15 },
    });
  });

  it('the arrow uses the clientWidth of the balloon; 0 falls back to the balloon width', () => {
    expect(computeBalloonPosition({ ...BASE, balloonClient: { width: 178, height: 38 } }).arrow.left).toBe(84);
    expect(computeBalloonPosition({ ...BASE, balloonClient: { width: 0, height: 0 } }).arrow.left).toBe(85);
  });
});

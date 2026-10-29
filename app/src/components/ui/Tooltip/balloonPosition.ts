/* setFloatingPosition of the OSUI FloatingUI provider (migration/runtime-sources/OutSystemsUI_2_23.OutSystemsUI.js
   W1276300-1281200, `W<n>` = character offset): Floating UI computePosition with the middlewares offset, arrow and
   flip, in that order, and the default absolute strategy. Numbers in, no DOM: Tooltip.tsx reads the rects, then
   applies the result. Decision O1 (a): a re-implementation of the Floating UI 1.x defaults (flip: mainAxis, crossAxis,
   bestFit; arrow padding 0). The TST copy of Floating UI is not in the repo, so pixel equality is not checked. Ported
   for the four base sides only: the Tooltip block of the app uses `top` (T1). */

/** A base placement (GlobalEnum.FloatingPosition Top, Bottom, Left, Right); also the placement class of the balloon. */
export type BalloonSide = 'top' | 'bottom' | 'left' | 'right';

interface Size {
  width: number;
  height: number;
}

export interface BalloonPositionInput {
  /** The anchor (`.osui-tooltip__content`) getBoundingClientRect(), in viewport coordinates. */
  anchor: Size & { left: number; top: number };
  /** The floating element (`.osui-tooltip__balloon-wrapper`) getBoundingClientRect() size. */
  balloon: Size;
  /** The floating element clientWidth and clientHeight: the offset parent of the arrow; 0 falls back to `balloon`. */
  balloonClient: Size;
  /** The arrow offsetWidth (`--osui-tooltip-arrow-size`, 10 px). */
  arrowSize: number;
  /** parseInt of `--osui-floating-offset` on the anchor (getOffsetValue W693256; 8 px = var(--space-s)). */
  cssOffset: number;
  /** The clipping rect of flip: the viewport (documentElement clientWidth and clientHeight). */
  viewport: Size;
  /** The window scroll: the absolute strategy gives page coordinates. */
  scroll: { x: number; y: number };
  placement: BalloonSide;
}

/** The arrow style (W1279300-1280300): the cross-axis coordinate, and the static side at −offsetWidth / 2. Only the
    keys that the provider sets to a value, in the order left, top, right, bottom of its Object.assign. */
export type ArrowPosition = Partial<Record<BalloonSide, number>>;

interface BalloonPosition {
  /** `--osui-floating-position-x` and `-y` (px). */
  x: number;
  y: number;
  /** The final placement after flip (the class on the balloon). */
  placement: BalloonSide;
  arrow: ArrowPosition;
}

const OPPOSITE: Record<BalloonSide, BalloonSide> = { top: 'bottom', bottom: 'top', left: 'right', right: 'left' };

const isVertical = (side: BalloonSide) => side === 'top' || side === 'bottom';

/** computeCoordsFromPlacement, then the offset middleware (main axis only; −offset for top and left). */
function coordsFor(side: BalloonSide, { anchor, balloon }: BalloonPositionInput, offset: number) {
  const commonX = anchor.left + anchor.width / 2 - balloon.width / 2;
  const commonY = anchor.top + anchor.height / 2 - balloon.height / 2;
  switch (side) {
    case 'top':
      return { x: commonX, y: anchor.top - balloon.height - offset };
    case 'bottom':
      return { x: commonX, y: anchor.top + anchor.height + offset };
    case 'right':
      return { x: anchor.left + anchor.width + offset, y: commonY };
    case 'left':
      return { x: anchor.left - balloon.width - offset, y: commonY };
  }
}

/** flip: the overflow of the placed balloon on the side, then on the two alignment sides (getAlignmentSides: left
    then right, or top then bottom; swapped when the anchor is larger than the balloon on that axis). */
function overflowsFor(side: BalloonSide, c: { x: number; y: number }, input: BalloonPositionInput): number[] {
  const { anchor, balloon, viewport } = input;
  const overflow: Record<BalloonSide, number> = {
    top: -c.y,
    bottom: c.y + balloon.height - viewport.height,
    left: -c.x,
    right: c.x + balloon.width - viewport.width,
  };
  const length = isVertical(side) ? 'width' : 'height';
  let main: BalloonSide = isVertical(side) ? 'left' : 'top';
  if (anchor[length] > balloon[length]) main = OPPOSITE[main];
  return [overflow[side], overflow[main], overflow[OPPOSITE[main]]];
}

/** The arrow middleware (padding 0): the arrow centred on the anchor, clamped inside the balloon. */
function arrowFor(side: BalloonSide, c: { x: number; y: number }, input: BalloonPositionInput): ArrowPosition {
  const { anchor, balloon, balloonClient, arrowSize } = input;
  const vertical = isVertical(side);
  const length = vertical ? 'width' : 'height';
  const anchorStart = vertical ? anchor.left : anchor.top;
  const coord = vertical ? c.x : c.y;
  const endDiff = anchor[length] + anchorStart - coord - balloon[length];
  const startDiff = coord - anchorStart;
  const clientSize = balloonClient[length] || balloon[length];
  const largestPossiblePadding = clientSize / 2 - arrowSize / 2 - 1;
  const minPadding = Math.min(0, largestPossiblePadding);
  const max = clientSize - arrowSize - minPadding;
  const center = clientSize / 2 - arrowSize / 2 + (endDiff / 2 - startDiff / 2);
  const offset = Math.max(minPadding, Math.min(center, max));
  const staticSide = OPPOSITE[side];
  const crossValue = -arrowSize / 2;
  if (vertical) return staticSide === 'top' ? { left: offset, top: crossValue } : { left: offset, bottom: crossValue };
  return staticSide === 'left' ? { left: crossValue, top: offset } : { top: offset, right: crossValue };
}

/** The balloon position: the offset is sqrt(cssOffset × arrowSize²) / 2 (W1277383-1277450); the placement, then its
    opposite (flip fallbackPlacements); when neither fits, the first with no main-side overflow and the least overflow
    on the first alignment side, else the least total overflow (bestFit). */
export function computeBalloonPosition(input: BalloonPositionInput): BalloonPosition {
  const offset = Math.sqrt(input.cssOffset * input.arrowSize ** 2) / 2;
  const tried: { side: BalloonSide; overflows: number[] }[] = [];
  let side: BalloonSide | undefined;
  for (const candidate of [input.placement, OPPOSITE[input.placement]]) {
    const overflows = overflowsFor(candidate, coordsFor(candidate, input, offset), input);
    if (overflows.every((v) => v <= 0)) {
      side = candidate;
      break;
    }
    tried.push({ side: candidate, overflows });
  }
  if (side === undefined) {
    const positive = (o: number[]) => o.filter((v) => v > 0).reduce((sum, v) => sum + v, 0);
    const fits = tried.filter((t) => (t.overflows[0] ?? 0) <= 0);
    fits.sort((a, b) => (a.overflows[1] ?? 0) - (b.overflows[1] ?? 0));
    const bestFit = [...tried].sort((a, b) => positive(a.overflows) - positive(b.overflows));
    side = (fits[0] ?? bestFit[0])?.side ?? input.placement;
  }
  const c = coordsFor(side, input, offset);
  return { x: c.x + input.scroll.x, y: c.y + input.scroll.y, placement: side, arrow: arrowFor(side, c, input) };
}

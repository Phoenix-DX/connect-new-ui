/* Hand-written floating position of the Tooltip balloon (stack: no library). Port of what OSUI asks Floating UI for
   (runtime-sources/OutSystemsUI_2_23.OutSystemsUI.js FloatingUI.setFloatingPosition :22795-22858): placement from the
   Position (Tooltip._transformPosition :11790-11812), an offset of sqrt(--osui-floating-offset * arrowWidth²) / 2, the
   arrow centred on the anchor with its static side at -width/2. Not ported: flip, shift and autoUpdate. */

/** Tooltip._transformPosition: OSUI Position → floating placement. */
export function transformPosition(position: string): string {
  switch (position) {
    case 'bottom-left':
      return 'bottom-start';
    case 'top-left':
      return 'top-start';
    case 'bottom-right':
      return 'bottom-end';
    case 'top-right':
      return 'top-end';
    case 'center':
      return 'bottom';
    default:
      return position;
  }
}

export interface FloatingResult {
  x: number;
  y: number;
  placement: string;
  arrow: Record<string, string>;
}

const STATIC_SIDE: Record<string, string> = { top: 'bottom', right: 'left', bottom: 'top', left: 'right' };

/** computePosition for a fixed balloon: coordinates of the balloon's top-left corner and the arrow style. */
export function computeFloatingPosition(
  anchor: DOMRect,
  floating: { width: number; height: number },
  placement: string,
  offset: number,
  arrowSize: number,
): FloatingResult {
  const [side = 'right', align] = placement.split('-');
  let x: number;
  let y: number;
  if (side === 'top' || side === 'bottom') {
    y = side === 'top' ? anchor.top - floating.height - offset : anchor.bottom + offset;
    x =
      align === 'start'
        ? anchor.left
        : align === 'end'
          ? anchor.right - floating.width
          : anchor.left + anchor.width / 2 - floating.width / 2;
  } else {
    x = side === 'left' ? anchor.left - floating.width - offset : anchor.right + offset;
    y =
      align === 'start'
        ? anchor.top
        : align === 'end'
          ? anchor.bottom - floating.height
          : anchor.top + anchor.height / 2 - floating.height / 2;
  }
  const vertical = side === 'top' || side === 'bottom';
  const arrowAt = vertical
    ? anchor.left + anchor.width / 2 - x - arrowSize / 2
    : anchor.top + anchor.height / 2 - y - arrowSize / 2;
  const arrow: Record<string, string> = {
    left: vertical ? `${String(arrowAt)}px` : '',
    top: vertical ? '' : `${String(arrowAt)}px`,
    right: '',
    bottom: '',
    [STATIC_SIDE[side] ?? 'left']: `${String(-arrowSize / 2)}px`,
  };
  return { x, y, placement, arrow };
}

/* updatePosition of PopupMenu's AddEventHandlers JS node
   (UBTConnectLibrary.ConnectPatterns.PopupMenu.mvc.js:619-891, HomeFeed copy) as a pure function: where the popup goes
   next to its anchor for a Position value, kept inside the window. */

export interface Box {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface Size {
  width: number;
  height: number;
}

export interface Margins {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

interface Point {
  x: number;
  y: number;
}

/** The nine alignment points of a box: T/C/B (top, center, bottom) × L/C/R (left, center, right). */
function alignmentPoints(box: Box): Record<'TL' | 'TC' | 'TR' | 'CL' | 'CC' | 'CR' | 'BL' | 'BC' | 'BR', Point> {
  const { x, y, width: w, height: h } = box;
  return {
    TL: { x, y },
    TC: { x: x + w / 2, y },
    TR: { x: x + w, y },
    CL: { x, y: y + h / 2 },
    CC: { x: x + w / 2, y: y + h / 2 },
    CR: { x: x + w, y: y + h / 2 },
    BL: { x, y: y + h },
    BC: { x: x + w / 2, y: y + h },
    BR: { x: x + w, y: y + h },
  };
}

/** Top/left (px, fixed positioning) of the popup's margin box. */
export function popupPosition(
  position: string,
  anchorBox: Box,
  containerSize: Size,
  margins: Margins,
  windowSize: Size,
): { top: number; left: number } {
  const anchor = alignmentPoints(anchorBox);
  const popup = alignmentPoints({ x: 0, y: 0, ...containerSize });
  const align = (anchorPoint: Point, popupPoint: Point) => ({
    x: anchorPoint.x - popupPoint.x,
    y: anchorPoint.y - popupPoint.y,
  });
  let at: Point;
  if (position === 'top-left') at = align(anchor.TR, popup.BR);
  else if (position === 'top') at = align(anchor.TC, popup.BC);
  else if (position === 'top-right') at = align(anchor.TL, popup.BL);
  else if (position === 'left') at = align(anchor.CR, popup.CR);
  else if (position === 'center') at = align(anchor.CC, popup.CC);
  else if (position === 'right') at = align(anchor.CL, popup.CL);
  else if (position === 'bottom-left') at = align(anchor.BR, popup.TR);
  else if (position === 'bottom') at = align(anchor.BC, popup.TC);
  else at = align(anchor.BL, popup.TL);
  const marginBox = {
    x: at.x - margins.left,
    y: at.y - margins.top,
    width: containerSize.width + margins.left + margins.right,
    height: containerSize.height + margins.top + margins.bottom,
  };
  return {
    top: Math.min(Math.max(marginBox.y, 0), windowSize.height - marginBox.height),
    left: Math.min(Math.max(marginBox.x, 0), windowSize.width - marginBox.width),
  };
}

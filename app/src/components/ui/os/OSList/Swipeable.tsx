import { Component, type MouseEvent, type ReactNode, type TouchEvent } from 'react';

/* OutSystems platform ListItem widget (OSWidgets.ListItem), ported from OutSystemsReactWidgets.js: the touch tracking
   of the content. Line references `W:<n>`: see OSListItem.tsx. */

/* ---- Swipeable (W:1392-1488): touch tracking of the content element ---- */

interface SwipeableProps {
  className: string;
  /** Minimum movement before a swipe starts (ListItemSwipeable passes SwipeStartThreshold 15, W:1821). */
  delta: number;
  onClick: (event: MouseEvent<HTMLDivElement>) => void;
  onSwipingLeft: (event: TouchEvent<HTMLDivElement>, absX: number, startX: number) => void;
  onSwipingRight: (event: TouchEvent<HTMLDivElement>, absX: number, startX: number) => void;
  onSwiped: () => void;
  children?: ReactNode;
}
interface SwipeableState {
  x: number | null;
  y: number | null;
  swiping: boolean;
  start: number;
}
const SWIPEABLE_DEFAULT: SwipeableState = { x: null, y: null, swiping: false, start: 0 };

export class Swipeable extends Component<SwipeableProps, SwipeableState> {
  override state = SWIPEABLE_DEFAULT;

  /** calculatePos (W:1397-1403). */
  private calculatePos(e: TouchEvent) {
    const touch = e.changedTouches[0];
    const deltaX = (this.state.x ?? 0) - (touch?.clientX ?? 0);
    const deltaY = (this.state.y ?? 0) - (touch?.clientY ?? 0);
    return { deltaX, deltaY, absX: Math.abs(deltaX), absY: Math.abs(deltaY) };
  }

  /** touchStart (W:1404-1407): one finger only. */
  private touchStart = (e: TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0];
    if (e.touches.length > 1 || !touch) return;
    this.setState({ start: Date.now(), x: touch.clientX, y: touch.clientY, swiping: false });
  };

  /** touchMove (W:1408-1425): horizontal moves past `delta` raise onSwipingLeft / onSwipingRight (the ListItem has no
      vertical handlers), then `swiping`. */
  private touchMove = (e: TouchEvent<HTMLDivElement>) => {
    const { x, y } = this.state;
    if (!x || !y || e.touches.length > 1) return;
    let handled = false;
    const p = this.calculatePos(e);
    if (Math.abs(p.deltaX) > Math.abs(p.deltaY)) e.preventDefault();
    if (p.absX < this.props.delta && p.absY < this.props.delta) return;
    if (p.absX > p.absY) {
      if (p.deltaX > 0) {
        this.props.onSwipingLeft(e, p.absX, x);
        handled = true;
      } else {
        this.props.onSwipingRight(e, p.absX, x);
        handled = true;
      }
    }
    this.setState({ swiping: true });
    if (handled) e.preventDefault();
  };

  /** touchEnd (W:1426-1442): onSwiped when a swipe was going on, then back to the default state. */
  private touchEnd = () => {
    if (this.state.swiping) this.props.onSwiped();
    this.setState(SWIPEABLE_DEFAULT);
  };

  override render() {
    return (
      <div
        className={this.props.className}
        data-list-item-content=""
        data-not-scrollable=""
        onClick={this.props.onClick}
        onTouchStart={this.touchStart}
        onTouchMove={this.touchMove}
        onTouchEnd={this.touchEnd}
      >
        {this.props.children}
      </div>
    );
  }
}

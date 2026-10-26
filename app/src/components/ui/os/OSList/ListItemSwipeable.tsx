import {
  Component,
  createRef,
  type CSSProperties,
  type MouseEvent,
  type ReactNode,
  type RefObject,
  type TouchEvent,
} from 'react';
import { Swipeable } from './Swipeable';

/* OutSystems platform ListItem widget (OSWidgets.ListItem), ported from OutSystemsReactWidgets.js: the ListItem with
   action placeholders. Line references `W:<n>`: see OSListItem.tsx. */

/* ---- ListItemSwipeable (W:1541-1877) ---- */

/** SwipeActions.Actions / Directions (W:1508-1518). */
const Actions = { RightVisible: 0, RightAction: 1, LeftVisible: 2, LeftAction: 3 } as const;
type Action = (typeof Actions)[keyof typeof Actions];
const Directions = { Left: 0, Right: 1 } as const;
type Direction = (typeof Directions)[keyof typeof Directions];

/** Class names and thresholds (W:1858-1873). */
const TOUCH_START_EVENT = 'touchstart';
const BUTTON = 'button';
const CONTAINER = 'list-item-container';
const LEFT_ACTIONS = 'list-item-left-actions';
const RIGHT_ACTIONS = 'list-item-right-actions';
const FLOAT_RIGHT = 'list-item-float-right';
const FLOAT_LEFT = 'list-item-float-left';
const FULL_SWIPE = 'list-item-full-swipe';
const ANIMATING = 'list-item-animating';
const SHOW_RIGHT_BUTTONS = 'list-item-show-right-buttons';
const SHOW_LEFT_BUTTONS = 'list-item-show-left-buttons';
const SWIPE_START_THRESHOLD = 15;
const SWIPE_LEFT_EDGE_DEFAULT_THRESHOLD = 15;
const SWIPE_RIGHT_EDGE_DEFAULT_THRESHOLD = 15;
/** ListItem passes visibilityThreshold 35 and animationTimeout 400 (W:1919-1920). */
const VISIBILITY_THRESHOLD = 35;
const ANIMATION_TIMEOUT = 400;

interface ListItemSwipeableProps {
  id?: string;
  className: string;
  outerRef: RefObject<HTMLDivElement | null>;
  leftActions: ReactNode;
  rightActions: ReactNode;
  callActionWhenSwipingFarRight: boolean;
  callActionWhenSwipingFarLeft: boolean;
  containerClick: (event: MouseEvent) => void;
  children?: ReactNode;
}
interface ListItemSwipeableState {
  deltaPixels: number;
  showRightButtons: boolean;
  showLeftButtons: boolean;
  swipingLeft: boolean;
  swipingRight: boolean;
  animating: boolean;
  action: Action | null;
  lastContainerClass: string;
  shouldRenderActions: boolean;
  animatingFullSwipeRight: boolean;
  animatingFullSwipeLeft: boolean;
}

export class ListItemSwipeable extends Component<ListItemSwipeableProps, ListItemSwipeableState> {
  /** deviceWidth: static on the class (W:1695). */
  static deviceWidth = 0;
  private leftRef = createRef<HTMLDivElement>();
  private rightRef = createRef<HTMLDivElement>();
  private swipeRef = createRef<HTMLDivElement>();
  private propagateTouch = true;
  private actionsMaxWidth = 0;
  private leftActionsCount = 0;
  private rightActionsCount = 0;
  private contentWidth = 0;
  private lastContainerClass = '';
  private animationTimeoutHandle: ReturnType<typeof setTimeout> | undefined;
  private timeoutClickHandle: ReturnType<typeof setTimeout> | undefined;

  /** Initial state (W:1613-1627); shouldRenderActions false outside the web editor: the action containers are empty at
      rest (capture v5). */
  override state: ListItemSwipeableState = {
    deltaPixels: 0,
    showRightButtons: false,
    showLeftButtons: false,
    swipingLeft: false,
    swipingRight: false,
    animating: false,
    action: null,
    lastContainerClass: '',
    shouldRenderActions: false,
    animatingFullSwipeRight: false,
    animatingFullSwipeLeft: false,
  };

  /** touchWindowEventListener (W:1549-1551): the next touch anywhere hides the shown buttons. */
  private touchWindowEventListener = () => {
    this.unregisterTouchWindowEventListener();
    this.animate();
  };
  /** handleTouch (W:1552-1554). */
  private handleTouch = (e: TouchEvent) => {
    if (!this.propagateTouch) e.stopPropagation();
  };
  private registerTouchWindowEventListener() {
    this.propagateTouch = false;
    window.addEventListener(TOUCH_START_EVENT, this.touchWindowEventListener);
  }
  private unregisterTouchWindowEventListener() {
    this.propagateTouch = true;
    window.removeEventListener(TOUCH_START_EVENT, this.touchWindowEventListener);
  }
  private onSwipingLeft = (e: TouchEvent, absX: number, startX: number) => {
    this.handleSwiping(false, e, absX, startX);
  };
  private onSwipingRight = (e: TouchEvent, absX: number, startX: number) => {
    this.handleSwiping(true, e, absX, startX);
  };

  /** onSwiped (W:1567-1606): a visible state keeps the buttons shown until the next touch; a full swipe clicks the
      first left action / the last right action after the animation. */
  private onSwiped = () => {
    let showRight = false;
    let showLeft = false;
    this.setState({ showRightButtons: false, showLeftButtons: false });
    switch (this.state.action) {
      case Actions.RightVisible:
        this.registerTouchWindowEventListener();
        showRight = true;
        break;
      case Actions.LeftVisible:
        this.registerTouchWindowEventListener();
        showLeft = true;
        break;
      case Actions.LeftAction: {
        const first = this.leftRef.current?.children[0];
        if (first instanceof HTMLElement)
          this.timeoutClickHandle = setTimeout(() => {
            first.click();
          }, ANIMATION_TIMEOUT);
        break;
      }
      case Actions.RightAction: {
        const children = this.rightRef.current?.children;
        if (children && children.length > 0) {
          const last = children[children.length - 1];
          if (last instanceof HTMLElement)
            this.timeoutClickHandle = setTimeout(() => {
              last.click();
            }, ANIMATION_TIMEOUT);
        }
      }
    }
    this.setState({
      deltaPixels: 0,
      action: null,
      showRightButtons: showRight,
      showLeftButtons: showLeft,
      swipingLeft: false,
      swipingRight: false,
      animating: true,
      animatingFullSwipeRight: this.state.action === Actions.LeftAction,
      animatingFullSwipeLeft: this.state.action === Actions.RightAction,
    });
    this.startAnimationTimeout();
  };

  /** handleActionContainerClick (W:1607-1609). */
  private handleActionContainerClick = (e: MouseEvent) => {
    this.animate();
    e.stopPropagation();
  };
  /** handleContentClick (W:1610-1612): OnClick only at rest. */
  private handleContentClick = (e: MouseEvent) => {
    if (this.state.showRightButtons || this.state.showLeftButtons || this.state.animating) return;
    this.props.containerClick(e);
  };

  /** startAnimationTimeout (W:1638-1650). */
  private startAnimationTimeout() {
    this.clearAnimationTimeout();
    this.animationTimeoutHandle = setTimeout(() => {
      this.setState((s) => ({
        animating: false,
        action: null,
        animatingFullSwipeRight: false,
        animatingFullSwipeLeft: false,
        shouldRenderActions: s.showLeftButtons || s.showRightButtons,
      }));
    }, ANIMATION_TIMEOUT);
  }
  private clearAnimationTimeout() {
    if (this.animationTimeoutHandle) clearTimeout(this.animationTimeoutHandle);
  }
  private clearClickTimeout() {
    if (this.timeoutClickHandle) clearTimeout(this.timeoutClickHandle);
  }

  /** componentDidUpdate (W:1676-1679). */
  override componentDidUpdate() {
    if (this.state.lastContainerClass !== this.lastContainerClass)
      this.setState({ lastContainerClass: this.lastContainerClass });
  }
  /** componentWillUnmount (W:1680-1682). */
  override componentWillUnmount() {
    this.clearAnimationTimeout();
    this.clearClickTimeout();
    this.unregisterTouchWindowEventListener();
  }

  /** updateElementCachedInfo (W:1683-1696): the max-width of an action (original CSS), the action counts, the content
      width and the device width. */
  private updateElementCachedInfo() {
    const root = this.swipeRef.current;
    if (!root) return;
    if (!this.actionsMaxWidth) {
      const action = root.querySelector('[data-list-item-action]');
      if (action) this.actionsMaxWidth = parseInt(window.getComputedStyle(action).getPropertyValue('max-width'), 10);
    }
    this.leftActionsCount = root.getElementsByClassName(LEFT_ACTIONS)[0]?.getElementsByTagName(BUTTON).length ?? 0;
    this.rightActionsCount = root.getElementsByClassName(RIGHT_ACTIONS)[0]?.getElementsByTagName(BUTTON).length ?? 0;
    this.contentWidth = root.querySelector('[data-list-item-content]')?.clientWidth ?? 0;
    ListItemSwipeable.deviceWidth = window.innerWidth || document.documentElement.clientWidth;
  }

  /** showFullSwipe (W:1697-1704). */
  private showFullSwipe() {
    return (
      this.state.action === Actions.LeftAction ||
      this.state.action === Actions.RightAction ||
      this.state.animatingFullSwipeLeft ||
      this.state.animatingFullSwipeRight
    );
  }

  /** getSwipeThresholdToTriggerAction (W:1711-1717). The edge thresholds are the defaults (W:1705-1710): the extended
      properties list-item-swipe-*-edge-threshold (W:1668-1675) are not ported. */
  private getSwipeThresholdToTriggerAction(direction: Direction) {
    if (this.state.showLeftButtons || this.state.showRightButtons) return 0.75 * this.actionsMaxWidth;
    return direction === Directions.Right
      ? this.actionsMaxWidth * (Math.min(2, this.leftActionsCount) + 0.75)
      : this.actionsMaxWidth * (Math.min(2, this.rightActionsCount) + 0.75);
  }

  /** handleSwiping (W:1718-1730). */
  private handleSwiping(isRight: boolean, _e: TouchEvent, absX: number, startX: number) {
    this.updateElementCachedInfo();
    this.setState({ shouldRenderActions: true });
    const direction = isRight ? Directions.Right : Directions.Left;
    if (this.swipingHandleStylesAndDelta(direction, startX)) return;
    let action: Action | null = null;
    if (absX > VISIBILITY_THRESHOLD) action = isRight ? Actions.LeftVisible : Actions.RightVisible;
    if (
      (isRight ? this.props.callActionWhenSwipingFarRight : this.props.callActionWhenSwipingFarLeft) &&
      absX > this.getSwipeThresholdToTriggerAction(direction)
    )
      action = isRight ? Actions.LeftAction : Actions.RightAction;
    const moved = absX - SWIPE_START_THRESHOLD;
    this.setState({ deltaPixels: isRight ? moved : -moved, action, swipingLeft: !isRight, swipingRight: isRight });
  }

  /** getActionsPlaceholderStyle (W:1731-1752): width of the left (isRight false) or right action container. */
  private getActionsPlaceholderStyle(isRight: boolean): CSSProperties | undefined {
    const isLeft = !isRight;
    const count = isLeft ? this.leftActionsCount : this.rightActionsCount;
    const swipingToward = (isLeft && this.state.swipingRight) || (isRight && this.state.swipingLeft);
    const shown = (isLeft && this.state.showLeftButtons) || (isRight && this.state.showRightButtons);
    const fullSwipe = (isLeft && this.state.animatingFullSwipeRight) || (isRight && this.state.animatingFullSwipeLeft);
    if (swipingToward) {
      const extra = shown && !this.state.animating ? count * this.actionsMaxWidth : 0;
      return { width: `${String(Math.abs(this.state.deltaPixels) + extra)}px` };
    }
    if (shown) return { width: `${String(count * this.actionsMaxWidth)}px` };
    if (fullSwipe) return { width: `${String(this.contentWidth)}px` };
    return undefined;
  }

  /** swipingHandleStylesAndDelta (W:1753-1755). */
  private swipingHandleStylesAndDelta(direction: Direction, startX: number) {
    if (this.shouldAbort(direction, startX)) return true;
    this.tryAnimate(direction);
    return false;
  }

  /** shouldAbort (W:1756-1768): swipes starting at the screen edges, while animating, or without actions that way. */
  private shouldAbort(direction: Direction, startX: number) {
    if (direction === Directions.Right) {
      if (startX < SWIPE_RIGHT_EDGE_DEFAULT_THRESHOLD) return true;
    } else if (startX > ListItemSwipeable.deviceWidth - SWIPE_LEFT_EDGE_DEFAULT_THRESHOLD) return true;
    if (this.state.animating) return true;
    return direction === Directions.Right
      ? (!this.leftActionsCount && !this.state.showRightButtons) ||
          (this.state.showLeftButtons && !this.props.callActionWhenSwipingFarRight)
      : (!this.rightActionsCount && !this.state.showLeftButtons) ||
          (this.state.showRightButtons && !this.props.callActionWhenSwipingFarLeft);
  }

  /** tryAnimate (W:1769-1773). */
  private tryAnimate(direction: Direction) {
    if (
      (direction === Directions.Right && this.state.showRightButtons) ||
      (direction === Directions.Left && this.state.showLeftButtons)
    )
      this.animate();
  }

  /** animate (W:1774-1776). */
  private animate() {
    this.setState({ showLeftButtons: false, showRightButtons: false, animating: true });
    this.startAnimationTimeout();
  }

  /** getContainerClass (W:1777-1786). */
  private getContainerClass() {
    if (this.state.animating) return this.state.lastContainerClass;
    if (this.state.showRightButtons) return FLOAT_RIGHT;
    if (this.state.showLeftButtons) return FLOAT_LEFT;
    return this.state.deltaPixels < 0 ? FLOAT_RIGHT : FLOAT_LEFT;
  }

  /** render (W:1808-1857). */
  override render() {
    this.lastContainerClass = this.getContainerClass();
    let containerClass = CONTAINER + (this.showFullSwipe() ? ` ${FULL_SWIPE}` : '');
    if (this.state.animating) containerClass += ` ${ANIMATING}`;
    if (this.state.showRightButtons) containerClass += ` ${SHOW_RIGHT_BUTTONS}`;
    if (this.state.showLeftButtons) containerClass += ` ${SHOW_LEFT_BUTTONS}`;
    return (
      <div data-list-item="" data-not-scrollable="" id={this.props.id} ref={this.props.outerRef}>
        <div
          className={`${containerClass} ${this.lastContainerClass}`}
          ref={this.swipeRef}
          onTouchStart={this.handleTouch}
        >
          <div
            className={LEFT_ACTIONS}
            style={this.getActionsPlaceholderStyle(false)}
            onClick={this.handleActionContainerClick}
            ref={this.leftRef}
          >
            {this.state.shouldRenderActions ? this.props.leftActions : null}
          </div>
          <Swipeable
            className={this.props.className}
            delta={SWIPE_START_THRESHOLD}
            onClick={this.handleContentClick}
            onSwipingLeft={this.onSwipingLeft}
            onSwipingRight={this.onSwipingRight}
            onSwiped={this.onSwiped}
          >
            {this.props.children}
          </Swipeable>
          <div
            className={RIGHT_ACTIONS}
            style={this.getActionsPlaceholderStyle(true)}
            onClick={this.handleActionContainerClick}
            ref={this.rightRef}
          >
            {this.state.shouldRenderActions ? this.props.rightActions : null}
          </div>
        </div>
      </div>
    );
  }
}

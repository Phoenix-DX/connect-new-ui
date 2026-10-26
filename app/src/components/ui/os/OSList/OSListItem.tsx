import { useRef, type MouseEvent, type ReactNode } from 'react';
import { ListItemSwipeable } from './ListItemSwipeable';

/* OutSystems platform ListItem and ListItemAction widgets (OSWidgets.ListItem / OSWidgets.ListItemAction), ported from
   OutSystemsReactWidgets.js. Line references `W:<n>` point to the readable copy
   migration/screens/MessageList/analysis/sources/pretty/OutSystemsReactWidgets.js (prettier of
   migration/runtime-sources/OutSystemsReactWidgets.js). The swipe: ListItemSwipeable.tsx and Swipeable.tsx. */

type Handler = () => unknown;

/** Widget.executeWithActiveClassOn (OutSystemsReactView.js): class "active" on the widget's node while the handler
    runs, removed when it returns or, for a Promise, when that settles. */
function executeWithActiveClassOn(node: HTMLElement | null, handler: Handler): void {
  node?.classList.add('active');
  let result: unknown;
  try {
    result = handler();
  } finally {
    const remove = () => {
      node?.classList.remove('active');
    };
    if (result instanceof Promise) result.then(remove).catch(remove);
    else remove();
  }
}

/* ---- ListItem (W:1878-1940) ---- */

export interface OSListItemProps {
  /** Widget name as id (`<prefix>-l1-36_<n>-Messages_List_Item`). */
  id?: string;
  /** Style Classes, or the extended property `className` that replaces them (MessageListBlock.mvc.js:264-266, 285). */
  className: string;
  /** OnClick. May return a Promise: the item keeps the class "active" until it settles (W:1882-1888). */
  onClick?: Handler;
  /** Placeholder LeftActions (ListItemAction widgets). Leave both action placeholders undefined for a ListItem without
      actions (the compiled placeholder is `PlaceholderContent.Empty`): it renders ListItemBasic (W:1900-1914). */
  leftActions?: ReactNode;
  /** Placeholder RightActions. */
  rightActions?: ReactNode;
  /** Trigger Action On Full Swipe Left: a full swipe to the left clicks the last right action. */
  triggerActionOnFullSwipeLeft?: boolean;
  /** Trigger Action On Full Swipe Right: a full swipe to the right clicks the first left action. */
  triggerActionOnFullSwipeRight?: boolean;
  /** Placeholder Content. */
  children?: ReactNode;
}

/** OutSystems ListItem. Without actions: ListItemBasic (W:1519-1540), one `<div data-list-item class>` with the
    OnClick. With actions: ListItemSwipeable (W:1541-1877), the double-width container with the action containers
    around the content (`data-list-item-content`, OnClick there); the actions render once a swipe starts. */
export function OSListItem({
  id,
  className,
  onClick,
  leftActions,
  rightActions,
  triggerActionOnFullSwipeLeft = false,
  triggerActionOnFullSwipeRight = false,
  children,
}: OSListItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  // ListItem.handleClick (W:1882-1888).
  const handleClick = (e: MouseEvent) => {
    if (!onClick) return;
    e.stopPropagation();
    executeWithActiveClassOn(ref.current, onClick);
  };
  if (leftActions === undefined && rightActions === undefined)
    return (
      <div data-list-item="" data-not-scrollable="" id={id} className={className} onClick={handleClick} ref={ref}>
        {children}
      </div>
    );
  return (
    <ListItemSwipeable
      id={id}
      className={className}
      outerRef={ref}
      leftActions={leftActions}
      rightActions={rightActions}
      callActionWhenSwipingFarRight={triggerActionOnFullSwipeRight}
      callActionWhenSwipingFarLeft={triggerActionOnFullSwipeLeft}
      containerClick={handleClick}
    >
      {children}
    </ListItemSwipeable>
  );
}

/* ---- ListItemAction (W:1944-1984) ---- */

export interface OSListItemActionProps {
  /** Style Classes (MessageListBlock: "list-item-action"). */
  className: string;
  onClick: Handler;
  /** Visible: false renders nothing (Widget.internalRender, OutSystemsReactView.js). */
  visible?: boolean;
  /** Extended properties; `disable-spam-protection` is read as compiled (W:1975-1979). */
  extendedProperties?: Readonly<Record<string, string>>;
  children?: ReactNode;
}

/** OutSystems ListItemAction: `<button data-list-item-action class>`. A second click is ignored unless the spam
    protection is disabled (W:1956-1963, 1975-1979: true when extended properties exist and
    `disable-spam-protection` is not "true", as compiled). */
export function OSListItemAction({
  className,
  onClick,
  visible = true,
  extendedProperties,
  children,
}: OSListItemActionProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const alreadyTriggered = useRef(false);
  const disableSpamProtect =
    !!extendedProperties && String(extendedProperties['disable-spam-protection']).toLowerCase() !== 'true';
  if (!visible) return null;
  const handleClick = () => {
    if (alreadyTriggered.current && !disableSpamProtect) return;
    executeWithActiveClassOn(ref.current, onClick);
    alreadyTriggered.current = true;
  };
  return (
    <button data-list-item-action="" className={className} onClick={handleClick} ref={ref}>
      {children}
    </button>
  );
}

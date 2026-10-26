import Sortable, { type MoveEvent, type SortableEvent } from 'sortablejs';

/* ---- SortableJS.SetupList (SortableJS.controller.js:94-492, JavaScript node), web port ----
   The SortableList block runs it on its ListPlaceholder when it is ready. Expando properties of the original
   (placeholder._dropMarker / _pendingMove / _dragStart, list._sortableInstance) are kept in WeakMaps. */

export type DragEndHandler = (fromId: string, toId: string, oldIndex: number, newIndex: number, itemId: string) => void;

interface PendingMove {
  fromId: string;
  toId: string;
  oldIndex: number;
  newIndex: number;
  itemId: string;
}
interface DragStart {
  fromId: string;
  fromElement: HTMLElement;
  oldIndex: number;
  itemId: string;
  originalRect: { left: number; right: number; top: number; bottom: number };
}
interface PlaceholderState {
  dropMarker: HTMLElement | null;
  pendingMove: PendingMove | null;
  dragStart: DragStart | null;
}

const placeholderStates = new WeakMap<HTMLElement, PlaceholderState>();
const sortableInstances = new WeakMap<HTMLElement, Sortable>();

export function setupList(
  placeholderId: string,
  handler: DragEndHandler,
  groupName: string,
  denyList: string[],
  preventDomMove: boolean,
): void {
  const placeholder = document.getElementById(placeholderId);
  if (!placeholder) return;
  let state = placeholderStates.get(placeholder);
  if (!state) {
    state = { dropMarker: null, pendingMove: null, dragStart: null };
    placeholderStates.set(placeholder, state);
  }
  const st = state;
  const group = groupName || 'default';
  const deny = denyList.map((id) => id.trim()).filter(Boolean);
  const lists = Array.from(placeholder.getElementsByClassName('list')) as HTMLElement[];

  const normalizeIds = (value: string | null) =>
    value
      ? value
          .split(',')
          .map((id) => id.trim())
          .filter(Boolean)
      : [];

  const applyDenyList = () => {
    lists.forEach((list, index) => {
      if (!list.id) list.id = `${placeholderId}-sortable-list-${String(index)}`;
      list.setAttribute('data-deny-from', deny.join(','));
    });
  };

  const isDeniedMove = (evt: MoveEvent) =>
    normalizeIds(evt.to.getAttribute('data-deny-from')).indexOf(evt.from.id) !== -1;

  const getItemId = (item: HTMLElement | null) =>
    item?.querySelector('.drag-handle')?.getAttribute('sortable-item-id') ?? '';

  const removeDropMarker = () => {
    st.dropMarker?.parentNode?.removeChild(st.dropMarker);
    st.dropMarker = null;
  };

  const getDropMarker = () => {
    if (!st.dropMarker) {
      const marker = document.createElement('div');
      marker.className = 'sortable-insert-marker';
      marker.setAttribute('data-sortable-marker', 'true');
      st.dropMarker = marker;
    }
    return st.dropMarker;
  };

  const getListChildrenForIndex = (list: HTMLElement, dragged: HTMLElement | null) =>
    Array.from(list.children).filter(
      (child) => child.getAttribute('data-sortable-marker') !== 'true' && !(dragged && child === dragged),
    );

  const getTargetIndex = (evt: MoveEvent) => {
    const children = getListChildrenForIndex(evt.to, evt.dragged);
    // evt.related is typed as always set; the original also handles a missing one
    const related = evt.related as HTMLElement | null;
    if (!related || related.getAttribute('data-sortable-marker') === 'true') return children.length;
    const relatedIndex = children.indexOf(related);
    if (relatedIndex < 0) return children.length;
    return evt.willInsertAfter ? relatedIndex + 1 : relatedIndex;
  };

  const showDropMarker = (evt: MoveEvent) => {
    const marker = getDropMarker();
    const targetIndex = getTargetIndex(evt);
    const children = getListChildrenForIndex(evt.to, evt.dragged);
    removeDropMarker();
    evt.to.insertBefore(marker, children[targetIndex] ?? null); // null: append (index past the end)
    st.dropMarker = marker;
  };

  const clearFeedback = (removeMarker: boolean) => {
    lists.forEach((list) => {
      list.classList.remove('sortable-drop-denied-target');
      list.classList.remove('sortable-drop-target');
    });
    Array.from(placeholder.getElementsByClassName('sortable-drop-denied')).forEach((item) => {
      item.classList.remove('sortable-drop-denied');
    });
    if (removeMarker) removeDropMarker();
  };

  const getDragVisualElement = (evt: MoveEvent): Element | null =>
    document.querySelector('.sortable-fallback') ?? document.querySelector('.drag-ghost') ?? evt.dragged;

  const isGhostBackAtOriginalPosition = (evt: MoveEvent) => {
    const dragStart = st.dragStart;
    if (!dragStart || evt.to !== dragStart.fromElement) return false;
    const visual = getDragVisualElement(evt);
    if (!visual) return false;
    const r = visual.getBoundingClientRect();
    const x = r.left + r.width / 2;
    const y = r.top + r.height / 2;
    const o = dragStart.originalRect;
    return x >= o.left && x <= o.right && y >= o.top && y <= o.bottom;
  };

  applyDenyList();

  lists.forEach((list) => {
    const options: Sortable.Options = {
      group,
      animation: 150,
      handle: '.drag-handle',
      ghostClass: 'drag-ghost',
      filter: '.sortable-insert-marker',
      onStart: (evt: SortableEvent) => {
        st.pendingMove = null;
        removeDropMarker();
        const rect = evt.item.getBoundingClientRect();
        st.dragStart = {
          fromId: evt.from.id,
          fromElement: evt.from,
          oldIndex: evt.oldIndex ?? -1,
          itemId: getItemId(evt.item),
          originalRect: { left: rect.left, right: rect.right, top: rect.top, bottom: rect.bottom },
        };
      },
      onMove: (evt: MoveEvent) => {
        const denied = isDeniedMove(evt);
        clearFeedback(false);
        evt.dragged.classList.toggle('sortable-drop-denied', denied);
        if (denied) {
          evt.to.classList.add('sortable-drop-denied-target');
          st.pendingMove = null;
          removeDropMarker();
          return false;
        }
        if (preventDomMove) {
          if (isGhostBackAtOriginalPosition(evt)) {
            st.pendingMove = null;
            removeDropMarker();
            evt.to.classList.remove('sortable-drop-target');
            return false;
          }
          const dragStart = st.dragStart;
          st.pendingMove = {
            fromId: dragStart?.fromId || evt.from.id,
            toId: evt.to.id,
            oldIndex: dragStart?.oldIndex ?? -1,
            newIndex: getTargetIndex(evt),
            itemId: dragStart?.itemId || getItemId(evt.dragged),
          };
          evt.to.classList.add('sortable-drop-target');
          showDropMarker(evt);
          return false;
        }
        st.pendingMove = null;
        return true;
      },
      onEnd: (evt: SortableEvent) => {
        const pendingMove = st.pendingMove;
        clearFeedback(true);
        st.pendingMove = null;
        st.dragStart = null;
        if (pendingMove) {
          handler(pendingMove.fromId, pendingMove.toId, pendingMove.oldIndex, pendingMove.newIndex, pendingMove.itemId);
          return;
        }
        if (evt.from === evt.to && evt.oldIndex === evt.newIndex) return;
        handler(evt.from.id, evt.to.id, evt.oldIndex ?? -1, evt.newIndex ?? -1, getItemId(evt.item));
      },
    };
    const existing = sortableInstances.get(list);
    if (existing) {
      existing.option('group', options.group);
      existing.option('animation', options.animation);
      existing.option('handle', options.handle);
      existing.option('ghostClass', options.ghostClass);
      existing.option('filter', options.filter);
      existing.option('onStart', options.onStart);
      existing.option('onMove', options.onMove);
      existing.option('onEnd', options.onEnd);
      return;
    }
    sortableInstances.set(list, new Sortable(list, options));
  });
}

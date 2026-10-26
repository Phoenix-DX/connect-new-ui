import { useEffect, useRef, type ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { setupList, type DragEndHandler } from './setupList';

export interface SortableListProps {
  /** OutSystems instance id of the block (e.g. `$b3`). */
  id: string;
  group?: string;
  /** DenyLists: ids of the lists whose items may not be dropped in this block's lists. */
  denyLists?: string[];
  preventDomMove?: boolean;
  /** Event OnDragEnd(FromId, ToId, OldIndex, NewIndex, ItemId). */
  onDragEnd?: DragEndHandler;
  /** Placeholder ListPlaceholder. */
  children?: ReactNode;
}

/** SortableJS Sortable.SortableList (SortableList.mvc.js view :160-176): a ListPlaceholder container; OnReady runs
    SetupList on it (controller :320-345, GetObj JS node passes the Handler that raises OnDragEnd).
    @origin SortableJS.Sortable.SortableList */
export function SortableList({
  id,
  group = '',
  denyLists = [],
  preventDomMove = false,
  onDragEnd,
  children,
}: SortableListProps) {
  const placeholderId = `${id.replace('$', '')}-ListPlaceholder`;
  const onDragEndRef = useRef(onDragEnd);
  useEffect(() => {
    onDragEndRef.current = onDragEnd;
  });
  useEffect(() => {
    setupList(
      placeholderId,
      (fromId, toId, oldIndex, newIndex, itemId) => {
        onDragEndRef.current?.(fromId, toId, oldIndex, newIndex, itemId);
      },
      group,
      denyLists,
      preventDomMove,
    );
    // OnReady only (OutSystems runs it once)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <OSBlock name="Sortable.SortableList" id={id}>
      <div id={placeholderId}>{children}</div>
    </OSBlock>
  );
}

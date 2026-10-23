import { useEffect, type ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';

export interface SortableList_DraggableProps {
  /** OutSystems instance id of the block (e.g. `l1-38_0-$b8`). */
  id: string;
  /** Id: the item id raised by OnDragEnd. */
  itemId: string;
  useCustomDragHandle?: boolean;
  /** Placeholder Item. */
  children?: ReactNode;
}

/** SortableJS Sortable.SortableList_Draggable (SortableList_Draggable.mvc.js view :150-170): the Item placeholder with
    `sortable-item-id` and class `drag-handle` unless a custom handle is used; OnReady with UseCustomDragHandle sets
    `sortable-item-id` on the inner `.drag-handle` (SetItemIdOnCustomDragHandle JS node, controller :195-215).
    @origin SortableJS.Sortable.SortableList_Draggable */
export function SortableList_Draggable({
  id,
  itemId,
  useCustomDragHandle = false,
  children,
}: SortableList_DraggableProps) {
  const itemWidgetId = `${id.replace('$', '')}-Item`;
  useEffect(() => {
    if (useCustomDragHandle) {
      document.getElementById(itemWidgetId)?.querySelector('.drag-handle')?.setAttribute('sortable-item-id', itemId);
    }
    // OnReady only (OutSystems runs it once)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <OSBlock name="Sortable.SortableList_Draggable" id={id}>
      <div className={useCustomDragHandle ? '' : 'drag-handle'} id={itemWidgetId} sortable-item-id={itemId}>
        {children}
      </div>
    </OSBlock>
  );
}

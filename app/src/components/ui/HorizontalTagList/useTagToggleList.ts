import { useRef, useState } from 'react';

/** The fields of a TagRec that the toggle reads and writes. */
export interface ToggleTag {
  Identifier?: string;
  IsSelected?: boolean;
}

interface TagToggleListOptions<T> {
  /** Input IsSingleSelection. */
  isSingleSelection: boolean;
  /** Input IsMandatorySelection. */
  isMandatorySelection: boolean;
  /** Event Changed: the list after a toggle. */
  onChanged?: (tagToggleList: T[]) => void;
}

/** The tag list of HorizontalTagList and Horizontal_Filter_TagList: the block's own copy of In_TagToggleList (a new
    input replaces it) and TagToggleToggle (HorizontalTagList.mvc.js :322-430). In_TagToggleList.Current in the event
    handler is the clicked row. Single selection ignores a click on the current index and clears the other tags;
    mandatory selection keeps the last selected tag. An omitted IsSelected is True (TagRec defaults,
    UBTConnectLibrary.model.js :1269-1274). */
export function useTagToggleList<T extends ToggleTag>(
  inTagToggleList: T[],
  { isSingleSelection, isMandatorySelection, onChanged }: TagToggleListOptions<T>,
) {
  const [input, setInput] = useState(inTagToggleList);
  const [list, setList] = useState(inTagToggleList);
  if (input !== inTagToggleList) {
    setInput(inTagToggleList);
    setList(inTagToggleList);
  }
  const currentListIndex = useRef(0);
  const selectedTagId = useRef('');
  const toggle = (isSelected: boolean, listIndex: number, isTagEnabled: boolean) => {
    if (isSingleSelection && listIndex === currentListIndex.current) return;
    currentListIndex.current = listIndex;
    if (!isTagEnabled) return;
    if (isSelected && isMandatorySelection && !(list.filter((t) => t.IsSelected ?? true).length > 1)) return;
    const next = list.map((t, i) => (i === listIndex ? { ...t, IsSelected: !isSelected } : t));
    selectedTagId.current = next[listIndex]?.Identifier ?? '';
    const result =
      isSingleSelection && (next[listIndex]?.IsSelected ?? true)
        ? next.map((t) => ((t.Identifier ?? '') !== selectedTagId.current ? { ...t, IsSelected: false } : t))
        : next;
    setList(result);
    onChanged?.(result);
  };
  return { list, toggle };
}

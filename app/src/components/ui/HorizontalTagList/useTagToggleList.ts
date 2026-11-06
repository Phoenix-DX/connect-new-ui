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
  /** The other inputs of the block. When set, a change of the list or of any input runs OnParametersChanged of the
      live HorizontalTagList (UBTConnectLibrary.ConnectPatterns.HorizontalTagList.mvc.js:445-490, 2026-11-05): with
      single selection, CurrentListIndex = ListIndexOf(In_TagToggleList, IsSelected).Position. Left out (the
      October flow, Horizontal_Filter_TagList), a new input does not change CurrentListIndex. */
  parameters?: readonly unknown[];
}

const NO_PARAMETERS: readonly unknown[] = [];

function sameParameters(a: readonly unknown[], b: readonly unknown[]) {
  return a.length === b.length && a.every((value, i) => Object.is(value, b[i]));
}

/** The tag list of HorizontalTagList and Horizontal_Filter_TagList: the block's own copy of In_TagToggleList (a new
    input replaces it) and TagToggleToggle (HorizontalTagList.mvc.js :322-430). In_TagToggleList.Current in the event
    handler is the clicked row. Single selection ignores a click on the current index and clears the other tags;
    mandatory selection keeps the last selected tag. An omitted IsSelected is True (TagRec defaults,
    UBTConnectLibrary.model.js :1269-1274). */
export function useTagToggleList<T extends ToggleTag>(
  inTagToggleList: T[],
  { isSingleSelection, isMandatorySelection, onChanged, parameters }: TagToggleListOptions<T>,
) {
  const blockInputs =
    parameters === undefined ? NO_PARAMETERS : [isSingleSelection, isMandatorySelection, ...parameters];
  const [input, setInput] = useState(inTagToggleList);
  const [list, setList] = useState(inTagToggleList);
  const [otherInputs, setOtherInputs] = useState(blockInputs);
  /* CurrentListIndex: default 0 (HorizontalTagList.mvc.js:18-20). */
  const [currentListIndex, setCurrentListIndex] = useState(0);
  const listChanged = input !== inTagToggleList;
  if (listChanged || !sameParameters(otherInputs, blockInputs)) {
    const current = listChanged ? inTagToggleList : list;
    setInput(inTagToggleList);
    setList(current);
    setOtherInputs(blockInputs);
    /* OnParametersChanged (:445-490): only the live HorizontalTagList declares it; ListIndexOf gives -1 when no tag
       is selected; an omitted IsSelected is True. */
    if (parameters !== undefined && isSingleSelection) {
      setCurrentListIndex(current.findIndex((t) => t.IsSelected ?? true));
    }
  }
  const selectedTagId = useRef('');
  const toggle = (isSelected: boolean, listIndex: number, isTagEnabled: boolean) => {
    if (isSingleSelection && listIndex === currentListIndex) return;
    setCurrentListIndex(listIndex);
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

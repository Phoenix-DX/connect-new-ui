import { act, renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { useTagToggleList, type ToggleTag } from './useTagToggleList';

const tags = (...selected: (boolean | undefined)[]): ToggleTag[] =>
  selected.map((IsSelected, i) => ({ Identifier: `t${String(i)}`, IsSelected }));

function setup(list: ToggleTag[], single = false, mandatory = false) {
  const onChanged = vi.fn();
  const view = renderHook(
    ({ input }) => useTagToggleList(input, { isSingleSelection: single, isMandatorySelection: mandatory, onChanged }),
    { initialProps: { input: list } },
  );
  return { ...view, onChanged };
}

describe('useTagToggleList (TagToggleToggle of the tag lists)', () => {
  it('toggles the clicked tag and raises Changed with the new list', () => {
    const { result, onChanged } = setup(tags(false, false));
    act(() => {
      result.current.toggle(false, 1, true);
    });
    expect(result.current.list.map((t) => t.IsSelected)).toEqual([false, true]);
    expect(onChanged).toHaveBeenCalledWith(result.current.list);
  });

  it('keeps its own copy and replaces it when the input changes', () => {
    const first = tags(false, false);
    const { result, rerender } = setup(first);
    act(() => {
      result.current.toggle(false, 1, true);
    });
    rerender({ input: first });
    expect(result.current.list[1]?.IsSelected).toBe(true);
    const second = tags(true);
    rerender({ input: second });
    expect(result.current.list).toBe(second);
  });

  it('single selection: selects one tag, clears the others, ignores a click on the current index', () => {
    const { result, onChanged } = setup(tags(true, false, true), true);
    act(() => {
      result.current.toggle(true, 0, true);
    });
    expect(onChanged).not.toHaveBeenCalled();
    act(() => {
      result.current.toggle(false, 1, true);
    });
    expect(result.current.list.map((t) => t.IsSelected)).toEqual([false, true, false]);
    act(() => {
      result.current.toggle(true, 1, true);
    });
    expect(onChanged).toHaveBeenCalledTimes(1);
  });

  it('a disabled tag does not change but becomes the current index', () => {
    const { result, onChanged } = setup(tags(false, false), true);
    act(() => {
      result.current.toggle(false, 1, false);
    });
    act(() => {
      result.current.toggle(false, 1, true);
    });
    expect(onChanged).not.toHaveBeenCalled();
    expect(result.current.list.map((t) => t.IsSelected)).toEqual([false, false]);
  });

  it('mandatory selection keeps the last selected tag (an omitted IsSelected is True)', () => {
    const { result, onChanged } = setup(tags(undefined, false), false, true);
    act(() => {
      result.current.toggle(true, 0, true);
    });
    expect(onChanged).not.toHaveBeenCalled();
    act(() => {
      result.current.toggle(false, 1, true);
    });
    act(() => {
      result.current.toggle(true, 0, true);
    });
    expect(result.current.list.map((t) => t.IsSelected)).toEqual([false, true]);
    expect(onChanged).toHaveBeenCalledTimes(2);
  });
});

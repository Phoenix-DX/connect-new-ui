import { act, renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { useCardNotes, withoutNote } from './useCardNotes';

const card = (ids: string[]) => ({
  itemId: '42',
  title: 'Fenwick Household',
  notes: { Total: ids.length, Note_Item_List: ids.map((Id) => ({ Id, Note: `Note ${Id}` })) },
});

describe('withoutNote (Handler_OnNoteDeleted of the cards with notes)', () => {
  it('removes the note and sets Total to the length of the list', () => {
    const next = withoutNote(card(['1', '2', '3']), '2');
    expect(next.notes).toEqual({
      Total: 2,
      Note_Item_List: [
        { Id: '1', Note: 'Note 1' },
        { Id: '3', Note: 'Note 3' },
      ],
    });
    expect(next.title).toBe('Fenwick Household');
  });

  it('keeps the same item when no note has the id', () => {
    const item = card(['1']);
    expect(withoutNote(item, '9')).toBe(item);
  });

  it('reads an omitted note Id as "0"', () => {
    const item = { notes: { Total: 1, Note_Item_List: [{ Note: 'No id' }] } };
    expect(withoutNote(item, '0').notes).toEqual({ Total: 0, Note_Item_List: [] });
  });
});

describe('useCardNotes', () => {
  it('keeps its own copy of the item and replaces it when the input changes', () => {
    const first = card(['1', '2']);
    const { result, rerender } = renderHook(({ input }) => useCardNotes(input), { initialProps: { input: first } });
    expect(result.current.item).toBe(first);
    act(() => {
      result.current.removeNote('1');
    });
    expect(result.current.item.notes.Total).toBe(1);
    rerender({ input: first });
    expect(result.current.item.notes.Total).toBe(1);
    const second = card(['7']);
    rerender({ input: second });
    expect(result.current.item).toBe(second);
  });

  it('opens and closes the notes sheet (IsAddNote)', () => {
    const input = card([]);
    const { result } = renderHook(() => useCardNotes(input));
    expect(result.current.isAddNote).toBe(false);
    act(() => {
      result.current.openNoteSheet();
    });
    expect(result.current.isAddNote).toBe(true);
    act(() => {
      result.current.closeNoteSheet();
    });
    expect(result.current.isAddNote).toBe(false);
  });

  it('replaces the notes of the item on Handler_OnNotesChanged', () => {
    const input = card(['1']);
    const { result } = renderHook(() => useCardNotes(input));
    const notes = { Total: 2, Note_Item_List: [{ Id: '5' }, { Id: '6' }] };
    act(() => {
      result.current.handler_OnNotesChanged(notes);
    });
    expect(result.current.item.notes).toBe(notes);
    expect(result.current.item.title).toBe('Fenwick Household');
  });
});

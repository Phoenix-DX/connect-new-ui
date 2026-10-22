import { NavigationType } from 'react-router';

/* Position of each history entry of the tab, keyed by the router's `location.key`. React Router does not tell a
   blocker whether a POP goes back or forward, nor whether it reaches the first entry: the original answers both
   from the runtime history state (NH:845-847). The router's browser history keeps its own index in
   `history.state.idx`; it is used for entries this page has not seen (before a reload). */

export interface HistoryEntry {
  key: string;
  idx: number;
}

const idxByKey = new Map<string, number>();
let current: HistoryEntry | null = null;

function browserIdx(): number | undefined {
  const state: unknown = window.history.state;
  if (typeof state !== 'object' || state === null || !('idx' in state)) return undefined;
  return typeof state.idx === 'number' ? state.idx : undefined;
}

export const currentEntry = (): HistoryEntry | null => current;

/** Index of a known entry; an unknown one is read from the browser history (the POP has already moved it). */
export function entryIdx(key: string): number | undefined {
  return idxByKey.get(key) ?? (current?.key === key ? current.idx : browserIdx());
}

/** A POP to `key` goes back (an unknown entry counts as back, the usual case after a reload). */
export function isBackTo(key: string): boolean {
  const next = entryIdx(key);
  return next === undefined || current === null || next < current.idx;
}

/** The entry is the first of the tab (NH:845-847: no state or age 0). */
export const isInitialEntry = (key: string): boolean => (entryIdx(key) ?? 0) === 0;

/**
 * Records the entry the router has just shown. Returns the keys of entries that left the history:
 * after a PUSH every entry from the new index on (the forward entries), after a REPLACE the replaced one only.
 */
export function commitEntry(key: string, action: NavigationType): string[] {
  if (current?.key === key) return [];
  const previous = current;
  let idx: number;
  if (previous === null) idx = browserIdx() ?? 0;
  else if (action === NavigationType.Push) idx = previous.idx + 1;
  else if (action === NavigationType.Replace) idx = previous.idx;
  else idx = entryIdx(key) ?? Math.max(0, previous.idx - 1);

  const removed: string[] = [];
  if (previous !== null && action === NavigationType.Push) {
    for (const [other, otherIdx] of idxByKey) {
      if (otherIdx >= idx) removed.push(other);
    }
  } else if (previous !== null && action === NavigationType.Replace) {
    removed.push(previous.key);
  }
  for (const other of removed) idxByKey.delete(other);
  idxByKey.set(key, idx);
  current = { key, idx };
  return removed;
}

/** Test helper: forgets every entry. */
export function resetHistoryStack(): void {
  idxByKey.clear();
  current = null;
}

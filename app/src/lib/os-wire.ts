/* OutSystems wire-format helpers. "No value" is never null on the wire. */
export type LongId = string; // Long Integer travels as a string; keep it a string.

export const osList = <T>(w: { List?: T[] } | T[] | null | undefined): T[] => (Array.isArray(w) ? w : (w?.List ?? []));
export const osText = (s: string | null | undefined): string | null => (s == null || s === '' ? null : s);
export const osDate = (s: string | null | undefined): string | null => (!s || s.startsWith('1900-01-01') ? null : s);
export const osLong = (v: string | number | null | undefined): LongId | null =>
  v == null || v === '' || v === '0' || v === 0 ? null : String(v);
export const osNumber = (v: string | number | null | undefined): number => (v == null || v === '' ? 0 : Number(v));

/* Mock side: wrap a list the way OutSystems does. */
export const wireList = <T>(items: T[]) => ({ List: items });

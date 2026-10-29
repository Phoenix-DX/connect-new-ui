/** OutSystems widget ids: a block instance "<p>-$bN" (or "$bN") scopes its children as "<p>-bN-…". */
export const scopeOf = (id: string | undefined): string => (id ?? '').replace('$', '');
export const child = (scope: string, n: number): string =>
  scope === '' ? `$b${String(n)}` : `${scope}-$b${String(n)}`;

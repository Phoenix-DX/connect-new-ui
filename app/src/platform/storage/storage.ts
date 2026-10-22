/* Browser storage of the mock session (decision U5): namespaced keys, mock values only, never tokens or person data.
   Storage can be missing or throw (private mode, blocked site data): every access is guarded and falls back to "none". */
const PREFIX = 'ubtc-mock:';

export type StorageArea = 'local' | 'session';

function area(kind: StorageArea): Storage | null {
  try {
    return kind === 'local' ? window.localStorage : window.sessionStorage;
  } catch {
    return null;
  }
}

export function readItem(kind: StorageArea, key: string): unknown {
  try {
    const raw = area(kind)?.getItem(PREFIX + key);
    return raw == null ? undefined : (JSON.parse(raw) as unknown);
  } catch {
    return undefined;
  }
}

export function writeItem(kind: StorageArea, key: string, value: unknown): void {
  try {
    area(kind)?.setItem(PREFIX + key, JSON.stringify(value));
  } catch {
    /* storage full or blocked: the in-memory state still works for this page */
  }
}

export function removeItem(kind: StorageArea, key: string): void {
  try {
    area(kind)?.removeItem(PREFIX + key);
  } catch {
    /* see writeItem */
  }
}

/** Keys of one area that start with `prefix` (inside the mock namespace), without the namespace. */
export function itemKeys(kind: StorageArea, prefix: string): string[] {
  const store = area(kind);
  if (!store) return [];
  const found: string[] = [];
  try {
    for (let i = 0; i < store.length; i++) {
      const key = store.key(i);
      if (key?.startsWith(PREFIX + prefix)) found.push(key.slice(PREFIX.length));
    }
  } catch {
    return [];
  }
  return found;
}

/** A testing switch read from the URL (?name=value) and remembered for the tab, like ?mock= (src/mocks/scenario.ts). */
export function rememberedParam(name: string): string | null {
  const fromUrl = new URL(window.location.href).searchParams.get(name);
  if (fromUrl !== null) writeItem('session', `param:${name}`, fromUrl);
  const kept = readItem('session', `param:${name}`);
  return typeof kept === 'string' ? kept : null;
}

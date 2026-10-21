import { http, HttpResponse, type RequestHandler } from 'msw';
import { scenario, mockDelay } from './scenario';

/* In-memory data for mutations (pattern P-MUTATION). Lists and details read from a collection; create, update and
   delete change it, so a saved item shows up in the list exactly as in the original app. The data lives as long as the
   page (navigation inside the app keeps it; a reload or ?mock-reset=1 starts again from the seed).

   const orders = collection('orders', () => osList((fixtureData('App', 'DataActionGetOrders') as GetOrdersWire).Orders), 'Id');
   export const handlers = [
     statefulHandler('App', 'DataActionGetOrders', () => ({ Orders: { List: orders.all() } })),
     statefulHandler('App', 'ActionSaveOrder', ({ Order }) => { orders.upsert(Order as Row); return {}; }),
   ]; */
type Row = Record<string, unknown>;
const stores = new Map<string, Collection>();
/* ids compare as text, like OutSystems Long Integers on the wire */
const idText = (v: unknown): string => (typeof v === 'string' || typeof v === 'number' ? String(v) : JSON.stringify(v));
if (new URL(window.location.href).searchParams.has('mock-reset')) stores.clear();

export class Collection {
  private rows: Row[] | null = null;
  private seq = 1000;
  constructor(
    private seed: () => Row[],
    private idField: string,
  ) {}
  private data(): Row[] {
    return (this.rows ??= structuredClone(this.seed()));
  }
  all(): Row[] {
    return this.data();
  }
  get(id: unknown): Row | undefined {
    return this.data().find((r) => idText(r[this.idField]) === idText(id));
  }
  where(pred: (r: Row) => boolean): Row[] {
    return this.data().filter(pred);
  }
  upsert(row: Row): Row {
    const id = row[this.idField];
    const isNew = id == null || id === '' || id === '0' || id === 0;
    if (isNew) {
      const r = { ...row, [this.idField]: String(++this.seq) };
      this.data().unshift(r);
      return r;
    }
    const i = this.data().findIndex((r) => idText(r[this.idField]) === idText(id));
    if (i >= 0) this.data()[i] = { ...this.data()[i], ...row };
    else this.data().unshift(row);
    return this.get(id) ?? row;
  }
  remove(id: unknown) {
    this.rows = this.data().filter((r) => idText(r[this.idField]) !== idText(id));
  }
}

export function collection(name: string, seed: () => Row[], idField = 'Id'): Collection {
  let c = stores.get(name);
  if (!c) {
    c = new Collection(seed, idField);
    stores.set(name, c);
  }
  return c;
}

/* A handler whose answer is computed from the collections. The scenario switches still apply. */
export function statefulHandler(module: string, action: string, answer: (inputs: Row) => unknown): RequestHandler {
  return http.post(`/api/${module}/${action}`, async ({ request }) => {
    await mockDelay();
    if (scenario() === 'error') return HttpResponse.json({ error: 'mock error' }, { status: 500 });
    const body: unknown = await request.json().catch(() => ({}));
    const inputs = (typeof body === 'object' && body !== null ? body : {}) as Row;
    return HttpResponse.json({ data: answer(inputs) });
  });
}

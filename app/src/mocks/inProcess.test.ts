import { delay, http, HttpResponse } from 'msw';
import { describe, expect, it, vi } from 'vitest';
import { createMockFetch } from './inProcess';

const API = 'http://localhost/api/UBTConnect/ActionSync_Info_GetMain';
const handlers = [
  http.post(API, async ({ request }) => HttpResponse.json({ echo: await request.json() })),
  http.post('http://localhost/api/Fail', () => HttpResponse.error()),
  http.post('http://localhost/api/Never', async () => {
    await delay('infinite');
    return HttpResponse.json({});
  }),
];

describe('in-process mocks (demo build)', () => {
  it('answers a handled request with the handler response', async () => {
    const passthrough = vi.fn<typeof fetch>();
    const mockFetch = createMockFetch(passthrough, handlers);
    const response = await mockFetch(new Request(API, { method: 'POST', body: JSON.stringify({ a: 1 }) }));
    expect(await response.json()).toEqual({ echo: { a: 1 } });
    expect(passthrough).not.toHaveBeenCalled();
  });

  it('sends unhandled requests to the network, body intact', async () => {
    const passthrough = vi.fn<typeof fetch>((input) =>
      (input as Request).text().then((body) => new Response(`network:${body}`)),
    );
    const mockFetch = createMockFetch(passthrough, handlers);
    const response = await mockFetch('http://localhost/UBTConnect/img/a.png', { method: 'POST', body: 'x' });
    expect(await response.text()).toBe('network:x');
  });

  it('turns HttpResponse.error() into a network error, as the MSW worker does', async () => {
    const mockFetch = createMockFetch(vi.fn<typeof fetch>(), handlers);
    await expect(mockFetch('http://localhost/api/Fail', { method: 'POST' })).rejects.toThrow(TypeError);
  });

  it('rejects an aborted request that the handler never answers (loading scenario)', async () => {
    const mockFetch = createMockFetch(vi.fn<typeof fetch>(), handlers);
    const controller = new AbortController();
    const pending = mockFetch('http://localhost/api/Never', { method: 'POST', signal: controller.signal });
    controller.abort();
    await expect(pending).rejects.toMatchObject({ name: 'AbortError' });
  });
});

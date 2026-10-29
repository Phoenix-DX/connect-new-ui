import type { Connect, Plugin } from 'vite';
import { describe, expect, test, vi } from 'vitest';
import { ROUTES } from '../src/app/routes.generated';
import { screenOf } from '../src/platform/navigation/paths';
import { isUnknownAppPath, NOT_FOUND_TITLE, unknownPaths } from './unknownPaths';

/* D4 of item 9 (migration/clarify/review/item9-solution.md §5.3, decision 3 (a)): the dev server and `vite preview`
   answer the first load of a path that no screen has with TST's server 404 (P7). */

describe('isUnknownAppPath', () => {
  test('a path under /UBTConnect/ that no screen has: 404', () => {
    for (const url of ['/UBTConnect/NoSuchScreen', '/UBTConnect/NoSuchScreen?x=1', '/UBTConnect/Foo/Bar'])
      expect(isUnknownAppPath('GET', url), url).toBe(true);
  });

  test('screens, the module root, files with an extension, runtime endpoints and other paths pass', () => {
    for (const url of [
      '/UBTConnect/HomeFeed',
      '/UBTConnect/HomeFeed/',
      '/ubtconnect/homefeed?review=1',
      '/UBTConnect/',
      '/UBTConnect',
      '/UBTConnect/_error.html',
      '/UBTConnect/css/x.css',
      '/UBTConnect/status/network-ping.txt',
      '/UBTConnect/moduleservices/pwa/manifest',
      '/UBTConnect/screenservices/UBTConnect/Home/HomeFeed/DataActionGetFeed',
      '/assets/app.js',
      '/embed/feeds',
      '/',
    ])
      expect(isUnknownAppPath('GET', url), url).toBe(false);
  });

  test('only a GET: other methods pass', () => {
    expect(isUnknownAppPath('POST', '/UBTConnect/NoSuchScreen')).toBe(false);
    expect(isUnknownAppPath(undefined, '/UBTConnect/NoSuchScreen')).toBe(false);
  });

  test('agrees with screenOf (platform/navigation/paths.ts) for every route', () => {
    for (const { path } of ROUTES) {
      expect(screenOf(path), path).not.toBeNull();
      expect(isUnknownAppPath('GET', path), path).toBe(false);
    }
    expect(screenOf('/UBTConnect/NoSuchScreen')).toBeNull();
  });
});

type Middleware = Connect.NextHandleFunction;
type ServerHook = (server: { middlewares: { use: (handler: Middleware) => void } }) => void;

function middlewareOf(plugin: Plugin, hook: 'configureServer' | 'configurePreviewServer'): Middleware {
  const handlers: Middleware[] = [];
  (plugin[hook] as unknown as ServerHook)({ middlewares: { use: (handler) => handlers.push(handler) } });
  expect(handlers).toHaveLength(1);
  return handlers[0] as Middleware;
}

function request(handler: Middleware, url: string) {
  const res = { statusCode: 200, headers: {} as Record<string, string>, body: '' };
  const next = vi.fn();
  const response = {
    get statusCode() {
      return res.statusCode;
    },
    set statusCode(code: number) {
      res.statusCode = code;
    },
    setHeader: (name: string, value: string) => {
      res.headers[name.toLowerCase()] = value;
    },
    end: (body: string) => {
      res.body = body;
    },
  };
  handler({ method: 'GET', url } as never, response as never, next);
  return { ...res, next };
}

describe('unknownPaths plugin', () => {
  test.each(['configureServer', 'configurePreviewServer'] as const)(
    '%s: HTTP 404 with the TST server page; every other request goes on',
    (hook) => {
      const handler = middlewareOf(unknownPaths(), hook);
      const unknown = request(handler, '/UBTConnect/NoSuchScreen');
      expect(unknown.statusCode).toBe(404);
      expect(unknown.headers['content-type']).toBe('text/html; charset=utf-8');
      expect(unknown.body).toContain(`<title>${NOT_FOUND_TITLE}</title>`);
      expect(unknown.body).toContain('Server Error');
      expect(unknown.next).not.toHaveBeenCalled();

      const known = request(handler, '/UBTConnect/HomeFeed');
      expect(known.next).toHaveBeenCalledOnce();
      expect(known.body).toBe('');
    },
  );

  test('the page title is the TST text (P7: PRR u5.firstLoad.at1s.title)', () => {
    expect(NOT_FOUND_TITLE).toBe('404 - File or directory not found.');
  });
});

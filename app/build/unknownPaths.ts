import type { Connect, Plugin } from 'vite';
import { APP, ROUTES } from '../src/app/routes.generated';

/* D4 of item 9 (migration/clarify/review/item9-solution.md §5.3; decision 3 (a), user 2026-10-29). On TST, the first
   load of a path under /UBTConnect/ that no screen has gets HTTP 404 and the server page "404 - File or directory not
   found.": the app does not load (P7, `PRR:u5.firstLoad`, findings item9-render-route-errors.md §7). The dev server and
   `vite preview` serve index.html for every path (appType 'spa'), so this plugin answers those paths first, with the
   same status and text. A later navigation to such a path is a full page load (D3, platform/navigation/osNavigate.ts
   goTo), so it ends here too. Production: the host gives the same answer (docs/guides/pwa.md "Unknown paths"). */

const normalize = (pathname: string) => pathname.replace(/\/+$/, '').toLowerCase();

/** The paths that show a screen, as screenOf (src/platform/navigation/paths.ts) reads them: the module root and the
    route table. The config cannot load `@/` imports, so this list is built here; the unit test keeps both in step. */
const SCREEN_PATHS = new Set([normalize(`/${APP}`), ...ROUTES.map((route) => normalize(route.path))]);

const APP_PREFIX = `/${APP}/`.toLowerCase();

/** OutSystems runtime endpoints under the module path: services, not screen URLs (the TST manifest is
    `/UBTConnect/moduleservices/pwa/manifest`, build/pwa.ts). */
const RUNTIME_ENDPOINTS = new RegExp(`^/${APP}/(moduleservices|screenservices)/`, 'i');

/** The title and the main text of TST's 404 page (P7: `PRR:u5.firstLoad.at1s`). */
export const NOT_FOUND_TITLE = '404 - File or directory not found.';

const NOT_FOUND_PAGE = `<!doctype html>
<html lang="en">
<head><meta charset="utf-8"><title>${NOT_FOUND_TITLE}</title></head>
<body>
<h1>Server Error</h1>
<h2>${NOT_FOUND_TITLE}</h2>
<h3>The resource you are looking for might have been removed, had its name changed, or is temporarily unavailable.</h3>
</body>
</html>
`;

/** True when the server answers 404: a GET of a path under /UBTConnect/ whose last segment has no file extension (so
    not `_error.html`, a stylesheet or an image), that is not a runtime endpoint, and that no screen has. */
export function isUnknownAppPath(method: string | undefined, url: string | undefined): boolean {
  if (method !== 'GET' || url === undefined) return false;
  const pathname = url.split(/[?#]/, 1)[0] ?? '';
  if (!pathname.toLowerCase().startsWith(APP_PREFIX) || RUNTIME_ENDPOINTS.test(pathname)) return false;
  if (pathname.slice(pathname.lastIndexOf('/') + 1).includes('.')) return false;
  return !SCREEN_PATHS.has(normalize(pathname));
}

/** The dev-server and preview-server rule of D4. */
export function unknownPaths(): Plugin {
  const answer: Connect.NextHandleFunction = (req, res, next) => {
    if (!isUnknownAppPath(req.method, req.url)) {
      next();
      return;
    }
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end(NOT_FOUND_PAGE);
  };
  return {
    name: 'unknown-paths',
    configureServer(server) {
      server.middlewares.use(answer);
    },
    configurePreviewServer(server) {
      server.middlewares.use(answer);
    },
  };
}

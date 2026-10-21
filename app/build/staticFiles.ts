import { copyFileSync, existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, extname, join, resolve } from 'node:path';
import type { Connect, Plugin } from 'vite';

/* Files the app needs at fixed URL paths that are not in public/ under that path. Dev and preview answer them with a
   middleware; a build writes them as static files (writeBundle, so the service-worker precache sees them), which makes
   the build work on any static host with no Vite middleware (demo build, user 2026-10-16). */

const fromApp = (path: string) => new URL(`../${path}`, import.meta.url);

type Middleware = Connect.NextHandleFunction;

/** A plugin that answers `serve` in dev and preview and calls `write` with the output folder after a build. */
function staticFilesPlugin(name: string, serve: Middleware | null, write: (outDir: string) => void): Plugin {
  let outDir = '';
  return {
    name,
    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir);
    },
    configureServer(server) {
      if (serve) server.middlewares.use(serve);
    },
    configurePreviewServer(server) {
      if (serve) server.middlewares.use(serve);
    },
    writeBundle() {
      write(outDir);
    },
  };
}

function writeFile(path: string, content: string | Buffer) {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, content);
}

/** Mock Feed CMS (decision D8 b, CR-W2F-1, user 2026-10-15): the ported Connect2Feed SDK loads `<BaseURL>/embed/feeds`
    and `<BaseURL>/embed/feeds/item/<id>` and only accepts messages from BaseURL as an origin
    (migration/runtime-sources/UBTConnect_EmbedFeed.EmbedFeed.js:70, :183, :693). In the mock app BaseURL is the app's own
    origin, so dev and preview answer those paths with the local mock page, and mock builds write it as
    `embed/feeds/index.html` plus one `embed/feeds/item/<id>/index.html` per mock post (static hosts without rewrites).
    Production takes BaseURL from the real CMS config (DataActionGetFeedConfig) and gets none of this. */
export function mockFeedCms({ emit }: { emit: boolean }): Plugin {
  const page = fromApp('public/mock-embeds/feed-cms.html');
  const serve: Middleware = (req, res, next) => {
    const path = (req.url ?? '').split('?')[0] ?? '';
    if (path !== '/embed/feeds' && !/^\/embed\/feeds\/item\/[^/]+$/.test(path)) {
      next();
      return;
    }
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end(readFileSync(page));
  };
  return staticFilesPlugin('mock-feed-cms', serve, (outDir) => {
    if (!emit) return;
    const html = readFileSync(page);
    writeFile(join(outDir, 'embed/feeds/index.html'), html);
    // the mock posts of the page (`id: 'mock-feed-item-1'`, …)
    for (const [, id] of html.toString().matchAll(/\bid: '([^']+)'/g)) {
      if (id) writeFile(join(outDir, 'embed/feeds/item', id, 'index.html'), html);
    }
  });
}

/** The original app's images at their TST paths (`/UBTConnect/img/<file>`, and `/UBT_CW/img/<file>` of the UBT_CW app
    that MessageList / Notifications avatars use; CountryDetails / BrowseDirectory map pins; the manifest icons). Parity
    replays captured DOM on this origin and the captures keep the original `src`; without this the dev server answered
    index.html and the reference showed broken images (Services suggestions, the login-flow logos). The files are the
    ones the clone already ships in public/os-assets/UBTConnect/img/ (downloaded from TST); public/UBTConnect/img/
    (stylesheet-relative assets) wins. Every build copies them to the same paths. */
export function originalImages(): Plugin {
  const own = fromApp('public/UBTConnect/img/');
  // URL prefix of the original app → folder of the clone that holds those files (downloaded from TST)
  const folders: [prefix: string, folder: URL][] = [
    ['/UBTConnect/img/', fromApp('public/os-assets/UBTConnect/img/')],
    ['/UBT_CW/img/', fromApp('public/os-assets/UBT_CW/img/')],
  ];
  const types: Partial<Record<string, string>> = {
    '.svg': 'image/svg+xml',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.webp': 'image/webp',
  };
  /** The clone's file for an original image name, or null (unknown, or public/UBTConnect/img/ has it). */
  const fileFor = (prefix: string, folder: URL, name: string): URL | null => {
    const file = new URL(name, folder);
    const isOwn = prefix === '/UBTConnect/img/' && existsSync(new URL(name, own));
    return isOwn || !file.pathname.startsWith(folder.pathname) || !existsSync(file) ? null : file;
  };
  const serve: Middleware = (req, res, next) => {
    for (const [prefix, folder] of folders) {
      const name = new RegExp(`^${prefix}([^/?#]+)`).exec(req.url ?? '')?.[1];
      if (name === undefined) continue;
      const file = fileFor(prefix, folder, decodeURIComponent(name));
      if (file === null) break;
      res.setHeader('Content-Type', types[extname(file.pathname).toLowerCase()] ?? 'application/octet-stream');
      res.end(readFileSync(file));
      return;
    }
    next();
  };
  return staticFilesPlugin('original-images', serve, (outDir) => {
    for (const [prefix, folder] of folders) {
      for (const name of readdirSync(folder)) {
        const file = fileFor(prefix, folder, name);
        if (file === null) continue;
        const target = join(outDir, prefix, name);
        mkdirSync(dirname(target), { recursive: true });
        copyFileSync(file, target);
      }
    }
  });
}

/** Static-host files of the demo build (dist-demo/): SPA fallback and rewrites in host-neutral form, two zero-dependency
    local servers and the README (templates in build/demo/). */
export function demoHostFiles(): Plugin {
  const templates = fromApp('build/demo/');
  return staticFilesPlugin('demo-host-files', null, (outDir) => {
    for (const name of readdirSync(templates)) copyFileSync(new URL(name, templates), join(outDir, name));
    // GitHub Pages and Cloudflare Pages answer unknown paths with 404.html: the SPA entry itself
    copyFileSync(join(outDir, 'index.html'), join(outDir, '404.html'));
  });
}

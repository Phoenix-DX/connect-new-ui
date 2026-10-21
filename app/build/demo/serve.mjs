#!/usr/bin/env node
// Zero-dependency local server for the UBTConnect demo (Node 18+): `node serve.mjs [port]`, then open
// http://localhost:<port>/UBTConnect/ . localhost is a secure context, so the service worker and "Install app" work.
// Serves files from this folder; app routes fall back to index.html; the mock Feed CMS item pages to their page.
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('.', import.meta.url));
const port = Number(process.argv[2] ?? process.env.PORT ?? 8080);
const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
  '.eot': 'application/vnd.ms-fontobject',
  '.txt': 'text/plain; charset=utf-8',
};
const MANIFEST = '/UBTConnect/moduleservices/pwa/manifest';

async function fileAt(path) {
  const file = normalize(join(root, path));
  if (!file.startsWith(root) && file + sep !== root) return null;
  try {
    const info = await stat(file);
    if (info.isFile()) return file;
    if (info.isDirectory())
      return (await stat(join(file, 'index.html')).catch(() => null))?.isFile() ? join(file, 'index.html') : null;
  } catch {
    /* not found */
  }
  return null;
}

/** The file that answers a URL path: the file itself, the mock Feed CMS page, or the SPA entry for app routes. */
async function resolve(path) {
  const direct = await fileAt(path);
  if (direct) return direct;
  if (/^\/embed\/feeds(\/item\/[^/]+)?\/?$/.test(path)) return join(root, 'embed/feeds/index.html');
  const last = path.slice(path.lastIndexOf('/') + 1);
  return last.includes('.') ? null : join(root, 'index.html');
}

createServer(async (req, res) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.writeHead(405).end();
    return;
  }
  let path;
  try {
    path = decodeURIComponent(new URL(req.url ?? '/', 'http://localhost').pathname);
  } catch {
    res.writeHead(400).end();
    return;
  }
  const file = await resolve(path);
  if (!file) {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }).end('Not found');
    return;
  }
  const type =
    path === MANIFEST
      ? 'application/manifest+json'
      : (types[extname(file).toLowerCase()] ?? 'application/octet-stream');
  const noCache = file.endsWith(`${sep}sw.js`) || file.endsWith('.html') || path === MANIFEST;
  res.writeHead(200, { 'Content-Type': type, 'Cache-Control': noCache ? 'no-cache' : 'public, max-age=3600' });
  res.end(req.method === 'HEAD' ? undefined : await readFile(file));
}).listen(port, 'localhost', () => {
  console.log(`UBTConnect demo: http://localhost:${port}/UBTConnect/  (Ctrl+C to stop)`);
});

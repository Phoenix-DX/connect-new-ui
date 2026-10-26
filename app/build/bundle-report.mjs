/**
 * Prints the first-load size of HomeFeed and Login from dist/: entry chunk + route chunk + the chunks that both load
 * statically (import ... from "./x.js"). Dynamic imports are not counted. Run after `npm --prefix app run build`.
 *   node app/build/bundle-report.mjs [screen ...]
 * Sizes are in kB (1,000 bytes), raw and gzip.
 */
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import { fileURLToPath } from 'node:url';

const dist = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'dist');
const assets = path.join(dist, 'assets');
if (!fs.existsSync(path.join(dist, 'index.html'))) {
  console.error('app/dist not found: run `npm --prefix app run build` first.');
  process.exit(1);
}

const chunks = new Map();
for (const name of fs.readdirSync(assets).filter((n) => n.endsWith('.js'))) {
  const buf = fs.readFileSync(path.join(assets, name));
  chunks.set(name, { raw: buf.length, gzip: zlib.gzipSync(buf).length, text: buf.toString('utf8') });
}

const html = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
const entry = html.match(/src="[^"]*\/assets\/([^"]+\.js)"/)?.[1];
if (!entry || !chunks.has(entry)) {
  console.error('Entry chunk not found in dist/index.html.');
  process.exit(1);
}

/** The chunk that the entry loads for src/pages/<screen>/<screen>Page.tsx or src/screens/<screen>/index.tsx (import.meta.glob map). */
function routeChunk(screen) {
  const tail = String.raw`"\s*:\s*\(\)\s*=>[^"]*?import\("\./([^"]+\.js)"`;
  const res = [
    new RegExp(String.raw`"\.\./pages/${screen}/${screen}Page\.tsx` + tail),
    new RegExp(String.raw`"\.\./screens/${screen}/index\.tsx` + tail),
  ];
  for (const re of res) {
    for (const chunk of chunks.values()) {
      const m = chunk.text.match(re);
      if (m) return m[1];
    }
  }
  return null;
}

function staticClosure(start, seen = new Set()) {
  const stack = [start];
  while (stack.length) {
    const name = stack.pop();
    if (seen.has(name) || !chunks.has(name)) continue;
    seen.add(name);
    for (const m of chunks.get(name).text.matchAll(/(?:\bfrom|\bimport)\s*["']\.\/([^"']+\.js)["']/g)) stack.push(m[1]);
  }
  return seen;
}

const kb = (n) => (n / 1000).toFixed(2);
const screens = process.argv.length > 2 ? process.argv.slice(2) : ['HomeFeed', 'Login'];
console.log('Screen     First load kB   gzip kB   Chunks');
for (const screen of screens) {
  const route = routeChunk(screen);
  if (!route) {
    console.log(`${screen.padEnd(10)} route chunk not found`);
    continue;
  }
  const set = staticClosure(route, staticClosure(entry));
  let raw = 0;
  let gzip = 0;
  for (const n of set) {
    raw += chunks.get(n).raw;
    gzip += chunks.get(n).gzip;
  }
  console.log(
    `${screen.padEnd(10)} ${kb(raw).padStart(13)} ${kb(gzip).padStart(9)}   ${set.size} (entry ${entry}, route ${route})`,
  );
}

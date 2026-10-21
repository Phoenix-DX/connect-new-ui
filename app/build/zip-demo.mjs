#!/usr/bin/env node
// Packs dist-demo/ into dist-demo.zip (one top folder `dist-demo/`), with no dependency: Node's zlib (deflate, crc32).
// Run by `npm run build:demo` after the build. Usage: node build/zip-demo.mjs [sourceDir] [zipFile]
import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { basename, join, relative, resolve, sep } from 'node:path';
import { crc32, deflateRawSync } from 'node:zlib';

const appDir = resolve(import.meta.dirname, '..');
const source = resolve(appDir, process.argv[2] ?? 'dist-demo');
const target = resolve(appDir, process.argv[3] ?? `${basename(source)}.zip`);

function filesOf(dir) {
  return readdirSync(dir, { withFileTypes: true })
    .sort((a, b) => a.name.localeCompare(b.name))
    .flatMap((entry) => (entry.isDirectory() ? filesOf(join(dir, entry.name)) : [join(dir, entry.name)]));
}

/** DOS date and time of a file (zip header format). */
function dosTime(date) {
  const time = (date.getHours() << 11) | (date.getMinutes() << 5) | Math.floor(date.getSeconds() / 2);
  const day = ((date.getFullYear() - 1980) << 9) | ((date.getMonth() + 1) << 5) | date.getDate();
  return { time, day };
}

const locals = [];
const centrals = [];
let offset = 0;
for (const file of filesOf(source)) {
  const name = Buffer.from(`${basename(source)}/${relative(source, file).split(sep).join('/')}`, 'utf8');
  const data = readFileSync(file);
  const packed = deflateRawSync(data, { level: 9 });
  const stored = packed.length >= data.length;
  const body = stored ? data : packed;
  const { time, day } = dosTime(statSync(file).mtime);
  const crc = crc32(data);
  const fields = (header) => {
    header.writeUInt16LE(0x0800, header.length === 30 ? 6 : 8); // flags: UTF-8 names
    header.writeUInt16LE(stored ? 0 : 8, header.length === 30 ? 8 : 10);
    header.writeUInt16LE(time, header.length === 30 ? 10 : 12);
    header.writeUInt16LE(day, header.length === 30 ? 12 : 14);
    header.writeUInt32LE(crc, header.length === 30 ? 14 : 16);
    header.writeUInt32LE(body.length, header.length === 30 ? 18 : 20);
    header.writeUInt32LE(data.length, header.length === 30 ? 22 : 24);
    header.writeUInt16LE(name.length, header.length === 30 ? 26 : 28);
  };
  const local = Buffer.alloc(30);
  local.writeUInt32LE(0x04034b50, 0);
  local.writeUInt16LE(20, 4);
  fields(local);
  const central = Buffer.alloc(46);
  central.writeUInt32LE(0x02014b50, 0);
  central.writeUInt16LE(0x031e, 4); // made by: Unix, zip 3.0
  central.writeUInt16LE(20, 6);
  fields(central);
  central.writeUInt32LE((0o100644 << 16) >>> 0, 38); // -rw-r--r--
  central.writeUInt32LE(offset, 42);
  locals.push(local, name, body);
  centrals.push(central, name);
  offset += local.length + name.length + body.length;
}
const directory = Buffer.concat(centrals);
const end = Buffer.alloc(22);
end.writeUInt32LE(0x06054b50, 0);
end.writeUInt16LE(centrals.length / 2, 8);
end.writeUInt16LE(centrals.length / 2, 10);
end.writeUInt32LE(directory.length, 12);
end.writeUInt32LE(offset, 16);
writeFileSync(target, Buffer.concat([...locals, directory, end]));
console.log(`${relative(appDir, target)}: ${centrals.length / 2} files, ${(offset / 1e6).toFixed(1)} MB`);

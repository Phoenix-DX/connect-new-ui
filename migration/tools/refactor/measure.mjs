#!/usr/bin/env node
/**
 * P0-4 code inventory (rerun in P9-3). Run from the project root:
 *   node migration/tools/refactor/measure.mjs [--out app/docs/refactor]
 * Needs app/node_modules (TypeScript compiler API) and, for the chunk sizes, app/dist (npm --prefix app run build).
 * Writes inventory.csv (one row per shared block and per ScreenBlock_* file), routes.csv (one row per route) and
 * calls-by-domain.md (files that call callAction directly, grouped by domain).
 * It uses its own import scan, not dependency-cruiser, so it runs before and after P0-3.
 */
import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";
import { createRequire } from "node:module";

const ROOT = process.cwd();
const APP = path.join(ROOT, "app");
const SRC = path.join(APP, "src");
const require = createRequire(path.join(APP, "package.json"));
const ts = require("typescript");
const outArg = process.argv.indexOf("--out");
const OUT = path.resolve(
  ROOT,
  outArg > 0 ? process.argv[outArg + 1] : "app/docs/refactor",
);
fs.mkdirSync(OUT, { recursive: true });

const rel = (f) => path.relative(SRC, f).split(path.sep).join("/");
const isTest = (f) => /\.test\.tsx?$/.test(f);
const isStory = (f) => /\.stories\.tsx?$/.test(f);

function walk(dir, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, acc);
    else acc.push(p);
  }
  return acc;
}
const all = walk(SRC);
const codeFiles = all.filter(
  (f) => /\.(ts|tsx)$/.test(f) && !f.endsWith(".d.ts"),
);
const fileSet = new Set(all);

function resolveSpec(from, spec) {
  if (!spec.startsWith(".")) return null;
  const base = path.resolve(path.dirname(from), spec);
  for (const c of [
    base,
    base + ".ts",
    base + ".tsx",
    base + ".css",
    path.join(base, "index.ts"),
    path.join(base, "index.tsx"),
  ]) {
    if (fileSet.has(c) && fs.statSync(c).isFile()) return c;
  }
  return null;
}

/** Facts of one file: imports, callAction calls and the state it uses. */
const facts = new Map();
for (const f of codeFiles) {
  const text = fs.readFileSync(f, "utf8");
  const sf = ts.createSourceFile(
    f,
    text,
    ts.ScriptTarget.Latest,
    true,
    f.endsWith("x") ? ts.ScriptKind.TSX : ts.ScriptKind.TS,
  );
  const info = {
    lines: text.split("\n").length - (text.endsWith("\n") ? 1 : 0),
    imports: new Set(),
    calls: [],
    viewState: false,
    memoryCache: false,
    clientVars: false,
    flags: false,
  };
  const addImport = (spec) => {
    const r = resolveSpec(f, spec);
    if (r) info.imports.add(r);
    if (/(^|\/)memoryCache$/.test(spec)) info.memoryCache = true;
    if (/(^|\/)clientVars$/.test(spec)) info.clientVars = true;
    if (/(^|\/)lib\/flags$/.test(spec)) info.flags = true;
  };
  const visit = (n) => {
    if (
      (ts.isImportDeclaration(n) || ts.isExportDeclaration(n)) &&
      n.moduleSpecifier &&
      ts.isStringLiteral(n.moduleSpecifier)
    ) {
      if (!(ts.isImportDeclaration(n) && n.importClause?.isTypeOnly))
        addImport(n.moduleSpecifier.text);
    } else if (ts.isCallExpression(n)) {
      const callee = n.expression;
      if (
        callee.kind === ts.SyntaxKind.ImportKeyword &&
        n.arguments[0] &&
        ts.isStringLiteralLike(n.arguments[0])
      )
        addImport(n.arguments[0].text);
      if (ts.isIdentifier(callee)) {
        if (callee.text === "callAction") {
          const [m, a] = n.arguments;
          const lit = (x) =>
            x && ts.isStringLiteralLike(x)
              ? x.text
              : x && ts.isTemplateExpression(x)
                ? x.getText(sf)
                : x
                  ? `<${x.getText(sf).slice(0, 40)}>`
                  : "";
          info.calls.push({ module: lit(m), action: lit(a) });
        }
        if (callee.text === "useViewState") info.viewState = true;
        if (callee.text === "getClientVar" || callee.text === "setClientVar")
          info.clientVars = true;
        if (callee.text === "useFlagOn" || callee.text === "isFlagOn")
          info.flags = true;
      }
    }
    ts.forEachChild(n, visit);
  };
  visit(sf);
  facts.set(f, info);
}

/** The unit of a file: shared block (shared/<Module>/<Block>) or ScreenBlock file. null when the file is in neither. */
function unitOf(f) {
  const r = rel(f);
  let m = r.match(/^shared\/([^/]+)\/([^/]+)\/.+/);
  if (m && m[2] !== "lib")
    return {
      id: `${m[1]}/${m[2]}`,
      kind: "shared-block",
      module: m[1],
      name: m[2],
    };
  m = r.match(/^screens\/([^/]+)\/components\/(ScreenBlock_[^/.]+)\.(tsx?)$/);
  if (m)
    return {
      id: `${m[1]}/${m[2]}`,
      kind: "screen-block",
      module: m[1],
      name: m[2],
    };
  return null;
}

// Build the units.
const units = new Map();
const sharedRoot = path.join(SRC, "shared");
for (const mod of fs
  .readdirSync(sharedRoot, { withFileTypes: true })
  .filter((e) => e.isDirectory())) {
  for (const b of fs
    .readdirSync(path.join(sharedRoot, mod.name), { withFileTypes: true })
    .filter((e) => e.isDirectory() && e.name !== "lib")) {
    const id = `${mod.name}/${b.name}`;
    units.set(id, {
      id,
      kind: "shared-block",
      module: mod.name,
      name: b.name,
      dir: path.join(sharedRoot, mod.name, b.name),
      files: [],
      tests: 0,
      stories: 0,
    });
  }
}
for (const f of codeFiles) {
  const r = rel(f);
  const m = r.match(
    /^screens\/([^/]+)\/components\/(ScreenBlock_[^/.]+)\.tsx?$/,
  );
  if (m && !isTest(f) && !isStory(f)) {
    const id = `${m[1]}/${m[2]}`;
    units.set(id, {
      id,
      kind: "screen-block",
      module: m[1],
      name: m[2],
      files: [f],
      tests: 0,
      stories: 0,
    });
  }
}
for (const f of all) {
  const u = unitOf(f);
  if (!u || u.kind !== "shared-block") {
    // tests and stories next to a ScreenBlock file
    const m = rel(f).match(
      /^screens\/([^/]+)\/components\/(ScreenBlock_[^/.]+)\.(test|stories)\.tsx?$/,
    );
    if (m) {
      const un = units.get(`${m[1]}/${m[2]}`);
      if (un) un[m[3] === "test" ? "tests" : "stories"]++;
    }
    continue;
  }
  const un = units.get(u.id);
  if (!un) continue;
  if (isTest(f)) un.tests++;
  else if (isStory(f)) un.stories++;
  else if (/\.(ts|tsx|css)$/.test(f) && !f.endsWith(".d.ts")) un.files.push(f);
}

const unitOfFile = new Map();
for (const u of units.values())
  for (const f of u.files) unitOfFile.set(f, u.id);

// Routes: transitive closure from screens/<S>/index.tsx.
const screens = fs
  .readdirSync(path.join(SRC, "screens"), { withFileTypes: true })
  .filter((e) => e.isDirectory())
  .map((e) => e.name);
const routeDirect = new Map(); // route -> Set(unit)
const routeTrans = new Map();
function importsOf(f) {
  return facts.get(f)?.imports ?? new Set();
}
for (const s of screens) {
  const entry = path.join(SRC, "screens", s, "index.tsx");
  const seen = new Set();
  const stack = [entry];
  while (stack.length) {
    const f = stack.pop();
    if (seen.has(f) || !fileSet.has(f)) continue;
    seen.add(f);
    for (const i of importsOf(f)) if (!isTest(i) && !isStory(i)) stack.push(i);
  }
  const trans = new Set();
  const direct = new Set();
  for (const f of seen) {
    const u =
      unitOfFile.get(f) ??
      (() => {
        const x = unitOf(f);
        return x && units.has(x.id) ? x.id : null;
      })();
    if (u) trans.add(u);
    if (f.startsWith(path.join(SRC, "screens", s) + path.sep)) {
      for (const i of importsOf(f)) {
        const ui =
          unitOfFile.get(i) ??
          (() => {
            const x = unitOf(i);
            return x && units.has(x.id) ? x.id : null;
          })();
        if (ui) direct.add(ui);
      }
    }
  }
  routeTrans.set(s, trans);
  routeDirect.set(s, direct);
}

// Blocks that import each block (other units).
const importedByUnits = new Map();
for (const [f, info] of facts) {
  const from = unitOfFile.get(f);
  if (isTest(f) || isStory(f)) continue;
  for (const i of info.imports) {
    const to = unitOfFile.get(i);
    if (to && from && to !== from) {
      if (!importedByUnits.has(to)) importedByUnits.set(to, new Set());
      importedByUnits.get(to).add(from);
    }
  }
}

const csvCell = (v) => {
  const s = String(v);
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};
const csv = (rows) =>
  rows.map((r) => r.map(csvCell).join(",")).join("\n") + "\n";

// inventory.csv
const header = [
  "kind",
  "module_or_screen",
  "name",
  "path",
  "lines",
  "tests",
  "stories",
  "routes_direct",
  "routes_transitive",
  "imported_by_blocks",
  "call_action",
  "use_view_state",
  "use_memory_cache",
  "use_client_vars",
  "use_flags",
];
const rows = [header];
const sortedUnits = [...units.values()].sort((a, b) =>
  (a.kind + a.id).localeCompare(b.kind + b.id),
);
for (const u of sortedUnits) {
  const fs_ = u.files.map((f) => facts.get(f)).filter(Boolean);
  const calls = [
    ...new Set(
      fs_.flatMap((i) => i.calls.map((c) => `${c.module}/${c.action}`)),
    ),
  ].sort();
  const direct = [...routeDirect].filter(([, set]) => set.has(u.id)).length;
  const trans = [...routeTrans].filter(([, set]) => set.has(u.id)).length;
  const lines = u.files.reduce(
    (n, f) =>
      n +
      (facts.get(f)?.lines ?? fs.readFileSync(f, "utf8").split("\n").length),
    0,
  );
  const p = u.kind === "shared-block" ? rel(u.dir) : rel(u.files[0]);
  rows.push([
    u.kind,
    u.module,
    u.name,
    `src/${p}`,
    lines,
    u.tests,
    u.stories,
    direct,
    trans,
    importedByUnits.get(u.id)?.size ?? 0,
    calls.join(";"),
    fs_.some((i) => i.viewState),
    fs_.some((i) => i.memoryCache),
    fs_.some((i) => i.clientVars),
    fs_.some((i) => i.flags),
  ]);
}
fs.writeFileSync(path.join(OUT, "inventory.csv"), csv(rows));

// Chunk sizes from dist.
const DIST = path.join(APP, "dist", "assets");
const chunks = {};
let entryFile = null;
if (fs.existsSync(DIST)) {
  for (const n of fs.readdirSync(DIST).filter((n) => n.endsWith(".js"))) {
    const buf = fs.readFileSync(path.join(DIST, n));
    chunks[n] = {
      raw: buf.length,
      gzip: zlib.gzipSync(buf).length,
      text: buf.toString("utf8"),
    };
  }
  const html = fs.readFileSync(path.join(APP, "dist", "index.html"), "utf8");
  entryFile =
    (html.match(/src="\/?(?:[^"]*\/)?assets\/([^"]+\.js)"/) ?? [])[1] ?? null;
}
function staticClosure(start) {
  const seen = new Set();
  const stack = [start];
  while (stack.length) {
    const n = stack.pop();
    if (seen.has(n) || !chunks[n]) continue;
    seen.add(n);
    for (const m of chunks[n].text.matchAll(
      /(?:\bfrom|\bimport)\s*["']\.\/([^"']+\.js)["']/g,
    ))
      stack.push(m[1]);
  }
  return seen;
}
function routeChunk(screen) {
  if (!entryFile) return null;
  // The entry holds the map "../screens/<S>/index.tsx":()=>...import("./<chunk>.js")
  const re = new RegExp(
    `"\\.\\./screens/${screen}/index\\.tsx"\\s*:\\s*\\(\\)\\s*=>[^"]*?import\\("\\./([^"]+\\.js)"`,
  );
  for (const c of Object.values(chunks)) {
    const m = c.text.match(re);
    if (m) return m[1];
  }
  return null;
}
const sizes = (set) => {
  let raw = 0,
    gz = 0;
  for (const n of set) {
    raw += chunks[n].raw;
    gz += chunks[n].gzip;
  }
  return { raw, gz };
};

// routes.csv
const callsCount = {};
const routeRows = [
  [
    "route",
    "route_chunk",
    "chunk_kb",
    "chunk_kb_gzip",
    "first_load_kb_gzip",
    "blocks_direct",
    "blocks_transitive",
    "blocks_direct_ids",
    "calls_total",
    "calls_per_state",
  ],
];
const baseSet = entryFile ? staticClosure(entryFile) : new Set();
for (const s of screens.sort()) {
  const ch = routeChunk(s);
  const own = ch ? sizes([ch]) : null;
  const fl = ch ? sizes(new Set([...baseSet, ...staticClosure(ch)])) : null;
  let perState = {};
  let total = 0;
  const cj = path.join(
    ROOT,
    "migration",
    "screens",
    s,
    "analysis",
    "calls.json",
  );
  if (fs.existsSync(cj)) {
    const calls = JSON.parse(fs.readFileSync(cj, "utf8")).calls ?? [];
    total = calls.length;
    for (const c of calls) {
      const k = c.phase ?? "load";
      (perState[k] ??= []).push(`${c.module}/${c.action}`);
    }
  }
  const perStateText = Object.entries(perState)
    .map(([k, v]) => `${k}: ${v.length} (${[...new Set(v)].join(" ")})`)
    .join(" | ");
  routeRows.push([
    s,
    ch ?? "",
    own ? (own.raw / 1000).toFixed(2) : "",
    own ? (own.gz / 1000).toFixed(2) : "",
    fl ? (fl.gz / 1000).toFixed(2) : "",
    routeDirect.get(s)?.size ?? 0,
    routeTrans.get(s)?.size ?? 0,
    [...(routeDirect.get(s) ?? [])].sort().join(";"),
    total,
    perStateText,
  ]);
}
fs.writeFileSync(path.join(OUT, "routes.csv"), csv(routeRows));

// calls-by-domain.md
const DOMAINS = [
  ["household", /household/i],
  ["member", /member|person|memberdetail/i],
  ["country", /countr/i],
  ["locality", /locality|localit|subdivision/i],
  ["update", /update/i],
  [
    "event",
    /event|assemble|booklet|milestone|transport|accommodation|guest|helper|host/i,
  ],
  ["bookmark", /bookmark/i],
  ["note", /note/i],
  ["message", /message|contact|email/i],
  ["notification", /notif/i],
  ["app", /./],
];
const ORDER = [
  "bookmark",
  "notification",
  "note",
  "message",
  "update",
  "household",
  "member",
  "country",
  "locality",
  "event",
  "app",
];
function domainOf(module, action, file) {
  const key = `${module}/${action}`;
  for (const name of ORDER) {
    const re = DOMAINS.find((d) => d[0] === name)[1];
    if (name === "app") return "app";
    if (re.test(key)) return name;
  }
  return "app";
}
const direct = [];
for (const [f, info] of facts) {
  const r = rel(f);
  if (isTest(f) || isStory(f) || r.startsWith("api/") || !info.calls.length)
    continue;
  direct.push([r, info]);
}
direct.sort((a, b) => a[0].localeCompare(b[0]));
const byDomain = Object.fromEntries(DOMAINS.map((d) => [d[0], new Map()]));
for (const [r, info] of direct) {
  for (const c of info.calls) {
    const d = domainOf(c.module, c.action, r);
    const key = `${r}\t${c.module}`;
    if (!byDomain[d].has(key)) byDomain[d].set(key, new Set());
    byDomain[d].get(key).add(c.action);
  }
}
let md = `# Files that call callAction directly, by domain\n\nGenerated by \`migration/tools/refactor/measure.mjs\` (P0-4). Re-run in P9-3.\n\n`;
md += `Method: a TypeScript AST scan of \`src/**/*.ts(x)\` for calls of \`callAction(...)\`. Tests, stories and \`src/api/\` are not counted. `;
md += `The domain comes from keywords in the module and action name (first match in the order ${ORDER.join(", ")}); a file that calls actions of several domains appears under each domain.\n\n`;
md += `Total: **${direct.length} files**, ${direct.reduce((n, [, i]) => n + i.calls.length, 0)} call sites. (The plan counts 71; the baseline word search counts 87. A call through a wrapper is not counted here.)\n\n`;
md += `| Domain | Files | Actions (distinct) |\n|---|---:|---:|\n`;
for (const [d] of DOMAINS) {
  const files = new Set([...byDomain[d].keys()].map((k) => k.split("\t")[0]));
  const acts = new Set(
    [...byDomain[d]].flatMap(([k, v]) =>
      [...v].map((a) => `${k.split("\t")[1]}/${a}`),
    ),
  );
  md += `| ${d} | ${files.size} | ${acts.size} |\n`;
}
for (const [d] of DOMAINS) {
  if (!byDomain[d].size) continue;
  md += `\n## ${d}\n\n| File | Module | Actions |\n|---|---|---|\n`;
  for (const [k, v] of [...byDomain[d]].sort()) {
    const [file, mod] = k.split("\t");
    md += `| \`${file}\` | ${mod} | ${[...v]
      .sort()
      .map((a) => `\`${a}\``)
      .join(", ")} |\n`;
  }
}
fs.writeFileSync(path.join(OUT, "calls-by-domain.md"), md);

const nShared = sortedUnits.filter((u) => u.kind === "shared-block").length;
const nScreen = sortedUnits.filter((u) => u.kind === "screen-block").length;
console.log(
  `inventory.csv: ${rows.length - 1} rows (${nShared} shared blocks, ${nScreen} screen blocks); routes.csv: ${routeRows.length - 1} routes${entryFile ? "" : " (no dist: chunk sizes empty)"}; callAction files: ${direct.length}`,
);

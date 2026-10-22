#!/usr/bin/env node
/**
 * P0-5 move map. Run from the project root:
 *   node migration/tools/refactor/move-map.mjs [--check]
 * Needs app/node_modules (TypeScript compiler API), app/docs/refactor/inventory.csv (P0-4, measure.mjs) and
 * migration/survey/screens.json. Writes app/docs/refactor/move-map.csv: one row per row of inventory.csv and one row
 * per route screen (src/screens/<R>/index.tsx).
 *
 * Mechanical columns (source, origin, routes) and the route sets come from the code. The columns shape, target, phase
 * and notes come from the default rules below plus the decisions in move-map.decisions.json (same folder), which win.
 * Rules: plan v2 §2.2 (folders), §2.3 (container criterion), §2.5 (names), §2.6 (block to React), §8 (route groups).
 * --check: print the counts and the name collisions, write nothing.
 */
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

const ROOT = process.cwd();
const APP = path.join(ROOT, "app");
const SRC = path.join(APP, "src");
const require = createRequire(path.join(APP, "package.json"));
const ts = require("typescript");
const CHECK = process.argv.includes("--check");
const OUT = path.join(APP, "docs/refactor/move-map.csv");
const DECISIONS = JSON.parse(
  fs.readFileSync(
    path.join(ROOT, "migration/tools/refactor/move-map.decisions.json"),
    "utf8",
  ),
);

// ---------------------------------------------------------------- route groups (plan v2 §8)
const GROUPS = {
  P2: ["HouseholdDetails"],
  "P6-G1":
    "Login Splash PINRegister PINUnlock PINChange PINBiometricsMenu AcceptPendingPolicies Menu TermsAndPoliciesMenu Profile",
  "P6-G2":
    "ContactUsMenu ContactUsDetails ContactByEmailMember ContactByEmailOneSchoolGlobal ContactByEmailLDMCoordinator ContactByEmailOrbitHelpdesk ContactByEmailOrbitHost EmailContact EmailTarget",
  "P6-G3":
    "HomeFeed FeedItemDetail Updates_SingleList Services Search Notifications MessageList MessageDetail",
  "P6-G4":
    "BrowseCountries BrowseDirectory CountryList CountryDetails HouseholdCarousel Household_Relations Locality_Details OneSchoolGlobalDetails Photobook SupperMeeting_Carousel SupperMeeting_Details CommunityBusinessDetails_CoomingSoon Assemble_BrowseByCountry",
  "P6-G5":
    "OrbitLanding OrbitAdminLanding OrbitAdminEventDetail EventDetail EventBooklet MilestoneDetail GuestArrangements HelpersDetail HostSurvey TransportDetail MyEntertaining LDM_MyEvents_V2 LDM_EventDetail_V2 LDM_Email_V2 AssembleEvents AssembleDetail",
  "P6-G6":
    "MyBookmarks BookmarksByGroup Notes ConnectShare LegacyShareObject QRCodeGenerate ViewDocuments",
};
const GROUP_ORDER = ["P6-G1", "P6-G2", "P6-G3", "P6-G4", "P6-G5", "P6-G6"];
const groupOf = new Map();
for (const [g, list] of Object.entries(GROUPS))
  for (const r of Array.isArray(list) ? list : list.split(" "))
    groupOf.set(r, g);

// ---------------------------------------------------------------- import scan (same rules as measure.mjs)
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
const fileSet = new Set(all);
function resolveSpec(from, spec) {
  if (!spec.startsWith(".")) return null;
  const base = path.resolve(path.dirname(from), spec);
  for (const c of [
    base,
    base + ".ts",
    base + ".tsx",
    path.join(base, "index.ts"),
    path.join(base, "index.tsx"),
  ])
    if (fileSet.has(c) && fs.statSync(c).isFile()) return c;
  return null;
}
const imports = new Map();
for (const f of all.filter(
  (x) => /\.(ts|tsx)$/.test(x) && !x.endsWith(".d.ts"),
)) {
  const sf = ts.createSourceFile(
    f,
    fs.readFileSync(f, "utf8"),
    ts.ScriptTarget.Latest,
    true,
    f.endsWith("x") ? ts.ScriptKind.TSX : ts.ScriptKind.TS,
  );
  const set = new Set();
  const visit = (n) => {
    if (
      (ts.isImportDeclaration(n) || ts.isExportDeclaration(n)) &&
      n.moduleSpecifier &&
      ts.isStringLiteral(n.moduleSpecifier) &&
      !(ts.isImportDeclaration(n) && n.importClause?.isTypeOnly)
    ) {
      const r = resolveSpec(f, n.moduleSpecifier.text);
      if (r) set.add(r);
    } else if (
      ts.isCallExpression(n) &&
      n.expression.kind === ts.SyntaxKind.ImportKeyword &&
      n.arguments[0] &&
      ts.isStringLiteralLike(n.arguments[0])
    ) {
      const r = resolveSpec(f, n.arguments[0].text);
      if (r) set.add(r);
    }
    ts.forEachChild(n, visit);
  };
  visit(sf);
  imports.set(f, set);
}

/** Unit id of a file: "<Module>/<Block>" for shared blocks, "<Screen>/<ScreenBlock_X>" for screen blocks. */
function unitOf(f) {
  const r = rel(f);
  let m = r.match(/^shared\/([^/]+)\/([^/]+)\/.+/);
  if (m && m[2] !== "lib") return `${m[1]}/${m[2]}`;
  m = r.match(/^screens\/([^/]+)\/components\/(ScreenBlock_[^/.]+)\.tsx?$/);
  if (m) return `${m[1]}/${m[2]}`;
  return null;
}

/** Route sets per unit: `all` follows every import (= inventory.csv routes_transitive); `screens` does not enter
    src/shell/, so it shows the routes that use the block through their own code. */
const screens = fs
  .readdirSync(path.join(SRC, "screens"), { withFileTypes: true })
  .filter(
    (e) =>
      e.isDirectory() &&
      fs.existsSync(path.join(SRC, "screens", e.name, "index.tsx")),
  )
  .map((e) => e.name)
  .sort();
/* `noHD` also stops at HouseholdDetails_Block: P2 moves that block and its tree, so a block that a route reaches only
   through it (Profile preview, the carousels) belongs to P2, not to the group of that route. */
const HD_BLOCK = "shared/UBTConnect/HouseholdDetails_Block/";
const unitRoutes = { all: new Map(), screens: new Map(), noHD: new Map() };
for (const mode of ["all", "screens", "noHD"]) {
  for (const s of screens) {
    const seen = new Set();
    const stack = [path.join(SRC, "screens", s, "index.tsx")];
    while (stack.length) {
      const f = stack.pop();
      if (seen.has(f) || !fileSet.has(f)) continue;
      if (mode !== "all" && rel(f).startsWith("shell/")) continue;
      if (mode === "noHD" && rel(f).startsWith(HD_BLOCK)) continue;
      seen.add(f);
      for (const i of imports.get(f) ?? [])
        if (!isTest(i) && !isStory(i)) stack.push(i);
    }
    for (const f of seen) {
      const u = unitOf(f);
      if (!u) continue;
      if (!unitRoutes[mode].has(u)) unitRoutes[mode].set(u, new Set());
      unitRoutes[mode].get(u).add(s);
    }
  }
}

const dumpArg = process.argv.indexOf("--dump");
if (dumpArg > 0) {
  // --dump <file>: route sets by own code per unit, as JSON (review aid).
  const o = {};
  for (const [u, set] of unitRoutes.screens) o[u] = [...set].sort();
  fs.writeFileSync(process.argv[dumpArg + 1], JSON.stringify(o, null, 1));
}

// ---------------------------------------------------------------- inventory and origins
function parseCsv(text) {
  const rows = [];
  let row = [],
    cell = "",
    q = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (q) {
      if (c === '"' && text[i + 1] === '"') ((cell += '"'), i++);
      else if (c === '"') q = false;
      else cell += c;
    } else if (c === '"') q = true;
    else if (c === ",") (row.push(cell), (cell = ""));
    else if (c === "\n")
      (row.push(cell), rows.push(row), (row = []), (cell = ""));
    else cell += c;
  }
  if (cell || row.length) (row.push(cell), rows.push(row));
  const [h, ...rest] = rows;
  return rest.map((r) => Object.fromEntries(h.map((k, i) => [k, r[i] ?? ""])));
}
const inventory = parseCsv(
  fs.readFileSync(path.join(APP, "docs/refactor/inventory.csv"), "utf8"),
);

/** The OutSystems tag of a file: `// @os-block <name>` (migration) or the JSDoc tag `@origin <name>` (refactor, R4). */
const ORIGIN_TAG = /^\/\/ @os-block (\S+)|@origin\s+(\w+(?:\.\w+)+)/m;

/** The OutSystems name of a block, from the tag in its files. When the source path is gone (moved or merged), the
    file at the target path gives it. */
function originOfBlock(inv, target) {
  for (const rel of [inv.path, target]) {
    if (!rel) continue;
    const p = path.join(APP, rel);
    if (!fs.existsSync(p)) continue;
    const files = fs.statSync(p).isDirectory()
      ? [path.join(p, `${inv.name}.tsx`), ...walk(p)]
      : [p];
    for (const f of files) {
      if (!fs.existsSync(f) || !/\.tsx?$/.test(f) || isTest(f) || isStory(f))
        continue;
      const m = fs.readFileSync(f, "utf8").match(ORIGIN_TAG);
      if (m) return m[1] ?? m[2];
    }
  }
  return "";
}
const survey = JSON.parse(
  fs.readFileSync(path.join(ROOT, "migration/survey/screens.json"), "utf8"),
);
const screenOrigin = new Map();
for (const s of Object.values(survey.screens))
  if (!screenOrigin.has(s.screen))
    screenOrigin.set(s.screen, `${s.module}.${s.flow}.${s.screen}`);

// ---------------------------------------------------------------- default rules
/** Business name (§2.5): no module prefix, PascalCase. Decisions can set `name`. */
function bizName(name) {
  let n = name
    .replace(/^(ScreenBlock_|Block_|UBT_|NC_|App_|CommonUI_)/, "")
    .replace(/__UpdatedOSUI$/, "");
  return n
    .split(/_+/)
    .filter(Boolean)
    .map((p) => p[0].toUpperCase() + p.slice(1))
    .join("");
}
const firstGroup = (routes) => {
  const gs = [...routes].map((r) => groupOf.get(r)).filter(Boolean);
  for (const g of GROUP_ORDER) if (gs.includes(g)) return g;
  return gs.includes("P2") ? "P2" : "";
};
const hasState = (inv) =>
  inv.call_action !== "" ||
  inv.use_view_state === "true" ||
  inv.use_memory_cache === "true" ||
  inv.use_client_vars === "true" ||
  inv.use_flags === "true";

/**
 * Defaults, then the decision of the block. A decision has these optional fields:
 *   name      business name (§2.5); default bizName()
 *   kind      "ui" (components/ui, P7), "layout" (components/layout), "page" (pages/<R>/components of the one route)
 *   domain    components/<domain>/
 *   shape, target, phase, notes, origin   explicit values; they win over the defaults
 *   merge     true when the target is shared with another row on purpose (a merge); skips the name check
 * A shared block keeps its folder (tests, stories, mocks.ts, README, __captures__): target = <folder>/<Name>/<Name>.tsx.
 * A ScreenBlock file is one file: target = pages/<R>/components/<Name>.tsx.
 */
function defaults(inv, routesScreens, routesNoHD) {
  const d = DECISIONS.blocks[`${inv.module_or_screen}/${inv.name}`] ?? {};
  const name = d.name ?? bizName(inv.name);
  const n = routesScreens.size;
  const state = hasState(inv) ? "hook+component" : "component";
  const noHD = new Set([...routesNoHD].filter((r) => r !== "HouseholdDetails"));
  const phase = firstGroup(noHD) || (routesScreens.size ? "P2" : "") || "P6-G1";
  const out = { name, shape: state, phase };
  const inFolder = (dir) => `src/${dir}/${name}/${name}.tsx`;
  if (inv.kind === "screen-block") {
    const r = inv.module_or_screen;
    out.shape =
      hasState(inv) || Number(inv.lines) > 150 ? "hook+component" : "component";
    out.target = `src/pages/${r}/components/${name}.tsx`;
    out.phase = groupOf.get(r) ?? "";
    if (out.shape === "hook+component")
      out.notes = `hook: pages/${r}/hooks/use${name.replace(/View$/, "")}.ts`;
  } else if (/^DEPRECATED_/.test(inv.name)) {
    Object.assign(out, { shape: "delete", target: "", phase: "P7" });
  } else if (d.kind === "ui" || (inv.module_or_screen === "osui" && !d.kind)) {
    Object.assign(out, {
      shape: "ui",
      target: inFolder("components/ui"),
      phase: "P7",
    });
  } else if (d.kind === "layout") {
    Object.assign(out, {
      shape: "layout",
      target: inFolder("components/layout"),
    });
  } else if (d.domain) {
    out.target = inFolder(`components/${d.domain}`);
  } else if (n === 0 && Number(inv.routes_transitive) === 0) {
    Object.assign(out, { shape: "delete", target: "", phase: "P7" });
    out.notes = "no importer outside its tests and stories; confirm with knip";
  } else if (n === 1 || d.kind === "page") {
    const r = [...routesScreens][0];
    out.target = inFolder(`pages/${r}/components`);
    out.phase = groupOf.get(r) ?? "";
  } else {
    out.target = inFolder("components/REVIEW");
  }
  for (const k of ["shape", "target", "phase", "notes"])
    if (d[k] !== undefined) out[k] = d[k];
  out.origin = d.origin;
  out.merge = d.merge === true;
  return out;
}

// ---------------------------------------------------------------- rows
const rows = [];
for (const inv of inventory) {
  const id = `${inv.module_or_screen}/${inv.name}`;
  const rAll = unitRoutes.all.get(id) ?? new Set();
  const rScr = unitRoutes.screens.get(id) ?? new Set();
  if (rAll.size !== Number(inv.routes_transitive))
    console.warn(
      `route count differs for ${id}: ${rAll.size} vs ${inv.routes_transitive}`,
    );
  const rNoHD = unitRoutes.noHD.get(id) ?? new Set();
  const d = defaults(inv, rScr, rNoHD);
  const notes = [];
  const byAllPaths = firstGroup(rScr);
  const explicit = DECISIONS.blocks[id]?.phase !== undefined;
  if (rScr.size && byAllPaths !== d.phase && d.phase === "P2" && !explicit)
    notes.push(
      "routes reach it only through HouseholdDetails_Block: moves with P2",
    );
  else if (rScr.size && byAllPaths !== d.phase && d.phase.startsWith("P6"))
    notes.push(
      `phase without the HouseholdDetails_Block path (with it: ${byAllPaths})`,
    );
  if (rScr.size !== rAll.size)
    notes.push(
      `${rScr.size} route(s) by own code, ${rAll.size} with src/shell/ (lock dialog)`,
    );
  if (rScr.size >= 2 && rScr.size <= 4)
    notes.push(`routes: ${[...rScr].sort().join(" ")}`);
  if (d.notes) notes.push(d.notes);
  rows.push({
    merge: d.merge,
    source: inv.path,
    origin: d.origin || originOfBlock(inv, d.target),
    shape: d.shape,
    target: d.target,
    phase: d.phase,
    routes: inv.routes_transitive,
    status: "",
    notes: notes.join("; "),
  });
}
for (const s of screens) {
  const d = DECISIONS.screens?.[s] ?? {};
  rows.push({
    source: `src/screens/${s}/index.tsx`,
    origin: screenOrigin.get(s) ?? "",
    shape: "page",
    target: `src/pages/${s}/${s}Page.tsx`,
    phase: groupOf.get(s) ?? "",
    routes: "1",
    status: "",
    notes: [
      "the folder moves with it (api.ts, types.ts, mocks.ts, components/)",
      d.notes,
    ]
      .filter(Boolean)
      .join("; "),
  });
}

// ---------------------------------------------------------------- checks
const problems = [];
const byTarget = new Map();
for (const r of rows) {
  if (!r.target || r.merge) continue;
  const base = path.basename(r.target);
  if (!byTarget.has(base)) byTarget.set(base, []);
  byTarget.get(base).push(r.source);
}
for (const [b, list] of byTarget)
  if (list.length > 1) problems.push(`name collision ${b}: ${list.join(", ")}`);
for (const r of rows) {
  if (!r.shape) problems.push(`no shape: ${r.source}`);
  if (!r.phase) problems.push(`no phase: ${r.source}`);
  if (r.target.includes("REVIEW")) problems.push(`no domain: ${r.source}`);
  if (!r.origin) problems.push(`no origin: ${r.source}`);
}
const count = (k) =>
  Object.entries(
    rows.reduce((a, r) => ((a[r[k]] = (a[r[k]] ?? 0) + 1), a), {}),
  ).sort();
console.log(
  `rows: ${rows.length} (${inventory.length} blocks + ${screens.length} screens)`,
);
console.log("shape:", JSON.stringify(Object.fromEntries(count("shape"))));
console.log("phase:", JSON.stringify(Object.fromEntries(count("phase"))));
for (const p of problems) console.log("PROBLEM", p);

if (!CHECK) {
  const cols = [
    "source",
    "origin",
    "shape",
    "target",
    "phase",
    "routes",
    "status",
    "notes",
  ];
  const cell = (v) => {
    const s = String(v ?? "");
    return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  };
  fs.writeFileSync(
    OUT,
    [
      cols.join(","),
      ...rows.map((r) => cols.map((c) => cell(r[c])).join(",")),
    ].join("\n") + "\n",
  );
  console.log(`wrote ${path.relative(ROOT, OUT)}`);
}
process.exitCode = problems.length ? 1 : 0;

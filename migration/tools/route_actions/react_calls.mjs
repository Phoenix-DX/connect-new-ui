// React side of the route check: what code runs for a route, and which endpoints and functions it reaches.
//
// Usage (from the project root):
//   node migration/tools/route_actions/react_calls.mjs shell            → migration/route-actions/data/react-shell.json
//   node migration/tools/route_actions/react_calls.mjs page <Route>     → migration/route-actions/data/react-<Route>.json
//
// Method (static, TypeScript AST and type checker through ts-morph from app/node_modules):
// 1. File closure: static imports (not `import type`), re-exports and dynamic `import('…')` from the entry.
//    Excluded: tests, stories, src/test/, src/mocks/ (MSW engine). The shell closure stops at the lazy page glob
//    (app/screens.ts uses import.meta.glob, which is not followed).
// 2. Reachability by declaration: each top-level declaration is a unit. A unit reaches the units whose names it uses
//    at run time (type positions skipped). Roots: the module top-level code of every closure file, plus the entry
//    (shell: src/main.tsx; page: the default export of pages/<R>/<R>Page.tsx).
// 3. In the reached units: every callAction(module, action) call, the declared function names, and the @origin tags.
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../../..');
const APP = path.join(ROOT, 'app');
const SRC = path.join(APP, 'src');
const require = createRequire(path.join(APP, 'package.json'));
const { Project, Node, SyntaxKind } = require('ts-morph');

const [mode, route] = process.argv.slice(2);
if (!['shell', 'page', 'all'].includes(mode) || (mode === 'page' && !route)) {
  console.error('usage: react_calls.mjs shell | page <Route> | all');
  process.exit(2);
}

const project = new Project({ tsConfigFilePath: path.join(APP, 'tsconfig.json') });
const rel = (f) => path.relative(ROOT, f);
const excluded = (f) =>
  !f.startsWith(SRC) ||
  /\.(test|stories)\.tsx?$/.test(f) ||
  f.startsWith(path.join(SRC, 'test') + path.sep) ||
  f.startsWith(path.join(SRC, 'mocks') + path.sep) ||
  f.endsWith('.d.ts');

function resolveSpecifier(fromFile, spec) {
  let base;
  if (spec.startsWith('@/')) base = path.join(SRC, spec.slice(2));
  else if (spec.startsWith('.')) base = path.resolve(path.dirname(fromFile), spec);
  else return null;
  for (const ext of ['', '.ts', '.tsx', '/index.ts', '/index.tsx']) {
    const f = base + ext;
    if (fs.existsSync(f) && fs.statSync(f).isFile()) return f;
  }
  return null;
}

function closure(entries) {
  const seen = new Set();
  const todo = [...entries];
  while (todo.length) {
    const f = todo.pop();
    if (seen.has(f) || excluded(f)) continue;
    seen.add(f);
    const sf = project.getSourceFile(f);
    if (!sf) continue;
    const specs = [];
    for (const d of sf.getImportDeclarations()) if (!d.isTypeOnly()) specs.push(d.getModuleSpecifierValue());
    for (const d of sf.getExportDeclarations()) if (!d.isTypeOnly() && d.getModuleSpecifierValue()) specs.push(d.getModuleSpecifierValue());
    for (const c of sf.getDescendantsOfKind(SyntaxKind.CallExpression)) {
      if (c.getExpression().getKind() === SyntaxKind.ImportKeyword) {
        const a = c.getArguments()[0];
        if (a && Node.isStringLiteral(a)) specs.push(a.getLiteralValue());
      }
    }
    for (const s of specs) {
      const r = resolveSpecifier(f, s);
      if (r && !seen.has(r)) todo.push(r);
    }
  }
  return seen;
}

// ---- units -------------------------------------------------------------------------------------------------
function unitsOf(sf) {
  const units = []; // {name, node}
  for (const st of sf.getStatements()) {
    if (Node.isImportDeclaration(st) || Node.isExportDeclaration(st)) continue;
    if (Node.isInterfaceDeclaration(st) || Node.isTypeAliasDeclaration(st)) continue;
    if (Node.isFunctionDeclaration(st) || Node.isClassDeclaration(st) || Node.isEnumDeclaration(st)) {
      units.push({ name: st.getName() ?? (st.isDefaultExport?.() ? 'default' : '#anon'), node: st, isDefault: !!st.isDefaultExport?.() });
    } else if (Node.isVariableStatement(st)) {
      for (const d of st.getDeclarations()) units.push({ name: d.getName(), node: d });
    } else if (Node.isExportAssignment(st)) {
      units.push({ name: 'default', node: st, isDefault: true });
    } else {
      units.push({ name: '#top', node: st, top: true });
    }
  }
  return units;
}

function topUnitKey(declNode, files) {
  const sf = declNode.getSourceFile();
  const f = sf.getFilePath();
  if (!files.has(f)) return null;
  let n = declNode;
  while (n.getParent() && !Node.isSourceFile(n.getParent())) n = n.getParent();
  if (Node.isVariableStatement(n)) {
    const vd = declNode.getFirstAncestorByKind?.(SyntaxKind.VariableDeclaration) ??
      (Node.isVariableDeclaration(declNode) ? declNode : null);
    const name = vd ? vd.getName() : n.getDeclarations()[0]?.getName();
    return `${f}::${name}`;
  }
  if (Node.isFunctionDeclaration(n) || Node.isClassDeclaration(n) || Node.isEnumDeclaration(n)) {
    return `${f}::${n.getName() ?? (n.isDefaultExport?.() ? 'default' : '#anon')}`;
  }
  if (Node.isExportAssignment(n)) return `${f}::default`;
  if (Node.isInterfaceDeclaration(n) || Node.isTypeAliasDeclaration(n) || Node.isImportDeclaration(n)) return null;
  return `${f}::#top`;
}

function inTypePosition(id) {
  for (let p = id.getParent(); p; p = p.getParent()) {
    if (Node.isTypeNode(p) || Node.isInterfaceDeclaration(p) || Node.isTypeAliasDeclaration(p)) return true;
    if (Node.isStatement(p) || Node.isSourceFile(p)) return false;
  }
  return false;
}

function reach(files, rootKeys) {
  const units = new Map(); // key -> {name,node,file}
  for (const f of files) {
    const sf = project.getSourceFile(f);
    if (!sf) continue;
    for (const u of unitsOf(sf)) {
      const key = `${f}::${u.name}`;
      const prev = units.get(key);
      if (prev) prev.nodes.push(u.node);
      else units.set(key, { ...u, file: f, nodes: [u.node] });
    }
  }
  const reached = new Set();
  const todo = rootKeys.filter((k) => units.has(k));
  for (const f of files) if (units.has(`${f}::#top`)) todo.push(`${f}::#top`);
  while (todo.length) {
    const k = todo.pop();
    if (reached.has(k)) continue;
    reached.add(k);
    const u = units.get(k);
    for (const node of u.nodes) {
      for (const id of node.getDescendantsOfKind(SyntaxKind.Identifier)) {
        if (inTypePosition(id)) continue;
        let sym = id.getSymbol();
        if (!sym) continue;
        if (sym.isAlias()) sym = sym.getAliasedSymbol() ?? sym;
        for (const d of sym.getDeclarations()) {
          const tk = topUnitKey(d, files);
          if (tk && tk !== k && units.has(tk) && !reached.has(tk)) todo.push(tk);
        }
      }
    }
  }
  return { units, reached };
}

// ---- facts in reached units -----------------------------------------------------------------------------------
function literalOf(expr) {
  if (!expr) return null;
  if (Node.isStringLiteral(expr) || Node.isNoSubstitutionTemplateLiteral(expr)) return expr.getLiteralValue();
  const t = expr.getType();
  if (t.isStringLiteral()) return t.getLiteralValue();
  const sym = expr.getSymbol?.();
  const d = sym?.getAliasedSymbol?.()?.getDeclarations?.()[0] ?? sym?.getDeclarations?.()[0];
  if (d && Node.isVariableDeclaration(d)) {
    const init = d.getInitializer();
    if (init && (Node.isStringLiteral(init) || Node.isNoSubstitutionTemplateLiteral(init))) return init.getLiteralValue();
  }
  return null;
}

const ROUTE_NAMES = new Set(
  [...fs.readFileSync(path.join(SRC, 'app', 'routes.generated.ts'), 'utf8').matchAll(/"screen": "(\w+)"/g)].map((m) => m[1]),
);

function innerFunctionNames(node) {
  const names = new Set();
  for (const d of node.getDescendants()) {
    if (Node.isFunctionDeclaration(d) || Node.isMethodDeclaration(d)) {
      if (d.getName()) names.add(d.getName());
    } else if (Node.isVariableDeclaration(d) || Node.isPropertyAssignment(d)) {
      const init = d.getInitializer?.();
      if (init && (Node.isArrowFunction(init) || Node.isFunctionExpression(init) || Node.isCallExpression(init))) {
        const n = d.getName?.();
        if (n && /^[A-Za-z_$][\w$]*$/.test(n)) names.add(n);
      }
    }
  }
  return names;
}

// Navigation targets: a path literal that ends in a route name (`/${APP_ID}/Search`), or a string that is exactly a
// route name (`go('OrbitLanding')`). The generated route tables list every route, so they are skipped.
function navTargets(node, file) {
  const out = [];
  if (/routes(\.css)?\.generated\.ts$/.test(file)) return out;
  for (const lit of node.getDescendants()) {
    if (!(Node.isStringLiteral(lit) || Node.isNoSubstitutionTemplateLiteral(lit) || Node.isTemplateExpression(lit))) continue;
    if (lit.getParent() && Node.isTemplateSpan(lit.getParent())) continue;
    const text = lit.getText();
    const exact = (Node.isStringLiteral(lit) || Node.isNoSubstitutionTemplateLiteral(lit)) ? lit.getLiteralValue() : null;
    if (exact && ROUTE_NAMES.has(exact)) {
      out.push({ to: exact, file: rel(file), line: lit.getStartLineNumber(), how: 'name' });
      continue;
    }
    for (const m of text.matchAll(/\/([A-Za-z][\w]*)(?=[`'"?/#]|$)/g)) {
      if (ROUTE_NAMES.has(m[1])) out.push({ to: m[1], file: rel(file), line: lit.getStartLineNumber(), how: 'path' });
    }
  }
  return out;
}

function facts(units, reached) {
  const calls = [];
  const functions = new Set();
  const origins = [];
  const filesReached = new Set();
  const fileFunctions = {};
  const navigations = [];
  for (const k of reached) {
    const u = units.get(k);
    filesReached.add(u.file);
    for (const node of u.nodes) {
      const ff = (fileFunctions[rel(u.file)] ??= new Set());
      if (!u.top) ff.add(u.name);
      for (const n of innerFunctionNames(node)) ff.add(n);
      navigations.push(...navTargets(node, u.file));
      if (!u.top) {
        const init = Node.isVariableDeclaration(node) ? node.getInitializer() : null;
        if (Node.isFunctionDeclaration(node) || (init && (Node.isArrowFunction(init) || Node.isFunctionExpression(init)))) functions.add(u.name);
      }
      for (const c of node.getDescendantsOfKind(SyntaxKind.CallExpression)) {
        const e = c.getExpression();
        if (!Node.isIdentifier(e) || e.getText() !== 'callAction') continue;
        const [m, a] = c.getArguments();
        const module = literalOf(m);
        const action = literalOf(a);
        const fn = c.getFirstAncestor((x) => Node.isFunctionDeclaration(x) || (Node.isVariableDeclaration(x) && x.getParent()?.getParent()?.getParent() && Node.isSourceFile(x.getParent().getParent().getParent())));
        calls.push({
          module, action,
          apiPath: module && action ? `/api/${module}/${action}` : null,
          file: rel(u.file), line: c.getStartLineNumber(),
          fn: fn?.getName?.() ?? u.name,
        });
      }
    }
  }
  for (const f of filesReached) {
    const text = project.getSourceFile(f).getFullText();
    for (const m of text.matchAll(/@(origin|os-block)\s+([\w.]+)/g)) origins.push({ origin: m[2], tag: m[1], file: rel(f) });
  }
  return {
    calls, functions: [...functions].sort(), origins, files: [...filesReached].map(rel).sort(), navigations,
    fileFunctions: Object.fromEntries(Object.entries(fileFunctions).map(([f, s]) => [f, [...s].sort()])),
  };
}

// ---- main ----------------------------------------------------------------------------------------------------
const outDir = path.join(ROOT, 'migration', 'route-actions', 'data');
fs.mkdirSync(outDir, { recursive: true });
let entry, rootKeys, out;
if (mode === 'all') {
  // every callAction site and every origin tag in app/src (tests, stories, src/test and src/mocks excluded), with no
  // reachability: used to tell "no React code" from "React code that this route does not reach"
  const calls = [];
  const origins = [];
  for (const sf of project.getSourceFiles()) {
    const f = sf.getFilePath();
    if (excluded(f)) continue;
    for (const m of sf.getFullText().matchAll(/@(origin|os-block)\s+([\w.]+)/g)) origins.push({ origin: m[2], tag: m[1], file: rel(f) });
    for (const c of sf.getDescendantsOfKind(SyntaxKind.CallExpression)) {
      const e = c.getExpression();
      if (!Node.isIdentifier(e) || e.getText() !== 'callAction') continue;
      const [m, a] = c.getArguments();
      const module = literalOf(m);
      const action = literalOf(a);
      const fn = c.getFirstAncestor((x) => Node.isFunctionDeclaration(x)) ??
        c.getFirstAncestor((x) => Node.isVariableDeclaration(x) && Node.isSourceFile(x.getParent()?.getParent()?.getParent()));
      calls.push({ module, action, apiPath: module && action ? `/api/${module}/${action}` : null, file: rel(f),
        line: c.getStartLineNumber(), fn: fn?.getName?.() ?? '?' });
    }
  }
  out = { mode, calls, origins };
  fs.writeFileSync(path.join(outDir, 'react-all.json'), JSON.stringify(out, null, 1));
  console.log(`all: ${calls.length} callAction sites, ${origins.length} origin tags`);
  process.exit(0);
} else if (mode === 'shell') {
  entry = path.join(SRC, 'main.tsx');
  const files = closure([entry]);
  const sf = project.getSourceFile(entry);
  rootKeys = unitsOf(sf).map((u) => `${entry}::${u.name}`);
  const { units, reached } = reach(files, rootKeys);
  out = { mode, entry: rel(entry), closureFiles: files.size, reachedUnits: reached.size, ...facts(units, reached),
    reachedKeys: [...reached].map((k) => rel(k)) };
  fs.writeFileSync(path.join(outDir, 'react-shell.json'), JSON.stringify(out, null, 1));
} else {
  entry = path.join(SRC, 'pages', route, `${route}Page.tsx`);
  if (!fs.existsSync(entry)) { console.error(`no page: ${rel(entry)}`); process.exit(3); }
  const files = closure([entry]);
  rootKeys = [`${entry}::default`];
  const sf = project.getSourceFile(entry);
  for (const u of unitsOf(sf)) if (u.isDefault) rootKeys.push(`${entry}::${u.name}`);
  const { units, reached } = reach(files, rootKeys);
  out = { mode, route, entry: rel(entry), closureFiles: files.size, reachedUnits: reached.size, ...facts(units, reached),
    reachedKeys: [...reached].map((k) => rel(k)) };
  fs.writeFileSync(path.join(outDir, `react-${route}.json`), JSON.stringify(out, null, 1));
}
console.log(`${mode}${route ? ' ' + route : ''}: ${out.closureFiles} files in closure, ${out.reachedUnits} units reached, ${out.calls.length} callAction sites, ${out.functions.length} functions, ${out.origins.length} @origin tags`);

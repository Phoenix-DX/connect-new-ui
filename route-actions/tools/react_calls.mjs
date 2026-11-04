// React side of the route check: what code runs for a route, and which endpoints and functions it reaches.
//
// Usage (from the project root):
//   node route-actions/tools/react_calls.mjs shell            → route-actions/.cache/data/react-shell.json
//   node route-actions/tools/react_calls.mjs page <Route>     → route-actions/.cache/data/react-<Route>.json
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

const HERE = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..'); // route-actions/
const ROOT = path.dirname(HERE);
const CFG = JSON.parse(fs.readFileSync(path.join(HERE, 'config.json'), 'utf8')); // input paths, relative to ROOT
const APP = path.join(ROOT, CFG.react.app);
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
  const users = new Map(); // key -> Set of keys that use it (reverse edges)
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
        // `{ name }`: the identifier names the property; the value is the variable or function `name`
        const sh = id.getParent();
        let sym = Node.isShorthandPropertyAssignment(sh) && sh.getNameNode() === id ? sh.getValueSymbol() : id.getSymbol();
        if (!sym) continue;
        if (sym.isAlias()) sym = sym.getAliasedSymbol() ?? sym;
        for (const d of sym.getDeclarations()) {
          const tk = topUnitKey(d, files);
          if (tk && tk !== k && units.has(tk)) {
            if (!users.has(tk)) users.set(tk, new Set());
            users.get(tk).add(k);
            if (!reached.has(tk)) todo.push(tk);
          }
        }
      }
    }
  }
  return { units, reached, users };
}

// ---- callers: from the unit that calls callAction up to the nearest React components -------------------------
// A component is a PascalCase unit in src/pages, src/containers, src/components or src/app. Hooks and helpers on the
// way are kept in the chain. Breadth first, so the nearest components come first; at most 3.
const UI_DIR = /^app\/src\/(pages|containers|components|app)\//;
const isComponent = (key) => {
  const [f, name] = [key.slice(0, key.lastIndexOf('::')), key.slice(key.lastIndexOf('::') + 2)];
  return UI_DIR.test(rel(f)) && /^[A-Z]/.test(name);
};
function callersOf(start, users, reached) {
  const parent = new Map([[start, null]]);
  const queue = [start];
  const found = [];
  while (queue.length && found.length < 3) {
    const k = queue.shift();
    if (k !== start && isComponent(k)) { found.push(k); continue; }
    for (const u of users.get(k) ?? []) {
      if (!reached.has(u) || parent.has(u) || u.endsWith('::#top')) continue;
      parent.set(u, k);
      queue.push(u);
    }
  }
  return found.map((c) => {
    const chain = [];
    for (let k = c; k; k = parent.get(k)) {
      const i = k.lastIndexOf('::');
      chain.push({ name: k.slice(i + 2), file: rel(k.slice(0, i)) });
    }
    return chain; // component first, the calling function last
  });
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

function facts(units, reached, users) {
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
          callers: users ? callersOf(k, users, reached) : [],
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

// ---- handlers: what each React function does, branch by branch -------------------------------------------------
// For each function of the reached code: its name, file, line, leading comment (the OutSystems names it ports) and
// its effects in order, with the branch label of a `switch` case or an `if (x === Y.Z)` condition. Effects:
// navigation, confirm dialog, message, external link, server call (callAction). Calls to other functions of
// app/src are followed 3 levels deep.
const NAV_FN = /^(navigate|go|osNavigateTo|navigateTo|replaceTo|goTo\w*|navigateBack\w*)$/;
const RUNS_ARG = /^(run|runAwaited|then|catch|finally|setTimeout|queueMicrotask|requestAnimationFrame|flushSync|startTransition)$/;
const ERROR_FN = /^(raiseToFlowHandler|showExceptionMessage|handleError\w*)$/;
const HOME_SCREEN = (fs.readFileSync(path.join(SRC, 'app', 'routes.generated.ts'), 'utf8').match(/export const HOME = "\/\w+\/(\w+)"/) || [])[1];

function labelOfExpr(e) {
  if (!e) return null;
  if (Node.isStringLiteral(e) || Node.isNoSubstitutionTemplateLiteral(e)) return e.getLiteralValue();
  if (Node.isPropertyAccessExpression(e)) return e.getName();
  if (Node.isIdentifier(e)) return e.getText();
  return null;
}

function isConstName(e) {
  // an identifier of a `const` with a string or number literal initializer (a named constant)
  if (!Node.isIdentifier(e)) return false;
  let sym = e.getSymbol?.();
  if (sym?.isAlias()) sym = sym.getAliasedSymbol() ?? sym;
  const d = sym?.getDeclarations()?.[0];
  if (!d || !Node.isVariableDeclaration(d) || d.getVariableStatement?.()?.getDeclarationKind() !== 'const') return false;
  const init = d.getInitializer();
  return !!init && (Node.isStringLiteral(init) || Node.isNumericLiteral(init) || Node.isNoSubstitutionTemplateLiteral(init));
}

function condLabel(cond) {
  // is(S.Orbit) / isItem('Home'): a call with one constant argument
  for (const c of [cond, ...cond.getDescendantsOfKind(SyntaxKind.CallExpression)]) {
    if (!Node.isCallExpression(c)) continue;
    const args = c.getArguments();
    if (args.length === 1 && (Node.isPropertyAccessExpression(args[0]) || Node.isStringLiteral(args[0]))) return labelOfExpr(args[0]);
  }
  for (const b of [cond, ...cond.getDescendantsOfKind(SyntaxKind.BinaryExpression)]) {
    if (!Node.isBinaryExpression(b)) continue;
    const op = b.getOperatorToken().getKind();
    if (op !== SyntaxKind.EqualsEqualsEqualsToken && op !== SyntaxKind.EqualsEqualsToken) continue;
    const r = b.getRight();
    if (Node.isPropertyAccessExpression(r) || Node.isStringLiteral(r) || isConstName(r)) return labelOfExpr(r);
  }
  return null;
}

function constText(n, depth = 0) {
  // the text of an argument, with each identifier or property access replaced by its constant initializer
  let t = n.getText();
  if (depth > 2) return t;
  for (const x of [n, ...n.getDescendants()]) {
    if (!(Node.isIdentifier(x) || Node.isPropertyAccessExpression(x))) continue;
    let sym = (Node.isPropertyAccessExpression(x) ? x.getNameNode() : x).getSymbol?.();
    if (sym?.isAlias()) sym = sym.getAliasedSymbol() ?? sym;
    const d = sym?.getDeclarations()?.[0];
    const init = d && (Node.isVariableDeclaration(d) || Node.isPropertyAssignment(d)) ? d.getInitializer() : null;
    if (init && (Node.isStringLiteral(init) || Node.isNoSubstitutionTemplateLiteral(init) || Node.isTemplateExpression(init)))
      t += ' ' + constText(init, depth + 1);
  }
  return t;
}

function navTargetsOf(arg) {
  if (!arg) return [];
  const t = constText(arg);
  const out = [];
  if (/\bPATHS\.home\b|\bHOME\b/.test(t)) out.push(HOME_SCREEN);
  for (const m of t.matchAll(/\/([A-Za-z]\w*)(?=[`'"?/#]|$)/g)) if (ROUTE_NAMES.has(m[1])) out.push(m[1]);
  for (const m of t.matchAll(/['"`]([A-Za-z]\w*)['"`]/g)) if (ROUTE_NAMES.has(m[1])) out.push(m[1]);
  if (!out.length && Node.isPropertyAccessExpression(arg) && Node.isIdentifier(arg.getExpression())) {
    // `navigate(target.path)` with `const target = f(…)`: the route paths in the returns of f
    let sym = arg.getExpression().getSymbol?.();
    if (sym?.isAlias()) sym = sym.getAliasedSymbol() ?? sym;
    const vd = sym?.getDeclarations()?.[0];
    const init = vd && Node.isVariableDeclaration(vd) ? vd.getInitializer() : null;
    if (init && Node.isCallExpression(init)) {
      let fs = init.getExpression().getSymbol?.();
      if (fs?.isAlias()) fs = fs.getAliasedSymbol() ?? fs;
      const fd = fs?.getDeclarations()?.[0];
      const body = fd && !excluded(fd.getSourceFile().getFilePath()) ? bodyOfDecl(fd) : null;
      if (body) {
        for (const ret of body.getDescendantsOfKind(SyntaxKind.ReturnStatement)) {
          const e = ret.getExpression();
          if (!e || !Node.isObjectLiteralExpression(e)) continue;
          const p = e.getProperty(arg.getName());
          const v = p && Node.isPropertyAssignment(p) ? p.getInitializer() : null;
          if (v) out.push(...navTargetsOf(v));
        }
      }
    }
  }
  return [...new Set(out)];
}

function isFunctionLike(n) {
  return Node.isFunctionDeclaration(n) || Node.isArrowFunction(n) || Node.isFunctionExpression(n) || Node.isMethodDeclaration(n);
}

function bodyOfDecl(d) {
  if (isFunctionLike(d)) return d;
  if (Node.isVariableDeclaration(d) || Node.isPropertyAssignment(d)) {
    const init = d.getInitializer?.();
    if (init && isFunctionLike(init)) return init;
    // a function in a wrapper that returns it to run: `flow.own(fn)`, `useCallback(fn, deps)`
    if (init && Node.isCallExpression(init) && /(^|\.)(own|useCallback|useEvent|useEffectEvent)$/.test(init.getExpression().getText())) {
      const a = init.getArguments()[0];
      if (a && isFunctionLike(a)) return a;
    }
  }
  return null;
}

// The closure of a function that a hook returns: the hook function and the call of the hook. A callback that the code
// takes from a hook parameter (`events.onX()`, `useRef(events).current.onX?.()`, `{ onX }` of the parameter) is the
// argument at that call.
const ENV = new Map();

function envResolve(ex, env) {
  if (!env) return null;
  const declOf = (n) => {
    let sym = n.getSymbol?.();
    if (sym?.isAlias()) sym = sym.getAliasedSymbol() ?? sym;
    return sym?.getDeclarations()?.[0];
  };
  // the argument of a parameter at the call of its function (the nearest env of that function); an argument that is
  // itself a parameter of the caller is resolved again one env up
  const paramArg = (decl, e = env, hops = 0) => {
    const prm = decl && (Node.isParameterDeclaration(decl) ? decl : decl.getFirstAncestorByKind?.(SyntaxKind.Parameter));
    if (!prm || hops > 6) return null;
    let x = e;
    while (x && prm.getParent() !== x.hookFn) x = x.parent;
    if (!x) return null;
    const arg = x.call.getArguments()[x.hookFn.getParameters().indexOf(prm)] ?? null;
    if (arg && Node.isIdentifier(arg)) {
      const ad = declOf(arg);
      if (ad && Node.isParameterDeclaration(ad)) return paramArg(ad, x.parent, hops + 1);
    }
    return arg;
  };
  let arg = null, prop = null;
  if (Node.isPropertyAccessExpression(ex)) {
    prop = ex.getName();
    let obj = ex.getExpression();
    if (Node.isPropertyAccessExpression(obj) && obj.getName() === 'current') {
      const rd = declOf(obj.getExpression());
      const init = rd && Node.isVariableDeclaration(rd) ? rd.getInitializer() : null;
      if (init && Node.isCallExpression(init) && init.getExpression().getText() === 'useRef') obj = init.getArguments()[0];
    }
    if (obj && Node.isIdentifier(obj)) arg = paramArg(declOf(obj));
  } else if (Node.isIdentifier(ex)) {
    const d = declOf(ex);
    if (d && Node.isBindingElement(d)) {
      prop = d.getPropertyNameNode()?.getText() ?? d.getName();
      arg = paramArg(d);
    } else if (d && Node.isParameterDeclaration(d)) {
      const a = paramArg(d);  // a function given as an argument
      return a ? resolveFn(a) : null;
    }
  }
  if (!arg || !prop) return null;
  if (Node.isIdentifier(arg)) {
    const vd = declOf(arg);
    const init = vd && Node.isVariableDeclaration(vd) ? vd.getInitializer() : null;
    if (init && Node.isObjectLiteralExpression(init)) arg = init;
  }
  if (!Node.isObjectLiteralExpression(arg)) return null;
  const p = arg.getProperty(prop);
  if (!p) return null;
  if (Node.isShorthandPropertyAssignment(p)) return resolveFn(p.getNameNode(), 0, p.getValueSymbol?.());
  if (Node.isPropertyAssignment(p)) return resolveFn(p.getInitializer());
  if (Node.isMethodDeclaration(p)) return p;
  return null;
}

// The files of the route (set by bindingsOf) and the JSX elements of each component name in them.
let ROUTE_FILES = new Set();
const JSX_CACHE = new Map();
function jsxOf(tag) {
  const key = tag + '|' + ROUTE_FILES.size;
  if (JSX_CACHE.has(key)) return JSX_CACHE.get(key);
  const els = [];
  for (const f of ROUTE_FILES) {
    const sf = project.getSourceFile(f);
    if (!sf) continue;
    for (const el of [...sf.getDescendantsOfKind(SyntaxKind.JsxOpeningElement), ...sf.getDescendantsOfKind(SyntaxKind.JsxSelfClosingElement)])
      if (el.getTagNameNode().getText() === tag) els.push(el);
  }
  JSX_CACHE.set(key, els);
  return els;
}

// The values of a prop: `prop` of the component that declares `prm` (its parameter), on the JSX elements of that
// component in the route files.
function propValues(prm, prop) {
  const comp = prm.getParent();
  const name = Node.isFunctionDeclaration(comp) ? comp.getName() : comp.getParent()?.getName?.();
  if (!name || !/^[A-Z]/.test(name)) return [];
  const out = [];
  for (const el of jsxOf(name)) {
    const attr = el.getAttribute(prop);
    const init = attr && Node.isJsxAttribute(attr) ? attr.getInitializer() : null;
    const v = init && Node.isJsxExpression(init) ? init.getExpression() : null;
    if (v) out.push(v);
  }
  return out;
}

// The prop behind an expression: `{ prop }` of a component parameter, or `props.prop`. Else null.
function propOf(ex) {
  let sym = (Node.isPropertyAccessExpression(ex) ? ex.getNameNode() : ex).getSymbol?.();
  if (sym?.isAlias()) sym = sym.getAliasedSymbol() ?? sym;
  const d = sym?.getDeclarations()?.[0];
  if (d && Node.isBindingElement(d)) {
    const prm = d.getFirstAncestorByKind(SyntaxKind.Parameter);
    if (prm) return { prm, prop: d.getPropertyNameNode()?.getText() ?? d.getName() };
  } else if (d && Node.isPropertySignature(d) && Node.isPropertyAccessExpression(ex)) {
    const od = ex.getExpression().getSymbol?.()?.getDeclarations()?.[0];
    if (od && Node.isParameterDeclaration(od)) return { prm: od, prop: ex.getName() };
  }
  return null;
}

// A function prop (not `on*`) that the code calls: the value of that attribute on the JSX elements of the component in
// the route files, through the components that pass it on.
function propResolve(ex, hops = 0) {
  if (hops > 5) return [];
  const p = propOf(ex);
  if (!p || /^on[A-Z]/.test(p.prop)) return [];
  const out = [];
  for (const v of propValues(p.prm, p.prop)) {
    const fn = isFunctionLike(v) ? v : resolveFn(v);
    if (fn) out.push(fn);
    else out.push(...propResolve(v, hops + 1));
  }
  return [...new Set(out)];
}

function effectsOf(fn, label, depth, seen, env = null) {
  const out = [];
  env = ENV.get(fn) ?? env;
  const add = (kind, detail, node, lab) => out.push({ branch: lab ?? null, kind, detail, file: rel(node.getSourceFile().getFilePath()), line: node.getStartLineNumber() });
  const walk = (node, lab) => {
    if (!node) return;
    if (node !== fn && (Node.isFunctionDeclaration(node) || (Node.isVariableDeclaration(node) && bodyOfDecl(node)))) return; // a declaration, not a run
    if (Node.isSwitchStatement(node)) {
      walk(node.getExpression(), lab);
      for (const c of node.getCaseBlock().getClauses()) {
        const l = lab ?? (Node.isDefaultClause(c) ? 'other' : labelOfExpr(c.getExpression()));
        for (const st of c.getStatements()) walk(st, l);
      }
      return;
    }
    if (Node.isBlock(node) || Node.isSourceFile(node)) {
      let rest = null;
      for (const st of node.getStatements()) {
        const own = Node.isIfStatement(st) && condLabel(st.getExpression());
        walk(st, lab ?? (own ? null : rest));
        if (Node.isIfStatement(st) && !st.getElseStatement() && condLabel(st.getExpression())) {
          const th = st.getThenStatement();
          const stmts = Node.isBlock(th) ? th.getStatements() : [th];
          if (stmts.length && Node.isReturnStatement(stmts[stmts.length - 1])) rest = 'other';
        }
      }
      return;
    }
    if (Node.isIfStatement(node)) {
      const l = condLabel(node.getExpression());
      walk(node.getExpression(), lab);
      walk(node.getThenStatement(), lab ?? l);
      const el = node.getElseStatement();
      if (el) walk(el, lab ?? (l && !Node.isIfStatement(el) ? 'other' : null));
      return;
    }
    if (Node.isCallExpression(node)) {
      let ex = node.getExpression();
      while (Node.isParenthesizedExpression(ex)) ex = ex.getExpression();
      if (Node.isConditionalExpression(ex) && depth < 3) {
        // (a ? f : g)(x): one of the two functions runs
        for (const alt of [ex.getWhenTrue(), ex.getWhenFalse()]) {
          let sym = alt.getSymbol?.();
          if (sym?.isAlias()) sym = sym.getAliasedSymbol() ?? sym;
          const d = sym?.getDeclarations()?.[0];
          const body = d && !excluded(d.getSourceFile().getFilePath()) ? bodyOfDecl(d) : null;
          if (!body || seen.has(body)) continue;
          for (const e of effectsOf(body, lab, depth + 1, new Set([...seen, body]), env)) out.push({ ...e, either: true });
        }
        for (const c of node.getArguments()) walk(c, lab);
        return;
      }
      const name = Node.isPropertyAccessExpression(ex) ? ex.getName() : ex.getText();
      const args = node.getArguments();
      let handled = true;
      if (name === 'callAction') {
        const m = literalOf(args[0]), a = literalOf(args[1]);
        if (m && a) add('call', `/api/${m}/${a}`, node, lab);
      } else if (NAV_FN.test(name)) {
        const ts = navTargetsOf(args[0]);
        for (const t of ts) add('navigate', t, node, lab);
        if (!ts.length && ((/^navigateBack\w*$/.test(name) && !args.length) || (args[0] && args[0].getText() === '-1')))
          add('navigate', 'previous screen', node, lab);
        else if (!ts.length) handled = false;
      } else if (/^screenController_NavigateToPage\w*$/.test(name) && args[0]) {
        add('navigate', `URL ${args[0].getText()}`, node, lab); // a navigation to a URL that the code computes
      } else if (/^confirm\w*$/i.test(name)) {
        add('confirm', args[0] ? args[0].getText().replace(/['"`]/g, '') : 'confirm', node, lab);
      } else if ((/^show\w*(Feedback)?Message$/.test(name) || /^feedbackMessage\w*$/.test(name)) && !ERROR_FN.test(name)) {
        add('message', args[0] ? args[0].getText() : '', node, lab);
      } else if (/^set\w*FetchId$|^refetch\w*$|^invalidateQueries$/.test(name)) {
        // a query fetches again (a new key or a refetch). `q.refetch()` with `const q = useXQuery(…)`: the calls of the
        // query hook
        let qcalls = [];
        if (Node.isPropertyAccessExpression(ex) && Node.isIdentifier(ex.getExpression()) && depth < 3) {
          const qd = ex.getExpression().getSymbol?.()?.getDeclarations()?.[0];
          const qi = qd && Node.isVariableDeclaration(qd) ? qd.getInitializer() : null;
          if (qi && Node.isCallExpression(qi) && /^use\w*Query$/.test(qi.getExpression().getText())) {
            let hs = qi.getExpression().getSymbol?.();
            if (hs?.isAlias()) hs = hs.getAliasedSymbol() ?? hs;
            const hd = hs?.getDeclarations()?.[0];
            const hb = hd && !excluded(hd.getSourceFile().getFilePath()) ? bodyOfDecl(hd) : null;
            if (hb && !seen.has(hb)) qcalls = effectsOf(hb, lab, depth + 1, new Set([...seen, hb])).filter((e) => e.kind === 'call');
          }
        }
        if (qcalls.length) {
          out.push({ branch: lab ?? null, kind: 'via', detail: ex.getText(), file: rel(node.getSourceFile().getFilePath()), line: node.getStartLineNumber() });
          out.push(...qcalls.map((e) => ({ ...e, branch: lab ?? null })));
        } else add('refresh', ex.getText(), node, lab);
      } else if (name === 'raiseToFlowHandler') {
        // the default error path of every OutSystems action (the global exception handler), not an effect
      } else if (ERROR_FN.test(name)) {
        add('message', 'error message (on exception)', node, lab);
      } else if (/open\w*External\w*Link|openInApp|openUrl|OpenInNewTab/i.test(name)) {
        add('external', name, node, lab);
      } else if (name === 'changeWindowLocation') {
        const scheme = (args[0] ? args[0].getText() : '').match(/^[`'"]([a-z]+):/);
        add('external', scheme ? `${scheme[1]}: link` : name, node, lab);
      } else handled = false;
      if (RUNS_ARG.test(name) && depth < 3) {
        // a function given to then/catch/setTimeout/…: it runs
        for (const a of args) {
          if (!Node.isIdentifier(a) || ERROR_FN.test(a.getText())) continue; // the error path: not followed
          let sym = a.getSymbol?.();
          if (sym?.isAlias()) sym = sym.getAliasedSymbol() ?? sym;
          const d = sym?.getDeclarations()?.[0];
          const body = d && !excluded(d.getSourceFile().getFilePath()) ? bodyOfDecl(d) : null;
          if (!body || seen.has(body)) continue;
          const sub = effectsOf(body, lab, depth + 1, new Set([...seen, body]), env);
          if (sub.length) {
            out.push({ branch: lab ?? null, kind: 'via', detail: a.getText(), file: rel(d.getSourceFile().getFilePath()), line: d.getStartLineNumber() });
            out.push(...sub);
          }
        }
      }
      if (!handled && depth < 3) {
        let sym = (Node.isPropertyAccessExpression(ex) ? ex.getNameNode() : ex).getSymbol?.();
        if (sym?.isAlias()) sym = sym.getAliasedSymbol() ?? sym;
        const d0 = sym?.getDeclarations()?.[0];
        let cb = envResolve(ex, env);
        if (!cb && Node.isPropertyAccessExpression(ex) && ex.getName() === 'current' && Node.isIdentifier(ex.getExpression())) {
          // `ref.current(…)` with `const ref = useRef(fn)`: fn runs
          const rd = ex.getExpression().getSymbol?.()?.getDeclarations()?.[0];
          const ri = rd && Node.isVariableDeclaration(rd) ? rd.getInitializer() : null;
          if (ri && Node.isCallExpression(ri) && ri.getExpression().getText() === 'useRef' && ri.getArguments()[0])
            cb = resolveFn(ri.getArguments()[0]);
        }
        const viaProps = cb ? [] : propResolve(ex).filter((b) => !seen.has(b));
        for (const pb of viaProps) {
          const sub = effectsOf(pb, lab, depth + 1, new Set([...seen, pb]), null);
          if (sub.length) {
            out.push({ branch: lab ?? null, kind: 'via', detail: name, file: rel(pb.getSourceFile().getFilePath()), line: pb.getStartLineNumber() });
            out.push(...sub);
          }
        }
        if (viaProps.length) {
          // resolved through the props
        } else if (cb && !seen.has(cb)) {
          const sub = effectsOf(cb, lab, depth + 1, new Set([...seen, cb]), env);
          if (sub.length) {
            out.push({ branch: lab ?? null, kind: 'via', detail: name, file: rel(cb.getSourceFile().getFilePath()), line: cb.getStartLineNumber() });
            out.push(...sub);
          }
        } else if (d0 && (Node.isParameterDeclaration(d0) || Node.isPropertySignature(d0) || (Node.isBindingElement(d0) && d0.getFirstAncestorByKind(SyntaxKind.Parameter))) && /^on[A-Z]/.test(name)) {
          add('callback', name, node, lab); // the parent decides what happens
        }
        for (const d of sym?.getDeclarations() ?? []) {
          const f = d.getSourceFile().getFilePath();
          if (excluded(f)) continue;
          const body = bodyOfDecl(d) ?? (Node.isBindingElement(d) ? resolveFn(ex) : null);
          if (!body || seen.has(body)) continue;
          const sub = effectsOf(body, lab, depth + 1, new Set([...seen, body]), { hookFn: body, call: node, parent: env });
          if (sub.length) {
            out.push({ branch: lab ?? null, kind: 'via', detail: name, file: rel(f), line: d.getStartLineNumber() });
            out.push(...sub);
          }
          break;
        }
      }
    }
    for (const c of node.getChildren()) walk(c, lab);
  };
  const b = fn.getBody?.() ?? fn;
  walk(b, label);
  return out;
}

function leadingComment(n) {
  if (Node.isJsxAttribute(n)) {
    const full = n.getSourceFile().getFullText();
    const before = full.slice(Math.max(0, n.getStart() - 300), n.getStart());
    const m = before.match(/(\/\/[^\n]*|\/\*[\s\S]*?\*\/)\s*$/);
    const after = full.slice(n.getEnd(), n.getEnd() + 200).match(/^[^\n]*?(\/\/[^\n]*)/); // `}} // OnClick_Block`
    return [m ? m[1] : '', after ? after[1] : ''].join(' ').replace(/\s+/g, ' ').trim();
  }
  let x = n;
  while (x && !Node.isStatement(x) && !Node.isPropertyAssignment(x) && !Node.isMethodDeclaration(x)) x = x.getParent();
  if (!x) return '';
  return x.getLeadingCommentRanges().map((r) => r.getText()).join(' ').replace(/\s+/g, ' ').slice(0, 400);
}

function handlersOf(units, reached) {
  const out = [];
  const files = new Set([...reached].map((k) => units.get(k).file));
  for (const f of files) {
    const sf = project.getSourceFile(f);
    for (const d of [...sf.getDescendantsOfKind(SyntaxKind.FunctionDeclaration), ...sf.getDescendantsOfKind(SyntaxKind.VariableDeclaration),
      ...sf.getDescendantsOfKind(SyntaxKind.PropertyAssignment), ...sf.getDescendantsOfKind(SyntaxKind.MethodDeclaration),
      ...sf.getDescendantsOfKind(SyntaxKind.JsxAttribute)]) {
      let body = bodyOfDecl(d);
      if (!body && Node.isJsxAttribute(d)) {
        const init = d.getInitializer();
        const ex = init && Node.isJsxExpression(init) ? init.getExpression() : null;
        if (ex && isFunctionLike(ex)) body = ex;
      }
      if (!body) continue;
      const name = Node.isJsxAttribute(d) ? d.getNameNode().getText() : d.getName?.();
      if (!name || !/^[A-Za-z_$][\w$]*$/.test(name)) continue;
      const effects = effectsOf(body, null, 0, new Set([body]));
      const comment = leadingComment(d);
      if (!effects.length && !comment && !/^(on|handle)[A-Z_]/.test(name)) continue;
      out.push({ name, file: rel(f), line: d.getStartLineNumber(), comment, effects });
    }
  }
  return out;
}

// ---- bindings: the event handlers of the JSX ------------------------------------------------------------------
// Each JSX attribute `on<Event>={handler}` of the reached files: the element, the attribute, the handler (inline or a
// named function) and its effects (effectsOf). Only bindings with at least one effect (server call, navigation,
// message, external link, confirm dialog) are kept. A binding that only calls a prop of its component is not kept:
// the parent binds the real handler.
const EFFECT_KINDS = new Set(['call', 'navigate', 'message', 'external', 'confirm', 'refresh']);

// The function behind a handler expression: a function declaration or const, a name taken from the object that a
// hook returns (`const { onX } = useY()` or `flows.onX` with `flows = useY()`), a shorthand property. A prop or a
// parameter gives null: the parent decides.
function returnedProperty(callExpr, name, depth) {
  let sym = callExpr.getExpression().getSymbol?.();
  if (sym?.isAlias()) sym = sym.getAliasedSymbol() ?? sym;
  for (const d of sym?.getDeclarations() ?? []) {
    const fn = bodyOfDecl(d);
    if (!fn) continue;
    for (const ret of fn.getDescendantsOfKind(SyntaxKind.ReturnStatement)) {
      if (ret.getFirstAncestor(isFunctionLike) !== fn) continue;
      const obj = ret.getExpression();
      if (!obj || !Node.isObjectLiteralExpression(obj)) continue;
      const p = obj.getProperty(name);
      if (!p) continue;
      const keep = (r) => {
        if (r && !ENV.has(r) && r.getFirstAncestor((x) => x === fn)) ENV.set(r, { hookFn: fn, call: callExpr, parent: null });
        return r;
      };
      if (Node.isShorthandPropertyAssignment(p)) return keep(resolveFn(p.getNameNode(), depth + 1, p.getValueSymbol?.()));
      if (Node.isPropertyAssignment(p)) {
        const init = p.getInitializer();
        if (init && isFunctionLike(init)) return keep(init);
        if (init) return keep(resolveFn(init, depth + 1));
      }
      if (Node.isMethodDeclaration(p)) return keep(p);
    }
  }
  return null;
}

function hookReturnedFn(callExpr) {
  const name = callExpr.getExpression().getText();
  if (!/^use[A-Z]/.test(name)) return null;
  let sym = callExpr.getExpression().getSymbol?.();
  if (sym?.isAlias()) sym = sym.getAliasedSymbol() ?? sym;
  for (const d of sym?.getDeclarations() ?? []) {
    if (excluded(d.getSourceFile().getFilePath())) continue;
    const fn = bodyOfDecl(d);
    if (!fn) continue;
    for (const ret of fn.getDescendantsOfKind(SyntaxKind.ReturnStatement)) {
      if (ret.getFirstAncestor(isFunctionLike) !== fn) continue;
      let e = ret.getExpression();
      if (e && Node.isCallExpression(e) && e.getExpression().getText() === 'useCallback') e = e.getArguments()[0];
      if (e && isFunctionLike(e)) {
        if (!ENV.has(e)) ENV.set(e, { hookFn: fn, call: callExpr, parent: null });
        return e;
      }
    }
  }
  return null;
}

function resolveFn(expr, depth = 0, given = null) {
  if (!expr || depth > 4) return null;
  if (isFunctionLike(expr)) return expr;
  let sym = given ?? (Node.isPropertyAccessExpression(expr) ? expr.getNameNode() : expr).getSymbol?.();
  if (sym?.isAlias()) sym = sym.getAliasedSymbol() ?? sym;
  for (const d of sym?.getDeclarations() ?? []) {
    if (excluded(d.getSourceFile().getFilePath())) continue;
    const body = bodyOfDecl(d);
    if (body) return body;
    if (Node.isVariableDeclaration(d) && d.getInitializer() && Node.isCallExpression(d.getInitializer())) {
      // `const back = useX()`: a hook that returns a function (`return useCallback(fn, …)` or `return fn`)
      const fn = hookReturnedFn(d.getInitializer());
      if (fn) return fn;
    }
    if (Node.isBindingElement(d)) {
      const vd = d.getFirstAncestorByKind(SyntaxKind.VariableDeclaration);
      const init = vd?.getInitializer();
      const name = d.getPropertyNameNode()?.getText() ?? d.getName();
      if (init && Node.isCallExpression(init)) return returnedProperty(init, name, depth);
    }
    if ((Node.isPropertySignature(d) || Node.isPropertyAssignment(d) || Node.isShorthandPropertyAssignment(d)) && Node.isPropertyAccessExpression(expr)) {
      const objSym = expr.getExpression().getSymbol?.();
      const od = objSym?.getDeclarations()?.[0];
      // `flow.onX` with `flow` a prop: the object that the parent gives (`flow={flow}`, `const flow = useY()`)
      const po = propOf(expr.getExpression());
      if (po && depth < 4) {
        for (const v of propValues(po.prm, po.prop)) {
          const vs = v.getSymbol?.()?.getDeclarations()?.[0];
          const vi = vs && Node.isVariableDeclaration(vs) ? vs.getInitializer() : null;
          if (vi && Node.isCallExpression(vi)) {
            const b = returnedProperty(vi, expr.getName(), depth);
            if (b) return b;
          }
        }
      }
      // `const x = useY()` or the rest element `const { a, ...x } = useY()`
      const ovd = od && Node.isBindingElement(od) && od.getDotDotDotToken() ? od.getFirstAncestorByKind(SyntaxKind.VariableDeclaration) : od;
      const init = ovd && Node.isVariableDeclaration(ovd) ? ovd.getInitializer() : null;
      if (init && Node.isCallExpression(init)) return returnedProperty(init, expr.getName(), depth);
    }
  }
  return null;
}

// An anonymous function (inline in JSX or in an object) is not a named level: the 3 levels count from the first named
// function, as for `on={name}`.
function startDepth(body) {
  const named = Node.isFunctionDeclaration(body) || Node.isMethodDeclaration(body) || Node.isVariableDeclaration(body.getParent());
  return named ? 0 : -1;
}

function bindingsOf(units, reached) {
  const out = [];
  const files = new Set([...reached].map((k) => units.get(k).file));
  ROUTE_FILES = files;
  for (const f of files) {
    if (!f.endsWith('.tsx')) continue;
    const sf = project.getSourceFile(f);
    for (const attr of sf.getDescendantsOfKind(SyntaxKind.JsxAttribute)) {
      const prop = attr.getNameNode().getText();
      if (!/^on[A-Z]/.test(prop)) continue;
      const init = attr.getInitializer();
      const ex = init && Node.isJsxExpression(init) ? init.getExpression() : null;
      if (!ex) continue;
      const handler = isFunctionLike(ex) ? 'inline' : ex.getText().slice(0, 60);
      const body = isFunctionLike(ex) ? ex : (Node.isIdentifier(ex) || Node.isPropertyAccessExpression(ex)) ? resolveFn(ex) : null;
      if (!body) continue;
      // the global error handler as the handler (`onError: raiseToFlowHandler`): the default error path, not an effect
      const bodyName = Node.isFunctionDeclaration(body) ? body.getName() : body.getParent()?.getName?.();
      if (bodyName && ERROR_FN.test(bodyName) && bodyName === 'raiseToFlowHandler') continue;
      // an inline arrow is not a named level: the 3 levels count from the first named function, as for `on={name}`
      const effects = effectsOf(body, null, startDepth(body), new Set([body]));
      if (!effects.some((e) => EFFECT_KINDS.has(e.kind))) continue;
      const el = attr.getFirstAncestor((x) => Node.isJsxOpeningElement(x) || Node.isJsxSelfClosingElement(x));
      out.push({ element: el ? el.getTagNameNode().getText() : '?', prop, handler, file: rel(f), line: attr.getStartLineNumber(), effects });
    }
    // `<X {...flows} />` with `const flows = useY()`: each `on*` property of the object that the hook returns
    for (const sp of sf.getDescendantsOfKind(SyntaxKind.JsxSpreadAttribute)) {
      const id = sp.getExpression();
      if (!Node.isIdentifier(id)) continue;
      let sym = id.getSymbol?.();
      if (sym?.isAlias()) sym = sym.getAliasedSymbol() ?? sym;
      const vd = sym?.getDeclarations()?.[0];
      const init = vd && Node.isVariableDeclaration(vd) ? vd.getInitializer() : null;
      if (!init || !Node.isCallExpression(init) || !/^use[A-Z]/.test(init.getExpression().getText())) continue;
      for (const prop of (init.getType().getProperties() ?? []).map((x) => x.getName()).filter((n) => /^on[A-Z]/.test(n))) {
        const body = returnedProperty(init, prop, 0);
        if (!body) continue;
        const effects = effectsOf(body, null, startDepth(body), new Set([body]));
        if (!effects.some((e) => EFFECT_KINDS.has(e.kind))) continue;
        const el = sp.getFirstAncestor((x) => Node.isJsxOpeningElement(x) || Node.isJsxSelfClosingElement(x));
        out.push({ element: el ? el.getTagNameNode().getText() : '?', prop, handler: `${id.getText()}.${prop}`, file: rel(f), line: sp.getStartLineNumber(), effects });
      }
    }
  }
  return out;
}

// ---- main ----------------------------------------------------------------------------------------------------
const outDir = path.join(HERE, '.cache', 'data');
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
  const { units, reached, users } = reach(files, rootKeys);
  out = { mode, entry: rel(entry), closureFiles: files.size, reachedUnits: reached.size, ...facts(units, reached, users),
    reachedKeys: [...reached].map((k) => rel(k)), bindings: bindingsOf(units, reached) };
  fs.writeFileSync(path.join(outDir, 'react-shell.json'), JSON.stringify(out, null, 1));
} else {
  entry = path.join(SRC, 'pages', route, `${route}Page.tsx`);
  if (!fs.existsSync(entry)) { console.error(`no page: ${rel(entry)}`); process.exit(3); }
  const files = closure([entry]);
  rootKeys = [`${entry}::default`];
  const sf = project.getSourceFile(entry);
  for (const u of unitsOf(sf)) if (u.isDefault) rootKeys.push(`${entry}::${u.name}`);
  const { units, reached, users } = reach(files, rootKeys);
  out = { mode, route, entry: rel(entry), closureFiles: files.size, reachedUnits: reached.size, ...facts(units, reached, users),
    reachedKeys: [...reached].map((k) => rel(k)), bindings: bindingsOf(units, reached) };
  fs.writeFileSync(path.join(outDir, `react-${route}.json`), JSON.stringify(out, null, 1));
}
console.log(`${mode}${route ? ' ' + route : ''}: ${out.closureFiles} files in closure, ${out.reachedUnits} units reached, ${out.calls.length} callAction sites, ${out.functions.length} functions, ${out.origins.length} @origin tags`);

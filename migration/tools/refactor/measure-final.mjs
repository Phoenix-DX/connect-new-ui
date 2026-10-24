#!/usr/bin/env node
/**
 * P9-4 final measurement. measure.mjs (P0-4) reads the old shared/ and screens/ folders, which no longer exist,
 * so this script repeats only the counts of the plan v2 section 7 table with the same AST method.
 *   node migration/tools/refactor/measure-final.mjs
 * Counts: files that call callAction outside src/api/, files that import memoryCache, files that call getClientVar or
 * setClientVar outside src/platform/, and the largest code file by lines. Tests, stories and declaration files are skipped.
 */
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

const ROOT = process.cwd();
const SRC = path.join(ROOT, "app", "src");
const ts = createRequire(path.join(ROOT, "app", "package.json"))("typescript");
const walk = (d, a = []) => {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    e.isDirectory() ? walk(p, a) : a.push(p);
  }
  return a;
};
const rel = (f) => path.relative(SRC, f).split(path.sep).join("/");
const files = walk(SRC).filter(
  (f) =>
    /\.tsx?$/.test(f) &&
    !/\.(test|stories)\.tsx?$/.test(f) &&
    !f.endsWith(".d.ts"),
);
const callAction = [];
const memoryCache = [];
const clientVars = [];
const sizes = [];
for (const f of files) {
  const text = fs.readFileSync(f, "utf8");
  const r = rel(f);
  sizes.push([text.split("\n").length - (text.endsWith("\n") ? 1 : 0), r]);
  const sf = ts.createSourceFile(
    f,
    text,
    ts.ScriptTarget.Latest,
    true,
    f.endsWith("x") ? ts.ScriptKind.TSX : ts.ScriptKind.TS,
  );
  let ca = false,
    mc = false,
    cv = false;
  const visit = (n) => {
    if (
      (ts.isImportDeclaration(n) || ts.isExportDeclaration(n)) &&
      n.moduleSpecifier &&
      ts.isStringLiteral(n.moduleSpecifier) &&
      !(ts.isImportDeclaration(n) && n.importClause?.isTypeOnly)
    ) {
      if (/(^|\/)memoryCache$/.test(n.moduleSpecifier.text)) mc = true;
    } else if (ts.isCallExpression(n) && ts.isIdentifier(n.expression)) {
      if (n.expression.text === "callAction") ca = true;
      if (["getClientVar", "setClientVar"].includes(n.expression.text))
        cv = true;
    }
    ts.forEachChild(n, visit);
  };
  visit(sf);
  if (ca && !r.startsWith("api/")) callAction.push(r);
  if (mc) memoryCache.push(r);
  if (cv && !r.startsWith("platform/")) clientVars.push(r);
}
sizes.sort((a, b) => b[0] - a[0]);
const notData = sizes.filter(
  ([, r]) =>
    !r.startsWith("mocks/") &&
    !/(^|\/)mocks\.ts$/.test(r) &&
    !r.includes("mockDefaults"),
);
console.log(`code files scanned: ${files.length}`);
console.log(`callAction outside api/: ${callAction.length}`);
console.log(`memoryCache importers: ${memoryCache.length}`);
console.log(
  `getClientVar/setClientVar outside platform/: ${clientVars.length}`,
);
console.log(
  "largest files (all):",
  sizes
    .slice(0, 5)
    .map((s) => s.join(" "))
    .join(" | "),
);
console.log(
  "largest files (without mock data):",
  notData
    .slice(0, 8)
    .map((s) => s.join(" "))
    .join(" | "),
);
console.log(
  "files over 400 lines (without mock data):",
  notData.filter((s) => s[0] > 400).length,
);
if (callAction.length)
  console.log("callAction files:\n  " + callAction.join("\n  "));
if (clientVars.length)
  console.log("clientVar files:\n  " + clientVars.join("\n  "));

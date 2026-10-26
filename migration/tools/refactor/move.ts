/**
 * Codemod for the architecture refactor (plan v2 section 4.3).
 *
 * Moves files with `git mv` (with their tests and stories), rewrites every import that the move changes, then runs
 * the typecheck. It changes no other text. Run it from any folder with plain Node 24 (type stripping):
 *
 *   node migration/tools/refactor/move.ts --from app/src/shell --to app/src/platform [--dry-run]
 *   node migration/tools/refactor/move.ts --map app/docs/refactor/move-map.csv --phase P1 [--dry-run]
 *   node migration/tools/refactor/move.ts --alias-only [--dry-run]
 *
 * Options
 *   --from <path> --to <path>   move one folder or file (paths relative to the repository root)
 *   --map <csv> --phase <id>    move the rows of the CSV (columns `source`, `target`, `phase`) whose phase is <id>
 *                               or starts with "<id>-"; a path without the leading `app/` is taken under `app/`
 *   --alias-only                move nothing; rewrite relative parent imports (`../`) in `app/src` to `@/`
 *   --dry-run                   print the file list and the import count; change nothing
 *   --no-typecheck              skip `npm --prefix app run typecheck` at the end
 *
 * Imports that the codemod handles: `import`/`export ... from`, dynamic `import()`, `import('x')` types, `require()`
 * and `vi.mock`/`vi.doMock`/`vi.importActual`/`vi.importMock`. `import.meta.glob` patterns are not rewritten; the
 * codemod prints a warning for each one that a move can touch. A specifier is rewritten to the `@/` alias when the
 * importing file is in `app/src` (not `app/src/sw`) and the target is in `app/src`; a `./` import that stays below
 * the importing folder stays relative.
 *
 * Erasable TypeScript syntax only (no enums, no parameter properties), so Node can run this file directly.
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';

const repoRoot = path.resolve(import.meta.dirname, '../../..');
const appDir = path.join(repoRoot, 'app');
const srcDir = path.join(appDir, 'src');
const swDir = path.join(srcDir, 'sw');

const require = createRequire(path.join(appDir, 'package.json'));
const { Project, SyntaxKind } = require('ts-morph');

const RESOLVE_EXTENSIONS = ['.ts', '.tsx', '.js', '.jsx', '.mjs', '.cjs', '.json', '.css'];
const MOCK_CALLEES = new Set(['vi.mock', 'vi.doMock', 'vi.importActual', 'vi.importMock', 'vi.unmock', 'require']);

type Options = {
  from?: string;
  to?: string;
  map?: string;
  phase?: string;
  aliasOnly: boolean;
  dryRun: boolean;
  typecheck: boolean;
};

function parseArgs(argv: string[]): Options {
  const options: Options = { aliasOnly: false, dryRun: false, typecheck: true };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    const value = (): string => {
      i += 1;
      const next = argv[i];
      if (next === undefined) fail(`missing value for ${String(arg)}`);
      return next;
    };
    if (arg === '--from') options.from = value();
    else if (arg === '--to') options.to = value();
    else if (arg === '--map') options.map = value();
    else if (arg === '--phase') options.phase = value();
    else if (arg === '--alias-only') options.aliasOnly = true;
    else if (arg === '--dry-run') options.dryRun = true;
    else if (arg === '--no-typecheck') options.typecheck = false;
    else fail(`unknown argument ${String(arg)}`);
  }
  const modes = [options.from !== undefined || options.to !== undefined, options.map !== undefined, options.aliasOnly];
  if (modes.filter(Boolean).length !== 1) fail('use exactly one of: --from with --to, --map with --phase, --alias-only');
  if ((options.from === undefined) !== (options.to === undefined)) fail('--from and --to go together');
  if ((options.map === undefined) !== (options.phase === undefined)) fail('--map and --phase go together');
  return options;
}

function fail(message: string): never {
  console.error(`move.ts: ${message}`);
  process.exit(1);
}

function toAbs(p: string): string {
  return path.isAbsolute(p) ? path.normalize(p) : path.resolve(repoRoot, p);
}

/** A path in a CSV may omit the leading `app/`. */
function toAbsMapPath(p: string): string {
  const clean = p.trim().replace(/^\.\//, '');
  return toAbs(clean.startsWith('app/') ? clean : path.join('app', clean));
}

function git(args: string[]): string {
  return execFileSync('git', args, { cwd: repoRoot, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });
}

function trackedFilesUnder(abs: string): string[] {
  const rel = path.relative(repoRoot, abs);
  return git(['ls-files', '-z', '--', rel])
    .split('\0')
    .filter(Boolean)
    .map((f) => path.join(repoRoot, f));
}

function isFile(p: string): boolean {
  try {
    return fs.statSync(p).isFile();
  } catch {
    return false;
  }
}

function isDir(p: string): boolean {
  try {
    return fs.statSync(p).isDirectory();
  } catch {
    return false;
  }
}

/** Small CSV reader: quoted fields, doubled quotes, commas and newlines inside quotes. */
function parseCsv(text: string): Record<string, string>[] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = '';
  let quoted = false;
  for (let i = 0; i < text.length; i += 1) {
    const c = text[i];
    if (quoted) {
      if (c === '"' && text[i + 1] === '"') {
        field += '"';
        i += 1;
      } else if (c === '"') quoted = false;
      else field += c;
    } else if (c === '"') quoted = true;
    else if (c === ',') {
      row.push(field);
      field = '';
    } else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i += 1;
      row.push(field);
      field = '';
      if (row.some((f) => f !== '')) rows.push(row);
      row = [];
    } else field += c;
  }
  row.push(field);
  if (row.some((f) => f !== '')) rows.push(row);
  const header = rows.shift() ?? [];
  return rows.map((r) => Object.fromEntries(header.map((h, i) => [h.trim(), (r[i] ?? '').trim()])));
}

type MovePair = { source: string; target: string };

/** Expand a folder or file move into one pair per tracked file; a file brings its tests and stories. */
function expandMove(source: string, target: string, explicitSources: Set<string>): MovePair[] {
  if (isDir(source)) {
    const files = trackedFilesUnder(source);
    if (files.length === 0) fail(`no tracked files under ${path.relative(repoRoot, source)}`);
    return files.map((file) => ({ source: file, target: path.join(target, path.relative(source, file)) }));
  }
  if (!isFile(source)) fail(`source not found: ${path.relative(repoRoot, source)}`);
  const targetIsDir = isDir(target) || target.endsWith(path.sep) || path.extname(target) === '';
  const finalTarget = targetIsDir ? path.join(target, path.basename(source)) : target;
  const pairs: MovePair[] = [{ source, target: finalTarget }];
  const stem = path.basename(source, path.extname(source));
  const targetStem = path.basename(finalTarget, path.extname(finalTarget));
  const companion = new RegExp(`^${stem.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\.(test|spec|stories)\\.[^.]+$`);
  for (const sibling of fs.readdirSync(path.dirname(source))) {
    const siblingAbs = path.join(path.dirname(source), sibling);
    if (!companion.test(sibling) || explicitSources.has(siblingAbs) || !isFile(siblingAbs)) continue;
    const suffix = sibling.slice(stem.length);
    pairs.push({ source: siblingAbs, target: path.join(path.dirname(finalTarget), targetStem + suffix) });
  }
  return pairs;
}

function buildMoves(options: Options): MovePair[] {
  if (options.aliasOnly) return [];
  if (options.from !== undefined && options.to !== undefined) {
    return expandMove(toAbs(options.from), toAbs(options.to), new Set());
  }
  const csvPath = toAbs(options.map ?? '');
  const phase = options.phase ?? '';
  const rows = parseCsv(fs.readFileSync(csvPath, 'utf8')).filter((row) => {
    const rowPhase = row['phase'] ?? '';
    return rowPhase === phase || rowPhase.startsWith(`${phase}-`);
  });
  const usable = rows.filter((row) => (row['source'] ?? '') !== '' && (row['target'] ?? '') !== '');
  const explicit = new Set(usable.map((row) => toAbsMapPath(row['source'] ?? '')));
  return usable.flatMap((row) => expandMove(toAbsMapPath(row['source'] ?? ''), toAbsMapPath(row['target'] ?? ''), explicit));
}

type Resolved = { abs: string; style: 'exact' | 'addExt' | 'index'; suffix: string };

/** Resolve an import specifier to a real file, as Vite and TypeScript do. Null for packages and unknown paths. */
function resolveSpecifier(fromAbs: string, specifier: string): Resolved | null {
  const suffixMatch = /[?#].*$/.exec(specifier);
  const suffix = suffixMatch?.[0] ?? '';
  const bare = suffix ? specifier.slice(0, -suffix.length) : specifier;
  let base: string;
  if (bare.startsWith('@/')) base = path.join(srcDir, bare.slice(2));
  else if (bare.startsWith('.')) base = path.resolve(path.dirname(fromAbs), bare);
  else return null;
  if (isFile(base)) return { abs: base, style: 'exact', suffix };
  for (const ext of RESOLVE_EXTENSIONS) {
    if (isFile(base + ext)) return { abs: base + ext, style: 'addExt', suffix };
  }
  if (/\.js$/.test(base)) {
    for (const ext of ['.ts', '.tsx']) {
      const swapped = base.replace(/\.js$/, ext);
      if (isFile(swapped)) return { abs: swapped, style: 'exact', suffix };
    }
  }
  for (const ext of RESOLVE_EXTENSIONS) {
    if (isFile(path.join(base, `index${ext}`))) return { abs: path.join(base, `index${ext}`), style: 'index', suffix };
  }
  return null;
}

function inside(parent: string, child: string): boolean {
  const rel = path.relative(parent, child);
  return rel !== '' && !rel.startsWith('..') && !path.isAbsolute(rel);
}

function aliasAllowed(fromAbs: string): boolean {
  return inside(srcDir, fromAbs) && !inside(swDir, fromAbs);
}

function posix(p: string): string {
  return p.split(path.sep).join('/');
}

function buildSpecifier(newFrom: string, newTarget: string, resolved: Resolved, original: string): string {
  let target = newTarget;
  if (resolved.style === 'addExt') target = target.slice(0, -path.extname(target).length);
  if (resolved.style === 'index') target = path.dirname(target);
  let relative = posix(path.relative(path.dirname(newFrom), target));
  if (relative === '') relative = '.';
  if (!relative.startsWith('.')) relative = `./${relative}`;
  const keepRelative = original.startsWith('./') && relative.startsWith('./');
  if (aliasAllowed(newFrom) && inside(srcDir, newTarget) && !keepRelative) {
    return `@/${posix(path.relative(srcDir, target))}${resolved.suffix}`;
  }
  return relative + resolved.suffix;
}

type Edit = { literal: { setLiteralValue: (value: string) => unknown }; from: string; to: string; file: string };

function main(): void {
  const options = parseArgs(process.argv.slice(2));
  const pairs = buildMoves(options);
  const moved = new Map<string, string>(pairs.map((p) => [p.source, p.target]));
  for (const pair of pairs) {
    if (fs.existsSync(pair.target) && !moved.has(pair.target)) fail(`target exists: ${path.relative(repoRoot, pair.target)}`);
  }
  if (new Set(pairs.map((p) => p.target)).size !== pairs.length) fail('two files map to the same target');

  const project = new Project({
    tsConfigFilePath: path.join(appDir, 'tsconfig.json'),
    compilerOptions: { allowJs: true },
    skipFileDependencyResolution: true,
  });
  project.addSourceFilesAtPaths([
    path.join(appDir, 'src/sw/**/*.ts'),
    path.join(appDir, 'build/**/*.{ts,tsx,mjs}'),
    path.join(appDir, '.storybook/*.{ts,tsx}'),
  ]);

  const edits: Edit[] = [];
  const warnings: string[] = [];
  for (const sourceFile of project.getSourceFiles()) {
    const file = sourceFile.getFilePath() as string;
    if (file.includes(`${path.sep}node_modules${path.sep}`)) continue;
    const literals: { literal: Edit['literal']; text: string }[] = [];
    const push = (node: { getLiteralText?: () => string } | undefined): void => {
      if (node?.getLiteralText) literals.push({ literal: node as unknown as Edit['literal'], text: node.getLiteralText() });
    };
    for (const decl of sourceFile.getImportDeclarations()) push(decl.getModuleSpecifier());
    for (const decl of sourceFile.getExportDeclarations()) push(decl.getModuleSpecifier());
    for (const call of sourceFile.getDescendantsOfKind(SyntaxKind.CallExpression)) {
      const callee = call.getExpression();
      const name = callee.getText() as string;
      const first = call.getArguments()[0];
      if (callee.getKind() === SyntaxKind.ImportKeyword || MOCK_CALLEES.has(name)) {
        if (first?.getKind() === SyntaxKind.StringLiteral || first?.getKind() === SyntaxKind.NoSubstitutionTemplateLiteral) push(first);
      } else if (name === 'import.meta.glob') {
        const pattern = first?.getKind() === SyntaxKind.StringLiteral ? (first.getLiteralText() as string) : '';
        const baseDir = path.resolve(path.dirname(file), pattern.split(/[*{?[]/)[0] ?? '');
        const touched = [...moved.keys()].some((m) => m === file || inside(baseDir, m));
        if (touched || options.aliasOnly) {
          warnings.push(`${path.relative(repoRoot, file)}: import.meta.glob(${pattern}) is not rewritten; check it by hand`);
        }
      }
    }
    for (const node of sourceFile.getDescendantsOfKind(SyntaxKind.ImportType)) {
      const arg = node.getArgument();
      if (arg.getKind() === SyntaxKind.LiteralType) push(arg.getLiteral());
    }

    const newFrom = moved.get(file) ?? file;
    for (const { literal, text } of literals) {
      const resolved = resolveSpecifier(file, text);
      if (!resolved) continue;
      const newTarget = moved.get(resolved.abs) ?? resolved.abs;
      let next: string | null = null;
      if (options.aliasOnly) {
        if (text.startsWith('../') && aliasAllowed(file) && inside(srcDir, resolved.abs)) {
          next = buildSpecifier(newFrom, newTarget, resolved, text);
        }
      } else if (newFrom !== file || newTarget !== resolved.abs) {
        next = buildSpecifier(newFrom, newTarget, resolved, text);
      }
      if (next !== null && next !== text) edits.push({ literal, from: text, to: next, file });
    }
  }

  const rel = (p: string): string => path.relative(repoRoot, p);
  const editedFiles = new Set(edits.map((e) => e.file));
  console.log(options.dryRun ? 'DRY RUN: nothing is changed.' : 'Applying.');
  if (pairs.length > 0) {
    console.log(`\nFiles to move (${pairs.length}):`);
    for (const pair of pairs) console.log(`  ${rel(pair.source)} -> ${rel(pair.target)}`);
  }
  console.log(`\nImports to rewrite: ${edits.length} in ${editedFiles.size} files.`);
  for (const w of warnings) console.log(`WARNING: ${w}`);

  if (options.dryRun) return;

  for (const edit of edits) edit.literal.setLiteralValue(edit.to);
  for (const sourceFile of project.getSourceFiles()) {
    if (!sourceFile.isSaved()) sourceFile.saveSync();
  }
  for (const pair of pairs) {
    fs.mkdirSync(path.dirname(pair.target), { recursive: true });
    git(['mv', '--', rel(pair.source), rel(pair.target)]);
  }
  console.log(`Moved ${pairs.length} files, rewrote ${edits.length} imports.`);

  if (options.typecheck) {
    console.log('Running the typecheck.');
    execFileSync('npm', ['--prefix', 'app', 'run', 'typecheck'], { cwd: repoRoot, stdio: 'inherit' });
  }
}

main();

/**
 * P6-G1-B-Shared: rename the exported component and its Props type to the target file name, in every importer.
 * Usage: node migration/tools/refactor/rename-exports-g1-shared.ts <csv with source,target>
 * Uses the ts-morph language service rename, so imports, JSX and tests follow. No other text changes.
 */
import fs from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';

const repoRoot = path.resolve(import.meta.dirname, '../../..');
const appDir = path.join(repoRoot, 'app');
const require = createRequire(path.join(appDir, 'package.json'));
const { Project } = require('ts-morph');

const rows = fs
  .readFileSync(process.argv[2] ?? '', 'utf8')
  .trim()
  .split('\n')
  .slice(1)
  .map((line) => line.split(','));
const project = new Project({ tsConfigFilePath: path.join(appDir, 'tsconfig.json') });
const seen = new Set<string>();
for (const [source, target] of rows) {
  const oldStem = path.basename(source as string).split('.')[0] as string;
  const newStem = path.basename(target as string).split('.')[0] as string;
  const file = path.join(repoRoot, target as string);
  if (oldStem === newStem || !/\.tsx$/.test(file) || /\.(test|stories)\./.test(file) || seen.has(file)) continue;
  seen.add(file);
  const sf = project.getSourceFile(file);
  if (!sf) throw new Error(`not in project: ${file}`);
  for (const [from, to] of [
    [oldStem, newStem],
    [`${oldStem}Props`, `${newStem}Props`],
  ] as const) {
    const decl = sf.getExportedDeclarations().get(from)?.[0];
    if (!decl) {
      console.log(`skip ${from} in ${target}`);
      continue;
    }
    (decl as unknown as { rename: (n: string) => void }).rename(to);
  }
}
project.saveSync();
console.log('renamed in', seen.size, 'files');

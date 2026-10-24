/**
 * P7-3: rename props of one component in every user, with the ts-morph language service rename (JSX attributes,
 * story args, destructuring and tests follow; a shorthand property keeps its local name as `new: old`).
 * No other text changes.
 *
 *   node migration/tools/refactor/p7-3-rename-props.ts <file under app/> <Props interface> <old>=<new> [<old>=<new> ...]
 *
 * Example: node migration/tools/refactor/p7-3-rename-props.ts src/components/ui/Skeleton/Skeleton.tsx SkeletonProps \
 *            inIsLoading=isLoading inExtendedClass=extendedClass
 */
import { createRequire } from 'node:module';
import path from 'node:path';

const repoRoot = path.resolve(import.meta.dirname, '../../..');
const appDir = path.join(repoRoot, 'app');
const require = createRequire(path.join(appDir, 'package.json'));
const { Project } = require('ts-morph');

const [file, interfaceName, ...pairs] = process.argv.slice(2);
if (file === undefined || interfaceName === undefined || pairs.length === 0) {
  console.error('usage: p7-3-rename-props.ts <file> <Props interface> <old>=<new> ...');
  process.exit(2);
}

const project = new Project({
  tsConfigFilePath: path.join(appDir, 'tsconfig.json'),
});
const source = project.getSourceFile(path.join(appDir, file));
if (!source) throw new Error(`not in project: ${file}`);
const props = source.getInterface(interfaceName);
if (!props) throw new Error(`interface ${interfaceName} not found in ${file}`);

for (const pair of pairs) {
  const [from, to] = pair.split('=');
  if (!from || !to) throw new Error(`bad pair: ${pair}`);
  const member = props.getProperty(from);
  if (!member) throw new Error(`property ${from} not found in ${interfaceName}`);
  member.rename(to, { usePrefixAndSuffixText: true });
  console.log(`renamed ${interfaceName}.${from} -> ${to}`);
}

const changed = project.getSourceFiles().filter((sf: { isSaved: () => boolean }) => !sf.isSaved());
project.saveSync();
console.log('files changed:', changed.length);

import { spawn, spawnSync, type SpawnSyncReturns } from 'node:child_process';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

/* Real `vite build` in a child process, for the build tests (pwaBuild, mockFreeBuild) and the PWA e2e
   (build/e2e/pwa.e2e.ts). The child gets the parent's environment without the test runner's own variables, so the
   build sees the same configuration as `npm run build`. */

export const APP_DIR = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const VITE = join(APP_DIR, 'node_modules/vite/bin/vite.js');

/** Build modes of docs/guides/pwa.md "Build modes". */
export const PRODUCTION_ENV = { VITE_USE_MOCKS: 'false' } as const;
export const DEMO_ENV = { VITE_USE_MOCKS: 'true', VITE_DEMO: 'true' } as const;
export const DEMO_ARGS = ['--mode', 'demo'] as const;

function childEnv(env: Record<string, string>): NodeJS.ProcessEnv {
  const inherited = Object.entries(process.env).filter(([key]) => !key.startsWith('VITEST') && key !== 'TEST');
  return { ...Object.fromEntries(inherited), NODE_ENV: 'production', ...env };
}

function buildArgs(outDir: string, args: readonly string[]): string[] {
  return [VITE, 'build', ...args, '--outDir', outDir, '--emptyOutDir', '--logLevel', 'error'];
}

/** Builds into outDir and waits (the build tests check `status` with their own message). */
export function viteBuildSync(
  outDir: string,
  env: Record<string, string>,
  args: readonly string[] = [],
): SpawnSyncReturns<string> {
  return spawnSync(process.execPath, buildArgs(outDir, args), { cwd: APP_DIR, env: childEnv(env), encoding: 'utf8' });
}

/** Builds into outDir without blocking, so several builds run in parallel; rejects with vite's error output. */
export function viteBuild(outDir: string, env: Record<string, string>, args: readonly string[] = []): Promise<string> {
  return new Promise((resolveBuild, reject) => {
    const child = spawn(process.execPath, buildArgs(outDir, args), { cwd: APP_DIR, env: childEnv(env) });
    let output = '';
    child.stdout.on('data', (chunk: Buffer) => (output += chunk.toString()));
    child.stderr.on('data', (chunk: Buffer) => (output += chunk.toString()));
    child.on('error', reject);
    child.on('close', (code) => {
      if (code === 0) resolveBuild(outDir);
      else reject(new Error(`vite build into ${outDir} failed (${code}):\n${output}`));
    });
  });
}

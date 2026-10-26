import { cpSync, existsSync } from 'node:fs';
import { relative, resolve, sep } from 'node:path';
import type { Plugin } from 'vite';

/* Production builds (VITE_USE_MOCKS=false, boot plan `mocks: 'none'`) ship no mock code and no mock files
   (docs/guides/pwa.md "Build modes", ADR-9). The source keeps every mock import behind MOCKS_BUILT (src/lib/config.ts),
   a build-time constant Rollup folds, so those imports and their chunks drop out; these plugins keep public/'s mock files
   out of dist/ and fail the build when mock code still reaches a chunk. Dev, the plain mock build and the demo build do
   not use them. */

/** Entries of public/ that only the mocks use: MSW's worker, the mock Feed CMS page, the mock photos. */
export const MOCK_PUBLIC_FILES: readonly string[] = ['mockServiceWorker.js', 'mock-embeds', 'mock-images'];

/** Mock modules that production still bundles because a non-mock module imports them statically; each must be small
    and hold no fixture and no MSW code. Remove an entry once its importer gates it behind MOCKS_BUILT. None is left:
    P4-3 gated the last importer of the directory cast (src/mocks/fictional/directory.ts), the mock sign-in, behind the
    mock identity provider (src/platform/auth/mockAuth.ts). */
export const KNOWN_MOCK_LEFTOVERS: readonly string[] = [];

const FORBIDDEN: readonly RegExp[] = [
  /\/node_modules\/(msw|@mswjs)\//, // MSW and its interceptors
  /\/src\/mocks\//, // handlers, fixtures (recorded JSON), the mock store and contract, the fictional casts
  /\/(mocks|mockData|fixtures)\.tsx?$/, // the mock answers of each screen and block (src/screens/*/mocks.ts, …)
  /\/src\/platform\/(auth\/mockAuth|session\/mockUser)\.ts$/, // the mock identity provider and its mock user
];

/** A module id (absolute, `/`-separated after normalizing) of mock code. */
const isMockModule = (id: string): boolean => FORBIDDEN.some((re) => re.test(id));
const normalizedId = (id: string): string => id.split(sep).join('/').replace(/\?.*$/, '');

/** The bundled module ids (absolute, `/`-separated) that a production build must not ship. */
export function forbiddenMockModules(ids: Iterable<string>, root: string): string[] {
  const rootPath = root.split(sep).join('/').replace(/\/$/, '');
  return [...ids]
    .map(normalizedId)
    .filter(isMockModule)
    .filter((id) => !KNOWN_MOCK_LEFTOVERS.some((file) => id === `${rootPath}/${file}`));
}

/** Mock modules run no code in a production build: Rollup keeps a mock module's code only for the exports that kept
    code uses (and the guard below then fails the build). Without it, a static import that reaches a mock module keeps
    its top-level statements, although nothing uses them: the mock user (src/platform/session/mockUser.ts, imported
    behind MOCKS_BUILT) reaches the directory cast, whose top level adds a member to a household. */
function mockModulesWithoutSideEffects(): Plugin {
  return {
    name: 'mock-modules-without-side-effects',
    apply: 'build',
    config: () => ({
      build: { rollupOptions: { treeshake: { moduleSideEffects: (id: string) => !isMockModule(normalizedId(id)) } } },
    }),
  };
}

/** Copies public/ without MOCK_PUBLIC_FILES (instead of Vite's copy), before the service worker's precache scan. */
function publicDirWithoutMocks(): Plugin {
  let publicDir = '';
  let outDir = '';
  return {
    name: 'public-dir-without-mocks',
    apply: 'build',
    config: () => ({ build: { copyPublicDir: false } }),
    configResolved(config) {
      publicDir = config.publicDir;
      outDir = resolve(config.root, config.build.outDir);
    },
    writeBundle() {
      if (publicDir === '' || !existsSync(publicDir)) return;
      cpSync(publicDir, outDir, {
        recursive: true,
        filter: (source) => !MOCK_PUBLIC_FILES.includes(relative(publicDir, source).split(sep)[0] ?? ''),
      });
    },
  };
}

/** Fails the build when a chunk still renders a forbidden mock module (tree-shaken modules do not count). */
function mockFreeBundleGuard(): Plugin {
  let root = '';
  return {
    name: 'mock-free-bundle-guard',
    apply: 'build',
    configResolved(config) {
      root = config.root;
    },
    generateBundle(_options, bundle) {
      const rendered = Object.values(bundle).flatMap((file) =>
        file.type === 'chunk'
          ? Object.entries(file.modules)
              .filter(([, module]) => module.renderedLength > 0)
              .map(([id]) => id)
          : [],
      );
      const leaks = forbiddenMockModules(rendered, root);
      if (leaks.length > 0) {
        this.error(
          `production build bundles mock code; gate its import behind MOCKS_BUILT (src/lib/config.ts):\n  ${leaks
            .map((id) => relative(root, id))
            .join('\n  ')}`,
        );
      }
    },
  };
}

/** The plugins of a mock-free (production) build. */
export function mockFreeBuild(): Plugin[] {
  return [publicDirWithoutMocks(), mockModulesWithoutSideEffects(), mockFreeBundleGuard()];
}

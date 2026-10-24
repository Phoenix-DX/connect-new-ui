# Quality checks

| Check            | Command                                                                                                 | What it guards                                                                                                                                                                      |
| ---------------- | ------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Contract types   | `npm run gen:api`                                                                                       | screens call only actions that exist, with the right inputs and outputs                                                                                                             |
| Types            | `npm run typecheck`                                                                                     | TypeScript strict, `noUncheckedIndexedAccess`                                                                                                                                       |
| Lint             | `npm run lint`                                                                                          | typescript-eslint strict (type-checked) + React hooks rules                                                                                                                         |
| Format           | `npm run format:check`                                                                                  | one Prettier style (`.prettierrc.json`)                                                                                                                                             |
| Tests            | `npm run test`                                                                                          | Vitest + Testing Library, MSW answers like in the browser                                                                                                                           |
| Build            | `vite build`                                                                                            | production bundle                                                                                                                                                                   |
| PWA build check  | `build/pwaBuild.test.ts` (in `npm test`)                                                                | production emits `sw.js` precaching the original CSS; mock build none                                                                                                               |
| All of the above | `npm run ci`                                                                                            | what CI runs (platform not chosen yet)                                                                                                                                              |
| Architecture     | `npm run arch`, `npm run arch:baselines`, `npm run lint:arch` (`arch` and `arch:baselines` are in `ci`) | dependency-cruiser (`app/.dependency-cruiser.cjs`): cycles and folder rules are errors; known violations are frozen (see below); story and test files are excluded (Q11, P3-2)      |
| Dependency graph | `npm run graph` (not in `ci`)                                                                           | writes `docs/refactor/graph.json` (local file, not committed)                                                                                                                       |
| Duplicates       | `npm run dup` (in `ci`)                                                                                 | copied code (`app/.jscpd.json`); threshold 0.57 percent (P7-5 value 0.52 plus 10 percent)                                                                                           |
| Unused code      | `npm run unused` (in `ci`)                                                                              | knip (`app/knip.json`): unused files, dependencies, unlisted, unresolved, binaries, duplicates; then `build/check-unused-exports.mjs` for exports and types (frozen baseline)       |
| Bundle size      | `node build/bundle-report.mjs` (after `npm run build`, not in `ci`)                                     | first-load size (entry, route chunk, shared chunks) of HomeFeed and Login, from `dist/`; limits in plan v2 section 7                                                                |
| PWA e2e          | `npm run e2e:pwa` (not in `ci`)                                                                         | service worker, manifest, offline, update, PIN, mock-free production (headless Chrome; [pwa.md](pwa.md#testing))                                                                    |
| Lighthouse       | `npm run lighthouse` (not in `ci`)                                                                      | demo build scores and warning budgets, reports local only ([pwa.md](pwa.md#lighthouse-npm-run-lighthouse))                                                                          |
| Parity           | `route.py parity <Screen>` (project root)                                                               | DOM, styles and calls per captured state against the original                                                                                                                       |
| Refactor parity  | `migration/tools/refactor_parity.py` (project root)                                                     | refactor gate: `--level strict` (all checks) or `visual` (no structure, class, attribute); `--changed` for the routes of a diff, `--all` for all 64; `--ref outsystems\|self\|both` |

## Architecture baselines (P9-1)

All folder rules of plan v2 section 2.4 (rules 3 to 9, `pages-imported-by-own-route-only`) and `no-circular` are errors in
`app/.dependency-cruiser.cjs`. The ESLint restrictions of rules 4 and 11 are errors too. Violations that existed at P9-1
are frozen in three baselines. They only shrink: a new violation fails `npm run ci`, and so does a row that no longer
matches (a stale row).

| Baseline                                        | Check                                                                       | Content                                                                      |
| ----------------------------------------------- | --------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `app/.dependency-cruiser-known-violations.json` | `npm run arch` (`--ignore-known`) and `node build/check-arch-baselines.mjs` | 142 dependency-cruiser violations                                            |
| `app/docs/refactor/arch-baseline.csv`           | `python3 migration/tools/refactor/arch_baseline.py check --strict`          | 72 ESLint rows (rule 4); `eslint.config.js` sets `warn` for these files only |
| `app/.knip-known-unused.json`                   | `node app/build/check-unused-exports.mjs` (part of `npm run unused`)        | 1,130 unused exports and types                                               |

When you fix a row:

1. Fix the code.
2. Run the check of the baseline. It prints the stale row (`STALE` for knip).
3. Delete that row from the baseline file. Do not add rows. Do not regenerate a baseline to hide a new violation.
   For depcruise, `npx depcruise-baseline` rewrites the file; use it only after you checked that the new file is smaller.

Each remaining row has an owner in `migration/refactor/followups.md`: F35 (rule 6), F36 (OSLink), F37 (CacheControl),
N1 (rule 4), N2 (rule 5), N3 (rule 8), N4 (rule 9 leftovers), N5 (knip rows).

Rule 9 does not check mock handlers (`src/mocks/**`, `**/mocks.ts`) and test helpers (`src/test/**`), as it already skips
stories and tests. This is a reclassification, not a fix (follow-up F38): rule 9 went from 34 to 30 rows.

The refactor parity tool starts every run with `--preload-fonts`. `--record-self --routes <R>` records only those routes
and keeps the other data of the reference (`rerecorded` list in the manifest; `--source-commit` names the code commit).
It also passes `--hold-third-party` on self runs and on `--record-self`. A local proxy then holds map tile requests until the page is idle (15 s at most).

Tests sit next to the code (`*.test.ts(x)`). Each shared block has a DOM snapshot test per captured state. Platform widgets
(`src/components/*`), the shell (`src/platform`) and local entities have their own unit tests. Each vendored script has an
`index.test.ts` for the wrapper. The test `src/mocks/contract.test.ts` checks the mock handlers against the contract.

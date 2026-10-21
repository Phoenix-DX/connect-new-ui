# Quality checks

| Check            | Command                                   | What it guards                                                                                                   |
| ---------------- | ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| Contract types   | `npm run gen:api`                         | screens call only actions that exist, with the right inputs and outputs                                          |
| Types            | `npm run typecheck`                       | TypeScript strict, `noUncheckedIndexedAccess`                                                                    |
| Lint             | `npm run lint`                            | typescript-eslint strict (type-checked) + React hooks rules                                                      |
| Format           | `npm run format:check`                    | one Prettier style (`.prettierrc.json`)                                                                          |
| Tests            | `npm run test`                            | Vitest + Testing Library, MSW answers like in the browser                                                        |
| Build            | `vite build`                              | production bundle                                                                                                |
| PWA build check  | `build/pwaBuild.test.ts` (in `npm test`)  | production emits `sw.js` precaching the original CSS; mock build none                                            |
| All of the above | `npm run ci`                              | what CI runs (platform not chosen yet)                                                                           |
| PWA e2e          | `npm run e2e:pwa` (not in `ci`)           | service worker, manifest, offline, update, PIN, mock-free production (headless Chrome; [pwa.md](pwa.md#testing)) |
| Lighthouse       | `npm run lighthouse` (not in `ci`)        | demo build scores and warning budgets, reports local only ([pwa.md](pwa.md#lighthouse-npm-run-lighthouse))       |
| Parity           | `route.py parity <Screen>` (project root) | DOM, styles and calls per captured state against the original                                                    |

Tests sit next to the code (`*.test.ts(x)`). Each shared block has a DOM snapshot test per captured state. Platform widgets
(`src/components/*`), the shell (`src/shell`) and local entities have their own unit tests. Each vendored script has an
`index.test.ts` for the wrapper. The test `src/mocks/contract.test.ts` checks the mock handlers against the contract.

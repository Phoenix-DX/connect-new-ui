# Refactor plan v2: from OutSystems parity to a clean React architecture

Status: **proposal by Claude, waits for the user's decisions R1 to R8** (`refactor-plan-review.md` §4). Written
2026-10-22. This plan replaces §4 to §8 of `refactor-plan.md` (the draft). §1 to §3 of the draft stay valid: goal,
measured state, principles. This plan does not repeat them. The decisions D1 to D4 of the draft stay (§9).

Writing rules: `migration/english-docs/style-rules.md`. Terms: `migration/english-docs/glossary.md`. In this plan the
React terms **page**, **container**, **component** and **hook** have the meanings of §2.1.

Assumptions until the user decides: R1 (b), R2 (b), R3 (b), R4 (b), R5 (a), R7 (b), R8 (b). When the user chooses
another option, update the steps that name that decision.

## 1. How an agent works with this plan

### 1.1 Read before the first step

1. This file, fully.
2. `refactor-plan.md` §1 to §3 and §5.
3. `app/docs/architecture/overview.md` and `app/docs/guides/shared-code.md`.
4. `migration/AGENTS.md`.
5. The step you are on (§6), and the files it lists under "Read".

Do not read `.auth/` or `migration/.raw/` (CLAUDE.md, rule 1).

### 1.2 Before each step

1. Run `git branch --show-current`. When the result is not `refactor/architecture`, stop and tell the user.
2. Run `git status --short`. When it shows changes that are not from the current step, stop and ask the user.
3. Read the step's "Preconditions". When one is not met, stop and tell the user which one.

### 1.3 After each step

1. Run the step's "Check". Every command must pass.
2. When the check passes, commit with the message of the step. Add the gate result to the commit body:
   `ci: pass; parity <level>: <n>/<m> (OutSystems), <n>/<m> (self)`.
3. When the check fails, do not commit. Fix the step. When the fix takes more than one hour, revert the step and tell
   the user.
4. Record the tokens with `python3 $SK/ledger.py add --screen refactor --phase other --note <step id> --tokens <n>`.

### 1.4 Rules for all steps

1. A step is a move or a change, never both (draft §3, rule 3).
2. Move files with the codemod (§4.3), never by hand and never with `sed -i`.
3. Do not change `src/api/openapi.yaml`, `src/mocks/**` fixtures, or `public/UBTConnect/css/**` (D2 and R3).
4. Do not change behavior. When a step needs a behavior change, stop and ask the user.
5. Do not delete a test. Move it with its code. When a merged component makes a test obsolete, replace the test by a
   test of the merged component in the same commit.
6. Write new code in English, with one JSDoc tag `@origin <OutSystems qualified name>` per file that ports a block or
   a screen (R4).
7. Do not push. Do not merge. Do not change `main`.
8. When a decision is needed (two valid options, different results), ask the user with
   `python3 $SK/route.py ask refactor --kind decision ...` and stop the step.

### 1.5 Daily report to the user

At the end of each day, write 5 lines: steps done, gate results, metrics that changed, open questions, next step.

## 2. Target architecture

### 2.1 Terms

| Term          | Meaning                                                                                   | It can                                                                               | It must not                                                                  |
| ------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------- |
| **Page**      | The component of one route. One file, `pages/<Route>/<Route>Page.tsx`.                    | Read route params. Call hooks. Compose components and containers. Choose the layout. | Import another page. Contain markup of more than one screen area.            |
| **Hook**      | A function `use*` that holds data, state or a flow for a page or a component.             | Call data hooks (`api/`), `platform/`, navigation, flags.                            | Return markup.                                                               |
| **Container** | A component that calls hooks and renders one component tree with the result. Rare (§2.3). | Call hooks. Handle events. Pass props.                                               | Contain markup other than the one component it renders.                      |
| **Component** | A component that renders UI from props.                                                   | Keep local UI state: open or closed, selected tab, input value.                      | Call `api/`, `platform/`, flags or navigation. Import a page or a container. |
| **Layout**    | A component that places header, content and bottom bar. In `components/layout/`.          | Receive the areas as props (`header`, `content`, `bottom`).                          | Fetch data.                                                                  |

### 2.2 Folders

```
src/
  app/                       router, route table with meta, providers, AppFrame, RouteGuard
  pages/<Route>/             one folder per route; folder name = route name
    <Route>Page.tsx          the page
    hooks/                   hooks that only this page uses
    components/              components that only this page uses
    containers/              containers that only this page uses (rare)
    <Route>.test.tsx, *.stories.tsx
  containers/                containers that 2 or more pages use (ShareSheet, FilterSheet, BottomBar)
  components/
    ui/                      generic UI: Button, Dialog, BottomSheet, Card, List, EmptyState, Skeleton, Tag, ...
    layout/                  AppLayout, DetailLayout, HomeLayout, BlankLayout
    <domain>/                business components that 2 or more pages use, props only (household/, event/, ...)
  api/
    client/                  callAction, ApiError, timeouts, call log for parity
    <domain>/                repository (calls), mapper (wire → domain), query keys, data hooks
  platform/
    auth/                    AuthProvider interface, mockAuth, bffAuth (later)
    session/                 session state machine, selectors, hooks
    settings/                settings from SynchAppContext, typed
    flags/                   registry, resolve, server, useFlag
    navigation/              view cache, transitions, back queue, navigation gate, osNavigate
    device/                  device classes, scanner, file plugins
    storage/                 local storage, IndexedDB, local entities
    bootstrap/               app start steps
    feedback/                toasts, dialogs host
  lib/                       pure functions: date, format, sanitize, os-wire helpers that have no state
  legacy/os/                 OutSystems compatibility: StylesheetHost, os-exceptions, runtime ports, vendor
                             wrappers, the OutSystems name maps. Smaller in each phase.
  mocks/                     MSW handlers and fixtures, unchanged
  styles/                    tokens.css, layers.css
```

### 2.3 When to make a container (R2)

Make a container only when one of these is true:

1. The same component tree renders data from two different sources. Example: `HouseholdDetails_Block` renders server
   data, and the Profile preview renders form data into the same tree.
2. The tree needs 2 or more data hooks and 3 or more event handlers, and the component file has more than 200 lines.

In all other cases: the page (or the parent component) calls the hook and passes props. Record the choice for each
block in `move-map.csv`, column `shape` (`page`, `hook+component`, `container+component`, `component`, `delete`).

### 2.4 Rules (lint checks 3 to 11)

1. Put new code in `pages/<Route>/`.
2. When a second page needs the code, move it to `components/`, `containers/` or `api/`.
3. A page does not import another page.
4. `components/**` does not import `api/`, `platform/`, `containers/`, `pages/` or `app/`.
5. `components/ui/` imports only `components/ui/`, `lib/` and `styles/`.
6. `lib/` imports only `lib/`.
7. `api/<domain>/` imports `api/client/`, `lib/` and `legacy/os/` only.
8. `platform/**` does not import `pages/`, `components/`, `containers/` or `app/`.
9. Only `platform/`, `api/` and `app/` import `legacy/os/`.
10. No import cycle anywhere (`dependency-cruiser`, `no-circular`).
11. Imports use the alias `@/`. Do not use `../../..`.
12. A barrel `index.ts` exists only at these boundaries: `components/ui`, `components/<domain>`, `containers`,
    `api/<domain>`, `platform/<area>` (R8). Other code imports those folders through the barrel only.
13. Each file that ports an OutSystems screen or block has one tag `@origin` (R4). Inline references to compiled line
    numbers (`mvc.js:640-1150`) are removed when the file is rewritten, not before.

### 2.5 Naming

- Business names in PascalCase, without a module prefix: `HouseholdDetails_Members_Block` → `HouseholdMemberList`.
- Hooks: `use<Thing>`: `useHousehold(id)`, `useHouseholdTags()`.
- Data hooks in `api/<domain>/hooks.ts`: `useHouseholdQuery(id)`, `useSaveNoteMutation()`.
- Repositories in `api/<domain>/repository.ts`: `fetchHousehold(id)`, `saveNote(note)`.
- Mappers in `api/<domain>/mapper.ts`: `toHousehold(wire)`.
- Query keys in `api/<domain>/keys.ts`: `householdKeys.detail(id)`.
- Domain types in `api/<domain>/types.ts`. Wire types stay in `src/api/schema.d.ts`.

### 2.6 From an OutSystems block to React

| OutSystems block                                                 | React target                                             |
| ---------------------------------------------------------------- | -------------------------------------------------------- |
| UI only, with input parameters                                   | Component                                                |
| With a data action, aggregate or side effect                     | Hook + component (§2.3); container only by the criterion |
| Layout block (`Layout_DetailPage`, `CommonUI_InsideLayout`, ...) | `components/layout/`                                     |
| OutSystems UI pattern (`shared/osui/*`)                          | `components/ui/`                                         |
| `DEPRECATED_*` pattern                                           | Delete after the last user moves to the new component    |
| Screen (`screens/<S>/index.tsx`)                                 | `pages/<S>/<S>Page.tsx`                                  |
| `ScreenBlock_*` in `screens/<S>/components/`                     | Split into hooks and components of the page              |

### 2.7 State

| Today                                 | Target                                                                                                             |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| View state (`useViewState`, 53 files) | Stays. Moves to `platform/navigation/viewState.ts`. Pages and hooks use it. Components do not.                     |
| Memory cache (`memoryCache.ts`, 27)   | TanStack Query options per query (`staleTime`, `gcTime`) in `api/<domain>/keys.ts`. Exemption list first (§5.4).   |
| Client variables (46 names, 50 files) | Split: `platform/settings` (server settings), `platform/session` (session state), `platform/navigation` (LastURL). |
| Flow refs (`variablesRef`, 3 files)   | Hooks with `useReducer` when the block becomes a page.                                                             |
| TanStack Query (24 files)             | The only server-state store. Every call goes through `api/<domain>/`.                                              |
| Flags (`lib/flags.ts`)                | `platform/flags` (§3.1).                                                                                           |

### 2.8 Styles (R3)

- Phase 8 adds `styles/tokens.css` (`--color-*`, `--space-*`, `--font-*` from `UBT_Color`, `UBT_Size` and the
  OutSystems CSS variables) and puts the original CSS in `@layer legacy`.
- Existing components keep the legacy class names and the legacy CSS. They are not converted to CSS Modules.
- New components (after the refactor) use CSS Modules with the tokens.
- Unused CSS is deleted with coverage data from the parity captures, one stylesheet at a time, at the `visual` level.

## 3. Platform designs

### 3.1 Feature flags (`platform/flags`)

Files:

| File           | Content                                                                                                                                                                      |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `registry.ts`  | `FLAGS` as `const`: key → `{ description, kind, source, default, owner, removeBy, routes }`. Generated once from `lib/flags.generated.json` (step P4-5), then hand-kept.     |
| `types.ts`     | `type FlagKey = keyof typeof FLAGS`.                                                                                                                                         |
| `resolve.ts`   | `resolveFlags(defaults, server, overrides): Record<FlagKey, boolean>`. Precedence: default < server < override.                                                              |
| `overrides.ts` | `?ff=` and the panel. Compiled only when `FLAG_OVERRIDES_BUILT` is true (dev and demo). Production builds drop this file (same mechanism as `MOCKS_BUILT`, `lib/config.ts`). |
| `server.ts`    | `fetchFlags(): Promise<Partial<Record<FlagKey, boolean>>>`. Mock phase: returns the defaults. Production: one call (R5 a). Cached with TanStack Query, persisted (ADR-10).   |
| `store.ts`     | `useSyncExternalStore` store of the resolved flags, as `lib/flags.ts` does today.                                                                                            |
| `useFlag.ts`   | `useFlag(key: FlagKey): boolean`. The only reader for pages, hooks and containers.                                                                                           |
| `index.ts`     | Barrel: `useFlag`, `flagValue` (for non-React code), `FlagKey`, `setFlagOverride` (dev only).                                                                                |

Rules:

1. `components/**` does not import `platform/flags` (lint rule 4). The page reads the flag and passes a prop.
2. Four flags choose a screen: `C2NewBookmarks`, `C2NewLDM`, `C2NewNotifications`, `C2EnableCarousel`. The route
   table reads them (`app/routes.ts`, field `meta.flagRedirect`), and so does the navigation hook. Call sites do not.
3. The app start waits for `fetchFlags()` before the first protected page renders. On failure: last persisted values,
   then defaults. The session status `ready` needs the flags.
4. A CI check (`scripts/check-flags.ts`, step P9-2) fails in three cases:
   - a key of the registry has no reader in `src/`;
   - a reader uses a key that is not in the registry (TypeScript already fails);
   - `removeBy` is in the past.
5. The OutSystems helper names (`getHasExtendedShare`) stay in `legacy/os/flagNames.ts` as a map for the parity tools
   and the specs. The app code does not call them.

Tests: a Storybook decorator `withFlags({ C2ExtendedShare: true })`; a Vitest helper `setFlags({...})`; the parity flag
variants of `migration/capture-plan.json` keep working through `?ff=` on dev builds.

### 3.2 Session, sign-in and PIN (`platform/auth`, `platform/session`, `platform/bootstrap`)

**State machine** (`platform/session/machine.ts`):

```ts
type SessionStatus =
  | { status: 'starting' }
  | { status: 'signedOut' }
  | { status: 'signingIn' }
  | { status: 'needPinRegister'; userId: string }
  | { status: 'locked'; userId: string; returnTo: string }
  | { status: 'policiesPending'; userId: string }
  | { status: 'unlocked'; userId: string };
```

Transitions (each one has a unit test):

| From                | Event                                   | To                | Today's code                              |
| ------------------- | --------------------------------------- | ----------------- | ----------------------------------------- |
| `starting`          | app start done, no user                 | `signedOut`       | `startup.ts runAppStart`, `session.ts`    |
| `starting`          | app start done, user, PIN_Use, no PIN   | `needPinRegister` | `startup.ts pinUnlockRedirect`, `pin.ts`  |
| `starting`          | app start done, user, PIN, not unlocked | `locked`          | `startup.ts pinUnlockRedirect`            |
| `starting`          | app start done, user, unlocked          | `unlocked`        | `AppStart.tsx`                            |
| `signedOut`         | sign in                                 | `signingIn`       | `auth.ts signIn`                          |
| `signingIn`         | post-login calls done, no PIN           | `needPinRegister` | `auth.ts signIn` (PINRegister)            |
| `signingIn`         | post-login calls done, PIN              | `unlocked`        | `auth.ts signIn` (resume, callback, home) |
| `needPinRegister`   | PIN registered                          | `unlocked`        | `pin.ts registerPin`                      |
| `unlocked`          | inactivity timeout                      | `locked`          | `LockHost.tsx`, `pin.ts lock`             |
| `locked`            | PIN verified                            | `unlocked`        | `pin.ts verifyPin`                        |
| any signed-in state | sign out, 401, SecurityException        | `signedOut`       | `auth.ts signOut`, `shell/exceptions.ts`  |

The selectors `isSignedIn()`, `hasLocalPin()`, `isLocked()`, `hasUnlocked()`, `appReady()` keep their names in Phase 4
and read the machine. The 50 callers outside `shell/` do not change in Phase 4. They change when their page moves.

**AuthProvider** (`platform/auth/provider.ts`):

```ts
export interface AuthProvider {
  signIn(returnTo: string): Promise<void>;
  completeSignIn(): Promise<{ userId: string }>;
  signOut(): Promise<void>;
  getSession(): Promise<{ userId: string } | null>;
}
```

`mockAuth.ts` ports `shell/auth.ts` and `shell/mockUser.ts`. It is imported behind `MOCKS_BUILT` only. `bffAuth.ts` is
not part of this refactor; the interface and a test double are. The post-login sequence (`connectSetLoggedContext(true)`)
stays in `platform/bootstrap/postLogin.ts` and does not depend on the provider.

**Route meta and guard** (`app/routes.ts`, `app/RouteGuard.tsx`):

```ts
interface RouteMeta {
  access: 'anonymous' | 'member'; // ANONYMOUS_SCREENS of shell/paths.ts
  lock: 'enforce' | 'ignore'; // LOCK_SCREEN_IGNORED of shell/paths.ts
  flagRedirect?: { flag: FlagKey; whenOff: string }; // §3.1 rule 2
}
```

The guard maps (status, meta) to a redirect. The table of the redirects is the table of `startup.ts signedOutRedirect`
and `pinUnlockRedirect`, unchanged. Each row has a unit test.

**Settings** (`platform/settings/store.ts`): a typed object filled by `synchAppContext`. Names: `pin.enabled`,
`pin.inactivity.enabled`, `pin.inactivity.seconds`, `pin.enforceOnReady`, `pin.fingerprint`, `app.environment`,
`app.minNativeVersion`, `app.minWebViewChrome`, `app.minWebViewSafari`, `insights.enabled`. The OutSystems names stay in
`legacy/os/clientVarNames.ts` for the parity tools and the specs.

**App start** (`platform/bootstrap/appStart.ts`): a list of steps with names, in the order of `startup.ts runAppStart`:
`synchAppContext`, `initializeWebComponents`, `bottomBarSlider`, `waitForFirstScreen`, `syncInfoMain`,
`setLoggedContext`, `fetchFlags` (new, after `setLoggedContext`), `cacheableMapData`. Each step is a function with a
test. The calls, their order and their conditions do not change (parity `call` check).

**PIN** (`platform/auth/pin.ts`): ports `shell/pin.ts` unchanged. R6 decides the production change later.

## 4. Gates and tools

### 4.1 Levels (D1)

| Level    | Checks                                                              | Use                                         |
| -------- | ------------------------------------------------------------------- | ------------------------------------------- |
| `strict` | DOM, look, behavior (all checks of `route.py parity`)               | Moves, platform changes, data layer changes |
| `visual` | look and behavior; DOM checks off; `style` on visible elements only | Page restructure, UI merges, CSS deletion   |

### 4.2 `migration/tools/refactor_parity.py` (D4), written in step P0-2

```
python3 migration/tools/refactor_parity.py --level strict|visual
    [--all | --routes R1 R2 ... | --changed [--since <commit>]]
    [--ref outsystems|self|both]            default both
    [--record-self]                          records the self-parity reference from the running app
    [--report app/docs/refactor/reports/<name>.md]
    [--app http://localhost:5173]
```

Behavior:

1. Reads the routes and their states from `migration/screens/*/analysis/`.
2. For each route and state, runs `parity_check.cjs` at the level, against the OutSystems capture and against the
   self-parity reference in `migration/refactor-reference/<Route>/<state>/` (DOM, styles, screenshot).
3. `--changed` reads `git diff --name-only <since>..HEAD` and `app/docs/refactor/graph.json` (step P0-3) and selects
   the routes whose import closure contains a changed file. A change in `app/`, `platform/`, `api/client`, `legacy/os`,
   `styles/` or `public/` selects all routes.
4. Writes one Markdown report with one line per route and state, and a total. Exit code 1 when a route has a new
   difference against either reference. Exemptions: `migration/parity-exemptions.json` (OutSystems) and
   `migration/refactor-exemptions.json` (self, new in P0-2; each entry has the step id, the reason and the user's
   confirm).

The fast gate is `--changed`. The full gate is `--all`. The full gate runs at the end of each day and each phase.

### 4.3 Codemod `migration/tools/refactor/move.ts` (ts-morph), written in step P0-3

```
npx tsx migration/tools/refactor/move.ts --from app/src/shell --to app/src/platform/legacy-shell [--dry-run]
npx tsx migration/tools/refactor/move.ts --map app/docs/refactor/move-map.csv --phase P1 [--dry-run]
```

Behavior: the codemod moves the files with `git mv`, with their tests and stories. It rewrites every import in `src/`,
`.storybook/` and `build/` to the alias `@/`. Then it runs `npm --prefix app run typecheck`. It does not change any
other text.

### 4.4 Lint and graph tools (D3), installed in step P0-3

| Tool                       | Config                        | Use                                                                |
| -------------------------- | ----------------------------- | ------------------------------------------------------------------ |
| `dependency-cruiser`       | `app/.dependency-cruiser.cjs` | `no-circular`, folder rules of §2.4, graph export to `graph.json`  |
| `eslint-plugin-boundaries` | `app/eslint.config.js`        | rules 3 to 9 of §2.4; `warn` until Phase 9, then `error`           |
| `eslint-plugin-import-x`   | `app/eslint.config.js`        | `no-relative-parent-imports` (rule 11), `no-cycle` as a second net |
| `jscpd`                    | `app/.jscpd.json`             | duplicate report; threshold in Phase 9                             |
| `knip`                     | `app/knip.json`               | unused files and exports; report in P0, gate in Phase 9            |
| `ts-morph`, `tsx`          | dev dependencies              | the codemod                                                        |

Versions follow the stable rule (ADR-2): major line at least 9 months old, version at least 60 days old. Record the
versions in `app/docs/refactor/baseline.md` and in the ADR of step P0-5.

### 4.5 Commands of the gate

```
npm --prefix app run ci
npm --prefix app run lint:arch          # depcruise + boundaries, added in P1-1
python3 migration/tools/refactor_parity.py --level <level> --changed
python3 migration/tools/refactor_parity.py --level <level> --all     # end of day, end of phase
node app/build/bundle-report.mjs        # first-load size of HomeFeed and Login, added in P0-4
```

## 5. Safety rules

### 5.1 Branch and commits

The rules of `refactor-plan.md` §5.5 apply unchanged:

- one branch, `refactor/architecture`;
- one commit per step, with a message that starts with the phase and the step: `refactor(P1-2): move shell/ to platform/`;
- no push, no merge.

The user gave a standing approval for commits on this branch (user, 2026-10-22).

### 5.2 Pull request size

One goal per commit. A change commit touches at most about 40 files. A move commit can be larger.

### 5.3 Rollback

Each day ends with a green commit. When a gate fails and the fix takes more than one hour, revert the step.

### 5.4 Call parity and TanStack Query

TanStack Query deduplicates identical calls in flight and serves cached data within `staleTime`. The `call` check
compares the calls per step with the capture. Before a step moves a call into a query (P5 and P6):

1. Run the route at `strict` with the query and read the `call` differences.
2. For each difference, decide: `staleTime: 0` and `gcTime: 0` restores the call; or the difference is a duplicate
   call that the original made and the React app no longer makes.
3. Record the second kind in `migration/refactor-exemptions.json` with the step id. Ask the user to confirm the list
   once per phase.

### 5.5 Tests

`npm --prefix app run test` passes after every step. A moved test keeps its name. A rewritten component gets a test
of the same cases. Coverage does not fall below the baseline of P0-1 (statement coverage, recorded in `baseline.md`).

## 6. Phases and steps

Total: about 51 working days for one developer with Claude, plus 15 percent reserve: 58 days. Option R1 (b) is
phases 0 to 7 (about 45 days). Each step has: Goal, Preconditions, Read, Do, Check, Commit.

Durations are estimates. Report the real duration in the daily report.

### Phase 0: freeze, tools, baseline (4 days)

**P0-1 Baseline run** (0.5 day)

- Goal: record the state before any change.
- Preconditions: branch `refactor/architecture` at or after `b3c9704`; tag `migration-complete` exists.
- Read: `migration/tools/README.md`, `app/package.json` (scripts).
- Do:
  1. Start the dev server: `npm --prefix app run dev` in the background.
  2. Run `npm --prefix app run ci`.
  3. Run `python3 migration/tools/parity_sweep.py`. Expect 64/0.
  4. Run `npx vitest run --coverage` in `app/` and record the statement coverage.
  5. Run `npm --prefix app run build` and record the size of each chunk in `app/dist/assets/` (a table: name, kB).
  6. Write `app/docs/refactor/baseline.md` with: date, commit, ci result, parity result, coverage, chunk table, the
     metrics of §7 that are known today.
- Check: `baseline.md` exists and names the commit; `ci` passed.
- Commit: `refactor(P0-1): record the baseline`.

**P0-2 Parity tool for the refactor** (1.5 days)

- Goal: `refactor_parity.py` as §4.2 describes, with the self-parity reference recorded.
- Preconditions: P0-1 committed.
- Read: `$SK/route.py` (functions `parity`, around lines 683 and 860), `$SK/parity_check.cjs` (its CLI and its
  check names), `migration/tools/parity_sweep.py`, `migration/parity-exemptions.json`.
- Do:
  1. Write `migration/tools/refactor_parity.py` with the CLI of §4.2. Reuse `parity_check.cjs` as `parity_sweep.py`
     does.
     - Implement `--level visual` as a list of check names to skip: `structure`, `class`, `attribute`.
     - At this level, run the `style` check on visible elements only. Use the option of `parity_check.cjs` that does
       this. When there is no such option, add one behind a flag, default off. Record the change in
       `migration/tools/README.md`.
  2. Create `migration/refactor-exemptions.json` (empty list) and document its entry shape in the README.
  3. Run `refactor_parity.py --record-self --all` against the dev server at the current commit. The reference goes to
     `migration/refactor-reference/`. Add that folder to `.gitignore` when it is larger than 50 MB; otherwise commit it.
  4. Run `refactor_parity.py --level strict --all --ref both`. Expect 64/0 and 64/0.
  5. Add the tool and its options to `migration/tools/README.md`.
- Check: the run of item 4 is 64/0 for both references; the report is in `app/docs/refactor/reports/P0-2.md`.
- Commit: `refactor(P0-2): add refactor_parity.py and the self-parity reference`.

**P0-3 Dev tools, graph and codemod** (1 day)

- Goal: the tools of §4.4 installed and configured; the codemod works in dry-run.
- Preconditions: P0-2 committed.
- Read: `app/eslint.config.js`, `app/tsconfig.json`, `app/vite.config.ts`, `migration/knowledge/stack-baseline.md`.
- Do:
  1. Pick the versions by the stable rule. Write them in `baseline.md` (table: package, version, release date).
  2. Install them as dev dependencies. Do not change runtime dependencies.
  3. Write `app/.dependency-cruiser.cjs`: `no-circular` as error; the folder rules of §2.4 as `warn`; an output of
     the graph to `app/docs/refactor/graph.json` (`npm run graph`).
  4. Add the alias `@/` → `src/` in `tsconfig.json` and `vite.config.ts`. Do not change any import yet.
  5. Write `migration/tools/refactor/move.ts` (§4.3). Test it with `--dry-run` on `app/src/shell → app/src/platform`.
     The dry run prints the file list and the import count and changes nothing.
  6. Export the first reports: `npx depcruise src --output-type err` (cycles), `npx jscpd src`, `npx knip`. Save the
     outputs under `app/docs/refactor/reports/P0-3-*.txt`.
- Check: `npm --prefix app run ci` passes; `graph.json` exists; the dry run prints a list.
- Commit: `refactor(P0-3): add the architecture tools and the move codemod`.

**P0-4 Measure the code** (0.5 day)

- Goal: the facts the move map needs.
- Preconditions: P0-3 committed.
- Do, with scripts under `migration/tools/refactor/` (keep them, they run again in P9-3):
  1. For each of the 237 shared blocks and the 28 `ScreenBlock_*` files, record these columns:
     - lines, tests, stories;
     - the number of routes that import it;
     - the `callAction` names;
     - the state it uses: `useViewState`, `memoryCache`, client variables, flags.
  2. For each route, record: the chunk size from P0-1; the blocks it imports; the calls per state from
     `migration/screens/<R>/analysis/calls.json`.
  3. List the 71 files that call `callAction` directly, with the module and action names. Group them by domain:
     household, member, country, locality, update, event, bookmark, note, message, notification, app.
  4. Add `app/build/bundle-report.mjs`: prints the first-load size (entry + route chunk + shared chunks) of HomeFeed
     and Login from `dist/`.
- Output: `app/docs/refactor/inventory.csv` (one row per block and screen block) and `app/docs/refactor/calls-by-domain.md`.
- Check: the CSV has 265 rows; the counts match `baseline.md`.
- Commit: `refactor(P0-4): add the code inventory`.

**P0-5 Move map and ADR** (0.5 day)

- Goal: the plan for each block, approved by the user.
- Preconditions: P0-4 committed.
- Read: `inventory.csv`, `refactor-plan.md` §2.1 (candidate duplicates), `migration/catalog/` (block catalog).
- Do:
  1. Verify each candidate duplicate of the draft §2.1 against the code. Write the result in
     `app/docs/refactor/duplicates.md`: for each group, same or different, and the plan (merge, keep, delete).
  2. Write `app/docs/refactor/move-map.csv` with the columns: `source`, `origin` (OutSystems name), `shape` (§2.3),
     `target` (folder and file), `phase` (P1, P2, P6-G1 … P6-G6, P7), `routes` (count), `notes`.
  3. Write the ADR "Target front-end architecture" in `migration/architecture.md` (ADR-15). Content: the terms, the
     folders, the rules, R1 to R8 as the user decided them, the tool versions.
  4. Ask the user to review `move-map.csv`, `duplicates.md` and ADR-15. Stop until the user confirms.
- Check: the user confirmed in the conversation.
- Commit: `refactor(P0-5): add the move map and ADR-15`.

### Phase 1: structure moves (3 days), parity `strict`

**P1-1 Lint rules in warn mode** (0.5 day)

- Goal: the boundary rules exist and report; the build does not fail on them.
- Do:
  1. Add `eslint-plugin-boundaries` elements for the target folders of §2.2 and the rules of §2.4 as `warn`.
  2. Add `eslint-plugin-import-x` with `no-relative-parent-imports` as `warn`.
  3. Add the script `lint:arch`: `depcruise src --config .dependency-cruiser.cjs && eslint . --rule '...'`. Keep
     `npm run ci` unchanged in this phase.
  4. Record the number of warnings in `baseline.md` (metric "boundary violations").
- Check: `npm --prefix app run ci` passes; `npm run lint:arch` runs and prints the count.
- Commit: `refactor(P1-1): add the boundary rules in warn mode`.

**P1-2 Move `shell/` to `platform/`** (1 day)

- Goal: the files of `shell/` live under `platform/<area>/` as the move map says. No code change.
- Read: `move-map.csv` rows with `phase = P1`; `app/src/shell/README.md`.
- Do:
  1. Run the codemod with `--map move-map.csv --phase P1-2`. The target areas:

     | Target                | Files from `shell/`                                                                                                               |
     | --------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
     | `platform/session`    | session.ts, clientVars.ts, pin.ts, auth.ts, mockUser.ts, cachedUserInfo.ts, userInfo.ts, resume.ts, inactivity.ts, testSession.ts |
     | `platform/bootstrap`  | startup.ts, AppStart.tsx                                                                                                          |
     | `platform/navigation` | navigation/*, paths.ts, LockHost.tsx, AppLockHost.tsx                                                                             |
     | `platform/feedback`   | feedback/_, dialogs/_                                                                                                             |
     | `platform/storage`    | storage.ts, localEntities/*, memoryCache.ts                                                                                       |
     | `platform/device`     | deviceContext.ts                                                                                                                  |
     | `legacy/os`           | StylesheetHost.tsx, exceptions.ts, bodyTheme.ts, reviewMarkers.ts                                                                 |
     | `app/`                | ErrorBoundary.tsx, RouteError.tsx                                                                                                 |

  2. Update the paths in `app/docs/guides/shell.md`. Move `shell/README.md` to `app/src/platform/README.md`.
  3. Update the paths in `migration/tools/parity_sweep.py` and `migration/tools/README.md` where they name `src/shell`.
- Check: `ci` passes; `refactor_parity.py --level strict --all` is 64/0 for both references; `git diff --stat` shows
  renames only (plus import lines).
- Commit: `refactor(P1-2): move shell/ to platform/ and legacy/os/`.

**P1-3 Move `lib/` and `components/`** (1 day)

- Goal: the files of `lib/` and `components/` live in their target folders. File names do not change in this step.

  | Source                                                      | Target                                               |
  | ----------------------------------------------------------- | ---------------------------------------------------- |
  | `lib/api.ts`                                                | `api/client/callAction.ts`                           |
  | `lib/os-exceptions.ts`, `lib/os-wire.ts`, `lib/os-assets.*` | `legacy/os/`                                         |
  | `lib/flags.ts`, `lib/flags.generated.json`                  | `platform/flags/`                                    |
  | `lib/config.ts`, `lib/log.ts`, `lib/device*`                | `platform/config`, `platform/log`, `platform/device` |
  | `components/OS*`                                            | `legacy/os/widgets/`                                 |
  | `components/FlagPanel.tsx`                                  | `platform/flags/FlagPanel.tsx`                       |
  | `components/NotCaptured.tsx`                                | `app/`                                               |

- Do: run the codemod with `--phase P1-3`. Keep `window.__osCalls` in `api/client/callAction.ts`.
- Check: as P1-2.
- Commit: `refactor(P1-3): move lib/ and components/ to api/, platform/ and legacy/os/`.

**P1-4 Alias imports** (0.5 day)

- Goal: no `../../..` import in `src/`.
- Do: run the codemod in `--alias-only` mode (rewrite relative parent imports to `@/`). Change
  `no-relative-parent-imports` to `error`.
- Check: `ci` passes; `grep -r "from '\.\./\.\./" app/src | wc -l` prints 0; parity strict 64/0.
- Commit: `refactor(P1-4): use the @/ alias everywhere`.

### Phase 2: walking skeleton on one route (4 days), parity `strict` then `visual`

Route: **HouseholdDetails**. Why this route:

- Its shared block with data (`HouseholdDetails_Block`, 647 lines) serves two pages: HouseholdDetails and
  HouseholdCarousel.
- The Profile preview renders the same block with form data (container criterion 1).
- It uses view state, two flags (`mobilePhotobook`, `C2ExtendedShare`), the share sheet, a kebab menu and
  `Layout_DetailPage`.

What works here works for the other 63 routes.

**P2-1 Move the route to `pages/`** (0.5 day)

- Do: codemod `screens/HouseholdDetails/` → `pages/HouseholdDetails/`, `index.tsx` → `HouseholdDetailsPage.tsx`.
  Update `app/screens.ts` so that it finds `pages/*/<Route>Page.tsx` and falls back to `screens/*/index.tsx` during the
  transition. Add the `@origin` tag.
- Check: `ci`; parity strict on `HouseholdDetails`, `HouseholdCarousel`, `Profile` (both references).
- Commit: `refactor(P2-1): move HouseholdDetails to pages/`.

**P2-2 Domain `api/household`** (1 day)

- Do:
  1. Create `api/household/` with these files:

     | File            | Content                                                                                                                           |
     | --------------- | --------------------------------------------------------------------------------------------------------------------------------- |
     | `types.ts`      | `Household`, `HouseholdMember`, `HouseholdCoordinates`, with the fields the UI reads (`HouseholdDetails_Block/logic.ts`, the JSX) |
     | `mapper.ts`     | `toHousehold(wire)`                                                                                                               |
     | `repository.ts` | `fetchHousehold(inputs)`, `fetchHouseholdCoordinates(inputs)`; they call `callAction` with the OutSystems names                   |
     | `keys.ts`       | `householdKeys.detail(inputs)`, `householdKeys.coordinates(inputs)`                                                               |
     | `hooks.ts`      | `useHouseholdQuery(inputs, options)`, `useHouseholdCoordinatesQuery(inputs, options)`, with `staleTime: 0`, `gcTime: 0` (§5.4)    |
     | `index.ts`      | the barrel                                                                                                                        |

  2. Change `HouseholdDetails_Block/api.ts` to re-export from `api/household`. Do not change the callers yet.
- Check: `ci`; parity strict on the 3 routes.
- Commit: `refactor(P2-2): add api/household`.

**P2-3 Restructure the block into hooks and components** (2 days)

- Read: `HouseholdDetails_Block.tsx`, `logic.ts`, its test and story, `migration/screens/HouseholdDetails/route-spec.md`.
- Do:
  1. `pages/HouseholdDetails/hooks/useHouseholdDetails.ts`: the flows `onInitialize`, `onParametersChanged`,
     `refreshes`, the view state record, with `useReducer` instead of `variablesRef`. Same order of calls.
  2. `containers/HouseholdDetails/HouseholdDetailsContainer.tsx` (criterion 1): takes `source: { kind: 'server';
householdId } | { kind: 'preview'; preview }` and renders `HouseholdDetailsView`.
  3. `components/household/HouseholdDetailsView.tsx` (props only), `HouseholdTags.tsx`, `HouseholdAddress.tsx`,
     `HouseholdMemberList.tsx` (from `HouseholdDetails_Members_Block`), `HouseholdTimelinePhotos.tsx`.
  4. `pages/HouseholdDetails/HouseholdDetailsPage.tsx`: reads `HouseholdId`, reads the flags, renders `DetailLayout`
     with the container.
  5. Update HouseholdCarousel and Profile to use the container. Delete `shared/UBTConnect/HouseholdDetails_Block/`
     and `HouseholdDetails_Members_Block/` after the last import moved. Move the tests and the stories; the story
     `HouseholdDetailsView` shows the 4 states of the capture.
  6. Keep the DOM equal where it costs nothing. Record every DOM change in the step's report.
- Check: `ci`; parity `visual` on the 3 routes, both references; the `call` check equal; `lint:arch` shows no new
  warning for `pages/HouseholdDetails`, `containers/HouseholdDetails`, `components/household`, `api/household`.
- Commit: `refactor(P2-3): HouseholdDetails as page, hooks, container and components`.

**P2-4 Page template and user review** (0.5 day)

- Do:
  1. Write `app/docs/guides/page-template.md`. Content: the folder, the files, the hook shape, the container
     criterion, the test and story shape, the checklist of the gate. Use HouseholdDetails as the example and link to
     the files.
  2. Update `move-map.csv` with what the pilot taught (shapes, time).
  3. Give the user the localhost link of the 3 routes and the report. Stop until the user confirms.
- Check: the user confirmed.
- Commit: `refactor(P2-4): add the page template from the pilot`.

### Phase 3: cycles and direction (4 days), parity `strict`

**P3-1 `shared/UBTConnect` → `screens/` and `app/`** (1 day)

- Do: remove the imports. Give the values through props, or through a context in `platform/`.
- Check: `depcruise` shows no edge from `shared/` to `screens/` or `app/`; parity strict `--changed`.
- Commit: `refactor(P3-1): shared code no longer imports screens or app`.

**P3-2 `UBTConnect ↔ UBTConnectLibrary ↔ UBTConnect_Utils`** (1.5 days)

- Do: move the static entities and structures that the three modules share to `api/<domain>/types.ts` or `lib/`.
  Move the shared actions to `platform/` or `lib/`.
- Check: `depcruise` reports 0 cycles in these three folders.
- Commit: `refactor(P3-2): remove the UBTConnect cycles`.

**P3-3 The two other cycles and `osui`** (1 day)

- Do: remove `Connect2_LegacyShared ↔ UBTConnect` and `Connect2_Assemble_MUI ↔ Connect2_MyBookmarks_MUI`. Remove every
  import from `shared/osui` to the app modules.
- Check: `depcruise` reports 0 cycles in `src/`.
- Commit: `refactor(P3-3): zero import cycles`.

**P3-4 Measure and report** (0.5 day)

- Do: record the `lint:arch` counts, `jscpd` and the chunk sizes in `reports/P3.md`.
- Check: full parity strict.
- Commit: `refactor(P3-4): phase 3 report`.

### Phase 4: platform (6 days), parity `strict`

**P4-1 Settings store** (1 day)

- Do: write `platform/settings` as §3.2. `synchAppContext` writes the store. The old readers of
  `getClientVar('UBT_AppManager.PIN_Use')` keep their call: an adapter in `legacy/os/clientVarNames.ts` reads the store.
  The readers change when their page moves.
- Check: `ci`; parity strict `--all` (the app start is global).
- Commit: `refactor(P4-1): typed settings store`.

**P4-2 Session state machine** (2 days)

- Do: write `platform/session/machine.ts` as §3.2, with a unit test per transition. The selectors keep their names.
  `LockHost`, `AppStart`, `auth.ts` and `pin.ts` write the machine.
- Check: `ci`; the new tests pass; parity strict `--all`; `npm run e2e:pwa` passes.
- Commit: `refactor(P4-2): session state machine`.

**P4-3 AuthProvider and bootstrap steps** (1 day)

- Do: write the interface and `mockAuth` behind `MOCKS_BUILT`. Write `platform/bootstrap/appStart.ts` as named steps,
  and `postLogin.ts`.
- Check: parity strict `--all`; `build/mockFree.ts` passes (no mock code in a production build).
- Commit: `refactor(P4-3): AuthProvider interface and app-start steps`.

**P4-4 Route meta and guard** (1 day)

- Do: write `app/routes.ts` (the generated route list plus `meta`) and `app/RouteGuard.tsx`. Delete
  `ANONYMOUS_SCREENS` and `LOCK_SCREEN_IGNORED` from `paths.ts`. Write a unit test per row of the redirect table.
- Check: parity strict `--all`; the e2e journeys "deep link signed out" and "lock and unlock" pass.
- Commit: `refactor(P4-4): route meta and one route guard`.

**P4-5 Flags registry** (1 day)

- Do:
  1. Write `platform/flags` as §3.1. Generate the registry from `flags.generated.json`. Type `useFlag`.
  2. Add `FLAG_OVERRIDES_BUILT`. `fetchFlags` returns the defaults in the mock phase.
  3. The helper functions in `shared/UBTConnect_Utils/lib/actions.ts` call `flagValue(key)`; their callers do not
     change.
  4. Move the route-level flags to `meta.flagRedirect`.
- Check: `ci`; `?ff=` works on dev; parity strict `--all` with the flag variants of `capture-plan.json`.
- Commit: `refactor(P4-5): typed flag registry and resolver`.

### Phase 5: data layer (6 days), parity `strict`

**P5-1 `api/client`** (1 day)

- Do: keep `callAction` unchanged. Add `ApiError` with `kind: 'timeout' | 'network' | 'server' | 'security' |
'viewChanged'` and `cause` = the OutSystems exception. `legacy/os/osExceptions.ts` maps both ways. The 401 and
  `SecurityException` path calls `session.signedOutRemotely()`.
- Check: parity strict `--all` (the offline and error states).
- Commit: `refactor(P5-1): api/client with ApiError`.

**P5-2 Domains, first half** (2 days)

- Do: create `api/member`, `api/country`, `api/locality`, `api/update` and `api/app` (the app-start calls). Each
  domain gets the files of P2-2: types with the fields the UI reads, mapper, repository, keys, hooks. The old `api.ts`
  files re-export. Apply §5.4 to each call that moves into a query.
- Check: parity strict `--changed`; the exemption list of the phase is written.
- Commit per domain: `refactor(P5-2): add api/<domain>`.

**P5-3 Domains, second half** (2 days)

- Do: the same steps for `api/event`, `api/bookmark`, `api/note`, `api/message` and `api/notification`.
- Commit per domain.

**P5-4 Memory cache to query options** (1 day)

- Do: for each of the 27 users of `memoryCache.ts`, the TTL becomes the `staleTime` of the query: 7200 s for the map
  objects, and the user-info cache as the original. Delete `memoryCache.ts` when the last user moved.
- Check: parity strict `--all`; the `call` check equal or exempted. Ask the user to confirm the exemption list of
  Phase 5.
- Commit: `refactor(P5-4): memory cache as query options`.

### Phase 6: pages by group (18 days), parity `strict` then `visual`

Each group has the same steps. The route list per group is in §8.

- **Step A, move** (`strict`): codemod `screens/<R>` → `pages/<R>` for the group; `@origin` tags. Commit
  `refactor(P6-G<n>-A): move <group> to pages/`.
- **Step B, restructure** (`visual`), for each route, in the order of the group:
  1. `ScreenBlock_*` → hooks and components (§2.3, `page-template.md`).
  2. Shared blocks that only this group uses → `pages/<R>/components`.
  3. Shared blocks that 2 or more pages use → `components/<domain>` or `containers/`.
  4. The route's `api.ts` → the domain hooks.
  5. Delete the old files when the last import moved.
  6. One commit per route: `refactor(P6-G<n>-B): <Route> as page`.
- **Step C, prune**: run `knip` and `jscpd` on the group; delete the unused files; write the report. Commit
  `refactor(P6-G<n>-C): prune <group>`.
- **Gate per route**: `ci`; parity `visual` `--changed` against both references; `lint:arch` shows no new warning in
  the new folders.
- **Gate per group**: parity `visual` `--all`; the e2e suite; the bundle report. The user gets the localhost links of
  the group's routes and confirms once per group.

| Group | Routes | Days | Note                                                                                               |
| ----- | ------ | ---- | -------------------------------------------------------------------------------------------------- |
| G1    | 10     | 2    | Auth and menu screens. Small pages. The session machine of P4 already holds the logic.             |
| G2    | 9      | 3    | Contact and email: merge the 7 email screens into one `ContactForm` container + config.            |
| G3    | 8      | 4    | Home, feed, search, messages: the largest shared blocks (`FilterSheet`, `Feed_Embeded`).           |
| G4    | 13     | 4    | Directory: HouseholdDetails is done (P2). Carousel and supper meeting reuse its pieces.            |
| G5    | 16     | 4    | Orbit, Assemble, LDM: `EventBooklet` (1,077 lines) is one full day. LDM and Assemble share blocks. |
| G6    | 7      | 1    | Bookmarks, notes, share, documents.                                                                |

After G6: `screens/` and `shared/` are empty. Delete them and the fallback in `app/screens.ts`. Commit
`refactor(P6-end): delete screens/ and shared/`.

### Phase 7: shared UI consolidation (5 days), parity `visual`

Do this after Phase 6: the real usage of each component is known then.

**P7-1 `components/ui` from `osui`** (1 day)

- Do: move `shared/osui/*` (without `DEPRECATED_*`) to `components/ui/`. Write one story per component. Delete
  `DEPRECATED_*`: P6 moved their last users.

**P7-2 Dialogs** (1 day)

- Do: write `Dialog` with the variants `ConfirmDialog`, `ChoiceDialog` and `NavigationDialog`, as `duplicates.md`
  planned. Update the users. Commit per merge.

**P7-3 Empty states and skeletons** (1 day)

- Do: write `EmptyState` and `Skeleton`. Update the users. Commit per merge.

**P7-4 Cards and carousels, by evidence** (1.5 days)

- Do: merge only the groups that `duplicates.md` marked "same" and that `jscpd` still reports after Phase 6. Keep the
  others as domain components.

**P7-5 Report** (0.5 day)

- Do: write `components/ui/README.md` and `reports/P7.md`.
- Check: full parity `visual`.

### Phase 8: styles, light (3 days), parity `visual`

**P8-1 Tokens and layers** (1 day)

- Do: write `styles/tokens.css` from `UBT_Color`, `UBT_Size` and the OutSystems CSS variables. Put the 52 stylesheets
  in `@layer legacy` in `StylesheetHost`. Use `@layer app` for new CSS.
- Check: parity `visual` `--all`; the pixel check is equal.

**P8-2 Delete unused CSS** (2 days)

- Do: use the CSS coverage of the parity captures (`css_observe.cjs`). Delete the unused rules of one stylesheet at a
  time. Run parity `visual` `--all` after each stylesheet. Stop at the first pixel difference and keep that
  stylesheet. Record the sizes before and after.

### Phase 9: lock (3 days)

**P9-1 Rules to error** (0.5 day): boundaries, `no-circular`, `jscpd` threshold (the value of P7-5 plus 10 percent),
`knip` in `npm run ci`. Fix the last warnings.

**P9-2 Flag check** (0.5 day): `scripts/check-flags.ts` as §3.1 rule 4, in `npm run ci`.

**P9-3 Docs** (1 day): `README.md`, `docs/architecture/overview.md` (new diagrams), `docs/guides/*` (paths),
`CLAUDE.md` (paths and the skill as reference only), ADR-15 status accepted, `page-template.md` final.

**P9-4 Report** (1 day): run the P0-4 scripts again; the metrics table of §7 with baseline and result; the list of
work not done; `reports/final.md`. Give the user the report.

## 7. Metrics

| Metric                                            | Baseline (P0-1) | Target                                 | Measured in |
| ------------------------------------------------- | --------------- | -------------------------------------- | ----------- |
| Import cycles                                     | measure         | 0                                      | P3-4, P9-4  |
| Boundary violations                               | measure (P1-1)  | 0                                      | P9-1        |
| Duplicate code (`jscpd`, percent of lines)        | measure         | half of the baseline or less           | P7-5, P9-4  |
| Files in `pages/` that import `platform/`         | n/a             | only through `platform/<area>` barrels | P9-1        |
| Files that call `callAction` outside `api/`       | 71              | 0                                      | P5, P6      |
| Users of `memoryCache`                            | 27              | 0                                      | P5-4        |
| Users of `getClientVar` outside `platform/`       | 50              | 0                                      | P6          |
| Readers of flags outside pages, hooks, containers | measure         | 0                                      | P9-2        |
| Lines of the largest page or component file       | 1,077           | 400 or less                            | P6, P9-4    |
| Parity against OutSystems                         | 64/0            | 64/0 at the level of the phase         | each phase  |
| Self-parity                                       | 64/0            | 64/0 at the level of the phase         | each phase  |
| Statement coverage                                | measure         | not below the baseline                 | each phase  |
| First-load size: HomeFeed, Login (kB gzip)        | measure         | not above the baseline plus 5 percent  | each group  |
| Total JS and CSS (kB gzip)                        | measure         | not above the baseline                 | P9-4        |
| Legacy CSS (kB)                                   | 1,600           | smaller; report the value              | P8-2        |

## 8. Route groups of Phase 6

The 64 finished routes (`route.py plan`, 2026-10-22). HouseholdDetails is done in Phase 2.

| Group | Routes                                                                                                                                                                                                                                                                    |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| G1    | Login, Splash, PINRegister, PINUnlock, PINChange, PINBiometricsMenu, AcceptPendingPolicies, Menu, TermsAndPoliciesMenu, Profile                                                                                                                                           |
| G2    | ContactUsMenu, ContactUsDetails, ContactByEmailMember, ContactByEmailOneSchoolGlobal, ContactByEmailLDMCoordinator, ContactByEmailOrbitHelpdesk, ContactByEmailOrbitHost, EmailContact, EmailTarget                                                                       |
| G3    | HomeFeed, FeedItemDetail, Updates_SingleList, Services, Search, Notifications, MessageList, MessageDetail                                                                                                                                                                 |
| G4    | BrowseCountries, BrowseDirectory, CountryList, CountryDetails, HouseholdCarousel, Household_Relations, Locality_Details, OneSchoolGlobalDetails, Photobook, SupperMeeting_Carousel, SupperMeeting_Details, CommunityBusinessDetails_CoomingSoon, Assemble_BrowseByCountry |
| G5    | OrbitLanding, OrbitAdminLanding, OrbitAdminEventDetail, EventDetail, EventBooklet, MilestoneDetail, GuestArrangements, HelpersDetail, HostSurvey, TransportDetail, MyEntertaining, LDM_MyEvents_V2, LDM_EventDetail_V2, LDM_Email_V2, AssembleEvents, AssembleDetail      |
| G6    | MyBookmarks, BookmarksByGroup, Notes, ConnectShare, LegacyShareObject, QRCodeGenerate, ViewDocuments                                                                                                                                                                      |

Count check: 10 + 9 + 8 + 13 + 16 + 7 + 1 (HouseholdDetails) = 64.

## 9. Decisions

| Id  | Decision                       | Answer                                                                                                                                                  | Who, date                       |
| --- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| D1  | Parity during the refactor     | Two levels and a self-parity reference                                                                                                                  | user, 2026-10-22                |
| D2  | API contract                   | Keep it, behind `api/<domain>/`                                                                                                                         | user, 2026-10-22                |
| D3  | Dev dependencies               | `dependency-cruiser`, `eslint-plugin-boundaries`, `jscpd`, `knip`, `ts-morph`; this plan adds `eslint-plugin-import-x` and `tsx` (needs the user's yes) | user, 2026-10-22; addition open |
| D4  | Relation to the skill pipeline | Option B, `refactor_parity.py`                                                                                                                          | user, 2026-10-22                |
| D5  | Start date                     | Open                                                                                                                                                    | —                               |
| R1  | Scope and time                 | Open. This plan assumes (b).                                                                                                                            | —                               |
| R2  | Container criterion            | Open. This plan assumes (b), §2.3.                                                                                                                      | —                               |
| R3  | CSS scope                      | Open. This plan assumes (b), §2.8.                                                                                                                      | —                               |
| R4  | OutSystems references          | Open. This plan assumes (b), `@origin`.                                                                                                                 | —                               |
| R5  | Flag source in production      | Open. This plan assumes (a).                                                                                                                            | —                               |
| R6  | PIN verification in production | Open. Not needed before the BFF phase.                                                                                                                  | —                               |
| R7  | Sequence                       | Open. This plan assumes (b), Phase 2 pilot.                                                                                                             | —                               |
| R8  | Barrels                        | Open. This plan assumes (b), §2.4 rule 12.                                                                                                              | —                               |

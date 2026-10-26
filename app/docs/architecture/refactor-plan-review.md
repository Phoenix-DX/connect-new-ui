# Review of the refactor plan (draft of 2026-10-22)

Status: **review by Claude, for the user**. Written 2026-10-22. The user asked for an honest review of
`refactor-plan.md` and of the React app in `src/`, with a score from 1 to 10. The user also asked for a design of the
feature flags and of the sign-in flow. The detailed plan that follows this review is `refactor-plan-v2.md`.

Writing rules: `migration/english-docs/style-rules.md`.

Evidence: the files named in each row. Counts come from `grep` and `find` on 2026-10-22, on the branch
`refactor/architecture`, commit `b3c9704`.

## 1. Score

**Plan: 6 / 10.** The plan is good at safety and process. It is weak at realism, at the state model, and at the two
topics it does not cover: feature flags and the sign-in flow.

| Area                                              | Score | Why                                                                                                                                                                                             |
| ------------------------------------------------- | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Goal and principles (§1, §3)                      | 9     | Clear. "Move and change in different commits" and "lint enforces the rules" are the right rules.                                                                                                |
| Measured current state (§2)                       | 8     | Real numbers, real cycles. The duplicate list is a candidate list, and the plan says so.                                                                                                        |
| Target folders and rules (§4.2, §4.3)             | 7     | Standard and correct. Rule 9 (an `index.ts` in every folder) is a known source of slow dev builds and of cycles. Rule 4.4 removes OutSystems references from the code: this loses traceability. |
| Container and component split (§4.1, §4.4)        | 5     | The split is a 2015 pattern. Hooks replaced it. Applied to 237 blocks, it doubles the file count and adds a layer that does nothing in half of the cases. The plan gives no criterion.          |
| Data layer (§4.5, Phase 4)                        | 4     | 4 days for 10 domains, with 71 files that call `callAction` and 3 state systems (view state, memory cache, client variables) that the plan does not mention.                                    |
| Styles (§4.6, Phase 6)                            | 4     | CSS Modules for `components/ui/` while 52 global OutSystems stylesheets stay active, with pixel parity, in 4 days. High risk, low value for the production goal.                                |
| Safety: parity levels, self-parity, codemods (§5) | 9     | The best part of the plan. The two levels and the self-parity reference are the right idea.                                                                                                     |
| Sequence (§6)                                     | 5     | The first full vertical slice (one route in the target structure) comes on day 20. The plan merges UI components (Phase 3) before it knows the real usage of each component (Phase 5).          |
| Estimate (§6: 35 days)                            | 3     | Not realistic. See §2.1.                                                                                                                                                                        |
| Metrics (§7)                                      | 7     | Good set. "Mean lines in a page file ≤ 80" is arbitrary. The bundle metric must measure the first load of a route, not only the total.                                                          |
| Feature flags                                     | 2     | One line: "move `flags` to `lib/config/`". No design for production (per-user flags from the server).                                                                                           |
| Sign-in, PIN, session                             | 2     | Not in the plan. The move of `shell/` to `platform/` is a move only. Production needs a real identity provider (B2C through a BFF, user 2026-10-16, P12).                                       |

## 2. Findings

### 2.1 The estimate is 2 to 3 times too low

Facts:

- `src/` has 146k lines. `screens/` has 49.7k lines in 502 files. `shared/` has 57k lines in 237 blocks.
- 28 `ScreenBlock_*` files in `screens/` and 10 shared blocks have more than 530 lines each. The largest has 1,077
  (`screens/EventBooklet/components/ScreenBlock_EventBooklet.tsx`).
- The blocks port OutSystems flows line by line: `OnInitialize`, `OnParametersChanged`, refs that hold variables
  (`HouseholdDetails_Block.tsx:143-300`). A split of such a block into a container and components is a rewrite of the
  block, not a move.
- The parity sweep takes about 10 minutes for 64 routes (`migration/tools/README.md`). The plan runs it after every
  step.

Phase 5 gives 7 days for 64 routes and 237 blocks. That is about 9 routes and 34 blocks each day, with a parity run
after each group. One developer with Claude can restructure 2 to 4 routes a day when the route has one big block. The honest
estimate for the full plan is 60 to 80 working days, or 35 days for a smaller scope (see §4, decision R1).

### 2.2 The container and component split needs a criterion, not a rule

The plan makes "container" the default for every block with data (§4.4). In React with hooks, the usual shape is:

- a **page** that reads the route and composes;
- **hooks** that hold the data and the flows (`useHousehold(id)`, `useHouseholdTags()`);
- **components** that take props.

A separate container component is useful in two cases only:

1. The same UI shows data from two different sources (the Profile preview shows `HouseholdDetails_Block` with form data
   instead of server data: `HouseholdDetails_Block.tsx:86-90`, `preview`).
2. The component has more than one data hook and more than one event handler, and the markup is also big.

In the other cases a page or a parent component calls the hook and passes props. The result is the same separation
(data in hooks, UI in components), with one file less. The plan v2 gives the criterion (§3.2 of `refactor-plan-v2.md`).

### 2.3 Three state systems mirror OutSystems; the plan does not say what happens to them

| State system                       | Where                                                | Users                     | What it mirrors                                           |
| ---------------------------------- | ---------------------------------------------------- | ------------------------- | --------------------------------------------------------- |
| View state                         | `shell/navigation/viewCache.ts`, `useViewState`      | 53 files                  | OutSystems screen and block variables kept on back        |
| Memory cache                       | `shell/memoryCache.ts`                               | 27 files                  | `Cache_*` and `CacheableObjects` of the original          |
| Client variables                   | `shell/session.ts`, `shell/clientVars.ts` (46 names) | 50 files outside `shell/` | OutSystems client variables (`UBT_AppManager.PIN_Use`, …) |
| TanStack Query                     | `main.tsx`, `screens/*/api.ts`                       | 24 files                  | data actions of some screens (pattern P-DATA)             |
| Flow refs (`variablesRef.current`) | 3 shared blocks (`HouseholdDetails_Block`, 2 others) | 3 files                   | synchronous assignment of block variables                 |

The plan moves these files to `platform/` and keeps them. A clean architecture needs a decision for each one:

- **View state**: keep as a navigation feature (`platform/navigation`), with a hook that pages use. It is a real
  requirement of the original (P-BACK).
- **Memory cache**: replace by TanStack Query `staleTime` and `gcTime` per query. The `call` parity check counts calls per
  step. TanStack Query deduplicates calls, so some steps make fewer calls than the capture. The plan must list these
  routes and record an exemption for each one before the change.
- **Client variables**: split in three. Settings from the server (`PIN_Use`, `MinNativeAppVersion`, …) go to a typed
  `settings` store. Session state (`PIN_IsLocked`, `PIN_HasUnlocked`, signed-in user) goes to the session state machine
  (§3.2 of this review). Screen-to-screen values (`LastURL`, `IsNavigateToHomeOnBack`) go to `platform/navigation`.
  The OutSystems names stay only in a map for the parity tools.
- **Flow refs**: rewrite as hooks when the block becomes a page (Phase 6 of plan v2).

### 2.4 The data layer plan does not match the code

- 71 files call `callAction` directly. Only 24 use TanStack Query. The pattern P-DATA ("components use TanStack Query
  hooks defined in `api.ts`") was applied in a part of the routes only. The plan v2 measures this first (step P0-4).
- The mappers from wire type to domain type exist in some `api.ts` (`screens/OneSchoolGlobalDetails/api.ts:23-33`)
  and not in others (`shared/UBTConnect/HouseholdDetails_Block/api.ts:29-37` returns the wire records).
- A domain folder for 10 domains with full mappers in 4 days is not possible. Plan v2 creates a domain folder when the
  first page of that domain moves, with a mapper for the fields the UI reads. Fields the UI does not read stay as wire
  types behind the repository.

### 2.5 CSS Modules for the legacy UI is the wrong fight

The goal is "UI/UX 1:1" and "replace the OutSystems app in production" (user, 2026-10-14). The 52 original stylesheets
(1.6 MB) select on OutSystems class names. A merged `Card` with a CSS Module gets new class names, so it loses the
legacy styles. The developer then rewrites the styles by hand for each variant and viewport. The pixel check then
decides. This work does not improve maintainability for the user: the designs do not change.

Recommendation: do the cheap part (design tokens, `@layer legacy`, delete unused CSS with the coverage data) and do not
convert existing components to CSS Modules. New components (built after the refactor) use CSS Modules with the tokens.
This is decision R3 (§4).

### 2.6 Traceability: keep one origin tag per file

The plan removes OutSystems references from the code and keeps a CSV (§4.4). The strength of this code base is that
each flow cites its source (`HouseholdDetails_Block.tsx:139-156`). The reviewers of the user's team read these lines.
Recommendation: keep one JSDoc tag per file, `@origin UBTConnect.Directory_Household.HouseholdDetails_Block`, and remove
the inline line numbers (`mvc.js:2202-2257`) when the block is rewritten. The parity tool and the specs read the tag
instead of a CSV that gets stale. Decision R4.

### 2.7 Smaller points

1. **Barrels** (rule 9): an `index.ts` in every folder makes Vite dev slower and hides cycles. Use a barrel only at a
   package boundary: `components/ui`, `api/<domain>`, `platform/<area>`. Inside a page, import files directly.
2. **Affected routes**: the plan runs the full gate after each step. `dependency-cruiser` gives the import graph. A
   script can list the routes that import a changed file and run parity on those routes only (fast gate). The full
   gate runs at the end of each day and each phase.
3. **Tests and stories move with the code**: 322 test files and 237 stories import by relative path. The codemod must
   move them, and `vitest` must stay green at each step. The plan does not say this.
4. **Bundle metric**: measure the first-load chunk of HomeFeed and of Login, not only the total. Merged components move
   code from route chunks into shared chunks.
5. **Route table**: `app/routes.generated.ts` comes from the survey. The target needs route meta (access, lock, title,
   typed inputs) in one place. Today `shell/paths.ts` holds two hard-coded sets (`ANONYMOUS_SCREENS`,
   `LOCK_SCREEN_IGNORED`).
6. **Exceptions**: `lib/os-exceptions.ts` models OutSystems exceptions and `shell/exceptions.ts` routes them to the
   flow handler. The plan does not say what the domain error model is. Plan v2 keeps the OutSystems exceptions in
   `legacy/os` and maps them to a small `ApiError` type in `api/client` (step P5-1).
7. **Lint today**: `eslint.config.js` has no boundary rule and no import plugin. `consistency_check.py` checks folders
   only for finished routes. The plan's Day 4 is right to start here.

## 3. Design for the two missing topics

### 3.1 Feature flags

**Facts.** 20 flags are decided (`lib/flags.generated.json`). All values are `on` or `off`. 32 files read them with
`useFlagOn` or `isOn`.

The OutSystems helpers (`GetHasExtendedShare`, …) are per-user permission checks on the server:
`Connect_OutSystems_PermissionCheck` and `Connect_LaunchDarkly_PermissionCheck` (`migration/knowledge/feature-flag-helpers.md`).
In the React app the helpers are functions that read the local flag (`shared/UBTConnect_Utils/lib/actions.ts:49-293`).

The defaults are build-time values from the user's decisions. Overrides come from `?ff=` and `sessionStorage`.

**Production needs.** Flags are per user and the server decides them. The app must load them after sign-in, before the
first protected screen renders, and must keep working offline with the last known values.

**Target design** (`src/platform/flags/`):

| Part              | Content                                                                                                                                                                                                                           |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `registry.ts`     | One entry per flag: `key`, `description`, `kind` (`release`, `permission`, `ops`), `source` (`server`, `build`), `default`, `owner`, `removeBy` (date or `permanent`), `routes`. Generated from `flags.generated.json` at first.  |
| `FlagKey`         | The union type of the registry keys. A flag that is not in the registry does not compile.                                                                                                                                         |
| `resolve.ts`      | Order of precedence: build default < server values < local override. Local overrides exist in dev and demo builds only (behind `MOCKS_BUILT`-style constant `FLAG_OVERRIDES_BUILT`). Production builds drop the panel and `?ff=`. |
| `server.ts`       | One call after sign-in: `GET /api/flags` (BFF) or the existing per-helper actions behind one function. The answer is cached with TanStack Query (`staleTime` 5 min) and persisted for offline (IndexedDB, ADR-10 exception).      |
| `useFlag(key)`    | Returns `boolean`. The only reader for pages, containers and hooks. `components/ui` and `components/<domain>` do not import it (lint).                                                                                            |
| `flagsReady`      | Part of the app-start sequence: the session state machine enters `ready` only after the flags resolved or failed (fallback: last known, then defaults).                                                                           |
| Route-level flags | Flags that choose a screen (`C2NewBookmarks`, `C2NewLDM`, `C2NewNotifications`, `C2EnableCarousel`) are read in the route table (`app/routes`), not in 13 call sites.                                                             |
| Tests             | `withFlags({...})` decorator for Storybook, `setFlags()` helper for Vitest, flag variants from `migration/capture-plan.json` for parity.                                                                                          |
| Life cycle        | A CI check fails when a registered flag has no reader, or when `removeBy` is in the past. A flag with `branches: default-only` has one branch in the code and a comment that names the missing branch.                            |

**Open decision for the user (R5):** the server contract for flags. Option (a): one batch call `GET /api/flags` through
the BFF (one request, simple cache). Option (b): keep the 20 per-helper actions as in OutSystems (call parity stays
exact, 20 requests). Recommendation: (a), with a parity exemption for the flag calls.

### 3.2 Sign-in, PIN and session

**Facts.** Today the sign-in is a mock (`shell/auth.ts:19-30`). The button sets a mock user and runs the post-login
calls. Then it goes to PINRegister, the resume link, the callback or HomeFeed. The PIN is local, hashed with SHA-256 and
a salt (`shell/pin.ts`). The session state is five booleans in `shell/session.ts` (`signedIn`, `hasLocalPin`, `locked`,
`hasUnlocked`, `appReady`).

The redirects live in `shell/AppStart.tsx` and `shell/startup.ts:270-296`. The app start runs 7 calls in a fixed order
(`startup.ts:219-258`). The user decided: real sign-in through a same-origin BFF with an HttpOnly cookie, B2C redirect,
no tokens in the browser (P12, 2026-10-16).

**Target design** (`src/platform/auth/`, `src/platform/session/`, `src/platform/bootstrap/`):

1. **An `AuthProvider` interface** with two implementations.

   ```ts
   interface AuthProvider {
     signIn(returnTo: string): Promise<void>; // mock: at once; BFF: full-page redirect to /bff/login
     completeSignIn(): Promise<SignInResult>; // the callback route (/UBT_AppManager/Callback today)
     signOut(): Promise<void>; // mock: local; BFF: POST /bff/logout then B2C end-session
     getSession(): Promise<Session | null>; // BFF: GET /bff/session (cookie); mock: local storage
   }
   ```

   `mockAuth` ships in mock builds only (`MOCKS_BUILT`). `bffAuth` ships in production. The pages do not know which
   one runs.

2. **One session state machine** instead of five booleans. The status is a discriminated union:

   | Status            | Meaning                                                      | Next                                             |
   | ----------------- | ------------------------------------------------------------ | ------------------------------------------------ |
   | `starting`        | The app-start sequence runs.                                 | `signedOut` or `signedIn.*`                      |
   | `signedOut`       | No session.                                                  | `signingIn` (redirect)                           |
   | `signingIn`       | The callback runs `completeSignIn` and the post-login calls. | `needPinRegister`, `unlocked`, `policiesPending` |
   | `needPinRegister` | Signed in, `PIN_Use` on, no local PIN.                       | `unlocked` after the registration                |
   | `locked`          | Signed in, local PIN, the tab was not unlocked or timed out. | `unlocked` after the PIN                         |
   | `policiesPending` | Signed in, pending policies to accept.                       | `unlocked`                                       |
   | `unlocked`        | Normal use.                                                  | `locked` (inactivity), `signedOut` (logout, 401) |

   Today's booleans become selectors on this state. The parity of the behavior does not change: the transitions are
   the ones `startup.ts`, `auth.ts`, `pin.ts` and `LockHost.tsx` already make.

3. **One route guard** in `app/`, declarative. The route table gets `meta.access` (`anonymous` or `member`) and
   `meta.lock` (`enforce` or `ignore`). The guard maps (status, meta) to a redirect:
   - `signedOut` + `member` → Login with `returnTo`;
   - `needPinRegister` → PINRegister;
   - `locked` + `enforce` → PINUnlock with `returnTo`.

   The two sets in `shell/paths.ts` become route meta. The guard has a unit test per row of the table.

4. **The app start** becomes a list of named steps in `platform/bootstrap/appStart.ts`, in the same order as today. Each
   step has a name, the calls it makes, and the state it writes. The parity tool reads the same `window.__osCalls`.

5. **Settings** from `SynchAppContext` (`PIN_Use`, `PIN_SessionInactivity_Seconds`, min versions, …) go to a typed
   `platform/settings` store with domain names (`pin.enabled`, `pin.inactivitySeconds`). The OutSystems names stay in
   one map, for parity and for the specs.

6. **API client and 401.** The client in `api/client` turns a 401 or a `SecurityException` into
   `session.signedOutRemotely()`. The guard then sends the user to Login with `returnTo`. Today this path is the
   OutSystems `ShowExceptionMessage` redirect (`shell/auth.ts:38-40`).

7. **PIN, honest note.** A 4-digit PIN with a salted SHA-256 hash gives no protection against an attacker who reads the
   device storage: 10,000 hashes take milliseconds. The PIN is a UI lock. The real protection is the BFF session on the
   server.

   For production the user must decide (R6): (a) keep the local PIN as the original does, or (b) verify the PIN on
   the BFF with an attempt counter. **Unclear:** whether the original keeps the PIN local only
   (`migration/knowledge/auth.md`, "It is not verified whether `PIN_Set` touches the server").

8. **Security list for the BFF phase** (not in this refactor, for the record): CSRF token or `SameSite=Strict` on the
   cookie; the service worker never caches `/bff/*` (already decided, P12); CSP; the logout clears IndexedDB
   (ADR-10, already done).

9. **Tests**: a unit test per transition of the state machine, and one e2e per journey. The journeys: sign-in →
   PINRegister → HomeFeed; lock → unlock → same screen; logout; deep link while signed out; callback error.

## 4. Decisions for the user

The user chose the recommendation of every row on 2026-10-22. R6: (a) for now; the security owner reviews it before
the BFF phase. The start date (D5) stays open.

| Id  | Decision                       | Options                                                                                                                                                                                                                                 | Recommendation                         |
| --- | ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| R1  | Scope and time                 | (a) full plan, 60 to 80 days; (b) plan v2 core phases 0 to 7 (about 50 days; first written as 45, corrected 2026-10-22), styles (phase 8) and lock (phase 9) as stretch; (c) structure and platform only (phases 0 to 4, about 20 days) | (b)                                    |
| R2  | Container split                | (a) container for every block with data; (b) hooks by default, container only by the criterion of plan v2 §3.2                                                                                                                          | (b)                                    |
| R3  | CSS scope                      | (a) CSS Modules for `components/ui`; (b) tokens + `@layer legacy` + delete unused CSS; CSS Modules for new components only                                                                                                              | (b)                                    |
| R4  | OutSystems references in code  | (a) none, CSV map; (b) one `@origin` tag per file, no inline line numbers after a rewrite                                                                                                                                               | (b)                                    |
| R5  | Flag source in production      | (a) one batch call through the BFF; (b) per-helper actions as the original                                                                                                                                                              | (a)                                    |
| R6  | PIN verification in production | (a) local, as the original; (b) BFF verifies with an attempt counter                                                                                                                                                                    | ask the security owner; (a) for parity |
| R7  | Sequence                       | (a) the draft order; (b) plan v2: walking skeleton on one route before the mass work                                                                                                                                                    | (b)                                    |
| R8  | Barrels                        | (a) `index.ts` in every folder; (b) at package boundaries only                                                                                                                                                                          | (b)                                    |

## 5. What is good and must stay

- Parity levels `strict` and `visual`, the self-parity reference, and `refactor_parity.py` (D1, D4).
- Move commits and change commits apart; codemods with `ts-morph`; lint in `warn` first, `error` at the end.
- The branch rules of §5.5 and the standing approval for commits on `refactor/architecture`.
- The API contract stays (D2). The MSW mocks stay.
- The quality of the current code: strict TypeScript, type-checked ESLint, every flow with its evidence, 322 tests, 237
  stories. The refactor must not lower this.

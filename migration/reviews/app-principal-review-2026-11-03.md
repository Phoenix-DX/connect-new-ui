# Principal review of `app/` (2026-11-03)

- Base: commit `da0bb2dc`, branch `retest-arch`.
- Scope: `app/` (React 19, TypeScript, Vite; 64 routes; about 158k lines of TS/TSX outside tests; 731 test files).
- Reviewer role: principal engineer. This review judges. It does not fix.
- Inputs: the facts pack, six area reports (A1 to A6), and my own checks of the cited code. Section 7 lists the limits.

## 1. Verdict

The app is a faithful port of the OutSystems runtime model into React. It is not yet an application that can replace
the original in production. The port reproduces screens, server calls and original bugs with care, and 4,756 passing
tests back it. The same fidelity is the main structural weakness. OutSystems lifecycle rules, global DOM selectors,
wire formats and names reach every layer.

The production path does not exist. There is no identity. No server ever confirmed 155 of the 179 response shapes.
The default build is a mock build.

The quality gates are many, but they run only on a developer machine. They hide 1,259 known issues in lists that the
same commit can edit, and some of them freeze the original's accessibility gaps.

The code also cannot leave this repository today. `npm run ci` calls a Python script in `../migration/`, the generated
sources have their generators there, and 233 production code files cite `migration/` paths as their rationale. Fix the
gates and the repository split first. Then build the data and identity layers. Do the structural refactor last, under
the parity gate.

| Dimension | Score (1–5) | Reason |
| --- | --- | --- |
| Architecture and layering | 2 | Layer rules break in the core directions (F-09); new layers have no consumers (F-06); `app/` depends on `../migration/` (F-05). |
| Code organisation and naming | 2 | Three page shapes and files that grew back past 400 lines (F-15); mock wiring in 81 feature folders (F-14); OutSystems names (F-30). |
| Correctness and robustness | 3 | Behaviour matches the original and is well tested; global DOM selectors (F-08), unchecked route inputs (F-16) and unhandled promises (F-28) weaken it. |
| Data layer and production readiness | 1 | No identity (F-01); unverified contract with no runtime validation (F-02); mock build by default (F-03). |
| State and effects | 2 | Hand-made lifecycle emulation with 32 suppressed dependency checks (F-07); module singletons (F-24). |
| Testing | 3 | Large suite, 86 percent lines; it locks implementation and markup more than behaviour (F-10); slow setup and thin device tests (F-29). |
| Quality gates | 2 | Local only, self-editable baselines (F-04); fail-open build (F-03); narrow untested scripts (F-20); checks outside `ci` (F-21). |
| Performance and bundle | 3 | First loads stay in the self-set budget; no gate, 7.2 MB precache, 758 KB CSS on every route (F-13). |
| Security and privacy | 2 | No identity (F-01); PIN is a UI lock (F-12); HTML sinks without CSP (F-18); call log on `window` (F-19). |
| Accessibility | 2 | Shared click targets are mouse-only and no gate checks accessibility (F-11). |
| Documentation | 3 | Many accurate guides; reference pages describe deleted folders, counts are stale, links go outside `app/` (F-26, F-05). |

## 2. Findings

Labels: `blind spot` = no self-assessment names it; `understated` = named, but smaller or "done"; `tracked` = named
with the right size and an owner or a plan. Paths are relative to the project root.

### S1

#### F-01 Production has no identity, and the client trusts a user id in browser storage

- Severity: S1. Category: security. Label: understated (`app/docs/architecture/overview.md:17` says identity "can be
  swapped in without touching screens").
- Evidence:
  - `app/src/platform/auth/authProvider.ts:9` — `return MOCKS_BUILT ? mockAuth : null;`
  - `app/src/platform/session/auth.ts:35` — `if (provider === null) throw new Error('Sign-in is not available: no identity provider is configured.');`
  - `app/src/platform/session/session.ts:251` — `else writeItem('local', SESSION_KEY, { userId });`
  - `app/src/api/client/callAction.ts:86` — `const client = createClient<paths>({` with `baseUrl` and `fetch` only: no
    credentials policy, no header, no token hook.
- Spread: every sign-in decision (session machine, `RouteGuard`, PIN) reads one localStorage key. Area 1 found no
  `credentials|Authorization|csrf|Bearer` in client code (`git grep`). `app/src/app/RouteGuard.tsx:70`
  (`if (!appReady) return;`) lets a member screen mount and send its calls before the guard acts.
- Why it matters: a production build cannot sign in. Session cookie or token, CSRF for POST, 401 handling, refresh and
  guard timing are undecided. The screens and the PIN are built on the mock session design.
- Recommendation: write the identity ADR (BFF session, CSRF, 401 → `signedOutRemotely`, server-side session check)
  before more screen work. Keep `AuthProvider` as the seam. Decide with the user whether member routes block render
  until the session is known, because that changes the TST call order.
- intentional-1:1: no for the gap (the original uses an OutSystems session). Yes for the guard timing
  (`RouteGuard.tsx:13-14` cites the TST call order).
- Source: A1-04, A4-01, A4-07.

#### F-02 The API contract is unverified for 87 percent of the endpoints, and nothing checks a response at run time

- Severity: S1. Category: correctness. Label: blind spot (`overview.md:72` draws "contract validates mocks"; no
  self-assessment names the fictional share or runtime validation).
- Evidence:
  - `app/src/api/openapi.yaml:12` — `# GENERATED by migration/tools/contract_gen.py from compiled code and captures ...`
  - `app/src/api/client/callAction.ts:127` — `return (result.data as { data: ActionOutputs<PathOf<M, A>> }).data;`
  - `app/src/api/event/mapper.ts:408` — `const r = wire.Response;` and then field reads with no guard.
  - `app/src/mocks/contract.test.ts:35` — `expect(true).toBe(true);` (the contract test checks compile errors only).
- Spread: `git grep -c` on `openapi.yaml`: 179 operations, 155 `x-mock-source: 'fictional'`, 24 recorded, 107
  `x-review`. No schema validator in `src/api` (area 1). `asApiError` returns `null` for a mapper error
  (`app/src/api/client/apiError.ts:32`), so a bad body has no error kind.
- Why it matters: the first real backend meets 155 response shapes that only a reading of compiled code defines. A
  missing record, or a 200 without the `data` envelope, becomes a TypeError inside a mapper. The flow handler then
  treats it as an unknown error. The contract is one POST per OutSystems action, so a backend team gets no resource
  model.
- Recommendation: decide the contract owner and the production API shape (BFF that keeps the action contract, or a
  resource API behind an adapter). Generate validators from `openapi.yaml` and run them in `callAction` in all builds.
  Map a failure to a new `ApiErrorKind` `badResponse` and log it. Record real BFF responses for the 155 fictional
  entries before cutover.
- intentional-1:1: yes for one endpoint per action (`openapi.yaml:1-3`). No for the missing validation.
- Source: A1-01, A1-02, A1-03, A1-07, A1-11, A6-04, A6-12.

### S2

#### F-03 The default build is a mock build, and production needs one environment variable

- Severity: S2. Category: gate-blind-spot. Label: blind spot (`app/docs/guides/quality.md:10` calls `vite build` the
  "production bundle").
- Evidence:
  - `app/src/platform/config/config.ts:22` — `export const MOCKS_BUILT: boolean = import.meta.env.VITE_USE_MOCKS !== 'false';`
  - `app/package.json:11` — `"build": "npm run typecheck && vite build",`
- Spread: `build`, `ci` (`package.json:28`, last step `vite build`) and `vite.config.ts` share the default.
  `.env.example` and `.env.demo` set `VITE_USE_MOCKS=true`, and no `.env.production` exists (`git ls-files`). The
  mock-free guard runs only when the variable is `false` (`vite.config.ts`, `mockFreeBuild()`).
- Why it matters: a deploy that forgets the variable ships MSW, fixtures, `?mocksession` and the flag panel, and no
  check fails. The failure is visible (fictional data on every screen), so this is S2, not S1.
- Recommendation: invert the default. `build` produces production, `build:mock` produces the mock build, and `ci`
  builds both and checks the production output.
- intentional-1:1: no.
- Source: A5-01, A5-14.

#### F-04 The known-debt lists hide 1,259 issues, the same commit can edit them, and nothing runs `ci` on a merge

- Severity: S2. Category: gate-blind-spot. Label: understated (`app/docs/refactor/reports/final.md:89`: "Debt frozen in
  baselines, with owners").
- Evidence:
  - `app/build/check-unused-exports.mjs:36` — `if (process.argv.includes('--write')) {` (rewrites the knip baseline).
  - `app/eslint.config.js:73` — `rules: { 'no-restricted-imports': ['warn', { patterns: [relativeParentPattern, rule4Pattern] }] },`
  - `app/docs/refactor/arch-baseline.csv:2` — owner column `P7`.
- Spread: dependency-cruiser 139 hidden (`21-depcruise-ignore-known.txt`), ESLint 73 warnings in 40 files
  (`31-eslint-by-rule.txt`), knip 1,047 rows. 70 of 72 CSV rows have the owner `P7`, a closed phase. The
  dependency-cruiser JSON has no owner field. Follow-ups F35 to F50 are "open" with "later change step" and no date.
  `lint` is `eslint .` without `--max-warnings 0`. There is no `.github/` and no CODEOWNERS (area 5).
- Why it matters: the ratchet stops accidental growth only. A `--write` run or a new CSV row passes `ci` in the same
  commit. No platform runs `ci`, so a merge can skip every gate.
- Recommendation: choose the CI platform now. Add a job that fails when a baseline grows against the merge base. Add a
  person and an exit date to each list. Put the lists under CODEOWNERS. Use `eslint --max-warnings 0`.
- intentional-1:1: no.
- Source: A5-02, A5-03, A5-04, A6-14.

#### F-05 `app/` is not self-contained: gates, generators and design rationale live in `../migration/`

- Severity: S2. Category: architecture. Label: blind spot (no self-assessment names the repository split).
- Evidence:
  - `app/package.json:29` — `"arch:baselines": "node build/check-arch-baselines.mjs && python3 ../migration/tools/refactor/arch_baseline.py check --strict",`
  - `app/src/api/openapi.yaml:12` — generated by `migration/tools/contract_gen.py`.
  - `app/docs/reference/screens.md:1` — `GENERATED by migration/tools/docs_gen.py`.
- Spread:
  - 233 of 1,659 non-test `.ts`/`.tsx` files in `app/src` cite a `migration/` or `.claude/skills` path
    (`git grep -lE`). The top targets are `migration/knowledge` (90 lines), `migration/screens` (87) and
    `migration/runtime-sources` (67).
  - 552 files cite compiled OutSystems sources by file and offset. 240 READMEs and captures in `src/` cite
    `migration/`.
  - Generated files with outside generators: `openapi.yaml`, `routes.generated.ts`, `routes.css.generated.ts`
    (`migration/tools/css_sets.py`) and 5 reference pages. The parity tool and the captures are outside too.
- Why it matters: after the split, `npm run ci` fails. The generated files become hand-edited files with a "do not
  edit" header. The rationale of a third of the code points at files that the new repository does not have.
- Recommendation: WP-2. Port `arch_baseline.py` to Node inside `app/`. Move each generator into `app/tools/`, or freeze
  its output and drop the header. Replace `migration/` paths in comments with the `@origin` ids, and keep a provenance
  index in the migration repository.
- intentional-1:1: no.
- Source: A5-03, A6-20, A6-17, A4-22, A4-25, lead.

#### F-06 The refactor added layers with no consumers, and the docs present them as the data path

- Severity: S2. Category: architecture. Label: understated (`overview.md:140` draws `C->>A: useXxx(inputs)`; `final.md`
  P5 lists hooks per domain as done; only `app/src/api/README.md` says "no caller yet").
- Evidence:
  - `app/src/api/event/hooks.ts:76` — `repository functions in their flows: these hooks have no caller yet. */`
  - `app/src/api/client/apiError.ts:32` — `export function asApiError(error: unknown): ApiError | null {`
  - `app/src/styles/tokens.css:6` — `over the legacy :root value, and tokens.test.ts keeps the two equal.`
- Spread: knip lists 58 of the 74 exported `use*Query`/`use*Mutation` hooks in `src/api/*/hooks.ts` as unused
  (`40-knip-raw.txt`, `git grep` of the exports). 53 page and container files use `useFlowState` with imperative
  repository calls. `ApiError` and `asApiError` have 0 importers outside `src/api/client`. 0 CSS modules exist;
  non-test TS/TSX has 64 `var(--…)` uses.
- Why it matters: a newcomer reads the overview and the barrels and believes that screens use TanStack Query and typed
  error kinds. They do not. Two vocabularies exist for one job: OutSystems exceptions and `ApiError`, legacy CSS and
  tokens.
- Recommendation: adopt or delete each layer. Delete the 58 hooks, or move one domain to them as the reference. Make
  `raiseToFlowHandler` work on `ApiError`. Correct the overview diagram.
- intentional-1:1: yes for "no cache" (`app/src/api/feed/hooks.ts:11`). No for the unused code.
- Source: A1-05, A1-16, A1-21, A3-06, lead.

#### F-07 OutSystems lifecycle rules are emulated by hand with refs, JSON keys and 32 suppressed dependency checks

- Severity: S2. Category: correctness. Label: understated (follow-up F4, "move the standard state shape ...
  `parametersKey` ... into one platform hook", is "done (P4-F4)", but components keep their own copies).
- Evidence:
  - `app/src/pages/HostSurvey/components/HostSurvey_AccommodationItem.tsx:230` — `const parametersKey = JSON.stringify([`
    (8 props), and `:258` — `// eslint-disable-next-line react-hooks/exhaustive-deps`.
  - `app/src/pages/Search/hooks/useSearch.ts:240` — `afterRecentClickedFetchRef.current = afterRecentClickedFetch;`
    inside a layout effect with no dependency list.
  - `app/src/components/layout/BottomBar/BottomBar.tsx:65` — `const readyRan = useRef(false);` (a once-guard against
    StrictMode).
- Spread: 32 `exhaustive-deps` suppressions in non-test `app/src` (pages 16, components 14, containers 2; `git grep`).
  `useRef` has 320 uses in 134 non-test files; `useLayoutEffect` appears in 63 (`80-grep-counts.txt`).
- Why it matters: each handler reads the "newest" value through a ref. The rule that catches stale closures is off in
  32 places. StrictMode and concurrent rendering are the failure points.
- Recommendation: one shared hook for "OnParametersChanged by value" and one for "OnReady once". Replace ref sync with
  `useEffectEvent` (React 19.2.8 is installed). Ratchet the suppression count. Parity risk is medium: the effect order
  shows in the call sequence.
- intentional-1:1: yes (the comments cite OnParametersChanged and OnReady semantics).
- Source: A2-02, A2-05, A2-12, A3-12, A5-05.

#### F-08 Behaviour depends on global DOM selectors and on class names of other layers, in every layer

- Severity: S2. Category: correctness. Label: blind spot.
- Evidence:
  - `app/src/pages/Updates_SingleList/hooks/useUpdatesSingleList.ts:52` — `const headerEl = document.querySelector('.header');`
  - `app/src/lib/ubtConnectLibrary/actions.ts:282` — `const screen = document.querySelector('.screen-container');`
  - `app/src/components/layout/BottomBar/BottomBar.tsx:45` — `document.querySelector('.bottom-bar .list > a.active')?.classList.remove('active');`
- Spread: non-test, non-story, non-vendor files with `document.querySelector`, `querySelectorAll`, `getElementById` or
  `getElementsByClassName`: pages 27, components 19, platform 11, lib 6, containers 1, total 64 (`git grep -lP`).
  `addEventListener` appears in 49 non-test files.
- Why it matters: the screen transition keeps two screen containers in the DOM. A global selector then picks one by
  DOM order. A class rename in a layout component breaks scroll, focus or a sticky header, and no type check fails.
  Code outside React changes nodes that React owns.
- Recommendation: give each screen a root element through context (`useScreenRoot()`) and scope every query to it.
  Add `no-restricted-properties` on `document.querySelector*` with a baseline. Keep the selectors where parity needs
  them, but scoped.
- intentional-1:1: yes (comments cite the OutSystems JavaScript nodes, for example `app/src/pages/HostSurvey/actions.ts:13-14`).
- Source: A2-07, A3-08, A4-11, A4-12, A4-13, lead.

#### F-09 The layer rules break in the core directions, and folder names do not tell the roles

- Severity: S2. Category: architecture. Label: tracked (counts and follow-ups F35 to F49 are right; section 3 judges
  the lists).
- Evidence:
  - `app/src/lib/ubtConnectUtils/actions.ts:11` — `import { getClientVar } from '@/platform/session/session';` and
    `:13` — `import { dropdownClose } from '@/components/ui/lib/actions';` (rule 6: `lib/` imports only `lib/`).
  - `app/src/platform/feedback/dialogs/BlockPinUnlock.tsx:4` — `import { LayoutRuntimeTop } from '@/components/layout/LayoutRuntimeTop';` (rule 8).
  - `app/src/components/note/NotesSheet/NotesSheet.tsx:15` — `import { NoteListActionsContainer } from '@/containers/NoteListActions';` (rule 4).
  - `app/src/platform/feedback/flowErrors.ts:9` — `export { isCommunicationException, raiseToFlowHandler } from '@/legacy/os/exceptions';`
- Spread:
  - Violations per rule (`20b-depcruise-by-rule.txt`): rule 6: 50; rule 4: 36, plus 73 ESLint rows; rule 9: 27;
    rule 8: 20; rule 5: 6.
  - `legacy/os/exceptions` reaches 20 files directly and 39 more through the `flowErrors` re-export (`git grep -l`).
- Why it matters: `lib/` holds the server-calling client actions of 7 OutSystems modules, so "`lib/` is the bottom"
  (`overview.md:79`) is false. `platform/` holds UI blocks, and `components/` holds containers (`CommonUiLayout`,
  `BottomBar`, `NotesSheet`). `legacy/os` holds the error API of every data hook. A package split or a design-system
  extraction is not possible on this graph.
- Recommendation: WP-7. Split `lib/<module>/actions.ts` by data owner into `features/<domain>/`. Move platform UI hosts
  to `app/`. Move `raiseToFlowHandler` to `platform/feedback/errors`. Rename `legacy/os` to `os-runtime` and write its
  role.
- intentional-1:1: no (the blocks are 1:1; the placement is a port choice).
- Source: A3-01, A3-02, A4-04, A4-05, A4-06, A4-17, A5-17.

#### F-10 Tests lock the implementation and the original markup more than user behaviour

- Severity: S2. Category: testing. Label: blind spot.
- Evidence:
  - `app/src/pages/EventDetail/hooks/useEventDetail.test.tsx:32` — `vi.mock('@/api/event', async (importOriginal) => ({`
    (and the reducer is a spy, `:27-31`).
  - `app/src/pages/AssembleDetail/AssembleDetail.test.tsx:82` — `byId('b2-b4-b18-b1-0-Block_HostContact')`, an id
    that OutSystems numbers by nesting.
- Spread: `vi.mock('@/api…')` in 56 page test files (69 calls); `data-block` in 221 test files; `testCapturedVariants`
  in 185 files; `toHaveBeenCalledTimes|toHaveBeenCalledWith` 826 hits (area 6, `git grep`).
- Why it matters: a change that keeps behaviour (parallel fetches, a new reducer, one less wrapper) fails many tests. A
  wrong real API shape passes, because the API module is replaced. The golden captures compare role and aria too
  (area 6, `app/src/test/dom.ts`), so an accessibility fix fails the tests (F-11).
- Recommendation: name two test layers. Parity tests keep the golden captures and the call order. Behaviour tests use
  roles, labels and MSW at the network edge. New tests go to the behaviour layer. Let the capture comparison accept a
  list of added accessibility attributes.
- intentional-1:1: yes in part (the call order is the original's network sequence; DOM parity is the goal).
- Source: A6-01, A6-02, A6-03, A3-14.

#### F-11 Shared click targets are mouse-only, and no gate checks accessibility

- Severity: S2. Category: a11y. Label: blind spot (0 mentions of accessibility in `final.md`, `followups.md`,
  `overview.md` and `quality.md`).
- Evidence:
  - `app/src/components/ui/Icon/Icon.tsx:41` — `<div className={className} data-container="" style={{ cursor: 'pointer' }} onClick={onClick}>`
  - `app/src/components/ui/CircleButton/CircleButton.tsx:49` — the same pattern with `onClick={onOnClick}`.
- Spread: `onClick` on `div` or `span` in 31 non-test files; `tabIndex` in 8; `img` without `alt` in 58 (regex,
  `80-grep-counts.txt`). `eslint.config.js:44-46` loads no `jsx-a11y` rules. The Lighthouse accessibility budget (85)
  is a warning, and it runs by hand (area 5).
- Why it matters: keyboard and screen-reader users cannot operate Icon, CircleButton, ContextMenu and the other blocks
  that every screen uses. A production replacement needs a stated accessibility level, and the parity gates make the
  gap permanent.
- Recommendation: ask the user to decide on one recorded deviation from 1:1. It allows accessibility attributes
  (role, tabIndex, key handler, alt) and no class or structure change. Then fix the shared primitives first. Add
  `eslint-plugin-jsx-a11y` with a baseline and axe checks on the stories.
- intentional-1:1: yes for the markup (captured `div` plus click). No requirement asks for the gap.
- Source: A3-03, A3-04, A5-05, A5-12.

#### F-12 The PIN lock is a UI lock: a salted SHA-256 of 4 digits in localStorage, no attempt limit, and a URL switch for the timeout

- Severity: S2. Category: security. Label: blind spot.
- Evidence:
  - `app/src/platform/session/pin.ts:11` — `const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(`${salt}:${pin}`));`
  - `app/src/platform/session/pin.ts:28` — `const salt = crypto.randomUUID();` (then `writePin` to localStorage).
  - `app/src/platform/session/pinRules.ts:16` — "a 4-digit PIN".
  - `app/src/platform/session/inactivity.ts:26` — `const override = Number(rememberedParam('locksecs'));` in every build.
- Spread: one PIN store. `git grep -niE "attempt|tries"` in `platform/session`, `pages/PINUnlock` and
  `components/auth` finds no attempt counter. `PIN_HasUnlocked` is a sessionStorage client variable
  (`clientVars.ts:3`). `?locksecs` and `?scanner` have no `MOCKS_BUILT` guard (area 4).
- Why it matters: anyone with access to the browser profile tries 10,000 candidates in milliseconds, or sets the unlock
  flag. A link with `?locksecs=999999999` turns the inactivity lock off for the tab. The header says "Mock of the
  device PIN" (`pin.ts:5`), but the code is not behind `MOCKS_BUILT`, so it ships.
- Recommendation: decide what the PIN protects. If it protects data, encrypt local data with a key from a slow key
  derivation or WebAuthn, and add an attempt limit that logs out. Put `locksecs` and `scanner` behind `MOCKS_BUILT`
  now (WP-3).
- intentional-1:1: unknown (the original keeps its PIN in client plugin storage; the hash design is the port's, `pin.ts:5-7`).
- Source: A4-02, A4-20.

### S3

#### F-13 No size gate on the bundle, the precache or the legacy CSS

- Severity: S3. Category: performance. Label: understated (follow-up F17 watches HomeFeed by a manual tripwire;
  `quality.md` says the bundle report is "not in `ci`").
- Evidence: `71-build-bundle-prod.txt` — `index-DPpCjcLm.js 572.98 kB │ gzip: 170.75 kB` and `precache 336 entries
  (7235.18 KiB)`; `app/src/app/routes.css.generated.ts:19` — `'OutSystemsUI_2_23.OutSystemsUI.css',`;
  `app/src/legacy/os/StylesheetHost.tsx:31` — each sheet loads as a `data:` link that imports the file.
- Spread: HomeFeed first load 245 kB gzip in 45 chunks. The OutSystems UI CSS file has 758,828 bytes and is in 84 of
  84 route sets (`ls -l`, `git grep -c`). `public/` holds 57 CSS files, 1.6 MB. Dead CSS and class collisions are not
  measured: no collector read the CSS files.
- Why it matters: nothing stops growth. A field user pays about 7 MB at the first service-worker install.
- Recommendation: put `bundle-report.mjs` with budgets in `ci`. Precache the shell and the first screens, and cache
  the other route chunks at run time. Run F45 (relaxed CSS prune) after F27.
- intentional-1:1: yes for the CSS sets (`StylesheetHost.tsx:6-8`). No for the missing gate.
- Source: A5-08, A5-09, A3-05.

#### F-14 Mock wiring lives in 81 production folders, and handler order decides the answers

- Severity: S3. Category: architecture. Label: blind spot.
- Evidence: `app/src/mocks/handlers.ts:6` — `Handler precedence matters: MSW answers with the first handler that matches
  a request.`; `app/src/lib/ubtConnect/unsupportedVersion.ts:2` — `import { scenario } from '@/mocks/scenarioParams';`;
  `app/src/platform/storage/storage.ts:3` — `const PREFIX = 'ubtc-mock:';` (used for the real session, PIN and client
  variables).
- Spread: 81 `mocks.ts` files (`git ls-files`). `MOCKS_BUILT` or `import.meta.env` in 18 non-test files. Rule 9
  exempts mock files (`.dependency-cruiser.cjs:85`). Unit tests always run with `MOCKS_BUILT` true, so the production
  branches run only in the build tests.
- Why it matters: a folder rename reorders handlers (`handlers.ts:7-9` records one such incident). Production keys
  keep a "mock" namespace and a comment that says "mock values only".
- Recommendation: one handler per action, with a test that fails on a duplicate. A dependency rule that forbids
  `@/mocks/*` in production files. A namespace rename with a key migration when identity lands. A test project with
  `VITE_USE_MOCKS=false` for `platform/`.
- intentional-1:1: no.
- Source: A1-10, A1-12, A4-16, A4-19, A3-21, A2-17.

#### F-15 Large OutSystems-shaped units grew back past the 400-line target after the refactor reported 0

- Severity: S3. Category: maintainability. Label: understated.
- Evidence: `app/docs/refactor/reports/final.md:138` — files over 400 lines in `components/`, `containers/` and
  `pages/`: "0 (largest: `pages/Search/hooks/useSearch.ts`, 392)". Today `HostSurveyView.tsx` has 888 lines and
  `useSearch.ts` has 461 (`wc -l`). `git log` shows that `HostSurveyView.tsx` grew in `ca8eac14` (2026-10-28).
- Spread: 9 non-mock files over 400 lines in `pages/` (`03-files-over-400-nontest.txt`). `lib/ubtConnectLibrary/actions.ts`
  has 956. Three page shapes coexist (page plus hook, page plus container, page that owns its state:
  `HomeFeedPage.tsx:97-123`, area 2). 97 page-local component files import `@/api/` (`git grep -l`), and
  `page-template.md` gives no rule for them.
- Why it matters: no `max-lines` rule exists, so a metric that the report called met regressed in three days. One
  render function holds four survey steps.
- Recommendation: ESLint `max-lines` (400) for `pages/`, `containers/` and `components/` with a baseline. Split
  `HostSurveyView` per step. Write the rule for page-local components in the template.
- intentional-1:1: no (the split into steps is a port choice).
- Source: A2-03, A2-04, A2-10, A2-11, A4-12, lead.

#### F-16 Route inputs are not validated, and a bad link ends on a blank page

- Severity: S3. Category: correctness. Label: blind spot.
- Evidence: `app/src/pages/HostSurvey/inputs.ts:28` — `In_EventId: params.get('In_EventId') ?? '0',`;
  `app/src/pages/MessageDetail/inputs.ts:20` — `const osLongInput = (value: string | null): string => (value === null || value === '' ? '0' : value);`;
  `app/src/app/UnknownPath.tsx:20` — `if (!showReviewMarkers()) return null;`
- Spread: 36 `inputs.ts` files with no numeric parse (area 2). `osLongInput` is defined 14 times.
- Why it matters: in a PWA without a URL bar, an old link with `In_EventId=abc` sends `abc` to the server. An unknown
  path shows an empty page with no way back.
- Recommendation: one typed reader per input kind in `lib/`, with an "invalid" result that the page maps to the
  original's error flow. Ask the user about a "back to home" link on the unknown route as a recorded deviation.
- intentional-1:1: yes in part (the defaults cite OutSystems input defaults; `UnknownPath.tsx:7-12` cites TST).
- Source: A2-01, A2-15, A4-08.

#### F-17 Logout clears stores by a list, not by a namespace, and other tabs do not hear it

- Severity: S3. Category: security. Label: understated (`app/src/platform/session/auth.ts:89`: "so no data of this
  user stays on the device").
- Evidence: `app/src/platform/session/auth.ts:106` — `connectLogout` clears the memory cache, local entities, client
  variables and the PIN; `app/src/api/client/cache.ts:228` — `findAll({ queryKey: [CACHE_ROOT] })` only;
  `app/src/pages/Updates_SingleList/actions.ts:15` — `localStorage.setItem('scrollAnchorId', anchorId);`
- Spread: raw keys outside the namespace (`scrollAnchorId`, `scrollAnchorDelta`, `UUID`) and `ErrorPageExceptionInfo`
  in sessionStorage (area 4). React Query entries use `gcTime: 0`, except `usePendingPoliciesQuery`, which keeps the
  library default (`app/src/api/README.md:78`). No `storage` event listener in `app/src` (`git grep`). The image cache
  of the service worker covers 3 original image paths (`app/src/pwa/swRoutes.ts:35`).
- Why it matters: a new store that nobody adds to the list survives logout. Tab A stays signed in after tab B logs out.
- Recommendation: one namespace for all user state, cleared by prefix, plus `queryClient.clear()` at logout. Listen to
  `storage` events for the session key.
- intentional-1:1: no (ADR-10 is an addition to the original).
- Source: A4-03 (narrowed), A4-15, A4-23.

#### F-18 HTML sinks without a Content-Security-Policy

- Severity: S3. Category: security. Label: blind spot (follow-up F44 names a CSP only for `style-src data:`).
- Evidence: `app/src/platform/feedback/feedbackMessageAutoClose.ts:57` — `encodedHtml = false;` after a title wraps the
  message into HTML; `app/src/platform/feedback/FeedbackMessageHost.tsx:31` — `dangerouslySetInnerHTML={{ __html:
  message.message }}`; `app/src/components/ui/SanitizedHtml/SanitizedHtml.tsx:47` — `if (resetWhitelist) setDefaults();`
  inside `useMemo`, on module-global allow-lists; `app/src/components/ui/DropdownSearch/provider.ts:171` —
  `textContainer.innerHTML = validationMessage;`
- Spread: 3 `dangerouslySetInnerHTML` sinks (FeedbackMessageHost, SanitizedHtml, InlineSVG) and 2 `innerHTML` writes.
  No CSP in `index.html`, `public/`, `build/` or `src/` (`git grep`). The sampled titled callers pass constants.
- Why it matters: a server text that reaches a titled toast renders as HTML. One SanitizedHtml instance widens the
  allow-list for every later render.
- Recommendation: escape the message before the title wrap. Give SanitizedHtml a configuration per call. Ship a CSP
  with the BFF.
- intentional-1:1: yes (the toast wrap cites `JSU:132-140`; the original sanitizer keeps global lists, see B21).
- Source: A4-14, A3-09, A3-10.

#### F-19 Parity and review instrumentation ships in production code

- Severity: S3. Category: maintainability. Label: blind spot.
- Evidence: `app/src/api/client/callAction.ts:103` — `(window.__osCalls ??= []).push({` on every call in every build;
  `app/src/main.tsx:10` — `import './styles/review.css';`
- Spread: only `callAction.ts` writes `__osCalls`; `src/test/testSupport.ts` and the external `parity_check.cjs`
  read it. 5 non-test files read review markers (`git grep`).
- Why it matters: the array grows without a limit over a long PWA session. It also shows input names to any script on
  the page.
- Recommendation: put the call log behind a build constant that the parity builds set. Load `review.css` in mock
  builds only. Parity risk is low when the parity tool runs against a build with the constant.
- intentional-1:1: no.
- Source: A1-14, lead.

#### F-20 The custom gate scripts are narrow, and they have no tests

- Severity: S3. Category: gate-blind-spot. Label: blind spot.
- Evidence: `app/build/check-flow-fetch.mjs:14` — `const roots = ['src/pages', 'src/containers'];` and `:57` —
  `return name.startsWith('fetch') || name === 'refetch' ? text : null;`; `app/build/check-flags.mjs:31` —
  `const CALL = /\b(useFlag|useFlagOn|flagValue|isOn)\(\s*(['"])([^'"]+)\2/g;`
- Spread: 4 scripts, 0 tests (`git ls-files`). `check-flow-fetch` uses the TypeScript AST. It sees only awaited calls
  whose names start with `fetch`, only in `hooks/` folders, and its allow list matches a callee name in every file.
  `check-flags` scans raw text, comments included.
- Why it matters: `.then()`, an import alias, or a call in `components/actions.ts` passes the flow-scope rule.
- Recommendation: unit tests with a fixture tree for each script. Match any import of an `@/api/*` repository module,
  not a name prefix.
- intentional-1:1: no.
- Source: A5-06 (downgraded).

#### F-21 Several checks exist but run outside `ci` or have no threshold

- Severity: S3. Category: gate-blind-spot. Label: tracked (`quality.md` marks them "not in `ci`"; no plan to add them).
- Evidence: `app/package.json:28` — `ci` has no `e2e:pwa`, `lighthouse`, bundle report, `build-storybook` or coverage
  step; `app/vite.config.ts:35` — `test: { environment: 'jsdom', setupFiles: ['./src/test/setup.ts'], css: false, restoreMocks: true },`
  (no coverage thresholds).
- Spread: `gen:api` rewrites the tracked `schema.d.ts` with no drift check (area 5). Lighthouse budgets are warnings
  set from a first run (area 5). `sw.ts` has no direct test; its routing logic has unit tests in `src/pwa`.
- Why it matters: the service worker, the bundle and the stories can break while `ci` stays green.
- Recommendation: a CI job for e2e and bundle budgets on the main branch, coverage floors per folder, and a drift check
  after each generator.
- intentional-1:1: no.
- Source: A5-12, A5-13, A5-19, A6-05, A6-06.

#### F-22 An open PWA can run an old build without a limit

- Severity: S3. Category: correctness. Label: tracked (P11; `app/src/pwa/register.ts:101` "READY BUT NOT WIRED").
- Evidence: `app/src/sw/sw.ts:12` — `No skipWaiting and no clientsClaim: a new version waits and takes over on the next
  cold start`; `app/src/app/screens.ts:40` — a failed chunk load calls `showErrorPage(error);` with no retry.
- Spread: the whole app. The full precache keeps old chunks for a client that the old worker controls, so chunk 404s
  are rare (this corrects A5-10).
- Why it matters: a security fix cannot reach an installed PWA that stays in the app switcher.
- Recommendation: wire `reloadForContractChange` to a version header of the BFF. Add a minimum-version check at app
  start.
- intentional-1:1: yes in part (P11 copies the OutSystems background upgrade).
- Source: A5-10 (downgraded), A5-11.

#### F-23 Errors end in a full reload to a static page, and production has no telemetry

- Severity: S3. Category: correctness. Label: understated (`overview.md:17`: monitoring "can be swapped in").
- Evidence: `app/src/platform/feedback/errorPage.ts:31` — `window.location.assign(ERROR_PAGE_URL);`;
  `app/src/platform/log/log.ts:23` — `const sinks = new Set<LogSink>([consoleSink]);`
- Spread: the root boundary and each screen boundary open the error page (area 4). `addLogSink` has 0 callers
  (`git grep`).
- Why it matters: in production nobody sees an error. A render error loses unsaved input.
- Recommendation: add a monitoring sink before any pilot (the original uses Application Insights, `log.ts:3-5`). Keep
  the error page for parity.
- intentional-1:1: yes for the error page (`errorPage.ts:1-8` cites TST).
- Source: A4-09, A4-21, lead.

#### F-24 Module singletons and import-time side effects make state ownership a convention

- Severity: S3. Category: maintainability. Label: blind spot.
- Evidence: `app/src/platform/session/session.ts:71` — `let snapshot: ShellState = buildSnapshot();` reads storage at
  import.
- Spread: 43 top-level `let` declarations in 28 non-test files of `app`, `platform`, `lib`, `legacy`, `containers`
  (area 4). Tests reset them by hand in `freshPage()` (area 6). Components hold late-bound globals that throw until
  `app/dialogs.ts` wires them (area 3).
- Why it matters: a new global that nobody adds to `freshPage()` makes tests depend on order. Import order changes
  behaviour.
- Recommendation: one store per concern, with a reset that registers itself at creation. No storage read at import.
- intentional-1:1: no.
- Source: A4-10, A3-11, A6-08.

#### F-25 Small helpers are copied per page, below the threshold of the duplicate check

- Severity: S3. Category: maintainability. Label: blind spot (F31 tracks only the Orbit copies).
- Evidence: `app/src/pages/EventDetail/EventDetailPage.tsx:21` — `function feedbackMessageAfterTransition(message: string, messageType: number): void {`;
  `app/src/pages/HostSurvey/actions.ts:8` — `window.setTimeout(() => {` (the handle is dropped).
- Spread: `feedbackMessageAfterTransition` in 9 files, `osLongInput` in 14, `osBoolean` in 7 (`git grep -l`). jscpd
  needs 10 lines and 70 tokens (`.jscpd.json`). Role twins: EventDetail 1,641 lines, LDM_EventDetail_V2 1,808,
  OrbitAdminEventDetail 594 (area 2).
- Why it matters: one timer fix needs 9 edits, and no gate shows the copies.
- Recommendation: move the helpers to `lib/` or `platform/feedback`. Add a check for duplicate top-level function names
  across `pages/`.
- intentional-1:1: no.
- Source: A2-08, A2-09, A2-13, A5-15.

#### F-26 Documentation drift: reference pages describe deleted folders, and the counts are stale

- Severity: S3. Category: docs-drift. Label: understated (`final.md` reports the docs step P9-3 as done).
- Evidence: `app/docs/reference/screens.md:9` — folder `src/screens/AcceptPendingPolicies/` (deleted);
  `app/docs/reference/stack.md:31` — `src/screens/<Screen>/...` marked "confirmed"; `app/docs/architecture/overview.md:178`
  — "B1-B13", while `known-original-bugs.md` has 22 rows; `overview.md:128` — "A page has no ... inline visual
  styles", while 63 page files use `style={{` (area 6).
- Spread:
  - 3 of 5 reference pages.
  - Baseline counts: 144/72/1,122 in `quality.md` against 139/73/1,047 in the files.
  - Precache: "290 files, 6.8 MB" in `pwa.md` against 336 files and 7.2 MB.
  - Stale paths in comments: `src/lib/config.ts`, `src/screens/`, `src/shell/`.
- Why it matters: the numbers are the only statement of the debt, and the reference pages contradict the guides.
- Recommendation: generate the numbers from the baseline files, or remove them. Regenerate the reference pages inside
  `app/`, or delete them. Move the refactor history out of the overview.
- intentional-1:1: no.
- Source: A6-15 to A6-23, A5-16, A1-13, A4-25, A3-16.

#### F-27 Vendored code with unconfirmed licences

- Severity: S3. Category: security. Label: tracked (the SOURCE.md files say "confirm before production").
- Evidence: `app/src/vendor/barcodeplugin/SOURCE.md:15` — "TST does not serve that file" (the licence file).
- Spread: 3 vendored libraries, about 500 KB; one states no licence (area 4).
- Why it matters: a production bundle carries code with an unknown licence and no audit cover.
- Recommendation: confirm the licences with the owners, or replace the copies with audited packages, before production.
- intentional-1:1: yes (byte-identical copies, ADR-7 and ADR-11).
- Source: A4-18.

#### F-28 Promises without a catch, no abort on unmount, fixed timeouts

- Severity: S3. Category: correctness. Label: blind spot.
- Evidence: `app/src/pages/Search/hooks/useSearch.ts:246` — `void get_RecentClickedResults(target, key, category, 5).then(afterRecentClickedFetch);`
  (no catch, no sequence check); `app/src/main.tsx:54` — `void enableMocks().then((start) => {` (no catch: a failed
  start leaves a blank page).
- Spread: 12 `void ….then(` in non-test pages; `AbortController` in 0 page files (area 2). `callAction` has no
  `signal` parameter. Module timeouts of 10 s and 20 s come from the original (area 1).
- Why it matters: a failed read becomes an unhandled rejection. An older refresh can overwrite a newer one. A request
  runs on after the user leaves.
- Recommendation: `callAction(..., { signal })` tied to the flow scope, a catch helper for fire-and-forget reads, and
  a sequence guard where two refreshes can overlap.
- intentional-1:1: unknown (the timeouts: yes, `callAction.ts` cites OutSystems).
- Source: A2-06, A1-15, A4-24.

#### F-29 The test suite is slow to set up and thin where browser behaviour differs

- Severity: S3. Category: testing. Label: blind spot.
- Evidence: `app/vite.config.ts:35` — one `setupFiles` entry for all 731 files; it starts MSW with every handler and
  imports the dialog tree (area 6).
- Spread: summed setup 414 s and environment 449 s against 283 s of tests (`60-vitest-coverage.txt`). Real sleeps up to
  600 ms (area 6). Coverage: `platform/storage/localEntities/database.ts` 44.6 percent of statements,
  `platform/device/device.ts` 28.6, `main.tsx` 0 (`coverage-summary.json`).
- Why it matters: a slow suite gets fewer local runs. IndexedDB and device bridges are where web and native behaviour
  differ, and they have the least coverage.
- Recommendation: two test projects (pure units without MSW, integration with MSW), fake timers in place of sleeps,
  and tests for IndexedDB and the device bridges.
- intentional-1:1: no.
- Source: A6-07, A6-09, A6-10, A6-11.

### S4

#### F-30 OutSystems names in props, files and folders

- Severity: S4. Category: maintainability. Label: tracked as a rule (`docs/guides/shared-code.md` "Props").
- Evidence: `app/src/components/ui/CircleButton/CircleButton.tsx:49` — `onClick={onOnClick}`.
- Spread: 30 prop interfaces with 12 or more props; pairs such as `Columns2`/`ColumnsTwo` and
  `PopupMenu`/`LegacyPopupMenu` (area 3); 10 of 68 page folders use `_` (area 2).
- Why it matters: a newcomer needs the OutSystems model to find and name things.
- Recommendation: keep the names at the OutSystems boundary (route names, DOM ids). Use React names in new code. Add an
  alias table to the docs.
- intentional-1:1: yes.
- Source: A3-13, A3-15, A2-15, A2-16, A1-08.

#### F-31 Minor React hygiene items

- Severity: S4. Category: maintainability. Label: blind spot.
- Evidence: `app/src/components/ui/Icon/Icon.tsx:41` — inline `style={{ cursor: 'pointer' }}`.
- Spread: 222 inline `style={{` in 108 non-test files; `key={index}` in 7 non-test files; 4 class components
  (`80-grep-counts.txt`).
- Why it matters: inline style wins over both cascade layers. An index key keeps stale state in a list that reorders.
- Recommendation: stable keys in reorderable lists. Use a class for `cursor: pointer` where no capture requires the
  inline style.
- intentional-1:1: yes for the inline style (`docs/guides/shared-code.md`).
- Source: A3-07, A3-18, A3-19, A3-20, A3-22.

#### F-32 Recorded fixtures carry the TST host, and types cite fixture files

- Severity: S4. Category: maintainability. Label: blind spot.
- Evidence: area 1 cites `app/src/mocks/fixtures/UBTConnect_Utils/DataActionGetCacheInfo/04-af1a1d24.json:16,21` and
  `app/src/api/locality/types.ts:93,349` (not rechecked by me).
- Spread: 2 fixtures with the TST host URL; 29 fixture files.
- Why it matters: the demo build serves the TST host name, and production types point at test data.
- Recommendation: replace the host with a placeholder at record time. Remove fixture paths from type comments.
- intentional-1:1: unknown.
- Source: A1-18.

## 3. Blind spots of the gates

| Gap | What misses it today | Gate that catches it |
| --- | --- | --- |
| A deploy without `VITE_USE_MOCKS=false` ships mocks | `build`, `ci` and `vite.config.ts` default to the mock build (F-03) | `build` = production; `ci` builds both modes and runs the mock-free check on the production output |
| A baseline grows in the same commit as the code | `check-unused-exports.mjs --write`, `depcruise-baseline`, CSV edits (F-04) | CI job: row count of each baseline must not exceed the merge base; CODEOWNERS on the files |
| New ESLint warnings | `lint` has no `--max-warnings 0`; rule 4 is `warn` in 40 files (F-04) | `eslint --max-warnings 0`; move the rule-4 rows to the dependency-cruiser baseline only |
| No merge check at all | no CI platform, no hook (F-04) | a CI workflow that runs `ci`, `e2e:pwa` and the bundle report |
| Parity covers part of the app | 14 routes have 0 states and count as clean (F27 open, `final.md:24`); the stack page names one viewport (`stack.md:29`); the tool runs by hand | report "N of 64 checked" as a failure when N < 64; one state per route minimum; a scheduled run |
| Parity cannot see what the original lacks | accessibility, keyboard use, production build, real backend (F-11, F-01) | axe in the story tests; a production-build smoke test; contract tests against the BFF |
| Production branches never run in unit tests | tests run with `MOCKS_BUILT` true (F-14) | a test project with `VITE_USE_MOCKS=false` for `platform/`, `api/client`, `app/` |
| Responses that do not match the contract | types are compile-time only; `contract.test.ts:35` asserts `true` (F-02) | runtime validators from `openapi.yaml` in `callAction`, plus a test per mock handler that validates its answer |
| Files grow past 400 lines | no `max-lines` rule; F59 reported 0 and the count is 9 again (F-15) | ESLint `max-lines` with a baseline |
| Suppressed hook dependencies | 32 `exhaustive-deps` disables (F-07) | a count ratchet on `eslint-disable` comments per rule |
| Global DOM queries | no rule (F-08) | `no-restricted-properties` on `document.querySelector*` outside an allow-listed folder, with a baseline |
| Copies of 3-line helpers | jscpd minimum 10 lines and 70 tokens (F-25) | a script that fails on duplicate top-level function names in `pages/` |
| Flow-scope rule bypass | `check-flow-fetch` sees only awaited `fetch*` calls in `hooks/` (F-20) | AST rule on every call of an `@/api/*` repository import in `pages/` and `containers/` |
| Mock imports in production files | rule 9 exempts mocks; no rule forbids `@/mocks/*` (F-14) | a dependency rule: only `mocks/`, `*mocks.ts`, tests and stories import `@/mocks/*` |
| Bundle, precache and CSS growth | the bundle report is outside `ci` (F-13) | budgets for entry, first load, precache size and CSS size in `ci` |
| Coverage falls | no thresholds (F-21) | per-folder coverage floors in `vite.config.ts` |
| Generated file drift | `gen:api` rewrites `schema.d.ts` with no diff check (F-21) | `git diff --exit-code` after each generator in `ci` |
| Capture tests block accessibility fixes | the DOM comparison includes role and aria (F-10, F-11) | an allow-list of added accessibility attributes in the comparison |
| Stale numbers in docs | counts are hand-written (F-26) | generate the counts from the baseline files, or remove them |

### The known lists

- `app/.dependency-cruiser-known-violations.json` (139 rows) is raw tool output. It has no owner field and no exit
  date. It hides the largest structural fact of the app: rule 6 fails 50 times, so `lib/` is not a leaf.
- `app/docs/refactor/arch-baseline.csv` (72 rows) names `P7` as owner in 70 rows. P7 is a closed phase, so the rows
  have no owner. The file also lives in a folder named for the refactor, and `eslint.config.js` reads it to lower rule
  4 to a warning per file.
- `app/.knip-known-unused.json` (1,047 rows) hides 58 unused query hooks, a whole unused API surface (F-06). One flag
  rewrites it.
- `app/docs/known-original-bugs.md` (22 rows) is different: it records fidelity, with evidence and a fix path (an
  ADR). It hides no debt from a gate. It has no owner and no "fix at cutover or keep" decision per row.
- None of the lists has a target count per date. The owners in `quality.md:45` are follow-up ids in
  `migration/refactor/followups.md`, a file outside `app/`. All of them are "open" with "later change step".

## 4. Self-assessment against reality

| Claim | Where | What the code shows | Evidence |
| --- | --- | --- | --- |
| "Files over 400 lines in `components/`, `containers/` and `pages/`: 0" | `app/docs/refactor/reports/final.md:138` | 9 non-mock page files over 400 lines; `HostSurveyView.tsx` 888 | `03-files-over-400-nontest.txt`; `git log` `ca8eac14` |
| "parity is 64/64" | `final.md:7` | 14 routes have no parity state; 50 of 64 are checked; F27 is open | `final.md:24`; `followups.md` F27 |
| `vite build` is the "production bundle" | `app/docs/guides/quality.md:10` | plain `vite build` is a mock build | `app/src/platform/config/config.ts:22` |
| Screens call domain hooks (TanStack Query) | `app/docs/architecture/overview.md:140` | 58 of 74 hooks unused; 53 files use `useFlowState` with repository calls | `app/src/api/event/hooks.ts:76`; `40-knip-raw.txt` |
| "contract validates mocks" | `overview.md:72` | compile-time types only; the test asserts `true` | `app/src/mocks/contract.test.ts:35` |
| Backend, identity and monitoring "can be swapped in without touching screens" | `overview.md:17` | identity is a localStorage user id; no log sink; the guard runs after render | F-01, F-23 |
| "Only the `callAction.ts` configuration and the mappers in `api.ts` can change" | `overview.md:155` | `api.ts` files no longer exist; 155 of 179 shapes are fictional | `openapi.yaml`; F-02 |
| "`lib/` is the bottom" of the graph | `overview.md:79` | 50 rule-6 violations; `lib` imports `api`, `platform`, `components` | `app/src/lib/ubtConnectUtils/actions.ts:11,13` |
| "A page has no ... browser storage ... inline visual styles" | `overview.md:128` | 63 page files use `style={{`; a page action writes `localStorage` | `app/src/pages/Updates_SingleList/actions.ts:15` |
| "Debt frozen in baselines, with owners" | `final.md:89` | 70 of 72 CSV rows have owner `P7`; the JSON has no owner field | `app/docs/refactor/arch-baseline.csv:2` |
| "The ESLint restrictions of rules 4 and 11 are errors" | `quality.md:27` | rule 4 is `warn` in 40 files (73 warnings) | `app/eslint.config.js:73` |
| Logout leaves "no data of this user" on the device | `app/src/platform/session/auth.ts:89` | raw localStorage keys and the error page info survive | F-17 |
| "Known original bugs B1-B13" | `overview.md:178`, `app/docs/README.md:15` | 22 rows (B1 to B22) | `app/docs/known-original-bugs.md` |
| Old folder convention `src/screens/` is "confirmed" | `app/docs/reference/stack.md:31` | `src/screens/` was deleted in P6 | `ls app/src` |
| Baselines: 144 / 72 / 1,122 rows | `quality.md` | 139 / 73 / 1,047 | `21-depcruise-ignore-known.txt`, `31-eslint-by-rule.txt`, `.knip-known-unused.json` |

## 5. Roadmap

Work that stops new debt comes first. Each package names the findings it closes.

| # | Work package | Goal | Closes | Effort | Parity risk | Depends on | Split |
| --- | --- | --- | --- | --- | --- | --- | --- |
| WP-1 | Gates that fail | CI platform; `build` = production; `--max-warnings 0`; baseline growth check; owners and exit dates; ratchets for `max-lines`, suppressions and DOM queries; bundle budgets in `ci` | F-03, F-04, F-13 (gate), F-15 (gate), F-21 | M | low | none | before |
| WP-2 | Self-contained `app/` | Node port of `arch_baseline.py`; generators moved or outputs frozen; baselines out of `docs/refactor/`; `@origin` ids in place of `migration/` paths; reference pages regenerated or deleted | F-05, F-26 | M | low | WP-1 | before |
| WP-3 | Production hygiene | call log and `review.css` behind build constants; `locksecs` and `scanner` behind `MOCKS_BUILT`; catch at boot | F-19, F-12 (switches), F-28 (boot) | S | low (keep the call log in parity builds) | none | before |
| WP-4 | Adopt or delete parallel layers | delete or adopt the 58 hooks and `ApiError`; correct the overview | F-06 | S–M | low | WP-1 | before |
| WP-5 | Gate scripts with tests | fixture tests for the 4 scripts; import-based flow-scope check | F-20 | S | low | WP-2 | before |
| WP-6 | Test layers | split parity and behaviour tests; two test projects; production-mode tests for `platform/`; allow-list for accessibility attributes in captures | F-10, F-29, F-14 (tests) | M | low | WP-1 | before or after |
| WP-7 | Layer repair | split `lib/<module>/actions.ts` by data owner; platform UI hosts to `app/`; `raiseToFlowHandler` to `platform/feedback`; `legacy/os` to `os-runtime`; mock imports out of production files | F-09, F-14, F-24 | L | low for moves; medium for MSW order | WP-1, WP-2 | start before, finish after |
| WP-8 | Lifecycle and DOM | shared hooks for OnParametersChanged and OnReady; `useEffectEvent`; screen-scoped DOM queries | F-07, F-08, F-28 | L | medium (effect order and call sequence) | WP-1, WP-6 | after |
| WP-9 | Contract and data layer | contract owner decision; runtime validators; `badResponse` kind; abort signal; real responses for the 155 fictional entries | F-02, F-28 | L | low (mock answers unchanged) | BFF decision | design before, build after |
| WP-10 | Identity and session | identity ADR; BFF session; 401 path; guard before render (user decision); PIN redesign; namespace rename; logout by prefix; cross-tab sync | F-01, F-12, F-17 | L | medium (guard timing changes the call order) | WP-9 | after |
| WP-11 | Accessibility | user decision on attribute-only deviations; fix shared primitives; `jsx-a11y` baseline; axe on stories | F-11 | M | medium (attributes differ from captures) | WP-6 | after |
| WP-12 | Security and operations | CSP; escape before the toast wrap; SanitizedHtml configuration per call; monitoring sink; forced update; licence confirmation | F-18, F-22, F-23, F-27 | M | low | WP-10 for CSP and update | after |
| WP-13 | Size and page shape | precache policy; F45 CSS prune; split HostSurvey per step; shared page helpers; typed route-input readers | F-13, F-15, F-16, F-25 | M | low to medium | WP-1 | after |

## 6. Target folder structure

### Current top level

```
app/
  build/        Vite plugins, gate scripts, build tests, demo packaging, e2e, lighthouse
  docs/         architecture/, guides/, reference/ (generated outside), refactor/ (reports + live baseline CSV)
  public/UBTConnect/   original CSS, fonts, images, _error.html
  src/
    api/        client/, 19 domain folders, openapi.yaml, schema.d.ts
    app/        router, route table (+2 generated files), RouteGuard, AppFrame, DI wiring
    components/ ui/ (98 folders incl. os/, lib/, legacy/), 16 domain folders, widgets/ (1 folder)
    containers/ 13 shared feature stacks
    legacy/os/  OutSystems runtime emulation, cache blocks, StylesheetHost
    lib/        7 OutSystems-module folders (actions, structures) + pure helpers
    mocks/      MSW engine, fixtures, fictional data, modules
    pages/      68 route folders
    platform/   11 areas: logic, UI hosts and mock handlers
    pwa/ sw/ styles/ test/ vendor/
```

### Target

```
app/                         (root of the standalone repository)
  .github/workflows/         ci, e2e, bundle budgets
  tools/gates/               check-*.mjs, arch baseline check (Node), bundle report
  tools/generators/          contract, routes, CSS sets (or a note that the output is frozen)
  quality/baselines/         dependency-cruiser, ESLint, knip lists with owner and exit columns
  build/                     Vite plugins only
  docs/                      architecture/, guides/, adr/; history/ (old refactor reports, read-only)
  public/UBTConnect/         unchanged
  src/
    app/                     composition root: router, routes, guard, providers, DI, global hosts
    pages/<Route>/           unchanged folder names; page, inputs, hooks, page-local components, mocks.ts
    features/<domain>/       shared stateful logic: former containers/ and the server/platform parts of lib/<module>/actions.ts
    components/<domain>/     props-only domain blocks
    ui/                      presentational primitives (former components/ui without os/ and without data blocks)
    os-runtime/              OutSystems compatibility: OSBlock, OS widgets, client-var names, StylesheetHost, exceptions model
    platform/                app-wide services without UI: session, auth, navigation, storage, flags, settings, device, feedback stores, errors
    api/                     client/, <domain>/, contract/ (openapi.yaml, schema.d.ts)
    lib/                     pure helpers only (leaf)
    mocks/                   engine, fixtures, fictional data, shared modules
    styles/ pwa/ sw/ vendor/ test/
```

### Rules for what goes where

1. `app/` is the only folder that wires layers together, and it holds the global UI hosts (dialogs, toasts, lock).
2. `pages/<Route>/` holds code that one route uses. The folder name is the OutSystems screen name.
3. `features/<domain>/` holds stateful logic that two or more routes use. It may import `api`, `platform`, `components`,
   `ui`, `os-runtime` and `lib`.
4. `components/<domain>/` and `ui/` take props only. They import `ui`, `os-runtime` (`OSBlock` only), `lib` and
   `styles`.
5. `os-runtime/` holds the OutSystems compatibility code and imports only `lib`. A new file there needs a reason that
   cites the original.
6. `platform/` holds services without UI. `api/` is the only folder that talks to the server, and it validates each
   answer.
7. `lib/` imports only `lib/`. A function that reads session, flags or the DOM is not a `lib` function.
8. Only `mocks/`, `mocks.ts` files, tests and stories import `@/mocks/*`.

### Move map by folder

| From | To | Note |
| --- | --- | --- |
| `src/containers/*` | `src/features/<domain>/` | rename only |
| `src/lib/<module>/actions.ts` (server, platform and DOM parts) | `src/features/<domain>/` or `src/platform/` | split by data owner (F35) |
| `src/lib/<module>/structures.ts` | `src/api/<domain>/types.ts` | types come from the API layer |
| `src/legacy/os/*`, `src/components/ui/os/*` | `src/os-runtime/` | `exceptions.ts` flow handling goes to `src/platform/feedback/` |
| `src/legacy/os/cache/*` | `src/api/<domain>/` or `src/features/<domain>/` | F37 |
| data blocks in `src/components/ui/` (ResultItemImage loader, ImageLoadErrorHandler, OfflineDataSyncCore, NetworkStatusChanged) | `src/features/<domain>/`, with a presentational part in `src/ui/` | removes rule 5 rows |
| shell blocks in `src/components/layout/` (CommonUiLayout, BottomBar, MenuIcon) and `src/components/note/NotesSheet` | `src/features/shell/`, `src/features/note/` | they act as containers |
| UI in `src/platform/` (feedback dialogs, InactivityTimer, PolicyChecker, navigation hosts) | `src/app/hosts/` or `src/features/shell/` | removes rule 8 rows |
| `src/platform/bootstrap/mocks.ts` | `src/mocks/modules/bootstrap/` | keep it in the last handler group |
| `src/components/ui/*` (rest), `src/components/widgets/*` | `src/ui/` | path-only codemod |
| `app/docs/refactor/arch-baseline.csv` | `app/quality/baselines/` | update `eslint.config.js` |
| `app/build/check-*.mjs`, `bundle-report.mjs` | `app/tools/gates/` | update `package.json` |
| `../migration/tools/refactor/arch_baseline.py` | `app/tools/gates/` (Node) | removes the Python dependency |
| `../migration/tools/{contract_gen,css_sets,docs_gen}.py`, the route scaffold | `app/tools/generators/` or frozen output | decision per generator |
| `app/docs/refactor/**` | `app/docs/history/` | frozen record |

### What must not move, and why

- `public/UBTConnect/**`: the original CSS, fonts, images and `_error.html` resolve by URL. The parity tool compares
  stylesheet links and image URLs.
- Page folder names: `app/src/app/screens.ts` finds pages by `import.meta.glob('../pages/*/*Page.tsx')`, and the route
  table maps screen names to them.
- `app/src/app/routes.generated.ts` and `routes.css.generated.ts`: `vite.config.ts` (through `build/unknownPaths.ts`)
  and the outside generators read these paths. Move them only together with the generators.
- `app/src/api/openapi.yaml` and `schema.d.ts`: `gen:api` and `contract_gen.py` use these paths.
- `app/src/mocks/fixtures/**`: the fixture loader and the mock-free build test key on this layout.
- DOM ids, class names and `data-block` attributes: CSS and parity depend on them. A move changes no markup.
- The order of the MSW handler groups in `app/src/mocks/handlers.ts`: it decides which mock answers a call.

### Fit with a standalone repository

Everything that `npm run ci` needs is inside `app/` after WP-2. The parity tool and the captures stay in the migration
repository. They test the built app by URL (dev server or preview) as an external acceptance check. Each folder move
is a path-only codemod (the ts-morph codemod of P0 exists), followed by `refactor_parity.py --all`. A test that fails
on two handlers for one action protects the MSW order during the moves.

## 7. Method and limits

What I read and checked:

- The facts pack: structure, largest files, churn, tsc, dependency-cruiser (raw and filtered), ESLint, knip raw,
  jscpd, coverage summary, both bundle reports, grep counts, tsconfig.
- All six area reports. I opened the cited code of every S1 and S2 claim. I also sampled 12 S3 claims: A1-14, A2-08,
  A3-09, A3-10, A4-07, A4-08, A4-14, A4-15, A4-20, A4-24, A5-14, A6-16. My own counts use `git grep`, `git ls-files`
  and `wc`.
- The self-assessments: `final.md`, `followups.md`, `overview.md`, `known-original-bugs.md`, `quality.md` (parts) and
  the heads of the three baseline files.

What I did not read: the CSS files; most of the 81 `mocks.ts` files; most component, container and platform bodies;
`build/e2e`, `.storybook`, `migration/tools/*` bodies (except a grep of `measure-final.mjs`); `app/src/test/dom.ts`;
`docs/guides/shell.md`, `pwa.md` and `shared-code.md` beyond area 6 citations. I ran no build, test or tool.

Claims that I changed in step 2a:

| Claim | Change | Reason |
| --- | --- | --- |
| A1-03 (S1, contract) | merged into F-02 (S1), reframed | The OutSystems shape is a stated choice. The blocker is the unverified share (155 of 179) and no runtime validation. |
| A1-02 | corrected | A non-JSON 200 rejects inside `openapi-fetch` and becomes a `CommunicationException` (`callAction.ts` catch). An empty 200 or a body without `data` reaches the mapper as `undefined` (medium confidence). |
| A5-01 (S1) | S2 (F-03) | The failure is visible (fictional data), and no deploy pipeline exists yet. |
| A4-03 (S2) | S3, narrowed (F-17) | React Query entries use `gcTime: 0` except one. The SW image cache covers 3 original image paths, not signed URLs. Raw keys and the error page info remain. |
| A5-10 (S2) | S3 (F-22) | `app/src/app/screens.ts:40` opens the error page on a failed chunk, and the full precache keeps old chunks. The unwired update remains. |
| A5-06 (S2) | S3 (F-20) | `check-flow-fetch` uses the TypeScript AST, not text. The bypasses hold. |
| A5-05 | partly dropped | `typescript-eslint` strict rules include `no-unused-vars`, so unused locals are caught. The a11y and suppression parts moved to F-11 and F-07. |
| A2-14 | dropped | 71 test files exist in `src/pages/*/components/`; the "222 of 222 without a test" count is wrong. |
| A2-04 (S2) | S3, merged into F-15 | `page-template.md` gives the props-only rule to `components/<domain>/`, not to page-local components. |
| A2-01 (S2) | S3 (F-16) | The defaults cite OutSystems defaults, and the server stays the judge. The missing not-found state remains. |
| A1-10 (S2) | S3 (F-14) | The mock-free guard holds for production. The order risk is in the mock phase. |
| A3-05 (S2) | S3, merged into F-13 | Sizes and route sets verified. Dead CSS and collisions are unverified. |
| A5-08 (S2) | S3, merged into F-13 | First loads stay in the self-set budget; the gap is the missing gate. |
| A6-06 (S2) | S3, merged into F-21 | The SW routing logic has unit tests in `src/pwa`; only the wiring file has none. |
| A6-17 (S2) | S3, merged into F-26 | Documentation drift, not code. |
| A1-05 | merged into F-06, recounted | knip raw: 58 of 74 hooks unused (the area count "1 `useQuery`" missed hooks that pages call through the barrels). |
| A4-02 (S2) | kept, merged with A4-20 (F-12) | No attempt counter found; the `locksecs` switch is confirmed in all builds. |
| Lead findings | added | F-05, F-08 and F-19 cut across areas; F-15 and F-23 add self-assessment and telemetry evidence. |

Confidence: high for F-01 to F-06, F-09, F-12, F-15, F-19 and the gate table (I opened the code or the tool output).
Medium for F-07, F-08, F-10, F-11 and F-13 (the spread comes from regex counts). Medium for the line counts in area 3
and the coverage figures, which depend on the command of the facts run. Low for the size of the CSS problem.

# Architecture and tech stack

Consistency across dozens of routes built by different agents at different times comes from three references that every route reads and that only the user can change: the confirmed stack, the accepted patterns with their reference implementations, and the dependency allow-list. Checks make them binding.

## Contents
1. Items to confirm
2. The confirmation session
3. Patterns and reference implementations
4. Changing the stack: ADRs
5. Consistency rules
6. Avoiding merge conflicts
7. Existing projects

## 1. Items to confirm

`stack.py init` proposes a value, options and a reason for each item. The proposals match what `scaffold_react_app.py` builds; choosing differently is allowed but means adapting the scaffold under an ADR.

| Group | Items |
|---|---|
| Platform | language, framework and build tool, React version, Node version, package manager, browser support |
| Application | routing, server state, client state, API layer, mocking, target backend, folder layout |
| UI | styling (original CSS unchanged), forms and validation, dates and numbers, strings / i18n |
| Quality | testing, lint and format |
| Security and runtime | authentication, tokens and personal data in the browser, PWA / offline |
| Third-party modules | one item per OutSystems module that looks like a library (maps, sortable lists, sanitizers, charts, carousels, editors…), with no proposal: npm package (named and pinned), port of the module's JavaScript, or out of scope |

## 2. The confirmation session

1. Prepare evidence: survey modules and third-party modules, the shell capture (`security.md`, client variables, stylesheets), the forms and lists the routes show, whether `languageResources.js` exists.
2. `stack.py questions`: present every open item, pattern and proposed ADR in one message, each with the proposal, the options, the reason and the evidence. Use the client's question tool when available.
3. Record exactly what the user said: `stack.py confirm <key> --value "<choice>" --by user --note "<context>"`. For option labels such as "npm package", record the concrete package and version. `confirm-all-proposed` is for an explicit "accept all as listed" from the user, after they saw the list; items without a proposal must be answered one by one.
4. Accept patterns the user agrees with (`stack.py pattern accept <ID> --by user`); edit or drop the others before accepting.
5. `stack.py check` must report OK before scaffolding (`scaffold_react_app.py --stack migration/stack.json`) and before any route starts.

## 3. Patterns and reference implementations

A pattern (`migration/patterns/P-<ID>.md`) states how this app does one recurring thing: when it applies, the rules, and a reference implementation. Seeds at init: server data (P-DATA), mocks (P-MOCKS), route inputs and navigation (P-PARAMS), states (P-STATES), lists (P-LIST), forms (P-FORM), dialogs/sheets/toasts (P-DIALOG), back navigation and view cache (P-BACK), OutSystems UI patterns as shared components (P-OSUI), feature flags through the flag store (P-FLAGS), mutations that keep state in the mock store (P-MUTATION), the same calls in the same phases as the capture (P-CALLS). The stack also has a `viewports` item (which viewports are captured and parity-checked) and one `osui:<Pattern>` item per OutSystems UI pattern with behaviour to reproduce (provider library or hand-written).

- Route specs list the patterns they follow under "Patterns used"; `consistency_check.py` rejects ids that do not exist or are not accepted.
- Reference: after the first route using a pattern finishes (review confirmed by the user), ask the user whether that route's files become the reference: `stack.py pattern reference <ID> --route <S> --files app/src/screens/<S>/api.ts,...`. The pattern file then points every later route to working, confirmed code. Prefer the simplest route that shows the pattern completely.
- `stack.py check` fingerprints reference files; if a reference changes, the user re-confirms it.
- New need not covered by any pattern: a decision question to the user. If accepted, `stack.py pattern new` (proposed) and `pattern accept --by user`. Never invent a local way of doing something another route will also need.

## 4. Changing the stack: ADRs

Any change after confirmation (new package, different library, new rule) is an Architecture Decision Record:
```bash
python3 scripts/stack.py adr new --title "<change>" --context "<why, evidence, routes affected>" --decision "<what>" --consequences "<cost, migration of existing routes>"
python3 scripts/stack.py adr accept ADR-<n> --by user          # only after the user agrees
python3 scripts/stack.py dep add <package> <version> --adr ADR-<n>
```
The foundation owner applies it (package.json, lockfile, shared code), runs `stack.py check`, and re-runs consistency and parity on affected finished routes. Route agents only ask; they never edit `package.json`, the lockfile, `stack.json` or patterns.

## 5. Consistency rules

`consistency_check.py --screen <S>` (part of `route.py finish`) checks, from `stack.json`:
- required files (`index.tsx`; `api.ts`, `mocks.ts`, `types.ts` when the route has calls),
- imports: packages only from the allow-list; relative imports only inside the route or into `src/shared`, `src/shell`, `src/lib`, `src/components`, `src/mocks`; never into another route,
- forbidden patterns with ids and reasons: direct `fetch`/axios, browser storage, route CSS, inline visual styles (unless every declaration is in a captured `style` attribute of the route), raw HTML, wire shapes in components, debug output,
- `package.json` equals the pinned allow-list,
- "Patterns used" ids exist and are accepted.
Rules live in `stack.json` (`rules`); changing them is an ADR.

## 6. Avoiding merge conflicts

- One folder per route; nothing shared is edited by a route (scope guard).
- Routes and mock handlers are discovered by the scaffold (file presence and glob), so no central list is edited when a route is added.
- Mock data source (stack item `mocking`): fictional data with captured shapes, or anonymized fixtures recorded from the real app. The second needs a test environment, a test account, an ADR, and the user's review of every conversion (`references/recorded-mocks.md`); `consistency_check.py` enforces the review for routes that use `recordedHandler`.
- `package.json`, lockfile, shell, shared, patterns and `stack.json` change only in the foundation owner's branch, merged before the routes that need them.
- One formatter and lint config from the stack, run before every commit.
- Board and questions are written through scripts (small atomic files per route).
- One branch or worktree per route, merged after `route.py finish`.

## 7. Existing projects

When the React app already exists, run `stack.py init`, then confirm each item with the user using the values the project actually uses, and pin the allow-list to the current `package.json` through one ADR ("baseline"). `stack.py check` then shows any drift. Patterns: write them from the routes already built and confirmed, choose references with the user, and ask whether earlier routes that differ should be aligned.

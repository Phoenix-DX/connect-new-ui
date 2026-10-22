# Refactor plan: from OutSystems parity to a clean React architecture

Status: **draft, in review by the user**. Written 2026-10-22. The user approved these items on 2026-10-22: the
page-first model, the "component and container" vocabulary, and decisions D1 to D4 (§8). The start date is open (D5).

Writing rules: `migration/english-docs/style-rules.md` (ASD-STE100 writing rules).

Review and detailed proposal (2026-10-22): `refactor-plan-review.md` (score, findings, flag and sign-in design, decisions
R1 to R8) and `refactor-plan-v2.md` (steps for an agent). The user decides which plan applies.

## 1. Goal

The app in `app/` matches the OutSystems app 1:1. The code also copies the OutSystems structure: modules, blocks and
widgets. Shared code has many cross imports. This plan changes the structure and keeps the behavior.

The target has these properties:

- A developer finds the code of a screen from its route name.
- Each component has one responsibility.
- Each UI concept has one component. There is no duplicate.
- Dependencies go in one direction only.
- The code uses React terms only: page, container, component, hook. The terms "block" and "widget" are not used.

## 2. Current state (measured 2026-10-22)

| Item           | Value                                                                                              |
| -------------- | -------------------------------------------------------------------------------------------------- |
| Code in `src/` | 2,529 files, about 146k lines. `api/schema.d.ts` has 15k lines, `vendor` has 5k lines.             |
| `screens/`     | 502 files, 49.7k lines. One folder for each route.                                                 |
| `shared/`      | 17 folders, one for each OutSystems module. About 57k lines, 237 blocks.                           |
| `shell/`       | 109 files, 11.4k lines                                                                             |
| CSS            | 52 original OutSystems stylesheets (1.6 MB). `routes.css.generated.ts` loads a set for each route. |
| Tests, stories | 322 test files, 237 stories                                                                        |

How many screens import each of the 237 shared blocks directly:

| Screens   | Blocks | Meaning                                                                                                                     |
| --------- | ------ | --------------------------------------------------------------------------------------------------------------------------- |
| 0         | 99     | Only other blocks use them (nested blocks).                                                                                 |
| 1         | 37     | The block can move into its page.                                                                                           |
| 2–3       | 60     | A small group of pages shares the block.                                                                                    |
| 4 or more | 41     | The block is really shared. Examples: `CommonUI_InsideLayout` (54 screens), `BottomBarMenu` (29), `Layout_DetailPage` (23). |

### 2.1 Problems

1. **Dependency cycles between shared modules:**
   - `UBTConnect ↔ UBTConnectLibrary ↔ UBTConnect_Utils`
   - `Connect2_LegacyShared ↔ UBTConnect`
   - `Connect2_Assemble_MUI ↔ Connect2_MyBookmarks_MUI`
2. **Dependencies in the wrong direction:**
   - `shared/osui` is generic UI, but it imports `UBTConnect` and `UBTConnectLibrary`.
   - `shared/UBTConnect` imports `screens/` and `app/`.
3. **Code follows OutSystems modules, not screens.** One screen imports blocks from 4 to 5 modules.
4. **Candidate duplicates.** Phase 0 must verify each candidate:
   - 7 email screens with a similar structure, about 2.6k lines: `ContactByEmail*` (5), `EmailContact`,
     `EmailTarget`.
   - Dialogs: `Dialog_CustomChoice`, `Dialog_Navigation`, `NavigationConfirmationDialog`,
     `Dialog_AccessRestrictedAction_Legacy`, `Dialog_GoExternalApp`, `FreeSubscriptionActionDialog`.
   - Empty states: `BlankSlate`, `EmptyList`, `Directory_EmptyState`, `MessageList_NoResults`.
   - Cards: `Card`, `Card_Event`, `Card_Milestone`, `Card_Template`, `Card_MemberInformation`, `ImageCard_*`,
     `NC_Card_*`.
   - Carousels: `Carousel`, `EntitiesCarousel*`.
   - The `DEPRECATED_*` patterns in `shared/osui`.
5. **Screens depend on infrastructure.** 173 files in `screens/` import `shell/` directly. Screens call actions by
   their OutSystems names: `callAction('Module', 'Owner/DataAction')`. The UI uses the wire types directly.
6. **Styles are global OutSystems CSS.** No component owns its style. The CSS load order has conflicts (see the
   header of `routes.css.generated.ts`).

## 3. Principles

1. **Keep the behavior.** A refactor step does not change the UI or the logic. The parity gate is the safety net.
2. **Change in small steps.** Replace one part at a time. Do not rewrite the app in one step.
3. **Keep moves and changes in different commits.** A move commit only moves files and updates imports. The next
   commit changes the code.
4. **Measure before and after.** Record the metrics of §7 at the start and at the end of each phase.
5. **Lint enforces the rules.** Reviewers do not have to remember the rules.

## 4. Target architecture

### 4.1 Terms

| Term          | Definition                                             | It can                                                                                                  | It must not                                                   |
| ------------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| **Page**      | The entry point of one route. The top-level container. | Read route parameters. Compose containers and components.                                               | Import another page.                                          |
| **Container** | Connects data and state to components.                 | Call data hooks (queries, mutations), navigation and `platform/` (session, PIN, device). Handle events. | Contain complex markup or styles.                             |
| **Component** | Shows UI.                                              | Receive props. Keep local UI state (open or closed, tab, input value).                                  | Call the API, read the session, navigate, import a container. |
| **Hook**      | Reusable logic for a page or a container.              | Call data hooks and `platform/`.                                                                        | Return markup.                                                |

### 4.2 Folders

```
src/
  app/                      router, providers, AppFrame, route table
  pages/
    HouseholdDetails/
      HouseholdDetailsPage.tsx    the page (top-level container)
      containers/                 containers that only this page uses
      components/                 components that only this page uses
      hooks/                      hooks that only this page uses
    HomeFeed/
    ...                           one folder for each route; folder name = route name
  containers/               containers that 2 or more pages use (BottomBar, ShareSheet, FilterSheet, ...)
  components/
    ui/                     generic UI: Button, Dialog, BottomSheet, Card, List, EmptyState, Skeleton, ...
    layout/                 AppLayout, DetailLayout, HomeLayout
    household/, event/, ... business components that 2 or more pages use (props only)
  api/<domain>/             repository, mapper (wire → domain type), query keys, data hooks (useHousehold, ...)
  lib/                      pure functions: date, format, sanitize
  platform/                 session, auth, PIN, device, storage, PWA, navigation (view cache)
  legacy/os/                OutSystems compatibility: StylesheetHost, os-wire, os-exceptions, runtime ports,
                            vendor wrappers. This folder gets smaller in each phase.
```

### 4.3 Rules

1. Put new code in `pages/<Route>/`.
2. When a second page needs the code, move the code to `src/components/` or `src/containers/`.
3. A page does not import another page.
4. A component does not import a container, `api/` or `platform/`.
5. Only pages, containers and hooks call data hooks.
6. `components/ui/` does not know the business. It does not import `components/<domain>/`.
7. `lib/` and `components/ui/` import only `lib/` and `components/ui/`.
8. Only `platform/`, `api/` and `app/` import `legacy/os/`.
9. Each folder in `src/containers/`, `src/components/` and `src/api/` has an `index.ts`. Other code imports only
   from the `index.ts`.
10. Imports use the alias `@/`. Do not use `../../..`.

Lint checks rules 3 to 10.

### 4.4 From an OutSystems block to React

| OutSystems block                                                 | React target                                       |
| ---------------------------------------------------------------- | -------------------------------------------------- |
| UI only, with input parameters                                   | Component                                          |
| With a data action, an aggregate or a side effect                | A container (data and events) and a component (UI) |
| Layout block (`Layout_DetailPage`, `CommonUI_InsideLayout`, ...) | `components/layout/`                               |
| OutSystems UI pattern (`shared/osui/*`)                          | `components/ui/`                                   |
| `DEPRECATED_*` pattern                                           | Delete after all users move to the new component   |

- Use business names in PascalCase, without a module prefix. Example: `HouseholdDetails_Members_Block` →
  `HouseholdMemberList`.
- Do not put OutSystems references (`mvc.js:640-1150`) in the code. Record the mapping in
  `docs/refactor/os-map.csv` (OutSystems name → React file). The parity tools and the specs use this file. Delete
  the file when nobody uses it.

### 4.5 Data

- `api/<domain>/` calls `callAction` and maps the wire type to a domain type.
- The UI uses only domain types.
- A factory makes the query keys. Example: `householdKeys.detail(id)`.
- The MSW mocks and the OpenAPI contract do not change. The backend is not affected.

### 4.6 Styles

- Put the original OutSystems CSS in `@layer legacy`.
- Components use CSS Modules and design tokens (`--color-*`, `--space-*`, made from `UBT_Color` and `UBT_Size`).
- Remove legacy CSS one part at a time, after the related component has its own style.

## 5. Safety

### 5.1 Parity levels

Today `route.py parity` compares each route with the capture from OutSystems TST. The comparison has three groups of
checks:

| Group    | Checks                                                            |
| -------- | ----------------------------------------------------------------- |
| DOM      | `structure`, `class`, `attribute`                                 |
| Look     | `style`, `pseudo`, `position`, `layout`, `text`, `pixel`          |
| Behavior | `call` (service calls for each step, against the runtime capture) |

The DOM checks compare each element and each class with OutSystems. A merge of components changes the DOM, and CSS
Modules change the class names. Thus the refactor uses two levels:

| Level    | Checks                                                                            | Use it for                                                                               |
| -------- | --------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `strict` | all checks                                                                        | Phases 1, 2 and 4, and the move commits of Phase 5. These steps must not change the DOM. |
| `visual` | look and behavior. The DOM checks are off. `style` runs only on visible elements. | Phases 3 and 6, and the merge commits of Phase 5                                         |

At the `visual` level, the user sees the same screen and the app makes the same calls. The HTML inside can change.

### 5.2 Two references

1. **OutSystems reference.** The captures in `migration/screens/*/analysis/`. They do not change.
2. **Self-parity reference.** The React app at the tag `migration-complete`. Today parity is 64/0, so this build is
   equal to OutSystems. The tool records its DOM and screenshots once. The tool compares each refactor step with this
   reference too. This comparison does not need TST or a sign-in, and it finds small changes that the OutSystems
   thresholds allow.

### 5.3 Parity tool for the refactor

The refactor does not use the pipeline of the skill `outsystems-screen-spec` (decision D4, option B):

- The skill and the board do not change. The tag `migration-complete` freezes the migration state (64/64).
- `route.py` has fixed paths: `PARITY_SHARED` (`route.py:683`) and `src/screens/<S>/index.tsx` (`route.py:860`).
  When Phase 1 moves the folders, `route.py parity` and `parity_sweep.py` fail.
- The comparison engine `parity_check.cjs` works on a URL and a capture only. It does not depend on the folders.

A new script, `migration/tools/refactor_parity.py`, replaces the management layer of `route.py`:

1. It reads the routes and states from `migration/screens/*/analysis/`.
2. It runs `parity_check.cjs` for each state at the level `strict` or `visual`.
3. It compares each state with the self-parity reference (§5.2).
4. It writes one report for each phase. The user confirms the report one time for the full phase.

The `call` check reads `window.__osCalls`. Today `src/lib/api.ts` writes this value. When the client moves, keep this
hook.

### 5.4 Rules

1. **Baseline.** Before the start, `npm run ci`, the parity sweep (64/0) and the bundle size check must pass.
2. **Gate for each pull request.** `npm run ci` passes. `refactor_parity.py` shows no new route with a difference,
   at the level of the step (§5.1).
3. **Codemods.** A script (`ts-morph`) moves files and updates imports. Do not update imports by hand.
4. **Lint in warn mode first.** The boundary rules run as `warn` from Phase 1. They change to `error` in Phase 7.
5. **Pull request size.** One goal for each pull request, and a maximum of about 40 files. A pull request that only
   moves files can be larger.
6. **Rollback.** Each day ends with a green commit. When the gate fails, revert the commit. Do not add a fix on top.
7. **No parallel route work.** Do not change routes on `main` during the refactor. For an urgent fix, fix it on
   `main` and rebase the refactor branch on the same day.

### 5.5 Branch and commits

All refactor work runs on one branch: `refactor/architecture` (user, 2026-10-22).

**Before each phase and before each day:**

1. Run `git branch --show-current`.
2. When the result is not `refactor/architecture`, stop. Do not change files. Tell the user.
3. Run `git status --short`. When it shows changes that are not from the refactor, stop and ask the user.

**After each step:**

1. Run the gate of the step (§5.4, rule 2).
2. When the gate passes, commit on `refactor/architecture`.
3. When the gate fails, do not commit. Fix the step or revert it (§5.4, rule 6).

**Commit rules:**

- One commit for each step. A step is one item of a day in §6. A move and a change are two steps (§3, rule 3).
- Write the commit message in English. Start with the phase and the day. Example:
  `refactor(P1-D5): move shell/ to platform/`.
- Add the result of the gate to the commit body: `ci: pass; parity strict: 64/0 (OutSystems), 64/0 (self)`.
- The user gave a standing approval for these commits on this branch only (user, 2026-10-22). Commits on other
  branches still need the user's request (`CLAUDE.md`, rule 7).
- Do not push. Do not merge into `main`. The user does the push and the merge.

## 6. Plan by day

Total: about 35 working days for one developer with Claude.

### Phase 0: freeze, tools and baseline (days 0–3)

- **Day 0.** Create the tag `migration-complete` on `main`. Create the branch `refactor/architecture` from the tag,
  and switch to it. From this step, apply §5.5 before and after each step. Write
  `migration/tools/refactor_parity.py` with the levels `strict` and `visual` (§5.3). Commit.
- **Day 1.** Record the self-parity reference from the tag. Run `npm run ci` and `refactor_parity.py --level strict`.
  The result must be 64/0 against both references. Record the results in `docs/refactor/baseline.md`.
- **Day 2.** Install the dev tools (D3): `dependency-cruiser`, `eslint-plugin-boundaries`, `jscpd`, `knip`,
  `ts-morph`. Export the dependency graph, the cycles, the duplicates and the unused exports.
- **Day 3.** Verify the candidate duplicates of §2.1. Write the ADR "Target FE architecture". Write
  `docs/refactor/move-map.csv`: each block → component or container, and its target folder.
- **Result:** a frozen migration state, a parity tool that runs, a baseline, an ADR and an approved move map.

### Phase 1: structure and rules (days 4–6), parity `strict`

- **Day 4.** Create the target folders and the alias `@/`. Add the boundary rules in `warn` mode.
- **Day 5.** Move `shell/` to `platform/`. Move `lib/os-*` and `StylesheetHost` to `legacy/os/`. Use the codemod.
- **Day 6.** Move `lib/api.ts` to `api/client/`. Keep the hook `window.__osCalls`. Move `flags` to `lib/config/`.
  Move the pure functions to `lib/`. Run the gate.
- **Result:** the new structure exists, and lint checks it. The behavior does not change.

### Phase 2: remove the cycles (days 7–10), parity `strict`

- **Day 7.** Remove the imports from `shared/UBTConnect` to `screens/` and `app/`. Give those values through props
  or a context.
- **Day 8.** Remove the cycle `UBTConnect ↔ UBTConnectLibrary ↔ UBTConnect_Utils`. Move the shared static entities
  and structures to `api/<domain>/` or `lib/`.
- **Day 9.** Remove the cycles `Connect2_LegacyShared ↔ UBTConnect` and `Connect2_Assemble_MUI ↔
Connect2_MyBookmarks_MUI`. Remove all imports from `shared/osui` to the app modules.
- **Day 10.** Measure again. The number of cycles must be 0. Run the gate.
- **Result:** the dependency graph has no cycle.

### Phase 3: generic UI in `components/ui` (days 11–15), parity `visual`

- **Day 11.** Move `shared/osui/*` (without `DEPRECATED_*`) and `components/OS*` to `components/ui/`. Each component
  has one story.
- **Day 12.** Merge the dialogs into `Dialog` and its variants (`ConfirmDialog`, `ChoiceDialog`). Update the users.
- **Day 13.** Merge the empty states into `EmptyState`. Merge the skeletons into `Skeleton`.
- **Day 14.** Merge the cards into `Card` with slots (header, media, body, actions). Merge the carousels into
  `Carousel`.
- **Day 15.** Merge the list items into `ListItem`. Write `components/ui/README.md`. Run the phase report.
- **Result:** one component for each UI concept.

### Phase 4: data in `api/<domain>` (days 16–19), parity `strict`

- **Day 16.** Create `api/household`, `api/member`, `api/country`, `api/locality` and `api/update`. Each folder has
  types, a mapper, a repository and query keys.
- **Day 17.** Create `api/event`, `api/bookmark`, `api/note`, `api/message` and `api/notification`.
- **Day 18.** Change `screens/*/api.ts` to use the repositories. The UI does not import wire types. The API contract
  does not change (D2).
- **Day 19.** Sort the mocks by domain. Run the gate.
- **Result:** the UI does not know the OutSystems action names.

### Phase 5: pages, containers and components (days 20–26), parity `strict` then `visual`

Each day covers one group of routes with the same steps:

1. Move the screen from `screens/<Route>/` to `pages/<Route>/`. Run the gate at `strict`.
2. Split each block into a container and a component (§4.4).
3. Move the code that only this page uses into `pages/<Route>/`.
4. Move the code that 2 or more pages use to `src/containers/` or `src/components/`.
5. Run the gate at `visual`.

- **Day 20 (pilot).** The email and contact routes: `ContactUs*`, `ContactByEmail*`, `EmailContact`,
  `EmailTarget`. Merge the 7 email screens into one `ContactForm` container with a configuration for each route.
  Use this day as the pattern for the other days.
- **Day 21.** Login, Splash, `PIN*`, AcceptPendingPolicies.
- **Day 22.** HomeFeed, FeedItemDetail, Updates_SingleList, Services, Search.
- **Days 23–24.** BrowseCountries, BrowseDirectory, CountryList, CountryDetails, `Household*`, Locality_Details,
  OneSchoolGlobalDetails, Photobook, `SupperMeeting*`. This is the largest group.
- **Day 25.** `Orbit*`, `LDM_*`, `Assemble*`, EventDetail, EventBooklet, MilestoneDetail, GuestArrangements,
  HelpersDetail, HostSurvey, MyEntertaining.
- **Day 26.** MessageList, MessageDetail, Notifications, MyBookmarks, BookmarksByGroup, Notes, Menu, Profile,
  TermsAndPoliciesMenu, ConnectShare, LegacyShareObject, QRCodeGenerate, ViewDocuments.
- **Result:** `screens/` and `shared/` are empty and deleted. Each page file has a maximum of about 80 lines.

### Phase 6: styles (days 27–30), parity `visual`

- **Day 27.** Make the design tokens from `UBT_Color`, `UBT_Size` and the OutSystems CSS variables. Put the
  original CSS in `@layer legacy`.
- **Days 28–29.** Move the styles of `components/ui/` to CSS Modules. Remove the related legacy selectors. Run the
  gate after each component.
- **Day 30.** Run `knip` and PurgeCSS. Delete the unused code and CSS. Measure the bundle size again.
- **Result:** `components/ui/` owns its styles. The legacy CSS is smaller.

### Phase 7: lock the architecture (days 31–33)

- **Day 31.** Change the boundary rules to `error`. Add `dependency-cruiser` and `jscpd` (with a threshold) to
  `npm run ci`.
- **Day 32.** Update `README.md`, `docs/guides/`, `CLAUDE.md`, the ADR and a template "add a new page". The skill
  `outsystems-screen-spec` stays as a reference only.
- **Day 33.** Compare the metrics with the baseline. Write the report. List the work that is not done, for example
  the legacy CSS that is still in use.

## 7. Metrics

| Metric                                      | Baseline                          | Target                         |
| ------------------------------------------- | --------------------------------- | ------------------------------ |
| Dependency cycles                           | 4 or more                         | 0                              |
| Boundary violations                         | measure on day 4                  | 0                              |
| Duplicate code (jscpd)                      | measure on day 2                  | 50% less or better             |
| Page files that import `platform/` directly | 173 (today `screens/` → `shell/`) | only through public hooks      |
| Mean lines in a page file                   | measure on day 2                  | 80 or less                     |
| Parity against OutSystems                   | 64/0                              | 64/0 at the level of the phase |
| Self-parity                                 | 64/0 on day 1                     | 64/0 at the level of the phase |
| JS and CSS bundle size                      | measure on day 1                  | no increase                    |

## 8. Decisions

| Id  | Decision                              | Answer                                                                                         | Who, date        |
| --- | ------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------- |
| D1  | Parity during the refactor            | Yes, with two levels (`strict`, `visual`) and a self-parity reference (§5.1, §5.2)             | user, 2026-10-22 |
| D2  | API contract `/api/<Module>/<Action>` | Keep it, behind the repositories in `api/<domain>/`                                            | user, 2026-10-22 |
| D3  | Dev dependencies                      | `dependency-cruiser`, `eslint-plugin-boundaries`, `jscpd`, `knip`, `ts-morph`                  | user, 2026-10-22 |
| D4  | Relation to the skill pipeline        | Option B: freeze the pipeline at the tag `migration-complete`; use `refactor_parity.py` (§5.3) | user, 2026-10-22 |
| D5  | Start date                            | **Open.** The user decides after the review of this plan.                                      | —                |

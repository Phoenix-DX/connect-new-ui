# Brief: AssembleEvents (class B: mock data drift: fix the fictional data or mocks; loop 0/2)

| Field | Value |
|---|---|
| Route | `AssembleEvents` (`http://localhost:5173/UBTConnect/AssembleEvents`) |
| Dev model | sonnet |
| baseCommit | `34398169a33efbc2f6c4eff40e427154e7d47c29` |
| Capture base (before the re-capture) | `2fe9efafbe44ea41859470495e6133cb2fcaaa8f` |
| States with diffs | default:3 |
| Kinds | text |
| Changed TST files | - |
| Other routes that use those files | - |
| Handoff folder | `migration/sync/handoffs/AssembleEvents` |
| Note | S: country counts 74 to 73, 29 to 28; same statistics data as Assemble_BrowseByCountry, BrowseCountries |

## What changed in TST (parity reports of the fresh capture)

- `default.json` (2026-11-07T00:31:57.451Z): text 3; pixels 0.01%, worst tile 0.7%; calls expected 11 actual 11; exemptions used 5
  - kind=text; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#BottomSheet_AssembleFilter.OSBlo; detail="73" → "74"
  - kind=text; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#BottomSheet_AssembleFilter.OSBlo; detail="73" → "74"
  - kind=text; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#BottomSheet_AssembleFilter.OSBlo; detail="28" → "29"
- `loading.json` (2026-11-07T00:32:00.011Z): no counts; pixels 0%, worst tile 0%; exemptions used 1
- `offline.json` (2026-11-07T00:32:03.599Z): no counts; pixels 0.01%, worst tile 0.7%; exemptions used 5

## DOM diff per state (old capture → new capture)

```
.../screens/AssembleEvents/analysis/calls.json     |  60 ++---
 .../AssembleEvents/analysis/dom/default.html       |  42 ++--
 .../AssembleEvents/analysis/dom/default.raw.html   |   2 +-
 .../AssembleEvents/analysis/dom/offline.html       | 250 ++++++++++-----------
 .../AssembleEvents/analysis/dom/offline.raw.html   |   4 +-
 .../screens/AssembleEvents/analysis/states.json    |   2 +-
 6 files changed, 180 insertions(+), 180 deletions(-)
```
```diff
-                   ••••••••• ••••••
+                   ••••
-              <div class="list-item" data-list-item="" data-not-scrollable="" id="b5-b2-l1-97_0-ListItem1">
+              <div class="list-item" data-list-item="" data-not-scrollable="" id="b5-b2-l1-95_0-ListItem1">
-              <div class="list-item" data-list-item="" data-not-scrollable="" id="b5-b2-l1-97_1-ListItem1">
+              <div class="list-item" data-list-item="" data-not-scrollable="" id="b5-b2-l1-95_1-ListItem1">
-              <div class="list-item" data-list-item="" data-not-scrollable="" id="b5-b2-l1-97_2-ListItem1">
+              <div class="list-item" data-list-item="" data-not-scrollable="" id="b5-b2-l1-95_2-ListItem1">
-              <div class="list-item" data-list-item="" data-not-scrollable="" id="b5-b2-l1-97_3-ListItem1">
+              <div class="list-item" data-list-item="" data-not-scrollable="" id="b5-b2-l1-95_3-ListItem1">
-              <div class="list-item" data-list-item="" data-not-scrollable="" id="b5-b2-l1-97_4-ListItem1">
+              <div class="list-item" data-list-item="" data-not-scrollable="" id="b5-b2-l1-95_4-ListItem1">
-              <div class="list-item" data-list-item="" data-not-scrollable="" id="b5-b2-l1-97_5-ListItem1">
+              <div class="list-item" data-list-item="" data-not-scrollable="" id="b5-b2-l1-95_5-ListItem1">
-              <div class="list-item" data-list-item="" data-not-scrollable="" id="b5-b2-l1-97_6-ListItem1">
+              <div class="list-item" data-list-item="" data-not-scrollable="" id="b5-b2-l1-95_6-ListItem1">
-              <div class="list-item" data-list-item="" data-not-scrollable="" id="b5-b2-l1-97_7-ListItem1">
+              <div class="list-item" data-list-item="" data-not-scrollable="" id="b5-b2-l1-95_7-ListItem1">
-              <div class="list-item" data-list-item="" data-not-scrollable="" id="b5-b2-l1-97_8-ListItem1">
+              <div class="list-item" data-list-item="" data-not-scrollable="" id="b5-b2-l1-95_8-ListItem1">
-              <div class="list-item" data-list-item="" data-not-scrollable="" id="b5-b2-l1-97_9-ListItem1">
+              <div class="list-item" data-list-item="" data-not-scrollable="" id="b5-b2-l1-95_9-ListItem1">
-              <div class="list-item" data-list-item="" data-not-scrollable="" id="b5-b2-l1-97_10-ListItem1">
+              <div class="list-item" data-list-item="" data-not-scrollable="" id="b5-b2-l1-95_10-ListItem1">
-              <div class="list-item" data-list-item="" data-not-scrollable="" id="b5-b2-l1-97_11-ListItem1">
+              <div class="list-item" data-list-item="" data-not-scrollable="" id="b5-b2-l1-95_11-ListItem1">
-                   74
+                   73
-              <div class="list-item" data-list-item="" data-not-scrollable="" id="b5-b2-l1-97_12-ListItem1">
+              <div class="list-item" data-list-item="" data-not-scrollable="" id="b5-b2-l1-95_12-ListItem1">
-              <div class="list-item" data-list-item="" data-not-scrollable="" id="b5-b2-l1-97_13-ListItem1">
+              <div class="list-item" data-list-item="" data-not-scrollable="" id="b5-b2-l1-95_13-ListItem1">
-              <div class="list-item" data-list-item="" data-not-scrollable="" id="b5-b2-l1-97_14-ListItem1">
+              <div class="list-item" data-list-item="" data-not-scrollable="" id="b5-b2-l1-95_14-ListItem1">
-                   74
+                   73
-              <div class="list-item" data-list-item="" data-not-scrollable="" id="b5-b2-l1-97_15-ListItem1">
+              <div class="list-item" data-list-item="" data-not-scrollable="" id="b5-b2-l1-95_15-ListItem1">
-              <div class="list-item" data-list-item="" data-not-scrollable="" id="b5-b2-l1-97_16-ListItem1">
+              <div class="list-item" data-list-item="" data-not-scrollable="" id="b5-b2-l1-95_16-ListItem1">
-                   29
+                   28
-</svg></div></div></div></div></div></div><div class="ubt-layout--login__header" id="b1-b2-b1-Placeholder_Header"></div><div class="ubt-layout--login__content" id="b1-b2-b1-Placeholder_Content"><div 
+</svg></div></div></div></div></div></div><div class="ubt-layout--login__header" id="b1-b2-b1-Placeholder_Header"></div><div class="ubt-layout--login__content" id="b1-b2-b1-Placeholder_Content"><div 
-<body class="phone portrait connect-theme osx is-ltr" style="--header-size-content: 0px; --footer-height: 46.875px; --viewport-height: 844px;">
+<body class="phone portrait connect-theme osx is-ltr" style="--header-size-content: 0px; --footer-height: 56px; --viewport-height: 844px;">
-                             <div class="OSBlockWidget" data-block="Content.Tag" id="b2-b4-b2-l1-92_0-$b2">
-                              <div class="tag border-radius-rounded background-primary connect-tag connect-tag-active OSInline" id="b2-b4-b2-l1-92_0-b2-Tag">
+                             <div class="OSBlockWidget" data-block="Content.Tag" id="b2-b4-b2-l1-89_0-$b2">
+                              <div class="tag border-radius-rounded background-primary connect-tag connect-tag-active OSInline" id="b2-b4-b2-l1-89_0-b2-Tag">
-                             <div class="OSBlockWidget" data-block="Content.Tag" id="b2-b4-b2-l1-92_1-$b2">
-                              <div class="tag border-radius-rounded background-primary connect-tag OSInline" id="b2-b4-b2-l1-92_1-b2-Tag">
+                             <div class="OSBlockWidget" data-block="Content.Tag" id="b2-b4-b2-l1-89_1-$b2">
+                              <div class="tag border-radius-rounded background-primary connect-tag OSInline" id="b2-b4-b2-l1-89_1-b2-Tag">
-                      <div class="OSBlockWidget" data-block="AssembleSkeleton.AssembleSummaryDetailHeader_Skeleton" id="b2-b4-b7-l1-98_0-$b1">
-                       <div class="OSBlockWidget" data-block="NewConnect_Utilities.NC_Result_Item__Card" id="b2-b4-b7-l1-98_0-b1-$b1">
-                        <div class="nc-result-item-card" data-container="" data-item="" id="b2-b4-b7-l1-98_0-b1-b1-Result_Item" style="cursor: pointer;">
-                         <div class="margin-bottom-s" data-container="" id="b2-b4-b7-l1-98_0-b1-b1-Result_Visual">
-                          <div id="b2-b4-b7-l1-98_0-b1-b1-Card_Visual">
-                           <div id="b2-b4-b7-l1-98_0-b1-Placeholder_Image">
... 238 more lines: git diff 2fe9efaf -- migration/screens/AssembleEvents/analysis/dom
```

## Decisions for this item

- none

## Allowed write paths

- `app/src/pages/AssembleEvents/**`
- `migration/screens/AssembleEvents/**`
- Everything else is out of scope: no `app/src/platform|legacy|lib|styles|vendor`, no `public/UBTConnect/css`, no `migration/parity-exemptions.json`, no `app/src/mocks/fixtures`, no `openapi.yaml`, no `package.json`. A needed change there is a `question` in your report.

## Rules (migration/AGENTS.md)

- 3. `catalog/blocks.md` and the shared component's README for collapsed blocks. Never use screenshots or memory of "how apps usually look" to decide markup, classes, sizes, colors or text. ### Where the compiled code is (check all before calling a source "missing") - Screen and block views (`*.mvc.js`): `migration/survey/survey-UBTConnect.json` → `sources` (every screen and block, even ones no capture loaded); readable copies of block sources in `migration/sources/survey/`. - Module controllers and models (`<Module>.controller.js`, `<Module>.model.js`): the shared store `migration/sources/raw/` (one copy per content; `migration/screens/<S>/analysis/manifest.json` names the files of a route), `migration/sources/shell/`, `migration/sources/contract/`. - OutSystems runtime, OSUI providers, plugin and SDK scripts, `moduleinfo.json`, `OutSystemsSettings.js`: `migration/sources/runtime/` (index: `migration/knowledge/runtime-sources.md`). - Static-entity values of TST by name: `migration/knowledge/static-entities-tst.json`. Only when a file is in none of these, name it in your report: the orchestrator fetches it read-only.
- 3. **Never guess.** Something is known only when the capture, the compiled code, `migration/knowledge/`, an MCP answer or a user answer recorded in `questions.json` shows it. Everything else is a question: facts go to the OutSystems MCP first (read-only), decisions and facts the MCP cannot settle go to the user (`route.py ask`, see the skill's references/route-agent.md). Do not build on a recommendation the user has not confirmed. You may never answer a decision yourself.
- 5. **Markup and classes exactly as captured.** Same element types, class lists, nesting and `data-block` wrappers (`<OSBlock>`). The original CSS only works if the markup matches. Never add CSS to fix a visual difference: fix the markup. Review-only styles live in `src/styles/review.css`.
- 9. **Data through adapters.** The repository of the domain, `src/api/<domain>/repository.ts`, calls `callAction(module, action, inputs)` (`src/api/client/callAction.ts`) and its mapper maps the wire shape (with `src/lib/os-wire.ts`). The page reads its route input in `src/pages/<S>/inputs.ts`; hooks call the repository functions (page template). `callAction` is typed from the API contract (`src/api/openapi.yaml`); an action missing from it does not compile: write a change request, never edit the contract. Data actions and aggregates are called with their owner (the screen or block that defines them, see `calls.json` paths): `callAction('Module', 'Owner/DataActionX', inputs)`, mocked with `recordedHandler('Module', 'Owner/DataActionX')`. Long Integer stays a string. Components never see `{ List: [...] }`, `""`-as-null or `1900-01-01`.
- 10. **Mocks mirror the capture.** `src/pages/<S>/mocks.ts` (or `src/containers/<Name>/mocks.ts` for a container) exports MSW handlers; shared fictional data lives in `src/mocks/fictional/`. The handlers return the captured item counts and field shapes, fictional values only. If the confirmed stack uses recorded fixtures: a recorded action uses `recordedHandler(module, action)` from `src/mocks/fixtures` and the adapter sends the OutSystems input names; never edit a fixture; never open `migration/.raw/` (HAR, salt); unrecorded actions or branches get fictional data and a line in Decisions to confirm. Scenarios: `real`, `empty`, `error`, plus one per captured state that needs data.
- 11. **Calls live where the call sites say.** Each call goes in the React handler that matches the root of its chain (click handler, mount effect, event callback).
- 12. **Behaviour from the capture.** Lifecycle, render conditions, click handlers, call order, error branches, toasts and navigation (original parameter names) follow the pack/spec. Use TanStack Query for server state and mirror the original loading rules.
- 13. **Never invent.** Gaps and states not captured render `<NotCaptured>` with whatever real content is known; images not captured use `osImage()`.
- 17. **Same calls as the original (P-CALLS).** Data actions in the same phase (load or the user event), server actions on the same events, in the same order, with the original input parameter names: `analysis/calls.json` is the reference and call parity checks it. Fix a call difference in the route's logic, never by changing the mock.
- 21. **Inline styles only as captured.** An inline visual style passes `consistency_check` only when every declaration is in a captured `style` attribute of the route; otherwise fix the markup.
- 22. **Exemptions are not yours to add.** If a parity difference looks acceptable, ask the user (decision question) with the evidence; the user decides.
- 23. **Stay inside your context.** Do not read other screens' notes, specs or packs, or the whole board. Do not re-open files whose content is in your pack.
- 3. `route.py step <S> spec`: generate `pack.md`, write `route-spec.md` (`route-spec-template.md`). Every unclear point gets a question (`route.py ask`); resolve facts with the OutSystems MCP; ask the user the decisions before writing code. When no blocking question is open: `route.py spec-done <S>` (again after any later spec edit or new answer).
- 5. `route.py step <S> parity`, then `route.py parity <S> --app http://localhost:5173` until every state is clean (all viewports, flag variants, steps, loading/offline; DOM, styles, pseudo-elements, positions, text, pixels and calls). Re-run it after the last code change: reports are fingerprinted. What cannot be fixed becomes a change request or a decision question.
- Page layout: `app/docs/guides/page-template.md`; patterns: `migration/patterns/P-*.md`; the route spec: `migration/screens/AssembleEvents/route-spec.md`; the pack: `migration/screens/AssembleEvents/pack.md`.

## Quick checks (developer, before the report)

```
export PATH=$HOME/.nvm/versions/node/v24.21.0/bin:$PATH
npm --prefix app run typecheck
cd app && npx vitest run <the test files of the changed code> && cd ..
cd app && npx eslint <the changed files> && cd ..
npm --prefix app run arch
python3 tools/pipeline/route.py parity AssembleEvents --app http://localhost:5173      # every state: 0 unexempted differences
```

## Gate (tester)

```
curl -s -o /dev/null -w '%{http_code}' http://localhost:5173/UBTConnect/HomeFeed   # 200, and lsof -p <pid> -a -d cwd = <root>/app
python3 tools/sync/sync.py scope AssembleEvents      # computes --base and the --allow list of the items active NOW
python3 tools/pipeline/route.py parity AssembleEvents --app http://localhost:5173
python3 tools/pipeline/consistency_check.py --screen AssembleEvents
npm --prefix app run typecheck && npm --prefix app run arch && (cd app && npx eslint <changed files> && npx vitest run <changed tests>)
```
Diff review: no edit of `migration/parity-exemptions.json`, `app/src/mocks/fixtures/**`, `app/src/api/openapi.yaml`, `app/public/UBTConnect/css/**`, `app/package.json`; no deleted test; nothing outside the allowed paths; `@origin` kept; no secrets.

## Report

Write your report to the handoff folder of the step: `dev.md` (developer), `test.md` (tester) or `docs.md`
(documenter). Use these headings in this order. Then return ONLY the "Result" and "Questions for the user" sections as
your final message.

```
## Result
status: pass | fail | blocked | question
summary: <3 lines or less: what you did and the outcome>

## Files changed
<one path per line; "none" when you changed no file>

## Commands run
<command> → <result: exit code and the key numbers>

## Deviations from the brief
<what you did differently from the brief, and why; "none">

## Questions for the user
<only decisions that the user must take; "none">
```

Status meanings:

- `pass`: the work of your stage is complete and every check you ran passed.
- `fail`: (tester) a gate check failed. List each failure under "Commands run" with the evidence.
- `blocked`: you cannot continue for a reason outside the step (a tool is missing, the dev server is down).
- `question`: you need a decision before you can continue. Do not guess.

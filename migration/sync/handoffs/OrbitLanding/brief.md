# Brief: OrbitLanding (class B: mock data drift: fix the fictional data or mocks; loop 0/2)

| Field | Value |
|---|---|
| Route | `OrbitLanding` (`http://localhost:5173/UBTConnect/OrbitLanding`) |
| Dev model | opus |
| baseCommit | `a71b8fbdbf243c49682a603d3b5b8d9059e8212f` |
| Capture base (before the re-capture) | `2fe9efafbe44ea41859470495e6133cb2fcaaa8f` |
| States with diffs | default:22, popup-filters:21, popup-filters-closed:22, popup-sort:21 |
| Kinds | structure, style, layout, position, pixel |
| Changed TST files | - |
| Other routes that use those files | - |
| Handoff folder | `migration/sync/handoffs/OrbitLanding` |
| Note | M: B + C: account has no Orbit event card; fewer household rows; no TST drift. Q4 |

## What changed in TST (parity reports of the fresh capture)

- `default.json` (2026-11-07T01:27:50.115Z): no counts; pixels 0.01%, worst tile 0.7%; calls expected 9 actual 9; exemptions used 3
- `loading.json` (2026-11-07T01:27:52.662Z): no counts; pixels 0%, worst tile 0%; exemptions used 1
- `offline.json` (2026-11-07T01:27:56.182Z): no counts; pixels 0.01%, worst tile 0.7%; exemptions used 4
- `popup-filters-closed.json` (2026-11-07T01:28:07.500Z): no counts; pixels 0.01%, worst tile 0.7%; calls expected 9 actual 9; exemptions used 3
- `popup-filters.json` (2026-11-07T01:28:01.237Z): no counts; pixels 0.01%, worst tile 1.0%; calls expected 9 actual 9; exemptions used 3
- `popup-sort.json` (2026-11-07T01:28:15.362Z): no counts; pixels 0.06%, worst tile 8.1%; calls expected 9 actual 9; exemptions used 4

## DOM diff per state (old capture → new capture)

```
migration/screens/OrbitLanding/analysis/calls.json | 18 ++---
 .../screens/OrbitLanding/analysis/dom/offline.html | 90 +++++++++-------------
 .../OrbitLanding/analysis/dom/offline.raw.html     |  8 +-
 3 files changed, 47 insertions(+), 69 deletions(-)
```
```diff
- <div class="feedback-message-wrapper" id="feedbackMessageContainer">
-  <div class="feedback-message feedback-message-info feedback-message-autoclose feedback-message-autoclose" role="alert" tabindex="0">
-   <i>
-   </i>
-   <div class="feedback-message-text">
-    <div class="feedback-message--title">
-     Service Interruption
-    </div>
-    <div class="feedback-message--body">
-     We’re currently experiencing unusually high traffic, which may affect access to some services.
-
-Our team is working to restore full functionality as quickly as possible.
-
-Thank you for your patience and understanding.
-    </div>
-   </div>
-  </div>
- </div>
-                    <div class="OSBlockWidget" data-block="Navigation.BottomBarItem" id="b2-l1-68_0-$b2">
+                    <div class="OSBlockWidget" data-block="Navigation.BottomBarItem" id="b2-l1-65_0-$b2">
-                      <div class="placeholder-empty bottom-bar-item-icon" id="b2-l1-68_0-b2-Icon" style="text-align: center;">
-                       <div class="OSBlockWidget" data-block="ConnectPatterns.Icon" id="b2-l1-68_0-$b4">
+                      <div class="placeholder-empty bottom-bar-item-icon" id="b2-l1-65_0-b2-Icon" style="text-align: center;">
+                       <div class="OSBlockWidget" data-block="ConnectPatterns.Icon" id="b2-l1-65_0-$b4">
-                      <div class="placeholder-empty bottom-bar-item-text" id="b2-l1-68_0-b2-Text" style="text-align: center;">
-                       <div class="OSBlockWidget" data-block="BasePatterns.CustomText" id="b2-l1-68_0-$b5">
+                      <div class="placeholder-empty bottom-bar-item-text" id="b2-l1-65_0-b2-Text" style="text-align: center;">
+                       <div class="OSBlockWidget" data-block="BasePatterns.CustomText" id="b2-l1-65_0-$b5">
-                         <div class="OSBlockWidget" data-block="ConnectPatterns.IconInline_Internal" id="b2-l1-68_0-b5-$b2">
+                         <div class="OSBlockWidget" data-block="ConnectPatterns.IconInline_Internal" id="b2-l1-65_0-b5-$b2">
-                    <div class="OSBlockWidget" data-block="Navigation.BottomBarItem" id="b2-l1-68_1-$b2">
+                    <div class="OSBlockWidget" data-block="Navigation.BottomBarItem" id="b2-l1-65_1-$b2">
-                      <div class="placeholder-empty bottom-bar-item-icon" id="b2-l1-68_1-b2-Icon" style="text-align: center;">
-                       <div class="OSBlockWidget" data-block="ConnectPatterns.Icon" id="b2-l1-68_1-$b4">
+                      <div class="placeholder-empty bottom-bar-item-icon" id="b2-l1-65_1-b2-Icon" style="text-align: center;">
+                       <div class="OSBlockWidget" data-block="ConnectPatterns.Icon" id="b2-l1-65_1-$b4">
-                      <div class="placeholder-empty bottom-bar-item-text" id="b2-l1-68_1-b2-Text" style="text-align: center;">
-                       <div class="OSBlockWidget" data-block="BasePatterns.CustomText" id="b2-l1-68_1-$b5">
+                      <div class="placeholder-empty bottom-bar-item-text" id="b2-l1-65_1-b2-Text" style="text-align: center;">
+                       <div class="OSBlockWidget" data-block="BasePatterns.CustomText" id="b2-l1-65_1-$b5">
-                         <div class="OSBlockWidget" data-block="ConnectPatterns.IconInline_Internal" id="b2-l1-68_1-b5-$b2">
+                         <div class="OSBlockWidget" data-block="ConnectPatterns.IconInline_Internal" id="b2-l1-65_1-b5-$b2">
-                    <div class="OSBlockWidget" data-block="Navigation.BottomBarItem" id="b2-l1-68_2-$b2">
+                    <div class="OSBlockWidget" data-block="Navigation.BottomBarItem" id="b2-l1-65_2-$b2">
-                      <div class="placeholder-empty bottom-bar-item-icon" id="b2-l1-68_2-b2-Icon" style="text-align: center;">
-                       <div class="OSBlockWidget" data-block="App_Common_Blocks.App_IconBadge" id="b2-l1-68_2-$b3">
-                        <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="b2-l1-68_2-b3-Skeleton">
-                         <div class="" id="b2-l1-68_2-b3-b1-Placeholder_LoadingSection">
+                      <div class="placeholder-empty bottom-bar-item-icon" id="b2-l1-65_2-b2-Icon" style="text-align: center;">
+                       <div class="OSBlockWidget" data-block="App_Common_Blocks.App_IconBadge" id="b2-l1-65_2-$b3">
+                        <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="b2-l1-65_2-b3-Skeleton">
+                         <div class="" id="b2-l1-65_2-b3-b1-Placeholder_LoadingSection">
-                           <div class="OSBlockWidget" data-block="OutSystemsUIOverrides.IconBadge" id="b2-l1-68_2-b3-IconBadge">
+                           <div class="OSBlockWidget" data-block="OutSystemsUIOverrides.IconBadge" id="b2-l1-65_2-b3-IconBadge">
-                             <div id="b2-l1-68_2-b3-b2-Icon">
-                              <div class="OSBlockWidget" data-block="ConnectPatterns.Icon" id="b2-l1-68_2-b3-$b3">
+                             <div id="b2-l1-65_2-b3-b2-Icon">
+                              <div class="OSBlockWidget" data-block="ConnectPatterns.Icon" id="b2-l1-65_2-b3-$b3">
-                             <div class="OSBlockWidget" data-block="OutSystemsUIOverrides.Badge" id="b2-l1-68_2-b3-b2-$b1">
+                             <div class="OSBlockWidget" data-block="OutSystemsUIOverrides.Badge" id="b2-l1-65_2-b3-b2-$b1">
... 38 more lines: git diff 2fe9efaf -- migration/screens/OrbitLanding/analysis/dom
```

## Decisions for this item

- none

## Allowed write paths

- `app/src/pages/OrbitLanding/**`
- `migration/screens/OrbitLanding/**`
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
- Page layout: `app/docs/guides/page-template.md`; patterns: `migration/patterns/P-*.md`; the route spec: `migration/screens/OrbitLanding/route-spec.md`; the pack: `migration/screens/OrbitLanding/pack.md`.

## Quick checks (developer, before the report)

```
export PATH=$HOME/.nvm/versions/node/v24.21.0/bin:$PATH
npm --prefix app run typecheck
cd app && npx vitest run <the test files of the changed code> && cd ..
cd app && npx eslint <the changed files> && cd ..
npm --prefix app run arch
python3 tools/pipeline/route.py parity OrbitLanding --app http://localhost:5173      # every state: 0 unexempted differences
```

## Gate (tester)

```
curl -s -o /dev/null -w '%{http_code}' http://localhost:5173/UBTConnect/HomeFeed   # 200, and lsof -p <pid> -a -d cwd = <root>/app
python3 tools/sync/sync.py scope OrbitLanding      # computes --base and the --allow list of the items active NOW
python3 tools/pipeline/route.py parity OrbitLanding --app http://localhost:5173
python3 tools/pipeline/consistency_check.py --screen OrbitLanding
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

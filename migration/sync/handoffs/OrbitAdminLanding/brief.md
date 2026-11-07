# Brief: OrbitAdminLanding (class A: TST changed its code: fix React; loop 0/2)

| Field | Value |
|---|---|
| Route | `OrbitAdminLanding` (`http://localhost:5173/UBTConnect/OrbitAdminLanding`) |
| Dev model | opus |
| baseCommit | `343a04aa1ad3e633274ebce518fc1351f1b71900` |
| Capture base (before the re-capture) | `2fe9efafbe44ea41859470495e6133cb2fcaaa8f` |
| States with diffs | default:6, offline:5 |
| Kinds | structure, layout, pixel |
| Changed TST files | `Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminLanding.mvc.js` |
| Other routes that use those files | - |
| Handoff folder | `migration/sync/handoffs/OrbitAdminLanding` |
| Note | S: new header filters (Upcoming Events, Sort By) and two popup placeholders |

## What changed in TST (parity reports of the fresh capture)

- `default.json` (2026-11-06T20:06:56.585Z): structure 3, layout 2, pixel 1; pixels 3.66%, worst tile 36.8%; calls expected 8 actual 8; exemptions used 3
  - kind=structure; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Orbit_ScreenBl; detail=missing in build
  - kind=layout; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Orbit_ScreenBl; detail=390×637 → 390×690
  - kind=layout; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Orbit_ScreenBl; detail=390×637 → 390×690
  - kind=structure; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Orbit_ScreenBl; detail=missing in build
  - kind=structure; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Orbit_ScreenBl; detail=missing in build
  - kind=pixel; path=screenshot; detail=3.66% pixels differ (max 0.20%), worst 40px tile 36.8% (max 3.0%), hotspots 40,120 (589px); 160,160 (572px); 200,160 (57
- `loading.json` (2026-11-06T20:06:59.135Z): no counts; pixels 0%, worst tile 0%; exemptions used 1
- `offline.json` (2026-11-06T20:07:02.648Z): structure 3, layout 1, pixel 1; pixels 2.89%, worst tile 77.4%; exemptions used 4
  - kind=structure; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Orbit_ScreenBl; detail=missing in build
  - kind=layout; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Orbit_ScreenBl; detail=390×637 → 390×690
  - kind=structure; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Orbit_ScreenBl; detail=missing in build
  - kind=structure; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Orbit_ScreenBl; detail=missing in build
  - kind=pixel; path=screenshot; detail=2.89% pixels differ (max 0.20%), worst 40px tile 77.4% (max 3.0%), hotspots 320,120 (1238px); 320,520 (561px); 320,320 (

## DOM diff per state (old capture → new capture)

```
.../screens/OrbitAdminLanding/analysis/calls.json  | 16 ++--
 .../OrbitAdminLanding/analysis/dom/default.html    | 98 ++++++++++++++--------
 .../analysis/dom/default.raw.html                  |  4 +-
 .../OrbitAdminLanding/analysis/dom/loading.html    | 98 ++++++++++++++--------
 .../analysis/dom/loading.raw.html                  |  4 +-
 .../OrbitAdminLanding/analysis/dom/offline.html    | 98 ++++++++++++++--------
 .../analysis/dom/offline.raw.html                  |  4 +-
 .../screens/OrbitAdminLanding/analysis/states.json |  6 +-
 8 files changed, 200 insertions(+), 128 deletions(-)
```
```diff
-<body class="phone portrait orbit-theme osx is-ltr" style="--header-size-content: 32.875px; --footer-height: 56px; --viewport-height: 844px;">
+<body class="phone portrait orbit-theme osx is-ltr" style="--header-size-content: 85.75px; --footer-height: 56px; --viewport-height: 844px;">
+             <div class="orbit-landing-filters-cont" data-container="">
+              <div class="orbit-landing-filters justify-content-flex-start" data-container="" style="cursor: pointer;">
+               <span class="bold color-orbit-primary-7 text-no-wrap margin-right-s" data-expression="">
+                Upcoming Events
+               </span>
+               <i class="icon fa fa-caret-down fa-1x" data-icon="">
+               </i>
+              </div>
+              <div class="orbit-landing-filters justify-content-flex-end" data-container="" style="cursor: pointer;">
+               <span class="bold color-orbit-primary-7 text-no-wrap margin-right-s">
+                Sort By
+               </span>
+               <i class="icon fa fa-caret-down fa-1x" data-icon="">
+               </i>
+              </div>
+             </div>
+              <div data-container="" id="b1-RootPlaceholder_Filters">
+               <div class="backwards-compatibility orbit-landing-filters__popup-backdrop" data-container="" id="b1-Root_Filters">
+               </div>
+              </div>
+              <div data-container="" id="b1-RootPlaceholder_Sort">
+               <div class="backwards-compatibility orbit-landing-filters__popup-backdrop" data-container="" id="b1-Root_Sort">
+               </div>
+              </div>
-                    <div class="OSBlockWidget" data-block="Navigation.BottomBarItem" id="b2-l1-37_0-$b2">
+                    <div class="OSBlockWidget" data-block="Navigation.BottomBarItem" id="b2-l1-42_0-$b2">
-                      <div class="placeholder-empty bottom-bar-item-icon" id="b2-l1-37_0-b2-Icon" style="text-align: center;">
-                       <div class="OSBlockWidget" data-block="ConnectPatterns.Icon" id="b2-l1-37_0-$b4">
+                      <div class="placeholder-empty bottom-bar-item-icon" id="b2-l1-42_0-b2-Icon" style="text-align: center;">
+                       <div class="OSBlockWidget" data-block="ConnectPatterns.Icon" id="b2-l1-42_0-$b4">
-                      <div class="placeholder-empty bottom-bar-item-text" id="b2-l1-37_0-b2-Text" style="text-align: center;">
-                       <div class="OSBlockWidget" data-block="BasePatterns.CustomText" id="b2-l1-37_0-$b5">
+                      <div class="placeholder-empty bottom-bar-item-text" id="b2-l1-42_0-b2-Text" style="text-align: center;">
+                       <div class="OSBlockWidget" data-block="BasePatterns.CustomText" id="b2-l1-42_0-$b5">
-                         <div class="OSBlockWidget" data-block="ConnectPatterns.IconInline_Internal" id="b2-l1-37_0-b5-$b2">
+                         <div class="OSBlockWidget" data-block="ConnectPatterns.IconInline_Internal" id="b2-l1-42_0-b5-$b2">
-                    <div class="OSBlockWidget" data-block="Navigation.BottomBarItem" id="b2-l1-37_1-$b2">
+                    <div class="OSBlockWidget" data-block="Navigation.BottomBarItem" id="b2-l1-42_1-$b2">
-                      <div class="placeholder-empty bottom-bar-item-icon" id="b2-l1-37_1-b2-Icon" style="text-align: center;">
-                       <div class="OSBlockWidget" data-block="ConnectPatterns.Icon" id="b2-l1-37_1-$b4">
+                      <div class="placeholder-empty bottom-bar-item-icon" id="b2-l1-42_1-b2-Icon" style="text-align: center;">
+                       <div class="OSBlockWidget" data-block="ConnectPatterns.Icon" id="b2-l1-42_1-$b4">
-                      <div class="placeholder-empty bottom-bar-item-text" id="b2-l1-37_1-b2-Text" style="text-align: center;">
-                       <div class="OSBlockWidget" data-block="BasePatterns.CustomText" id="b2-l1-37_1-$b5">
+                      <div class="placeholder-empty bottom-bar-item-text" id="b2-l1-42_1-b2-Text" style="text-align: center;">
+                       <div class="OSBlockWidget" data-block="BasePatterns.CustomText" id="b2-l1-42_1-$b5">
-                         <div class="OSBlockWidget" data-block="ConnectPatterns.IconInline_Internal" id="b2-l1-37_1-b5-$b2">
+                         <div class="OSBlockWidget" data-block="ConnectPatterns.IconInline_Internal" id="b2-l1-42_1-b5-$b2">
-                    <div class="OSBlockWidget" data-block="Navigation.BottomBarItem" id="b2-l1-37_2-$b2">
+                    <div class="OSBlockWidget" data-block="Navigation.BottomBarItem" id="b2-l1-42_2-$b2">
-                      <div class="placeholder-empty bottom-bar-item-icon" id="b2-l1-37_2-b2-Icon" style="text-align: center;">
-                       <div class="OSBlockWidget" data-block="App_Common_Blocks.App_IconBadge" id="b2-l1-37_2-$b3">
-                        <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="b2-l1-37_2-b3-Skeleton">
-                         <div class="" id="b2-l1-37_2-b3-b1-Placeholder_LoadingSection">
+                      <div class="placeholder-empty bottom-bar-item-icon" id="b2-l1-42_2-b2-Icon" style="text-align: center;">
+                       <div class="OSBlockWidget" data-block="App_Common_Blocks.App_IconBadge" id="b2-l1-42_2-$b3">
+                        <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="b2-l1-42_2-b3-Skeleton">
+                         <div class="" id="b2-l1-42_2-b3-b1-Placeholder_LoadingSection">
... 246 more lines: git diff 2fe9efaf -- migration/screens/OrbitAdminLanding/analysis/dom
```

## Decisions for this item

- none

## Allowed write paths

- `app/src/pages/OrbitAdminLanding/**`
- `migration/screens/OrbitAdminLanding/**`
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
- Page layout: `app/docs/guides/page-template.md`; patterns: `migration/patterns/P-*.md`; the route spec: `migration/screens/OrbitAdminLanding/route-spec.md`; the pack: `migration/screens/OrbitAdminLanding/pack.md`.

## Quick checks (developer, before the report)

```
export PATH=$HOME/.nvm/versions/node/v24.21.0/bin:$PATH
npm --prefix app run typecheck
cd app && npx vitest run <the test files of the changed code> && cd ..
cd app && npx eslint <the changed files> && cd ..
npm --prefix app run arch
python3 tools/pipeline/route.py parity OrbitAdminLanding --app http://localhost:5173      # every state: 0 unexempted differences
```

## Gate (tester)

```
curl -s -o /dev/null -w '%{http_code}' http://localhost:5173/UBTConnect/HomeFeed   # 200, and lsof -p <pid> -a -d cwd = <root>/app
/Library/Developer/CommandLineTools/usr/bin/python3 tools/pipeline/scope_guard.py --screen OrbitAdminLanding --base 343a04aa1ad3e633274ebce518fc1351f1b71900 --allow migration/sync/** --allow app/docs/** --allow migration/route-check/** --allow migration/knowledge/** --allow migration/metrics/** --allow migration/board.md --allow app/src/pages/MessageList/** --allow migration/screens/MessageList/** --allow app/src/pages/LDM_EventDetail_V2/** --allow migration/screens/LDM_EventDetail_V2/** --allow app/src/pages/ContactByEmailMember/** --allow migration/screens/ContactByEmailMember/**
python3 tools/pipeline/route.py parity OrbitAdminLanding --app http://localhost:5173
python3 tools/pipeline/consistency_check.py --screen OrbitAdminLanding
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

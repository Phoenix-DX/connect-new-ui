# Brief: MessageDetail (class B: mock data drift: fix the fictional data or mocks; loop 0/2)

| Field | Value |
|---|---|
| Route | `MessageDetail` (`http://localhost:5173/UBTConnect/MessageDetail`) |
| Dev model | sonnet |
| baseCommit | `343a04aa1ad3e633274ebce518fc1351f1b71900` |
| Capture base (before the re-capture) | `2fe9efafbe44ea41859470495e6133cb2fcaaa8f` |
| States with diffs | default:4 |
| Kinds | structure, pixel, call |
| Changed TST files | - |
| Other routes that use those files | - |
| Handoff folder | `migration/sync/handoffs/MessageDetail` |
| Note | S: re-captured 2026-11-07 with id 5981096 (route_discovery); structure 2, call 1, no TST file changed; another message than the mock. Q2 done |

## What changed in TST (parity reports of the fresh capture)

- `default.json` (2026-11-06T20:19:18.495Z): structure 2, pixel 1, call 1; pixels 11.1%, worst tile 51.6%; calls expected 9 actual 10; exemptions used 0
  - kind=structure; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[MyNotification; detail=missing in build
  - kind=structure; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[MyNotification; detail=extra in build
  - kind=pixel; path=screenshot; detail=11.10% pixels differ (max 0.20%), worst 40px tile 51.6% (max 3.0%), hotspots 40,280 (825px); 40,200 (786px); 40,120 (766
  - kind=call; path=calls:load; detail=extra call Connect2_LegacyShared/DataActionGetMessages
- `loading.json` (2026-11-06T20:19:21.059Z): no counts; pixels 0%, worst tile 0%; exemptions used 1
- `offline.json` (2026-11-06T20:19:24.554Z): no counts; pixels 0.01%, worst tile 0.7%; exemptions used 5

## DOM diff per state (old capture → new capture)

```
.../screens/MessageDetail/analysis/calls.json      | 18 +++---
 .../MessageDetail/analysis/dom/default.html        |  4 +-
 .../MessageDetail/analysis/dom/default.raw.html    |  2 +-
 .../MessageDetail/analysis/dom/loading.html        |  2 +-
 .../MessageDetail/analysis/dom/loading.raw.html    |  2 +-
 .../MessageDetail/analysis/dom/offline.html        | 72 +++++++++++-----------
 .../MessageDetail/analysis/dom/offline.raw.html    |  2 +-
 .../screens/MessageDetail/analysis/states.json     |  8 +--
 8 files changed, 55 insertions(+), 55 deletions(-)
```
```diff
-                     Test Noti 2
+                     test
-                      Test Noti 2
+                      test
-        <div id="reactContainer"><div id="transitionContainer"><div class="active-screen screen-container"><div data-block="MyNotifications.ScreenBlock_MessageDetail" class="OSBlockWidget" id="$b1"><
+        <div id="reactContainer"><div id="transitionContainer"><div class="active-screen screen-container"><div data-block="MyNotifications.ScreenBlock_MessageDetail" class="OSBlockWidget" id="$b1"><
-<body class="phone portrait connect-theme osx is-ltr" style="--header-size-content: 0px; --footer-height: 46.875px; --viewport-height: 844px;">
+<body class="phone portrait connect-theme osx is-ltr" style="--header-size-content: 0px; --footer-height: 56px; --viewport-height: 844px;">
-<body class="phone portrait connect-theme osx is-ltr" style="--header-size-content: 0px; --footer-height: 46.875px; --viewport-height: 844px;">
+<body class="phone portrait connect-theme osx is-ltr" style="--header-size-content: 0px; --footer-height: 56px; --viewport-height: 844px;">
-                    <div class="OSBlockWidget" data-block="Navigation.BottomBarItem" id="b3-l1-61_0-$b2">
+                    <div class="OSBlockWidget" data-block="Navigation.BottomBarItem" id="b3-l1-58_0-$b2">
-                      <div class="placeholder-empty bottom-bar-item-icon" id="b3-l1-61_0-b2-Icon" style="text-align: center;">
-                       <div class="OSBlockWidget" data-block="ConnectPatterns.Icon" id="b3-l1-61_0-$b4">
+                      <div class="placeholder-empty bottom-bar-item-icon" id="b3-l1-58_0-b2-Icon" style="text-align: center;">
+                       <div class="OSBlockWidget" data-block="ConnectPatterns.Icon" id="b3-l1-58_0-$b4">
-                      <div class="placeholder-empty bottom-bar-item-text" id="b3-l1-61_0-b2-Text" style="text-align: center;">
-                       <div class="OSBlockWidget" data-block="BasePatterns.CustomText" id="b3-l1-61_0-$b5">
+                      <div class="placeholder-empty bottom-bar-item-text" id="b3-l1-58_0-b2-Text" style="text-align: center;">
+                       <div class="OSBlockWidget" data-block="BasePatterns.CustomText" id="b3-l1-58_0-$b5">
-                         <div class="OSBlockWidget" data-block="ConnectPatterns.IconInline_Internal" id="b3-l1-61_0-b5-$b2">
+                         <div class="OSBlockWidget" data-block="ConnectPatterns.IconInline_Internal" id="b3-l1-58_0-b5-$b2">
-                    <div class="OSBlockWidget" data-block="Navigation.BottomBarItem" id="b3-l1-61_1-$b2">
+                    <div class="OSBlockWidget" data-block="Navigation.BottomBarItem" id="b3-l1-58_1-$b2">
-                      <div class="placeholder-empty bottom-bar-item-icon" id="b3-l1-61_1-b2-Icon" style="text-align: center;">
-                       <div class="OSBlockWidget" data-block="ConnectPatterns.Icon" id="b3-l1-61_1-$b4">
+                      <div class="placeholder-empty bottom-bar-item-icon" id="b3-l1-58_1-b2-Icon" style="text-align: center;">
+                       <div class="OSBlockWidget" data-block="ConnectPatterns.Icon" id="b3-l1-58_1-$b4">
-                      <div class="placeholder-empty bottom-bar-item-text" id="b3-l1-61_1-b2-Text" style="text-align: center;">
-                       <div class="OSBlockWidget" data-block="BasePatterns.CustomText" id="b3-l1-61_1-$b5">
+                      <div class="placeholder-empty bottom-bar-item-text" id="b3-l1-58_1-b2-Text" style="text-align: center;">
+                       <div class="OSBlockWidget" data-block="BasePatterns.CustomText" id="b3-l1-58_1-$b5">
-                         <div class="OSBlockWidget" data-block="ConnectPatterns.IconInline_Internal" id="b3-l1-61_1-b5-$b2">
+                         <div class="OSBlockWidget" data-block="ConnectPatterns.IconInline_Internal" id="b3-l1-58_1-b5-$b2">
-                    <div class="OSBlockWidget" data-block="Navigation.BottomBarItem" id="b3-l1-61_2-$b2">
+                    <div class="OSBlockWidget" data-block="Navigation.BottomBarItem" id="b3-l1-58_2-$b2">
-                      <div class="placeholder-empty bottom-bar-item-icon" id="b3-l1-61_2-b2-Icon" style="text-align: center;">
-                       <div class="OSBlockWidget" data-block="App_Common_Blocks.App_IconBadge" id="b3-l1-61_2-$b3">
-                        <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="b3-l1-61_2-b3-Skeleton">
-                         <div class="" id="b3-l1-61_2-b3-b1-Placeholder_LoadingSection">
+                      <div class="placeholder-empty bottom-bar-item-icon" id="b3-l1-58_2-b2-Icon" style="text-align: center;">
+                       <div class="OSBlockWidget" data-block="App_Common_Blocks.App_IconBadge" id="b3-l1-58_2-$b3">
+                        <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="b3-l1-58_2-b3-Skeleton">
+                         <div class="" id="b3-l1-58_2-b3-b1-Placeholder_LoadingSection">
-                           <div class="OSBlockWidget" data-block="OutSystemsUIOverrides.IconBadge" id="b3-l1-61_2-b3-IconBadge">
+                           <div class="OSBlockWidget" data-block="OutSystemsUIOverrides.IconBadge" id="b3-l1-58_2-b3-IconBadge">
-                             <div id="b3-l1-61_2-b3-b2-Icon">
-                              <div class="OSBlockWidget" data-block="ConnectPatterns.Icon" id="b3-l1-61_2-b3-$b3">
+                             <div id="b3-l1-58_2-b3-b2-Icon">
+                              <div class="OSBlockWidget" data-block="ConnectPatterns.Icon" id="b3-l1-58_2-b3-$b3">
-                             <div class="OSBlockWidget" data-block="OutSystemsUIOverrides.Badge" id="b3-l1-61_2-b3-b2-$b1">
+                             <div class="OSBlockWidget" data-block="OutSystemsUIOverrides.Badge" id="b3-l1-58_2-b3-b2-$b1">
-                      <div class="placeholder-empty bottom-bar-item-text" id="b3-l1-61_2-b2-Text" style="text-align: center;">
-                       <div class="OSBlockWidget" data-block="BasePatterns.CustomText" id="b3-l1-61_2-$b5">
+                      <div class="placeholder-empty bottom-bar-item-text" id="b3-l1-58_2-b2-Text" style="text-align: center;">
+                       <div class="OSBlockWidget" data-block="BasePatterns.CustomText" id="b3-l1-58_2-$b5">
-                         <div class="OSBlockWidget" data-block="ConnectPatterns.IconInline_Internal" id="b3-l1-61_2-b5-$b2">
+                         <div class="OSBlockWidget" data-block="ConnectPatterns.IconInline_Internal" id="b3-l1-58_2-b5-$b2">
-                    <div class="OSBlockWidget" data-block="Navigation.BottomBarItem" id="b3-l1-61_3-$b2">
+                    <div class="OSBlockWidget" data-block="Navigation.BottomBarItem" id="b3-l1-58_3-$b2">
... 24 more lines: git diff 2fe9efaf -- migration/screens/MessageDetail/analysis/dom
```

## Decisions for this item

- none

## Allowed write paths

- `app/src/pages/MessageDetail/**`
- `migration/screens/MessageDetail/**`
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
- Page layout: `app/docs/guides/page-template.md`; patterns: `migration/patterns/P-*.md`; the route spec: `migration/screens/MessageDetail/route-spec.md`; the pack: `migration/screens/MessageDetail/pack.md`.

## Quick checks (developer, before the report)

```
export PATH=$HOME/.nvm/versions/node/v24.21.0/bin:$PATH
npm --prefix app run typecheck
cd app && npx vitest run <the test files of the changed code> && cd ..
cd app && npx eslint <the changed files> && cd ..
npm --prefix app run arch
python3 tools/pipeline/route.py parity MessageDetail --app http://localhost:5173      # every state: 0 unexempted differences
```

## Gate (tester)

```
curl -s -o /dev/null -w '%{http_code}' http://localhost:5173/UBTConnect/HomeFeed   # 200, and lsof -p <pid> -a -d cwd = <root>/app
/Library/Developer/CommandLineTools/usr/bin/python3 tools/pipeline/scope_guard.py --screen MessageDetail --base 343a04aa1ad3e633274ebce518fc1351f1b71900 --allow migration/sync/** --allow app/docs/** --allow migration/route-check/** --allow migration/knowledge/** --allow migration/metrics/** --allow migration/board.md --allow app/src/pages/MessageList/** --allow migration/screens/MessageList/** --allow app/src/pages/LDM_EventDetail_V2/** --allow migration/screens/LDM_EventDetail_V2/** --allow app/src/pages/ContactByEmailMember/** --allow migration/screens/ContactByEmailMember/** --allow app/src/pages/OrbitAdminLanding/** --allow migration/screens/OrbitAdminLanding/** --allow app/src/pages/Household_Relations/** --allow migration/screens/Household_Relations/**
python3 tools/pipeline/route.py parity MessageDetail --app http://localhost:5173
python3 tools/pipeline/consistency_check.py --screen MessageDetail
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

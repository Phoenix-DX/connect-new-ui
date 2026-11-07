# Brief: MessageList (class B: mock data drift: fix the fictional data or mocks; loop 0/2)

| Field | Value |
|---|---|
| Route | `MessageList` (`http://localhost:5173/UBTConnect/MessageList`) |
| Dev model | sonnet |
| baseCommit | `343a04aa1ad3e633274ebce518fc1351f1b71900` |
| Capture base (before the re-capture) | `2fe9efafbe44ea41859470495e6133cb2fcaaa8f` |
| States with diffs | default:12, search:12 |
| Kinds | class, style |
| Changed TST files | - |
| Other routes that use those files | - |
| Handoff folder | `migration/sync/handoffs/MessageList` |
| Note | S: 6 unread rows in capture, mock has 2 (mocks.ts:9, test:62) |

## What changed in TST (parity reports of the fresh capture)

- `default.json` (2026-11-06T20:05:14.571Z): class 6, style 6; pixels 0.01%, worst tile 0.7%; calls expected 9 actual 9; exemptions used 4
  - kind=class; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[MyNotification; detail=missing .background-blue-lightest
  - kind=style; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[MyNotification; detail=background-color rgb(232, 242, 250) → rgb(255, 255, 255)
  - kind=class; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[MyNotification; detail=missing .background-blue-lightest
  - kind=style; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[MyNotification; detail=background-color rgb(232, 242, 250) → rgb(255, 255, 255)
  - kind=class; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[MyNotification; detail=missing .background-blue-lightest
  - kind=style; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[MyNotification; detail=background-color rgb(232, 242, 250) → rgb(255, 255, 255)
  - kind=class; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[MyNotification; detail=missing .background-blue-lightest
  - kind=style; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[MyNotification; detail=background-color rgb(232, 242, 250) → rgb(255, 255, 255)
  - kind=class; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[MyNotification; detail=missing .background-blue-lightest
  - kind=style; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[MyNotification; detail=background-color rgb(232, 242, 250) → rgb(255, 255, 255)
  - kind=class; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[MyNotification; detail=missing .background-blue-lightest
  - kind=style; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[MyNotification; detail=background-color rgb(232, 242, 250) → rgb(255, 255, 255)
- `filter.json` (2026-11-06T20:05:19.496Z): no counts; pixels 0.06%, worst tile 2.9%; calls expected 9 actual 9; exemptions used 6
- `loading.json` (2026-11-06T20:05:21.986Z): no counts; pixels 0%, worst tile 0%; exemptions used 1
- `offline.json` (2026-11-06T20:05:25.526Z): no counts; pixels 0.01%, worst tile 0.7%; exemptions used 4
- `search.json` (2026-11-06T20:05:32.652Z): class 6, style 6; pixels 0.12%, worst tile 2.5%; calls expected 9 actual 9; exemptions used 4
  - kind=class; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[MyNotification; detail=missing .background-blue-lightest
  - kind=style; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[MyNotification; detail=background-color rgb(232, 242, 250) → rgb(255, 255, 255)
  - kind=class; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[MyNotification; detail=missing .background-blue-lightest
  - kind=style; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[MyNotification; detail=background-color rgb(232, 242, 250) → rgb(255, 255, 255)
  - kind=class; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[MyNotification; detail=missing .background-blue-lightest
  - kind=style; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[MyNotification; detail=background-color rgb(232, 242, 250) → rgb(255, 255, 255)
  - kind=class; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[MyNotification; detail=missing .background-blue-lightest
  - kind=style; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[MyNotification; detail=background-color rgb(232, 242, 250) → rgb(255, 255, 255)
  - kind=class; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[MyNotification; detail=missing .background-blue-lightest
  - kind=style; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[MyNotification; detail=background-color rgb(232, 242, 250) → rgb(255, 255, 255)
  - kind=class; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[MyNotification; detail=missing .background-blue-lightest
  - kind=style; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[MyNotification; detail=background-color rgb(232, 242, 250) → rgb(255, 255, 255)

## DOM diff per state (old capture → new capture)

```
migration/screens/MessageList/analysis/calls.json  | 18 +++---
 .../screens/MessageList/analysis/dom/default.html  | 14 ++---
 .../MessageList/analysis/dom/default.raw.html      |  4 +-
 .../screens/MessageList/analysis/dom/filter.html   |  2 +-
 .../MessageList/analysis/dom/filter.raw.html       |  2 +-
 .../screens/MessageList/analysis/dom/offline.html  | 72 +++++++++++-----------
 .../MessageList/analysis/dom/offline.raw.html      |  2 +-
 .../screens/MessageList/analysis/dom/search.html   | 14 ++---
 .../MessageList/analysis/dom/search.raw.html       |  4 +-
 migration/screens/MessageList/analysis/states.json |  6 +-
 10 files changed, 69 insertions(+), 69 deletions(-)
```
```diff
-<body class="phone portrait connect-theme osx is-ltr" style="--header-size-content: 0px; --footer-height: 42px; --viewport-height: 844px;">
+<body class="phone portrait connect-theme osx is-ltr" style="--header-size-content: 0px; --footer-height: 56px; --viewport-height: 844px;">
-                      <div class="list-item" data-list-item-content="" data-not-scrollable="">
+                      <div class="list-item background-blue-lightest" data-list-item-content="" data-not-scrollable="">
-                      <div class="list-item" data-list-item-content="" data-not-scrollable="">
+                      <div class="list-item background-blue-lightest" data-list-item-content="" data-not-scrollable="">
-                      <div class="list-item" data-list-item-content="" data-not-scrollable="">
+                      <div class="list-item background-blue-lightest" data-list-item-content="" data-not-scrollable="">
-                      <div class="list-item" data-list-item-content="" data-not-scrollable="">
+                      <div class="list-item background-blue-lightest" data-list-item-content="" data-not-scrollable="">
-                      <div class="list-item" data-list-item-content="" data-not-scrollable="">
+                      <div class="list-item background-blue-lightest" data-list-item-content="" data-not-scrollable="">
-                      <div class="list-item" data-list-item-content="" data-not-scrollable="">
+                      <div class="list-item background-blue-lightest" data-list-item-content="" data-not-scrollable="">
-<body class="phone portrait connect-theme osx is-ltr" style="--header-size-content: 0px; --footer-height: 42px; --viewport-height: 844px;">
-        <div id="reactContainer"><div id="transitionContainer"><div class="active-screen screen-container"><div data-block="MyNotifications.ScreenBlock_MessageList" class="OSBlockWidget" id="$b1"><di
+<body class="phone portrait connect-theme osx is-ltr" style="--header-size-content: 0px; --footer-height: 56px; --viewport-height: 844px;">
+        <div id="reactContainer"><div id="transitionContainer"><div class="active-screen screen-container"><div data-block="MyNotifications.ScreenBlock_MessageList" class="OSBlockWidget" id="$b1"><di
-<body class="phone portrait connect-theme osx is-ltr" style="--header-size-content: 0px; --footer-height: 42px; --viewport-height: 844px;">
+<body class="phone portrait connect-theme osx is-ltr" style="--header-size-content: 0px; --footer-height: 56px; --viewport-height: 844px;">
-<body class="phone portrait connect-theme osx is-ltr" style="--header-size-content: 0px; --footer-height: 42px; --viewport-height: 844px;">
+<body class="phone portrait connect-theme osx is-ltr" style="--header-size-content: 0px; --footer-height: 56px; --viewport-height: 844px;">
-                     <div class="OSBlockWidget" data-block="Navigation.BottomBarItem" id="b2-l1-59_0-$b2">
+                     <div class="OSBlockWidget" data-block="Navigation.BottomBarItem" id="b2-l1-56_0-$b2">
-                       <div class="placeholder-empty bottom-bar-item-icon" id="b2-l1-59_0-b2-Icon" style="text-align: center;">
-                        <div class="OSBlockWidget" data-block="ConnectPatterns.Icon" id="b2-l1-59_0-$b4">
+                       <div class="placeholder-empty bottom-bar-item-icon" id="b2-l1-56_0-b2-Icon" style="text-align: center;">
+                        <div class="OSBlockWidget" data-block="ConnectPatterns.Icon" id="b2-l1-56_0-$b4">
-                       <div class="placeholder-empty bottom-bar-item-text" id="b2-l1-59_0-b2-Text" style="text-align: center;">
-                        <div class="OSBlockWidget" data-block="BasePatterns.CustomText" id="b2-l1-59_0-$b5">
+                       <div class="placeholder-empty bottom-bar-item-text" id="b2-l1-56_0-b2-Text" style="text-align: center;">
+                        <div class="OSBlockWidget" data-block="BasePatterns.CustomText" id="b2-l1-56_0-$b5">
-                          <div class="OSBlockWidget" data-block="ConnectPatterns.IconInline_Internal" id="b2-l1-59_0-b5-$b2">
+                          <div class="OSBlockWidget" data-block="ConnectPatterns.IconInline_Internal" id="b2-l1-56_0-b5-$b2">
-                     <div class="OSBlockWidget" data-block="Navigation.BottomBarItem" id="b2-l1-59_1-$b2">
+                     <div class="OSBlockWidget" data-block="Navigation.BottomBarItem" id="b2-l1-56_1-$b2">
-                       <div class="placeholder-empty bottom-bar-item-icon" id="b2-l1-59_1-b2-Icon" style="text-align: center;">
-                        <div class="OSBlockWidget" data-block="ConnectPatterns.Icon" id="b2-l1-59_1-$b4">
+                       <div class="placeholder-empty bottom-bar-item-icon" id="b2-l1-56_1-b2-Icon" style="text-align: center;">
+                        <div class="OSBlockWidget" data-block="ConnectPatterns.Icon" id="b2-l1-56_1-$b4">
-                       <div class="placeholder-empty bottom-bar-item-text" id="b2-l1-59_1-b2-Text" style="text-align: center;">
-                        <div class="OSBlockWidget" data-block="BasePatterns.CustomText" id="b2-l1-59_1-$b5">
+                       <div class="placeholder-empty bottom-bar-item-text" id="b2-l1-56_1-b2-Text" style="text-align: center;">
+                        <div class="OSBlockWidget" data-block="BasePatterns.CustomText" id="b2-l1-56_1-$b5">
-                          <div class="OSBlockWidget" data-block="ConnectPatterns.IconInline_Internal" id="b2-l1-59_1-b5-$b2">
+                          <div class="OSBlockWidget" data-block="ConnectPatterns.IconInline_Internal" id="b2-l1-56_1-b5-$b2">
-                     <div class="OSBlockWidget" data-block="Navigation.BottomBarItem" id="b2-l1-59_2-$b2">
+                     <div class="OSBlockWidget" data-block="Navigation.BottomBarItem" id="b2-l1-56_2-$b2">
-                       <div class="placeholder-empty bottom-bar-item-icon" id="b2-l1-59_2-b2-Icon" style="text-align: center;">
-                        <div class="OSBlockWidget" data-block="App_Common_Blocks.App_IconBadge" id="b2-l1-59_2-$b3">
-                         <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="b2-l1-59_2-b3-Skeleton">
-                          <div class="" id="b2-l1-59_2-b3-b1-Placeholder_LoadingSection">
+                       <div class="placeholder-empty bottom-bar-item-icon" id="b2-l1-56_2-b2-Icon" style="text-align: center;">
+                        <div class="OSBlockWidget" data-block="App_Common_Blocks.App_IconBadge" id="b2-l1-56_2-$b3">
+                         <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="b2-l1-56_2-b3-Skeleton">
+                          <div class="" id="b2-l1-56_2-b3-b1-Placeholder_LoadingSection">
-                            <div class="OSBlockWidget" data-block="OutSystemsUIOverrides.IconBadge" id="b2-l1-59_2-b3-IconBadge">
+                            <div class="OSBlockWidget" data-block="OutSystemsUIOverrides.IconBadge" id="b2-l1-56_2-b3-IconBadge">
-                              <div id="b2-l1-59_2-b3-b2-Icon">
-                               <div class="OSBlockWidget" data-block="ConnectPatterns.Icon" id="b2-l1-59_2-b3-$b3">
... 54 more lines: git diff 2fe9efaf -- migration/screens/MessageList/analysis/dom
```

## Decisions for this item

- none

## Allowed write paths

- `app/src/pages/MessageList/**`
- `migration/screens/MessageList/**`
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
- Page layout: `app/docs/guides/page-template.md`; patterns: `migration/patterns/P-*.md`; the route spec: `migration/screens/MessageList/route-spec.md`; the pack: `migration/screens/MessageList/pack.md`.

## Quick checks (developer, before the report)

```
export PATH=$HOME/.nvm/versions/node/v24.21.0/bin:$PATH
npm --prefix app run typecheck
cd app && npx vitest run <the test files of the changed code> && cd ..
cd app && npx eslint <the changed files> && cd ..
npm --prefix app run arch
python3 tools/pipeline/route.py parity MessageList --app http://localhost:5173      # every state: 0 unexempted differences
```

## Gate (tester)

```
curl -s -o /dev/null -w '%{http_code}' http://localhost:5173/UBTConnect/HomeFeed   # 200, and lsof -p <pid> -a -d cwd = <root>/app
/Library/Developer/CommandLineTools/usr/bin/python3 tools/pipeline/scope_guard.py --screen MessageList --base 343a04aa1ad3e633274ebce518fc1351f1b71900 --allow migration/sync/** --allow app/docs/** --allow migration/route-check/** --allow migration/knowledge/** --allow migration/metrics/** --allow migration/board.md
python3 tools/pipeline/route.py parity MessageList --app http://localhost:5173
python3 tools/pipeline/consistency_check.py --screen MessageList
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

# Brief: Notifications (class A: TST changed its code: fix React; loop 0/2)

| Field | Value |
|---|---|
| Route | `Notifications` (`http://localhost:5173/UBTConnect/Notifications`) |
| Dev model | opus |
| baseCommit | `a71b8fbdbf243c49682a603d3b5b8d9059e8212f` |
| Capture base (before the re-capture) | `2fe9efafbe44ea41859470495e6133cb2fcaaa8f` |
| States with diffs | default:41, offline:10 |
| Kinds | structure, position, pixel, call |
| Changed TST files | `UBTConnect.App_Notifications.Notifications.mvc.js`, `UBTConnect.App_Notifications.NotificationsList.mvc.js`, `UBTConnect.App_Notifications.NotificationsListBreakpoints.mvc.js`, `UBTConnect.App_Notifications.Notifications_Header.mvc.js`, `UBTConnectLibrary.ConnectCorePatterns.Notification_ListItem.mvc.js`, `UBTConnectLibrary.ConnectPatterns.AvatarImage.mvc.js` |
| Other routes that use those files | Bookmarks, BrowseCountries, MessageDetail |
| Handoff folder | `migration/sync/handoffs/Notifications` |
| Note | L: re-captured settle 8 s, unchanged: 51 SkeletonSection stay in the DOM (code). Q3 done. A + B + C: header blocks, bulk signed-images call; 22 items, skeleton rows. Q3 |

## What changed in TST (parity reports of the fresh capture)

- `default.json` (2026-11-07T00:44:00.672Z): structure 31, position 8, pixel 1, call 1; pixels 4.97%, worst tile 59.8%; calls expected 11 actual 10; exemptions used 3
  - kind=structure; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=extra in build
  - kind=structure; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=missing in build
  - kind=structure; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=extra in build
  - kind=structure; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=missing in build
  - kind=structure; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=missing in build
  - kind=structure; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=missing in build
  - kind=structure; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=extra in build
  - kind=structure; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=extra in build
  - kind=structure; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=extra in build
  - kind=structure; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=missing in build
  - kind=structure; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=extra in build
  - kind=structure; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=missing in build
  - kind=structure; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=missing in build
  - kind=structure; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=missing in build
  - kind=structure; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=missing in build
  - kind=structure; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=missing in build
  - kind=structure; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=missing in build
  - kind=structure; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=missing in build
  - kind=structure; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=missing in build
  - kind=structure; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=missing in build
  - ... 21 more in the file
- `loading.json` (2026-11-07T00:44:03.331Z): no counts; pixels 0%, worst tile 0%; exemptions used 1
- `offline.json` (2026-11-07T00:44:06.899Z): structure 1, position 8, pixel 1; pixels 3.11%, worst tile 55.0%; exemptions used 3
  - kind=structure; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=missing in build
  - kind=position; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b18.OSBlockWidget[App_Notificat; detail=offset in parent -1,-1079 → -1,-845
  - kind=position; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b18.OSBlockWidget[App_Notificat; detail=offset in parent 0,-234 → 0,0
  - kind=position; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b18.OSBlockWidget[App_Notificat; detail=offset in parent 0,-1078 → 0,-844
  - kind=position; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b18.OSBlockWidget[App_Notificat; detail=offset in parent -1,-234 → -1,0
  - kind=position; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b19.OSBlockWidget[App_Notificat; detail=offset in parent -1,-1079 → -1,-845
  - kind=position; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b19.OSBlockWidget[App_Notificat; detail=offset in parent 0,-234 → 0,0
  - kind=position; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b19.OSBlockWidget[App_Notificat; detail=offset in parent 0,-1078 → 0,-844
  - kind=position; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b19.OSBlockWidget[App_Notificat; detail=offset in parent -1,-234 → -1,0
  - kind=pixel; path=screenshot; detail=3.11% pixels differ (max 0.20%), worst 40px tile 55.0% (max 3.0%), hotspots 80,160 (880px); 120,160 (880px); 160,160 (88

## DOM diff per state (old capture → new capture)

```
.../screens/Notifications/analysis/calls.json      |   51 +-
 .../Notifications/analysis/dom/default.html        | 6917 +++++---------------
 .../Notifications/analysis/dom/default.raw.html    |    6 +-
 .../Notifications/analysis/dom/loading.html        | 1322 +++-
 .../Notifications/analysis/dom/loading.raw.html    |    4 +-
 .../Notifications/analysis/dom/offline.html        | 1340 +++-
 .../Notifications/analysis/dom/offline.raw.html    |   10 +-
 .../screens/Notifications/analysis/states.json     |    2 +-
 8 files changed, 3925 insertions(+), 5727 deletions(-)
```
```diff
-<body class="phone portrait osx is-ltr" style="--header-size-content: 42px; --footer-height: 56px; --viewport-height: 844px;">
+<body class="phone portrait osx is-ltr" style="--header-size-content: 116px; --footer-height: 42px; --viewport-height: 844px;">
-   <div class="active-screen screen-container" style="--footer-shadow-scroll: hidden; --header-shadow-scroll: hidden;">
+   <div class="active-screen screen-container" style="--sticky-top-offset: 191px; --footer-shadow-scroll: visible; --header-shadow-scroll: hidden;">
-             <div class="OSBlockWidget" data-block="App_Notifications.Notifications_Header" id="b15-l1-117_3-Notifications_ListHeader">
-              <div class="OSBlockWidget" data-block="BasePatterns.CustomContainer" id="b15-l1-117_3-b1-$b1">
-               <div class="ubt-custom-container updates-list__header background-neutral-0 border-top-l border-color-neutral-4 padding-x-base padding-y-xs" id="b15-l1-117_3-b1-b1-Content" style="curso
-                <div class="OSBlockWidget" data-block="BasePatterns.Columns_Two" id="b15-l1-117_3-b1-$b2">
-                 <div class="OSBlockWidget" data-block="Adaptive.Columns2" id="b15-l1-117_3-b1-b2-$b1">
-                  <div class="columns columns2 tablet-break-none phone-break-none ubt-columns ubt-columns--two-columns" data-container="">
-                   <div class="columns-item" id="b15-l1-117_3-b1-b2-b1-Column1">
-                    <div class="ubt-columns--left ubt-columns--column" id="b15-l1-117_3-b1-b2-Left" style="">
-                     <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="b15-l1-117_3-b1-$b3">
-                      <div class="" id="b15-l1-117_3-b1-b3-Placeholder_LoadingSection">
-                       <div class="OSBlockWidget" data-block="ConnectPatterns.IconText" id="b15-l1-117_3-b1-$b4">
-                        <div data-container="" id="b15-l1-117_3-b1-b4-DIV_IconText" style="cursor: pointer;">
-                         <div class="OSBlockWidget" data-block="BasePatterns.Columns_Two" id="b15-l1-117_3-b1-b4-$b1">
-                          <div class="OSBlockWidget" data-block="Adaptive.Columns2" id="b15-l1-117_3-b1-b4-b1-$b1">
-                           <div class="columns columns2 gutter-xs tablet-break-none phone-break-none ubt-columns ubt-columns--two-columns ubt-columns-reduce-last align-items-center flex-direction-row
-                            <div class="columns-item" id="b15-l1-117_3-b1-b4-b1-b1-Column1">
-                             <div class="ubt-columns--left ubt-columns--column" id="b15-l1-117_3-b1-b4-b1-Left" style="">
-                              <div id="b15-l1-117_3-b1-b4-Icon">
-                               <div class="OSBlockWidget" data-block="OutSystemsUIOverrides.Badge" id="b15-l1-117_3-b1-$b5">
-                                <div class="ubt-badge badge badge-xs border-radius-rounded background-red-dark OSInline" data-container="">
-                                 <span class="OSFillParent" data-expression="">
-                                  •
-                                 </span>
+             <div class="OSBlockWidget" data-block="App_Notifications.Notifications_Header" id="b15-l1-183_2-Notifications_ListHeader">
+              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="b15-l1-183_2-b1-$b1">
+               <div class="" id="b15-l1-183_2-b1-b1-Placeholder_LoadingSection">
+                <div class="OSBlockWidget" data-block="BasePatterns.CustomContainer" id="b15-l1-183_2-b1-$b2">
+                 <div class="ubt-custom-container updates-list__header background-neutral-0 border-top-l border-color-neutral-4 padding-x-base padding-y-xs" id="b15-l1-183_2-b1-b2-Content" style="cur
+                  <div class="OSBlockWidget" data-block="BasePatterns.Columns_Two" id="b15-l1-183_2-b1-$b3">
+                   <div class="OSBlockWidget" data-block="Adaptive.Columns2" id="b15-l1-183_2-b1-b3-$b1">
+                    <div class="columns columns2 tablet-break-none phone-break-none ubt-columns ubt-columns--two-columns" data-container="">
+                     <div class="columns-item" id="b15-l1-183_2-b1-b3-b1-Column1">
+                      <div class="ubt-columns--left ubt-columns--column" id="b15-l1-183_2-b1-b3-Left" style="">
+                       <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="b15-l1-183_2-b1-$b4">
+                        <div class="" id="b15-l1-183_2-b1-b4-Placeholder_LoadingSection">
+                         <div class="OSBlockWidget" data-block="ConnectPatterns.IconText" id="b15-l1-183_2-b1-$b5">
+                          <div data-container="" id="b15-l1-183_2-b1-b5-DIV_IconText" style="cursor: pointer;">
+                           <div class="OSBlockWidget" data-block="BasePatterns.Columns_Two" id="b15-l1-183_2-b1-b5-$b1">
+                            <div class="OSBlockWidget" data-block="Adaptive.Columns2" id="b15-l1-183_2-b1-b5-b1-$b1">
+                             <div class="columns columns2 gutter-xs tablet-break-none phone-break-none ubt-columns ubt-columns--two-columns ubt-columns-reduce-last align-items-center flex-direction-r
+                              <div class="columns-item" id="b15-l1-183_2-b1-b5-b1-b1-Column1">
+                               <div class="ubt-columns--left ubt-columns--column" id="b15-l1-183_2-b1-b5-b1-Left" style="">
+                                <div id="b15-l1-183_2-b1-b5-Icon">
+                                 <div class="OSBlockWidget" data-block="OutSystemsUIOverrides.Badge" id="b15-l1-183_2-b1-$b6">
+                                  <div class="ubt-badge badge badge-xs border-radius-rounded background-red-dark OSInline" data-container="">
+                                   <span class="OSFillParent" data-expression="">
+                                    •
+                                   </span>
+                                  </div>
+                                 </div>
-                             </div>
-                            </div>
-                            <div class="columns-item" id="b15-l1-117_3-b1-b4-b1-b1-Column2">
-                             <div class="ubt-columns--right ubt-columns--column" id="b15-l1-117_3-b1-b4-b1-Right" style="">
-                              <div class="OSBlockWidget" data-block="BasePatterns.CustomText" id="b15-l1-117_3-b1-b4-$b2">
-                               <div class="text-neutral-7 font-semi-bold font-size-xs" data-container="" style="cursor: pointer;">
... 9539 more lines: git diff 2fe9efaf -- migration/screens/Notifications/analysis/dom
```

## Decisions for this item

- none

## Allowed write paths

- `app/src/pages/Notifications/**`
- `migration/screens/Notifications/**`
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
- Page layout: `app/docs/guides/page-template.md`; patterns: `migration/patterns/P-*.md`; the route spec: `migration/screens/Notifications/route-spec.md`; the pack: `migration/screens/Notifications/pack.md`.

## Quick checks (developer, before the report)

```
export PATH=$HOME/.nvm/versions/node/v24.21.0/bin:$PATH
npm --prefix app run typecheck
cd app && npx vitest run <the test files of the changed code> && cd ..
cd app && npx eslint <the changed files> && cd ..
npm --prefix app run arch
python3 tools/pipeline/route.py parity Notifications --app http://localhost:5173      # every state: 0 unexempted differences
```

## Gate (tester)

```
curl -s -o /dev/null -w '%{http_code}' http://localhost:5173/UBTConnect/HomeFeed   # 200, and lsof -p <pid> -a -d cwd = <root>/app
python3 tools/sync/sync.py scope Notifications      # computes --base and the --allow list of the items active NOW
python3 tools/pipeline/route.py parity Notifications --app http://localhost:5173
python3 tools/pipeline/consistency_check.py --screen Notifications
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

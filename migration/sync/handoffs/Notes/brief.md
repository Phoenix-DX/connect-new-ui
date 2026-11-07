# Brief: Notes (class A: TST changed its code: fix React; loop 1/2)

| Field | Value |
|---|---|
| Route | `Notes` (`http://localhost:5173/UBTConnect/Notes`) |
| Dev model | opus |
| baseCommit | `f13c03f26f9935867fa6dfd72bce5cddac409819` |
| Capture base (before the re-capture) | `2fe9efafbe44ea41859470495e6133cb2fcaaa8f` |
| States with diffs | default:6, offline:12 |
| Kinds | class, text, style, layout, position, pixel |
| Changed TST files | `UBTConnect.App_CommonBlocks_Filter.FilterSheet.mvc.js`, `UBTConnect.App_CommonBlocks_Filter.FilterSheet_Icon_Label.mvc.js`, `UBTConnect.Notes.NoteCard_List.mvc.js`, `UBTConnect.Notes.Notes.mvc.js`, `UBTConnectLibrary.ConnectPatterns.Horizontal_Filter_TagList.mvc.js` |
| Other routes that use those files | Bookmarks, CountryDetails, Search, Updates_SingleList |
| Handoff folder | `migration/sync/handoffs/Notes` |
| Note | S: filter-tag container loses padding-x-base; FilterSheet labels Clear and Apply |

## What changed in TST (parity reports of the fresh capture)

- `default.json` (2026-11-07T01:45:28.588Z): no counts; pixels 0.15%, worst tile 8.8%; calls expected 8 actual 10; exemptions used 4
- `loading.json` (2026-11-07T01:45:31.432Z): no counts; pixels 0%, worst tile 0%; exemptions used 1
- `offline.json` (2026-11-07T01:45:35.582Z): no counts; pixels 0.02%, worst tile 2.2%; exemptions used 4

## DOM diff per state (old capture → new capture)

```
migration/screens/Notes/analysis/calls.json        |   20 +-
 migration/screens/Notes/analysis/dom/default.html  |  544 ++++----
 .../screens/Notes/analysis/dom/default.raw.html    |    6 +-
 migration/screens/Notes/analysis/dom/loading.html  | 1300 ++++++++++----------
 .../screens/Notes/analysis/dom/loading.raw.html    |    4 +-
 migration/screens/Notes/analysis/dom/offline.html  | 1300 ++++++++++----------
 .../screens/Notes/analysis/dom/offline.raw.html    |    4 +-
 migration/screens/Notes/analysis/states.json       |    2 +-
 8 files changed, 1590 insertions(+), 1590 deletions(-)
```
```diff
-<body class="phone portrait osx is-ltr" style="--header-size-content: 47px; --footer-height: 56px; --viewport-height: 844px;">
+<body class="phone portrait osx is-ltr" style="--header-size-content: 62px; --footer-height: 42px; --viewport-height: 844px;">
-                 <div class="OSBlockWidget" data-block="App_Common_Blocks.App_NotificationIcon" id="$b3">
-                  <div class="OSBlockWidget" data-block="App_Common_Blocks.App_IconBadge" id="b3-$b1">
-                   <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="b3-b1-Skeleton">
-                    <div class="" id="b3-b1-b1-Placeholder_LoadingSection">
+                 <div class="OSBlockWidget" data-block="App_Common_Blocks.App_NotificationIcon" id="$b6">
+                  <div class="OSBlockWidget" data-block="App_Common_Blocks.App_IconBadge" id="b6-$b1">
+                   <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="b6-b1-Skeleton">
+                    <div class="" id="b6-b1-b1-Placeholder_LoadingSection">
-                      <div class="OSBlockWidget" data-block="OutSystemsUIOverrides.IconBadge" id="b3-b1-IconBadge">
+                      <div class="OSBlockWidget" data-block="OutSystemsUIOverrides.IconBadge" id="b6-b1-IconBadge">
-                        <div id="b3-b1-b2-Icon">
-                         <div class="OSBlockWidget" data-block="ConnectPatterns.Icon" id="b3-b1-$b3">
+                        <div id="b6-b1-b2-Icon">
+                         <div class="OSBlockWidget" data-block="ConnectPatterns.Icon" id="b6-b1-$b3">
-                        <div class="OSBlockWidget" data-block="OutSystemsUIOverrides.Badge" id="b3-b1-b2-$b1">
+                        <div class="OSBlockWidget" data-block="OutSystemsUIOverrides.Badge" id="b6-b1-b2-$b1">
-                  <div class="OSBlockWidget" data-block="App_Common_Blocks.App_NotificationRefresh" id="b3-$b2">
+                  <div class="OSBlockWidget" data-block="App_Common_Blocks.App_NotificationRefresh" id="b6-$b2">
-                 <div class="OSBlockWidget" data-block="ConnectPatterns.Input" id="$b4">
+                 <div class="OSBlockWidget" data-block="ConnectPatterns.Input" id="$b7">
-                   <div class="OSBlockWidget" data-block="Interaction.InputWithIcon" id="b4-$b1">
-                    <div class="input-with-icon" data-container="" id="b4-b1-InputWithIconWrapper">
-                     <div class="input-with-icon-content-icon center placeholder-empty" id="b4-b1-Icon">
-                      <div class="OSBlockWidget" data-block="ConnectPatterns.Icon" id="b4-$b2">
+                   <div class="OSBlockWidget" data-block="Interaction.InputWithIcon" id="b7-$b1">
+                    <div class="input-with-icon" data-container="" id="b7-b1-InputWithIconWrapper">
+                     <div class="input-with-icon-content-icon center placeholder-empty" id="b7-b1-Icon">
+                      <div class="OSBlockWidget" data-block="ConnectPatterns.Icon" id="b7-$b2">
-                     <div class="input-with-icon-input" id="b4-b1-Input">
-                      <div class="OSBlockWidget" data-block="Interaction.InputWithIcon" id="b4-$b3">
-                       <div class="input-with-icon input-with-icon-right" data-container="" id="b4-b3-InputWithIconWrapper">
-                        <div class="input-with-icon-content-icon center placeholder-empty" id="b4-b3-Icon">
+                     <div class="input-with-icon-input" id="b7-b1-Input">
+                      <div class="OSBlockWidget" data-block="Interaction.InputWithIcon" id="b7-$b3">
+                       <div class="input-with-icon input-with-icon-right" data-container="" id="b7-b3-InputWithIconWrapper">
+                        <div class="input-with-icon-content-icon center placeholder-empty" id="b7-b3-Icon">
-                        <div class="input-with-icon-input" id="b4-b3-Input">
+                        <div class="input-with-icon-input" id="b7-b3-Input">
-                          <input aria-required="false" class="search-placeholder-ellipsis form-control border-radius-rounded OSFillParent" data-input="" id="b4-Input_Search" maxlength="50" placeholde
+                          <input aria-required="false" class="search-placeholder-ellipsis form-control border-radius-rounded OSFillParent" data-input="" id="b7-Input_Search" maxlength="50" placeholde
-          <div class="ubt-custom-container background-neutral-0 padding-x-base padding-y-xs margin-top-base" id="b5-Content" style="cursor: pointer;">
-           <div class="OSBlockWidget" data-block="ConnectPatterns.Horizontal_Filter_TagList" id="$b6">
-            <div class="OSBlockWidget" data-block="BasePatterns.CustomContainer" id="b6-$b1">
-             <div class="ubt-custom-container horizontal-tabs-filter-container padding-y-xs" id="b6-b1-Content" style="cursor: pointer;">
-              <div class="OSBlockWidget" data-block="BasePatterns.CustomContainer" id="b6-$b2">
-               <div class="ubt-custom-container" id="b6-b2-Content" style="cursor: pointer;">
-                <div class="horizontal-tabs-filter" id="b6-Filter">
-                 <div class="OSBlockWidget" data-block="App_CommonBlocks_Filter.FilterSheet_Icon_Label" id="$b7">
-                  <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="b7-$b1">
-                   <div class="" id="b7-b1-Placeholder_LoadingSection">
-                    <div class="OSBlockWidget" data-block="BasePatterns.CustomContainer" id="b7-$b3">
-                     <div class="ubt-custom-container display-inline-flex align-items-center padding-right-xs" id="b7-b3-Content" style="cursor: pointer;">
-                      <div class="OSBlockWidget" data-block="ConnectPatterns.Icon" id="b7-$b4">
+          <div class="ubt-custom-container background-neutral-0 padding-y-xs margin-top-base" id="b8-Content" style="cursor: pointer;">
+           <div class="OSBlockWidget" data-block="ConnectPatterns.Horizontal_Filter_TagList" id="$b9">
+            <div class="OSBlockWidget" data-block="BasePatterns.CustomContainer" id="b9-$b1">
+             <div class="ubt-custom-container horizontal-tabs-filter-container padding-y-xs" id="b9-b1-Content" style="cursor: pointer;">
+              <div class="OSBlockWidget" data-block="BasePatterns.CustomContainer" id="b9-$b2">
... 3098 more lines: git diff 2fe9efaf -- migration/screens/Notes/analysis/dom
```

## Decisions for this item

- none

## Allowed write paths

- `app/src/pages/Notes/**`
- `migration/screens/Notes/**`
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
- Page layout: `app/docs/guides/page-template.md`; patterns: `migration/patterns/P-*.md`; the route spec: `migration/screens/Notes/route-spec.md`; the pack: `migration/screens/Notes/pack.md`.

## Quick checks (developer, before the report)

```
export PATH=$HOME/.nvm/versions/node/v24.21.0/bin:$PATH
npm --prefix app run typecheck
cd app && npx vitest run <the test files of the changed code> && cd ..
cd app && npx eslint <the changed files> && cd ..
npm --prefix app run arch
python3 tools/pipeline/route.py parity Notes --app http://localhost:5173      # every state: 0 unexempted differences
```

## Gate (tester)

```
curl -s -o /dev/null -w '%{http_code}' http://localhost:5173/UBTConnect/HomeFeed   # 200, and lsof -p <pid> -a -d cwd = <root>/app
python3 tools/sync/sync.py scope Notes      # computes --base and the --allow list of the items active NOW
python3 tools/pipeline/route.py parity Notes --app http://localhost:5173
python3 tools/pipeline/consistency_check.py --screen Notes
npm --prefix app run typecheck && npm --prefix app run arch && (cd app && npx eslint <changed files> && npx vitest run <changed tests>)
```
Diff review: no edit of `migration/parity-exemptions.json`, `app/src/mocks/fixtures/**`, `app/src/api/openapi.yaml`, `app/public/UBTConnect/css/**`, `app/package.json`; no deleted test; nothing outside the allowed paths; `@origin` kept; no secrets.

## Fix loop 1: the last test result

## Result
status: fail
summary: Notes parity is clean in 3 states and diff review passes, but two gate checks fail: consistency_check (NO-WIRE-IN-COMPONENTS at hooks/notesState.ts:50, a file the developer did not change) and the sweep (Bookmarks has diffs).

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

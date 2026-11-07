# Brief: Menu (class B: mock data drift: fix the fictional data or mocks; loop 0/2)

| Field | Value |
|---|---|
| Route | `Menu` (`http://localhost:5173/UBTConnect/Menu`) |
| Dev model | sonnet |
| baseCommit | `343a04aa1ad3e633274ebce518fc1351f1b71900` |
| Capture base (before the re-capture) | `2fe9efafbe44ea41859470495e6133cb2fcaaa8f` |
| States with diffs | default:13 |
| Kinds | structure, class, text, pseudo, layout |
| Changed TST files | `UBTConnect.App_Menu.Menu.mvc.js`, `UBTConnect_Utils.CacheControl.CacheControl_UserInfo.mvc.js` |
| Other routes that use those files | ContactUsDetails, CountryDetails, CountryList, Profile, Search, Updates_SingleList |
| Handoff folder | `migration/sync/handoffs/Menu` |
| Note | S: B + C: Request Photo Update row shown for householder account; Menu.mvc.js changed, A unsure. Q8 |

## What changed in TST (parity reports of the fresh capture)

- `default.json` (2026-11-06T20:04:54.452Z): layout 6, structure 1, class 2, pseudo 2, text 2; pixels 1.46%, worst tile 15.0%; calls expected 8 actual 8; exemptions used 6
  - kind=layout; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=390×250 → 390×209
  - kind=layout; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=390×246 → 390×205
  - kind=layout; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=390×246 → 390×205
  - kind=layout; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=358×246 → 358×205
  - kind=structure; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=missing in build
  - kind=class; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=missing .connect-icon-image_gallery extra .connect-icon-book_open
  - kind=pseudo; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=::before content "" → ""
  - kind=text; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail="Request Photo Update" → "Terms & Policies"
  - kind=layout; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=127×15 → 93×15
  - kind=class; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=missing .connect-icon-book_open extra .connect-icon-logout
  - kind=pseudo; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=::before content "" → ""
  - kind=text; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail="Terms & Policies" → "Log out"
  - kind=layout; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=93×15 → 43×15
- `loading.json` (2026-11-06T20:04:56.985Z): no counts; pixels 0%, worst tile 0%; exemptions used 1
- `offline.json` (2026-11-06T20:05:00.510Z): no counts; pixels 0.02%, worst tile 2.2%; exemptions used 5

## DOM diff per state (old capture → new capture)

```
migration/screens/Menu/analysis/calls.json         | 16 ++---
 migration/screens/Menu/analysis/dom/default.html   | 49 ++++++++++++++-
 .../screens/Menu/analysis/dom/default.raw.html     |  2 +-
 migration/screens/Menu/analysis/dom/offline.html   | 72 +++++++++++-----------
 .../screens/Menu/analysis/dom/offline.raw.html     |  2 +-
 5 files changed, 94 insertions(+), 47 deletions(-)
```
```diff
-                          •••••• ••••••••
+                          •••••• ••••
+                 <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="b10-l1-36_3-$b4">
+                  <div class="" id="b10-l1-36_3-b4-Placeholder_LoadingSection">
+                   <div class="OSBlockWidget" data-block="BasePatterns.CustomContainer" id="b10-l1-36_3-$b5">
+                    <div class="ubt-custom-container border-bottom-s border-color-neutral-3 padding-s" id="b10-l1-36_3-b5-Content" style="cursor: pointer;">
+                     <div class="OSBlockWidget" data-block="BasePatterns.Columns_Three" id="b10-l1-36_3-$b6">
+                      <div class="OSBlockWidget" data-block="Adaptive.Columns3" id="b10-l1-36_3-b6-$b1">
+                       <div class="columns columns3 gutter-s tablet-break-none phone-break-none ubt-columns ubt-columns--three-columns ubt-columns-expand-middle align-items-center" data-container="">
+                        <div class="columns-item" id="b10-l1-36_3-b6-b1-Column1">
+                         <div class="ubt-columns--left ubt-columns--column" id="b10-l1-36_3-b6-Left" style="">
+                          <div class="OSBlockWidget" data-block="ConnectPatterns.Icon" id="b10-l1-36_3-$b7">
+                           <div class="ubt-icon connect-icon-image_gallery text-neutral-9 icon-base" data-container="" style="cursor: pointer;">
+                           </div>
+                          </div>
+                         </div>
+                        </div>
+                        <div class="columns-item" id="b10-l1-36_3-b6-b1-Column2">
+                         <div class="ubt-columns--middle ubt-columns--column" id="b10-l1-36_3-b6-Middle" style="">
+                          <div class="OSBlockWidget" data-block="BasePatterns.CustomText" id="b10-l1-36_3-$b8">
+                           <div class="text-neutral-9 font-regular font-size-xs" data-container="" style="cursor: pointer;">
+                            <div class="OSBlockWidget" data-block="ConnectPatterns.IconInline_Internal" id="b10-l1-36_3-b8-$b2">
+                            </div>
+                            <span data-expression="" style="margin-left: 0px;">
+                             Request Photo Update
+                            </span>
+                           </div>
+                          </div>
+                         </div>
+                        </div>
+                        <div class="columns-item" id="b10-l1-36_3-b6-b1-Column3">
+                         <div class="ubt-columns--right ubt-columns--column" id="b10-l1-36_3-b6-Right" style="">
+                          <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="b10-l1-36_3-$b10">
+                           <div class="" id="b10-l1-36_3-b10-Placeholder_LoadingSection">
+                            <div class="OSBlockWidget" data-block="ConnectPatterns.Icon" id="b10-l1-36_3-$b13">
+                             <div class="ubt-icon connect-icon-chevron_right text-neutral-7 icon-base" data-container="" style="cursor: pointer;">
+                             </div>
+                            </div>
+                           </div>
+                          </div>
+                         </div>
+                        </div>
+                       </div>
+                      </div>
+                     </div>
+                    </div>
+                   </div>
+                  </div>
+                 </div>
-        <div id="reactContainer"><div id="transitionContainer"><div class="active-screen screen-container" style="--footer-shadow-scroll: hidden; --header-shadow-scroll: hidden;"><div data-block="Lay
+        <div id="reactContainer"><div id="transitionContainer"><div class="active-screen screen-container" style="--footer-shadow-scroll: hidden; --header-shadow-scroll: hidden;"><div data-block="Lay
-               <div class="OSBlockWidget" data-block="Navigation.BottomBarItem" id="b13-l1-60_0-$b2">
+               <div class="OSBlockWidget" data-block="Navigation.BottomBarItem" id="b13-l1-57_0-$b2">
-                 <div class="placeholder-empty bottom-bar-item-icon" id="b13-l1-60_0-b2-Icon" style="text-align: center;">
-                  <div class="OSBlockWidget" data-block="ConnectPatterns.Icon" id="b13-l1-60_0-$b4">
+                 <div class="placeholder-empty bottom-bar-item-icon" id="b13-l1-57_0-b2-Icon" style="text-align: center;">
+                  <div class="OSBlockWidget" data-block="ConnectPatterns.Icon" id="b13-l1-57_0-$b4">
-                 <div class="placeholder-empty bottom-bar-item-text" id="b13-l1-60_0-b2-Text" style="text-align: center;">
-                  <div class="OSBlockWidget" data-block="BasePatterns.CustomText" id="b13-l1-60_0-$b5">
+                 <div class="placeholder-empty bottom-bar-item-text" id="b13-l1-57_0-b2-Text" style="text-align: center;">
... 65 more lines: git diff 2fe9efaf -- migration/screens/Menu/analysis/dom
```

## Decisions for this item

- none

## Allowed write paths

- `app/src/pages/Menu/**`
- `migration/screens/Menu/**`
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
- Page layout: `app/docs/guides/page-template.md`; patterns: `migration/patterns/P-*.md`; the route spec: `migration/screens/Menu/route-spec.md`; the pack: `migration/screens/Menu/pack.md`.

## Quick checks (developer, before the report)

```
export PATH=$HOME/.nvm/versions/node/v24.21.0/bin:$PATH
npm --prefix app run typecheck
cd app && npx vitest run <the test files of the changed code> && cd ..
cd app && npx eslint <the changed files> && cd ..
npm --prefix app run arch
python3 tools/pipeline/route.py parity Menu --app http://localhost:5173      # every state: 0 unexempted differences
```

## Gate (tester)

```
curl -s -o /dev/null -w '%{http_code}' http://localhost:5173/UBTConnect/HomeFeed   # 200, and lsof -p <pid> -a -d cwd = <root>/app
/Library/Developer/CommandLineTools/usr/bin/python3 tools/pipeline/scope_guard.py --screen Menu --base 343a04aa1ad3e633274ebce518fc1351f1b71900 --allow migration/sync/** --allow app/docs/** --allow migration/route-check/** --allow migration/knowledge/** --allow migration/metrics/** --allow migration/board.md --allow app/src/pages/MessageList/** --allow migration/screens/MessageList/** --allow app/src/pages/LDM_EventDetail_V2/** --allow migration/screens/LDM_EventDetail_V2/** --allow app/src/pages/ContactByEmailMember/** --allow migration/screens/ContactByEmailMember/** --allow app/src/pages/OrbitAdminLanding/** --allow migration/screens/OrbitAdminLanding/** --allow app/src/pages/Household_Relations/** --allow migration/screens/Household_Relations/** --allow app/src/pages/MessageDetail/** --allow migration/screens/MessageDetail/**
python3 tools/pipeline/route.py parity Menu --app http://localhost:5173
python3 tools/pipeline/consistency_check.py --screen Menu
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

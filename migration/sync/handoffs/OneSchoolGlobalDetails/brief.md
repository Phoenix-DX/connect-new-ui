# Brief: OneSchoolGlobalDetails (class A: TST changed its code: fix React; loop 0/2)

| Field | Value |
|---|---|
| Route | `OneSchoolGlobalDetails` (`http://localhost:5173/UBTConnect/OneSchoolGlobalDetails`) |
| Dev model | opus |
| baseCommit | `34398169a33efbc2f6c4eff40e427154e7d47c29` |
| Capture base (before the re-capture) | `2fe9efafbe44ea41859470495e6133cb2fcaaa8f` |
| States with diffs | default:51, offline:1 |
| Kinds | structure, class, text, style, pseudo, layout, position, pixel |
| Changed TST files | `UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions.mvc.js`, `UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails.mvc.js`, `UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails_Block.mvc.js`, `UBTConnect_Utils.CW_CTA_PopUps.ContactByMessage_Wrapper.mvc.js`, `UBTConnect_Utils.CW_Share.ShareSheet.mvc.js` |
| Other routes that use those files | AssembleDetail, HomeFeed, HouseholdCarousel, HouseholdDetails, LDM_EventDetail_V2, LDM_MyEvents_V2, OneSchoolGlobalCarousel, Profile, SupperMeeting_Carousel, SupperMeeting_Details, Updates_SingleList |
| Handoff folder | `migration/sync/handoffs/OneSchoolGlobalDetails` |
| Note | L: A + B: rows removed (photo, location, link, call); code or entity data unsure. Q6 |

## What changed in TST (parity reports of the fresh capture)

- `default.json` (2026-11-06T20:06:46.283Z): layout 24, structure 6, class 3, style 2, text 5, pseudo 5, position 5, pixel 1; pixels 14.07%, worst tile 100%; calls expected 12 actual 13; exemptions used 3
  - kind=layout; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=390×686 → 390×723
  - kind=layout; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=390×686 → 390×723
  - kind=layout; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=390×686 → 390×723
  - kind=layout; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=390×400 → 390×437
  - kind=layout; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=390×400 → 390×437
  - kind=layout; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=390×400 → 390×437
  - kind=layout; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=390×400 → 390×437
  - kind=layout; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=390×400 → 390×437
  - kind=layout; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=390×400 → 390×437
  - kind=structure; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=missing in build
  - kind=class; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=missing .hidden
  - kind=style; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=max-height 0px → none
  - kind=style; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=max-height 0px → none
  - kind=structure; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=missing in build
  - kind=layout; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=390×140 → 390×177
  - kind=layout; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=390×140 → 390×177
  - kind=layout; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=358×116 → 358×153
  - kind=layout; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=358×116 → 358×153
  - kind=layout; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=358×116 → 358×153
  - kind=text; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail="" → "OneSchool Alem"
  - ... 31 more in the file
- `loading.json` (2026-11-06T20:06:48.852Z): no counts; pixels 0%, worst tile 0%; exemptions used 1
- `offline.json` (2026-11-06T20:06:52.519Z): structure 1; pixels 0.02%, worst tile 2.2%; exemptions used 4
  - kind=structure; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=missing in build

## DOM diff per state (old capture → new capture)

```
.../OneSchoolGlobalDetails/analysis/calls.json     |  48 +++----
 .../analysis/dom/default.html                      | 151 +++------------------
 .../analysis/dom/default.raw.html                  |   4 +-
 .../analysis/dom/loading.html                      |   2 +
 .../analysis/dom/loading.raw.html                  |   2 +-
 .../analysis/dom/offline.html                      |  76 ++++++-----
 .../analysis/dom/offline.raw.html                  |   4 +-
 .../OneSchoolGlobalDetails/analysis/states.json    |   4 +-
 8 files changed, 94 insertions(+), 197 deletions(-)
```
```diff
-<body class="phone portrait osx is-ltr" style="--header-size-content: 0px; --footer-height: 42px; --viewport-height: 844px;">
+<body class="phone portrait osx is-ltr" style="--header-size-content: 0px; --footer-height: 56px; --viewport-height: 844px;">
-                             <div class="ubt-custom-container ubt-lazy-image ubt-lazy-image--width-max-width ubt-lazy-image-auto border-radius-none" id="b3-b4-b2-b2-Content" style="cursor: pointer;">
-                              <img data-image="" data-masked-src="user-image" data-rendered-size="390x260" id="b3-b4-b2-Image" src=""/>
+                             <div class="ubt-custom-container hidden ubt-lazy-image ubt-lazy-image--width-max-width ubt-lazy-image-auto border-radius-none" id="b3-b4-b2-b2-Content" style="cursor: poi
+                              <img data-image="" data-rendered-size="0x0" id="b3-b4-b2-Image" src="/UBTConnect/OneSchoolGlobalDetails"/>
+                             </div>
+                            </div>
+                            <div class="OSBlockWidget" data-block="BasePatterns.CustomContainer" id="b3-b4-b2-$b3">
+                             <div class="ubt-custom-container ubt-lazy-image ubt-lazy-image--width-max-width ubt-background-image--intrinsic-height ubt-lazy-image--no-image ubt-skeleton-section__elem
+                              <div class="OSBlockWidget" data-block="ConnectPatterns.Icon" id="b3-b4-b2-$b5">
+                               <div class="ubt-icon connect-icon-school_fill text-cyan-darker" data-container="" style="cursor: pointer;">
+                               </div>
+                              </div>
+                              <div class="OSBlockWidget" data-block="BasePatterns.CustomText" id="b3-b4-b2-$b6">
+                               <div class="text-neutral-7 font-regular font-size-s padding-top-base" data-container="" style="cursor: pointer;">
+                                <div class="OSBlockWidget" data-block="ConnectPatterns.IconInline_Internal" id="b3-b4-b2-b6-$b2">
+                                </div>
+                                <span data-expression="" style="margin-left: 0px;">
+                                 Sorry, no photo available
+                                </span>
+                               </div>
+                              </div>
+                      <div id="b3-Placeholder_CarouselTag">
+                      </div>
-                           ••••••••• ••••
-                            ••••• ••••••
-                                <div class="OSBlockWidget" data-block="ConnectPatterns.Icon" id="b3-b9-b1-b2-$b1">
-                                 <div class="ubt-icon connect-icon-location_on_fill text-primary icon-non-standard-16 padding-right-xs inline-block" data-container="" style="cursor: pointer;">
-                                 </div>
-                                </div>
-                                •• ••••••••• ••• ••••••• •••••••
-                            <div class="school-link-item" data-container="">
-                             <div class="OSBlockWidget" data-block="App_Common_Blocks.External_Link" id="b3-l1-98_0-$b10">
-                              <div class="OSBlockWidget" data-block="ConnectPatterns.IconText" id="b3-l1-98_0-b10-$b1">
-                               <div data-container="" id="b3-l1-98_0-b10-b1-DIV_IconText" style="cursor: pointer;">
-                                <div class="OSBlockWidget" data-block="BasePatterns.Columns_Two" id="b3-l1-98_0-b10-b1-$b1">
-                                 <div class="OSBlockWidget" data-block="Adaptive.Columns2" id="b3-l1-98_0-b10-b1-b1-$b1">
-                                  <div class="columns columns2 gutter-xs tablet-break-none phone-break-none ubt-columns ubt-columns--two-columns ubt-columns-reduce-first align-items-center" data-cont
-                                   <div class="columns-item" id="b3-l1-98_0-b10-b1-b1-b1-Column1">
-                                    <div class="ubt-columns--left ubt-columns--column" id="b3-l1-98_0-b10-b1-b1-Left" style="">
-                                     <div id="b3-l1-98_0-b10-b1-Icon">
-                                      <div class="OSBlockWidget" data-block="ConnectPatterns.Icon" id="b3-l1-98_0-b10-$b2">
-                                       <div class="ubt-icon connect-icon-open_new text-primary icon-non-standard-16" data-container="" style="cursor: pointer;">
-                                       </div>
-                                      </div>
-                                     </div>
-                                    </div>
-                                   </div>
-                                   <div class="columns-item" id="b3-l1-98_0-b10-b1-b1-b1-Column2">
-                                    <div class="ubt-columns--right ubt-columns--column" id="b3-l1-98_0-b10-b1-b1-Right" style="">
-                                     <div class="OSBlockWidget" data-block="BasePatterns.CustomText" id="b3-l1-98_0-b10-b1-$b2">
-                                      <div class="text-primary font-regular font-size-s text-underline" data-container="" style="cursor: pointer;">
-                                       <div class="OSBlockWidget" data-block="ConnectPatterns.IconInline_Internal" id="b3-l1-98_0-b10-b1-b2-$b2">
-                                       </div>
-                                       <span data-expression="" style="margin-left: 0px;">
-                                        •••
-                                       </span>
-                                      </div>
-                                     </div>
... 179 more lines: git diff 2fe9efaf -- migration/screens/OneSchoolGlobalDetails/analysis/dom
```

## Decisions for this item

- none

## Allowed write paths

- `app/src/pages/OneSchoolGlobalDetails/**`
- `migration/screens/OneSchoolGlobalDetails/**`
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
- Page layout: `app/docs/guides/page-template.md`; patterns: `migration/patterns/P-*.md`; the route spec: `migration/screens/OneSchoolGlobalDetails/route-spec.md`; the pack: `migration/screens/OneSchoolGlobalDetails/pack.md`.

## Quick checks (developer, before the report)

```
export PATH=$HOME/.nvm/versions/node/v24.21.0/bin:$PATH
npm --prefix app run typecheck
cd app && npx vitest run <the test files of the changed code> && cd ..
cd app && npx eslint <the changed files> && cd ..
npm --prefix app run arch
python3 tools/pipeline/route.py parity OneSchoolGlobalDetails --app http://localhost:5173      # every state: 0 unexempted differences
```

## Gate (tester)

```
curl -s -o /dev/null -w '%{http_code}' http://localhost:5173/UBTConnect/HomeFeed   # 200, and lsof -p <pid> -a -d cwd = <root>/app
python3 tools/sync/sync.py scope OneSchoolGlobalDetails      # computes --base and the --allow list of the items active NOW
python3 tools/pipeline/route.py parity OneSchoolGlobalDetails --app http://localhost:5173
python3 tools/pipeline/consistency_check.py --screen OneSchoolGlobalDetails
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

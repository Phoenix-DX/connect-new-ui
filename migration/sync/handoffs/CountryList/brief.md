# Brief: CountryList (class A: TST changed its code: fix React; loop 0/2)

| Field | Value |
|---|---|
| Route | `CountryList` (`http://localhost:5173/UBTConnect/CountryList`) |
| Dev model | opus |
| baseCommit | `a71b8fbdbf243c49682a603d3b5b8d9059e8212f` |
| Capture base (before the re-capture) | `2fe9efafbe44ea41859470495e6133cb2fcaaa8f` |
| States with diffs | default:15, offline:6 |
| Kinds | structure, class, text, style, position, pixel, call |
| Changed TST files | `UBTConnect.Directory_Locality.CountryList.mvc.js`, `UBTConnect_Utils.CacheControl.CacheControl_UserInfo.mvc.js` |
| Other routes that use those files | ContactUsDetails, CountryDetails, Menu, Profile, Search, Updates_SingleList |
| Handoff folder | `migration/sync/handoffs/CountryList` |
| Note | M: A + B: Directory_CommunityNumbers replaces CommunityPopulation (also HomeFeed); counts drift |

## What changed in TST (parity reports of the fresh capture)

- `default.json` (2026-11-06T20:01:49.554Z): class 1, style 1, structure 2, text 5, position 4, pixel 1, call 1; pixels 42.44%, worst tile 100%; calls expected 9 actual 10; exemptions used 4
  - kind=class; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=missing .margin-top-base extra .padding-top-base
  - kind=style; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=margin-top 16px → 0px; padding-top 0px → 16px
  - kind=structure; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=missing in build
  - kind=structure; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=extra in build
  - kind=text; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail="73" → "74"
  - kind=text; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail="36" → "37"
  - kind=text; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail="73" → "74"
  - kind=text; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail="37" → "38"
  - kind=text; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail="28" → "29"
  - kind=position; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b28.OSBlockWidget[Directory_Loc; detail=offset in parent -1,-2293 → -1,-2013
  - kind=position; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b28.OSBlockWidget[Directory_Loc; detail=offset in parent 0,-1448 → 0,-1168
  - kind=position; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b28.OSBlockWidget[Directory_Loc; detail=offset in parent 0,-2292 → 0,-2012
  - kind=position; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b28.OSBlockWidget[Directory_Loc; detail=offset in parent -1,-1448 → -1,-1168
  - kind=pixel; path=screenshot; detail=42.44% pixels differ (max 0.20%), worst 40px tile 100.0% (max 3.0%), hotspots 120,320 (1600px); 160,320 (1600px); 200,32
  - kind=call; path=calls:load; detail=extra call UBTConnect/DataActionFetchCount
- `loading.json` (2026-11-06T20:01:52.303Z): no counts; pixels 0%, worst tile 0%; exemptions used 1
- `offline.json` (2026-11-06T20:01:55.975Z): position 1, class 1, style 1, structure 2, pixel 1; pixels 8.42%, worst tile 100%; exemptions used 5
  - kind=position; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=offset in parent 16,179 → 16,163
  - kind=class; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=missing .margin-top-base extra .padding-top-base
  - kind=style; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=margin-top 16px → 0px; padding-top 0px → 16px
  - kind=structure; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=missing in build
  - kind=structure; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=extra in build
  - kind=pixel; path=screenshot; detail=8.42% pixels differ (max 0.20%), worst 40px tile 100.0% (max 3.0%), hotspots 80,320 (1600px); 120,320 (1600px); 160,320 

## DOM diff per state (old capture → new capture)

```
migration/screens/CountryList/analysis/calls.json  |  37 ++--
 .../screens/CountryList/analysis/dom/default.html  | 170 +++++++++++++---
 .../CountryList/analysis/dom/default.raw.html      |   2 +-
 .../screens/CountryList/analysis/dom/loading.html  | 154 ++++++++++++--
 .../CountryList/analysis/dom/loading.raw.html      |   2 +-
 .../screens/CountryList/analysis/dom/offline.html  | 226 ++++++++++++++++-----
 .../CountryList/analysis/dom/offline.raw.html      |   2 +-
 7 files changed, 462 insertions(+), 131 deletions(-)
```
```diff
-                         ••••••• •••••
+                         ••• ••••••
-                         5 Supper Meetings
+                         7 Supper Meetings
-                         29 Localities
+                         28 Localities
-            <div class="OSBlockWidget" data-block="BasePatterns.CustomContainer" id="Population">
-             <div class="ubt-custom-container padding-top-base" id="b17-Content" style="cursor: pointer;">
-              <div class="OSBlockWidget" data-block="Home.FeedBlock_CommunityPopulation" id="$b18">
-               <div class="OSBlockWidget" data-block="BasePatterns.CustomContainer" id="b18-$b1">
-                <div class="ubt-custom-container ubt-skeleton-section__element background-primary-gradient-radial border-radius-medium padding-x-base padding-y-s" id="b18-b1-Content" style="cursor: p
-                 <div class="OSBlockWidget" data-block="BasePatterns.CustomText" id="b18-$b2">
-                  <div class="text-neutral-0 font-semi-bold font-size-xxs" data-container="" style="cursor: pointer;">
-                   <div class="OSBlockWidget" data-block="ConnectPatterns.IconInline_Internal" id="b18-b2-$b2">
+            <div class="OSBlockWidget" data-block="BasePatterns.CustomContainer" id="$b17">
+             <div class="ubt-custom-container margin-top-base" id="b17-Content" style="cursor: pointer;">
+              <div class="OSBlockWidget" data-block="Directory_CommonBlocks.Directory_CommunityNumbers" id="$b18">
+               <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="b18-$b1">
+                <div class="" id="b18-b1-Placeholder_LoadingSection">
+                 <div class="directory-numbers-card" data-container="">
+                  <div class="OSBlockWidget" data-block="BasePatterns.CustomContainer" id="b18-$b2">
+                   <div class="ubt-custom-container text-peach-dark font-size-xs" id="b18-b2-Content" style="cursor: pointer;">
+                    COMMUNITY BY THE NUMBERS
-                   <span data-expression="" style="margin-left: 0px;">
-                    Community Population
-                   </span>
-                 </div>
-                 <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="b18-$b3">
-                  <div class="" id="b18-b3-Placeholder_LoadingSection">
-                   <div class="OSBlockWidget" data-block="BasePatterns.CustomText" id="b18-$b4">
-                    <div class="text-neutral-0 font-semi-bold font-size-h2" data-container="" style="cursor: pointer;">
-                     <div class="OSBlockWidget" data-block="ConnectPatterns.IconInline_Internal" id="b18-b4-$b2">
+                  <div class="directory-numbers-card__content" data-container="">
+                   <div class="directory-numbers-card__left" data-container="">
+                    <div class="OSBlockWidget" data-block="ConnectPatterns.Icon" id="b18-$b3">
+                     <div class="ubt-icon SVG_CommunityMembers text-neutral-9 icon-non-standard-40" data-container="" style="cursor: pointer;">
+                      <div class="OSBlockWidget" data-block="ConnectPatterns.IconSVG" id="b18-b3-$b1">
+                       <img data-image="" data-rendered-size="40x40" src="/UBTConnect/img/UBTConnectLibrary.CommunityMembers.svg"/>
+                      </div>
+                     </div>
+                    </div>
+                    <div data-container="">
+                     <div class="OSBlockWidget" data-block="BasePatterns.CustomContainer" id="b18-$b4">
+                      <div class="ubt-custom-container text-cyan-darker font-semi-bold font-size-h1" id="b18-b4-Content" style="cursor: pointer;">
+                       <span data-expression="">
+                        ••••••
+                       </span>
+                      </div>
+                     </div>
+                     <div class="directory-numbers-card__variation" data-container="">
+                      <div class="OSBlockWidget" data-block="ConnectPatterns.Icon" id="b18-$b5">
+                       <div class="ubt-icon connect-icon-Arrow-up1 text-green-dark icon-extra-small" data-container="" style="cursor: pointer;">
+                       </div>
+                      </div>
+                      <div class="OSBlockWidget" data-block="BasePatterns.CustomContainer" id="b18-$b7">
+                       <div class="ubt-custom-container text-green-dark font-size-xxs" id="b18-b7-Content" style="cursor: pointer;">
+                        <span data-expression="">
+                         ••
+                        </span>
+                       </div>
... 496 more lines: git diff 2fe9efaf -- migration/screens/CountryList/analysis/dom
```

## Decisions for this item

- Shared paths granted by the user for this item (replaces the change request of AGENTS.md rule 7): `app/src/components/feed/CommunityPopulation/**`. No other item runs while this one is active.

## Allowed write paths

- `app/src/pages/CountryList/**`
- `migration/screens/CountryList/**`
- `app/src/components/feed/CommunityPopulation/**`
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
- Page layout: `app/docs/guides/page-template.md`; patterns: `migration/patterns/P-*.md`; the route spec: `migration/screens/CountryList/route-spec.md`; the pack: `migration/screens/CountryList/pack.md`.

## Quick checks (developer, before the report)

```
export PATH=$HOME/.nvm/versions/node/v24.21.0/bin:$PATH
npm --prefix app run typecheck
cd app && npx vitest run <the test files of the changed code> && cd ..
cd app && npx eslint <the changed files> && cd ..
npm --prefix app run arch
python3 tools/pipeline/route.py parity CountryList --app http://localhost:5173      # every state: 0 unexempted differences
```

## Gate (tester)

```
curl -s -o /dev/null -w '%{http_code}' http://localhost:5173/UBTConnect/HomeFeed   # 200, and lsof -p <pid> -a -d cwd = <root>/app
python3 tools/sync/sync.py scope CountryList      # computes --base and the --allow list of the items active NOW
python3 tools/pipeline/route.py parity CountryList --app http://localhost:5173
python3 tools/pipeline/consistency_check.py --screen CountryList
npm --prefix app run typecheck && npm --prefix app run arch && (cd app && npx eslint <changed files> && npx vitest run <changed tests>)
python3 tools/parity/parity_sweep.py --app http://localhost:5173 ContactUsDetails CountryDetails Menu Profile Search Updates_SingleList   # the routes that share the changed blocks
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

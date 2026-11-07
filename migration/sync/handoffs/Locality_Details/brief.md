# Brief: Locality_Details (class A: TST changed its code: fix React; loop 0/2)

| Field | Value |
|---|---|
| Route | `Locality_Details` (`http://localhost:5173/UBTConnect/Locality_Details`) |
| Dev model | opus |
| baseCommit | `34398169a33efbc2f6c4eff40e427154e7d47c29` |
| Capture base (before the re-capture) | `2fe9efafbe44ea41859470495e6133cb2fcaaa8f` |
| States with diffs | default:267, offline:5, tag-interchange:4, tag-oneschoolglobal:2 |
| Kinds | structure, text, style, pseudo, layout, pixel |
| Changed TST files | `UBTConnect.Directory_Locality.Locality_Details.mvc.js`, `UBTConnectLibrary.ConnectPatterns.HorizontalTagList.mvc.js` |
| Other routes that use those files | HouseholdCarousel, HouseholdDetails, Profile, Search, Updates_SingleList |
| Handoff folder | `migration/sync/handoffs/Locality_Details` |
| Note | L: re-captured settle 8 s, unchanged (style 25, layout 240, pixel 0.01 pct). Q3 done. A + B + C: calls changed; time label, lazy placeholders, one OSG item fewer. Q3, Q8 |

## What changed in TST (parity reports of the fresh capture)

- `default.json` (2026-11-07T00:36:10.323Z): layout 240, style 25, structure 2; pixels 0.01%, worst tile 0.6%; calls expected 39 actual 62; exemptions used 4
  - kind=layout; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=390×26 → 390×260
  - kind=layout; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=390×26 → 390×260
  - kind=layout; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=390×26 → 390×260
  - kind=layout; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=390×26 → 390×260
  - kind=layout; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=390×26 → 390×260
  - kind=layout; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=390×26 → 390×260
  - kind=layout; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=390×26 → 390×260
  - kind=layout; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=390×26 → 390×260
  - kind=layout; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=390×26 → 390×260
  - kind=layout; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=390×26 → 390×260
  - kind=style; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=bottom 82px → 83px
  - kind=layout; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=390×26 → 390×260
  - kind=layout; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=390×26 → 390×260
  - kind=layout; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=390×26 → 390×260
  - kind=layout; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=390×26 → 390×260
  - kind=layout; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=390×26 → 390×260
  - kind=layout; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=390×26 → 390×260
  - kind=layout; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=390×26 → 390×260
  - kind=layout; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=390×26 → 390×260
  - kind=layout; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=390×26 → 390×260
  - ... 247 more in the file
- `loading.json` (2026-11-07T00:36:12.999Z): no counts; pixels 0%, worst tile 0%; exemptions used 1
- `offline.json` (2026-11-07T00:36:16.982Z): layout 3, structure 1, pixel 1; pixels 1.59%, worst tile 21.5%; exemptions used 5
  - kind=layout; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=390×1112 → 390×578
  - kind=layout; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=390×1112 → 390×578
  - kind=layout; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=390×1112 → 390×578
  - kind=structure; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=missing in build
  - kind=pixel; path=screenshot; detail=1.59% pixels differ (max 0.20%), worst 40px tile 21.5% (max 3.0%), hotspots 40,200 (344px); 120,200 (343px); 160,200 (34
- `tag-interchange.json` (2026-11-07T00:36:31.058Z): text 1, pseudo 1, layout 1, pixel 1; pixels 0.59%, worst tile 11.6%; calls expected 40 actual 66; exemptions used 3
  - kind=text; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail="Argentina" → ""
  - kind=pseudo; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=::after extra in build
  - kind=layout; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=47×12 → 0×12
  - kind=pixel; path=screenshot; detail=0.59% pixels differ (max 0.20%), worst 40px tile 11.6% (max 3.0%), hotspots 200,760 (185px); 0,760 (160px); 40,760 (160p
- `tag-oneschoolglobal.json` (2026-11-07T00:36:44.512Z): structure 1, pixel 1; pixels 27.1%, worst tile 100%; calls expected 40 actual 74; exemptions used 5
  - kind=structure; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[Layouts.Layout; detail=extra in build
  - kind=pixel; path=screenshot; detail=27.10% pixels differ (max 0.20%), worst 40px tile 100.0% (max 3.0%), hotspots 40,640 (1600px); 80,640 (1600px); 120,640 
- `tag-suppermeetings.json` (2026-11-07T00:36:51.827Z): no counts; pixels 0.01%, worst tile 0.6%; calls expected 40 actual 63; exemptions used 5

## DOM diff per state (old capture → new capture)

```
.../screens/Locality_Details/analysis/calls.json   |  184 +-
 .../Locality_Details/analysis/dom/default.html     | 2994 ++++++++++----------
 .../Locality_Details/analysis/dom/default.raw.html |    2 +-
 .../Locality_Details/analysis/dom/loading.html     |  721 ++++-
 .../Locality_Details/analysis/dom/loading.raw.html |    4 +-
 .../Locality_Details/analysis/dom/offline.html     |  737 ++++-
 .../Locality_Details/analysis/dom/offline.raw.html |    8 +-
 .../analysis/dom/tag-interchange.html              |  401 +--
 .../analysis/dom/tag-interchange.raw.html          |    4 +-
 .../analysis/dom/tag-oneschoolglobal.html          |  664 ++---
 .../analysis/dom/tag-oneschoolglobal.raw.html      |    4 +-
 .../analysis/dom/tag-suppermeetings.html           |  524 ++--
 .../analysis/dom/tag-suppermeetings.raw.html       |    2 +-
 .../screens/Locality_Details/analysis/states.json  |    2 +-
 14 files changed, 3578 insertions(+), 2673 deletions(-)
```
```diff
-   <div class="active-screen screen-container" style="--footer-shadow-scroll: hidden; --header-shadow-scroll: hidden;">
+   <div class="active-screen screen-container" style="--footer-shadow-scroll: visible; --header-shadow-scroll: hidden;">
-                         Thursday, 01:27 AM (UTC - 3)
+                         Friday, 05:29 PM (UTC - 3)
-               <div class="OSBlockWidget" data-block="ConnectPatterns.TagToggle" id="b16-l1-79_0-$b1">
-                <div class="OSBlockWidget" data-block="BasePatterns.CustomContainer" id="b16-l1-79_0-b1-$b1">
-                 <div class="ubt-custom-container ubt-tag-toggle inline-block ubt-skeleton-section__element background-primary border-s border-color-primary border-radius-rounded text-neutral-0 font-
+               <div class="OSBlockWidget" data-block="ConnectPatterns.TagToggle" id="b16-l1-238_0-$b1">
+                <div class="OSBlockWidget" data-block="BasePatterns.CustomContainer" id="b16-l1-238_0-b1-$b1">
+                 <div class="ubt-custom-container ubt-tag-toggle inline-block ubt-skeleton-section__element background-primary border-s border-color-primary border-radius-rounded text-neutral-0 font-
-               <div class="OSBlockWidget" data-block="ConnectPatterns.TagToggle" id="b16-l1-79_1-$b1">
-                <div class="OSBlockWidget" data-block="BasePatterns.CustomContainer" id="b16-l1-79_1-b1-$b1">
-                 <div class="ubt-custom-container ubt-tag-toggle inline-block ubt-skeleton-section__element background-neutral-0 border-s border-color-neutral-5 border-radius-rounded text-neutral-7 f
+               <div class="OSBlockWidget" data-block="ConnectPatterns.TagToggle" id="b16-l1-238_1-$b1">
+                <div class="OSBlockWidget" data-block="BasePatterns.CustomContainer" id="b16-l1-238_1-b1-$b1">
+                 <div class="ubt-custom-container ubt-tag-toggle inline-block ubt-skeleton-section__element background-neutral-0 border-s border-color-neutral-5 border-radius-rounded text-neutral-7 f
-               <div class="OSBlockWidget" data-block="ConnectPatterns.TagToggle" id="b16-l1-79_2-$b1">
-                <div class="OSBlockWidget" data-block="BasePatterns.CustomContainer" id="b16-l1-79_2-b1-$b1">
-                 <div class="ubt-custom-container ubt-tag-toggle inline-block ubt-skeleton-section__element background-neutral-0 border-s border-color-neutral-5 border-radius-rounded text-neutral-7 f
+               <div class="OSBlockWidget" data-block="ConnectPatterns.TagToggle" id="b16-l1-238_2-$b1">
+                <div class="OSBlockWidget" data-block="BasePatterns.CustomContainer" id="b16-l1-238_2-b1-$b1">
+                 <div class="ubt-custom-container ubt-tag-toggle inline-block ubt-skeleton-section__element background-neutral-0 border-s border-color-neutral-5 border-radius-rounded text-neutral-7 f
-               <div class="OSBlockWidget" data-block="ConnectPatterns.TagToggle" id="b16-l1-79_3-$b1">
-                <div class="OSBlockWidget" data-block="BasePatterns.CustomContainer" id="b16-l1-79_3-b1-$b1">
-                 <div class="ubt-custom-container ubt-tag-toggle inline-block ubt-skeleton-section__element background-neutral-0 border-s border-color-neutral-5 border-radius-rounded text-neutral-7 f
+               <div class="OSBlockWidget" data-block="ConnectPatterns.TagToggle" id="b16-l1-238_3-$b1">
+                <div class="OSBlockWidget" data-block="BasePatterns.CustomContainer" id="b16-l1-238_3-b1-$b1">
+                 <div class="ubt-custom-container ubt-tag-toggle inline-block ubt-skeleton-section__element background-neutral-0 border-s border-color-neutral-5 border-radius-rounded text-neutral-7 f
-               <div class="OSBlockWidget" data-block="ConnectPatterns.TagToggle" id="b16-l1-79_4-$b1">
-                <div class="OSBlockWidget" data-block="BasePatterns.CustomContainer" id="b16-l1-79_4-b1-$b1">
-                 <div class="ubt-custom-container ubt-tag-toggle inline-block ubt-skeleton-section__element background-neutral-0 border-s border-color-neutral-5 border-radius-rounded text-neutral-7 f
+               <div class="OSBlockWidget" data-block="ConnectPatterns.TagToggle" id="b16-l1-238_4-$b1">
+                <div class="OSBlockWidget" data-block="BasePatterns.CustomContainer" id="b16-l1-238_4-b1-$b1">
+                 <div class="ubt-custom-container ubt-tag-toggle inline-block ubt-skeleton-section__element background-neutral-0 border-s border-color-neutral-5 border-radius-rounded text-neutral-7 f
-                   <div class="OSBlockWidget" data-block="Directory_Household_Blocks.Household_Card" id="b17-b10-l1-111_0-$b4">
-                    <div class="OSBlockWidget" data-block="ConnectCorePatterns.ImageCard_LazyLoading" id="b17-b10-l1-111_0-b4-$b1">
-                     <div class="OSBlockWidget" data-block="BasePatterns.CustomContainer" id="b17-b10-l1-111_0-b4-b1-$b1">
-                      <div class="ubt-custom-container ubt-image-card ubt-image-card--list ubt-avatar-image-s padding-bottom-s background-neutral-0 border-s border-color-neutral-3 border-radius-large
-                       <div class="OSBlockWidget" data-block="BasePatterns.CustomContainer" id="b17-b10-l1-111_0-b4-b1-ImageWrapper">
-                        <div class="ubt-custom-container ubt-image-card__background-image ubt-background-image--intrinsic-height ubt-lazy-image--width-max-width bookmark--rounded position-relative ub
-                         <div class="ubt-image-card--lazy-image-placeholder" id="b17-b10-l1-111_0-b4-b1-LazyImage_Placeholder">
-                          <div class="OSBlockWidget" data-block="CW_Image.UBT_LazyImage" id="b17-b10-l1-111_0-b4-$b2">
-                           <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="b17-b10-l1-111_0-b4-b2-$b1">
-                            <div class="" id="b17-b10-l1-111_0-b4-b2-b1-Placeholder_LoadingSection">
-                             <div class="OSBlockWidget" data-block="ConnectPatterns.LazyImage" id="b17-b10-l1-111_0-b4-b2-$b2">
-                              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="b17-b10-l1-111_0-b4-b2-b2-$b1">
-                               <div class="" id="b17-b10-l1-111_0-b4-b2-b2-b1-Placeholder_LoadingSection">
-                                <div class="OSBlockWidget" data-block="BasePatterns.CustomContainer" id="b17-b10-l1-111_0-b4-b2-b2-$b2">
-                                 <div class="ubt-custom-container ubt-lazy-image ubt-lazy-image--width-max-width ubt-lazy-image-auto border-radius-none" id="b17-b10-l1-111_0-b4-b2-b2-b2-Content" styl
-                                  <img data-image="" data-masked-src="user-image" data-rendered-size="390x259" id="b17-b10-l1-111_0-b4-b2-b2-Image" src=""/>
+                   <div class="OSBlockWidget" data-block="Directory_Household_Blocks.Household_Card" id="b17-b10-l1-106_0-$b4">
+                    <div class="OSBlockWidget" data-block="ConnectCorePatterns.ImageCard_LazyLoading" id="b17-b10-l1-106_0-b4-$b1">
+                     <div class="OSBlockWidget" data-block="BasePatterns.CustomContainer" id="b17-b10-l1-106_0-b4-b1-$b1">
+                      <div class="ubt-custom-container ubt-image-card ubt-image-card--list ubt-avatar-image-s padding-bottom-s background-neutral-0 border-s border-color-neutral-3 border-radius-large
+                       <div class="OSBlockWidget" data-block="BasePatterns.CustomContainer" id="b17-b10-l1-106_0-b4-b1-ImageWrapper">
+                        <div class="ubt-custom-container ubt-image-card__background-image ubt-background-image--intrinsic-height ubt-lazy-image--width-max-width bookmark--rounded position-relative ub
+                         <div class="ubt-image-card--lazy-image-placeholder" id="b17-b10-l1-106_0-b4-b1-LazyImage_Placeholder">
+                          <div class="OSBlockWidget" data-block="CW_Image.UBT_LazyImage" id="b17-b10-l1-106_0-b4-$b2">
+                           <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="b17-b10-l1-106_0-b4-b2-$b1">
+                            <div class="" id="b17-b10-l1-106_0-b4-b2-b1-Placeholder_LoadingSection">
... 6005 more lines: git diff 2fe9efaf -- migration/screens/Locality_Details/analysis/dom
```

## Decisions for this item

- Shared paths granted by the user for this item (replaces the change request of AGENTS.md rule 7): `app/src/components/ui/HorizontalTagList/**`. No other item runs while this one is active.

## Allowed write paths

- `app/src/pages/Locality_Details/**`
- `migration/screens/Locality_Details/**`
- `app/src/components/ui/HorizontalTagList/**`
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
- Page layout: `app/docs/guides/page-template.md`; patterns: `migration/patterns/P-*.md`; the route spec: `migration/screens/Locality_Details/route-spec.md`; the pack: `migration/screens/Locality_Details/pack.md`.

## Quick checks (developer, before the report)

```
export PATH=$HOME/.nvm/versions/node/v24.21.0/bin:$PATH
npm --prefix app run typecheck
cd app && npx vitest run <the test files of the changed code> && cd ..
cd app && npx eslint <the changed files> && cd ..
npm --prefix app run arch
python3 tools/pipeline/route.py parity Locality_Details --app http://localhost:5173      # every state: 0 unexempted differences
```

## Gate (tester)

```
curl -s -o /dev/null -w '%{http_code}' http://localhost:5173/UBTConnect/HomeFeed   # 200, and lsof -p <pid> -a -d cwd = <root>/app
python3 tools/sync/sync.py scope Locality_Details      # computes --base and the --allow list of the items active NOW
python3 tools/pipeline/route.py parity Locality_Details --app http://localhost:5173
python3 tools/pipeline/consistency_check.py --screen Locality_Details
npm --prefix app run typecheck && npm --prefix app run arch && (cd app && npx eslint <changed files> && npx vitest run <changed tests>)
python3 tools/parity/parity_sweep.py --app http://localhost:5173 HouseholdCarousel HouseholdDetails Profile Search Updates_SingleList   # the routes that share the changed blocks
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

# Brief: LDM_EventDetail_V2 (class B: mock data drift: fix the fictional data or mocks; loop 0/2)

| Field | Value |
|---|---|
| Route | `LDM_EventDetail_V2` (`http://localhost:5173/UBTConnect/LDM_EventDetail_V2`) |
| Dev model | sonnet |
| baseCommit | `343a04aa1ad3e633274ebce518fc1351f1b71900` |
| Capture base (before the re-capture) | `2fe9efafbe44ea41859470495e6133cb2fcaaa8f` |
| States with diffs | default:8 |
| Kinds | structure, class, style, layout, pixel |
| Changed TST files | - |
| Other routes that use those files | - |
| Handoff folder | `migration/sync/handoffs/LDM_EventDetail_V2` |
| Note | S: event now has host, address, guests; React branch exists (EventDetail_HostCard.tsx:150); test:74 changes |

## What changed in TST (parity reports of the fresh capture)

- `default.json` (2026-11-06T20:03:28.575Z): structure 3, class 1, style 2, layout 1, pixel 1; pixels 15.45%, worst tile 91.2%; calls expected 3 actual 10; exemptions used 5
  - kind=structure; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[LDM_ScreenBloc; detail=missing in build
  - kind=class; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[LDM_ScreenBloc; detail=missing .event-detail-photo extra .event-detail-photo-blank
  - kind=style; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[LDM_ScreenBloc; detail=display block → flex; justify-content normal → center; align-items normal → center; min-width 100px → 0px; min-height 55
  - kind=structure; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[LDM_ScreenBloc; detail=extra in build
  - kind=style; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[LDM_ScreenBloc; detail=border-bottom-width 1px → 0px; border-bottom-style solid → none; border-bottom-color rgb(233, 236, 239) → rgb(38, 50, 56
  - kind=layout; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[LDM_ScreenBloc; detail=82×17 → 129×17
  - kind=structure; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b1.OSBlockWidget[LDM_ScreenBloc; detail=missing in build
  - kind=pixel; path=screenshot; detail=15.45% pixels differ (max 0.20%), worst 40px tile 91.3% (max 3.0%), hotspots 40,560 (1460px); 320,360 (1382px); 280,360 
- `loading.json` (2026-11-06T20:03:31.151Z): no counts; pixels 0%, worst tile 0%; exemptions used 1
- `offline.json` (2026-11-06T20:03:34.636Z): no counts; pixels 0.01%, worst tile 0.7%; exemptions used 3

## DOM diff per state (old capture → new capture)

```
.../screens/LDM_EventDetail_V2/analysis/calls.json |   6 +-
 .../LDM_EventDetail_V2/analysis/dom/default.html   | 205 ++++++++++++++++++++-
 .../analysis/dom/default.raw.html                  |   4 +-
 3 files changed, 203 insertions(+), 12 deletions(-)
```
```diff
-                   •••• •••• ••••
+                   •••• ••••••• ••••
-                       ••••••••••• ••••
+                       ••••••• ••••
-                       •••• •••• ••••
+                       •••• ••••••• ••••
-                       <div class="event-detail-photo-blank" data-container="" style="width: 100px; height: 55px;">
-                        <i class="icon fa fa-users fa-1x" data-icon="">
-                        </i>
+                       <div class="event-detail-photo" data-container="" style='width: 100px; min-width: 100px; height: 55px; min-height: 55px; background-image: url("https://d23bplak01dwmt.cloudfron
-                      <div class="event-detail-hostcard-content-info OSInline" data-container="">
+                      <div class="event-detail-hostcard-content-info OSInline" data-container="" style="border-bottom: 1px solid var(--color-neutral-3);">
-                        Host Allocation Pending
+                        ••••••• •••• • ••••••
+                    <div class="event-detail-hostcard-address" data-container="">
+                     <div class="event-detail-hostcard-address-top" data-container="">
+                      <div class="event-detail-hostcard-address-info OSInline" data-container="" style="cursor: pointer;">
+                       <span class="event-detail-hostcard-address-info-title" data-expression="">
+                        ••• •••••••• •••••
+•••••••••• ••
+•••••
+                       </span>
+                      </div>
+                      <div class="event-detail-hostcard-address-button" data-container="">
+                       <button class="btn btn-primary OSFillParent" data-button="" type="button">
+                        <i class="icon event-detail-hostcard-address-icon fa fa-map-marker fa-1x" data-icon="">
+                        </i>
+                        Directions
+                       </button>
+                      </div>
+                     </div>
+                    </div>
+                 <div class="OSBlockWidget" data-block="LDM_Blocks.EventDetail_Section" id="b1-Detail_GuestsHouseholds">
+                  <div class="event-detail-section" data-container="">
+                   <div class="event-detail-section-title event-detail-section-title-guest" data-container="">
+                    <span data-expression="">
+                     Guest Households
+                    </span>
+                   </div>
+                   <div class="event-detail-section-placeholder border-bottom-neutral-4" id="b1-b13-Section_Placeholder">
+                    <div class="list list-group event-detail-list OSFillParent" data-list="" id="b1-List_Guests" style="position: relative;">
+                     <div class="OSBlockWidget" data-block="LDM_Blocks.EventDetail_ListItem" id="b1-l4-146023_0-ListItem_Guests">
+                      <div class="event-detail-list-item OSInline" data-container="">
+                       <div class="event-detail-list-item-main" data-container="" style="cursor: pointer;">
+                        <div class="event-detail-photo" data-container="" style='width: 100px; min-width: 100px; height: 55px; min-height: 55px; background-image: url("https://d23bplak01dwmt.cloudfro
+                        </div>
+                        <div class="event-detail-list-item-info border-bottom-neutral-4" data-container="" style="min-height: 55px;">
+                         <div class="event-detail-list-item-info-text OSInline" data-container="">
+                          <span class="bold font-size-0-9em" data-expression="">
+                           ••••••• ••••• • •••••••
+                          </span>
+                          <div data-container="">
+                           <span class="font-size-0-8em text-neutral-7" data-expression="" id="b1-l4-146023_0-b14-LocalityName">
+                            •••••••••••• ••••
+                           </span>
+                          </div>
+                         </div>
+                         <div class="padding-left-xs" data-container="">
+                          <div class="OSBlockWidget" data-block="Reusable.Person_Contact_Options" id="b1-l4-146023_0-b14-$b1">
+                           <div class="block-household-person-options" data-container="">
... 149 more lines: git diff 2fe9efaf -- migration/screens/LDM_EventDetail_V2/analysis/dom
```

## Decisions for this item

- none

## Allowed write paths

- `app/src/pages/LDM_EventDetail_V2/**`
- `migration/screens/LDM_EventDetail_V2/**`
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
- Page layout: `app/docs/guides/page-template.md`; patterns: `migration/patterns/P-*.md`; the route spec: `migration/screens/LDM_EventDetail_V2/route-spec.md`; the pack: `migration/screens/LDM_EventDetail_V2/pack.md`.

## Quick checks (developer, before the report)

```
export PATH=$HOME/.nvm/versions/node/v24.21.0/bin:$PATH
npm --prefix app run typecheck
cd app && npx vitest run <the test files of the changed code> && cd ..
cd app && npx eslint <the changed files> && cd ..
npm --prefix app run arch
python3 tools/pipeline/route.py parity LDM_EventDetail_V2 --app http://localhost:5173      # every state: 0 unexempted differences
```

## Gate (tester)

```
curl -s -o /dev/null -w '%{http_code}' http://localhost:5173/UBTConnect/HomeFeed   # 200, and lsof -p <pid> -a -d cwd = <root>/app
/Library/Developer/CommandLineTools/usr/bin/python3 tools/pipeline/scope_guard.py --screen LDM_EventDetail_V2 --base 343a04aa1ad3e633274ebce518fc1351f1b71900 --allow migration/sync/** --allow app/docs/** --allow migration/route-check/** --allow migration/knowledge/** --allow migration/metrics/** --allow migration/board.md --allow app/src/pages/MessageList/** --allow migration/screens/MessageList/**
python3 tools/pipeline/route.py parity LDM_EventDetail_V2 --app http://localhost:5173
python3 tools/pipeline/consistency_check.py --screen LDM_EventDetail_V2
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

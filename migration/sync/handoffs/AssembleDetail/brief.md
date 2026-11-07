# Brief: AssembleDetail (class B: mock data drift: fix the fictional data or mocks; loop 0/2)

| Field | Value |
|---|---|
| Route | `AssembleDetail` (`http://localhost:5173/UBTConnect/AssembleDetail`) |
| Dev model | opus |
| baseCommit | `d186ee26e0faec9911ff7ac6b3e81a03ea84056a` |
| Capture base (before the re-capture) | `2fe9efafbe44ea41859470495e6133cb2fcaaa8f` |
| States with diffs | default:12, offline:4 |
| Kinds | structure, text, layout, position, pixel, call |
| Changed TST files | - |
| Other routes that use those files | - |
| Handoff folder | `migration/sync/handoffs/AssembleDetail` |
| Note | M: B (A unsure): other event (in-person, address row); new calls not in drift. Q7 |

## What changed in TST (parity reports of the fresh capture)

- `default.json` (2026-11-07T00:35:23.819Z): position 1, text 2, layout 3, structure 4, pixel 1, call 1; pixels 2.2%, worst tile 23.1%; calls expected 4 actual 9; exemptions used 5
  - kind=position; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b2.OSBlockWidget[Assemble.Scree; detail=offset in parent 110,2 → 82,2
  - kind=text; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b2.OSBlockWidget[Assemble.Scree; detail="Reading" → "Prayer Meeting"
  - kind=layout; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b2.OSBlockWidget[Assemble.Scree; detail=65×21 → 120×21
  - kind=layout; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b2.OSBlockWidget[Assemble.Scree; detail=149×19 → 205×19
  - kind=text; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b2.OSBlockWidget[Assemble.Scree; detail="Reading - Saturday" → "Prayer Meeting - Saturday"
  - kind=layout; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b2.OSBlockWidget[Assemble.Scree; detail=149×21 → 205×21
  - kind=structure; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b2.OSBlockWidget[Assemble.Scree; detail=missing in build
  - kind=structure; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b2.OSBlockWidget[Assemble.Scree; detail=extra in build
  - kind=structure; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b2.OSBlockWidget[Assemble.Scree; detail=missing in build
  - kind=structure; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b2.OSBlockWidget[Assemble.Scree; detail=missing in build
  - kind=pixel; path=screenshot; detail=2.19% pixels differ (max 0.20%), worst 40px tile 23.1% (max 3.0%), hotspots 80,280 (369px); 120,280 (351px); 40,280 (346
  - kind=call; path=calls:load; detail=server actions ActionGetMemberContactByCacheKey → ActionGetSignedPhotosInBulk → build (none) → (none)
- `loading.json` (2026-11-07T00:35:26.422Z): no counts; pixels 0%, worst tile 0%; exemptions used 1
- `offline.json` (2026-11-07T00:35:30.406Z): position 1, text 1, layout 1, pixel 1; pixels 0.13%, worst tile 13.5%; exemptions used 4
  - kind=position; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b2.OSBlockWidget[Assemble.Scree; detail=offset in parent 110,2 → 142,2
  - kind=text; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b2.OSBlockWidget[Assemble.Scree; detail="Reading" → ""
  - kind=layout; path=div#reactContainer > div#transitionContainer > div.active-screen.screen-container > div#$b2.OSBlockWidget[Assemble.Scree; detail=65×21 → 0×21
  - kind=pixel; path=screenshot; detail=0.13% pixels differ (max 0.20%), worst 40px tile 13.5% (max 3.0%), hotspots 160,0 (216px); 200,0 (173px); 200,40 (17px);

## DOM diff per state (old capture → new capture)

```
.../screens/AssembleDetail/analysis/calls.json     |  30 +++-
 .../AssembleDetail/analysis/dom/default.html       | 186 +++++++++++++++++----
 .../AssembleDetail/analysis/dom/default.raw.html   |   2 +-
 .../AssembleDetail/analysis/dom/loading.html       |   2 +-
 .../AssembleDetail/analysis/dom/loading.raw.html   |   2 +-
 .../AssembleDetail/analysis/dom/offline.html       |   2 +-
 .../AssembleDetail/analysis/dom/offline.raw.html   |   2 +-
 7 files changed, 191 insertions(+), 35 deletions(-)
```
```diff
-                  ••••••
+                  Reading
-                           <img class="img-cover full-width" data-error-placeholder-src="/UBTConnect/img/Connect2_LegacyShared.no_division_rectangle.png?vb8_ZIo9Y2tg2UXbOSKk9A" data-image="" data-ren
+                           <img class="img-cover full-width" data-error-placeholder-src="/UBTConnect/img/Connect2_LegacyShared.no_division_rectangle.png?vb8_ZIo9Y2tg2UXbOSKk9A" data-image="" data-mas
-                              •••••• • ••••••
+                              Reading - Saturday
-                               •••••• • ••••••• •••••• •••••••
+                               ••• ••••••• ••••••• •••••• •••••••
-                               •••• •• •• ••••••• • •••••••• ••••
+                               •••• •• •• ••••••••• • •••••••• ••••
-                          <div class="OSBlockWidget" data-block="Assemble.AssembleCommon_VirtualMeetingURL" id="b2-b4-b7-$b9">
-                           <div class="font-regular" data-container="">
-                            <div class="OSBlockWidget" data-block="Assemble.AssembleSummary_Card_Row" id="b2-b4-b7-b9-$b1">
-                             <div class="assemble-summary-row text-neutral-7" data-container="">
-                              <div class="assemble-summary-row__icon-placeholder OSInline" id="b2-b4-b7-b9-b1-Placeholder_Icon_Left">
-                               <i class="icon connect-icon-video-camera fa fa-flag fa-1x" data-icon="">
-                               </i>
-                              </div>
-                              <div class="assemble-summary-row__content-placeholder OSInline" id="b2-b4-b7-b9-b1-Placeholder_Content">
-                               <span class="display-inline inline" data-expression="">
-                                Link is not available, refer to local signal chat
-                               </span>
-                              </div>
-                              <div class="assemble-summary-row__icon-placeholder--right OSInline" id="b2-b4-b7-b9-b1-Placeholder_Icon_Right">
-                              </div>
+                          <a data-link="" data-original-href="#" id="b2-b4-b7-Link_Address">
+                           <div class="OSBlockWidget" data-block="Assemble.AssembleSummary_Card_Row" id="b2-b4-b7-$b10">
+                            <div class="assemble-summary-row text-neutral-7" data-container="">
+                             <div class="assemble-summary-row__icon-placeholder OSInline" id="b2-b4-b7-b10-Placeholder_Icon_Left">
+                              <i class="text-primary icon connect-icon-place margin-right-xs font-size-base fa fa-flag fa-1x" data-icon="">
+                              </i>
-                            </div>
-                           </div>
-                           <div class="backwards-compatibility assemble-meeting-info-popup" data-container="">
-                            <div class="OSBlockWidget" data-block="ConfirmationDialogs.ActionConfirmationDialog" id="b2-b4-b7-b9-MeetingInfo">
-                             <div class="dx-confirmation-dialog" data-container="" id="b2-b4-b7-b9-b2-Root">
-                              <div data-container="" data-dx-event-hub="True" id="b2-b4-b7-b9-b2-EventHub">
-                              </div>
+                             <div class="assemble-summary-row__content-placeholder OSInline" id="b2-b4-b7-b10-Placeholder_Content">
+                              <span class="text-primary white-space-normal font-regular" data-expression="">
+                               ••• ••••••  •••••• •••• •••
+                              </span>
+                             </div>
+                             <div class="assemble-summary-row__icon-placeholder--right OSInline" id="b2-b4-b7-b10-Placeholder_Icon_Right">
-                          </div>
+                          </a>
+                      <div data-container="" id="b2-b4-DIV_SubdivisionSpecialAttendee__Content">
+                       <div class="OSBlockWidget" data-block="Assemble.AssembleEventDetail_LocalitiesList" id="b2-b4-$b12">
+                        <div class="margin-bottom-base text-neutral-7 font-semi-bold" data-container="" id="b2-b4-b12-DIV_InvitedLocalities__Header">
+                         <div id="b2-b4-b12-Header">
+                          Interchange Meetings
+                         </div>
+                        </div>
+                        <div class="margin-top-s" data-container="" id="b2-b4-b12-DIV_InvitedLocalitiesList">
+                         <div data-container="" id="b2-b4-b12-DIV_Localities__List">
+                          <div class="list list-group list-sticky-records margin-bottom-s OSFillParent" data-list="" data-virtualization-disabled="" id="b2-b4-b12-ListLocalities">
+                           <div data-container="">
+                            <div data-container="" id="b2-b4-b12-l1-146001_0-DIV_Locality">
+                             <div class="OSBlockWidget" data-block="Assemble.AssembleEventDetail_LocalitySubdivisionList" id="b2-b4-b12-l1-146001_0-$b1">
+                              <div class="list-sticky-records__sticky-record" data-container="" id="b2-b4-b12-l1-146001_0-b1-DIV_Locality_Header" style="cursor: pointer;">
... 136 more lines: git diff 2fe9efaf -- migration/screens/AssembleDetail/analysis/dom
```

## Decisions for this item

- none

## Allowed write paths

- `app/src/pages/AssembleDetail/**`
- `migration/screens/AssembleDetail/**`
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
- Page layout: `app/docs/guides/page-template.md`; patterns: `migration/patterns/P-*.md`; the route spec: `migration/screens/AssembleDetail/route-spec.md`; the pack: `migration/screens/AssembleDetail/pack.md`.

## Quick checks (developer, before the report)

```
export PATH=$HOME/.nvm/versions/node/v24.21.0/bin:$PATH
npm --prefix app run typecheck
cd app && npx vitest run <the test files of the changed code> && cd ..
cd app && npx eslint <the changed files> && cd ..
npm --prefix app run arch
python3 tools/pipeline/route.py parity AssembleDetail --app http://localhost:5173      # every state: 0 unexempted differences
```

## Gate (tester)

```
curl -s -o /dev/null -w '%{http_code}' http://localhost:5173/UBTConnect/HomeFeed   # 200, and lsof -p <pid> -a -d cwd = <root>/app
python3 tools/sync/sync.py scope AssembleDetail      # computes --base and the --allow list of the items active NOW
python3 tools/pipeline/route.py parity AssembleDetail --app http://localhost:5173
python3 tools/pipeline/consistency_check.py --screen AssembleDetail
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

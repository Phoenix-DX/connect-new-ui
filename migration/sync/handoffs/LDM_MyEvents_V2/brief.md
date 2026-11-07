# Brief: LDM_MyEvents_V2 (class B: mock data drift: fix the fictional data or mocks; loop 1/2)

| Field | Value |
|---|---|
| Route | `LDM_MyEvents_V2` (`http://localhost:5173/UBTConnect/LDM_MyEvents_V2`) |
| Dev model | opus |
| baseCommit | `343a04aa1ad3e633274ebce518fc1351f1b71900` |
| Capture base (before the re-capture) | `2fe9efafbe44ea41859470495e6133cb2fcaaa8f` |
| States with diffs | default:34 |
| Kinds | structure, text, style, layout, position, pixel, call |
| Changed TST files | `UBTConnect_Utils.CW_CTA_PopUps.ContactByMessage_Wrapper.mvc.js` |
| Other routes that use those files | AssembleDetail, HouseholdCarousel, HouseholdDetails, LDM_EventDetail_V2, OneSchoolGlobalCarousel, OneSchoolGlobalDetails, Profile, SupperMeeting_Carousel, SupperMeeting_Details |
| Handoff folder | `migration/sync/handoffs/LDM_MyEvents_V2` |
| Note | M: one more past-event group, 13 Guests; ActionGetAllApplicationEvents 0 to 2 unsure. Q8 |

## What changed in TST (parity reports of the fresh capture)

- `default.json` (2026-11-07T02:19:26.774Z): no counts; pixels 1.73%, worst tile 58.5%; calls expected 11 actual 9; exemptions used 6
- `loading.json` (2026-11-07T02:19:29.690Z): no counts; pixels 0%, worst tile 0%; exemptions used 1
- `offline.json` (2026-11-07T02:19:33.556Z): no counts; pixels 0.01%, worst tile 0.7%; exemptions used 5

## DOM diff per state (old capture → new capture)

```
.../screens/LDM_MyEvents_V2/analysis/calls.json    |  49 ++++--
 .../LDM_MyEvents_V2/analysis/dom/default.html      | 193 ++++++++++++++++-----
 .../LDM_MyEvents_V2/analysis/dom/default.raw.html  |   2 +-
 .../LDM_MyEvents_V2/analysis/dom/offline.html      |  72 ++++----
 .../LDM_MyEvents_V2/analysis/dom/offline.raw.html  |   2 +-
 5 files changed, 213 insertions(+), 105 deletions(-)
```
```diff
-                       ••••• ••••
+                       •••••••• ••••
-                      <div class="OSBlockWidget" data-block="LDM_Blocks_V2.EventCard_V2" id="b1-b9-l3-73_0-l3-97_0-ListItem_PastEvents">
-                       <div class="OSBlockWidget" data-block="LDM_Blocks.EventCard_Box" id="b1-b9-l3-73_0-l3-97_0-b4-$b1">
+                      <div class="OSBlockWidget" data-block="LDM_Blocks_V2.EventCard_V2" id="b1-b9-l3-73_0-l3-99_0-ListItem_PastEvents">
+                       <div class="OSBlockWidget" data-block="LDM_Blocks.EventCard_Box" id="b1-b9-l3-73_0-l3-99_0-b4-$b1">
-                         <div id="b1-b9-l3-73_0-l3-97_0-b4-b1-CardContents">
-                          <div class="OSBlockWidget" data-block="LDM_Blocks_V2.EventCard_Info_V2" id="b1-b9-l3-73_0-l3-97_0-b4-$b2">
+                         <div id="b1-b9-l3-73_0-l3-99_0-b4-b1-CardContents">
+                          <div class="OSBlockWidget" data-block="LDM_Blocks_V2.EventCard_Info_V2" id="b1-b9-l3-73_0-l3-99_0-b4-$b2">
-                              •••••••• •••• •• •••••••••••
+                              •••••• •••• •• •••••••
-                              ••••••••• •• •••• ••••
+                              ••••••• •• ••••••• ••••
-                             <div class="event-card-info-item-name-location" data-container="" id="b1-b9-l3-73_0-l3-97_0-b4-b2-NameLocation">
+                             <div class="event-card-info-item-name-location" data-container="" id="b1-b9-l3-73_0-l3-99_0-b4-b2-NameLocation">
-                                Allocation Pending
+                                ••••••• •••• • ••••••
-                                •••••••••••••
+                                •••••••••
-                          <div class="OSBlockWidget" data-block="LDM_Blocks.EventCard_Guests" id="b1-b9-l3-73_0-l3-97_0-b4-$b3">
+                          <div class="OSBlockWidget" data-block="LDM_Blocks.EventCard_Guests" id="b1-b9-l3-73_0-l3-99_0-b4-$b3">
-                                4 Guests
+                                13 Guests
-                              <div class="OSBlockWidget" data-block="Widgets.OverlappingImages" id="b1-b9-l3-73_0-l3-97_0-b4-b3-$b1">
-                               <div class="list list-group OSFillParent" data-list="" data-virtualization-disabled="" id="b1-b9-l3-73_0-l3-97_0-b4-b3-b1-ImageList">
-                                <div class="overlapping-photo-cropper" data-container="" style='width: max(30px, 7vw); height: max(30px, 7vw); background-image: url("https://d23bplak01dwmt.cloudfront
+                              <div class="OSBlockWidget" data-block="Widgets.OverlappingImages" id="b1-b9-l3-73_0-l3-99_0-b4-b3-$b1">
+                               <div class="list list-group OSFillParent" data-list="" data-virtualization-disabled="" id="b1-b9-l3-73_0-l3-99_0-b4-b3-b1-ImageList">
+                                <div class="overlapping-photo-cropper" data-container="" style='width: max(30px, 7vw); height: max(30px, 7vw); background-image: url("https://d23bplak01dwmt.cloudfront
+                                </div>
+                                <div class="overlapping-photo-cropper" data-container="" style='width: max(30px, 7vw); height: max(30px, 7vw); background-image: url("https://d23bplak01dwmt.cloudfront
+                                </div>
+                                <div class="overlapping-photo-cropper" data-container="" style='width: max(30px, 7vw); height: max(30px, 7vw); background-image: url("https://d23bplak01dwmt.cloudfront
+                                </div>
+                                <div class="overlapping-photo-cropper" data-container="" style='width: max(30px, 7vw); height: max(30px, 7vw); background-image: url("https://d23bplak01dwmt.cloudfront
-                       •••• ••••
+                       ••••••••• ••••
-                      <div class="OSBlockWidget" data-block="LDM_Blocks_V2.EventCard_V2" id="b1-b9-l3-73_1-l3-99_0-ListItem_PastEvents">
-                       <div class="OSBlockWidget" data-block="LDM_Blocks.EventCard_Box" id="b1-b9-l3-73_1-l3-99_0-b4-$b1">
+                      <div class="OSBlockWidget" data-block="LDM_Blocks_V2.EventCard_V2" id="b1-b9-l3-73_1-l3-101_0-ListItem_PastEvents">
+                       <div class="OSBlockWidget" data-block="LDM_Blocks.EventCard_Box" id="b1-b9-l3-73_1-l3-101_0-b4-$b1">
-                         <div id="b1-b9-l3-73_1-l3-99_0-b4-b1-CardContents">
-                          <div class="OSBlockWidget" data-block="LDM_Blocks_V2.EventCard_Info_V2" id="b1-b9-l3-73_1-l3-99_0-b4-$b2">
+                         <div id="b1-b9-l3-73_1-l3-101_0-b4-b1-CardContents">
+                          <div class="OSBlockWidget" data-block="LDM_Blocks_V2.EventCard_Info_V2" id="b1-b9-l3-73_1-l3-101_0-b4-$b2">
-                              ••••••••• •••• •• •••••••••••
+                              •••••• ••• •••• •• •••••••
-                              •••••••••• •• ••• ••••
+                              ••••••• • •••••••• ••••
-                             <div class="event-card-info-item-name-location" data-container="" id="b1-b9-l3-73_1-l3-99_0-b4-b2-NameLocation">
+                             <div class="event-card-info-item-name-location" data-container="" id="b1-b9-l3-73_1-l3-101_0-b4-b2-NameLocation">
-                                Allocation Pending
+                                ••••••• ••• • •••••••
-                                •••••••••••••
+                                •••••••••
-                          <div class="OSBlockWidget" data-block="LDM_Blocks.EventCard_Guests" id="b1-b9-l3-73_1-l3-99_0-b4-$b3">
+                          <div class="OSBlockWidget" data-block="LDM_Blocks.EventCard_Guests" id="b1-b9-l3-73_1-l3-101_0-b4-$b3">
-                                6 Guests
+                                13 Guests
... 209 more lines: git diff 2fe9efaf -- migration/screens/LDM_MyEvents_V2/analysis/dom
```

## Decisions for this item

- Q4: Exemptions: (1) call ActionGetAllApplicationEvents x2 at load from TST's image-error chain (precedent CALL-IMAGE-ERROR-APPEVENTS-EVENTDETAIL) scoped to this route; (2) widen DATA-GUEST-PHOTO-LDM-MYEVENTS-V2-PIXEL regex to ^[01]\.\d\d% (19 guest photos now, 1.48%). a: add both (master) / b: leave → **ok all (2026-11-07, the decision table of the Opus + Fable review: Q1 a with conditions, Q2/Q3 a, Q4 a with a pinned regex, Q6 a, Q7 a + registry default on, Q8 d storage wrapper, Q4-old b, Q7-old c then a)** (user, 2026-11-07T09:10:29)

## Allowed write paths

- `app/src/pages/LDM_MyEvents_V2/**`
- `migration/screens/LDM_MyEvents_V2/**`
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
- Page layout: `app/docs/guides/page-template.md`; patterns: `migration/patterns/P-*.md`; the route spec: `migration/screens/LDM_MyEvents_V2/route-spec.md`; the pack: `migration/screens/LDM_MyEvents_V2/pack.md`.

## Quick checks (developer, before the report)

```
export PATH=$HOME/.nvm/versions/node/v24.21.0/bin:$PATH
npm --prefix app run typecheck
cd app && npx vitest run <the test files of the changed code> && cd ..
cd app && npx eslint <the changed files> && cd ..
npm --prefix app run arch
python3 tools/pipeline/route.py parity LDM_MyEvents_V2 --app http://localhost:5173      # every state: 0 unexempted differences
```

## Gate (tester)

```
curl -s -o /dev/null -w '%{http_code}' http://localhost:5173/UBTConnect/HomeFeed   # 200, and lsof -p <pid> -a -d cwd = <root>/app
python3 tools/sync/sync.py scope LDM_MyEvents_V2      # computes --base and the --allow list of the items active NOW
python3 tools/pipeline/route.py parity LDM_MyEvents_V2 --app http://localhost:5173
python3 tools/pipeline/consistency_check.py --screen LDM_MyEvents_V2
npm --prefix app run typecheck && npm --prefix app run arch && (cd app && npx eslint <changed files> && npx vitest run <changed tests>)
```
Diff review: no edit of `migration/parity-exemptions.json`, `app/src/mocks/fixtures/**`, `app/src/api/openapi.yaml`, `app/public/UBTConnect/css/**`, `app/package.json`; no deleted test; nothing outside the allowed paths; `@origin` kept; no secrets.

## Fix loop 1: the last test result

## Result
status: fail
summary: Scope, parity (all states 0), typecheck, arch, eslint and vitest pass. consistency_check does not print OK: 2 NO-WIRE-IN-COMPONENTS problems in hooks/useLdmMyEvents.ts:189 and hooks/myTimelineFiltersState.ts:9. Neither file is in the diff of this item (no entry in git status); the gate still requires OK.

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

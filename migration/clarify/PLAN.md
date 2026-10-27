# Clarify screens: verify the React app against the OutSystems model, by UI flow

Status: **proposed** (2026-10-27). Not started until the user says start.
Branch: `clarify-screens`. Folder: `migration/clarify/`.

This work is independent of `migration/screens/` (the route specs of the migration). Agents of this work do not read
`migration/screens/**/route-spec.md`.

## 1. Goal

Check that every screen of `app/src/pages/` does what the OutSystems screen does. The check covers the screen actions,
the validations, the business logic, the navigation and the data calls. Do this per UI flow of the module
`UBTConnect`, as Service Studio shows it through the MCP. Write one report per UI flow. Then write one picture of the
current front-end architecture. Add the infrastructure that the front end still needs to behave like the OutSystems
app.

## 2. Sources, in order of authority

| # | Source | Use | Note |
|---|---|---|---|
| 1 | OutSystems MCP (Service Studio, module `UBTConnect`, environment **DEV**) | The checklist: screens, blocks, actions, validations, roles, variables | Read-only calls. DEV is reference; when DEV and TST differ, TST wins and the report notes the difference (CLAUDE.md). |
| 2 | TST compiled code (`capture/survey-UBTConnect.json`, `migration/runtime-sources/`) | Confirms what TST runs when the DEV model differs | Known differences: Bookmarks branch, 3 DEV-only screens, LDM V1 vs V2 |
| 3 | `../ubt_sharing_kb/connect/outsystems/apps/*` (os-kb, extracted from DEV 2026-10-05) | Business rules (`rules/BR-UBTCON-*`), UI pages per flow (`ui/*.md`), validation (`xcut/validation.md`), contracts, and the **referenced modules** (`connect2-services`, `connect2-legacy`, …) | 586 rules for UBTConnect. Cite the rule id. Never copy `.extract/raw`. |
| 4 | `app/src/` | The thing under test | Pages, containers, components, `api/<domain>`, `platform/`, `lib/`, mocks |

Facts go to the report with evidence (MCP element name, `file:line`, rule id). No guess: an item without evidence is
`unclear`, with a question for the user.

## 3. Inventory (MCP `getScreenNames`, 2026-10-27)

32 UI flows hold the 84 screens of DEV. 64 screens are built in `app/src/pages/`. 22 DEV screens are not built;
all 22 have `decision=skip` on the board with a reason (dead, variant, or V1 replaced by V2). 2 built screens exist on
TST only (`MyBookmarks`, `BookmarksByGroup`; DEV has the `Bookmarks` branch instead). 12 more flows hold only blocks
(`App_Cache`, `App_CommonBlocks_Filter`, `App_Common_Blocks`, `SubLayout`, `Directory_Caroussel`, …).

| Group | UI flow | Screens built / on DEV | Not built (board: skip) |
|---|---|---|---|
| G1 core | App_Common | 2/3 | InvalidPermissions |
| G1 core | App_PIN | 3/3 | |
| G1 core | App_Policies | 1/1 | |
| G1 core | Home | 2/2 | |
| G1 core | App_Menu | 3/3 | |
| G1 core | App_Menu_ContactUs | 2/2 | |
| G1 core | App_Notifications | 1/2 | NotificationDetails |
| G1 core | App_Profile | 1/1 | |
| G1 core | App_Services | 1/1 | |
| G2 directory | Directory_Locality | 5/5 | |
| G2 directory | Directory_Household | 3/3 | |
| G2 directory | Directory_Search | 1/1 | |
| G2 directory | Directory_Photobook | 1/1 | |
| G2 directory | Directory_SupperMeetings | 2/2 | |
| G2 directory | Directory_OneSchoolGlobal | 1/3 | OneSchoolGlobalCarousel, OneSchoolGlobalEventDetail |
| G2 directory | Directory_Updates | 1/1 | |
| G3 content | Bookmarks (+ TST MyBookmarks, BookmarksByGroup) | 0/1 (+2 TST) | Bookmarks (DEV branch) |
| G3 content | Notes | 1/1 | |
| G3 content | Calendar | 1/2 | MyCalendar |
| G3 content | ContactFlow | 5/6 | ContactByEmailContacts |
| G3 content | Legacy_Share | 2/2 | |
| G3 content | Legacy_MyNotificationsFlow | 2/2 | |
| G4 legacy events | Legacy_OrbitEventsFlow | 10/11 | PassportScan |
| G4 legacy events | Legacy_OrbitAdminFlow | 2/4 | OrbitAdminMilestoneDetail, OrbitAdminMilestones |
| G4 legacy events | Legacy_OrbitQRCodeFlow | 1/1 | |
| G4 legacy events | Legacy_LDMEventsFlow | 1/4 | LDM_Email, LDM_EventDetail, LDM_MyEvents (V1; EmailTarget is built) |
| G4 legacy events | Legacy_LDMEventsFlow_V2 | 3/3 | |
| G4 legacy events | Legacy_AssembleFlow | 3/3 | |
| G5 not built | Map | 0/1 | Map (C2EnableMaps=false on TST) |
| G5 not built | Deprecated_Calendar_PersonalEvent | 0/5 | all 5 (flag off, dead) |
| G5 not built | zTemp_Flow | 0/2 | ShareObject, TestOpenShare |
| G5 not built | zDEV_Directory_CommunityBusinessBlocks | 1/2 | CommunityBusinessDetails |

G5 flows get a short gap report (what exists on DEV, why it is not built, what a build needs). The 12 block-only flows
get one cross-cut report (`flows/_shared-blocks/report.md`); each screen report lists the blocks it uses.

## 4. What one flow report checks

For every screen of the flow, and for every block of the flow that a built screen uses:

| Area | Items from the model | Checked against |
|---|---|---|
| Identity | roles, input parameters, URL pattern, title, lifecycle handlers (OnInitialize, OnReady, OnRender, OnDestroy) | `app/src/app/routes.ts` meta, page `inputs.ts`, page hooks |
| UI tree | block instances with their arguments, If widgets and conditions, lists and their sources, inputs with their validations | page JSX, containers, components |
| Data | data actions and aggregates → server or service actions → entities; fetch order (OnInitialize vs OnReady), `FetchAtStart`, refresh calls | `api/<domain>` repository, keys, hooks; mocks |
| Screen actions | each action: trigger, node sequence (assign, if, switch, call, JS, message, navigation, exception handler), transition | page hooks and handlers, `platform/navigation` |
| Validations | built-in widget validations (mandatory, type, length), custom validation nodes, `OSValidation` messages, feedback messages | components `ui/os/validation`, page logic |
| Business logic | module client actions called (transitively), their rules (`BR-UBTCON-*`), client variables read or set, local storage entities | `lib/<module>`, `platform/*`, `api/*` |
| Events | block events and their handlers, timers, push and deep-link entry points | containers, `platform/session`, `pwa/` |
| Strings | user-visible texts, messages, confirmations | page and component text |

Each item gets one verdict:

| Verdict | Meaning |
|---|---|
| `match` | The React app does the same thing; evidence `file:line` |
| `partial` | Present, but a branch, a message or a parameter differs; the difference is named |
| `missing` | Not in the React app |
| `differs` | The React app does something else on purpose (an ADR, a change request or a user decision names it) |
| `mock-only` | Present in the UI, but the server side is a mock; the backend call that production needs is named |
| `n/a` | Not applicable by a user decision (board `skip`, flag off on TST); the decision is cited |
| `unclear` | No evidence either way; question for the user |

## 5. Phases

### P0 Setup (one session)

1. Dump the module once: MCP `getSerializedObject` (eSpace `UBTConnect`, about 13.5 MB) → `migration/tools/mcp/unwrap.py`
   → `migration/clarify/.dump/espace.json` (gitignored; DEV model, reference only).
2. `migration/clarify/tools/flow_pack.py`: from `espace.json`, write one pack per UI flow in `flows/<Flow>/pack/`.
   Files: `screens.md` (one section per screen, all items of §4) and `blocks.md`. Also `actions.md` (module client
   actions the flow calls, with their node flows), `data.md` (data actions → server/service actions → entities) and
   `strings.md`.
   The pack keeps dead branches and marks them (`IsDisabled`, `If(False)`), because the report must say they exist.
3. `migration/clarify/tools/app_index.py`: for each built screen, the React files of the screen: page folder, hooks,
   containers, components, `api` domain, mocks, route meta, flags. Output `flows/<Flow>/pack/app.md`.
4. `migration/clarify/tools/kb_index.py`: the KB pages and rule ids that name the flow's screens, blocks and actions
   (from `../ubt_sharing_kb/.../UBTConnect/ui/*.md`, `rules/`, `xcut/validation.md`, and the referenced modules).
   Output `flows/<Flow>/pack/kb.md`.
5. Report template `templates/report.md` and checklist schema `templates/checklist.schema.json`; agent brief
   `AGENT.md` (what to read, what not to read, verdict rules, evidence rules, no secrets, no guesses).
6. **Pilot on `App_PIN`** (3 screens, 4 blocks). The user reviews the report format before the fan-out.

### P1 Flow reports (4 waves)

- One agent per flow; at most 10 in parallel (user, 2026-10-22). Waves = groups G1 → G2 → G3 → G4; G5 reports are
  written by the orchestrator (short).
- An agent reads only: its pack, `AGENT.md`, the template, the React files its pack names, the KB pages its pack
  names. It writes `flows/<Flow>/report.md` and `flows/<Flow>/checklist.json` (one row per item: area, screen,
  element, verdict, evidence, note, question).
- Live check: a reviewer pass reads every `missing`, `differs` and `unclear` row again from the MCP (`getScreen`,
  `getClientAction`, `getWebBlock`). It confirms or corrects the row. The report marks these rows `verified: live`.
- After each flow: `ledger.py add --screen <Flow> --phase verify --tokens …`.
- After each wave: a wave summary to the user (counts by verdict, the questions for the user, DEV≠TST notes).

### P2 Synthesis

1. `INDEX.md`: matrix UI flow × verdict counts, link to every report, the open questions, the DEV≠TST list.
2. `architecture-current.md`: the front end as built, written from the code and not from the old docs. Content: C4
   context and containers; the folders of `app/src/`; the request path (screen → hook → repository → `callAction` →
   MSW); session and PIN; route guard; flags; settings; local entities; PWA and service worker; what is mock and what
   is real.
3. `infra-gaps.md`: what must exist outside the front end so that it behaves like the OutSystems app. One row per
   capability: the flows that need it, the OutSystems element that gives it today, the status in React. Capabilities:
   - backend for the service and server actions (`api/openapi.yaml` contract)
   - identity (B2C login, callback, session)
   - PIN and biometrics (device plugin today)
   - push notifications and `Wrapper_NotificationOpened`
   - deep links and app links; share
   - camera and scanner (`PassportScan`, QR); documents and files
   - send of emails
   - local storage and offline sync
   - site properties and feature flags
   - audit and logs; timers; static assets and CDN; monitors and alerts
4. A Vietnamese summary in chat; the files stay in English (style-rules).

### P3 Hand-over

Context note `migration/contexts/context-05N-clarify-screens.md`, `INDEX.md` row, ledger report, one local commit
per wave on `clarify-screens`. No push.

## 6. Folder

```
migration/clarify/
  PLAN.md  AGENT.md  INDEX.md  architecture-current.md  infra-gaps.md
  templates/  tools/  .dump/ (gitignored)
  flows/<Flow>/pack/   flows/<Flow>/report.md   flows/<Flow>/checklist.json
  flows/_shared-blocks/report.md
```

## 7. Estimates

| Phase | Sessions | Agents | Tokens (rough) |
|---|---|---|---|
| P0 | 1 | 1 (Sonnet for the scripts) + pilot (Opus) | 0.6 M |
| P1 | 4 waves, about 1 h each | 28 flow agents (Opus) + reviewer passes | 5–8 M (150–300 k per flow; Home, Directory_Locality, Legacy_OrbitEventsFlow are the large ones) |
| P2 | 1 | orchestrator | 0.5 M |

## 8. Decisions for the user (open)

| # | Question | Options | Recommendation |
|---|---|---|---|
| D1 | Checklist source when DEV and TST differ | a) DEV wins b) TST wins, difference noted | b (CLAUDE.md rule) |
| D2 | Scope of flows | a) 28 flows with built screens b) all 32 + block-only flows (G5 short) | b |
| D3 | Logic that lives in referenced modules (legacy wrapper screens: `Connect2_*_MUI`, `UBT_AppManager`) | a) name only, mark `not in module` b) read it from the KB of the referenced module, and from the MCP where a block is referenced | b, otherwise the G4 reports are empty |
| D4 | Pilot before the fan-out | a) yes, App_PIN b) no, start wave G1 | a |
| D5 | Models | a) Opus for flow agents, Sonnet for scripts b) Sonnet for all | a (judgment per item) |
| D6 | Old specs | a) agents never read `migration/screens/**` b) allowed as a hint | a (the user asked for independent specs) |

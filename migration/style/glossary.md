# Glossary: one term, one meaning

Status: **approved by the user** (2026-10-21).
Writers and reviewers use only these terms for these meanings. A term that is not in this file is a normal English word.
Counts in brackets are uses in the specs and docs before the rewrite.

## 1. The two apps

| Use | Meaning | Do not use for this meaning |
|---|---|---|
| original app | The UBTConnect OutSystems app. | old app, source app |
| TST | The test environment of the original app. TST is the source of truth for facts. | — |
| DEV | The development environment. The OutSystems MCP reads DEV. Use DEV facts only as reference. | — |
| React app | The new app in `app/`. | clone (40), new app, port (noun) |
| port (verb) | Rebuild one behavior of the original app in the React app. "The React app ports X." | copy, clone |

## 2. Screens and navigation

| Use | Meaning | Do not use for this meaning |
|---|---|---|
| screen | One OutSystems screen, and its React screen component. | page (78), view (when it means a screen) |
| route | The URL path of a screen (`/UBTConnect/<Screen>`). Also the unit of work of `route.py`. | — |
| compiled view | The `mvc$view` part of a compiled OutSystems file. This is the only meaning of "view". | — |
| shell | The frame that all screens share: start, sign-in, PIN, navigation, network status. Spec: `migration/app-shell.spec.md`. | frame, wrapper |
| layout | An OutSystems layout block, for example `Layout_HomePage`. | template |
| placeholder | A named area of a block or layout. The screen puts content into it. | slot |
| bottom bar | The tab bar at the bottom of the screen (`BottomBarMenu`). | footer menu, tab menu |
| transition | The animation between two screens. | — |

## 3. UI parts

| Use | Meaning | Do not use for this meaning |
|---|---|---|
| block | An OutSystems block: a UI part that screens use again. | widget (when it means a block) |
| shared component | The React version of a block, in `app/src/shared/`. | — |
| platform widget | An OutSystems built-in widget: List, Container, Link, Button. | — |
| OSUI pattern | A pattern of the OutSystems UI library, for example Carousel or BottomSheet. | — |
| project pattern | A rule of this project, `P-<NAME>` in `migration/patterns/`. | — |
| dialog | A window on top of the screen. The user must close it or answer it. | popup (162), modal. Keep "Popup" only in OutSystems names. |
| bottom sheet | A panel that comes up from the bottom of the screen, for example the Share sheet. | — |
| renders | Puts an element in the DOM. A rendered element can still be hidden. | — |
| shows / hides | Makes an element visible / not visible to the user. | displays, appears (as a verb for "shows") |
| click | The user activates a control (touch or pointer). | tap (6), press, touch |
| select | The user chooses one item from a list or a set of options. | pick, choose |

## 4. Data and calls

| Use | Meaning | Do not use for this meaning |
|---|---|---|
| call | One request from the app to the server: a data action, a server action or a service action. | endpoint |
| API contract | `app/src/api/openapi.yaml`: all calls with their inputs and outputs. | — |
| data action, aggregate, screen action, client action, server action, service action | OutSystems names. Keep them as they are. | — |
| client variable, site property, static entity, local storage entity | OutSystems names. Keep them as they are. | — |
| mock | A fake server response in the React app (`app/src/mocks/`). Mocks replace the server in the demo. | stub, fake |
| fixture | A data file with recorded and anonymized data. Mocks and tests use fixtures. | sample data |
| flag | A feature flag of the original app, for example `C2ExtendedShare`. | toggle (keep "toggle" only for a UI control) |
| variant | A version of a screen that depends on flags or data. | — |

## 5. Capture, comparison and decisions

| Use | Meaning | Do not use for this meaning |
|---|---|---|
| capture | The recorded state of an original screen: DOM, styles, screenshot and calls. Also the verb. | snapshot |
| screenshot | The image of a capture only. | shot |
| state | One captured condition of a screen: default, loading, offline, and others. | — |
| parity | The automatic comparison of a capture with the React screen (`route.py parity`). | — |
| exemption | A recorded and accepted parity difference (`migration/parity-exemptions.json`). | waiver |
| finished | The user tested the route and confirmed it (`route.py finish`). | done, complete (for routes) |

## 6. People and domain

| Use | Meaning |
|---|---|
| user | The person who uses the app. |
| member | A person in the directory data. The user is also a member, but use "user" for the person who uses the app. |
| household, locality, subdivision, country | Directory data. Keep as names. |
| Supper Meeting, OneSchoolGlobal (OSG), Feed CMS, Updates, Notes, Bookmarks, Photobook, Services | Features of the app. Keep as names. |
| Orbit, Assemble | Event programs. Their screens are UBTConnect screens (user, 2026-10-16). |
| LDM | Lord's Day Meal (user, 2026-10-21). |

## 7. Certainty labels

Every fact has a label or an evidence reference.

| Label | Meaning |
|---|---|
| Observed | Seen in a TST capture or recording. Give the state or file. |
| Code | Read in compiled code. Give the reference, for example `[HF:150-153]`. |
| Assumption | Not verified. Give the reason. |
| Unclear | Not known. Write a question; do not guess. |

## 8. Identifiers (keep exactly as written)

| Prefix | Meaning | Where |
|---|---|---|
| D<n> | Scope decision | `migration/scope-review.md` |
| V<n><x> | Scope round (from the Vietnamese "vòng") | `migration/scope-plan.md`, board reasons |
| F<n> | Foundation change batch | contexts, `migration/change-requests/` |
| CR-<Route>-<n> | Change request | `migration/change-requests/` |
| ADR-<n> | Architecture decision record | `migration/architecture.md` |
| P-<NAME> | Project pattern | `migration/patterns/` |
| Q<n>, F<n> in a route | Question, feedback item of one route | `migration/screens/<Route>/questions.md`, `feedback.md` |
| U<n> | Shell fact | `migration/knowledge/shell-facts.md` |
| B<n> | Known bug of the original app | `app/docs/known-original-bugs.md` |
| E-<id> | Expression in the compiled code | route analysis |
| `$b<n>`, `b<n>-$b<m>` | Block instance in the captured DOM | route specs |

## 9. Vietnamese → English (for the translation of Vietnamese documents)

| Vietnamese | English |
|---|---|
| màn, màn hình | screen |
| hành trình | user journey |
| vòng | round |
| đợt | wave (a group of screens built together) |
| chốt | decide; decided |
| phạm vi | scope |
| bỏ qua, skip | skip |
| mở lại | reopen |
| bằng chứng | evidence |
| giả định | assumption |
| quyết định | decision |
| đề xuất | recommendation |
| rẽ nhánh | branch |
| cờ | flag |

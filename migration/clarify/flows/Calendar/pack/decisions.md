# Recorded decisions and facts that name the elements of UI flow Calendar

Sources a `differs` row may cite (outside `migration/screens/`). Lines are `file:line: text` (word match of the
screen or block name; the text is cut at 300 characters). A code comment is not a decision.

## board

- `migration/board.md:75` (MyCalendar): | MyCalendar | `/UBTConnect/MyCalendar` |  | 85 |  | skip | V7 · skip:dead · replaced by MyEntertaining; revisit if a link to MyCalendar appears (user, 2026-10-14) | - |  |
- `migration/board.md:18` (MyEntertaining): | MyEntertaining | `/UBTConnect/MyEntertaining` | 3 | 57 | lite | build | V3a · D8(b): embed-entertaining.js = same-size mock, real embed pluggable later (user, 2026-10-14) | built | route-myentertaining |
- `migration/board.md:75` (MyEntertaining): | MyCalendar | `/UBTConnect/MyCalendar` |  | 85 |  | skip | V7 · skip:dead · replaced by MyEntertaining; revisit if a link to MyCalendar appears (user, 2026-10-14) | - |  |

## change requests

- `migration/change-requests/CR-Search-1.md:45` (MyEntertaining): - Regression parity run on: Login, PINUnlock, PINRegister, Splash, HomeFeed, MyEntertaining (see the foundation report).
- `migration/change-requests/CR-Services-1.md:44` (MyEntertaining): - Regression parity run on: Login, PINUnlock, PINRegister, Splash, HomeFeed, MyEntertaining (see the foundation report).
- `migration/change-requests/CR-Search-3.md:27` (MyEntertaining): captures have the first screen's load calls before AfterInitialize (calls.json of Search, HomeFeed, MyEntertaining);
- `migration/change-requests/CR-Search-3.md:34` (MyEntertaining): - Parity: Search 0 in all states (call 0); regression 0 on Login, PINUnlock, PINRegister, Splash, HomeFeed, MyEntertaining.
- `migration/change-requests/CR-HomeFeed-1.md:8` (MyEntertaining_Embedded): Calendar.MyEntertaining_Embedded, Home.FeedBlock_Services; OpenApp in Dialog_GoExternalApp (HomeFeed own block)

## knowledge

- `migration/knowledge/static-entities.md:24` (MyCalendar): - `Connect_Services_CS.Connect_Services` (Text identifier = record name): Orbit, LDM, MyCalendar, Assemble, OrbitAdmin,
- `migration/knowledge/static-entities-tst.json:2882` (MyCalendar): "myCalendar": "MyCalendar",
- `migration/knowledge/feature-flag-helpers.md:29` (MyCalendar): | GetHasPersonalEvents | outSystems_FF.C2EnablePersonalEvents | false | Calendar | MyCalendar personal events (deprecated area) |
- `migration/knowledge/navigation.md:28` (MyEntertaining): - The `NavigateTo_MyCalendar…` handlers (AssembleEvents, LDM_MyEvents, LDM_MyEvents_V2, OrbitLanding) open MyEntertaining. [MCP]
- `migration/knowledge/audit-a1-empty-handlers.md:46` (MyEntertaining): | `screens/MyEntertaining/components/Embedded_MyEntertaining.tsx:129` | embed `onResize` | Embedded_MyEntertaining.mvc.js:1272-1274: empty JS callback ("autoResize is false by design") |
- `migration/knowledge/audit-a1-empty-handlers.md:47` (MyEntertaining): | `screens/MyEntertaining/components/connect2Entertaining.ts:84` | stand-in `refreshToken` | mock embed SDK (decision Q1 A), not an OutSystems handler |
- `migration/knowledge/auto-decisions-2026-10-16.md:20` (MyEntertaining): | MyEntertaining (user, 2026-10-16: "update các màn hình như My Entertainment data vì tôi ko thấy có data nào" (English: "update the screens such as My Entertainment data, because I do not see any data")) | mock content for the embedded calendar | user request, no decision |
- `migration/knowledge/auto-decisions-2026-10-16.md:21` (MyEntertaining): | MyEntertaining pixel after the stand-in content | **A (recommended)**: ignoreSubtrees MYENT-D8B-IFRAME-PIXEL (embed block, default) | |
- `migration/knowledge/runtime-sources.md:27` (MyEntertaining): | `UBTConnect_EmbedMyEntertaining.controller.js` | — | MyEntertaining embed module actions (the external embed-entertaining.js is not a TST file: D8(b) mock) |

## flags

- `migration/flags.md:20` (MyCalendar): | `action:getHasPersonalEvents` (candidate) | flag check action | MyCalendar | - | open | - | **open** |
- `migration/flags.md:51` (MyCalendar): | `action:toggleCalendarMenu` (gone) (candidate) | flag check action | MyCalendar | - | open | - | **open** |
- `migration/flags.md:60` (MyCalendar): | `action:toggleMonthSelector` (gone) (candidate) | flag check action | MyCalendar | - | open | - | **open** |
- `migration/flags.md:69` (MyCalendar): | `action:toggle_Calendar_MenuOptions` (gone) (candidate) | flag check action | MyCalendar | - | open | - | **open** |
- `migration/flags.md:93` (MyCalendar): | `action:getFlagURLByCountryCode` (candidate) | flag check action | Bookmarks, BrowseCountries, CountryDetails, CountryList, Map, MyCalendar, Notes, Notifications … | - | unavailable: not a feature flag: country flag image URL | - | not a flag (false positive): country flag image URL; behaviour bui
- `migration/flags.md:104` (MyCalendar): | `action:getHasNewLDM` (candidate) | flag check action | HomeFeed, LDM_MyEvents, MessageDetail, MyCalendar | ldm_myevents | unavailable: C2NewLDM: LDM V2 / V1 entry (LDM external) | tst=on, prod=? | default-only: TST value on (user, 2026-10-14) |
- `migration/flags.md:145` (MyCalendar): - `action:getHasNewLDM`: `UBTConnect.Calendar.MyCalendar.mvc.js`, `UBTConnect.Home.FeedBlock_Services.mvc.js`, `UBTConnect.Legacy_LDMEventsFlow.LDM_MyEvents.mvc.js`, `UBTConnect.Legacy_MyNotificationsFlow.MessageDetail.mvc.js`
- `migration/flags.md:150` (MyCalendar): - `action:getHasPersonalEvents`: `UBTConnect.Calendar.MyCalendar.mvc.js`
- `migration/flags.md:185` (Calendar_ViewActionMenu): - `action:toggleCalendarMenu`: `UBTConnect.Calendar.Calendar_ViewActionMenu.mvc.js`

## parity exemptions

- `migration/parity-exemptions.json:149` (MyEntertaining): "evidence": "MyEntertaining default parity pixel 9.62% after the stand-in content (mock follow-up agent, 2026-10-16)"
- `migration/parity-exemptions.json:340` (MyEntertaining): "reason": "Decision D8(b): the build shows the same-size mock iframe of the MyEntertaining embed; the TST capture's connect2entertaining container was empty (390x0 vs 390x794).",
- `migration/parity-exemptions.json:341` (MyEntertaining): "evidence": "migration/screens/MyEntertaining/parity/default.json; analysis/dom/default.html:115; MyEntertaining Q2; accepted by the user 2026-10-15"

## Decision ids on the board rows of the flow's screens

D8(b, V3a, V7

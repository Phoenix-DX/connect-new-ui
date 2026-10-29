# Recorded decisions and facts that name the elements of UI flow Legacy_Share

Sources a `differs` row may cite (outside `migration/screens/`). Lines are `file:line: text` (word match of the
screen or block name; the text is cut at 300 characters). A code comment is not a decision.

## board

- `migration/board.md:15` (ConnectShare): | FeedItemDetail | `/UBTConnect/FeedItemDetail` | 3 | 80 | lite | build | V4b · from MessageDetail (and ConnectShare); Feed CMS = mock (D8 b) (user, 2026-10-14) | built | route-feeditemdetail |
- `migration/board.md:48` (ConnectShare): | ConnectShare | `/UBTConnect/ConnectShare` | 7 | 62 | lite | build | V6 · D10(a): entry for external share links (ConnectSharing/Details → UBTConnect/ConnectShare, TST controller); routes to built screens (user, 2026-10-14) | built | route-connectshare |
- `migration/board.md:49` (LegacyShareObject): | LegacyShareObject | `/UBTConnect/LegacyShareObject` | 7 | 71 | full | build | V3e · share button target of 12 in-scope screens; ShareObject (write) mocked (user, 2026-10-14) | built | route-legacyshareobject |

## app-shell.spec

- `migration/app-shell.spec.md:33` (ConnectShare): - Connect2 module screens add `connect-theme` (MyBookmarks, BookmarksByGroup, MessageList, MessageDetail, ConnectShare,
- `migration/app-shell.spec.md:101` (ConnectShare): | Connect2 `Layout.Layout` → `BaseLayout_UpdatedOSUI` | MyBookmarks, BookmarksByGroup, MessageList, MessageDetail, ConnectShare, LegacyShareObject | `.backwards-compatibility.connect-theme` > `.layout….aside-overlay.connect-theme` > `.main.screen` (MyBookmarks dom:10-20; BookmarksByGroup dom[offline
- `migration/app-shell.spec.md:234` (ConnectShare): | Deep links / app links | `GetColdStartLinkURL`, `HandleOnResumeOpenLink`, `FCM_DeeplinkCallback` | rewrites `ConnectSharing/Details…` to ConnectShare (knowledge/navigation.md:22-27); if not signed in / locked / registering → store resume link, else navigate (p:UBTConnect.Legacy_Share.HandleOnResum
- `migration/app-shell.spec.md:346` (ConnectShare): | U14 | decision | Deep/app links (Android App Links, EventfulDeeplinks cold start and resume, shared `ConnectSharing` links) | ConnectShare and resume-after-login behaviour | (a) plain URLs + the resume-link helper now, native link plugins dropped; (b) also a manifest `share_target`. **Recommend (a
- `migration/app-shell.spec.md:34` (LegacyShareObject): LegacyShareObject digests:4).
- `migration/app-shell.spec.md:101` (LegacyShareObject): | Connect2 `Layout.Layout` → `BaseLayout_UpdatedOSUI` | MyBookmarks, BookmarksByGroup, MessageList, MessageDetail, ConnectShare, LegacyShareObject | `.backwards-compatibility.connect-theme` > `.layout….aside-overlay.connect-theme` > `.main.screen` (MyBookmarks dom:10-20; BookmarksByGroup dom[offline
- `migration/app-shell.spec.md:234` (HandleOnResumeOpenLink): | Deep links / app links | `GetColdStartLinkURL`, `HandleOnResumeOpenLink`, `FCM_DeeplinkCallback` | rewrites `ConnectSharing/Details…` to ConnectShare (knowledge/navigation.md:22-27); if not signed in / locked / registering → store resume link, else navigate (p:UBTConnect.Legacy_Share.HandleOnResum

## change requests

- `migration/change-requests/CR-F18-1.md:26` (ConnectShare): Default; Menu.mvc.js:773 Fade; Block_PINRegister_ContentWrapper.mvc.js:618 SlideFromRight; ConnectShare.mvc.js:293
- `migration/change-requests/CR-F18-1.md:70` (ConnectShare): - Menu and ConnectShare re-stamped after the user's confirm (transition arguments only; parity 0).
- `migration/change-requests/CR-W3A-1.md:6` (ConnectShare): - Other routes using it (catalog/blocks.md): BookmarksByGroup, ConnectShare, LegacyShareObject, MessageDetail, MessageList, MyBookmarks
- `migration/change-requests/CR-OrbitAdminLanding-1.md:48` (LegacyShareObject): empty), EmailTarget, LegacyShareObject, OrbitAdminEventDetail read names/ids only on submit or scan.
- `migration/change-requests/CR-W3Y-1.md:7` (LegacyShareObject): - Other routes using it (catalog/blocks.md): BookmarksByGroup, LegacyShareObject, MessageDetail
- `migration/change-requests/CR-W3Y-1.md:37` (LegacyShareObject): ActionGetSignedPhotosInBulk` (screens BookmarksByGroup, LegacyShareObject, MessageDetail), controller copied to
- `migration/change-requests/CR-W3A-1.md:6` (LegacyShareObject): - Other routes using it (catalog/blocks.md): BookmarksByGroup, ConnectShare, LegacyShareObject, MessageDetail, MessageList, MyBookmarks
- `migration/change-requests/CR-W3A-1.md:11` (LegacyShareObject): (e.g. `migration/screens/LegacyShareObject/analysis/dom/default.html` line 1).
- `migration/change-requests/CR-W2A-1.md:7` (LegacyShareObject): CountryList, FeedItemDetail, HomeFeed, HouseholdCarousel, HouseholdDetails, Household_Relations, LegacyShareObject,
- `migration/change-requests/CR-QRCodeGenerate-1.md:48` (LegacyShareObject): empty), EmailTarget, LegacyShareObject, OrbitAdminEventDetail read names/ids only on submit or scan.
- `migration/change-requests/CR-Splash-2.md:7` (HandleOnResumeOpenLink): - Other routes using it (catalog/blocks.md): PINRegister / PINUnlock (ScreenController_NavigateToPage), HandleOnResumeOpenLink (GetURLFromEventDataURL)

## knowledge

- `migration/knowledge/auto-decisions-2026-10-15.md:17` (ConnectShare): | ConnectShare | Q1 | fact | TO CONFIRM | No source: Get_ShareDetails is server-side and its message is masked in the capture. Auto mode, no recommendation: keep the conservative mock (ServerException 'Share not  |
- `migration/knowledge/auto-decisions-2026-10-15.md:18` (ConnectShare): | ConnectShare | Q2 | decision |  | A (recommended), auto-accepted (user instruction 2026-10-15 16:59): fictional ShareIds 00000000-0000-0000-0000-000000000001…009, one per uncaptured branch |
- `migration/knowledge/auto-decisions-2026-10-15.md:19` (ConnectShare): | ConnectShare | Q3 | fact | by code | UBTConnect.Legacy_Share.controller.js (fetched read-only 2026-10-15): handleError logs a trace ('Legacy_Share') and delegates to the App_Common flow handleError; the shel |
- `migration/knowledge/auto-decisions-2026-10-15.md:20` (ConnectShare): | ConnectShare | Q4 | decision |  | A (recommended), auto-accepted (user instruction 2026-10-15 16:59): the loading-state #transitionContainer frame difference (invisible) is exempted narrowly |
- `migration/knowledge/auto-decisions-2026-10-15.md:73` (ConnectShare): **Reviewed by the user 2026-10-16 ("tôi ok")**: all items above accepted as they are, including ADR-8, CR-ContactByEmailMember-2 rejected, bookmark 91001 option d, and the conservative mocks for LegacyShareObject Q2 / MyBookmarks Q3 / ConnectShare Q1.
- `migration/knowledge/auto-decisions-2026-10-15.md:75` (ConnectShare): **User, 2026-10-17:** the 3 TO CONFIRM rows (ConnectShare Q1, LegacyShareObject Q2, MyBookmarks Q3) are deferred to the production phase (BFF): the real server answers them.
- `migration/knowledge/navigation.md:31` (ConnectShare): - Shared links `ConnectSharing/Details…`: `GetURLFromEventDataURL` rewrites them to `UBTConnect/ConnectShare`. [MCP]
- `migration/knowledge/navigation.md:35` (ConnectShare): - ConnectShare forwards to AcceptPendingPolicies, ContactUsMenu, FeedItemDetail, HomeFeed, HouseholdDetails, Login,
- `migration/knowledge/auto-decisions-2026-10-15.md:40` (LegacyShareObject): | LegacyShareObject | Q1 | decision |  | A (recommended), auto-accepted (user instruction 2026-10-15 16:59): the mock answers Label = the share type identifier for types other than Household |
- `migration/knowledge/auto-decisions-2026-10-15.md:41` (LegacyShareObject): | LegacyShareObject | Q2 | fact | TO CONFIRM | No source: GetAvailableUsers is server-side in Connect2_LegacyShared, which is not loaded in the Service Studio MCP (DEV: UBTConnect, Connect2_Assemble_CS only) and was r |
- `migration/knowledge/auto-decisions-2026-10-15.md:42` (LegacyShareObject): | LegacyShareObject | Q3 | decision |  | A (recommended), auto-accepted (user instruction 2026-10-15 16:59): ShareObject stored in the mock store collection; IsAllowed false with ?mockuser=expired raises Subscri |
- `migration/knowledge/auto-decisions-2026-10-15.md:43` (LegacyShareObject): | LegacyShareObject | Q4 | decision |  | A (recommended), auto-accepted (user instruction 2026-10-15 16:59): Campus&Co / OneSchool Global and Feed cards built from the compiled code with fictional mocks |
- `migration/knowledge/auto-decisions-2026-10-15.md:44` (LegacyShareObject): | LegacyShareObject | Q5 | decision |  | A (recommended), auto-accepted (user instruction 2026-10-15 16:59): the never-captured shared check icon renders inside NotCaptured without the inline colour |
- `migration/knowledge/auto-decisions-2026-10-15.md:73` (LegacyShareObject): **Reviewed by the user 2026-10-16 ("tôi ok")**: all items above accepted as they are, including ADR-8, CR-ContactByEmailMember-2 rejected, bookmark 91001 option d, and the conservative mocks for LegacyShareObject Q2 / MyBookmarks Q3 / ConnectShare Q1.
- `migration/knowledge/auto-decisions-2026-10-15.md:75` (LegacyShareObject): **User, 2026-10-17:** the 3 TO CONFIRM rows (ConnectShare Q1, LegacyShareObject Q2, MyBookmarks Q3) are deferred to the production phase (BFF): the real server answers them.
- `migration/knowledge/shell-facts.md:150` (LegacyShareObject): ContactByEmail*, LDM_Email_V2, EmailTarget, LegacyShareObject, OrbitAdminEventDetail (submit/scan paths).
- `migration/knowledge/navigation.md:33` (HandleOnResumeOpenLink): - Block `HandleOnResumeOpenLink` calls it (`AndroidAppLinkOnResumeHandlerResumeNavigation`,

## parity exemptions

- `migration/parity-exemptions.json:1051` (ConnectShare): "routeRegex": "ConnectShare",
- `migration/parity-exemptions.json:1054` (ConnectShare): "evidence": "migration/screens/ConnectShare/analysis/dom/default.html:156-158 (data-original-href=\"/UBTConnect/\"); migration/screens/ConnectShare/parity/default.json, offline.json"
- `migration/parity-exemptions.json:1062` (ConnectShare): "routeRegex": "ConnectShare",
- `migration/parity-exemptions.json:1065` (ConnectShare): "evidence": "migration/screens/ConnectShare/analysis/dom/default.html:75-78; migration/screens/ConnectShare/parity/default.json (position 52,492 → 77,492)"
- `migration/parity-exemptions.json:1073` (ConnectShare): "routeRegex": "ConnectShare",
- `migration/parity-exemptions.json:1075` (ConnectShare): "reason": "PENDING ConnectShare Q4. The original creates the screen view only after OnInitialize ends (OutSystems.js:2, fireInitialize awaited), and in the loading capture Get_ShareDetails never answers, so #reactContainer stays empty; the clone's AppFrame always renders #transitionContainer and the
- `migration/parity-exemptions.json:1076` (ConnectShare): "evidence": "migration/screens/ConnectShare/analysis/dom/loading.html:1-3; app/src/app/AppFrame.tsx:16-24; migration/screens/ConnectShare/parity/loading.json"
- `migration/parity-exemptions.json:1613` (ConnectShare): "routeRegex": "ConnectShare",
- `migration/parity-exemptions.json:96` (LegacyShareObject): "evidence": "migration/screens/LegacyShareObject/analysis/dom/loading.html:132-145; migration/screens/LegacyShareObject/parity/loading.json (class, text, style, pseudo, layout, position, pixel hotspots 120-200,280-320); parity/offline.json passes"
- `migration/parity-exemptions.json:103` (LegacyShareObject): "evidence": "migration/screens/LegacyShareObject/analysis/dom/loading.html:72-89; migration/screens/LegacyShareObject/parity/loading.json ([class] extra .ubt-skeleton-section, [style]/[pseudo] under b1-b4-b2-b3-Content); parity/offline.json passes"
- `migration/parity-exemptions.json:759` (LegacyShareObject): "evidence": "migration/screens/LegacyShareObject/analysis/dom/default.html:78-79 (data-masked-src, data-rendered-size 65x43); migration/screens/LegacyShareObject/parity/default.json (6 layout, 1 position)"
- `migration/parity-exemptions.json:772` (LegacyShareObject): "evidence": "migration/screens/LegacyShareObject/parity/loading.json and offline.json ([style] background-position 101.344px 0px → 367.97px 0px; 96.032px 0px → 655.962px 0px)"
- `migration/parity-exemptions.json:1596` (LegacyShareObject): "evidence": "migration/screens/LegacyShareObject/analysis/calls.json (GetHouseholdDetails ts 4593, AfterInitialize ts 5166); migration/screens/LegacyShareObject/parity/default.json (calls:load)"

## Decision ids on the board rows of the flow's screens

D10(a, V3e, V6

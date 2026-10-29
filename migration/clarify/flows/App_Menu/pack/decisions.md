# Recorded decisions and facts that name the elements of UI flow App_Menu

Sources a `differs` row may cite (outside `migration/screens/`). Lines are `file:line: text` (word match of the
screen or block name; the text is cut at 300 characters). A code comment is not a decision.

## board

- `migration/board.md:41` (Menu): | Menu | `/UBTConnect/Menu` | 5 | 78 | lite | build | V3d · bottom bar Menu tab; also from PINRegister, PINChange (user, 2026-10-14) | built | route-menu |
- `migration/board.md:42` (PINBiometricsMenu): | PINBiometricsMenu | `/UBTConnect/PINBiometricsMenu` | 5 | 17 | lite | build | V4c · D3 menu part, consistent with V1 (mock PIN); biometrics on web decided in Phase 4 (user, 2026-10-14) | built | route-pinbiometricsmenu |
- `migration/board.md:45` (TermsAndPoliciesMenu): | TermsAndPoliciesMenu | `/UBTConnect/TermsAndPoliciesMenu` | 5 | 55 | lite | build | V4c · menu / contact, reachable on TST; writes mocked (user, 2026-10-14) | built | route-termsandpoliciesmenu |

## app-shell.spec

- `migration/app-shell.spec.md:38` (Menu): The captures show `--footer-height` as 0/42/56 px, by layout (HF digest.md:4, Menu digest.md:4, Splash digest.md:4).
- `migration/app-shell.spec.md:95` (Menu): | `Layout_DetailPage` | 20 build screens (catalog/blocks.md:12) | `.layout….ubt-layout-detail.ubt-layout-detail--primary` (Menu dom:8) | back icon + Header_Title + Header_Right, HeaderContent, Content, Bottom; CommonUI is a **sibling** of `.layout` (Menu dom:13-42, 453-458, 605) |
- `migration/app-shell.spec.md:112` (Menu): | DetailPage | `connect-icon-arrow_left_alt` → `OnClick_BackNavigation` = `navigateBack` (PreviousScreen) | `.header-title.text-align-left` placeholder | `.header-right` placeholder | Menu dom:16-33; Menu p:UBTConnectLibrary.Layouts.Layout_DetailPage.mvc.js:333, 487-502 |
- `migration/app-shell.spec.md:134` (Menu): | menu | `connect-icon-widgets` | Menu | `/UBTConnect/Menu` (672-675) | – |
- `migration/app-shell.spec.md:142` (Menu): is not Home, Directory, Updates, Bookmarks or Menu (BottomBarMenu:678-679).
- `migration/app-shell.spec.md:152` (Menu): None. The app has no side menu. "Menu" is a screen. The user reaches it from the bottom bar. Only Map uses OSUI `Sidebar`, and the
- `migration/app-shell.spec.md:192` (Menu): - `Dialog_CustomChoice` (Menu).
- `migration/app-shell.spec.md:231` (Menu): | Cache control | `UBTConnect_Utils.CacheControl.*` | `GetCacheableObject(type,key,ttl,timeout)` → hit / miss events (Menu p:UBTConnect_Utils.CacheControl.CacheControl.mvc.js:220-237); `CacheControl_UserInfo` → `DataActionGetCacheInfo` with key `UniqueCacheKey` (Menu p:…CacheControl_UserInfo.mvc.js:
- `migration/app-shell.spec.md:345` (PINBiometricsMenu): | U13 | decision | Biometric unlock (`FingerprintScanner`, `App_PIN_BiometricEnabled`, PINBiometricsMenu) | Unlock UI shows a fingerprint button when enabled | (a) hide (setting off) now, WebAuthn later; (b) WebAuthn now. **Recommend (a)** |

## change requests

- `migration/change-requests/CR-OrbitAdminLanding-1.md:52` (Menu): Profile, Menu, MilestoneDetail: 0 unexempted differences; no exemption proposed. Menu showed a header-band pixel
- `migration/change-requests/CR-OrbitAdminLanding-1.md:53` (Menu): timing flake in 2 of 3 runs (alternating states; Menu does not read this action), clean on the third. AcceptPendingPolicies,
- `migration/change-requests/CR-F18-1.md:26` (Menu): Default; Menu.mvc.js:773 Fade; Block_PINRegister_ContentWrapper.mvc.js:618 SlideFromRight; ConnectShare.mvc.js:293
- `migration/change-requests/CR-F18-1.md:70` (Menu): - Menu and ConnectShare re-stamped after the user's confirm (transition arguments only; parity 0).
- `migration/change-requests/CR-PINUnlock-4.md:30` (Menu): Not a shell change: the two calls start in the same millisecond on TST and their recorded order differs between captures (HomeFeed: MapEntities first; PINUnlock, Notes, Menu: Households first). parity_check.cjs now compares server calls that start within 2 ms of each other as an unordered set.
- `migration/change-requests/CR-W2A-1.md:8` (Menu): Locality_Details, Menu, MessageDetail, OneSchoolGlobalDetails, Photobook, Profile, Search, SupperMeeting_Carousel,
- `migration/change-requests/CR-AssembleEvents-1.md:29` (Menu): - Regression parity run on: 2026-10-16 after the change: AssembleEvents calls 0 (default 11/11, loading, offline); Assemble_BrowseByCountry, Profile, Menu, HomeFeed, Locality_Details, HouseholdDetails, MessageList all 0.
- `migration/change-requests/CR-Assemble_BrowseByCountry-1.md:35` (Menu): - Regression parity run on: 2026-10-16 after the change: Assemble_BrowseByCountry 0 (default, loading, offline); Profile, Menu, HomeFeed, Locality_Details, HouseholdDetails, MessageList all 0. AssembleEvents default now loads the filter-sheet country list (calls 0) but shows 89 position/layout/style

## knowledge

- `migration/knowledge/auto-decisions-2026-10-15.md:49` (Menu): | Menu | Q1 | decision |  | A (recommended), auto-accepted (user instruction 2026-10-15 16:59): Menu mocks.ts householder scenario (shell mock user as householder, neutral square photo); capture-pla |
- `migration/knowledge/auto-decisions-2026-10-15.md:50` (Menu): | Menu | Q2 | decision |  | A (recommended), auto-accepted (user instruction 2026-10-15 16:59): uncaptured branches built as compiled, RequestPhotoUpdate fictional Out_IsSuccess true; limits noted ( |
- `migration/knowledge/navigation.md:27` (Menu): - Menu goes to Menu.
- `migration/knowledge/shell-observed.md:34` (Menu): ## After a PIN unlock (2026-10-14, `node migration/tools/unlock_target.cjs /UBTConnect/Menu`)
- `migration/knowledge/shell-observed.md:35` (Menu): - Fresh signed-in tab: `/UBTConnect/Menu` → app sends it to `/UBTConnect/PINUnlock` → PIN entered → back to
- `migration/knowledge/shell-observed.md:36` (Menu): `/UBTConnect/Menu` (the screen that was opened). Guard on, nothing blocked. Settles PINUnlock Q1 in favour of
- `migration/knowledge/static-entities-tst.json:133` (Menu): "menu": "Menu"
- `migration/knowledge/static-entities-tst.json:445` (Menu): "menu": "Menu"
- `migration/knowledge/shell-facts.md:14` (PINBiometricsMenu): - Gate: 74 UBTConnect screens use `checkPermissions = OS.RolesInfo.checkRegistered()` (for example `HF p:UBTConnect.Home.HomeFeed.mvc.js:1069-1071`). 9 have an empty check: Splash (SPL:577), Login, InvalidPermissions, PINBiometricsMenu, ContactUsMenu, ContactUsDetails, Locality_Details, MessageList,
- `migration/knowledge/navigation.md:42` (PINBiometricsMenu): MessageDetail, MessageList, PINBiometricsMenu, Splash. [MCP]
- `migration/knowledge/audit-a1-empty-handlers.md:29` (TermsAndPoliciesMenu): | `app/src/shared/UBTConnect/Block_PINUnlock_ContentWrapper/Block_PINUnlock_ContentWrapper.tsx:98-102` | `OnClick_TermsAndCondition`, `OnClick_PrivacyPolicy` (`openPolicy = () => undefined`) | `UBTConnect.App_PIN.Block_PINUnlock_ContentWrapper.mvc.js` view :607 / :675, controller :939-968 / :969-998
- `migration/knowledge/audit-a1-empty-handlers.md:88` (TermsAndPoliciesMenu): (Block_PINUnlock_ContentWrapper); TermsAndPoliciesMenu (re-export).
- `migration/knowledge/audit-a1-empty-handlers.md:97` (TermsAndPoliciesMenu): - `route.py parity` clean after the last code change: HomeFeed, PINUnlock, PINChange, TermsAndPoliciesMenu,

## flags

- `migration/flags.md:206` (PINBiometricsMenu): - `clientVar:App_PIN_BiometricEnabled`: `UBTConnect.App_Menu.PINBiometricsMenu.mvc.js`, `UBTConnect.App_PIN.Block_PINUnlock_ContentWrapper.mvc.js`, `UBTConnect.controller.js`

## parity exemptions

- `migration/parity-exemptions.json:831` (Menu): "evidence": "migration/screens/Menu/analysis/dom/default.html:428-445 (masked text :441); migration/screens/Menu/parity/default.json (position diff); migration/change-requests/CR-Login-4.md",
- `migration/parity-exemptions.json:832` (Menu): "routeRegex": "/UBTConnect/Menu\\b"
- `migration/parity-exemptions.json:841` (Menu): "detailRegex": "^[0-1]\\.\\d\\d% pixels differ .*migration/screens/Menu/parity/default\\.diff\\.png$",
- `migration/parity-exemptions.json:843` (Menu): "evidence": "migration/screens/Menu/analysis/dom/default.html:62-63; migration/screens/Menu/parity/default.json and default.diff.png (with scenario householder)",
- `migration/parity-exemptions.json:844` (Menu): "routeRegex": "/UBTConnect/Menu\\b"
- `migration/parity-exemptions.json:1605` (Menu): "evidence": "migration/screens/Menu/analysis/calls.md #2, #4; migration/screens/Menu/parity/default.json (calls:load)"

## Decision ids on the board rows of the flow's screens

D3, V1, V3d, V4c

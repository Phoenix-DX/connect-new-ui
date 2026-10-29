# Recorded decisions and facts that name the elements of UI flow Legacy_OrbitAdminFlow

Sources a `differs` row may cite (outside `migration/screens/`). Lines are `file:line: text` (word match of the
screen or block name; the text is cut at 300 characters). A code comment is not a decision.

## board

- `migration/board.md:79` (OrbitAdminEventDetail): | OrbitAdminEventDetail | `/UBTConnect/OrbitAdminEventDetail` |  | 76 | lite | build | Orbit is not an embedded/separate app: its screens are UBTConnect screens (same SPA) using Connect2_OrbitMobile_MUI blocks; build (user, 2026-10-16) | built | route-orbit-admin |
- `migration/board.md:80` (OrbitAdminLanding): | OrbitAdminLanding | `/UBTConnect/OrbitAdminLanding` |  | 75 | lite | build | Orbit is not an embedded/separate app: its screens are UBTConnect screens (same SPA) using Connect2_OrbitMobile_MUI blocks; build (user, 2026-10-16) | built | route-orbit-admin |

## change requests

- `migration/change-requests/CR-OrbitAdminLanding-1.md:7` (OrbitAdminEventDetail): (cached FirstName / names), OrbitAdminEventDetail (AppManager_GetCachedUserInfo in ScreenBlock_AdminEventDetail)
- `migration/change-requests/CR-OrbitAdminLanding-1.md:48` (OrbitAdminEventDetail): empty), EmailTarget, LegacyShareObject, OrbitAdminEventDetail read names/ids only on submit or scan.
- `migration/change-requests/CR-OrbitAdminLanding-1.md:54` (OrbitAdminEventDetail): QRCodeGenerate, LDM_Email_V2, OrbitAdminEventDetail have no captured states: unit test (CountryCode) and a headless
- `migration/change-requests/CR-QRCodeGenerate-1.md:48` (OrbitAdminEventDetail): empty), EmailTarget, LegacyShareObject, OrbitAdminEventDetail read names/ids only on submit or scan.
- `migration/change-requests/CR-QRCodeGenerate-1.md:54` (OrbitAdminEventDetail): QRCodeGenerate, LDM_Email_V2, OrbitAdminEventDetail have no captured states: unit test (CountryCode) and a headless
- `migration/change-requests/CR-OrbitAdminLanding-1.md:1` (OrbitAdminLanding): # CR-OrbitAdminLanding-1: shell — the mock user's FirstName / MemberId in AppManager_GetCachedUserInfo (in memory only)
- `migration/change-requests/CR-OrbitAdminLanding-1.md:4` (OrbitAdminLanding): - Raised by: OrbitAdminLanding, 2026-10-16
- `migration/change-requests/CR-OrbitAdminLanding-1.md:8` (OrbitAdminLanding): - Related question: OrbitAdminLanding Q3 (decision, recommended B, pending orchestrator answer)
- `migration/change-requests/CR-OrbitAdminLanding-1.md:11` (OrbitAdminLanding): - ScreenBlock_AdminLanding OnReady (`migration/screens/OrbitAdminLanding/analysis/sources/pretty/
- `migration/change-requests/CR-OrbitAdminLanding-1.md:18` (OrbitAdminLanding): `migration/screens/OrbitAdminLanding/parity/*.json`).
- `migration/change-requests/CR-OrbitAdminLanding-1.md:29` (OrbitAdminLanding): `OA-LANDING-HEADER-NAME-EMPTY-UNTIL-CR` in `migration/screens/OrbitAdminLanding/proposed-exemptions.json`).
- `migration/change-requests/CR-OrbitAdminLanding-1.md:32` (OrbitAdminLanding): - Change: foundation owner (F16), 2026-10-16, one change for CR-OrbitAdminLanding-1 and CR-QRCodeGenerate-1.
- `migration/change-requests/CR-OrbitAdminLanding-1.md:50` (OrbitAdminLanding): - Regression parity run on: 2026-10-16, after the last code change: OrbitAdminLanding (default/loading/offline,

## ADRs (stack.md)

- `app/docs/reference/stack.md:191` (OrbitAdminEventDetail): - Context: PWA decision P7 (user, 2026-10-16): vendor the TST scanner. The original BarcodePlugin, without Cordova and with navigator.mediaDevices, loads OSBarcodePlugin.js (html5-qrcode + ZXing web scanner, BarcodeDetector when supported, rear camera) (migration/runtime-sources/BarcodePlugin.contro

## knowledge

- `migration/knowledge/orbit-assemble-ldm.md:11` (OrbitAdminEventDetail): - OrbitLanding, OrbitAdminLanding, OrbitAdminEventDetail, EventDetail, EventBooklet, MilestoneDetail,
- `migration/knowledge/orbit-assemble-ldm.md:34` (OrbitAdminEventDetail): ViewDocuments, QRCodeGenerate, OrbitAdminEventDetail, ContactByEmailOrbitHelpdesk, ContactByEmailOrbitHost,
- `migration/knowledge/orbit-assemble-ldm.md:48` (OrbitAdminEventDetail): EventBooklet, OrbitAdminEventDetail, ContactByEmailOrbitHost, EmailContact, LDM_Email_V2,
- `migration/knowledge/shell-facts.md:150` (OrbitAdminEventDetail): ContactByEmail*, LDM_Email_V2, EmailTarget, LegacyShareObject, OrbitAdminEventDetail (submit/scan paths).
- `migration/knowledge/auto-decisions-2026-10-16.md:85` (OrbitAdminEventDetail): | OrbitAdminEventDetail Q1 A; Q2 by code | browser: OS-PLUG-BARC-0011 'Cordova is not available.'; as PWA the original uses its web scanner (OSBarcodePlugin.js) → PWA discussion | BarcodePlugin scripts fetched |
- `migration/knowledge/auto-decisions-2026-10-16.md:111` (OrbitAdminEventDetail): | Re-stamps | OrbitAdminEventDetail, Photobook (finish with "confirm (auto-confirmed …)") | auto-confirmed |
- `migration/knowledge/runtime-sources.md:66` (OrbitAdminEventDetail): | 45 `.mvc.js` of the 12 not yet captured Orbit / LDM / Assemble screens and their blocks (`UBTConnect.Legacy_OrbitEventsFlow.{EventBooklet,GuestArrangements,TransportDetail,ViewDocuments,EmailContact}`, `UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminEventDetail`, `UBTConnect.Legacy_OrbitQRCodeFlow.QRC
- `migration/knowledge/runtime-sources.md:71` (OrbitAdminEventDetail): | `BarcodePlugin.controller.js`, `BarcodePlugin.OSBarcodePlugin.js` | 55 kB, 405 kB | 2026-10-16: CheckBarcodePlugin errors (0011 Cordova, 0012 plugin), PWA web scanner (OrbitAdminEventDetail Q2) |
- `migration/knowledge/orbit-assemble-ldm.md:11` (OrbitAdminLanding): - OrbitLanding, OrbitAdminLanding, OrbitAdminEventDetail, EventDetail, EventBooklet, MilestoneDetail,
- `migration/knowledge/orbit-assemble-ldm.md:17` (OrbitAdminLanding): OrbitAdminLanding, LDM_MyEvents_V2, AssembleEvents; MessageDetail Orbit/Assemble handlers): they work once built.
- `migration/knowledge/orbit-assemble-ldm.md:30` (OrbitAdminLanding): - The test account has no Orbit events (OrbitLanding / OrbitAdminLanding captured empty).
- `migration/knowledge/orbit-assemble-ldm.md:44` (OrbitAdminLanding): Captured (TST, read-only): OrbitLanding (1 event), OrbitAdminLanding (empty: NoInformation_Orbit), EventDetail,
- `migration/knowledge/shell-facts.md:141` (OrbitAdminLanding): - The header of OrbitAdminLanding shows the cached FirstName (masked, `screens/OrbitAdminLanding/analysis/dom/default.html`).
- `migration/knowledge/shell-facts.md:143` (OrbitAdminLanding): - React app, mock phase (F16, CR-OrbitAdminLanding-1, CR-QRCodeGenerate-1, 2026-10-16): the stored record holds CountryCode
- `migration/knowledge/shell-facts.md:149` (OrbitAdminLanding): - Readers: OrbitAdminLanding, QRCodeGenerate, OrbitLanding (CurrentMemberId), MilestoneDetail (UserMemberId),
- `migration/knowledge/auto-decisions-2026-10-16.md:84` (OrbitAdminLanding): | OrbitAdminLanding Q1/Q2 A, Q3 B (recommended) | scenario noadminevents; scan-per-milestone False; header name waits for CR-OrbitAdminLanding-1 (F16), interim exemption not merged | |

## flags

- `migration/flags.md:42` (OrbitAdminEventDetail): | `action:onToggle_PopupQRCode` (gone) (candidate) | flag check action | OrbitAdminEventDetail | - | open | - | **open** |

## parity exemptions

- `migration/parity-exemptions.json:1528` (OrbitAdminLanding): "routeRegex": "^/UBTConnect/OrbitAdminLanding(\\?|$)",
- `migration/parity-exemptions.json:1536` (OrbitAdminLanding): "evidence": "migration/screens/OrbitAdminLanding/parity/offline.json (6 rows, one per skeleton row); same kind as ORBITLANDING-SKELETON-SHIMMER-PHASE-OFFLINE"

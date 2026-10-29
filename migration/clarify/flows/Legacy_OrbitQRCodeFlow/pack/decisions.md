# Recorded decisions and facts that name the elements of UI flow Legacy_OrbitQRCodeFlow

Sources a `differs` row may cite (outside `migration/screens/`). Lines are `file:line: text` (word match of the
screen or block name; the text is cut at 300 characters). A code comment is not a decision.

## board

- `migration/board.md:84` (QRCodeGenerate): | QRCodeGenerate | `/UBTConnect/QRCodeGenerate` |  | 61 | lite | build | Orbit is not an embedded/separate app: its screens are UBTConnect screens (same SPA) using Connect2_OrbitMobile_MUI blocks; build (user, 2026-10-16) | built | route-orbit-lite-2 |

## change requests

- `migration/change-requests/CR-OrbitAdminLanding-1.md:32` (QRCodeGenerate): - Change: foundation owner (F16), 2026-10-16, one change for CR-OrbitAdminLanding-1 and CR-QRCodeGenerate-1.
- `migration/change-requests/CR-OrbitAdminLanding-1.md:54` (QRCodeGenerate): QRCodeGenerate, LDM_Email_V2, OrbitAdminEventDetail have no captured states: unit test (CountryCode) and a headless
- `migration/change-requests/CR-OrbitAdminLanding-1.md:55` (QRCodeGenerate): check instead (QRCodeGenerate `?mocksession=unlocked&In_EventId=7301&In_MemberId=990001`: pass shows "Matías Vitale",
- `migration/change-requests/CR-QRCodeGenerate-1.md:1` (QRCodeGenerate): # CR-QRCodeGenerate-1: shell — the mock user's names, MemberId, locality and country in AppManager_GetCachedUserInfo (in memory only)
- `migration/change-requests/CR-QRCodeGenerate-1.md:4` (QRCodeGenerate): - Raised by: QRCodeGenerate, 2026-10-16
- `migration/change-requests/CR-QRCodeGenerate-1.md:8` (QRCodeGenerate): - Related question: QRCodeGenerate Q2 (decision, answered A, user 2026-10-16)
- `migration/change-requests/CR-QRCodeGenerate-1.md:11` (QRCodeGenerate): - ScreenBlock_GenerateQRCode RefreshData (`migration/screens/QRCodeGenerate/analysis/sources/Connect2_OrbitMobile_MUI.
- `migration/change-requests/CR-QRCodeGenerate-1.md:32` (QRCodeGenerate): - Change: foundation owner (F16), 2026-10-16, one change for CR-OrbitAdminLanding-1 and CR-QRCodeGenerate-1.

## knowledge

- `migration/knowledge/orbit-assemble-ldm.md:12` (QRCodeGenerate): GuestArrangements, HelpersDetail, HostSurvey, TransportDetail, ViewDocuments, QRCodeGenerate,
- `migration/knowledge/orbit-assemble-ldm.md:34` (QRCodeGenerate): ViewDocuments, QRCodeGenerate, OrbitAdminEventDetail, ContactByEmailOrbitHelpdesk, ContactByEmailOrbitHost,
- `migration/knowledge/orbit-assemble-ldm.md:47` (QRCodeGenerate): No-capture (build from the compiled code): TransportDetail, GuestArrangements, ViewDocuments, QRCodeGenerate,
- `migration/knowledge/shell-facts.md:143` (QRCodeGenerate): - React app, mock phase (F16, CR-OrbitAdminLanding-1, CR-QRCodeGenerate-1, 2026-10-16): the stored record holds CountryCode
- `migration/knowledge/shell-facts.md:149` (QRCodeGenerate): - Readers: OrbitAdminLanding, QRCodeGenerate, OrbitLanding (CurrentMemberId), MilestoneDetail (UserMemberId),
- `migration/knowledge/auto-decisions-2026-10-16.md:81` (QRCodeGenerate): | TransportDetail Q1, ViewDocuments Q1/Q2, QRCodeGenerate Q1/Q2 | **A (recommended)** each | mock itinerary/documents/QR pass; web: new tab; CR-QRCodeGenerate-1 → F16 |
- `migration/knowledge/auto-decisions-2026-10-16.md:83` (QRCodeGenerate): | QRCodeGenerate: QR = server PNG (QRCodeAsBinary), no client library | no ADR needed | |
- `migration/knowledge/auto-decisions-2026-10-16.md:86` (QRCodeGenerate): | F16: CR-OrbitAdminLanding-1 + CR-QRCodeGenerate-1 (cached user identity merged at read time, mocks only, nothing persisted) | applied | TST does fill the variable (shell-facts updated) |

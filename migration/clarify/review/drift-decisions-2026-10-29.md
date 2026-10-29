# Drift wave: work packages and decisions (2026-10-29)

Input: re-capture of all captured routes on TST (read-only), parity sweep (65 routes: 37 clean, 28 with
differences, `drift-table-2026-10-29.md`), and four triage reports: `drift-triage-directory.md`,
`drift-triage-household.md`, `drift-triage-messages.md`, `drift-triage-events.md`. Classes: A = TST changed its code,
B = mock data, C = capture artefact, D = React gap. Totals: about 1980 differences; A about 250, B about 770, C about
950, D 1. All loading states are clean.

## Work packages

| WP | Content | Rows | Class | Size | Routes |
|---|---|---|---|---|---|
| WP1 | Capture and exemption hygiene: update the runtime ids in 6 exemption rules and 1 ignore rule; generalize 3 more; aria list key; re-capture OrbitLanding with the popup-sort step and the close icon; re-capture MessageDetail with a message id the account has today; re-capture AssembleEvents default once; MilestoneDetail/HostSurvey auto states | household R8-R10, events R4-R7 and G1, messages C1, directory 6 | C | M | 12 |
| WP2 | Mock data to TST: update feed (88 rows, date groups, gender), country statistics, LDM past events, MessageList messages, SupperMeeting_Carousel slide counts, LegacyShareObject rows (needs an MCP fact) | directory 4-5, events R3, messages B2-B3, household R7 | B | M | 9 |
| WP3 | Small TST code changes: StaticInput default prompt; GetCommunityStatistics calls; Layout_DetailPage `In_IsHideTitle` and the MyEntertaining embed events; Locality Contacts tag (ComingSoon_V2); ComingSoon icon (OneSchoolGlobalDetails Q8 a); KebabButtonMenu `In_DisableShare`, EntitiesCarousel resize handler, LazyImage `In_ForceLoadingState` | directory 1-2, events R2, household R4, R6, R11 | A | M | 7 |
| WP4 | EntityDetailsActions and NotesSheet: NotesSheet in an always-shown popup (`html.popup-disable-scroll`, `aria-hidden`), FetchNotes in OnReady, `In_LocalityId`; bookmarks from the C2 store only | household R1-R3, messages A3 | A | L | 8 (all detail pages) |
| WP5 | Notifications rework: item wrapper with swipe read/delete, only-unread switch, read count, delete popups, MoreActionSheet wrapper and delete-all popup, the new server actions; then the 68-row mock | messages A1, A2, B1 | A+B | L | Notifications |
| WP6 | ItemNotesSection in EventDetail and LDM_EventDetail_V2 (new TST block, FetchEventNotes) | events R1 | A | M | 2 |
| WP7 | Search recent clicked results rework (`Get_FilteredRecentClickedResults`, OnAfterFetch, 100 records, new list markup) | directory 3 | A | M | Search |
| WP8 | Flag values that TST changed: C2NewBookmarks (true since 2026-10-21), C2EnableMaps (maps explore icon now shown) | household R3, R5 | A | S | Locality_Details and the main pages |
| WP9 | Notes footer shadow timing (TST sets it after 200 ms; React at the first frame) | messages D1 | D | S | all main/detail layouts |

Account role: the TST test account is no longer a householder (Menu, Profile; messages B4). Open facts for the MCP:
GetAvailableUsers rows and page size (LegacyShareObject); where TST formats the Assemble summary date now
(`GetAssembleEventSummaryDateTimeString` was removed).

## Questions with recommendations (from the triage reports)

| Id | Question | Recommendation |
|---|---|---|
| H-Q1 | Port the NotesSheet popup exactly (html class, aria-hidden on every detail page) | a: yes; check page scroll on the dev server |
| H-Q2 | C2-only bookmarks, C2NewBookmarks on | a: yes |
| H-Q3 | C2EnableMaps on (the icon does nothing until a Maps screen exists) | a: yes |
| H-Q4 | Locality Contacts tag with ComingSoon_V2, without the hidden block | a: yes |
| H-Q5 | Exemption ids rule by rule, or one generic masked-image rule | a: rule by rule |
| H-Q6 | Port the R11 changes now | a: yes |
| M-Q1 | Notifications scope: all / view only / defer | a: all |
| M-Q2 | Notifications mock length: 68 rows / 19 rows / old shape | a: 68 rows |
| M-Q3 | Account role: new `member` default scenario / accept / ask the owner | a, with c in parallel |
| M-Q4 | Fact: GetAvailableUsers | MCP session |
| M-Q5 | MessageDetail: re-capture with an available id / old baseline / accept | a |
| D-Q1 | Search: TST deletes the wrong local row (probable TST bug) | a: port 1:1, record a known bug |
| D-Q2 | Search list markup check: unit tests / new capture state / both | a: unit tests |
| D-Q3 | AssembleEvents row widths: re-capture once, then exemption | a then b |
| E-Q1 | Add Note in the mock: stateful local notes store | a |
| E-Q2 | LDM past events: follow the new capture | a |
| E-Q3 | Generalize the ids of three exemptions | a |
| E-Q4 | aria list key: narrow exemption now, tool normalization later | a |
| E-Q5 | OrbitLanding re-capture with popup-sort and close icon | a |
| E-Q6 | MilestoneDetail/HostSurvey auto states: keep default only / fix the capture path | fix the capture path (wait for the click target before holding calls) |

## User decisions (2026-10-29)

| Question | Answer |
|---|---|
| Scope | (a) All nine work packages, with the recommendations of the table above for the small questions; parallel work, one gate at the end. |
| WP5 Notifications (M-Q1, M-Q2) | (a) Port all the new behaviour (stateful server-action mocks) and a 68-row fictional mock in groups of 3 / 1 / 64. |
| WP4 + WP8 (H-Q1 to H-Q3) | (a) Port the NotesSheet popup as TST (check page scroll on the dev server); bookmarks from the C2 store only; C2NewBookmarks and C2EnableMaps on, as TST. |
| Account role (M-Q3) | (a) A new default scenario `member` for Menu and Profile, as TST now; the householder and spouse scenarios stay. |

## Applied as reversible, to confirm (2026-10-29)

| Id | Question | Options | Applied |
|---|---|---|---|
| WP9-Q1 | Notes default footer band (D1): the cause is the mock latency, not the React timing (`../builds/drift-WP9.md`) | a: `latencies.default = 600` for Notes in `capture-plan.json` (as Notifications Q5, HouseholdDetails F5); b: parity exemption for the band; c: keep as known drift | a |

## TST publish 2 (found 2026-10-29 ~19:15)

The TST moduleinfo `versionToken` changed after the survey of 2026-10-28 (`kFqrH…` → `+2kUjg…`): 50 files changed
(CSS and scripts of EntityDetailsActions, Bookmarks, Search, HouseholdDetails_Block, LDM blocks,
OneSchoolGlobalDetails_Block, Map …) and `LDM_Blocks.EventDetail_HostCard.css` was added. The re-captures of
2026-10-29 already hold the newer code, so parity compares with it. User decision (2026-10-29): (a) close this wave
(WP1, gate, commit), then a "publish 2" pass: refresh the survey, compare the 50 changed files with React, fix the
logic gaps per group; the user decides the new questions.
| WP1-Q1 | MessageDetail id 5965247 is gone on TST (re-capture uses 5982748) | a: seed 5982748 in the mock; b: accept | a (and the senders of the three new MessageList rows get fictional names; MessageDetail and MessageList clean) |
| WP1-Q2 | SupperMeeting_Carousel slide 3 `ubt-skeleton-section` class (capture timing) | a: narrow rule; b: accept | a (`CAPTURE-OFFSCREEN-SLIDE-ACTIONS-SKELETON-CLASS-SMCAROUSEL`) |
| WP1-Q3 | OneSchoolGlobalCarousel offline: html popup class + 13 bookmark-state rows | a: keep all; b: html class rule only | b (sibling rule); the 13 bookmark rows are open (asked) |
| FU 1-9 | Follow-ups of WP3/WP7 (`../builds/drift-FU.md`) | as recommended in the reports | applied |
| css_sets | Order conflict KebabButton_BookmarkNotes.css / PinCode.css (no shared selector) | a: accept conflicts of sheets with no shared selector (automatic check); b: hand-edit the generated file | a (`migration/tools/css_sets.py`) |
| Stylesheets | 11 original stylesheets differed from TST | fetch the live copies (standing approval) | done |

## User decisions, round 2 (2026-10-29 evening)

| Question | Answer |
|---|---|
| Publish 2 gaps (`publish2-diff.md`) | (a) Fix G1-G4 as recommended: G4, G2, G3 with the ShareSheet IsSubmitting guard (P2-Q1 a), G1 with null event dates in the mocks and unit tests plus a story (P2-Q2 a); fix the old comments when a change touches them (P2-Q4 a). P2-Q3 a: diff the unidentified files with the saved new moduleinfo. |
| OneSchoolGlobalCarousel offline, 13 bookmark-state rows | (a) A narrow exemption for the bookmark-state rows of this route's offline state (device data: the TST device held a C2 bookmark of school 1430), then review and finish the route. |
| Open server facts (WP5 Q1-Q3, WP6 Q2, M-Q4) | (a) One MCP session; the user opens a module that is not open; then the mocks follow the facts. |
| Flag `mobileDirectoryHouseholdGallery` | (a) A read-only probe of the TST value, then record the flag decision with that value. |

Probe result (2026-10-29, `migration/tools/flag_probe.cjs`, read-only, no service call): `launchDarkly_FF.mobileDirectoryHouseholdGallery`
is **true** on TST; `getHasMapsEnabled` true (already on since WP4). Recorded (2026-10-29): `flags.py scan` (the
refreshed survey adds the flag), `flags.py decide` (default on, branches default-only, reference none, as
getHasMapsEnabled), registry default on. `flags.generated.json` gets only this entry, with Locality_Details added to the
scanned routes (that screen embeds HouseholdDetails_Block, `migration/screens/Locality_Details/analysis/calls.md`). A full
`flags.py export` would also change the routes of 12 other flags (the scan of the refreshed survey); that sync is left
open.

Facts answered by the TST compiled code (2026-10-29): WP5 Q2, Handler_ToggleRead (`UBTConnect.App_Notifications.NotificationsList.mvc.js:626-654`,
live survey of 2026-10-29): the server action ToggleRead gets the new state (`not IsRead` of the list row); the local row
is toggled; the event UpdateReadCount gets `not` the toggled value, i.e. the state before the toggle. React does the
same (`../builds/drift-WP5.md`). The other server facts wait for the MCP session (Service Studio had no open module).

## MCP session and WP6 Q2 (2026-10-29 evening)

Facts: `mcp-session-2026-10-29.md` rows 9-12. Notifications mock follows row 9 (only-unread answers no count; HasUnreadMessages
False; search and type filters). WP5 Q3 (a) holds (Delete_Notifications reads only Id, row 10). LegacyShareObject (M-Q4,
row 11) waits for Connect2_Sharing_CS (the grouping logic). User decision (2026-10-29), WP6 Q2: (a) the three fetches at
start whose failure React dropped (FetchEventNotes of EventDetail and LDM_EventDetail_V2, GetCoordinatorDetails) send the
failure to the flow handler and keep their defaults, as TST (E1, E3).
User decision (2026-10-29), M-Q4: (b) a read-only TST probe of one search. Result (MCP session row 11c): a search
answers Label "" and at most 50 rows; the LegacyShareObject mock follows it (parity of LegacyShareObject clean).

User decisions (2026-10-29, late): the reversible rows (WP9-Q1, WP1-Q1 to Q3, FU 1-9, css_sets, the Notes pill rule)
are confirmed (a). Notes Q10: (a) keep EmptyListBorderless as a preset of `components/ui/EmptyState` (the jscpd
dedupe of auto decision 13); this replaces the page-local answer of Q10. Next work: (a) the open MCP facts.
Correction: the `flags.py scan` of the afternoon ran without `--survey` and `--screens` (the options have no default),
so routes without an analysis folder lost their flags. The scan ran again with both inputs; the flag route sync waits
for the user (the corrected facts changed the question).

User decisions (2026-10-29, late, after the corrected facts): flag route sync (a): `flags.py export` merges the
routes of OutSystems names that share a key and leaves out retired routes; the registry routes follow the export (the
TST bottom bar of 2026-10-27 reads neither C2NewBookmarks nor mobileDirectoryBookmarkNote); BottomBar README fixed.
PINUnlock (a): Splash navigations replace the Splash entry, as the TST router (MCP session row 14). Orbit facts (rows
15, 16): the mock success answers QRCodeErrorTypeId ""; Get_MilestoneInformation answers the AdminMeeting type and the
event QR flag (scenario `empty` removed). U1 stays unclear, no impact (row 13).


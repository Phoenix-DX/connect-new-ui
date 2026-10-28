# Build wave of 2026-10-27: major findings and "build now" items

The user ordered the build of the 27 major findings and the 30 "build now" items (`../infra-gaps.md` §10.4) on
2026-10-27, unattended. Ten Opus agents build one group each from the brief `../BUILD.md`. The orchestrator runs the
gates, records the results and writes the decisions the user must take in `pending-decisions.md`.

## Groups

| Group | Note | Items |
|---|---|---|
| B1 | `B1-contactus.md` | App_Menu_ContactUs F1 (blocker), F2, F3 |
| B2 | `B2-hostsurvey.md` | Legacy_OrbitEventsFlow F1 (blocker): the HostSurvey wizard |
| B3 | `B3-milestones.md` | Legacy_OrbitEventsFlow F2 (blocker): five milestone blocks |
| B4 | `B4-errors.md` | App_Common F1, App_Services F1, F2, Calendar F1, Directory_SupperMeetings F1, _shared F3 |
| B5 | `B5-lists.md` | App_CommonBlocks_Filter F1, App_Notifications F1, F2, Directory_Updates F1, App_Policies F1 |
| B6 | `B6-profile.md` | App_Profile F1: the address section |
| B7 | `B7-search.md` | Directory_Search F1, F2, F3 |
| B8 | `B8-ldm.md` | Legacy_LDMEventsFlow_V2 F1, F2 |
| B9 | `B9-messagedetail.md` | Legacy_MyNotificationsFlow F1, F2, F3, F6 |
| B10 | `B10-misc.md` | Legacy_OrbitEventsFlow F3, Legacy_OrbitAdminFlow F1, Notes F2, _libraries F1, ContactFlow Q1 |

Build items already done in the minor wave (`../fixes/`): App_Common Q3 (constant), App_Menu Q2, App_Policies C4,
Bookmarks Q2, Calendar Q2, Directory_OneSchoolGlobal Q2 (document.title), Home Q1, Home Q2, _libraries Q1. Recorded
without a build: App_PIN Q2. Checks: App_Services Q1 (the SortableJS source is in `migration/runtime-sources/`).

## Result (2026-10-28)

| Item | Result |
|---|---|
| Blockers | 3 of 3 built (B1 ContactUs form, B2 HostSurvey wizard, B3 five MilestoneDetail blocks) |
| Major findings | 26 of 27 built, 1 withdrawn (Legacy_OrbitEventsFlow F3: TST has the control, PD13). The three open parts of B9 are closed on 2026-10-28: the renderer library (PD7), PlaceholderLib (PD8) and the flag-off branch, out of scope (PD9) |
| "Build now" items | 30 of 30 closed: 20 in this wave, 9 in the minor wave, 1 recorded (App_PIN Q2) |
| Matrix | match 4552 (was 4370), partial 31 (78), missing 22 (152), differs 92 (97) |
| Decisions for the user | 13 (`pending-decisions.md`), each with an Opus and a Fable recommendation. The user answered all 13 on 2026-10-28: (a) for each (PD9 to PD13 per the Fable advice) |
| Cost | 10 build agents ≈ 2.9 M tokens, 2 advisors 0.16 M, knip clean-up 0.06 M (ledger `clarify-build-*`) |

Orchestrator work after the hand-backs:
- clone merges: FooterWithActions, OrbitNoResults and FreeSubscriptionActionDialog to shared folders; one
  NoItemsFound view for two blocks;
- the dead GetMilestoneScanFF code removed; the api/event barrel exports milestoneBlocks;
- 74 new unused exports cleared and 30 stale baseline rows deleted; two stale flag allow rows deleted;
- the api/policy tests on the TST GUIDs; one flaky preload assertion made to wait.

## Work after the user's answers (2026-10-28)

| Decision | Work |
|---|---|
| PD2 | `Choice` in `app/src/lib/ubtConnect/staticEntities.ts` holds the TST identifiers Yes, No and None (static-entities-tst.json `UBTConnect.choice`); hand-written values in six test and story files changed |
| PD7 | `adaptivecards` 2.5.0 installed with an exact pin; its `dist/adaptivecards.js` has the md5 of the TST bundle. `runtime.ts` sets the SDK. Only the MessageDetail chunk grows (raw +185 kB, gzip +39 kB); HomeFeed and Login do not change |
| PD8 | `app/src/pages/MessageDetail/placeholderLib.ts`: SetTextPlaceholdersValue, GetPlaceholderValue, Regex_Search and the two value actions, 1:1. `PlaceholderLib.model.js` fetched read-only. The endless recursion is known bug B19 (Fable advice). The mock gives fictional delimiters `##`, `@@`, `%%` and a FirstName placeholder in the seeded Assemble message |
| PD9 | Checklist rows 084 (n/a), 098, 130 and 133 (match for the TST branch) record the flag-off branch as out of scope |
| PD10 to PD12 | `app/docs/known-original-bugs.md` B15 to B18 |
| PD13 | `decisions.md` Q2 records the user's answer |

Gates: `npm run ci` green (4338 tests, 0 new unused exports, build OK); the 64-route parity sweep is clean (64 of 64, 0 diffs).

## Gates after the wave

1. Each agent: Vitest of its area, ESLint, Prettier, typecheck, arch.
2. Orchestrator: a second read of every "withdrawn" or "open" claim against the TST lines.
3. `npm run ci` (gen:api, typecheck, lint, arch, arch baselines, dup, unused), the full Vitest suite, `npm run build`.
4. Parity sweep of the 64 routes on port 5174 (`migration/tools/parity_sweep.py`); new blocks keep the captured states.
   Result 2026-10-28: 64 of 64 clean after one restore (OrbitLanding, see PD13).
5. STE lint of every note; the checklist rows and report §5 status through `../tools/apply_fixes.py`.
6. Decisions needed: an Opus advisor and a Fable advisor review each one and recommend; the user decides.
7. One local commit per wave (no push).

## Follow-ups named by the agents (no decision needed, not built in this wave)

- B4 (done 2026-10-28, item 2 of the user's list): checked again with the MCP and the live TST code, plus read-only
  probes on TST (`../review/item2-fetch-errors.md`). The user approved the Fable design (`../review/item2-solution.md`):
  one query-cache subscription raises a failed fetch once while a screen uses the query; `raiseToFlowHandler` has the
  ignore step, the "NoteCommunicationError" test and the error-page marker; the communication message reads
  `navigator.onLine`; SupperMeetingDetails raises nothing after the unmount (E9). `useFetchErrorToFlowHandler` is gone.
- B10 (done by the orchestrator): the dead `fetchMilestoneScanFF` code is removed (`api/event`, its test, the README).
- B6: no TST capture shows the address section (the captured account is a spouse): a capture with a householder
  account settles the review. `localityCache.allLocalitiesType` is "Connect_CacheType.AllLocalities" where the
  static entity says "AllLocalities" (FilterSheet uses it too): check in the review pass.
- B1: two ports of the runtime's custom dropdown exist (`pages/ContactUsDetails/components/CountryDropdown.tsx`
  and HostSurvey's `OSDropdownCustom.tsx`): merge them into `components/ui/os` after the wave, from B1's. OSValidation
  has no hook to register a widget that is not an input (`UnbuiltValidationWidget` used): add `useValidationWidget`.
  The eight-country mock list of GetCountriesNames is fictional (never recorded); keep it for the mock phase.
  `RangeSlider` is a new folder under `components/ui/` (noUiSlider 15.8.1 markup; the runtime file
  `OutSystemsUI_2_23.NoUISlider.js` fetched read-only, logged in `migration/knowledge/runtime-sources.md`).
- B9 (done by the orchestrator): one `containers/FreeSubscriptionActionDialog` for both pages; known bug B14 keeps its
  number. B9 (open): DataActionGetShare sends only ShareId and HasAccessToDeceasedHousehold.
- B2 (done by the orchestrator): the FooterWithActions and NoResults clones merged into `components/orbit`; `npm run
  dup` is under its limit again.
- B2 (open): `OSDropdownCustom` (HostSurvey) and `CountryDropdown` (ContactUs) merge into `components/ui/os` (list
  position, keyboard); VehicleItem's local DropdownCustom follows. The OutSystems UI 2.23 Tooltip (duplicate room
  name) and MultiResolutionImageLoader (Card_MemberInformation_Survey) are minimal ports to complete. The instance ids
  inside the data-step lists are `l<list>_<row>` without the runtime counter (no capture shows them).
- B3 (done by the orchestrator): `api/event/index.ts` exports `milestoneBlocks.ts`; the page imports `@/api/event`.
- B3 (open): shared `SanitizedHtml`: HouseholdCaptions starts with `<nobr>`. The port matches tag names against
  upper-case names with KEEP_CONTENT false. So AllowedTags "nobr,sup" drops the caption (renders empty): check on
  TST. Shared `generateScreenURL` adds a second `?` to the maps URL `…/dir/?api=1` (AssembleSummaryCard too).
  OrbitAdminTag stays NotCaptured as in AccommodationHost.
- Orchestrator (2026-10-28): the survey of 2026-10-13 is stale. Done the same day: the live scripts were fetched
  read-only and compared (`../review/survey-drift-2026-10-28.md`): 79 files with logic changes, 21 added, 20 removed,
  19 runtime sources changed; TST was last published on 2026-10-27.
- Decided (user, 2026-10-28): (c). The source switch is done: the live code is the source of truth, and 1885 checklist
  rows are `stale` (422 strong). A build or a new judge of a route starts from the live code and its stale rows.

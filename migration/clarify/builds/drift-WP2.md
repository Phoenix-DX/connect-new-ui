# Drift wave WP2: mock data to TST (2026-10-29)

Package: WP2 (class B) and the account role (M-Q3 a). Rows: directory 4-5, events R3, messages B2-B4, household R7.
Source: the TST captures of 2026-10-29 (`migration/screens/<route>/analysis/dom/default.html`) and the parity reports.

## Changes (mock data only, no page or component code)

| Row | File | Change |
|---|---|---|
| directory 4 | `app/src/mocks/fixtures/UBTConnect/DataActionGetCountriesStatistics/01-c8c3cc75.json`, `02-93a3ea9f.json` | CH: Households 34, Brothers 61, Sisters 52, Brethren / Members 113 (61 + 52; parity is clean with it) |
| directory 4 | `app/src/mocks/fictional/assemble.ts:52` | CH `[102, 33, 4]` → `[102, 34, 4]` |
| directory 5 | `app/src/pages/Updates_SingleList/mocks.ts` | 88 rows in the captured order: type, gender per row (new tuple column, `FEMALE_ROWS` removed), read state (3 read), day (groups 31 / 57 from the capture day 2026-10-29). 27 rows that TST still shows keep their old texts; 61 new fictional rows with the captured word lengths (a script checked every row against the capture) |
| directory 5 | `app/src/mocks/modules/UBTConnect/Directory_Updates/mocks.ts` | `item()` takes a gender; the 3 HomeFeed rows are Birth (girl), Taken, Marriage, with the captured days |
| events R3 | `app/src/mocks/fictional/ldm.ts`, `app/src/pages/LDM_MyEvents_V2/mocks.ts` | `pastEventGroups()`: the 3 newest meals, HostFullName "Allocation Pending" (`LDM_ALLOCATION_PENDING`). `LDM_PAST_EVENTS` (5 meals) stays for LDM_EventDetail_V2 |
| messages B2 | `app/src/pages/MessageList/mocks.ts` | 22 rows (20 on the first page, MaxRecords 20): 3 new rows on top ("Test Noti 2" read, "test" and "New Connect notification" unread), every older row read |
| messages B3 | `app/src/pages/LegacyShareObject/mocks.ts` | Label "Locality Members"; 50 fictional members of "Granite Falls, United States" (the captured 7 6 6 6 letters), at most MaxRecords. The search rule is marked as a mock assumption (M-Q4 open) |
| messages B4 | `app/src/pages/Menu/mocks.ts` | New scenario `member` (householder toggle off, member photo); `householder` stays. One handler factory for both |
| messages B4 | `app/src/pages/Profile/mocks.ts` | New scenario `member`: the shell user (Matías Vitale, a son), Vitale household (5 members: parents with actions, 3 children without), country US. `spouse` and `address` stay; the three scenarios use one handler factory |
| household R7 | `app/src/containers/SupperMeetingDetails/mocks.ts` | GetSubdivision (the handler is here, not in `pages/SupperMeeting_Carousel`): 9202 "Patagonia" 29 = 15 + 14, 7 households; 9203 "Ingeniero White" 19 = 10 + 9, 5 households; addresses with the captured word lengths; other ids get the recording |

Tests changed for the new data: `pages/Updates_SingleList/mocks.test.ts`, `Updates_SingleList.test.tsx`,
`api/update/repository.test.ts`, `pages/HomeFeed/HomeFeed.test.tsx`, `api/message/repository.test.ts`,
`pages/MessageList/MessageList.test.tsx`, `api/share/repository.test.ts`, `api/share/hooks.test.tsx`,
`pages/LegacyShareObject/LegacyShareObject.test.tsx`, `hooks/useProfileList.test.tsx`, `hooks/profileListState.test.ts`,
`pages/LDM_MyEvents_V2/LDM_MyEvents_V2.test.tsx` (5 → 3 meals; the Rosario filter now gives 0 cards).

## Checks

- `tsc --noEmit`: no error in WP2 files. Errors seen from another package: `api/notification/*`, `pages/Notifications/*` (WP5).
- `eslint`, `prettier --check` on the 22 changed files: clean. `npm run arch`: no violation. `npm run dup`: no clone in WP2 files.
- `vitest` (17 folders): 600 pass, 32 fail. All 32 are failure-path tests ("goes to the flow handler") in the hooks of
  AssembleEvents, Assemble_BrowseByCountry, BrowseCountries, CountryList, LDM_MyEvents_V2, useShareObject,
  useMessageList and useUpdatesSingleList. They use their own stubs, not the mock data. `platform/session/testSession.ts`
  is changed in the working tree by another package (probable cause, not checked).

## Parity (`route.py parity … --app http://localhost:5174`)

| Route / state | Before | After | Left (class) |
|---|---|---|---|
| Updates_SingleList default | 538 (triage) | 0 | none |
| HomeFeed default | 18 B (triage) | 0 | none |
| BrowseCountries default | 4 | 0 | none |
| CountryList default | 3 B (triage) | 0 | none |
| AssembleEvents default | 90 | 89 | 89 C: filter-sheet row widths (directory row 6, WP1) |
| Assemble_BrowseByCountry default | 1 | 0 | none |
| LDM_MyEvents_V2 default | 12 | 0 | none |
| MessageList default / search | 48 / 20 | 0 / 0 | none (run after the last change) |
| LegacyShareObject default | 52 | 0 | none |
| Menu default | 13 | 13 | runs scenario `householder` (capture-plan). With `--mock member` (parity_check.cjs, for information): 1, pixel 1.08 % (user name 6/6 letters, TST 6/8: B) |
| Profile default | 37 | 37 | runs scenario `spouse` (capture-plan). With `--mock member` (for information): 2: class `html.popup-disable-scroll` (WP4, A), pixel 3.92 % (household word lengths, see Q2: B) |
| SupperMeeting_Carousel default | 301 (6 text) | 281 (0 text) | layout 250, style 27, pseudo 3, class 1 (slide 3 skeleton section): household R8-R9 (C), not mine |

All loading, offline, filter and search states are clean. The last code change (MessageList read states) touches only
MessageList, whose parity ran after it.

## Questions

| Id | Question | Options | Recommendation |
|---|---|---|---|
| WP2-Q1 | `migration/capture-plan.json` still sets `scenarios.default` to `householder` (Menu) and `spouse` (Profile). Not my file. | a) set both to `member` now (WP1 or the orchestrator), then re-run parity; b) keep them and accept 13 + 37 B | a |
| WP2-Q2 | Profile `member` uses the Vitale household (5 members, same structure). TST shows other word lengths: name 6 1 6 8, locality 7 5, supper meeting 9 6, member names 6 6 6 6 7, life-cycle text 3 4 3 6 | a) accept as B rest (the cast stays the signed-in user's family); b) a new cast household with the captured lengths (`mocks/fictional/directory.ts` and `containers/HouseholdDetails/mockData.ts`, which WP4 also changes) | a |
| WP2-Q3 | LegacyShareObject: the capture shows 50 rows (block MaxRecords 50); the brief said 49 (the 49 missing rows of the old report plus 1 build row) | a) keep 50; b) 49 | a |
| WP2-Q4 | LDM timeline filter: `eventLocalities()` still lists the localities of all 5 fictional meals (Rosario, Puerto Madryn), but the timeline shows 3 | a) keep (no capture of the filter list); b) only the localities of the 3 meals | a |

## Notes

- Edits were made with one-off exact-match Python scripts (each replacement asserts exactly one match), not with Edit.
- The scratchpad is shared by the parallel agents. Another agent overwrote my `rows.ts` and `gen.py` there, and a wrong
  row list went into `Updates_SingleList/mocks.ts` for a few minutes. `tsc` found it; I rebuilt the rows from a private
  folder. Other agents that ran parity on Updates_SingleList or HomeFeed in that window can have stale results.
  Recommendation for later briefs: a private scratch folder per agent.
- M-Q4 (GetAvailableUsers search rule and page size) is still an open MCP fact.

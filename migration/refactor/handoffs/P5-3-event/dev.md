## Result
status: pass
summary: Added the domain `app/src/api/event/` (types, mapper, repository, keys, hooks, index, 3 tests) with all 29 calls of the "event" table, including OrbitLanding's GetEventsByMemberId (M9). The 16 screen `api.ts`/`types.ts` re-export the domain under their old names; Connect2_OrbitMobile_MUI calls the booklet max-rows functions; the shared Orbit and Assemble records moved to the domain and are re-exported. Inputs and mappings are unchanged. Typecheck, lint, format, arch, the full test suite and the build pass.

## Files changed
Made in the prefetch worktree `/private/tmp/claude-501/-Users-khaitruong-Projects-connect-new/b1c0f7f3-a5be-42a8-b170-074abce216da/scratchpad/wt-event` (branch rf/prefetch-P5-3-event, base 35296b3). Nothing is committed. 44 code files, which is a little more than the limit of about 40. The step was not split.

Added (9):
app/src/api/event/types.ts
app/src/api/event/mapper.ts
app/src/api/event/repository.ts
app/src/api/event/keys.ts
app/src/api/event/hooks.ts
app/src/api/event/index.ts
app/src/api/event/mapper.test.ts
app/src/api/event/repository.test.ts
app/src/api/event/hooks.test.tsx

Changed, screen adapters (32):
app/src/screens/AssembleDetail/api.ts
app/src/screens/AssembleDetail/types.ts
app/src/screens/AssembleEvents/api.ts
app/src/screens/AssembleEvents/types.ts
app/src/screens/EventBooklet/api.ts
app/src/screens/EventBooklet/types.ts
app/src/screens/EventDetail/api.ts
app/src/screens/EventDetail/types.ts
app/src/screens/GuestArrangements/api.ts
app/src/screens/GuestArrangements/types.ts
app/src/screens/HelpersDetail/api.ts
app/src/screens/HelpersDetail/types.ts
app/src/screens/HostSurvey/api.ts
app/src/screens/HostSurvey/types.ts
app/src/screens/LDM_EventDetail_V2/api.ts
app/src/screens/LDM_EventDetail_V2/types.ts
app/src/screens/LDM_MyEvents_V2/api.ts
app/src/screens/LDM_MyEvents_V2/types.ts
app/src/screens/MilestoneDetail/api.ts
app/src/screens/MilestoneDetail/types.ts
app/src/screens/OrbitAdminEventDetail/api.ts
app/src/screens/OrbitAdminEventDetail/types.ts
app/src/screens/OrbitAdminLanding/api.ts
app/src/screens/OrbitAdminLanding/types.ts
app/src/screens/OrbitLanding/api.ts
app/src/screens/OrbitLanding/types.ts
app/src/screens/QRCodeGenerate/api.ts
app/src/screens/QRCodeGenerate/types.ts
app/src/screens/TransportDetail/api.ts
app/src/screens/TransportDetail/types.ts
app/src/screens/ViewDocuments/api.ts
app/src/screens/ViewDocuments/types.ts

Changed, shared files (3):
app/src/shared/Connect2_Assemble_MUI/lib/structures.ts
app/src/shared/Connect2_OrbitMobile_MUI/lib/actions.ts
app/src/shared/Connect2_OrbitMobile_MUI/lib/structures.ts

Handoff (main tree):
migration/refactor/handoffs/P5-3-event/dev.md
migration/refactor/handoffs/P5-3-event/exemptions.json

Possible merge conflicts with the other prefetched patches:
- api/locality also changes `screens/AssembleEvents/api.ts` (getSubdivisionName) and `screens/LDM_MyEvents_V2/api.ts` and `types.ts` (getEventLocalitiesForFilter, EventLocality). This step does not change these functions or that type. It replaces the two event calls and their types around them, so expect conflicts there. `LDM_MyEvents_V2/types.ts` keeps `EventLocality` as the wire type. The domain type `EventCalendarFiltersAsText.Localities` uses the same contract schema (Connect2_OrbitMobile_BL__EventLocalitiesFilter), so a locality domain type with the same fields can be assigned to it.
- No file in common with api/update or api/app. This step does not change `shared/Connect2_LegacyShared/**`, `shared/UBTConnect_Utils/**`, `shared/UBTConnect/lib/actions.ts` or `platform/bootstrap/**`.
- The functions of other domains stay in the changed screen files and keep their names: the signed-image helpers (ActionGetSignedImagesInBulk, app), getHouseholdCoordinates and getHouseholdMembers (household), the member re-export (OrbitAdminEventDetail), getAssembleEventContacts (message) and checkDirectoryAccess in OrbitMobile actions.ts (app).

## Commands run
All commands ran in the worktree with Node 24.21.0.
npm --prefix app run typecheck → exit 0
npx vitest run src/api/event → exit 0; 3 files, 142 tests (mapper 16, repository 71, hooks 55)
npx vitest run src/api/event src/shared/Connect2_OrbitMobile_MUI src/shared/Connect2_Assemble_MUI src/screens/AssembleEvents → exit 0; 31 files, 266 tests
npx vitest run (full suite) → exit 0; 355 files, 1830 tests passed
npx eslint <the 44 changed files> → exit 0; 0 problems
npm run lint (eslint .) → 0 errors, 1 warning that was already there (src/components/ui/os/OSPopup/usePopupWidget.ts, rule 4)
npx prettier --list-different <the 44 changed files>; npm run format:check → all files formatted
npm run arch → 0 errors, 198 warnings. The 44 changed files have no new warning. The 9 api.ts files that no longer import legacy/os/os-wire (AssembleDetail, AssembleEvents, EventBooklet, EventDetail, HostSurvey, LDM_EventDetail_V2, OrbitAdminLanding, TransportDetail, ViewDocuments) no longer give a rule-9 warning. The rule-9 warnings of GuestArrangements, HelpersDetail, MilestoneDetail, OrbitAdminEventDetail, QRCodeGenerate (signed images), OrbitLanding (household) and LDM_MyEvents_V2 (locality) were there before. api/event imports only api/client and legacy/os (rule 7).
npx vite build → exit 0 (built; the warning about chunks larger than 500 kB was already there)
Parity was not run: there is no dev server for the worktree. The tester runs it.

## Deviations from the brief
- File count: 44 code files, a little more than about 40 (9 new, 32 screen adapters, 3 shared). The step was not split.
- No call moved into a query. The screens still call the functions in their flows, under the old names. §5.4 therefore adds no exemption: exemptions.json is `[]`. The domain has 25 query hooks (one for each data action, staleTime 0, gcTime 0, no retry by default) and one mutation (GetScanEventQRCode). None of them has a caller yet, the same as useMemberQuery and useAllCountriesQuery. The three server-action reads (GetMilestoneScanFF, GetBookletGuestsMaxRows, GetBookletHelpersMaxRows) have no hook: only flows call them.
- Shared record types moved into the domain, the same as CountryWithMapPosition in P5-2-country. These are DayFilter, OrbitEventTypeRecord, EventInfo, Event_Screen, OrbitMilestoneTypeRecord, MilestoneInfo, Milestone_Screen, MemberInformation, AssembleEventSummary and AssembleEventType. They are now defined in `api/event/types.ts`, and the two shared `structures.ts` files re-export them. The fields did not change.
- The mappers are the old adapter code, moved as it was. The only change: the 8 local copies of the null-date helper are now one helper with the same result. Two copies of the MemberInformation mapper and the hand-written Assemble wire interfaces were also replaced by one mapper and the contract types. No field is dropped that was not dropped before. MemberInformation still drops Accommodation and HouseHolderId2. A search of src outside the mocks and the schema found no reader of either field.
- Exports with no importer were removed: toMilestone (EventDetail/api), toAdminEventItem (OrbitAdminLanding/api), toEventsSummaryItem (OrbitLanding/api), MyEventsVariables (LDM_MyEvents_V2/api) and MilestoneWrapperVariablesWire (MilestoneDetail/api). The wire and result aliases that only the old api.ts files used were removed from the screen `types.ts` files. The wire aliases that the screen `mocks.ts` files import were kept.
- Every rewritten comment has no compiled-line reference. The api/event files have no `@origin` tag, because they do not port a screen or a block.
- This step does not change the docs: `app/src/api/README.md`, `app/docs/refactor/calls-by-domain.md` and the guides are for the documenter.
- The repository test reads request bodies with an MSW `request:start` listener. With it, the test checks the inputs that each call sends: the null input date of HostSurvey, the wrapped lists of MyTimeline, Assemble and the booklet, and ScannedQRCodeInfo.

## Questions for the user
none

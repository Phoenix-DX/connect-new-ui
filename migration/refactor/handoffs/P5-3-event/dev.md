## Result
status: pass
summary: Resolved the two conflicts of the prefetch patch on the main tree (LDM_MyEvents_V2 api.ts and types.ts): the locality re-exports of P5-2-locality and the event re-exports of this step both stay, and the event code is removed. I also removed one import in AssembleEvents/api.ts that the merge left unused. Typecheck, eslint, prettier and the 34 test files of the changed folders pass.

## Files changed
Main tree, branch refactor/architecture. Nothing is committed. 44 code files (9 new, 32 screen adapters, 3 shared), which is a little more than the limit of about 40. The step was not split.

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

Handoff:
migration/refactor/handoffs/P5-3-event/dev.md
migration/refactor/handoffs/P5-3-event/exemptions.json

Index state: the master applied the patch with `git apply --3way`, so the 44 files are staged. I staged the two resolved files (LDM_MyEvents_V2 api.ts and types.ts) with `git add`. The fix in `app/src/screens/AssembleEvents/api.ts` (unused import removed) is NOT staged: that file shows `MM`. Stage it before the commit.

## Commands run
All commands ran on the main tree with Node 24.21.0.
git ls-files -u; grep for conflict markers in app/src → none after the resolution
npm --prefix app run typecheck → exit 0
npx eslint <the 44 changed files> → first run: 1 error, `callAction` unused in src/screens/AssembleEvents/api.ts (both P5-2-locality and this step removed its last caller); after the fix: exit 0, 0 problems
npx prettier --list-different <the 44 changed files> → exit 0, all formatted
npx vitest run --maxWorkers=2 src/api/event src/api/locality src/shared/Connect2_Assemble_MUI src/shared/Connect2_OrbitMobile_MUI <the 16 changed screen folders> → exit 0; 34 files, 298 tests passed
npm run lint:arch → 0 errors, 194 warnings (198 on the prefetch base); no warning in a changed api.ts or types.ts file; eslint . → 0 errors, 1 warning that was already there (OSPopup/usePopupWidget.ts)
The full test suite, the build and parity were not run on the main tree: the tester runs them. The prefetch worktree ran the full suite (355 files, 1830 tests) and the build on the older base (35296b3).

## Deviations from the brief
- Conflict resolution of `screens/LDM_MyEvents_V2/api.ts`: the file now holds only two re-exports. `getEventLocalitiesForFilter` comes from `fetchEventFilterLocalities` of api/locality (as committed in P5-2-locality), and `getEventsForMyTimeline` comes from `fetchEventsForMyTimeline` of api/event (this step). The local timeline call, `toEventCalendar` and `MyEventsVariables` (no importer) are removed. The `callAction` and `osList` imports are removed because nothing uses them.
- Conflict resolution of `screens/LDM_MyEvents_V2/types.ts`: `EventLocality` stays the api/locality type `EventFilterLocality` (P5-2-locality). The event types come from api/event (this step). The timeline wire aliases (GetEventsForMyTimelineWire, TimelineEventGroup_V2Wire, EventCalendar_V2Wire, CalendarGuestItem_V2Wire) and the locality wire aliases are removed: no file imports them. `EventFilterLocality` can be assigned to the domain filter type `EventCalendarFiltersAsText.Localities` (typecheck passes).
- `screens/AssembleEvents/api.ts`: the merge applied cleanly, but the `callAction` import was left with no user. I removed it. This is the only change to the main tree besides the two resolved files.
- File count: 44 code files, a little more than about 40. The step was not split.
- No call moved into a query. The screens still call the functions in their flows, under the old names. §5.4 therefore adds no exemption: exemptions.json is `[]`. The domain has 25 query hooks (one for each data action, staleTime 0, gcTime 0, no retry by default) and one mutation (GetScanEventQRCode). None of them has a caller yet, the same as useMemberQuery and useAllCountriesQuery. The three server-action reads (GetMilestoneScanFF, GetBookletGuestsMaxRows, GetBookletHelpersMaxRows) have no hook: only flows call them.
- Shared record types moved into the domain, the same as CountryWithMapPosition in P5-2-country. These are DayFilter, OrbitEventTypeRecord, EventInfo, Event_Screen, OrbitMilestoneTypeRecord, MilestoneInfo, Milestone_Screen, MemberInformation, AssembleEventSummary and AssembleEventType. They are now defined in `api/event/types.ts`, and the two shared `structures.ts` files re-export them. The fields did not change.
- The mappers are the old adapter code, moved as it was. The only change: the 8 local copies of the null-date helper are now one helper with the same result. Two copies of the MemberInformation mapper and the hand-written Assemble wire interfaces were also replaced by one mapper and the contract types. No field is dropped that was not dropped before. MemberInformation still drops Accommodation and HouseHolderId2. A search of src outside the mocks and the schema found no reader of either field.
- Exports with no importer were removed: toMilestone (EventDetail/api), toAdminEventItem (OrbitAdminLanding/api), toEventsSummaryItem (OrbitLanding/api), MyEventsVariables (LDM_MyEvents_V2/api) and MilestoneWrapperVariablesWire (MilestoneDetail/api). The wire and result aliases that only the old api.ts files used were removed from the screen `types.ts` files. The wire aliases that the screen `mocks.ts` files import were kept.
- Every rewritten comment has no compiled-line reference. The api/event files have no `@origin` tag, because they do not port a screen or a block.
- This step does not change the docs: `app/src/api/README.md`, `app/docs/refactor/calls-by-domain.md` and the guides are for the documenter.
- The repository test reads request bodies with an MSW `request:start` listener. With it, the test checks the inputs that each call sends: the null input date of HostSurvey, the wrapped lists of MyTimeline, Assemble and the booklet, and ScannedQRCodeInfo.

## Questions for the user
none

## Result
status: pass
summary: Added the domain `app/src/api/member/` (types, mapper, repository, keys, hooks, barrel, 3 test files) for GetAvailableMembers (ShareSheet), GetMemberByMemberId (OrbitAdminEventDetail) and Member_EditDetails_Service (Profile). The 3 old `api.ts` files re-export the domain under their old names. Typecheck, tests (full suite 349 files), eslint, format:check and strict parity `--changed` (13 routes, both references) pass. OrbitLanding's GetEventsByMemberId and the user info are not in this step (see Deviations 1 and 2).

## Files changed
app/src/api/member/types.ts (added)
app/src/api/member/mapper.ts (added)
app/src/api/member/repository.ts (added)
app/src/api/member/keys.ts (added)
app/src/api/member/hooks.ts (added)
app/src/api/member/index.ts (added, barrel)
app/src/api/member/mapper.test.ts (added)
app/src/api/member/repository.test.ts (added)
app/src/api/member/hooks.test.tsx (added)
app/src/shared/UBTConnect_Utils/ShareSheet/api.ts (changed: `useGetAvailableMembers` re-exports `useAvailableMembersQuery`)
app/src/screens/Profile/api.ts (changed: `member_EditDetails_Service` re-exports `editMemberDetails`)
app/src/screens/OrbitAdminEventDetail/api.ts (changed: `getMemberByMemberId` re-exports `fetchMember`)
app/src/screens/OrbitAdminEventDetail/types.ts (changed: `ScannedMember` is an alias of the domain `Member`)
migration/refactor/handoffs/P5-2-member/dev.md (added)
No `git mv` was used. `migration/refactor-exemptions.json` is not changed (still `[]`).

## Commands run
npm --prefix app run typecheck → exit 0
npx vitest run src/api/member → 3 files, 15 tests passed
npx vitest run src/api src/shared/UBTConnect_Utils/ShareSheet src/shared/UBTConnect_Utils/ShareSheet_Section src/shared/UBTConnect_Utils/ShareSheet_SectionTitle src/screens/Profile src/screens/FeedItemDetail src/components/household src/screens/OrbitAdminEventDetail src/platform/device/barcodePlugin.test.ts src/mocks src/containers/HouseholdDetails → 22 files, 115 tests passed
npx vitest run (full suite) → 349 files, 1665 tests passed
npx eslint src/api/member src/shared/UBTConnect_Utils/ShareSheet/api.ts src/screens/Profile/api.ts src/screens/OrbitAdminEventDetail/api.ts src/screens/OrbitAdminEventDetail/types.ts → exit 0, no warning
npm run format:check (whole app) → all files use Prettier code style (after one line break in mapper.ts, made with the Edit tool from the Prettier output)
npx depcruise src --config .dependency-cruiser.cjs --output-type err → 0 errors, 210 warnings. No warning in `src/api/member/`. The 2 warnings on the changed files (rule 9: `ShareSheet/api.ts` and `OrbitAdminEventDetail/api.ts` → `legacy/os/os-wire.ts`) existed before: both files still use `osList`/`wireList` for their other calls. The new import edges (screens and shared → `@/api/member`; `api/member` → `api/client`, `legacy/os`) break no rule.
python3 migration/tools/refactor_parity.py --level strict --changed --ref both --app http://localhost:5174 --out migration/refactor-parity/P5-2-member-dev → 13 of 64 routes selected (AssembleDetail, BookmarksByGroup, FeedItemDetail, HomeFeed, HouseholdCarousel, HouseholdDetails, Locality_Details, OneSchoolGlobalDetails, OrbitAdminEventDetail, Profile, SupperMeeting_Carousel, SupperMeeting_Details, Updates_SingleList); PASS: outsystems 13/13 clean, self 13/13 clean, no timing-flake retry; 1.1 min. Report in the `--out` folder (not committed). The tool generated `app/docs/refactor/graph.json` (in `.gitignore`). The tester still runs the gate command with the P5-2-member report.

## Deviations from the brief
1. Scope, GetEventsByMemberId: `calls-by-domain.md` lists 4 member actions. This step moved 3. `ScreenBlock_OrbitLanding/DataActionGet_EventsByMemberId` (`screens/OrbitLanding/api.ts`) did not change. Reasons:
   - The inventory puts it under member only because of the keyword order ("member" comes before "event").
   - Its outputs are Orbit events and milestones (`Event_Screen`, `Milestone_Screen` of `shared/Connect2_OrbitMobile_MUI/lib/structures`), which the event cards read.
   - Rule 7 does not let `api/member` import `shared/`, and it does not let `api/event` import `api/member`. A member copy of these types would duplicate the event types of P5-3.
   - Proposal: P5-3 (`api/event`) takes it. See question 1.
2. Scope, user info: `move-map.csv` row `CacheControl_UserInfo` gives `src/api/member/hooks.ts` as the target, with the note "becomes useUserInfoQuery (P5-2, P5-4)". This step does not add `useUserInfoQuery`. Reasons:
   - Its calls are in the "app" group of `calls-by-domain.md`: `CacheControl_UserInfo/DataActionGetCacheInfo` and `ActionGetUserInformation` in `platform/session/userInfo.ts`. The master asked for no change to app code.
   - Both calls read and write the user-info memory cache. P5-4 replaces that cache, and the staleTime of the query comes from the cache TTL.
   - The cached object goes to many readers (the app start, Profile, Menu, ContactUsDetails, the Assemble filters). A mapper with fewer fields is not safe before P5-4 changes those readers.
   - See question 2.
3. GetRecentlyShared stays in `ShareSheet/api.ts`. It is the second data action of the same block, and it also answers SearchResult records. `calls-by-domain.md` puts it in the "app" group because its name has no keyword. The re-export comment names only GetAvailableMembers.
4. §5.4: `useAvailableMembersQuery` sets `staleTime: 0` and `gcTime: 0`. The old hook used the app defaults (`staleTime` 0, `gcTime` 5 min).
   - The calls stay the same: `staleTime` was already 0, and each submitted search is a new key.
   - One edge case is different. The ShareSheet unmounts and mounts again within 5 minutes, and the first search uses the same term. The old hook showed the cached list at once and fetched again. The new hook shows the skeleton until the answer comes. The original does this on each Refresh Query ("the search list shows the skeleton while its query loads", ShareSheet.tsx).
   - No parity state covers this case: the sheet is closed in every capture. There is no call difference, so there is no exemption entry.
5. Hook signature: `useAvailableMembersQuery(inputs, requestId, options)`. `enabled` is always `requestId > 0`: the options type omits `enabled`. So the old `api.ts` re-exports the hook as it is, without a wrapper.
6. Hooks with no caller yet: `useMemberQuery` and `useEditMemberDetailsMutation`. The flows call the repository functions (page-template "Hook shape"), as `api/household` does. Both hooks have tests (no cache; no retry; one call per save).
7. Domain types:
   - `MemberSearchResult` keeps 7 fields. It drops `Score`, `Latitude` and `Longitude`. A grep found no reader in ShareSheet, SearchResult_Item or the share action, which sends only `HouseholderId`.
   - `Member` keeps all 5 fields of `Directory_MemberById`.
   - `MemberAccountForm` is the contract type. The form is sent as it is, so no field can be dropped.
   - The fields are required, not optional as in `api/household`: the mapper fills each field, and the old `ScannedMember` had required fields. A required field can still go where the block expects the Partial `SearchResult`.
8. `OrbitAdminEventDetail/types.ts` changed, although the step text names only `api.ts`. `ScannedMember` was the same interface as the domain `Member`, so it is now an alias. `Profile/types.ts` (`AccountForm`) did not change: it comes from the contract and is the same type as `MemberAccountForm`.
9. No `@origin` tag. No file of `api/member` ports a screen or a block. The repository holds the calls of 3 owners: the ShareSheet block, a service action of UBTConnect and a server action of Connect2_OrbitMobile_MUI. Each function names its OutSystems action and owner. The new files have no compiled-line references. The removed functions of the old `api.ts` files took their `mvc.js:` references with them.
10. The MSW handlers stay in `ShareSheet/mocks.ts`, `Profile/mocks.ts` and `OrbitAdminEventDetail/mocks.ts`. The handler order did not change.
11. Merge note for the master: `screens/Profile/api.ts` also holds `useGetCountryInfo` (the country domain, prepared in parallel). This step changed line 3 (`import type { CountryInfo } from './types';`) and the end of the file. The country change will probably touch lines 1 to 3 too.
12. For the documenter:
    - `src/api/README.md` has no `member/` line yet.
    - `shared/UBTConnect_Utils/ShareSheet/README.md` says that `api.ts` holds the server data.
    - `calls-by-domain.md` keeps the OrbitLanding row under member until question 1 is answered.

## Questions for the user
Neither question blocks the step: it is complete under the choice described in Deviations 1 and 2.
1. Domain of `ScreenBlock_OrbitLanding/DataActionGet_EventsByMemberId`. Evidence: `calls-by-domain.md` puts it under member only by keyword order. Its outputs are Orbit event and milestone records, which the event cards read. Rule 7 blocks imports between domains.
   - Option A (recommended): `api/event` in P5-3, and `calls-by-domain.md` moves the row.
   - Option B: `api/member` now, with its own copy of the event and milestone types.
2. When to add `useUserInfoQuery` (move-map: "P5-2, P5-4").
   - Option A (recommended): P5-4, together with the memory-cache rewrite of `CacheControl_UserInfo` and `getUserInformation_Wrapper`.
   - Option B: a fix loop of this step adds `fetchUserInfo` and `useUserInfoQuery` to `api/member` now. They would be identity mappers with no caller, and P5-4 would set their cache times.

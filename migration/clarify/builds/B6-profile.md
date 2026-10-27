# B6 Profile address: build note

Group B6 built one item on 2026-10-27. No commit was made.

## App_Profile F1 (major): the address section of the householder

Decision: App_Profile Q1 (a), user, 2026-10-27 (`migration/clarify/decisions.md:70`).

### TST evidence

- View of the address section: `UBTConnect.App_Profile.Profile.mvc.js:1269-1716`.
- Label padding of the address rows: `Profile.mvc.js:1419`.
- Option lists of the two dropdowns: `Profile.mvc.js:1534-1542` and `Profile.mvc.js:1639-1646`.
- The two cache blocks in the view: `Profile.mvc.js:2596-2640` (aliases 57 and 58).
- OnChange_SubdivionDropdown: `Profile.mvc.js:2883-2904`.
- Action_RefreshSubdivionList: `Profile.mvc.js:2932-2965`.
- CacheControl_AllLocalitiesResult: `Profile.mvc.js:3026-3050`. CacheControl_AllSubdivisionsResult: `Profile.mvc.js:3160-3183`.
- OnChange_LocalityDropdown: `Profile.mvc.js:3233-3290`. The country refresh after "Skip" is dead code.
- End of CacheControl_UserInfo_WrapperResult: `Profile.mvc.js:3470-3472`.
- Householder checks of OnClick_Save: `Profile.mvc.js:3543-3592`.
- OnReady: `Profile.mvc.js:3943-3970`.
- Block CacheControl_AllSubdivisions: `UBTConnect_Utils.CacheControl.CacheControl_AllSubdivisions.mvc.js:32-44, 296-415`.
- DropdownSearch_ForceResizeOnOpen: `UBTConnect_Utils.controller.js:1415-1460`.
- DropdownNotValid: `OutSystemsUI_2_23.controller.js:8857-8967`.
- ListSort compares texts with `localeCompare`: `migration/runtime-sources/OutSystems.js` (DataTypes, List sort).
- Cache type identifier "AllSubdivisions": `migration/knowledge/static-entities-tst.json` (`UBTConnect_Utils.connect_CacheType`).

### What was built

- The address section replaces the NotCaptured marker. It has the SkeletonSection `$b29`, the container `AddressInfo` and
  the title.
- Each address item has a row with the label `l1-37_<n>-AddressLabel` and the input `l1-37_<n>-AddressInput`. The input is
  Text, MaxLength 50, and Mandatory is the item's Required.
- The input class is "form-control " plus "not-valid" while IsValid is False, then " OSFillParent".
- The containers `Locality` and `Subdivion` hold the two DropdownSearch widgets. Both have the prompt "-".
- LocalityDropdown shows Name + ", " + CountryName, grouped by CountryName.
- SubdivisionDropdown shows the subdivisions of the locality. It is disabled while LocalityId is "".
- The page renders CacheControl_AllLocalities (`$b57`) and CacheControl_AllSubdivisions (`$b58`) for a householder.
- The state has LocalCacheControl_AllLocalities, LocalCacheControl_AllSubdivions and SubdivisionFilteredList.
- The reducer ports the two Result actions, Action_RefreshSubdivionList and the two OnChanged actions.
- The localities are sorted by CountryName + " " + Name.
- After the user information, Action_RefreshSubdivionList runs after AccountFormOriginal was assigned (row 008).
- OnClick_Save of a householder clears the validation of `LocalityDropdown` and of the container `Subdivion`. The second
  call finds no dropdown, as compiled (row 089).
- An empty LocalityId or SubdivionId calls DropdownNotValid with "This field is required." and makes the save not valid.
- Each address item gets IsValid = not (Required and Value = "").
- OnReady calls DropdownSearch_ForceResizeOnOpen once.
- A failed GetCacheInfo of the two blocks goes to `raiseToFlowHandler` (decision App_Services Q3).
- Mocks: CacheControl_AllSubdivisions answers fictional subdivisions of Bahia Blanca, Buenos Aires and Rosario.
- Mocks: the scenario `?mock=address` gives the householder five fictional address items.
- The localities come from the recorded CacheControl_AllLocalities answer, as before.

### Files changed

- `app/src/pages/Profile/ProfilePage.tsx:15-16, 93-104, 125-131`: the section and the two cache blocks.
- `app/src/pages/Profile/components/AddressInformationSection.tsx` (new): the view of the section.
- `app/src/pages/Profile/components/AddressCacheControls.tsx` (new): the two cache blocks on `api/client/cache`.
- `app/src/pages/Profile/components/FormInput.tsx`: the props `mandatory` and `style`.
- `app/src/pages/Profile/hooks/profileState.ts:211-245, 287-357`: the state, the pure actions and the reducer cases.
- `app/src/pages/Profile/hooks/useProfile.ts:124-128, 164-187, 258-274`: OnReady, the save checks and the handlers.
- `app/src/pages/Profile/actions.ts` (new): DropdownSearch_ForceResizeOnOpen.
- `app/src/pages/Profile/mocks.ts`: the scenario `address` and the subdivisions handler.
- Outside the group's areas (additive, needed by the item):
  - `app/src/components/ui/lib/actions.ts:293-299`: `dropdownNotValid`.
  - `app/src/api/locality/` (`types.ts`, `mapper.ts`, `repository.ts`, `keys.ts`, `index.ts`): CountryName in the
    locality list, and `fetchAllSubdivisions` with its cache entry.
  - `app/src/components/filter/FilterSheet/FilterSheet.stories.tsx:24-25`: CountryName in the story data.
  - `app/src/components/ui/DropdownSearch/README.md`: the new client action and the Profile use.
- Tests: `Profile.test.tsx`, `actions.test.ts`, `AddressInformationSection.test.tsx`, `AddressCacheControls.test.tsx`,
  `profileState.test.ts`, `useProfile.test.tsx`, `components/ui/lib/actions.test.ts`, `api/locality/mapper.test.ts`,
  `api/locality/repository.test.ts`.

### Tests run

- `npx vitest run src/pages/Profile src/components/ui/lib src/components/ui/DropdownSearch src/api/locality
  src/containers/FilterSheet src/components/filter/FilterSheet src/mocks/contract.test.ts`: 20 files, 128 tests passed.
- `npx eslint` and `npx prettier --check` on the changed files: no errors.
- `npm run typecheck`: no error in the changed files. Three errors remain in `src/pages/HostSurvey` (work of another group).
- `npm run arch`: no new violation from these files. Three new rule-9 rows come from `src/pages/MessageDetail` and
  `src/pages/HostSurvey` (work of other groups).

### Proposed verdicts

| Rows                     | Proposed verdict | Reason                                                                     |
| ------------------------ | ---------------- | -------------------------------------------------------------------------- |
| 004                      | `match`          | OnReady calls the port once, as TST does.                                  |
| 005                      | `match`          | The three missing variables are in ProfileState.                           |
| 008                      | `match`          | The refresh runs after the original form was assigned.                     |
| 012, 013                 | `match`          | Both blocks render for a householder and raise Result.                     |
| 035, 036, 037, 038, 039  | `match`          | The section, the skeleton, the list and both dropdowns are built.          |
| 067, 069, 070, 071, 072  | `match`          | The handlers and the two Result actions are in the reducer.                |
| 088, 089, 090, 091, 092  | `match`          | The save checks are in OnClick_Save, in the TST order.                     |
| 093, 094, 099            | `match`          | BR-UBTCON-988, 989 and 994 are covered by the rows above.                  |
| 103                      | `match`          | The five strings are in the view and in the save checks.                   |

Open points for the review pass:

- Only the mock data shows the dropdowns open. No capture of TST shows the address section (the captured account is a spouse).
- On TST and in React, OnReady can run before the address section renders. In that case, ForceResizeOnOpen adds no
  listener. The TST timing was not checked.
- `localityCache.allLocalitiesType` is "Connect_CacheType.AllLocalities", but the static entity says "AllLocalities". It
  was not changed, because FilterSheet also uses it.

## Decisions needed

### D1: the home of the two cache blocks

- Evidence: architecture rule 9 forbids `pages/` to import `legacy/os/`. The shared block CacheControl_AllLocalities is in
  `legacy/os/cache/`. `quality.md` forbids new baseline rows.
- Built now: the page has its own two cache blocks on `api/client/cache` (`AddressCacheControls.tsx`).
- Options:
  - (a) Keep the page blocks until follow-up F37 replaces all cache blocks with api hooks.
  - (b) Add a `platform/` wrapper that exports the `legacy/os/cache` blocks to the pages.
  - (c) Do F37 now for these two blocks.
- Recommendation: (a). It keeps rule 9 green, and F37 already owns the move.

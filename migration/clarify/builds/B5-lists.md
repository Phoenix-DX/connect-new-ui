# Build B5 (lists), 2026-10-27

Group B5 builds five major findings: the filter search, two Notifications rules, the Updates empty state and the
policy application ids. All code is in `app/`. No commit.

## App_CommonBlocks_Filter F1: accent removal in the option search

- TST evidence:
  - `UBTConnect.App_CommonBlocks_Filter.FilterSheet_OptionList_Item.mvc.js:721-739`: Action_DefineOptions calls
    JSUtils_String_RemoveAccents on DisplayText and on Search_Selection. Then it runs Index with ignoreCase.
  - `UBTJavaScriptUtils.controller.js:3078-3084`: the JS node splits the text with NFD and removes U+0300-U+036F.
- Files changed:
  - `app/src/components/filter/FilterOptionList/FilterOptionList.tsx:21, 44-56`
  - `app/src/components/filter/FilterOptionList/FilterOptionList.test.tsx:67-98`
  - `app/src/components/filter/FilterOptionList/README.md:24-28`
- What was built:
  - The local `removeAccents` stub (it returned the text as is) is removed.
  - The search now uses the existing port `jSUtils_String_RemoveAccents` (`app/src/lib/jsUtils.ts:77-81`) on both
    sides. A search for "sao" finds "São Paulo", and "ORLÉ" finds "Orléans".
  - The README section "Not settled" is replaced by a "Search" section with the TST lines.
- Tests: `npx vitest run src/components/filter src/containers/FilterSheet` and the filter callers (CountryDetails,
  Assemble_BrowseByCountry, AssembleEvents): all pass.
- Proposed verdict: App_CommonBlocks_Filter-131 `match`.

## App_Notifications F1: Notifications_NoItemsFound

- TST evidence:
  - `UBTConnect.App_Notifications.Notifications.mvc.js:748`: If_HasNoNotifications is
    `not IsLoading and IsDataFetched and List.Empty`. The True branch is the block instance `$b13`.
  - `UBTConnect.App_Notifications.Notifications_NoItemsFound.mvc.js:126-338`: the widget tree and the two texts
    (:278, :315).
- Files changed:
  - `app/src/pages/Notifications/components/Notifications_NoItemsFound.tsx` (new, 1-105)
  - `app/src/pages/Notifications/components/staticEntities.ts:1-12` (CalendarBusyFill, TST value
    `connect-icon-calendar_busy_fill`)
  - `app/src/pages/Notifications/NotificationsPage.tsx:20, 156` (the NotCaptured marker is replaced)
  - `app/src/pages/Notifications/Notifications.test.tsx:91-100`
- What was built:
  - An outer CustomContainer: neutral-0, padding base, flex, centred, "full-width full-height".
  - An inner CustomContainer: neutral-0, padding small, border small neutral-3, radius large, flex column, centred,
    "full-width".
  - A CircleButton (Small_40, primary) with the CalendarBusyFill icon (neutral-0, Base_24).
  - The title "No Notifications Found" (neutral-10, base, semi-bold, "margin-top-base").
  - The text "We were unable to find any Notifications to display." (neutral-10, small, regular).
  - The instance ids are `$b13` and `b13-$b1` to `b13-$b6`, as the compiled aliases.
- Tests: `npx vitest run src/pages/Notifications`: all pass. The `?mock=empty` scenario shows the block.
- Proposed verdicts: App_Notifications-024, 070, 111, 112 `match` (built from the compiled view; no capture holds
  the pixels of this state).

## App_Notifications F2: the section Badge only when BadgeNumber > 0

- TST evidence: `UBTConnect.App_Notifications.Notifications_Header.mvc.js:290`: If_HasBadge
  `BadgeNumber > 0`. The False branch is empty.
- Files changed:
  - `app/src/pages/Notifications/components/Notifications_Header.tsx:18-21, 53-55`
  - `app/src/pages/Notifications/mocks.ts:7, 49-52, 65-68, 81` (new scenario `olderread`)
  - `app/src/pages/Notifications/Notifications.test.tsx:80-89`
- What was built:
  - The Badge renders only when `badgeNumber > 0`.
  - The mock scenario `?mock=olderread` marks every notification older than 30 days as read. The "Older" section
    then has no unread item and its header has no Badge.
  - The default mock keeps the captured read state, so the captured badges (9 and 7) do not change.
- Tests: `npx vitest run src/pages/Notifications`: all pass.
- Proposed verdicts: App_Notifications-068, 092 `match`.

## Directory_Updates F1: Updates_NoItemsFound

- TST evidence:
  - `UBTConnect.Directory_Updates.Updates_SingleList.mvc.js:736-737`: If_HasNoUpdates
    `not IsLoading and IsDataFetched and List.Empty`. The True branch is the block instance `$b13`.
  - `UBTConnect.Directory_Updates.Updates_NoItemsFound.mvc.js:125-338`: the same widget tree as
    Notifications_NoItemsFound, with the texts at :286 and :305.
- Files changed:
  - `app/src/pages/Updates_SingleList/components/Updates_NoItemsFound.tsx` (new, 1-105)
  - `app/src/pages/Updates_SingleList/components/staticEntities.ts:3-7` (CalendarBusyFill)
  - `app/src/pages/Updates_SingleList/components/UpdatesList.tsx:9, 34, 53` (the NotCaptured marker is replaced)
  - `app/src/pages/Updates_SingleList/components/UpdatesList.test.tsx:78-90`
  - `app/src/pages/Updates_SingleList/Updates_SingleList.test.tsx:99-108` (a page test; see the note below)
- What was built:
  - The block with the title "No Updates Found" and the text "We were unable to find any Updates to display.".
  - The structure, classes and ids are the same as in Notifications_NoItemsFound.
  - A search that finds no update ("Zanzibar Quokka") now shows the block, because the mock applies the filter.
- Note: the page test file is outside the `components/` area of the brief. The change adds one test only. The hooks
  and `actions.ts` of the page are not changed.
- Tests: `npx vitest run src/pages/Updates_SingleList`: all pass.
- Proposed verdicts: Directory_Updates-037, 112, 116, 117, 145, 146, 147 `match`.

## App_Policies F1: PolicyApplications are the TST GUID texts

- TST evidence:
  - `UBTConnect.App_Policies.AcceptPendingPolicies.mvc.js:374-386`: PolicyApplications is a list of
    `TextToIdentifier(connect_Applications.connect / directory / orbit)`.
  - `migration/knowledge/static-entities-tst.json:2809`: Connect `65d96f75-…`, Directory `d8997dfa-…`, Orbit
    `4b033840-…`.
- Files changed:
  - `app/src/pages/AcceptPendingPolicies/staticEntities.ts:14-21`
  - `app/src/pages/AcceptPendingPolicies/AcceptPendingPoliciesPage.tsx:12-14` (comment only)
  - `app/src/pages/AcceptPendingPolicies/mocks.ts:6, 14-19, 59-70, 76-91`
  - `app/src/pages/AcceptPendingPolicies/AcceptPendingPolicies.test.tsx:38-48`
  - `app/src/pages/AcceptPendingPolicies/hooks/usePendingPoliciesForm.test.tsx:20-27, 32-36, 66-71`
- What was built:
  - `Connect_Applications` now holds the three TST GUID texts. The old comment ("values not in the compiled code")
    is replaced.
  - The mock reads `PolicyApplications.List`. It returns the policies of the listed applications. The two fictional
    policies belong to Connect.
  - A new hook test checks that a list without the Connect GUID gets no pending policy.
- Tests: `npx vitest run src/pages/AcceptPendingPolicies`: all pass.
- Proposed verdicts: App_Policies-016, 074 `match`.

## Checks

- `npx vitest run src/components/filter src/containers/FilterSheet src/pages/Notifications
  src/pages/Updates_SingleList src/pages/AcceptPendingPolicies src/pages/CountryDetails
  src/pages/Assemble_BrowseByCountry src/pages/AssembleEvents`: 36 files, 204 tests pass.
- `npx eslint` and `npx prettier --check` on the changed files: clean.
- `npm run typecheck`: clean.
- `npm run arch`: 2 errors in `src/components/search/SearchResultItem/SearchResultItem.tsx`, which imports
  `platform/feedback`. That file belongs to another group. No error comes from the B5 files.

## Decisions needed

1. Server behaviour of GetPendingPolicies for the mock (App_Policies F1).
   - Evidence: the input is the list of application GUIDs. No source shows the server filter
     (ApplicationPolicies_CW is not in the dump).
   - Options: (a) the mock returns only the policies of the listed applications (built); (b) the mock ignores the
     input, as before.
   - Recommendation: (a). It is mock-only, and the brief asks the mock to read the ids. The backend contract decides
     the real behaviour.

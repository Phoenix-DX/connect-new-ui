# CR-HouseholdDetails-1: shared blocks — four behaviour differences seen on the HouseholdDetails parity

- Status: applied
- Raised by: HouseholdDetails, 2026-10-15
- Blocks: `src/shared/UBTConnect/Directory_EntityDetailsActions`, `src/shared/UBTConnect/lib/actions.ts`
  (`getSkeleton_UI_HouseholdMember`) or `HouseholdDetails_Members_Block`, `src/components/OSList` +
  `HouseholdDetails_Members_Block` + `HouseholdDetails_Block`, the ShareSheet popup (`src/shared/UBTConnect_Utils/ShareSheet`)
- Other routes using them: HouseholdCarousel, Profile, Locality_Details, every route with Directory_EntityDetailsActions
- Related question: HouseholdDetails decision question (route.py questions HouseholdDetails)

## 1. Actions menu stays a skeleton when the app-start sync ends after FetchContactDetails
- Evidence: `migration/screens/HouseholdDetails/parity/default.json` (class `extra .ubt-skeleton-section` on
  `b2-b33-b1-Placeholder_LoadingSection` and the two member menus; screenshot `default.build.png`). With
  `?mock=real&latency=0` the three menus never leave the skeleton (probe: 0.6-5 s); with mock latency they do.
- Cause: `Directory_EntityDetailsActions.tsx:348-350` reads `UBTConnect.Bookmarks_IsSynched` / `Notes_IsSynched` with
  the non-reactive `getClientVar` during render; `shell/startup.ts:153-155` sets them later; nothing re-renders the
  block. TST order is the same (FetchContactDetails calls.md #5/#8-#10 at 4.6-5.0 s, Sync_Info_GetMain #12 at 6.7 s) and
  the TST capture shows the loaded menu (dom/default.html).
- Expected change: read both with the reactive `useClientVar` (`shell/session.ts:139`).

## 2. Skeleton member rows have no chevron column
- Evidence: `parity/loading.json`, `offline.json`: `div.display-flex.flex-direction-column.justify-content-center:
  missing in build` ×5 (captured `dom/loading.html:331-345`, chevron `connect-icon-chevron_right`).
- Cause: `getSkeleton_UI_HouseholdMember` (`shared/UBTConnect/lib/actions.ts:387-389`) returns only the three
  assigned fields; the Members block tests `member.HasNavigation === true`
  (`HouseholdDetails_Members_Block.tsx:126,178`), but the structure default of HasNavigation is True
  (`migration/contract/sources/raw/Connect_Household_CS.model.js`, UI_HouseholdMemberRec `HasNavigation` default
  `true`, `HasCTAs` default `false`).
- Expected change: the skeleton record (or the domain mapping of UI_HouseholdMember) carries the structure defaults.

## 3. Member lists miss `list-loading` while GetHousehold is not fetched
- Evidence: `parity/loading.json`, `offline.json`: `div.OSFillParent.list.list--gap-s: missing .list-loading` ×2
  (captured `dom/loading.html:263, 720`).
- Cause: the OutSystems List adds ` list-loading` when `source_dataFetchStatus` is 0 and ` list-error` when 2
  (`migration/runtime-sources/OutSystemsReactWidgets.js`, List `render`); the Members block's lists take their source
  from inputs fed by `DataActionGetHousehold`, so the status flows down. `components/OSList` has no fetch-status input.
- Expected change: OSList accepts the source's fetch status; Members block and HouseholdDetails_Block pass it through.

## 4. `aria-hidden="true"` on `#reactContainer` while the ShareSheet popup is mounted
- Evidence: `parity/default.json` attr `div#reactContainer aria-hidden: true → ∅`; `dom/default.html:2` (the
  ShareSheet portal `popup-backdrop` is present, `dom/default.html:1390-1400`); not set in `dom/loading.html:2` (no portal).
- Expected change: the shared popup used by ShareSheet sets/removes `aria-hidden` on `#reactContainer` as the
  OutSystems Popup widget does (check the runtime source before porting).

## 5. To check: household photo skeleton after a failed GetSignedImagesInBulk (offline)
- Evidence: `parity/offline.json` class `extra .ubt-skeleton-section` on `b2-b4-b1-Placeholder_LoadingSection`
  (CW_Image.UBT_LazyImage of the household card); TST `dom/offline.html` shows the no-image placeholder
  (`ubt-lazy-image--no-image`, `connect-icon-home`) with the skeleton off. In the `error` mock scenario the clone keeps
  the skeleton. Check that UBT_LazyImage leaves its loading state when the signed-image call fails, as TST does.
  (The `loading` state shows the same difference, proposed as a capture timeout artifact in
  `migration/screens/HouseholdDetails/proposed-exemptions.json`.)

## Workaround in the route until applied
None possible in `src/screens/HouseholdDetails` (all inside shared blocks); the route composes the blocks unchanged.

## Resolution (foundation owner)
Foundation owner, 2026-10-15:
- §1 `Directory_EntityDetailsActions.tsx`: Bookmarks_IsSynched / Notes_IsSynched read with `useClientVar` (shell/session.ts:139).
- §2 `shared/UBTConnect/lib/actions.ts` getSkeleton_UI_HouseholdMember: `HasNavigation: true` (UI_HouseholdMemberRec default, Connect_Household_CS.model.js).
- §3 `components/OSList`: `sourceDataFetchStatus` (+ `DataFetchStatus` 0/1/2, OutSystems.js Model.DataFetchStatus): ` list-loading` / ` list-error` before `OSFillParent`, storeListLength skips Fetching (OutSystemsReactWidgets.js pretty :1263-1267, :1325-1334). HouseholdDetails_Members_Block takes `inHouseholdMembersDataFetchStatus` / `inNonHouseholdMembersDataFetchStatus` (mvc :274, :568); HouseholdDetails_Block tracks GetHousehold `dataFetchStatus` (callServerDataSource 0 → 1 / 2) and passes it (mvc :1737-1742).
- §4 `components/OSPopup/usePopupWidget.ts`: Popup widget lifecycle (pretty :2819-2912): aria-hidden on #reactContainer and html `popup-disable-scroll`, used by the share popup of Directory_EntityDetailsActions (mvc :827-831), ContactPopup, ConnectPatterns.Popup, ActionConfirmationDialog, DialogExitConfirmation.
- §5 `shell/memoryCache.ts`: a failed bulk callback answers undefined (no UBT_LazyImage of the 11 `offline` captures keeps its skeleton; no handler in Cache_SignedImageURL_Get / CallbacksJS).
- Parity 2026-10-15: HouseholdDetails loading 0 / offline 0; default class 3 + text 1 = bookmark (CR-HouseholdDetails-2 §2).

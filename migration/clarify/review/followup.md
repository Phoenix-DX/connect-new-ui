# Follow-up pass of clarify-screens (Fable, 2026-10-27)

Scope: the 29 `unclear` rows of the checklists and the "to re-check" items of `G1-review.md` to `G4-review.md`.
Sources: the TST compiled code that `migration/clarify/tools/tst_source.py` reads (survey, `migration/runtime-sources/`,
`migration/shell/sources/`), the user answers of 2026-10-27 (`migration/clarify/answers.json`), and the recorded
decisions. The pass made no MCP call: every fact came from a TST file. It changed no code.

Result: 18 rows settled (match 9, partial 3, differs 2, n/a 3, missing 2), 11 rows stay `unclear` with a sharper
question. Each touched report has a section `## 9. Follow-up pass (2026-10-27)`, and its counts (§1, §8) equal its
`checklist.json`. Every changed row has `verified: "live"`.

## 1. Rows settled

| Row | Element | Old | New | Evidence and reason |
|---|---|---|---|---|
| App_Common-025 | "Forgot Password?" | unclear | differs | user decision 2026-10-27, App_Common Q1 (a): the reset page of the identity provider is not migrated (D3(a)) |
| App_Common-031 | IdP_OnResetPassword toast | unclear | n/a | user decision 2026-10-27, App_Common Q1 (a): the path is out of scope; the callback cannot run |
| App_Common-054 | Splash load complete | unclear | differs | user decision 2026-10-27, App_Common Q4 (a): React waits for the end of the app start |
| App_Menu-040 | OnException of App_Menu | unclear | match | `migration/shell/sources/UBTConnect.App_Menu.controller.js:12-16` delegates to the App_Common handler, as `useMenu.ts:89-92` does |
| App_Menu_ContactUs-122 | IsEmailValid | unclear | partial (minor) | TST `UBTConnectLibrary.controller.js:7565-7569`: the same expression on `text.toLowerCase()`, no trim; React trims first (`contactUsDetailsState.ts:132`). Candidate finding |
| App_Menu_ContactUs-123 | IsPhoneNumberValid | unclear | partial (minor) | TST `:7647-7666`: the same expression on the text as is; React trims first (`:137`). Candidate finding |
| App_Notifications-069 | BR-UBTCON-982 preload branch | unclear | n/a | user decision 2026-10-27, App_Notifications Q2 (b): no carousel and no click handler on TST; the branch is dead on TST |
| App_Policies-025 | Get_MemoryCacheKey_UniqueKey | unclear | match | `UBTConnect_Utils.controller.js:2383-2384`: `Key = UniqueCacheKey`; React uses the same key |
| App_Policies-063 | device id store | unclear | missing | user decision 2026-10-27, App_Policies Q2 (a): store it in `localStorage["UUID"]` as TST (`:1385-1387`); F4 stands |
| App_Services-066 | BR-UBTCON-996, drag of a mandatory row | unclear | match | `SortableJS.controller.js:149-167, 375-389` with the two TST instances (`Services.mvc.js:209-212`, `:662-671`): no favourite can drop into the suggestions; React does the same. K1 stands |
| App_Services-079 | SetupList internals | unclear | match | `setupList.ts:32-217` follows `SortableJS.controller.js:103-181, 202-340, 342-470` branch by branch |
| Directory_Caroussel-067 | Get_IsInsideRenderBuffer | unclear | match | `UBTConnect.controller.js:4461-4462`: `Abs(Current - Active) <= In_RenderBuffer`; the row said the action was absent from that file, it is at `:4444` |
| Directory_Updates-148 | referenced block logic | unclear | n/a | user decision 2026-10-27, Directory_Updates Q2 (a): owned by flow _libraries (report `:54, 81-96, 382, 518, 527-529`) |
| Home-111 | fetch on a restored view | unclear | match | `OutSystemsReactView.js:7, 9` restore the state and then run `fireInitialize`; `OutSystems.js:17` runs `fetchData` with no check of the restore; no compiled Home file reads the flag. TST fetches again, as React |
| Legacy_OrbitEventsFlow-A121 | EventBooklet variable defaults | unclear | partial (minor) | 19 of 20 defaults agree. IsGuestView: TST true (`ScreenBlock_EventBooklet.mvc.js:118-119`, set again in OnInitialize `:2987`); React false until the guests fetch ends (`eventBookletState.ts:75`, `eventBookletDataFlows.ts:90`). Candidate finding |
| Legacy_OrbitEventsFlow-B069 | CheckDirectoryAccess Type | unclear | match | `ScreenBlock_GuestArrangements.mvc.js:491` passes `DirectoryAPIFilter.Member`; the card event carries the householder id only (`Card_MemberInformation.mvc.js:257, 336`) |
| Legacy_OrbitEventsFlow-B103 | CheckDirectoryAccess Type | unclear | match | `ScreenBlock_HelperDetails.mvc.js:472` passes `DirectoryAPIFilter.Member` |
| _shared-193 | OnApplicationReady exception | unclear | missing (minor) | `UBTConnect.controller.js:15398-15417`: a non-system exception goes to ScreenController_RaiseError, which calls `handleError(new Error(message))` (`UBTJavaScriptUtils.controller.js:3900`), so TST shows the exception toast (U10); `isSystem` is "instance of SystemException" (`OutSystems.js:2`). React logs only (`appStartSteps.ts:192-196`). Candidate finding |

The four candidate findings have no `F<n>` id yet. The owner of each report adds the id in §5 when the user
accepts them: App_Menu_ContactUs (trim before the two validators), Legacy_OrbitEventsFlow (IsGuestView default),
_shared (app-start toast).

## 2. Re-check items of the review files

| Review | Item | Result |
|---|---|---|
| G1 §2 | App_Menu_ContactUs Q3: the phone validator | Confirmed, with one difference: TST `UBTConnectLibrary.controller.js:7647-7666` uses `/^\+?(\d+( \|\-)?)*\d$/` on the text as is; React uses the same expression after `trim()`. Row 123 is now `partial` (minor). The e-mail validator has the same trim difference (row 122) |
| G1 §2 | App_Services Q1: SortableJS SetupList deny lists | Confirmed: `setupList.ts` is a faithful port of the JS node (`SortableJS.controller.js:103-470`): `parseDenyList` becomes the trimmed `denyList` argument, `normalizeIds`, `applyDenyList` and `isDeniedMove` are the same. Rows 066 and 079 are `match` |
| G1 §2 | App_Menu Q1: the OnException of App_Menu | Confirmed: `UBTConnect.App_Menu.controller.js:12-16` delegates to `UBTConnect.App_Common.controller.handleError`. Row 040 is `match` |
| G2 | Directory_Search F2 (`:3929-3937`) | Confirmed: the tag-change action sets SelectedCategory and TagList (`ScreenBlock_Search.mvc.js:3937-3941`), refreshes `Get_RecentClickedResults(5)` (`:3943-3944`) and then runs Action_RefreshSearch (`:3948-3949`). React `useSearch.ts:308-311` runs refreshSearch only, which returns at `:227` for a blank term. F2 stands |
| G3 | Legacy_MyNotificationsFlow F1 (share card) | Confirmed: `ScreenBlock_MessageDetail.mvc.js:393` renders `Share_UI.ShareObjectDetail_ExtendedShare` with the handlers SetFeedItemId, SubscriptionDenied and GoToObjectDetail (`:413, 427, 441`) |
| G3 | Legacy_MyNotificationsFlow F3 (adaptive card) | Confirmed, citation corrected: the `AdaptiveCardViewer` is inside `Connect2_LegacyShared.Widgets.NotificationDetailBlock.mvc.js:258`; MessageDetail passes `HostConfig` to that block (`ScreenBlock_MessageDetail.mvc.js:352`) |
| G4 | App_CommonBlocks_Filter F1, TST call site | Confirmed: `FilterSheet_OptionList_Item.mvc.js:729-734` filters the options with `Index(JSUtils_String_RemoveAccents(DisplayText), JSUtils_String_RemoveAccents(Search_Selection)) <> -1` when the search text is not empty (`:726`) |
| G4 | Legacy_OrbitAdminFlow F1 | Confirmed: `OrbitAdminLanding.mvc.js:244-252` navigates to OrbitAdminEventDetail with the six parameters and has no GetMilestoneScanFF branch (the file has no "MilestoneScan" text). React `useNavigateToEventDetail.ts:15-19` has the DEV branch |
| G4 | _libraries F1, which tap reaches the dialog | Confirmed, with a correction of the fix: neither tap reaches it. `SearchResultItem.tsx:116-121` renders the warning with no click handler; `useShareSheet.ts:137` returns for a disabled record. The platform has `showUpgradePopUp` and `navigateToUpgrade` (`platform/feedback/dialogs/subscription.ts:10, 21`), used by FilterSheetContainer, useHouseholdDetails and useConnectShare. The fix is two call sites, not a port of the actions |

## 3. Rows that stay unclear

| Row | Open point | What settles it |
|---|---|---|
| Directory_OneSchoolGlobal-056 | A navigation to the open screen with another id (Q1: (c), then (a)) | Read-only TST capture: with OneSchoolGlobalDetails open for one id, open an in-app link to a second id; record whether OnInitialize and the fetch run again. Then (a): React keeps the refetch, `known-original-bugs.md` records TST |
| Directory_Photobook-074, 076, 105 | SplideEvent_Moved and its console line (Q1) | A recorded decision, not a capture: one line in CR-Photobook-1 (not ported, rows become `differs`) or a port through the platform logger (rows become `missing`). The user answer of 2026-10-27 confirms that a record is needed |
| Directory_Updates-073, 074 | The scroll anchor of TST against the view cache of the shell (Q1: (b), then (a)) | Read-only capture on TST and in React with the same steps: scroll, tap an update, Back; compare the list offset, and on TST the keys `scrollAnchorId` and `scrollAnchorDelta`. Equal: record under U19, rows become `differs`. Not equal: F2 stands |
| Home-111 (settled as `match`) | Optional confirmation of the runtime reading | Read-only capture: open an update from HomeFeed, go Back, watch FetchUpdates and GetServices |
| Legacy_OrbitAdminFlow-031 | TST value of the LaunchDarkly flag `Mobile-Directory-list-virtualization` (Q2, no answer yet) | Read-only capture of the LaunchDarkly evaluation (the flag request of the LD client, or the HasAccess call) on OrbitAdminLanding; add the value to `migration/knowledge/flag-values-tst.json`. False: `partial` (React always disables the virtualization). True: `match` |
| Legacy_OrbitEventsFlow-J016, J017, J018 | Internals of 7 own Orbit blocks (two landing popups, three booklet blocks, two transport blocks) | A reader and judge pass of the 7 TST files in `migration/runtime-sources/` against their React files. No capture; the budget of this pass did not cover it |
| Notes-110 | Years sent by DataActionGetNotes after Apply (Q1: A) | Read-only TST capture: open the filter sheet, select one year, Apply; record the request body (Years, SortByNewest). Years present: React must send them (`partial`, finding). Years absent: `match` |

## 4. Notes

- DEV against TST: no new difference. The MCP was not used; the TST files held every fact.
- Rows that cite a file now in `migration/shell/sources/` or `migration/runtime-sources/` (App_Menu controller,
  SortableJS, UBTConnect_Utils, UBTConnectLibrary, the Orbit blocks) name the file with its line numbers.

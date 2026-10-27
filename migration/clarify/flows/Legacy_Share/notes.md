# Legacy_Share: reader notes (stage 1)

Flow screens: ConnectShare, LegacyShareObject (both built). Own block: HandleOnResumeOpenLink. No verdicts here.

## TST presence check

Pack elements absent on TST:
- `[DISABLED]` AuditShareViewEvent call on the success path of OnInitializeSharingScreen: not in
  UBTConnect.controller.js:15622-15712 (dead in the model).
- `[DISABLED]` GetShareAttributes call in OnInitializeSharingScreen: not in TST (dead in the model).
- `[DISABLED]` zOnApplicationEvent_Wrapper2 in AuditShareViewEvent: TST builds and serialises the JSON only
  (UBTConnect.controller.js:782-830).
- `[DEAD BRANCH]` ScreenEvent_OnInitialize `If False` (CountryList on DEV): present on TST as `&& false`
  (ConnectShare.mvc.js:268).
- Role UBTOne_User: TST `checkPermissions` calls `OS.RolesInfo.checkRegistered()` only (ConnectShare.mvc.js ~599,
  LegacyShareObject.mvc.js:379).

TST elements absent in the pack:
- ScreenBlock_ShareDetail, ScreenBlock_ShareObject and ProfileList (module Connect2_LegacyShared) are not in the
  pack. Their logic was read from the TST files named in references.md (Share_UI.*.mvc.js). Rows cite them.
- ScreenBlock_ShareObject has an `OnParametersChanged` that refreshes GetShareObjectTypeById
  (ScreenBlock_ShareObject.mvc.js:932-944) and a server action `ActionShareObject` (line 734) plus handlers
  HandleShareProfileList / DeferredHandleShareProfileList. Event Share of ProfileList is never raised.
- ProfileList: Input_SearchFilterOnChange / SearchProfile / OnClick / DeferredHandleShareObjectList / GetAvailableUsers
  OnAfterFetch (ProfileList.mvc.js:802-1030). Only partly compared (see gaps).
- ConnectShare model has the extra attribute `_shareIdInDataFetchStatus` (platform generated, no behaviour).

DEV vs TST differences seen:
- OnInitializeSharingScreen `IsRedirect` uses `NullTextIdentifier()` on both; React compares with `''`.
- TST Handle Error calls `OS.Logger.error(null, ex)`; React lines show no log call.
- Action_Redirect: TST uses `TransitionAnimation.None`; the React `navigate(path, params)` call passes no transition.
  `osNavigate.ts:22-23` says the default is SlideFromRight. Judge must check `goTo` in
  `app/src/platform/navigation/osNavigate.ts`.
- ConnectShare page returns `null` for `isRedirect`, including the sibling Dialog_AccessRestrictedAction_Legacy.
  DEV and TST put the dialog outside the `If`.
- LegacyShareObject OnInitialize order: React runs GetUserInformation_Wrapper in an effect after the block OnReady
  (page line 47); TST runs the screen OnInitialize first. See row for the question on User_AgeVisibility at OnReady.

## Pack gaps

- pack/blocks.md: only HandleOnResumeOpenLink has full text. Blocks of other flows (CommonUI_InsideLayout, PIN,
  Policy_Checker, UnsupportedVersion*, OfflineDataSyncEvents, WelcomeToConnect) are signatures. One row says so.
- pack/strings.md lists 19 literals; only two belong to this flow's screens. The other 17 come from blocks of
  other flows. No string of LegacyShareObject is listed (its strings are in TST block files; rows cover them).
- decisions.md `D10(a, V3e, V6` line is cut at the end of the file (decision ids on board rows).
- The `data.md` client variables are read only through shared blocks. Not traced further.
- Unread stretches: `app/src/pages/LegacyShareObject/hooks/profileListState.ts` lines 1-80 and 81-115 only
  skimmed (ShareProfiles build loop); `api/share/mapper.ts`; `platform/navigation/osNavigate.ts` `goTo`;
  `platform/session/userInfo.ts`; NavigationLanding TST file; Dialog_AccessRestrictedAction* TST files.
- KB pages (kb.md) were not read by the reader (judge reads them). BR ids in rows come from pack/kb.md titles.
- References without TST file: AndroidAppLinkOnResumeHandler, DeeplinkHandlerCentral (plugin blocks).

## Mock files per screen

- ConnectShare: `app/src/pages/ConnectShare/mocks.ts` (Get_ShareDetails, nine fictional ShareIds, others raise
  ServerException 'Share not found (mock message)').
- LegacyShareObject: `app/src/pages/LegacyShareObject/mocks.ts` (ScreenDataSetGetShareObjectTypeById,
  DataActionGetAvailableUsers, ServiceAPIGetHouseholdDetails, ServiceAPIGet_UI_CommunityBusinessShareCard,
  ActionShareObject write mock in collection LegacyShareObject.shares). Shared: `app/src/mocks/fictional/directory.ts`.
- Server side needed for production: Get_ShareDetails (Connect2_Sharing_CS), GetShareObjectTypeById aggregate,
  GetAvailableUsers data action, GetHouseholdDetails, Get_UI_CommunityBusinessShareCard, ShareObject (all
  Connect2_LegacyShared).

## Board lines of screens not built

None. Both screens are `built` (board.md lines 48 and 49).

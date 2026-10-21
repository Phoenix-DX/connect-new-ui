# Coverage for AssembleEvents

- UI states captured: default, loading, offline
- Runtime captures: 1 file(s), 11 call(s)
- Masked text nodes: 51, user images removed: 0
- Fetch failures during snapshot: 0

## Blocks referenced in code but not rendered in any captured state
Each one is a UI state (loading, empty, error, popup...) that still needs a capture, or a branch that never runs for this user.

- [ ] `App_Common.UnsupportedVersion_Wrapper`
- [ ] `App_Policies.Policy_Checker`
- [ ] `Assemble.AssembleSummaryCard`
- [ ] `Assemble.Assemble_FilterLocalityByCountry`
- [ ] `AssembleSkeleton.AssembleSummary_SkeletonList`
- [ ] `BasePatterns.Columns_Two`
- [ ] `BasePatterns.CustomContainer`
- [ ] `CacheControl.CacheControl_Policies`
- [ ] `ConnectPatterns.HighlightSearch`
- [ ] `ConnectPatterns.IconSVG`
- [ ] `Fingerprint.FingerprintScanner`
- [ ] `NavigationHandler.PreventBackNavigation`
- [ ] `NewConnect_Skeleton.NC_Card_Item_Text__Skeleton`
- [ ] `PIN.PinCode`
- [ ] `Private.PullToRefresh`
- [ ] `Reusable.Spinner`
- [ ] `ScrollAnchors.ScrollAnchor`

## Images referenced in code
- [ ] `img/Connect2_LegacyShared.User_rectangle.png`
- [ ] `img/UBTConnect.ConnectLogo.svg`
- [ ] `img/UBTConnect.ConnectLogoWhite.svg`
- [ ] `img/UBTConnectLibrary.ar.png`
- [ ] `img/UBT_CW.UK.png`
- [ ] `img/UBT_CW.au.png`
- [ ] `img/UBT_CW.bb.png`
- [ ] `img/UBT_CW.ca.png`
- [ ] `img/UBT_CW.ch.png`
- [ ] `img/UBT_CW.de.png`
- [ ] `img/UBT_CW.dk.png`
- [ ] `img/UBT_CW.fr.png`
- [ ] `img/UBT_CW.ie.png`
- [ ] `img/UBT_CW.it.png`
- [ ] `img/UBT_CW.jm.png`
- [ ] `img/UBT_CW.nl.png`
- [ ] `img/UBT_CW.nz.png`
- [ ] `img/UBT_CW.se.png`
- [ ] `img/UBT_CW.tt.png`
- [ ] `img/UBT_CW.us.png`
- [ ] `img/UBT_CW.vc.png`
- [ ] `scripts/OutSystemsUI_2_23.MWO.js`
- [ ] `scripts/OutSystemsUI_2_23.OutSystemsUI.js`

## Data/server actions declared in the screen and its blocks
- [ ] `DataActionGetSubdivisionName` (Connect2_Assemble_MUI.Assemble.ScreenBlock_AssembleEvents.mvc.js)
- [x] `DataActionGetAssembleEventTypes` (Connect2_Assemble_MUI.Assemble.AssembleSummary_List.mvc.js)
- [x] `DataActionGetAssembleMeetingSummaryList` (Connect2_Assemble_MUI.Assemble.AssembleSummary_List.mvc.js)

## Module-level server actions (called from client actions; check which ones this screen uses)
- [ ] `AddBookmark` (UBTConnect.controller.js)
- [ ] `AddBookmark2` (UBTConnect.controller.js)
- [ ] `DeleteBookmarkByBookmarkId` (UBTConnect.controller.js)
- [ ] `DeleteBookmarkByBookmarkId2` (UBTConnect.controller.js)
- [x] `FetchData_CacheableHouseholds` (UBTConnect.controller.js)
- [x] `FetchData_CacheableMapEntities` (UBTConnect.controller.js)
- [ ] `Get_ShareDetails` (UBTConnect.controller.js)
- [ ] `Get_UI_UpdateItems_UnreadCount_All` (UBTConnect.controller.js)
- [x] `Sync_Info_GetMain` (UBTConnect.controller.js)
- [ ] `UpdateItem_MarkAsRead` (UBTConnect.controller.js)
- [x] `AppManager_AfterInitialize` (UBT_AppManager.controller.js)
- [ ] `AppManager_ChangeDevice` (UBT_AppManager.controller.js)
- [ ] `AppManager_Login` (UBT_AppManager.controller.js)
- [ ] `AppManager_Logout` (UBT_AppManager.controller.js)
- [x] `AppManager_SynchAppContext` (UBT_AppManager.controller.js)
- [ ] `CS_CreateShareProfileLink` (UBTConnect_Utils.controller.js)
- [ ] `Get_RuntimeVersion` (UBTConnect_Utils.controller.js)
- [ ] `GetSignedImagesInBulk` (UBTConnect_Utils.controller.js)
- [x] `GetUserInformation` (UBTConnect_Utils.controller.js)
- [ ] `CS_CreateShareProfileLink` (Connect2_LegacyShared.controller.js)
- [ ] `GetAllApplicationEvents` (Connect2_LegacyShared.controller.js)
- [ ] `GetBulkSubdivisions_V2` (Connect2_LegacyShared.controller.js)
- [x] `GetCountriesBySubscription` (Connect2_LegacyShared.controller.js)
- [ ] `GetLocalityInformation` (Connect2_LegacyShared.controller.js)
- [ ] `GetMemberContactByCacheKey` (Connect2_LegacyShared.controller.js)
- [x] `GetNumberUnreadMessages` (Connect2_LegacyShared.controller.js)
- [ ] `GetSignedImagesInBulk` (Connect2_LegacyShared.controller.js)
- [ ] `GetSignedPhotosInBulk` (Connect2_LegacyShared.controller.js)
- [ ] `GetTimezoneInformation` (Connect2_LegacyShared.controller.js)
- [x] `GetUserInformation` (Connect2_LegacyShared.controller.js)
- [ ] `GetUserLocalitiesForCountryCodeWithGPS` (Connect2_LegacyShared.controller.js)
- [ ] `AddBookmark` (Connect2_Assemble_MUI.controller.js)
- [ ] `DeleteBookmarkByBookmarkId` (Connect2_Assemble_MUI.controller.js)

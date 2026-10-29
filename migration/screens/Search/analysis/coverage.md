# Coverage for Search

- UI states captured: default, loading, offline
- Runtime captures: 1 file(s), 10 call(s)
- Masked text nodes: 15, user images removed: 0
- Fetch failures during snapshot: 0

## Blocks referenced in code but not rendered in any captured state
Each one is a UI state (loading, empty, error, popup...) that still needs a capture, or a branch that never runs for this user.

- [ ] `App_Common.UnsupportedVersion_Wrapper`
- [ ] `App_CommonBlocks_Filter.FilterSheet_OptionChoice_Item`
- [ ] `App_Policies.Policy_Checker`
- [ ] `CW_Image.UBT_LazyImage`
- [ ] `CacheControl.CacheControl_AllLocalities`
- [ ] `CacheControl.CacheControl_Policies`
- [ ] `ConnectPatterns.HighlightSearch`
- [ ] `ConnectPatterns.IconSVG`
- [ ] `Directory_Search.SearchResult_Section`
- [ ] `Directory_Search.Search_BirthdayOptions`
- [ ] `Fingerprint.FingerprintScanner`
- [ ] `NavigationHandler.PreventBackNavigation`
- [ ] `PIN.PinCode`

## Images referenced in code
- [ ] `img/Connect2_LegacyShared.User_rectangle.png`
- [ ] `img/UBTConnect.ConnectLogo.svg`
- [ ] `img/UBTConnect.ConnectLogoWhite.svg`
- [x] `img/UBTConnectLibrary.ar.png`
- [x] `img/UBT_CW.UK.png`
- [x] `img/UBT_CW.au.png`
- [x] `img/UBT_CW.bb.png`
- [x] `img/UBT_CW.ca.png`
- [x] `img/UBT_CW.ch.png`
- [x] `img/UBT_CW.de.png`
- [x] `img/UBT_CW.dk.png`
- [x] `img/UBT_CW.fr.png`
- [ ] `img/UBT_CW.ie.png`
- [x] `img/UBT_CW.it.png`
- [x] `img/UBT_CW.jm.png`
- [x] `img/UBT_CW.nl.png`
- [x] `img/UBT_CW.nz.png`
- [x] `img/UBT_CW.se.png`
- [x] `img/UBT_CW.tt.png`
- [x] `img/UBT_CW.us.png`
- [x] `img/UBT_CW.vc.png`
- [ ] `scripts/OutSystemsUI_2_23.MWO.js`
- [ ] `scripts/OutSystemsUI_2_23.OutSystemsUI.js`

## Data/server actions declared in the screen and its blocks
- [x] `DataActionGet_FilteredRecentClickedResults` (UBTConnect.Directory_Search.ScreenBlock_Search.mvc.js)
- [ ] `DataActionFetchSearchResults` (UBTConnect.Directory_Search.ScreenBlock_Search.mvc.js)
- [x] `ScreenDataSetGet_SearchBirthdayOptions` (UBTConnect.Directory_Search.ScreenBlock_Search.mvc.js)
- [x] `DataActionGetCacheInfo` (UBTConnect_Utils.CacheControl.CacheControl_AllCountries.mvc.js)
- [x] `DataActionGetCacheInfo` (UBTConnect_Utils.CacheControl.CacheControl_UserInfo.mvc.js)

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
- [ ] `GetUserInformation` (UBTConnect_Utils.controller.js)
- [ ] `CS_CreateShareProfileLink` (Connect2_LegacyShared.controller.js)
- [ ] `GetAllApplicationEvents` (Connect2_LegacyShared.controller.js)
- [ ] `GetBulkSubdivisions_V2` (Connect2_LegacyShared.controller.js)
- [ ] `GetCountriesBySubscription` (Connect2_LegacyShared.controller.js)
- [ ] `GetLocalityInformation` (Connect2_LegacyShared.controller.js)
- [ ] `GetMemberContactByCacheKey` (Connect2_LegacyShared.controller.js)
- [x] `GetNumberUnreadMessages` (Connect2_LegacyShared.controller.js)
- [ ] `GetSignedImagesInBulk` (Connect2_LegacyShared.controller.js)
- [ ] `GetSignedPhotosInBulk` (Connect2_LegacyShared.controller.js)
- [ ] `GetTimezoneInformation` (Connect2_LegacyShared.controller.js)
- [ ] `GetUserInformation` (Connect2_LegacyShared.controller.js)
- [ ] `GetUserLocalitiesForCountryCodeWithGPS` (Connect2_LegacyShared.controller.js)

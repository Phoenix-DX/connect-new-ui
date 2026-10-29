# Coverage for Services

- UI states captured: default, loading, offline
- Runtime captures: 1 file(s), 8 call(s)
- Masked text nodes: 2, user images removed: 0
- Fetch failures during snapshot: 0

## Blocks referenced in code but not rendered in any captured state
Each one is a UI state (loading, empty, error, popup...) that still needs a capture, or a branch that never runs for this user.

- [ ] `ConnectPatterns.HighlightSearch`

## Images referenced in code
- [ ] `img/UBTConnectLibrary.CommunityCountries.svg`
- [ ] `img/UBTConnectLibrary.CommunityHouseholds.svg`
- [ ] `img/UBTConnectLibrary.CommunityLocalities.svg`
- [ ] `img/UBTConnectLibrary.CommunityMembers.svg`
- [x] `img/UBTConnectLibrary.CommunityTradelink.svg`
- [x] `img/UBTConnectLibrary.ElGusto.svg`
- [x] `img/UBTConnectLibrary.HR100.svg`
- [ ] `img/UBTConnectLibrary.OneSchoolGlobal.svg`
- [ ] `img/UBTConnectLibrary.Pin_Country.svg`
- [ ] `img/UBTConnectLibrary.Pin_House.svg`
- [ ] `img/UBTConnectLibrary.Pin_Locality.svg`
- [ ] `img/UBTConnectLibrary.Pin_Lock.svg`
- [ ] `img/UBTConnectLibrary.Pin_Member.svg`
- [ ] `img/UBTConnectLibrary.Pin_OneSchool.svg`
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
- [x] `DataActionGetServices` (UBTConnect.App_Services.Services.mvc.js)
- [ ] `Service_ConnectServices_ChangeOrder_Bulk` (UBTConnect.App_Services.Services.mvc.js)

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
- [ ] `CS_CreateShareProfileLink` (UBTConnect_Utils.controller.js)
- [ ] `Get_RuntimeVersion` (UBTConnect_Utils.controller.js)
- [ ] `GetSignedImagesInBulk` (UBTConnect_Utils.controller.js)
- [x] `GetUserInformation` (UBTConnect_Utils.controller.js)

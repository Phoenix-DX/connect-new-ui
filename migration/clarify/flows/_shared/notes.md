# _shared: reader notes (stage 1)

Unit: 33 client actions that 4 or more flows use, 67 client actions that no screen flow reaches, data.md, references.md.
Rows: see draft.json (verdict empty). Screen field = action name; `-` = client variable rows; OnApplicationReady = app-start chain.

## TST presence check (UBTConnect.controller.js, 22616 lines; 202 client actions defined)

- Pack actions absent on TST: 1.
  - Get_FormattedDistance (second part): no `define("UBTConnect.controller$Get_FormattedDistance"`. Board: Map is skip:variant (C2EnableMaps off on TST).
- The other 99 pack actions are defined on TST. Line of each: `define("UBTConnect.controller$<Name>"`
  (example: ToggleBookmarkItem_C2 :17122, HasAccessToRegion :13956, FCM_DeeplinkCallback :2569, OnOnline :15823).
- TST actions absent in the pack action list: OnApplicationReady (:15262-15425, a system action; rows in this draft come
  from TST, the pack has no body for it), plus 103 other client actions of screen flows (not checked one by one).
  Also seen on TST and not in the pack: TriggerOfflineDataSync (:17299, calls StartOfflineDataSync),
  OnApplicationReady_MobileKeyboardVisible / OnApplicationReady_BottomBarSlider (UBTConnectLibrary module).
- DEV model differs from TST in these places (checked in the compiled code):
  - GetBookmarkCategoryId_ByEntityTypeId: DEV maps Member to BookmarkCategory.Member and OneSchool Global to OneSchoolGlobal2;
    TST raises "Bookmarks not available" for Member (:7154-7266) and uses bookmarkCategory.oneSchoolGlobal.
  - GetShareType_FromEntity: DEV and TST both test `IsMyHousehold` after all entity cases (:11100-11215); React tests it inside the Household case.
  - ToggleBookmarkItem_C2: DEV has a LogMessage call before AddBookmark2; TST (:17122-17298) has none.
  - Upgrade_WebView, OpenGooglePlay_*, ExitApplicationForWebViewUpdate, FCM_*, LN_Maybe..., FRD_UserCallback,
    Directory_Updates_RefreshBottomBarCount, Get_IsUnsupportedVersion: TST has the same steps as DEV.
- No branch of the 100 pack actions was compared line by line against TST except: ToggleBookmarkItem_C2, the two entity
  switches above, Directory_Updates_RefreshBottomBarCount, FCM_DeeplinkCallback, FCM_NotificationCallback, FRD_UserCallback,
  LN_MaybeTriggerLocalNotification, OfflineDataSync*, Upgrade_WebView, OnApplicationReady. Others: DEV body copied as `os`.

## Pack gaps

- actions.md: the ConvertRecord argument of GetSkeleton_UI_HouseholdCard is cut (about 220 characters). Long assign lines of
  GetRecurrenceDescription, GetWeekIndexOptionLabel, GetRecurrentWeekdaysLabelByRecurrence are cut.
- GetDistinctYearsOptions: the local `Years` list is never appended in the model, so ListAny is always False.
- No pack body for OnApplicationReady, Cache_UserInfo_Get, PIN_Check, AppManager_* actions, FCM_ParseObject (other modules);
  references.md lists blocks only, no client actions of other modules. The row "GetUserInformation_Wrapper" and the
  FCM rows use TST for UBTConnect only.
- app.md "Mock handlers" says "no mock handler found" for 14 server actions; two are served elsewhere (AddBookmark2 and
  DeleteBookmarkByBookmarkId2: containers/EntityDetailsActions/mocks.ts; FetchData_*: platform/bootstrap/mocks.ts:199,206).
- app.md word-match "0 hits" does not mean absent: GetIconLabel..., GetLocalityLabel, Directory_Updates_MinDateToShow
  live under the same names; date helpers, recurrence, orientation, FCM and ElementCache have no React copy.

## Mock files (server and service actions of data.md)

- app/src/mocks/modules/Connect2_MyBookmarks_MUI/mocks.ts (AddBookmark, DeleteBookmarkByBookmarkId; legacy collection)
- app/src/mocks/modules/Connect2_Assemble_MUI/mocks.ts (AddBookmark, DeleteBookmarkByBookmarkId from ToggleBookmarkItem)
- app/src/containers/EntityDetailsActions/mocks.ts (AddBookmark2, DeleteBookmarkByBookmarkId2)
- app/src/platform/bootstrap/mocks.ts (FetchData_CacheableMapEntities :199, FetchData_CacheableHouseholds :206,
  Get_UI_UpdateItems_UnreadCount_All :222) and app/src/mocks/fixtures/UBTConnect/ServiceAPIGet_UI_UpdateItems_UnreadCount_All/
- GetHouseholdDetails: repository app/src/api/household/repository.ts:135; no handler found by name.
- No React repository or mock for: GetEventsByCacheKeys, GetNotesByItemId, GetSubdivisionLocation_BySubdivisionId,
  Get_Core_LocalityTimezone, Get_OneSchoolGlobalDetails, Household_GetMembers_Service, Member_ContactDetails_Service.

## Board lines (screens not built)

- MyCalendar, PersonalEventDetails, PersonalEventForm, Recurrence: skip:dead, "V7 skip:dead" (migration/board.md lines 75, 82, 83, 85).
  The calendar, recurrence, reminder, RSVP and month-grid actions (about 30 of the 67) only serve these screens.
- Map: skip:variant, C2EnableMaps off on TST (migration/board.md line 73). Photobook: built (line 34).

## Counts

- Rows 194: shared actions 59; client variables 13; server/service actions 18; unreached actions 85
  (67 one-row-per-action + 18 detail rows of FCM_DeeplinkCallback 8 - 1 shared, FCM_Notification 4, FRD 2, LN_Maybe 4);
  OnApplicationReady 19.
- "not found" in react: 95 rows.

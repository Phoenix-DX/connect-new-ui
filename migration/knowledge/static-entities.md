# Static entities (values not in the downloaded TST code)

The compiled `model.js` refers to static-entity records by key only (`get<Entity>Record("<guid>")`). The values come
from the OutSystems MCP (Service Studio, **DEV**: reference only, TST wins when they differ).

## UBTConnect.Photobook_Speed
Source: MCP `getDataModel` UBTConnect (DEV), 2026-10-14. Id (Integer, identifier) · Label (Text) · Order.

| Identifier | Id | Label | Order |
|---|---|---|---|
| FiveSeconds | 5000 | 5s | 1 |
| EightSeconds | 8000 | 8s | 2 |
| FifteenSeconds | 15000 | 15s | 3 |

Used by: `Set_InitialClientVariables` (`PhotobookCarousel_SelectedSpeed = Photobook_Speed.EightSeconds`, UBTConnect
controller :16008-16027; record key in model.js :27022-27026). Not cross-checked on TST (no TST source has the value).

## TST values (source of truth), 2026-10-15 (see the update of 2026-10-28 below)
`migration/knowledge/static-entities-tst.json` has all static-entity values of TST by name (514 entity views, own and referenced).
`migration/tools/static_entities.py` made it from `migration/runtime-sources/moduleinfo.json` and the compiled model.js names.
That file comes from a read-only GET of `/UBTConnect/moduleservices/moduleinfo` (user-approved). It gives these settled values:
- `UBTConnectLibrary.UBT_Icons`: Gift = `connect-icon-gift`, FeedItem = `connect-icon-feed`, InfoFill = `connect-icon-info_fill`.
- `UBTConnect.Photobook_Speed`: EightSeconds = 8000 (TST = DEV).
- `Connect_Services_CS.Connect_Services` (Text identifier = record name): Orbit, LDM, MyCalendar, Assemble, OrbitAdmin,
  MyNotes, Trove, HR100, CommunityTradelink, ElGusto, OneSchoolGlobal.
- `Connect2_Sharing_CS.Type_ShareObject` (Text): Feed = "Feed", Update = "Update", Household = "Household",
  Locality = "Locality", "My Household", "Supper Meeting", "OneSchool Global", "Campus&Co", CommunityNotice,
  LocalityContact. Share targets: "Copy link", Signal, Outlook, WhatsApp, "Share via".
Producer model.js files without getters (Connect_Services_CS, Connect2_Sharing_CS): names read from the values.

## TST values after the source switch, 2026-10-28
TST was published again on 2026-10-27. The switch of 2026-10-28 (user decision (c),
`migration/clarify/review/survey-drift-2026-10-28.md`) put the live moduleinfo (manifest version 15682) in
`migration/runtime-sources/moduleinfo.json`. The old file (version 15568) is in git at commit f9f68bfc.

`static_entities.py` now reads the record names from the live `migration/runtime-sources/*.model.js` first, then from
the captures of 2026-10-14. The file has 513 entity views. The values above are the same. Changes:
- `bookmarkCategory` (UBTConnect, UBTConnect_Bookmarks_MCS): the record OneSchoolGlobal is replaced by
  OneSchoolGlobal2 = "OneSchool Global". The React constant `app/src/lib/ubtConnect/staticEntities.ts:157` still has
  "OneSchoolGlobal". `UBTConnect_Utils.bookmarkCategory` has no OneSchool record, because its names come from the
  model.js of 2026-10-14. The HomeFeed constant (`app/src/pages/HomeFeed/staticEntities.ts:35`) is
  `Connect_Services` and did not change.
- Connect2_OrbitMobile_MUI: `qRCodeScanResult` (CheckedIn, AlreadyCheckedInForMilestone, CheckedInForOtherMilestone,
  NotAllocated, NotInvited, Moved, GenericError) replaces `qRCodeErrorType`; new `scanClient`, `clients`,
  `subscriptionPlan`; `orbitMilestoneType` adds six admin types (also in UBTConnect).
- Icons: `uBT_Icons` adds arrowDown, arrowUp and four SVG_Community icons; the icon sizes add ExtraSmall_10 and
  NonStandard_40. `launchDarkly_FF` adds MobileDirectoryHouseholdGallery (and MobileDirectoryLocalityContacts in
  Connect2_OrbitMobile_MUI).
- Removed: `UBTConnect.notificationDeepLinkParameter` (the live moduleinfo has no values for it);
  `UBTConnect.carouselDirection` and `UBTConnect.shareUserListType` (the live UBTConnect.model.js does not refer to
  them; the values of the producer modules did not change); `Connect2_MyBookmarks_MUI.myBookmarks_SortColumn` (TST
  removed the module). The other `Connect2_MyBookmarks_MUI.*` rows come from the model.js of 2026-10-14.

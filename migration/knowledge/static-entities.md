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

## TST values (source of truth), 2026-10-15
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

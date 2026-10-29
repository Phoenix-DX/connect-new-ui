# KB index of UI flow App_Cache

KB root: `../ubt_sharing_kb/connect/outsystems/apps` (os-kb extraction of Connect, DEV, 2026-10-05). Paths are relative to the project root (the KB is a sibling folder of the project). Rules quote the model and say `confirmed` or `inferred`.
Referenced modules have their own rule prefixes (UBT_AppManager: `BR-UAM-*`, UBTConnect_Utils: `BR-C2UTL-*`, …): grep the block name under the KB root to find them.
Read the UI pages fully; open a rule file only for the rules the report cites.

## UI pages of UBTConnect that name the flow or its screens

- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/app-shell.md` — App shell — start, login, layouts and the common in-layout block (flows `App_Common`, `App_Cache`, `SubLayout`) (2 names of this flow, 37 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/contact-us.md` — Contact Us (flow `App_Menu_ContactUs`) (1 names of this flow, 14 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/directory-locality.md` — Directory — countries and localities (flows `Directory_Locality`, `Directory_Interchange`, `Directory_CommonBlocks`, `zDEV_Directory_CommunityBusinessBlocks`) (1 names of this flow, 33 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/filter-sort-sheets.md` — Filter, sort and more-action sheets (flow `App_CommonBlocks_Filter`) (1 names of this flow, 15 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/map.md` — Map (flow `Map`) — explore map, preview, explore list and layer caches (1 names of this flow, 27 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/menu.md` — Menu, Terms & Policies and the menu list block (flow `App_Menu`) (1 names of this flow, 8 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/profile-services.md` — Profile (flow `App_Profile`) and Services favourites (flow `App_Services`) (1 names of this flow, 11 rules)

## Logic pages and cross-cut pages that name the flow's actions

- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/session-and-sync.md`: GetUserInformation_Wrapper_Assign
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/xcut/client-variables.md`: GetUserInformation_Wrapper_Assign

## Rules (BR-UBTCON-*) whose source element is a screen, block or action of the flow

| Element | Rule | Confidence | Title |
|---|---|---|---|
| GetUserInformation_Wrapper_Assign | `BR-UBTCON-530` | confirmed | Whether the user still has policies to accept is copied from the cached user information onto the device |

## Referenced modules: pages that name the referenced blocks and the server/service actions

| Name | Hits | Where (first 5) |
|---|---|---|
| CacheControl_UserInfo | 15 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/domains/caching/build/behaviour.md:90`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/domains/caching/build/behaviour.md:96`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/index/build/triage.md:104`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/findings.md:62` |

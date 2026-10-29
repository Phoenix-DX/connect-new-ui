# KB index of UI flow App_Services

KB root: `../ubt_sharing_kb/connect/outsystems/apps` (os-kb extraction of Connect, DEV, 2026-10-05). Rules quote the model and say `confirmed` or `inferred`.
Read the UI pages fully; open a rule file only for the rules the report cites.

## UI pages of UBTConnect that name the flow or its screens

- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/profile-services.md` — Profile (flow `App_Profile`) and Services favourites (flow `App_Services`) (2 names of this flow, 11 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/legacy-ldm-events.md` — LDM events (flows `Legacy_LDMEventsFlow`, `Legacy_LDMEventsFlow_V2`) (1 names of this flow, 10 rules)

## Logic pages and cross-cut pages that name the flow's actions

- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/ui-legacy-flows.md`: Services

## Rules (BR-UBTCON-*) whose source element is a screen, block or action of the flow

| Element | Rule | Confidence | Title |
|---|---|---|---|
| Services | `BR-UBTCON-995` | confirmed | A drag is classified locally as reorder, remove or add from the list it leaves and the list it enters; dropping at the same index does nothing |
| Services | `BR-UBTCON-996` | confirmed | Mandatory favourites hide the remove button, but nothing stops dragging them out of favourites |
| Services | `BR-UBTCON-997` | confirmed | Save sends the whole favourites list in one bulk call, only when something changed; new rows carry the caller's own user id from the client |
| Services | `BR-UBTCON-998` | confirmed | Moves are applied to the local lists, and favourites are renumbered 1..n in list order |

## Referenced modules: pages that name the referenced blocks and the server/service actions

| Name | Hits | Where (first 5) |
|---|---|---|
| Button | 30 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_MUI/rules/BR-C2LEG-698.md:29`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_MUI/rules/BR-C2LEG-696.md:28` |
| ButtonLoading | 8 | - |
| Columns_Three | 0 | - |
| Columns_Two | 1 | - |
| CustomContainer | 19 | - |
| CustomText | 9 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/ui/dialogs.md:13`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/ui/design-tokens.md:20` |
| FixedFooter | 2 | - |
| Icon | 26 | - |
| IconText | 5 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/ui/dialogs.md:14`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/ui/dialogs.md:62`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/rules/BR-C2UTL-317.md:22` |
| Layout_DetailPage | 7 | - |
| Service_ConnectServices_ChangeOrder_Bulk | 3 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Services_CS/logic/service-favourites.md:15`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Services_CS/rules/BR-C2SVC-298.md:30` |
| Service_ConnectServices_GetByUser | 4 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Services_CS/logic/service-favourites.md:13` |
| SkeletonSection | 15 | - |
| SortableList | 2 | - |
| SortableList_Draggable | 0 | - |

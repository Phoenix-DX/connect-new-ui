# KB index of UI flow Directory_CommonBlocks

KB root: `../ubt_sharing_kb/connect/outsystems/apps` (os-kb extraction of Connect, DEV, 2026-10-05). Paths are relative to the project root (the KB is a sibling folder of the project). Rules quote the model and say `confirmed` or `inferred`.
Referenced modules have their own rule prefixes (UBT_AppManager: `BR-UAM-*`, UBTConnect_Utils: `BR-C2UTL-*`, …): grep the block name under the KB root to find them.
Read the UI pages fully; open a rule file only for the rules the report cites.

## UI pages of UBTConnect that name the flow or its screens

- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/directory-entity-actions.md` — Directory — entity actions bar (`Directory_EntityDetailsActions`, flow `Directory_CommonBlocks`) (2 names of this flow, 14 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/directory-locality.md` — Directory — countries and localities (flows `Directory_Locality`, `Directory_Interchange`, `Directory_CommonBlocks`, `zDEV_Directory_CommunityBusinessBlocks`) (2 names of this flow, 33 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/contact-by-email.md` — Contact by email (flow `ContactFlow`) (1 names of this flow, 10 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/directory-household.md` — Directory — households and relations (flows `Directory_Household`, `Directory_Household_Blocks`) (1 names of this flow, 23 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/supper-meetings-oneschool.md` — Supper meetings, OneSchool Global and the entities carousel (1 names of this flow, 13 rules)

## Logic pages and cross-cut pages that name the flow's actions

- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/bookmarks-notes.md`: ToggleBookmarkItem_C2, AddBookmark2, DeleteBookmarkByBookmarkId2
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/helpers.md`: GetNameAndSurname_ByFullName
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/sharing.md`: GetShareType_FromEntity
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/ui-directory-navigation.md`: GetHouseholdDetails
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/xcut/client-variables.md`: GetShareType_FromEntity
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/xcut/validation.md`: ToggleBookmarkItem_C2

## Rules (BR-UBTCON-*) whose source element is a screen, block or action of the flow

| Element | Rule | Confidence | Title |
|---|---|---|---|
| Directory_EmptyState | `BR-UBTCON-810` | confirmed | Directory empty states read "No <entity> <location>" — pluralised with "s" only for interchanges |
| Directory_EntityDetailsActions | `BR-UBTCON-833` | confirmed | The directory actions bar offers a fixed set of actions per entity type; a Locality raises "Invalid option" and any other type "Bookmarks not available" |
| Directory_EntityDetailsActions | `BR-UBTCON-834` | confirmed | The actions bar fetches contact details for members, OneSchool Global, supper meetings and households only, and only when a call, e-mail or share action needs them |
| Directory_EntityDetailsActions | `BR-UBTCON-835` | confirmed | After fetching, Call is offered when any phone number exists and E-mail when there is an e-mail address or a mobile number; a fetch error disables every action |
| Directory_EntityDetailsActions | `BR-UBTCON-836` | confirmed | Bookmarking from the actions bar uses the Connect 2 bookmark store when the new-bookmarks flag is on, otherwise the legacy store; the menu shows Bookmark or Unbookmark from the local copy |
| Directory_EntityDetailsActions | `BR-UBTCON-837` | confirmed | Share types are resolved only for entity types that can be shared, and the share pop-up exists only with the extended-share flag |
| Directory_EntityDetailsActions | `BR-UBTCON-838` | confirmed | E-mail for a OneSchool Global entry goes straight to the school e-mail form; for anyone else it opens the message-channel pop-up |
| Directory_EntityDetailsActions | `BR-UBTCON-839` | confirmed | Contact pop-ups for OneSchool Global always use the OneSchool Global image (the host image goes to the share sheet), and a host-supplied name replaces the fetched name |
| Directory_EntityDetailsActions | `BR-UBTCON-840` | confirmed | Deleting a note from the actions bar removes it from the shown list and decrements the note count; the bar shows a skeleton until bookmarks and notes have synced |
| GetNameAndSurname_ByFullName | `BR-UBTCON-259` | confirmed | A full name is split on spaces: the last word is the surname and the words before it are the name |
| GetShareType_FromEntity | `BR-UBTCON-244` | confirmed | Share type per entity type — "My Household" is chosen only for an entity type that matched none of the earlier cases, so a Household is always shared as Household |
| ToggleBookmarkItem_C2 | `BR-UBTCON-237` | confirmed | Connect 2 bookmarking: the device copy is created only after the server confirms the add; a failure shows the add-error toast |
| ToggleBookmarkItem_C2 | `BR-UBTCON-238` | confirmed | Connect 2 un-bookmarking: the device copy is deleted only after the server confirms the delete; a failure shows the remove-error toast |

## Referenced modules: pages that name the referenced blocks and the server/service actions

| Name | Hits | Where (first 5) |
|---|---|---|
| ActionsMenu | 3 | - |
| AddBookmark2 | 7 | - |
| ContactByMessage_Wrapper | 15 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_MUI/rules/BR-C2LEG-779.md:27`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/domains/ui-components/build/behaviour.md:106`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/domains/ui-components/build/behaviour.md:112` |
| ContactPopup_ByPhone | 16 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_MUI/rules/BR-C2LEG-937.md:22` |
| CustomContainer | 19 | - |
| DeleteBookmarkByBookmarkId2 | 5 | - |
| EmptyList | 4 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/ui/search-sheet.md:14`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/ui/share-sheet.md:31` |
| GetHouseholdDetails | 12 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_LegacyShared/module.md:49`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_LegacyShared/rules/BR-C2LEG-531.md:26` |
| GetNotesByItemId | 10 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-services/index/build/triage.md:146`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/findings.md:113`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Notes_CS/logic/notes.md:12` |
| GetSubdivisionLocation_BySubdivisionId | 5 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-services/findings.md:78`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Subdivision_CS/logic/subdivisions-and-interchanges.md:16`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Subdivision_CS/module.md:81` |
| Get_Core_LocalityTimezone | 7 | - |
| Get_OneSchoolGlobalDetails | 14 | - |
| Icon | 26 | - |
| Member_ContactDetails_Service | 5 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-services/domains/household/build/behaviour.md:328`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Household_CS/logic/member-account.md:3`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Household_CS/rules/BR-C2SVC-151.md:5` |
| NotesSheet | 33 | - |
| SharePopup | 15 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/domains/ui-components/build/behaviour.md:178`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/domains/feature-flags/build/behaviour.md:166`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/ui/contact-popups.md:25` |
| ShareSheet | 85 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_MyBookmarks_MUI/ui/group-page.md:24`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_Assemble_MUI/logic/bookmarks-sharing.md:39`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_Assemble_MUI/module.md:61`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_Assemble_MUI/rules/BR-C2LEG-043.md:28`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_LegacyShared/rules/BR-C2LEG-528.md:30` |
| ShareableObject_Generic | 17 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_MyBookmarks_MUI/rules/BR-C2LEG-193.md:25`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_MyBookmarks_MUI/rules/BR-C2LEG-193.md:38`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_Assemble_MUI/module.md:61`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_Assemble_MUI/rules/BR-C2LEG-043.md:28`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_LegacyShared/rules/BR-C2LEG-527.md:28` |
| SkeletonSection | 15 | - |

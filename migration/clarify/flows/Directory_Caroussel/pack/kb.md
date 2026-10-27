# KB index of UI flow Directory_Caroussel

KB root: `../ubt_sharing_kb/connect/outsystems/apps` (os-kb extraction of Connect, DEV, 2026-10-05). Paths are relative to the project root (the KB is a sibling folder of the project). Rules quote the model and say `confirmed` or `inferred`.
Referenced modules have their own rule prefixes (UBT_AppManager: `BR-UAM-*`, UBTConnect_Utils: `BR-C2UTL-*`, …): grep the block name under the KB root to find them.
Read the UI pages fully; open a rule file only for the rules the report cites.

## UI pages of UBTConnect that name the flow or its screens

- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/supper-meetings-oneschool.md` — Supper meetings, OneSchool Global and the entities carousel (7 names of this flow, 13 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/directory-household.md` — Directory — households and relations (flows `Directory_Household`, `Directory_Household_Blocks`) (2 names of this flow, 23 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/design-tokens.md` — Design tokens used across UBTConnect (whole module) (1 names of this flow, 2 rules)

## Logic pages and cross-cut pages that name the flow's actions

- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/helpers.md`: GetNameAndSurname_ByFullName, GetSkeletonList_UI_HouseholdMembers, Get_CurrentEntityHeader, Wait
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/bookmarks-notes.md`: ToggleBookmarkItem_C2, AddBookmark2, DeleteBookmarkByBookmarkId2
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/xcut/client-variables.md`: GetShareType_FromEntity, GetUserInformation_Wrapper_Assign, Wait
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/calendar-misc-date-actions.md`: GetSekeletonList_UI_OneSchoolGlobal_EventCard, GetSkeleton_UI_OneSchoolGlobal_EventCard
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/session-and-sync.md`: GetUserInformation_Wrapper, GetUserInformation_Wrapper_Assign
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/ui-directory-navigation.md`: HasAccessToRegion, GetHouseholdDetails
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/region-access.md`: HasAccessToRegion
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/sharing.md`: GetShareType_FromEntity
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
| EntitiesCarousel | `BR-UBTCON-904` | confirmed | The entities carousel opens at the caller's starting position unless it already has an active slide (restored view) |
| EntitiesCarousel_Element | `BR-UBTCON-903` | confirmed | A carousel slide renders supper-meeting details or household details by entity type, and only while it is near the active slide |
| External_Link | `BR-UBTCON-334` | confirmed | An external link opens through the RedirectToURL external site on iOS and through the in-app browser helper elsewhere |
| GetNameAndSurname_ByFullName | `BR-UBTCON-259` | confirmed | A full name is split on spaces: the last word is the surname and the words before it are the name |
| GetSekeletonList_UI_OneSchoolGlobal_EventCard | `BR-UBTCON-175` | confirmed | While OneSchool Global events load, the list shows ListLength placeholder event cards (4 unless the caller says otherwise) |
| GetShareType_FromEntity | `BR-UBTCON-244` | confirmed | Share type per entity type — "My Household" is chosen only for an entity type that matched none of the earlier cases, so a Household is always shared as Household |
| GetUserInformation_Wrapper_Assign | `BR-UBTCON-530` | confirmed | Whether the user still has policies to accept is copied from the cached user information onto the device |
| Get_CurrentEntityHeader | `BR-UBTCON-262` | confirmed | The carousel header is the current row's label for a single header, otherwise the label of the entry whose index matches the current household; no match gives an empty header |
| Get_IsInsideRenderBuffer | `BR-UBTCON-516` | confirmed | A carousel element is rendered only when it is within RenderBuffer positions of the active element, inclusive |
| Get_LookupSection | `BR-UBTCON-517` | confirmed | Section labels "Action(s)" and "Household(s)" follow the lowercase flag; the OneSchool statistics label is always "Show student numbers" |
| HasAccessToRegion | `BR-UBTCON-252` | confirmed | A Global-plan user has access to every country and locality |
| HasAccessToRegion | `BR-UBTCON-253` | confirmed | A Regional or AdvancePlus user has access to a target whose country is one of their subscribed countries, matched by name or code; the locality is not checked |
| HasAccessToRegion | `BR-UBTCON-254` | confirmed | A Free-plan user has access only to their own country (when no locality is targeted) or their own locality |
| HasAccessToRegion | `BR-UBTCON-255` | confirmed | A user on any plan other than Global, Regional, AdvancePlus or Free has no regional access in the app — the server's map rule grants such plans their subscribed countries |
| HouseholdDetails_Block | `BR-UBTCON-812` | confirmed | A hidden household is flagged only on the user's own household ("Your profile is private and only visible to you"); details are never withheld on the client |
| HouseholdDetails_Block | `BR-UBTCON-813` | confirmed | A household's address and photo are shown only when the household is not hidden, deceased or ancestry — and the address is non-empty |
| HouseholdDetails_Block | `BR-UBTCON-814` | confirmed | The household Photos tab is disabled for deceased, ancestry and hidden households |
| HouseholdDetails_Block | `BR-UBTCON-815` | confirmed | From a deceased or ancestry household the locality and supper-meeting links are disabled; otherwise they open with no plan check |
| HouseholdDetails_Block | `BR-UBTCON-816` | confirmed | The photobook entry is hidden without the photobook permission and opens only for a household with a locality; otherwise "Photobook is currently unavailable…" |
| HouseholdDetails_Block | `BR-UBTCON-817` | confirmed | Sharing a household opens the share sheet only with the extended-share flag (otherwise "coming soon"); deceased households cannot be shared from the actions bar |
| HouseholdDetails_Block | `BR-UBTCON-818` | confirmed | Tapping a household member always opens the relations screen when the block is enabled; the away-parent routing is switched off |
| HouseholdDetails_Block | `BR-UBTCON-819` | confirmed | A married child (non-household member) opens their own household when the block is enabled |
| HouseholdDetails_Block | `BR-UBTCON-820` | confirmed | In profile preview, the household shows the user's unsaved account form: address, age display, and only the phone numbers marked shown |
| HouseholdDetails_Block | `BR-UBTCON-821` | confirmed | Household ages follow the viewer's own age-visibility setting, and a cached household is refetched when that setting changed |
| HouseholdDetails_Members_Block | `BR-UBTCON-823` | confirmed | Tapping a household member's row opens relations for anyone but a child; the navigation chevron follows the server's flag, the row tap ignores it |
| HouseholdDetails_Members_Block | `BR-UBTCON-824` | confirmed | A married child's household opens only when the plan covers their locality — the row tap does not check the server's navigation flag |
| HouseholdDetails_Members_Block | `BR-UBTCON-825` | confirmed | Member contact actions appear only when the server marks the member as having CTAs, and call/e-mail are disabled for a deceased member; lifecycle text is shown as sent |
| HouseholdDetails_TimelinePhoto | `BR-UBTCON-843` | confirmed | A household timeline photo is drawn only when it has a background image |
| Household_GalleryCard_List | `BR-UBTCON-841` | confirmed | A supper meeting's household gallery shows the directory empty state when it has no households |
| IsHouseholdDetails_InAncestryModeView | `BR-UBTCON-518` | confirmed | A household is in ancestry-mode view only if its id is in an in-memory list kept on the page window |
| SupperMeeting_DetailsBlock | `BR-UBTCON-899` | confirmed | Supper-meeting details are fetched by subdivision id each time the view is opened fresh; there is no subscription or country check on the client |
| SupperMeeting_DetailsBlock | `BR-UBTCON-900` | confirmed | Tapping a household in a supper meeting opens the carousel of all the meeting's households when the carousel flag is on, otherwise its details |
| SupperMeeting_HouseholdList | `BR-UBTCON-901` | confirmed | A supper meeting's households are loaded by subdivision when the view is opened fresh |
| SupperMeeting_ImageCard_Content | `BR-UBTCON-902` | confirmed | The supper-meeting card shows the address (with address pop-up) only when the caller asks for it |
| ToggleBookmarkItem_C2 | `BR-UBTCON-237` | confirmed | Connect 2 bookmarking: the device copy is created only after the server confirms the add; a failure shows the add-error toast |
| ToggleBookmarkItem_C2 | `BR-UBTCON-238` | confirmed | Connect 2 un-bookmarking: the device copy is deleted only after the server confirms the delete; a failure shows the remove-error toast |
| Wait | `BR-UBTCON-278` | confirmed | The server Wait action spins until the requested number of seconds has passed, unless the IsKi site property is set |

## Referenced modules: pages that name the referenced blocks and the server/service actions

| Name | Hits | Where (first 5) |
|---|---|---|
| AddBookmark2 | 7 | - |
| Carousel | 2 | - |
| DeleteBookmarkByBookmarkId2 | 5 | - |
| GetHouseholdCoordinates | 8 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_BL/logic/event-detail.md:15`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_BL/module.md:77`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_BL/xcut/settings-and-auth.md:16`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_MUI/rules/BR-C2LEG-780.md:21`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_MUI/rules/BR-C2LEG-780.md:28` |
| GetHouseholdDetails | 12 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_LegacyShared/module.md:49`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_LegacyShared/rules/BR-C2LEG-531.md:26` |
| GetHouseholdList_BySubdivisionId | 4 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Household_CS/logic/household-lists.md:9`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Household_CS/module.md:103` |
| GetNotesByItemId | 10 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-services/index/build/triage.md:146`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/findings.md:113`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Notes_CS/logic/notes.md:12` |
| GetSubdivisionDetails_BySubdivisionId | 9 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-services/domains/subdivision/build/behaviour.md:46`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/domains/subdivision/build/behaviour.md:52` |
| GetSubdivisionLocation_BySubdivisionId | 5 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-services/findings.md:78`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Subdivision_CS/logic/subdivisions-and-interchanges.md:16`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Subdivision_CS/module.md:81` |
| Get_Core_LocalityTimezone | 7 | - |
| Get_OneSchoolGlobalDetails | 14 | - |
| ListAppend | 54 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_MUI/rules/BR-C2LEG-807.md:20`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_IS/module.md:66`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_IS/rules/BR-C2LEG-301.md:19`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_IS/rules/BR-C2LEG-301.md:20`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_Assemble_IS/module.md:50` |
| ListAppendAll | 34 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_MUI/rules/BR-C2LEG-796.md:30`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_MUI/rules/BR-C2LEG-931.md:32`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_IS/logic/rest-wrappers.md:14`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_IS/logic/rest-wrappers.md:23`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_IS/module.md:66` |
| Member_ContactDetails_Service | 5 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-services/domains/household/build/behaviour.md:328`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Household_CS/logic/member-account.md:3`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Household_CS/rules/BR-C2SVC-151.md:5` |
| TagContent | 0 | - |
| Wait | 26 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/domains/my-calendar/build/overview.md:44`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/domains/my-calendar/build/behaviour.md:126`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/domains/my-calendar/build/behaviour.md:128`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/index/build/triage.md:57`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/findings.md:90` |

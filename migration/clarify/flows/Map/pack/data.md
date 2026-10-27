# Pack of UI flow Map (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

## Server and service actions called

| Action | Kind | Module | Inputs | Outputs |
|---|---|---|---|---|
| AddBookmark2 | ref-service | Connect_Bookmarks_CS | In_BookmarkCategoryId: BookmarkCategory Identifier; In_ItemId: Text | Success: Boolean; Bookmark_Added: UI_Bookmark_Added |
| Connect_Search | ref-service | Connect_Search_CS | SearchKey: Text (mandatory); CountryCode: Text; Category: Connect_SearchCategories Identifier (mandatory) | Households: SearchResult List; Members: SearchResult List; Places: SearchResult List |
| DeleteBookmarkByBookmarkId2 | ref-service | Connect_Bookmarks_CS | BookmarkId: Long Integer (mandatory) | Success: Boolean; WasFound: Boolean |
| FetchData_Countries | ref-service | Connect_Map_CS | - | Countries_GeoJSON: Map_GeoJSONStructure List; Countries_Markers: Map_MarkersStructure List |
| FetchData_GlobalLocation | ref-service | Connect_Map_CS | - | Markers: MapExploreItem, MarkerWithWindow Record List |
| FetchData_Households_ByCoordinates | ref-service | Connect_Map_CS | In_MinLatitude: Decimal (mandatory); In_MaxLatitude: Decimal (mandatory); In_MinLongitude: Decimal (mandatory); In_MaxLongitude: Decimal (mandatory); In_SearchTerm: Text (mandatory) | Household_Markers: MapExploreItem, MarkerWithWindow Record List |
| FetchData_Localities | ref-service | Connect_Map_CS | - | Localities_Markers: Map_MarkersStructure List; Localities_GeoJSON: Map_GeoJSONStructure List |
| FetchData_VisibilityPreferences | ref-service | Connect_Map_CS | - | Out_VisibilityPreferences: UI_Map_VisibilityPreferences |
| GetHouseholdDetails | ref-service | Connect_Household_CS | HouseholdId: Long Integer (mandatory); User_AgeVisibility: Boolean (mandatory); CheckVisibility: Boolean | UI_Screen_HouseholdDetails: UI_Screen_HouseholdDetails; Out_HouseholdMembers: UI_HouseholdMember List; Out_NonHouseholdMembers: UI_HouseholdMember List; isVisible: Boolean = True |
| GetNotesByItemId | ref-service | Connect_Notes_CS | NoteCategoryId: NoteCategory2 Identifier (mandatory); ItemId: Text (mandatory) | Out_Notes: Notes |
| GetSubdivisionDetails_BySubdivisionId | ref-service | Connect_Subdivision_CS | In_SubdivisionId: Long Integer (mandatory) | Out_Screen_SubdivisionDetails: UI_Screen_SubdivisionDetails |
| GetSubdivisionLocation_BySubdivisionId | ref-service | Connect_Subdivision_CS | In_SubdivisionId: Long Integer (mandatory) | Out_UI_SubdivisionLocation: UI_SubdivisionLocation |
| Get_Core_LocalityTimezone | ref-service | Connect_Geography_CS | In_LocalityId: Long Integer (mandatory) | Out_Timezone: Core_Timezone |
| Get_OneSchoolGlobalDetails | ref-service | Connect_CommunityBusiness_CS | CommunityBusinessId: Long Integer (mandatory) | Out_OneSchoolGlobalDetails: UI_OneSchoolGlobal_DetailCard2 |
| Get_SearchResultsVisibilityStatus | ref-service | Connect_Search_CS | In_MemberId: Text (mandatory) | Out_IsHouseholdVisible: Boolean |
| Get_UI_CountryStatistics | ref-service | Connect_Geography_CS | - | Out_UI_CountryStatistics: UI_CountryStatistics List |
| Get_UI_LocalityDetailsWithStatistics | ref-service | Connect_Geography_CS | LocalityId: Long Integer (mandatory) | UI_LocalityDetailsWithStatistics: UI_LocalityDetailsWithStatistics |
| Get_UI_UpdateItems_UnreadCount_All | ref-service | Connect_Updates_CS | - | UnreadCount: Integer |
| ListAppend | ref-server | (System) | List: Generic Record List (mandatory); Element: Generic Record (mandatory) | - |
| ListAppendAll | ref-server | (System) | List: Generic Record List (mandatory); SourceList: Generic Record List (mandatory) | - |
| ListFilter | ref-server | (System) | SourceList: Generic Record List (mandatory); Condition: Boolean (mandatory) | FilteredList: Generic Record List |
| Member_ContactDetails_Service | ref-service | Connect_Household_CS | MemberId: Text (mandatory) | UI_MemberContactDetails: UI_MemberContactDetails |
| Update_VisibilityPreferences | ref-service | Connect_Map_CS | In_VisibilityPreferences: UI_Map_VisibilityPreferences (mandatory) | - |

## Entity actions called (local entities)

- CreateOrUpdateConnectSearch_RecentClickedResults → local entity ConnectSearch_RecentClickedResults (UBTConnect)
- CreateOrUpdateConnectSearch_RecentSearchTerm → local entity ConnectSearch_RecentSearchTerm (UBTConnect)
- DeleteConnectSearch_RecentClickedResults → local entity ConnectSearch_RecentClickedResults (UBTConnect)
- DeleteConnectSearch_RecentSearchTerm → local entity ConnectSearch_RecentSearchTerm (UBTConnect)

## Local entities of UBTConnect that the flow names

- **ConnectSearch_RecentClickedResults** (IClientEntity): Id: Long Integer; UserId: User Identifier; EntityId: Text; EntityType: Connect_Entity Identifier; HouseholderId: Text; Name: Text; AdditionalInformation: Text; Location: Text; SearchedOn: Date Time; Latitude: Decimal; Longitude: Decimal; SearchTargetId: Type_SearchTarget Identifier
- **ConnectSearch_RecentSearchTerm** (IClientEntity): Id: Long Integer; UserId: User Identifier; SearchedTerm: Text; SearchedOn: Date Time; SearchTargetId: Type_SearchTarget Identifier

## Client variables

| Variable | Type | Default | Folder | Read | Written |
|---|---|---|---|---|---|
| Client.App_PIN_BiometricEnabled | Boolean | True | App_PIN | yes |  |
| Client.App_Policies_HasPolicyToAccept | Boolean | - | App_Policies | yes | yes |
| Client.App_Policies_RedirectURL | Text | - | App_Policies | yes | yes |
| Client.Bookmarks_IsSynched | Boolean | - | Bookmarks | yes |  |
| Client.Directory_Updates_UnreadCount | Integer | - | Directory_Updates | yes | yes |
| Client.Directory_Updates_UnreadCount_CheckFrequency_Minut | Integer | 5 | Directory_Updates | yes |  |
| Client.Directory_Updates_UnreadCount_LastCheck | Date Time | - | Directory_Updates | yes | yes |
| Client.IsNavigateToHomeOnBack | Boolean | - | Navigation | yes | yes |
| Client.Notes_IsSynched | Boolean | - | Notes | yes |  |
| Client.Search_RecenctClickedResultsLimit | Integer | 10 | Search | yes |  |

## Structures of UBTConnect that the flow names

- **BusinessLinkItem**: Text: Text; Link: Text; ID: Long Integer
- **CarouselPreloadedHouseholds**: CarouselHouseholdItem: Household, SwipeAction Record List
- **Filter_Common**: CountryIds: Text List; LocalitiesIds: Text List; Sort_ByNewest: Choice Identifier
- **Filter_Common_Control_Choice**: Title: Text; SelectedChoiceId: Choice Identifier; YesLabel: Text; NoLabel: Text; NoneLabel: Text; Order: Integer
- **Filter_Common_Control_List**: Title: Text; SheetTitle: Text; In_Options: SelectionOption_Item List; SelectedIds: Text List; SelectedNames: Text List; Order: Integer; AddAllOptions: Boolean = True
- **Filter_Common_Options**: HasSorting: Filter_Common_Options_Choice; HasCountries: Filter_Common_Options_List; HasLocalities: Filter_Common_Options_List; Extra_OptionLists: Filter_Common_Control_List List; Extra_OptionChoices: Filter_Common_Control_Choice List; Extra_OptionFlatLists: Filter_Common_Control_List List
- **Member**: Id: Long Integer; HouseholderId: Text; Name: Text; Lastname: Text; MaidenName: Text; DateOfBirth: Date; IsDeceased: Boolean; DeceasedDate: Date; Avatar: SignedURL; Email: Text; DisplayTitle: Text; DisplayDescription: Text; HasEmail: Boolean; HasMobilephone: Boolean; IsDisplayAge: Boolean; LastUpdated: Date Time; ExtraDetails: DetailByType List; IsDisabled: Boolean
- **SignedURL**: LowResolution: Text; MediumResolution: Text; HighResolution: Text
- **UI_OneSchoolGlobal_DetailCard**: OneSchoolGlobalId: Long Integer; SignedURL: Text; OneSchoolGlobal__DetailCard_Content: UI_OneSchoolGlobal_DetailCard_Content

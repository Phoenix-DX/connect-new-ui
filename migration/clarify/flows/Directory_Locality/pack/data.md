# Pack of UI flow Directory_Locality (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

## Server and service actions called

| Action | Kind | Module | Inputs | Outputs |
|---|---|---|---|---|
| AddBookmark2 | ref-service | Connect_Bookmarks_CS | In_BookmarkCategoryId: BookmarkCategory Identifier; In_ItemId: Text | Success: Boolean; Bookmark_Added: UI_Bookmark_Added |
| DeleteBookmarkByBookmarkId2 | ref-service | Connect_Bookmarks_CS | BookmarkId: Long Integer (mandatory) | Success: Boolean; WasFound: Boolean |
| GetHouseholdCoordinates | ref-service | Connect_Household_CS | In_HouseholdId: Long Integer (mandatory) | Out_HouseholdCoordinates: Directory_Coordinates |
| GetHouseholdDetails | ref-service | Connect_Household_CS | HouseholdId: Long Integer (mandatory); User_AgeVisibility: Boolean (mandatory); CheckVisibility: Boolean | UI_Screen_HouseholdDetails: UI_Screen_HouseholdDetails; Out_HouseholdMembers: UI_HouseholdMember List; Out_NonHouseholdMembers: UI_HouseholdMember List; isVisible: Boolean = True |
| GetHouseholdList_ByLocalityId | ref-service | Connect_Household_CS | In_LocalityId: Long Integer (mandatory) | Out_HouseholdList: UI_LocalityHousehold List |
| GetInterchangeList_ByLocalityId | ref-service | Connect_Subdivision_CS | In_LocalityId: Long Integer (mandatory) | Out_Interchanges: UI_Interchange List |
| GetNotesByItemId | ref-service | Connect_Notes_CS | NoteCategoryId: NoteCategory2 Identifier (mandatory); ItemId: Text (mandatory) | Out_Notes: Notes |
| GetSubdivisionCardList_ByLocalityId | ref-service | Connect_Subdivision_CS | In_LocalityId: Long Integer (mandatory) | Out_Subdivision_CardList: UI_Subdivision_Card List |
| GetSubdivisionLocation_BySubdivisionId | ref-service | Connect_Subdivision_CS | In_SubdivisionId: Long Integer (mandatory) | Out_UI_SubdivisionLocation: UI_SubdivisionLocation |
| Get_Core_LocalityTimezone | ref-service | Connect_Geography_CS | In_LocalityId: Long Integer (mandatory) | Out_Timezone: Core_Timezone |
| Get_LocalityCommunityBusinessContacts | ref-service | Connect_Geography_CS | LocalityId: Long Integer (mandatory) | Out_CommunityBusinessContactsByLocality: UI_CommunityBusiness_Contact List |
| Get_OneSchoolGlobalDetails | ref-service | Connect_CommunityBusiness_CS | CommunityBusinessId: Long Integer (mandatory) | Out_OneSchoolGlobalDetails: UI_OneSchoolGlobal_DetailCard2 |
| Get_OneSchoolGlobalListByLocality | ref-service | Connect_CommunityBusiness_CS | In_LocalityId: Long Integer (mandatory) | Out_OneSchoolGlobal: UI_OneSchool_Card List |
| Get_UI_CommunityNumbers | ref-service | Connect_Geography_CS | - | Out_CommunityNumbers: UI_CommunityStatistics |
| Get_UI_CountryStatistics | ref-service | Connect_Geography_CS | - | Out_UI_CountryStatistics: UI_CountryStatistics List |
| Get_UI_LocalityDetails | ref-service | Connect_Geography_CS | In_LocalityId: Long Integer (mandatory) | Out_UI_LocalityDetails: UI_LocalityDetails_ForHousehold |
| Get_UI_LocalityStatistics | ref-service | Connect_Geography_CS | In_CountryCode: Text (mandatory) | Out_UI_LocalityStatistics: UI_LocalityStatistics List |
| Get_UI_MembersStatistics | ref-service | Connect_Geography_CS | RegionsSubscriptionId: Connect_Subscription_Region Identifier (mandatory); LocalityId: Text | UI_MembersStatistics: UI_MembersStatistics |
| Get_UI_UpdateItems_UnreadCount_All | ref-service | Connect_Updates_CS | - | UnreadCount: Integer |
| Household_GetMembers_Service | ref-service | Connect_Household_CS | HouseholdId: Long Integer (mandatory); User_AgeVisibility: Boolean (mandatory) | Out_HouseholdMembers: UI_HouseholdMember List; VisibleAvatars: Integer |
| Member_ContactDetails_Service | ref-service | Connect_Household_CS | MemberId: Text (mandatory) | UI_MemberContactDetails: UI_MemberContactDetails |

## Entity actions called (local entities)


## Local entities of UBTConnect that the flow names


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
| Client.Notifications_IsSynched | Boolean | - | Notifications | yes |  |
| Client.Notifications_LastChecked | Date Time | - | Notifications | yes |  |

## Structures of UBTConnect that the flow names

- **CarouselPreloadedHouseholds**: CarouselHouseholdItem: Household, SwipeAction Record List
- **CommunityBusiness_Card_Content**: ContactFullName: Text; ContactRole: Text; CountryName: Text; IsBookmarked: Boolean; HasCall: Boolean; HasEmail: Boolean; TimeZoneName: Text; TimezoneOffset: Integer
- **Entities_LocalityMenuOptions**: Households: Text = "Households"; Subdivsion: Text = "Supper Meetings"; Interchange: Text = "Interchange"; OneSchoolGlobal: Text = "OneSchool Global"; LocalityContacts: Text = "Locality Contacts"; MyHousehold: Text = "My Household"
- **Filter_Common**: CountryIds: Text List; LocalitiesIds: Text List; Sort_ByNewest: Choice Identifier
- **Filter_Common_Control_Choice**: Title: Text; SelectedChoiceId: Choice Identifier; YesLabel: Text; NoLabel: Text; NoneLabel: Text; Order: Integer
- **Filter_Common_Control_List**: Title: Text; SheetTitle: Text; In_Options: SelectionOption_Item List; SelectedIds: Text List; SelectedNames: Text List; Order: Integer; AddAllOptions: Boolean = True
- **Filter_Common_Options**: HasSorting: Filter_Common_Options_Choice; HasCountries: Filter_Common_Options_List; HasLocalities: Filter_Common_Options_List; Extra_OptionLists: Filter_Common_Control_List List; Extra_OptionChoices: Filter_Common_Control_Choice List; Extra_OptionFlatLists: Filter_Common_Control_List List
- **HouseholdPreviewStructure**: UI_AccountForm: UI_AccountForm; HouseholdMemberId: Long Integer; UsePreview: Boolean; isHouseholder: Boolean; FormattedAddress: Text
- **Member**: Id: Long Integer; HouseholderId: Text; Name: Text; Lastname: Text; MaidenName: Text; DateOfBirth: Date; IsDeceased: Boolean; DeceasedDate: Date; Avatar: SignedURL; Email: Text; DisplayTitle: Text; DisplayDescription: Text; HasEmail: Boolean; HasMobilephone: Boolean; IsDisplayAge: Boolean; LastUpdated: Date Time; ExtraDetails: DetailByType List; IsDisabled: Boolean
- **Member_Optional**: Id: Long Integer; HouseholderId: Text; HouseholdMemberTypeId: HouseholdMemberType Identifier; Name: Text; Lastname: Text; MaidenName: Text; DateOfBirth: Date; IsDeceased: Boolean; DeceasedDate: Date; Locality: Text; Country: Text; Avatar: SignedURL; Email: Text; DisplayTitle: Text; DisplayDescription: Text; HasEmail: Boolean; HasMobilephone: Boolean; IsDisplayAge: Boolean; LastUpdated: Date Time; ExtraDetails: DetailByType List; IsDisabled: Boolean
- **PreloadedSupperMeetings**: SupperMeetingIds: Long Integer List
- **SignedURL**: LowResolution: Text; MediumResolution: Text; HighResolution: Text
- **UI_OneSchoolGlobal_ListCard**: OneSchoolGlobalId: Long Integer; Email: Text; PhoneNumber: Phone Number; SignedURL: SignedURL; OneSchoolGlobal_ListCard_Content: UI_OneSchoolGlobal_ListCard_Content
- **UI_TypedStatistics**: UI_StatisticsTexts: UI_StatisticsTexts; Name: Text; ImageURL: Text

# Pack of UI flow Directory_SupperMeetings (DEV model, MCP dump of flows 2026-10-27)

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
| GetHouseholdList_BySubdivisionId | ref-service | Connect_Household_CS | In_SubdivisionId: Long Integer (mandatory) | Out_HouseholdList: UI_SubdivisionHousehold List |
| GetNotesByItemId | ref-service | Connect_Notes_CS | NoteCategoryId: NoteCategory2 Identifier (mandatory); ItemId: Text (mandatory) | Out_Notes: Notes |
| GetSubdivisionDetails_BySubdivisionId | ref-service | Connect_Subdivision_CS | In_SubdivisionId: Long Integer (mandatory) | Out_Screen_SubdivisionDetails: UI_Screen_SubdivisionDetails |
| GetSubdivisionLocation_BySubdivisionId | ref-service | Connect_Subdivision_CS | In_SubdivisionId: Long Integer (mandatory) | Out_UI_SubdivisionLocation: UI_SubdivisionLocation |
| Get_Core_LocalityTimezone | ref-service | Connect_Geography_CS | In_LocalityId: Long Integer (mandatory) | Out_Timezone: Core_Timezone |
| Get_OneSchoolGlobalDetails | ref-service | Connect_CommunityBusiness_CS | CommunityBusinessId: Long Integer (mandatory) | Out_OneSchoolGlobalDetails: UI_OneSchoolGlobal_DetailCard2 |
| ListAppend | ref-server | (System) | List: Generic Record List (mandatory); Element: Generic Record (mandatory) | - |
| ListAppendAll | ref-server | (System) | List: Generic Record List (mandatory); SourceList: Generic Record List (mandatory) | - |
| Member_ContactDetails_Service | ref-service | Connect_Household_CS | MemberId: Text (mandatory) | UI_MemberContactDetails: UI_MemberContactDetails |
| Wait | own-server | UBTConnect | Duration: Integer (mandatory) | - |

## Server actions of UBTConnect (full)
## Wait (action, folder -)
- inputs: Duration: Integer (mandatory)
- outputs: -
- locals: EndDateTime: Date Time
```
assign: EndDateTime = AddSeconds(CurrDateTime(),Duration)\n\n
[M1] if EndDateTime < CurrDateTime()
  end
else
  if Site.IsKi
    end
  else
    → continues at [M1]
unreachable nodes (not connected to start or to an exception handler):
  end
```

## Entity actions called (local entities)


## Local entities of UBTConnect that the flow names


## Client variables

| Variable | Type | Default | Folder | Read | Written |
|---|---|---|---|---|---|
| Client.App_PIN_BiometricEnabled | Boolean | True | App_PIN | yes |  |
| Client.App_Policies_HasPolicyToAccept | Boolean | - | App_Policies | yes | yes |
| Client.App_Policies_RedirectURL | Text | - | App_Policies | yes | yes |
| Client.Bookmarks_IsSynched | Boolean | - | Bookmarks | yes |  |
| Client.IsNavigateToHomeOnBack | Boolean | - | Navigation | yes | yes |
| Client.Notes_IsSynched | Boolean | - | Notes | yes |  |

## Structures of UBTConnect that the flow names

- **BusinessLinkItem**: Text: Text; Link: Text; ID: Long Integer
- **CarouselPreloadedHouseholds**: CarouselHouseholdItem: Household, SwipeAction Record List
- **EntitiesCarousel_Item**: EntityId: Text
- **HeaderList**: Label: Text; Index: Integer
- **HouseholdPreviewStructure**: UI_AccountForm: UI_AccountForm; HouseholdMemberId: Long Integer; UsePreview: Boolean; isHouseholder: Boolean; FormattedAddress: Text
- **LookupSections**: Actions: LookupItem; Households: LookupItem; OneSchoolStatistitics: LookupItem
- **Member**: Id: Long Integer; HouseholderId: Text; Name: Text; Lastname: Text; MaidenName: Text; DateOfBirth: Date; IsDeceased: Boolean; DeceasedDate: Date; Avatar: SignedURL; Email: Text; DisplayTitle: Text; DisplayDescription: Text; HasEmail: Boolean; HasMobilephone: Boolean; IsDisplayAge: Boolean; LastUpdated: Date Time; ExtraDetails: DetailByType List; IsDisabled: Boolean
- **Member_Optional**: Id: Long Integer; HouseholderId: Text; HouseholdMemberTypeId: HouseholdMemberType Identifier; Name: Text; Lastname: Text; MaidenName: Text; DateOfBirth: Date; IsDeceased: Boolean; DeceasedDate: Date; Locality: Text; Country: Text; Avatar: SignedURL; Email: Text; DisplayTitle: Text; DisplayDescription: Text; HasEmail: Boolean; HasMobilephone: Boolean; IsDisplayAge: Boolean; LastUpdated: Date Time; ExtraDetails: DetailByType List; IsDisabled: Boolean
- **PreloadedSupperMeetings**: SupperMeetingIds: Long Integer List
- **SignedURL**: LowResolution: Text; MediumResolution: Text; HighResolution: Text
- **Type_OneschoolGlobal_Subsection**: UpcomingEvents: Text = "Upcoming events"; AboutOurCampus: Text = "About our campus"
- **UI_OneSchoolGlobal_DetailCard**: OneSchoolGlobalId: Long Integer; SignedURL: Text; OneSchoolGlobal__DetailCard_Content: UI_OneSchoolGlobal_DetailCard_Content
- **UI_OneSchoolGlobal_Event_Card**: EventId: Long Integer; SignedURL: SignedURL; UI_OneSchoolGlobal_Event_Card_Content: UI_OneSchoolGlobal_Event_Card_Content
- **UI_OneSchoolGlobal_Event_Card_Content**: Name: Text; DateTimeStart: Date Time; DateTimeEnd: Date Time; TimezoneName: Text; ParticipantYear_List: Integer List; Address: Text
- **UI_OneSchoolGlobal_StudentNumbers**: StudentsPerYear: SchoolYear, StudentCount Record List; AvailableCalendarYears: Text List

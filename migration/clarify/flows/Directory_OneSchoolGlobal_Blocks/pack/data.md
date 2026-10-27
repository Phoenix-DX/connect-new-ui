# Pack of UI flow Directory_OneSchoolGlobal_Blocks (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

## Server and service actions called

| Action | Kind | Module | Inputs | Outputs |
|---|---|---|---|---|
| AddBookmark2 | ref-service | Connect_Bookmarks_CS | In_BookmarkCategoryId: BookmarkCategory Identifier; In_ItemId: Text | Success: Boolean; Bookmark_Added: UI_Bookmark_Added |
| DeleteBookmarkByBookmarkId2 | ref-service | Connect_Bookmarks_CS | BookmarkId: Long Integer (mandatory) | Success: Boolean; WasFound: Boolean |
| GetHouseholdDetails | ref-service | Connect_Household_CS | HouseholdId: Long Integer (mandatory); User_AgeVisibility: Boolean (mandatory); CheckVisibility: Boolean | UI_Screen_HouseholdDetails: UI_Screen_HouseholdDetails; Out_HouseholdMembers: UI_HouseholdMember List; Out_NonHouseholdMembers: UI_HouseholdMember List; isVisible: Boolean = True |
| GetNotesByItemId | ref-service | Connect_Notes_CS | NoteCategoryId: NoteCategory2 Identifier (mandatory); ItemId: Text (mandatory) | Out_Notes: Notes |
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
| Client.Bookmarks_IsSynched | Boolean | - | Bookmarks | yes |  |
| Client.Notes_IsSynched | Boolean | - | Notes | yes |  |

## Structures of UBTConnect that the flow names

- **BusinessLinkItem**: Text: Text; Link: Text; ID: Long Integer
- **Member**: Id: Long Integer; HouseholderId: Text; Name: Text; Lastname: Text; MaidenName: Text; DateOfBirth: Date; IsDeceased: Boolean; DeceasedDate: Date; Avatar: SignedURL; Email: Text; DisplayTitle: Text; DisplayDescription: Text; HasEmail: Boolean; HasMobilephone: Boolean; IsDisplayAge: Boolean; LastUpdated: Date Time; ExtraDetails: DetailByType List; IsDisabled: Boolean
- **SignedURL**: LowResolution: Text; MediumResolution: Text; HighResolution: Text
- **UI_OneSchoolGlobal_DetailCard_Content**: Name: Text; Address: Text; LocalityNames_List: Text List; BusinesLinks: BusinessLinkItem List
- **UI_OneSchoolGlobal_Event_Card**: EventId: Long Integer; SignedURL: SignedURL; UI_OneSchoolGlobal_Event_Card_Content: UI_OneSchoolGlobal_Event_Card_Content
- **UI_OneSchoolGlobal_Event_Card_Content**: Name: Text; DateTimeStart: Date Time; DateTimeEnd: Date Time; TimezoneName: Text; ParticipantYear_List: Integer List; Address: Text
- **UI_OneSchoolGlobal_StudentNumbers**: StudentsPerYear: SchoolYear, StudentCount Record List; AvailableCalendarYears: Text List

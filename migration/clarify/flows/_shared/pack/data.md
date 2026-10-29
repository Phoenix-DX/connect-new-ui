# Shared pack: block-only flows and shared client actions (DEV model, MCP dump 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.

## Server and service actions called

| Action | Kind | Module | Inputs | Outputs |
|---|---|---|---|---|
| AddBookmark | ref-server | Connect2_MyBookmarks_BL | ObjectType: MyBookmarks_ObjectType Identifier (mandatory); ObjectId: Text (mandatory); Group: MyBookmarks_Group Identifier (mandatory); Note: Text | Success: Boolean; CreatedBookmarkResponse: BookmarkItem |
| AddBookmark2 | ref-service | Connect_Bookmarks_CS | In_BookmarkCategoryId: BookmarkCategory Identifier; In_ItemId: Text | Success: Boolean; Bookmark_Added: UI_Bookmark_Added |
| DeleteBookmarkByBookmarkId | ref-server | Connect2_MyBookmarks_BL | BookmarkId: Long Integer (mandatory) | Success: Boolean |
| DeleteBookmarkByBookmarkId2 | ref-service | Connect_Bookmarks_CS | BookmarkId: Long Integer (mandatory) | Success: Boolean; WasFound: Boolean |
| FetchData_CacheableHouseholds | ref-service | Connect_Map_CS | - | Household_Markers: MapExploreItem, MarkerWithWindow Record List |
| FetchData_CacheableMapEntities | ref-service | Connect_Map_CS | - | Localities_Markers: Map_MarkersStructure List; Localities_GeoJSON: Map_GeoJSONStructure List; Countries_GeoJSON: Map_GeoJSONStructure List; Countries_Markers: Map_MarkersStructure List; GlobalLocations_Markers: MapExploreItem, MarkerWithWindow Record List |
| GetEventsByCacheKeys | ref-server | Connect2_MyCalendar_BL | KeyList: Text List (mandatory); MyCalendarEventSourceIds: Type_MyCalendarEventSource Identifier List; TimeZone: Text (mandatory) | CacheableCalendarEvents: CacheableCalendarEventsSource List |
| GetHouseholdDetails | ref-service | Connect_Household_CS | HouseholdId: Long Integer (mandatory); User_AgeVisibility: Boolean (mandatory); CheckVisibility: Boolean | UI_Screen_HouseholdDetails: UI_Screen_HouseholdDetails; Out_HouseholdMembers: UI_HouseholdMember List; Out_NonHouseholdMembers: UI_HouseholdMember List; isVisible: Boolean = True |
| GetNotesByItemId | ref-service | Connect_Notes_CS | NoteCategoryId: NoteCategory2 Identifier (mandatory); ItemId: Text (mandatory) | Out_Notes: Notes |
| GetSubdivisionLocation_BySubdivisionId | ref-service | Connect_Subdivision_CS | In_SubdivisionId: Long Integer (mandatory) | Out_UI_SubdivisionLocation: UI_SubdivisionLocation |
| Get_Core_LocalityTimezone | ref-service | Connect_Geography_CS | In_LocalityId: Long Integer (mandatory) | Out_Timezone: Core_Timezone |
| Get_OneSchoolGlobalDetails | ref-service | Connect_CommunityBusiness_CS | CommunityBusinessId: Long Integer (mandatory) | Out_OneSchoolGlobalDetails: UI_OneSchoolGlobal_DetailCard2 |
| Get_UI_UpdateItems_UnreadCount_All | ref-service | Connect_Updates_CS | - | UnreadCount: Integer |
| Household_GetMembers_Service | ref-service | Connect_Household_CS | HouseholdId: Long Integer (mandatory); User_AgeVisibility: Boolean (mandatory) | Out_HouseholdMembers: UI_HouseholdMember List; VisibleAvatars: Integer |
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

- **UBTConnect_JSUtils_ElementCache_Parent** (IStaticEntity): Label: Text

## Client variables

| Variable | Type | Default | Folder | Read | Written |
|---|---|---|---|---|---|
| Client.App_NetworkStatus_IsOnline_IsPersistent | Boolean | True | App_Network | yes | yes |
| Client.App_Policies_HasPolicyToAccept | Boolean | - | App_Policies | yes | yes |
| Client.Bookmarks_IsSynched | Boolean | - | Bookmarks | yes |  |
| Client.ColumnsPerView | Integer | 7 | MyCalendar | yes |  |
| Client.Directory_Updates_MonthsToShow | Integer | - | Directory_Updates | yes |  |
| Client.Directory_Updates_UnreadCount | Integer | - | Directory_Updates | yes | yes |
| Client.Directory_Updates_UnreadCount_CheckFrequency_Minut | Integer | 5 | Directory_Updates | yes |  |
| Client.Directory_Updates_UnreadCount_LastCheck | Date Time | - | Directory_Updates | yes | yes |
| Client.LastURL | Text | - | - | yes | yes |
| Client.Notes_IsSynched | Boolean | - | Notes | yes |  |
| Client.Notifications_IsSynched | Boolean | - | Notifications | yes |  |
| Client.Notifications_LastChecked | Date Time | - | Notifications | yes | yes |
| Client.RowsPerMonth | Integer | 5 | MyCalendar_Month | yes |  |

## Structures of UBTConnect that the flow names

- **BusinessLinkItem**: Text: Text; Link: Text; ID: Long Integer
- **CacheControl_CalendarEvents**: MyCalendarEventSource: MyCalendarEventSource List
- **EntitiesCarousel_Item**: EntityId: Text
- **Entities_LocalityMenuOptions**: Households: Text = "Households"; Subdivsion: Text = "Supper Meetings"; Interchange: Text = "Interchange"; OneSchoolGlobal: Text = "OneSchool Global"; LocalityContacts: Text = "Locality Contacts"; MyHousehold: Text = "My Household"
- **Filter_Common**: CountryIds: Text List; LocalitiesIds: Text List; Sort_ByNewest: Choice Identifier
- **Filter_Common_Control_Choice**: Title: Text; SelectedChoiceId: Choice Identifier; YesLabel: Text; NoLabel: Text; NoneLabel: Text; Order: Integer
- **Filter_Common_Control_List**: Title: Text; SheetTitle: Text; In_Options: SelectionOption_Item List; SelectedIds: Text List; SelectedNames: Text List; Order: Integer; AddAllOptions: Boolean = True
- **Filter_Common_Options**: HasSorting: Filter_Common_Options_Choice; HasCountries: Filter_Common_Options_List; HasLocalities: Filter_Common_Options_List; Extra_OptionLists: Filter_Common_Control_List List; Extra_OptionChoices: Filter_Common_Control_Choice List; Extra_OptionFlatLists: Filter_Common_Control_List List
- **HeaderList**: Label: Text; Index: Integer
- **Lookup_RSVPStatus**: Id: Type_RSVPStatus Identifier; Color: UBT_Color Identifier
- **Lookup_RecurrencePatternWeekIndex**: Id: RecurrencePatternWeekIndex Identifier; Index: Integer
- **Lookup_RecurrenceType**: Id: RecurrenceType Identifier; Label: Text; PluralLabel: Text; DisplayLabel: Text
- **Lookup_ReminderType**: Id: ReminderOption Identifier; Label: Text; IsAllDay: Boolean
- **Member**: Id: Long Integer; HouseholderId: Text; Name: Text; Lastname: Text; MaidenName: Text; DateOfBirth: Date; IsDeceased: Boolean; DeceasedDate: Date; Avatar: SignedURL; Email: Text; DisplayTitle: Text; DisplayDescription: Text; HasEmail: Boolean; HasMobilephone: Boolean; IsDisplayAge: Boolean; LastUpdated: Date Time; ExtraDetails: DetailByType List; IsDisabled: Boolean
- **SignedURL**: LowResolution: Text; MediumResolution: Text; HighResolution: Text
- **Text_List**: TextList: Text List
- **UI_CalendarEventSourceConfiguration**: Id: Type_MyCalendarEventSource Identifier; LongLabel: Text; HeaderBackgroundColor: UBT_Color Identifier; HeaderTextColor: UBT_Color Identifier; IndicatorColor: UBT_Color Identifier; IconId: UBT_Icons2 Identifier; DisplayOrder: Integer
- **UI_OneSchoolGlobal_DetailCard_Content**: Name: Text; Address: Text; LocalityNames_List: Text List; BusinesLinks: BusinessLinkItem List
- **UI_OneSchoolGlobal_Event_Card**: EventId: Long Integer; SignedURL: SignedURL; UI_OneSchoolGlobal_Event_Card_Content: UI_OneSchoolGlobal_Event_Card_Content
- **UI_OneSchoolGlobal_Event_Card_Content**: Name: Text; DateTimeStart: Date Time; DateTimeEnd: Date Time; TimezoneName: Text; ParticipantYear_List: Integer List; Address: Text
- **UI_OneSchoolGlobal_StudentNumbers**: StudentsPerYear: SchoolYear, StudentCount Record List; AvailableCalendarYears: Text List

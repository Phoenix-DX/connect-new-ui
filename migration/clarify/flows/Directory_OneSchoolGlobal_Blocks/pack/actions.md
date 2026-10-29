# Pack of UI flow Directory_OneSchoolGlobal_Blocks (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

Module client actions the flow calls (transitive): 7; of them shared (in `../../_shared/pack/actions.md`): 4

## Shared actions (signature only)

| Action | Folder | Inputs | Outputs | Used by flows |
|---|---|---|---|---|
| GetBookmarkCategoryId_ByEntityTypeId | Bookmark_Utils | EntityType: Connect_Entity Identifier (mandatory) | BookmarkType: BookmarkCategory Identifier | 7 |
| GetNameAndSurname_ByFullName | Utils_Text | In_FullName: Text (mandatory) | Out_Surname: Text; Out_Name: Text | 11 |
| GetShareType_FromEntity | Share_Utils | EntityType: Connect_Entity Identifier (mandatory); IsMyHousehold: Boolean | ShareType: Type_ShareObject Identifier | 7 |
| ToggleBookmarkItem_C2 | Directory_MyBookmarks | In_ItemId: Text (mandatory); In_BookmarkType: BookmarkCategory Identifier (mandatory); IsBookmarked_C2: Boolean (mandatory) | - | 9 |

## Actions of this flow (full)

## GetSekeletonList_UI_OneSchoolGlobal_EventCard (action, folder Directory_Skeleton)
- inputs: ListLength: Integer = 4
- outputs: UI_OneSchoolGlobal_Event_Card_List: UI_OneSchoolGlobal_Event_Card List
```
[M1] if ListLength > 0
  call GetSkeleton_UI_OneSchoolGlobal_EventCard()
  call ListAppend(Element=GetSkeleton_UI_OneSchoolGlobal_EventCard.UI_OneSchoolGlobal_EventCard, List=UI_OneSchoolGlobal_Event_Card_List)
  assign: ListLength = ListLength - 1
  → continues at [M1]
else
  end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## GetSkeleton_UI_OneSchoolGlobal_EventCard (action, folder Directory_Skeleton)
- inputs: -
- outputs: UI_OneSchoolGlobal_EventCard: UI_OneSchoolGlobal_Event_Card
```
assign: UI_OneSchoolGlobal_EventCard.UI_OneSchoolGlobal_Event_Card_Content.Name = "Sports Day"; UI_OneSchoolGlobal_EventCard.UI_OneSchoolGlobal_Event_Card_Content.DateTimeStart = CurrDateTime()
assign: UI_OneSchoolGlobal_EventCard.UI_OneSchoolGlobal_Event_Card_Content.DateTimeStart = CurrDateTime(); UI_OneSchoolGlobal_EventCard.UI_OneSchoolGlobal_Event_Card_Content.DateTimeEnd = AddHours(CurrDateTime(),5); UI_OneSchoolGlobal_EventCard.UI_OneSchoolGlobal_Event_Card_Content.TimezoneName = "AEST"
call ListAppendAll(List=UI_OneSchoolGlobal_EventCard.UI_OneSchoolGlobal_Event_Card_Content.ParticipantYear_List, SourceList=[ 1, 2, 3 ])
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## GetSkeleton_UI_OneSchoolGlobal_StudentNumbers (action, folder Directory_Skeleton)
- inputs: -
- outputs: UI_OneSchoolGlobal_StudentNumbers: UI_OneSchoolGlobal_StudentNumbers
```
call ListAppendAll(List=UI_OneSchoolGlobal_StudentNumbers.StudentsPerYear, SourceList=[ { SchoolYear: 1, StudentCount: 20 }, { SchoolYear: 2, StudentCount: 40 }, { SchoolYear: 3, StudentCount: 50 }, { SchoolYear: 4, StudentCount: 60 } ])
call ListAppendAll(List=UI_OneSchoolGlobal_StudentNumbers.AvailableCalendarYears, SourceList=[ 2025, 2024, 2023, 2022, 2021 ]) as ListAppendAll3
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

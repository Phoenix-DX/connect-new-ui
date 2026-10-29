# Pack of UI flow Directory_SupperMeetings (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

Screens: SupperMeeting_Carousel, SupperMeeting_Details

## Screen SupperMeeting_Carousel (flow Directory_SupperMeetings)
- roles: Registered, UBTOne_User; URL structure: QueryString
- input parameters: In_StartingSupperMeetingId: Long Integer
- local variables: SupperMeetingsIdList: PreloadedSupperMeetings; StartingPosition: Integer; EntitieslCarousel_Items: EntitiesCarousel_Item List
- lifecycle: OnInitialize → ScreenEvent_OnInitialize

#### Widget tree
```
block Layout_DetailPage (UBTConnectLibrary.Layouts)
  args: In_AlignTitleLeft=False
  placeholder Placeholder_Header_Title:
    block CustomText (UBTConnectLibrary.BasePatterns)
      args: In_Text="Supper Meeting", In_TextOptions={  }
  placeholder Content:
    block EntitiesCarousel (UBTConnect.Directory_Caroussel)
      args: In_ConnectEntityTypeId=Entities.Connect_Entity.SupperMeetings_aka_Subdivisions, In_EntitiesCarousel_Items=EntitieslCarousel_Items, In_StartingPosition=StartingPosition
  placeholder Placeholder_CommonUI_Inside_Layout:
    block CommonUI_InsideLayout (UBTConnect.App_Common)
```

#### Screen actions
- **ScreenEvent_OnInitialize**
  ```
  if SupperMeetingsIdList.SupperMeetingIds.Empty
    call GetPreloadObject()
    call AssignFromObject(ObjectValue=GetPreloadObject.Preload, ToObjectRef=ToObject(SupperMeetingsIdList))
    call ListIndexOf(Condition=Value = In_StartingSupperMeetingId, List=SupperMeetingsIdList.SupperMeetingIds)
    if ListIndexOf.Position <> -1
      assign: StartingPosition = ListIndexOf.Position
      [M1] for each SupperMeetingsIdList.SupperMeetingIds
        call ListAppend(Element={ EntityId: TextToLongInteger(SupperMeetingsIdList.SupperMeetingIds.Current) }, List=EntitieslCarousel_Items)
        → continues at [M1]
      end for
      end
    else
      → continues at [M1]
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```

## Screen SupperMeeting_Details (flow Directory_SupperMeetings)
- roles: Registered, UBTOne_User; URL structure: QueryString
- input parameters: In_SubdivsionId: Long Integer (mandatory)
- local variables: -
- lifecycle: none

#### Widget tree
```
block Layout_DetailPage (UBTConnectLibrary.Layouts)
  args: In_AlignTitleLeft=False
  placeholder Placeholder_Header_Title:
    block CustomText (UBTConnectLibrary.BasePatterns)
      args: In_Text="Supper Meeting", In_TextOptions={  }
  placeholder Content:
    block SupperMeeting_DetailsBlock (UBTConnect.Directory_SupperMeetings)
      args: In_SubdivsionId=In_SubdivsionId
  placeholder Placeholder_CommonUI_Inside_Layout:
    block CommonUI_InsideLayout (UBTConnect.App_Common)
```

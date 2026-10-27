# Pack of UI flow Directory_OneSchoolGlobal (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

Screens: OneSchoolGlobalCarousel, OneSchoolGlobalDetails, OneSchoolGlobalEventDetail

## Screen OneSchoolGlobalCarousel (flow Directory_OneSchoolGlobal)
- roles: Registered, UBTOne_User; URL structure: QueryString
- input parameters: In_StartingObjectId: Long Integer
- local variables: PreloadedCarousel: PreloadedCarousel; StartingPosition: Integer; SwippedItems: EntitiesCarousel_SwippedItem List; EntitiesCarousel_Items: EntitiesCarousel_Item List
- lifecycle: OnInitialize → ScreenEvent_OnInitialize

#### Widget tree
```
block Layout_DetailPage (UBTConnectLibrary.Layouts) #DetailPage
  args: In_IsPrimaryColor=False
  placeholder Placeholder_Header_Title:
    block CustomText (UBTConnectLibrary.BasePatterns)
      args: In_Text="OneSchool Global", In_TextOptions={  }
  placeholder Content:
    block EntitiesCarousel (UBTConnect.Directory_Caroussel)
      args: In_ConnectEntityTypeId=Entities.Connect_Entity.OneSchoolGlobal, In_EntitiesCarousel_Items=EntitiesCarousel_Items, In_StartingPosition=StartingPosition
    if SwippedItems.Empty
    else
      block BackNavigationHandler (NavigationHandler.NavigationHandler)
        on BackNavigation → Handler_BackNavigation(BackNavigationEvent=BackNavigationEvent)
  placeholder Bottom:
    block BottomBarMenu (UBTConnect.App_Common)
  placeholder Placeholder_CommonUI_Inside_Layout:
    block CommonUI_InsideLayout (UBTConnect.App_Common)
```

#### Screen actions
- **Handler_BackNavigation** inputs: BackNavigationEvent: Object (mandatory)
  ```
  call SetPreloadObject(Preload=ToObject(SwippedItems))
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **ScreenEvent_OnInitialize**
  ```
  if PreloadedCarousel.CarouselItemIds.Empty
    call GetPreloadObject()
    call AssignFromObject(ObjectValue=GetPreloadObject.Preload, ToObjectRef=ToObject(PreloadedCarousel))
    call ListIndexOf(Condition=Value = In_StartingObjectId, List=PreloadedCarousel.CarouselItemIds)
    if ListIndexOf.Position <> -1
      assign: StartingPosition = ListIndexOf.Position
      [M1] for each PreloadedCarousel.CarouselItemIds
        call ListAppend(Element={ EntityId: TextToLongInteger(PreloadedCarousel.CarouselItemIds.Current) }, List=EntitiesCarousel_Items)
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

## Screen OneSchoolGlobalDetails (flow Directory_OneSchoolGlobal)
- roles: Registered, UBTOne_User; URL structure: QueryString
- input parameters: In_OneSchoolGlobalId: Long Integer (mandatory)
- local variables: IsRestoredFromCache: Boolean
- lifecycle: OnInitialize → ScreenEvent_OnInitialize

#### Widget tree
```
block Layout_DetailPage (UBTConnectLibrary.Layouts)
  placeholder Placeholder_Header_Title:
    block CustomText (UBTConnectLibrary.BasePatterns)
      args: In_Text="OneSchool Global", In_TextOptions={  }
  placeholder Content:
    block OneSchoolGlobalDetails_Block (UBTConnect.Directory_OneSchoolGlobal)
      args: In_OneSchoolGlobalId=In_OneSchoolGlobalId, IsRestoredFromCache=IsRestoredFromCache
  placeholder Bottom:
    block BottomBarMenu (UBTConnect.App_Common)
  placeholder Placeholder_CommonUI_Inside_Layout:
    block CommonUI_InsideLayout (UBTConnect.App_Common)
```

#### Screen actions
- **ScreenEvent_OnInitialize**
  ```
  javascript IsViewRestoredFromCache() → IsRestoredFromCache2: Boolean; IsRestoredFromCache: Boolean
    | $parameters.IsRestoredFromCache = $public.View.wasCurrentViewRestoredFromCache()
  assign: IsRestoredFromCache = IsViewRestoredFromCache.IsRestoredFromCache2
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Screen OneSchoolGlobalEventDetail (flow Directory_OneSchoolGlobal)
- roles: Registered, UBTOne_User; URL structure: QueryString
- input parameters: In_OneSchoolGlobalEventId: Text (mandatory)
- local variables: -
- lifecycle: OnInitialize → ScreenEvent_OnInitialize

#### Data sources
- data action **Get_OneSchoolGlobalEvent** fetch=AtStart; outputs: Out_OneSchoolGlobal_Event_Card: UI_OneSchoolGlobal_Event_Card; Out_OneSchoolGlobal_Event_Description: Text; Out_OneSchoolGlobal_Event_SubdivisionName: Text
  ```
  assign: Out_OneSchoolGlobal_Event_Card.SignedURL.LowResolution = "img/UBTConnect.SampleOneSchoolGlobalEvent.png"; Out_OneSchoolGlobal_Event_Card.SignedURL.MediumResolution = "img/UBTConnect.SampleOneSchoolGlobalEvent.png"; Out_OneSchoolGlobal_Event_Card.SignedURL.HighResolution = "img/UBTConnect.SampleOneSchoolGlobalEvent.png"; Out_OneSchoolGlobal_Event_Card.EventId = 1; Out_OneSchoolGlobal_Event_Card.UI_OneSchoolGlobal_Event_Card_Content.Name = "Sports Day Extravaganza: Igniting the Team Spirit"; Out_OneSchoolGlobal_Event_Card.UI_OneSchoolGlobal_Event_Card_Content.Address = "216 Pennant Hills Road, Oatlands NSW 2117"; Out_OneSchoolGlobal_Event_Description = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed qu…
  assign: Out_OneSchoolGlobal_Event_SubdivisionName = "Adelaide"; Out_OneSchoolGlobal_Event_Card.UI_OneSchoolGlobal_Event_Card_Content.DateTimeStart = CurrDateTime(); Out_OneSchoolGlobal_Event_Card.UI_OneSchoolGlobal_Event_Card_Content.DateTimeEnd = AddHours(CurrDateTime(),5); Out_OneSchoolGlobal_Event_Card.UI_OneSchoolGlobal_Event_Card_Content.TimezoneName = "AEST"
  call-server ListAppendAll(List=Out_OneSchoolGlobal_Event_Card.UI_OneSchoolGlobal_Event_Card_Content.ParticipantYear_List, SourceList=[ 4, 5, 6 ]) as ListAppendAll2
  call-server Wait(Duration=2)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

#### Widget tree
```
block Layout_DetailPage (UBTConnectLibrary.Layouts)
  args: In_AlignTitleLeft=True
  placeholder Placeholder_Header_Title:
    text: Upcoming events
  placeholder Content:
    block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
      args: In_IsLoading=not Get_OneSchoolGlobalEvent.IsDataFetched
      placeholder Placeholder_LoadingSection:
        block SubLayout_DirectoryDetailScreen (UBTConnect.SubLayout)
          placeholder Placeholder_DetailCard:
            block OneSchoolGlobal_Event_Card (UBTConnect.Directory_OneSchoolGlobal_Blocks)
              args: OneSchoolGlobal_EventCard=Get_OneSchoolGlobalEvent.Out_OneSchoolGlobal_Event_Card
          placeholder Placeholder_Content:
            block SubLayout_DirectoryDetailScreen_Section (UBTConnect.SubLayout)
              args: In_Title=Get_OneSchoolGlobalEvent.Out_OneSchoolGlobal_Event_SubdivisionName
              placeholder Placeholder_SectionContent:
                if Get_OneSchoolGlobalEvent.IsDataFetched #IsDataFetched
                  block CustomContainer (UBTConnectLibrary.BasePatterns)
                    args: Options={ TextOptions: { FontSize: Entities.UBT_FontSize.ExtraSmall } }
                    placeholder Content:
                      expr: Get_OneSchoolGlobalEvent.Out_OneSchoolGlobal_Event_Description
                else
                  block Skeleton_TextBlock (UBTConnectLibrary.ConnectPatterns)
                    args: In_FontSize=Entities.UBT_FontSize.ExtraSmall, In_NumberOfLines=6
```

#### Screen actions
- **ScreenEvent_OnInitialize**
  ```
  call GetSkeleton_OneSchoolGloval_EventDetails()
  assign: Get_OneSchoolGlobalEvent.Out_OneSchoolGlobal_Event_Card = GetSkeleton_OneSchoolGloval_EventDetails.Out_UI_OneSchoolGlobal_EventCard; Get_OneSchoolGlobalEvent.Out_OneSchoolGlobal_Event_Description = GetSkeleton_OneSchoolGloval_EventDetails.Out_EventDescription; Get_OneSchoolGlobalEvent.Out_OneSchoolGlobal_Event_SubdivisionName = Get_OneSchoolGlobalEvent.Out_OneSchoolGlobal_Event_Description
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

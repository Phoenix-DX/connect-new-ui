# Pack of UI flow Directory_Household_Blocks (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

Own blocks of the flow: HouseholdDetails_Members_Block, HouseholdDetails_TimelinePhoto, HouseholdDetails_TimelinePhoto_List, Household_Card, Household_GalleryCard, Household_GalleryCard_List
Blocks of other UBTConnect flows that the flow uses (transitive): 3

## Block Household_Card (flow Directory_Household_Blocks)
- public: False
- input parameters: Household: UI_LocalityHousehold (mandatory)
- events: Event_OnClickHousehold(HouseholdId: Long Integer (mandatory))
- local variables: -
- lifecycle: OnReady → OnReady; OnParametersChanged → OnParametersChanged
- used by (UBTConnect): Locality_Households_HouseholdList

#### Data sources
- data action **GetMembers** fetch=OnDemand; outputs: HouseholdMembers: LazyImage List; VisibleAvatars: Integer
  ```
  call-server Household_GetMembers_Service(HouseholdId=Household.HouseholdId, User_AgeVisibility=False)
  assign: HouseholdMembers = ConvertList(Household_GetMembers_Service.Out_HouseholdMembers,  {EntityId:"Id",EntityType:"Entities.Connect_Entity.Member"}); VisibleAvatars = Household_GetMembers_Service.VisibleAvatars
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

#### Widget tree
```
block ImageCard_LazyLoading (UBTConnectLibrary.ConnectCorePatterns)
  args: In_BookmarkModifier="bookmark--rounded", In_CardTypeId=Entities.UBT_ImageCardType.List, In_ExtendedClass="padding-bottom-s", In_IsBookmarked=Household.IsBookmarked, In_ShowAvatarList=True
  on Event_Click → Event_OnClickHousehold(HouseholdId=Household.HouseholdId)
  placeholder LazyImage_Placeholder:
    block UBT_LazyImage (UBTConnect_Utils.CW_Image)
      args: EntityId=Household.HouseholdId, EntityType=Entities.Connect_Entity.Household, HasErrorMessage=True, ImageSize={ Width: Entities.UBT_ImageSize.MaxWidth_100vw }
  placeholder AvatarList:
    block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
      args: In_IsLoading=not GetMembers.IsDataFetched
      placeholder Placeholder_LoadingSection:
        block UBT_LazyImage_List (UBTConnect_Utils.CW_Image)
          args: ImageSize={ Height: Entities.UBT_ImageSize.Small_40 }, InvertOrder=True, Items=GetMembers.HouseholdMembers, MaxLimit=GetMembers.VisibleAvatars
  placeholder Placeholder_Content:
    block ImageCard__Content (UBTConnectLibrary.ConnectPatterns)
      args: In_ShowSubtitle=Household.ChildrenNames <> "", In_Subtitle=Household.ChildrenNames, In_Title=Household.HouseholdName
      placeholder Placeholder_BottomSectionContent:
        block IconText (UBTConnectLibrary.ConnectPatterns)
          args: SpacingSize=Entities.UBT_Size.ExtraSmall, Text=Household.LocalityName + ", " + Household.CountryName, TextOptions={ Color: Entities.UBT_Color.Neutral7, FontSize: Entities.UBT_FontSize.ExtraSmall, FontWeight: Entities.UBT_FontWeight.SemiBold }
          placeholder Icon:
            block Icon (UBTConnectLibrary.ConnectPatterns)
              args: In_ColorId=Entities.UBT_Color.Neutral7, In_IconId=Entities.UBT_Icons2.HomePinFill, In_SizeId=Entities.UBT_IconsSize.Small_12
```

#### Block actions
- **OnParametersChanged**
  ```
  call OnReady()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnReady**
  ```
  javascript IsViewRestoredFromCache() → IsRestoredFromCache: Boolean
    | $parameters.IsRestoredFromCache = $public.View.wasCurrentViewRestoredFromCache()
  if (Check if IsViewRestoredFromCache IsRestoredFromCache) IsViewRestoredFromCache.IsRestoredFromCache = True
    end
  else
    call ListClear(List=GetMembers.HouseholdMembers)
    call ListAppend(Element={ EntityId: "", EntityType: Entities.Connect_Entity.Member }, List=GetMembers.HouseholdMembers)
    call ListAppend(Element={ EntityId: "", EntityType: Entities.Connect_Entity.Member }, List=GetMembers.HouseholdMembers) as ListAppend2
    if Household.HouseholdId = NullIdentifier()
      end
    else
      refresh data GetMembers
      end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
    end
  ```

## Block Household_GalleryCard (flow Directory_Household_Blocks)
- public: False
- input parameters: SubdivisionHousehold_GalleryCard: UI_SubdivisionHousehold (mandatory); ItemsPerRow: Integer = 2
- events: Event_OnClick()
- local variables: -
- lifecycle: none
- used by (UBTConnect): Household_GalleryCard_List

#### Widget tree
```
block ImageCard_LazyLoading (UBTConnectLibrary.ConnectCorePatterns) #Subdivision_Household
  args: In_CardTypeId=Entities.UBT_ImageCardType.Gallery, In_ExtendedClass="gallery-card", In_ItemsPerRow=ItemsPerRow
  on Event_Click → Event_OnClick
  placeholder LazyImage_Placeholder:
    block UBT_LazyImage (UBTConnect_Utils.CW_Image)
      args: EntityId=SubdivisionHousehold_GalleryCard.HouseholdId, EntityType=Entities.Connect_Entity.Household, ImageSize={ Width: Entities.UBT_ImageSize.HalfWidth_50vw }
  placeholder Placeholder_Content:
    block ImageCard__Content (UBTConnectLibrary.ConnectPatterns)
      args: In_ShowSubtitle=True, In_Subtitle=SubdivisionHousehold_GalleryCard.ChildrenNames, In_Title=SubdivisionHousehold_GalleryCard.HouseholdName
```

## Block Household_GalleryCard_List (flow Directory_Household_Blocks)
- public: False
- input parameters: In_Household_GalleryCard_List: UI_SubdivisionHousehold List (mandatory); In_IsLoading: Boolean (mandatory)
- events: Event_OnClick_Household_GalleryCard(Event_HouseholdId: Long Integer (mandatory))
- local variables: ItemsPerRow: Integer = 2
- lifecycle: none
- used by (UBTConnect): SupperMeeting_HouseholdList

#### Widget tree
```
block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
  args: In_IsLoading=In_IsLoading
  placeholder Placeholder_LoadingSection:
    block SubLayout_DirectoryDetailScreen_Section (UBTConnect.SubLayout)
      args: In_Title=Get_LookupSection().Households.Plural
      placeholder Placeholder_SectionContent:
        if In_Household_GalleryCard_List.Empty #Empty
          block Directory_EmptyState (UBTConnect.Directory_CommonBlocks)
            args: EntityTypeId=Entities.Connect_Entity.Household
        else
          block Gallery (OutSystemsUI_2_23.Adaptive)
            args: RowItemsDesktop=ItemsPerRow, RowItemsPhone=ItemsPerRow, RowItemsTablet=ItemsPerRow
            placeholder Content:
              list source=In_Household_GalleryCard_List mode=Default  [style="list list-group"; disable-virtualization=True]
                block Household_GalleryCard (UBTConnect.Directory_Household_Blocks)
                  args: ItemsPerRow=ItemsPerRow, SubdivisionHousehold_GalleryCard=In_Household_GalleryCard_List.Current
                  on Event_OnClick → Event_OnClick_Household_GalleryCard(Event_HouseholdId=In_Household_GalleryCard_List.Current.HouseholdId)
```

## Block HouseholdDetails_Members_Block (flow Directory_Household_Blocks)
- public: False
- input parameters: isEnabled: Boolean = True; In_HouseholdMembers: UI_HouseholdMember List (mandatory); In_NonHouseholdMembers: UI_HouseholdMember List (mandatory); In_IsLoading: Boolean (mandatory)
- events: Event_MemberOnClick(MemberId: Long Integer (mandatory)) mandatory; Event_NonMemberOnClick(HouseholdId: Long Integer (mandatory)) mandatory
- local variables: -
- lifecycle: OnReady → ScreenEvent_OnReady
- used by (UBTConnect): HouseholdDetails_Block

#### Widget tree
```
block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
  args: In_IsLoading=In_IsLoading
  placeholder Placeholder_LoadingSection:
    block CustomContainer (UBTConnectLibrary.BasePatterns) #Household_Members
      args: Options={ MarginSize: { BottomSizeId: Entities.UBT_Size.ExtraSmall } }
      placeholder Content:
        block SubLayout_DirectoryDetailScreen_Section (UBTConnect.SubLayout) #Members
          args: In_Title="Household members"
          placeholder Placeholder_SectionContent:
            list source=In_HouseholdMembers mode=Default  [style="list list-group list--gap-s"; disable-virtualization=True]
              block HouseholdMember_ListItem (UBTConnectLibrary.ConnectCorePatterns) #ParentsAndChildren
                args: isEnabled=isEnabled, LifeCycleText=In_HouseholdMembers.Current.LifeCycleText, LifeCycleText_Italic=In_HouseholdMembers.Current.LifeCycleText_IsItallic, Title=In_HouseholdMembers.Current.Title
                on OnClickPerson → Handler_MemberOnClick(MemberId=If(In_HouseholdMembers.Current.MemberRole <> Entities.Connect_HouseholdMemberRole.Child,In_HouseholdMembers.Current.Id, 0))
                placeholder Placeholder_Left:
                  block UBT_LazyImage (UBTConnect_Utils.CW_Image)
                    args: EntityId=In_HouseholdMembers.Current.Id, EntityType=Entities.Connect_Entity.Member, ImageSize={ Height: Entities.UBT_ImageSize.Base_52, Width: Entities.UBT_ImageSize.Square }
                placeholder Actions:
                  block CustomContainer (UBTConnectLibrary.BasePatterns)
                    args: Options={ DisplayOptions: { Display: Entities.UBT_Display.Flex, JustifyContent: Entities.UBT_JustifyContent.SpaceBetween } }
                    placeholder Content:
                      if In_HouseholdMembers.Current.HasCTAs #HasCTAs
                        block Directory_EntityDetailsActions (UBTConnect.Directory_CommonBlocks)
                          args: EnableOptions={ EnableCall: not In_HouseholdMembers.Current.IsDeceased, EnableEmail: not In_HouseholdMembers.Current.IsDeceased }, EntityId=In_HouseholdMembers.Current.Id, EntityType=Entities.Connect_Entity.Member, IsEnabled=isEnabled
                      if In_HouseholdMembers.Current.HasNavigation
                        container  [style="display-flex flex-direction-column justify-content-center"]
                          block CustomContainer (UBTConnectLibrary.BasePatterns)
                            args: Options={ DisplayOptions: {  }, HeightOptions: {  }, WidthOptions: { Min: 100 } }
                            placeholder Content:
                              block Icon (UBTConnectLibrary.ConnectPatterns)
                                args: In_ColorId=Entities.UBT_Color.Neutral4, In_IconId=Entities.UBT_Icons2.ChevronRight
                                on Click → Handler_MemberOnClick(MemberId=In_HouseholdMembers.Current.Id)
    block SubLayout_DirectoryDetailScreen_Section (UBTConnect.SubLayout) #Members_MarriedChildren
      args: In_PaddingBottom=Entities.UBT_Size.Base, In_PaddingTop=Entities.UBT_Size.Small, In_Title=""
      placeholder Placeholder_SectionContent:
        list source=In_NonHouseholdMembers mode=Default  [style="list list-group list--gap-s"; disable-virtualization=True]
          block NonMember_ListItem (UBTConnectLibrary.ConnectCorePatterns)
            args: DeceasedCaption=In_NonHouseholdMembers.Current.LifeCycleText, isEnabled=isEnabled, LifeCycleText_Italic=In_NonHouseholdMembers.Current.LifeCycleText_IsItallic, MarriageHighlightText=In_NonHouseholdMembers.Current.MarriageHighlightText, MarriedCaption=In_NonHouseholdMembers.Current.MarriageText, MarriedPartnerTakenText=In_NonHouseholdMembers.Current.MarriagePartnerTakenText, Title=In_NonHouseholdMembers.Current.Title
            on OnClickPerson → Handler_NonMemberOnClick(Target_CountryName=In_NonHouseholdMembers.Current.CountryName, Target_HouseholdId=In_NonHouseholdMembers.Current.HouseholdId, Target_LocalityName=In_NonHouseholdMembers.Current.LocalityName)
            placeholder Placeholder_Left:
              block UBT_LazyImage (UBTConnect_Utils.CW_Image)
                args: EntityId=In_NonHouseholdMembers.Current.Id, EntityType=Entities.Connect_Entity.Member, ImageSize={ Height: Entities.UBT_ImageSize.Base_52, Width: Entities.UBT_ImageSize.Square }
            placeholder Actions:
              if In_NonHouseholdMembers.Current.HasNavigation
                container  [style="display-flex flex-direction-column justify-content-center"]
                  block CustomContainer (UBTConnectLibrary.BasePatterns)
                    args: Options={ DisplayOptions: { Display: Entities.UBT_Display.Flex, AlignItems: Entities.UBT_AlignItems.Center, JustifyContent: Entities.UBT_JustifyContent.Center }, HeightOptions: {  }, WidthOptions: { Min: 100…
                    placeholder Content:
                      block Icon (UBTConnectLibrary.ConnectPatterns)
                        args: In_ColorId=Entities.UBT_Color.Neutral4, In_IconId=Entities.UBT_Icons2.ChevronRight
                        on Click → Handler_NonMemberOnClick(Target_CountryName=In_NonHouseholdMembers.Current.CountryName, Target_HouseholdId=In_NonHouseholdMembers.Current.HouseholdId, Target_LocalityName=In_NonHouseholdMembers.Current.LocalityName)
```

#### Block actions
- **Handler_MemberOnClick** inputs: MemberId: Long Integer (mandatory)
  ```
  if MemberId = 0 or not isEnabled
    end
  else
    trigger event Event_MemberOnClick(MemberId=MemberId)
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **Handler_NonMemberOnClick** inputs: Target_LocalityName: Text (mandatory); Target_CountryName: Text (mandatory); Target_HouseholdId: Long Integer (mandatory)
  ```
  call HasAccessToRegion(Target_CountryNameOrCode=Target_CountryName, Target_LocalityNameOrId=Target_LocalityName)
  if HasAccessToRegion.HasAccess
    trigger event Event_NonMemberOnClick(HouseholdId=Target_HouseholdId)
    end
  else
    call App_Subscription_ShowUpgradePopUp()
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **ScreenEvent_OnReady**
  ```
  if In_IsLoading and In_HouseholdMembers.Empty
    call GetSkeletonList_UI_HouseholdMembers(ListLength=5)
    assign: In_HouseholdMembers = GetSkeletonList_UI_HouseholdMembers.UI_HouseholdMember
    end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Block HouseholdDetails_TimelinePhoto (flow Directory_Household_Blocks)
- public: True
- input parameters: In_BackgroundURL: Text (mandatory); Label: Text (mandatory); Date: Date Time (mandatory); In_CardTypeId: UBT_ImageCardType Identifier (mandatory); IsSelected: Boolean (mandatory)
- events: Selected(Date: Date Time (mandatory)) mandatory
- local variables: MainContainerClass: Text = "ubt-household-image-card"
- lifecycle: none
- used by (UBTConnect): HouseholdDetails_TimelinePhoto_List

#### Widget tree
```
block CustomContainer (UBTConnectLibrary.BasePatterns) #Block_Image
  args: ExtendedClasses=FormatClasses(\n    MainContainerClass + "__background-image",\n    GetClasses_BackgroundImageSize(In_CardTypeId)\n)\n       \n    , Options={ BorderOptions: { Color: If(IsSelected, Entities.UBT_Color.Primary,Entities.UBT_Color.Neutral3), Size: { GeneralSizeId: Entities.UBT_Size.Small }, Radius: { GeneralSizeId: Entities.UBT_Shape.Soft } …
  on Clicked → Selected(Date=Date)
  placeholder Content:
    block UBT_LazyImage (UBTConnect_Utils.CW_Image)
      args: EntityId=NullIdentifier(), EntityType=Entities.Connect_Entity.Household, ImageSize={ Height: Entities.UBT_ImageSize.Large_65, Width: Entities.UBT_ImageSize.Auto }, ImageURL=In_BackgroundURL, In_BorderRadius=Entities.UBT_Shape.Soft
    container  [style="householdImage_horizontalCard-label"; visible=In_BackgroundURL <> ""]
      expr: Label
```

## Block HouseholdDetails_TimelinePhoto_List (flow Directory_Household_Blocks)
- public: False
- input parameters: In_HouseholdTimelineImages: UI_HouseholdTimelineImages List (mandatory)
- events: Event_DateSelected(Date: Date Time (mandatory)) mandatory
- local variables: -
- lifecycle: none
- used by (UBTConnect): HouseholdDetails_Block

#### Widget tree
```
list source=In_HouseholdTimelineImages mode=Default  [style="Household_GalleryCard-list list list-group list-horizontal--gap-xs"; disable-virtualization=True]
  block HouseholdDetails_TimelinePhoto (UBTConnect.Directory_Household_Blocks)
    args: Date=In_HouseholdTimelineImages.Current.Date, In_BackgroundURL=In_HouseholdTimelineImages.Current.SignedURL, In_CardTypeId=Entities.UBT_ImageCardType.Gallery, IsSelected=In_HouseholdTimelineImages.Current.IsCurrent, Label=In_HouseholdTimelineImages.Current.Label
    on Selected → Event_DateSelected(Date=Date)
```

## Blocks of other flows (signature only; full text in the pack of their flow)

| Block | Flow | Pack | Inputs | Events |
|---|---|---|---|---|
| Directory_EmptyState | Directory_CommonBlocks | `../../_shared/pack/blocks.md` | EntityTypeId: Connect_Entity Identifier (mandatory); Location: Text = "found nearby" | - |
| Directory_EntityDetailsActions | Directory_CommonBlocks | `../../_shared/pack/blocks.md` | IsEnabled: Boolean = True; EntityType: Connect_Entity Identifier (mandatory); EntityId: Long Integer (mandatory); ContactPopUp_OverrideOptions: ContactPopUp_OverrideOptions; EnableOptions: ActionsMenuEnableOptions; useViewDetails: Boolean | Event_MenuEdit; OnChange_Bookmark; ViewDetails_OnClick |
| SubLayout_DirectoryDetailScreen_Section | SubLayout | `../../_shared/pack/blocks.md` | In_Title: Text (mandatory); In_PaddingTop: UBT_Size Identifier = Entities.UBT_Size.Small; In_PaddingBottom: UBT_Size Identifier = Entities.UBT_Size.Small | - |

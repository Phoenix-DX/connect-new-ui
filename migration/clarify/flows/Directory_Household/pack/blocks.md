# Pack of UI flow Directory_Household (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

Own blocks of the flow: HouseholdDetails_Block, HouseholdRelations_Block
Blocks of other UBTConnect flows that the flow uses (transitive): 43

## Block HouseholdDetails_Block (flow Directory_Household)
- public: False
- input parameters: HouseholdId: Long Integer (mandatory); isEnabled: Boolean = True; Preview: HouseholdPreviewStructure; In_ShowKebabMenu: Boolean; In_CheckVisibility: Boolean; In_IsSkeletonOnly: Boolean; In_HideActions: Boolean
- events: HouseholdDataFetched(LocalityName: Text; CountryName: Text; DeceasedOrAncestry_View: Boolean (mandatory))
- local variables: TagsList: Tag List; TagsList_SelectedTag: Text; TagsList_Id_About: Text = "About"; TagsList_Id_Photos: Text = "Photos"; TEMP_TimelineImages: UI_HouseholdTimelineImages List; LocalIsBookmarked: Boolean; UserAge_Visibility: Boolean; IsSkeletonOnly: Boolean; HideActions_PhotoBook: Boolean; IsShareOpen: Boolean
- lifecycle: OnInitialize → ScreenEvent_OnInitialize; OnParametersChanged → ScreenEvent_OnParametersChanged
- used by (UBTConnect): EntitiesCarousel_HouseholdDetails, HouseholdDetails, Locality_Details, Profile_HouseholdPreview

#### Data sources
- data action **GetHousehold** fetch=OnDemand; outputs: Household: UI_Screen_HouseholdDetails; Out_HouseholdMembers: UI_HouseholdMember List; Out_NonHouseholdMembers: UI_HouseholdMember List; isVisible: Boolean; OnAfterFetch → OnAfterFetch_GetHouseholdDetail
  ```
  call-server GetHouseholdDetails(CheckVisibility=In_CheckVisibility, HouseholdId=HouseholdId, User_AgeVisibility=UserAge_Visibility)
  assign: Household = GetHouseholdDetails.UI_Screen_HouseholdDetails; Out_HouseholdMembers = GetHouseholdDetails.Out_HouseholdMembers; Out_NonHouseholdMembers = GetHouseholdDetails.Out_NonHouseholdMembers; isVisible = GetHouseholdDetails.isVisible
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- data action **GetHousehold_Coordinates** fetch=OnDemand; outputs: HouseholdCoordinates: Directory_Coordinates
  ```
  call-server GetHouseholdCoordinates(In_HouseholdId=HouseholdId)
  assign: HouseholdCoordinates = GetHouseholdCoordinates.Out_HouseholdCoordinates
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

#### Widget tree
```
block SubLayout_DirectoryDetailScreen (UBTConnect.SubLayout) #DirectoryDetailScreenContent
  args: HideActions=In_HideActions and TagsList_SelectedTag = TagsList_Id_About
  placeholder Placeholder_DetailCard:
    block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
      args: In_IsLoading=not GetHousehold.IsDataFetched
      placeholder Placeholder_LoadingSection:
        block ImageCard_LazyLoading (UBTConnectLibrary.ConnectCorePatterns) #ImageCard_LazyLoading
          args: In_CardTypeId=Entities.UBT_ImageCardType.Detail, In_IsBookmarked=LocalIsBookmarked
          placeholder LazyImage_Placeholder:
            block UBT_LazyImage (UBTConnect_Utils.CW_Image)
              args: EntityId=If(not GetHousehold.Household.HouseholdCard.Household_Card_Content.DisplayOptions.IsHidden and \nnot GetHousehold.Household.HouseholdCard.Household_Card_Content.DisplayOptions.IsDeceased and \nnot Ge…, EntityType=Entities.Connect_Entity.Household, HasErrorMessage=True, ImageSize={ Width: Entities.UBT_ImageSize.MaxWidth_100vw }
          placeholder Placeholder_ImageTag:
            placeholder-def Placeholder_CarouselTag
          placeholder Placeholder_Content:
            block ImageCard__Content (UBTConnectLibrary.ConnectPatterns)
              args: In_ShowSubtitle=TagsList_SelectedTag = TagsList_Id_About and GetHousehold.Household.HouseholdCard.Household_Card_Content.FamilyNames <> "", In_Subtitle=If(TagsList_SelectedTag = TagsList_Id_About,GetHousehold.Household.HouseholdCard.Household_Card_Content.FamilyNames,""), In_Title=If(TagsList_SelectedTag = TagsList_Id_About,GetHousehold.Household.HouseholdCard.Household_Card_Content.Name,"Household gallery")
              placeholder Placeholder_TopSectionContent:
                block CustomContainer (UBTConnectLibrary.BasePatterns)
                  args: Options={ DisplayOptions: { Display: Entities.UBT_Display.Flex, AlignItems: Entities.UBT_AlignItems.Center, JustifyContent: Entities.UBT_JustifyContent.SpaceBetween, FlexDirection: Entities.UBT_FlexDirection…
                  placeholder Content:
                    container
                      block HorizontalTagList (UBTConnectLibrary.ConnectPatterns)
                        args: In_IsMandatorySelection=True, In_IsSingleSelection=True, In_TagToggleList=TagsList, isEnabled=isEnabled
                        on Changed → OnChangeTag(UpdatedTagList=UpdatedTagList)
                    container  [visible=In_ShowKebabMenu]
                      block KebabButtonMenu (UBTConnectLibrary.ConnectCorePatterns)
                        args: isEnable=isEnabled
                        on Edit → Handler_OnMenuEdit
                        on Share → Handler_OnShare
                if not GetHousehold.isVisible #isHouseholdHidden
                  block CustomContainer (UBTConnectLibrary.BasePatterns)
                    args: Options={ MarginSize: { TopSizeId: Entities.UBT_Size.Small } }
                    placeholder Content:
                      block IconText (UBTConnectLibrary.ConnectPatterns)
                        args: SpacingSize=Entities.UBT_Size.ExtraSmall, Text="Your profile is private and only visible to you", TextOptions={ Color: Entities.UBT_Color.Info, FontSize: Entities.UBT_FontSize.Small, FontWeight: Entities.UBT_FontWeight.Regular }
                        placeholder Icon:
                          block Icon (UBTConnectLibrary.ConnectPatterns)
                            args: In_ColorId=Entities.UBT_Color.Info, In_IconId=Entities.UBT_Icons2.Lock, In_SizeId=Entities.UBT_IconsSize.NonStandard_16
              placeholder Placeholder_BottomSectionContent:
                if TagsList_SelectedTag = TagsList_Id_About #About
                  container #AddressSection  [style="householdAddress"; visible=not GetHousehold.Household.HouseholdCard.Household_Card_Content.DisplayOptions.IsHidden and \nnot GetHousehold.Househol…]
                    block CustomContainer (UBTConnectLibrary.BasePatterns) #Address
                      args: Options={ MarginSize: { BottomSizeId: Entities.UBT_Size.Small }, DisplayOptions: {  } }
                      placeholder Content:
                        block AddressPopup_Wrapper (UBTConnect_Utils.CW_CTA_PopUps)
                          args: IconVisible=True, In_Address=GetHousehold.Household.HouseholdCard.Household_Card_Content.Address, In_Coordinates=GetHousehold_Coordinates.HouseholdCoordinates, IsEnabled=isEnabled
                  container #SeeMoreSection  [style="full-width padding-top-s"]
                    block SeeMoreSection (UBTConnectLibrary.ConnectPatterns)
                      args: isEnabled=isEnabled, StartExpanded=False
                      placeholder Content:
                        block CustomContainer (UBTConnectLibrary.BasePatterns)
                          args: ExtendedClasses="see-more-locality-cont", Options={ PaddingSize: { BottomSizeId: Entities.UBT_Size.Small }, BorderOptions: {  } }
                          placeholder Content:
                            block Columns_Two (UBTConnectLibrary.BasePatterns)
                              args: ColumnOptions={ ColumnBehaviour: Entities.UBT_ColumnBehaviour.ReduceFirst, ColumnSizes: {  } }
                              placeholder Left:
                                block IconText (UBTConnectLibrary.ConnectPatterns)
                                  args: SpacingSize=Entities.UBT_Size.ExtraSmall, Text="Locality: ", TextOptions={ Color: Entities.UBT_Color.Neutral10, FontSize: Entities.UBT_FontSize.Small, FontWeight: Entities.UBT_FontWeight.Regular }
                                  placeholder Icon:
                                    block Icon (UBTConnectLibrary.ConnectPatterns)
                                      args: In_ColorId=Entities.UBT_Color.Neutral8, In_IconId=Entities.UBT_Icons2.HomePIn, In_SizeId=Entities.UBT_IconsSize.NonStandard_16
                              placeholder Right:
                                block CustomContainer (UBTConnectLibrary.BasePatterns) #Locality
                                  args: Options={ MarginSize: { BottomSizeId: Entities.UBT_Size.Small }, DisplayOptions: {  } }
                                  on Clicked → OnClick_NavigateToLocality
                                  placeholder Content:
                                    block CustomText (UBTConnectLibrary.BasePatterns)
                                      args: ExtendedClasses=If(GetHousehold.Household.HouseholdCard.Household_Card_Content.DisplayOptions.IsDeceased or GetHousehold.Household.HouseholdCard.Household_Card_Content.DisplayOptions.IsAncestry,"link-disabled-view",…, In_Text=GetHousehold.Household.HouseholdCard.Household_Card_Content.LocalityName, In_TextOptions={ Color: Entities.UBT_Color.Primary, FontSize: Entities.UBT_FontSize.Small, IsUnderlined: True }
                        block CustomContainer (UBTConnectLibrary.BasePatterns)
                          args: Options={ PaddingSize: { TopSizeId: Entities.UBT_Size.Small } }
                          placeholder Content:
                            block Columns_Two (UBTConnectLibrary.BasePatterns)
                              args: ColumnOptions={ ColumnBehaviour: Entities.UBT_ColumnBehaviour.ReduceFirst, ColumnSizes: {  } }
                              placeholder Left:
                                block IconText (UBTConnectLibrary.ConnectPatterns)
                                  args: SpacingSize=Entities.UBT_Size.ExtraSmall, Text="Supper Meeting: ", TextOptions={ Color: Entities.UBT_Color.Neutral10, FontSize: Entities.UBT_FontSize.Small, FontWeight: Entities.UBT_FontWeight.Regular }
                                  placeholder Icon:
                                    block Icon (UBTConnectLibrary.ConnectPatterns)
                                      args: In_ColorId=Entities.UBT_Color.Neutral8, In_IconId=Entities.UBT_Icons2.Cottage, In_SizeId=Entities.UBT_IconsSize.NonStandard_16
                              placeholder Right:
                                block CustomContainer (UBTConnectLibrary.BasePatterns) #SupperMeeting
                                  args: Options={ MarginSize: { BottomSizeId: Entities.UBT_Size.Small }, DisplayOptions: {  } }
                                  on Clicked → OnClick_NavigateToSupperMeeting
                                  placeholder Content:
                                    block CustomText (UBTConnectLibrary.BasePatterns)
                                      args: ExtendedClasses=If(GetHousehold.Household.HouseholdCard.Household_Card_Content.DisplayOptions.IsDeceased or GetHousehold.Household.HouseholdCard.Household_Card_Content.DisplayOptions.IsAncestry,"link-disabled-view",…, In_Text=GetHousehold.Household.HouseholdCard.Household_Card_Content.SupperMeetingName, In_TextOptions={ Color: Entities.UBT_Color.Primary, FontSize: Entities.UBT_FontSize.Small, IsUnderlined: True }
                if TagsList_SelectedTag = TagsList_Id_Photos #Photos
                  container #Gallery
                    block HouseholdDetails_TimelinePhoto_List (UBTConnect.Directory_Household_Blocks)
                      args: In_HouseholdTimelineImages=TEMP_TimelineImages
                      on Event_DateSelected → Handler_TimelinePhotoSelected(Date=Date)
                  if Connect_LaunchDarkly_PermissionCheck(Entities.LaunchDarkly_FF.MobileDirectoryHouseholdGallery) #LD_Checks
                  else
                    block CustomContainer (UBTConnectLibrary.BasePatterns)
                      args: Options={ BorderOptions: { Color: Entities.UBT_Color.Neutral3, Size: { GeneralSizeId: Entities.UBT_Size.Small }, Radius: { GeneralSizeId: Entities.UBT_Shape.Large } } }
                      placeholder Content:
                        block ComingSoon (UBTConnectLibrary.ConnectPatterns) #ComingSoon
                          args: In_TextOptions={ Color: Entities.UBT_Color.Neutral7, FontSize: Entities.UBT_FontSize.Base, FontWeight: Entities.UBT_FontWeight.SemiBold }
  placeholder Placeholder_CallToAction:
    if HideActions_PhotoBook #HideActionsPhotoBook2
    else
      block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
        args: In_IsLoading=not GetHousehold.IsDataFetched
        placeholder Placeholder_LoadingSection:
          block CustomContainer (UBTConnectLibrary.BasePatterns) #Actions
            args: Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral0 }, PaddingSize: { HorizontalSizeId: Entities.UBT_Size.Base, TopSizeId: Entities.UBT_Size.Small, BottomSizeId: Entities.UBT_Size.Base } }
            placeholder Content:
              block CustomText (UBTConnectLibrary.BasePatterns)
                args: In_Text=If(TagsList_SelectedTag = TagsList_Id_About,"Actions","Photobook"), In_TextOptions={ Color: Entities.UBT_Color.Neutral9, FontSize: Entities.UBT_FontSize.Small, FontWeight: Entities.UBT_FontWeight.SemiBold }
              if TagsList_SelectedTag = TagsList_Id_About #If_IsAbout
                container  [style="margin-bottom-xs"]
                block Directory_EntityDetailsActions (UBTConnect.Directory_CommonBlocks)
                  args: ContactPopUp_OverrideOptions={ Name: GetHousehold.Household.HouseholdCard.Household_Card_Content.Name }, EnableOptions={ EnableNotes: not GetHousehold.Household.HouseholdCard.Household_Card_Content.DisplayOptions.IsDeceased, EnableShare: not GetHousehold.Household.HouseholdCard.Household_Card_Content.DisplayOptions.I…, EntityId=HouseholdId, EntityType=Entities.Connect_Entity.Household, IsEnabled=isEnabled
                  on OnChange_Bookmark → Directory_EntityDetailsActionsOnChange_Bookmark(isBookmarked=isBookmarked)
              else
                block CustomContainer (UBTConnectLibrary.BasePatterns)
                  args: Options={ PaddingSize: { VerticalSizeId: Entities.UBT_Size.Small, HorizontalSizeId: Entities.UBT_Size.Base }, DisplayOptions: {  } }
                  on Clicked → Handler_OnClickPhotobook
                  placeholder Content:
                    block Columns_Two (UBTConnectLibrary.BasePatterns)
                      args: ColumnOptions={ ColumnBehaviour: Entities.UBT_ColumnBehaviour.ReduceLast, SpacingSize: Entities.UBT_Size.Small }
                      placeholder Left:
                        block IconText (UBTConnectLibrary.ConnectPatterns)
                          args: SpacingSize=Entities.UBT_Size.Base, Text="Photobook"
                          placeholder Icon:
                            block Icon (UBTConnectLibrary.ConnectPatterns)
                              args: In_IconId=Entities.UBT_Icons2.BookClosed
                      placeholder Right:
                        block Icon (UBTConnectLibrary.ConnectPatterns)
                          args: In_IconId=Entities.UBT_Icons2.ChevronRight
  placeholder Placeholder_Content:
    if IsSkeletonOnly #IsSkeleton
    else
      container #VisibleAboutTab  [style=If(TagsList_SelectedTag = TagsList_Id_About,"","hidden")]
        block HouseholdDetails_Members_Block (UBTConnect.Directory_Household_Blocks)
          args: In_HouseholdMembers=GetHousehold.Out_HouseholdMembers, In_IsLoading=not GetHousehold.IsDataFetched, In_NonHouseholdMembers=GetHousehold.Out_NonHouseholdMembers, isEnabled=isEnabled
          on Event_MemberOnClick → Handler_OnClickMember(MeberId=MemberId)
          on Event_NonMemberOnClick → Handler_OnClickNavigateTomarriedChildren_Household(In_HouseholdId=HouseholdId)
if False #HideInServiceStudio  [DEAD BRANCH: condition is a constant]
else
  if In_ShowKebabMenu #ShowShareSheet
    block ShareSheet (UBTConnect_Utils.CW_Share)
      args: In_IsOpen=IsShareOpen, In_ShareableObjectId=HouseholdId, In_ShareObjectTypeId=Entities.Type_ShareObject.MyHousehold
      on Event_ClosedShareSheet → Handler_CloseShareSheet
      placeholder Placeholder_ShareableObject:
        block ShareableObject_Generic (UBTConnect_Utils.CW_Share)
          args: In_ShareableObject={ ConnectEntityTypeId: Entities.Connect_Entity.Household, Id: HouseholdId, Title: GetHousehold.Household.HouseholdCard.Household_Card_Content.Name, Subtitle: GetHousehold.Household.HouseholdCard.Hous…
```

#### Block actions
- **Action_HandlePreviewData**
  ```
  if Preview.UsePreview
    assign: GetHousehold.Household.HouseholdCard.Household_Card_Content.Address = Preview.FormattedAddress
    call ListIndexOf(Condition=Id = Preview.HouseholdMemberId, List=GetHousehold.Out_HouseholdMembers)
    if ListIndexOf.Position <> -1
      assign: GetHousehold.Out_HouseholdMembers[ListIndexOf.Position].DisplayAge = Preview.UI_AccountForm.AccountForm_PersonalInformation.ShowLifeCycleDates; GetHousehold.Out_HouseholdMembers[ListIndexOf.Position].MobilePhone = If(Preview.UI_AccountForm.AccountForm_ContactInformation.ShowMobileNumber,Preview.UI_AccountForm.AccountForm_ContactInformation.MobileNumber,""); GetHousehold.Out_HouseholdMembers[ListIndexOf.Position].WorkPhone = If(Preview.UI_AccountForm.AccountForm_ContactInformation.ShowWorkNumber,Preview.UI_AccountForm.AccountForm_ContactInformation.WorkNumber,""); GetHousehold.Out_HouseholdMembers[ListIndexOf.Position].Email = Preview.UI_AccountForm.AccountForm_PersonalInformation.Email
      if Preview.isHouseholder
        assign: GetHousehold.Out_HouseholdMembers[ListIndexOf.Position].HomePhone = Preview.UI_AccountForm.AccountForm_ContactInformation.HomeNumber
        end
      else
        end
    else
      end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **Action_SetHideActionsPhotobook**
  ```
  assign: HideActions_PhotoBook =  TagsList_SelectedTag = TagsList_Id_Photos and not GetHasPhotobookAccess()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **CheckUserAccessToHousehold**
  ```
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **ChecUserAwayHouseholdAccess**
  ```
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Directory_EntityDetailsActionsOnChange_Bookmark** inputs: isBookmarked: Boolean (mandatory)
  ```
  assign: LocalIsBookmarked = isBookmarked
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_CloseShareSheet**
  ```
  assign: IsShareOpen = False
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_OnClickMember** inputs: MeberId: Long Integer (mandatory); locals: Member: Member_Optional; IsAwayMother: Boolean; IsAwayFather: Boolean; RelationsHouseholdId: Text
  ```
  if isEnabled
    if True
      navigate → Household_Relations(HouseholdId=HouseholdId, MemberId=MeberId) transition=Inherited
    else
      if MeberId = 0
        end
      else
        end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
    end
    [DISABLED] call ListFilter(Condition=Id = MeberId, SourceList=GetHousehold.Household.HouseholdMembers) as GetMemberId
    [DISABLED] assign (Member): Member = ConvertRecord(GetMemberId.FilteredList.Current,  {Id:"Id",HouseholderId:"HouseholderId",Name:"Name",Lastname:"Lastname",MaidenName:"MaidenName",DateOfBirth:"DateOfBirth",IsDeceased:"IsDeceased",DeceasedDate:"DeceasedDate",Locality:"GetHousehold.Household.LocalityName",Country:"GetHousehold.Househol…
    [DISABLED] call ListFilter(Condition=Member.ExtraDetails.Current.DisplayType= Entities.DetailDisplayType.AwayFather, SourceList=Member.ExtraDetails) as ListFilterMemberByAwayFather
    [DISABLED] assign: IsAwayFather = not ListFilterMemberByAwayFather.FilteredList.Empty
    [DISABLED] call ListFilter(Condition=Member.ExtraDetails.Current.DisplayType= Entities.DetailDisplayType.AwayMother, SourceList=Member.ExtraDetails) as ListFilterMemberByAwayMother
    [DISABLED] assign: IsAwayMother = not ListFilterMemberByAwayMother.FilteredList.Empty
    [DISABLED] if IsAwayMother and IsAwayFather
      [DISABLED] assign: RelationsHouseholdId = TextToLongInteger(ListFilterMemberByAwayFather.FilteredList.Current.Data)
      [DISABLED] call ChecUserAwayHouseholdAccess() as ChecUserAccessToAwayHousehold
      [DISABLED] if (Has Access To Away Parents?) HasAccess
        [M1] [DISABLED] call CheckUserAccessToHousehold()
        [DISABLED] if HasAccess
          [DISABLED] end
        else
          [DISABLED] assign: 
          [DISABLED] end
      else
        [DISABLED] assign: 
        [DISABLED] end
    else
      [DISABLED] call ListFilter(Condition=Member.ExtraDetails.Current.DisplayType= Entities.DetailDisplayType.RelationshipMother, SourceList=Member.ExtraDetails) as ListFilterMemberByMother
      [DISABLED] if IsAwayFather
        [DISABLED] assign: RelationsHouseholdId = TextToLongInteger(ListFilterMemberByMother.FilteredList.Current.Data)
        → continues at [M1]
      else
        [DISABLED] call ListFilter(Condition=Member.ExtraDetails.Current.DisplayType= Entities.DetailDisplayType.RelationshipFather, SourceList=Member.ExtraDetails) as ListFilterMemberByFather
        [DISABLED] assign: RelationsHouseholdId = TextToLongInteger(ListFilterMemberByFather.FilteredList.Current.Data)
        → continues at [M1]
    [DISABLED] end
    [DISABLED] end
    [DISABLED] end
  ```
- **Handler_OnClickNavigateTomarriedChildren_Household** inputs: In_HouseholdId: Long Integer (mandatory)
  ```
  if isEnabled
    navigate → HouseholdDetails(HouseholdId=In_HouseholdId) transition=Inherited
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_OnClickPhotobook**
  ```
  if (Has LocalityId?) GetHousehold.Household.HouseholdCard.Household_Card_Content.LocalityId <> NullIdentifier()
    navigate → Photobook(In_HouseholdId=HouseholdId, In_LocalityId=GetHousehold.Household.HouseholdCard.Household_Card_Content.LocalityId) transition=Inherited
  else
    message Info: "Photobook is currently unavailable for this household. Please try again later."
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_OnMenuEdit**
  ```
  navigate → Profile() transition=Inherited
  ```
- **Handler_OnShare**
  ```
  if (Has extended share?) GetHasExtendedShare()
    assign: IsShareOpen = True
    end
  else
    call ShowComingSoonMessage()
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **Handler_TimelinePhotoSelected** inputs: Date: Date Time (mandatory)
  ```
  [M1] for each TEMP_TimelineImages (Out_TimelineImages)
    assign (Set IsCurrent): TEMP_TimelineImages.Current.IsCurrent = If(TEMP_TimelineImages.Current.Date = Date, True, False)
    → continues at [M1]
  end for
  end
  unreachable nodes (not connected to start or to an exception handler):
    [DISABLED] for each GetHouseholdTimelineImages.Out_TimelineImages (Out_TimelineImages)
      [DISABLED] assign (Set IsCurrent): GetHouseholdTimelineImages.Out_TimelineImages.Current.IsCurrent = If(GetHouseholdTimelineImages.Out_TimelineImages.Current.Date = Date, True, False)
      → continues at <Out_TimelineImages>
    end for
    end
  ```
- **OnAfterFetch_GetHouseholdDetail**
  ```
  call Action_HandlePreviewData()
  [M1] for each TagsList
    if TagsList.Current.Identifier = Entities.HouseholdDetailTags.Photos
      assign: TagsList.Current.Enabled = not GetHousehold.Household.HouseholdCard.Household_Card_Content.DisplayOptions.IsDeceased and \nnot GetHousehold.Household.HouseholdCard.Household_Card_Content.DisplayOptions.IsAncestry and \nnot GetHousehold.Household.HouseholdCard.Household_Card_Content.DisplayOptions.IsHidden\n
      → continues at [M1]
    else
      → continues at [M1]
  end for
  trigger event HouseholdDataFetched(CountryName=GetHousehold.Household.HouseholdCard.Household_Card_Content.CountryName, DeceasedOrAncestry_View=GetHousehold.Household.HouseholdCard.Household_Card_Content.DisplayOptions.IsDeceased or GetHousehold.Household.HouseholdCard.Household_Card_Content.DisplayOptions.IsAncestry, LocalityName=GetHousehold.Household.HouseholdCard.Household_Card_Content.LocalityName)
  end
  unreachable nodes (not connected to start or to an exception handler):
    [DISABLED] call IsHouseholdDetails_InAncestryModeView(HouseholdId=HouseholdId)
    end
  ```
- **OnChangeTag** inputs: UpdatedTagList: Tag List (mandatory)
  ```
  assign: TagsList = UpdatedTagList
  call ListIndexOf(Condition=IsSelected, List=TagsList) as ListIndexOf_IsSelected
  assign: TagsList_SelectedTag = TagsList[ListIndexOf_IsSelected.Position].Identifier
  call Action_SetHideActionsPhotobook()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnClick_NavigateToLocality**
  ```
  if GetHousehold.Household.HouseholdCard.Household_Card_Content.DisplayOptions.IsDeceased or GetHousehold.Household.HouseholdCard.Household_Card_Content.DisplayOptions.IsAncestry
    end
  else
    navigate → Locality_Details(LocalityId=GetHousehold.Household.HouseholdCard.Household_Card_Content.LocalityId, PreloadedLocalityLabel=GetHousehold.Household.HouseholdCard.Household_Card_Content.LocalityName) transition=Inherited
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnClick_NavigateToSupperMeeting**
  ```
  if GetHousehold.Household.HouseholdCard.Household_Card_Content.DisplayOptions.IsDeceased or GetHousehold.Household.HouseholdCard.Household_Card_Content.DisplayOptions.IsAncestry
    end
  else
    navigate → SupperMeeting_Details(In_SubdivsionId=GetHousehold.Household.HouseholdCard.Household_Card_Content.SupperMeetingId) transition=Inherited
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Refresh_GetHouseholdCoordinates**
  ```
  refresh data GetHousehold_Coordinates
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Refresh_GetHouseholdDetail**
  ```
  refresh data GetHousehold
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **ScreenEvent_OnInitialize**
  ```
  call ScreenEvent_OnReady()
  if TagsList.Empty
    call ListAppend(Element={ Text: TagsList_Id_About, Identifier: TagsList_Id_About, IsSelected: True }, List=TagsList) as ListAppend_About
    call ListAppend(Element={ Text: TagsList_Id_Photos, Identifier: TagsList_Id_Photos, IsSelected: False }, List=TagsList) as ListAppend_Photos
    assign (Set Selected Tag): TagsList_SelectedTag = TagsList_Id_About
    end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **ScreenEvent_OnParametersChanged**
  ```
  if Preview.UsePreview
    assign: UserAge_Visibility = Preview.UI_AccountForm.AccountForm_PersonalInformation.ShowLifeCycleDates
    refresh data GetHousehold
    [M1] if IsSkeletonOnly and not In_IsSkeletonOnly
      assign: IsSkeletonOnly = False
      javascript Refreshes()
        | $actions.Refresh_GetHouseholdDetail();
        | $actions.Refresh_GetHouseholdCoordinates(); 
      end
    else
      end
  else
    → continues at [M1]
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **ScreenEvent_OnReady**
  ```
  call GetUserInformation_Wrapper()
  javascript CheckRestored() → FromCache: Boolean; FromHistory: Boolean
    | $parameters.FromCache = $public.View.wasCurrentViewRestoredFromCache();
    | //$parameters.FromHistory = $public.Navigation.navigatedFromHistory();
  if CheckRestored.FromCache or CheckRestored.FromHistory
    if (Visibility Has Changed) GetUserInformation_Wrapper.UserInformation.Directory_UserCurrent_Visibility.DisplayAge <> UserAge_Visibility
      [M1] assign: UserAge_Visibility = GetUserInformation_Wrapper.UserInformation.Directory_UserCurrent_Visibility.DisplayAge
      call GetSkeleton_UI_HouseholdDetails()
      assign: GetHousehold.Household = GetSkeleton_UI_HouseholdDetails.UI_HouseholdDetails
      assign: IsSkeletonOnly = In_IsSkeletonOnly
      if False//IsSkeletonOnly
        end
      else
        javascript Refreshes()
          | $actions.Refresh_GetHouseholdDetail();
          | $actions.Refresh_GetHouseholdCoordinates(); 
        end
    else
      end
  else
    → continues at [M1]
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```

## Block HouseholdRelations_Block (flow Directory_Household)
- public: False
- input parameters: HouseholdId: Long Integer (mandatory); MemberId: Long Integer (mandatory)
- events: RelationsDetails_Fetched(RelationsTitle: Text (mandatory)) mandatory
- local variables: UserAge_Visibility: Boolean; isLoading: Boolean = True; ShowNotesSheet: Boolean
- lifecycle: OnInitialize → ScreenEvent_OnInitialize; OnReady → ScreenEvent_OnReady
- used by (UBTConnect): Household_Relations

#### Data sources
- data action **FetchNotes** fetch=OnDemand; outputs: Notes: Notes
  ```
  call-server GetNotesByItemId(ItemId=HouseholdId+"-"+MemberId, NoteCategoryId=Entities.NoteCategory2.Member)
  assign: Notes = GetNotesByItemId.Out_Notes
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- data action **Get_MemberDetails** fetch=OnDemand; outputs: MemberName: Text; FamilyName: Text; Father: UI_HouseholdMember; Mother: UI_HouseholdMember; FormerSpouses: UI_HouseholdMember List; ParentHouseholdId: Text; IsMemberDeceased: Boolean; OnAfterFetch → OnAfterFetch_Get_MemberDetails
  ```
  call-server Member_GetContext_Service(HouseholdId=HouseholdId, MemberId=MemberId, User_AgeVisibility=UserAge_Visibility)
  assign: MemberName = Member_GetContext_Service.MemberFullName; Father = Member_GetContext_Service.Father; Mother = Member_GetContext_Service.Mother; FormerSpouses = Member_GetContext_Service.PreviousSpouses; FamilyName = Member_GetContext_Service.FamilyName; ParentHouseholdId = Member_GetContext_Service.ParentHouseholdId; IsMemberDeceased = Member_GetContext_Service.IsMemberDeceased
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- data action **Get_ParentHouseholdDetails** fetch=OnDemand; outputs: Out_siblingRelations: UI_HouseholdMember List
  ```
  call-server Household_GetMemberSiblings(HouseholdId=TextToLongInteger(Get_MemberDetails.ParentHouseholdId), MemberId=MemberId, User_AgeVisibility=UserAge_Visibility)
  assign: Out_siblingRelations = Household_GetMemberSiblings.Out_SiblingHousehold
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

#### Widget tree
```
block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
  args: In_IsLoading=(not Get_MemberDetails.IsDataFetched and not Get_MemberDetails.HasFetchError) 
  placeholder Placeholder_LoadingSection:
    block CustomContainer (UBTConnectLibrary.BasePatterns)
      args: Options={ MarginSize: { TopSizeId: Entities.UBT_Size.Small } }
      placeholder Content:
        block CustomContainer (UBTConnectLibrary.BasePatterns)
          args: Options={ DisplayOptions: { Display: Entities.UBT_Display.Flex, AlignItems: Entities.UBT_AlignItems.Center, JustifyContent: Entities.UBT_JustifyContent.Center } }
          placeholder Content:
            block UBT_LazyImage (UBTConnect_Utils.CW_Image)
              args: EntityId=MemberId, EntityType=Entities.Connect_Entity.Member, ImageSize={ Height: Entities.UBT_ImageSize.ExtraLarge_100, Width: Entities.UBT_ImageSize.Square }
        block CustomContainer (UBTConnectLibrary.BasePatterns)
          args: Options={ MarginSize: { TopSizeId: Entities.UBT_Size.Small }, DisplayOptions: { Display: Entities.UBT_Display.Flex, AlignItems: Entities.UBT_AlignItems.Baseline, JustifyContent: Entities.UBT_JustifyContent.C…
          placeholder Content:
            block CustomText (UBTConnectLibrary.BasePatterns)
              args: In_Text=Get_MemberDetails.MemberName, In_TextOptions={ FontSize: Entities.UBT_FontSize.Base, FontWeight: Entities.UBT_FontWeight.SemiBold }
    block CustomContainer (UBTConnectLibrary.BasePatterns) #Buttons
      args: Options={ PaddingSize: {  }, MarginSize: { VerticalSizeId: Entities.UBT_Size.Base, HorizontalSizeId: Entities.UBT_Size.Base } }
      placeholder Content:
        block Columns_Two (UBTConnectLibrary.BasePatterns)
          args: ColumnOptions={ SpacingSize: Entities.UBT_Size.Base, VerticalAlign: Entities.UBT_VerticalAlign.Center }
          placeholder Left:
            block Button (UBTConnect_Utils+UBTConnectLibrary.CW_Common)
              args: ButtonOptions={ UBT_ButtonSizeId: Entities.UBT_ButtonSize.Small, UBT_ButtonTypeId: Entities.UBT_ButtonType.Scondary }, ButtonText="Notes", IconId=Entities.UBT_Icons2.Tooltip, IconText_SpacingSize=Entities.UBT_Size.Small, IsDisabled=Get_MemberDetails.IsMemberDeceased
              on buttonOnClick → Handler_AddNotes
          placeholder Right:
            block Button (UBTConnect_Utils+UBTConnectLibrary.CW_Common)
              args: ButtonOptions={ UBT_ButtonSizeId: Entities.UBT_ButtonSize.Small, UBT_ButtonTypeId: Entities.UBT_ButtonType.Primary }, ButtonText="Bookmark", IconId=Entities.UBT_Icons2.Bookmark, IconText_SpacingSize=Entities.UBT_Size.Small, IsDisabled=True
              on buttonOnClick → OnClick_Bookmark
block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
  args: In_IsLoading=isLoading
  placeholder Placeholder_LoadingSection:
    if Get_MemberDetails.Father.HouseholdId <> NullIdentifier() or \nGet_MemberDetails.Mother.HouseholdId <> NullIdentifier() or \nnot Get_MemberDetails.FormerSpouses.Empty or \nnot Get_ParentHouseholdDetails.Out_siblingRelations.Empty or \nisLoading #Relations2
      block SubLayout_DirectoryDetailScreen_Section (UBTConnect.SubLayout) #Relations
        args: In_PaddingBottom=Entities.UBT_Size.Base, In_PaddingTop=Entities.UBT_Size.Small, In_Title="Relations"
        placeholder Placeholder_SectionContent:
          block CustomContainer (UBTConnectLibrary.BasePatterns)
            args: Options={ PaddingSize: { TopSizeId: Entities.UBT_Size.Small } }
            placeholder Content:
              if Get_MemberDetails.Father.HouseholdId <> 0 //and Get_MemberDetails.Father.Id <> 0 #HasFather
                block MemberRelation_ListItem (UBTConnectLibrary.ConnectCorePatterns)
                  args: In_DeceasedCaption=Get_MemberDetails.Father.LifeCycleText, In_FormattedLocality=Get_MemberDetails.Father.FormattedLocality, In_IsDeceased=Get_MemberDetails.Father.IsDeceased, In_Relation="Father", In_Title=Get_MemberDetails.Father.Title, isEnabled=True
                  on OnClickPerson → OnClick_Member(Target_CountryName=Get_MemberDetails.Father.CountryName, Target_HouseholdId=Get_MemberDetails.Father.HouseholdId, Target_LocalityName=Get_MemberDetails.Father.LocalityName)
                  placeholder Placeholder_Left:
                    block UBT_LazyImage (UBTConnect_Utils.CW_Image)
                      args: EntityId=Get_MemberDetails.Father.Id\n\n\n\n, EntityType=Entities.Connect_Entity.Member, ImageSize={ Height: Entities.UBT_ImageSize.Base_52, Width: Entities.UBT_ImageSize.Square }
                  placeholder Actions:
                    if Get_MemberDetails.Father.HasNavigation
                      container  [style="display-flex flex-direction-column justify-content-center"]
                        block CustomContainer (UBTConnectLibrary.BasePatterns)
                          args: Options={ DisplayOptions: {  }, HeightOptions: {  }, WidthOptions: { Min: 100 } }
                          placeholder Content:
                            block Icon (UBTConnectLibrary.ConnectPatterns)
                              args: In_ColorId=Entities.UBT_Color.Neutral4, In_IconId=Entities.UBT_Icons2.ChevronRight
                              on Click → OnClick_Member(Target_CountryName=Get_MemberDetails.Father.CountryName, Target_HouseholdId=Get_MemberDetails.Father.HouseholdId, Target_LocalityName=Get_MemberDetails.Father.LocalityName)
              if Get_MemberDetails.Mother.HouseholdId <> 0 //and Get_MemberDetails.Mother.Id <> 0 #HasMother
                container  [style="margin-top-s"]
                  block MemberRelation_ListItem (UBTConnectLibrary.ConnectCorePatterns)
                    args: In_DeceasedCaption=Get_MemberDetails.Mother.LifeCycleText, In_FormattedLocality=Get_MemberDetails.Mother.FormattedLocality, In_IsDeceased=Get_MemberDetails.Mother.IsDeceased, In_Relation="Mother", In_Title=Get_MemberDetails.Mother.Title, isEnabled=True
                    on OnClickPerson → OnClick_Member(Target_CountryName=Get_MemberDetails.Mother.CountryName, Target_HouseholdId=Get_MemberDetails.Mother.HouseholdId, Target_LocalityName=Get_MemberDetails.Mother.LocalityName)
                    placeholder Placeholder_Left:
                      block UBT_LazyImage (UBTConnect_Utils.CW_Image)
                        args: EntityId=Get_MemberDetails.Mother.Id, EntityType=Entities.Connect_Entity.Member, ImageSize={ Height: Entities.UBT_ImageSize.Base_52, Width: Entities.UBT_ImageSize.Square }
                    placeholder Actions:
                      if Get_MemberDetails.Mother.HasNavigation
                        container  [style="display-flex flex-direction-column justify-content-center"]
                          block CustomContainer (UBTConnectLibrary.BasePatterns)
                            args: Options={ DisplayOptions: {  }, HeightOptions: {  }, WidthOptions: { Min: 100 } }
                            placeholder Content:
                              block Icon (UBTConnectLibrary.ConnectPatterns)
                                args: In_ColorId=Entities.UBT_Color.Neutral4, In_IconId=Entities.UBT_Icons2.ChevronRight
                                on Click → OnClick_Member(Target_CountryName=Get_MemberDetails.Mother.CountryName, Target_HouseholdId=Get_MemberDetails.Mother.HouseholdId, Target_LocalityName=Get_MemberDetails.Mother.LocalityName)
              container #Previous_Spouses  [style="margin-top-s"]
                list source=Get_MemberDetails.FormerSpouses mode=Default #PreviousSpouses  [style="list list-group list--gap-s"]
                  block MemberRelation_ListItem (UBTConnectLibrary.ConnectCorePatterns)
                    args: In_DeceasedCaption=Get_MemberDetails.FormerSpouses.Current.LifeCycleText, In_FormattedLocality=Get_MemberDetails.FormerSpouses.Current.FormattedLocality, In_IsDeceased=Get_MemberDetails.FormerSpouses.Current.IsDeceased, In_Relation="Previous spouse", In_Title=Get_MemberDetails.FormerSpouses.Current.Title, isEnabled=True
                    on OnClickPerson → OnClick_Member(Target_CountryName=Get_MemberDetails.FormerSpouses.Current.CountryName, Target_HouseholdId=Get_MemberDetails.FormerSpouses.Current.HouseholdId, Target_LocalityName=Get_MemberDetails.FormerSpouses.Current.LocalityName)
                    placeholder Placeholder_Left:
                      block UBT_LazyImage (UBTConnect_Utils.CW_Image)
                        args: EntityId=Get_MemberDetails.FormerSpouses.Current.Id, EntityType=Entities.Connect_Entity.Member, ImageSize={ Height: Entities.UBT_ImageSize.Base_52, Width: Entities.UBT_ImageSize.Square }
                    placeholder Actions:
                      if Get_MemberDetails.FormerSpouses.Current.HasNavigation and Get_MemberDetails.FormerSpouses.Current.HouseholdId <> 0
                        container  [style="display-flex flex-direction-column justify-content-center"]
                          block CustomContainer (UBTConnectLibrary.BasePatterns)
                            args: Options={ DisplayOptions: {  }, HeightOptions: {  }, WidthOptions: { Min: 100 } }
                            placeholder Content:
                              block Icon (UBTConnectLibrary.ConnectPatterns)
                                args: In_ColorId=Entities.UBT_Color.Neutral4, In_IconId=Entities.UBT_Icons2.ChevronRight
                                on Click → OnClick_Member(Target_CountryName=Get_MemberDetails.FormerSpouses.Current.CountryName, Target_HouseholdId=Get_MemberDetails.FormerSpouses.Current.HouseholdId, Target_LocalityName=Get_MemberDetails.FormerSpouses.Current.LocalityName)
      if not Get_ParentHouseholdDetails.Out_siblingRelations.Empty #Household2
        block SubLayout_DirectoryDetailScreen_Section (UBTConnect.SubLayout) #Household
          args: In_Title="Household"
          placeholder Placeholder_SectionContent:
            block CustomContainer (UBTConnectLibrary.BasePatterns)
              args: Options={ PaddingSize: { TopSizeId: Entities.UBT_Size.Small }, MarginSize: {  } }
              placeholder Content:
                list source=Get_ParentHouseholdDetails.Out_siblingRelations mode=Default  [style="list list-group list--gap-s"]
                  block NonMember_ListItem (UBTConnectLibrary.ConnectCorePatterns)
                    args: DeceasedCaption=Get_ParentHouseholdDetails.Out_siblingRelations.Current.LifeCycleText, isEnabled=True, LifeCycleText_Italic=Get_ParentHouseholdDetails.Out_siblingRelations.Current.LifeCycleText_IsItallic, MarriageHighlightText=Get_ParentHouseholdDetails.Out_siblingRelations.Current.MarriageHighlightText, MarriedCaption=Get_ParentHouseholdDetails.Out_siblingRelations.Current.MarriageText, MarriedPartnerTakenText=Get_ParentHouseholdDetails.Out_siblingRelations.Current.MarriagePartnerTakenText, Title=Get_ParentHouseholdDetails.Out_siblingRelations.Current.Title
                    on OnClickPerson → OnClick_Member(Target_CountryName=Get_ParentHouseholdDetails.Out_siblingRelations.Current.CountryName, Target_HouseholdId=Get_ParentHouseholdDetails.Out_siblingRelations.Current.HouseholdId, Target_LocalityName=Get_ParentHouseholdDetails.Out_siblingRelations.Current.LocalityName)
                    placeholder Placeholder_Left:
                      block UBT_LazyImage (UBTConnect_Utils.CW_Image)
                        args: EntityId=Get_ParentHouseholdDetails.Out_siblingRelations.Current.Id, EntityType=Entities.Connect_Entity.Member, ImageSize={ Height: Entities.UBT_ImageSize.Base_52, Width: Entities.UBT_ImageSize.Square }
                    placeholder Actions:
                      if Get_ParentHouseholdDetails.Out_siblingRelations.Current.HasNavigation
                        block CustomContainer (UBTConnectLibrary.BasePatterns)
                          args: Options={ DisplayOptions: { Display: Entities.UBT_Display.Flex, AlignItems: Entities.UBT_AlignItems.Center, JustifyContent: Entities.UBT_JustifyContent.Center }, HeightOptions: {  }, WidthOptions: { Min: 100…
                          placeholder Content:
                            block Icon (UBTConnectLibrary.ConnectPatterns)
                              args: In_ColorId=Entities.UBT_Color.Neutral4, In_IconId=Entities.UBT_Icons2.ChevronRight
                              on Click → OnClick_Member(Target_CountryName=Get_ParentHouseholdDetails.Out_siblingRelations.Current.CountryName, Target_HouseholdId=Get_ParentHouseholdDetails.Out_siblingRelations.Current.HouseholdId, Target_LocalityName=Get_ParentHouseholdDetails.Out_siblingRelations.Current.LocalityName)
    else
      container  [style="padding-right-base padding-left-base text-align-center"]
        text: No relation or household information avaialble.
if False #HideInServiceStudio_BottomSheet  [DEAD BRANCH: condition is a constant]
else
  block NotesSheet (UBTConnect_Utils.CW_Notes)
    args: In_IsOpen=ShowNotesSheet, In_ItemId=MemberId, In_NoteCategoryId=Entities.NoteCategory2.Member, In_Notes=FetchNotes.Notes
    on On_NotesChanged → Handler_OnNotesChanged(New_Notes=New_Notes)
    on On_NoteDeleted → Handler_OnNoteDeleted(NoteId=NoteId)
    on On_NoteSheet_Closed → Handler_OnNotesSheetClosed
```

#### Block actions
- **Action_Refresh_Get_MemberDetails**
  ```
  call Actions_DefineLoading(isRefresh=True)
  refresh data Get_MemberDetails
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Actions_DefineLoading** inputs: isRefresh: Boolean
  ```
  if isRefresh
    assign: isLoading = True
    end
  else
    assign: isLoading = (not Get_ParentHouseholdDetails.IsDataFetched and not Get_ParentHouseholdDetails.HasFetchError) and \n(not Get_MemberDetails.IsDataFetched and not Get_MemberDetails.HasFetchError) 
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **Handler_AddNotes**
  ```
  refresh data FetchNotes
  assign: ShowNotesSheet = True
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_OnNoteDeleted** inputs: NoteId: Long Integer (mandatory)
  ```
  call ListIndexOf(Condition=Id = NoteId, List=FetchNotes.Notes.Note_Item_List)
  if ListIndexOf.Position <> -1
    call ListRemove(List=FetchNotes.Notes.Note_Item_List, Position=ListIndexOf.Position)
    assign: FetchNotes.Notes.Total = FetchNotes.Notes.Note_Item_List.Length
    end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **Handler_OnNotesChanged** inputs: New_Notes: Notes (mandatory)
  ```
  assign: FetchNotes.Notes = New_Notes
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_OnNotesSheetClosed**
  ```
  assign: ShowNotesSheet = False
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnAfterFetch_Get_MemberDetails**
  ```
  trigger event RelationsDetails_Fetched(RelationsTitle=Get_MemberDetails.FamilyName)
  refresh data Get_ParentHouseholdDetails
  call Actions_DefineLoading()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnClick_Bookmark**
  ```
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnClick_Member** inputs: Target_LocalityName: Text (mandatory); Target_CountryName: Text (mandatory); Target_HouseholdId: Long Integer (mandatory); Target_IsDeceased: Boolean
  ```
  if Target_IsDeceased
    end
  else
    if Target_HouseholdId = NullIdentifier()
      end
    else
      if Target_CountryName = ""
        end
      else
        call HasAccessToRegion(Target_CountryNameOrCode=Target_CountryName, Target_LocalityNameOrId=Target_LocalityName)
        if HasAccessToRegion.HasAccess
          navigate → HouseholdDetails(HouseholdId=Target_HouseholdId) transition=Inherited
        else
          call App_Subscription_ShowUpgradePopUp()
          end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
    end
    end
  ```
- **ScreenEvent_OnInitialize**
  ```
  javascript IsViewRestoredFromCache() → IsRestoredFromCache: Boolean
    | $parameters.IsRestoredFromCache = $public.View.wasCurrentViewRestoredFromCache()
  if (Check if IsViewRestoredFromCache IsRestoredFromCache) IsViewRestoredFromCache.IsRestoredFromCache
    end
  else
    if Get_MemberDetails.IsDataFetched or Get_ParentHouseholdDetails.IsDataFetched
      end
    else
      assign: Get_MemberDetails.Father.Title = "Loading"; Get_MemberDetails.Father.Id = -1; Get_MemberDetails.Father.HouseholdId = -1; Get_MemberDetails.Mother.Title = "Loading"; Get_MemberDetails.Mother.Id = -1; Get_MemberDetails.Mother.HouseholdId = -1
      call ListAppend(Element={ FirstName: "Loading", MemberRole: "" }, List=Get_ParentHouseholdDetails.Out_siblingRelations)
      call ListAppend(Element={ FirstName: "Loading", MemberRole: "" }, List=Get_ParentHouseholdDetails.Out_siblingRelations) as ListAppend2
      end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **ScreenEvent_OnReady**
  ```
  call GetUserInformation_Wrapper()
  javascript IsViewRestoredFromCache() → IsRestoredFromCache: Boolean
    | $parameters.IsRestoredFromCache = $public.View.wasCurrentViewRestoredFromCache()
  if (Check if IsViewRestoredFromCache IsRestoredFromCache) IsViewRestoredFromCache.IsRestoredFromCache
    if (Visibility Has Changed) GetUserInformation_Wrapper.UserInformation.Directory_UserCurrent_Visibility.DisplayAge <> UserAge_Visibility
      [M1] assign: UserAge_Visibility = GetUserInformation_Wrapper.UserInformation.Directory_UserCurrent_Visibility.DisplayAge
      call Action_Refresh_Get_MemberDetails() as GetRelations
      end
    else
      end
  else
    → continues at [M1]
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```

## Blocks of other flows (signature only; full text in the pack of their flow)

| Block | Flow | Pack | Inputs | Events |
|---|---|---|---|---|
| App_IconBadge | App_Common_Blocks | `../../_shared/pack/blocks.md` | BadgeNumber: Long Integer (mandatory); MaxNotifications: Integer = 9; IconId: UBT_Icons2 Identifier (mandatory); IconColor: UBT_Color Identifier (mandatory); isLoading: Boolean (mandatory) | OnClick |
| Block_PINUnlock | App_PIN | `../../App_PIN/pack/blocks.md` | In_ForceVisible: Boolean; In_IsCommonBlock: Boolean | Unlock |
| Block_PINUnlock_ContentWrapper | App_PIN | `../../App_PIN/pack/blocks.md` | UseOverlay: Boolean = True; In_ForceVisible: Boolean; UnlockText: Text = "Enter your PIN code"; ShowNeedHelp: Boolean; isFromMenu: Boolean; ShowForgotPIN: Boolean; ShowPolicy: Boolean (mandatory) | NavigateTo_PINRegister; Unlock |
| BottomBarContent | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| BottomBarMenu | App_Common | `../../App_Common/pack/blocks.md` | ActiveItem: Connect_BottomBar_Items Identifier; useMapsItems: Boolean; isHouseholder: Boolean; isRootPage: Boolean | BottomBar_Clicked |
| CarouselTag | Directory_Caroussel | `../../_shared/pack/blocks.md` | In_IndexCurrentItem: Integer (mandatory); In_TotalItems: Integer (mandatory) | - |
| CommonUI_InsideLayout | App_Common | `../../App_Common/pack/blocks.md` | In_ShowLockScreen: Boolean; In_IgnorePolicy: Boolean; In_IgnoreLockScreen: Boolean | Event_OnScreenLocked; Event_OnScreenUnlocked |
| DW_OneSchoolGlobal_EventList | Directory_OneSchoolGlobal_Blocks | `../../_shared/pack/blocks.md` | - | Event_OnClick |
| DW_OneSchoolGlobal_Numbers | Directory_OneSchoolGlobal_Blocks | `../../_shared/pack/blocks.md` | In_OneSchoolGlobal_LocalitiesList: LocalityId, LocalityName Record List (mandatory) | - |
| Directory_EmptyState | Directory_CommonBlocks | `../../_shared/pack/blocks.md` | EntityTypeId: Connect_Entity Identifier (mandatory); Location: Text = "found nearby" | - |
| Directory_EntityDetailsActions | Directory_CommonBlocks | `../../_shared/pack/blocks.md` | IsEnabled: Boolean = True; EntityType: Connect_Entity Identifier (mandatory); EntityId: Long Integer (mandatory); ContactPopUp_OverrideOptions: ContactPopUp_OverrideOptions; EnableOptions: ActionsMenuEnableOptions; useViewDetails: Boolean | Event_MenuEdit; OnChange_Bookmark; ViewDetails_OnClick |
| EntitiesCarouse_lSupperMeetingDetails | Directory_Caroussel | `../../_shared/pack/blocks.md` | In_SubdivisionId: Long Integer (mandatory) | - |
| EntitiesCarousel | Directory_Caroussel | `../../_shared/pack/blocks.md` | In_EntitiesCarousel_Items: EntitiesCarousel_Item List (mandatory); In_StartingPosition: Integer; In_ConnectEntityTypeId: Connect_Entity Identifier (mandatory) | Event_Moved; Event_SetHeader |
| EntitiesCarousel_Element | Directory_Caroussel | `../../_shared/pack/blocks.md` | In_ConnectEntityTypeId: Connect_Entity Identifier (mandatory); In_EntityId: Long Integer (mandatory); In_CarouselLength: Integer (mandatory); In_Index_ActiveElement: Integer (mandatory); In_Index_NextActiveElement: Integer (mandatory); In_Index_CurrentElement: Integer (mandatory); In_RenderBuffer: Integer (mandatory) | Event_SetHeader |
| EntitiesCarousel_HeaderGenerator | Directory_Caroussel | `../../_shared/pack/blocks.md` | In_HouseholdCarouselHeaderList: HeaderList List; In_CurrentIndex: Integer (mandatory) | Event_SetHeader |
| EntitiesCarousel_HouseholdDetails | Directory_Caroussel | `../../_shared/pack/blocks.md` | In_HouseholdId: Long Integer (mandatory); In_IsSkeletonOnly: Boolean | Event_SetHeader |
| EntitiesCarousel_OneSchoolGlobal | Directory_Caroussel | `../../_shared/pack/blocks.md` | In_EntityId: Long Integer (mandatory); In_IsSkeletonOnly: Boolean | Event_SetHeader |
| External_Link | App_Common_Blocks | `../../_shared/pack/blocks.md` | In_Link: BusinessLinkItem (mandatory); IsEnabled: Boolean = True; IconVisible: Boolean = True | - |
| HandleOnResumeOpenLink | Legacy_Share | `../../Legacy_Share/pack/blocks.md` | - | - |
| HouseholdDetails_Members_Block | Directory_Household_Blocks | `../../_shared/pack/blocks.md` | isEnabled: Boolean = True; In_HouseholdMembers: UI_HouseholdMember List (mandatory); In_NonHouseholdMembers: UI_HouseholdMember List (mandatory); In_IsLoading: Boolean (mandatory) | Event_MemberOnClick; Event_NonMemberOnClick |
| HouseholdDetails_TimelinePhoto | Directory_Household_Blocks | `../../_shared/pack/blocks.md` | In_BackgroundURL: Text (mandatory); Label: Text (mandatory); Date: Date Time (mandatory); In_CardTypeId: UBT_ImageCardType Identifier (mandatory); IsSelected: Boolean (mandatory) | Selected |
| HouseholdDetails_TimelinePhoto_List | Directory_Household_Blocks | `../../_shared/pack/blocks.md` | In_HouseholdTimelineImages: UI_HouseholdTimelineImages List (mandatory) | Event_DateSelected |
| Household_GalleryCard | Directory_Household_Blocks | `../../_shared/pack/blocks.md` | SubdivisionHousehold_GalleryCard: UI_SubdivisionHousehold (mandatory); ItemsPerRow: Integer = 2 | Event_OnClick |
| Household_GalleryCard_List | Directory_Household_Blocks | `../../_shared/pack/blocks.md` | In_Household_GalleryCard_List: UI_SubdivisionHousehold List (mandatory); In_IsLoading: Boolean (mandatory) | Event_OnClick_Household_GalleryCard |
| OfflineDataSyncEvents | App_Common | `../../App_Common/pack/blocks.md` | - | OnSyncComplete; OnSyncError; OnSyncStart |
| OneSchoolGlobalDetails_Block | Directory_OneSchoolGlobal | `../../Directory_OneSchoolGlobal/pack/blocks.md` | In_OneSchoolGlobalId: Long Integer (mandatory); IsRestoredFromCache: Boolean (mandatory) | - |
| OneSchoolGlobal_Event_ListCard | Directory_OneSchoolGlobal_Blocks | `../../_shared/pack/blocks.md` | OneSchoolGlobal_EventCard: UI_OneSchoolGlobal_Event_Card (mandatory) | Event_OnClick |
| OneSchoolGlobal_Event_ListCard_List | Directory_OneSchoolGlobal_Blocks | `../../_shared/pack/blocks.md` | In_OneSchoolGlobal_EventCard_List: UI_OneSchoolGlobal_Event_Card List (mandatory); In_IsLoading: Boolean (mandatory); In_IsUpdating: Boolean (mandatory) | Event_OnClick; Event_ScrollEnding |
| OneSchoolGlobal_Numbers | Directory_OneSchoolGlobal_Blocks | `../../_shared/pack/blocks.md` | In_StudentNumbers: UI_OneSchoolGlobal_StudentNumbers (mandatory); In_Selected_CalendarYear: Text (mandatory); In_IsLoading: Boolean (mandatory); In_IsLoadingStudentNumbers: Boolean (mandatory); In_LocalitiesList: Tag List (mandatory) | Event_ClickCalendarYear; Event_ClickLocality |
| Policy_Checker | App_Policies | `../../App_Policies/pack/blocks.md` | - | - |
| SubLayout_DirectoryDetailScreen | SubLayout | `../../_shared/pack/blocks.md` | HideActions: Boolean | - |
| SubLayout_DirectoryDetailScreen_Section | SubLayout | `../../_shared/pack/blocks.md` | In_Title: Text (mandatory); In_PaddingTop: UBT_Size Identifier = Entities.UBT_Size.Small; In_PaddingBottom: UBT_Size Identifier = Entities.UBT_Size.Small | - |
| SupperMeeting_DetailsBlock | Directory_SupperMeetings | `../../Directory_SupperMeetings/pack/blocks.md` | In_SubdivsionId: Long Integer (mandatory) | - |
| SupperMeeting_HouseholdList | Directory_SupperMeetings | `../../Directory_SupperMeetings/pack/blocks.md` | In_SubdivisionId: Long Integer (mandatory) | Event_OnClick_Household |
| SupperMeeting_ImageCard_Content | Directory_SupperMeetings | `../../Directory_SupperMeetings/pack/blocks.md` | In_Subdivision_CardContent: UI_Subdivision_Card_Content (mandatory); In_ShowAddress: Boolean | - |
| SupperMeeting_ImageCard_Content_IconText | Directory_SupperMeetings | `../../Directory_SupperMeetings/pack/blocks.md` | In_Text: Text (mandatory); In_FontSize: UBT_FontSize Identifier (mandatory); In_UBT_IconId: UBT_Icons2 Identifier (mandatory); In_UBT_ColorId: UBT_Color Identifier (mandatory) | - |
| SupperMeeting_ImageCard_Content_Statistics | Directory_SupperMeetings | `../../Directory_SupperMeetings/pack/blocks.md` | In_BretherenCount: Integer (mandatory); In_HouseholdCount: Integer (mandatory); In_GenderSplit: Text (mandatory) | - |
| UnsupportedVersion | App_Common | `../../App_Common/pack/blocks.md` | In_ExtendedClass: Text; In_HideButton: Boolean | Event_NavigateToPlaystore |
| UnsupportedVersion_Browser | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| UnsupportedVersion_Native | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| UnsupportedVersion_WebView | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| UnsupportedVersion_Wrapper | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| WelcomeToConnect | App_Common | `../../App_Common/pack/blocks.md` | - | - |

# Pack of UI flow Directory_OneSchoolGlobal (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

Own blocks of the flow: OneSchoolGlobalDetails_Block
Blocks of other UBTConnect flows that the flow uses (transitive): 45

## Block OneSchoolGlobalDetails_Block (flow Directory_OneSchoolGlobal)
- public: False
- input parameters: In_OneSchoolGlobalId: Long Integer (mandatory); IsRestoredFromCache: Boolean (mandatory)
- events: -
- local variables: LookupSections: LookupSections; Selected_OneschoolGlobal_SubsectionId: Text; Type_OneschoolGlobal_SubsectionId: Type_OneschoolGlobal_Subsection; LocalIsBookmarked: Boolean
- lifecycle: OnInitialize → OnInitialize; OnReady → OnReady; OnParametersChanged → OnParametersChanged
- used by (UBTConnect): EntitiesCarousel_OneSchoolGlobal, OneSchoolGlobalDetails

#### Data sources
- data action **GetOneSchoolGlobalDetails** fetch=OnDemand; outputs: Out_OneSchoolGlobal: OneSchoolGlobal_About, OneSchoolGlobal_DetailCard, OneSchoolGlobal_LocalitiesList Record; HouseholdCoordinates: Directory_Coordinates; UI_Timezone: UI_LocalityTimezone
  ```
  call-server Get_OneSchoolGlobalDetails(CommunityBusinessId=In_OneSchoolGlobalId)
  assign: Out_OneSchoolGlobal.OneSchoolGlobal_DetailCard = Get_OneSchoolGlobalDetails.Out_OneSchoolGlobalDetails
  call-server Get_Core_LocalityTimezone(In_LocalityId=Get_OneSchoolGlobalDetails.Out_OneSchoolGlobalDetails.UI_OneSchool_Card_Content.LocalityId)
  assign: UI_Timezone.TimezoneName = Get_Core_LocalityTimezone.Out_Timezone.Name; UI_Timezone.TimezoneOffset = Get_Core_LocalityTimezone.Out_Timezone.OffsetSeconds
  assign (OneSchoolCoordinates-Missing): HouseholdCoordinates = HouseholdCoordinates
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

#### Widget tree
```
block SubLayout_DirectoryDetailScreen (UBTConnect.SubLayout)
  placeholder Placeholder_DetailCard:
    block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
      args: In_IsLoading=not GetOneSchoolGlobalDetails.IsDataFetched
      placeholder Placeholder_LoadingSection:
        block ImageCard_LazyLoading (UBTConnectLibrary.ConnectCorePatterns)
          args: In_CardTypeId=Entities.UBT_ImageCardType.Detail, In_IsBookmarked=LocalIsBookmarked
          placeholder LazyImage_Placeholder:
            block UBT_LazyImage (UBTConnect_Utils.CW_Image)
              args: EntityId=GetOneSchoolGlobalDetails.Out_OneSchoolGlobal.OneSchoolGlobal_DetailCard.CommunityBusinessId, EntityType=Entities.Connect_Entity.OneSchoolGlobal, HasErrorMessage=True, ImageSize={ Width: Entities.UBT_ImageSize.MaxWidth_100vw }, ImageURL=GetOneSchoolGlobalDetails.Out_OneSchoolGlobal.OneSchoolGlobal_DetailCard.SignedURL
          placeholder Placeholder_Content:
            block ImageCard__Content (UBTConnectLibrary.ConnectPatterns)
              args: In_Title=GetOneSchoolGlobalDetails.Out_OneSchoolGlobal.OneSchoolGlobal_DetailCard.UI_OneSchool_Card_Content.Name
              placeholder Placeholder_BottomSectionContent:
                block CustomText (UBTConnectLibrary.BasePatterns)
                  args: In_Text="Educating Students From:", In_TextOptions={ Color: Entities.UBT_Color.Neutral8, FontSize: Entities.UBT_FontSize.Small, FontWeight: Entities.UBT_FontWeight.SemiBold }
                block CustomText (UBTConnectLibrary.BasePatterns)
                  args: In_Text=GetOneSchoolGlobalDetails.Out_OneSchoolGlobal.OneSchoolGlobal_DetailCard.OneSchoolGlobal__DetailCard_Content.AreasServed, In_TextOptions={ Color: Entities.UBT_Color.Neutral7, FontSize: Entities.UBT_FontSize.ExtraSmall, FontWeight: Entities.UBT_FontWeight.Regular }
                block CustomContainer (UBTConnectLibrary.BasePatterns)
                  args: Options={ MarginSize: { TopSizeId: Entities.UBT_Size.ExtraSmall }, TextOptions: { Color: Entities.UBT_Color.CyanDarker } }
                  placeholder Content:
                    container  [style=If(GetOneSchoolGlobalDetails.IsDataFetched,"school-address","margin-top-s margin-bottom-xs")]
                      block AddressPopup_Wrapper (UBTConnect_Utils.CW_CTA_PopUps)
                        args: IconVisible=True, In_Address=GetOneSchoolGlobalDetails.Out_OneSchoolGlobal.OneSchoolGlobal_DetailCard.OneSchoolGlobal__DetailCard_Content.Address, In_Coordinates=GetOneSchoolGlobalDetails.HouseholdCoordinates, IsEnabled=True
                    list source=GetOneSchoolGlobalDetails.Out_OneSchoolGlobal.OneSchoolGlobal_DetailCard.OneSchoolGlobal__DetailCard_Content.BusinesLinks mode=Default  [style="list list-group"]
                      container  [style="school-link-item"]
                        block External_Link (UBTConnect.App_Common_Blocks)
                          args: IconVisible=True, In_Link=ConvertRecord(GetOneSchoolGlobalDetails.Out_OneSchoolGlobal.OneSchoolGlobal_DetailCard.OneSchoolGlobal__DetailCard_Content.BusinesLinks.Current,  {Text:"Text",Link:"Link",ID:"ID"}), IsEnabled=True
  placeholder Placeholder_CallToAction:
    block CustomContainer (UBTConnectLibrary.BasePatterns)
      args: Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral0 }, PaddingSize: { GeneralSizeId: Entities.UBT_Size.Base } }
      placeholder Content:
        block Directory_EntityDetailsActions (UBTConnect.Directory_CommonBlocks)
          args: ContactPopUp_OverrideOptions={ ImageURL: GetOneSchoolGlobalDetails.Out_OneSchoolGlobal.OneSchoolGlobal_DetailCard.SignedURL, Name: Trim(GetOneSchoolGlobalDetails.Out_OneSchoolGlobal.OneSchoolGlobal_DetailCard.UI_OneSchool_Card_C…, EnableOptions={ EnableNotes: True }, EntityId=In_OneSchoolGlobalId, EntityType=Entities.Connect_Entity.OneSchoolGlobal
          on OnChange_Bookmark → Directory_EntityDetailsActionsOnChange_Bookmark(isBookmarked=isBookmarked)
  placeholder Placeholder_Content:
    block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
      args: In_IsLoading=not GetOneSchoolGlobalDetails.IsDataFetched
      placeholder Placeholder_LoadingSection:
        if Connect_LaunchDarkly_PermissionCheck(Entities.LaunchDarkly_FF.MobileStudentInformation) #If_HasStudentInformationPermission
          block CustomContainer (UBTConnectLibrary.BasePatterns) #Block_StudentNumbers
            args: Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral0 } }
            placeholder Content:
              block ExpandableSection (UBTConnectLibrary.ConnectPatterns)
                args: StartExpanded=False
                placeholder Title:
                  block IconText (UBTConnectLibrary.ConnectPatterns)
                    args: SpacingSize=Entities.UBT_Size.Small, Text=LookupSections.OneSchoolStatistitics.Singular, TextOptions={ FontWeight: Entities.UBT_FontWeight.SemiBold }
                    placeholder Icon:
                      block Icon (UBTConnectLibrary.ConnectPatterns)
                        args: In_ColorId=Entities.UBT_Color.CyanDarker, In_IconId=LookupSections.OneSchoolStatistitics.Icon, In_SizeId=Entities.UBT_IconsSize.Base_24
                placeholder Content:
                  if False  [DEAD BRANCH: condition is a constant]
                    block DW_OneSchoolGlobal_Numbers (UBTConnect.Directory_OneSchoolGlobal_Blocks)
                      args: In_OneSchoolGlobal_LocalitiesList=GetOneSchoolGlobalDetails.Out_OneSchoolGlobal.OneSchoolGlobal_LocalitiesList
                  else
                    block CustomContainer (UBTConnectLibrary.BasePatterns)
                      args: Options={ BorderOptions: { Color: Entities.UBT_Color.Neutral3, Size: { GeneralSizeId: Entities.UBT_Size.Small }, Radius: { GeneralSizeId: Entities.UBT_Shape.Large } } }
                      placeholder Content:
                        block ComingSoon (UBTConnectLibrary.ConnectPatterns) #ComingSoon
                          args: In_TextOptions={ Color: Entities.UBT_Color.Neutral7, FontSize: Entities.UBT_FontSize.Base, FontWeight: Entities.UBT_FontWeight.SemiBold }
        block CustomContainer (UBTConnectLibrary.BasePatterns) #Block_ButtonGroup
          args: Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral0 }, PaddingSize: { BottomSizeId: Entities.UBT_Size.Small } }
          placeholder Content:
            block CustomContainer (UBTConnectLibrary.BasePatterns)
              args: Options={ PaddingSize: { HorizontalSizeId: Entities.UBT_Size.Base, TopSizeId: Entities.UBT_Size.Small }, MarginSize: { TopSizeId: If(Connect_LaunchDarkly_PermissionCheck(Entities.LaunchDarkly_FF.MobileStuden…
              placeholder Content:
                buttongroup #ButtonGroup1 var=Selected_OneschoolGlobal_SubsectionId style="button-group ubt-skeleton-section__element"  [style="button-group ubt-skeleton-section__element"]
                  buttongroupitem #ButtonGroupItem1 value=Type_OneschoolGlobal_SubsectionId.UpcomingEvents  [style="button-group-item"]
                    expr: Type_OneschoolGlobal_SubsectionId.UpcomingEvents
                  buttongroupitem #ButtonGroupItem2 value=Type_OneschoolGlobal_SubsectionId.AboutOurCampus  [style="button-group-item"]
                    expr: Type_OneschoolGlobal_SubsectionId.AboutOurCampus
        block CustomContainer (UBTConnectLibrary.BasePatterns)
          args: Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral0 } }
          placeholder Content:
            if False  [DEAD BRANCH: condition is a constant]
              if Selected_OneschoolGlobal_SubsectionId = Type_OneschoolGlobal_SubsectionId.UpcomingEvents #ShowUpcomingEvents
                block CustomContainer (UBTConnectLibrary.BasePatterns)
                  args: Options={ MarginSize: { HorizontalSizeId: Entities.UBT_Size.Base, BottomSizeId: Entities.UBT_Size.Base } }
                  placeholder Content:
                    block DW_OneSchoolGlobal_EventList (UBTConnect.Directory_OneSchoolGlobal_Blocks)
              else
                block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
                  args: In_IsLoading=not GetOneSchoolGlobalDetails.IsDataFetched
                  placeholder Placeholder_LoadingSection:
                    block SubLayout_DirectoryDetailScreen_Section (UBTConnect.SubLayout)
                      args: In_Title=GetOneSchoolGlobalDetails.Out_OneSchoolGlobal.OneSchoolGlobal_DetailCard.OneSchoolGlobal__DetailCard_Content.AreasServed
                      placeholder Placeholder_SectionContent:
                        if GetOneSchoolGlobalDetails.IsDataFetched
                          block CustomText (UBTConnectLibrary.BasePatterns)
                            args: In_Text=GetOneSchoolGlobalDetails.Out_OneSchoolGlobal.OneSchoolGlobal_About, In_TextOptions={ FontSize: Entities.UBT_FontSize.ExtraSmall }
                        else
                          block Skeleton_TextBlock (UBTConnectLibrary.ConnectPatterns)
                            args: In_FontSize=Entities.UBT_FontSize.ExtraSmall, In_NumberOfLines=10
            else
              block CustomContainer (UBTConnectLibrary.BasePatterns)
                args: Options={ Background: {  }, PaddingSize: {  }, MarginSize: { LeftSizeId: Entities.UBT_Size.Base, RightSizeId: Entities.UBT_Size.Base }, BorderOptions: { Color: Entities.UBT_Color.Neutral3, Size: { GeneralSiz…
                placeholder Content:
                  block ComingSoon (UBTConnectLibrary.ConnectPatterns) #ComingSoon4
                    args: In_TextOptions={ Color: Entities.UBT_Color.Neutral7, FontSize: Entities.UBT_FontSize.Base, FontWeight: Entities.UBT_FontWeight.SemiBold }
```

#### Block actions
- **Directory_EntityDetailsActionsOnChange_Bookmark** inputs: isBookmarked: Boolean (mandatory)
  ```
  assign: LocalIsBookmarked = isBookmarked
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnInitialize**
  ```
  if IsRestoredFromCache
    end
  else
    assign: Selected_OneschoolGlobal_SubsectionId = Type_OneschoolGlobal_SubsectionId.UpcomingEvents
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **OnParametersChanged**
  ```
  call OnReady()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnReady**
  ```
  if IsRestoredFromCache
    end
  else
    call Get_LookupSection()
    assign: LookupSections = Get_LookupSection.Out_Lookup
    call GetSkeleton_UI_OneSchoolGlobal_DetailCard()
    assign: GetOneSchoolGlobalDetails.Out_OneSchoolGlobal.OneSchoolGlobal_DetailCard = GetSkeleton_UI_OneSchoolGlobal_DetailCard.UI_OneSchoolGlobal_DetailCard
    refresh data GetOneSchoolGlobalDetails
    end
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
| HouseholdDetails_Block | Directory_Household | `../../Directory_Household/pack/blocks.md` | HouseholdId: Long Integer (mandatory); isEnabled: Boolean = True; Preview: HouseholdPreviewStructure; In_ShowKebabMenu: Boolean; In_CheckVisibility: Boolean; In_IsSkeletonOnly: Boolean; In_HideActions: Boolean | HouseholdDataFetched |
| HouseholdDetails_Members_Block | Directory_Household_Blocks | `../../_shared/pack/blocks.md` | isEnabled: Boolean = True; In_HouseholdMembers: UI_HouseholdMember List (mandatory); In_NonHouseholdMembers: UI_HouseholdMember List (mandatory); In_IsLoading: Boolean (mandatory) | Event_MemberOnClick; Event_NonMemberOnClick |
| HouseholdDetails_TimelinePhoto | Directory_Household_Blocks | `../../_shared/pack/blocks.md` | In_BackgroundURL: Text (mandatory); Label: Text (mandatory); Date: Date Time (mandatory); In_CardTypeId: UBT_ImageCardType Identifier (mandatory); IsSelected: Boolean (mandatory) | Selected |
| HouseholdDetails_TimelinePhoto_List | Directory_Household_Blocks | `../../_shared/pack/blocks.md` | In_HouseholdTimelineImages: UI_HouseholdTimelineImages List (mandatory) | Event_DateSelected |
| Household_GalleryCard | Directory_Household_Blocks | `../../_shared/pack/blocks.md` | SubdivisionHousehold_GalleryCard: UI_SubdivisionHousehold (mandatory); ItemsPerRow: Integer = 2 | Event_OnClick |
| Household_GalleryCard_List | Directory_Household_Blocks | `../../_shared/pack/blocks.md` | In_Household_GalleryCard_List: UI_SubdivisionHousehold List (mandatory); In_IsLoading: Boolean (mandatory) | Event_OnClick_Household_GalleryCard |
| OfflineDataSyncEvents | App_Common | `../../App_Common/pack/blocks.md` | - | OnSyncComplete; OnSyncError; OnSyncStart |
| OneSchoolGlobal_Event_Card | Directory_OneSchoolGlobal_Blocks | `../../_shared/pack/blocks.md` | OneSchoolGlobal_EventCard: UI_OneSchoolGlobal_Event_Card (mandatory) | - |
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
| UI_OneSchoolGlobalEventDetail_IconTextWrapper | Directory_OneSchoolGlobal_Blocks | `../../_shared/pack/blocks.md` | IconId: UBT_Icons2 Identifier (mandatory); Text: Text (mandatory) | - |
| UnsupportedVersion | App_Common | `../../App_Common/pack/blocks.md` | In_ExtendedClass: Text; In_HideButton: Boolean | Event_NavigateToPlaystore |
| UnsupportedVersion_Browser | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| UnsupportedVersion_Native | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| UnsupportedVersion_WebView | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| UnsupportedVersion_Wrapper | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| WelcomeToConnect | App_Common | `../../App_Common/pack/blocks.md` | - | - |

# Pack of UI flow App_Profile (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

Screens: Profile

## Screen Profile (flow App_Profile)
- roles: Registered, UBTOne_User; URL structure: QueryString
- input parameters: -
- local variables: AccountForm: UI_AccountForm; AccountFormOriginal: UI_AccountForm; AccountForm_ViewPreview: UI_AccountForm; isHouseholder: Boolean; HasChanges: Boolean; isSpouse: Boolean; isLoading_Submit: Boolean; LocalCacheControl_UserInformation: Directory_UserCurrent, isFetched Record; LocalCacheControl_AllLocalities: CacheControl_AllLocalities, isFetched Record; LocalCacheControl_AllSubdivions: CacheControl_AllSubdivions, isFetched Record; SubdivisionFilteredList: Directory_LocalitySubdivision List; MainContainerId: Text; ScreenController: Object; PreviewHousehold_BottomSheetId: Text; CurrentCountryCode: Text; FormattedAddress: Text; isRequireRequestCreation: Boolean
- lifecycle: OnReady → ScreenEvent_OnReady

#### Data sources
- data action **GetCountryInfo** fetch=OnDemand; outputs: AddressInfo2: Custom_AddressInfo; OnAfterFetch → OnAfterFetch_GetCountryInfo
  ```
  call-server Get_UI_CountryAddressInfo(CountryCode=CurrentCountryCode)
  assign: AddressInfo2 = Get_UI_CountryAddressInfo.AddressInfo
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

#### Widget tree
```
block Layout_HomePage (UBTConnectLibrary.Layouts)
  args: AddSearchBar=False, ContentBackgroundColor=Entities.UBT_Color.Neutral0, ExtendedClass="ubt-profile-screen", SVGHeight="calc(200px - var(--header-size))"\n//"150px" //200 - header size
  on OnReadyEvent → Event_Layout_OnReadyEvent(ContentContainerId=ContentContainerId)
  placeholder Placeholder_Header_Title:
    block IconText (UBTConnectLibrary.ConnectPatterns)
      args: Text="Edit Account", TextOptions={ Color: Entities.UBT_Color.Neutral0, FontSize: Entities.UBT_FontSize.Small, FontWeight: Entities.UBT_FontWeight.Regular }
      on Clicked → OnClick_Back
      placeholder Icon:
        block Icon (UBTConnectLibrary.ConnectPatterns)
          args: In_ColorId=Entities.UBT_Color.Neutral0, In_IconId=Entities.UBT_Icons2.ArrowLeftAlt
  placeholder Content:
    block SkeletonSection (UBTConnectLibrary.ConnectPatterns) #Content
      args: In_IsLoading=not LocalCacheControl_UserInformation.isFetched
      placeholder Placeholder_LoadingSection:
        block CustomContainer (UBTConnectLibrary.BasePatterns) #Header
          args: Options={ PaddingSize: { HorizontalSizeId: Entities.UBT_Size.Base, TopSizeId: Entities.UBT_Size.Medium, BottomSizeId: Entities.UBT_Size.Base }, DisplayOptions: { Display: Entities.UBT_Display.Flex, AlignItem…
          placeholder Content:
            block UBT_LazyImage (UBTConnect_Utils.CW_Image)
              args: EntityId=LocalCacheControl_UserInformation.Directory_UserCurrent.MemberID, EntityType=Entities.Connect_Entity.Member, ImageSize={ Height: Entities.UBT_ImageSize.DoubleExtraLarge_176, Width: Entities.UBT_ImageSize.Square }, ImageURL=LocalCacheControl_UserInformation.Directory_UserCurrent.Directory_UserCurrent_Member.Photo.SignedURL
            block CustomText (UBTConnectLibrary.BasePatterns) #NameText
              args: ExtendedClasses="padding-y-s", In_Text=LocalCacheControl_UserInformation.Directory_UserCurrent.FullName, In_TextOptions={ Color: Entities.UBT_Color.Neutral8, FontSize: Entities.UBT_FontSize.Heading2, FontWeight: Entities.UBT_FontWeight.SemiBold }
            block CustomContainer (UBTConnectLibrary.BasePatterns) #ViewPreview
              args: Options={ PaddingSize: { GeneralSizeId: Entities.UBT_Size.Small }, IsInlineBlock: True }
              on Clicked → OnClick_ViewPreview
              placeholder Content:
                block IconText (UBTConnectLibrary.ConnectPatterns)
                  args: Text="Preview Household Profile", TextOptions={ Color: Entities.UBT_Color.Primary, FontSize: Entities.UBT_FontSize.Base, FontWeight: Entities.UBT_FontWeight.SemiBold }
                  placeholder Icon:
                    block Icon (UBTConnectLibrary.ConnectPatterns)
                      args: In_ColorId=Entities.UBT_Color.Primary, In_IconId=Entities.UBT_Icons2.IdCard, In_SizeId=Entities.UBT_IconsSize.Medium_20
        block SectionSeparator (UBTConnect.App_Common_Blocks)
        form #DetailsForm
          block CustomContainer (UBTConnectLibrary.BasePatterns) #IdentificationInfo
            args: Options={ PaddingSize: { HorizontalSizeId: Entities.UBT_Size.Base, TopSizeId: Entities.UBT_Size.Small, BottomSizeId: Entities.UBT_Size.Base } }
            placeholder Content:
              block CustomText (UBTConnectLibrary.BasePatterns) #Identification
                args: In_PaddingOptions={ BottomSizeId: Entities.UBT_Size.Base }, In_Text="Identification", In_TextOptions={ Color: Entities.UBT_Color.Neutral10, FontSize: Entities.UBT_FontSize.Heading6, FontWeight: Entities.UBT_FontWeight.SemiBold }
              block CustomText (UBTConnectLibrary.BasePatterns) #ContactBaseID
                args: In_PaddingOptions={ BottomSizeId: Entities.UBT_Size.Small }, In_Text="ContactBase ID", In_TextOptions={ Color: Entities.UBT_Color.Neutral10, FontSize: Entities.UBT_FontSize.Small, FontWeight: Entities.UBT_FontWeight.SemiBold }
              input #Input_ContactBaseId var=AccountFormOriginal.AccountForm_IdentificationInformation.MemberId InputType=Text style="form-control"  [style="form-control"]
              block CustomText (UBTConnectLibrary.BasePatterns) #UBTAccountNumber
                args: In_PaddingOptions={ TopSizeId: Entities.UBT_Size.Base, BottomSizeId: Entities.UBT_Size.Small }, In_Text="UBT Account Number", In_TextOptions={ Color: Entities.UBT_Color.Neutral10, FontSize: Entities.UBT_FontSize.Small, FontWeight: Entities.UBT_FontWeight.SemiBold }
              block InputWithIcon (OutSystemsUI_2_23.Interaction)
                args: AlignIconRight=True
                placeholder Icon:
                  block Icon (UBTConnectLibrary.ConnectPatterns)
                    args: In_ColorId=Entities.UBT_Color.Neutral7, In_IconId=Entities.UBT_Icons2.ContentCopy
                    on Click → OnClick_UBTAccountNumber
                placeholder Input:
                  input #Input_UBTAccountNumber var=AccountFormOriginal.AccountForm_IdentificationInformation.AccountNumber InputType=Text style="form-control"  [style="form-control"]
          block SectionSeparator (UBTConnect.App_Common_Blocks)
          block CustomContainer (UBTConnectLibrary.BasePatterns) #PersonalInfo
            args: Options={ PaddingSize: { HorizontalSizeId: Entities.UBT_Size.Base, TopSizeId: Entities.UBT_Size.Small, BottomSizeId: Entities.UBT_Size.Base } }
            placeholder Content:
              block CustomText (UBTConnectLibrary.BasePatterns) #PersonalInformation
                args: In_PaddingOptions={ BottomSizeId: Entities.UBT_Size.Base }, In_Text="Personal Information", In_TextOptions={ Color: Entities.UBT_Color.Neutral10, FontSize: Entities.UBT_FontSize.Heading6, FontWeight: Entities.UBT_FontWeight.SemiBold }
              block CustomText (UBTConnectLibrary.BasePatterns) #PleaseNote
                args: In_PaddingOptions={ BottomSizeId: Entities.UBT_Size.Base }, In_Text="Please note that all changes may take up to 48 hours to show on your profile.", In_TextOptions={ Color: Entities.UBT_Color.Neutral10, FontSize: Entities.UBT_FontSize.Small, FontWeight: Entities.UBT_FontWeight.Regular }
              block CustomText (UBTConnectLibrary.BasePatterns) #Username
                args: In_PaddingOptions={ BottomSizeId: Entities.UBT_Size.Small }, In_Text="Username", In_TextOptions={ Color: Entities.UBT_Color.Neutral10, FontSize: Entities.UBT_FontSize.Small, FontWeight: Entities.UBT_FontWeight.SemiBold }
              input #Input_Username var=AccountForm.AccountForm_PersonalInformation.Username InputType=Text style="form-control" onchange → OnChange_Fields  [style="form-control"]
              block CustomText (UBTConnectLibrary.BasePatterns) #Email
                args: In_PaddingOptions={ TopSizeId: Entities.UBT_Size.Base, BottomSizeId: Entities.UBT_Size.Small }, In_Text="Email", In_TextOptions={ Color: Entities.UBT_Color.Neutral10, FontSize: Entities.UBT_FontSize.Small, FontWeight: Entities.UBT_FontWeight.SemiBold }
              input #Input_Email var=AccountForm.AccountForm_PersonalInformation.Email InputType=Email style="form-control" onchange → OnChange_Fields  [style="form-control"]
              block CustomText (UBTConnectLibrary.BasePatterns) #PleaseNote2
                args: In_PaddingOptions={ TopSizeId: Entities.UBT_Size.Base, BottomSizeId: Entities.UBT_Size.Base }, In_Text="Please note that if you are a householder, changes to your email address will also apply to your Global Media Stream login.", In_TextOptions={ Color: Entities.UBT_Color.Neutral10, FontSize: Entities.UBT_FontSize.Small, FontWeight: Entities.UBT_FontWeight.Regular }
              block Columns_Two (UBTConnectLibrary.BasePatterns) #BirthDateandAge
                args: ColumnOptions={ ColumnBehaviour: Entities.UBT_ColumnBehaviour.ReduceLast, VerticalAlign: Entities.UBT_VerticalAlign.Center }
                placeholder Left:
                  block CustomText (UBTConnectLibrary.BasePatterns) #BirthDateandAgeText
                    args: FitContent=True, In_PaddingOptions={ BottomSizeId: Entities.UBT_Size.Small }, In_Text="Display Month and Year of Birth, and Age", In_TextOptions={ Color: Entities.UBT_Color.Neutral10, FontSize: Entities.UBT_FontSize.Small, FontWeight: Entities.UBT_FontWeight.SemiBold }
                placeholder Right:
                  switchwidget #Switch1 var=AccountForm.AccountForm_PersonalInformation.ShowLifeCycleDates style="switch" onchange → OnChange_ShowAgeSwitch  [style="switch"]
              block CustomText (UBTConnectLibrary.BasePatterns) #BirthDateandAgeNote
                args: In_PaddingOptions={ BottomSizeId: Entities.UBT_Size.Base }, In_Text=//If(AccountForm.AccountForm_PersonalInformation.ShowLifeCycleDates,"Displays","Hide") +" Month, Year of Birth and Age."\n"Please note that changes may take up to 12 hours to show in the app.", In_TextOptions={ Color: Entities.UBT_Color.Neutral10, FontSize: Entities.UBT_FontSize.ExtraSmall, FontWeight: Entities.UBT_FontWeight.Regular }
          if isHouseholder #isHouseholder_Address
            block SectionSeparator (UBTConnect.App_Common_Blocks)
            block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
              args: In_IsLoading=not LocalCacheControl_AllSubdivions.isFetched or not LocalCacheControl_AllLocalities.isFetched
              placeholder Placeholder_LoadingSection:
                block CustomContainer (UBTConnectLibrary.BasePatterns) #AddressInfo
                  args: Options={ PaddingSize: { HorizontalSizeId: Entities.UBT_Size.Base, TopSizeId: Entities.UBT_Size.Small, BottomSizeId: Entities.UBT_Size.Base } }
                  placeholder Content:
                    block CustomText (UBTConnectLibrary.BasePatterns) #AddressInformation
                      args: In_PaddingOptions={ BottomSizeId: Entities.UBT_Size.Base }, In_Text="Address Information", In_TextOptions={ Color: Entities.UBT_Color.Neutral10, FontSize: Entities.UBT_FontSize.Heading6, FontWeight: Entities.UBT_FontWeight.SemiBold }
                    list source=AccountForm.AccountForm_AddressInformation.Custom_Address_ItemList mode=Default  [style="list list-group"]
                      container
                        block CustomText (UBTConnectLibrary.BasePatterns) #AddressLabel
                          args: In_PaddingOptions={ TopSizeId: If(AccountForm.AccountForm_AddressInformation.Custom_Address_ItemList.CurrentRowNumber>0,Entities.UBT_Size.Base, NullTextIdentifier()), BottomSizeId: Entities.UBT_Size.Small }, In_Text=AccountForm.AccountForm_AddressInformation.Custom_Address_ItemList.Current.Label, In_TextOptions={ Color: Entities.UBT_Color.Neutral10, FontSize: Entities.UBT_FontSize.Small, FontWeight: Entities.UBT_FontWeight.SemiBold }
                        input #AddressInput var=AccountForm.AccountForm_AddressInformation.Custom_Address_ItemList.Current.Value InputType=Text Mandatory=AccountForm.AccountForm_AddressInformation.Custom_Address_ItemList.Current.Required style="form-control " + If(AccountForm.AccountForm_AddressInformation.Custom_Address_… onchange → OnChange_Fields  [style="form-control " + If(AccountForm.AccountForm_AddressInformation.Custom_Address_ItemList.Current.IsValid, "", "not-valid…]
                    container #Locality
                      block CustomText (UBTConnectLibrary.BasePatterns) #LocalityLabel
                        args: In_PaddingOptions={ TopSizeId: Entities.UBT_Size.Base, BottomSizeId: Entities.UBT_Size.Small }, In_Text="Locality", In_TextOptions={ Color: Entities.UBT_Color.Neutral10, FontSize: Entities.UBT_FontSize.Small, FontWeight: Entities.UBT_FontWeight.SemiBold }
                      block DropdownSearch (OutSystemsUI_2_23.Interaction) #LocalityDropdown
                        args: OptionsList=ConvertList(LocalCacheControl_AllLocalities.CacheControl_AllLocalities.LocalityList,  {Value:"LocalityId",Label:"Name+If(CountryName<>\"\", \", \"+CountryName,\"\")",GroupName:"CountryName"}), Prompt="-", StartingSelection=[ { Value: AccountForm.AccountForm_AddressInformation.LocalityId, Label: "" } ]
                        on OnChanged → OnChange_LocalityDropdown(DropdownSearchId=DropdownSearchId, SelectedOptionList=SelectedOptionList)
                    container #Subdivion
                      block CustomText (UBTConnectLibrary.BasePatterns) #SubdivisionLabel
                        args: In_PaddingOptions={ TopSizeId: Entities.UBT_Size.Base, BottomSizeId: Entities.UBT_Size.Small }, In_Text="Subdivision", In_TextOptions={ Color: Entities.UBT_Color.Neutral10, FontSize: Entities.UBT_FontSize.Small, FontWeight: Entities.UBT_FontWeight.SemiBold }
                      block DropdownSearch (OutSystemsUI_2_23.Interaction) #SubdivisionDropdown
                        args: OptionalConfigs={ IsDisabled: AccountForm.AccountForm_AddressInformation.LocalityId = "" }, OptionsList=ConvertList(SubdivisionFilteredList,  {Value:"SubdivisionId",Label:"SubdivisionName"}), Prompt="-", StartingSelection=[ { Value: AccountForm.AccountForm_AddressInformation.SubdivionId, Label: "" } ]
                        on OnChanged → OnChange_SubdivionDropdown(DropdownSearchId=DropdownSearchId, SelectedOptionList=SelectedOptionList)
          block SectionSeparator (UBTConnect.App_Common_Blocks)
          block CustomContainer (UBTConnectLibrary.BasePatterns) #ContactInfo
            args: Options={ PaddingSize: { HorizontalSizeId: Entities.UBT_Size.Base, TopSizeId: Entities.UBT_Size.Small, BottomSizeId: Entities.UBT_Size.Base } }
            placeholder Content:
              block CustomText (UBTConnectLibrary.BasePatterns) #ContactInformation
                args: In_PaddingOptions={ BottomSizeId: Entities.UBT_Size.Base }, In_Text="Contact Information", In_TextOptions={ Color: Entities.UBT_Color.Neutral10, FontSize: Entities.UBT_FontSize.Heading6, FontWeight: Entities.UBT_FontWeight.SemiBold }
              block CustomText (UBTConnectLibrary.BasePatterns) #HomeNumber
                args: In_PaddingOptions={ TopSizeId: Entities.UBT_Size.Base, BottomSizeId: Entities.UBT_Size.Small }, In_Text="Home Number", In_TextOptions={ Color: Entities.UBT_Color.Neutral10, FontSize: Entities.UBT_FontSize.Small, FontWeight: Entities.UBT_FontWeight.SemiBold }
              input #HomeNumber2 var=AccountForm.AccountForm_ContactInformation.HomeNumber InputType=Phone MaxLength=15 Enabled=isHouseholder style="form-control" onchange → OnChange_Fields  [style="form-control"; enabled=isHouseholder; autocomplete="off"]
              block CustomContainer (UBTConnectLibrary.BasePatterns) #MobileNumber_Container
                args: Options={ PaddingSize: { TopSizeId: Entities.UBT_Size.Base, BottomSizeId: Entities.UBT_Size.ExtraSmall } }
                placeholder Content:
                  block Columns_Two (UBTConnectLibrary.BasePatterns) #MobileNumber
                    args: ColumnOptions={ ColumnBehaviour: Entities.UBT_ColumnBehaviour.ReduceLast, VerticalAlign: Entities.UBT_VerticalAlign.Center }
                    placeholder Left:
                      block CustomText (UBTConnectLibrary.BasePatterns) #MobileNumberText
                        args: In_PaddingOptions={  }, In_Text="Mobile Number", In_TextOptions={ Color: Entities.UBT_Color.Neutral10, FontSize: Entities.UBT_FontSize.Small, FontWeight: Entities.UBT_FontWeight.SemiBold }
                    placeholder Right:
                      if isHouseholder or isSpouse #isHouseholder2
                        switchwidget #Switch2 var=AccountForm.AccountForm_ContactInformation.ShowMobileNumber style="switch" onchange → OnChange_Fields  [style="switch"]
              input #Input_MobileNumber var=AccountForm.AccountForm_ContactInformation.MobileNumber InputType=Phone MaxLength=15 style="form-control" onchange → OnChange_Fields  [style="form-control"; autocomplete="off"]
              if isHouseholder or isSpouse
                block CustomText (UBTConnectLibrary.BasePatterns) #MobileNumber_Note
                  args: In_PaddingOptions={ TopSizeId: Entities.UBT_Size.ExtraSmall }, In_Text=If(AccountForm.AccountForm_ContactInformation.ShowMobileNumber, "Display","Hide")+" mobile number on your profile.", In_TextOptions={ Color: Entities.UBT_Color.Neutral10, FontSize: Entities.UBT_FontSize.ExtraSmall, FontWeight: Entities.UBT_FontWeight.Regular }
              block CustomContainer (UBTConnectLibrary.BasePatterns) #WorkNumberContainer
                args: Options={ PaddingSize: { TopSizeId: Entities.UBT_Size.Base, BottomSizeId: Entities.UBT_Size.ExtraSmall } }
                placeholder Content:
                  block Columns_Two (UBTConnectLibrary.BasePatterns) #WorkNumber
                    args: ColumnOptions={ ColumnBehaviour: Entities.UBT_ColumnBehaviour.ReduceLast, VerticalAlign: Entities.UBT_VerticalAlign.Center }
                    placeholder Left:
                      block CustomText (UBTConnectLibrary.BasePatterns) #WorkNumberText
                        args: In_PaddingOptions={  }, In_Text="Work Number", In_TextOptions={ Color: Entities.UBT_Color.Neutral10, FontSize: Entities.UBT_FontSize.Small, FontWeight: Entities.UBT_FontWeight.SemiBold }
                    placeholder Right:
                      if isHouseholder or isSpouse
                        switchwidget #Switch3 var=AccountForm.AccountForm_ContactInformation.ShowWorkNumber style="switch" onchange → OnChange_Fields  [style="switch"]
              input #Input_WorkNumber var=AccountForm.AccountForm_ContactInformation.WorkNumber InputType=Phone MaxLength=15 style="form-control" onchange → OnChange_Fields  [style="form-control"; autocomplete="off"]
              if isHouseholder or isSpouse
                block CustomText (UBTConnectLibrary.BasePatterns) #WorkNumber_Note
                  args: In_PaddingOptions={ TopSizeId: Entities.UBT_Size.ExtraSmall, BottomSizeId: Entities.UBT_Size.Base }, In_Text=If(AccountForm.AccountForm_ContactInformation.ShowWorkNumber, "Display","Hide")+" work number on your profile.", In_TextOptions={ Color: Entities.UBT_Color.Neutral10, FontSize: Entities.UBT_FontSize.ExtraSmall, FontWeight: Entities.UBT_FontWeight.Regular }
    if MainContainerId <> "" #FooterStickButtons
      block FixedFooter (UBTConnectLibrary.ConnectPatterns)
        args: ContentContainerId=MainContainerId, ExpectedFooterHeight="calc(2 * var(--space-base) + var(--ubt-button-height-m))", useBottomBar=False
        placeholder Content:
          block CustomContainer (UBTConnectLibrary.BasePatterns)
            args: Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral0 }, PaddingSize: { GeneralSizeId: Entities.UBT_Size.Base }, ShadowId: Entities.UBT_Shadow.ExtraSmallTop }
            placeholder Content:
              block Columns_Two (UBTConnectLibrary.BasePatterns)
                args: ColumnOptions={ SpacingSize: Entities.UBT_Size.Small }
                placeholder Left:
                  block Button (UBTConnect_Utils+UBTConnectLibrary.CW_Common)
                    args: ButtonOptions={ UBT_ButtonSizeId: Entities.UBT_ButtonSize.Medium, UBT_ButtonTypeId: Entities.UBT_ButtonType.Scondary }, ButtonText="Close", IsDisabled=isLoading_Submit
                    on buttonOnClick → OnClick_Back
                placeholder Right:
                  block ButtonLoading (OutSystemsUI_2_23.Utilities2)
                    args: IsLoading=isLoading_Submit
                    placeholder Button:
                      block Button (UBTConnect_Utils+UBTConnectLibrary.CW_Common)
                        args: ButtonOptions={ UBT_ButtonSizeId: Entities.UBT_ButtonSize.Medium, UBT_ButtonTypeId: Entities.UBT_ButtonType.Primary }, ButtonText="Save", IsDisabled=not HasChanges or isLoading_Submit
                        on buttonOnClick → OnClick_Save
  placeholder Placeholder_CommonUI_Inside_Layout:
    block CommonUI_InsideLayout (UBTConnect.App_Common)
block CacheControl_UserInfo_Wrapper (UBTConnect.App_Cache)
  on Result → CacheControl_UserInfo_WrapperResult(UserInformation=UserInformation)
if isHouseholder #isHouseholder_Cache
  block CacheControl_AllLocalities (UBTConnect_Utils.CacheControl)
    on Result → CacheControl_AllLocalitiesResult(CacheControl_Response=CacheControl_Response)
  block CacheControl_AllSubdivisions (UBTConnect_Utils.CacheControl)
    on Result → CacheControl_AllSubdivisionsResult(CacheControl_Response=CacheControl_Response)
if HasChanges #PopUp_Change
  block Dialog_Navigation (UBTConnect.App_Common_Blocks_PopupDialogs)
    on Event_OnBackNavigation → Event_OnBackNavigation_ConfirmDiscard(Event_NavigationEvent=Event_NavigationEvent)
    placeholder Placeholder_Header:
      expr: "Confirm"
    placeholder Placeholder_Body:
      expr: "Are you sure you want to discard the changes?"
if LocalCacheControl_UserInformation.isFetched #PreviewBottomSheet
  block Profile_HouseholdPreview (UBTConnect.App_Profile)
    args: HouseholdId=LocalCacheControl_UserInformation.Directory_UserCurrent.Directory_UserCurrent_Member.HouseholderId, Preview={ UI_AccountForm: AccountForm_ViewPreview, HouseholdMemberId: TextToInteger(LocalCacheControl_UserInformation.Directory_UserCurrent.MemberID), UsePreview: True, isHouseholder: LocalCacheControl_UserI…
    on OnInitialized → Event_HouseholdPreview_OnInitialized(Id=Id)
block Dialog_CustomChoice (UBTConnect.App_Common_Blocks_PopupDialogs) #AgeConfirmation_PopUp
  placeholder Placeholder_Body:
    expr: If(AccountForm.AccountForm_PersonalInformation.ShowLifeCycleDates\n// Enabling\n, "By selecting this option, your Month and Date of Birth, and your Age will display in Directory. You will also be able to see the Birth Date and Age information for other Members who have selected this option."\n// Di…
  placeholder Placeholder_ButtonLabel:
    text: Update Preference
  placeholder Placeholder_DismissButtonLabe:
    text: Cancel
```

#### Screen actions
- **Action_FormatAddress**; locals: FormatToUse: Text
  ```
  assign: FormatToUse = Replace(GetCountryInfo.AddressInfo2.AddressFormat,"\r\n"," "); FormattedAddress = FormatToUse
  [M1] for each AccountForm.AccountForm_AddressInformation.Custom_Address_ItemList
    assign: FormattedAddress = Replace(FormattedAddress,"[Address"+AccountForm.AccountForm_AddressInformation.Custom_Address_ItemList.Current.NumberRef+"]",AccountForm.AccountForm_AddressInformation.Custom_Address_ItemList.Current.Value)
    → continues at [M1]
  end for
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Action_RefreshSubdivionList**; locals: EmptyList: Directory_LocalitySubdivision List
  ```
  if (No Locality) AccountForm.AccountForm_AddressInformation.LocalityId = "" 
    assign: SubdivisionFilteredList = EmptyList; AccountForm.AccountForm_AddressInformation.SubdivionId = ""
    end
  else
    if AccountForm.AccountForm_AddressInformation.LocalityId <> "" and LocalCacheControl_AllSubdivions.isFetched
      call ListFilter(Condition=LocalityId = AccountForm.AccountForm_AddressInformation.LocalityId, SourceList=LocalCacheControl_AllSubdivions.CacheControl_AllSubdivions.SubdivionsList)
      assign: SubdivisionFilteredList = ListFilter.FilteredList
      end
    else
      end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
    end
  ```
- **CacheControl_AllLocalitiesResult** inputs: CacheControl_Response: CacheControl_AllLocalities (mandatory)
  ```
  call ListSort(By=CountryName+" "+Name, List=CacheControl_Response.LocalityList)
  assign: LocalCacheControl_AllLocalities.CacheControl_AllLocalities = CacheControl_Response; LocalCacheControl_AllLocalities.isFetched = True
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **CacheControl_AllSubdivisionsResult** inputs: CacheControl_Response: CacheControl_AllSubdivions (mandatory)
  ```
  assign: LocalCacheControl_AllSubdivions.CacheControl_AllSubdivions = CacheControl_Response; LocalCacheControl_AllSubdivions.isFetched = True
  call Action_RefreshSubdivionList()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **CacheControl_UserInfo_WrapperResult** inputs: UserInformation: Directory_UserCurrent (mandatory)
  ```
  assign (LocalCache): LocalCacheControl_UserInformation.Directory_UserCurrent = UserInformation; LocalCacheControl_UserInformation.isFetched = True
  assign (PersonalInformation): AccountForm.AccountForm_PersonalInformation.Username = UserInformation.UserName; AccountForm.AccountForm_PersonalInformation.Email = UserInformation.Email; AccountForm.AccountForm_PersonalInformation.ShowLifeCycleDates = UserInformation.Directory_UserCurrent_Visibility.DisplayAge
  assign: AccountForm.AccountForm_IdentificationInformation.MemberId = UserInformation.MemberID; AccountForm.AccountForm_IdentificationInformation.AccountNumber = UserInformation.AccountNumber
  call ListFilter(Condition=Visible, SourceList=UserInformation.Directory_UserCurrent_Member.Address.AddressItemsList) as AddressInformationFilter
  [M1] for each AddressInformationFilter.FilteredList
    call ListAppend(Element={ Label: AddressInformationFilter.FilteredList.Current.Label, Visible: AddressInformationFilter.FilteredList.Current.Visible, Required: AddressInformationFilter.FilteredList.Current.Required, Value: …, List=AccountForm.AccountForm_AddressInformation.Custom_Address_ItemList)
    → continues at [M1]
  end for
  assign (AddressInformation): AccountForm.AccountForm_AddressInformation.LocalityId = UserInformation.Directory_UserCurrent_Geography.Locality_Id; AccountForm.AccountForm_AddressInformation.SubdivionId = UserInformation.Directory_UserCurrent_Geography.Subdivision_Id
  assign (ContactInformation): AccountForm.AccountForm_ContactInformation.HomeNumber = UserInformation.HomeNumber; AccountForm.AccountForm_ContactInformation.MobileNumber = UserInformation.MobileNumber; AccountForm.AccountForm_ContactInformation.WorkNumber = UserInformation.WorkNumber; AccountForm.AccountForm_ContactInformation.ShowMobileNumber = UserInformation.Directory_UserCurrent_Visibility.DisplayMobilePhone; AccountForm.AccountForm_ContactInformation.ShowWorkNumber = UserInformation.Directory_UserCurrent_Visibility.DisplayWorkPhone
  assign: AccountFormOriginal = AccountForm; isHouseholder = UserInformation.Directory_UserCurrent_Member.isHouseholder; CurrentCountryCode = UserInformation.Directory_UserCurrent_Geography.Country_Code; isSpouse = UserInformation.Directory_UserCurrent_Member.SpouseIsHouseholder; AccountForm_ViewPreview = AccountForm
  call Action_RefreshSubdivionList()
  refresh data GetCountryInfo
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Event_AgeConfirmation_Confirm** inputs: Event_NavigationEvent: Object (mandatory)
  ```
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Event_HouseholdPreview_OnInitialized** inputs: Id: Text (mandatory)
  ```
  assign: PreviewHousehold_BottomSheetId = Id
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Event_Layout_OnReadyEvent** inputs: ContentContainerId: Text (mandatory)
  ```
  assign: MainContainerId = ContentContainerId
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Event_OnBackNavigation_ConfirmDiscard** inputs: Event_NavigationEvent: Object (mandatory)
  ```
  call PreventNavigation(NavigationEvent=Event_NavigationEvent)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnAfterFetch_GetCountryInfo**
  ```
  call Action_FormatAddress()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnChange_Fields**
  ```
  assign: HasChanges = not (AccountForm = AccountFormOriginal)
  call Action_FormatAddress()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnChange_LocalityDropdown** inputs: DropdownSearchId: Text (mandatory); SelectedOptionList: DropdownOption List (mandatory)
  ```
  assign: AccountForm.AccountForm_AddressInformation.LocalityId = SelectedOptionList.Current.Value; AccountForm.AccountForm_AddressInformation.SubdivionId = ""
  call Action_RefreshSubdivionList()
  call OnChange_Fields()
  if (Skip) True
    end
  else
    call ListFilter(Condition=LocalityId = SelectedOptionList.Current.Value, SourceList=LocalCacheControl_AllLocalities.CacheControl_AllLocalities.LocalityList)
    if not ListFilter.FilteredList.Empty and ListFilter.FilteredList.Current.CountryCode <> CurrentCountryCode
      assign: CurrentCountryCode = ListFilter.FilteredList.Current.CountryCode 
      refresh data GetCountryInfo
      end
    else
      end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **OnChange_ShowAgeSwitch**
  ```
  call ConfirmAction(ActionConfirmationDialogWidgetId=AgeConfirmation_PopUp.Id)
  if ConfirmAction.IsConfirmed
    call OnChange_Fields()
    end
  else
    assign: AccountForm.AccountForm_PersonalInformation.ShowLifeCycleDates = not AccountForm.AccountForm_PersonalInformation.ShowLifeCycleDates
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **OnChange_SubdivionDropdown** inputs: DropdownSearchId: Text (mandatory); SelectedOptionList: DropdownOption List (mandatory)
  ```
  assign: AccountForm.AccountForm_AddressInformation.SubdivionId = SelectedOptionList.Current.Value
  call OnChange_Fields()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnClick_Back**
  ```
  navigate → (Previous Screen)() transition=UseHistory
  ```
- **OnClick_Save**; locals: isValid: Boolean; UpdatedAdressItems: Custom_Address_Item List; SourceAddressItem: Custom_Address_Item; test: Custom_Address_Item List
  ```
  assign: isLoading_Submit = True
  call ScreenController_ValidateWidgets(Object=ScreenController)
  assign: isValid = DetailsForm.Valid
  if isHouseholder
    call DropdownClearValidation(WidgetId=LocalityDropdown.Id)
    call DropdownClearValidation(WidgetId=Subdivion.Id) as DropdownClearValidation2
    if AccountForm.AccountForm_AddressInformation.LocalityId  = NullTextIdentifier()
      call DropdownNotValid(ValidationMessage="This field is required.", WidgetId=LocalityDropdown.Id)
      assign: isValid = False
      [M1] if AccountForm.AccountForm_AddressInformation.SubdivionId= NullTextIdentifier()
        call DropdownNotValid(ValidationMessage="This field is required.", WidgetId=SubdivisionDropdown.Id) as DropdownNotValid2
        assign: isValid = False
        [M2] for each AccountForm.AccountForm_AddressInformation.Custom_Address_ItemList
          if AccountForm.AccountForm_AddressInformation.Custom_Address_ItemList.Current.Required and AccountForm.AccountForm_AddressInformation.Custom_Address_ItemList.Current.Value = ""
            assign: AccountForm.AccountForm_AddressInformation.Custom_Address_ItemList.Current.IsValid = False
            → continues at [M2]
          else
            assign: AccountForm.AccountForm_AddressInformation.Custom_Address_ItemList.Current.IsValid = True
            → continues at [M2]
        end for
        [M3] if isValid
          assign: isRequireRequestCreation = not (AccountForm.AccountForm_AddressInformation = AccountFormOriginal.AccountForm_AddressInformation)\nor\nAccountForm.AccountForm_PersonalInformation.Username <> AccountFormOriginal.AccountForm_PersonalInformation.Username\nor\nAccountForm.AccountForm_PersonalInformation.Email <> AccountFormOrigin…
          call-server Member_EditDetails_Service(isRequireRequestCreation=isRequireRequestCreation, UI_AccountForm=AccountForm)
          assign: isLoading_Submit = False; AccountFormOriginal = AccountForm
          if (ChangedVisibilityPreferences) AccountFormOriginal.AccountForm_ContactInformation = AccountForm.AccountForm_ContactInformation and AccountForm.AccountForm_PersonalInformation.ShowLifeCycleDates = AccountFormOriginal.AccountForm_PersonalInformation.ShowLifeCycleDates
            call Cache_UserInfo_Get()
            assign: Cache_UserInfo_Get.UserInformation.Directory_UserCurrent.Directory_UserCurrent_Visibility.DisplayAge = AccountForm.AccountForm_PersonalInformation.ShowLifeCycleDates; Cache_UserInfo_Get.UserInformation.Directory_UserCurrent.Directory_UserCurrent_Visibility.DisplayMobilePhone = AccountForm.AccountForm_ContactInformation.ShowMobileNumber; Cache_UserInfo_Get.UserInformation.Directory_UserCurrent.Directory_UserCurrent_Visibility.DisplayWorkPhone = AccountForm.AccountForm_ContactInformation.ShowWorkNumber
            call Get_MemoryCacheKey_UniqueKey()
            call PutCacheableObject(CacheKey=Get_MemoryCacheKey_UniqueKey.Key, CacheTimeToLiveSeconds=7200, MemoryCacheTypeId=TextToIdentifier(Entities.Connect_CacheType.DirectoryUser), Object=ToObject(Cache_UserInfo_Get.UserInformation))
            [M4] call OnChange_Fields()
            call FeedbackMessage_AutoClose(Message="Your update request has been submitted.", MessageType=Entities.UBT_MessageType.Success) as FeedbackMessage_AutoClose2
            end
          else
            → continues at [M4]
        else
          assign: isLoading_Submit = False; HasChanges = False
          end
      else
        → continues at [M2]
    else
      → continues at [M1]
  else
    → continues at [M3]
  on exception Communication Exception (log=True)
  assign: isLoading_Submit = False
  raise BubbleCommunicationException: CommunicationException.ExceptionMessage
  on exception All Exceptions (log=True)
  assign: isLoading_Submit = False
  raise BubbleGenericException: AllExceptions.ExceptionMessage
  on exception Not Registered (log=True)
  raise Not Registered: NotRegistered.ExceptionMessage
  unreachable nodes (not connected to start or to an exception handler):
    end
    [DISABLED] call FeedbackMessage_AutoClose(Message="Please provide all mandatory fields", MessageType=Entities.UBT_MessageType.Error)
    end
  ```
- **OnClick_UBTAccountNumber**
  ```
  call JSUtils_CopyToClipboard(Text=AccountForm.AccountForm_IdentificationInformation.AccountNumber)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnClick_ViewPreview**
  ```
  assign: AccountForm_ViewPreview = AccountForm
  call BottomSheetOpen(WidgetId=PreviewHousehold_BottomSheetId)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **ScreenEvent_OnReady**
  ```
  call ScreenController_Get()
  assign: ScreenController = ScreenController_Get.Object
  call DropdownSearch_ForceResizeOnOpen()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

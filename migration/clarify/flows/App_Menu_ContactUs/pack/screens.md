# Pack of UI flow App_Menu_ContactUs (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

Screens: ContactUsDetails, ContactUsMenu

## Screen ContactUsDetails (flow App_Menu_ContactUs)
- roles: Anonymous, Registered, UBTOne_User; URL structure: QueryString; stylesheet: yes
- input parameters: In_ContactSubjectId: Type_ContactSubject Identifier (mandatory); In_ContactSubjectTitle: Text (mandatory); In_ListMenuOptionLabel: Text (mandatory)
- local variables: ContactUsForm: UI_ContactUsForm; IsFormFilled: Boolean; IsAnyFilled: Boolean; Description: Text; MessagePrompt: Text; isLogged: Boolean; CountryPhone: Phone Number; isSubmiting: Boolean; Rate_SelectedRate: Integer; Rate_ShowRate: Boolean; Rate_UserWantToBeContacted: Boolean; CallPopupData: ContactByPhonePopupData; LocalCacheControl_UserInformation: Directory_UserCurrent, isFetched Record; isLoadingMainData: Boolean = True; IgnorePolices: Boolean
- lifecycle: OnInitialize → ScreenEvent_OnInitialize; OnReady → ScreenEvent_OnReady

#### Data sources
- data action **DataAction_GetCountriesNames** fetch=OnDemand; outputs: Countries: CS_CountryName List
  ```
  call-server Get_Core_CountriesNames()
  assign: Countries = Get_Core_CountriesNames.Out_CountriesNames
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- data action **DataAction_GetLocalityTimezone** fetch=OnDemand; outputs: Out_TimezoneName: Text; Out_TimezoneOffset: Integer; OnAfterFetch → OnAfterFetch_GetLocalityTimezone
  ```
  call-server Get_Core_LocalityTimezone(In_LocalityId=LocalCacheControl_UserInformation.Directory_UserCurrent.Directory_UserCurrent_Geography.Locality_Id)
  assign: Out_TimezoneName = Get_Core_LocalityTimezone.Out_Timezone.Abbreviation; Out_TimezoneOffset = Get_Core_LocalityTimezone.Out_Timezone.OffsetSeconds
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

#### Widget tree
```
block Layout_DetailPage (UBTConnectLibrary.Layouts)
  args: In_AlignTitleLeft=True, In_ExtendedClass="bottom-padding-base-button"
  placeholder Placeholder_Header_Title:
    expr: In_ContactSubjectTitle
  placeholder Content:
    container #Content
      block CustomContainer (UBTConnectLibrary.BasePatterns)
        args: Options={ PaddingSize: { VerticalSizeId: Entities.UBT_Size.Small, HorizontalSizeId: Entities.UBT_Size.Base } }
        placeholder Content:
          block CustomContainer (UBTConnectLibrary.BasePatterns)
            args: Options={ TextOptions: { Color: Entities.UBT_Color.Neutral10, FontSize: Entities.UBT_FontSize.Small, FontWeight: Entities.UBT_FontWeight.SemiBold } }
            placeholder Content:
              expr: In_ListMenuOptionLabel
          block CustomContainer (UBTConnectLibrary.BasePatterns)
            args: Options={ MarginSize: { TopSizeId: Entities.UBT_Size.Small }, TextOptions: { FontSize: Entities.UBT_FontSize.Small } }
            placeholder Content:
              expr: Description
          if isLogged and CountryPhone <> ""
            block CustomContainer (UBTConnectLibrary.BasePatterns)
              args: Options={ MarginSize: { TopSizeId: Entities.UBT_Size.Base }, TextOptions: { FontSize: Entities.UBT_FontSize.Small } }
              placeholder Content:
                expr: "Prefer to speak with someone? \nGive our "
                link onclick → OnClick_SupportTeam  [style="text-underline"]
                  text: Support Team
                expr: " a call."
      block SectionSeparator (UBTConnect.App_Common_Blocks)
      block SubLayout_DirectoryDetailScreen_Section (UBTConnect.SubLayout)
        args: In_Title=""
        placeholder Placeholder_SectionContent:
          if Rate_ShowRate #Rates
            block ContactUs_Rate (UBTConnect.App_Menu_ContactUs)
              args: isEnabled=not isSubmiting, SelectedRate=Rate_SelectedRate
              on RateSelected → ContactUs_RateRateSelected(Rate=Rate)
          if isLogged #Title
            block CustomContainer (UBTConnectLibrary.BasePatterns)
              args: Options={ MarginSize: { BottomSizeId: Entities.UBT_Size.Small }, TextOptions: { FontSize: Entities.UBT_FontSize.Small, FontWeight: Entities.UBT_FontWeight.SemiBold } }
              placeholder Content:
                expr: If(In_ContactSubjectId = Entities.Type_ContactSubject.GeneralSuggestionsFeedbackRating,"Please provide your suggestions and feedback", "How can we help you?")
          else
            block CustomContainer (UBTConnectLibrary.BasePatterns)
              args: Options={ MarginSize: { BottomSizeId: Entities.UBT_Size.Small }, TextOptions: { FontSize: Entities.UBT_FontSize.Small, FontWeight: Entities.UBT_FontWeight.SemiBold, IsItalic: True } }
              placeholder Content:
                expr: "All fields are required."
          block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
            args: In_IsLoading=isLoadingMainData
            placeholder Placeholder_LoadingSection:
              form #Form_ContactUs  [style="form"]
                if not isLogged
                  container
                    if True  [DEAD BRANCH: condition is a constant]
                      label for=Input_FullName
                        text: Full Name
                      input #Input_FullName var=ContactUsForm.FullName InputType=Text Mandatory=True Prompt="Enter Full Name" Enabled=not isSubmiting style="form-control" onchange → OnChange_FormInput  [style="form-control"; enabled=not isSubmiting]
                    if False  [DEAD BRANCH: condition is a constant]
                      label for=Input_FullName
                        text: Full Name
                      block Input (UBTConnectLibrary.ConnectPatterns)
                        args: In_Options={ IsEnabled: not isSubmiting, IsMandatory: True, ValidationMessage: "this is an error", SearchPrompt: "Enter Full Name", IsForceInvalid: True }
                  container
                    label for=Input_Email
                      text: Email
                    input #Input_Email var=ContactUsForm.Email InputType=Email Mandatory=True Prompt="Enter Your Email Address" Enabled=not isSubmiting style="form-control" onchange → OnChange_Email  [style="form-control"; enabled=not isSubmiting]
                  container
                    label for=Input_PhoneNumber
                      text: Phone Number
                    input #Input_PhoneNumber var=ContactUsForm.PhoneNumber InputType=Phone Mandatory=True Prompt="Enter Phone Number" Enabled=not isSubmiting style="form-control" onchange → OnChange_PhoneNumber  [style="form-control"; enabled=not isSubmiting]
                  container
                    label for=Dropdown_Country
                      text: Country
                    dropdown #Dropdown_Country var=ContactUsForm.Country Mandatory=True List=DataAction_GetCountriesNames.Countries Values=Code EmptyValue="Select Your Country" DropdownMode=Custom Enabled=not isSubmiting style="dropdown" onchange → OnChange_FormInput  [style="dropdown"; enabled=not isSubmiting]
                      container
                        expr: DataAction_GetCountriesNames.Countries.Current.Name
                  container
                    label for=Input_Locality
                      text: Locality
                    input #Input_Locality var=ContactUsForm.Locality InputType=Text Mandatory=True Prompt="Enter Your Locality" Enabled=not isSubmiting style="form-control" onchange → OnChange_FormInput  [style="form-control"; enabled=not isSubmiting]
                container
                  block TextArea_WithCounter (UBTConnectLibrary.ConnectPatterns)
                    args: In_InitialLength=0
                    placeholder Placeholder_Input:
                      label for=TextArea_Message
                        text: Message
                      textarea #TextArea_Message var=ContactUsForm.Message Mandatory=True MaxLength=500 TextLines=3 Prompt=MessagePrompt Enabled=not isSubmiting style="form-control" onchange → OnChange_FormInput  [style="form-control"; enabled=not isSubmiting]
                if Rate_ShowRate
                  block IconText (UBTConnectLibrary.ConnectPatterns)
                    args: Text="I would like to be contacted about my feedback. "
                    on Clicked → OnClick_UserWantToBeContacted
                    placeholder Icon:
                      block Icon (UBTConnectLibrary.ConnectPatterns)
                        args: In_ColorId=If(Rate_UserWantToBeContacted, NullTextIdentifier(),Entities.UBT_Color.Neutral5), In_IconId=If(Rate_UserWantToBeContacted,Entities.UBT_Icons2.Checkbox,Entities.UBT_Icons2.CheckboxOutlineBlank)
    block FixedFooter (UBTConnectLibrary.ConnectPatterns)
      args: ContentContainerId=Content.Id, ExpectedFooterHeight="calc(2 * var(--space-base) + var(--ubt-button-height-m))", useBottomBar=False
      placeholder Content:
        block CustomContainer (UBTConnectLibrary.BasePatterns)
          args: Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral0 }, PaddingSize: { GeneralSizeId: Entities.UBT_Size.Base }, ShadowId: Entities.UBT_Shadow.ExtraSmallTop }
          placeholder Content:
            block ButtonLoading (OutSystemsUI_2_23.Utilities2)
              args: IsLoading=isSubmiting
              placeholder Button:
                block Button (UBTConnect_Utils+UBTConnectLibrary.CW_Common)
                  args: ButtonText="Send", IsDisabled=not IsFormFilled or isLoadingMainData 
                  on buttonOnClick → OnClick_SubmitForm
    container #PopUps
      block Dialog_Information (UBTConnect.App_Common_Blocks_PopupDialogs) #SubmittedConfirmation
        placeholder Placeholder_Header:
          expr: "Thank you"
        placeholder Placeholder_Body:
          container  [style="text-align-center"]
            block CircleButton_WithLabel (UBTConnectLibrary.ConnectPatterns)
              args: BackgroundColorId=Entities.UBT_Color.GreenLightest, SizeId=Entities.UBT_AvatarSize.Base_52
              placeholder Icon:
                block Icon (UBTConnectLibrary.ConnectPatterns)
                  args: In_ColorId=Entities.UBT_Color.GreenDarker, In_IconId=Entities.UBT_Icons2.Mail, In_SizeId=Entities.UBT_IconsSize.Display_36
            if False  [DEAD BRANCH: condition is a constant]
              block CircleButton_IconPrimary (UBTConnectLibrary.ConnectPatterns)
                args: IconId=Entities.UBT_Icons2.Mail
          block CustomContainer (UBTConnectLibrary.BasePatterns)
            args: Options={ MarginSize: { TopSizeId: Entities.UBT_Size.Base }, TextOptions: { FontSize: Entities.UBT_FontSize.Small } }
            placeholder Content:
              expr: "Your message has been sent. A member from our Customer Care Team will be in touch soon."
        placeholder Placeholder_ButtonLabel:
          text: Close
      if IsAnyFilled
        block Dialog_Navigation (UBTConnect.App_Common_Blocks_PopupDialogs)
          on Event_OnBackNavigation → OnBackNavigation_ConfirmDiscard(Event_NavigationEvent=Event_NavigationEvent)
          placeholder Placeholder_Header:
            expr: "Delete message?"
          placeholder Placeholder_Body:
            expr: "Are you sure you want to delete this message?"
      block ContactPopup_ByPhone (UBTConnect_Utils.CW_CTA_PopUps)
        args: In_CallPopupData=CallPopupData, In_ImageSizeId=Entities.UBT_ImageSize.Auto
        on Event_Call → Handler_CallPopup_Cancel
        on Event_Cancel → Handler_CallPopup_Cancel
  placeholder Placeholder_CommonUI_Inside_Layout:
    block CommonUI_InsideLayout (UBTConnect.App_Common)
      args: In_IgnorePolicy=IgnorePolices
if isLogged
  block CacheControl_UserInfo_Wrapper (UBTConnect.App_Cache)
    on Result → CacheControl_UserInfo_WrapperResult(UserInformation=UserInformation)
```

#### Screen actions
- **Action_ResetForm**; locals: EmptyContactUsForm: UI_ContactUsForm
  ```
  assign: ContactUsForm = EmptyContactUsForm; IsFormFilled = False; IsAnyFilled = False
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **CacheControl_UserInfo_WrapperResult** inputs: UserInformation: Directory_UserCurrent (mandatory)
  ```
  assign: LocalCacheControl_UserInformation.Directory_UserCurrent = UserInformation; LocalCacheControl_UserInformation.isFetched = True; isLoadingMainData = False
  assign: ContactUsForm.FullName = UserInformation.FullName; ContactUsForm.Email = UserInformation.Email; ContactUsForm.Country = UserInformation.Directory_UserCurrent_Geography.Country_Name; ContactUsForm.Locality = UserInformation.Directory_UserCurrent_Geography.Locality_Name; ContactUsForm.PhoneNumber = UserInformation.HomeNumber; CountryPhone = UserInformation.Directory_UserCurrent_Geography.Country_Phone
  refresh data DataAction_GetLocalityTimezone
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **ContactUs_RateRateSelected** inputs: Rate: Integer (mandatory)
  ```
  assign: Rate_SelectedRate = Rate
  call OnChange_FormInput()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_CallPopup_Cancel**
  ```
  assign: CallPopupData.ContactPopupData.ShowPopup = False
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnAfterFetch_GetLocalityTimezone**
  ```
  assign: CallPopupData.ContactPopupData.TimezoneName = DataAction_GetLocalityTimezone.Out_TimezoneName; CallPopupData.ContactPopupData.TimezoneOffset = DataAction_GetLocalityTimezone.Out_TimezoneOffset
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnBackNavigation_ConfirmDiscard** inputs: Event_NavigationEvent: Object (mandatory)
  ```
  call PreventNavigation(NavigationEvent=Event_NavigationEvent)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnChange_Email**
  ```
  assign: Input_Email.Valid = True; Input_Email.ValidationMessage = ""
  call OnChange_FormInput()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnChange_FormInput**
  ```
  if isLogged
    assign: IsFormFilled = ContactUsForm.Message <> "" or \n(In_ContactSubjectId = Entities.Type_ContactSubject.GeneralSuggestionsFeedbackRating and Rate_SelectedRate <> 0); IsAnyFilled = ContactUsForm.Message <> ""
    end
  else
    assign: IsFormFilled = Trim(ContactUsForm.FullName) <> "" and\nTrim(ContactUsForm.Email) <> "" and\nTrim(ContactUsForm.PhoneNumber) <> "" and\nTrim(ContactUsForm.Country) <> "" and\nTrim(ContactUsForm.Locality) <> "" and\nTrim(ContactUsForm.Message) <> ""; IsAnyFilled = Trim(ContactUsForm.FullName) <> "" or\nTrim(ContactUsForm.Email) <> "" or\nTrim(ContactUsForm.PhoneNumber) <> "" or\nTrim(ContactUsForm.Country) <> "" or\nTrim(ContactUsForm.Locality) <> "" or\nTrim(ContactUsForm.Message) <> ""
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnChange_PhoneNumber**
  ```
  assign: Input_PhoneNumber.Valid = True; Input_PhoneNumber.ValidationMessage = ""
  call OnChange_FormInput()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnClick_SubmitForm**
  ```
  assign: ContactUsForm.FullName = Trim(ContactUsForm.FullName); ContactUsForm.Email = Trim(ContactUsForm.Email); ContactUsForm.PhoneNumber = Trim(ContactUsForm.PhoneNumber); ContactUsForm.Country = Trim(ContactUsForm.Country); ContactUsForm.Locality = Trim(ContactUsForm.Locality); ContactUsForm.Message = Trim(ContactUsForm.Message); isSubmiting = True
  call JSUtils_String_CheckNumbers(Text=ContactUsForm.FullName) as NameHasNumbers
  if NameHasNumbers.Found
    assign: Input_FullName.Valid = False; Input_FullName.ValidationMessage = "This field cannot contain numeric values!"
    [M1] call IsEmailValid(In_Text=ContactUsForm.Email)
    if (Check if IsEmailValid Out_Valid) IsEmailValid.Out_Valid = True
      assign: Input_Email.Valid = True; Input_Email.ValidationMessage = ""
      [M2] call IsPhoneNumberValid(In_Text=ContactUsForm.PhoneNumber)
      if (Check if IsPhoneNumberValid Out_Valid) IsPhoneNumberValid.Out_Valid = True
        assign: Input_PhoneNumber.Valid = True; Input_PhoneNumber.ValidationMessage = ""
        [M3] assign: IsFormFilled = False
        if Form_ContactUs.Valid
          call-server SendContactUsMessage(In_ContactSubjectId=In_ContactSubjectId, In_ContactUsForm=ContactUsForm, Rate=Rate_SelectedRate, Rate_UserWantToBeContacted=Rate_UserWantToBeContacted)
          assign: isSubmiting = False
          if SendContactUsMessage.Out_ErrorMessage = ""
            call ConfirmAction(ActionConfirmationDialogWidgetId=SubmittedConfirmation.Id)
            if (Check if ConfirmAction IsConfirmed) ConfirmAction.IsConfirmed = True
              call Action_ResetForm()
              navigate → (Previous Screen)() transition=UseHistory
            else
              end
          else
            call FeedbackMessage_AutoClose(Message=SendContactUsMessage.Out_ErrorMessage, MessageType=Entities.UBT_MessageType.Error) as FeedbackMessage_AutoClose2
            end
        else
          assign: isSubmiting = False
          end
      else
        assign: Input_PhoneNumber.Valid = False; Input_PhoneNumber.ValidationMessage = "Invalid Phone"
        → continues at [M3]
    else
      assign: Input_Email.Valid = False; Input_Email.ValidationMessage = "Invalid email!"
      → continues at [M2]
  else
    assign: Input_FullName.Valid = True; Input_FullName.ValidationMessage = ""
    → continues at [M1]
  on exception All Exceptions (log=True)
  assign: isSubmiting = False
  call FeedbackMessage_AutoClose(Message=AllExceptions.ExceptionMessage, MessageType=Entities.UBT_MessageType.Error)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
    end
    end
  ```
- **OnClick_SupportTeam**
  ```
  assign: CallPopupData.ContactPopupData.ImageURL = Images.UbtLogo.URL; CallPopupData.ContactPopupData.Name = "Support Team"; CallPopupData.ContactPopupData.TimezoneName = DataAction_GetLocalityTimezone.Out_TimezoneName; CallPopupData.ContactPopupData.Locality = ContactUsForm.Locality; CallPopupData.ContactPopupData.TimezoneOffset = DataAction_GetLocalityTimezone.Out_TimezoneOffset; CallPopupData.ContactPopupData.ShowPopup = False; CallPopupData.ContactPopupData.DisplayContactNumber = CountryPhone; CallPopupData.ContactPopupData.IsAvatarImage = False; CallPopupData.Phone = CountryPhone; CallPopupData.ContactPopupData.CountryName = ContactUsForm.Country; CallPopupData.ContactPopupData.TitleTerminator = "?"
  assign: CallPopupData.ContactPopupData.ShowPopup = True
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnClick_UserWantToBeContacted**
  ```
  assign: Rate_UserWantToBeContacted = not Rate_UserWantToBeContacted
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **ScreenEvent_OnInitialize**
  ```
  call PIN_Check()
  assign: IgnorePolices = GetUserId() = NullIdentifier() or PIN_Check.NeedRegister
  call Get_ContactUsFormDescription(In_ListMenuOptionId=In_ContactSubjectId)
  assign: Description = Get_ContactUsFormDescription.Out_FormDescription; MessagePrompt = Get_ContactUsFormDescription.Out_MessagePrompt; isLogged = GetUserId() <> NullIdentifier(); Rate_ShowRate = In_ContactSubjectId = Entities.Type_ContactSubject.GeneralSuggestionsFeedbackRating and isLogged; isLoadingMainData = isLogged
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **ScreenEvent_OnReady**
  ```
  if isLogged
    end
  else
    refresh data DataAction_GetCountriesNames
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```

## Screen ContactUsMenu (flow App_Menu_ContactUs)
- roles: Anonymous, Registered, UBTOne_User; URL structure: QueryString
- input parameters: -
- local variables: ContactUs_Menu: UI_MenuSection List; IgnorePolices: Boolean; IgnoreLockedScreen: Boolean
- lifecycle: OnInitialize → ScreenEvent_OnInitialize

#### Widget tree
```
block Layout_DetailPage (UBTConnectLibrary.Layouts)
  placeholder Placeholder_Header_Title:
    text: Contact Us
  placeholder Content:
    block CustomContainer (UBTConnectLibrary.BasePatterns)
      args: Options={ PaddingSize: { VerticalSizeId: Entities.UBT_Size.Small, HorizontalSizeId: Entities.UBT_Size.Base }, TextOptions: { Color: Entities.UBT_Color.Neutral10, FontSize: Entities.UBT_FontSize.Small } }
      placeholder Content:
        expr: "Please select the most relevant category so our Customer Care Team can direct your request to the right team."
    container  [style="contact-us-menu"]
      list source=ContactUs_Menu mode=Default  [style="list list-group"]
        block Menu_List (UBTConnect.App_Menu)
          args: In_MenuSection=ContactUs_Menu.Current
          on OnClick_MenuOption → OnClick_MenuOption(Event_ListMenuOptionId=UI_ListMenuOption.Id)
    block SectionSeparator (UBTConnect.App_Common_Blocks)
  placeholder Placeholder_CommonUI_Inside_Layout:
    block CommonUI_InsideLayout (UBTConnect.App_Common)
      args: In_IgnoreLockScreen=IgnoreLockedScreen, In_IgnorePolicy=IgnorePolices
```

#### Screen actions
- **OnClick_MenuOption** inputs: Event_ListMenuOptionId: Text (mandatory)
  ```
  call ListIndexOf(Condition=Id = Event_ListMenuOptionId, List=ContactUs_Menu.Current.MenuOptions)
  navigate → ContactUsDetails(In_ContactSubjectId=TextToIdentifier(ContactUs_Menu.Current.MenuOptions[ListIndexOf.Position].Id), In_ContactSubjectTitle=ContactUs_Menu.Current.SectionTitle, In_ListMenuOptionLabel=ContactUs_Menu.Current.MenuOptions[ListIndexOf.Position].Label) transition=Inherited
  ```
- **ScreenEvent_OnInitialize**
  ```
  call PIN_Check()
  assign: IgnorePolices = GetUserId() = NullIdentifier() or PIN_Check.NeedRegister; IgnoreLockedScreen = GetUserId() <> NullIdentifier() and PIN_Check.NeedRegister
  javascript IsViewRestoredFromCache() → IsRestoredFromCache: Boolean
    | $parameters.IsRestoredFromCache = $public.View.wasCurrentViewRestoredFromCache()
  if (Check if IsViewRestoredFromCache IsRestoredFromCache) IsViewRestoredFromCache.IsRestoredFromCache
    end
  else
    call Get_ContactUsMenuSections()
    assign: ContactUs_Menu = Get_ContactUsMenuSections.Out_ContactUsMenuSections
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```

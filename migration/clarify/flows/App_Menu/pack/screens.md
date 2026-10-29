# Pack of UI flow App_Menu (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

Screens: Menu, PINBiometricsMenu, TermsAndPoliciesMenu

## Screen Menu (flow App_Menu)
- roles: Registered, UBTOne_User; URL structure: QueryString
- input parameters: -
- local variables: MenuOptionList: UI_ListMenuOption List; LocalCacheControl_UserInformation: Directory_UserCurrent, isFetched Record
- lifecycle: OnInitialize → ScreenEvent_OnInitialize

#### Widget tree
```
block Layout_DetailPage (UBTConnectLibrary.Layouts)
  args: In_AlignTitleLeft=True
  placeholder Placeholder_Header_Title:
    block CustomText (UBTConnectLibrary.BasePatterns)
      args: In_Text="Menu", In_TextOptions={ Color: Entities.UBT_Color.Neutral0, FontSize: Entities.UBT_FontSize.Heading5, FontWeight: Entities.UBT_FontWeight.SemiBold }
  placeholder Content:
    block CustomContainer (UBTConnectLibrary.BasePatterns)
      args: ExtendedClasses="full-height", Options={ DisplayOptions: { Display: Entities.UBT_Display.Flex, JustifyContent: Entities.UBT_JustifyContent.SpaceBetween, FlexDirection: Entities.UBT_FlexDirection.Column } }
      placeholder Content:
        container
          block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
            args: In_IsLoading=not LocalCacheControl_UserInformation.isFetched
            placeholder Placeholder_LoadingSection:
              block CustomContainer (UBTConnectLibrary.BasePatterns) #Header
                args: Options={ PaddingSize: { VerticalSizeId: Entities.UBT_Size.Small, HorizontalSizeId: Entities.UBT_Size.Base } }
                placeholder Content:
                  block Columns_Two (UBTConnectLibrary.BasePatterns)
                    args: ColumnOptions={ ColumnBehaviour: Entities.UBT_ColumnBehaviour.ReduceFirst, SpacingSize: Entities.UBT_Size.Base }
                    placeholder Left:
                      block UBT_LazyImage (UBTConnect_Utils.CW_Image)
                        args: EntityId=LocalCacheControl_UserInformation.Directory_UserCurrent.MemberID, EntityType=Entities.Connect_Entity.Member, ImageSize={ Height: Entities.UBT_ImageSize.Small_40, Width: Entities.UBT_ImageSize.Square }, ImageURL=LocalCacheControl_UserInformation.Directory_UserCurrent.Directory_UserCurrent_Member.Photo.SignedURL
                    placeholder Right:
                      container
                        block CustomText (UBTConnectLibrary.BasePatterns)
                          args: In_Text=LocalCacheControl_UserInformation.Directory_UserCurrent.FullName, In_TextOptions={ Color: Entities.UBT_Color.Neutral9, FontSize: Entities.UBT_FontSize.Base, FontWeight: Entities.UBT_FontWeight.SemiBold }
                      link onclick → OnClick_EditYourAccount
                        block CustomText (UBTConnectLibrary.BasePatterns)
                          args: In_Text="Edit your account", In_TextOptions={ Color: Entities.UBT_Color.Primary, FontSize: Entities.UBT_FontSize.ExtraSmall, FontWeight: Entities.UBT_FontWeight.SemiBold, IsUnderlined: True }
          block Menu_List (UBTConnect.App_Menu)
            args: In_MenuSection={ MenuOptions: MenuOptionList }
            on OnClick_MenuOption → OnClick_MenuOption(Id=UI_ListMenuOption.Id)
        block CustomContainer (UBTConnectLibrary.BasePatterns)
          args: Options={ MarginSize: { VerticalSizeId: Entities.UBT_Size.Small }, TextOptions: { Color: Entities.UBT_Color.Neutral7, FontSize: Entities.UBT_FontSize.DoubleExtraSmall }, DisplayOptions: { Display: Entities.U…
          placeholder Content:
            block Version (UBTConnect.App_Common)
  placeholder Bottom:
    block BottomBarMenu (UBTConnect.App_Common)
      args: ActiveItem=Entities.Connect_BottomBar_Items.Menu, isRootPage=True
  placeholder Placeholder_CommonUI_Inside_Layout:
    block CommonUI_InsideLayout (UBTConnect.App_Common)
block Dialog_CustomChoice (UBTConnect.App_Common_Blocks_PopupDialogs) #PopUp_Logout
  placeholder Placeholder_Header:
    text: Logout
  placeholder Placeholder_Body:
    text: Are you sure you wish to logout?
  placeholder Placeholder_ButtonLabel:
    text: Yes
  placeholder Placeholder_DismissButtonLabe:
    text: No
block CacheControl_UserInfo_Wrapper (UBTConnect.App_Cache)
  on Result → CacheControl_UserInfo_WrapperResult(UserInformation=UserInformation)
block Dialog_CustomChoice (UBTConnect.App_Common_Blocks_PopupDialogs) #Popup_SubmitPhotoRequest
  placeholder Placeholder_Header:
    expr: "Photo Request?"
  placeholder Placeholder_Body:
    expr: "Are you sure you wish to request a photo update?"
  placeholder Placeholder_ButtonLabel:
    text: Submit
  placeholder Placeholder_DismissButtonLabe:
    text: Cancel
```

#### Screen actions
- **Action_Logout**
  ```
  call ConfirmAction(ActionConfirmationDialogWidgetId=PopUp_Logout.Id)
  if ConfirmAction.IsConfirmed
    call Connect_Logout()
    navigate → HomeFeed() transition=Fade
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **CacheControl_UserInfo_WrapperResult** inputs: UserInformation: Directory_UserCurrent (mandatory)
  ```
  call ListIndexOf(Condition=Id = Entities.Connect_Menu_Items.SubscriptionAndPayments, List=MenuOptionList) as ListIndexOf_SubscriptionsAndPayments
  if ListIndexOf_SubscriptionsAndPayments.Position <> -1
    assign: MenuOptionList[ListIndexOf_SubscriptionsAndPayments.Position].IconRight = Entities.UBT_Icons2.OpenNew; MenuOptionList[ListIndexOf_SubscriptionsAndPayments.Position].IconRightText = UserInformation.Directory_UserCurrent_Subscription.SubscriptionType; MenuOptionList[ListIndexOf_SubscriptionsAndPayments.Position].IconRightLoading = False
    [M1] assign: LocalCacheControl_UserInformation.Directory_UserCurrent = UserInformation; LocalCacheControl_UserInformation.isFetched = True
    call ListIndexOf(Condition=Id = Entities.Connect_Menu_Items.RequestPhotoUpdate, List=MenuOptionList) as ListIndexOf_RequestPhotoUpdate
    if ListIndexOf_RequestPhotoUpdate.Position <> -1
      assign: MenuOptionList[ListIndexOf_RequestPhotoUpdate.Position].IsLoading = False
      if UserInformation.Directory_UserCurrent_Member.isHouseholder or UserInformation.Directory_UserCurrent_Member.SpouseIsHouseholder
        [M2] assign (>>): 
        end
      else
        call ListRemove(List=MenuOptionList, Position=ListIndexOf_RequestPhotoUpdate.Position)
        end
    else
      → continues at [M2]
  else
    → continues at [M1]
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnClick_EditYourAccount**
  ```
  if LocalCacheControl_UserInformation.isFetched
    navigate → Profile() transition=Inherited
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnClick_MenuOption** inputs: Id: Text (mandatory)
  ```
  switch
    case Id = Entities.Connect_Menu_Items.LogOut (LogOut)
      call Action_Logout()
      end
    case Id = Entities.Connect_Menu_Items.ContactUs (HelpAndSupport)
      navigate → ContactUsMenu() transition=Inherited
    case Id = Entities.Connect_Menu_Items.TermsAndPolicies (TermsOfService)
      navigate → TermsAndPoliciesMenu() transition=Inherited
    case Id = Entities.Connect_Menu_Items.PINAndBiometrics (ChangePIN)
      navigate → PINBiometricsMenu() transition=Inherited
    case Id = Entities.Connect_Menu_Items.SubscriptionAndPayments (SubscriptionAndPayments)
      if LocalCacheControl_UserInformation.isFetched
        call OpenInApp_OpenExternalLink(InNewTab=True, Url=LocalCacheControl_UserInformation.Directory_UserCurrent.Directory_UserCurrent_Subscription.SubscriptionManageLink)
        end
      else
        end
    case Id = Entities.Connect_Menu_Items.RequestPhotoUpdate
      call ConfirmAction(ActionConfirmationDialogWidgetId=Popup_SubmitPhotoRequest.Id)
      if ConfirmAction.IsConfirmed
        call-server RequestPhotoUpdate()
        message Success: "Your update photo request has been submitted."
        end
      else
        end
    otherwise
      message Info: "Go to "+Id
      end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
    end
    end
    end
  ```
- **ScreenEvent_OnInitialize**
  ```
  call Menu_GetList()
  assign: MenuOptionList = ConvertList(Menu_GetList.MenuItemsList,  {Id:"MenuItemId",IconId:"UBTIcon",Label:"Label",IconRightText:"If(MenuItemId = Entities.Connect_Menu_Items.SubscriptionAndPayments,\"Dummy\",\"\")",IconRightLoading:"MenuItemId = Entities.Connect_Menu_Items.SubscriptionAndPayments",IsLoading:"MenuItemId = En…
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Screen PINBiometricsMenu (flow App_Menu)
- roles: Anonymous, Registered, UBTOne_User; URL structure: QueryString
- input parameters: -
- local variables: MenuOptionList: UI_ListMenuOption List; ChangePinName: Text = "Change PIN"; BiometricLoginName: Text = "Biometric Login"
- lifecycle: OnInitialize → ScreenEvent_OnInitialize

#### Widget tree
```
block Layout_DetailPage (UBTConnectLibrary.Layouts)
  placeholder Placeholder_Header_Title:
    text: PIN & Biometrics
  placeholder Content:
    block Menu_List (UBTConnect.App_Menu)
      args: In_MenuSection={ HasSeparator: False, MenuOptions: MenuOptionList }
      on OnClick_MenuOption → OnClick_MenuOption(UI_ListMenuOption=UI_ListMenuOption)
```

#### Screen actions
- **OnClick_MenuOption** inputs: UI_ListMenuOption: UI_ListMenuOption (mandatory)
  ```
  switch (ChangePin)
    case UI_ListMenuOption.Label = ChangePinName (ChangePin)
      navigate → PINChange() transition=Inherited
    case UI_ListMenuOption.Label = BiometricLoginName (BiometricLogin)
      assign: Client.App_PIN_BiometricEnabled = not Client.App_PIN_BiometricEnabled
      end
    otherwise
      end
  unreachable nodes (not connected to start or to an exception handler):
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
    call ListClear(List=MenuOptionList)
    call ListAppend(Element={ IconId: Entities.UBT_Icons2.Password, Label: ChangePinName }, List=MenuOptionList)
    call AppManager_GetPIN_FingerprintReaderAvailable()
    if AppManager_GetPIN_FingerprintReaderAvailable.Available
      call ListAppend(Element={ IconId: Entities.UBT_Icons2.Fingerprint, Label: BiometricLoginName, LabelDescription: "Sign in with Fingerprint or Face Recognition authentication", useSwitch: True, SwitchValue: Client.App_PIN_Bio…, List=MenuOptionList) as ListAppend2
      end
    else
      end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```

## Screen TermsAndPoliciesMenu (flow App_Menu)
- roles: Registered, UBTOne_User; URL structure: QueryString
- input parameters: -
- local variables: MenuOptionList: UI_ListMenuOption List; TermsAndConditionsName: Text = "Terms and Conditions"; PrivacyPolicyName: Text = "Privacy Policy"; LocalCacheControl_Policies: CacheControl_Policies, isFetched Record
- lifecycle: OnInitialize → ScreenEvent_OnInitialize

#### Widget tree
```
block Layout_DetailPage (UBTConnectLibrary.Layouts)
  placeholder Placeholder_Header_Title:
    text: Terms & Policies
  placeholder Content:
    block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
      args: In_IsLoading=not LocalCacheControl_Policies.isFetched
      placeholder Placeholder_LoadingSection:
        block Menu_List (UBTConnect.App_Menu)
          args: In_MenuSection={ HasSeparator: False, MenuOptions: MenuOptionList }
          on OnClick_MenuOption → OnClick_MenuOption(UI_ListMenuOption=UI_ListMenuOption)
  placeholder Placeholder_CommonUI_Inside_Layout:
    block CommonUI_InsideLayout (UBTConnect.App_Common)
block CacheControl_Policies (UBTConnect_Utils.CacheControl)
  on Result → CacheControl_PoliciesResult(CacheControl_Response=CacheControl_Response)
```

#### Screen actions
- **CacheControl_PoliciesResult** inputs: CacheControl_Response: CacheControl_Policies (mandatory)
  ```
  assign: LocalCacheControl_Policies.CacheControl_Policies = CacheControl_Response; LocalCacheControl_Policies.isFetched = True
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnClick_MenuOption** inputs: UI_ListMenuOption: UI_ListMenuOption (mandatory)
  ```
  switch
    case UI_ListMenuOption.Label = TermsAndConditionsName (Terms And Conditions)
      call OpenPolicy(PolicyInformation=LocalCacheControl_Policies.CacheControl_Policies.PolicyInformation_TermsAndConditions)
      end
    case UI_ListMenuOption.Label = PrivacyPolicyName (Privacy Policy)
      call OpenPolicy(PolicyInformation=LocalCacheControl_Policies.CacheControl_Policies.PolicyInformation_PrivacyPolicy) as OpenPolicy2
      end
    otherwise
      end
  unreachable nodes (not connected to start or to an exception handler):
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
    call ListClear(List=MenuOptionList)
    call ListAppend(Element={ IconId: Entities.UBT_Icons2.Contacts, Label: TermsAndConditionsName }, List=MenuOptionList)
    call ListAppend(Element={ IconId: Entities.UBT_Icons2.BookClosed, Label: PrivacyPolicyName }, List=MenuOptionList) as ListAppend2
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```

# Pack of UI flow App_Policies (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

Own blocks of the flow: Policy_Checker, Policy_Custom_AcceptPendingPolicies
Blocks of other UBTConnect flows that the flow uses (transitive): 11

## Block Policy_Checker (flow App_Policies)
- public: False
- input parameters: -
- events: -
- local variables: -
- lifecycle: OnInitialize → OnInitialize
- used by (UBTConnect): CommonUI_InsideLayout

#### Widget tree
```
```

#### Block actions
- **OnInitialize**
  ```
  if Client.App_Policies_HasPolicyToAccept
    call ResetReplaceOnUpcomingNavigation()
    navigate → AcceptPendingPolicies() transition=Inherited
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    [DISABLED] javascript GetCurrentLocationURL() → CurrentLocation: Text
      | $parameters.CurrentLocation = window.location.href;
    [DISABLED] assign: Client.App_Policies_RedirectURL = GetCurrentLocationURL.CurrentLocation
    end
  ```

## Block Policy_Custom_AcceptPendingPolicies (flow App_Policies)
- public: True
- input parameters: PolicyApplications: PolicyApplication Identifier List (mandatory); Country: Text; ContentBlockId: Text (mandatory)
- events: AcceptedAll() mandatory; NetworkError()
- local variables: IsAllSelected: Boolean
- lifecycle: OnParametersChanged → OnParametersChanged
- used by (UBTConnect): AcceptPendingPolicies

#### Data sources
- data action **GetPendingPolicies** fetch=AtStart; outputs: Policies: PolicyAcceptanceInformation List; OnAfterFetch → GetPendingPoliciesOnAfterFetch
  ```
  call-server GetPoliciesToAccept(Country=Country, PolicyApplications=PolicyApplications)
  [M1] for each GetPoliciesToAccept.Policies
    call-server ListAppend(Element={ PolicyInformation: GetPoliciesToAccept.Policies.Current, Url: GetPublishedPolicyContentUrl(GetPoliciesToAccept.Policies.Current.Id) }, List=Policies)
    → continues at [M1]
  end for
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

#### Widget tree
```
if GetPendingPolicies.IsDataFetched
  if not GetPendingPolicies.Policies.Empty
    block Columns_Two (UBTConnectLibrary.BasePatterns)
      args: ColumnOptions={ ColumnBehaviour: Entities.UBT_ColumnBehaviour.ReduceLast, FlexDirection: Entities.UBT_FlexDirection.Column }, ExtendedClasses="ubt-policies--columns"
      placeholder Left:
        list source=GetPendingPolicies.Policies mode=Default  [style="list list-group ubt-policies--list"]
          container  [style="display-flex margin-y-xl"]
            if GetPendingPolicies.Policies.Current.IsSelected
              block Icon (UBTConnectLibrary.ConnectPatterns)
                args: In_ColorId=Entities.UBT_Color.Neutral0, In_IconId=Entities.UBT_Icons2.Checkbox
                on Click → ToggleCheckBox
            else
              block Icon (UBTConnectLibrary.ConnectPatterns)
                args: In_ColorId=Entities.UBT_Color.Neutral0, In_IconId=Entities.UBT_Icons2.CheckboxOutlineBlank
                on Click → ToggleCheckBox
            container  [style="margin-left-xs white-space-nowrap"]
              block CustomText (UBTConnectLibrary.BasePatterns)
                args: FitContent=True, In_Text="I agree to the "+GetPendingPolicies.Policies.Current.PolicyInformation.ApplicationName+" - ", In_TextOptions={ Color: Entities.UBT_Color.Neutral0, FontSize: Entities.UBT_FontSize.Small, FontWeight: Entities.UBT_FontWeight.Regular }
              block CustomText (UBTConnectLibrary.BasePatterns)
                args: FitContent=True, In_Text=GetPendingPolicies.Policies.Current.PolicyInformation.PolicyTypeName, In_TextOptions={ Color: Entities.UBT_Color.Neutral0, FontSize: Entities.UBT_FontSize.Small, FontWeight: Entities.UBT_FontWeight.SemiBold, IsUnderlined: True  }
                on Clicked → OnClickPolicy
      placeholder Right:
        if GetPendingPolicies.Policies.Length > 1
          container  [style="ubt-policies--agree-to-all"]
            block Separator (OutSystemsUI_2_23.Utilities2)
            container  [style="display-flex padding-top-xl"]
              if IsAllSelected
                block Icon (UBTConnectLibrary.ConnectPatterns)
                  args: In_ColorId=Entities.UBT_Color.Neutral0, In_IconId=Entities.UBT_Icons2.Checkbox
                  on Click → ToggleSelectAllCheckBox
              else
                block Icon (UBTConnectLibrary.ConnectPatterns)
                  args: In_ColorId=Entities.UBT_Color.Neutral0, In_IconId=Entities.UBT_Icons2.CheckboxOutlineBlank
                  on Click → ToggleSelectAllCheckBox
              container  [style="margin-left-xs"]
                block CustomText (UBTConnectLibrary.BasePatterns)
                  args: FitContent=True, In_Text="I agree to all", In_TextOptions={ Color: Entities.UBT_Color.Neutral0, FontSize: Entities.UBT_FontSize.Small, FontWeight: Entities.UBT_FontWeight.Regular }
    block FixedFooter (UBTConnectLibrary.ConnectPatterns)
      args: ContentContainerId=ContentBlockId, ExpectedFooterHeight="calc(2 * var(--space-base) + var(--ubt-button-height-m))", useBottomBar=False
      placeholder Content:
        block CustomContainer (UBTConnectLibrary.BasePatterns)
          args: Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral0 }, PaddingSize: { GeneralSizeId: Entities.UBT_Size.Base }, ShadowId: Entities.UBT_Shadow.ExtraSmallTop }
          placeholder Content:
            block Button (UBTConnect_Utils+UBTConnectLibrary.CW_Common)
              args: ButtonText="Continue", IsDisabled=not IsAllSelected
              on buttonOnClick → ContinueOnClick
  else
    container  [style="background-blue-lighter text-align-center padding-x-l padding-y-l"]
      text: You have accepted all required policies.\nNo more policies available to accept.
else
  container  [style="list-updating"]
```

#### Block actions
- **ContinueOnClick**
  ```
  call ListFilter(Condition=IsSelected, SourceList=GetPendingPolicies.Policies) as ListFilterSelected
  javascript GetDeviceInfo() → UserAgent: Text; IsVirtual: Boolean; UniqueId: Text; Manufacturer: Text; Model: Text; Platform: Text; Serial: Text; Version: Text; CordovaVersion: Text; AppVersion: Text; NetworkConnectionType: Text
    | $parameters.UserAgent = window.navigator.userAgent;
    | 
    | if (window.device && window.device.uuid) {
    |     // Native device information
    |     $parameters.IsVirtual = window.device.isVirtual;
    |     $parameters.UniqueId = window.device.uuid;
    |     $parameters.Manufacturer = window.device.manufacturer;
    |     $parameters.Model = window.device.model;
    |     $parameters.Platform = window.device.platform;
    |     $parameters.Serial = window.device.serial;
    |     $parameters.Version = window.device.version;
    |     $parameters.CordovaVersion = window.device.cordova;
    | } else {
    |     // Web device information
    |     if (window.matchMedia("(display-mode: standalone)").matches) {
    |         $parameters.Platform = "PWA";
    |     } else {
    |         $parameters.Platform = "Web";
    |     }
    | 
    |     if (window.crypto && window.crypto.randomUUID) {
    |         $parameters.UniqueId = window.localStorage["UUID"] || (window.localStorage["UUID"] = window.crypto.randomUUID());
    |     }
    | }
    | 
    | // Requires AppVersionPlugin
    | if (window.AppVersion && window.AppVersion.available) {
    |     $parameters.AppVersion = window.AppVersion.version + "." + window.AppVersion.build;
    | }
    | 
    | // NetworkInformation plugin
    | if (window.navigator && window.navigator.connection && (window.navigator.connection.effectiveType || window.navigator.connection.type)) {
    |     $parameters.NetworkConnectionType = window.navigator.connection.effectiveType || window.navigator.connection.type;
    | }
  call-server AcceptPolicies(DeviceDetails={ UniqueId: GetDeviceInfo.UniqueId, Platform: GetDeviceInfo.Platform, Manufacturer: GetDeviceInfo.Manufacturer, Model: GetDeviceInfo.Model }, Policies=ConvertList(ListFilterSelected.FilteredList,  {Value:"PolicyInformation.Id"}))
  trigger event AcceptedAll()
  end
  on exception Communication Exception (log=True)
  trigger event NetworkError()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **DetailsOnClick**
  ```
  call Get_PolicsyIsLoading()
  if Get_PolicsyIsLoading.isLoading
    end
  else
    call OpenApplicationPolicy(ContentType=GetPendingPolicies.Policies.Current.PolicyInformation.PolicyContentType, Filename=GetPendingPolicies.Policies.Current.PolicyInformation.PolicyContentFilename, Url=GetPendingPolicies.Policies.Current.Url)
    call Set_PolicsyIsLoading(isLoading=False)
    if OpenApplicationPolicy.HasFoundNetworkError
      trigger event NetworkError()
      end
    else
      end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
    end
  ```
- **GetPendingPoliciesOnAfterFetch**
  ```
  if GetPendingPolicies.Policies.Empty
    javascript Wait(WaitTimeSeconds=5)
      | window.setTimeout($resolve, 1000 * $parameters.WaitTimeSeconds);
    trigger event AcceptedAll()
    end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnClickPolicy**
  ```
  call CanOpenApplicationPolicyDirectlyViaUrl()
  if CanOpenApplicationPolicyDirectlyViaUrl.CanOpenDirectly
    call JSUtils_PageOpenInNewTab(URL=GetPendingPolicies.Policies.Current.Url)
    end
  else
    call DetailsOnClick()
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **OnParametersChanged**
  ```
  refresh data GetPendingPolicies
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **SelectAllCheckboxOnChange**
  ```
  [M1] for each GetPendingPolicies.Policies
    assign: GetPendingPolicies.Policies.Current.IsSelected = IsAllSelected
    → continues at [M1]
  end for
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **SelectCheckboxOnChange**
  ```
  call ListAll(Condition=IsSelected, List=GetPendingPolicies.Policies) as ListAllSelected
  assign: IsAllSelected = ListAllSelected.Result
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **ToggleCheckBox**
  ```
  assign: GetPendingPolicies.Policies.Current.IsSelected = not GetPendingPolicies.Policies.Current.IsSelected
  call SelectCheckboxOnChange()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **ToggleSelectAllCheckBox**
  ```
  assign: IsAllSelected = not IsAllSelected
  call SelectAllCheckboxOnChange()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Blocks of other flows (signature only; full text in the pack of their flow)

| Block | Flow | Pack | Inputs | Events |
|---|---|---|---|---|
| Block_PINUnlock | App_PIN | `../../App_PIN/pack/blocks.md` | In_ForceVisible: Boolean; In_IsCommonBlock: Boolean | Unlock |
| Block_PINUnlock_ContentWrapper | App_PIN | `../../App_PIN/pack/blocks.md` | UseOverlay: Boolean = True; In_ForceVisible: Boolean; UnlockText: Text = "Enter your PIN code"; ShowNeedHelp: Boolean; isFromMenu: Boolean; ShowForgotPIN: Boolean; ShowPolicy: Boolean (mandatory) | NavigateTo_PINRegister; Unlock |
| CommonUI_InsideLayout | App_Common | `../../App_Common/pack/blocks.md` | In_ShowLockScreen: Boolean; In_IgnorePolicy: Boolean; In_IgnoreLockScreen: Boolean | Event_OnScreenLocked; Event_OnScreenUnlocked |
| HandleOnResumeOpenLink | Legacy_Share | `../../Legacy_Share/pack/blocks.md` | - | - |
| OfflineDataSyncEvents | App_Common | `../../App_Common/pack/blocks.md` | - | OnSyncComplete; OnSyncError; OnSyncStart |
| UnsupportedVersion | App_Common | `../../App_Common/pack/blocks.md` | In_ExtendedClass: Text; In_HideButton: Boolean | Event_NavigateToPlaystore |
| UnsupportedVersion_Browser | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| UnsupportedVersion_Native | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| UnsupportedVersion_WebView | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| UnsupportedVersion_Wrapper | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| WelcomeToConnect | App_Common | `../../App_Common/pack/blocks.md` | - | - |

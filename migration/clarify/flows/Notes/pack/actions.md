# Pack of UI flow Notes (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

Module client actions the flow calls (transitive): 22; of them shared (in `../../_shared/pack/actions.md`): 19

## Shared actions (signature only)

| Action | Folder | Inputs | Outputs | Used by flows |
|---|---|---|---|---|
| App_CommonFilter_CheckCountry | App_CommonFilter | CountryCode: Text (mandatory); SubscribedCountries: Code, Name, RegionId Record List (mandatory) | IsEnabled: Boolean | 7 |
| App_CommonFilter_DefineOptionNames | App_CommonFilter | OptionList_Control: Filter_Common_Control_List (mandatory) | Formatted: Filter_Common_Control_List | 7 |
| Directory_Updates_RefreshBottomBarCount | Directory_Updates | ForceRefresh: Boolean | - | 19 |
| ExitApplicationForWebViewUpdate | ExternalNavigation | Delay: Integer | - | 29 |
| GetURLFromEventDataURL | Share_Utils | EventDataURL: Text (mandatory) | URL: Text | 29 |
| GetUserInformation_Wrapper_Assign | App_Cache | UserInformation: CacheControl_UserInformation | - | 15 |
| Get_IsUnsupportedSystem | UnsupportedSystems | - | Out_IsUnsupportedSystem: Boolean | 29 |
| Get_IsUnsupportedVersion | UnsupportedSystems | - | Out_IsUnsupportedWebViewVersion: Boolean; Out_IsUnsupportedAppVersion: Boolean; Out_IsUnsupportedBrowserVersion: Boolean | 29 |
| OfflineDataSync | App_OfflineDataSync | SyncUnit: Text (mandatory) | - | 29 |
| OfflineDataSyncConfiguration | App_OfflineDataSync | - | SyncOnOnline: Boolean; SyncOnLogin: Boolean; SyncOnResume: Boolean; RetryOnError: Boolean; RetryIntervalInSeconds: Integer | 29 |
| OpenGooglePlay_Chrome | ExternalNavigation | - | - | 29 |
| OpenGooglePlay_UBTConnect | ExternalNavigation | - | - | 29 |
| OpenGooglePlay_WebView | ExternalNavigation | - | - | 29 |
| ScrollTop | Utils | In_ScrollContainer: Text = ".active-screen"; In_Behaviour: Text = "instant" | - | 19 |
| SetResumeLoginLink | Share_Utils | URL: Text (mandatory) | - | 29 |
| ToggleBookmarkItem_C2 | Directory_MyBookmarks | In_ItemId: Text (mandatory); In_BookmarkType: BookmarkCategory Identifier (mandatory); IsBookmarked_C2: Boolean (mandatory) | - | 9 |
| Try_GetIsSupportedVersion | UnsupportedSystems | - | IsSupportedNativeVersion: Boolean = True; IsSupportedWebView: Boolean = True; IsAndroid: Boolean; IsApple: Boolean | 29 |
| Upgrade_UBTConnect | ExternalNavigation | - | - | 29 |
| Upgrade_WebView | ExternalNavigation | - | - | 29 |

## Actions of this flow (full)

## GetNotes_FilterYear (action, folder Notes_Utils)
- inputs: -
- outputs: Years: Text List
```
call Get_RecentYears()
assign: Years = Get_RecentYears.Out_Years
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## GetNotes_Pills (action, folder Notes_Utils)
- inputs: In_SelectedPillId: Text (mandatory)
- outputs: Out_Pills: Tag List
```
call ListAppend(Element={ Text: "All", Identifier: NullTextIdentifier(), IsSelected: In_SelectedPillId = "", Enabled: True }, List=Out_Pills) as ListAppend_All_Pill_Item
call Get_Note_DynamicPills()
[M1] for each Get_Note_DynamicPills.Out_NotePills
  call ListAppend(Element={ Text: Get_Note_DynamicPills.Out_NotePills.Current.Text, Identifier: Get_Note_DynamicPills.Out_NotePills.Current.Identifier, IsSelected: Get_Note_DynamicPills.Out_NotePills.Current.Identifier = In_S…, List=Out_Pills)
  → continues at [M1]
end for
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## Get_RecentYears (action, folder Utils)
- inputs: In_NumberOfYears: Integer = 3
- outputs: Out_Years: Text List
- locals: Index: Integer = 0
```
[M1] if Index < In_NumberOfYears
  call ListAppend(Element=IntegerToText(Year(CurrDate()) - Index), List=Out_Years)
  assign: Index = Index + 1
  → continues at [M1]
else
  end
unreachable nodes (not connected to start or to an exception handler):
  end
```

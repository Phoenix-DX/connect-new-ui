# Pack of UI flow zDEV_Directory_CommunityBusinessBlocks (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

Own blocks of the flow: CommunityBusinessCard_Content_Block, ComunityBusinessDetails_Block
Blocks of other UBTConnect flows that the flow uses (transitive): 17

## Block CommunityBusinessCard_Content_Block (flow zDEV_Directory_CommunityBusinessBlocks)
- public: False
- input parameters: CommunityBusinessCardContent: CommunityBusiness_Card_Content (mandatory)
- events: Event_OnClick_Bookmark() mandatory; Event_OnClick_Call() mandatory; Event_OnClick_Email() mandatory
- local variables: -
- lifecycle: none
- used by (UBTConnect): Locality_LocalityContacts

#### Widget tree
```
block LocalityContact_ListItem (UBTConnectLibrary.ConnectCorePatterns)
  args: In_ExtendedClasses=If(CommunityBusinessCardContent.IsBookmarked,"ubt-locality-contact-item__bookmarked",""), LocalityContactOptions={ ContactName: CommunityBusinessCardContent.ContactFullName, ContactRole: CommunityBusinessCardContent.ContactRole }
  on Event_OnClickCard → LocalityContact_ListItemEvent_OnClickCard
  placeholder Actions:
    block CustomContainer (UBTConnectLibrary.BasePatterns)
      args: Options={ MarginSize: {  } }
      placeholder Content:
        container  [style="margin-bottom-base margin-top-s"]
          block IconText (UBTConnectLibrary.ConnectPatterns)
            args: Text=CommunityBusinessCardContent.CountryName + ", " + GetTargetLocalTimeByCalculatedOffset(CommunityBusinessCardContent.TimezoneOffset) + " " + CommunityBusinessCardContent.TimeZoneName , TextOptions={ Color: Entities.UBT_Color.Neutral7, FontSize: Entities.UBT_FontSize.ExtraSmall, FontWeight: Entities.UBT_FontWeight.SemiBold }
            placeholder Icon:
              block Icon (UBTConnectLibrary.ConnectPatterns)
                args: In_ColorId=Entities.UBT_Color.Neutral7, In_IconId=Entities.UBT_Icons2.LocationOnFill, In_SizeId=Entities.UBT_IconsSize.Small_12
        block Directory_EntityDetailsActions (UBTConnect.Directory_CommonBlocks) #CallAndEmailMenuItem
          args: EntityId=NullIdentifier(), EntityType=NullTextIdentifier()
```

#### Block actions
- **LocalityContact_ListItemEvent_OnClickCard**
  ```
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Block ComunityBusinessDetails_Block (flow zDEV_Directory_CommunityBusinessBlocks)
- public: False
- input parameters: CommunityBusinessId: Long Integer; LocalityId: Long Integer (mandatory)
- events: -
- local variables: IsCommunityBusinessLoading: Boolean = True; CommunityBusinessDetailsCardContent: UI_CommunityBusiness
- lifecycle: none
- used by (UBTConnect): nothing in this module

#### Data sources
- data action **GetCommunityBusinessDetails** fetch=OnDemand; outputs: CommunityBusinessDetails: UI_CommunityBusiness; OnAfterFetch → GetCommunityBusinessDetailsOnAfterFetch
  ```
  call-server Get_LocalityCommunityBusinessDetails(CommunityBusinessId=CommunityBusinessId, LocalityId=LocalityId)
  assign: CommunityBusinessDetails = Get_LocalityCommunityBusinessDetails.Out_CommunityBusinessDetails
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

#### Widget tree
```
block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
  args: In_IsLoading=IsCommunityBusinessLoading
  placeholder Placeholder_LoadingSection:
    block SubLayout_DirectoryDetailScreen (UBTConnect.SubLayout) #LocalityContactDetailsScreen
```

#### Block actions
- **GetCommunityBusinessDetailsOnAfterFetch**
  ```
  end
  unreachable nodes (not connected to start or to an exception handler):
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
| CommonUI_InsideLayout | App_Common | `../../App_Common/pack/blocks.md` | In_ShowLockScreen: Boolean; In_IgnorePolicy: Boolean; In_IgnoreLockScreen: Boolean | Event_OnScreenLocked; Event_OnScreenUnlocked |
| Directory_EntityDetailsActions | Directory_CommonBlocks | `../../_shared/pack/blocks.md` | IsEnabled: Boolean = True; EntityType: Connect_Entity Identifier (mandatory); EntityId: Long Integer (mandatory); ContactPopUp_OverrideOptions: ContactPopUp_OverrideOptions; EnableOptions: ActionsMenuEnableOptions; useViewDetails: Boolean | Event_MenuEdit; OnChange_Bookmark; ViewDetails_OnClick |
| HandleOnResumeOpenLink | Legacy_Share | `../../Legacy_Share/pack/blocks.md` | - | - |
| OfflineDataSyncEvents | App_Common | `../../App_Common/pack/blocks.md` | - | OnSyncComplete; OnSyncError; OnSyncStart |
| Policy_Checker | App_Policies | `../../App_Policies/pack/blocks.md` | - | - |
| SubLayout_DirectoryDetailScreen | SubLayout | `../../_shared/pack/blocks.md` | HideActions: Boolean | - |
| UnsupportedVersion | App_Common | `../../App_Common/pack/blocks.md` | In_ExtendedClass: Text; In_HideButton: Boolean | Event_NavigateToPlaystore |
| UnsupportedVersion_Browser | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| UnsupportedVersion_Native | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| UnsupportedVersion_WebView | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| UnsupportedVersion_Wrapper | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| WelcomeToConnect | App_Common | `../../App_Common/pack/blocks.md` | - | - |

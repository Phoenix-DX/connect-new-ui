# Pack of UI flow App_Common (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

## Server and service actions called

| Action | Kind | Module | Inputs | Outputs |
|---|---|---|---|---|
| Get_UI_UpdateItems_UnreadCount_All | ref-service | Connect_Updates_CS | - | UnreadCount: Integer |
| Sync_Info_GetMain | own-server | UBTConnect | isFromLogin: Boolean (mandatory) | OrbitStaticEntities: StaticEntities_Orbit; LocalEntities_App: Sync_LocalEntities; Sync_SiteProperties: Sync_SiteProperties; MyEntertainingBaseURL: Text; FeedBaseURL: Text; B2CTenant: Text |
| User_GetName | ref-server | Users | - | Name: Text |

## Server actions of UBTConnect (full)
## Sync_Info_GetMain (action, folder Sync_StaticEntites)
- inputs: isFromLogin: Boolean (mandatory)
- outputs: OrbitStaticEntities: StaticEntities_Orbit; LocalEntities_App: Sync_LocalEntities; Sync_SiteProperties: Sync_SiteProperties; MyEntertainingBaseURL: Text; FeedBaseURL: Text; B2CTenant: Text
```
call-server Get_MyEntertainingBaseURL()
call-server Get_FeedBaseURL()
assign: MyEntertainingBaseURL = Get_MyEntertainingBaseURL.BaseURL; FeedBaseURL = Get_FeedBaseURL.BaseURL; B2CTenant = Site.Embedd_B2CTenant
if isFromLogin
  [M1] call-server Sync_LocalEntities_GetApp()
  assign: LocalEntities_App = Sync_LocalEntities_GetApp.LocalEntities_App
  call-server UpdateFeed_MonthsToShow()
  assign (Sync_SiteProperties): Sync_SiteProperties.UpdatesFeed_MonthsToShow = UpdateFeed_MonthsToShow.MonthsToShow
  end
else
  call-server SyncAllOrbitEntities()
  assign: OrbitStaticEntities = SyncAllOrbitEntities.OrbitStaticEntities
  → continues at [M1]
unreachable nodes (not connected to start or to an exception handler):
  end
```

## Entity actions called (local entities)


## Local entities of UBTConnect that the flow names

- **Photobook_Speed** (IStaticEntity): Id: Integer; Label: Text; Order: Integer

## Client variables

| Variable | Type | Default | Folder | Read | Written |
|---|---|---|---|---|---|
| Client.App_NetworkStatus_IsOnline_IsPersistent | Boolean | True | App_Network | yes |  |
| Client.App_PIN_BiometricEnabled | Boolean | True | App_PIN | yes |  |
| Client.App_PIN_Header_FinalCurvaturePercentage | Decimal | 105 | App_PIN | yes |  |
| Client.App_PIN_Header_FinalHeightPercentage | Decimal | 90 | App_PIN | yes |  |
| Client.App_Policies_HasPolicyToAccept | Boolean | - | App_Policies | yes | yes |
| Client.App_Policies_RedirectURL | Text | - | App_Policies | yes | yes |
| Client.Bookmarks_IsSynched | Boolean | - | Bookmarks | yes | yes |
| Client.Directory_Updates_MonthsToShow | Integer | - | Directory_Updates | yes | yes |
| Client.Directory_Updates_UnreadCount | Integer | - | Directory_Updates | yes | yes |
| Client.Directory_Updates_UnreadCount_CheckFrequency_Minut | Integer | 5 | Directory_Updates | yes |  |
| Client.Directory_Updates_UnreadCount_LastCheck | Date Time | - | Directory_Updates | yes | yes |
| Client.Embedd_B2CTenant | Text | - | - | yes | yes |
| Client.IsNavigateToHomeOnBack | Boolean | - | Navigation | yes | yes |
| Client.LastURL | Text | - | - | yes | yes |
| Client.Notes_IsSynched | Boolean | - | Notes | yes | yes |
| Client.Notifications_IsSynched | Boolean | - | Notifications | yes | yes |
| Client.Notifications_LastChecked | Date Time | - | Notifications | yes | yes |
| Client.PhotobookCarousel_SelectedSpeed | Photobook_Speed Identifier | - | PhotobookCarousel | yes | yes |
| Client.Username | Text | - | - | yes | yes |

## Structures of UBTConnect that the flow names

- **Sync_SiteProperties**: UpdatesFeed_MonthsToShow: Integer

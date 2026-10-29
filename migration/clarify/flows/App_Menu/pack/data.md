# Pack of UI flow App_Menu (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

## Server and service actions called

| Action | Kind | Module | Inputs | Outputs |
|---|---|---|---|---|
| Get_UI_UpdateItems_UnreadCount_All | ref-service | Connect_Updates_CS | - | UnreadCount: Integer |
| RequestPhotoUpdate | own-server | UBTConnect | - | Out_IsSuccess: Boolean |

## Server actions of UBTConnect (full)
## RequestPhotoUpdate (action, folder Menu)
- inputs: -
- outputs: Out_IsSuccess: Boolean
```
call-server Member_RequestPhotoUpdate_Service()
call-server BackOfficeNotificationUpdateRequest(BONotificationNavigationInputParameters={ ChangeRequestId: Member_RequestPhotoUpdate_Service.Out_ChangeRequestId }, Country=Member_RequestPhotoUpdate_Service.Out_Directory_UserCurrent.Directory_UserCurrent_Geography.Country_Name, CountryCode=Member_RequestPhotoUpdate_Service.Out_Directory_UserCurrent.Directory_UserCurrent_Geography.Country_Code, FirstName=Member_RequestPhotoUpdate_Service.Out_Directory_UserCurrent.FirstName, LastName=Member_RequestPhotoUpdate_Service.Out_Directory_UserCurrent.LastName, Locality=Member_RequestPhotoUpdate_Service.Out_Directory_UserCurrent.Directory_UserCurrent_Geography.Locality_Name, LocalityId=Member_RequestPhotoUpdate_Service.Out_Directory_UserCurrent.Directory_UserCurrent_Geography.Locality_Id) as BackOfficeNotificationUpdateRequest_Wrapper
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## Entity actions called (local entities)


## Local entities of UBTConnect that the flow names


## Client variables

| Variable | Type | Default | Folder | Read | Written |
|---|---|---|---|---|---|
| Client.App_PIN_BiometricEnabled | Boolean | True | App_PIN | yes | yes |
| Client.App_Policies_HasPolicyToAccept | Boolean | - | App_Policies | yes | yes |
| Client.App_Policies_RedirectURL | Text | - | App_Policies | yes | yes |
| Client.Directory_Updates_UnreadCount | Integer | - | Directory_Updates | yes | yes |
| Client.Directory_Updates_UnreadCount_CheckFrequency_Minut | Integer | 5 | Directory_Updates | yes |  |
| Client.Directory_Updates_UnreadCount_LastCheck | Date Time | - | Directory_Updates | yes | yes |
| Client.IsNavigateToHomeOnBack | Boolean | - | Navigation | yes | yes |

## Structures of UBTConnect that the flow names

- **Member**: Id: Long Integer; HouseholderId: Text; Name: Text; Lastname: Text; MaidenName: Text; DateOfBirth: Date; IsDeceased: Boolean; DeceasedDate: Date; Avatar: SignedURL; Email: Text; DisplayTitle: Text; DisplayDescription: Text; HasEmail: Boolean; HasMobilephone: Boolean; IsDisplayAge: Boolean; LastUpdated: Date Time; ExtraDetails: DetailByType List; IsDisabled: Boolean
- **SignedURL**: LowResolution: Text; MediumResolution: Text; HighResolution: Text
- **UI_ListMenuOption**: Id: Text; IconId: UBT_Icons2 Identifier; Label: Text; LabelDescription: Text; useSwitch: Boolean; SwitchValue: Boolean; IconRight: UBT_Icons2 Identifier = Entities.UBT_Icons2.ChevronRight; IconRightText: Text; IconRightLoading: Boolean; HideIconRight: Boolean; IsLoading: Boolean
- **UI_MenuSection**: SectionTitle: Text; HasSeparator: Boolean = True; MenuOptions: UI_ListMenuOption List

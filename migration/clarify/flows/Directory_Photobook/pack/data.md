# Pack of UI flow Directory_Photobook (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

## Server and service actions called

| Action | Kind | Module | Inputs | Outputs |
|---|---|---|---|---|
| GetImageCaptions_Photobook | ref-service | Connect_Household_CS | In_HouseholdId: Long Integer (mandatory) | PhotobookCaption: Text |
| GetPhotobookHouseholds | ref-service | Connect_Household_CS | In_LocalityId: Long Integer (mandatory) | Out_Households: UI_PhotobookHousehold List |

## Entity actions called (local entities)


## Local entities of UBTConnect that the flow names

- **Photobook_Speed** (IStaticEntity): Id: Integer; Label: Text; Order: Integer

## Client variables

| Variable | Type | Default | Folder | Read | Written |
|---|---|---|---|---|---|
| Client.App_PIN_BiometricEnabled | Boolean | True | App_PIN | yes |  |
| Client.App_Policies_HasPolicyToAccept | Boolean | - | App_Policies | yes |  |
| Client.App_Policies_RedirectURL | Text | - | App_Policies | yes | yes |
| Client.IsNavigateToHomeOnBack | Boolean | - | Navigation | yes | yes |
| Client.PhotobookCarousel_SelectedSpeed | Photobook_Speed Identifier | - | PhotobookCarousel | yes | yes |

## Structures of UBTConnect that the flow names

- **AutoplaySettings**: IsEnabled: Boolean; IsTemporarilyPaused: Boolean; Speed: Photobook_Speed Identifier = Entities.Photobook_Speed.EightSeconds
- **CarouselPreloadedHouseholds**: CarouselHouseholdItem: Household, SwipeAction Record List
- **SelectedHousehold**: Id: Long Integer; Position: Integer

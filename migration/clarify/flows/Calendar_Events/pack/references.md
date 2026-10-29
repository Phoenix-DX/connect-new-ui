# Pack of UI flow Calendar_Events (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

## Referenced blocks (other modules) used by the flow

Logic of these blocks is not in the dump. 'TST file' is the compiled code on TST (`python3 migration/clarify/tools/tst_source.py show <file>`), when the survey has it.

| Block | Module | Flow | Inputs | Events | TST file |
|---|---|---|---|---|---|
| CacheControl | UBTConnect_Utils | CacheControl | CacheTypeId: Connect_CacheType Identifier (mandatory); CacheKey: Text (mandatory); TimeToLiveSeconds: Integer = 7200; Timeout: Integer = 10 | OnCacheHit(Object: Object (mandatory)); OnNonCacheHit() | `UBTConnect_Utils.CacheControl.CacheControl.mvc.js` |
| CustomContainer | UBTConnectLibrary | BasePatterns | ExtendedClasses: Text; Options: ContainerOptions | Clicked() | `UBTConnectLibrary.BasePatterns.CustomContainer.mvc.js` |
| EventCard | Connect2_OrbitMobile_MUI | LDM_Blocks | - | CallPhoneEventCard(PhoneCallInfo: Text (mandatory)); EventClicked(Event_EventHostId: Long Integer (mandatory); Event_EventId: Long Integer (mandatory)); HouseholdClicked(Event_HouseholdId: Long Integer (mandatory); Event_HouseholdName: Text (mandatory); Event_CurrentRowNumber: Integer (mandatory); Event_Length: Integer (mandatory); Event_EventHostId: Long Integer (mandatory); Event_EventId: Long Integer (mandatory); Event_RecordDisabled: Boolean (mandatory); Event_IsHosting: Boolean (mandatory); Event_IsHouseholdDisplayed: Boolean (mandatory); Event_HouseholdIdList: Text (mandatory)); OnClick_Message(Event_ContactPopupData: Text; Event_CountryName: Text (mandatory)); OnClick_PhoneCall(Event_PhoneCallInfo: Text (mandatory)) | `Connect2_OrbitMobile_MUI.LDM_Blocks.EventCard.mvc.js` |
| EventCard | UBTConnectLibrary | ConnectPatterns | InDate: Date (mandatory); In_HeaderTextColorId: UBT_Color Identifier (mandatory); In_HeaderBackgroundColorId: UBT_Color Identifier (mandatory); In_HeaderIconId: UBT_Icons2 Identifier (mandatory); In_HeaderLabel: Text (mandatory); In_ShowPastLabel: Boolean | OnClickEvent() | `UBTConnectLibrary.ConnectPatterns.EventCard.mvc.js` |

## Referenced client actions called

| Action | Module | Folder | Inputs | Outputs |
|---|---|---|---|---|
| AssignFromObject | NavigationHandler | Preloading | ToObjectRef: Object (mandatory); ObjectValue: Object (mandatory) | AssignedObjectRef: Object |
| ListSort | (System) | - | List: Generic Record List (mandatory); By: Generic Type (mandatory); Ascending: Boolean = True | - |
| PutCacheableObject | MemoryClientCache | MemoryCache | MemoryCacheTypeId: MemoryCacheType Identifier (mandatory); CacheKey: Text (mandatory); Object: Object (mandatory); CacheTimeToLiveSeconds: Integer (mandatory) | - |

## Static entity records named by the flow (Entities.<Entity>.<Record>)

- **Connect_CacheType** (UBTConnect_Utils): records used: MyCalendarEvents
  - MyCalendarEvents: Id="MyCalendarEvents"
- **Type_MyCalendarEventSource** (Connect2_MyCalendar_CS): records used: Assemble, LDM, Orbit, UserCreated
  - Assemble: Id="event-assemble"
  - LDM: Id="event-ldm"
  - Orbit: Id="event-orbit"
  - UserCreated: Id="event-user"
- **UBT_Color** (UBTConnectLibrary): records used: BlueDark, BlueDarkGradientLinear, BlueDarker, CyanDarkGradientLinear, Neutral0, Neutral3, Peach, PeachDarkGradientLinear, PeachDarker, Primary, PurpleDark, PurpleDarkGradientLinear, PurpleDarker
  - BlueDark: Color="blue-dark", IsActive=True, IsBrand=False, IsExtended=True, IsNeutral=False, IsSemantic=False, Order=48
  - BlueDarker: Color="blue-darker", IsActive=True, IsBrand=False, IsExtended=True, IsNeutral=False, IsSemantic=False, Order=49
  - BlueDarkGradientLinear: Color="blue-dark-linear-gradient", IsActive=True, IsBrand=False, IsExtended=True, IsNeutral=False, IsSemantic=False, Order=77
  - CyanDarkGradientLinear: Color="cyan-dark-linear-gradient", IsActive=True, IsBrand=False, IsExtended=True, IsNeutral=False, IsSemantic=False, Order=75
  - Neutral0: Color="neutral-0", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=19
  - Neutral3: Color="neutral-3", IsActive=True, IsBrand=False, IsExtended=False, IsNeutral=True, IsSemantic=False, Order=22
  - Peach: Color="peach", IsActive=True, IsBrand=False, IsExtended=True, IsNeutral=False, IsSemantic=False, Order=6
  - PeachDarker: Color="peach-darker", IsActive=True, IsBrand=False, IsExtended=True, IsNeutral=False, IsSemantic=False, Order=55
  - PeachDarkGradientLinear: Color="peach-dark-linear-gradient", IsActive=True, IsBrand=False, IsExtended=True, IsNeutral=False, IsSemantic=False, Order=78
  - Primary: Color="primary", IsActive=True, IsBrand=True, IsExtended=False, IsNeutral=False, IsSemantic=False, Order=1
  - PurpleDark: Color="purple-dark", IsActive=True, IsBrand=False, IsExtended=True, IsNeutral=False, IsSemantic=False, Order=42
  - PurpleDarker: Color="purple-darker", IsActive=True, IsBrand=False, IsExtended=True, IsNeutral=False, IsSemantic=False, Order=43
  - PurpleDarkGradientLinear: Color="purple-dark-linear-gradient", IsActive=True, IsBrand=False, IsExtended=True, IsNeutral=False, IsSemantic=False, Order=76
- **UBT_Icons2** (UBTConnectLibrary): records used: AccountCircleFill, Assemble, LDM, ListAlt, Orbit
  - AccountCircleFill: Id="connect-icon-account_circle_fill", Is_Active=True, Label="Account Circle Fill"
  - Assemble: Id="connect-icon-assemble", Is_Active=True, Label="Assemble"
  - LDM: Id="connect-icon-ldm", Is_Active=True, Label="LDM"
  - ListAlt: Id="connect-icon-list_alt", Is_Active=True, Label="List Alt"
  - Orbit: Id="connect-icon-orbit", Is_Active=True, Label="Orbit"
- **UBT_Shape** (UBTConnectLibrary): records used: Medium
  - Medium: Id="medium", Order=3
- **UBT_Size** (UBTConnectLibrary): records used: Small
  - Small: Id="s", Order=4

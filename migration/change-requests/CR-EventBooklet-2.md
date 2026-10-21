# CR-EventBooklet-2: OSUI Dropdown client API — DropdownClear / DropdownClearValidation / DropdownTogglePopup, DropdownAPI.Close and UBTConnect_Utils DropdownTags_CloseOtherOnClick

- Status: applied
- Raised by: EventBooklet, 2026-10-16
- Block: `OutSystemsUI_2_23.Interaction.DropdownTags` → `app/src/shared/osui/DropdownTags/` (and `src/shared/osui/lib` client actions), `UBTConnect_Utils` client action → `app/src/shared/UBTConnect_Utils/lib`
- Other routes using it (catalog/blocks.md): DropdownTags: EventBooklet only; the DropdownSearch provider it shares: AssembleEvents (filters)
- Related question: EventBooklet Q4

## Evidence
- No capture (no-capture.json). `migration/screens/EventBooklet/analysis/sources/Connect2_OrbitMobile_MUI.Orbit_Blocks.PopUp_OrbitBookletFilters.mvc.js`:
  OnInitialized_Dropdowns :863-901 (`DropdownTogglePopup(DropdownWidgetId, False)`), OnChange_DropdownSearch_Roles :902-968
  (`DropdownClear(DropdownWidgetId, True)`, `DropdownClearValidation`), OnHandle_ResetFilters :1134-1223 (both on
  DropdownTags_Localities and DropdownTags_Countries), ResetCheckboxes :1330-1400 (both on DropdownTags_Roles), OnReady
  :1224-1247 (`UBTConnect_Utils.DropdownTags_CloseOtherOnClick`).
- `migration/screens/*/analysis/sources/raw/UBTConnect_Utils.controller.js:1462-` DropdownTags_CloseOtherOnClick JS: a
  capture-phase click listener on every `.osui-dropdown-tags` closes the others with
  `OutSystems.OSUI.Patterns.DropdownAPI.Close(name)`.
- `app/src/shared/osui/DropdownTags/DropdownTags.tsx`: the provider is private to the component (no registry by widget
  id / name, no clear, toggle or close API).

## Expected change
A registry of the Dropdown providers by widget id and by `name` (UniqueId), and the OSUI client actions on it:
DropdownClear(WidgetId, SilentOnChangedEvent), DropdownClearValidation(WidgetId), DropdownTogglePopup(WidgetId,
IsToOpen), DropdownAPI.Close(name); then UBTConnect_Utils DropdownTags_CloseOtherOnClick.

## Workaround in the route until applied
No UI part: `PopUp_OrbitBookletFilters.tsx` mounts a dropdown again (React key) where the original calls DropdownClear
(it then shows its cleared starting selection); DropdownClearValidation, DropdownTogglePopup and
DropdownTags_CloseOtherOnClick are no-ops (EventBooklet Q4 → A).

## Resolution (foundation owner)
Set `- Status: applied` above when done.
- Change (F17, 2026-10-16):
  - `app/src/shared/osui/DropdownSearch/provider.ts`: public `clear(silent)` (U:20075-20077, Virtual Select
    `reset(false, silent)`), `close()` (U:20078-20082), `togglePopup(isEnabled)` (U:20160-20165, ShowDropboxAsPopup default
    true U:20197, redraw on change) and `validation(isValid, message)` (U:20166-20178 with _addErrorMessage U:19927-19938).
  - `app/src/shared/osui/lib/actions.ts`: Dropdown registry by unique id (`name`) and widget id (DropdownAPI.Create /
    Dispose, GetDropdownById → FindInMap OSUI:3420-3436) and the client actions `dropdownClear` (CT:8015-8131),
    `dropdownClearValidation` (CT:8132-8234), `dropdownTogglePopup` (CT:10387-10500), `dropdownClose` (DropdownAPI.Close
    OSUI:13790-13800); errors → Success False (CreateApiResponse).
  - DropdownSearch and DropdownTags register their provider on mount (rendering and events unchanged; Profile /
    AssembleEvents users untouched).
  - `app/src/shared/UBTConnect_Utils/lib/actions.ts`: `dropdownTags_CloseOtherOnClick` (UBTConnect_Utils.controller.js
    :1462-1516; capture-phase listeners, never removed, as compiled).
  - `PopUp_OrbitBookletFilters.tsx`: remount workaround removed; DropdownClear + DropdownClearValidation in ResetCheckboxes,
    OnHandle_ResetFilters and OnChange_DropdownSearch_Roles (its DropdownWidgetId); Initialized of the three DropdownTags →
    OnInitialized_Dropdowns → DropdownTogglePopup(id, False) (PF :863-901); OnReady → DropdownTags_CloseOtherOnClick.
  - Tests: `osui/lib/actions.test.ts` (registry, Success False), `osui/DropdownTags/DropdownTags.test.tsx` (clear without
    OnChanged, TogglePopup from Initialized redraws once, ClearValidation, close-other).
- Regression parity run on: Profile, OrbitLanding, EventDetail (all 0, 2026-10-16). EventBooklet (no capture): headless
  smoke test, filters popup: dropbox below the field (not a popup), a click on another dropdown closes the open one,
  Reset clears the three dropdowns, the cross closes the popup, no console errors.

# DropdownSearch

OutSystems UI: `OutSystemsUI_2_23.Interaction.DropdownSearch` · pack
`migration/blocks/OutSystemsUI_2_23.Interaction.DropdownSearch.md` · compiled source
`migration/blocks/sources/OutSystemsUI_2_23.Interaction.DropdownSearch.mvc.js` · stack `osui:DropdownSearch` = same
provider as the original: Virtual Select v1.3.0, vendored from TST in `vendor/` (SOURCE.md, ADR-5).

| Input             | Type                       | Prop                | Default                        |
| ----------------- | -------------------------- | ------------------- | ------------------------------ |
| OptionsList       | DropdownOption List        | `optionsList`       | `[]`                           |
| StartingSelection | DropdownOption List        | `startingSelection` | `[]`                           |
| Prompt            | Text                       | `prompt`            | `'Select...'` (`''` → default) |
| OptionalConfigs   | DropdownOptionalConfigsRec | `optionalConfigs`   | record default                 |
| ExtendedClass     | Text                       | `extendedClass`     | `''`                           |

Events `Initialized(DropdownSearchId)` → `onInitialized`, `OnChanged(DropdownId, SelectedOptionList)` → `onOnChanged`
(id = the block root id, OSUI `widgetId`; both raised asynchronously as OSUI does). Structures in `../lib/structures.ts`.

Ported: OnInitialize (InternalConfigs with the block defaults), OnReady (DropdownCreate + Initialize), OnParametersChanged
(one changeProperty per changed input, compiled order), OnDestroy, OnSelectHandler / InitializedHandler. Provider glue
`provider.ts` from `migration/runtime-sources/OutSystemsUI_2_23.OutSystemsUI.js` (AbstractVirtualSelect, the Search
mode, their configs; line refs inside). The vscomp / osui-dropdown CSS is the original OSUI stylesheet.

## Captured variants

None: the pattern was never rendered in a capture (Profile only). Built from the compiled view: story `CompiledView`
(Profile's locality dropdown inputs, mock names). A fake provider plus a smoke test of the vendored script
(`vendor/index.test.ts`) test the behaviour.

## Not captured / not settled

- `ele` is the element itself, not `'#' + id` (Virtual Select accepts both); the element has no generated id.
- IsMobileDevice uses the app's user-agent OS rule (`platform/device` osToken) instead of OSUI `GetOperatingSystem`.
- Not ported (no counterpart in the app): the OSUI body-click listener that toggles on open/close, the
  `has-accessible-features` class on the dropbox, the Edge mouseup fix.
- JSON Deserialize of an empty selection is taken as an empty list (OutSystems behaviour for "" not checked).

## Dropdown client API (CR-EventBooklet-2)

The block registers its provider under its unique id (`name`) and widget id (`id`), as DropdownAPI.Create / Dispose do;
`../lib/actions.ts` ports the client actions on it: `dropdownClear(WidgetId, SilentOnChangedEvent)`,
`dropdownClearValidation(WidgetId)`, `dropdownTogglePopup(WidgetId, EnablePopup)` and `dropdownClose(id)`
(DropdownAPI.Close). Provider methods `clear`, `close`, `togglePopup` (ShowDropboxAsPopup, default true) and `validation`
in `provider.ts` (AbstractVirtualSelect U:20075-20178). Rendering and events of this block are unchanged.

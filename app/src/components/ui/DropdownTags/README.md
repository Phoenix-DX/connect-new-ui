# DropdownTags (OutSystems UI)

OutSystems UI: `OutSystemsUI_2_23.Interaction.DropdownTags` · pack
`migration/blocks/OutSystemsUI_2_23.Interaction.DropdownTags.md` · compiled source
`migration/blocks/sources/OutSystemsUI_2_23.Interaction.DropdownTags.mvc.js`

| Input             | Type                        | Prop                | Default        |
| ----------------- | --------------------------- | ------------------- | -------------- |
| OptionsList       | DropdownOption List         | `optionsList`       | `[]`           |
| StartingSelection | DropdownOption List         | `startingSelection` | `[]`           |
| Prompt            | Text                        | `prompt`            | `'Select...'`  |
| OptionalConfigs   | DropdownTagsOptionalConfigs | `optionalConfigs`   | record default |
| ExtendedClass     | Text                        | `extendedClass`     | `''`           |

Events `Initialized(DropdownTagsId)` → `onInitialized`, `OnChanged(DropdownId, SelectedOptionList)` → `onOnChanged`.

Stack decision: the original provider, Virtual Select 1.3.0, already vendored in `../DropdownSearch/vendor/` (not
copied). The block reuses `DropdownSearchProvider` with variant `tags` (`provider.ts`: Tags getProviderConfig adds
`multiple`, `showValueAsTags`, the multiple aria label) and DropdownSearch's InternalConfigs / JSON helpers.

## Captured variants

None: never rendered in a capture (EventBooklet). Built from the compiled view; tests cover the provider
configuration and OnChanged.

## Dropdown client API (CR-EventBooklet-2)

The React component registers itself like DropdownSearch (unique id = `name`, widget id = `id`).
The OSUI client actions DropdownClear, DropdownClearValidation, DropdownTogglePopup and DropdownAPI.Close reach it
through `../lib/actions.ts`.
UBTConnect_Utils DropdownTags_CloseOtherOnClick (`../../UBTConnect_Utils/lib/actions.ts`) closes the other
`.osui-dropdown-tags` on a click. Tests: clear without OnChanged, TogglePopup(False) from Initialized (one redraw), ClearValidation, close-other.

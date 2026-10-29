# FilterSheet_OptionList_Item

OutSystems: `UBTConnect.App_CommonBlocks_Filter.FilterSheet_OptionList_Item` · pack
`migration/blocks/UBTConnect.App_CommonBlocks_Filter.FilterSheet_OptionList_Item.md`

| Input                      | Type                              | Prop                      | Default |
| -------------------------- | --------------------------------- | ------------------------- | ------- |
| Filter_Common_Control_List | Record Filter_Common_Control_List | `filterCommonControlList` | `{}`    |
| ShowHeader                 | Boolean                           | `showHeader`              | `false` |
| ForceUpdate                | Boolean                           | `forceUpdate`             | `false` |

Events: `OnChange(SelectedIds, Title)` → `onOnChange`, `OnBack` → `onOnBack`, `Event_Input_OnReady(Id)` →
`onEventInputOnReady`. A disabled option opens App_Subscription_ShowUpgradePopUp: the caller gives it as
`onShowUpgradePopUp` (FilterSheet passes on the `showUpgradePopUp` of `platform/feedback/dialogs`). Children:
CustomContainer "Selections", header IconText (ShowHeader), Input (search, debounce 300), no-results texts or
SelectionOption_List.

## Captured variants (1 distinct; 1 tested)

| Capture | Source                 |
| ------- | ---------------------- |
| v1      | CountryDetails/default |

## Search

- Action_DefineOptions (FilterSheet_OptionList_Item.mvc.js:721-739) passes DisplayText and the search text through
  JSUtils_String_RemoveAccents (UBTJavaScriptUtils.controller.js:3078-3084, ported in `lib/jsUtils.ts`). The compare
  ignores case, so a search for "Sao" finds "São Paulo".

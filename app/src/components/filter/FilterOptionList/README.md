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

## Not settled (question)

- JSUtils_String_RemoveAccents (UBTJavaScriptUtils): its JavaScript is in no captured source. The search compares the
  texts as they are, with no accent removal, until the source is available.

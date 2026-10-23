# FilterSheet

OutSystems: `UBTConnect.App_CommonBlocks_Filter.FilterSheet` · pack
`migration/blocks/UBTConnect.App_CommonBlocks_Filter.FilterSheet.md`

| Input           | Type                         | Prop              | Default |
| --------------- | ---------------------------- | ----------------- | ------- |
| In_Options      | Record Filter_Common_Options | `inOptions`       | `{}`    |
| In_StartFilter  | Record Filter_Common         | `inStartFilter`   | `{}`    |
| ExtendedClasses | Text                         | `extendedClasses` | `''`    |

(In_StartFilter is an input of the compiled model, not listed by the pack.) Events: `Loaded(ShowSubscriptionOnClick)`
→ `onLoaded`, `SheetInitialized(Id)` → `onSheetInitialized`, `ApplyFilters(…7 values, :2330)` → `onApplyFilters`.
Children: UBTConnectLibrary BottomSheet (title "Sort & Filter" / "<SheetTitle> Filter"), SkeletonSection with the option
lists, FilterSheet_OptionChoice_Item and flat SelectionOption_Lists, or FilterSheet_OptionList_Item; footer Clear /
Apply; CacheControl_AllCountries, CacheControl_AllLocalities, CacheControl_UserInfo_Wrapper (only for enabled place
filters); BackNavigationHandler (closes an open sheet and prevents the navigation).

The React component ports the controller action by action (`createActions`, controller :1201-2900) on a mutable copy of
the block variables; a render follows each event. Helpers `app_CommonFilter_DefineOptionNames` / `_CheckCountry` are in
`../lib/actions.ts`, `Choice` / `Connect_Subscription_Plan` in `../lib/staticEntities.ts`.

## Captured variants (3 distinct; 3 tested)

| Capture | Source                     |
| ------- | -------------------------- |
| v1      | CountryDetails/default     |
| v2      | Notes/default              |
| v3      | Updates_SingleList/default |

## Not settled

- `Connect_Subscription_Plan.Free` value: not in the TST static-entity export and never captured ('Free' assumed;
  `Global` matches the captured Menu value). Question to the user / TST data.
- Quirks kept 1:1:
  - Localities take `HasSorting.Order`.
  - A start filter with LocalitiesIds appends `CountryIds.Current` (the first country id) for each.
  - The flat-list title reads `In_Options.Extra_OptionFlatLists.Current` (first item).
- Action_SetSingleFilter runs after each list is defined. When the country list is built before the locality list
  arrives, the sheet is single-filter for a moment. In this case, the sheet stays on the country list (same flow as the
  original).
- Input_ClearString uses the `clearStringAction` the Input block puts on its element.

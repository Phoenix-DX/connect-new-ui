# FilterSheet container

OutSystems: `UBTConnect.App_CommonBlocks_Filter.FilterSheet` · component `components/filter/FilterSheet`

`FilterSheetContainer` is the filter sheet that the list screens render: CountryDetails, Notes (`Notes_FilterSheet`),
Search and Updates_SingleList (`Directory_Updates_FilterSheet`). It takes the inputs and events of FilterSheet
(`FilterSheetContainerProps`) and renders the props-only component with:

- the cache blocks of the place filters: CacheControl_AllCountries (HasCountries), CacheControl_AllLocalities
  (HasLocalities) and CacheControl_UserInfo_Wrapper (either). Their Results become the props `countries`, `localities`
  and `userSubscription`;
- the BackNavigationHandler block (`platform/navigation`) with the sheet's handler;
- `showUpgradePopUp` (`platform/feedback/dialogs/subscription`) for a disabled option.

The DOM is the captured one: the cache blocks and the BackNavigationHandler stay inside the FilterSheet block, after the
bottom sheet. Plan v2 §2.3 criterion 2: three data sources, three events, and the sheet is over 200 lines.

Test: `FilterSheetContainer.test.tsx` (the recorded country list through the cache blocks, and the order of the nested
blocks).

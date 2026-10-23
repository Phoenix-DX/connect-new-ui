# Directory_LegendBottomSheet

OutSystems: `UBTConnect.Directory_Locality.Directory_LegendBottomSheet` · pack `migration/blocks/UBTConnect.Directory_Locality.Directory_LegendBottomSheet.md`

| Input          | Type    | Prop             | Default |
| -------------- | ------- | ---------------- | ------- |
| ShowLocalities | Boolean | `showLocalities` | `true`  |

Events: SheetInitialized(Id) → `onSheetInitialized(id)` (the screen opens the sheet with BottomSheetOpen(Id)).
Placeholders: none.

Slot: `preventBackNavigation`, a component with the prop `onBackNavigationPrevented`. A component does not import
`platform/` (rule 4), so the page gives the NavigationHandler PreventBackNavigation block of `platform/navigation`.
CountryList and CountryDetails give `preventBackNavigation={PreventBackNavigation}`. Without the slot, the open
sheet does not prevent a back navigation.

## Captured variants (3 tested)

| Capture | Source                                         | What it shows                                  |
| ------- | ---------------------------------------------- | ---------------------------------------------- |
| v1      | pack variant 1, CountryDetails/default         | wrapper only                                   |
| v2      | `CountryDetails/analysis/dom/default.html` [0] | closed sheet, Supper Meetings line             |
| v3      | `CountryList/analysis/dom/default.html` [0]    | closed sheet, Localities line (ShowLocalities) |

## Behaviour (not captured, tested)

- OnToggle stores IsOpened; while open, the PreventBackNavigation slot is rendered and a back navigation runs
  BottomSheetOnClose: BottomSheetOnToggle(False), then OutSystems UI BottomSheetClose(BottomSheetId). The component
  test uses a stand-in slot; `pages/CountryList/CountryList.test.tsx` runs the real block with the back queue.
- The open state markup is the ConnectPatterns BottomSheet's (its own captures).

# FilterSheet_Icon

OutSystems: `UBTConnect.App_CommonBlocks_Filter.FilterSheet_Icon` · pack
`migration/blocks/UBTConnect.App_CommonBlocks_Filter.FilterSheet_Icon.md`

| Input                   | Type    | Prop                      | Default |
| ----------------------- | ------- | ------------------------- | ------- |
| HaveFiltersApplied      | Boolean | `haveFiltersApplied`      | `false` |
| BottomSheetId           | Text    | `bottomSheetId`           | `''`    |
| isLoaded                | Boolean | `isLoaded`                | `false` |
| ShowSubscriptionOnClick | Boolean | `showSubscriptionOnClick` | `false` |

Events: none. Click (when loaded): `showUpgradePopUp` (shell, App_Subscription_ShowUpgradePopUp) or `bottomSheetOpen`.

## Captured variants (1 distinct; 1 tested)

| Capture | Source         |
| ------- | -------------- |
| v1      | Search/default |

## Not captured

- HaveFiltersApplied: icon `connect-icon-error_fill` / `icon-non-standard-14` from the original CSS (no capture).

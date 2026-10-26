# BaseLayout_UpdatedOSUI

OutSystems: `Connect2_LegacyShared.Layout.BaseLayout_UpdatedOSUI` · pack
`migration/blocks/Connect2_LegacyShared.Layout.BaseLayout_UpdatedOSUI.md`

| Input               | Type                    | Prop                  | Default                    |
| ------------------- | ----------------------- | --------------------- | -------------------------- |
| UsePullToRefresh    | Boolean                 | `usePullToRefresh`    | `false`                    |
| HideHeaderOnScroll  | Boolean                 | `hideHeaderOnScroll`  | `false`                    |
| MenuBehavior        | Text (SideMenuBehavior) | `menuBehavior`        | `SideMenuBehavior.Overlay` |
| ExtendedClass       | Text                    | `extendedClass`       | `''`                       |
| CustomClass         | Text                    | `customClass`         | `''`                       |
| IsHeaderTransparent | Boolean                 | `isHeaderTransparent` | `false`                    |

Events: `OnPullToRefresh` → `onOnPullToRefresh`. Placeholders: `Navigation`, `HeaderLeft`, `HeaderSearch`, `Title`,
`HeaderRight`, `HeaderContent`, `Content`, `Bottom`, `CommonUI` → same names in lowerCamelCase (`commonUI`).

**CommonUI / bottom bar:** like Layout_HomePage, the layout has no CommonUI_InsideLayout or BottomBarMenu of its own.
The screen passes them through Layout.Layout (`BottomBar`, `CommonUI_Elements`). The stories do the same with the real
blocks.

## Captured variants (3 tested, 11 captured over 6 screens)

The layout's own markup only varies with UsePullToRefresh; the other captured states differ in placeholder content.
Captures are full-depth copies from `migration/screens/*/analysis/dom/` (the pack prints them depth-limited).

| Capture | Source                | What it shows                                                      |
| ------- | --------------------- | ------------------------------------------------------------------ |
| v1      | ConnectShare/default  | back arrow, title, header right, content, CommonUI                 |
| v2      | MessageList/loading   | PullToRefresh, icons in header right, bottom bar, CommonUI         |
| v3      | MessageDetail/loading | empty title, spinner, bottom bar, CommonUI + BackNavigationHandler |

## Not captured / not ported

- HideHeaderOnScroll (class + sticky observer), transparent header, other MenuBehavior values: compiled view only,
  tested; only `aside-overlay` (Overlay) is a known SideMenuBehavior value.
- OnReady LayoutReady / SetLang and OnDestroy LayoutDestroy (OutSystemsUI.js) are not ported, as in Layout_HomePage;
  AddFavicon's result (the `shortcut icon` link) is static in `index.html`.

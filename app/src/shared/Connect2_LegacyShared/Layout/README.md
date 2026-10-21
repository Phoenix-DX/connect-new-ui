# Layout

OutSystems: `Connect2_LegacyShared.Layout.Layout` · pack `migration/blocks/Connect2_LegacyShared.Layout.Layout.md`

| Input               | Type    | Prop                  | Default |
| ------------------- | ------- | --------------------- | ------- |
| UsePullToRefresh    | Boolean | `usePullToRefresh`    | `false` |
| ExtendedClasses     | Text    | `extendedClasses`     | `''`    |
| CustomClass         | Text    | `customClass`         | `''`    |
| IsHeaderTransparent | Boolean | `isHeaderTransparent` | `false` |

Events: `OnPullToRefresh` → `onOnPullToRefresh`.

Placeholders: `Menu`, `HeaderLeft`, `Title`, `HeaderRight`, `HeaderContent`, `Content`, `BottomBar`,
`CommonUI_Elements`. The props are `menu`, `headerLeft`, `title`, `headerRight`, `headerContent`, `content`,
`bottomBar`, `commonUIElements`.

The screen passes its BottomBarMenu in `bottomBar` and its CommonUI_InsideLayout in `commonUIElements`
(Layout_HomePage approach).

The React component renders LayoutRuntime_Top and BaseLayout_UpdatedOSUI:
- ExtendedClass is `"connect-theme " + ExtendedClasses`.
- Each placeholder is in its own container.
- HeaderRight has `display-flex align-items-center`.
- HeaderSearch is empty.

## Captured variants (1 tested)

| Capture | Source               | What it shows                                                     |
| ------- | -------------------- | ----------------------------------------------------------------- |
| v1      | ConnectShare/default | wrapper; the test also checks the inner BaseLayout against its v1 |

## Lifecycle (Connect2_LegacyShared.controller.js, migration/runtime-sources)

- OnInitialize runs `SetThemeClassToBody(ThemeClass.Connect)` (Layout.Layout.mvc.js:415). In the React app,
  `shell/bodyTheme.ts` (CR-W3A-1, applied) removes the MediaHub, Connect and Orbit classes from the body and adds
  `connect-theme`. When the layout leaves, nothing removes `connect-theme` (no OnDestroy).
- OnReady (:384-389) runs `IOSMetaTags` and `IOSPreventSwipe` (`../lib/actions.ts`). Tested.
  - On iOS only (`navigator.platform` iPhone / iPad / iPod, GetIOSPlatform), `IOSMetaTags` sets the viewport meta
    that blocks zoom.
  - On iOS only, `IOSPreventSwipe` adds a touchstart listener on `#reactContainer`. The listener cancels touches
    within 20 px of the screen edges.
  - On other platforms, both actions do nothing.
- OutSystems UI `LayoutReady`: not ported.

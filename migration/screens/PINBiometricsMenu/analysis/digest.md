# Digest: PINBiometricsMenu

- Path: `/UBTConnect/PINBiometricsMenu`
- Viewport at capture: {'width': 390, 'height': 844, 'dpr': 1}
- body class: `phone portrait osx is-ltr`; body style: `--header-size-content: 0px; --footer-height: 0px; --viewport-height: 844px;`
- PWA: manifest `/UBTConnect/moduleservices/pwa/manifest`, service workers []
- Screen file: `UBTConnect.App_Menu.PINBiometricsMenu.mvc.js`

## Rendered block tree
```
Layouts.Layout_DetailPage
  LayoutRuntime_NavigationHandler.LayoutRuntime_Top
  ConnectPatterns.Icon
  App_Menu.Menu_List
    BasePatterns.CustomContainer
      ConnectPatterns.SkeletonSection
        BasePatterns.CustomContainer
          BasePatterns.Columns_Three
            Adaptive.Columns3
              ConnectPatterns.Icon
              BasePatterns.CustomText
                ConnectPatterns.IconInline_Internal
              ConnectPatterns.SkeletonSection
                ConnectPatterns.Icon
```

# Part 1: screen and rendered blocks (spec these in detail)

## `UBTConnect.App_Menu.PINBiometricsMenu.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| MenuOptionList | local | RecordList | `OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.UI_ListMenuOptionList())` |
| ChangePinName | local | Text | `"Change PIN"` |
| BiometricLoginName | local | Text | `"Biometric Login"` |
- Lifecycle handlers: Initialize
- Client actions / event handlers: `screenEvent_OnInitialize`, `onClick_MenuOption`
- Navigation: `/UBTConnect/PINChange`()
- JavaScript nodes: `UBTConnect.App_Menu.PINBiometricsMenu.mvc$controller.ScreenEvent_OnInitialize.IsViewRestoredFromCacheJS`
- Static entities / flags: `uBT_Icons2.password`, `uBT_Icons2.fingerprint`
- Client variables: getApp_PIN_BiometricEnabled, setApp_PIN_BiometricEnabled

## `UBTConnectLibrary.Layouts.Layout_DetailPage.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| ScrollElement | local | Object | `null` |
| ScrollEvent | local | Object | `null` |
| ShadowTimeout | local | Object | `null` |
| In_AlignTitleLeft | input | Boolean | `false` |
| In_IsPrimaryColor | input | Boolean | `true` |
| In_ExtendedClass | input | Text | `""` |
| In_EnableAccessibilityFeatures | input | Boolean | `false` |
| In_InitializeNavigationHandler | input | Boolean | `true` |
| In_IsHideTitle | input | Boolean | `false` |
- Lifecycle handlers: Ready, Destroy
- Client actions / event handlers: `onClick_BackNavigation`, `setScrollEvents`, `onDestroy`, `skipToContentOnClick`, `onReady`, `onReadyEvent`
- navigateBack calls: 1
- Static entities / flags: `uBT_Icons.arrowLeftAlt`, `uBT_Color.inherit`, `uBT_IconSize.base_24`
- Candidate static strings: `Skip to Content (Press Enter)`

## `NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| DestroyCallback | local | Object | `null` |
- Lifecycle handlers: Initialize, Destroy
- Client actions / event handlers: `onInitialize`, `onDestroy`
- JavaScript nodes: `NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top.mvc$controller.OnInitialize.InitializeQueueJS`, `NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top.mvc$controller.OnDestroy.ExecuteDestroyCallbackJS`

## `UBTConnectLibrary.ConnectPatterns.Icon.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| MainContainerClass | local | Text | `"ubt-icon"` |
| In_IconId | input | Text | `""` |
| In_ColorId | input | Text | `UBTConnectLibraryModel.staticEntities.uBT_Color.neutral9` |
| In_SizeId | input | Text | `""` |
| In_Visible | input | Boolean | `true` |
| In_ExtendedClasses | input | Text | `""` |
- Client actions / event handlers: `click`
- Static entities / flags: `uBT_Color.neutral9`

## `UBTConnect.App_Menu.Menu_List.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| In_MenuSection | input | Record | `OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.UI_MenuSectionRec())` |
- Client actions / event handlers: `onClick_MenuOption`
- Static entities / flags: `uBT_Color.neutral0`, `uBT_Size.base`, `uBT_Size.small`, `uBT_Color.neutral8`, `uBT_FontSize.extraSmall`, `uBT_FontWeight.semiBold`, `uBT_Color.neutral3`, `uBT_ColumnBehaviour.expandMiddle`, `uBT_VerticalAlign.center`, `uBT_Color.neutral9`, `uBT_IconsSize.base_24`, `uBT_FontWeight.regular`, `uBT_Color.neutral6`, `uBT_Color.neutral7`

## `UBTConnectLibrary.BasePatterns.CustomContainer.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| MainContainerClass | local | Text | `"ubt-custom-container"` |
| ExtendedClasses | input | Text | `""` |
| Options | input | Record | `OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.ContainerOptionsRec())` |
- Lifecycle handlers: Ready, ParametersChanged
- Client actions / event handlers: `onReady`, `onParametersChanged`, `clicked`

## `UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| In_IsLoading | input | Boolean | `false` |
| In_ExtendedClass | input | Text | `""` |
| In_IsActiveWhileLoading | input | Boolean | `false` |
- Lifecycle handlers: Ready, ParametersChanged
- Client actions / event handlers: `onReady`, `screenEvent_OnParametersChanged`
- JavaScript nodes: `UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$controller.ScreenEvent_OnParametersChanged.Delayed_SetInertJS`

## `UBTConnectLibrary.BasePatterns.Columns_Three.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| MainContainerClass | local | Text | `"ubt-columns"` |
| ExtendedClasses | input | Text | `""` |
| ColumnOptions | input | Record | `OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.ColumnOptionsRec())` |
- Lifecycle handlers: Ready
- Client actions / event handlers: `onReady`

## `OutSystemsUI_2_23.Adaptive.Columns3.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| GutterSize | input | Text | `OutSystemsUI_2_23Model.staticEntities.gutterSize.base` |
| TabletBehavior | input | Text | `OutSystemsUI_2_23Model.staticEntities.breakColumns.none` |
| PhoneBehavior | input | Text | `OutSystemsUI_2_23Model.staticEntities.breakColumns.none` |
| ExtendedClass | input | Text | `""` |
- Static entities / flags: `gutterSize.base`, `breakColumns.none`

## `UBTConnectLibrary.BasePatterns.CustomText.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| In_Text | input | Text | `""` |
| In_TextOptions | input | Record | `OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.TextOptionsRec())` |
| In_PaddingOptions | input | Record | `OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.SpacingOptionsRec())` |
| In_HighlightWords | input | Text | `""` |
| In_HighlightOptions | input | Record | `OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.TextOptionsRec())` |
| ExtendedClasses | input | Text | `""` |
| FitContent | input | Boolean | `false` |
| InJustifyText | input | Boolean | `false` |
| NoWrap | input | Boolean | `false` |
| InlineIcon | input | Record | `OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.InlineIconRec())` |
- Client actions / event handlers: `clicked`

## `UBTConnectLibrary.ConnectPatterns.IconInline_Internal.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| InlineIcon | input | Record | `OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.InlineIconRec())` |

# Part 2: sources of blocks NOT rendered in the captured states

These come from referenced blocks or from earlier captures. Use them to describe other states/branches (empty, error, alternative versions), marking them as not visually captured.


## Captured calls
- 3. `ActionSync_Info_GetMain` (200) at 5569 ms
- 6. `ServiceAPIFetchData_CacheableMapEntities` (200) at 7937 ms
- 7. `ServiceAPIFetchData_CacheableHouseholds` (200) at 10681 ms
- plus 4 call(s) outside this screen, listed in calls.md

## Not yet captured (see coverage.md)
- `App_Common_Blocks.SectionSeparator`
- `ConnectPatterns.HighlightSearch`
- `ConnectPatterns.IconSVG`
- `ConnectPatterns.IconText`


# Digest: CommunityBusinessDetails_CoomingSoon

- Path: `/UBTConnect/CommunityBusinessDetails_CoomingSoon`
- Viewport at capture: {'width': 390, 'height': 844, 'dpr': 1}
- body class: `phone portrait osx is-ltr`; body style: `--header-size-content: 0px; --footer-height: 0px; --viewport-height: 844px;`
- PWA: manifest `/UBTConnect/moduleservices/pwa/manifest`, service workers []
- Screen file: `UBTConnect.zDEV_Directory_CommunityBusinessBlocks.CommunityBusinessDetails_CoomingSoon.mvc.js`

## Rendered block tree
```
Layouts.Layout_MainPages
  LayoutRuntime_NavigationHandler.LayoutRuntime_Top
  BasePatterns.Columns_Two
    Adaptive.Columns2
  BasePatterns.Columns_Two
    Adaptive.Columns2
      ConnectPatterns.StaticInput
        ConnectPatterns.Icon
        ConnectPatterns.TextEllipsis
  Content.BlankSlate
```

# Part 1: screen and rendered blocks (spec these in detail)

## `UBTConnect.zDEV_Directory_CommunityBusinessBlocks.CommunityBusinessDetails_CoomingSoon.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| In_CommunityBusinessId | input | LongInteger | `OS.DataTypes.LongInteger.defaultValue` |

## `UBTConnectLibrary.Layouts.Layout_MainPages.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| IsHeaderScrolled | local | Boolean | `false` |
| ScrollElement | local | Object | `null` |
| ScrollEvent | local | Object | `null` |
| ShadowScrollEvent | local | Object | `null` |
| ShadowTimeout | local | Object | `null` |
| UsePullToRefresh | input | Boolean | `false` |
| ExtendedClass | input | Text | `""` |
| EnableAccessibilityFeatures | input | Boolean | `false` |
| isGrayBackground | input | Boolean | `false` |
| AddHeaderGap | input | Boolean | `true` |
- Lifecycle handlers: Ready, Destroy
- Client actions / event handlers: `skipToContentOnClick`, `onDestroy`, `onReady`, `onHandle_OnHeaderScrolledTrigger`, `onHandle_OnPullToRefreshTrigger`, `setScrollEvents`, `onHeaderScrolled`, `onPullToRefresh`
- JavaScript nodes: `UBTConnectLibrary.Layouts.Layout_MainPages.mvc$controller.SetScrollEvents.GetCallbackFunctionJS`
- Static entities / flags: `uBT_ColumnBehaviour.reduceLast`, `uBT_Size.base`, `uBT_VerticalAlign.center`, `uBT_Size.none`, `uBT_Color.primaryGradientRadial`
- Candidate static strings: `Skip to Content (Press Enter)` | `OnHandle_OnHeaderScrolledTrigger`

## `NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| DestroyCallback | local | Object | `null` |
- Lifecycle handlers: Initialize, Destroy
- Client actions / event handlers: `onInitialize`, `onDestroy`
- JavaScript nodes: `NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top.mvc$controller.OnInitialize.InitializeQueueJS`, `NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top.mvc$controller.OnDestroy.ExecuteDestroyCallbackJS`

## `UBTConnectLibrary.BasePatterns.Columns_Two.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| MainContainerClass | local | Text | `"ubt-columns"` |
| ColumnOptions | input | Record | `OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.ColumnOptionsRec())` |
| ExtendedClasses | input | Text | `""` |
- Lifecycle handlers: Ready
- Client actions / event handlers: `onReady`

## `OutSystemsUI_2_23.Adaptive.Columns2.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| GutterSize | input | Text | `OutSystemsUI_2_23Model.staticEntities.gutterSize.base` |
| TabletBehavior | input | Text | `OutSystemsUI_2_23Model.staticEntities.breakColumns.none` |
| PhoneBehavior | input | Text | `OutSystemsUI_2_23Model.staticEntities.breakColumns.none` |
| ExtendedClass | input | Text | `""` |
- Static entities / flags: `gutterSize.base`, `breakColumns.none`

## `UBTConnectLibrary.ConnectPatterns.StaticInput.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| In_Prompt | input | Text | `"Search for households, members or places."` |
| In_ExtendedClasses | input | Text | `""` |
- Client actions / event handlers: `click_Input`
- Static entities / flags: `uBT_Color.inherit`, `uBT_Icons.search`, `uBT_IconSize.medium_20`

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

## `UBTConnectLibrary.ConnectPatterns.TextEllipsis.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| MainContainerClass | local | Text | `"ubt-text-ellipsis"` |
| Text | input | Text | `""` |
| ExtendedClasses | input | Text | `""` |

## `OutSystemsUI_2_23.Content.BlankSlate.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| FullHeight | input | Boolean | `true` |
| ExtendedClass | input | Text | `""` |

# Part 2: sources of blocks NOT rendered in the captured states

These come from referenced blocks or from earlier captures. Use them to describe other states/branches (empty, error, alternative versions), marking them as not visually captured.


## Captured calls
- 3. `ActionSync_Info_GetMain` (200) at 6184 ms
- 6. `ServiceAPIFetchData_CacheableMapEntities` (200) at 8969 ms
- 7. `ServiceAPIFetchData_CacheableHouseholds` (200) at 12214 ms
- plus 4 call(s) outside this screen, listed in calls.md

## Not yet captured (see coverage.md)
- `ConnectPatterns.IconSVG`
- `Private.PullToRefresh`


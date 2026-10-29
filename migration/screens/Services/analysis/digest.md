# Digest: Services

- Path: `/UBTConnect/Services`
- Viewport at capture: {'width': 390, 'height': 844, 'dpr': 1}
- body class: `phone portrait osx is-ltr`; body style: `--header-size-content: 0px; --footer-height: 0px; --viewport-height: 844px;`
- PWA: manifest `/UBTConnect/moduleservices/pwa/manifest`, service workers []
- Screen file: `UBTConnect.App_Services.Services.mvc.js`

## Rendered block tree
```
Layouts.Layout_DetailPage
  LayoutRuntime_NavigationHandler.LayoutRuntime_Top
  ConnectPatterns.Icon
  ConnectPatterns.SkeletonSection
    Sortable.SortableList
      BasePatterns.CustomContainer
        BasePatterns.CustomText
          ConnectPatterns.IconInline_Internal
        BasePatterns.CustomContainer
          BasePatterns.Columns_Two
            Adaptive.Columns2
              Sortable.SortableList_Draggable
                BasePatterns.Columns_Two
                  Adaptive.Columns2
                    BasePatterns.CustomContainer
                      ConnectPatterns.Icon
                    ConnectPatterns.IconText
                      BasePatterns.Columns_Two
                        Adaptive.Columns2
                          ConnectPatterns.Icon
                          BasePatterns.CustomText
                            ConnectPatterns.IconInline_Internal
        BasePatterns.CustomContainer
          BasePatterns.Columns_Two
            Adaptive.Columns2
              Sortable.SortableList_Draggable
                BasePatterns.Columns_Two
                  Adaptive.Columns2
                    BasePatterns.CustomContainer
                      ConnectPatterns.Icon
                    ConnectPatterns.IconText
                      BasePatterns.Columns_Two
                        Adaptive.Columns2
                          ConnectPatterns.Icon
                          BasePatterns.CustomText
                            ConnectPatterns.IconInline_Internal
        BasePatterns.CustomContainer
          BasePatterns.Columns_Two
            Adaptive.Columns2
              Sortable.SortableList_Draggable
                BasePatterns.Columns_Two
                  Adaptive.Columns2
                    BasePatterns.CustomContainer
                      ConnectPatterns.Icon
                    ConnectPatterns.IconText
                      BasePatterns.Columns_Two
                        Adaptive.Columns2
                          ConnectPatterns.Icon
                          BasePatterns.CustomText
                            ConnectPatterns.IconInline_Internal
        BasePatterns.CustomContainer
          BasePatterns.Columns_Two
            Adaptive.Columns2
              Sortable.SortableList_Draggable
                BasePatterns.Columns_Two
                  Adaptive.Columns2
                    BasePatterns.CustomContainer
                      ConnectPatterns.Icon
                    ConnectPatterns.IconText
                      BasePatterns.Columns_Two
                        Adaptive.Columns2
                          ConnectPatterns.Icon
                          BasePatterns.CustomText
                            ConnectPatterns.IconInline_Internal
              ConnectPatterns.Icon
        BasePatterns.CustomContainer
          BasePatterns.Columns_Two
            Adaptive.Columns2
              Sortable.SortableList_Draggable
                BasePatterns.Columns_Two
                  Adaptive.Columns2
                    BasePatterns.CustomContainer
                      ConnectPatterns.Icon
                    ConnectPatterns.IconText
                      BasePatterns.Columns_Two
                        Adaptive.Columns2
                          ConnectPatterns.Icon
                          BasePatterns.CustomText
                            ConnectPatterns.IconInline_Internal
              ConnectPatterns.Icon
        BasePatterns.CustomContainer
          BasePatterns.Columns_Two
            Adaptive.Columns2
              Sortable.SortableList_Draggable
                BasePatterns.Columns_Two
                  Adaptive.Columns2
                    BasePatterns.CustomContainer
                      ConnectPatterns.Icon
                    ConnectPatterns.IconText
                      BasePatterns.Columns_Two
                        Adaptive.Columns2
                          ConnectPatterns.Icon
                          BasePatterns.CustomText
                            ConnectPatterns.IconInline_Internal
              ConnectPatterns.Icon
    App_Common_Blocks.SectionSeparator
      BasePatterns.CustomContainer
    Sortable.SortableList
      BasePatterns.CustomContainer
        BasePatterns.CustomText
          ConnectPatterns.IconInline_Internal
        Sortable.SortableList_Draggable
          BasePatterns.CustomContainer
            BasePatterns.Columns_Three
              Adaptive.Columns3
                BasePatterns.CustomContainer
                  ConnectPatterns.Icon
                ConnectPatterns.IconText
                  BasePatterns.Columns_Two
                    Adaptive.Columns2
                      ConnectPatterns.Icon
                        ConnectPatterns.IconSVG
                      BasePatterns.CustomText
                        ConnectPatterns.IconInline_Internal
                ConnectPatterns.Icon
        Sortable.SortableList_Draggable
          BasePatterns.CustomContainer
            BasePatterns.Columns_Three
              Adaptive.Columns3
                BasePatterns.CustomContainer
                  ConnectPatterns.Icon
                ConnectPatterns.IconText
                  BasePatterns.Columns_Two
                    Adaptive.Columns2
                      ConnectPatterns.Icon
                        ConnectPatterns.IconSVG
                      BasePatterns.CustomText
                        ConnectPatterns.IconInline_Internal
                ConnectPatterns.Icon
        Sortable.SortableList_Draggable
          BasePatterns.CustomContainer
            BasePatterns.Columns_Three
              Adaptive.Columns3
                BasePatterns.CustomContainer
                  ConnectPatterns.Icon
                ConnectPatterns.IconText
                  BasePatterns.Columns_Two
                    Adaptive.Columns2
                      ConnectPatterns.Icon
                        ConnectPatterns.IconSVG
                      BasePatterns.CustomText
                        ConnectPatterns.IconInline_Internal
                ConnectPatterns.Icon
  ConnectPatterns.FixedFooter
    BasePatterns.CustomContainer
      Utilities.ButtonLoading
        CW_Common.Button
          ConnectPatterns.Button
            ConnectPatterns.IconText
              BasePatterns.Columns_Two
                Adaptive.Columns2
                  ConnectPatterns.Icon
                  BasePatterns.CustomText
                    ConnectPatterns.IconInline_Internal
```

# Part 1: screen and rendered blocks (spec these in detail)

## `UBTConnect.App_Services.Services.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| AvailableServices | output | RecordList | `OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.Connect_ServicesList())` |
| CurrentServices | output | RecordList | `OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.Connect_ServicesConnect_Service_UserRecordList())` |
| isLoading | local | Boolean | `false` |
| ReferenceServices | local | RecordList | `OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.Connect_ServicesList())` |
| HasChanges | local | Boolean | `false` |
| GetServices | attribute | Record | `OS.DataTypes.ImmutableBase.getData(new GetServicesDataActRec())` |
- Data actions: `DataActionGetServices` → `screenservices/UBTConnect/App_Services/Services/DataActionGetServices`
- Server actions: `Service_ConnectServices_ChangeOrder_Bulk` → `screenservices/UBTConnect/App_Services/Services/ServiceAPIService_ConnectServices_ChangeOrder_Bulk`
- Client actions / event handlers: `onClick_SaveChanges`, `action_ChangeOrderLocal`, `onAfterFetch_GetServices`, `handler_SortableListOnDragEnd`
- Exceptions handled: NotRegisteredException, CommunicationException, UserException
- Static entities / flags: `uBT_Size.small`, `uBT_Size.base`, `uBT_Color.neutral10`, `uBT_FontSize.heading6`, `uBT_FontWeight.semiBold`, `uBT_Color.neutral4`, `uBT_ColumnBehaviour.reduceLast`, `uBT_ColumnBehaviour.reduceFirst`, `uBT_VerticalAlign.center`, `uBT_Color.neutral1`, `uBT_Size.extraSmall`, `uBT_Shape.rounded`, `uBT_IconsSize.nonStandard_14`, `uBT_Icons2.dragIndicator`, `uBT_Color.neutral6`, `uBT_FontSize.base`, `uBT_IconsSize.base_24`, `uBT_Icons2.cancelFill`, `uBT_Color.neutral7`, `uBT_ColumnBehaviour.expandMiddle`, `uBT_Icons2.addCircle`, `uBT_Color.primary`, `uBT_Color.neutral0`, `uBT_Shadow.extraSmallTop`, `uBT_MessageType.success`

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

## `UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| In_IsLoading | input | Boolean | `false` |
| In_ExtendedClass | input | Text | `""` |
| In_IsActiveWhileLoading | input | Boolean | `false` |
- Lifecycle handlers: Ready, ParametersChanged
- Client actions / event handlers: `onReady`, `screenEvent_OnParametersChanged`
- JavaScript nodes: `UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$controller.ScreenEvent_OnParametersChanged.Delayed_SetInertJS`

## `SortableJS.Sortable.SortableList.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| Group | input | Text | `""` |
| DenyLists | input | RecordList | `OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList())` |
| PreventDomMove | input | Boolean | `true` |
- Lifecycle handlers: Ready, ParametersChanged
- Client actions / event handlers: `onParametersChanged`, `handler`, `onReady`, `onDragEnd`
- JavaScript nodes: `SortableJS.Sortable.SortableList.mvc$controller.OnReady.GetObjJS`
- Candidate static strings: `Handler`

## `UBTConnectLibrary.BasePatterns.CustomContainer.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| MainContainerClass | local | Text | `"ubt-custom-container"` |
| ExtendedClasses | input | Text | `""` |
| Options | input | Record | `OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.ContainerOptionsRec())` |
- Lifecycle handlers: Ready, ParametersChanged
- Client actions / event handlers: `onReady`, `onParametersChanged`, `clicked`

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

## `SortableJS.Sortable.SortableList_Draggable.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| Id | input | Text | `""` |
| UseCustomDragHandle | input | Boolean | `false` |
- Lifecycle handlers: Ready, ParametersChanged
- Client actions / event handlers: `onReady`, `onParametersChanged`
- JavaScript nodes: `SortableJS.Sortable.SortableList_Draggable.mvc$controller.OnReady.SetItemIdOnCustomDragHandleJS`

## `UBTConnectLibrary.ConnectPatterns.IconText.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| IsIconOnRight | input | Boolean | `false` |
| Text | input | Text | `""` |
| TextOptions | input | Record | `OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.TextOptionsRec())` |
| SpacingSize | input | Text | `UBTConnectLibraryModel.staticEntities.uBT_Size.extraSmall` |
| ExtendedClasses | input | Text | `""` |
| SubtextOptions | input | Record | `OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.TextOptionsRec())` |
| In_Subtext | input | Text | `""` |
| In_JustifyText | input | Boolean | `false` |
- Client actions / event handlers: `clicked`
- Static entities / flags: `uBT_Size.extraSmall`, `uBT_ColumnBehaviour.reduceFirst`, `uBT_ColumnBehaviour.reduceLast`, `uBT_VerticalAlign.center`, `uBT_FlexDirection.rowReverse`

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

## `UBTConnectLibrary.ConnectPatterns.IconSVG.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| In_IconId | input | Text | `""` |
- Static entities / flags: `uBT_Icons.sVG_OneSchoolGlobal`, `uBT_Icons.sVG_PinLock`, `uBT_Icons.sVG_PinHouse`, `uBT_Icons.sVG_PinMember`, `uBT_Icons.sVG_PinOneSchool`, `uBT_Icons.sVG_HR100`, `uBT_Icons.sVG_ElGusto`, `uBT_Icons.sVG_CommunityTradelink`, `uBT_Icons.sVG_PinLocality`, `uBT_Icons.sVG_PinCountry`, `uBT_Icons.sVG_CommunityHouseholds`, `uBT_Icons.sVG_CommunityLocalities`, `uBT_Icons.sVG_CommunityCountries`, `uBT_Icons.sVG_CommunityMembers`
- Images: `img/UBTConnectLibrary.OneSchoolGlobal.svg`, `img/UBTConnectLibrary.Pin_Lock.svg`, `img/UBTConnectLibrary.Pin_House.svg`, `img/UBTConnectLibrary.Pin_Member.svg`, `img/UBTConnectLibrary.Pin_OneSchool.svg`, `img/UBTConnectLibrary.HR100.svg`, `img/UBTConnectLibrary.ElGusto.svg`, `img/UBTConnectLibrary.CommunityTradelink.svg`, `img/UBTConnectLibrary.Pin_Locality.svg`, `img/UBTConnectLibrary.Pin_Country.svg`, `img/UBTConnectLibrary.CommunityHouseholds.svg`, `img/UBTConnectLibrary.CommunityLocalities.svg`, `img/UBTConnectLibrary.CommunityCountries.svg`, `img/UBTConnectLibrary.CommunityMembers.svg`

## `UBTConnectLibrary.ConnectPatterns.FixedFooter.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| MainContainerClass | local | Text | `"ubt-fixed-footer"` |
| useBottomBar | input | Boolean | `false` |
| ExpectedFooterHeight | input | Text | `""` |
| ContentContainerId | input | Text | `""` |
- Lifecycle handlers: Ready
- Client actions / event handlers: `onReady`

## `OutSystemsUI_2_23.Utilities.ButtonLoading.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| Internal_Configs | local | Record | `OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.ButtonLoading_InternalConfigRec())` |
| IsLoading | input | Boolean | `false` |
| ShowLabelOnLoading | input | Boolean | `false` |
| ExtendedClass | input | Text | `""` |
- Lifecycle handlers: Initialize, Ready, Destroy, ParametersChanged
- Client actions / event handlers: `initializedHandler`, `onDestroy`, `onParametersChanged`, `registerCallbacks`, `onInitialize`, `onReady`, `initialized`
- JavaScript nodes: `OutSystemsUI_2_23.Utilities.ButtonLoading.mvc$controller.RegisterCallbacks.GetCallbackHandlersJS`
- Static entities / flags: `registeredCallbackEvents.initialized`, `logType.general`
- Candidate static strings: `InitializedHandler`

## `UBTConnect_Utils.CW_Common.Button.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| ButtonExtendedClass | input | Text | `""` |
| IsDisabled | input | Boolean | `false` |
| IsIconOnRight | input | Boolean | `false` |
| ButtonText | input | Text | `""` |
| IconText_SpacingSize | input | Text | `UBTConnect_UtilsModel.staticEntities.uBT_Size.extraSmall` |
| TextExtendedClasses | input | Text | `""` |
| ButtonOptions | input | Record | `OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.ButtonOptionsRec())` |
| IconId | input | Text | `""` |
| HideIcon | input | Boolean | `false` |
- Client actions / event handlers: `buttonOnClick`
- Static entities / flags: `uBT_Size.extraSmall`

## `UBTConnectLibrary.ConnectPatterns.Button.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| MainContainerClass | local | Text | `"ubt-button"` |
| In_ButtonOptions | input | Record | `OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.ButtonOptionsRec())` |
| In_ExtendedClass | input | Text | `""` |
| In_IsDisabled | input | Boolean | `false` |
- Client actions / event handlers: `event_OnClick`

# Part 2: sources of blocks NOT rendered in the captured states

These come from referenced blocks or from earlier captures. Use them to describe other states/branches (empty, error, alternative versions), marking them as not visually captured.


## Captured calls
- 3. `DataActionGetServices` (200) at 11867 ms
- 4. `ActionSync_Info_GetMain` (200) at 19631 ms
- 5. `ActionGetUserInformation` (200) at 20011 ms
- 7. `ServiceAPIFetchData_CacheableMapEntities` (200) at 20571 ms
- 8. `ServiceAPIFetchData_CacheableHouseholds` (200) at 24695 ms
- plus 3 call(s) outside this screen, listed in calls.md

## Not yet captured (see coverage.md)
- `ConnectPatterns.HighlightSearch`


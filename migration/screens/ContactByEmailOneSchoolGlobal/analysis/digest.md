# Digest: ContactByEmailOneSchoolGlobal

- Path: `/UBTConnect/ContactByEmailOneSchoolGlobal`
- Viewport at capture: {'width': 390, 'height': 844, 'dpr': 1}
- body class: `phone portrait osx is-ltr`; body style: `--header-size-content: 0px; --footer-height: 0px; --viewport-height: 844px;`
- PWA: manifest `/UBTConnect/moduleservices/pwa/manifest`, service workers []
- Screen file: `UBTConnect.ContactFlow.ContactByEmailOneSchoolGlobal.mvc.js`

## Rendered block tree
```
Layouts.Layout_DetailPage
  LayoutRuntime_NavigationHandler.LayoutRuntime_Top
  ConnectPatterns.Icon
  ContactFlow.ContactByEmailForm
    BasePatterns.CustomContainer
      BasePatterns.CustomContainer
        BasePatterns.CustomContainer
          BasePatterns.CustomContainer
          BasePatterns.CustomContainer
      BasePatterns.CustomContainer
        ConnectPatterns.DynamicTextArea
        ConnectPatterns.InputCounter
          BasePatterns.CustomContainer
      ConnectPatterns.TextArea_WithCounter
        ConnectPatterns.InputCounter
          BasePatterns.CustomContainer
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

## `UBTConnect.ContactFlow.ContactByEmailOneSchoolGlobal.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| IsLoading | local | Boolean | `false` |
| ContactByEmailForm | local | Record | `OS.DataTypes.ImmutableBase.getData(new Connect_Communication_CSModel.UI_ContactByEmailFormRec())` |
| In_EmailTo | input | Text | `""` |
| In_ContactName | input | Text | `""` |
- Server actions: `SendContactMemberEmail` → `screenservices/UBTConnect/ContactFlow/ContactByEmailOneSchoolGlobal/ServiceAPISendContactMemberEmail`
- Lifecycle handlers: Initialize
- Client actions / event handlers: `screenEvent_OnInitialize`, `handler_SubmitForm`
- navigateBack calls: 1
- JavaScript nodes: `UBTConnect.ContactFlow.ContactByEmailOneSchoolGlobal.mvc$controller.Handler_SubmitForm.ScheduleFeedbackMessageAfterTransitionJS`
- Feedback messages: `$parameters.Message, 1)`
- Static entities / flags: `uBT_Color.neutral2`, `uBT_Size.extraSmall`, `uBT_Size.base`, `uBT_Color.neutral10`, `uBT_FontSize.base`, `uBT_FontWeight.bold`, `uBT_Color.neutral7`, `uBT_FontSize.extraSmall`, `applicationEvents_Directory.emailHousehold`
- Images: `img/UBTConnectLibrary.OneSchoolGlobal.svg`

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

## `UBTConnect.ContactFlow.ContactByEmailForm.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| Subject | local | Text | `""` |
| Message | local | Text | `""` |
| IsLoading | input | Boolean | `false` |
| In_SubjectPlaceholder | input | Text | `""` |
| In_MessagePlaceholder | input | Text | `""` |
| In_Subject | input | Text | `""` |
| In_UseDynamicTextAreaSubject | input | Boolean | `false` |
| In_MessageLabel | input | Text | `"Message"` |
- Lifecycle handlers: Initialize
- Client actions / event handlers: `onClick_SubmitForm`, `onInitialize`, `onBackNavigation_PreventNavigation`, `event_SubmitForm`
- Static entities / flags: `uBT_Size.base`, `uBT_Size.small`, `uBT_FontSize.small`, `uBT_Color.neutral0`, `uBT_Shadow.extraSmallTop`
- Candidate static strings: `Subject`

## `UBTConnectLibrary.BasePatterns.CustomContainer.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| MainContainerClass | local | Text | `"ubt-custom-container"` |
| ExtendedClasses | input | Text | `""` |
| Options | input | Record | `OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.ContainerOptionsRec())` |
- Lifecycle handlers: Ready, ParametersChanged
- Client actions / event handlers: `onReady`, `onParametersChanged`, `clicked`

## `UBTConnectLibrary.ConnectPatterns.DynamicTextArea.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| In_Text | input | Text | `""` |
| In_IsBounded | input | Boolean | `false` |
- Lifecycle handlers: Ready, ParametersChanged
- Client actions / event handlers: `action_SetDataReplicatedValue`
- JavaScript nodes: `UBTConnectLibrary.ConnectPatterns.DynamicTextArea.mvc$controller.Action_SetDataReplicatedValue.SetValueJS`

## `UBTConnectLibrary.ConnectPatterns.InputCounter.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| MaxLength | local | Integer | `0` |
| CurrentLength | local | Integer | `0` |
| In_InputId | input | Text | `""` |
| In_InitialLength | input | Integer | `0` |
- Lifecycle handlers: Initialize, Ready, ParametersChanged
- Client actions / event handlers: `onInitialize`, `onParametersChanged`, `onReady`, `setCurrentLength`
- JavaScript nodes: `UBTConnectLibrary.ConnectPatterns.InputCounter.mvc$controller.OnReady.LimitMaxLenthJS`
- Static entities / flags: `uBT_Color.neutral7`, `uBT_FontSize.doubleExtraSmall`, `uBT_FontWeight.semiBold`
- Candidate static strings: `SetCurrentLength`

## `UBTConnectLibrary.ConnectPatterns.TextArea_WithCounter.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| InputId | local | Text | `""` |
| MainContainerClass | local | Text | `"ubt-input-with-counter"` |
| In_InitialLength | input | Integer | `0` |
- Lifecycle handlers: Ready
- Client actions / event handlers: `onReady`
- JavaScript nodes: `UBTConnectLibrary.ConnectPatterns.TextArea_WithCounter.mvc$controller.OnReady.GetInputIdJS`

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
- 3. `ActionSync_Info_GetMain` (200) at 5961 ms
- 4. `ActionGetUserInformation` (200) at 6297 ms
- 6. `ServiceAPIFetchData_CacheableMapEntities` (200) at 8948 ms
- 7. `ServiceAPIFetchData_CacheableHouseholds` (200) at 11228 ms
- plus 3 call(s) outside this screen, listed in calls.md

## Not yet captured (see coverage.md)
- `App_Common_Blocks_PopupDialogs.Dialog_Navigation`
- `ConnectPatterns.HighlightSearch`
- `ConnectPatterns.IconSVG`


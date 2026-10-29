# Digest: ContactByEmailMember

- Path: `/UBTConnect/ContactByEmailMember`
- Viewport at capture: {'width': 390, 'height': 844, 'dpr': 1}
- body class: `phone portrait osx is-ltr`; body style: `--header-size-content: 0px; --footer-height: 0px; --viewport-height: 844px;`
- PWA: manifest `/UBTConnect/moduleservices/pwa/manifest`, service workers []
- Screen file: `UBTConnect.ContactFlow.ContactByEmailMember.mvc.js`

## Rendered block tree
```
Layouts.Layout_DetailPage
  LayoutRuntime_NavigationHandler.LayoutRuntime_Top
  ConnectPatterns.Icon
  ContactFlow.ContactByEmailForm
    BasePatterns.CustomContainer
      BasePatterns.CustomContainer
        BasePatterns.CustomContainer
          BasePatterns.Columns_Three
            Adaptive.Columns3
              BasePatterns.CustomContainer
                CW_Image.UBT_LazyImage
                  ConnectPatterns.SkeletonSection
                    ConnectPatterns.LazyImage
                      ConnectPatterns.SkeletonSection
                        BasePatterns.CustomContainer
                        BasePatterns.CustomContainer
                          ConnectPatterns.Icon
              BasePatterns.CustomText
                ConnectPatterns.IconInline_Internal
              ConnectPatterns.IconText
                BasePatterns.Columns_Two
                  Adaptive.Columns2
                    ConnectPatterns.Icon
                    BasePatterns.CustomText
                      ConnectPatterns.IconInline_Internal
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

## `UBTConnect.ContactFlow.ContactByEmailMember.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| IsLoading | local | Boolean | `false` |
| ContactByEmailForm | local | Record | `OS.DataTypes.ImmutableBase.getData(new Connect_Communication_CSModel.UI_ContactByEmailFormRec())` |
| EmailEvent | local | Record | `OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.EmailHouseholdEventRec())` |
| In_AvatarURL | input | Text | `""` |
| In_ContactName | input | Text | `""` |
| In_ContactSurname | input | Text | `""` |
| In_ContactLocality | input | Text | `""` |
| In_ContactCountry | input | Text | `""` |
| In_EmailTo | input | Text | `""` |
| In_EntityType | input | Text | `""` |
| In_EntityId | input | LongInteger | `OS.DataTypes.LongInteger.defaultValue` |
| In_LDMEventDate | input | Date | `OS.DataTypes.DateTime.defaultValue` |
| In_LDMEventLocality | input | Text | `""` |
| In_AuditEventId | input | Text | `UBTConnectModel.staticEntities.applicationEvents_Directory.emailHousehold` |
| In_OrbitEventTitle | input | Text | `""` |
| In_OrbitEventId | input | LongInteger | `OS.DataTypes.LongInteger.defaultValue` |
| In_OrbitMilestoneId | input | Text | `""` |
| In_IsHousehold | input | Boolean | `false` |
| In_HouseholdHeaderName | input | Text | `""` |
- Server actions: `SendContactMemberEmail` → `screenservices/UBTConnect/ContactFlow/ContactByEmailMember/ServiceAPISendContactMemberEmail`
- Lifecycle handlers: Initialize
- Client actions / event handlers: `handler_SubmitForm`, `screenEvent_OnInitialize`
- navigateBack calls: 1
- JavaScript nodes: `UBTConnect.ContactFlow.ContactByEmailMember.mvc$controller.Handler_SubmitForm.ScheduleFeedbackMessageAfterTransitionJS`
- Feedback messages: `$parameters.Message, 1)`
- Static entities / flags: `applicationEvents_Directory.emailHousehold`, `uBT_Size.extraSmall`, `uBT_ColumnBehaviour.expandMiddle`, `uBT_Size.base`, `connect_Entity.member`, `uBT_ImageSize.base_52`, `uBT_ImageSize.square`, `uBT_FontSize.base`, `uBT_FontWeight.semiBold`, `uBT_Color.neutral7`, `uBT_FontSize.extraSmall`, `uBT_Icons2.homePIn`, `uBT_IconsSize.nonStandard_14`, `orbitApplicationEvent.emailHost`

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

## `UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| LocalFallbackoptions | local | Record | `OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.AvatarImageFallbackoptionsRec())` |
| LocalFallbackPadding | local | Record | `OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.SpacingOptionsRec())` |
| LocalBorderRadius | local | Text | `UBTConnect_UtilsModel.staticEntities.uBT_Shape.circle` |
| LocalBorderColorId | local | Text | `""` |
| LocalBorderSizeId | local | Text | `""` |
| isFetched | local | Boolean | `false` |
| LocalImageSizeId | local | Text | `""` |
| LocalImageType | local | Text | `""` |
| LocalEntityId | local | Text | `""` |
| LocalImageURL | local | Text | `""` |
| ImageURL | input | Text | `""` |
| EntityId | input | Text | `""` |
| EntityType | input | Text | `""` |
| ImageSize | input | Record | `OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.LazyImageSizeRec())` |
| ExtendedClass | input | Text | `""` |
| In_BorderRadius | input | Text | `""` |
| In_HighRes | input | Boolean | `false` |
| HasErrorMessage | input | Boolean | `false` |
| In_ForceLoadingState | input | Boolean | `false` |
- Lifecycle handlers: Initialize, Ready, ParametersChanged
- Client actions / event handlers: `onInitialize`, `onReady`, `setLocalEntityId`, `onParametersChanged`
- Static entities / flags: `uBT_Shape.circle`, `connect_Entity.member`, `uBT_Color.cyanLightest`, `uBT_Color.cyanDarker`, `uBT_Size.none`, `uBT_Shape.none`, `uBT_Size.base`, `uBT_FontSize.display`, `uBT_ImageSize.extraSmall_32`, `uBT_FontSize.extraSmall`, `uBT_IconSize.medium_20`, `uBT_ImageSize.small_40`, `uBT_FontSize.small`, `uBT_IconSize.base_24`, `uBT_ImageSize.base_52`, `uBT_FontSize.base`, `uBT_IconSize.nonStandard_32`, `uBT_ImageSize.medium_60`, `uBT_FontSize.heading6`, `uBT_IconSize.display_36`, `uBT_ImageSize.large_65`, `uBT_FontSize.heading4`, `uBT_ImageSize.extraLarge_100`, `uBT_FontSize.heading2`, `uBT_IconSize.nonStandard_64`, `uBT_ImageSize.doubleExtraLarge_176`, `uBT_IconSize.nonStandard_108`, `uBT_ImageSize.fullHeight_100_Percent`, `uBT_ImageSize.maxHeight_100vh`, `uBT_ImageSize.fullWidth_100_Percent`

## `UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| In_IsLoading | input | Boolean | `false` |
| In_ExtendedClass | input | Text | `""` |
| In_IsActiveWhileLoading | input | Boolean | `false` |
- Lifecycle handlers: Ready, ParametersChanged
- Client actions / event handlers: `onReady`, `screenEvent_OnParametersChanged`
- JavaScript nodes: `UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$controller.ScreenEvent_OnParametersChanged.Delayed_SetInertJS`

## `UBTConnectLibrary.ConnectPatterns.LazyImage.mvc.js`
| variable | kind | type | default |
|---|---|---|---|
| isLoading | local | Boolean | `false` |
| Local_ImageURL | local | Text | `""` |
| Local_HasImage | local | Boolean | `false` |
| MainContainerClass | local | Text | `"ubt-lazy-image"` |
| isError | local | Boolean | `false` |
| DestroyCallback | local | Object | `null` |
| ImageURL | input | Text | `""` |
| In_ImageSize | input | Record | `OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.LazyImageSizeRec())` |
| FallbackOptions | input | Record | `OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.AvatarImageFallbackoptionsRec())` |
| FallbackPadding | input | Record | `OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.SpacingOptionsRec())` |
| In_BorderOptions | input | Record | `OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.ImageBorderOptionsRec())` |
| HasErrorMessage | input | Boolean | `false` |
| ExtendedClass | input | Text | `""` |
| In_ForceLoadingState | input | Boolean | `false` |
- Lifecycle handlers: Initialize, Ready, Destroy, ParametersChanged
- Client actions / event handlers: `actionDefineHasImage`, `onParametersChanged`, `onLoad`, `onReady`, `onError`, `onInitialize`, `onDestroy`
- JavaScript nodes: `UBTConnectLibrary.ConnectPatterns.LazyImage.mvc$controller.OnReady.SetupOnLoadJS`, `UBTConnectLibrary.ConnectPatterns.LazyImage.mvc$controller.OnInitialize.IsViewRestoredFromCacheJS`, `UBTConnectLibrary.ConnectPatterns.LazyImage.mvc$controller.OnDestroy.JavaScript1JS`
- Static entities / flags: `uBT_FontWeight.semiBold`, `uBT_Color.neutral7`, `uBT_FontSize.small`, `uBT_FontWeight.regular`, `uBT_Size.base`
- Candidate static strings: `OnLoad` | `OnError`

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

# Part 2: sources of blocks NOT rendered in the captured states

These come from referenced blocks or from earlier captures. Use them to describe other states/branches (empty, error, alternative versions), marking them as not visually captured.


## Captured calls
- 3. `ActionSync_Info_GetMain` (200) at 7277 ms
- 4. `ActionGetUserInformation` (200) at 7612 ms
- 6. `ServiceAPIFetchData_CacheableMapEntities` (200) at 10059 ms
- 7. `ServiceAPIFetchData_CacheableHouseholds` (200) at 12263 ms
- plus 3 call(s) outside this screen, listed in calls.md

## Not yet captured (see coverage.md)
- `App_Common_Blocks_PopupDialogs.Dialog_Navigation`
- `ConnectPatterns.DynamicTextArea`
- `ConnectPatterns.HighlightSearch`
- `ConnectPatterns.IconSVG`
- `Utilities.InlineSVG`


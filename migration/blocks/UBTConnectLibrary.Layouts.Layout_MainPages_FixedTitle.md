# UBTConnectLibrary.Layouts.Layout_MainPages_FixedTitle

- Kind: shared; build screens using it: Notes, Updates_SingleList
- Compiled source: `migration/screens/Notes/analysis/sources/pretty/UBTConnectLibrary.Layouts.Layout_MainPages_FixedTitle.mvc.js`
- Child blocks: NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top, OutSystemsUI_2_23.Private.PullToRefresh, UBTConnectLibrary.BasePatterns.Columns_Two (queue: -)

## Inputs

| Input | Type |
|---|---|
| UsePullToRefresh | Boolean |
| ExtendedClass | Text |
| EnableAccessibilityFeatures | Boolean |
| isGrayBackground | Boolean |

## Captured DOM variants (3 distinct, 6 instances)

### Variant 1: Notes/default (×3)

```html
<div class="OSBlockWidget" data-block="Layouts.Layout_MainPages_FixedTitle" id="$b1">
  <div class="OSBlockWidget" data-block="LayoutRuntime_NavigationHandler.LayoutRuntime_Top" id="b1-$b1"><!-- nested block: 0 nodes --></div>
  <div class="layout layout-side layout-native ios-bounce ubt-layout-main layout-sticky-title hide-header-on-scroll layout-gray-background" data-container="" id="b1-LayoutWrapper_Main">
    <a aria-label="Skip to Content (Press Enter)" class="skip-nav" data-link="" data-original-href="/UBTConnect/Notes" data-showskipcontent="false">
      Skip to Content (Press Enter)
    </a>
    <div class="main" data-container="">
      <div aria-hidden="true" class="sticky-observer" data-container=""></div>
      <header class="header" data-advancedhtml="" id="b1-Header" role="banner">
        <div class="header-top-title" data-container="" id="b1-HeaderTitle">
          <div class="header-content display-flex flex-direction-column justify-content-flex-start" data-container="">
            <div class="ubt-layout-main__title" data-container="">
              <div class="OSBlockWidget" data-block="BasePatterns.Columns_Two" id="b1-$b2"><!-- nested block: 25 nodes --></div>
            </div>
          </div>
        </div>
        <div class="header-top-search" data-container="" id="b1-HeaderSearch">
          <div class="header-content display-flex flex-direction-column justify-content-flex-start" data-container="">
            <div class="ubt-layout-main__search" data-container="">
              <div class="OSBlockWidget" data-block="BasePatterns.Columns_Two" id="b1-$b3"><!-- nested block: 22 nodes --></div>
            </div>
          </div>
        </div>
        <div class="header-top-content ph" id="b1-HeaderContent">
          <div class="OSBlockWidget" data-block="BasePatterns.CustomContainer" id="Filter_Pills"><!-- nested block: 29 nodes --></div>
        </div>
      </header>
      <div class="content" data-container="" id="b1-ContentWrapper">
        <div class="main-content ThemeGrid_Container" data-container="" id="b1-MainContentWrapper" role="main">
          <div class="content-middle" id="b1-Content">
            <div class="OSBlockWidget" data-block="Notes.NoteCard_List" id="$b8"><!-- nested block: 37 nodes --></div>
          </div>
        </div>
      </div>
      <footer class="content-bottom" data-advancedhtml="" role="contentinfo">
        <div class="footer ph" id="b1-Bottom">
          <div class="OSBlockWidget" data-block="App_Common.BottomBarMenu" id="$b9"><!-- nested block: 75 nodes --></div>
        </div>
      </footer>
    </div>
    <div class="offline-data-sync" data-container=""></div>
    <div id="b1-Placeholder_CommonUI_Inside_Layout">
      <div class="OSBlockWidget" data-block="App_Common.CommonUI_InsideLayout" id="$b10"><!-- nested block: 38 nodes --></div>
    </div>
  </div>
</div>
```

### Variant 2: Updates_SingleList/default (×1)

```html
<div class="OSBlockWidget" data-block="Layouts.Layout_MainPages_FixedTitle" id="$b1">
  <div class="OSBlockWidget" data-block="LayoutRuntime_NavigationHandler.LayoutRuntime_Top" id="b1-$b1"><!-- nested block: 0 nodes --></div>
  <div class="layout layout-side layout-native ios-bounce ubt-layout-main layout-sticky-title hide-header-on-scroll layout-gray-background" data-container="" id="b1-LayoutWrapper_Main">
    <a aria-label="Skip to Content (Press Enter)" class="skip-nav" data-link="" data-original-href="/UBTConnect/Updates_SingleList" data-showskipcontent="false">
      Skip to Content (Press Enter)
    </a>
    <div class="main" data-container="">
      <div aria-hidden="true" class="sticky-observer" data-container=""></div>
      <header class="header" data-advancedhtml="" id="b1-Header" role="banner">
        <div class="header-top-title" data-container="" id="b1-HeaderTitle">
          <div class="header-content display-flex flex-direction-column justify-content-flex-start" data-container="">
            <div class="ubt-layout-main__title" data-container="">
              <div class="OSBlockWidget" data-block="BasePatterns.Columns_Two" id="b1-$b2"><!-- nested block: 25 nodes --></div>
            </div>
          </div>
        </div>
        <div class="header-top-search" data-container="" id="b1-HeaderSearch">
          <div class="header-content display-flex flex-direction-column justify-content-flex-start" data-container="">
            <div class="ubt-layout-main__search" data-container="">
              <div class="OSBlockWidget" data-block="BasePatterns.Columns_Two" id="b1-$b3"><!-- nested block: 27 nodes --></div>
            </div>
          </div>
        </div>
        <div class="header-top-content ph" id="b1-HeaderContent">
          <div class="OSBlockWidget" data-block="BasePatterns.CustomContainer" id="$b10"><!-- nested block: 23 nodes --></div>
          <div class="OSBlockWidget" data-block="Directory_Updates.UpdateItem_Header" id="ListHeader"><!-- nested block: 36 nodes --></div>
        </div>
      </header>
      <div class="content" data-container="" id="b1-ContentWrapper">
        <div class="main-content ThemeGrid_Container" data-container="" id="b1-MainContentWrapper" role="main">
          <div class="content-middle" id="b1-Content">
            <div class="list list-group background-neutral-0 updates-list OSFillParent" data-animation-disabled="" data-list="" id="List_Updates" style="position: relative;">
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_0-$b14"><!-- nested block: 63 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_1-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_2-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_3-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_4-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_5-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_6-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_7-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_8-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_9-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_10-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_11-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_12-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_13-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_14-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_15-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_16-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_17-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_18-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_19-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_20-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_21-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_22-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_23-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_24-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_25-$b14"><!-- nested block: 96 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_26-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_27-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_28-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_29-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_30-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_31-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_32-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_33-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_34-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_35-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_36-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_37-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_38-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_39-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_40-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_41-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_42-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_43-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_44-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_45-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_46-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_47-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_48-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_49-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_50-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_51-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_52-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_53-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_54-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_55-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_56-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_57-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_58-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_59-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_60-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_61-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_62-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_63-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_64-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_65-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_66-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_67-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_68-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_69-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_70-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_71-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_72-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_73-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_74-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_75-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_76-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_77-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_78-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_79-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_80-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_81-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_82-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_83-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_84-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_85-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_86-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-478_87-$b14"><!-- nested block: 64 nodes --></div>
            </div>
          </div>
        </div>
      </div>
      <footer class="content-bottom" data-advancedhtml="" role="contentinfo">
        <div class="footer ph" id="b1-Bottom">
          <div class="OSBlockWidget" data-block="App_Common.BottomBarMenu" id="$b18"><!-- nested block: 75 nodes --></div>
        </div>
      </footer>
    </div>
    <div class="offline-data-sync" data-container=""></div>
    <div id="b1-Placeholder_CommonUI_Inside_Layout">
      <div class="OSBlockWidget" data-block="App_Common.CommonUI_InsideLayout" id="$b19"><!-- nested block: 38 nodes --></div>
    </div>
  </div>
</div>
```

### Variant 3: Updates_SingleList/loading (×2)

```html
<div class="OSBlockWidget" data-block="Layouts.Layout_MainPages_FixedTitle" id="$b1">
  <div class="OSBlockWidget" data-block="LayoutRuntime_NavigationHandler.LayoutRuntime_Top" id="b1-$b1"><!-- nested block: 0 nodes --></div>
  <div class="layout layout-side layout-native ios-bounce ubt-layout-main layout-sticky-title hide-header-on-scroll layout-gray-background" data-container="" id="b1-LayoutWrapper_Main">
    <a aria-label="Skip to Content (Press Enter)" class="skip-nav" data-link="" data-original-href="/UBTConnect/Updates_SingleList" data-showskipcontent="false">
      Skip to Content (Press Enter)
    </a>
    <div class="main" data-container="">
      <div aria-hidden="true" class="sticky-observer" data-container=""></div>
      <header class="header" data-advancedhtml="" id="b1-Header" role="banner">
        <div class="header-top-title" data-container="" id="b1-HeaderTitle">
          <div class="header-content display-flex flex-direction-column justify-content-flex-start" data-container="">
            <div class="ubt-layout-main__title" data-container="">
              <div class="OSBlockWidget" data-block="BasePatterns.Columns_Two" id="b1-$b2"><!-- nested block: 25 nodes --></div>
            </div>
          </div>
        </div>
        <div class="header-top-search" data-container="" id="b1-HeaderSearch">
          <div class="header-content display-flex flex-direction-column justify-content-flex-start" data-container="">
            <div class="ubt-layout-main__search" data-container="">
              <div class="OSBlockWidget" data-block="BasePatterns.Columns_Two" id="b1-$b3"><!-- nested block: 27 nodes --></div>
            </div>
          </div>
        </div>
        <div class="header-top-content ph" id="b1-HeaderContent">
          <div class="OSBlockWidget" data-block="BasePatterns.CustomContainer" id="$b10"><!-- nested block: 23 nodes --></div>
          <div class="OSBlockWidget" data-block="Directory_Updates.UpdateItem_Header" id="ListHeader"><!-- nested block: 26 nodes --></div>
        </div>
      </header>
      <div class="content" data-container="" id="b1-ContentWrapper">
        <div class="main-content ThemeGrid_Container" data-container="" id="b1-MainContentWrapper" role="main">
          <div class="content-middle" id="b1-Content">
            <div class="list list-group background-neutral-0 updates-list list-loading OSFillParent" data-animation-disabled="" data-list="" id="List_Updates" style="position: relative;">
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-106_0-$b14"><!-- nested block: 63 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-106_1-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-106_2-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-106_3-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-106_4-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-106_5-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-106_6-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-106_7-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-106_8-$b14"><!-- nested block: 64 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="l1-106_9-$b14"><!-- nested block: 64 nodes --></div>
            </div>
          </div>
        </div>
      </div>
      <footer class="content-bottom" data-advancedhtml="" role="contentinfo">
        <div class="footer ph" id="b1-Bottom">
          <div class="OSBlockWidget" data-block="App_Common.BottomBarMenu" id="$b18"><!-- nested block: 75 nodes --></div>
        </div>
      </footer>
    </div>
    <div class="offline-data-sync" data-container=""></div>
    <div id="b1-Placeholder_CommonUI_Inside_Layout">
      <div class="OSBlockWidget" data-block="App_Common.CommonUI_InsideLayout" id="$b19"><!-- nested block: 38 nodes --></div>
    </div>
  </div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnectLibrary.Layouts.Layout_MainPages_FixedTitle.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "OutSystemsUI_2_23.controller", "OutSystemsUI_2_23.model", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.Layouts.Layout_MainPages_FixedTitle.mvc$model", "UBTConnectLibrary.Layouts.Layout_MainPages_FixedTitle.mvc$controller", "UBTConnectLibrary.clientVariables", "NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.BasePatterns.Columns_Two.mvc$view", "OutSystemsUI_2_23.Private.PullToRefresh.mvc$view", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnectLibrary.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.controller$SetScrollShadow", "UBTConnectLibrary.controller$SetMainFixedScroll", "UBTConnectLibrary.controller$ClearTimeout", "UBTConnectLibrary.controller$RemoveScrollEvents", "OutSystemsUI_2_23.controller$LayoutDestroy", "UBTConnectLibrary.referencesHealth", "UBTConnectLibrary.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.model$ErrorMessageRec", "OutSystemsUI_2_23.controller$AddFavicon", "OutSystemsUI_2_23.controller$LayoutReady", "OutSystemsUI_2_23.controller$SetLang", "OutSystemsUI_2_23.controller$SkipToContent"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, OutSystemsUI_2_23Controller, OutSystemsUI_2_23Model, React, OSView, UBTConnectLibrary_Layouts_Layout_MainPages_FixedTitle_mvc_model, UBTConnectLibrary_Layouts_Layout_MainPages_FixedTitle_mvc_controller, UBTConnectLibraryClientVariables, NavigationHandler_LayoutRuntime_NavigationHandler_LayoutRuntime_Top_mvc_view, OSWidgets, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, OutSystemsUI_2_23_Private_PullToRefresh_mvc_view) {
    var OS = OutSystems.Internal;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;
    var View = (function(_super) {
        __extends(View, _super);
        function View() {
            var thisIsInstanceOfSuper = this instanceof _super;
            if (thisIsInstanceOfSuper == false) {
                return;
            }
            try {
                this.initialize.apply(this, arguments);
            } catch (error) {
                View.handleError(error);
                throw error;
            }
        }
        View.prototype.initialize = function() {
            _super.apply(this, arguments);
        };
        View.displayName = "Layouts.Layout_MainPages_FixedTitle";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return ["scripts/OutSystemsUI_2_23.OutSystemsUI.js", "scripts/UBTConnectLibrary.ScrollAnimations.js"];
        };
        View.getBlocks = function() {
            return [NavigationHandler_LayoutRuntime_NavigationHandler_LayoutRuntime_Top_mvc_view, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, OutSystemsUI_2_23_Private_PullToRefresh_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnectLibrary_Layouts_Layout_MainPages_FixedTitle_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnectLibrary_Layouts_Layout_MainPages_FixedTitle_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function() {
                return "";
            },
            enumerable: true,
            configurable: true
        });
        View.prototype.internalRender = function() {
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            var validationService = controller.validationService;
            var widgetsRecordProvider = this.widgetsRecordProvider;
            var callContext = controller.callContext();
            var $if = View.ifWidget;
            var $text = View.textWidget;
            var asPrimitiveValue = View.asPrimitiveValue;
            var getTranslation = View.getTranslation;
            var _this = this;
            return React.createElement("div", this.getRootNodeProperties(), React.createElement(NavigationHandler_LayoutRuntime_NavigationHandler_LayoutRuntime_Top_mvc_view, {
                inputs: {},
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    }
                },
                _validationProps: {
                    validationService: validationService
                },
                _idProps: {
                    service: idService,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                _dependencies: []
            }), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: model.getCachedValue(idService.getId("LayoutWrapper_Main.Style"), function() {
                    return ((("layout layout-side layout-native ios-bounce ubt-layout-main layout-sticky-title hide-header-on-scroll" + (((model.variables.extendedClassIn === "")) ? ("") : ((" " + model.variables.extendedClassIn)))) + ((!(model.variables.enableAccessibilityFeaturesIn)) ? ("") : (" has-accessible-features"))) + ((model.variables.isGrayBackgroundIn) ? (" layout-gray-background") : ("")));
                }, function() {
                    return model.variables.extendedClassIn;
                }, function() {
                    return model.variables.enableAccessibilityFeaturesIn;
                }, function() {
                    return model.variables.isGrayBackgroundIn;
                }),
                visible: true,
                _idProps: {
                    service: idService,
                    name: "LayoutWrapper_Main"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._extendedClassInDataFetchStatus, model.variables._enableAccessibilityFeaturesInDataFetchStatus, model.variables._isGrayBackgroundInDataFetchStatus)
            }, React.createElement(OSWidgets.Link, {
                enabled: true,
                extendedProperties: {
                    "aria-label": "Skip to Content (Press Enter)",
                    "data-showskipcontent": model.getCachedValue(idService.getId("xcFeEOKllkG2lWZVg8Cq4g.data-showskipcontent"), function() {
                        return ((model.variables.enableAccessibilityFeaturesIn) ? ("true") : ("false"));
                    }, function() {
                        return model.variables.enableAccessibilityFeaturesIn;
                    })
                },
                onClick: function() {
                    var eventHandlerContext = callContext.clone();
                    return OS.Flow.tryFinally(function() {
                        var varBag = {};
                        controller.pushDebuggerContext(eventHandlerContext);
                        controller.skipToContentOnClick$Action(controller.callContext(eventHandlerContext));
                    }, function() {
                        controller.popDebuggerContext(eventHandlerContext);
                    });
                    ;
                },
                style: "skip-nav",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "2"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, "Skip to Content (Press Enter)"), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "main",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "3"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    "aria-hidden": "true"
                },
                style: "sticky-observer",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "4"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.AdvancedHtml, {
                extendedProperties: {
                    role: "banner",
                    className: "header"
                },
                tag: "header",
                _idProps: {
                    service: idService,
                    name: "Header"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "header-top-title",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "HeaderTitle"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "header-content display-flex flex-direction-column justify-content-flex-start",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "7"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "ubt-layout-main__title",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "8"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, {
                inputs: {
                    ColumnOptions: model.getCachedValue(idService.getId("MyNzxrOIx0yEuPd6X5hUAQ.ColumnOptions"), function() {
                        return function() {
                            var rec = new UBTConnectLibraryModel.ColumnOptionsRec();
                            rec.columnBehaviourAttr = UBTConnectLibraryModel.staticEntities.uBT_ColumnBehaviour.reduceLast;
                            rec.spacingSizeAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.base;
                            rec.verticalAlignAttr = UBTConnectLibraryModel.staticEntities.uBT_VerticalAlign.center;
                            return rec;
                        }();
                    })
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    }
                },
                _validationProps: {
                    validationService: validationService
                },
                _idProps: {
                    service: idService,
                    uuid: "9",
                    alias: "2"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    left: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.AdvancedHtml, {
                            extendedProperties: {
                                className: "header-title"
                            },
                            tag: "h2",
                            _idProps: {
                                service: idService,
                                uuid: "10"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Placeholder, {
                            align: /*Default*/ 0,
                            content: _this.props.placeholders.placeholder_Header_Title,
                            gridProperties: {
                                classes: "OSInline"
                            },
                            _idProps: {
                                service: idService,
                                name: "Placeholder_Header_Title"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }))];
                    }),
                    right: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Placeholder, {
                            align: /*Default*/ 0,
                            content: _this.props.placeholders.placeholder_Header_Right,
                            style: "header-right",
                            _idProps: {
                                service: idService,
                                name: "Placeholder_Header_Right"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })];
                    })
                }
            })))), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "header-top-search",
```
(… 195 more lines in `migration/screens/Notes/analysis/sources/pretty/UBTConnectLibrary.Layouts.Layout_MainPages_FixedTitle.mvc.js`)
